import { defineConfig } from '@adonisjs/inertia'
import type { InferSharedProps } from '@adonisjs/inertia/types'

const inertiaConfig = defineConfig({
  /**
   * Path to the Edge view that will be used as the root view for Inertia responses
   */
  rootView: 'inertia_layout',

  /**
   * Data that should be shared with all rendered pages
   */
  sharedData: {
    // user: (ctx) => ctx.inertia.always(() => ctx.auth.user),
    canonicalUrl: (ctx) => {
      const url = ctx.request.url(false)
      const cleanPath = url === '/' ? '' : url.replace(/\/$/, '')
      return `https://julesmerienne.dev${cleanPath}/`
    },
  },

  /**
   * Options for the server-side rendering
   */
  ssr: {
    enabled: true,
    entrypoint: 'inertia/app/ssr.tsx',
  },
})

export default inertiaConfig

declare module '@adonisjs/inertia/types' {
  export interface SharedProps extends InferSharedProps<typeof inertiaConfig> {}
}
