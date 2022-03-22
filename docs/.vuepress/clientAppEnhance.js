import { defineClientAppEnhance } from '@vuepress/client'
import BlogIndex from './components/BlogIndex.vue'

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component('BlogIndex', BlogIndex)
})
