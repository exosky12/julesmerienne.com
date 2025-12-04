import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { Technology } from '../types/technology.js'
import { Tag } from '../types/tag.js'

export default class Project extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare description: string

  @column({ prepare: (value: any[]) => JSON.stringify(value) })
  declare images: string[]

  @column({ prepare: (value: any[]) => JSON.stringify(value) })
  declare links: string[]

  @column({ prepare: (value: any[]) => JSON.stringify(value) })
  declare tags: Tag[]

  @column({ prepare: (value: any[]) => JSON.stringify(value) })
  declare technologies: Technology[]

  @column()
  declare published: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
