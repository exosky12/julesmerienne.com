import type { HttpContext } from '@adonisjs/core/http'
import Project from '#models/project'

export default class HomeController {
  async render({ inertia }: HttpContext) {
    const projects = await Project.all()
    return inertia.render('home', { projects })
  }
}
