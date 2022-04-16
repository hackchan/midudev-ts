import { ICategory } from '../category/category.model'
import { IBaseModel } from '../base/base.model'
export type Sizes = 'S' | 'XS' | 'M' | 'L' | 'XL' | 'XXL'

export interface Product extends IBaseModel{
  title: string
  image: string
  description: string
  stock: number
  size?: Sizes
  color: string
  price: number
  category: ICategory
  isNew: boolean
  tags: string[]
}
