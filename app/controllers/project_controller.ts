import Project from '#models/project'
import type { HttpContext } from '@adonisjs/core/http'

export default class ProjectController {
  async render({ inertia, request }: HttpContext) {
    const project = await Project.findOrFail(request.param('id'))
    return inertia.render('project', { project })
  }
}
