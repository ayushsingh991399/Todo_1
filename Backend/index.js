const express = require("express");
const app = express();
const cors = require("cors");


require("./connection/connection.js");
const auth = require("./routes/auth.js");
const list = require("./routes/list.js");
app.use(express.json());
app.use(cors());
app.get("/",(req,res)=>{
    res.send("Welcome to Todo!");
});

app.use("/api/v1", auth);
app.use("/api/v2", list);
app.listen(9000,()=>{
    console.log("Server is running on port 9000");
});