import dotenv from 'dotenv'
import express from 'express'
import mongoose  from 'mongoose'
import userRouter from './routers/user.route.js';
import authRouter from './routers/auth.route.js';
const app=express()
dotenv.config();
const mongoUri = process.env.MONGO;
mongoose.connect(mongoUri).then(()=>{
    console.log("Mongodb connection is successfull");
}).catch((err)=>{
    console.log(err);
});

const db = mongoose.connection;
app.use(express.json());
app.listen(3000,()=>{
    console.log("Your server is listening on port 3000");
})

app.use("/api/user",userRouter);
app.use("/api/auth",authRouter);

app.use((err,req,res,next)=>{
    const statusCode=err.statusCode || 500;
    const message=err.message || "Internal Server Errorr";
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
})