// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

const base = '/Invitacio_Italia/';

// https://astro.build/config
export default defineConfig({
  site: 'https://MarkianUchiha.github.io',
  base: base,
  vite: {
    plugins: [tailwindcss()]
  }
});