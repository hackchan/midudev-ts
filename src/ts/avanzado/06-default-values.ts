export const createProduct = (id: string|number, isNew: boolean = true, stock: number = 10): unknown => {
  return { id, stock, isNew }
}

const p1 = createProduct(1, false, 12)
const p2 = createProduct(1)
console.log(p1)
console.log(p2)
