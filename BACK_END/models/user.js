const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');

const config=require("../config/database");

const UserSchema=mongoose.Schema({
    username:{
        type:String
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})

const User=module.exports=mongoose.model('User',UserSchema);
module.exports.addUser=function(newUser,callback){
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(newUser.password,salt,(err,hash)=>{
        if(err)
        throw err;
        newUser.password=hash;
        newUser.save(callback);
        });
    });
}