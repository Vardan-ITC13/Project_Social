const router = require("express").Router();
const Post = require("../models/Post")

//create a post
router.post("/",async (res, req)=>{
    const newPost = new Post(req.body)
    try{
        const savedPost = await newPost.save()
        res.status(200).json(savedPost)
    } catch(err) {
        res.status(500).json(err)
    }
})


//update a post
router.put("/:id",async (res, req) =>{
    try{
        const post = Post.findById(req.params.id)
        if(post.userId === req.body.userId ){
            await post.updateOne({$set:req.body})
            res.status(200).json("The post updated")
        } else {
            res.status(403).json("You cant update this post ")
        }
    } catch(err) {
        res.status(500).json(err)
    }
})
//delete a post
router.delete("/:id",async (res, req) =>{
    try{
        const post = Post.findById(req.params.id)
        if(post.userId === req.body.userId ){
            await post.deleteOne({$set:req.body})
            res.status(200).json("The post deleted")
        } else {
            res.status(403).json("You cant delete this post ")
        }
    } catch(err) {
        res.status(500).json(err)
    }
})
//like a post
router.put(":/id/like", async (res, req) => {
    try{
        const post = await Post.findById(req.param.id)
        if(!post.likes.includes(req.body.userId)){
            await post.updateOne({$push:{likes:req.body.userId}})
            res.status(200).json("The post has been liked")
        } else {
            await post.updateOne({$pull:{likes:req.body.userId}})
            res.status(200).json("The post has been disliked")
        }
    } catch(err){
        res.status(500).json(err)
    }
} )


//get a post
router.get(":id",async (res, req)=> {
    try{
        const post = await Post.findById(req.param.id)
        res.status(200).json(post)
    } catch(err){
        res.status(500).json(err)
    }
})
//get timeline posts
router.get("/timeine/all", async (res, req) =>{
    try{
        const currentUser = await User.findById(req.body.userId)
        const userPost = await Post.find({userId: currentUser._id})
        const friendPosts = await Promise.all(
            currentUser.followings.map((friendId)=> {
                Post.find({userId: friendId})
            })
        )
        res.json(userPost.concat(...friendPosts))
    } catch(err){
        res.status(500).json(err)
    }
})



module.exports = router;
