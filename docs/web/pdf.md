# PDF

## 页面内嵌 PDF 预览

### 方案1：使用浏览器自带插件

优点：不引入外部依赖，开发工作量可忽略。

缺点：
1. 兼容性，目前主流浏览器都支持。不支持（IE）会转为下载。
2. 不支持流式加载，适合较小 PDF

### 1. iframe

   ~~警告 `Resource interpreted as Document but transferred with MIME type application/pdf`~~

   ```html
      <iframe v-if="isSupportPDF()" :src="url" frameborder="0"></iframe>
      <a v-else class="link" :href="url" target="_blank" >下载(仅电脑端)</a>
   ```

   ```js
   // util
   function isSupportPDF() {
      var hasPDFViewer = false;
      try {
         var pdf =
            navigator.mimeTypes &&
            navigator.mimeTypes["application/pdf"]
            ? navigator.mimeTypes["application/pdf"].enabledPlugin
            : 0;
         if (pdf) hasPDFViewer = true;
      } catch (e) {
         if (navigator.mimeTypes["application/pdf"] != undefined)
            hasPDFViewer = true;
      }

      return hasPDFViewer;
      }
   ```
### 2. embed，不支持回退

```html
<embed src="/index.pdf" type="application/pdf" width="100%" height="100%" />
```

如何隐藏工具栏：在 pdf url 后追加参数`#toolbar=0`

[asp.net mvc - Resource interpreted as Document but transferred with MIME type application/pdf - Stack Overflow](https://stackoverflow.com/questions/39620917/resource-interpreted-as-document-but-transferred-with-mime-type-application-pdf)

[inline pdf](https://codepen.io/cyio/pen/mgGybw)
[前端预览PDF总结：iframe、embed、PDFObject、PDF.js - ruanhongbiao的专栏 - CSDN博客](https://blog.csdn.net/qappleh/article/details/80250492)

### 方案2: pdf.js

核心使用 canvas 渲染，支持 IE


优点：
1. 支持 IE
2. 保持各平台 UI 一致，可定制性强
2. 可以支持流式加载，大文件首屏可更早渲染

缺点：
1. 需要等待 pdf.js 下载和初始化
2. 开发工作量较大

[pdfjs viewer 开发小结 - 网易云 - 博客园](https://www.cnblogs.com/163yun/p/9811569.html)


## # 文件解析

[document.ai/pdf.md at main · GanymedeNil/document.ai · GitHub](https://github.com/GanymedeNil/document.ai/blob/main/docs/pdf.md)

[解锁 PDF 文件：使用 JavaScript 和 Canvas 渲染 PDF 内容 - 知乎](https://zhuanlan.zhihu.com/p/631442533)