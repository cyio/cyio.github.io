# 前端测试

* 数据不固定，影响测试
* 依赖测试或开发环境的缺点是接口不稳定，数据不稳定。如果想只测试前端，需要 mock

## Cypress
* 判断请求成功 [Cypress.js: Assert that an XHR POST was successful.](https://gist.github.com/axle07/758885e866987be96f8dbfd8b19a3d5e)

[Installing Cypress | Cypress Documentation](https://docs.cypress.io/guides/getting-started/installing-cypress.html#System-Requirements)
[Best Practices | Cypress Documentation](https://docs.cypress.io/guides/references/best-practices.html)
[撩测试MM神器cypress使用入门 - 掘金](https://juejin.im/post/5ad88ea16fb9a07abc29729a)
[【译】基于 Cypress 测试 React 应用 | 创宇前端 - 最酷开发者的技术分享](https://knownsec-fed.com/2018-03-07-fan-yi-ji-yu-cypress-ce-shi-react-ying-yong/)
[Tutorial: Javascript End to End Testing with Cypress](https://www.valentinog.com/blog/javascript-end-to-end-testing-cypress/)
[cypress-io/cypress-example-recipes: Various recipes for testing common scenarios with Cypress](https://github.com/cypress-io/cypress-example-recipes)
[bahmutov/cypress-vue-unit-test: A little helper to unit test Vue components in the Cypress.io E2E test runner](https://github.com/bahmutov/cypress-vue-unit-test)

### 常用方法
```js
// 只有一个表单
cy.get('form').submit() 
// data 属性定位更好
cy.get('[data-cy="submit-login"]').click()
```

## 验证码
* 测试时关掉，或者设置万能验证码
* 手动获取 cookie，再填给程序
* 后端给接口，ajax 获取

[自动化测试解决验证码问题 - 简书](https://www.jianshu.com/p/2cafdae0abe0)
