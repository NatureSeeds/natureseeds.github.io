import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import lit from "@astrojs/lit";

export default defineConfig({
  site: 'https://natureseeds.github.io/',
  sitemap: true,
  integrations: [sitemap(), mdx(), lit(), icon()],
  vite: {
    resolve: {
      alias: {
        '@components': '/src/components',
        '@layouts': '/src/layouts',
        '@pages': '/src/pages',
        '@assets': '/src/assets',
        '@': '/src'
      }
    }
  }
});
