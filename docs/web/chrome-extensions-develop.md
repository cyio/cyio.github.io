# Chrome 扩展开发
[[toc]]

## 要点

- 注意权限增加时，会导致扩展被浏览器禁用，因此原则上应保持权限最小化，升级时要格外注意

## 在 Chrome 中安全地使用 eval

- 内容安全策略 - Content Security Policy (CSP)
  - 不允许内联脚本，必须单独放到文件中
  - 内联事件处理必须使用`addEventListener`，禁止使用`eval()`

但是有很多库使用了`eval()`或类似 eval 的结构，比如`new Function()`。尤其是模板库存在上述问题，而 Google 家的 Angular.js 支持 CSP。

`eval`之所以危险是因为它执行的代码能在扩展高权限环境下防问一切。

解决方案是在沙盒中运行`eval`，接触不到可以影响用户安全和隐私的 API 和数据。

1. 在配置中声明用到`eval`的页面

   ```js
   {
     ...,
     "sandbox": {
        "pages": ["sandbox.html"]
     },
     ...
   }
   ```

2. 创建后台页面，用 iframe 指向 sandbox.html
3. 后台脚本用于与 sandbox.html 通信，写上发送消息事件，监听返回处理
4. 在 sandbox.html 里，写上返回消息事件

[Chrome Extensions - Why Not Use The Sandbox? by Daniel Prentis on Prezi](https://prezi.com/huy8u0fupp2n/chrome-extensions-why-not-use-the-sandbox/)

- 最后再考虑使用 sandbox，有些缺点比如测试麻烦
- 可以使用 jQuery Fragments

进一步了解关于内容安全策略
[Content Security Policy](http://www.slideshare.net/ryanlabouve/content-security-policy-44793165)

支持 CSP 的模板库
[addyosmani/mustache-for-chromeapps](https://github.com/addyosmani/mustache-for-chromeapps)

## 权限

在 permisions 和 content_script 中设置域名匹配，以便于跨域请求，发布时会要求深入审核

建议在 permision 中使用 `activeTab`，可跨域访问当前打开的页面域名，减少审核难度

declarativeNetRequest 使用，id 需要有变量，回调仅是设置成功，不支持过滤 url

https://github.com/ray-lothian/Block-Site/blob/31026cd63e162ec61de4c3a5704bdb7fec2b8530/v3/contextmenu.js#L116


## starter template

https://github.com/xiaoluoboding/chrome-ext-mv3-starter

https://github.com/antfu/vitesse-webext 这个主分支是 v2 的，子分支有 v3 版本，不确定可用程度


- [ ] 调研 https://windicss.org/integrations/vite.html https://windicss.org/guide/migration.html