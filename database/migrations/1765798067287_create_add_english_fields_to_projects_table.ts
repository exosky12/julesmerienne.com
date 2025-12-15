import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'projects'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('name_en').nullable()
      table.text('description_en').nullable()
      table.text('long_description_en').nullable()
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('name_en')
      table.dropColumn('description_en')
      table.dropColumn('long_description_en')
    })
  }
}
