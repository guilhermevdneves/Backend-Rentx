import express from 'express'
import courses from './routes/categories.routes'
import specifications from './routes/specifications.routes'

const app = express()

app.use(express.json())

app.use('/categories', courses)
app.use('/specifications', specifications)

app.listen(3333, () => console.log('Server running...'))
