let fs = require("fs")

fs.unlink("test file.txt",function(err){
    if(err){
        console.log("cant resolve");
    }
})