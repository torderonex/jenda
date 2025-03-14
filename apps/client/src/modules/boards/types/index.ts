import type { User } from '@/modules/auth/types'

interface DateParams {
  createdAt?: Date
  updatedAt?: Date
  deletedAt?: Date
}

export interface Label {
  id?: string
  name: string
  color: string
}

export type Status = 'active' | 'archived'

export type Priority = 'none' | 'low' | 'medium' | 'high'

export interface BoardRow extends Omit<Board, 'columns'> {
  tasks?: number
}

export interface Board extends DateParams {
  _id: string
  name: string
  columns?: Column[]
  status: Status
  labels: Label[]
  users: User[]
  color?: string
  estimate?: number
  creator?: User
  // fix
  date?: string
}

export interface Card extends DateParams {
  _id: string
  title: string
  priority?: Priority
  labels?: Label[]
  subtasks?: Pick<Card, 'title' | '_id'>[]
  users: User[],
  estimate?: number
  comments?: string[]
}

export interface Column extends DateParams {
  _id: string
  title: string
  description?: string
  cards?: Card[]
  estimate?: number
}

export interface StatusBadge {
  _id: string
  indicator: string
  status: Status
}
