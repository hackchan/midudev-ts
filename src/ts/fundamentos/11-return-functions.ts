(() => {
  const calcTotal = (prices: number[]): string => {
    const total: number = prices.reduce((sum: number, item: number) => {
      return sum + item
    }, 0)
    return total.toString()
  }
  console.log(calcTotal([3, 2, 5, 4, 6, 7, 3, 5]))
  // Funcion sin retorno
  function printName (name: string): void {
    console.log(name)
  }

  printName('fabio')
})()
