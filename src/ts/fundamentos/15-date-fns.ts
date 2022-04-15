import { subDays, format } from 'date-fns'

const date = new Date()

const rta = subDays(date, 15070)
const str = format(rta, 'yyyy/MM/dd')

console.log(str)
