const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
    title :{
        type: String,
        required:true
    },
    body :{
        type: String ,
        required:true
    },
    User :[
        {
            type: mongoose.Types.ObjectId ,
           ref: "User",
        },
       ],
},{ timestamps:true }
);

module.exports = mongoose.model("list",listSchema);