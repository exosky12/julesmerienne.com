import { Link } from '@inertiajs/react'
import { GridLayers } from '~/components/Grid/grid'
import { Seo } from '~/components/SEO/Seo'
import { Button } from '~/components/Button/button'
import { Layout } from '~/components/layout/layout'
import { ArrowLeft } from 'lucide-react'
import { useLanguage } from '~/context/LanguageContext'

export default function NotFound() {
  const { t } = useLanguage()

  return (
    <Layout>
      <Seo title={`404 - ${t.notFound.title}`} />

      <div className="fixed top-0 left-0 w-full h-full -z-50 overflow-hidden">
        <GridLayers showFog={true} variant={0} />
      </div>

      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center gap-8 px-4 animate-in fade-in zoom-in-95 duration-500">
        <h1 className="text-[10rem] leading-none font-mono font-bold text-black/5 select-none absolute z-0 pointer-events-none">
          404
        </h1>
        <div className="relative z-10 flex flex-col items-center gap-6">
          <h2 className="text-3xl md:text-5xl font-bold font-mono text-black">
            {t.notFound.title}
          </h2>

          <p className="text-lg text-black/60 max-w-md">{t.notFound.description}</p>

          <Link href="/">
            <Button icon={<ArrowLeft size={18} />}>{t.notFound.back}</Button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}
