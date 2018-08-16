# NPM

## npm创建和发布一个包的步骤
```
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
