import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            // Each page is its own HTML file, so it gets its own title and link preview
            input: {
                main: resolve(__dirname, 'index.html'),
                extensions: resolve(__dirname, 'extensions/index.html'),
                swatcat: resolve(__dirname, 'extensions/swatcat/index.html'),
                tabchest: resolve(__dirname, 'extensions/tabchest/index.html'),
                // Privacy policies keep the URLs the store listings point to
                swatcatPrivacy: resolve(__dirname, 'swatcat/privacy.html'),
                tabchestPrivacy: resolve(__dirname, 'tabchest/privacy.html'),
                smartReaderPrivacy: resolve(__dirname, 'smart-reader/privacy.html'),
            },
        },
    },
})
