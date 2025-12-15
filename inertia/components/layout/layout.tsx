import { useState, useEffect } from 'react'
import { Link } from '@inertiajs/react'
import { Button } from '../Button/button'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useLanguage } from '~/context/LanguageContext'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { t, language, toggleLanguage } = useLanguage()
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
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:shadow-xl focus:rounded-md"
      >
        {t.layout.skipToContent}
      </a>

      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <header className="flex items-center justify-between w-5/6 mx-auto">
          <h2 className="font-mono font-bold text-lg">
            <Link href="/" aria-label={t.layout.homeLabel}>
              Jules Merienne
            </Link>
          </h2>

          <nav className="hidden md:block" aria-label={t.layout.mainNavigation}>
            <ul className="flex gap-5.5">
              <li>
                <Link
                  className="hover:text-black/80 transition-all duration-300 ease-in-out active:font-bold"
                  href="/#projects"
                >
                  {t.layout.projects}
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-black/80 transition-all duration-300 ease-in-out active:font-bold"
                  href="/#about"
                >
                  {t.layout.about}
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-black/80 transition-all duration-300 ease-in-out active:font-bold"
                  href="/#skills"
                >
                  {t.layout.skills}
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-black/80 transition-all duration-300 ease-in-out active:font-bold"
                  href="/#contact"
                >
                  {t.layout.contact}
                </Link>
              </li>
            </ul>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="cursor-pointer text-sm font-medium hover:bg-black/5 transition-all text-black border border-black/20 rounded-full px-3 py-1.5 flex items-center gap-2"
              aria-label={language === 'fr' ? 'Switch to English' : 'Passer en français'}
            >
              <span className="font-bold">{language === 'fr' ? 'FR' : 'EN'}</span>
              <span className="text-lg leading-none">{language === 'fr' ? '🇫🇷' : '🇬🇧'}</span>
            </button>
            <a target="_blank" href="https://cal.com/jules-merienne-ou06tv">
              <Button icon={<ArrowUpRight strokeWidth={1} />}>{t.layout.bookCall}</Button>
            </a>
          </div>

          <button
            className="cursor-pointer md:hidden"
            onClick={() => setOpen(true)}
            aria-label={t.layout.openMenu}
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
        aria-label={t.layout.mobileMenu}
      >
        <button
          className="self-end cursor-pointer mr-4"
          onClick={() => setOpen(false)}
          aria-label={t.layout.closeMenu}
        >
          <X aria-hidden="true" />
        </button>

        <nav aria-label="Navigation mobile">
          <ul className="flex flex-col gap-4 text-lg">
            <li>
              <Link href="/#projects" onClick={() => setOpen(false)}>
                {t.layout.projects}
              </Link>
            </li>
            <li>
              <Link href="/#about" onClick={() => setOpen(false)}>
                {t.layout.about}
              </Link>
            </li>
            <li>
              <Link href="/#skills" onClick={() => setOpen(false)}>
                {t.layout.skills}
              </Link>
            </li>
            <li>
              <Link href="/#contact" onClick={() => setOpen(false)}>
                {t.layout.contact}
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  toggleLanguage()
                  setOpen(false)
                }}
                className="text-left w-full cursor-pointer flex items-center gap-2 font-medium py-2"
              >
                Change language:{' '}
                <span className="font-bold">{language === 'fr' ? 'FR 🇫🇷' : 'EN 🇬🇧'}</span>
              </button>
            </li>
          </ul>
        </nav>

        <a target="_blank" href="https://cal.com/jules-merienne-ou06tv">
          <Button icon={<ArrowUpRight strokeWidth={1} />}>{t.layout.bookCall}</Button>
        </a>
      </div>

      <main id="main-content" className="mx-4 min-w-11/12 sm:w-5/6 sm:mx-auto mt-32">
        {children}
      </main>

      <footer className="mt-24 py-12 border-t border-black/10">
        <div className="w-5/6 mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-black/60">
          <div>© {new Date().getFullYear()} Jules Merienne. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/julesmerienne"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/jules-merienne"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors"
            >
              LinkedIn
            </a>
            <Link href="/mentions-legales" className="hover:text-black transition-colors">
              {language === 'en' ? 'Legal Notice' : 'Mentions Légales'}
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}
