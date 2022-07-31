const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');

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