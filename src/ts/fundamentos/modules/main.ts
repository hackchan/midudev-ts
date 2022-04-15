import { addProduct, calcStock, products } from './product.service'

addProduct({ title: 'play 5', createdAt: new Date(), stock: 5 })
addProduct({ title: 'Polo', createdAt: new Date(), stock: 6, size: 'L' })

console.log(products)
console.log(calcStock())
