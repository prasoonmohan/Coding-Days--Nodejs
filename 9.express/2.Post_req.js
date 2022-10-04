var express = require("express")

var app = express()

app.listen(8000)

app.post("/login",(req,res) => {
    res.send("login in page")
})

// need other tool  for view post requests like postman
// cant load this in chrome of other browsers