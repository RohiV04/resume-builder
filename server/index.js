const express=require('express');
const mongoose=require('mongoose');
const app=express();
const cors=require('cors');
const uri="mongodb+srv://Rohi:bvwljVhCqz3iJbAF@cluster0.eqsiiyv.mongodb.net/?retryWrites=true&w=majority";
const port=process.env.PORT || 8000
mongoose.connect(uri);
const con =mongoose.connection;
con.once("open",()=>{console.log("connected")});
app.use(cors());
app.get('/msg',(req,res)=>{
    res.json("Welcome")
})
app.listen(port,console.log(`port is running on http:localhost:${port}`));