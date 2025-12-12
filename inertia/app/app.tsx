/// <reference path="../../adonisrc.ts" />
/// <reference path="../../config/inertia.ts" />

import '../css/app.css'
import { hydrateRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/react'
import { resolvePageComponent } from '@adonisjs/inertia/helpers'
import { Layout } from '~/components/layout/layout'
import posthog from 'posthog-js'

const appName = import.meta.env.VITE_APP_NAME || 'Jules Merienne'

if (typeof window !== 'undefined') {
  posthog.init(import.meta.env.VITE_POSTHOG_API_KEY, {
    api_host: import.meta.env.VITE_POSTHOG_HOST || 'https://eu.i.posthog.com',
    person_profiles: 'identified_only',
  })
}

export type InertiaPage = Function & { layout?: (element: React.JSX.Element) => React.JSX.Element }
createInertiaApp({
  progress: { color: '#5468FF' },

  title: (title) => `${title} - ${appName}`,

  resolve: async (name) => {
    const page = await resolvePageComponent(
      `../pages/${name}.tsx`,
      import.meta.glob<{ default: InertiaPage }>('../pages/**/*.tsx')
    )
    page.default.layout = page.default.layout || ((page) => <Layout children={page} />)
    return page
  },

  setup({ el, App, props }) {
    hydrateRoot(el, <App {...props} />)
  },
})
