var mysql = require('mysql');
var config = require('../config/config')

var facts = function(firstName, lastName,fact, type, cb) {

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
    
  connection.query(`INSERT INTO facts(firstName, lastName, fact, type) VALUE ('${firstName}','${lastName}', '${fact}','${type}',)`, function(error,data) {
    if(error) {
      console.log("Error Insert Failed : ", error) 
        cb(error, null)
    } else {
      console.log('Record Put to DB', data)
      cb(null,data)
    }
  })
}
module.exports=facts;
// uncomment to test function
// getDataSet('aa@bbb.com', 'lllll', function(err, rows) {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(rows)
//   }
// });
//