
// la sobrecarga de funciones solo funciona con function

export function parseStr (input: string | string []): string | string [] {
  if (Array.isArray(input)) {
    return input.join('')
  } else {
    return input.split('')
  }
}
const rtas = parseStr('hola')
if (Array.isArray(rtas)) { console.log(rtas) }

const stringPar = parseStr(['f', 'a', 'b', 'i', 'o'])
console.log(stringPar)
