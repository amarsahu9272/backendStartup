const express = require('express');
const dotenv = require("dotenv");
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const app = express();
// const cors = require("cors");

dotenv.config();
// app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.set("strictQuery", false);
//connecting nodejs app with mongoDb
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err))

app.use('/', route);

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});