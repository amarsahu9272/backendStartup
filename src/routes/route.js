const express = require('express');
const router = express.Router();

let players =
    [
        {
            "name": "manish",
            "dob": "1/1/1995",
            "gender": "male",
            "city": "jalandhar",
            "sports": [
                "swimming"
            ]
        },
        {
            "name": "gopal",
            "dob": "1/09/1995",
            "gender": "male",
            "city": "delhi",
            "sports": [
                "soccer"
            ]
        },
        {
            "name": "lokesh",
            "dob": "1/1/1990",
            "gender": "male",
            "city": "mumbai",
            "sports": [
                "soccer"
            ]
        },
    ]


const player = []

router.post('/players', function (req, res) {
    const { name, dob, city, gender, sports } = req.body
    if (!name || !city || !dob || !gender || !sports) {
        return res.send('All Fields Are Mandatory')
    }

    const playerDetails = players.find(serch => serch.name === req.body.name)

    if (playerDetails) {
        return res.send('player already present')
    }
    else {
        players.push(req.body)
        return res.send(players)
    }

})


module.exports = router;