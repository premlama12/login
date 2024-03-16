const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose')


const app = express();

//DB config

const db = require('./config/keys').MongoURI;


//connect to Mongo
mongoose.connect(db,{useNewUrlParser: true})
    .then(() => console.log("MongoDB Connected...."))
    .catch(err => console.log(err));



//EJS
app.use(expressLayouts);
app.set('view engine','ejs');


const PORT = process.env.PORT || 5000;

app.use('/',require('./routs/index'));

app.use('/users',require('./routs/users'));

app.listen(PORT,console.log('Server Started at',{PORT}));