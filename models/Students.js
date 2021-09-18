const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true

    },
    password:{
        type:String,
        required:true

    },
    collage:{
        type:String,
        required:true

    }
});
const StudentsList = mongoose.model('Students_list',studentSchema);
module.exports = StudentsList;