import { DateTime } from 'luxon'
import { BaseModel, column, beforeSave } from '@adonisjs/lucid/orm'
import string from '@adonisjs/core/helpers/string'
import { Technology } from '../types/technology.js'
import { Tag } from '../types/tag.js'

export default class Project extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare slug: string

  @column()
  declare description: string

  @column()
  declare longDescription: string | null

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

  @beforeSave()
  static async generateSlug(project: Project) {
    if (!project.slug) {
      project.slug = string.slug(project.name)
    }
  }
}
