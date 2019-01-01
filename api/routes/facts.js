var facts = require './functions/facts'
var express = require('express');
var router= express.Router();
var app = express();

router.get('/', function(req,res){
  facts = getFacts()
  res.send(facts)
})
module.exports = router;