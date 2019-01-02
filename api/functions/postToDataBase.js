var mysql = require('mysql')
var config = require('../../config/config')

var postToDataBase = function(data, cb) {

    console.log("first name : ", data.firstName)
    console.log("last name : ", data.lastName)
    console.log("fact : ", data.fact)
    console.log("topic : ", data.topic)
    console.log("property : ", data.property)
    
		var connection = mysql.createConnection({
			host: config.database.host,
			user: config.database.user,
			password:config.database.password,
			database: config.database.db
		});
		
		connection.connect(function(error){
			if (!!error) {
					cb(error, null)
			}
		})

		connection.query(`INSERT INTO facts(firstName, lastName, fact, topic, property) VALUE ('${data.firstName}','${data.lastName}', '${data.fact}', '${data.topic}', '${data.property}');`, function(err,rows){
			//if(err) throw err
			if (err) {		
				cb(err, null)
			} else {				
				cb(null, true)
			}
		})
};
module.exports=postToDataBase;