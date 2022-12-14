const express=require('express');
const router=express.Router();
const passport=require('passport');
const jwt=require('jsonwebtoken');

const User=require('../models/user');

//users router

router.get('/',(req,res)=>{
    res.send("User router")
})

//authenticate router 
router.post('/Register',(req,res,next)=>{
    let newUser=new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password

    });
    User.addUser(newUser,(err,user)=>{
        if(err){
            res.json({success:false,msg:'failed to add user'})
        }
        else{
            res.json({success:true,msg:'User registered'})
        }
    })
})

//profile router
router.get('/profile',(req,res)=>{
    res.send("profile router")
})

//validate router
router.get('/validate',(req,res)=>{
    res.send("validate router")
})

//Register router
router.get('/register',(req,res)=>{
    res.send("Register router")
})

module.exports=router;