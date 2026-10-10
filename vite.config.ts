import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

const page = (path: string) => resolve(__dirname, path)

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    // Several real pages, so an unknown path is a 404 rather than the homepage
    appType: 'mpa',
    build: {
        rollupOptions: {
            // Each page is its own HTML file, so it gets its own title and link preview
            input: {
                main: page('index.html'),
                extensions: page('extensions/index.html'),
                swatcat: page('extensions/swatcat/index.html'),
                tabchest: page('extensions/tabchest/index.html'),
                smartReader: page('extensions/smart-reader/index.html'),
                swatcatPrivacy: page('extensions/swatcat/privacy-policy/index.html'),
                tabchestPrivacy: page('extensions/tabchest/privacy-policy/index.html'),
                smartReaderPrivacy: page('extensions/smart-reader/privacy-policy/index.html'),
            },
        },
    },
})
