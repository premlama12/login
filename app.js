const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();

//EJS
app.use(expressLayouts);
app.set('view engine','ejs');


const PORT = process.env.PORT || 5000;

app.use('/',require('./routs/index'));

app.use('/users',require('./routs/users'));

app.listen(PORT,console.log('Server Started at',{PORT}));