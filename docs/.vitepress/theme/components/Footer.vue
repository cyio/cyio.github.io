<template>
  <div id="footer">
    <blockquote>
      当一个程序员对算法、语言标准、底层、原生、英文文档这些词汇产生恐惧感的时候，他的技术生命已经走到尽头
    </blockquote>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log('haha')
  },
}
</script>

<style>
.page {
  position: relative;
  min-height: 100vh;
}
#footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
}
</style>
