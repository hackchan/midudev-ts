(() => {
  let myProductPrice = 100
  myProductPrice = 12
  console.log('Product Price:', myProductPrice)

  let customerAge: number = 28
  customerAge = customerAge + 1
  console.log(customerAge)

  let productInStock: number
  productInStock = 100
  productInStock = productInStock + 1
  if (productInStock > 10) {
    console.log(productInStock)
  }

  const disconect = parseInt('100')
  console.log('discount:', disconect)
  if (disconect <= 200) {
    console.log('apply')
  } else {
    console.log('not apply')
  }
  const hex = 0xfff
  console.log(hex)

  const bin = 0b1010
  console.log(bin)
})()
