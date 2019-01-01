var mysql = require('mysql');
var config = require('../config/config')

var loginUser = function(email, password, cb) {
  newUser=false;
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
    
  connection.query(`INSERT INTO users(email, password) VALUE ('${email}', '${password}')`, function(error,data) {
    if(error) {
      if (error.errno !== '1062') {
      console.log("loginUser Error : ", error) // if the record already exists mysql returns 1062
        cb(error, null);
      } else {
      console.log("Existing User : ", data)
      cb(null,newUser)}
    } else {
      console.log('new User : ', data)
      cb(null,!newUser)
    }
  })
}
module.exports=loginUser;
// uncomment to test function
// getDataSet('aa@bbb.com', 'lllll', function(err, rows) {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(rows)
//   }
// });
//