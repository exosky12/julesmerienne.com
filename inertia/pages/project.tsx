import { Head } from '@inertiajs/react'
import Project from '#models/project'
import { GridLayers } from '~/components/Grid/grid'
import { Button } from '~/components/Button/button'
import { Tag } from '~/components/Tag/tag'
import { ArrowUpRight } from 'lucide-react'

interface ProjectProps {
  project: Project
}

export default function ProjectPage({ project }: ProjectProps) {
  // Helper to determine link label
  const getLinkLabel = (url: string) => {
    if (url.includes('github.com')) return 'Code Source'
    if (url.includes('figma.com')) return 'Design Figma'
    return 'Site internet'
  }

  return (
    <>
      <Head title={project.name} />

      <div className="fixed top-0 left-0 w-full h-screen -z-50 overflow-hidden">
        <GridLayers variant={2} />
      </div>

      <div className="flex flex-col gap-12 pb-24 animate-in fade-in duration-700 slide-in-from-bottom-4">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold font-mono tracking-tight text-black">
            {project.name}
          </h1>

          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {project.tags.map(
                (tag, i) => tag !== 'Tous' && <Tag key={i} text={tag} appearance="outline" />
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <Tag variant='sm' key={i} text={tech} appearance="outline" />
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div className="space-y-6">
            <div className="rounded-3xl overflow-hidden shadow-2xl shadow-black/5 bg-black aspect-square group relative">
              <img
                src={project.images[0]}
                alt={project.name}
                className="w-full h-full object-cover"
              />
            </div>

            {project.images.length > 1 && (
              <div className="grid grid-cols-3 gap-4">
                {project.images.slice(1, 4).map((img, i) => (
                  <div
                    key={i}
                    className="rounded-2xl overflow-hidden shadow-sm aspect-square bg-black"
                  >
                    <img
                      src={img}
                      alt={`${project.name} screenshot ${i + 2}`}
                      className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-12">
            <div className="prose prose-lg max-w-none text-black/80 font-sans leading-relaxed whitespace-pre-wrap">
              {project.longDescription || project.description}
            </div>

            <div className="flex flex-wrap gap-4">
              {project.links.map((link, i) => (
                <a key={i} href={link} target="_blank" rel="noopener noreferrer">
                  <Button
                    className="bg-black text-white hover:bg-black/90 rounded-full px-6 py-3 text-base font-medium flex items-center gap-2"
                    icon={<ArrowUpRight size={18} />}
                  >
                    {getLinkLabel(link)}
                  </Button>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
