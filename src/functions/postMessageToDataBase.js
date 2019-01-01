var mysql = require('mysql')

var reqObj = require('./constants/req.js')

postToDataBase(req, cb) {
  // ADD NEW PHONE POST ACTION
  app.post('/add', function(req, res, next){	    

		var user = {
      phone: req.sanitize('phone').escape().trim(),
      email: req.sanitize('email').escape().trim(),
      city: req.sanitize('city').escape().trim(),
      state: req.sanitize('state').escape().trim(),
      zip: req.sanitize('zip').escape().trim(),
		}
		
		req.getConnection(function(error, conn) {
			conn.query('INSERT INTO smsrecords SET ?', user, function(err, result) {
				//if(err) throw err
				if (err) {
					req.flash('error', err)
					
					// render to views/user/add.ejs
					res.render('user/add', {
						title: 'Add New User',
						phone: user.phone,
						email: user.email,
            city: user.city,
            state: user.state,
            zip: user.zip
					})
				} else {				
					req.flash('success', 'Data added successfully!')
					
					// render to views/user/add.ejs
					res.render('user/add', {
						title: 'Add New User',
						phone: '',
						email: '',
            city: '',
            state: '',
            zip: '',
					})
				}
			})
		})
	}
	else {   //Display errors to user
		var error_msg = ''
		errors.forEach(function(error) {
			error_msg += error.msg + '<br>'
		})				
		req.flash('error', error_msg)		
		
		/**
		 * Using req.body.name 
		 * because req.param('name') is deprecated
		 */ 
        res.render('user/add', { 
            title: 'Add New User',
						phone: user.phone,
						email: user.email,
            city: user.city,
            state: user.state,
            zip: user.zip
        })
    }
  })
}

