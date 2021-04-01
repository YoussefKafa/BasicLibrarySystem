const express = require('express');
const bodyParser=require('body-parser');
const app=express();
require('dotenv/config');
const mongoose=require('mongoose');
const morgan=require('morgan');
const bookRouter=require('./router/books.js');
const authorRouter=require('./router/authors');
const { Author } = require('./model/Author.js');
const { Book } = require('./model/Book.js');
const PORT = process.env.PORT || 5000;
//using
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use('/api/book',bookRouter);
app.use('/api/author',authorRouter);
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
app.listen(PORT, () => console.log(`Listening on ${ PORT }`));