const router = require("express").Router();
const User = require("../Models/User");
const List = require("../Models/list");
//create
router.post("/addtask",async (req,res)=>{
    try {
        const {title, description ,email} = req.body;
        const existinguser = await User.findOne({email});
        if(existinguser){
        const list = new List({
            title,
            description,
            User:existinguser,
        });
        await list.save().then(()=> res.status(200).json({list}));
        existinguser.list.push(list);
        await existinguser.save();
        
    }
    } catch (error) {
        console.log(error); 
    }
});

//update

router.put("/updatetask/:id",async (req,res)=>{
    try {
        const {title, description ,email} = req.body;
        const existinguser = await User.findOne({email});
        if(existinguser){
      const list = await List.findByIdAndUpdate(req.params.id,{ title ,description});
      list.save().then(()=> res.status(200).json({message: "task updated"}));
    }
    } catch (error) {
        console.log(error); 
    }
});

//delete
router.delete("/deletetask/:id",async (req,res)=>{
    try {
        const {email} = req.body;
        const existinguser = await User.findOne(
            {email},
            { pull : {List: req.params.id}});
        if(existinguser){
       await List.findByIdAndDelete(req.params.id);
       res.status(200).json({message: "task deleted"});
    }
    } catch (error) {
        console.log(error); 
    }
});

router.get("/getTask/:id",async (req,res)=>{
   try {
     const list = await List.find({User: req.params.id }).sort({ createdAt: -1});
    if(list.length !== 0 ){  
        res.status(200).json({list : list});
      
    }else{
        res.status(200).json({message: "No task found"});
    }
   } catch (error) {
    console.log(error);
   }
   
    
});

module.exports = router;