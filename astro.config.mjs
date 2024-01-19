import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import vue from '@astrojs/vue'
import node from '@astrojs/node'
import ElementPlus from 'unplugin-element-plus/vite'
// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), sitemap(), vue(
    {
      appEntrypoint: '/src/pages/_app',
    }
  )],
  output: 'hybrid', // 默认预构建/ssg
  adapter: node({
    mode: 'middleware'
  }),
  vite: {
    ssr: {
      noExternal: ['path-to-regexp', 'element-plus']
    },
    plugins: [
      ElementPlus({
      }),
    ],
  }
})
