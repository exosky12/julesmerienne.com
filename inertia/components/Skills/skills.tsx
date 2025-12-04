export const Skills = () => {
  return (
    <section id="skills" className="flex flex-col gap-16">
      <div className="flex flex-col gap-10.5">
        <div className="flex flex-col gap-3.5">
          <h2 className="uppercase text-grey text-xl">Frontend</h2>
          <ul className="flex gap-3.5 flex-wrap">
            <li className="text-xl">React</li>
            <li className="text-xl">Vue</li>
            <li className="text-xl">Next</li>
            <li className="text-xl">TailwindCSS</li>
            <li className="text-xl">SCSS</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3.5">
          <h2 className="uppercase text-grey text-xl">Backend</h2>
          <ul className="flex gap-3.5 flex-wrap">
            <li className="text-xl">Node</li>
            <li className="text-xl">Adonis</li>
            <li className="text-xl">Express</li>
            <li className="text-xl">PHP</li>
            <li className="text-xl">C#</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3.5">
          <h2 className="uppercase text-grey text-xl">Design</h2>
          <ul className="flex gap-3.5 flex-wrap">
            <li className="text-xl">Figma</li>
            <li className="text-xl">UI/UX Design</li>
            <li className="text-xl">Prototyping</li>
            <li className="text-xl">Design Systems</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3.5">
          <h2 className="uppercase text-grey text-xl">Outils</h2>
          <ul className="flex gap-3.5 flex-wrap">
            <li className="text-xl">Agile</li>
            <li className="text-xl">Git</li>
            <li className="text-xl">CI/CD</li>
            <li className="text-xl">Testing</li>
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
