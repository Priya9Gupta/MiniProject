const { Schema, model } = require('../connection');

const myschema = new Schema({

    Title: String,
    Description: String,
    Image: String,
    File: String,
    Author: String,
    Year: Number,
    Type: String,
    Category: String,
    CreatedAt: Date


});
module.exports = model('ebook', myschema);