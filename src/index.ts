import express from 'express'
import courses from './routes/categories.routes'

const app = express()

app.use(express.json())

app.use('/categories', courses)

app.listen(3333, () => console.log('Server running...'))
