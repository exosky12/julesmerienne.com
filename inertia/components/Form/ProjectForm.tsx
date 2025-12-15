import React from 'react'
import { useForm, router } from '@inertiajs/react'
import { Button } from '~/components/Button/button'
import { Input } from '~/components/Input/input'
import { ChipSelector } from '~/components/Form/ChipSelector'
import { Tag } from '../../../app/types/tag'
import { Technology } from '../../../app/types/technology'
import Project from '#models/project'
import { getEnumOptions } from '~/utils/enums'

interface ProjectFormData {
  name: string
  description: string
  longDescription: string
  nameEn: string
  descriptionEn: string
  longDescriptionEn: string
  images: File[]
  existing_images: string[]
  links: string[]
  tags: Tag[]
  technologies: Technology[]
  published: boolean
}

interface ProjectFormProps {
  project?: Project | null
  onSuccess?: () => void
}

export const ProjectForm = ({ project, onSuccess }: ProjectFormProps) => {
  const { data, setData, post, processing, errors, progress, setError, clearErrors, reset } =
    useForm<ProjectFormData>({
      name: project?.name || '',
      description: project?.description || '',
      longDescription: project?.longDescription || '',
      nameEn: project?.nameEn || '',
      descriptionEn: project?.descriptionEn || '',
      longDescriptionEn: project?.longDescriptionEn || '',
      images: [],
      existing_images: project?.images || [],
      links: project?.links || [],
      tags: (project?.tags as Tag[]) || [Tag.Tous],
      technologies: (project?.technologies as Technology[]) || [],
      published: project?.published || false,
    })

  const tagOptions = getEnumOptions(Tag)
  const technologyOptions = getEnumOptions(Technology)

  function submit(e: React.FormEvent) {
    e.preventDefault()
    clearErrors()

    let hasErrors = false

    if (!data.name.trim()) {
      setError('name', 'Le nom est requis')
      hasErrors = true
    }
    if (!data.description.trim()) {
      setError('description', 'La description est requise')
      hasErrors = true
    }
    if (!data.longDescription.trim()) {
      setError('longDescription', 'La description détaillée est requise')
      hasErrors = true
    }
    if (data.images.length === 0 && data.existing_images.length === 0) {
      alert('Veuillez ajouter au moins une image')
      hasErrors = true
    }
    if (data.links.length === 0) {
      setError('links', 'Au moins un lien est requis')
      hasErrors = true
    }
    if (data.tags.length === 0) {
      setError('tags', 'Au moins un tag est requis')
      hasErrors = true
    }
    if (data.technologies.length === 0) {
      setError('technologies', 'Au moins une technologie est requise')
      hasErrors = true
    }

    if (hasErrors) return

    if (project) {
      router.post(
        `/admin/projects/${project.id}`,
        {
          ...data,
        },
        {
          forceFormData: true,
          onSuccess: () => {
            reset()
            onSuccess?.()
          },
        }
      )
    } else {
      post('/admin/projects', {
        forceFormData: true,
        onSuccess: () => {
          reset()
          onSuccess?.()
        },
      })
    }
  }

  const removeExistingImage = (imageToRemove: string) => {
    setData(
      'existing_images',
      data.existing_images.filter((img) => img !== imageToRemove)
    )
  }

  React.useEffect(() => {
    return () => {
      data.images.forEach((file) => URL.revokeObjectURL(URL.createObjectURL(file)))
    }
  }, [data.images])

  return (
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
          <label className="text-sm font-medium text-black/70 ml-1">Description courte</label>
          <textarea
            className={`
               w-full px-4 py-3 rounded-xl bg-white border border-black/5 
               focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black/20
               placeholder:text-black/30 text-black transition-all duration-200
               shadow-[0px_2px_4px_rgba(0,0,0,0.02)] min-h-[80px] resize-y
               ${errors.description ? 'border-red-500 focus:border-red-500 focus:ring-red-500/10' : ''}
             `}
            value={data.description}
            onChange={(e) => setData('description', e.target.value)}
            placeholder="Description courte pour la liste..."
          />
          {errors.description && (
            <span className="text-xs text-red-500 ml-1 font-medium">{errors.description}</span>
          )}
        </div>

        <div className="flex flex-col gap-1.5 w-full">
          <label className="text-sm font-medium text-black/70 ml-1">Description détaillée</label>
          <textarea
            className={`
               w-full px-4 py-3 rounded-xl bg-white border border-black/5 
               focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black/20
               placeholder:text-black/30 text-black transition-all duration-200
               shadow-[0px_2px_4px_rgba(0,0,0,0.02)] min-h-[200px] resize-y
               ${errors.longDescription ? 'border-red-500 focus:border-red-500 focus:ring-red-500/10' : ''}
             `}
            value={data.longDescription}
            onChange={(e) => setData('longDescription', e.target.value)}
            placeholder="Description complète du projet..."
          />
          {errors.longDescription && (
            <span className="text-xs text-red-500 ml-1 font-medium">{errors.longDescription}</span>
          )}
        </div>

        <div className="border-t border-black/10 my-4 pt-6"></div>
        <h3 className="text-xl font-mono font-bold">Version Anglaise (Optionnel)</h3>

        <Input
          type="text"
          label="Project Name (EN)"
          value={data.nameEn}
          onChange={(e) => setData('nameEn', e.target.value)}
          error={errors.nameEn}
          placeholder="Ex: My Awesome Project"
        />

        <div className="flex flex-col gap-1.5 w-full">
          <label className="text-sm font-medium text-black/70 ml-1">Short Description (EN)</label>
          <textarea
            className={`
               w-full px-4 py-3 rounded-xl bg-white border border-black/5 
               focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black/20
               placeholder:text-black/30 text-black transition-all duration-200
               shadow-[0px_2px_4px_rgba(0,0,0,0.02)] min-h-[80px] resize-y
               ${errors.descriptionEn ? 'border-red-500 focus:border-red-500 focus:ring-red-500/10' : ''}
             `}
            value={data.descriptionEn}
            onChange={(e) => setData('descriptionEn', e.target.value)}
            placeholder="Short description for the list..."
          />
        </div>

        <div className="flex flex-col gap-1.5 w-full">
          <label className="text-sm font-medium text-black/70 ml-1">
            Detailed Description (EN)
          </label>
          <textarea
            className={`
               w-full px-4 py-3 rounded-xl bg-white border border-black/5 
               focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black/20
               placeholder:text-black/30 text-black transition-all duration-200
               shadow-[0px_2px_4px_rgba(0,0,0,0.02)] min-h-[200px] resize-y
               ${errors.longDescriptionEn ? 'border-red-500 focus:border-red-500 focus:ring-red-500/10' : ''}
             `}
            value={data.longDescriptionEn}
            onChange={(e) => setData('longDescriptionEn', e.target.value)}
            placeholder="Full project description..."
          />
        </div>
        <div className="border-b border-black/10 my-4 pb-2"></div>

        <div className="flex flex-col gap-3">
          <label className="text-sm font-medium text-black/70 ml-1">Images</label>

          {data.existing_images.length > 0 && (
            <div className="mb-4">
              <p className="text-xs text-gray-500 mb-2">Images actuelles :</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {data.existing_images.map((img, i) => (
                  <div key={i} className="relative aspect-video group">
                    <img
                      src={img}
                      className="w-full h-full object-cover rounded-lg border border-black/5"
                    />
                    <button
                      type="button"
                      onClick={() => removeExistingImage(img)}
                      className="absolute top-1 right-1 bg-white/90 text-red-500 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-sm hover:bg-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="border-2 border-dashed border-black/10 rounded-xl p-8 text-center hover:bg-black/5 transition-colors cursor-pointer relative">
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={(e) => {
                if (e.target.files) {
                  setData('images', [...data.images, ...Array.from(e.target.files)])
                }
              }}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <div className="flex flex-col items-center gap-2 text-black/40">
              <span className="text-2xl">📷</span>
              <span className="text-sm">Glissez vos images ici ou cliquez pour parcourir</span>
            </div>
          </div>

          {data.images.length > 0 && (
            <div className="mt-4">
              <p className="text-xs text-gray-500 mb-2">Nouvelles images :</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {data.images.map((file, index) => (
                  <div key={index} className="relative aspect-video group">
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`Preview ${index}`}
                      className="w-full h-full object-cover rounded-lg border border-black/5"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setData(
                          'images',
                          data.images.filter((_, i) => i !== index)
                        )
                      }
                      className="absolute top-1 right-1 bg-white/90 text-red-500 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-sm hover:bg-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {progress && (
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-black h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${progress.percentage}%` }}
              ></div>
            </div>
          )}
        </div>

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
          {processing ? 'Enregistrement...' : project ? 'Mettre à jour' : 'Publier le projet'}
        </Button>
      </div>
    </form>
  )
}
