const student = require("../models/studentSchema");

const updateStudent = async (req ,res ) =>{
    const updatedDetail = req.body;
    const updatedstudent = new student(updatedDetail);

    try {
       await student.updateMany({_id:req.params.id} ,  updatedstudent);
       res.json(updatedstudent)
    } catch (error) {
        res.json({message:error.message});
    }
}

module.exports = updateStudent