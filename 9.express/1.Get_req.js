
var express = require("express")

var app = express();

app.listen(5000,function(){
    console.log("running...");
});

app.get("/",function (req,res){
    res.send("index page")
})

app.get("/about",function(req,res){
    res.send("about page")
})

app.get("/contact",(req,res) =>{
    res.send("contact page")
})

