const express = require('express');
const router = express.Router();

router.get('/test-get', function (req, res) {
    console.log("/test-get")
    res.send({ a: 1, b: 2 })
})

router.post('/test-post', function (req, res) {
    console.log("test-post")
    res.send([1, 2, 3, 4])
})

router.post('/test-post1', function (req, res) {
    console.log(req.body.user)
    res.send({ a: 1, b: 2 })
})

router.post('/test-post2', function (req, res) {
    let arr = [12, 24]
    let ele = req.body.element
    arr.push(ele)
    res.send({ mesg: arr, status: true })
})


module.exports = router;