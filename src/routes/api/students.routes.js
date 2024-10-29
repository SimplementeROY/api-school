const router = require('express').Router();
const { getStudentByID, getStudents, createStudent, updateStudent, deleteStudent } = require('../../controllers/students.controller');

router.get('/', getStudents);
router.get('/:id', getStudentByID);

router.post('/', createStudent);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);

module.exports = router;

