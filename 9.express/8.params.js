// show name of user in order of current id

var express = require("express")
var app = express()

app.listen(8000)

app.get("/profiles",(req,res)=>{
    res.send("profile page")
})

var profiles = {
    "1" : {
        "name" : "prasoon",
        "age" :  20
    },
    "2" : {
        "name" : "aswin",
        "age" : 21
    },
    "3" : {
        "name" : "ajay",
        "age" : 20
    }
}

app.get("/profiles/:id",(req,res)=>{
    let current_id = req.params.id;
    let current_profile = profiles[current_id]
    res.send(current_profile.name)
})