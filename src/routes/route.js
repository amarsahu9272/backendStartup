const express = require('express');
const router = express.Router();
const UserConroller = require("../controllers/userControllers")
const BookController = require('../controllers/bookControllers')

router.get('/test-me', function (req, res) {
    res.send('Testing-Schema')
});

router.post('/createUser', UserConroller.createUser);
router.get('/getUser', UserConroller.getUser);

router.post('/createBook', BookController.createBook);
router.get('/getBooks', BookController.getBook);

module.exports = router;