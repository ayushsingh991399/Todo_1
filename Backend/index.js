const express = require("express");
require("./connection/connection.js");
const app = express();
app.get("/",(req,res)=>{
    res.send("Hello World");
});
app.listen(9000,()=>{
    console.log("Server is running on port 9000");
});