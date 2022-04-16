import { IBaseModel } from '../base/base.model'
export enum ROLES {
  ADMIN = 'admin',
  USER = 'user',
  OWNER = 'owner'
}

export interface IUSER extends IBaseModel{
  id: string |number
  username: string
  role: ROLES
}
