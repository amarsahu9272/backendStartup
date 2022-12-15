//import mongoose from 'mongoose';
const mongoose = require('mongoose')
//const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
    firstName: String, 
    lastName: String,
    mobile: {
        type: String,
        unique: true,
        require: true
    },
    emailId: String,
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"]
    },
    age: Number,

}, { timestamps: true });

module.exports = mongoose.model('user', userSchema)