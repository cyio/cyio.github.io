# chrome

## 历史版本

[Download older versions of Google Chrome for Windows, Linux and Mac](https://www.slimjet.com/chrome/google-chrome-old-version.php)

- 启动
  启动前关闭其它版本 Chrome

```sh
# mac
open -a "Google Chrome 63" --args --profile-directory=Profile-v63
```
- 同时打开多个版本
[Install multiple versions of Chrome on Mac](https://zhoukekestar.github.io/notes/2017/11/01/install-multi-chrome.html)

- chromium
  [Download Chromium - The Chromium Projects](https://www.chromium.org/getting-involved/download-chromium)
  不含有版权编码

- 集成编码 H264/MP4 版本下载
  [Download latest stable Chromium binaries (64-bit and 32-bit)](https://chromium.woolyss.com/)

## flash 支持
- chrome 71 开始，每次启动浏览器，每次访问需要Flash的网站时，您都必须单击“单击以启用Adobe Flash Player”按钮，然后单击浏览器左上角的“允许”按钮以启用该内容，等页面刷新后才能访问 flash 内容。
- 2020 年底，adobe 将停止 flash 更新，主流浏览器将彻底移除 flash 支持

[Google’s latest Chrome update tightens the locks on Adobe Flash](https://www.usatoday.com/story/tech/columnist/2018/09/24/googles-latest-chrome-update-tightens-locks-adobe-flash/1348935002/)
[19 Extensions to Turn Google Chrome into Penetration Testing tool](https://resources.infosecinstitute.com/19-extensions-to-turn-google-chrome-into-penetration-testing-tool/)

## Fix Tunnel Connection Failed
出现这个错误说明是内网问题
[Fix Tunnel Connection Failed Error in Google Chrome » WebNots](https://www.webnots.com/fix-tunnel-connection-failed-error-in-google-chrome/)

## 新布局引擎
Chrome 77 使用了新的布局引擎，修复了很多问题，需要关注对网站布局的影响
LayoutNG - Chromium项目 https://www.chromium.org/blink/layoutng

## 逐步禁止混合内容
方式： 将 http 资源自动升级为 https，如果资源不可通过 https 访问，就加载不了了
80 av 2020.1
81 image 2020.2
[Chromium Blog: No More Mixed Messages About HTTPS](https://blog.chromium.org/2019/10/no-more-mixed-messages-about-https.html)
建议立即检查迁移

## SameSite
- 要求显式标记跨站设置

[SameSite cookies explained](https://web.dev/samesite-cookies-explained/)

## crash
log 位置
https://stackoverflow.com/a/22814349/5657916
[解决内存问题  |  Tools for Web Developers  |  Google Developers](https://developers.google.com/web/tools/chrome-devtools/memory-problems)


79 crash
Chrome.exe --disable-features=RendererCodeIntegrity
[Aw, Snap! Crashes Following Chrome M78 & M79 Updates - Google Chrome Help](https://support.google.com/chrome/thread/17555930?hl=en)

## 自动播放策略

分析行为，媒体参与度，网站得分越高，自动播放的机会越高

如果没有浏览记录，1. 最流行网站

个性化

> Chrome does this by learning your preferences. If you don’t have browsing history, Chrome allows autoplay for over 1,000 sites where we see that the highest percentage of visitors play media with sound. As you browse the web, that list changes as Chrome learns and enables autoplay on sites where you play media with sound during most of your visits, and disables it on sites where you don’t. This way, Chrome gives you a personalized, predictable browsing experience.

[Improving Autoplay in Chrome](https://blog.google/products/chrome/improving-autoplay-chrome/)
[Chrome's Autoplay Policy: what you need to know](https://www.theoplayer.com/blog/chrome-autoplay-policy-what-you-need-to-know)

chrome://media-engagement/
score 一栏

catch 然后 mute play？
