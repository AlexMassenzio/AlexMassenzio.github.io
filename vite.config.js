// vite.config.js

import { resolve } from 'path';
import { defineConfig } from 'vite';

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');

export default defineConfig({
    root,
    build: {
        outDir,
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(root, 'index.html'),
                projects: resolve(root, 'projects', 'index.html'),
                contact: resolve(root, 'contact', 'index.html'),
                tangent: resolve(root, 'project-assets', 'Tangent', 'index.html'),
                wireframe: resolve(root, 'wireframe', 'index.html')
            }
        },
    }
})

