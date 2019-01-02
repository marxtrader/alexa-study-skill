// for interfacing with your mysql database. 

var mysql = require('mysql');
var config = require('../config/config')

var getSetUser = function(user, cb) {

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

      // work out your sql statement here
     const query = `INSERT INTO config.database.db (email, password) SELECT * FROM (SELECT 'email', 'password') AS tmp WHERE NOT EXISTS;`
      
      connection.query(query,function(error,rows){
        if(error) {
            cb(error,null);
        } else {
            console.log(rows)
            cb(null,rows);
        }
      })
}
module.exports=getSetUser;