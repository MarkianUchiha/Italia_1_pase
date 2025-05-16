// astro.config.mjs
// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const repoName = 'Italia_1_pase';
const base = `/${repoName}`;

export default defineConfig({
	site: `https://MarkianUchiha.github.io/${repoName}`,
	base,
	build: {
		outDir: 'dist',
		assetsPrefix: base,
	},
	vite: {
		plugins: [
			// @ts-ignore: usar plugin Tailwind para Vite
			tailwindcss(),
		],
		assetsInclude: ['**/*.mp3'], // Añadimos soporte para archivos MP3
	},
});
