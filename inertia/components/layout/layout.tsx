import { useState, useEffect } from 'react'
import { Link } from '@inertiajs/react'
import { Button } from '../Button/button'
import { ArrowUpRight, Menu, X } from 'lucide-react'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <a
        href="#main-content"
        className="fixed top-4 left-4 z-100 -translate-y-[150%] rounded-md bg-black px-4 py-2 text-white transition-transform focus:translate-y-0"
      >
        Aller au contenu principal
      </a>

      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <header className="flex items-center justify-between w-5/6 mx-auto">
          <h2 className="font-mono font-bold text-lg">
            <Link href="/" aria-label="Jules Merienne - Retour à l'accueil">
              Jules Merienne
            </Link>
          </h2>

          <nav className="hidden md:block" aria-label="Navigation principale">
            <ul className="flex gap-5.5">
              <li>
                <Link
                  className="hover:text-black/80 transition-all duration-300 ease-in-out active:font-bold"
                  href="/#projects"
                >
                  Projets
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-black/80 transition-all duration-300 ease-in-out active:font-bold"
                  href="/#about"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-black/80 transition-all duration-300 ease-in-out active:font-bold"
                  href="/#skills"
                >
                  Compétences
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-black/80 transition-all duration-300 ease-in-out active:font-bold"
                  href="/#contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="hidden md:block">
            <a target="_blank" href="https://cal.com/jules-merienne-ou06tv">
              <Button icon={<ArrowUpRight strokeWidth={1} />}>Réserver un appel</Button>
            </a>
          </div>

          <button
            className="cursor-pointer md:hidden"
            onClick={() => setOpen(true)}
            aria-label="Ouvrir le menu"
            aria-expanded={open}
          >
            <Menu aria-hidden="true" />
          </button>
        </header>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/20 backdrop-blur-xs transition-opacity duration-300"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        className={`fixed top-0 right-0 z-50 h-full w-3/4 max-w-xs bg-white shadow-xl transition-transform duration-300 ease-out p-6 flex flex-col gap-6 ${open ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu mobile"
      >
        <button
          className="self-end cursor-pointer mr-4"
          onClick={() => setOpen(false)}
          aria-label="Fermer le menu"
        >
          <X aria-hidden="true" />
        </button>

        <nav aria-label="Navigation mobile">
          <ul className="flex flex-col gap-4 text-lg">
            <li>
              <Link href="/#projects" onClick={() => setOpen(false)}>
                Projets
              </Link>
            </li>
            <li>
              <Link href="/#about" onClick={() => setOpen(false)}>
                À propos
              </Link>
            </li>
            <li>
              <Link href="/#skills" onClick={() => setOpen(false)}>
                Compétences
              </Link>
            </li>
            <li>
              <Link href="/#contact" onClick={() => setOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <a target="_blank" href="https://cal.com/jules-merienne-ou06tv">
          <Button icon={<ArrowUpRight strokeWidth={1} />}>Réserver un appel</Button>
        </a>
      </div>

      <main id="main-content" className="mx-4 min-w-11/12 sm:w-5/6 sm:mx-auto mt-32">
        {children}
      </main>

      <footer className="mt-24"></footer>
    </>
  )
}
