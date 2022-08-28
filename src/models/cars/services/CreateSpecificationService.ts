import {
  ISpecificationDTO,
  ISpecificationsRepository
} from '../repositories/Specifications/ISpecificationsRepository'

class CreateSpecificationService {
  constructor (private specificationCategory: ISpecificationsRepository) {}

  execute ({ name, description }: ISpecificationDTO) {
    const specificationExists = this.specificationCategory.findByName(name)

    if (specificationExists) {
      throw new Error('Specification aleready exists!')
    }

    this.specificationCategory.create({ name, description })
  }
}

export { CreateSpecificationService }
