const express = require('express');
const router = express.Router();

router.get('/path-params/:name/:lastname', function (req, res) {
  res.send({
    'name': req.params.name,
    'lastname': req.params.lastname
  });
});


router.get('/query-params', function (req, res) {

  res.send({
    "productName": req.query.productName,
    "productPrice": req.query.productPrice,
  })
})


module.exports = router;