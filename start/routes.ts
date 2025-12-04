/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const HomeController = () => import('#controllers/home_controller')
const LoginController = () => import('#controllers/login_controller')
const ProjectsController = () => import('#controllers/projects_controller')

router.get('/', [HomeController, 'render'])

router.get('/login', [LoginController, 'render'])
router.post('/login', [LoginController, 'store'])

router.get('/admin/projects', [ProjectsController, 'render'])
