import express from "express";
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/', (req,res)=>{
    res.send('Server is ready')
})

//Get a list of 5 jokes

app.get('/api/jokes', (req,res)=>{
    const jokes =[
        {
            id:1,
            title:'A joke',
            content: 'This is a 1st joke'
        },
        {
            id:2,
            title:'A joke 2',
            content: 'This is a 2nd joke'
        },
        {
            id:3,
            title:'A joke 3',
            content: 'This is a 3rd joke'
        },
        {
            id:4,
            title:'A joke 4',
            content: 'This is a 4th joke'
        },
        {
            id:5,
            title:'A joke 5',
            content: 'This is a 5th joke'
        },
    ]
    res.send(jokes)
})

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server is at http://localhost:${port}`);
    
})