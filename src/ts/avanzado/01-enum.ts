import { IUser } from '../../types'
export enum ROLES {
  ADMIN = 'admin',
  USER = 'user',
  OWNER = 'owner'
}

const fabi: IUser = {
  username: 'hackchan',
  role: ROLES.ADMIN
}

console.log(fabi)
