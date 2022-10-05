const MongoClient = require("mongodb").MongoClient;
const connection_string = "mongodb://localhost:27017/store"

MongoClient.connect(connection_string,(err,client)=>{
    if(err) throw err
    console.log("mongodb running....");
})