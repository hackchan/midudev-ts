export type Sizes = 'S' | 'XS' | 'M' | 'L' | 'XL' | 'XXL'
export interface Product {
  title: string
  createdAt: Date
  stock: number
  size?: Sizes
}
