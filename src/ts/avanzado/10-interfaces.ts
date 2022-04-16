export type Sizes = 'S' | 'XS' | 'M' | 'L' | 'XL' | 'XXL'

export interface Product {
  id: string | number
  title: string
  createdAt: string
  stock: number
  sizes?: Sizes
}

const product: Product[] = []

product.push({ id: 1, title: 'ps5', createdAt: new Date().toLocaleString(), stock: 20, sizes: 'L' })
console.log(product)
