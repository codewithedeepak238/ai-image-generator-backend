import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    prompt:{
        type: String,
        required: true
    },
    photo:{
        type: String,
        required: true
    }
}, {timestamps: true})

const POSTS = mongoose.model("Post", PostSchema);
export default POSTS;