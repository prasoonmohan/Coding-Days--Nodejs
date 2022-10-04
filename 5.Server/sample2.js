let http = require("http")

http.createServer(function(req,res){

    res.write("<h1>server</h1>")
    res.end()

}).listen(8000)