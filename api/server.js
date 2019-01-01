const express = require('express');
var http = require('http');
var path = require('path');
var cookieParser = require('cookie-parser');
const es6Renderer = require('express-es6-template-engine');
var logger = require('morgan'); // logs http requests
var bodyParser = require('body-parser');
var config = require('./config/config');
var cors = require('cors');
var request = require('request');
var loginUser = require('./functions/loginUser')
//var router = express.Router();
//var login = require('./routes/login');

// instanciate the express object.
var app = express();

//set view engine
//app.engine('html', es6Renderer);
//app.set('view engine', 'html');

//create static routes. These directories contain static assets (CSS, javacript's)
//app.use(express.static(path.join(__dirname, 'views')));

//app.use('/', routes);
//app.use('/login', login);

// cross origin resource sharing. This allows all clients to make calls to the server. You can configure this module further by creating white lists. For example. If you sell access to your api, you can restrict access to non subscribers.
app.use(cors());

//the body parser structures the request object so we can more easily address the data.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

//creates a log of server requests 
app.use(logger());

app.get('/', function(req,res){
  res.send("nothing to see here, move along, move along.")
})
app.post('/', function(req,res){
  if (req.body) {
  console.log("req body : ",req.body)
  console.log("email : ", req.body.email)
  console.log("password : ", req.body.password)
    // Try to put the record to the db, if it errors, the user exists. 
    // this is really poor error checking and there is no validation.
    loginUser(req.body.email, req.body.password, function(err, newUser) {
      console.log ("received email as : ", req.body.email)
      console.log ("received password as : ", req.body.password)
      if (!newUser) { //
        var resText = {
          body: `<h4>Welcome Back ${req.body.email}</h4>`
        }
        res.send(resText)
      } else {
        var resText = {
          body: `<h4>Welcome ${req.body.email}. Hope you enjoy your stay</h4>`
        }
        res.send(resText)
        console.log("resText (return text to html) :", resText)
      }
    })

  }else{
    //No joy
    res.send("<h2>We are having a problem processing the request</h2>")
  }
});
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
      res.status(err.status || 500);
      console.log("Error 500")
      // res.render('error', {
      //     title: 'Error',
      //     message: err.message,
      //     error: err.status
      // });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  console.log("Error 500")
  // res.render('error', {
  //     message: err.message,
  //     error: {}
  // });
});

// see config/config where you can set these variables. 
const server = app.listen(config.server.port, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});

