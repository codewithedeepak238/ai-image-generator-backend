import express from "express";
import fetch from 'node-fetch';
import POSTS from "../models/post.js";

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { prompt } = req.body;
        const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=1280&height=720&model=turbo&seed=42`;
        const response = await fetch(url);
        const buffer = await response.buffer();
        return res.status(200).json({ photo: buffer });
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
})

router.post('/post', async (req, res) => {
    try {
        const { prompt, photo } = req.body;
        if(!photo) return res.status(400).json({ error: "Enter Mandatory Details!!" });
        await POSTS.create({
            prompt,
            photo
        });
        return res.status(200).send({status:"success"});
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
})

export default router;