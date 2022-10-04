let fs = require("fs")

fs.appendFile("test file.txt"," more text added",function(err){
    if(err){
        console.log("unable to load");
    }
})