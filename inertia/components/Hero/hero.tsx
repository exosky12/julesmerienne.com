import { ArrowUpRight } from 'lucide-react'
import { Avatar } from '../Avatar/avatar'
import { Button } from '../Button/button'
import { useLanguage } from '~/context/LanguageContext'
import { Available } from '../Available/available'

export const Hero = () => {
  const { t } = useLanguage()
  return (
    <section id="hero" className="flex flex-col items-left justify-center gap-3">
      <div className="w-32 h-32">
        <Avatar />
      </div>
      <h1 className="font-semibold text-4xl md:text-5xl leading-[1.1]">
        {t.hero.hi} <br /> <span className="text-grey">{t.hero.im}</span>{' '}
        <span className="text-orange">{t.hero.developer}</span> <span className="text-grey">&</span>{' '}
        <span className="text-orange">{t.hero.designer}</span>{' '}
        <span className="text-grey">{t.hero.at}</span> <br />
        <span className="space-x-4">
          <span>
            <span className="text-purple">
              Innovation Performance <br /> Analytics
            </span>
            .
          </span>
          <Available />
        </span>
      </h1>
      <a target="_blank" href="https://cal.com/jules-merienne-ou06tv">
        <Button icon={<ArrowUpRight strokeWidth={1} />}>{t.layout.bookCall}</Button>
      </a>
    </section>
  )
}
