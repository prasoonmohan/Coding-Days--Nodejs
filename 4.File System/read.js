let fs = require("fs")

// three arguments
// 1.fie name
// 2.code converter ( utf8 ) used to convert codes to letter cant see characters without using this
// 3. function 
// function return two arguments
// 3.1 error
// 3.3 data

fs.readFile("test file.txt","utf8",function(err,data){
    if(err){
        console.log("uanble to open"); 
    }
    else{
        console.log(data);
    }
})