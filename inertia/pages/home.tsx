import { Head } from '@inertiajs/react'
import { Hero } from '~/components/Hero/hero'
import { GridLayers } from '~/components/Grid/grid'
import { ProjectsList } from '~/components/ProjectsList/projectsList'
import type Project from '#models/project'

interface HomeProps {
  projects: Project[]
}

export default function Home({ projects }: HomeProps) {
  return (
    <>
      <Head title="Accueil" />
      <div className="absolute top-0 left-0 w-full h-screen -z-50 overflow-hidden">
        <GridLayers />
      </div>
      <div className="flex flex-col gap-48">
        <Hero />
        <ProjectsList projects={projects} />
      </div>
    </>
  )
}
