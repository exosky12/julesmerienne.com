import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  async up() {
    this.defer(async (db) => {
      await db.rawQuery('UPDATE projects SET slug = LOWER(slug)')
    })
  }

  async down() {
    // No reversible action for lowercasing strings without backup
  }
}
