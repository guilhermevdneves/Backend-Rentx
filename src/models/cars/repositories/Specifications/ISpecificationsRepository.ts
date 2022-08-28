import Specification from '../../model/Specification'

export interface ISpecificationDTO {
  name: string
  description: string
}

export interface ISpecificationsRepository {
  findByName(name: string): boolean
  create({ description, name }: ISpecificationDTO): void
}
