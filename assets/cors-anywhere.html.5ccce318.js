import{_ as e,e as n}from"./app.f9aa7290.js";const a={},s=n(`<h1 id="cors-anywhere" tabindex="-1"><a class="header-anchor" href="#cors-anywhere" aria-hidden="true">#</a> cors-anywhere</h1><div class="language-text ext-text"><pre class="language-text"><code>git clone https://github.com/Rob--W/cors-anywhere.git
</code></pre></div><h2 id="\u6307\u5B9A\u7AEF\u53E3\u8FD0\u884C" tabindex="-1"><a class="header-anchor" href="#\u6307\u5B9A\u7AEF\u53E3\u8FD0\u884C" aria-hidden="true">#</a> \u6307\u5B9A\u7AEF\u53E3\u8FD0\u884C</h2><div class="language-text ext-text"><pre class="language-text"><code>PORT=8099 node server
</code></pre></div><h2 id="\u5199\u5230-package-json-\u4E2D\u56FA\u5316\u4E0B\u6765" tabindex="-1"><a class="header-anchor" href="#\u5199\u5230-package-json-\u4E2D\u56FA\u5316\u4E0B\u6765" aria-hidden="true">#</a> \u5199\u5230 package.json \u4E2D\u56FA\u5316\u4E0B\u6765</h2><div class="language-text ext-text"><pre class="language-text"><code>&quot;start&quot;: &quot;PORT=8099 node server&quot;,
</code></pre></div><h2 id="pm2" tabindex="-1"><a class="header-anchor" href="#pm2" aria-hidden="true">#</a> pm2</h2><div class="language-text ext-text"><pre class="language-text"><code>pm2 start npm --watch --name cors-anywhere -- run start
</code></pre></div><h2 id="server-js-\u6CE8\u91CA\u6389\u4EE5\u4E0B" tabindex="-1"><a class="header-anchor" href="#server-js-\u6CE8\u91CA\u6389\u4EE5\u4E0B" aria-hidden="true">#</a> server.js \u6CE8\u91CA\u6389\u4EE5\u4E0B</h2><div class="language-text ext-text"><pre class="language-text"><code>// requireHeader: [&#39;origin&#39;, &#39;x-requested-with&#39;],
</code></pre></div><h2 id="nginx-config" tabindex="-1"><a class="header-anchor" href="#nginx-config" aria-hidden="true">#</a> nginx config</h2><div class="language-config ext-config line-numbers-mode"><pre class="language-config"><code>server {

	listen 80;
	server_name cors.oaker.bid;

	location / {

		if ($request_method = &#39;OPTIONS&#39;) {
			return 204;
		}

		proxy_set_header X-Forwarded-For $remote_addr;
		proxy_set_header Host $http_host;
		proxy_pass &quot;http://127.0.0.1:8099&quot;;
	}

	listen 443 ssl; # managed by Certbot
	ssl_certificate /etc/letsencrypt/live/cors.oaker.bid/fullchain.pem; # managed by Certbot
	ssl_certificate_key /etc/letsencrypt/live/cors.oaker.bid/privkey.pem; # managed by Certbot
	include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
	ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>`,12);function r(t,c){return s}var l=e(a,[["render",r],["__file","cors-anywhere.html.vue"]]);export{l as default};
