import { Head, router } from '@inertiajs/react'
import { Button } from '~/components/Button/button'
import { useState } from 'react'
import Project from '#models/project'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '~/components/ui/dialog'
import { ProjectForm } from '~/components/Form/ProjectForm'

interface ProjectsProps {
  projects: Project[]
}

export default function Projects({ projects }: ProjectsProps) {
  const [editingProject, setEditingProject] = useState<Project | null>(null)

  const handleDelete = (id: number) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce projet ?')) {
      router.delete(`/admin/projects/${id}`)
    }
  }

  return (
    <div className="min-h-screen space-y-24 p-8 font-sans">
      <Head title="Admin - Projets" />

      {/* Admin Project List */}
      <div className="max-w-5xl mx-auto space-y-6">
        <h2 className="text-2xl font-bold">Projets existants</h2>
        <div className="grid gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white p-4 rounded-xl shadow-sm border border-black/5 flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={project.images[0]}
                  alt={project.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <h3 className="font-bold text-lg">{project.name}</h3>
                  <div className="flex gap-2 text-sm text-gray-500">
                    <span>{project.published ? 'Publié' : 'Brouillon'}</span>
                    <span>•</span>
                    <span>{project.tags.join(', ')}</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="secondary"
                  onClick={() => setEditingProject(project)}
                  className="text-sm py-1.5 px-3"
                >
                  Modifier
                </Button>
                <Button
                  variant="outline"
                  onClick={() => handleDelete(project.id)}
                  className="text-sm py-1.5 px-3 text-red-500 border-red-200 hover:bg-red-50"
                >
                  Supprimer
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black mb-2">Nouveau Projet</h1>
          <p className="text-black/60">Ajoutez un nouveau projet à votre portfolio.</p>
        </div>

        <ProjectForm />
      </div>

      <Dialog open={!!editingProject} onOpenChange={(open) => !open && setEditingProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Modifier "{editingProject?.name}"</DialogTitle>
          </DialogHeader>
          {editingProject && (
            <ProjectForm project={editingProject} onSuccess={() => setEditingProject(null)} />
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
