// @ts-ignore
import { defineConfig } from 'vitepress'

export const shared = defineConfig({
    title: 'SSH+',

    base: '/docs/',

    /* prettier-ignore */
    head: [
        ['link', { rel: "shortcut icon", type: "image/x-icon", href: "/assets/favicon.ico"}],
    ],

    themeConfig: {
        socialLinks: [
            { icon: 'github', link: 'https://github.com/ssh-connection-manager' }
        ],
    }
})