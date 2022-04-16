// cont arr: ReadonlyArray<number> = [1,2,3,4,5]
const number: readonly number[] = [1, 2, 3, 4, 5]
// number.push(6)
// number.pop()
number.filter((item) => { return item % 2 === 0 })
number.reduce(() => 0)
number.map(() => 0)
