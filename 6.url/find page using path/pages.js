var http = require("http")
var url = require("url")
var fs = require("fs")

http.createServer(function(req,res){

var path = url.parse(req.url)

fs.readFile("."+path.pathname,function(err,data){
    if(err){
        res.writeHead(404,{'content-type' : 'text/html'});
        return res.end("Error page not found !")
    }
    else{
        res.writeHead(200,{'content-type' : 'text/html'});
        res.write(data);
        res.end()
    }
})

}).listen(3000)