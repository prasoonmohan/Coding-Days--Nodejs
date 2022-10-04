var i=0
var res = setInterval(function(){
    i++;
    console.log("set interval");
    if(i==10){
        clearInterval(res);
    }
},1000)