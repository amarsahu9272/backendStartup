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

const basicCode = async function (req,res){
    console.log("hey man, congrates you have reached handler")
    res.send({msg:"this is coming from controlller handler"})
}

module.exports.getUser = getUser
module.exports.createUser = createUser
module.exports.basicCode = basicCode