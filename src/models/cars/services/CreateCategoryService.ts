import {
  ICategoriesRepository,
  ICategoryDTO
} from '../repositories/Categories/ICategoriesRepository'

class CreateCategoryService {
  constructor (private categoriesRepository: ICategoriesRepository) {}

  execute ({ name, description }: ICategoryDTO) {
    const categoryExists = this.categoriesRepository.findByName(name)

    if (categoryExists) {
      throw new Error('Categorty aleready exists!')
    }

    this.categoriesRepository.create({ name, description })
  }
}

export { CreateCategoryService }
