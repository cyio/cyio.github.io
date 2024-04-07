<template>
  <div id="quote">
    <div v-show="quote.content" class="quote-text">
      "{{ quote.content }}" - {{ quote.author }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { data } from './quote.data'

const quote = ref({});
// const quote = ref(data); // 会闪

async function init() {
  try {
    const response = await fetch('https://api.quotable.io/random');
    quote.value = await response.json();
  } catch (error) {
    // 处理错误
    console.error(error);
    quote.value = data;
  }
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
