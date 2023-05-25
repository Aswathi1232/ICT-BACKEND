const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const student_Detail = new Schema({

    name:String,
    age:Number,
    location:String
})


const Studentdata = mongoose.model('student',student_Detail)

module.exports = Studentdata