const mongoose = require('mongoose');

const url="mongodb+srv://PriyaGupta:630640Priya@cluster0.ksotoud.mongodb.net/PriyaDB?retryWrites=true&w=majority"
//asynchronous function- return Promise Object
// means funcion runs continuously according to the sequence 
mongoose.connect(url)
.then((result) => {
    //run when true
    console.log('database Successfully connected');
}).catch((err) => {
    //run when error
    console.log(err);
});
module.exports = mongoose ;
