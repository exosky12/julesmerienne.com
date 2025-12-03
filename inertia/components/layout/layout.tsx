import { useState } from 'react'
import { Link } from '@inertiajs/react'
import { Button } from '../Button/button'
import { ArrowUpRight, Menu, X } from 'lucide-react'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="z-50 flex items-center justify-between w-5/6 mt-6 mx-auto">
        <h2 className="font-mono font-bold text-lg">Jules Merienne</h2>

        <nav className="hidden md:block">
          <ul className="flex gap-5.5">
            <li>
              <Link
                className="hover:text-black/80 transition-all duration-300 ease-in-out active:font-bold"
                href="#projects"
              >
                Projets
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-black/80 transition-all duration-300 ease-in-out active:font-bold"
                href="#about"
              >
                À propos
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-black/80 transition-all duration-300 ease-in-out active:font-bold"
                href="#blog"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-black/80 transition-all duration-300 ease-in-out active:font-bold"
                href="#contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="hidden md:block">
          <Button icon={<ArrowUpRight strokeWidth={1} />}>Réserver un appel</Button>
        </div>

        <button className="cursor-pointer md:hidden" onClick={() => setOpen(true)}>
          <Menu />
        </button>
      </header>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/20 backdrop-blur-xs transition-opacity duration-300"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 z-50 h-full w-3/4 max-w-xs bg-white shadow-xl transition-transform duration-300 ease-out p-6 flex flex-col gap-6 ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <button className="self-end cursor-pointer mr-4" onClick={() => setOpen(false)}>
          <X />
        </button>

        <nav>
          <ul className="flex flex-col gap-4 text-lg">
            <li>
              <Link href="#projects" onClick={() => setOpen(false)}>
                Projets
              </Link>
            </li>
            <li>
              <Link href="#about" onClick={() => setOpen(false)}>
                À propos
              </Link>
            </li>
            <li>
              <Link href="#blog" onClick={() => setOpen(false)}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="#contact" onClick={() => setOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <Button icon={<ArrowUpRight strokeWidth={1} />}>Réserver un appel</Button>
      </div>

      <div className="w-5/6 mx-auto mt-32">{children}</div>
    </>
  )
}
