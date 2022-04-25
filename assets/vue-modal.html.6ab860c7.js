import{_ as n,e as s}from"./app.4b0b8329.js";const e={},l=s(`<ul><li>\u81EA\u5DF1\u5199\u7684\uFF0C\u4E00\u662F show \u8981\u7ED1\u5B9A\u4E00\u4E2A\u5F00\u5173\u5C5E\u6027\uFF0C\u4E8C\u662F\u53EF\u9009\u7684 close \u65B9\u6CD5\uFF0C\u70B9\u51FB\u7A7A\u767D\u5904\u65F6\u5173\u95ED</li><li>TODO: \u9ED8\u8BA4 slot \u53EA\u653E\u4E86\u4E2A body\uFF0C\u53EF\u4EE5\u5145\u5B9E\u4E00\u4E9B\u9AA8\u67B6\uFF0C\u6807\u9898\uFF0C\u5173\u95ED\u6309\u94AE\uFF0C\u53D6\u6D88\u786E\u8BA4\uFF0C\u5141\u8BB8\u4F20\u6837\u5F0F\u6765\u5B9A\u5236\uFF0C\u4F9B\u53C2\u8003\u7528\u4E5F\u884C</li><li>\u53D1\u5E03\u4E86\u63D2\u4EF6\uFF0Cnpm \u5305\u540D\u8FD8\u662F\u53D6\u4E2A\u4E0D\u4E00\u6837\u7684\uFF0C\u53EF\u4EE5\u6362\u4E0B\u5355\u8BCD\u987A\u5E8F</li><li>npm \u53D1\u5E03\u7B80\u5355\uFF0Cnpm login =&gt; npm publish</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>button(@click=&quot;toggleModal&quot;) toggle modal
modal(:show=&quot;showModal&quot; @close=&quot;toggleModal&quot;)
&lt;/template&gt;
&lt;script&gt;
import Modal from &#39;Modal&#39;

export default {
components: {
	Modal
},
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,2);function a(t,o){return l}var i=n(e,[["render",a],["__file","vue-modal.html.vue"]]);export{i as default};
