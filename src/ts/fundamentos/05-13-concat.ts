
(() => {
  const elements: number[] = [1, 1, 2, 2]
  const otherElements: number[] = [3, 3, 4, 4]
  const rta = elements.concat(otherElements)
  const rta2 = [...elements, ...otherElements]
  console.log(rta)
  console.log(rta2)
})()
