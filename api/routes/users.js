const router = require("express").Router();
const User = require('../models/User');
const bcript = require("bcrypt")

//update user
router.put("/:id",async (res, req) => {
    if(res.body.userId === req.params.id || req.body.isAdmin){
        if(req.body.password){
            try{
                const salt = await bcript.genSalt(10);
                req.body.password = await bcript.hash(rq.body.password,salt)
            } catch {
                return res.status(500).json(err)
            }
        }
        try{
            const user = await User.findByIdAndUpdate(req.params.id,{
                $set: req.body,
            })
            res.status(200).json("Account updated")
        } catch {
            return res.status(500).json(err)
        }
    } else {
        return res.status(403).json("You can update only your account")
    }
})

//delete user
router.delete("/:id",async (res, req) => {
    if(res.body.userId === req.params.id || req.body.isAdmin){
        try{
            const user = await User.findByIdAndDelete(req.params.id)
            res.status(200).json("Account deleted")
        } catch {
            return res.status(500).json(err)
        }
    } else {
        return res.status(403).json("You can delete only your account")
    }
})

//get one user 
router.get("/:id", async (req,res)=>{
    try{
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    }catch(err){
        res.status(500).json(err)
    }
})
//follow a user
router.put("/:id/follow", async (req, res) => {
    if(req.body.userId !== req.params.id){
        try{
            const user = await User.findById(req.params.id)
            const currentUser = await User.findById(req.body.userId)
            if(!user.followers.includes(req.body.userId)){
                await user.updateOne({$push:{followers: req.body.userId}})
                await currentUser.updateOne({$push:{followings: req.params.id}})
                res.status.apply(200).json("User has been followed")
            } else{
               res.status(403).json("You allready follow this user")
            }
        } catch(err) {
            res.status(403).json(err)
        }
    } else {
        res.status(403).json("You cant follow yourself")
    }
})

//unfollow a user 
router.put("/:id/unfollow", async (req, res) => {
    if(req.body.userId !== req.params.id){
        try{
            const user = await User.findById(req.params.id)
            const currentUser = await User.findById(req.body.userId)
            if(!user.followers.includes(req.body.userId)){
                await user.updateOne({$pull:{followers: req.body.userId}})
                await currentUser.updateOne({$pull:{followings: req.params.id}})
                res.status.apply(200).json("User has been unfollowed")
            } else{
               res.status(403).json("You dont follow this user")
            }
        } catch(err) {
            res.status(403).json(err)
        }
    } else {
        res.status(403).json("You cant unfollow yourself")
    }
})






module.exports = router