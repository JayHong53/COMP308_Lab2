const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    studentNo: {
        type: Number,
        required: [true, 'Please enter the student number'],
        unique: [true, 'Student number already exists'],
    },
    firstName: {
        type: String,
        required: [true, 'Please enter the first name']
    },
    lastName: {
        type: String,
        required: [true, 'Please enter the last name'],
    },  
    program: {
        type: String,
        required: [true, 'Please enter a program'],
    },  
    email: {
        type: String,
        required: [true, 'Please enter an email address'],
        unique: [true, 'Email address is in use']
    },
    phone: {
        type: String,
    },
    street: {
        type: String,
    },
    city: {
        type: String,
    },
    province: {
        type: String,
    },
}, 
{
    timestamps: true,
})

module.exports = mongoose.model('Student', studentSchema)