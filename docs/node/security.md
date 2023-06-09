# Node 安全

## 路径遍历漏洞

随意访问目录

比如下面是一个实际的业务场景，我们在服务器的 `'./image'` 这个相对路径下存储了一些图片，我们通过在参数中传入的图片名称来读取这张图片，代码如下：

```text
function readImageg(ctx) {
  const { name } = ctx.query;
  const content = fs.readFileSync('./image' + name);
  return content;
}
```

看起来好像没什么问题，但是假如攻击者将 `name` 参数改为 `../../../../../../../etc/hosts` 呢？

## 命令注入漏洞

子进程中可执行任意的 `Shell` 命令 spawn


[解读 Node.js 20 推出的权限模型 - 知乎](https://zhuanlan.zhihu.com/p/625285875)