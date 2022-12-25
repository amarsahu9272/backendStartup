const express = require('express');
const router = express.Router();
const UserConroller = require("../controllers/userControllers")
const BookController = require('../controllers/bookControllers')
const CommonMiddleware = require("../middleWares/commonMiddleWares")

router.get('/test-me', function (req, res) {
    res.send('Testing-Schema')
});

router.post('/createUser', UserConroller.createUser);
router.get('/getUser', UserConroller.getUser);

router.post('/createBook', BookController.createBook);
router.get('/getBooks', BookController.getBook);


router.get('/basicRoute',CommonMiddleware.mid1, UserConroller.basicCode)

module.exports = router;