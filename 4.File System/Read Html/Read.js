let http = require("http");
let fs = require("fs");

http.createServer(function(request,response){

    fs.readFile("index.html",function(err,data){
        if(err){
            console.log("cant resolve");
        }
        else{
            response.write(data);
            response.end();
        }
    })
}).listen(3000)