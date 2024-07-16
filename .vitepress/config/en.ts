// @ts-ignore
import {defineConfig, type DefaultTheme} from 'vitepress'

export const en = defineConfig({
    lang: 'en-US',
    description: 'ssh connect manager',

    themeConfig: {
        nav: nav(),

        sidebar: {
            '/': {base: '/', items: sidebarAboutApp()},
        },

        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright (c) 2024 ssh connection manager'
        }
    }
})

function nav(): DefaultTheme.NavItem[] {
    return [
        {text: 'Home', link: '/'},
        {text: 'Documentation', link: '/documentation/aboutApp'}
    ]
}

function sidebarAboutApp(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Documentation',
            collapsed: false,
            items: [
                {text: 'About app', link: 'documentation/aboutApp'},
                {text: 'Download', link: 'documentation/download'},
            ]
        },
        {
            text: 'All command',
            collapsed: false,
            items: [
                {text: 'Create', link: 'commands/create'},
                {text: 'List', link: 'commands/list'},
                {text: 'Change', link: 'commands/change'},
                {text: 'Delete', link: 'commands/delete'},
                {text: 'Connect', link: 'commands/connect'},
            ]
        }
    ]
}