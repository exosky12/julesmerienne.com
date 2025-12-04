import { Head } from '@inertiajs/react'
import { Hero } from '~/components/Hero/hero'
import { GridLayers } from '~/components/Grid/grid'
import { ProjectsList } from '~/components/ProjectsList/projectsList'
import type Project from '#models/project'
import { About } from '~/components/About/about'
import { useState, useEffect } from 'react'
import { Skills } from '~/components/Skills/skills'

interface HomeProps {
  projects: Project[]
}

export default function Home({ projects }: HomeProps) {
  const [variant, setVariant] = useState<number>(0)

  useEffect(() => {
    const handleScroll = () => {
      const newVariant = Math.floor(window.scrollY / 400) % 6
      setVariant(newVariant)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Head title="Accueil" />
      <div className="fixed top-0 left-0 w-full h-screen -z-50 overflow-hidden transition-colors duration-700">
        <GridLayers variant={variant} />
      </div>
      <div className="flex flex-col gap-48">
        <div>
          <Hero />
        </div>
        <div>
          <ProjectsList projects={projects} />
        </div>
        <div>
          <About />
        </div>
        <div>
          <Skills />
        </div>
      </div>
    </>
  )
}
