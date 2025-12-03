import { Link, usePage } from '@inertiajs/react'
import { Button } from '../Button/button'
import { ArrowUpRight } from 'lucide-react'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className="flex items-center justify-between w-5/6 mt-6 mx-auto">
        <h2 className="font-mono font-bold text-lg">Jules Merienne</h2>
        <nav>
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
        <Button icon={<ArrowUpRight strokeWidth={1} />}>Réserver un appel</Button>
      </header>
      {children}
      <footer className="text-center bg-slate-500 text-sm font-mono">
        <p>© {new Date().getFullYear()} Jules Merienne</p>
      </footer>
    </>
  )
}
