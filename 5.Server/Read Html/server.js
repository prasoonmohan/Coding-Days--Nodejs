let http = require("http")
let fs = require("fs");


http.createServer(function(req,res){

    fs.readFile("index.html",function(err,data){
        if(err){
            console.log("cant resolve");
        }
        else{
            res.write(data)
            res.end()
        }
    })
}).listen(3000)