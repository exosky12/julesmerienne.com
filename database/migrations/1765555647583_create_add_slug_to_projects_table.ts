import { BaseSchema } from '@adonisjs/lucid/schema'
import string from '@adonisjs/core/helpers/string'

export default class extends BaseSchema {
  protected tableName = 'projects' // Changed to 'projects' as per the migration logic

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('slug').nullable()
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('slug')
    })
  }
}
