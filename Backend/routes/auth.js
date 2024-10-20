const router = require("express").Router();
const User = require("../Models/User");
const bcrypt = require("bcrypt");
//sign up
router.post("/register", async (req, res) => {
    try {
      const { email, username, password } = req.body;
  
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(409).json({ message: "Email is already in use" });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ email, username, password: hashedPassword });
      await newUser.save();
  
      res.status(201).json({ message: "Signup is successful" });
    } catch (error) {
      console.error("Error registering user:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
//signin
router.post("/login", async (req, res) => {
  try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
          return res.status(400).json({ message: "Invalid email " });
      }

      const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
      if (!isPasswordCorrect) {
          return res.status(400).json({ message: "Invalid password" });
      }

      const { password, ...others } = user._doc;
      res.status(200).json({ user: others });
  } catch (e) {
      console.error("Error logging in user:", e);
      res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;