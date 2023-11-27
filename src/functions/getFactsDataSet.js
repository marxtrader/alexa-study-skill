var mysql = require('mysql');
var config = require('../../config/config')

var getFactsDataSet = (cb) => {

    var connection = mysql.createConnection({
        host: '127.0.0.1',
        user: 'user',
        password: 'password',
        database: 'webdev'
    });
      
    connection.connect(function(error){
      if (!!error) {
          console.log(error)
      }
    })
      
    connection.query("SELECT * FROM facts",function(error,rows){
      if(error) {
          cb(error,null);
      } else {
        console.log(rows)
          cb(null,rows);
      }
    })
}
module.exports = getFactsDataSet;

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
