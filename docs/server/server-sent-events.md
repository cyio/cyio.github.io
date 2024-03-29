
Server-sent events (SSE) 是一种实现服务器向客户端推送事件的 Web 技术。它允许服务器推送数据到客户端，而不需要客户端进行轮询请求。SSE 主要用于以下几种场景：

1.  实时数据更新：SSE 可以实现实时的数据更新，例如股票价格、天气预报、实时聊天等。服务器可以将数据推送到客户端，而无需客户端不停地发送请求。
    
2.  通知和提醒：SSE 可以用于发送通知和提醒，例如新邮件通知、社交媒体消息通知等。
    
3.  日志和监控：SSE 可以用于实时监控和记录系统日志、服务器状态等。
    
4.  多人协作：SSE 可以用于多人协作的应用，例如在线文本编辑器、协同白板等。
    

总的来说，SSE 可以用于任何需要实时推送数据的场景，可以提高 Web 应用程序的效率和性能，并减少网络带宽的占用。

## 缺点

**单向通信、有状态连接**

虽然 Server-sent events（SSE）有很多优点，但也存在一些缺点，包括：

1.  兼容性问题：虽然 SSE 是一种 HTML5 规范，但并不是所有浏览器都支持它。特别是在旧版的浏览器上可能会有问题（IE 不支持），需要使用 Polyfill 来解决兼容性问题。
    
2.  可靠性问题：在 SSE 中，客户端和服务器之间的连接是长期保持的，如果连接断开，则需要重新建立连接。如果服务器在中途崩溃或重启，则客户端将无法接收到新的数据，直到重新建立连接。
    
3.  有状态连接：SSE 的连接是有状态的，这意味着服务器需要在内存中维护每个客户端的连接状态。如果同时有大量客户端连接，则可能会对服务器的性能和内存使用造成影响。
    
4.  单向通信：SSE 只支持服务器向客户端发送数据，客户端无法向服务器发送数据。如果需要进行双向通信，则需要使用其他技术，如 WebSocket。

## 用例

Server-sent events（SSE）是一种基于Web的技术，已经被广泛应用于各种领域。以下是一些知名公司或项目在使用SSE的示例：

1.  Github: Github 使用 SSE 来向用户发送实时通知，例如代码合并请求、新问题等。
    
2.  Facebook: Facebook 使用 SSE 来向用户发送实时通知，例如新消息、新朋友请求等。
    
3.  Slack: Slack 使用 SSE 来实现实时聊天功能，使用户可以在不刷新页面的情况下接收和发送消息。
    
4.  Google Drive: Google Drive 使用 SSE 来提供实时协作功能，例如多人编辑和评论文档等。
    
5.  Financial Times: Financial Times 使用 SSE 来提供实时新闻更新，使用户可以在网站上获取最新的新闻和事件。
    

除了上述公司和项目，还有许多其他的公司和项目正在使用SSE来实现实时通知、协作、监控和日志记录等功能。因此，SSE 是一个非常有用的Web技术，在许多不同的应用场景中都得到了广泛的应用。

## DEMO

https://github.com/cyio/sse-tutorial

[实时通信变得简单——使用Node.js和Server-sent events的完整教程 - 掘金](https://juejin.cn/post/7205412097953808445)

SSE 封装
https://github.com/yetone/openai-translator/blob/63e0564679d9dbad37e187aa9b995304337728ce/src/content_script/utils.ts#L69


## Event Stream

WebSockets或Server-Sent Events（SSE）

chrome dev tools apparently only works with the native EventSource

## stream fetch

chromium105+

https://glitch.com/~fetch-request-stream
[Streaming requests with the fetch API - Chrome Developers](https://developer.chrome.com/articles/fetch-streaming-requests/#streaming-request-bodies)


[Consume Web streams from OpenAI using vanilla JavaScript - NO DEPENDENCIES! - YouTube](https://www.youtube.com/watch?v=o1yKuH86_So)
https://umaar.com/dev-tips/269-web-streams-openai/

## 与 WS 对比

- 是否保持长连接，可扩展性，成本

## 模拟 WS

- 模拟：把历史输入都带上