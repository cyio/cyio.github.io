# Git

* 编码问题
    找到报错的文件，运行
    `:w ++ff=unix`

* 协作中的注意事项
  - commit 之前一定要 review，做 diff 检查
  - 不要格式化别人的代码，只处理你的代码

* 回撤commit或取消暂存，保留工作区
    `$ git reset HEAD` [path]

* 回撤commit，丢弃之后的修改，慎用，会撤销工作区
    `$ git reset HEAD --hard`

* 从暂存区回撤某个文件
    `$ git reset HEAD CONTRIBUTING.md`

* 恢复某个文件到master分支的状态(放弃本地修改)
    `$ git checkout -- FILE-PATH`

* 回退
    `$ git revert commitID`

* diff
  ```sh
  git diff 默认比较工作区变更
  git diff --staged 比较暂存区
  git diff HEAD
  git difftool
  git diff | gitx
  ```
  在提交前做 diff 检查，右侧打开新窗口查看变更，确认没问题后，在左侧窗口编写提交信息

* 修改已提交信息
    `git commit --amend -m 'NEWMESSAGE'`

* 改变本地分支名
    `git branch -m NEWNAME`
    或者
    `git branch -m old-branch new-branch`

* 交互式添加，p - patch
    `git add -p`

* 查看详细的修改记录
    `git log -p`

* 查看其它分支的文件，而不必来回checkout
    `git show SOME-BRANCH:SOME-FILE`

* 暂存并恢复，pop是移除，将最近的stash移除并应用到当前工作目录
    `git stash, then git stash pop/apply`

* 查找提交记录
    `$ git log -S KEYWORD`

* 更新fork
  添加上游
  `git remote add upstream [repo]`
  拉取上游
  `git fetch upstream`
  合并上游
  `git merge upstream/master`
  有冲突的话，解决冲突并提交
  最后，推送
  `git push`

* HTTPS与SSH
  用HTTPS操作必须要提供账号密码，如果是自己的电脑，应避免用这种方式
  缓解方法是让git记忆密码，默认时间比较短
  `git config --global credential.helper cache`
  控制超时时间，单位是秒，下面是缓存一周
  `git config --global credential.helper 'cache --timeout=604800'`

* 创建新的平行空分支
  ```sh
  git symbolic-ref HEAD refs/heads/newbranch 
  rm .git/index 
  git clean -fdx
  ```
* 如何在不删除远程仓库的情况下，清空文件和提交记录
  比如现在 master 分支，改名`git branch -m 1.0`
  先推上去`git push origin 1.0`
  然后远程 master 还在，且是默认分支，这个时候不能直接删除
  把默认分支改为 1.0，然后`git push --delete origin master`
  创建新的项目文件夹，设置好远程和分支信息即可

* 跨平台换行问题
  项目目录下设置 .gitattributes

* 显示全部分支信息
  `git branch -a`

* 提交修改内容（已存在文件）
  `git commit -a`
  新增文件还是需要另外 add

* 打标签
  ```sh
  git tag -a v1.2.4 -m "release 1.2.4"
  # 后面的 commit 信息最好写详细点
  git push github --tags
  git tag -d UNUSED-TAG
  ```

* 合并冲突
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

* 检出指定分支指定文件
  ```shell
  # On branch master
  git checkout gh-pages
  git checkout master -- myplugin.js
  git commit -m "Update myplugin.js from master"
  ```

* 删除分支
  ```shell
  git push origin --delete <branch_name>
  git branch -d <branch_name>
  ```

* 修改优化历史提交信息
  - `git rebase -i`
  - 或合并开发分支后，软重置后再重新提交，`git reset xxx`

* 干净比较 topic 分支和 master 分支
  1. 新建三方合并分支 `$ git checkout -b trial_merge`
  2. 合并 topic 分支 `$ git merge topic_branch`
  3. 将 topic 分支与 master 比较 `$ git diff master`
  4. 回到 master 并删除三方分支 `$ git checkout master && git branch -D trial_merge`

* 合并策略优化，少走回头路
  `git merge --ff-only // 只允许快进合并`

* 对比工作区文件变化
  `git diff branchName/commitNumber -- filepath [--staged]`

* 合并时可通过参数实现直接合并无意义的空格变动

* 提交时显示所有 diff 信息
  `git commit -v`

* 暂存时排除文件或文件夹
  ```shell
  # for a file
  git add -u
  git reset -- main/dontcheckmein.txt

  # for a folder
  git add -u
  git reset -- main/*
  ```

* 子模块
  ```sh
  git submodule add URL
  # 他人 
  git submodule init
  git submodule update
  ```

  更新子模块后，需要在主项目下添加提交，这样别人才会有更新

* 交互式合并其它分支某部分代码
  `git checkout -p <branch> -- <paths> ...`

* 克隆指定分支
  `git clone -b <branch> <remote_repo>`

* 移除大文件
  [BFG Repo-Cleaner by rtyley](https://rtyley.github.io/bfg-repo-cleaner/)
  ```sh
  git clone --mirror git://example.com/some-big-repo.git
  bfg --strip-blobs-bigger-than 100M some-big-repo.git
  cd some-big-repo.git
  git reflog expire --expire=now --all && git gc --prune=now --aggressive
  git push
  ```
  超出 coding 容量限制，很多操作不能做了，比如 push
  临时处理是在线上修改
  解决是清空项目代码，重新上传移除过大文件的项目

* 合并其他分支的某条 commmit 
  ```sh
  git cherry-pick 584a2ef
  ```

* 导出
  - 创建两个 commits 的 patch `git diff COMMIT1 COMMIT2 > patch.txt`
    如果有在线管理，可直接查看 commit 的 diff 内容

* hub
  在 github 上新建仓库
  ```sh
  brew install hub
  hub create -d "My new thing"
  ```

* 成员管理
两个人可以操作同一个分支，三个人以上最好用特性分支

* 从别的 fork 拉取更新
场景是别人 fork 了我的仓库，然后有更新，我想把那些更新合并的自己仓库，可能需要解决冲突
`git pull otherRepo branch`