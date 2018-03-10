const express=require('express');
const JWT=require('jsonwebtoken');
const config=require('./config.js');
const app=express();
const login=require('./router/login.js');
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.use('/login',login);
app.listen('5000',()=>console.log("server listen to 5000"));
