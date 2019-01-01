var mysql = require('mysql');
var config = require('../config/config')

var getDataSet = function(param, cb) {

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
      
      connection.query(`Select * FROM messages WHERE ToPhone = ${param}`,function(error,rows){
        if(error) {
            cb(error,null);
        } else {
            cb(null,rows);
        }
      })
}
module.exports=getDataSetDetail;

// var myConnection  = require('express-myconnection')
// var dbOptions = {
//   host:      config.database.host,
//   user:       config.database.user,
//   password: config.database.password,
//   port:       config.database.port, 
//   database: config.database.db
// }
// /**
//  * 3 strategies can be used
//  * single: Creates single database connection which is never closed.
//  * pool: Creates pool of connections. Connection is auto release when response ends.
//  * request: Creates new connection per new request. Connection is auto close when response ends.
//  */ 
// app.use(myConnection(mysql, dbOptions, 'single'))