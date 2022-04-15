import { IOrders } from '../../types'

(() => {
  const orders: IOrders[] = [
    {
      customerName: 'Nicolas',
      total: 60,
      delivered: true
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
  console.log(orders)
  const rta = orders.map(item => item.total)
  console.log(rta)

  /** A pesar de que map es Inmutable si yo hago modificacion tener presente
   * que map hace uso de la referencia en memoria y modifica el  Array orioginal
   * para evitar esto se debe clonar el objecto.
   */
  // const rta2 = orders.map((item) => {
  //   item.tax = 0.19
  //   return item
  // })
  // console.log(rta2)
  // console.log(orders)

  // evitar modificacion del objeto original
  const rta3 = orders.map((item) => {
    return {
      ...item,
      tax: 0.19
    }
  })
  console.log(rta3)
  console.log(orders)
})()
