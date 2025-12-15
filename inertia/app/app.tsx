/// <reference path="../../adonisrc.ts" />
/// <reference path="../../config/inertia.ts" />

import '../css/app.css'
import { hydrateRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/react'
import { resolvePageComponent } from '@adonisjs/inertia/helpers'
import { Layout } from '~/components/layout/layout'
import { LanguageProvider } from '~/context/LanguageContext'

if (typeof window !== 'undefined') {
  const apiKey = import.meta.env.VITE_POSTHOG_API_KEY
  if (!apiKey) {
    console.warn(
      'PostHog API Key is missing! Check your VITE_POSTHOG_API_KEY environment variable.'
    )
  } else {
    const initPostHog = async () => {
      const { default: posthog } = await import('posthog-js')
      posthog.init(apiKey, {
        api_host: import.meta.env.VITE_POSTHOG_HOST || 'https://eu.i.posthog.com',
        person_profiles: 'identified_only',
      })
    }

    // Defer initialization
    if ('requestIdleCallback' in window) {
      ;(window as any).requestIdleCallback(initPostHog)
    } else {
      setTimeout(initPostHog, 2000)
    }
  }
}

export type InertiaPage = Function & { layout?: (element: React.JSX.Element) => React.JSX.Element }
createInertiaApp({
  progress: { color: '#5468FF' },

  resolve: async (name) => {
    const page = await resolvePageComponent(
      `../pages/${name}.tsx`,
      import.meta.glob<{ default: InertiaPage }>('../pages/**/*.tsx')
    )
    page.default.layout = page.default.layout || ((page) => <Layout children={page} />)
    return page
  },

  setup({ el, App, props }) {
    hydrateRoot(
      el,
      <LanguageProvider>
        <App {...props} />
      </LanguageProvider>
    )
  },
})
