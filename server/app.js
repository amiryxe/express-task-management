import express from 'express'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('hello from server')
})

app.listen(5000, () => {
    console.log('Server run on http://localhost:5000')
})