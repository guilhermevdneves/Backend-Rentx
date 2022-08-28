import { Router } from 'express'
import SpecificationsRepository from '../models/cars/repositories/Specifications/SpecificationsRepository'
import { CreateSpecificationService } from '../models/cars/services/CreateSpecificationService'

const specificationsRepository = new SpecificationsRepository()

const app = Router()

app.post('/', (req, resp) => {
  const { name, description } = req.body

  const createCategoryService = new CreateSpecificationService(
    specificationsRepository
  )

  createCategoryService.execute({
    name,
    description
  })

  return resp.status(201).send()
})

export default app
