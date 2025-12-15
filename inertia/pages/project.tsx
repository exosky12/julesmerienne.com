import { Seo } from '~/components/SEO/Seo'
import Project from '#models/project'
import { GridLayers } from '~/components/Grid/grid'
import { Button } from '~/components/Button/button'
import { Tag } from '~/components/Tag/tag'
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useCallback, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'

interface ProjectProps {
  project: Project
}

export default function ProjectPage({ project }: ProjectProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  // Extract year safely
  const projectYear = project.createdAt
    ? new Date(project.createdAt as unknown as string).getFullYear()
    : new Date().getFullYear()

  // Helper to determine link label
  const getLinkLabel = (url: string) => {
    if (url.includes('github.com')) return 'Code Source'
    if (url.includes('figma.com')) return 'Design Figma'
    return 'Site internet'
  }

  const handleNext = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation()
      if (selectedImageIndex === null) return
      setSelectedImageIndex((prev) => (prev === null ? null : (prev + 1) % project.images.length))
    },
    [selectedImageIndex, project.images.length]
  )

  const handlePrev = useCallback(
    (e?: React.MouseEvent) => {
      e?.stopPropagation()
      if (selectedImageIndex === null) return
      setSelectedImageIndex((prev) =>
        prev === null ? null : (prev - 1 + project.images.length) % project.images.length
      )
    },
    [selectedImageIndex, project.images.length]
  )

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return

      if (e.key === 'ArrowRight') handleNext()
      if (e.key === 'ArrowLeft') handlePrev()
      if (e.key === 'Escape') setSelectedImageIndex(null)
    }

    if (selectedImageIndex !== null) {
      window.addEventListener('keydown', handleKeyDown)
    }

    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImageIndex, handleNext, handlePrev])

  return (
    <>
      <Seo
        title={project.name}
        description={project.description}
        image={project.images[0]}
        type="article"
      />

      {/* Image Modal */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedImageIndex(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 bg-black/50 hover:bg-white/10 rounded-full z-[110]"
            onClick={() => setSelectedImageIndex(null)}
          >
            <X size={24} />
          </button>

          {project.images.length > 1 && (
            <>
              <button
                className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-3 bg-black/50 hover:bg-white/10 rounded-full z-[110]"
                onClick={handlePrev}
              >
                <ChevronLeft size={32} />
              </button>

              <button
                className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-3 bg-black/50 hover:bg-white/10 rounded-full z-[110]"
                onClick={handleNext}
              >
                <ChevronRight size={32} />
              </button>
            </>
          )}

          <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
            <img
              key={selectedImageIndex} // Force re-render for animation
              src={project.images[selectedImageIndex]}
              alt={`View ${selectedImageIndex + 1}`}
              className="max-w-full max-h-[85vh] md:max-h-[90vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-200 pointer-events-auto select-none"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Image counter */}
            {project.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white/90 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                {selectedImageIndex + 1} / {project.images.length}
              </div>
            )}
          </div>
        </div>
      )}

      <div className="fixed top-0 left-0 w-full h-screen -z-50 overflow-hidden">
        <GridLayers showFog={true} variant={2} />
      </div>

      <div className="flex flex-col gap-12 pb-24 animate-in fade-in duration-700 slide-in-from-bottom-4">
        {/* Header Section */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-4">
            <h1 className="text-5xl md:text-7xl font-bold font-mono tracking-tight text-black">
              {project.name}
            </h1>
            <div className="bg-black text-white px-3 py-1.5 rounded-lg text-sm font-mono font-medium">
              {projectYear}
            </div>
          </div>

          <div className="space-y-3">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map(
                (tag, i) =>
                  tag !== 'Tous' && (
                    <Tag
                      key={i}
                      text={tag}
                      appearance="outline"
                      className="rounded-full border-black/20 text-black px-4"
                    />
                  )
              )}
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <Tag
                  variant="sm"
                  key={i}
                  text={tech}
                  appearance="outline"
                  className="rounded-full border-black/20 text-black/70 px-3"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div className="space-y-6">
            {/* Mobile/Tablet Slider */}
            <div className="lg:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 -mx-4 px-4 pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
              {project.images.map((img, i) => (
                <div
                  key={i}
                  className="snap-center shrink-0 w-[85vw] aspect-square rounded-3xl overflow-hidden bg-black shadow-sm relative"
                  onClick={() => setSelectedImageIndex(i)}
                >
                  <img
                    src={img}
                    alt={`${project.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Desktop Grid */}
            <div className="hidden lg:block space-y-6">
              <div
                className="rounded-3xl overflow-hidden shadow-2xl shadow-black/5 bg-black aspect-square group relative cursor-magnifier"
                onClick={() => setSelectedImageIndex(0)}
              >
                <img
                  src={project.images[0]}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100 cursor-magnifier"
                />
              </div>

              {project.images.length > 1 && (
                <div className="grid grid-cols-3 gap-4">
                  {project.images.slice(1).map((img, i) => (
                    <div
                      key={i}
                      className="rounded-2xl overflow-hidden shadow-sm aspect-square bg-black cursor-magnifier group relative"
                      onClick={() => setSelectedImageIndex(i + 1)}
                    >
                      <img
                        src={img}
                        alt={`${project.name} screenshot ${i + 2}`}
                        className="w-full h-full object-cover hover:opacity-90 transition-all duration-300 group-hover:scale-105 cursor-magnifier"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Description, Summary, Links */}
          <div className="space-y-8">
            {/* Long Description (Main Content) */}
            <div className="prose prose-lg max-w-none text-black/80 font-sans leading-relaxed">
              <ReactMarkdown
                components={{
                  h1: ({ node, ...props }) => (
                    <h1
                      className="text-2xl font-bold font-mono text-black mt-8 mb-4 first:mt-0"
                      {...props}
                    />
                  ),
                  h2: ({ node, ...props }) => (
                    <h2
                      className="text-xl font-bold font-mono text-black mt-8 mb-4 first:mt-0"
                      {...props}
                    />
                  ),
                  h3: ({ node, ...props }) => (
                    <h3 className="text-lg font-bold font-mono text-black mt-6 mb-3" {...props} />
                  ),
                  p: ({ node, ...props }) => (
                    <p className="mb-4 leading-relaxed text-black/80" {...props} />
                  ),
                  ul: ({ node, ...props }) => (
                    <ul className="list-disc pl-5 mb-4 space-y-1 text-black/80" {...props} />
                  ),
                  ol: ({ node, ...props }) => (
                    <ol className="list-decimal pl-5 mb-4 space-y-1 text-black/80" {...props} />
                  ),
                  strong: ({ node, ...props }) => (
                    <strong className="font-bold text-black" {...props} />
                  ),
                }}
              >
                {project.longDescription || project.description}
              </ReactMarkdown>
            </div>

            {/* Summary Box (Short Description) - Only show if we have a long description distinct from the short one */}
            {project.longDescription && project.description && (
              <div className="bg-[#F3F3F3] p-6 rounded-2xl border border-black/5">
                <p className="text-black/80 leading-relaxed font-medium">{project.description}</p>
              </div>
            )}

            {/* Links */}
            <div className="flex flex-wrap gap-4 pt-4">
              {project.links.map((link, i) => (
                <a key={i} href={link} target="_blank" rel="noopener noreferrer">
                  <Button
                    className="bg-black text-white hover:bg-black/90 rounded-full px-6 py-3 text-base font-medium flex items-center gap-2 shadow-none hover:shadow-lg transition-all"
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
