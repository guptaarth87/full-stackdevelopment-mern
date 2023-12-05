const express = require('express');
const router = express.Router();

const StudentsController = require('../Controllers/Students');



router.get('/getStudents',StudentsController.getStudents);
router.get('/getStudent/:name',StudentsController.getStudent);

router.post('/addStudent',StudentsController.addStudent);

router.put('/updateStudent',StudentsController.updateStudent);

router.delete('/deleteStudent/:name',StudentsController.deleteStudent);

module.exports = router;