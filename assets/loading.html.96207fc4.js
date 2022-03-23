import{r as e,o as a,c as r,a as n,F as o,b as l}from"./app.31fc93bc.js";const t={},s=n("h1",{id:"loading",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#loading","aria-hidden":"true"},"#"),l(" loading")],-1),i=n("ul",null,[n("li",null,"扩展 request ?")],-1),d={href:"https://scotch.io/tutorials/add-loading-indicators-to-your-vuejs-application#toc-using-your-http-library",target:"_blank",rel:"noopener noreferrer"},u=l("Add Loading Indicators to Your Vue.js Application ― Scotch.io"),c=n("h2",{id:"dva-loading",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#dva-loading","aria-hidden":"true"},"#"),l(" dva-loading")],-1),h=n("li",null,"自动处理 loading 状态",-1),g=n("li",null,[l("该组件仅仅监听异步加载状态，这从它的调用方式就可以看出来"),n("code",null,"const isLoading = loading.effects['user/query']"),l("，其中"),n("code",null,"user/query"),l("是 model 中的异步请求方法。")],-1),p=l("如果同时发出若干个异步请求，需求是当所有异步请求都响应才做下一步操作，可以使用 loading.global，该方法监听所有异步请求的状态。 "),f={href:"https://www.jb51.net/article/122085.htm",target:"_blank",rel:"noopener noreferrer"},b=l("DVA框架统一处理所有页面的loading状态_javascript技巧_脚本之家"),v={href:"https://github.com/dvajs/dva/issues/802#issuecomment-352681395",target:"_blank",rel:"noopener noreferrer"},j=l("model中的reducers、effects、subscriptions应该都怎么理解？ · Issue #802 · dvajs/dva"),m={href:"https://github.com/dvajs/dva/issues/886",target:"_blank",rel:"noopener noreferrer"},_=l("关于dva实际应用的一些经验以及疑惑 · Issue #886 · dvajs/dva");t.render=function(l,t){const k=e("OutboundLink");return a(),r(o,null,[s,i,n("p",null,[n("a",d,[u,n(k)])]),c,n("ul",null,[h,g,n("li",null,[p,n("a",f,[b,n(k)]),n("a",v,[j,n(k)]),n("a",m,[_,n(k)])])])],64)};export default t;
