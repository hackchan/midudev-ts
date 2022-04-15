export const withoutEnd = (): never => {
  while (true) {
    console.log('gaming..')
  }
}

export const fail = (message: string): never => {
  throw new Error(message)
}

const example = (input: unknown): unknown => {
  if (typeof input === 'string') {
    return 'es un string'
  } else if (Array.isArray(input)) {
    return 'es un Arrays'
  }
  return fail('not match')
}

console.log(example('fabio'))
console.log(example([12, 2, 2, 2]))
console.log(example(12))
