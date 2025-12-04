import Project from '#models/project'
import type { HttpContext } from '@adonisjs/core/http'

export default class ProjectsController {
  async render({ inertia }: HttpContext) {
    const projects = await Project.all()
    return inertia.render('admin/projects', { projects })
  }
    
  async store({ request, response }: HttpContext) {
    const { name, description, images, links, tags, technologies, published } = request.only([
      'name',
      'description',
      'images',
      'links',
      'tags',
      'technologies',
      'published',
    ])
    await Project.create({ name, description, images, links, tags, technologies, published })
    return response.redirect('/admin/projects')
  }
}
