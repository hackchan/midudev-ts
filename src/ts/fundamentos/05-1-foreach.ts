(() => {
  const letters: string[] = ['a', 'b', 'c']

  // modo noob
  for (let index = 0; index < letters.length; index++) {
    const element: string = letters[index]
    console.log(element)
  }

  // foreach
  letters.forEach(item => console.log(item))
})()
