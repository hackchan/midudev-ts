import { IUser } from '../../types'
import { ROLES } from './01-enum'

const currentUser: IUser = {
  username: 'hackchan',
  role: ROLES.USER
}

// export const checkAdminRole = (): boolean => {
//   if (currentUser.role === ROLES.ADMIN) {
//     return true
//   }
//   return false
// }

// export const checkRole = (roles: string[]): boolean => {
//   if (roles.includes(currentUser.role)) {
//     return true
//   }
//   return false
// }

// rest params ...
export const checkRole = (...roles: string[]): boolean => {
  if (roles.includes(currentUser.role)) {
    return true
  }
  return false
}

console.log(checkRole(ROLES.ADMIN, ROLES.USER))
