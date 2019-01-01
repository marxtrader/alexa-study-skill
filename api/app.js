'use strict'

const express = require('express');
var path = require('path');
var logger = require('morgan'); // logs http requests
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var request = require('request');

// user defined functions / pages

var config = require('./config/config')
var routes = require('./routes/index')
var facts = require('./routes/facts')

const app = express();

/**
 * This middleware provides a consistent API 
 * for MySQL connections during request/response life cycle
 */ 

app.set('view engine', 'pug');
app.use(logger());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// map paths to routes
app.use('/', routes);
app.use('/facts', facts);

//app.set('public', path.join(__dirname, 'public'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));

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
      res.render('error', {
          title: 'Error',
          message: err.message,
          error: err.status
      });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
      message: err.message,
      error: {}
  });
});

const server = app.listen(config.server.port, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
