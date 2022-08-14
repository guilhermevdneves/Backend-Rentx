import { Router } from 'express'
import { v4 } from 'uuid'
import Category from '../model/Category'
import CategoryRepository from '../repositories/CategoryRepository'

const app = Router()

const categoryRepository = new CategoryRepository()

app.get('/', (req, resp) => {
  return resp.status(200).json(categoryRepository.list())
})

app.post('/', (req, resp) => {
  const { name, description } = req.body

  const categoryExists = categoryRepository.findByName(name)

  if (categoryExists) {
    return resp.status(400).send('A categoria já existe')
  }

  categoryRepository.create({ name, description })

  return resp.status(200).send()
})

export default app
