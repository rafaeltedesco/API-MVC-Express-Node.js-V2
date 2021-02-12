const express = require('express')

const router = express.Router()
const studentsController = require('./../controllers/students.controller')

router.param('id', studentsController.checkId)

router.route('/')
.get(studentsController.findAll)
.post(studentsController.create)

router.route('/:id')
.get(studentsController.findOne)

module.exports = router