import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vue from "@astrojs/vue";
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), sitemap(), vue()],
  output: 'hybrid', // 默认预构建/ssg
  adapter: node({
    mode: "middleware"
  }),
  vite: {
    ssr: {
      noExternal: ['path-to-regexp'],
    },
  },
});