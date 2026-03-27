// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // Phone / tablet se same Wi‑Fi par test karne ke liye (http://<PC-IP>:4321)
  server: {
    host: true,
    port: 4321,
    strictPort: false,
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
});