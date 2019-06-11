使用 vue 做项目开发常见的时序问题

组件加载、销毁顺序，数据处理顺序

## created VS mounted

created 在模板渲染前，mounted 在模板渲染后。两个钩子里都可以进行数据获取，放前者里面可以利用模板渲染的时间更早开始。但 DOM 相关操作，只能在 mounted 里处理。

## watch
## 同一个组件

