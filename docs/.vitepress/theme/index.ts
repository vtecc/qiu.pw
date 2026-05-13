import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { inject } from '@vercel/analytics'

export default {
  extends: DefaultTheme,
  enhanceApp() {
    inject()
  }
} satisfies Theme
