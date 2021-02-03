(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{481:function(t,e,r){"use strict";r.r(e);var a=r(56),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"redux"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#redux"}},[t._v("#")]),t._v(" Redux")]),t._v(" "),r("p"),r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#基础"}},[t._v("基础")]),r("ul",[r("li",[r("a",{attrs:{href:"#概念"}},[t._v("概念")])]),r("li",[r("a",{attrs:{href:"#数据流"}},[t._v("数据流")])])])]),r("li",[r("a",{attrs:{href:"#官方-toolkit"}},[t._v("官方 toolkit")])]),r("li",[r("a",{attrs:{href:"#redux-dev-tool"}},[t._v("redux dev tool")])]),r("li",[r("a",{attrs:{href:"#redux-saga-library"}},[t._v("redux-saga library")])])])]),r("p"),t._v(" "),r("h2",{attrs:{id:"基础"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基础"}},[t._v("#")]),t._v(" 基础")]),t._v(" "),r("blockquote",[r("p",[t._v("对于初学者，有大量概念需要记忆")])]),t._v(" "),r("p",[t._v("可预测的状态容器")]),t._v(" "),r("p",[t._v("可预测 | 集中管理 | 易于定位 debug")]),t._v(" "),r("h3",{attrs:{id:"概念"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("store\n  state\n  emit action\n  pure reducer\n\n  // 创建 store，绑定 reducer\nlet store = createStore(counterReducer)\n")])])]),r("p",[t._v("介绍了适用场景 Redux is more useful when:，使用前需要思考适用场景\nhttps://redux.js.org/tutorials/essentials/part-1-overview-concepts")]),t._v(" "),r("p",[t._v('action event type "domain/eventName"\nAction Creators')]),t._v(" "),r("p",[t._v("dispatch 触发事件")]),t._v(" "),r("p",[t._v("reducer event listener, update state\nreducer fn 实现形式不限制，if-else 也可以")]),t._v(" "),r("p",[t._v("getState 获取")]),t._v(" "),r("p",[t._v("selectors alias")]),t._v(" "),r("h3",{attrs:{id:"数据流"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数据流"}},[t._v("#")]),t._v(" 数据流")]),t._v(" "),r("p",[t._v("单向数据流流程:")]),t._v(" "),r("ul",[r("li",[t._v("state 描述某一时刻应用条件")]),t._v(" "),r("li",[t._v("基于 state 渲染 UI")]),t._v(" "),r("li",[t._v("事件触发，state 更新")]),t._v(" "),r("li",[t._v("基于新状态 re-render UI")])]),t._v(" "),r("p",[t._v("redux 应用数据流:")]),t._v(" "),r("ul",[r("li",[t._v("UI 组件仅关心的数据变化时，re-render")])]),t._v(" "),r("p",[t._v("https://redux.js.org/tutorials/essentials/part-1-overview-concepts#redux-application-data-flow")]),t._v(" "),r("p",[t._v("什么时候使用 redux")]),t._v(" "),r("blockquote",[r("p",[t._v("Most form state probably shouldn't be kept in Redux.")])]),t._v(" "),r("h2",{attrs:{id:"官方-toolkit"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#官方-toolkit"}},[t._v("#")]),t._v(" 官方 toolkit")]),t._v(" "),r("p",[t._v("configureStore")]),t._v(" "),r("p",[t._v("slice reducer/action 集合，某个特性")]),t._v(" "),r("p",[t._v("自动生成 action")]),t._v(" "),r("p",[t._v("thunk 转换程序，异步逻辑")]),t._v(" "),r("p",[t._v("createSlice 配置描述，很像 vuex 的 store 文件，内置 immer 库，支持同步写法")]),t._v(" "),r("p",[t._v("手写不可变更新逻辑，意外修改 state，是 redux 使用最常见错误")]),t._v(" "),r("p",[t._v("redux-thunk 中间件")]),t._v(" "),r("h2",{attrs:{id:"redux-dev-tool"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#redux-dev-tool"}},[t._v("#")]),t._v(" redux dev tool")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("diff 数据项变化\n"),r("img",{attrs:{src:"http://ww1.sinaimg.cn/large/4e5d3ea7gy1gj1qyi2thdj20q90d0tat.jpg",alt:"image.png"}})])]),t._v(" "),r("li",[r("p",[t._v("trace 定位 action 触发位置")])])]),t._v(" "),r("h2",{attrs:{id:"redux-saga-library"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#redux-saga-library"}},[t._v("#")]),t._v(" redux-saga library")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://redux-saga.js.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Read Me · Redux-Saga"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("saga 专门处理副作用 中间件 Generator")]),t._v(" "),r("p",[t._v("fork 派生 用途 非阻塞任务")]),t._v(" "),r("p",[t._v("最终导出，rootSaga, rootReducer")]),t._v(" "),r("p",[t._v("takeEvery or takeLatest saga 有多个时")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://gist.github.com/cyio/627a6bbe5a3eb3c43a6630804568c59e",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/redux-saga/redux-saga-beginner-tutorial"),r("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=s.exports}}]);