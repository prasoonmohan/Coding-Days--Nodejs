var express = require("express")

var body_parser = require("body-parser")

var app = express()

app.listen(8000,function(){
    console.log("starting...");
})

app.use(body_parser.json())


app.post("/body",(req,res) => {
    res.send(req.body.name)
})