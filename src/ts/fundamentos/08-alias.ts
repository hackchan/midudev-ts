import { UserID, ShirtSize } from '../../types'
(() => {
  let userId: UserID
  userId = 10
  userId = 'sdsds'
  console.log(userId)

  function greeting (myText: UserID): void {
    if (typeof myText === 'string') {
      console.log(myText.toUpperCase())
    } else if (typeof myText === 'number') {
      console.log(myText.toFixed(2))
    }
  }
  greeting('hola mundo')
  greeting(1.22223)

  // literal types
  let shirtSize: ShirtSize
  shirtSize = 'M'
  shirtSize = 'L'
  shirtSize = 'M'
  shirtSize = 'XXL'
  console.log(shirtSize)
})()
