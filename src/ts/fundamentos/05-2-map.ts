(() => {
  const letters: string[] = ['a', 'b', 'c']

  // modo noob
  const newArray = []
  for (let index = 0; index < letters.length; index++) {
    const element: string = letters[index]
    newArray.push(element + '++')
    console.log(element)
  }
  console.log(newArray)

  // foreach
  const newArr = letters.map(item => item + '++')
  console.log(newArr)
  console.log(letters)
})()
