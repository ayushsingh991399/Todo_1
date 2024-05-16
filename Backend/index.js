const express = require("express");
require("./connection/connection.js");
const app = express();
const auth = require("./routes/auth.js");
app.get("/",(req,res)=>{
    res.send("Hello World");
});
app.use(express.json());
app.use("/api/v1",auth);
app.listen(9000,()=>{
    console.log("Server is running on port 9000");
});