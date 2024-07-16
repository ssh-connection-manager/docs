// @ts-ignore
import { defineConfig } from 'vitepress'
// @ts-ignore
import { shared } from './shared'
// @ts-ignore
import { en } from './en'
// @ts-ignore
import { ru } from './ru'

export default defineConfig({
    ...shared,
    locales: {
        root: { label: 'English', ...en },
        ru: { label: 'Русский', ...ru },
    }
})