const studentsData = require('../data/studentsData.json')

const getAllStudents = () => {
    const {students} = studentsData
    return students
}

const getStudentByID = (id) => {
    const {students} = studentsData
    const student = students.find(student => student.id === id)
    return student
}

const getStudentByIDGrades = (id) => {
    const {students} = studentsData
    const student = students.find(student => student.id === id)
    return studentGrades= student.grades
    // return grades
}







module.exports = {
    getAllStudents, 
    getStudentByID,
    getStudentByIDGrades
}