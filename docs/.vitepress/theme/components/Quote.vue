<!-- <template>
  <div id="footer">
    <blockquote>
      当一个程序员对算法、语言标准、底层、原生、英文文档这些词汇产生恐惧感的时候，他的技术生命已经走到尽头
    </blockquote>
  </div>
</template> -->
<template>
  <div id="quote">
    <!-- {{ data }} -->
    <!-- <h1>格言如下：</h1> -->
    <div v-show="quote.content" class="quote-text">
      "{{ quote.content }}" - {{ quote.author }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { data } from './quote.data'

const quote = ref(data);

async function init() {
  const response = await fetch('https://api.quotable.io/random');
  quote.value = await response.json();
}

onMounted(() => {
  init()
})
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
#quote {
  font-size: 16px;
  font-weight: bold;
}
</style>
