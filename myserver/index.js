const express =require('express');
const Joi= require('joi');
const login = require("./login");
const comment = require("./comment");
const signup = require("./signUp");
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.set('strictQuery', true)

mongoose.connect('mongodb://127.0.0.1:27017/myServer')
// mongoose.connect('mongodb+srv://elad_arditi:3156487264@cluster0.8s6pnlv.mongodb.net/?retryWrites=true&w=majority')
.then(()=> console.log("connected to DataBase"))
.catch((err)=>console.log("couldnt connect to DataBase"))


app.use(express.json());  //convert json to JavascriptS and Javascript to json 
app.use(cors({ 
    origin:'http://localhost:3001',
   methods: ['GET','POST',"PUT",'DELETE']
  }));

  
  app.use("/api/users", signup);
  app.use("/api/auth", login);
app.use("/api/comments", comment);




const port = process.env.PORT || 3000;// the value of the apep.listen(port) will be the value of the const port. else it will be default 3000 as set;
//the const port value will be set on the cmd when we run the web {example:set PORT=4000 (on cmd)}

app.listen(port, ()=> console.log(`Apep on port ${port}`));//port for the website;
