# github

## actions
- 最多同时 20 个，超过会排队
- 单任务至多运行 6h
- 公开库免费，可放心用。私有库有免费时间数

## deploy

pages 部署插件，页面搜索 vuepress
https://github.com/peaceiris/actions-gh-pages

不需要手动准备 gh-token

## tips

- repo url 后加 compare 进入分支分较模式

## gist

[Personal Access Tokens](https://github.com/settings/tokens)

```sh
brew install gist
echo GIST_ONLY_TOKEN > ~/.gist
gist file.diff
gist -p file.diff
```
