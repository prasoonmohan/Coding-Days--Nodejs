
// import fs and add to program
var fs = require("fs");


//    write file has 3 arguments
// 1st argu : file name
// 2nd argu : file content
// 3rd argu : error handling function
fs.writeFile("test file.txt","hi how are you",function(err){
    
    
    if(err){
        colsole.log("unable to load")
    }

})