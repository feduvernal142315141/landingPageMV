// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://landingpagemv.vercel.app',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
    cacheDir: '.vite-cache',
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
        },
      },
    },
  },
  image: process.env.NODE_ENV === 'development' ? {
    service: { entrypoint: 'astro/assets/services/noop' }
  } : {
    service: { entrypoint: 'astro/assets/services/sharp' }
  }
});
