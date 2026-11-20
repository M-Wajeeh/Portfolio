import { defineConfig, Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve, dirname } from 'node:path'
import fs from 'node:fs'

const page = (path: string) => resolve(__dirname, path)

/**
 * Pre-creates output directories synchronously before Rollup's file writing queue runs.
 * Combined with maxParallelFileOps: 1, this prevents Windows file locking and EPERM
 * race conditions when concurrently creating parent and nested subdirectories.
 */
const preMkdirPlugin = (): Plugin => ({
    name: 'pre-mkdir',
    generateBundle(options, bundle) {
        const outDir = options.dir || resolve(__dirname, 'dist')
        for (const fileName of Object.keys(bundle)) {
            const dir = resolve(outDir, dirname(fileName))
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true })
            }
        }
    },
})

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), preMkdirPlugin()],
    // Several real pages, so an unknown path is a 404 rather than the homepage
    appType: 'mpa',
    build: {
        rollupOptions: {
            // Sequential file operations on Windows prevent concurrent mkdir EPERM errors
            maxParallelFileOps: 1,
            // Each page is its own HTML file, so it gets its own title and link preview
            input: {
                main: page('index.html'),
                extensions: page('extensions/index.html'),
                tabchest: page('extensions/tabchest/index.html'),
                smartReader: page('extensions/smart-reader/index.html'),
                tabchestPrivacy: page('extensions/tabchest/privacy-policy/index.html'),
                smartReaderPrivacy: page('extensions/smart-reader/privacy-policy/index.html'),
            },
        },
    },
})
