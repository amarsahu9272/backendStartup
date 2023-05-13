const express = require('express');
const router = express.Router();

// In JavaScript, path parameters are typically used in the context of routing,
// where a URL path is parsed and values are extracted from it to determine which page or resource to display.

// Path parameters are parts of the URL path that are variable, 
// and are often denoted by a colon (:) followed by a parameter name.
// For example, in the URL /users/:userId/posts/:postId, :userId and :postId are path parameters.

// path-parameters are used to load different items/page based on a variable in the URL
// and Parameters variable name is not visible in the URL
router.get('/users/:userId/posts/:postId', (req, res) => {
  const userId = req.params.userId;
  const postId = req.params.postId;
  res.send(`User ID: ${userId}, Post ID: ${postId}`);
});
// When a GET request is made to this route, Express automatically extracts 
// the values of the userId and postId parameters from the URL and stores them in the 
// req.params object. We can then access these values using req.params.userId and req.params.postId.

router.get('/path-params/:name/:lastname', function (req, res) {
  res.send({
    'name': req.params.name,
    'lastname': req.params.lastname
  });
});





// In JavaScript, query parameters are a common way to pass information 
// from the client-side (e.g., a web browser) to the server-side. 
// Query parameters are typically appended to the end of a URL and are indicated by a question mark (?) 
// followed by one or more key-value pairs separated by an ampersand (&).

// query params is used for filters and Searches
// and query Parameters variable name is visible in the URL itself
router.get('/query-params', function (req, res) {

  res.send({
    "productName": req.query.productName,
    "productPrice": req.query.productPrice,
  })
})
// When a GET request is made to this route, Express automatically extracts 
// the values of parameters from the URL and stores them in the 
// req.query object. We can then access these values using req.query.productName and req.query.productPrice.
// filter out all the numbers that are greater than "input" ( (input is received from query params)
let myArr = [23, 45, 67, 281394, 32424, 423, 24, 42323, 4, 234, 12, 34]
router.post("/postQueryLength", function (req, res) {
  let input = req.query.input
  let finalArr = []
  for (i = 0; i < myArr.length; i++) {

    if (myArr[i] > input)
      finalArr.push(myArr[i])
  }
  res.send({ data: finalArr, status: true })
})

module.exports = router;