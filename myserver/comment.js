const express= require('express');

const Joi= require('joi');
const router = express.Router();
const Comments=require('./commentSchema')
const jwtDecode = require('jwt-decode');




router.post('/', async(req,res)=>{
    try{
        const body= req.body;
        validateComment(body)
        let comment = new Comments(body)
        comment=await comment.save();
        res.status(201).send(comment)

    }
    catch(error){
        console.log(error);
        res.status(400).send(error)

    }
})

//GET ALL COMMENTS//
router.get('/', async (req,res)=>{
    const comments= await Comments.find().sort('name')
    res.send(comments);
})





// //get by filtered name
// async function getComments(){
//     const comment = await Comments.find({email:/.*ela.*/i})
//     console.log(comment)
    
// }
// getComments()




function validateComment(comment){
    const schema={
        name:Joi.string().required(),
        commentBody:Joi.string().min(5).max(100).required()
    }
    return Joi.validate(comment,schema);
}

module.exports=router;