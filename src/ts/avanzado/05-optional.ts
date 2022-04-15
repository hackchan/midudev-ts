export const createProduct = (id: string|number, isNew?: boolean, stock?: number): unknown => {
  return { id, stock: stock ?? 0, isNew: isNew ?? true }
}

const p1 = createProduct(1, true, 12)
const p2 = createProduct(1)
console.log(p1)
console.log(p2)

/**
 *  0 === false
 *  '' === false
 *  false === false
 */
