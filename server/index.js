const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
require('dotenv').config();

const app=express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log('Database connected successfully')
}).catch((err)=>{
    console.log(err.message);
});

const server=app.listen(process.env.PORT,()=>{
    console.log(`server running on http://localhost:${process.env.PORT}`);
})
