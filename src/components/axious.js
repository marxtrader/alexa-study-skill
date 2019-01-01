
// currently not used. Need to figure how to wire it up.
const axios = require('axios')
const config = require('../../config/config')

const postToServer = function() {
  const userName=document.querySelector('[type=email]')
  const password=document.querySelector('[type=password]')
  
  // TODO store url for the api server in the config.
  axios.post('http://api.marxcloud.com/', {
    userName: userName,
    password: password
  })
  .then(function (response) {
    const data = JSON.stringify(response.data)
    const content =`<h2>Welcome</h2><p>Your Email ${data.userName} has been recorded.</p>`
    document.querySelector('#two').innerHTML = content
  })
  .catch(function (error) {
    console.log(error);
  });
 }
 module.exports=postToServer;