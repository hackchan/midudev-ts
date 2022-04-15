
(() => {
  const items: number[] = [1, 30, 49, 29, 30, 13]
  const products = [
    {
      name: 'Pizza',
      price: 12,
      id: '🍕'
    },
    {
      name: 'Burger',
      price: 23,
      id: '🍔'
    },
    {
      name: 'Hot dog',
      price: 34,
      id: '🌭'
    },
    {
      name: 'Hot cakes',
      price: 355,
      id: '🥞'
    }
  ]
  const rta = items.findIndex(item => item === 300)
  console.log(rta)

  const rta2 = products.find(product => product.id === '🍔')
  console.log(rta2)
})()
