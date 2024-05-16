const mongoose = require("mongoose");

const connection = async (req, res) => {
    try { await mongoose.connect("mongodb+srv://1111:1111@cluster0.1odptin.mongodb.net/")
    .then(()=>{
        console.log("connected");
    });
}
    catch (err) {
        res.status(400).json({
            message: " Not Connected ",
        });
     }
    
};
connection();