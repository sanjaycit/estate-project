import dotenv from 'dotenv'
import express from 'express'
import mongoose  from 'mongoose'
const app=express()
dotenv.config();
const mongoUri = process.env.MONGO;
mongoose.connect(mongoUri).then(()=>{
    console.log("Mongodb connection is successfull");
}).catch((err)=>{
    console.log(err);
});

const db = mongoose.connection;
app.listen(3001,()=>{
    console.log("Your server is listening on port 3001");
})