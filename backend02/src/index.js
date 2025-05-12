//require('dotenv').config({path: './env'})
import express from 'express'
// const app = express()
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import { DB_NAME } from './constants.js';
import connectDB from './db/index.js';
import { app } from './app.js';

dotenv.config({ path: './.env' });



console.log("✅ MONGO_URI = ", process.env.MONGO_URI);

connectDB()
.then(() => {
    app.listen(process.env.PORT||8000, ()=>{
        console.log(`APP is running on port: ${process.env.PORT}`);
        
    })
})
.catch((err) =>{
    console.log("MONGODB connection failed !!!", err);
    
})

/*

;(async () =>{
    try {
      await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      app.on("error", (error)=>{
        console.log("ERROR:", error);
        throw error
      })

      app.listen(process.env.PORT,()=>{
        console.log(`App is listening on port ${process.env.PORT}`);
        
      })
    } catch (error) {
        console.log("ERROR:", error);
        throw err
        
    }
})()
    
  */  