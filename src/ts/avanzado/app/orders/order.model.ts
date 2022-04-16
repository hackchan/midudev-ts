import { Product } from '../products/product.model'
import { IUSER } from '../users/users.model'
import { IBaseModel } from '../base/base.model'
export interface Order extends IBaseModel{
  products: Product[]
  user: IUSER
}
