# echarts

[术语速查手册 - Apache ECharts (incubating)](https://www.echartsjs.com/zh/cheat-sheet.html)

在线编辑器 [ECharts Gallery](http://gallery.echartsjs.com/editor.html)

- Y 轴类型为 value，不需要设置 data，会根据打点数据自动延伸

> 涉及专业复杂的 Canvas 知识，一般面向后台而非普通用户，实用正确优先于美观

百分位图示例: [中国幼儿生长曲线图计算器: 头围年龄 0-6 岁](https://www.infantchart.com/zh-Hans/chinese0to6headforage.php)

```js
// 最小化引入，mpvue 中要这样做
import echarts from 'echarts/dist/echarts.min.js'
```

[vue 中父组件向子组件 echarts 传值问题-前端问答-PHP 中文网](http://www.php.cn/website-design-ask-402895.html)

- 自适应父 div 的宽度
  需要主动根据关心的事件调用`myChart.resize()`
  [百度 echart 图表宽度自适应问题的一种解决思路 - CSDN 博客](https://blog.csdn.net/weixin_36185028/article/details/72833190)

- 事件禁用
  [echarts 取消图例上的点击事件和图表上鼠标滑过点击事件 - CSDN 博客](https://blog.csdn.net/Amy126/article/details/73484739)

[SandDance - Demo Vote](https://sanddance.js.org/app/)
