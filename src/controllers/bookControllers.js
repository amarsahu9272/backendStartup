const BookModel = require("../models/bookModel")

const createBook = async function (req, res) {
    let data = req.body
    let saveData = await BookModel.create(data)
    res.send({msg: saveData})
}

const getBook = async function (req, res) {
    let allBook = await BookModel.find({authorName:"akash"})
    res.send({msg: allBook})
}

module.exports.getBook = getBook
module.exports.createBook = createBook