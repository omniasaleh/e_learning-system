var mongoose= require('mongoose');
var config=require('./config.js');
var db = mongoose.connect(config.db,{
  connectTimeoutMS:10000,
  socketTimeoutMS: 5000,
  keepAlive: true,
  reconnectTries: 20,
  poolSize: 10 // Maintain up to 10 socket connections
}, 
function(error){
    if(error) console.log(error);

        console.log("connection successful");
});
mongoose.set('debug',true);
module.exports = mongoose ;
