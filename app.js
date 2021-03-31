const express = require('express');
const bodyParser=require('body-parser');
const app=express();
require('dotenv/config');
const mongoose=require('mongoose');
const morgan=require('morgan');
const bookRouter=require('../backend/router/books');
const authorRouter=require('../backend/router/authors');
const { Author } = require('./model/Author');

//using
app.use(bodyParser.json());
app.use(morgan('tiny'));

//routers
app.use('/api/book',bookRouter);
app.use('/api/author',authorRouter);
//connect to mongodb
mongoose.connect('mongodb+srv://youssefkafa:123kafa123@libapp.u0dkt.mongodb.net/libApp-database?retryWrites=true&w=majority',{ useNewUrlParser: true,useUnifiedTopology: true, dbName:'libApp-database' } )
.then(()=>{
console.log("mongodb is connected");
}).catch(
    (err)=>{
        console.log(err);
    }
);
//
app.listen('3000', ()=>{
    console.log('server is running');
});