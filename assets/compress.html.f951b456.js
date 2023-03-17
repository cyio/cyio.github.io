import{_ as e,e as a}from"./app.de511a45.js";const r={},t=a('<h1 id="\u538B\u7F29\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u538B\u7F29\u7B97\u6CD5" aria-hidden="true">#</a> \u538B\u7F29\u7B97\u6CD5</h1><p>\u6587\u672C\u7C7B</p><p>Gzip \u57FA\u4E8E DEFLATE \u7B97\u6CD5\uFF08\u91CD\u590D\u5E8F\u5217\uFF09\uFF0C\u5B83\u662F LZ77 \u548C\u970D\u592B\u66FC\u7F16\u7801\uFF08\u524D\u7F00\u7F16\u7801\uFF09\u7684\u7EC4\u5408\u3002 \u538B\u7F29\u7387\uFF1A60%\uFF0C\u5904\u7406\u8F83\u6162</p><p>Brotli \u6709\u7740\u66F4\u9AD8\u7684\u538B\u7F29\u6548\u7387\u3002\u5B83\u901A\u8FC7\u53D8\u79CD\u7684 LZ77 \u7B97\u6CD5\u3001Huffman \u7F16\u7801\u4EE5\u53CA\u4E8C\u9636\u6587\u672C\u5EFA\u6A21\u7B49\u65B9\u5F0F\u8FDB\u884C\u6570\u636E\u538B\u7F29\u3002 \u538B\u7F29\u7387\uFF1A70%\uFF0C\u5904\u7406\u66F4\u5FEB</p><p>\u6D41\u5F0F\u538B\u7F29\uFF0C\u5BF9\u8F93\u5165\u7684\u6570\u636E\u6D41\u5B9E\u65F6\u538B\u7F29\u548C\u8F93\u51FA\uFF0C\u5E38\u7528\u4E8E\u7F51\u7EDC\u4F20\u8F93\u3002\u8BE5\u7B97\u6CD5\u91C7\u7528\u6ED1\u52A8\u7A97\u53E3\uFF0C\u5C06\u8F93\u5165\u7684\u6570\u636E\u6D41\u6309\u7167\u56FA\u5B9A\u5927\u5C0F\u7684\u7A97\u53E3\u8FDB\u884C\u5212\u5206\uFF0C\u5E76\u5BF9\u6BCF\u4E2A\u7A97\u53E3\u8FDB\u884C\u538B\u7F29\u3002\u5728\u538B\u7F29\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u6BCF\u4E2A\u7A97\u53E3\u90FD\u53EF\u4EE5\u72EC\u7ACB\u8FDB\u884C\u538B\u7F29\uFF0C\u4E0D\u9700\u8981\u7B49\u5F85\u5176\u4ED6\u7A97\u53E3\u7684\u538B\u7F29\u5B8C\u6210\u3002</p><h2 id="\u970D\u592B\u66FC" tabindex="-1"><a class="header-anchor" href="#\u970D\u592B\u66FC" aria-hidden="true">#</a> \u970D\u592B\u66FC</h2><blockquote><p>Huffman Coding</p></blockquote><p>\u524D\u7F00\u7F16\u7801</p><h2 id="lz77" tabindex="-1"><a class="header-anchor" href="#lz77" aria-hidden="true">#</a> LZ77</h2><p>\u6ED1\u52A8\u7A97\u53E3 \uFF08distance, length\uFF09</p><p>Huffman \u7F16\u7801\u662F\u5C06\u51FA\u73B0\u6B21\u6570\u591A\u7684\u7F16\u7801\u5C3D\u53EF\u80FD\u7684\u77ED\u6765\u8FDB\u884C\u538B\u7F29\uFF0C\u800C LZ77 \u5219\u662F\u53E6\u5916\u4E00\u79CD\u601D\u8DEF\uFF1A\u66FF\u6362\u91CD\u590D\u7684\u5185\u5BB9\u3002</p><h2 id="deflate-zip" tabindex="-1"><a class="header-anchor" href="#deflate-zip" aria-hidden="true">#</a> DEFLATE/ZIP</h2><p>\u5728\u4E00\u4E2A\u6587\u4EF6\u4E2D\uFF0C\u5982\u679C\u6709\u5185\u5BB9\u662F\u76F8\u540C\u7684\u8BDD\uFF0C\u5C31\u53EF\u4EE5\u5728\u540E\u4E00\u5757\u5185\u5BB9\u4E2D\u505A\u4E00\u4E2A\u6807\u8BB0\uFF0C\u6807\u793A\u548C\u524D\u4E00\u5757\u7684\u8DDD\u79BB\u548C\u76F8\u540C\u7684\u957F\u5EA6\uFF08distance,length\uFF09\u3002\uFF08distance,length\uFF09\u7EDD\u5927\u591A\u6570\u60C5\u51B5\u4E0B\u5C0F\u4E8E\u91CD\u590D\u7684\u5185\u5BB9\uFF0C\u56E0\u6B64\u6587\u4EF6\u7684\u4F53\u79EF\u5C31\u53D8\u5C0F\u4E86\u3002</p><p>ZIP \u4E2D\uFF0C\u9996\u5148\u4F7F\u7528 LZ77 \u7F16\u7801\u8FDB\u884C\u538B\u7F29\uFF0C\u7136\u540E\u4E4B\u540E\u518D\u5BF9 LZ77 \u7F16\u7801\u4E4B\u540E\u7684\u7ED3\u679C\u7EE7\u7EED\u8FDB\u884C\u538B\u7F29\uFF08Huffman \u7F16\u7801\uFF09,\u8FD9\u4E2A\u7B97\u6CD5\u4E5F\u53EB\u505A Deflate \u7B97\u6CD5\u3002</p>',14);function d(h,n){return t}var p=e(r,[["render",d],["__file","compress.html.vue"]]);export{p as default};