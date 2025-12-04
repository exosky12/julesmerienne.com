import { Avatar } from '../Avatar/avatar'

export const About = () => {
  return (
    <section id="about" className="flex flex-col gap-5.5">
      <div className="flex flex-col gap-3.5">
        <h2 className="uppercase text-grey text-xl">À propos</h2>
        <h3 className="font-mono text-3xl">Qui suis-je</h3>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80">
          <Avatar />
        </div>
        <p className="text-lg w-full md:w-1/2">
          <span className="font-semibold">
            Passionné par la création d'expériences numériques exceptionnelles, je combine expertise
            technique et sensibilité design pour développer des applications web modernes et
            performantes.
          </span>{' '}
          <br />
          <br />
          <span className="text-grey">
            Avec plus de 4 ans d'expérience en développement front-end, back-end et product design,
            je m'efforce de créer des interfaces qui allient esthétique et fonctionnalité. Mon
            approche centrée utilisateur me permet de concevoir des solutions qui répondent aux
            besoins réels tout en offrant une expérience fluide et intuitive. <br /> <br />
            Je suis particulièrement intéressé par l'architecture logicielle, les systèmes de design
            et l'optimisation des performances. Mon objectif est de construire des produits qui font
            la différence.
          </span>
        </p>
      </div>
    </section>
  )
}
