/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
import { contact } from '#start/limiter'

const HomeController = () => import('#controllers/home_controller')
const LoginController = () => import('#controllers/login_controller')
const ProjectsController = () => import('#controllers/projects_controller')
const ProjectController = () => import('#controllers/project_controller')
const SitemapController = () => import('#controllers/sitemap_controller')

router.get('/sitemap.xml', [SitemapController, 'handle'])

router.get('/', [HomeController, 'render'])
router.post('/contact', [HomeController, 'sendEmail']).use(contact)

router.get('/projects/:slug', [ProjectController, 'render'])

router.get('/login', [LoginController, 'render'])
router.post('/login', [LoginController, 'store'])
router.get('/logout', [LoginController, 'destroy']).use(middleware.auth())

router
  .group(() => {
    router.get('/projects', [ProjectsController, 'render'])
    router.post('/projects', [ProjectsController, 'store'])
    router.post('/projects/:id', [ProjectsController, 'update'])
    router.delete('/projects/:id', [ProjectsController, 'destroy'])
  })
  .prefix('/admin')
  .use(middleware.auth())
