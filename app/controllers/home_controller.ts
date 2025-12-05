import type { HttpContext } from '@adonisjs/core/http'
import Project from '#models/project'
import mail from '@adonisjs/mail/services/main'
import { ContactValidator } from '#validators/contact'

export default class HomeController {
  async render({ inertia }: HttpContext) {
    const projects = await Project.all()
    return inertia.render('home', { projects })
  }

  async sendEmail({ request }: HttpContext) {
    const { name, email, message } = await ContactValidator.validate(
      request.only(['name', 'email', 'message'])
    )

    try {
      await mail.send((msg) => {
        msg
          .to('julesmerienne06@gmail.com')
          .from('Jules Merienne <onboarding@resend.dev>')
          .replyTo(email)
          .subject('Nouveau message de contact')
          .htmlView('emails/contact', { name, email, message })
      })
    } catch (error) {
      console.error('Error sending email:', error)
      throw error
    }
  }
}
