export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string

}

// export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>
export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>

export interface IOrders {
  customerName: string
  total: number
  delivered: boolean
  tax?: number
}

export interface IProducts {
  title: string
  price: number
  id: string
  description?: string
}
// alias type
export type UserID = string | number | boolean

// literal type
export type ShirtSize = 'S' | 'XS' | 'M' | 'L' | 'XL' | 'XXL'
export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
export type Visibility = 'great' | 'good' | 'ok' | 'poor'

// Enums
export declare enum ROLES {
  ADMIN = 'admin',
  USER = 'user',
  OWNER = 'owner'
}

// interfaces
export interface Product {
  title: string
  createdAt: Date
  stock: number
  size?: Sizes
}

export interface IUser {
  username: string
  role: ROLES

}
