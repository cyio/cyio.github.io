import{_ as a,c as s,o as n,a4 as e}from"./chunks/framework.4aTu-Nia.js";const b=JSON.parse('{"title":"cors-anywhere","description":"","frontmatter":{},"headers":[],"relativePath":"project/cors-anywhere.md","filePath":"project/cors-anywhere.md"}'),t={name:"project/cors-anywhere.md"},p=e(`<h1 id="cors-anywhere" tabindex="-1">cors-anywhere <a class="header-anchor" href="#cors-anywhere" aria-label="Permalink to &quot;cors-anywhere&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>git clone https://github.com/Rob--W/cors-anywhere.git</span></span></code></pre></div><h2 id="指定端口运行" tabindex="-1">指定端口运行 <a class="header-anchor" href="#指定端口运行" aria-label="Permalink to &quot;指定端口运行&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>PORT=8099 node server</span></span></code></pre></div><h2 id="写到-package-json-中固化下来" tabindex="-1">写到 package.json 中固化下来 <a class="header-anchor" href="#写到-package-json-中固化下来" aria-label="Permalink to &quot;写到 package.json 中固化下来&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&quot;start&quot;: &quot;PORT=8099 node server&quot;,</span></span></code></pre></div><h2 id="pm2" tabindex="-1">pm2 <a class="header-anchor" href="#pm2" aria-label="Permalink to &quot;pm2&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pm2 start npm --watch --name cors-anywhere -- run start</span></span></code></pre></div><h2 id="server-js-注释掉以下" tabindex="-1">server.js 注释掉以下 <a class="header-anchor" href="#server-js-注释掉以下" aria-label="Permalink to &quot;server.js 注释掉以下&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// requireHeader: [&#39;origin&#39;, &#39;x-requested-with&#39;],</span></span></code></pre></div><h2 id="nginx-config" tabindex="-1">nginx config <a class="header-anchor" href="#nginx-config" aria-label="Permalink to &quot;nginx config&quot;">​</a></h2><div class="language-config vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">config</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>server {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	listen 80;</span></span>
<span class="line"><span>	server_name cors.oaker.bid;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	location / {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		if ($request_method = &#39;OPTIONS&#39;) {</span></span>
<span class="line"><span>			return 204;</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>		proxy_set_header X-Forwarded-For $remote_addr;</span></span>
<span class="line"><span>		proxy_set_header Host $http_host;</span></span>
<span class="line"><span>		proxy_pass &quot;http://127.0.0.1:8099&quot;;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	listen 443 ssl; # managed by Certbot</span></span>
<span class="line"><span>	ssl_certificate /etc/letsencrypt/live/cors.oaker.bid/fullchain.pem; # managed by Certbot</span></span>
<span class="line"><span>	ssl_certificate_key /etc/letsencrypt/live/cors.oaker.bid/privkey.pem; # managed by Certbot</span></span>
<span class="line"><span>	include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot</span></span>
<span class="line"><span>	ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre></div>`,12),i=[p];function l(o,c,r,h,d,g){return n(),s("div",null,i)}const m=a(t,[["render",l]]);export{b as __pageData,m as default};
