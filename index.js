const express = require('express')
const app = express()

app.use(express.json())
const studentsRouter = require('./routes/students.routes')
app.use('/api/v1/students', studentsRouter)


module.exports = app