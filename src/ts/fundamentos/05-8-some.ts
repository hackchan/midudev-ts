import { IOrders } from '../../types'
import areIntervalsOverlapping from 'date-fns/areIntervalsOverlapping'
(() => {
  const items: number[] = [1, 1, 3, 4]
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
  const dates = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: 'Cita de trabajo'
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: 'Cita con mi jefe'
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: 'Cena'
    }
  ]

  const rta2 = items.some(item => item % 2 === 0)
  console.log(rta2)

  const rta3 = orders.some(item => item.delivered)
  console.log(rta3)

  const isOverlap = (newDate: { startDate: any, endDate: any }): boolean => {
    return dates.some(date => {
      return areIntervalsOverlapping({ start: date.startDate, end: date.endDate }, { start: newDate.startDate, end: newDate.endDate })
    })
  }
  const newAppoitment = {
    startDate: new Date(2021, 1, 1, 8),
    endDate: new Date(2021, 1, 1, 9, 30)
  }
  console.log(isOverlap(newAppoitment))
})()
