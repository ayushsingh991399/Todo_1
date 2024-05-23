const router = require("express").Router();
const User = require("../Models/User");
const bcrypt = require("bcrypt");
//sign up
router.post("/register",async (req,res)=>{
    try {
         const { email,username,password } = req.body;
        const saltround = 10;
        const hashpassword = await bcrypt.hash(password, saltround);
         const user = new User({username,email,password:hashpassword});
         await user.save().then(()=> res.status(200).json({user: user})
    );
    } catch(e){
        res.status(400).json(e);
    }
});

//signin
router.post("/login",async (req,res)=>{
    try {
    const user = await User.findOne({email: req.body.email});
    if(!user){
        res.status(400).json({message:"email already exists"});
    }

    const ispasswordcorrect = await bcrypt.compare(
        req.body.password,
         user.password
        );
        if(!ispasswordcorrect){
            res.status(400).json({message:"password is Not correct"});
        }
        const {password, ...others} = user._doc;
        res.status(200).json({ user:others});

    } catch(e){
        res.status(400).json({message:"user Already exists"});
    }
});

module.exports = router;