const student = require('../models/studentSchema.js')

// adding new user to database 

const newUser = async (req , res) =>{
   
    const Student = req.body;
    const newStudent = new student(Student);

    try{
      await newStudent.save();
    }catch(err){
       console.log(err);
    }  
    res.send(Student);
}

module.exports = newUser;