const express = require('express');
const bodyParser=require('body-parser');
const app=express();
require('dotenv/config');
const mongoose=require('mongoose');
const morgan=require('morgan');
const bookRouter=require('../backend/router/books');
const authorRouter=require('../backend/router/authors');
const { Author } = require('./model/Author');
const { Book } = require('./model/Book');

//using
app.use(bodyParser.json());
app.use(morgan('tiny'));

//routers
app.use('/api/book',bookRouter);
app.use('/api/author',authorRouter);
app.use(express.static(__dirname + '/dist/'));
app.use('/src/assets', express.static(__dirname + '/src/assets/'));
app.set('port', (process.env.PORT || 3000));
//connect to mongodb
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://youssefkafa:123kafa123@libapp.u0dkt.mongodb.net/libApp-database?retryWrites=true&w=majority',{ useNewUrlParser: true,useUnifiedTopology: true, dbName:'libApp-database' } )
.then(()=>{
console.log("mongodb is connected");
}).catch(
    (err)=>{
        console.log(err);
    }
);
//
app.listen(process.env.PORT ||5000);