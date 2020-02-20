# blob

- 只能浏览器内生成并使用
- 好处：不一定要远程，本地文件
- Data-URI(base64) 有明显缺点

[html5 video - What is a blob URL and why it is used? - Stack Overflow](https://stackoverflow.com/questions/30864573/what-is-a-blob-url-and-why-it-is-used)

## mp4 直接转成 blob 可以吗？
- 不建议，依赖 JS 里下载完整个文件，转给 mediasource 播放
- 用户从 network 依然能拿到 mp4 url

    [postbird/PostbirdMp4ToBlob: Convert src of HTML video tag to load blob via javascript MediaSource](https://github.com/postbird/PostbirdMp4ToBlob)

