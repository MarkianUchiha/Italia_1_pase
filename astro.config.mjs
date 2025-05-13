// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const repoName = 'Invitacion_Italia'; // Asegúrate de que este es el nombre exacto de tu repositorio GitHub
const base = `/${repoName}`; 

// https://astro.build/config
export default defineConfig({
  site: 'https://MarkianUchiha.github.io/Invitacion_Italia', // Reemplaza 'MarkianUchiha' con tu nombre de usuario de GitHub
  base: base,
  build: {
    assetsPrefix: base, // ¡CRUCIAL para las rutas de GitHub Pages!
  },
  vite: {
    plugins: [tailwindcss()]
  }
});