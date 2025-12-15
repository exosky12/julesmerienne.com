import Project from '#models/project'
import type { HttpContext } from '@adonisjs/core/http'

export default class SitemapController {
  async handle({ response }: HttpContext) {
    const projects = await Project.query().where('published', true)
    const baseUrl = 'https://julesmerienne.com'

    let xml = '<?xml version="1.0" encoding="UTF-8"?>'
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'

    // Static pages
    const staticPages = ['']

    staticPages.forEach((page) => {
      xml += '<url>'
      xml += `<loc>${baseUrl}${page}</loc>`
      xml += '<changefreq>weekly</changefreq>'
      xml += '<priority>1.0</priority>'
      xml += '</url>'
    })

    // Dynamic pages (Projects)
    projects.forEach((project) => {
      xml += '<url>'
      xml += `<loc>${baseUrl}/projects/${project.slug}</loc>`
      xml += `<lastmod>${project.updatedAt.toISODate()}</lastmod>`
      xml += '<changefreq>monthly</changefreq>'
      xml += '<priority>0.8</priority>'
      xml += '</url>'
    })

    xml += '</urlset>'

    response.header('Content-Type', 'application/xml')
    return response.send(xml)
  }
}
