/* eslint-disable @typescript-eslint/consistent-type-assertions */

(() => {
  // const prices = [1, 2, 3, 4, 5, 6]
  let dinamic: any = 'hola'
  const miHola = (dinamic as string).toUpperCase()
  console.log(dinamic)
  console.log(miHola)

  dinamic = 100
  const miNumero = (<number>dinamic).toFixed()
  console.log(miNumero)
})()
