(() => {
  const prices = [1, 2, 3, 4, 5, 6, 'hola', true]
  prices.push(121212)
  console.log(prices)

  const products: Array<string | number | boolean> = ['hola', true]
  products.push(12)
})()
