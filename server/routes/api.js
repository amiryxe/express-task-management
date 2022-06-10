import express from 'express'

import Task from '../task.js'

const api = express.Router()

api.get('/tasks', (req, res) => {
    const tasks = Task.getAllTasks(true)
    console.log(tasks);

    if (tasks.length) {
        res.send(JSON.stringify(tasks))
    } else {
        res.status(400).send('no any task')
    }
})

export default api