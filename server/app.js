import express from 'express'
import 'dotenv/config'

import api from './routes/api.js'

const app = express()

app.use(express.json())

app.use('/api', api)

app.get('/', (req, res) => {
    res.send('<h1>Server main page</h1>')
})

app.listen(5000, () => {
    console.log('Server run on http://localhost:5000')
})