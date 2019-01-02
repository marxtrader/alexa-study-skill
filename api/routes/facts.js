var express = require('express');
var router= express.Router();
var cors = require('cors');
var bodyParser = require('body-parser');
var postToDataBase = require('../functions/postToDataBase')

var app = express()
app.use(cors())
//router.use(cors())
// we will use get for the alexa skill, to return a random fact.
app.get('/', function(req,res){
  const fact = facts(res.body.firstName, res.body.lastName, res.body.fact)
  res.send(fact)
})

// post to add new facts to the db from the web interface. 
app.post('/', function(req, res) {
  console.log("request body = ", JSON.stringify(req.body))
  postToDataBase(req.body, function(err, data) {
    if (err) {
      console.log('Error in Post : ', err)
    } else {
      console.log('Success in Post : ', data)
    }
  })
})

module.exports = app;