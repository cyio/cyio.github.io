# Puppeteer

## 待验证
* 截取特定区域，如推文卡片

## 缺失能力与替代方法
* 无法处理权限对话框，可指定用户文件夹，在指定一次后记住

## 状态条件
```js
// networkidle0 所有请求加载完
// domcontentloaded 只关心 markup
await page.goto(url, {waitUtil: 'domcontentloaded'})
```

## 监听页面变化
```js
const watchDog = page.waitForFunction('window.innerWidth < 100');
```

## 缓存
```js
new Map
set
has
```


## 启动参数
```js
const chromeConfig = {
  headless: false, // 为假时打开浏览器窗口，服务端直接注释掉
  args: [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--proxy-server=socks5://127.0.0.1:1081'  // 本地最好使用代理
    '--window-size=0,0', // 小窗口，用途是需要声音时，headless 没声音
    '--window-position=25,25',
    `--disable-extensions-except=${CRX}`,
    `--load-extension=${CRX}`
  ]
}
```

## 无法选中元素的处理
CSS 选择器中，没有选择父元素的选择器
利用`puppeteer.evaluate`，加上 ID
```js
// 点击 input name=x 的下拉框中的Item1
let name = 'x'
let value = 'Item1'
let result = await this.page.evaluate((name, value) => {
  let result = -1
  let list = document.querySelector('[name=' + name + ']').parentElement.parentElement.children[1].children)
  for (let i = 0; i < list.length; i++) {
    let c = list[i]
    c.id = '_select_' + name + '_' + i
    if (c.innerText === value) { // found ?
      result = i
    }
  }
  return result
}, name, value)
if (result == -1) {
    throw new Error(value + ' not found!!')
}
await this.page.click('#_select_x_' + result)
```

```js
var resp = await page.goto(url, {timeout:120000}); var html = await resp.text();
```

## 保存和恢复 localStorage
```js
const restoreLocalStorage = async () => {
    let json = JSON.parse(fs.readFileSync(`${__dirname}/local.json`));
    await page.evaluate(json => {
      localStorage.clear();
      for (let key in json)
        localStorage.setItem(key, json[key]);
    }, json);
  }

  const saveLocalStorage = async () => {
    console.log("saving");
    const json = await page.evaluate(() => {
      let json = {};
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        json[key] = localStorage.getItem(key);
      }
      return json;
    });
    console.log(json);
    fs.writeFileSync(`${__dirname}/local.json`, JSON.stringify(json));
  }
```

## 等待元素可见
```js
await page.waitForSelector('#element', {
  visible: true,
})
```

## 登陆
标准的网站，允许使用Post方法发送用户名及密码，返回对应的Token，之后的请求即可使用该Token，这时候我们可以直接使用Request包即可。

但是遇到一些网站，并没有对外开放API接口，每次请求数据是通过登录后的Cookis进行判断。这时候我们也可以使用Request,截取Set-Cookie 头部信息即可。

但是，还有一些网站，在登录时候，需要添加服务器发送给客户端的安全码，这个时候如果单单使用Request就有些费力了。
```js
page.on('response', res => {
    if(res.hasOwnProperty('headers')){
        for(let key in res.headers){
            if(key === 'set-cookie'){
               // 在这里进行获取Cookie信息操作
            }else{
                continue;
            }
        }
    }
});
```
## cookie 存取
```js
// here --->
const sessionCookies = await page.cookies();

// and in another session --->
await page.setCookies(sessionCookies);

let cookies = JSON.parse(fs.readFileSync(`${dir}/cookie.txt`, 'utf8'))
if (cookies) {
  log('login by cookie')
  await page.setCookie(...cookies)
}

log('update cookies')
cookies = await page.cookies();
fs.writeFileSync(`${dir}/cookie.txt`, JSON.stringify(cookies, null, '\t'))
```

## 结合 cheerio
```js
const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
(async function () {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.zhihu.com/people/zhang-shu-yuan-18/following');
    let pageContent =await page.content();
    const $ = cheerio.load(pageContent);
    $('.UserLink-link').each((index, item) => {
        console.log($(item).text());
    })
    browser.close();
})()
```

## 指定语言
[javascript - How to specify browser language in Puppeteer - Stack Overflow](https://stackoverflow.com/questions/46908636/how-to-specify-browser-language-in-puppeteer)

## 下载图片
[Question: How do I get puppeteer to download a file? · Issue #299 · GoogleChrome/puppeteer](https://github.com/GoogleChrome/puppeteer/issues/299#issuecomment-328295644)
[Saving Images from a Headless Browser](https://intoli.com/blog/saving-images/)
