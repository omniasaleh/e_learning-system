const express=require('express');
const JWT=require('jsonwebtoken');
const config=require('../config.js');
var request = require('request');
const bodyParser = require('body-parser');
const router = express.Router();
router.use(bodyParser.json());
router.post('/:name/:hashval',(req,res)=>{
  var body={
    name:req.params.name,
    hasval:req.params.hashval
  };
  console.log(body);
  JWT.sign({body},config.secret,(err,token)=>{
    res.json({
      token
    });
  });
});
module.exports=router;
