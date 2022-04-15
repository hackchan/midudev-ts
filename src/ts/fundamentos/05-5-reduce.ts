(() => {
  const words: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  console.log(words)
  // sum => acumulador
  const suma = (values: number, acumulador: number): number => acumulador + values
  // const rta = words.reduce((sum, item) => {
  //   return sum + item
  // }, 0)
  const rta = words.reduce(suma, 0)
  console.log(rta)
})()
