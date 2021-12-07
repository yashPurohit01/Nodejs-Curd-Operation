const mongoose = require('mongoose');

//student Schema 

const studentSchema = mongoose.Schema({
    studentName: { type: String, require: true },
    studentRoll: { type: String /* , require:true */ },
    studentEmail: { type: String, /* require:true */ },
    gender: { type: String },
    phoneNumber: { type: Number },
    age: { type: Number, /* require:true */ },
}, {
    timestamp: { require: true }
})

const student = mongoose.model('student', studentSchema);
module.exports = student;