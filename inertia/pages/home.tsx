import { Head } from '@inertiajs/react'
import { Hero } from '~/components/Hero/hero'
import { GridLayers } from '~/components/Grid/grid'

export default function Home() {
  return (
    <>
      <Head title="Accueil" />
      <div className="absolute top-0 left-0 w-full h-screen -z-50 overflow-hidden">
        <GridLayers />
      </div>
      <Hero />
    </>
  )
}
