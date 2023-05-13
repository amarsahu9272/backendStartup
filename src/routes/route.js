const express = require('express');
const router = express.Router();

router.get('/missing', function (req, res) {
  const arr = [1, 2, 3, 5, 6, 7, 8, 9];
  let n = arr[arr.length - 1];
  let missingNumber;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  missingNumber = (n * (n + 1)) / 2 - sum;
  res.send({ data: missingNumber })

})

router.get('/missing2', function (req, res) {
  const arr = [1, 2, 3, 5, 6, 7, 8, 9];
  // let arr = [33, 34, 35, 37, 38];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let missingNumber;
  let n = arr[arr.length - 1];
  let m = arr[0] - 1;
  missingNumber = (n * (n + 1) / 2) - (m * (m + 1) / 2) - sum;
  res.send({ data: missingNumber })
})
module.exports = router;
