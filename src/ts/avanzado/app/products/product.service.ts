import { Product } from './product.model'
import { CreateProductDTO, UpdateProductDTO, FindProductDTO } from './product.dto'
import { Id } from '../base/base.model'
import faker from '@faker-js/faker'
export const products: Product[] = []
export const addProduct = (data: CreateProductDTO): Product => {
  const newProduct = {
    ...data,
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(),
    category: {
      id: data.categoryId,
      name: faker.commerce.department(),
      createdAt: faker.date.recent()
    }
  }
  products.push(newProduct)
  return newProduct
}

export const getIndex = (id: Id): number => products.findIndex(product => product.id === id)
export const throwError = (error: string): unknown => new Error(error)

export const updateProduct = (id: Product['id'], changes: UpdateProductDTO): Product => {
  const index: number = getIndex(id)
  const product: Product = products[index]
  index === -1 && throwError('Product not Found')

  products[index] = {
    ...product,
    ...changes
  }
  return products[index]
}

export const deleteProduct = (id: Id): Id => {
  const index: number = getIndex(id)
  index === -1 && throwError('Product not Found')
  products.splice(index, 1)
  return id
}

export const findProduct = (dto: FindProductDTO): Product[] => {
  return products
}
