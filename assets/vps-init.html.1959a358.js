import{_ as s,e as n}from"./app.de511a45.js";const a={},e=n(`<p>\u8BB0\u5F55\u62FF\u5230\u4E00\u53F0\u65B0 VPS \u65B0\u673A\u5668\u8981\u505A\u7684\u4E8B\u60C5</p><h2 id="\u767B\u5F55" tabindex="-1"><a class="header-anchor" href="#\u767B\u5F55" aria-hidden="true">#</a> \u767B\u5F55</h2><p>root \u767B\u5F55\uFF0C\u9700\u8981 ip/port/root psd</p><p>\u6DFB\u52A0\u7528\u6237 <code>adduser newuser</code></p><p>\u5207\u6362\u65B0\u7528\u6237 <code>su - newuser</code></p><p>\u9ED8\u8BA4\u6709su\uFF0C\u4F46\u662F\u6CA1\u6709sudo root\u4E0B\u5B89\u88C5sudo\uFF0C\u624D\u80FD\u4F7F\u7528\u914D\u7F6E <code>apt install sudo</code> \u4E3A\u65B0\u7528\u6237\u6DFB\u52A0\u7BA1\u7406\u5458\u6743\u9650</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">vi</span> /etc/sudoers
</code></pre></div><p>\u5185\u5BB9\u4FEE\u6539\u4E3A</p><div class="language-text ext-text"><pre class="language-text"><code>root ALL=(ALL) ALL
youruser ALL=(ALL) ALL
</code></pre></div><p>mac \u672C\u673A <code>brew install ssh-copy-id</code><code>ssh-copy-id -i ~/.ssh/id_rsa.pub -p 29979 YourName@ip</code></p><p><code>vi etc/ssh/sshd_config</code> \u7F16\u8F91\u914D\u7F6E\uFF0C \u7981\u7528\u5BC6\u7801\u767B\u9646 <code>root/user psd: 2 * normal psd</code></p><p>\u914D\u7F6Essh\uFF0C\u53EF\u80FD\u9700\u8981\u521B\u5EFA.ssh\u76EE\u5F55 \u79C1\u94A5\u4E5F\u9700\u8981\u62F7\u8D1D\u5230\u670D\u52A1\u5668 vim ~/.ssh/id_rsa ssh-add ~/.ssh/id_rsa chmod 400 ~/.ssh/id_rsa</p><h2 id="\u88F8\u7CFB\u7EDF\u5F00\u59CB\u8981\u5B89\u88C5\u7684\u5305" tabindex="-1"><a class="header-anchor" href="#\u88F8\u7CFB\u7EDF\u5F00\u59CB\u8981\u5B89\u88C5\u7684\u5305" aria-hidden="true">#</a> \u88F8\u7CFB\u7EDF\u5F00\u59CB\u8981\u5B89\u88C5\u7684\u5305</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt</span> <span class="token function">install</span> <span class="token function">git</span> ufw mosh <span class="token function">curl</span> tmux

&quot; nodejs6<span class="token punctuation">(</span>include <span class="token function">npm</span>

<span class="token function">curl</span> -sL https://deb.nodesource.com/setup_8.x <span class="token operator">|</span> <span class="token function">sudo</span> -E <span class="token function">bash</span> -
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> -y nodejs
</code></pre></div><h2 id="\u8BED\u8A00\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u8BED\u8A00\u8BBE\u7F6E" aria-hidden="true">#</a> \u8BED\u8A00\u8BBE\u7F6E</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vim</span> /etc/locale.gen
&quot; \u5C06 zh_CN.UTF-8 \u524D\u7684\u6CE8\u91CA\u53BB\u6389

mosh-server \u53EF\u80FD\u9700\u8981\u8BED\u8A00\u652F\u6301
<span class="token function">sudo</span> locale-gen zh_CN.UTF-8
</code></pre></div><h2 id="\u7B80\u6613\u9632\u706B\u5899\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u7B80\u6613\u9632\u706B\u5899\u8BBE\u7F6E" aria-hidden="true">#</a> \u7B80\u6613\u9632\u706B\u5899\u8BBE\u7F6E</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">sudo</span> ufw allow OpenSSH
<span class="token function">sudo</span> ufw allow <span class="token punctuation">[</span>ssh-port<span class="token punctuation">]</span>
\u201D <span class="token keyword">for</span> mosh server
<span class="token function">sudo</span> ufw allow <span class="token number">60000</span>:61000/udp

<span class="token string">&quot; start
sudo ufw enable

&quot;</span> check
<span class="token function">sudo</span> ufw status
<span class="token function">sudo</span> ufw app list
</code></pre></div><p>\u65B0\u5F00\u670D\u52A1\uFF0C\u90FD\u8981\u628A\u7AEF\u53E3\u52A0\u5165\u767D\u540D\u5355 \u5982\u679C\u4E0D\u52A0\u7684\u8BDD\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7\u8FD9\u4E2A\u670D\u52A1\u5668\u642D\u7684 ss \u8BBF\u95EE\uFF0C\u4E5F\u5C31\u662F\u53EA\u6709\u81EA\u5DF1\u80FD\u8BBF\u95EE</p><blockquote><p>\u8FD9\u662F\u56E0\u4E3Aglibc\u8BBE\u7F6E\u95EE\u9898\uFF0C\u5728/etc/locale.gen\u4E2D\u53BB\u6389zh_CN.UTF-8\u7684\u6CE8\u91CA\uFF0C\u518D\u8FD0\u884Clocale-gen\u5373\u53EF\u3002</p></blockquote><div class="language-text ext-text"><pre class="language-text"><code>sudo vim /etc/locale.gen
sudo locale-gen
</code></pre></div>`,21);function o(t,c){return e}var d=s(a,[["render",o],["__file","vps-init.html.vue"]]);export{d as default};
