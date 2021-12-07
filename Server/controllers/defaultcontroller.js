const student = require("../models/studentSchema");

const Students = async (req ,res) => {
   
   try{
      const students = await student.find();
      res.json(students); 
   }
   catch(err){
      res.json({message:err.message});
   }
}

 module.exports = Students; 