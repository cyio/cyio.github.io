# Git
[[toc]]

[git-flight-rules/README_zh-CN.md at master · k88hudson/git-flight-rules](https://github.com/k88hudson/git-flight-rules/blob/master/README_zh-CN.md)

## 项目最佳实践

简单来说，就这七点：
1. 使用 git rebase 让提交记录更加清晰可读
2. 使用  git reflog + git reset 跳到任意 commit
3. 使用 git cherry-pick 获取指定的 commit 
4. 使用 git commit --amend 更改提交内容
5. 使用 git revert 回滚某次的提交 
6. 使用 git stash 来暂存文件 
7. 配置 git alias 提升工作效率

[Learn Git Branching](https://learngitbranching.js.org/?demo=&locale=zh_CN)

## commit 提交规范

- feat: 添加新功能
- docs: 修改注释、文档
- fix: 修复 bug
- style: 修改代码格式，例如代码 lint 处理等代码风格处理，不能影响原功能
- refactor: 重构代码，不能影响原功能
- perf: 提升性能
- test: 测试用例增删改
- chore: (锁事的意思)工具操作，例如初始化脚本，启动脚本和代码校验脚本等等
- deps: 依赖修改，例如升级、降级或锁死版本

`git fix -s 'scope' 'msg'`

[LeanCloud 开放资源: Git Commit 日志风格指南](https://open.leancloud.cn/git-commit-message/)

尽量写有意义的 msg：
- 如果不能用句子完整表达，就用关键字
- 改了不同的东西，要一起提交，主要的修改是什么
- 改的都是零碎点，msg 随意 fix minor

## 编码问题

找到报错的文件，运行`:w ++ff=unix`

## 协作中的注意事项

- commit 之前一定要 review，做 diff 检查
- 不要格式化别人的代码，只处理你的代码

## 回撤 commit 或取消暂存，保留工作区

`$ git reset HEAD` [path]

回撤最近一个
`$ git reset HEAD~1`

## 回撤 commit，丢弃之后的修改，慎用，会撤销工作区

`$ git reset HEAD --hard`

## 回撤工作区，包括新文件

先测试，以防误删 `git clean -nfd`

`git clean -fd`

## 从暂存区回撤某个文件

`$ git reset HEAD CONTRIBUTING.md`

## 恢复某个文件到 master 分支的状态(放弃本地修改)

`$ git checkout -- FILE-PATH`

## 回退

`$ git revert commitID`

revert a merge 需要让 git 知道保留哪个父主线
[github - Why does git revert complain about a missing -m option? - Stack Overflow](https://stackoverflow.com/questions/5970889/why-does-git-revert-complain-about-a-missing-m-option/5971033#5971033)


## diff

```sh
git diff 默认比较工作区变更
git diff --staged 比较暂存区
git diff HEAD
git difftool
git diff | gitx
```

在提交前做 diff 检查，右侧打开新窗口查看变更，确认没问题后，在左侧窗口编写提交信息

## 修改已提交信息

`git commit --amend -m 'NEWMESSAGE'`

## 改变本地分支名

`git branch -m NEWNAME`
或者
`git branch -m old-branch new-branch`

## 交互式添加，p - patch

`git add -p`

## 查看详细的修改记录

`git log -p`

## 查看其它分支的文件，而不必来回 checkout

`git show SOME-BRANCH:SOME-FILE`

## 暂存并恢复，pop 是移除，将最近的 stash 移除并应用到当前工作目录

`git stash, then git stash pop/apply`

```
git stash save "my_stash"
git stash list
git stash apply stash@{n}
```

## 查找提交记录

`$ git log -S KEYWORD`

## 更新 fork

1.  添加上游 `git remote add upstream [repo]`
2.  拉取上游 `git fetch upstream`
3.  合并上游 `git merge upstream/master`
4.  有冲突的话，解决冲突并提交
5.  最后，推送 `git push`

## HTTPS 方式 clone

- 用 HTTPS 操作必须要提供账号密码，如果是自己的电脑，应避免用这种方式
- 缓解方法是让 git 记忆密码，默认时间比较短 `git config --global credential.helper cache`
- 控制超时时间，单位是秒，下面是缓存一周 `git config --global credential.helper 'cache --timeout=604800'`

## 创建新的平行空分支

```sh
git symbolic-ref HEAD refs/heads/newbranch
rm .git/index
git clean -fdx
```

## 如何在不删除远程仓库的情况下，清空文件和提交记录

- 比如现在 master 分支，改名`git branch -m 1.0`
- 先推上去`git push origin 1.0`
- 然后远程 master 还在，且是默认分支，这个时候不能直接删除
- 把默认分支改为 1.0，然后`git push --delete origin master`
- 创建新的项目文件夹，设置好远程和分支信息即可

## 跨平台换行问题

项目目录下设置 .gitattributes

## 显示全部分支信息

`git branch -a`

## 提交修改内容（已存在文件）

`git commit -a`
新增文件还是需要另外 add

## 打标签 tag

- tag 是在本地的，除非你显式 push
  ```sh
  git tag -a v1.2.4 -m "release 1.2.4"
  # 后面的 commit 信息最好写详细点
  git push github --tags
  或 git push --tags
  git tag -d UNUSED-TAG
  ```
- 根据 tag 查询 commit-id，回滚
  ```
  git tags
  git show tag-name
  git reset --hard commit-id
  ```

## 合并冲突

比如维护 dotfiles ，有冲突时总是取 master

```sh
git merge master

# 提示合并冲突，此时，不去手动处理冲突，

# 检出选择 theirs 的冲突文件，再添加这个文件

git checkout --ours filename.c
git checkout --theirs filename.c
git add filename.c

# 合并多个文件

grep -lr '<<<<<<<' . | xargs git checkout --theirs
```

## 检出指定分支指定文件

```shell
# On branch master
git checkout gh-pages
git checkout master -- myplugin.js
git commit -m "Update myplugin.js from master"
```

## 删除分支

```shell
git branch -d <branch_name>
git push origin --delete <branch_name>
// or
git push origin :<branch_name>
```

## 修改优化历史提交信息

- `git rebase -i`
- 或合并开发分支后，软重置后再重新提交，`git reset xxx`

## 干净比较 topic 分支和 master 分支

1.  新建三方合并分支 `$ git checkout -b trial_merge`
2.  合并 topic 分支 `$ git merge topic_branch`
3.  将 topic 分支与 master 比较 `$ git diff master`
4.  回到 master 并删除三方分支 `$ git checkout master && git branch -D trial_merge`

## 合并策略优化，少走回头路

`git merge --ff-only // 只允许快进合并`

## 对比工作区文件变化

`git diff branchName/commitNumber -- filepath [--staged]`

## 合并时可通过参数实现直接合并无意义的空格变动

## 提交时显示所有 diff 信息

`git commit -v`

## 暂存时排除文件或文件夹

```shell
# for a file
git add -u
git reset -- main/dontcheckmein.txt

# for a folder
git add -u
git reset -- main/*
```

## 子模块

```sh
# 首次
git submodule add URL(需要引入模块)

# 他人
git submodule init
git submodule update

# 维护
git submodule update --remote
git add
```

更新子模块后，需要在主项目下添加提交，这样别人才会有更新

[Using submodules in Git - Tutorial](https://www.vogella.com/tutorials/GitSubmodules/article.html)

子模块更新有两种方式
1. `git pull`主仓库记录的 id
2. `update remote`
```sh
git submodule update --init --recursive --remote BRANCH-NAME
```

更改子模块 URL
1. 修改 .gitmodules
2. 同步到`.git/config`
```sh
git submodule sync
git submodule update --force --recursive --init --remote
```

## 交互式合并其它分支某部分代码

`git checkout -p <branch> -- <paths> ...`

## 克隆指定分支

`git clone -b <branch> <remote_repo>`

## 移除大文件

[BFG Repo-Cleaner by rtyley](https://rtyley.github.io/bfg-repo-cleaner/)

```sh
git clone --mirror git://example.com/some-big-repo.git
bfg --strip-blobs-bigger-than 100M some-big-repo.git
// or
// bfg -D filename[not path]
cd some-big-repo.git
git reflog expire --expire=now --all && git gc --prune=now --aggressive
git push
```

超出 coding 容量限制，很多操作不能做了，比如 push
临时处理是在线上修改
解决是清空项目代码，重新上传移除过大文件的项目

## 合并其他分支的某条 commmit

```sh
git cherry-pick 584a2ef
```

## diff 导出

- 创建两个 commits 的 patch `git diff COMMIT1 COMMIT2 > patch.txt`
  如果有在线管理，可直接查看 commit 的 diff 内容

  ```sh
  # dev1 exports unstaged changes
  git diff > diff.patch

  # dev1 exports staged changes
  git diff --staged > diff.patch

  Send patch file via Slack, etc...

  # dev2 applies changes from the patch file
  git apply diff.patch
  ```
- 

## patch

```
# create patch
git format-patch -1 HEAD

# show stats
git apply --stat file.patch

# check error
git apply --check file.patch

# apply the patch finally
git am < file.patch
```

## hub

在 github 上新建仓库

```sh
brew install hub
hub create -d "My new thing"
```

## 成员管理

两个人可以操作同一个分支，三个人以上最好用特性分支

## 从别的 fork 拉取更新

场景是别人 fork 了我的仓库，然后有更新，我想把那些更新合并的自己仓库，可能需要解决冲突
`git pull otherRepo branch`

## 本地 Git 设置多账户

### 配置 SSH

编辑 `～/.ssh/config`，没有的话创建
Host 可看成别名，用作区分，后面要用
下面是我实际用的配置

```
Host github-cyio
    HostName        github.com
    User            git
    IdentityFile    /home/oops/.ssh/id_github

Host osc-xid
    HostName        git.oschina.net
    User            git
    IdentityFile    /home/oops/.ssh/id_rsa_oschina_xid

Host osc-cyio
    HostName        git.oschina.net
    User            git
    IdentityFile    /home/oops/.ssh/id_rsa
```

### 为不同项目配置对应的 remote

编辑`.git/config`，remote -> url，设置为： `git@<host-in-ssh-config>:<username>/<repo>`

或者用命令添加： `git remote set-url origin git@<host-in-ssh-config>:<username>/<repo>`
这是我实际添加的： `git remote set-url origin git@osc-cyio:cyio/os.git`

### 为不同项目配置对应的 email 和 name

取消 global

```
git config --global --unset user.name
git config --global --unset user.email
```

设置每个项目 repo 的自己的 user.email

```
git config  user.email "xxxx@xx.com"
git config  user.name "suzie"
```

参考：
[Multiple SSH keys for different github accounts](https://gist.github.com/jexchan/2351996)
[如何在一台电脑上使用两个 git@osc 的账号进行操作](http://m.oschina.net/blog/220158)


## 文件大小写重命名

注意，不要用`git config core.ignorecase false`，mv > git add 方式重名名后，分支无法直接合并

正确操作
```
git mv <old name> <new name>
git status
```

由于 git 对大小写不敏感，同名文件 git mv 时会提示错误`Invalid argument`
```
git mv casesensitive tmp
git mv tmp CaseSensitive
```
[In a Git repository, how to properly rename a directory? - Stack Overflow](https://stackoverflow.com/questions/11183788/in-a-git-repository-how-to-properly-rename-a-directory/11183844)

## git 仓库删除文件/夹，本地不删除

```
# For single file:
git rm --cached mylogfile.log

# For single directory:
git rm --cached -r mydirectory
```

## 只是查看旧 commit，不要 reset

```
git checkout xxx
git checkout master # 根据你的分支名修改

git checkout HEAD^ # 检出前一个
git checkout HEAD~3 # 检出前三个
```

## 意外 reset 了怎么办

```
git reflog # 打印出 git 切换步骤记录
git reset HEAD@{1} # 根据步骤跳转
```

## 部分提交

可以反复按下面步骤操作：

1.  add 需要提交的文件或代码
2.  暂存其余，以便测试将要提交代码，`-u untracked 包括新文件 -k 保持文件完整`

```
git add somefile
git stash -u -k
```

## 暂存某个文件

- `git stash -p`，需要跳过某个更改，按`d`，能满足文件改动不多的情况

```
git stash push -m welcome_cart app/views/cart/welcome.thtml
```

- stash 是略简化的 branch，所以直接用 branch 就好了

```sh
git checkout -b tmpbranch
git add the_file
git commit -m "stashing the_file"
git checkout master
```

[git - Stash just a single file - Stack Overflow](https://stackoverflow.com/questions/12420924/stash-just-a-single-file)
[CSS { In Real Life } | How Git Stash Can Help You Juggle Multiple Branches](https://css-irl.info/how-git-stash-can-help-you-juggle-multiple-branches/)

## zsh alias

```sh
v ~/.oh-my-zsh/plugins/git/git.plugin.zsh
```

## push 策略

git 默认是 simple 与 upstream 差不多，区别是不允许不同名推，防止新手覆盖
用 upstream 即可
[配置 Git Push 策略 - The Kai Way](http://thekaiway.com/2013/07/30/config-your-git-push-strategy/)

- 设置关联 `git branch --set-upstream-to=origin/YOUR_BRANCH YOUR_BRANCH`，最好新建分支后就执行，方便后续推拉

## 统计文件修改

```
git log --name-status
```

## git push

use “git push --force-with-lease” instead. It adds some safety in case a coworker pushed code you haven’t pulled

## 本地与远端不一致，重置到远端版本

git pull after forced update
拉取强制更新过的代码

```
git fetch
git reset origin/dev --hard
```

## 何时删除旧分支

可以安全删除，如何分支包含未合并的代码，git 会阻止删除

列出未合并分支

```
git branch --no-merged
git branch --merged
```

建议打 tag，如果想加书签的话

## 清理分支

[Git housekeeping tutorial: clean-up outdated branches in local and remote repositories | Blog by Railsware](https://railsware.com/blog/2014/08/11/git-housekeeping-tutorial-clean-up-outdated-branches-in-local-and-remote-repositories/)

## 上线流程
[Git 开发分支代码上线流程 - 王静静的博客 - CSDN博客](https://blog.csdn.net/Hedy17/article/details/83084149) 

[git-flow 的工作流程](https://www.git-tower.com/learn/git/ebook/cn/command-line/advanced-topics/git-flow)

[Gitflow Workflow | Atlassian Git Tutorial](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)

## 比较两个分支
```js
git diff branch1 branch2 --stat
```

## rebase
- pick, squash(合并到上一个), fixup(类似squash，但丢弃消息), edit, reword, and drop
  重新排序、省略、合并或修改
- 尽量只 rebase 本地 commits，避免强制重写远程，他人需要重新合并
    使用场景：
- 将多个提交折叠为单个提交
- 重新提交
- 删除您现在后悔的错误更改
- 将分支的基础移动到存储库中的任何其他提交。
- 修改单个提交，以在事后很久修改更改。
```
brew install interactive-rebase-tool

git rebase -i UNTIL-SOME-COMMIT-ID
```
[Git Interactive Rebase, Squash, Amend and Other Ways of Rewriting History](https://thoughtbot.com/blog/git-interactive-rebase-squash-amend-rewriting-history)

[gold-miner/keeping-git-commit-history-clean.md at master · xitu/gold-miner](https://github.com/xitu/gold-miner/blob/master/TODO1/keeping-git-commit-history-clean.md)

## filemode change
[git gui - How do I remove files saying "old mode 100755 new mode 100644" from unstaged changes in Git? - Stack Overflow](https://stackoverflow.com/a/44866012/5657916)

## unadd
将改动从 index 移除
`git reset <file>` or `git reset`

## hooks

## 三路合并
比如双方同时改了某一行，只能人工 review 合并

公共组先部分，作为参考，分辨改动

[【Mac】升级 Git 版本 - 掘金](https://juejin.im/post/5c3e9de86fb9a049b5071413)
[git diff - Should diff3 be default conflictstyle on git? - Stack Overflow](https://stackoverflow.com/questions/27417656/should-diff3-be-default-conflictstyle-on-git)
[快速处理 git 合并冲突 - 知乎](https://zhuanlan.zhihu.com/p/78505692)

## 显示未跟踪文件夹详情

`git status --untracked-files=all`

## 分支比较
比较当前分支与 master
```sh
git log origin/master..HEAD --oneline --no-merges
```

## Git GUI
一行短命令，命令行更方便

复杂的操作如 merge，GUI 能提供比命令行大得多的信息密度

## 可选合并
场景，重构等改动较大，要合入 master
[git selective merge](https://gist.github.com/katylava/564416)

## 查看分支是否落后
开始新迭代开发或上线前，都应该检查

```sh
git rev-list --left-right --count origin/master...test-branch
```
输出 0 2，表示 test-branch 相对于 master 落后 0 commit，领先 2 commit

[github - git ahead/behind info between master and branch? - Stack Overflow](https://stackoverflow.com/questions/20433867/git-ahead-behind-info-between-master-and-branch)


## 多个工作区

> 基于文件夹

用途：
1. 多个独立工作区（hotfix/PR reivew/运行并行环境）
2. 目录对比

优点：
- 可以避免来回 stash，污染工作区，丢失变更
- 避免 clone 多个相同仓库
- switch branch 需要 IDE 做很多切换索引工作

限制：一个文件夹一个分支，如果想在一个文件夹切换不同分支，需要删除 worktree。

```sh
git worktree add master ../prod-work
git worktree add -b hotfix ../hotfix-1

git worktree remove ../work-1 --force

# 添加worktree
  git worktree add [-f] [--checkout -b <new-branch>] <path> <commit-ish>
# 列出所有worktree
  git worktree list [--porcelain]
# worktree上锁
  git worktree lock [--reason <string> <worktree>]
# worktree解锁
  git worktree unlock <worktree>
# 移动worktree到其他目录
  git worktree move <worktree> <new-path>
# 清除那些检出目录已经被删除的worktree
  git worktree prune -n --expire <expire>
# 删除worktree, 同时删除检出目录
  git worktree remove -f <worktree>
```

[Git屠龙技：使用Git Worktree并行开发测试 - 知乎](https://zhuanlan.zhihu.com/p/92906230)
[Git Worktree的使用 - 张小凯的博客](https://jasonkayzk.github.io/2020/05/03/Git-Worktree%E7%9A%84%E4%BD%BF%E7%94%A8/)


## subtree

Git subtree 是 Git 的一个工具，它可以将一个 Git 仓库作为子目录添加到另一个 Git 仓库中。Git subtree 的主要使用场景包括：

1.  将一个 Git 仓库作为子项目添加到另一个 Git 仓库中，以便管理多个相关但独立的代码库。
    
2.  将一个 Git 仓库的某个子目录作为独立的 Git 仓库进行管理。
    
3.  将一个 Git 仓库的某个子目录作为一个库在其他项目中使用。
    

相比于 monorepo，Git subtree 可以更加灵活地管理多个代码库，而且每个代码库都可以独立维护和部署。但是，对于大型项目来说，使用 monorepo 可能更加方便，因为它可以统一管理所有代码，避免代码重复和版本冲突。因此，具体选择哪种方案需要根据项目的实际情况来决定。

## issues

## 超大仓库拉取

```sh
	git clone --branch dev --depth 1 --no-single-branch
```

默认是`single-branch`，但一般希望都拉下来，需要指定`--no-single-branch`

## 本地变更忽略

```sh
git update-index --assume-unchanged YOUR_FILE_OR_DIRECTORY
```


## 解压子目录

git filter-branch with --subdirectory-filter
https://jeffkreeftmeijer.com/git-extract/


## LFS

```
// 追踪大文件
git lfs track "<file_pattern>"

// 还原大文件
git lfs pull
```
