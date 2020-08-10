const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user_route')
const taskRouter = require('./routers/task_route')

const app = express()

app.use(express.json()) 
app.use(userRouter)
app.use(taskRouter)

module.exports = app