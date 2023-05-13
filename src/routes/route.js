const express = require('express');
const router = express.Router();
const intro = require('./introduction')
const employee = require('./employee')
const _ = require('underscore')

router.get('/test-me', function (req, res) {
  console.log("email from introduction module", intro.myEmail)
  intro.myFunction('amar')
  console.log("email from employee module", employee.myEmail)

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  let result = _.first(days, 4)
  console.log(`Result from underscore function is ${result}`)


  res.send('session module')
});


module.exports = router;