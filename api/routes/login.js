var loginUser = require('../functions/loginUser')
var express = require('express');
var router= express.Router();
var app = express();

router.get('/', function(req,res){
  res.send("nothing to see here, move along, move along.")
})
router.post('/', function(req,res){
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
    res.send("<h1>No Joy</h1><p>You have an error somewhere... dig")
  }
});
module.exports = router;