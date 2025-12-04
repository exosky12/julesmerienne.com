import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'projects'

  async up() {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('name').notNullable()
      table.text('description').notNullable()
      table.jsonb('images').defaultTo('[]')
      table.jsonb('links').defaultTo('[]')
      table.jsonb('tags').defaultTo('[]')
      table.jsonb('technologies').defaultTo('[]')
      table.boolean('published').defaultTo(false)
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('name')
      table.dropColumn('description')
      table.dropColumn('images')
      table.dropColumn('links')
      table.dropColumn('tags')
      table.dropColumn('technologies')
      table.dropColumn('published')
    })
  }
}
