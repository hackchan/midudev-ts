
// la sobrecarga de funciones solo funciona con function
type customType = string | string[]

export function parseStr (arg: string): string[]
export function parseStr (arg: string[]): string

export function parseStr (arg: customType): customType {
  // code here...
  if (Array.isArray(arg)) {
    return arg.join('')
  } else {
    return arg.split('')
  }
}

const rtaArray = parseStr('hola')
console.log(rtaArray)

const stringPar = parseStr(['f', 'a', 'b', 'i', 'o'])
console.log(stringPar)
