import{_ as s,c as a,o as n,a4 as p}from"./chunks/framework.4aTu-Nia.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"project/vue-modal.md","filePath":"project/vue-modal.md"}'),l={name:"project/vue-modal.md"},t=p(`<ul><li>自己写的，一是 show 要绑定一个开关属性，二是可选的 close 方法，点击空白处时关闭</li><li>TODO: 默认 slot 只放了个 body，可以充实一些骨架，标题，关闭按钮，取消确认，允许传样式来定制，供参考用也行</li><li>发布了插件，npm 包名还是取个不一样的，可以换下单词顺序</li><li>npm 发布简单，npm login =&gt; npm publish</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>button(@click=&quot;toggleModal&quot;) toggle modal</span></span>
<span class="line"><span>modal(:show=&quot;showModal&quot; @close=&quot;toggleModal&quot;)</span></span>
<span class="line"><span>&lt;/template&gt;</span></span>
<span class="line"><span>&lt;script&gt;</span></span>
<span class="line"><span>import Modal from &#39;Modal&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>components: {</span></span>
<span class="line"><span>	Modal</span></span>
<span class="line"><span>},</span></span></code></pre></div>`,2),e=[t];function o(i,c,d,r,_,u){return n(),a("div",null,e)}const h=s(l,[["render",o]]);export{g as __pageData,h as default};
