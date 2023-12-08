# github

## actions
- 最多同时 20 个，超过会排队
- 单任务至多运行 6h
- 公开库免费，可放心用。

提示一直在等待，可能是因为指定了环境而环境比较少，如 ubuntu-18，可改成 ubuntu-latest 解决

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


## gh cli

gh repo create project-name --public
push/pull
clone

prompt: gh repo cli use tips