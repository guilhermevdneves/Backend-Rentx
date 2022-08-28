import { v4 } from 'uuid'
import Specification from '../../model/Specification'
import {
  ISpecificationDTO,
  ISpecificationsRepository
} from './ISpecificationsRepository'

class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[]

  constructor () {
    this.specifications = []
  }

  findByName (name: string): boolean {
    const specification = this.specifications.find(
      specification => specification.name === name
    )

    return !!specification
  }

  create (data: ISpecificationDTO): void {
    const newSpecification: Specification = {
      ...data,
      id: v4(),
      created_at: new Date()
    }

    this.specifications.push(newSpecification)
  }
}

export default SpecificationsRepository
