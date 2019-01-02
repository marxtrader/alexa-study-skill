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

// instanciate the express object.
var app = express();

//set view engine
//app.engine('html', es6Renderer);
//app.set('view engine', 'html');

//create static routes. These directories contain static assets (CSS, javacript's)
//app.use(express.static(path.join(__dirname, 'views')));

// cross origin resource sharing. This allows all clients to make calls to the server. You can configure this module further by creating white lists. For example. If you sell access to your api, you can restrict access to non subscribers.
app.use(cors());

//the body parser structures the request object so we can more easily address the data.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

//creates a log of server requests 
app.use(logger());

app.get('/', function(req,res){
  const fact = facts(res.body.firstName, res.body.lastName, res.body.fact)
  res.send(fact)
})

// post to add new facts to the db from the web interface. 
app.post('/', function(req, res) {
  //postToDataBase(req.body)
  console.log("request body > ", req.body)
})

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

