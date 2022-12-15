const express = require('express');
const router = express.Router();
const UserModel = require('../models/userModel.js')
const UserConroller = require("../controllers/userControllers")

router.get('/test-me', function (req, res) {
    res.send('Testing-Schema')
});

router.post('/createUser', UserConroller.createUser);


router.get('/getUser', UserConroller.getUser);


module.exports = router;