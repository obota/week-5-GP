const mongoose = require('mongoose')
const studentsModel = new mongoose.Schema({
   
    studentID: { required: true, type: String },
    firstName: { required: false, type: String },
    lastName: { required: true, type: String },
    course: { required: false, type: String },
    contact: { required: true, type: String },
});
module.exports = mongoose.model('students', studentsModel);