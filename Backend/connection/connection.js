const mongoose = require("mongoose");
const dotenv = require("dotenv");


dotenv.config();

const connection = async () => {
    try {
        await mongoose.connect(process.env.database, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to the database");
    } catch (err) {
        console.error("Database connection error:", err);
    }
};

// Call the connection function
connection();