import { Seo } from '~/components/SEO/Seo'
import { Hero } from '~/components/Hero/hero'
import { GridLayers } from '~/components/Grid/grid'
import type Project from '#models/project'
import { useState, useEffect, lazy, Suspense } from 'react'

const ProjectsList = lazy(() =>
  import('~/components/ProjectsList/projectsList').then((module) => ({
    default: module.ProjectsList,
  }))
)
const About = lazy(() =>
  import('~/components/About/about').then((module) => ({ default: module.About }))
)
const Skills = lazy(() =>
  import('~/components/Skills/skills').then((module) => ({ default: module.Skills }))
)
const Contact = lazy(() =>
  import('~/components/Contact/contact').then((module) => ({ default: module.Contact }))
)

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
      <Seo title="Accueil" />
      <div className="fixed top-0 left-0 w-full h-screen -z-50 overflow-hidden transition-colors duration-700">
        <GridLayers showFog={true} variant={variant} />
      </div>
      <div className="flex flex-col gap-48">
        <div className="-mt-18 sm:mt-0">
          <Hero />
        </div>
        <Suspense fallback={<div className="h-[500px]" />}>
          <div>
            <ProjectsList projects={projects} />
          </div>
        </Suspense>
        <Suspense fallback={<div className="h-[400px]" />}>
          <div>
            <About />
          </div>
        </Suspense>
        <Suspense fallback={<div className="h-[400px]" />}>
          <div>
            <Skills />
          </div>
        </Suspense>
        <Suspense fallback={<div className="h-[400px]" />}>
          <div>
            <Contact />
          </div>
        </Suspense>
      </div>
    </>
  )
}
