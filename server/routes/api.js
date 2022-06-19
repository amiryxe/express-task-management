import express from 'express'

import Task from '../task.js'

const api = express.Router()

api.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
})

api.get('/tasks', (req, res) => {
    const tasks = Task.getAllTasks(true)

    if (tasks.length) {
        res.send(JSON.stringify(tasks))
    } else {
        res.status(400).send('no any task')
    }
})

export default api