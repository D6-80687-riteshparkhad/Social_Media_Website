const router = require("express").Router();
const Post = require("../models/Post");


//create a post
router.post("/", async (req,res)=>{
    const newPost = Post(req.body)

    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    }catch(err){
        res.status(500).json(err);
    }
});

//update a post

router.put("/:id", async (req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId == req.body.userId){
            await post.updateOne({$set:req.body});
            res.status(200).json("Your post has been updated")
        }
        else{
            res.status(403).json("You can only update your own post");
        }
    }catch(err){
        res.status(500).json(err);
    }
});

//delete a post

router.delete("/:id", async (req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId == req.body.userId){
            await post.deleteOne();
            res.status(200).json("Your post has been deleted")
        }
        else{
            res.status(403).json("You can only delete your own post");
        }
    }catch(err){
        res.status(500).json(err);
    }
});

//like a post
//get a post
//get timelone posts
module.exports = router;