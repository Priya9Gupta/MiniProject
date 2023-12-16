const express = require('express');
const userRouter = require('./routers/UserRouter');
const ebookRouter = require('./routers/EbookRouter');
const utilRouter = require('./routers/util');


const cors = require('cors');
// initialize express
const app = express();
const port = 5000;
//Middleaware


app.use (express.json());
app.use(cors({
    origin :['http://localhost:3000']
}))
app.use( '/user',userRouter);
app.use( '/ebook',ebookRouter);
app.use( '/util',utilRouter);
app.use( express.static('./uploads'));


// starting the server

// EXPRESS IS A BACKEND FRAMEWORK
app.get('/',(req, res)=>{
    res.send('response from express');
});
app.get('/add',(req,res)=>{
    res.send('response from add');
});
app.get('/getall',(req,res)=>{
    res.send('response from getall');
});
app.get('/update',(req,res)=>{
    res.send('response from update');
});
app.get('/getbyid',(req,res)=>{
    res.send('response from getbyid');
});

app.listen(port,()=>{
    console.log('server started')});