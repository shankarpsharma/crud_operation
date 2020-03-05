const express=require('express');
const bodyParser=require('body-parser');
 
const mongoose = require('./database/db');
const user=require('./models/user');
const root=require('./route/route')

var app=express()
app.use(bodyParser.json());
app.use('/users',root);
//Server Started
app.listen(3001,()=> console.log('Server started at port:3001'));
