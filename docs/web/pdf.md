# pdf

## 页面内嵌

原来内联需要浏览器支持 PDF 预览，目前主流浏览器都支持。不支持会转为下载

1. iframe pdf
   警告 `Resource interpreted as Document but transferred with MIME type application/pdf`
2. embed，不支持回退

```html
<embed src="/index.pdf" type="application/pdf" width="100%" height="100%" />
```

[asp.net mvc - Resource interpreted as Document but transferred with MIME type application/pdf - Stack Overflow](https://stackoverflow.com/questions/39620917/resource-interpreted-as-document-but-transferred-with-mime-type-application-pdf)

[inline pdf](https://codepen.io/cyio/pen/mgGybw)
[前端预览PDF总结：iframe、embed、PDFObject、PDF.js - ruanhongbiao的专栏 - CSDN博客](https://blog.csdn.net/qappleh/article/details/80250492)

3. pdf.js
canvas

[pdfjs viewer 开发小结 - 网易云 - 博客园](https://www.cnblogs.com/163yun/p/9811569.html)

