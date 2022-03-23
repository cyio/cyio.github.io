import { defineClientAppEnhance } from '@vuepress/client'
import BlogIndex from './components/BlogIndex.vue'

export default defineClientAppEnhance(({ app, router, siteData }) => {
  // siteData 仅有基础 meta 信息
  app.component('BlogIndex', BlogIndex)
})
