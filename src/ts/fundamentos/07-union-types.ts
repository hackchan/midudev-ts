(() => {
  let userId: string | number
  userId = 100
  userId = 'kskdd'
  console.log(userId)

  function greeting (myText: string | number): void {
    if (typeof myText === 'string') {
      console.log(myText.toUpperCase())
    } else {
      console.log(myText.toFixed(2))
    }
  }
  greeting('hola mundo')
  greeting(1.22223)
})()
