[vue3-shoelace-demo - CodeSandbox](https://codesandbox.io/s/vue3-shoelace-demo-jmvkpt?file=/src/App.vue)

Shoelace 是一款面向未来的 Web 组件库，提供了一系列专业设计且高度可定制的 UI 组件，这些组件均由框架中立的技术构建而成

基于 lit

使用 Stencil.js 构建

## 组件丰富

- 按钮支持打开链接、新开窗口、下载等
- 二维码
- 复制按钮
- 可自定义性更强，比如 popup，在线调整
- Mutation Observer 监听指定属性
- Resize Observer 监听容器尺寸变化

## 事件

自定义事件跟原生事件一样，要用 addEventListener
## CDN

CDN  + autoloader 自动懒加载

闪屏问题：解决 [Flash of Undefined Custom Elements (FOUCE)](https://www.abeautifulsite.net/posts/flash-of-undefined-custom-elements/)
直接用方法二
## 定制

[Customizing](https://shoelace.style/getting-started/customizing/)

为 Custom Element 增加特殊选择语法 **part**，更可靠的选中子元素
- 显式选择，避免一级一级找
- 组件重构升级，保持 part 稳定性即可

[::part() - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/::part)

![image.png](https://img.oaker.bid/?url=http://tva1.sinaimg.cn/large/4e5d3ea7ly1hjddee1ag4j212w0gcdqx.jpg)
## 应用

> Microsoft Store 使用 Shoelace、Lit、Vite 和 C# ASPNET 后端共同打造出更现代的新版本

[放弃React改用Web组件，微软这次重构让开发者不解：没有任何意义_大前端_褚杏娟_InfoQ精选文章](https://www.infoq.cn/news/aRc3dogIgR4dABwJRWXw)


## 上手，实现一个组件

[my button · cyio/shoelace@b115bca](https://github.com/cyio/shoelace/commit/b115bca6b2fea08544cd7b90dd6ff9c2297fd47b)

<pre class="language-html preview">
	<button>button</button>
</pre>