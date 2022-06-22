import express from 'express'

import Task from '../task.js'

const api = express.Router()

api.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    res.setHeader('Content-Type', 'application/json')
    next()
})

api.route('/tasks')
    .get((req, res) => {
        const tasks = Task.getAllTasks(true)

        if (tasks.length) {
            res.send(JSON.stringify(tasks))
        } else {
            res.status(400).send('no any task')
        }
    })
    .post((req, res) => {
        try {
            const task = new Task(req.body.title, req.body.completed)
            task.save()
            res.send(`task ${task.title} created`)
        } catch (err) {
            res.status(400).send(err.message)
        }
    })

export default api