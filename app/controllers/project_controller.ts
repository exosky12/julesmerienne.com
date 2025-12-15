import Project from '#models/project'
import type { HttpContext } from '@adonisjs/core/http'

export default class ProjectController {
  async render({ inertia, request }: HttpContext) {
    const project = await Project.findByOrFail('slug', request.param('slug'))

    // Find next project
    let nextProject = await Project.query()
      .where('id', '>', project.id)
      .where('published', true)
      .orderBy('id', 'asc')
      .first()

    // Variable wrapping necessary to avoid "null" if last project
    if (!nextProject) {
      nextProject = await Project.query().where('published', true).orderBy('id', 'asc').first()
    }

    return inertia.render('project', { project, nextProject })
  }
}
