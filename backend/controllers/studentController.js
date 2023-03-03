const asyncHander = require('express-async-handler')
const student = require('../models/student')
const Student = require('../models/student')

//@ desc    Get All Students
//@ route   GET /api/student
//@ access  PUBLIC   
const getStudents = asyncHander(async (req, res) => {
    let students = await Student.find()

    res.status(200).json(students)
}) //END getStudents

//@ desc    Get a Student by ID
//@ route   GET /api/student/:id
//@ access  PUBLIC  
const getStudentById = asyncHander(async (req, res) => {
    // Check if user data can be retrieved from the DB     
    try {
        await Student.findById(req.params.id)
    } catch (error) {
        throw new Error('Student not found in the database')
    } 
    
    let student = await Student.findById(req.params.id)

    res.status(200).json(student)
}) //END getStudentById

//@ desc    Create a Student
//@ route   POST /api/student
//@ access  PUBLIC   
const addStudent = asyncHander(async (req, res) => {

    // Create Studnt
    let newStudent = await Student.create(req.body.student)
    // const newStudent = await Student.create(sampleStudent)

    if (newStudent) {
        res.status(201).json(newStudent)
    } else {
        res.status(400)
        throw new Error('Invalid Student Data')
    }
}) //END addStudent

//@ desc    Update a Student
//@ route   PUT /api/student/:id
//@ access  PUBLIC   
const updateStudent = asyncHander(async (req, res) => {
    // Check if user data can be retrieved from the DB     
    try {
        await Student.findById(req.params.id)
    } catch (error) {
        throw new Error('Student not found in the database')
    } 
    
    let updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body.student, {
        new: true,
    })

    res.status(200).json(updatedStudent)
}) //END updateStudent

//@ desc    Delete a Student
//@ route   POST /api/student/:id
//@ access  PUBLIC   
const deleteStudent = asyncHander(async (req, res) => { 
    // Check if user data can be retrieved from the DB 
    try {
        await Student.findById(req.params.id)
    } catch (error) {
        throw new Error('Student not found in the database')
    } 

    let student = await Student.findById(req.params.id)
    await Student.deleteOne(student)

    res.status(200).json({ id: req.params.id });
}) //END deleteStudent

module.exports = {
    getStudents, getStudentById, addStudent, updateStudent, deleteStudent,
}