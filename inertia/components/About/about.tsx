import { Avatar } from '../Avatar/avatar'
import { useLanguage } from '~/context/LanguageContext'

export const About = () => {
  const { t } = useLanguage()
  return (
    <section id="about" className="flex flex-col gap-5.5">
      <div className="flex flex-col gap-3.5">
        <h2 className="uppercase text-grey text-xl">{t.about.title}</h2>
        <h3 className="font-mono text-3xl">{t.about.subtitle}</h3>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80">
          <Avatar />
        </div>
        <p className="text-lg w-full md:w-1/2">
          <span className="font-semibold">{t.about.p1}</span> <br />
          <br />
          <span className="text-grey">
            {t.about.p2} <br /> <br />
            {t.about.p3}
          </span>
        </p>
      </div>
    </section>
  )
}
