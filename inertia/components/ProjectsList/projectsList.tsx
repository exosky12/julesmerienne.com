import type Project from '#models/project'
import { getEnumOptions } from '~/utils/enums'
import { Tag } from '../../../app/types/tag'
import { Button } from '../Button/button'

interface ProjectsProps {
  projects: Project[]
}

export const ProjectsList = ({ projects }: ProjectsProps) => {
  const tagOptions = getEnumOptions(Tag)
  return (
    <section id="projects" className="flex flex-col gap-5.5">
      <div className="flex flex-col gap-10.5">
        <div className="flex flex-col gap-3.5">
          <h2 className="uppercase text-grey text-xl">Portfolio</h2>
          <h3 className="font-mono text-3xl">Projets sélectionnés</h3>
        </div>
        <div className="flex gap-2 flex-wrap">
          {tagOptions.map((tag) => (
            <Button key={tag.value} variant="secondary">
              {tag.label}
            </Button>
          ))}
        </div>
      </div>
      <span className="text-grey font-semibold text-lg">{projects.length} projets trouvés</span>
      <div className="flex justify-between gap-y-16 flex-wrap">
        {projects.map((project) => (
          <div className="flex max-w-1/3 min-w-[250px] flex-col gap-5.5" key={project.id}>
            <img src={project.images[0]} alt={project.name} />
            <div className="flex flex-col gap-3">
              <h2 className="font-mono text-3xl">{project.name}</h2>
              <div className="flex gap-2 flex-wrap">
                {project.tags.map((tag) => (
                  <Button key={tag} variant="outline">
                    {tag}
                  </Button>
                ))}
              </div>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
