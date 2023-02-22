const express= require('express');
const mongoose = require('mongoose')
const Joi= require('joi');
const router = express.Router();
const User=require('./signUpSchema')
const bcrypt = require('bcrypt');
const jwt=require("jsonwebtoken")



router.post('/',async(req,res)=>{
    const {error}=validateUser(req.body);
    if(error){
        return res.status(400).send(error.details[0].message)
    }
    let user= await User.findOne({email:req.body.email})
    if(user) return res.status(400).send('User already exsist')

     user = new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
        })
        
    //make the password hash with the salt and like that to make her hard password
     const salt = await bcrypt.genSalt(10);
     user.password=await bcrypt .hash(user.password,salt)
        try{
user = await user.save()
        }
        catch(error){
res.status(500).send('something went wrong')
        }
     

        res.header('x-auth-token',user.generateJWT())
            .header('access-control-expose-headers','x-auth-token')//מחלץ את הטורן שהגדרנו בבאק האנד לפרונט האנד
            .send({user});

    
})

// router.get('/', async (req,res)=>{
//     const users= await User.find().sort('name')
//     res.send(users);
// })





// router.delete('/:id',async (req,res)=>{
//     const user = await User.findByIdAndRemove(req.params.id)
//     if(!user){
//         res.status(404).send('Not Found')
//         return;
//     }

//     res.send("User Deleted")
// })



function validateUser(user){
    const schema={
        name:Joi.string().min(2).max(50).required(),
        email:Joi.string().min(4).max(255).required().email(),
        password:Joi.string().min(5).max(255).required()
    }
    return Joi.validate(user,schema)
}


module.exports=router