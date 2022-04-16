import { addProduct, updateProduct, findProduct, products } from './products/product.service'
import { Id } from './base/base.model'
import faker from '@faker-js/faker'
// import { Product } from './products/product.model'
// const play5: Product = {
//   id: faker.datatype.uuid(),
//   description: faker.commerce.productDescription(),
//   image: faker.image.imageUrl(),
//   color: faker.commerce.color(),
//   price: parseInt(faker.commerce.price(), 10),
//   isNew: faker.datatype.boolean(),
//   tags: faker.random.arrayElement(),
//   title: faker.commerce.productName(),
//   createdAt: faker.date.recent(),
//   stock: faker.datatype.number({ min: 10, max: 100 }),
//   category: {
//     id: faker.datatype.uuid(),
//     name: faker.commerce.department(),
//     createdAt: faker.date.recent()
//   }
// }

for (let index = 0; index < 2; index++) {
  addProduct({
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(),
    color: faker.commerce.color(),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: faker.random.arrayElement(),
    size: faker.random.arrayElement(['S', 'XS', 'M', 'L', 'XL', 'XXL']),
    title: faker.commerce.productName(),
    stock: faker.datatype.number({ min: 10, max: 100 }),
    categoryId: faker.datatype.uuid()
  })
}
const id: Id = products[0].id
updateProduct(9999, { description: 'xbos series', color: 'black', price: 399, isNew: true })
console.log(products)
console.log(id)

findProduct({ stock: 10, color: 'red', tags: ['hello'] })
