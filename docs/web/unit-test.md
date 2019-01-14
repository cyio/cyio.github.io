# 单元测试

## 与端到端测试比较

|      | Unit/Integration             | E2E                        |
| ---  | ---                          | --                         |
| 范围 | 最小可测试单元/单元集成      | 整体                       |
| 环境 | Node                         | Browser                    |
| 框架 | Jest/Mocha                   | Cypress/Nightwatch         |
| 优点 | 容易编写，隔离，便于定位修复 | 模拟用户、真实             |
| 缺点 | 无法保证整体工作如何         | 编写、维护成本高，反馈滞后 |

![Qdmkv.png (381×329)](https://i.stack.imgur.com/Qdmkv.png)

> 你应该瞄准以下金字塔，主要关注单元和集成测试，70/20/10
> 单元测试是轻量级的，旨在单独检查系统的特定功能/组件 - 它们应该很快并且为您提供即时且非常具体的反馈 - 代码中的哪一行发生错误，出现了什么问题。 > 另一方面，端到端测试工作更高层次 - 从用户的角度检查整个应用程序，所有移动部件协同工作。 当e2e测试失败没有给出关于出错的地方，导致失败的地点和原因的信息时，这种情况很常见。
> 通常，单元测试由开发人员自己编写，而端到端测试由测试人员/ QA专家编写。
> Unit test: Test classes 
Integration test: Test component (class + template) using ComponentFixture
E2E: Mimic user inputs using Protractor and Selenium
[Configuration Reference | Vue CLI 3](https://cli.vuejs.org/config/#unit-testing)
[tdd - End-to-end tests versus unit tests, should tests be decoupled? - Software Engineering Stack Exchange](https://softwareengineering.stackexchange.com/questions/198918/end-to-end-tests-versus-unit-tests-should-tests-be-decoupled)
[Google Testing Blog: Just Say No to More End-to-End Tests](https://testing.googleblog.com/2015/04/just-say-no-to-more-end-to-end-tests.html)
