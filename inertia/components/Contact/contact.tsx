import { useForm } from '@inertiajs/react'
import { FormEvent } from 'react'
import { Input } from '../Input/input'
import { Button } from '../Button/button'
import { Send } from 'lucide-react'
import { useLanguage } from '~/context/LanguageContext'

export const Contact = () => {
  const { t } = useLanguage()
  const { data, setData, post, processing, errors, reset, recentlySuccessful } = useForm({
    name: '',
    email: '',
    message: '',
  })

  const submit = (e: FormEvent) => {
    e.preventDefault()
    post('/contact', {
      preserveScroll: true,
      onSuccess: () => reset(),
    })
  }

  return (
    <section id="contact" className="flex flex-col gap-16">
      <div className="flex flex-col gap-13">
        <div className="flex flex-col gap-3.5">
          <h2 className="uppercase text-grey text-xl">{t.contact.title}</h2>
          <h3 className="font-mono text-3xl">{t.contact.subtitle}</h3>
        </div>
        <form className="flex flex-col gap-13" onSubmit={submit}>
          <Input
            label={t.contact.name}
            name="name"
            placeholder={t.contact.namePlaceholder}
            required
            value={data.name}
            onChange={(e) => setData('name', e.target.value)}
            error={errors.name}
          />
          <Input
            label={t.contact.email}
            name="email"
            type="email"
            placeholder={t.contact.emailPlaceholder}
            required
            value={data.email}
            onChange={(e) => setData('email', e.target.value)}
            error={errors.email}
          />
          <Input
            label={t.contact.message}
            name="message"
            type="textarea"
            placeholder={t.contact.messagePlaceholder}
            required
            value={data.message}
            onChange={(e) => setData('message', e.target.value)}
            error={errors.message}
          />
          <div className="flex flex-col gap-4">
            <Button disabled={processing} icon={<Send strokeWidth={1} />}>
              {processing ? t.contact.sending : t.contact.send}
            </Button>
            {recentlySuccessful && (
              <p className="text-green-600 font-medium">{t.contact.success}</p>
            )}
          </div>
        </form>
      </div>
      <div className="flex justify-between md:flex-row gap-y-10 flex-col">
        <p className="md:max-w-3/5 w-full">
          <span className="text-xl font-semibold">{t.contact.ctaTitle}</span> <br /> <br />
          <span className="text-lg text-grey">{t.contact.ctaSubtitle}</span>
        </p>
        <div className="flex flex-col justify-end gap-2.5 text-grey font-semibold">
          <a href="mailto:julesmerienne@gmail.com">
            <div className="flex items-center gap-3.5">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M29.3337 9.3335L17.3457 16.9695C16.9388 17.2058 16.4768 17.3302 16.0063 17.3302C15.5359 17.3302 15.0738 17.2058 14.667 16.9695L2.66699 9.3335M5.33366 5.3335H26.667C28.1398 5.3335 29.3337 6.5274 29.3337 8.00016V24.0002C29.3337 25.4729 28.1398 26.6668 26.667 26.6668H5.33366C3.8609 26.6668 2.66699 25.4729 2.66699 24.0002V8.00016C2.66699 6.5274 3.8609 5.3335 5.33366 5.3335Z"
                  stroke="#969696"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span>julesmerienne@gmail.com</span>
            </div>
          </a>
          <a href="https://linkedin.com/in/jules-merienne" target="_blank">
            <div className="flex items-center gap-3.5">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M21.3337 10.6665C23.4554 10.6665 25.4902 11.5094 26.9905 13.0097C28.4908 14.5099 29.3337 16.5448 29.3337 18.6665V27.9998H24.0003V18.6665C24.0003 17.9593 23.7194 17.281 23.2193 16.7809C22.7192 16.2808 22.0409 15.9998 21.3337 15.9998C20.6264 15.9998 19.9481 16.2808 19.448 16.7809C18.9479 17.281 18.667 17.9593 18.667 18.6665V27.9998H13.3337V18.6665C13.3337 16.5448 14.1765 14.5099 15.6768 13.0097C17.1771 11.5094 19.2119 10.6665 21.3337 10.6665Z"
                  stroke="#969696"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.00033 11.9998H2.66699V27.9998H8.00033V11.9998Z"
                  stroke="#969696"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.33366 7.99984C6.80642 7.99984 8.00033 6.80593 8.00033 5.33317C8.00033 3.86041 6.80642 2.6665 5.33366 2.6665C3.8609 2.6665 2.66699 3.86041 2.66699 5.33317C2.66699 6.80593 3.8609 7.99984 5.33366 7.99984Z"
                  stroke="#969696"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>linkedin.com/in/jules-merienne</span>
            </div>
          </a>
          <a href="https://github.com/exosky12" target="_blank">
            <div className="flex items-center gap-3.5">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M20.0003 29.3332V23.9998C20.1858 22.3296 19.7069 20.6533 18.667 19.3332C22.667 19.3332 26.667 16.6665 26.667 11.9998C26.7737 10.3332 26.307 8.69317 25.3337 7.33317C25.707 5.79984 25.707 4.19984 25.3337 2.6665C25.3337 2.6665 24.0003 2.6665 21.3337 4.6665C17.8137 3.99984 14.187 3.99984 10.667 4.6665C8.00033 2.6665 6.66699 2.6665 6.66699 2.6665C6.26699 4.19984 6.26699 5.79984 6.66699 7.33317C5.69616 8.68768 5.22496 10.3369 5.33366 11.9998C5.33366 16.6665 9.33366 19.3332 13.3337 19.3332C12.8137 19.9865 12.427 20.7332 12.2003 21.5332C11.9737 22.3332 11.907 23.1732 12.0003 23.9998M12.0003 23.9998V29.3332M12.0003 23.9998C5.98699 26.6665 5.33366 21.3332 2.66699 21.3332"
                  stroke="#969696"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <span>github.com/exosky12</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
