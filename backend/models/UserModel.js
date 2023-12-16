// const mongoose = require('../connection');
//model and schema present in a mongoose folder
const { Schema, model } = require('../connection');

const myschema = new Schema({
   Fullname: String,
   
   //string type 
   Email: String,
   Password: String,
});
module.exports = model('user', myschema);

