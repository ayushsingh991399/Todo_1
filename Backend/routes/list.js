const router = require("express").Router();
const User = require("../Models/User");
const List = require("../Models/list");
//create
router.post("/addtask", async (req, res) => {
    try {
        const { title, description, id } = req.body;

        // Validate request body
        if (!title || !description) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const existingUser = await User.findById(id); // Pass id directly as a string
        if (!existingUser) {
            return res.status(404).json({ error: "User not found" });
        }

        const list = new List({
            title,
            description,
            User: existingUser, // Store the user ID instead of the whole user object
        })
        await list.save().then(() => res.status(200).json({message: "Task added successfully"}));
        existingUser.list.push(list); // Store the list ID in the user's list array
        await existingUser.save();
    } catch (error) {
        console.error("Error adding task:", error);
        res.status(500).json({ error: error.message });
    }
   
});

//update

router.put("/updatetask/:id", async (req, res) => {
    try {
        const { title, description } = req.body;
        const list = await List.findByIdAndUpdate(
            req.params.id,
            { title, description },
            { new: true } // This option returns the updated document
        );
        if (list) {
            res.status(200).json({ message: "Task updated", list });
        } else {
            res.status(404).json({ message: "Task not found" });
        }
    } catch (error) {
        console.error("Error updating task:", error);
        res.status(500).json({ error: error.message });
    }
   
});

//delete
router.delete("/deletetask/:id",async (req,res)=>{
    try {
        const { id } = req.body;
        const existingUser = await User.findByIdAndUpdate(
            id ,
            { $pull: { list: req.params.id } },
            { new: true }
        );
        if(existingUser){
            await List.findByIdAndDelete(req.params.id).then(()=>{
                res.status(200).json({ message: "Task deleted successfully" });
            })
        }
     // Find and delete the task
    } catch (error) {
        console.error("Error deleting task:", error);
        res.status(500).json({ error: error.message });
    }
  
});


router.get("/getTask/:id",async (req,res)=>{
    try {
        const userId = req.params.id;
        // Find and sort tasks
        const list = await List.find({ User: userId }).sort({ createdAt: -1 });

        if (list.length > 0) {
            res.status(200).json({ list });
        } else {
            res.status(200).json({ message: "No tasks found" });
        }
    } catch (error) {
        console.error("Error fetching tasks:", error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;