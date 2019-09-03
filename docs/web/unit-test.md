# 单元测试

## 关于
### why
- 尽早发现代码缺陷，提高代码质量
- 有信心地重构代码
### how
- 成本收益权衡，采用哪种测试？

## 与端到端测试比较

|      | Unit/Integration             | E2E                        |
| ---- | ---------------------------- | -------------------------- |
| 范围 | 最小可测试单元/单元集成      | 整体                       |
| 环境 | Node                         | Browser                    |
| 框架 | Jest/Mocha                   | Cypress/Nightwatch         |
| 编写角色 | 开发                   | 测试         |
| 优点 | 容易编写，隔离，便于定位修复 | 模拟用户、真实             |
| 缺点 | 无法保证整体工作如何         | 编写、维护成本高，反馈滞后 |

![测试金字塔](https://2.bp.blogspot.com/-YTzv_O4TnkA/VTgexlumP1I/AAAAAAAAAJ8/57-rnwyvP6g/s1600/image02.png)

> 你应该瞄准以下金字塔，主要关注单元和集成测试，70/20/10

> 单元测试是轻量级的，旨在单独检查系统的特定功能/组件 - 它们应该很快并且为您提供即时且非常具体的反馈 - 代码中的哪一行发生错误，出现了什么问题。

> 另一方面，端到端测试工作更高层次 - 从用户的角度检查整个应用程序，所有移动部件协同工作。 当 e2e 测试失败没有给出关于出错的地方，导致失败的地点和原因的信息时，这种情况很常见。

> 一个标准的互联网应用产品的前端部分，我粗略估计大概有 20%的业务基础代码比较稳定，比如通用组件、通用算法和数据模块等，可以针对这些建立复杂一些的 API 和 GUI 测试用例来保证质量。剩下 80%的部分不是很稳定，每天都在迭代，针对他们维护 case 的成本非常高。目前业界中号称做了自动化测试的项目，也大多是在做那稳定的 20%。

> - Unit test: Test classes
> - Integration test: Test component (class + template) using ComponentFixture
> - E2E: Mimic user inputs using Protractor and Selenium

[Configuration Reference | Vue CLI 3](https://cli.vuejs.org/config/#unit-testing)
[tdd - End-to-end tests versus unit tests, should tests be decoupled? - Software Engineering Stack Exchange](https://softwareengineering.stackexchange.com/questions/198918/end-to-end-tests-versus-unit-tests-should-tests-be-decoupled)
[Google Testing Blog: Just Say No to More End-to-End Tests](https://testing.googleblog.com/2015/04/just-say-no-to-more-end-to-end-tests.html)

## Jest

### eslint
在 `.eslintrc.js` 增加
```
env
  jest: true,
```
否则会有 lint 错误，如`it`未声明

### 运行测试

```sh
yarn unit / jest
```

### 测试一个文件

```sh
yarn unit tests/unit/modal.spec.js
yarn unit --watch tests/unit/modal.spec.js
yarn unit --watch --debug tests/unit/modal.spec.js
```

### 测试覆盖率

- 收集

```sh
--[coverage|collectCoverage]
```

- 统计范围

白名单
```
collectCoverageFrom [array]
Default: undefined
```

黑名单
```
coveragePathIgnorePatterns [array]
Default: ["/node_modules/"]
```

匹配到的文件，即使没写测试，也会参与统计

默认会收集全部 JS？

### 常用断言

```js
expect(wrapper.isVisible()).toBe(false)

expect(wrapper.props('show')).toBe(false)
expect(wrapper.emitted().close).toBeTruthy() // toBeTruthy if 语句为真
```

### timer mock / 异步代码

1.  `done` 显式指定测试结束，ajax、vuex action 在 nextTick 里断言

    注意，done 需要调用，否则会提示一个 timeout 错误


```js
beforeAll((done /* call it or remove it*/) => {
  done() // calling it
})
```

2.  `jest.useFakeTimers()`原生定时器功能依赖**真实**时间，测试需要控制时间，假时间
3.  `jest.runAllTimers();`执行微任务队列，**快进**直到所有定时器执行
4.  promise/await

## Vue 组件测试

[Wrapper | Vue Test Utils](https://vue-test-utils.vuejs.org/zh/api/wrapper/#%25E5%25B1%259E%25E6%2580%25A7)

[setTimeout not triggering when unit testing · Issue #3211 · facebook/jest](https://github.com/facebook/jest/issues/3211#issuecomment-289276061)
[到处都是测试 automate-everything/chapter6.md at master · azl397985856/automate-everything](https://github.com/azl397985856/automate-everything/blob/master/docs/chapter6.md)
[Quick Content Testing using Snapshots in Vue.js](https://vuedose.tips/tips/quick-content-testing-using-snapshots-in-vue-js/)
