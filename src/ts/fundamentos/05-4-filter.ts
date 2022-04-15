import { IOrders } from '../../types'
(() => {
  // modo noob
  const words: string[] = ['spray', 'limit', 'elite', 'exuberant']
  const orders: IOrders[] = [
    {
      customerName: 'Nicolas',
      total: 60,
      delivered: true
    },
    {
      customerName: 'Nicolay',
      total: 78,
      delivered: false
    },
    {
      customerName: 'Zulema',
      total: 120,
      delivered: false
    },
    {
      customerName: 'Santiago',
      total: 180,
      delivered: true
    },
    {
      customerName: 'Valentina',
      total: 240,
      delivered: true
    }
  ]
  const newArray = []
  for (let index = 0; index < words.length; index++) {
    const item: string = words[index]
    if (item.length >= 6) { newArray.push(item) }
  }
  console.log(newArray)

  const filterWords = words.filter(word => word.length >= 6)
  console.log(filterWords)

  const rta3 = orders.filter(item => item.delivered && item.total > 100)
  console.log(rta3)

  const search = (query: string): IOrders[] => {
    return orders.filter(item => {
      return item.customerName.includes(query)
    })
  }
  console.log(search('893urujd'))
})()
