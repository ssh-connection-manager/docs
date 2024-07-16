// @ts-ignore
import {defineConfig, type DefaultTheme} from 'vitepress'

export const ru = defineConfig({
    lang: 'ru-RU',
    description: 'ssh connect manager',

    themeConfig: {
        nav: nav(),

        sidebar: {
            '/ru/': {base: '/ru/', items: sidebarDocumentation()},
        },

        footer: {
            message: 'Опубликовано под лицензией MIT.',
            copyright: '© 2024 – настоящее время, ssh connect manager'
        },

        outline: {label: 'Содержание страницы'},

        docFooter: {
            prev: 'Предыдущая страница',
            next: 'Следующая страница'
        },

        lastUpdated: {
            text: 'Обновлено'
        },

        darkModeSwitchLabel: 'Оформление',
        lightModeSwitchTitle: 'Переключить на светлую тему',
        darkModeSwitchTitle: 'Переключить на тёмную тему',
        sidebarMenuLabel: 'Меню',
        returnToTopLabel: 'Вернуться к началу',
        langMenuLabel: 'Изменить язык'

    }
})

function nav(): DefaultTheme.NavItem[] {
    return [
        {text: 'Домой', link: '/ru/'},
        {text: 'Документация', link: '/ru/documentation/aboutApp'}
    ]
}

function sidebarDocumentation(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Документация',
            collapsed: false,
            items: [
                {text: 'О приложении', link: 'documentation/aboutApp'},
                {text: 'Скачать', link: 'documentation/download'},
            ]
        },
        {
            text: 'Все команды',
            collapsed: false,
            items: [
                {text: 'Создать', link: 'commands/create'},
                {text: 'Список', link: 'commands/list'},
                {text: 'Изменить', link: 'commands/change'},
                {text: 'Удалить', link: 'commands/delete'},
                {text: 'Подключиться', link: 'commands/connect'},
            ]
        }
    ]
}