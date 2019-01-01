var mysql = require('mysql');
var config = require('../config/config')

var getFacts = function(cb) {

  var connection = mysql.createConnection({
      host: config.database.host,
      user: config.database.user,
      password:config.database.password,
      database: config.database.db
  });
    
  connection.connect(function(error){
    if (!!error) {
        console.log(error)
    }
  })
    
  connection.query(`SELECT * FROM facts;`, function(error,data) {
    if(error) {
      console.log("Error : ", error) 
        cb(error, null)
    } else {
      console.log('Records : ', data)
      cb(null,data)
    }
  })
}
module.exports=getFacts;