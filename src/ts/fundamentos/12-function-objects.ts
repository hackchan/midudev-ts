import { ShirtSize } from '../../types'
(() => {
  const login = (data: {email: string, password: number}): void => {
    console.log(data.email, data.password)
  }
  login({ email: 'fabiorojas7@gmail.com', password: 123456 })

  const products: any[] = []
  const addProduct = (data: {
    title: string
    createdAt: Date
    stock: number
    size?: ShirtSize
  }): void => {
    products.push(data)
  }
  addProduct({ title: 'play 5', createdAt: new Date(), stock: 3 })
  addProduct({ title: 'Polo', createdAt: new Date(), stock: 3, size: 'L' })
  console.log(products)
})()
