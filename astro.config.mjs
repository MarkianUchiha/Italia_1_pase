// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const repoName = 'Invitacion_Italia';
const base = `/${repoName}`;

export default defineConfig({
	site: 'https://MarkianUchiha.github.io/Invitacion_Italia',
	base,
	build: {
		outDir: 'dist',      // Asegura la carpeta de salida
		assetsPrefix: base,  // Rutas absolutas en GH Pages
	},
	integrations: [
		tailwind({           // Usa la integración oficial de Astro + Tailwind
			config: {
				// aquí tus overrides de Tailwind si los tuvieras
			},
		}),
	],
});
