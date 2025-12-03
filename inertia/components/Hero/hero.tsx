import { ArrowUpRight } from 'lucide-react'
import { Avatar } from '../Avatar/avatar'
import { Button } from '../Button/button'
import { Available } from '../Available/available'

export const Hero = () => {
  return (
    <section id="hero" className="flex md:ml-[20%] flex-col items-left justify-center gap-3">
      <Avatar />
      <h1 className="font-semibold text-4xl md:text-5xl leading-[1.1]">
        Salut, je suis Jules Merienne! <br /> <span className="text-grey">Je suis</span>{' '}
        <span className="text-orange">Développeur</span> <span className="text-grey">&</span>{' '}
        <span className="text-orange">Designer</span> <span className="text-grey">à</span> <br />
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
      <Button icon={<ArrowUpRight strokeWidth={1} />}>Réserver un appel</Button>
    </section>
  )
}
