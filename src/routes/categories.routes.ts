import { Router } from 'express'
import { v4 } from 'uuid'
import Category from '../models/cars/model/Category'
import CategoryRepository from '../models/cars/repositories/Categories/CategoriesRepository'
import { CreateCategoryService } from '../models/cars/services/CreateCategoryService'

const app = Router()

const categoryRepository = new CategoryRepository()

app.get('/', (req, resp) => {
  return resp.status(200).json(categoryRepository.list())
})

app.post('/', (req, resp) => {
  const { name, description } = req.body
  const createCategoryService = new CreateCategoryService(categoryRepository)

  createCategoryService.execute({ name, description })

  return resp.status(200).send()
})

export default app
