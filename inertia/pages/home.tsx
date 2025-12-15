import { Seo } from '~/components/SEO/Seo'
import { Hero } from '~/components/Hero/hero'
import { ProjectsList } from '~/components/ProjectsList/projectsList'
import type Project from '#models/project'
import { About } from '~/components/About/about'
import { useState, useEffect, lazy, Suspense } from 'react'
import { Skills } from '~/components/Skills/skills'
import { ClientOnly } from '~/components/ClientOnly/clientOnly'

import { useLanguage } from '~/context/LanguageContext'

// Lazy load non-critical components for SEO to improve performance
const GridLayers = lazy(() =>
  import('~/components/Grid/grid').then((module) => ({ default: module.GridLayers }))
)
const Contact = lazy(() =>
  import('~/components/Contact/contact').then((module) => ({ default: module.Contact }))
)

interface HomeProps {
  projects: Project[]
}

export default function Home({ projects }: HomeProps) {
  const { t } = useLanguage()
  const [variant, setVariant] = useState<number>(0)

  useEffect(() => {
    // Disable grid animation on mobile to improve performance
    if (window.innerWidth < 768) return

    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const newVariant = Math.floor(window.scrollY / 400) % 6
          setVariant(newVariant)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Seo title={t.seo.home} />
      <div className="fixed top-0 left-0 w-full h-screen -z-50 overflow-hidden transition-colors duration-700">
        <ClientOnly>
          <Suspense fallback={null}>
            <GridLayers showFog={true} variant={variant} />
          </Suspense>
        </ClientOnly>
      </div>
      <div className="flex flex-col gap-48">
        <div className="-mt-18 sm:mt-0">
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
        <div>
          <ClientOnly fallback={<div className="h-[400px]" />}>
            <Suspense fallback={<div className="h-[400px]" />}>
              <Contact />
            </Suspense>
          </ClientOnly>
        </div>
      </div>
    </>
  )
}
