import{_ as l,r as a,o as c,c as i,a as e,b as o,F as s,d as n,e as r}from"./app.6e1bfb90.js";const d={},h=e("ul",null,[e("li",null,[e("p",null,[n("\u8BED\u6CD5\u68C0\u67E5\uFF0C\u8FD0\u884C\u6D4B\u8BD5 "),e("code",null,"nginx -t -c /etc/nginx/nginx.conf")])]),e("li",null,[e("p",null,"\u542F\u52A8\u6216\u91CD\u542F\u65F6\uFF0C\u5982\u679C nginx \u8FDB\u7A0B\u5DF2\u7ECF\u5B58\u5728\uFF0C\u4F1A\u62A5\u9519 \u624B\u52A8 kill \u6389")])],-1),_=e("div",{class:"language-text ext-text"},[e("pre",{class:"language-text"},[e("code",null,`ps -ef | grep nginx
\u6216\u67E5\u770B\u6D3B\u8DC3\u7684\u7F51\u7EDC\u670D\u52A1
netstat -tulpn

kill -2 [PID]
`)])],-1),u=n("\u6DFB\u52A0\u5F00\u673A\u542F\u52A8 "),x={href:"http://imshusheng.com/linux/225.html",target:"_blank",rel:"noopener noreferrer"},g=n("Linux(CentOS)\u4E0B\u8BBE\u7F6E nginx \u5F00\u673A\u81EA\u52A8\u542F\u52A8\u548C chkconfig \u7BA1\u7406 - \u4E66\u751F\u7A0B\u5E8F\u5458"),p=e("li",null,[e("p",null,"\u5B89\u88C5\u53EF\u80FD\u4E0E apache \u6709\u51B2\u7A81\uFF0C\u5148\u505C\u6389")],-1),f=e("h2",{id:"\u53CD\u5411\u4EE3\u7406\u548C\u8D1F\u8F7D\u5747\u8861",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u53CD\u5411\u4EE3\u7406\u548C\u8D1F\u8F7D\u5747\u8861","aria-hidden":"true"},"#"),n(" \u53CD\u5411\u4EE3\u7406\u548C\u8D1F\u8F7D\u5747\u8861")],-1),m={href:"https://www.exratione.com/2013/06/websockets-over-ssl-with-nodejs-and-nginx/",target:"_blank",rel:"noopener noreferrer"},b=n("WebSockets Over SSL With Node.js and Nginx \u2013 Ex Ratione"),k={href:"https://www.nginx.com/blog/websocket-nginx/",target:"_blank",rel:"noopener noreferrer"},w=n("Using NGINX as a WebSocket Proxy"),v=e("h2",{id:"\u53C2\u8003\u914D\u7F6E",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u53C2\u8003\u914D\u7F6E","aria-hidden":"true"},"#"),n(" \u53C2\u8003\u914D\u7F6E")],-1),N={href:"https://gist.github.com/cyio/59b2c04d31af269263fac1cfe6990447",target:"_blank",rel:"noopener noreferrer"},S=n("https://github.com/nicokaiser/nginx-websocket-proxy"),y=r(`<h2 id="mac" tabindex="-1"><a class="header-anchor" href="#mac" aria-hidden="true">#</a> mac</h2><ul><li>\u53EF\u7528 proxy\uFF0C\u6765\u907F\u514D\u4F7F\u7528\u6307\u5B9A\u6587\u4EF6\u5939\u4F4D\u7F6E</li><li>\u9700\u8981\u6743\u9650\u8FD0\u884C<code>sudo nginx</code></li><li><code>vim /usr/local/etc/nginx/nginx.conf</code></li><li><code>/usr/local/var/www/index.html</code> \u4FEE\u6539\u9ED8\u8BA4\u4F4D\u7F6E<div class="language-text ext-text"><pre class="language-text"><code>server {
  #....
  root /home/user/public_html/website.com/public/;

  location / {
</code></pre></div></li></ul>`,2);function E(I,L){const t=a("ExternalLinkIcon");return c(),i(s,null,[h,_,e("ul",null,[e("li",null,[e("p",null,[u,e("a",x,[g,o(t)])])]),p]),f,e("p",null,[e("a",m,[b,o(t)]),e("a",k,[w,o(t)])]),v,e("p",null,[e("a",N,[S,o(t)])]),y],64)}var B=l(d,[["render",E],["__file","nginx.html.vue"]]);export{B as default};
