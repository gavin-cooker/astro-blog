import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import vue from '@astrojs/vue'
import node from '@astrojs/node'
// import ElementPlus from 'unplugin-element-plus/vite'
// import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), sitemap(), vue()],
  output: 'hybrid', // 默认预构建/ssg
  adapter: node({
    mode: 'middleware'
  }),
  vite: {
    ssr: {
      // noExternal: ['path-to-regexp', 'element-plus']
    },
    plugins: [
      // vue(),
      // ElementPlus({
      //   // options
      // })
      // AutoImport({
      //   resolvers: [ElementPlusResolver()]
      // }),
      // Components({
      //   resolvers: [ElementPlusResolver()]
      // })
    ]
  }
})
