// @ts-ignore
import { defineConfig } from 'vitepress'

export const shared = defineConfig({
    title: 'SSH+',

    /* prettier-ignore */
    head: [
        ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/assets/favicons/favicon-32x32.png"}],
        ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/assets/favicons/favicon-16x16.png"}],
    ],

    themeConfig: {
        socialLinks: [
            { icon: 'github', link: 'https://github.com/ssh-connection-manager' }
        ],
    }
})