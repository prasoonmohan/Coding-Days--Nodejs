var express = require("express")

var body_parser = require("body-parser")

var app = express()

app.listen(8000,function(){
    console.log("starting...");
})

// including body-parse as middleware
// can't access body without this code
app.use(body_parser.urlencoded({ extended : false }))

// print body part
app.post("/body",(req,res) => {
    res.send(req.body)
})