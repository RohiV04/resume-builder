const express=require('express');
const mongoose=require('mongoose');

const app=express();
const cors=require('cors');

const router=require('./routers/index');
const auth=require('./routers/auth');
const uri="mongodb+srv://Rohi:bvwljVhCqz3iJbAF@cluster0.eqsiiyv.mongodb.net/?retryWrites=true&w=majority";
const port=process.env.PORT || 8000
mongoose.connect(uri);
const con =mongoose.connection;
con.once("open",()=>{console.log("connected")});
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.get('/',(req,res)=>{
    res.send("This is Resume Backend");
});
app.use('/',router);
app.use('/auth',auth);
app.listen(port,console.log(`server is running on http://localhost:${port}`));