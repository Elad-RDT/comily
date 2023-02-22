
const mongoose= require('mongoose');
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        maxlength:50,
        minlength:2,
        required:true,
        unique:true

    },
    password:{
        type:String,
        required:true,
        maxlength:1024,
        minlength:5,
        
    },
    email:{
        type:String,
        required:true,
        maxlength:50,
        minlength:5,
        unique:true

    }
})

userSchema.methods.generateJWT = function(){
    const token= jwt.sign({_id:this._id, name:this.name, email:this.email},'token to me 2001');
    return token;

}

const User= new mongoose.model('User', userSchema); 


module.exports=User;