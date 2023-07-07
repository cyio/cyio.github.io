SPA 可以全局导出，查在 SSR 下有一定风险
```
export const state = reactive({})
```

作为新的推荐方案来代替 Vuex

[对比 Vuex 3.x/4.x-简介 | Pinia](https://pinia.vuejs.org/zh/introduction.html#comparison-with-vuex-3-x-4-x)

dev tools 不稳定