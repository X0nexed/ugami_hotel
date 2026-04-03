import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    base: '/ugami_hotel/', // Вот эта строчка спасет деплой на GitHub
    plugins: [
        tailwindcss(),
    ],
})