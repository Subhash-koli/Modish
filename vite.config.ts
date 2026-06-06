import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],

  build: {
    // Target modern browsers for smaller, faster output
    target: ['es2020', 'chrome87', 'firefox78', 'safari14'],

    // Minify CSS
    cssMinify: true,

    // Split vendor chunks for better caching & faster initial parse
    // NOTE: Keep chunk splitting simple to avoid circular dependency warnings
    rollupOptions: {
      output: {
        manualChunks(id) {
          // React core must be isolated — never mix with other vendor chunks
          if (id.includes('/node_modules/react/') || id.includes('/node_modules/react-dom/') || id.includes('/node_modules/scheduler/')) {
            return 'vendor-react';
          }
          // Large independent packages get their own chunks
          if (id.includes('/node_modules/lucide-react/')) {
            return 'vendor-icons';
          }
          // Everything else bundles together (avoids circular deps from over-splitting)
          if (id.includes('/node_modules/')) {
            return 'vendor-misc';
          }
        },
      },
    },
  },
})
