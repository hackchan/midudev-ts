import { ShirtSize } from '../../types'
(() => {
  function createProdcutToJson (title: string, createdAt: Date, stock: number, size: ShirtSize): object {
    return { title, createdAt, stock, size }
  }
  const producto1 = createProdcutToJson('play 5', new Date(), 12, 'L')
  console.log(producto1)

  const createProdcutToJsonV2 = (title: string, createdAt: Date, stock: number, size?: ShirtSize): object => {
    return { title, createdAt, stock, size }
  }

  const producto2 = createProdcutToJsonV2('play 5', new Date(), 12)
  console.log(producto2)
})()
