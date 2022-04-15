
(() => {
  // const myNumber: number
  // let myString: string

  // const myNull: null = null
  // const myUndefined: undefined = undefined

  let myNumber: number | null = null
  myNumber = 21
  console.log(myNumber)

  const myString: string | undefined = 'hola'.toUpperCase()
  console.log(myString)

  function hi (name: string | null): void {
    let helo = 'Hola '
    if (name != null) {
      helo += name
    } else {
      helo += 'nobody'
    }
    console.log(helo)
  }
  hi('fabio')
  hi(null)

  function hello (name: string | null): void {
    let helo = 'Hola '
    helo += name?.toLocaleLowerCase() ?? 'nobody'
    console.log(helo)
  }
  hello('fabio')
  hello(null)
})()
