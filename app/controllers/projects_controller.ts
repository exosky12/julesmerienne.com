import type { HttpContext } from '@adonisjs/core/http'

export default class ProjectsController {
  async render({ inertia }: HttpContext) {
    return inertia.render('admin/projects')
  }
}
