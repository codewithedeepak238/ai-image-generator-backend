import express from "express";
import POSTS from "../models/post.js";

const postrouter = express.Router();

postrouter.get('/', async (req, res)=>{
    const allPosts = await POSTS.find({});
    return res.status(200).json({allPosts: allPosts});
})

export default postrouter;