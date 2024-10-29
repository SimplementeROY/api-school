const Student = require('../models/students.model');

const getStudents = async(req, res, next) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        next(error);
    }
}

const getStudentByID = async(req, res, next) => {
    try {
        const { id } = req.params;
        const student = await Student.findById(id);
        res.json(student);
    } catch (error) {
        next(error);
    }
}

const createStudent = async(req, res, next) => {
    try {
        const student = await Student.create(req.body);
        res.json(student);
    } catch (error) {
        next(error);
    }
}

const updateStudent = async(req, res, next) => {
    try {
        const { id } = req.params;
        const student = await Student.findByIdAndUpdate(id, req.body, { new: true });
        res.json(student);
    } catch (error) {
        next(error);
    }
}
const deleteStudent = async(req, res, next) => {
    try {
        const { id } = req.params;
        const student = await Student.findByIdAndDelete(id);
        res.json(student);
    } catch (error) {
        next(error);
    }
}
module.exports = { getStudentByID, getStudents, createStudent, updateStudent, deleteStudent };