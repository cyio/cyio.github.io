# gitbook

1. 安装依赖
```
// 目录自动生成工具
npm install -g gitbook-summary
// gitbook命令行工具
npm install -g gitbook-cli
```

2. 初始化GitBook
```
gitbook init 
```

3. 将当前目录下的md文件按树结构生成到 SUMMARY.md
```
book sm
```

可通过 book.json 进行配置，比如排除文件夹

4. 编译查看，编译结果在 _book 目录下_
```
gitbook serve
```

5. 在 _book 目录下创建平行分支
复制项目的.git文件夹到 _book 目录
创建新分支并清空git记录
```
git symbolic-ref HEAD refs/heads/coding-pages 
rm .git/index
git clean -fdx 
```
然后添加所有文件，并推送到远程分支

6. 到coding.net开启pages服务

## Gitbook存在的问题
＊搜索体验较差
	－不支持中文搜索
	－搜索框要点击一步才会出现
* 网站代码没有压缩

参考：
[轻松打造属于自己的出版平台 - CNode技术社区](https://cnodejs.org/topic/564558515e7412b625b8befc)
[配置 | GitBook文档（中文版）](https://chrisniael.gitbooks.io/gitbook-documentation/content/format/configuration.html)
