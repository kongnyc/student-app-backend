const express = require('express');
const {getAllStudents, 
  getStudentByID,
  getStudentByIDGrades} = require('../queries/studentsQueries');


const studentsController = express.Router();

studentsController.get('/', (request, response) => {
    try {
      const students = getAllStudents();;
      response.status(200).json({ data: students });
    } catch (err) {
      response.status(500).json({ error: err.message });
    }
  });
  
studentsController.get('/:id', (request, response) => {
    try {
      const { id } = request.params;
      const student  = getStudentByID(id);
  
      // const student = students.find((el) => el.id === id);
      if (student) {
        // return 200
        return response.status(200).json({ data: student });
      }
      // return 404
      response
        .status(404)
        .json({ error: `Could not find student with id ${id}` });
    } catch (err) {
      response.status(500).json({ error: err.message });
    }
  });

studentsController.get('/:id/grades', (req, res) => {
    const { id } = req.params;
    const student  = getStudentByIDGrades(id);

    // const student = students.find(student => student.id === id);
    if (student) {
         res.status(200).json({data:studentGrades});
    } else {
         res.status(400).json({error:`No grades for such Student with No.:${id} `});    
  
    }
  })

  module.exports = studentsController;