const router = require("express").Router();
const User = require("../models/User")
const bcrypt = require("bcrypt")

//register
router.post("/register",
    async (req,res)=>{
        
        try{
            //generate password
            const salt = await bcript.genSalt(10);
            const hashedPassword = await bcript.hash(req.body.password,salt)
            //create user
            const newUser = await new User({
                username:req.body.username,
                email:req.body.email,
                password: hashedPassword,
            })
            //save user
            const user = await newUser.save(); 
            res.status(200).json(user)
        } catch(err){
            console.log(err)
        }
})


//login
router.post("/login",async (req,res)=>{
    try{
    const user = await User.findOne({email:req.body.email});
    !user && res.status(404).send("User not found");
    
    const validPassword = await bcript.compare(req.body.password,user.password)
    !validPassword && res.status(400).json("wrong password")
    res.status(200).json(user)
    } catch {
        console.log(err)
    }
})

module.exports = router