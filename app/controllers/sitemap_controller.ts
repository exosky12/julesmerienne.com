import Project from '#models/project'
import type { HttpContext } from '@adonisjs/core/http'

export default class SitemapController {
  async handle({ response }: HttpContext) {
    const projects = await Project.query().where('published', true)
    const baseUrl = 'https://julesmerienne.com'

    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

    // Static pages
    const staticPages = ['/']

    staticPages.forEach((page) => {
      xml += '  <url>\n'
      xml += `    <loc>${baseUrl}${page}</loc>\n`
      xml += '    <changefreq>weekly</changefreq>\n'
      xml += '    <priority>1.0</priority>\n'
      xml += '  </url>\n'
    })

    // Dynamic pages (Projects)
    projects.forEach((project) => {
      xml += '  <url>\n'
      xml += `    <loc>${baseUrl}/projects/${project.slug}</loc>\n`
      xml += `    <lastmod>${project.updatedAt.toISODate()}</lastmod>\n`
      xml += '    <changefreq>monthly</changefreq>\n'
      xml += '    <priority>0.8</priority>\n'
      xml += '  </url>\n'
    })

    xml += '</urlset>'

    response.header('Content-Type', 'application/xml')
    return response.send(xml)
  }
}
