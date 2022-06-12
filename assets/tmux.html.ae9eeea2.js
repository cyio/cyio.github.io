import{_ as r,r as d,o as i,c as l,a as e,b as s,F as c,d as t,e as a}from"./app.e68235aa.js";const o={},p=e("h1",{id:"tmux",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#tmux","aria-hidden":"true"},"#"),t(" Tmux")],-1),u=e("p",null,"[toc]",-1),h={href:"http://man.openbsd.org/OpenBSD-current/man1/tmux.1",target:"_blank",rel:"noopener noreferrer"},m=t("tmux(1) - OpenBSD manual pages"),b=a('<blockquote><p>server &lt;=&gt; client =&gt; session =&gt; pane =&gt; window</p></blockquote><h2 id="cheatsheet" tabindex="-1"><a class="header-anchor" href="#cheatsheet" aria-hidden="true">#</a> cheatsheet</h2><table><thead><tr><th>\u529F\u80FD</th><th>\u6309\u952E</th></tr></thead><tbody><tr><td>\u524D\u7F00\u952E</td><td>ctrl+k</td></tr><tr><td>\u65B0\u5EFA\u7A97\u53E3/\u4F1A\u8BDD</td><td>c/shift-c</td></tr><tr><td>\u6C34\u5E73\u5206\u5272</td><td>&quot;\uFF08\u4E24\u4E2A\u70B9\uFF09</td></tr><tr><td>\u5782\u76F4\u5206\u5272</td><td>%\uFF08\u4E24\u4E2A\u5708\uFF09</td></tr><tr><td>\u5207\u6362\u7A97\u53E3</td><td>o</td></tr><tr><td>\u8C03\u6362\u7A97\u53E3</td><td>ctrl+o</td></tr><tr><td>\u8C03\u6574\u5927\u5C0F</td><td>ctrl+\u65B9\u5411\u952E</td></tr><tr><td>\u5217\u51FA\u6240\u6709\u7A97\u53E3</td><td>w</td></tr><tr><td>\u5173\u95ED\u5F53\u524D\u7A97\u53E3</td><td>&amp;</td></tr><tr><td>\u5173\u95ED pane</td><td>x</td></tr><tr><td>\u663E\u793A pane \u7F16\u53F7</td><td>q</td></tr><tr><td>\u5207\u6362 pane</td><td>;</td></tr><tr><td>\u67E5\u627E window</td><td>f</td></tr><tr><td>last window</td><td>ctrl+l</td></tr><tr><td>\u72EC\u7ACB\u4E3A\u65B0\u7A97\u53E3</td><td>!</td></tr><tr><td>\u5217\u51FA\u6240\u6709 session</td><td>s</td></tr><tr><td>\u5207\u6362 session</td><td>()</td></tr><tr><td>\u653E\u5927\u5F53\u524D\u7A97\u53E3/\u6062\u590D</td><td>z</td></tr></tbody></table>',3),x=t("\u524D\u7F00\u952E\u6539\u4E3A "),_=e("code",null,"ctrl+k",-1),g=t("\uFF0C\u8FDB\u5165\u547D\u4EE4\u6A21\u5F0F\u8F93\u5165\uFF1A"),f=e("code",null,"set -g prefix ^k",-1),v={href:"https://gist.github.com/MohamedAlaa/2961058",target:"_blank",rel:"noopener noreferrer"},k=t("tmux shortcuts & cheatsheet"),w=a(`<h2 id="\u6EDA\u5C4F\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u6EDA\u5C4F\u6A21\u5F0F" aria-hidden="true">#</a> \u6EDA\u5C4F\u6A21\u5F0F</h2><p>\u9ED8\u8BA4\u72B6\u6001\u4E0B\u4E0D\u80FD\u6EDA\u5C4F\uFF0C\u8FDB\u5165\uFF1A\u524D\u7F00\u952E + [ \u6EDA\u52A8\uFF1Avi \u6309\u952E\u98CE\u7EDC\u6216\u4E0A\u4E0B\u65B9\u5411\u952E\u6216 PgUp/PgDown \u590D\u5236\uFF1A<code>prefix -&gt; [ -&gt; v -&gt; y -&gt; q</code> \u7C98\u8D34\uFF1A<code>prefix -&gt; ]</code></p><h2 id="\u4F1A\u8BDD" tabindex="-1"><a class="header-anchor" href="#\u4F1A\u8BDD" aria-hidden="true">#</a> \u4F1A\u8BDD</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u521B\u5EFA\u4F1A\u8BDD
tmux new -s [NAME]
# \u6302\u8F7D\u4F1A\u8BDD
tmux attach
# \u5206\u79BB\u4F1A\u8BDD
tmux detach
# \u5217\u51FA\u4F1A\u8BDD
tmux ls
# \u6740\u6389\u4F1A\u8BDD
tmux kill-session -t [ID]
# \u4FDD\u5B58\u4F1A\u8BDD
\`prefix ctrl s\`
# \u6062\u590D\u4F1A\u8BDD
\`prefix ctrl r\`
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u63D2\u4EF6" aria-hidden="true">#</a> \u63D2\u4EF6</h2><p>\u5B89\u88C5\u63D2\u4EF6\u7BA1\u7406\u5668</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git clone https://github.com/tmux-plugins/tpm ~/.tmux/plugins/tpm
tmux source ~/.tmux.conf
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5728\u914D\u7F6E\u4E2D\u5199\u5165\u63D2\u4EF6\u5730\u5740\uFF0C\u7136\u540E\u5728 Tmux \u4E2D\u6309\u4E0B <code>prefix - I</code>\uFF0C\u5B89\u88C5, <code>prefix - U</code>\uFF0C\u66F4\u65B0, <code>prefix - alt - u</code>\uFF0C\u5378\u8F7D\uFF0C\u6CE8\u610F\u8FD9\u91CC\u662F\u5C0F\u5199 u,</p>`,8),q={href:"https://linuxtoy.org/archives/tmux-resurrect-and-continuum.html",target:"_blank",rel:"noopener noreferrer"},T=t("Tmux Resurrect & Continuum: \u6301\u4E45\u4FDD\u5B58 Tmux \u4F1A\u8BDD \xB7 LinuxTOY"),y=a(`<p>\u5FEB\u901F\u521B\u5EFA session <code>prefix - C</code> \u6740\u6389\u5EFA session <code>prefix - X</code></p><h2 id="issues" tabindex="-1"><a class="header-anchor" href="#issues" aria-hidden="true">#</a> issues</h2><h3 id="\u5927\u5C4F\u8BBF\u95EE\u5C0F\u5C4F\u65F6-\u4FEE\u6B63\u7A97\u53E3\u5C3A\u5BF8" tabindex="-1"><a class="header-anchor" href="#\u5927\u5C4F\u8BBF\u95EE\u5C0F\u5C4F\u65F6-\u4FEE\u6B63\u7A97\u53E3\u5C3A\u5BF8" aria-hidden="true">#</a> \u5927\u5C4F\u8BBF\u95EE\u5C0F\u5C4F\u65F6\uFF0C\u4FEE\u6B63\u7A97\u53E3\u5C3A\u5BF8</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5728\u5927\u5C4F\u7684 tmux \u4E2D
prefix - D
detach \u6389\u65F6\u95F4\u8F83\u65E7\u7684

\u6216\u8005
tmux list-client
tmux detach-client -s 0

\u6216\u8005 detach \u6389\u9664\u5F53\u524D\u5916\u7684\u6240\u6709
tmux detach -a
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="kill-session" tabindex="-1"><a class="header-anchor" href="#kill-session" aria-hidden="true">#</a> kill session</h3><ol><li>\u5207\u6362\u5230\u7A97\u53E3\u5217\u8868</li><li>\u7126\u70B9\u79FB\u52A8\u5230\u8981\u6740\u6389\u7684 session</li><li>\u4F9D\u6B21\u6309\u4E0B<code>q</code> <code>y</code> <code>enter</code></li></ol><h3 id="\u7A97\u53E3\u610F\u5916\u9000\u51FA" tabindex="-1"><a class="header-anchor" href="#\u7A97\u53E3\u610F\u5916\u9000\u51FA" aria-hidden="true">#</a> \u7A97\u53E3\u610F\u5916\u9000\u51FA</h3><p>\u662F\u56E0\u4E3A\u89E6\u53D1\u7EC8\u7AEF\u9000\u51FA</p>`,8),B={href:"https://superuser.com/questions/479600/how-can-i-prevent-tmux-exiting-with-ctrl-d",target:"_blank",rel:"noopener noreferrer"},D=t("shell - How can I prevent tmux exiting with Ctrl-d? - Super User");function I(N,C){const n=d("ExternalLinkIcon");return i(),l(c,null,[p,u,e("p",null,[e("a",h,[m,s(n)])]),b,e("p",null,[x,_,g,f,e("a",v,[k,s(n)])]),w,e("p",null,[e("a",q,[T,s(n)])]),y,e("p",null,[e("a",B,[D,s(n)])])],64)}var S=r(o,[["render",I],["__file","tmux.html.vue"]]);export{S as default};
