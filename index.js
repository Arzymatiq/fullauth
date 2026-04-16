import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from 'cors'
import router from "./src/router/router.js";

dotenv.config()
const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use("/auth",router)

async function start() {
    try{
        const PORT = process.env.PORT || 5000
        const URL_DB = process.env.URL_DB

        await mongoose.connect(URL_DB)
        app.listen(PORT , () => {
            console.log(`server work on http://localhost:${PORT}`);
        })
    }catch(e){
        throw new Error(e.message)
    }
}
start()