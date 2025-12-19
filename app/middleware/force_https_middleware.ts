import { HttpContext } from '@adonisjs/core/http'
import app from '@adonisjs/core/services/app'

export default class ForceHttpsMiddleware {
  async handle({ request, response }: HttpContext, next: () => Promise<void>) {
    if (app.inProduction) {
      const protocol = request.header('x-forwarded-proto') || request.protocol()
      const host = request.host()

      if (protocol === 'http' || host?.startsWith('www.')) {
        const newHost = host?.replace(/^www\./, '')
        return response.redirect(`https://${newHost}${request.url(true)}`, true, 301)
      }
    }
    await next()
  }
}
