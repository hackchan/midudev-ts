/** Sort Strings */
const months = ['March', 'Jan', 'Feb', 'Dec']

months.sort((n1, n2) => {
  if (n1 > n2) {
    return 1
  }

  if (n1 < n2) {
    return -1
  }

  return 0
})
console.log(months)

/** Sort Numbers */

const numbers: number[] = [1, 30, 4, 21, 100000]
numbers.sort((n1, n2) => n1 - n2)
console.log(numbers)

/** Sort especial characters */

const words = [
  'réservé',
  'premier',
  'communiqué',
  'café',
  'adieu',
  'éclair',
  'banana'
]
words.sort()
words.sort((a, b) => a.localeCompare(b))
console.log(words)
/** Sort Object */
const orders = [
  {
    customerName: 'Nicolas',
    total: 600,
    delivered: true,
    date: new Date(2021, 3, 8, 4)
  },
  {
    customerName: 'Zulema',
    total: 120,
    delivered: false,
    date: new Date(2021, 9, 12, 3)
  },
  {
    customerName: 'Santiago',
    total: 1840,
    delivered: true,
    date: new Date(2021, 8, 2, 2)
  },
  {
    customerName: 'Valentina',
    total: 240,
    delivered: true,
    date: new Date(2021, 1, 1, 9, 30)
  }
]
// orders.sort((a, b) => b.total - a.total)
orders.sort((a, b) => b.date.getTime() - a.date.getTime())
console.log(orders)
