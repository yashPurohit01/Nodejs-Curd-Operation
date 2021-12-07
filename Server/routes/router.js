const express = require('express');
const route = express.Router();

//imported controllers 

const Students = require('../controllers/defaultcontroller.js');
const addstudent = require('../controllers/newStudentcontroller.js')
const getStudentId = require('../controllers/studentbyIdcontroller.js')
const updatestudent = require('../controllers/updateStudentcontroller.js')
const deletestudent = require('../controllers/deleteStudentcontroller.js')

//routes

route.get('/' , Students);

route.post('/adduser' , addstudent);

route.get('/:id' , getStudentId); 

route.put('/:id' , updatestudent) ;

route.delete('/:id' , deletestudent);

 
module.exports = route