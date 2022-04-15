// let anyVar: any

// anyVar = true
// anyVar = undefined
// anyVar = null
// anyVar = 1
// anyVar = []
// anyVar = {}

// console.log(anyVar)

// const isNew: boolean = anyVar
// console.log(isNew)
// anyVar.dosomething()

let anyVar: unknown

anyVar = true
anyVar = undefined
anyVar = null
anyVar = 1
anyVar = []
anyVar = {}

console.log(anyVar)

if (typeof anyVar === 'string') {
  anyVar.toUpperCase()
}

if (typeof anyVar === 'boolean') {
  const isNew: boolean = anyVar
  console.log(isNew)
}

const parse = (str: string): unknown => {
  return JSON.parse(str)
}
console.log(parse('{"name":"fabio"}'))
