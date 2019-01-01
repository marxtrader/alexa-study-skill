var mysql = require('mysql');
var config = require('../config/config')

var getPhoneAssets = function(cb) {

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
      
      connection.query("Select * FROM smsrecords",function(error,rows){
        if(error) {
            cb(error,null);
        } else {
            cb(null,rows);
        }
      })
}
module.exports=getPhoneAssets;