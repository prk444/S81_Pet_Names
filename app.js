const express=require('express');
const app=express();
const connection = require('./connection');
require("dotenv").config();
let mongoose = require('mongoose');
let connect=mongoose.connect(process.env.mongo_url)

app.get('/',(req,res)=>{
    const dbStatus = mongoose.connection.readyState === 1 ? 'Connected' : 'Not Connected';
    res.send(`Hello World. Database connection status: ${dbStatus}`);
});



app.listen(process.env.port,async()=>{
    try {
        await connection;
        console.log('Server is running on port 3030');
    } catch (error) {
        console.log(error);
    }
    
})