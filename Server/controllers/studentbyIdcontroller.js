const student = require("../models/studentSchema");


const getStudentId = async (req, res) =>{
    const id = req.params.id ;
    
    try{
        const Result = await student.findById(id);
        res.json(Result);
    }
    catch(err){
       res.json({message:message.err});
    }
}

module.exports = getStudentId;