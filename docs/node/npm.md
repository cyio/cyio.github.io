# NPM

## npm 创建和发布一个包的步骤

```bash
npm set init.author.name "Oaker"
npm set init.author.email "icaner@qq.com "
npm set init.author.url "http://oaker.bid"

npm init --yes
npm init --scope=cyio

npm i mocha chai -D

mkdir test && touch test/test.js

npm test

git tag v0.0.1
git push origin master --tags
npm publish --access public
```

## 开销评估

[bundlephobia](https://bundlephobia.com/)

## 私有 npm 仓库

- 最简单 git 即可
- 不好的地方是，使用 npm update 是无法更新私有模块，想更新只能重新安装一次。好处是不用搭建服务。

[](https://docs.npmjs.com/creating-and-publishing-private-packages)
[5 分钟内 3 种方法搭建企业内部私有 npm 仓库 - 掘金](https://juejin.im/post/5a386b0d6fb9a0450f220c59)

## npm 安装失败怎么办？

1. 网络解决
   绝大多数安装出问题，是网络问题引起的，npm 包往往依赖 github。
   比如 node-sass 安装时，要下载对应系统的二进制文件，如果下载失败可能就要本地编译。
   解决思路是使用代理来装这些包，npm 支持设置 http(s)代理，不支持 socks，解决方法是用 proxychains。

2. 手动 clone
   https://npmjs.org/package/xxx
   把 xxx 换成你要装的包名，在页面找到其源码托管页，通常是 github
   把源代码 clone 下来，放到`node_modules/xxx`目录，检查这个目录下的 package.json，如果有依赖，按照同样方法操作。

[《Node.js 入门系列》—— NPM 安装第三方模块常见问题](http://ucdok.com/articles/2013-09-26-npm-install-problems.html)

[NPM 使用问题汇总 · Issue #565 · fex-team/fis](https://github.com/fex-team/fis/issues/565)

## 安装或升级 npm，需要全局，需要 sudo 或 win 下的管理员权限

```bash
sudo npm install -g npm
proxychains npm install node-sass --save-dev
```

## 解决 gulp 等全局安装后，找不到命令

由于自定义了全局 npm 的路径，也就是 prefix，所以要告诉终端，执行如下命令

```bash
echo -e "export PATH=$(npm prefix -g)/bin:$PATH" >> ~/.zshrc && source ~/.zshrc
```

## 特殊包安装

- puppeteer `PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true yarn add puppeteer` 忽略 chromium 下载

## 与 yarn 比较

- yarn 管理全局模块有优势，可通过备份恢复
  [为什么我从 npm 到 yarn 再到 npm? - 知乎](https://zhuanlan.zhihu.com/p/36391490)

## lockfile 可重现构建

tldr:

- npm 使用版本大于 5.4.2
- 更新 lockfile，`npm install --package-lock-only`，用户可用 yarn
- lockfile 应尽量避免冲突

问题：`package.json`松散版本号，安装易变
解决方案 yarn 引入 lockfile 锁死加 手动升级

[How Yarn Lock Files Work and Upgrading Dependencies](https://www.robertcooper.me/how-yarn-lock-files-work-and-upgrading-dependencies)

npm 5-6 lock 调整了子依赖版本号描述方式，减少 diff。精确安装看顶层。不影响行为，构建环境可忽略此问题
[changes after install · Poltergeist/npmtest@59dad3e](https://github.com/Poltergeist/npmtest/commit/59dad3e5800bca8d92315d962ba2477748867fed#diff-32607347f8126e6534ebc7ebaec4853d)
[npm install changes package-lock.json from exact versions to loosly versions · Issue #20434 · npm/npm](https://github.com/npm/npm/issues/20434#issuecomment-402988364)

理想情况，输入`package.json`，输出确定`node_modules`

影响因素：

- 使用不同版本 npm，安装算法略有差异
- 范围包，有更新，再安装时使用新版本
- 子依赖即使写死版本号，也会更新
- 安装包的远程库失效

A-B-C，A 指定 B 版本，但想用新的 C 怎么办

可重现依赖树，不必根据`package.json`重新计算依赖版本
规则，尝试根据 lockfile 描述还原，如果不可用或缺失，则回退到旧方式

` npm update``npm rm``npm update `会触发，使用选项`--no-save`避免保存

加入版本管理，可以记录变化

冲突，1. 人工解决`package.json`冲突 2. `npm install --package-lock-only` 自动解决 lockfile 冲突

推荐使用`npx npm-merge-driver install --global`，自动让 git 处理 lockfile 冲突

[npm-package-locks | npm Documentation](https://docs.npmjs.com/files/package-locks)

lockfile 加 `npm install` 在部署时不能保证可靠还原，一旦出现问题 debug 麻烦

旧版本`package.json`依赖有更新且`npm i`时，会更新依赖和 lockfile 而不是 respect lockfile，5.4.2 后修复此问题，安装规则：[why is package-lock being ignored? · Issue #17979 · npm/npm](https://github.com/npm/npm/issues/17979#issuecomment-332701215)

5.7.1 引入`npm ci`只从 lockfile 进行复现安装。适用于纯净部署，比常规安装更快更严格，帮助捕获错误或增量安装引起的不一致

lockfile 与 `package.json`依赖不匹配时，会报错，而不是更新 lockfile
如查`node_modules`存在，会先删掉
可以做为`npm i`失败的回退，大幅降低安装失败的情况

[npm-ci | npm Documentation](https://docs.npmjs.com/cli/ci.html)
[The npm Blog — Introducing `npm ci` for faster, more reliable...](https://blog.npmjs.org/post/171556855892/introducing-npm-ci-for-faster-more-reliable)
[node.js - Why does "npm install" rewrite package-lock.json? - Stack Overflow](https://stackoverflow.com/questions/45022048/why-does-npm-install-rewrite-package-lock-json/51045967)

从 yarn 迁移 [mixmaxhq/deyarn: A command-line tool for converting projects that use Yarn to npm.](https://github.com/mixmaxhq/deyarn)

- lockfile 只看顶级项目，非顶级不起作用
- 建议，构建严格按 lockfile，开发忽略
  - 保证构建稳定，不出现意料外依赖变化导致的问题
  - 减少对开发者的工具要求，但要维护统一的 lockfile
  - 开发和构建环境，npm 版本要统一最低
  - 松散版本号的意义
- 缺点
  - 不易读，lockfile 被破坏不易察觉
  - `package.json`无法反映真实使用依赖
    [Do you really know how a lockfile works for yarn and npm packages? | Snyk](https://snyk.io/blog/making-sense-of-package-lock-files-in-the-npm-ecosystem/)
    [How should you pin your npm dependencies and why? - The Guild - Medium](https://medium.com/the-guild/how-should-you-pin-your-npm-dependencies-and-why-2b8d545c7312)

## 语义化版本
