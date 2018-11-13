# NPM

## npm创建和发布一个包的步骤
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
* 最简单 git 即可
* 不好的地方是，使用 npm update 是无法更新私有模块，想更新只能重新安装一次。好处是不用搭建服务。

[](https://docs.npmjs.com/creating-and-publishing-private-packages)
[5分钟内3种方法搭建企业内部私有npm仓库 - 掘金](https://juejin.im/post/5a386b0d6fb9a0450f220c59)

## npm安装失败怎么办？

  1. 网络解决
  绝大多数安装出问题，是网络问题引起的，npm 包往往依赖github。
  比如node-sass安装时，要下载对应系统的二进制文件，如果下载失败可能就要本地编译。
  解决思路是使用代理来装这些包，npm支持设置http(s)代理，不支持socks，解决方法是用proxychains。

  2. 手动 clone
  https://npmjs.org/package/xxx
  把xxx换成你要装的包名，在页面找到其源码托管页，通常是 github
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
