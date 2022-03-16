const mongoose=require('mongoose')

mongoose.connect(
    "mongodb://localhost:27017/bitspot");

mongoose.connection.once('open',function(){console.log("Working ig")}).on('error',function(){console.log("Error is:",error)});