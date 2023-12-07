const express = require('express');
const bodyParser = require('body-parser');
const mongoose= require('mongoose');
require("dotenv").config();

const routes = require('./Routes/index')

const app = express();

const PORT = 1111

app.use(bodyParser.json());
//routes
app.use('/',routes);
  
//remember to change password and add databasename
const URL =  process.env.MONGO_URL


mongoose.connect(URL,{
    useNewUrlParser: true,
    useUnifiedTopology:true
}).then(success =>{
    console.log("connected to mongodb successfully");
    app.listen(PORT, ()=>{
        console.log(`server running on port ${PORT}`);
    });
}).catch(err=>{
    console.log(`error in database - ${err}`);
})



