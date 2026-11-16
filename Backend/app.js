import express from'express';
import cors from 'cors';
const app=express();
app.use(express.json());
app.use(cors());

app.get('/api/hello',(req,res)=>{
    res.json({status : "ok",message : "YOOOOOOOOOOO BACKEND"});
});

app.post('/api/helo',(req,res)=>{
    const data=req.body;
    res.status(201).json({received:data});
});

export default app;