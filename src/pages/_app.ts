/**
 * Exception in astro's ssr rendering component library element-plus. Provide was set according to the ssr chapter in the official document of element plus, but it still showed that the client was hydrated abnormally and the js logic was not executed. The final proposal:
    Comment out the following settings and set up specific vue components for client-side rendering.
    example:
    <MyForm type="update" :data={pageContent} client:only />
 * 
 */
import type { App } from 'vue'
// import { ID_INJECTION_KEY } from 'element-plus'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/src/button.scss'
import 'element-plus/theme-chalk/src/tag.scss'
import 'element-plus/theme-chalk/src/form.scss'
import 'element-plus/theme-chalk/src/form-item.scss'
import 'element-plus/theme-chalk/src/input.scss'
import 'element-plus/theme-chalk/base.css'
export default (app: App) => {
  console.log('reach vue app instance')
  app.use(ElementPlus)
//   app.provide(ID_INJECTION_KEY, {
//     prefix: 1024,
//     current: 0
//   })
}
