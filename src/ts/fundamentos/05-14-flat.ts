const matriz = [
  [1, 2, 3],
  [4, 5, 6, [1, 2, [1, 2]]],
  [7, 8, 9]
]
function profundidad (list: any): number[] {
  let newList: number[] = []
  if (typeof list !== 'object') return [list]
  list.forEach((element: number) => {
    newList = newList.concat(profundidad(element))
  })
  return newList
}

const newArray = profundidad(matriz)

console.log(newArray)

console.log(matriz.flat(3))
