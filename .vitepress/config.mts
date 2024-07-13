import {defineConfig} from 'vitepress'

export default defineConfig({
    title: "ssh+",
    description: "connect ssh manager",
    themeConfig: {
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Documentation', link: '/documentation/aboutApp'}
        ],
        sidebar: [
            {
                text: 'Documentation',
                collapsed: false,
                items: [
                    { text: 'About CLI app', link: '/documentation/aboutApp' },
                    { text: 'Getting Started', link: '/documentation/getStarted' },
                    { text: 'Download', link: '/documentation/download' },
                ]
            },
            {
                text: 'All command',
                collapsed: false,
                items: [
                    { text: 'Create', link: '/commands/create' },
                    { text: 'List', link: '/commands/list' },
                    { text: 'Change', link: '/commands/change' },
                    { text: 'Delete', link: '/commands/delete' },
                    { text: 'Connect', link: '/commands/connect' },
                ]
            }
        ],
        socialLinks: [
            {icon: 'github', link: 'https://github.com/ssh-connection-manager/ssh-'}
        ]
    }
})
