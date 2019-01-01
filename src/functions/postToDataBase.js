var mysql = require('mysql')
var express = require('express');
var router = express.Router();
var config = require('../config/config')

var postToDataBase = function(req, res, cb) {

  // ADD NEW PHONE POST ACTION  
		var message = {
			ToState:  req.ToState,
			SmsMessageSid:  req.SmsMessageSid,
			NumMedia:  req.NumMedia,
			ToCity:  req.ToCity,
			FromZip:  req.FromZip,
			FromState:  req.FromState,
			SmsStatus:  req.SmsStatus,
			FromCity: req.FromCity,
			Body:  req.Body,
			FromCountry:  req.FromCountry,
			To:  req.To.substr(1),
			ToZip:  req.ToZip,
			NumSegments:  req.NumSegments,
			MessageSid:  req.MessageSid,
			AccountSid:  req.AccountSid,
			From:  req.From,
			ApiVersion:  req.ApiVersion
		}
		// Console.log("===================================================")
		// Console.log(message)
		// Console.log("===================================================")
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

		connection.query('INSERT INTO messages SET ?', message,function(err,rows){
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