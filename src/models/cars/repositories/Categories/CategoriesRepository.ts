import { v4 } from 'uuid'
import Category from '../../model/Category'
import { ICategoriesRepository } from './ICategoriesRepository'
/**
 *  This class is going to access a DATABASE in the future
 *
 *  We will mock the database using an array for now
 *
 */

class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[]

  constructor () {
    this.categories = []
  }

  create (data: { name: string; description: string }) {
    const newCategory: Category = {
      ...data,
      id: v4(),
      created_at: new Date()
    }

    this.categories.push(newCategory)
  }

  list (): Category[] {
    return this.categories
  }

  findByName (name: string): any {
    const category = this.categories.find(cate => cate.name === name)

    return category
  }
}

export default CategoriesRepository
