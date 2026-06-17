import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig({
  // base relativo: garante que todos os assets funcionam em qualquer subpasta do GitHub Pages
  base: './',
  plugins: [
    figmaAssetResolver(),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      // Garante que react-router-dom resolve para o mesmo pacote react-router v7
      'react-router-dom': 'react-router',
    },
  },
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
