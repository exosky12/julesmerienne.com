import { HttpContext } from '@adonisjs/core/http'
import app from '@adonisjs/core/services/app'

export default class ForceHttpsMiddleware {
  async handle({ request, response }: HttpContext, next: () => Promise<void>) {
    if (app.inProduction) {
      const protocol = request.header('x-forwarded-proto') || request.protocol()

      if (protocol === 'http') {
        return response.redirect(`https://${request.host()}${request.url(true)}`, true, 301)
      }
    }
    await next()
  }
}
