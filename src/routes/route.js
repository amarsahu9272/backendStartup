const express = require('express');
const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('any dummy text')
});


router.get('/test-you', function (req, res) {
    console.log("I am here")
    res.send("very important text")
})

router.get('/movies/:name/:index', function (req, res) {
    const movie = ["Rang de basanti", "The shining", "Lord of the rings"]
    console.log(`person who requested:${req.params.name}`)
    if (req.params.index > movie.length || req.params.index < 0) {
        console.log("Enter Valid Index Position")
    }
    else {
        console.log(`Index position is ${req.params.index}:${movie[req.params.index]}`)
    }

    res.send(movie)
    //res.send(`Index position is ${req.params.index}:${movie[req.params.index]}`)
})

router.get('/films', function (req, res) {
    let arrObj = [
        { "id": 1, "name": "The Shining" },
        { "id": 2, "name": "Incendies" },
        { "id": 3, "name": "Rang de Basanti" },
        { "id": 4, "name": "Finding Nemo" }
    ]

    res.send(arrObj)

})

module.exports = router;