// https://vitepress.dev/guide/custom-theme
// @ts-ignore
import { h } from 'vue'
// @ts-ignore
import type { Theme } from 'vitepress'
// @ts-ignore
import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme
