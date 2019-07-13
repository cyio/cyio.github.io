# 健状性

## 需要安全取出值，避免影响主要功能

比如，接口 getConfig 返回 
```
{
  code: 0,
  data: {
    ids: []
}
```
父组件
```js
// child(:config="config")

config: {}
```
子组件
```js
// props config

methods: {
  hasId() {
    const { ids } = this.config // 如果接口获取失败，config 默认为 {}，ids 为 undefined
    if (!(ids instanceof Array)) return false
    return ids.includes(id)
  }
}
```
