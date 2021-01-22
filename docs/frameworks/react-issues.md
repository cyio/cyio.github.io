# react issues

[[toc]]

## 页面结构

```
page => connect

components

dva model
```

## 注意

- 不能缺少文件，文件不能为空

  样式占位

  ```css
  .xx {
    background: initial;
  }
  ```

- modal 可以用别的页面复制一个
- routes -> config -> index

## page bare template

1. export function

```js
import React from 'react'
// import './index.less';
// import styles from './index.less';

const Comp = () => {
  return (
    <div>
      <h1>detail hello</h1>
    </div>
  )
}

export default Comp
```

2. export component

```js
import React from 'react'
// import styles from './index.less';
const propTypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  text: PropTypes.string
}
const defaultProps = {
  text: 'Hello World'
}
export default class Comp extends React.Component {
  state = {
    hello: 'world'
  }

  componentDidMount() {}

  render() {
    const { hello } = this.state
    return <h1>{hello}</h1>
  }
}
Comp.propTypes = propTypes
Comp.defaultProps = defaultProps
```

- 提示：

  ```
  Each record in table should have a unique `key` prop,or set `rowKey` to an unique primary key. #7623
  ```

  mock 数据，id 重了

- 全局安装 `yarn global add typescript`

## TypeScript

校验：

- antd 引入应该在 interface 之前
- 命名不要重名

  组件 -> model(数据) -> interface(TS)

  dva model 小写

  interface 单独命名，辅助性的，重要性低

  组件名只定义一次，没啥问题

  批量重命名踩坑，替换时正则需要使用大小写敏感

- event 定义

  ```js
  onUpdatingServerName(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event);
    this.newserverName = event.target.value;
  }
  ```

  [javascript - Property 'value' does not exist on type EventTarget in TypeScript - Stack Overflow](https://stackoverflow.com/questions/44321326/property-value-does-not-exist-on-type-eventtarget-in-typescript/44321394)

### JSON 快速生成 TS

1. vscode 新建文件
2. 复制有效的 JSON，需要带上括号
3. 执行`Paste JSON as TYPE`

- any 慎用，那什么时候用呢？a. 用户输入 b. 不知道数组内数据类型

- 拆分粒度

- render 不能用 async，不能 setState
- ?

  ```js
  {
    curPaymentMethod === '1' ? (
      <AliPayModal
        visible={modalVisible}
        onCancel={this.closeModal}
        onClick={this.onPayDone}
      />
    ) : (
      <WechatPayModal
        visible={modalVisible}
        onCancel={this.closeModal}
        onClick={this.onPayDone}
        qrCodeStr="hahajl"
      />
    )
  }
  ```

  > Uncaught Invariant Violation: Objects are not valid as a React child (found: [object Promise]). If you meant to render a collection of children, use an array instead.
  > in WechatPayModal (created by Pay)

- 路由 components 与子 routes 互 chi？

- func comp 在父层处理 async，请求后或 dismount

- antd ts 在 node_modules 中找
- 只检验 stashed
- ts 函数要写明返回

## 影响效率因素

- 熟练手写 ts，类型补全或自定义 snip
- dom 闭合补全 > emmet 可以用
- timeout ts number window.setTimeout
- obj / array 如果有内容，内容也要 ts 定义
- serve:no-mock

## 新建页面

1. 验证路由配置是否正确，最小步骤

   1. add route
   2. add pages index.js，不要创建其它文件，会报错

2. 新建 service，确认需要使用的全部接口，有多少接口写多少 model
3. 新建 model，写这个时与 service side by side，入参需要看下 showDoc

## 表格实现

```
~/Projects/work/AiJianZiPlatform/src/routes/Useradmin/BSchool/b-school.js

Card(title="filter node") // col - formItem - select
  StandardTable
```

2. SearchList

```
~/Projects/work/ajz-admin-agency/src/pages/student-manage/student-account/index.tsx
```

3. 自己拼装
   searchList 上面不能加东西
   course-limit

## 路径 routes

1. 下级必须是上级子路径

- 提交操作，总是要考虑防止过快多次点击

- [javascript - Uncaught Invariant Violation: Too many re-renders. React limits the number of renders to prevent an infinite loop - Stack Overflow](https://stackoverflow.com/questions/55265604/uncaught-invariant-violation-too-many-re-renders-react-limits-the-number-of-re)
  setState 被直接调用了

- classNames 样式类合并
- TS 不处理提交会影响别人，一定要处理、熟悉，提高效率
- 原型、设计，找别人确认，有疑问要早问，后续改成本高
- 我们把这个版本的 identity 函数叫做泛型，因为它可以适用于多个类型。 不同于使用 any，它不会丢失信息，像第一个例子那像保持准确性，传入数值类型并返回数值类型。

## connect

```js
const mapStateToProps = (state: ConnectState) => {
  const { classes, loading } = state
  return {
    classes,
    loading: loading.effects[queryBaseStatApi],
    saveLoading: loading.effects[createClassApi]
  }
}

export default connect(mapStateToProps)(Page)
```

React.FC 新类型，可以处理 state

```js
import * as React from 'react'

interface IProps {
  // ... props interface
}

// NEW syntax for typing function components
const MyNewComponent: React.FC<IProps> = (props) => {...};

import * as React from 'react'
const FunctionComponent: React.FC = () => {
  const [count, setCount] = React.useState(0) // The useState hook
}
```

hooks 返回 return undefined or a function

[useTypescript — A Complete Guide to React Hooks and TypeScript](https://levelup.gitconnected.com/usetypescript-a-complete-guide-to-react-hooks-and-typescript-db1858d1fb9c)

max-length 会阻止输入，进而不触发验证提示

searchList ts 定义来自，tableColumns dataIndex

ts 参数用尖括号

ts 单独文件定义，跳转很方便

反击自动化

加验证头，能解决插件下载吗？
[Prevent downloading encrypted content with Firefox video download helper extension · Issue #357 · videojs/http-streaming](https://github.com/videojs/http-streaming/issues/357#issuecomment-374889346)

## 解构对象内容

```js
const { body } = ctx.request as { body: CreateOperation }
```

## checkbox.group

比较特殊，需要在 group 级控制子内容 checked 属性

defaultValue 设置后就不再变，列表条目切换会相互影响

~~value 设置后，点击状态不变，需要 onChange 把变化向上传递，再传回响应变化~~

## classNames

这里 styles.disabled 是动态类名，要用数组下标方式包起来。字符串不需要

`<a className={classNames({ [styles.disabled]: !haveRoles })}`

## umi requestType 默认是 json，可选 form

## iconfont.cn use in antd

createFromIconfontCN

## hover exclude

Pointer events to the rescue!

[How to ignore Hover/Mouseover events on specific element in CSS with the pointer-events property – Techstacker](https://techstacker.com/css-remove-hover-pointer-events-none/)

## useEffect 反复执行

trick 第二参数不变，只执行一次

配合第二参数、返回函数，相当于三个生命周期

## 数据联动

- 输入关键字 提交
- 标签选择 选中 提交
  - 选中 不支持 反选
  - 仅素材类型 限单选
- 筛选 过滤回显 数据包含类型关系
  - 顺序要求
  - 删除、如何修改对应值

同级组件需要伟递事件，只能依靠 model 了？

searchParams

Function components cannot be given refs

## antd form onFinished

通过时提交

## hook state 拆分合并原则

1. 将完全不相关的 state 拆分为多组 state。比如 size 和 position。
2. 如果某些 state 是相互关联的，或者需要一起发生改变，就可以把它们合并为一组 state。比如 left 和 top。

依赖数组依赖的值最好不要超过 3 个，否则会导致代码会难以维护。
如果发现依赖数组依赖的值过多，我们应该采取一些方法来减少它。
去掉不必要的依赖。
将 Hook 拆分为更小的单元，每个 Hook 依赖于各自的依赖数组。
通过合并相关的 state，将多个依赖值聚合为一个。
通过 setState 回调函数获取最新的 state，以减少外部依赖。
通过 ref 来读取可变变量的值，不过需要注意控制修改它的途径。

[React Hooks 你真的用对了吗？ - 知乎](https://zhuanlan.zhihu.com/p/85969406)

## 可以在函数内直接申明普通常量或普通函数吗？

可以但不建议，Function Component 每次渲染都会重新执行，常量推荐放到函数外层避免性能问题，函数推荐使用 useCallback 申明。

简单的组件间通信使用透传 Props 变量的方式，而频繁组件间通信使用 React.useContext

[精读《React Hooks 最佳实践》 - 知乎](https://zhuanlan.zhihu.com/p/81752821)

[《蚂蚁前端研发最佳实践》文字稿 - 知乎](https://zhuanlan.zhihu.com/p/94949118)

hook class 转换，多个 render 函数，里面是 return

getDerivedStateFromProps 介于 contructor 和 render 之间，响应 props 变化，返回 state

## useEffect 不要用 async, use useCallback instead

[javascript - React Hook Warnings for async function in useEffect: useEffect function must return a cleanup function or nothing - Stack Overflow](https://stackoverflow.com/questions/53332321/react-hook-warnings-for-async-function-in-useeffect-useeffect-function-must-ret)

useEffect 应该什么都不返回，而 async 隐式返回 promise

## list virtualized

为大数据列表，性能优化，非必须

## 生命周期模拟 useEffect

因为生命周期处理的都是副作用，在 hook 里就是用 useEffect

可以写多个 useEffect，给 effect fn 命名以区分职责

useEffect 每次渲染（DOM 更新）完执行 effect fn

> 不用再去考虑“挂载”还是“更新”。React 保证了每次运行 effect 的同时，DOM 都已经更新完毕

生命周期对应 useEffect 用法：

- componentDidMount []
- componentDidUpdate [states.count | props.count] 仅变化时调用，减少不必要执行
- componentWillUnmount return function cleanup

getDerivedStateFromProps 渲染中赋值，如果需要对比差异，可以增加缓存值

shouldComponentUpdate React.memo

什么是副作用，数据获取，browser api

render （提升成）函数本身，函数组件就是一个 render 函数

[Hooks 与 React 生命周期的关系 - 掘金](https://juejin.im/post/5d3db4da518825016f644561)

hook 在最顶层调用，如果需要有条件执行，在 hook 内部判断

## calc px 计算

[css - Css3 calc minus vh with pixel - Stack Overflow](https://stackoverflow.com/questions/42548630/css3-calc-minus-vh-with-pixel/42556033)

## 播放器能支持哪些文件类型

第三方播放器取决于浏览器支持

[Media container formats (file types) - Web media technologies | MDN](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Containers)

## 使用多个 useState 或 useReducer

Should I use multiple useState or useReducer?

For independent things (isHovering and textInput), multiple useState.
独立状态，使用多个 useState

For things that change together (isFetching and fetchedItems), or if their next state depends on previous (todos), I prefer useReducer.
状态一起改变，或状态前后依赖，更倾向用 useReducer

## 复杂 state 逻辑建议用 React 自带 useReducer

如果从组件状态上升到应用状态，用 Redux
redux 不仅是状态管理，是一种架构
出了 bug，好定位

> 我新开发的应用几乎都用到了 Redux，以前做选择是很简单的：几乎所有项目都用 Redux 就行了！
> 当你向 Redux 状态添加内容时，加进来的是一个抽象层以及随之而来的复杂度。
> 换句话说，你大可放心使用 Redux，但是每次用到它时应该有合适的理由。

使用理由：

- 使用网络之类的 I/O 或设备 API。
- 保存或加载状态。
- 与非子组件共享其状态。 （如素材库的查找参数，多个组件更新，可以做为一个抽象层，不要跟别的逻辑混在一起）
- 需要与应用程序的其他部分共享业务逻辑或数据处理过程。

[Do React Hooks Replace Redux? - JavaScript Scene - Medium](https://medium.com/javascript-scene/do-react-hooks-replace-redux-210bab340672)

## 自定义 hook

- 逻辑抽象
- 复用
  [基用 React Hooks + Antd 快速实现一个列表页 - 掘金](https://juejin.im/post/5df8b978e51d45584006e1f5)

## RangePicker 没有样式

重启服务后正常

## dva 使用

## antd 权限组件

- layout 级的 authority 不起作用？
- 可以嵌套 layout，SecurityLayout > BasicLayout > page

## hook dva snip

## umi ui

可视化配置工具，用处不大
查看模板可访问 [](https://preview.pro.ant.design/dashboard/analysis)
关闭参考`start:no-ui`命令

## 自定义左侧菜单 icon

1. defaultSettings iconfontUrl
2. 修改 router config

[配置 api 介绍](https://prolayout.ant.design/)

## 动态 menu

setMenuData

## 参数路由

## layouts

UserLayout 就是上方有个 logo、下方留空，如给登录使用

## 视图无关的数据

定义在 RFC 外面

## re-render

每次 re-render，**异步函数**会创建新实例，原始版本不再指向正确的实例

使用 useCallback，并提供依赖值

## why mapState mapDispatch

任何能在组件外以 redux action 方式生存的异步业务逻辑，考虑到使操作不受组件生命周期影响，仅定义为容器的 mapDispatchToProps 并传递给组件，这样意味着你的组件可免除异步逻辑、而变得相当简单，业务逻辑不再与视图紧耦合

展示组件唯一依赖来源 prop，不关心数据怎么来、不关心什么是 dispatch
[reactjs - What is mapDispatchToProps? - Stack Overflow](https://stackoverflow.com/questions/39419237/what-is-mapdispatchtoprops)

## 容器组件模式

容器处理数据获取，然后渲染相应的子组件，就是这样

相应组件意味着同名，如 `StockWidgetContainer => StockWidget`

数据获取和渲染职责分离、渲染组件可复用，渲染组件依靠 PropTypes 显式失败

[Container Components - Learn React with chantastic - Medium](https://medium.com/@learnreact/container-components-c0e67432e005#.1a9j3w1jl)

## umi 简化数据流方案

[@umijs/plugin-model](https://umijs.org/zh-CN/plugins/plugin-model)
页面 pattern model/\*_/_ 或 \*.model.ts
pages/user/counter.model.js
pages/user/models/counter.js
useModel('user.counter')

namespace 小写命名，跟其它类型变量区分

有哪些 namespace 可用，编辑器会提示

发现还是全局请求了，意思是只支持全局，支持不同的放置位置

或者可以把方法导出去，只在需要的页面调用

https://github.com/umijs/umi/issues/5195#issuecomment-672527326
[Ant Design Pro V5 已经支持预览 · Issue #6605 · ant-design/ant-design-pro](https://github.com/ant-design/ant-design-pro/issues/6605)

> 对于轻量级的数据流我们都推荐这种方案。

[Umi Hooks - 助力拥抱 React Hooks - 知乎](https://zhuanlan.zhihu.com/p/103150605)
[Umi Hooks 实用代码片段整理 - 掘金](https://juejin.im/post/5ee081e551882543221d8b42)

```
import {useMouse, useWindowSize, useScroll} from 'react-use'
```

## class 组件不能用 hooks

> 你可以用 hoc 包一层
> 数据逻辑极端复杂时，用 class

React hooks 我也在项目中使用了一段时间，确实有它的优势的地方但是好像也没你文章里说的这么好，它确实是将逻辑复用变得更简单纯粹，但是我平时业务开发的时候，复用的不只是逻辑，ui 也需要复用。所以平时封装的时候，封装你文中这种和业务结合交大的自定义 hook 会比较少，大多数时候还是会封装那种 ui 和状态并存的常规组件，当然为了兼容差异化 ui 需求，会通过 render props 配合默认 render，或者使用内部 Context 实现的 Compound component，来将组件拆离成合理的 ui 粒度，同时保留内部逻辑，通过这两种方式来满足你文中提到的差异化 ui 的需求。使用自定义 hook，感觉还是那种工具类型的更合适些

## form 表单数据存储到上层组件

fields

## Warning: [antd: Upload] `value` is not a valid prop, do you mean `fileList`?

上传是比较特殊组件，放在 form 里，要特殊设置

需要同时使用?

```js
valuePropName = 'fileList' // 指明特殊组件类型
getValueFromEvent = { normFile }
```

## Unhandled Rejection (TypeError): Object(...) is not a function

function 没有导出

## 使用 upload 组件上传图片提示：Uncaught Error: must set key for <rc-animate> children

没有设置 uid

## Error: Too many re-renders. React limits the number of renders to prevent an infinite loop.

onClick={setSideIndex(index)}

## 自定义表单控件

完全受控

```jsx
<Dragger {...uploadProps} fileList={value} onChange={onChange}>
  <p className="ant-upload-text">拖入或点击添加工程文件</p>
</Dragger>
```

## useModel 是否会触发 redux 插件

## 给定深层数据 id，tree 结构定位

转换 tree 为 dict，并添加 parentId 和 index

## antd 官方 dragger 丢失文件

## useEffect 函数惰性，绑定函数记忆的可以是旧的依赖值

- 如果`useEffect`第一个函数参数直接或者间接用上某个变量，就请把这个变量放在`useEffect`的第二个参数里
- 使用`useEffect`，不要调用函数层次太多，代码应该一眼看清楚哪些函数会被`useEffect`调用。
- 只要是访问了`state`的函数，都应该用`useCallback`来保证 state 变化时生成一个新函数

> 明确或潜在依赖 state 的函数，都需要指明依赖，以便在 re-render 时重新生成正确依赖的函数

## 切换素材时，Form.item 下发的 value 不更新，故改为手动传

## react props 默认值使用非基础类型 引起不必要更新

因此使用 ES 默认值时，如果是非基础属性，建议放一个常量在外面：

```js
const EMPTY_ITEMS = []

const Foo = ({ items = EMPTY_ITEMS }) => {
  return <Bar dataSource={items} />
}
```

https://www.zhihu.com/question/403260687/answer/1306841252

[React hook to control table selection](https://gist.github.com/otakustay/9b59153da2e124f0637732fef5c71c6a)

[React 模式（中文版） - 知乎](https://zhuanlan.zhihu.com/p/55546844)

## Failed to execute 'clone' on 'Response' umi

要读取 resonse 里内容， clone 一份再处理

## antd layout

```
layouts/SecurityLayout  是否登录
  component: '../layouts/BasicLayout', 权限
  authority: ['admin', 'user'],
```

## menu

```js
const menuList = [
  {
    path: '/design/personal',
    name: '个人中心',
    key: 'personal',
    icon: <IconFont type="icon-mine" />
  },
  {
    path: '/design/audit',
    name: '审核中心',
    key: 'audit',
    icon: <IconFont type="icon-mine" />
  }
]
const RenderMenuItem = ({ data }) => {
  const { name, path, key, icon } = data
  return (
    <Menu.Item key={key} icon={icon}>
      <Link to={path}>{name}</Link>
    </Menu.Item>
  )
}

{
  menuList.map(item => <RenderMenuItem data={item} />)
}
```

## useModel 持久化，浅拷贝数据里如果有对象 对象经修改，会保持

解决，深拷贝后，再修改

## 异步权限

1. request loading
2. setAuthority 更新 localStorage
3. reloadAuthority

## 关闭菜单国际化

defaultSettings

```js
  menu: {
    locale: false,
  },
```

## 对象意外修改

pageNum 与需要响应更新列表数据的值分离

## [总结自己使用过的 Hooks 数据流方式 - 掘金](https://juejin.im/post/5e9148f76fb9a03c8966daf8)

[jamiebuilds/unstated-next: 200 bytes to never think about React state management libraries ever again](https://github.com/jamiebuilds/unstated-next)

## CSS module 局部作用域

局部样式与覆盖 global

书写上与一般 CSS 无异

导入使用时有差异

global 即是用来声明传统的 class，方便混用。首先少写全局样式，其次使用时应该包裹起来

```less
.override-ant-btn {
  :global(.ant-btn) {
    border-radius: 16px;
  }
}
```

[自定义样式 | Ant Design 实战教程](https://antd-course.ulivz.com/customized_styles.html#%25E5%25AE%259A%25E4%25B9%2589%25E6%25A0%25B7%25E5%25BC%258F)

## 权限控制

对于权限控制，首先需要明白一点：“权限的真正控制都必须是在服务端负责的”。

## 模块模式

定义工具函数时，可以把需要的私有变量包起来，不污染 utils 等文件

```js
// 除了 double 外界无法访问 a
function double(x) {
  let a = 2
  return (function realFn() {
    return x * a
  })()
}
```

## 记忆 memo

- 用数组或对象，将历史计算结果存储
- 实现方式，闭包。模式提炼

## file.type 不可靠

有的文件类型，如 psd、rar，`file.type`值是`""`
直接拿`file.name`扩展名判断比较好

## 动态样式

如`width`数值，用`style=`就可以

[RangePicker『此刻』建议配置成可选时间范围。 · Issue #1418 · ant-design/ant-design](https://github.com/ant-design/ant-design/issues/1418)
[解决——CSS :before、:after ，当 content 使用中文时有时候会出现乱码 - SophiaLiu - 博客园](https://www.cnblogs.com/liuyanxia/p/9099947.html)

## undefined 未赋值 null 值为空

[Select 控件为什么会把 null 当做有 value 而不显示 placeholder ，必须要为 undefined 才可以？ · Issue #2367 · ant-design/ant-design](https://github.com/ant-design/ant-design/issues/2367)

## less alpha

fade

## antd 日期选择 预设日期

[Sandbox - CodeSandbox](https://bz0iy.csb.app/)

- footer 反转
- 不需要标题栏、关闭
  ```
  ant-picker-panel-container
  display: flex;
  flex-direction: column-reverse;
  ```

## 特殊选中需求

```
    .ant-menu-item:not(.ant-menu-item-selected) {
      a[href^='/design/audit'] .anticon {
        color: #00BE7B;
      }
    }
```

## 使用 传递对象，修改时，注意提前 clone，不要影响原对象

留意外部传入的 object，然后`.`语法访问，意外修改了引用

lodash cloneDeep

## 审核自动切换

- 移除项
- 不要后台拉取数据，会扰乱 index，使用 filter
- filter 不会改变顺序
- 使用 filter，切换下一项，不需要移动 index，如果当前 index 无值，即到尾部

## css hover 不适用内容有间距场景

## antd 日期组件返回的时间是当时时间

实际需求，应该是 start 0.00 end 23.59

## replace DesignLayout with ProLayout

1ffb95756ab39c9538affd24c09d7cfe278127a3

## 权限处理

```
setUser(data)
Storage.setItem('user', data);
reloadAuthorized()
```

## ts demo

```js
type SuperUlMode = 'horizontal' | 'vertial';
type SelctCallBackParams = { index: number | undefined, name: string | undefined };
type SelectCallBack = ({index, name}: SelctCallBackParams) => void;

interface SuperUlProps {
  defaultIndex?: number,
  mode?: SuperUlMode,
  style?: React.CSSProperties,
  onSelect?: SelectCallBack
}

interface ISuperUlContext {
  index: number,
  onSelect?: SelectCallBack;
}
```

node_modules/antd/es/

## percent 事件频繁导致 多个组件过度 render

分析： percent 事件 3-7 次/s emit 给父组件 fileList，变化导致所有依赖 fileList 的组件 render。但外部并不关心这个事件

解决： 内部维护一份 fileList，仅非 percent 事件时，向外 emit 变化

## 跨代数据共享

- 依赖反转、组件合成
- 动态数据传递，要格外注意显式声明依赖

## [我是如何无缝的扩展 antd 组件 - 知乎](https://zhuanlan.zhihu.com/p/111850451)

- 扩展组件、但保持旧的引用
- 编辑器能识别吗

## ant design repo

install use node 8
start use node 14

## 高阶组件

[Higher-order Components](https://gist.github.com/sebmarkbage/ef0bf1f338a7182b6775)
[Mixins Are Dead. Long Live Composition | by Dan Abramov | Medium](https://medium.com/@dan_abramov/mixins-are-dead-long-live-higher-order-components-94a0d2f9e750#.eeu8q01s1)

> A higher-order component is just a function that takes an existing component and returns another component that wraps it.

## Antd 强烈风格，不适合较大定制

推荐主色定制
[有关主题设计的建议 · Issue #1241 · ant-design/ant-design](https://github.com/ant-design/ant-design/issues/1241)
样式覆盖、非常麻烦

最常用的通用变量

读 [FAQ - Ant Design](https://ant.design/docs/react/faq-cn)

## 线上 设计素材浏览有个 bug，切换二级菜单时，列表数据某些场景会互相影响

bug 原因，

1. URL 参数变化，组件仅 update，需要重置 state
2. 菜单切换，会触发 infiniteLoading，超出最大页数判断有问题

## 图标替换

1. 需要 JS 操作
2. fork 图标库，单独维护
   以 anticon-down 为例，搜索 down，替换 svg，build

生成文件
node_modules/@ant-design/icons-svg/lib/asn/DownOutlined.js

ant-design-icons/packages/icons-svg/docs/ContributionGuide.zh-CN.md

## require 文件不存在

[reactjs - JavaScript Check if File exists, if not then - Stack Overflow](https://stackoverflow.com/questions/55213560/javascript-check-if-file-exists-if-not-then)
─

使用 import，报错
Unhandled Rejection (Error): Cannot find module './sketch.svg'
webpack:/src/assets/project lazy ^\.\/.\*\.svg\$ namespace object:45

## React 如何点击页面空白处关闭弹窗

1. 给 body 绑定事件 关闭
2. 给弹窗等元素绑定点击事件 `onClick={e => e.stopPropagation()}`

## umi env 页面内不要解构 process.env

```
const { NODE_ENV, SERVER_ENV } = process.env;

console.error(process.env.SERVER_ENV, SERVER_ENV) // test undefined
```

node config/config.ts 可以完整读取 process.env，而 global.tsx 明显是页面层面，读到的是 define 植入，不是真实的 object，不一定能解构出来。所以最好不要用解构语法。

## form field 避免下标访问，不利于扩展

可以用 find name 方式

## 公共组件样式

避免传值写死，不利于响应式

## husky

```sh
npm i -D husky lint-staged prettier
npx mrm lint-staged
```

antd 项目已默认配置

## antd range-picker blur hide 如何实现

基于已有组件定制，可以单独使用

失焦如何同时支持 input 和 div

time-picker
date-picker
[rc-picker - npm](https://www.npmjs.com/package/rc-picker)
rc-picker/src/RangePicker.tsx
triggerInnerOpen
rc-trigger/src/index.tsx
class -hidden
{trigger} onBlur input
{portal} onMouseLeave div
必 delay
onMouseEnter 先清除定时器

## stylelint 异常输出

```
单独运行 npm run stylelint 提示未安装
检查 node_modules/.bin 确实没装
可能是 eslint 全局安装，带来的问题？避免全局安装，因为不同项目依赖可能不一样，再加上 ts 等规则依赖，会很麻烦
npm install --no-save stylelint

npx stylelint --help
```

## umi-request requestType 生效条件

'requestType' when the type of data is object or array.

## createPortal，左右切换时，生成多余 div

避免创建新的 div？不行

只能是创建时，先把旧的删掉

## todo material-lib

```
.ant-menu-item:active, .ant-menu-submenu-title:active {
    /* background: aliceblue; */
}
```

## [React Hooks(四): immutable - 知乎](https://zhuanlan.zhihu.com/p/163590288)

更新有两个阶段：1. render: compute diff 2. commit diff to real dom

存在问题的是 1，执行计算开销
[child overload render - CodeSandbox](https://codesandbox.io/s/child-overload-render-p5p6t)

期望：

- 值变化，引用变化
- 值不变，引用不变
  问题：
- !!!机制：父组件重渲染会递归重渲染所有子组件，即使子组件依赖的 props 没有变化
- 性能：可避免的重渲染，有的子组件渲染开销很大
- 行为：无用的副作用重执行，无限循环
- 需要重请求保持数据最新场景，而重渲染开销大，返回数据每次创建新对象
- parse 会创建新对象
- 对子组件来说，依赖的父组件应避免意外变化
- 引用相等，值发生了变化，UI 不更新
- 深拷贝问题，包含对象值不变，引用变了，

结论：

1. React.memo 包裹组件， 适用 prop 仅原始类型，复杂类型，可以指定比较函数，只适用函数组件

   [Use React.memo() wisely](https://dmitripavlutin.com/use-react-memo-wisely/)

2. 使用 immer

   [精读《Immer.js》源码 - 知乎](https://zhuanlan.zhihu.com/p/34691516)

3. record 和 tuple，JS 引入不可变数据结构 未来
4. useRef 适用于父组件内要定义包含常量的对象
5. 避免在 render 中创建对象，或者使用 useMemo 只能是无副作用的高计算开销操作，指定依赖项，仅依赖更新时重新计算
6. hook state 要求不可变，深层嵌套如果配合 ES6，spread hell

根源：对象的值比较和引用比较的不一致性
值比较计算开销大

很全的文章，不仅是介绍 record tuples
[Records & Tuples for React, way more than immutability](https://dev.to/sebastienlorber/records-tuples-for-react-way-more-than-immutability-2iic)

官方性能优化指南：

- 把存在依赖项的函数，移到 useEffect 内
- 不需要考虑函数重复创建的开销，除非是确定开销比较大的函数
- setState 传入函数更新 state，如果返回值不变，render 会跳过更新 搜`setRows`

  [useState: lazy initial state](https://codepen.io/cyio/pen/WNwpGJW?editors=1010)

[Hooks FAQ – React](https://reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node)

## caches 操作要求 https

if (window.caches && window.caches.keys) {

SecurityError: Failed to execute 'keys' on 'CacheStorage': Only secure origins are allowed (see: https://goo.gl/Y0ZkNV).

[CacheStorage - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage)

安全源定义
[Prefer Secure Origins For Powerful New Features - The Chromium Projects](https://www.chromium.org/Home/chromium-security/prefer-secure-origins-for-powerful-new-features)

## 请求优化，token 是否存在或在有效期内

[React-umi-request 动态刷新 Token 功能实现及 node.js 代码逻辑 - qkstart - 博客园](https://www.cnblogs.com/qkstart/p/11856168.html)

## static propTypes

适用没有 typescript 时，老代码用得多
[reactjs - react: why static propTypes - Stack Overflow](https://stackoverflow.com/questions/40514574/react-why-static-proptypes)

## 何时单独用 xhr

跨域？不带 cookie？

## ImmerJS 优于使用 lodash 创建拷贝

- 无需遍历，借用 proxy，仅针对变化的对象属性进行深拷贝
  [Insight #3 - Use ImmerJS over lodash/set, ImmutableJS or plain JS - DEV](https://dev.to/sebastienlorber/insight-3-use-immerjs-over-lodash-set-immutablejs-or-plain-js-36bl)
  [官方类似 dva 解决方案 Quick Start | Redux Toolkit](https://redux-toolkit.js.org/introduction/quick-start)

## 竞速 race

1. useRef 判断
2. 取消请求
3. saga takeLatest
4. 建议硬编码增加请求延时，更容易复现和发现问题
   [Handling API request race conditions in React - DEV](https://dev.to/sebastienlorber/handling-api-request-race-conditions-in-react-4j5b)
   [slorber/react-async-hook: React hook to handle any async operation in React components](https://github.com/slorber/react-async-hook)

makeCancelable 为 promise 添加伪取消功能 [isMounted is an Antipattern – React Blog](https://reactjs.org/blog/2015/12/16/ismounted-antipattern.html)

## upload drag 扩大区域

- `:focue outline`浏览器原生样式，列表界面点击时出现 focus 样式并不合适
- 非文件也能 drag
  [How to Drag & Drop HTML Elements and Files using Javascript | by Reema | Medium](https://medium.com/@ralzohairi/how-to-drag-drop-html-elements-and-files-using-javascript-d31d15279369)
  [DataTransfer test](https://codepen.io/tech_query/pen/MqGgap?editors=1000)

## 定位代码最快方式

1. react dev tools 组件名称
2. css 类

数据流，从上到下传递，嵌套可能很深，找数据定义从上往下找

## 开发阶段 eslint 影响初期效率

- 开发新功能初期，可能有很多临时代码
- 可以对新文件，添加 eslint 忽略标记。后期再放开

## 临时禁用 lint

```
// @ts-nocheck
/* eslint-disable */
```

## 空数组约定

2.【强制】前后端数据列表相关的接口返回，如果为空，则返回空数组[]或空集合{}。说明：此条约定有利于数据层面上的协作更加高效，减少前端很多琐碎的 null 判断。

https://github.com/alibaba/p3c/blob/master/Java%E5%BC%80%E5%8F%91%E6%89%8B%E5%86%8C%EF%BC%88%E5%B5%A9%E5%B1%B1%E7%89%88%EF%BC%89.pdf

## map key

要求：稳定，列表内惟一

稳定是说一个页面操作内，保持稳定

不指定 key 时，默认使用 index，index 存在不稳定

内容 hash 不行，不惟一

所以，只要提前生成一个惟一值就行。可以基于一个常量，累加生成 `key={genUniqKey()}`

## HMR => Fast Refresh

[What is React Fast Refresh?. This library is going to change your… | by Mallik Cheripally | JavaScript In Plain English | Medium](https://medium.com/javascript-in-plain-english/what-is-react-fast-refresh-f3d1e8401333)

存在问题：

- 有时变更后，刷新很慢
- 出现错误后，需要手动刷新

## dan note

react 中 props state 是不可变的（至少强烈建议如此）

避免闭包的原因是很难思考一个值可以随着时间被改变

Function components capture the rendered values.

函数组件保持了触发请求时的 prop。可变 this 模拟 ref.current
而 class 会由于在请求中，重渲染，this 变化，读取最新的 prop。React 会改变 this

In all cases I’ve seen so far, the “stale closures” problems happen due to a mistaken assumption that “functions don’t change” or that “props are always the same”. This is not the case, as I hope this post has helped to clarify.

实际是因为闭包？
[How Are Function Components Different from Classes? — Overreacted](https://overreacted.io/how-are-function-components-different-from-classes/)

Dan 介绍 hooks 提案，演示 class 与 hook 对比 context custom hook
[React Today and Tomorrow and 90% Cleaner React With Hooks - YouTube](https://www.youtube.com/watch?v=dpw9EHDh2bM)

## constructor 里发请求？

1. 应该设置初始 state，给用户替代状态，如 loading
2. constructor 不能 async
3. componentWillMount 废弃，开发者可能漏掉设置初始 state，以为 render 会等待，实际请求中会执行一次
4. 最佳实践，componentDidMount + isLoading，设置 isLoading 为 true 时，实际组件不会渲染

[Where to Fetch Data: componentWillMount vs componentDidMount](https://daveceddia.com/where-fetch-data-componentwillmount-vs-componentdidmount/)

[javascript - Fetching data in constructor - Stack Overflow](https://stackoverflow.com/questions/55182526/fetching-data-in-constructor)

[AJAX and APIs – React](https://zh-hans.reactjs.org/docs/faq-ajax.html)

## 自定义 Tag

字符模板 + 大写 + keyof

[reactjs - Dynamic tag name in jsx and React - Stack Overflow](https://stackoverflow.com/questions/33471880/dynamic-tag-name-in-jsx-and-react)

## jsx map join => reduce

[reactjs - how to render react components by using map and join - Stack Overflow](https://stackoverflow.com/questions/34034038/how-to-render-react-components-by-using-map-and-join)

## pages 重复渲染，尤其 audio 有动画明显

14 MediaPiece.tsx:7 mediapiece render

areEqual 从第二次渲染开始，意味着不能有卸载，父级哪层导致了卸载，拆出去的代码是否需要包括 map，需要，因为要检查数据入口，自上而下，分层控制

如果整个列表都卸载了，key 无意义

一层 map，使用 memo，仅修改项会 re-render

```
key={genUniqKey()}
```

两层 map key item 写混，误以为 uniq key 生成有问题

lodash uniqueId 生成位数个位数时，容易冲突

检测父组件是否发生了卸载，也可以在 react dev tools 选中组件，如果组件卸载，选中会往父级跳

```js
useEffect(() => {
  return () => {
    console.log('child unmounted')
  }
}, [])
```

组件定义嵌套时，memo 失效？

[React.memo - CodeSandbox](https://codesandbox.io/s/reactmemo-oi15s?file=/src/App.js)

总结：

- state 更新，组件并不会卸载，除非删除？
- memo 不能写到组件内 React Top-Level API，这个 level 实指 top level scope，官方文档译的顶层、不好理解
- memo 包裹的组件如果使用了 children props，会不 work
- key 里不要直接写函数，否则界面更新会执行

React 函数组件优化只做了两点：

1. state 浅比较，相等则不重渲染。所以不比较 prop？
2. DOM 树只重渲染变化部分

## effect 相关函数处理：

是否要把函数放入 effect 依赖数组，尽量避免

1. 提升到组件外面
2. 移到 effect 内
3. useCallback

[A Complete Guide to useEffect — Overreacted](https://overreacted.io/a-complete-guide-to-useeffect/)
[深入浅出 useSWR 原理 - 知乎](https://zhuanlan.zhihu.com/p/93824106)

## modal router

在 modal withRouter 不行， 传不到子组件

## 鼠标进入触发 lottie

mouseHover 没有

mouseOver 不行

mouseEnter / mouseLeave

解决误触，debounse 不行，延迟但还是会执行，throttle 也不行，因为 enter 触发并不频繁

通用解决方案：为调用增加延时，当误触发生时取消延时，hover 够久时正常调用

子组件 render 问题，有外在表现组件容易显现出来，如动画、发请求，否则就要打 log 才能看出来

el 绑定，用自定义 id 即可。不需要实时 Dom，因此没必要用 ref

翻页集中 setState，否则可能多次渲染，原因是先设置了 index，然后又设置 data

## antd table

- data 不需要 concat, 无限加载才需要
- 弹窗表格优化
  ```css
  // 小屏
  @media (max-height: 800px) {
    .ant-modal {
      top: 50px;
    }
  }
  ```
  ```js
  // 固定高度内滚动
  scroll={{ y: clientHeight - 450 }}
  ```

## state 派生自 prop，组件内又修改 state

数据变更源成了两个，增加了数据意外变化定位难度

是否能通过通知父组件更新数据

## 第二层弹窗问题

用了 absolute，需要计算容器高度

将一层内容 hide，并改将二层内容用 transfrom 移动到目标位置

## redux dev tool crash

["redux-devtools-extension" gets laggy and eventually crashes when I try to open it. · Issue #643 · reduxjs/redux-devtools](https://github.com/reduxjs/redux-devtools/issues/643#issuecomment-697398278)

## 无效组件

不能是 object，有的没有 props.children

暂时用 组件 map

可以打印出来，检查是否正确

> Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object. #13445
> 元素类型，有两种，内置组件 string，合成组件 class/function

组件不能是 el，需要是函数

```js
const CompanyIconInHeader = <span>y</span>

// wrong use
;<CompanyIconInHeader />

// right
const CompanyIconInHeader = () => <span>y</span>
```

## 点击文本复制

react wrapper 引入问题

browser api 兼容性，需要请求权限

import copy from 'copy-to-clipboard';

## 半受控，props 变化，需要更新部分 state

硬重置（不推荐、但可救急）

```
componentDidUpdate
  this.setState({ ..._.cloneDeep(defaultStates) }, () => {
```

v15 componentWillReceiveProps or componentDidUpdate + setState
v16 getDerivedStateFromProps

反模式：受控与非受控混合

官方建议：

1. 完全受控，数据提升
2. 完全不受控，用 key 控制更新

## 缓存计算

类 Vue computed，场景高开销计算，入参作为依赖，缓存最后一次计算值

memoize-one
[memoize-one 在 React 中的应用](https://juejin.cn/post/6844903894061940750)

拓展：斐波那契数列

## ripple btn

```
demo a>text
antd button>span text
```

多个 span 标签，导致事件 target 会变，当 target 为 span 时，计算坐标有误

span antd 有设置 absolute

## 跨组件引用可变对象

- 多个修改源
- 深层数据变了，引用没变

## webpack CPU占用高

在 MacOS Catalina 中，Vue 项目在运行 node run dev 时，webpack server 会调用 fsevents 模块进行监控文件变化。如果没有这个模块，就会一直遍历所有的文件。

https://www.jianshu.com/p/f7769e01aa9c

## 表格踩坑，最佳实践
查询参数和分页，应该用一个 state，合并更新 query

这么写，会有冲突，比如筛选重置同时回第一页
```js
  useEffect(() => {
    fetchList()
  }, [curQuery, pagination])
```



