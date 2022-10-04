var http = require("http");

http.createServer(function(request,response){

    response.write("<h1>hello this is my server</h1>");
    response.end();

}).listen(1122);