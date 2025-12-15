import { Technology } from '../../../app/types/technology'

export const Skills = () => {
  const frontend = [
    Technology.React,
    Technology.Vue,
    Technology.Next,
    Technology.MAUI,
    Technology.TailwindCSS,
    Technology.SCSS,
  ]

  const backend = [
    Technology.Node,
    Technology.Adonis,
    Technology.Express,
    Technology.PHP,
    Technology.CSharp,
    Technology.DotNet,
    Technology.AspNet,
  ]

  const server = [
    Technology.PostgreSQL,
    Technology.MySQL,
    Technology.Serverless,
    Technology.Docker,
    Technology.CI_CD,
  ]

  const design = [
    Technology.Figma,
    Technology.UIUXDesign,
    Technology.Prototyping,
    Technology.DesignSystems,
  ]

  const tools = [Technology.Agile, Technology.Git, Technology.Testing]

  return (
    <section id="skills" className="flex flex-col gap-16">
      <div className="flex flex-col gap-10.5">
        <div className="flex flex-col gap-3.5">
          <h2 className="uppercase text-grey text-xl">Frontend</h2>
          <ul className="flex gap-3.5 flex-wrap">
            {frontend.map((tech) => (
              <li key={tech} className="text-xl">
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-3.5">
          <h2 className="uppercase text-grey text-xl">Backend</h2>
          <ul className="flex gap-3.5 flex-wrap">
            {backend.map((tech) => (
              <li key={tech} className="text-xl">
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-3.5">
          <h2 className="uppercase text-grey text-xl">Serveur</h2>
          <ul className="flex gap-3.5 flex-wrap">
            {server.map((tech) => (
              <li key={tech} className="text-xl">
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-3.5">
          <h2 className="uppercase text-grey text-xl">Design</h2>
          <ul className="flex gap-3.5 flex-wrap">
            {design.map((tech) => (
              <li key={tech} className="text-xl">
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-3.5">
          <h2 className="uppercase text-grey text-xl">Outils</h2>
          <ul className="flex gap-3.5 flex-wrap">
            {tools.map((tech) => (
              <li key={tech} className="text-xl">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-center gap-23.5">
        <span>
          <span className="text-6xl font-semibold">4+</span>
          <br />
          <span className="text-lg">années d'expérience</span>
        </span>

        <span>
          <span className="text-6xl font-semibold">20+</span>
          <br />
          <span className="text-lg">projets réalisés</span>
        </span>
      </div>
    </section>
  )
}
