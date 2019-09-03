# npm 可复现构建

---
package.json != 可复现构建

理想情况，输入`package.json`，输出确定`node_modules`

---
影响因素：

- 使用不同版本 npm，安装算法略有差异
- 范围包，有更新，再安装时使用新版本
- 子依赖即使写死版本号，也会更新
- 安装包的远程库失效

---
npm install 策略

1. 存在有效 lockfile，根据 lockfile 还原安装
2. 否则，根据 package.json 重新计算依赖生成 lockfile， 进行安装


问题:部署用途时不能保证可靠还原

---
5.7.1 -- `npm ci`

只从 lockfile 进行复现安装
适用于纯净部署，比常规安装更快更严格，帮助捕获错误或增量安装引起的不一致

---
- lockfile 与 `package.json` 依赖不匹配时，会报错，而不是更新 lockfile
- 如查`node_modules`存在，会先删掉
- 可以做为`npm i`失败的回退，大幅降低安装失败的情况
---

建议，构建严格按 lockfile，开发忽略

  - 保证构建稳定，不出现意料外依赖变化导致的问题
  - 减少对开发者的工具要求，但要维护统一的 lockfile
  - 开发和构建环境，npm 版本要限制最低 5.4.2
  - 松散版本号的意义

---

缺点
  - 不易读，lockfile 被破坏不易察觉
  - `package.json`无法反映真实使用依赖

---

完

---
