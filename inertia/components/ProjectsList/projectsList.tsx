import { useState } from 'react'
import type Project from '#models/project'
import { getEnumOptions } from '~/utils/enums'
import { Tag } from '../../../app/types/tag'
import { Button } from '../Button/button'
import { Link } from '@inertiajs/react'

interface ProjectsProps {
  projects: Project[]
}

export const ProjectsList = ({ projects }: ProjectsProps) => {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([Tag.Tous])
  const tagOptions = getEnumOptions(Tag)

  const handleTagClick = (tag: Tag) => {
    if (tag === Tag.Tous) {
      setSelectedTags([Tag.Tous])
      return
    }

    let newTags = [...selectedTags]

    if (newTags.includes(Tag.Tous)) {
      newTags = []
    }

    if (newTags.includes(tag)) {
      newTags = newTags.filter((t) => t !== tag)
    } else {
      newTags.push(tag)
    }

    if (newTags.length === 0) {
      setSelectedTags([Tag.Tous])
    } else {
      setSelectedTags(newTags)
    }
  }

  const filteredProjects = projects.filter((project) => {
    if (selectedTags.includes(Tag.Tous)) return true
    return project.tags.some((tag) => selectedTags.includes(tag))
  })

  return (
    <section id="projects" className="flex flex-col gap-5.5">
      <div className="flex flex-col gap-10.5">
        <div className="flex flex-col gap-3.5">
          <h2 className="uppercase text-grey text-xl">Portfolio</h2>
          <h3 className="font-mono text-3xl">Projets sélectionnés</h3>
        </div>
        <div className="flex gap-2 flex-wrap">
          {tagOptions.map((tagOption) => {
            const isSelected = selectedTags.includes(tagOption.value as Tag)
            return (
              <Button
                key={tagOption.value}
                variant="secondary"
                onClick={() => handleTagClick(tagOption.value as Tag)}
                className={`transition-colors duration-200 ${
                  isSelected ? 'bg-black text-white hover:bg-black/90' : 'hover:bg-black/5'
                }`}
              >
                {tagOption.label}
              </Button>
            )
          })}
        </div>
      </div>
      <span className="text-grey font-semibold text-lg">
        {filteredProjects.length} projets trouvés
      </span>
      <div className="flex justify-between gap-x-4 gap-y-16 flex-wrap">
        {filteredProjects.map((project) => (
          <div className="flex max-w-1/4 min-w-[250px] flex-col gap-5.5" key={project.id}>
            <Link href={`/projects/${project.id}`}>
              <img
                className="w-full h-full object-cover aspect-video rounded-lg"
                src={project.images[0]}
                alt={project.name}
              />
            </Link>
            <div className="flex flex-col gap-3">
              <h2 className="font-mono text-3xl">{project.name}</h2>
              <div className="flex gap-2 flex-wrap">
                {project.tags.map((tag) => (
                  <Button key={tag} variant="outline" className="text-sm py-1 px-3">
                    {tag}
                  </Button>
                ))}
              </div>
              <p className="line-clamp-3">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
