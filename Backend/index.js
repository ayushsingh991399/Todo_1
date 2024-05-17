const express = require("express");
const app = express();
require("./connection/connection.js");
const auth = require("./routes/auth.js");
const list = require("./routes/list.js");
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("Hello World");
});

app.use("/api/v1",auth);
app.use("/api/v2",list);
app.listen(9000,()=>{
    console.log("Server is running on port 9000");
});