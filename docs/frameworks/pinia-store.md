SPA 可以全局导出，查在 SSR 下有一定风险

```
export const state = reactive({})
```

作为新的推荐方案来代替 Vuex

[对比 Vuex 3.x/4.x-简介 | Pinia](https://pinia.vuejs.org/zh/introduction.html#comparison-with-vuex-3-x-4-x)

dev tools 不稳定
## storeToRefs

需要对 store 进一步处理，如：

1. 组合多个 store 的数据
2. 将 store 数据传递给子组件

## 组件较大概率不响应更新

[pinia store 数组替换更新问题 - CodeSandbox](https://codesandbox.io/s/pinia-shu-zu-ti-huan-geng-xin-wen-ti-c7dgg6?file=/src/store/store.js)

尝试使用 storeToRefs 或 computed

```javascript
import { storeToRefs } from 'pinia'
const themeStore = useThemeStore();
const { isDark } = storeToRefs(themeStore);
```

以下链接还有一些错误的使用示例

[javascript - vue component doesn't update after state changes in pinia store - Stack Overflow](https://stackoverflow.com/questions/71676111/vue-component-doesnt-update-after-state-changes-in-pinia-store)
## debug with Vue Dev Tools

event timeline

> 总结 Pinia Crash Course #7 - Pinia with Vue Devtools

action 关联 mutation
追踪 mutation
时光机回放 action
验证 getter
优化性能，可看到操作耗时
