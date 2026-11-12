import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app=express();
const PORT = process.env.PORT||3000;
app.use(express.json());
app.use(
  cors({
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
    credentials: true,
  })
);

app.get('/api/hello',(req,res)=>{
    res.json({status : "ok",message : "YOOOOOOOOOOO BACKEND"});
});

app.post('/api/helo',(req,res)=>{
    const data=req.body;
    res.status(201).json({received:data});
});
app.listen(PORT,()=>{
    console.log("Server Running");
});