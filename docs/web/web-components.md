# Web 原生组件

适用场景

自定义元素的主要好处是，它们可以在使用任何框架，甚至是在不使用框架的场景下使用。当你面向的最终用户可能使用了不同的前端技术栈，或是当你希望将最终的应用与它使用的组件实现细节解耦时，它们会是理想的选择。

## Web Components vs. Vue 组件

优点：使应用“永不过时”

弊端：模板系统弱些，状态管理系统，SSR 效率（模拟 dom）不如框架（输出 string）

[Vue 与 Web Components | Vue.js](https://cn.vuejs.org/guide/extras/web-components.html#building-custom-elements-with-vue)

[Basic Haunted Component](https://codepen.io/chriscoyier/pen/OeZZbZ?editors=1010)
[Star Wars API with Haunted.js](https://codepen.io/chriscoyier/pen/ZdoxwP?editors=1010)


## shadow DOM


## 类库

Polymer 主要是 Google 产品使用

Lit 社区使用活跃

框架无关、可共享、

渲染速度非常快，因为Lit在更新时只涉及UI的动态部分——不需要重建虚拟树并做 DOM diff

## 调试工具

- star 少，测试多次无法载入

在线编辑器：[litts-lfg641eq by anonymous - WebComponents.dev](https://studio.webcomponents.dev/edit/ZaQSyzVvpjrnLVz4EDrd/src/index.ts?p=website)

## 开发服务


## 组件库

企业级，jQuery
[UI5 Web Components](https://sap.github.io/ui5-webcomponents/)

## 主流框架支持


[你不知道的 Web Components - 现状](https://www.albertaz.com/blog/web-components-ststus)

- [ ] learn
https://open-wc.org/guides/developing-components/getting-started/

- class 组件写法，易熟悉
- 单文件组件、应用，html\css 需要高亮插件
- no build
- 组件库成熟度不够
- 与框架互补


Vendor lock-in

[Will Web Components Replace Frontend Frameworks?](https://web-highlights.com/blog/will-web-components-replace-frontend-frameworks-they-are-built-to-solve-different-problems/)

markdown 内嵌便携
[Web Components Will Outlive Your JavaScript Framework | jakelazaroff.com](https://jakelazaroff.com/words/web-components-will-outlive-your-javascript-framework/)