
# chrome-recorder

## 导出

前两项可导回，最后一项 **Puppeteer script** 不能导回

支持通过插件转换成别的工具脚本，如 Cypress


降速与断点

步骤编辑

https://developer.chrome.com/docs/devtools/recorder/reference/##edit-steps

```
npx @puppeteer/replay recording.json
```

编程引入

```js
const runner = await createRunner(recording);
await runner.run();
```


bug，重启浏览器解决

https://stackoverflow.com/questions/70707622/no-frame-for-given-id-found-in-puppetter