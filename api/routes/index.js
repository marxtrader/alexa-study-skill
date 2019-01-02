var express = require('express');
var router= express.Router();
var app = express();

// we will use get for the alexa skill, to return a random fact.
router.get('/', function(req,res){
  res.send('Nothing to see here, move along, move along')
})

module.exports = router;