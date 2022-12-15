const UserModel = require("../models/userModel")

const createUser = async function (req, res) {
    let data = req.body
    //console.log(data)
    let saveData = await UserModel.create(data)
    res.send({msg: saveData})
}

const getUser = async function (req, res) {
    let allUser = await UserModel.find()
    res.send({msg: allUser})
}

module.exports.getUser = getUser
module.exports.createUser = createUser