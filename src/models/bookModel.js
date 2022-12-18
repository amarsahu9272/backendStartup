const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    bookName: String,
    authorName: String,
    tags: [String],
    date: {
        type: Date,
        default: Date.now
    },
    isPublished: { type: Boolean },
    prices: { indianPrice: String, europeanPrice: String },
    sales: { type: Number, default: 10 }

}, { timestamps: true });

module.exports = mongoose.model('book', bookSchema) 