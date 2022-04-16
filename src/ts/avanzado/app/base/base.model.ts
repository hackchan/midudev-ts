export type Id = string | number
export interface IBaseModel {
  readonly id: Id
  readonly createdAt: Date
}
