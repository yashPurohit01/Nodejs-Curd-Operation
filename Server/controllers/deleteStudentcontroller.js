const { response } = require("express");
const student = require("../models/studentSchema");


const deleteStudent = async (req, res) =>{
    const id = req.params.id;
    try {
        await student.deleteOne({_id:id });
        res.json("Deleted successfully")
    } catch (error) {
        res.json({message:error.message});
    }

}
module.exports = deleteStudent ;