var mysql = require('mysql')
var express = require('express');
var router = express.Router();
var config = require('../../config/config')

var postToDataBase = function(data, cb) {

    console.log("first name : ", data.firstName)
    console.log("last name : ", data.lastName)
    console.log("first name : ", data.textarea)

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

		connection.query('INSERT INTO facts SET ?', message,function(err,rows){
			//if(err) throw err
			if (err) {		
				// render to views/error else pass data to call back function cb.
				res.render('error', {
					title: 'Error',
					message: err.message,
					error: err.status
				});
				cb(err, null)
			} else {				
				cb(null, true)
			}
		})
};
module.exports=postToDataBase;