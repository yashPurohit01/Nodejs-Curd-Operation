const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes  = require('./Server/routes/router');

const mongoose = require('mongoose');
const app = express();


dotenv.config({
    path:'config.env',
})


app.use(cors());

// parse url body
app.use(bodyParser.urlencoded({extended:true}))

const port= process.env.PORT || 8080;

//Db connection
const URL = 'mongodb://localhost/College'
mongoose.connect(URL , {useNewUrlParser:true , useUnifiedTopology : true ,})
.then(res =>{
    console.log("connected to database successfully")
})
.catch(err =>{
   console.log(err);
})







// Routers 
app.use('/', routes);







app.listen(port , ()=>{
    console.log(`Server is running on port  ${port}`)
})