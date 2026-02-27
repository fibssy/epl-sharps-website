import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Update `site` and `base` once you know your GitHub username & repo name
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://yourusername.github.io',
  base: '/epl-sharps-website',
});
