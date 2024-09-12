# pnpm

## 清除缓存
pnpm store prune

使用公司网络，或使用代理

当前项目
trash node_modules/.pnpm
## electron

### 手动解决 electron 依赖 404 问题

1. 找到对应版本，下载
2. 修改 install.js
```
extractFile(path.resolve(__dirname, './electron-v28.1.0-darwin-arm64.zip'));
```

3. `node ./node_modules/electron/install.js`
4. `pnpm i` 这时应该可以了

https://registry.npmmirror.com/binary.html?path=electron/v28.1.0/