var read = require("readline-sync")

var value1 = read.question("enter first number : ")
var value2 = read.question("Enter second number : ")

if(value1 > value2){
    console.log(value1 +  " is greater than " +value2);
}
else{
    console.log(value2 +  " is greater than " +value1);
}