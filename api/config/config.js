// by using an object for storing data, we can change the values in one place and have it
// take effect where ever the variable is used.

var config = {
	database: {
    host:      '54.148.123.122',     // database host
    user:       'twilio',         // your database username
    password: '1qazXSW@',         // your database password
    port:       3306,         // default MySQL port
    db:       'webdev'         // your database name
},
	server: {
			host: '127.0.0.1', //also known as localhost
			port: '4001'
	},
};

module.exports = config
