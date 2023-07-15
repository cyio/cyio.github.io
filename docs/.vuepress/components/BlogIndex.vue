<template>
  <div>
    <div class="search">
      <input type="text" v-model="filterKeyword" placeholder="请输入关键字">
      <button @click="clearFilter">X</button>
    </div>
    <div v-for="post in posts" :key="post.path">
      <template  v-if="!filterKeyword || (post.frontmatter.title || post.title).toLowerCase().includes(filterKeyword.toLowerCase())">
        <h2>
          <router-link :to="post.path">{{ post.frontmatter.title || post.title }}</router-link>
        </h2>
        <p>{{ post.frontmatter.description }}</p>
        <div class="meta">
          <div class="left">
            <div>Updated: {{ formatDate(post.git.updatedTime) }}</div>
          </div>
          <div class="right" v-if="post.frontmatter.tags">
            <div>Tags: {{ post.frontmatter.tags?.join(', ') }}</div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed, ref } from 'vue'
import { usePages } from '@temp/pages'

export default defineComponent({
  setup() {
    const filterKeyword = ref('')
    const pages = usePages()
      .filter(post => {
        return post.frontmatter.blog_ignore !== true
          && !!(post.frontmatter.title || post.title)
      })
      .sort(
        (a, b) => b.git.updatedTime - a.git.updatedTime
      )
    const posts = computed(() => {
      let res = pages
        .filter(post => {
          const keyword = filterKeyword.value.toLowerCase()
          const title = (post.frontmatter.title || post.title).toLowerCase()
          return title.includes(keyword)
        })
      console.log('res', res)
      return res
    })
    
    const clearFilter = () => {
      filterKeyword.value = ''
    }
    
    const formatDate = (date) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString(undefined, options);
    }
    
    return { posts, filterKeyword, clearFilter, formatDate }
  },
})
</script>

<style scoped>
.meta {
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  color: #666;
}
.meta .left {
  display: flex;
}
.search {
  float: right;
  position: relative;
  top: -50px;
}
.search input {
  margin-right: 4px;
}
</style>