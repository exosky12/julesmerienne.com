import { useState } from 'react'
import type Project from '#models/project'
import { getEnumOptions } from '~/utils/enums'
import { Tag as TagEnum } from '../../../app/types/tag'
import { Tag } from '~/components/Tag/tag'
import { Link } from '@inertiajs/react'

interface ProjectsProps {
  projects: Project[]
}

export const ProjectsList = ({ projects }: ProjectsProps) => {
  const [selectedTags, setSelectedTags] = useState<TagEnum[]>([TagEnum.Tous])
  const tagOptions = getEnumOptions(TagEnum)

  const handleTagClick = (tag: TagEnum) => {
    if (tag === TagEnum.Tous) {
      setSelectedTags([TagEnum.Tous])
      return
    }

    let newTags = [...selectedTags]

    if (newTags.includes(TagEnum.Tous)) {
      newTags = []
    }

    if (newTags.includes(tag)) {
      newTags = newTags.filter((t) => t !== tag)
    } else {
      newTags.push(tag)
    }

    if (newTags.length === 0) {
      setSelectedTags([TagEnum.Tous])
    } else {
      setSelectedTags(newTags)
    }
  }

  const filteredProjects = projects.filter((project) => {
    if (selectedTags.includes(TagEnum.Tous)) return true
    return project.tags.some((tag) => selectedTags.includes(tag as unknown as TagEnum))
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
            const isSelected = selectedTags.includes(tagOption.value as TagEnum)
            return (
              <Tag
                key={tagOption.value}
                text={tagOption.label}
                appearance={isSelected ? 'filled' : 'outline'}
                onClick={() => handleTagClick(tagOption.value as TagEnum)}
                className={`transition-all duration-200 ${!isSelected && 'hover:bg-black/5'}`}
              />
            )
          })}
        </div>
      </div>
      <span className="text-grey font-semibold text-lg">
        {filteredProjects.length} projets trouvés
      </span>
      <div className="flex justify-between gap-x-4 gap-y-16 flex-wrap">
        {filteredProjects.map((project) => (
          <Link
            href={`/projects/${project.id}`}
            className="flex max-w-1/4 min-w-[350px] flex-col gap-5.5 group cursor-pointer"
            key={project.id}
          >
            <div className="w-full aspect-square rounded-lg overflow-hidden relative">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                src={project.images[0]}
                alt={project.name}
              />
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="font-mono text-3xl group-hover:text-gray-600 transition-colors duration-300">
                {project.name}
              </h2>
              <div className="flex gap-2 flex-wrap">
                {project.tags.map((tag) => (
                  <Tag key={tag} text={tag} appearance="outline" />
                ))}
              </div>
              <p className="line-clamp-3">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
