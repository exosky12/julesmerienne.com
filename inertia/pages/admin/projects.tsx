import { Head, useForm } from '@inertiajs/react'
import { Button } from '~/components/Button/button'
import { Input } from '~/components/Input/input'
import { ChipSelector } from '~/components/Form/ChipSelector'
import { Tag } from '../../../app/types/tag'
import { Technology } from '../../../app/types/technology'
import React from 'react'
import { ProjectsList } from '~/components/ProjectsList/projectsList'
import Project from '#models/project'

import { getEnumOptions } from '~/utils/enums'

interface ProjectFormData {
  name: string
  description: string
  images: string[]
  links: string[]
  tags: Tag[]
  technologies: Technology[]
  published: boolean
}

interface ProjectsProps {
  projects: Project[]
}

export default function Projects({ projects }: ProjectsProps) {
  const { data, setData, post, processing, errors } = useForm<ProjectFormData>({
    name: '',
    description: '',
    images: [],
    links: [],
    tags: [],
    technologies: [],
    published: false,
  })

  const tagOptions = getEnumOptions(Tag)
  const technologyOptions = getEnumOptions(Technology)

  function submit(e: React.FormEvent) {
    e.preventDefault()
    post('/admin/projects')
  }

  return (
    <div className="min-h-screen p-8 font-sans">
      <Head title="Admin - Créer un projet" />

      <ProjectsList projects={projects} />

      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black mb-2">Nouveau Projet</h1>
          <p className="text-black/60">Ajoutez un nouveau projet à votre portfolio.</p>
        </div>

        <form
          onSubmit={submit}
          className="bg-white rounded-2xl p-8 shadow-sm border border-black/5 space-y-6"
        >
          <div className="grid grid-cols-1 gap-6">
            <Input
              type="text"
              label="Nom du projet"
              value={data.name}
              onChange={(e) => setData('name', e.target.value)}
              error={errors.name}
              placeholder="Ex: Mon Super Projet"
            />

            <div className="flex flex-col gap-1.5 w-full">
              <label className="text-sm font-medium text-black/70 ml-1">Description</label>
              <textarea
                className={`
                   w-full px-4 py-3 rounded-xl bg-white border border-black/5 
                   focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black/20
                   placeholder:text-black/30 text-black transition-all duration-200
                   shadow-[0px_2px_4px_rgba(0,0,0,0.02)] min-h-[120px] resize-y
                   ${errors.description ? 'border-red-500 focus:border-red-500 focus:ring-red-500/10' : ''}
                 `}
                value={data.description}
                onChange={(e) => setData('description', e.target.value)}
                placeholder="Description détaillée du projet..."
              />
              {errors.description && (
                <span className="text-xs text-red-500 ml-1 font-medium">{errors.description}</span>
              )}
            </div>

            <Input
              type="text"
              label="Images (URLs séparées par des virgules)"
              value={data.images.join(', ')}
              onChange={(e) =>
                setData(
                  'images',
                  e.target.value
                    .split(',')
                    .map((s) => s.trim())
                    .filter(Boolean)
                )
              }
              error={errors.images}
              placeholder="https://..., https://..."
            />

            <Input
              type="text"
              label="Liens (URLs séparées par des virgules)"
              value={data.links.join(', ')}
              onChange={(e) =>
                setData(
                  'links',
                  e.target.value
                    .split(',')
                    .map((s) => s.trim())
                    .filter(Boolean)
                )
              }
              error={errors.links}
              placeholder="https://github.com/..., https://site.com"
            />

            <ChipSelector
              label="Tags"
              options={tagOptions}
              value={data.tags}
              onChange={(value) => setData('tags', value)}
              error={errors.tags}
            />

            <ChipSelector
              label="Technologies"
              options={technologyOptions}
              value={data.technologies}
              onChange={(value) => setData('technologies', value)}
              error={errors.technologies}
            />

            <div className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 border border-black/5">
              <input
                type="checkbox"
                id="published"
                className="w-5 h-5 rounded border-gray-300 text-black focus:ring-black/20"
                checked={data.published}
                onChange={(e) => setData('published', e.target.checked)}
              />
              <label
                htmlFor="published"
                className="text-sm font-medium text-black cursor-pointer select-none"
              >
                Publier ce projet immédiatement
              </label>
            </div>
          </div>

          <div className="pt-4 flex justify-end">
            <Button type="submit" disabled={processing} className="w-full sm:w-auto">
              {processing ? 'Publication...' : 'Publier le projet'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
