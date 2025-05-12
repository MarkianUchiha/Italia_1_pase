// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://MarkianUchiha.github.io',
  base: 'Invitacion_Italia',
  integrations: [tailwindcss()],
});