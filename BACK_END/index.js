const express=require('express');
const path=require('path');
const mongoose=require('mongoose');
const bodyparser=require('body-parser');
const cors=require('cors');
const passport=require('passport');

const database=require('./config/database');

mongoose.connect(database.dburl);

mongoose.connection.on('connected',()=>{
    console.log('connected to database '+database.dburl)
})
mongoose.connection.on('Error',(err)=>{
    console.log('Database error ')
})

const users=require('./routes/users');
const { dburl } = require('./config/database');
const { config } = require('process');


const app=express();
//port number
const port=3000;

//CORS middleware
app.use(cors());

//body-parser middleware
app.use(bodyparser.json());

//users routs
app.use('/users',users)

//index route
app.get('/',(req,res)=>{
    res.send('invalid end points');
});


//start server
app.listen(port,()=>{
    console.log('Server started on port '+port);
});
