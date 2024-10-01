import express from "express";
import * as dotenv from 'dotenv';
import cors from "cors";
import connectDB from "./mongodb/connect.js";
import router from "./routes/dalleRoute.js";
import postrouter from "./routes/postRoute.js";

const PORT = process.env.PORT || 8080;

dotenv.config();


//Middlewares
const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb'}));


//Routes
app.use('/api/dalle', router);
app.use('/api/all-posts', postrouter);

app.get("/", (req, res)=>{
    return res.send("You are on Homepage!!")
})

const startServer = async ()=>{
    connectDB(process.env.MONGODB_URL);
    try{
        app.listen(PORT, ()=>console.log("Server Started!!"));
    }catch(err){
        console.log(err);
    }
}

startServer()