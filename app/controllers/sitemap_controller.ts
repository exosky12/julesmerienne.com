import Project from '#models/project'
import type { HttpContext } from '@adonisjs/core/http'

export default class SitemapController {
  async handle({ response }: HttpContext) {
    const projects = await Project.query().where('published', true).select(['slug', 'updated_at'])

    const baseUrl = 'https://julesmerienne.dev'

    const urls: string[] = []

    urls.push(`
      <url>
        <loc>${baseUrl}/</loc>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
      </url>
    `)

    for (const project of projects) {
      urls.push(`
        <url>
          <loc>${baseUrl}/projects/${project.slug.toLowerCase()}/</loc>
          <lastmod>${project.updatedAt.toISODate()}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.8</priority>
        </url>
      `)
    }

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`

    response
      .header('Content-Type', 'application/xml')
      .header('Cache-Control', 'public, max-age=3600')

    return response.send(xml)
  }
}
