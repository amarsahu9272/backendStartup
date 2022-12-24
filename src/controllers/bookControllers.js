const BookModel = require("../models/bookModel")

const createBook = async function (req, res) {
    let data = req.body
    let saveData = await BookModel.create(data)
    res.send({ msg: saveData })
}

const getBook = async function (req, res) {
    let allBook = await BookModel.find()//finall objects in database
    let allAkash = await BookModel.find({ authorName: "akash" })//finall akashObjects in database
    let count = await BookModel.find({ authorName: "akash" }).count()//finall akashObjects&count in database
    let countAll = await BookModel.find().count()//finall objects&count in database
    let specificBook = await BookModel.find({ $or: [{ authorName: "akash" }, { isPublished: true }] })//finall objects in database if either of condition is true
    let selectElement = await BookModel.find().select({ bookName: 1, authorName: 1, _id: 0 })//finall objects in database and selects only particular elements from that object that we want
    let sortedAll = await BookModel.find().sort({ sales: -1 })//finall objects in database in sorted order of that condition
    let first2 = await BookModel.find().limit(2)//find only first 5-objects in database
    let first3 = await BookModel.find().limit(3).select({ bookName: 1, authorName: 1, _id: 0 })
    let skip2index = await BookModel.find().skip(2).select({ bookName: 1, authorName: 1, _id: 0 })//skip the first 2-objects and return other from database
    //pagination
    let page = req.query.page
    let skipPages = await BookModel.find().skip(2 * (page - 1)).select({ bookName: 1, authorName: 1, _id: 0 }).limit(3)//skip the first 2-pages and return other from database
    // let allBook1 = await BookModel.find({authorName:{$eq:"Pritesh"}})//author:"pritesh"
    // let allBook1 = await BookModel.find({authorName:{$ne:"Pritesh"}})
    // let allBook1 = await BookModel.find({sales:{$eq:20}})//sales:20
    // let allBook1 = await BookModel.find({sales:{$gt:10}})//sales:sales>10
    // let allBook1 = await BookModel.find({sales:{$lt:10}})//sales:sales<20
    // let allBook1 = await BookModel.find({sales:{$lte:10}})//sales:sales<20
    // let allBook1 = await BookModel.find({sales:{$gte:10}})//sales:sales<20
    // let allBook1 = await BookModel.find({ $or: [{ sales: { $eq: 20 } }, { sales: { $eq: 4 } },{ sales: { $eq: 0 } }] })
    // let allBook1 = await BookModel.find({ sales: { $in: [20, 4, 0] } })
    // let allBook1 = await BookModel.find({ sales: { $nin: [20, 4, 0] } })
    // let allBook1 = await BookModel.find({$and:[{ sales: { $gt: 3 }, sales: {$lt: 20 } }]})//inBetween 3to10
    // let allBook1 = await BookModel.find({ sales: { $gt: 4, $lt: 20 } })//inBetween 4to20
    



    // res.send({ msg: allBook, count: count, allBooks: countAll, specificBook: specificBook,selectElement: selectElement, sortedAll: sortedAll,first2: first2,skip2index: skip2index,skipPages: skipPages})

    res.send({ allBook1: allBook1 })

}

module.exports.getBook = getBook
module.exports.createBook = createBook