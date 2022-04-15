import { IProducts } from '../../types'

const products = [
  { title: 'Pizza', price: 121, id: '🍕' },
  { title: 'Burger', price: 121, id: '🍔' },
  { title: 'Hot cakes', price: 121, id: '🥞' }
]

const myProducts: IProducts[] = []
let productsFilter: IProducts[] = []
console.log('products', products)
console.log('myProducts', myProducts)
console.log('-'.repeat(10))

const productIndex = products.findIndex(item => item.id === '🍔')

if (productIndex !== -1) {
  myProducts.push(products[productIndex])
  // products.splice(productIndex, 1)
  productsFilter = products.filter(item => item.id !== products[productIndex].id)
}

console.log('myproducts:', myProducts)
console.log(products)
console.log(productsFilter)
// update

// const productsV2 = [
//   { title: 'Pizza', price: 121, id: '🍕' },
//   { title: 'Burger', price: 121, id: '🍔' },
//   { title: 'Hot cakes', price: 121, id: '🥞' }
// ]

// const update = {
//   id: '🥞',
//   changes: {
//     price: 200,
//     description: 'delicioso'
//   }
// }

// const productIndex2 = productsV2.findIndex(item => item.id === update.id)
// productsV2[productIndex2] = { ...productsV2[productIndex2], ...update }
// console.log(productsV2)

/**
 *en resumen el reto de eliminar se soluciona con un filter y el de update con un map
 products.map(item => {
  if (item.id === update.id) {
    return {
      ...item,
      ...changes,
    }
  }
  return {...item};
})
 */
