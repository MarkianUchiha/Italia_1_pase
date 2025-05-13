// astro.config.mjs
// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const repoName = 'Invitacion_Italia';
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
	},
});
