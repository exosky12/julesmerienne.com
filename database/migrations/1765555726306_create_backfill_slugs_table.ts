import { BaseSchema } from '@adonisjs/lucid/schema'
import string from '@adonisjs/core/helpers/string'

export default class extends BaseSchema {
  protected tableName = 'projects'

  async up() {
    // Backfill slugs
    const projects = await this.db.from(this.tableName).select('id', 'name')
    for (const project of projects) {
      await this.db
        .from(this.tableName)
        .where('id', project.id)
        .update({ slug: `${string.slug(project.name)}-${project.id}` })
    }

    this.schema.alterTable(this.tableName, (table) => {
      table.string('slug').notNullable().unique().alter()
    })
  }

  async down() {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('slug').nullable().alter()
      table.dropUnique(['slug'])
    })
  }
}
