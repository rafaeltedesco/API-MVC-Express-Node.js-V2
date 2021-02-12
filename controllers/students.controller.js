let students = [
  {'id': 1, 'name':'Alyssa', 'age': 17}, 
  {'id': 2, 'name': 'Miguel', 'age': 17},
  {'id': 3, 'name': 'Otávio', 'age': 16},
  {'id': 4, 'name': 'Gustavo', 'age': 14}]

const Student = require('./../models/students.models')

exports.findAll = (req, res)=> {
  return res.status(200).json({
    'status': 'success',
    'message': 'Listing all students',
    'results': students.length,
    'data': students
  })
}

exports.checkId = (req, res, next, val)=> {
  let {id} = req.params
  let student = students.find(student=> {
    return student.id == id * 1
  })
  if (!student) {
    return res.status(400).json({
      'status': 'fail',
      'message': 'Invalid Id'
    })
  }
  req.student = student
  next()
}

exports.findOne = (req, res) => {
  let student = req.student
  return res.status(200).json({
   'status': 'success',
   'message': 'Listing Student By Id',
   data: student
 })
}

exports.create = (req, res)=> {
  let newId = students[students.length-1].id + 1
  let {name, age} = req.body
  students.push(new Student(newId, name, age))
  return res.status(201).json({
    'status': 'success',
    'message': 'New student created',
    'data': students
  })
}