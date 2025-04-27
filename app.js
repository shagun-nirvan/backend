require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send("hii everyone!!")
})

app.get('/twitter', (req,res)=>{
    res.send("twitter url")
})

app.get("/login", (req,res)=>{
    res.send("<h1>Please login on this page</h1>")
})

app.get("/youtube", (req,res)=>{
    res.send("<h2>njdnkj</h2>")
})

app.listen(process.env.PORT,()=>{
    console.log(`example on port: ${port}`);
    
})