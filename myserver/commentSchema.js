
const mongoose= require('mongoose');
const jwt = require("jsonwebtoken");
const { required } = require('joi/lib/types/lazy');


const commentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    
commentBody:{
    type:String,
    minlength:1,
    maxlength:1000,
    required:true
}
})


const Comment= new mongoose.model('Comment', commentSchema); 


module.exports=Comment;