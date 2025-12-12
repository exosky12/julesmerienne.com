import Project from '#models/project'
import type { HttpContext } from '@adonisjs/core/http'
import { cuid } from '@adonisjs/core/helpers'
import { put } from '@vercel/blob'
import { readFile } from 'node:fs/promises'

export default class ProjectsController {
  async render({ inertia }: HttpContext) {
    const projects = await Project.all()
    return inertia.render('admin/projects', { projects })
  }

  async store({ request, response }: HttpContext) {
    const data = request.only([
      'name',
      'description',
      'longDescription',
      'links',
      'tags',
      'technologies',
      'published',
    ])

    const images = request.files('images', {
      size: '10mb',
      extnames: ['jpg', 'png', 'jpeg', 'webp'],
    })

    const imagePaths: string[] = []

    for (const image of images) {
      if (image.isValid && image.tmpPath) {
        const fileName = `${cuid()}.${image.extname}`
        const file = await readFile(image.tmpPath)
        const { url } = await put(fileName, file, { access: 'public' })
        imagePaths.push(url)
      }
    }

    await Project.create({ ...data, images: imagePaths })
    return response.redirect('/admin/projects')
  }
  async update({ request, response, params }: HttpContext) {
    const project = await Project.findOrFail(params.id)
    const data = request.only([
      'name',
      'description',
      'longDescription',
      'links',
      'tags',
      'technologies',
      'published',
    ])
    const existingImages = request.input('existing_images', []) as string[]

    const images = request.files('images', {
      size: '10mb',
      extnames: ['jpg', 'png', 'jpeg', 'webp'],
    })

    const imagePaths: string[] = Array.isArray(existingImages) ? existingImages : []

    for (const image of images) {
      if (image.isValid && image.tmpPath) {
        const fileName = `${cuid()}.${image.extname}`
        const file = await readFile(image.tmpPath)
        const { url } = await put(fileName, file, { access: 'public' })
        imagePaths.push(url)
      }
    }

    await project.merge({ ...data, images: imagePaths }).save()
    return response.redirect('/admin/projects')
  }

  async destroy({ params, response }: HttpContext) {
    const project = await Project.findOrFail(params.id)
    await project.delete()
    return response.redirect('/admin/projects')
  }
}
