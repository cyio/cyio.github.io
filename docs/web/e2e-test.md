# 前端测试

- 数据不固定，影响测试，工具库更好测试些，前端还是比较特殊 => 需要大量 mock
- 专注端到端测试，一般是人工模拟用户
- 样式可以测试，通过样式定义和截图对比方式
- 依赖测试或开发环境的缺点是接口不稳定，数据不稳定。如果想只测试前端，需要 mock
- 判断请求成功 [Cypress.js: Assert that an XHR POST was successful.](https://gist.github.com/axle07/758885e866987be96f8dbfd8b19a3d5e)
- 不支持多 tab，应该去判断 a 链接中的属性，而不是去打开 a（浏览器原生行为，不必测试）
  ```js
  cy.get('.courseContainer')
    .should('have.attr', 'href')
    .and('include', 'id')
    .and('include', 'info-id')
  // cy.url().should('include', 'id')
  ```
- 可以设置 debugger，需要打开控制台
- stub 桩、预定义、假数据
- fixtures 静态假数据

[聊聊前端开发的测试 - Coding 博客](https://blog.coding.net/blog/frontend-testing)
[Installing Cypress | Cypress Documentation](https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-Requirements)
[Best Practices | Cypress Documentation](https://docs.cypress.io/guides/references/best-practices.html)
[撩测试 MM 神器 cypress 使用入门 - 掘金](https://juejin.im/post/5ad88ea16fb9a07abc29729a)
[【译】基于 Cypress 测试 React 应用 | 创宇前端 - 最酷开发者的技术分享](https://knownsec-fed.com/2018-03-07-fan-yi-ji-yu-cypress-ce-shi-react-ying-yong/)
[Tutorial: Javascript End to End Testing with Cypress](https://www.valentinog.com/blog/javascript-end-to-end-testing-cypress/)
[cypress-io/cypress-example-recipes: Various recipes for testing common scenarios with Cypress](https://github.com/cypress-io/cypress-example-recipes)
[Should I start with Cypress.io? | Better world by better software](https://glebbahmutov.com/blog/should-i-start-with-cypress/)
[Cypress tips and tricks | Better world by better software](https://glebbahmutov.com/blog/cypress-tips-and-tricks/)
[Element coverage for end-to-end tests | Better world by better software](https://glebbahmutov.com/blog/element-coverage/)
[Visual Regression testing with Cypress.io — Xebia Blog](https://xebia.com/blog/visual-regression-testing-cypress/)

### 常用方法

```js
// 只有一个表单
cy.get('form').submit()
// data 属性定位更好
cy.get('[data-cy="submit-login"]').click()
```

## 验证码

- 测试时关掉，或者设置万能验证码
- 手动获取 cookie，再填给程序
- 后端给接口，ajax 获取

[自动化测试解决验证码问题 - 简书](https://www.jianshu.com/p/2cafdae0abe0)

## Vue 组件测试

[bahmutov/cypress-vue-unit-test: A little helper to unit test Vue components in the Cypress.io E2E test runner](https://github.com/bahmutov/cypress-vue-unit-test)

## 框架选择

[Mocha vs Jest vs Cypress 2019 Comparison of Javascript Testing Framework | StackShare](https://stackshare.io/stackups/cypress-vs-jest-vs-mocha)
Cypress 下一代 web 测试框架
什么是 E2E： E2E（End To End）即端对端测试，属于黑盒测试，通过编写测试用例，自动化模拟用户操作，确保组件间通信正常，程序流数据传递如预期。
[典型 E2E 测试框架对比 - 小冷\_Blog - CSDN 博客](https://blog.csdn.net/qq_39300332/article/details/81197503)
[E2E 测试之 Cypress - 知乎](https://zhuanlan.zhihu.com/p/32666685)

按 Vue 推荐走
