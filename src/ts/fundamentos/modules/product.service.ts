import { Product } from './product.model'
export const products: Product[] = []
export const addProduct = (data: Product): void => {
  products.push(data)
}

export const calcStock = (): number => {
  const total: number = products.reduce((sum: number, item: Product) => {
    return sum + item.stock
  }, 0)
  return total
}
