import env from '#start/env'
import { defineConfig } from '@adonisjs/lucid'

/*
|--------------------------------------------------------------------------
| Détermination de la configuration de connexion
|--------------------------------------------------------------------------
|
| On vérifie si DATABASE_URL existe (Heroku).
| Sinon, on utilise les variables locales (Docker).
|
*/
const dbConnectionConfig = env.get('DATABASE_URL')
  ? {
      connectionString: env.get('DATABASE_URL'),
      ssl: { rejectUnauthorized: false },
    }
  : {
      host: env.get('DB_HOST'),
      port: env.get('DB_PORT'),
      user: env.get('DB_USER'),
      password: env.get('DB_PASSWORD'),
      database: env.get('DB_DATABASE'),
      ssl: false,
    }

export default defineConfig({
  connection: 'pg',
  connections: {
    pg: {
      client: 'pg',
      connection: dbConnectionConfig,
      migrations: {
        naturalSort: true,
        paths: ['database/migrations'],
      },
    },
  },
})
