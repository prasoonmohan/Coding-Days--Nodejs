var express = require("express")

 var app = express()

 app.listen(8000);
 
 app.use(function(req,res,next){

    // create middleware using app.use
    console.log("this is middleware");
    // res.send("fisrt run middleware then use next() to run or jump to other outputs")
    next()
    
 })

 app.get("/",(req,res) =>{
    res.send("only shown when using next() in middleware")
 })