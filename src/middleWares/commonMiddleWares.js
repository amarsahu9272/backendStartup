const mid1 = function (req, res, next) {
    console.log("hi, I am a middleware named mid1")
    //logic
    let loggedIn = true
    if (loggedIn == true) {
        next()
    }
    else {
        res.send("please login or register")
    }
}

module.exports.mid1 = mid1