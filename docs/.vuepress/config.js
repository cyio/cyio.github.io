const path = require('path')
const fs = require('fs');
const glob = require('glob');
// const util = require('./util')

const solutionsArr = fs
  .readdirSync(path.resolve(__dirname, '../javascript/solutions'))
  .filter(filename => filename.endsWith('.md'))
  .map(filename => 'solutions/' + filename)
  .sort()

// const tmp = fs
//   .readdirSync(path.resolve(__dirname, '../blog/'))
//   .filter(filename => filename.endsWith('.md'))
//   .map(filename => 'blog/' + filename)
//   // .sort()
// console.log(tmp)

module.exports = {
  title: 'Oaker小站',
  description: 'Just playing around',
  head: [
    ['link', { rel: 'icon', href: `/favicon.ico` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#0089a7' }],
    ['meta', { name: 'referrer', content: 'no-referrer' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon.ico' }],
  ],
  plugins: [
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    // [
    //   '@vuepress/docsearch',
    //   {
    //     apiKey: '1e4d7677e49297ea22a22f954927061e',
    //     indexName: 'oaker',
    //     locales: {
    //       '/': {
    //         placeholder: 'Search Documentation',
    //         translations: {
    //           button: {
    //             buttonText: 'Search Documentation',
    //           },
    //         },
    //       },
    //       '/zh/': {
    //         placeholder: '搜索文档',
    //         translations: {
    //           button: {
    //             buttonText: '搜索文档',
    //           },
    //         },
    //       },
    //     },
    //   },
    // ],
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Search',
          },
          '/zh/': {
            placeholder: '搜索',
          },
        },
      },
    ],
    // ['@vuepress/register-components', {
        // componentsDir: path.resolve(__dirname, './components'),
        // // components: {
          // // BlogIndex: path.resolve(__dirname, './components/BlogIndex.vue'),
          // // Footer: path.resolve(__dirname, './components/Footer.vue'),
        // // },
    // }]
  ],
  bundler: '@vuepress/vite',
  bundlerConfig: {
    // vite bundler options }, themeConfig: { serviceWorker: {
      lastUpdated: '最后更新',
      updatePopup: true,
      updatePopup: { 
         message: "有新内容可用", 
         buttonText: "更新" 
      }
  },
  evergreen: true,
  themeConfig: {
    navbar: [
      { text: '主页', link: '/' },
      // { text: 'Blog', link: '/' },
      { text: 'JavaScript', link: '/javascript/concept.html' },
      // { text: '题解', link: '/javascript/solutions/new.md' },
      { text: 'Web', link: '/web/html.html' },
      { text: '框架', link: '/frameworks/vue.html' },
      { text: 'Node', link: '/node/concept.html' },
      { text: '工具', link: '/tools/markdown.html' },
      { text: '算法', link: '/javascript/algorithms/index.html' },
      { text: '题解', link: '/javascript/solutions/fib.html' },
      { text: 'Github', link: 'https://github.com/cyio' },
      // { text: '项目', link: '/projects/' },
      // { text: '未分类', link: '/uncategorized/' },
      // { text: '关于', link: '/about' },
    ],
    sidebarDepth: 2, // default 2
    sidebar: genSidebarConfig()
  },
  markdown: {
    code: {
      lineNumbers: 20
    }
  }
}

function genSidebarConfig () {
  let sideBarData = {}
  let navKeys = [
    {
      name: 'javascript',
      displayName: 'JavaScript',
      collapsable: true,
    },
    {
      name: 'web',
      displayName: 'Web',
      collapsable: false,
    },
    {
      name: 'node',
      displayName: 'Node',
      collapsable: false,
    },
    {
      name: 'frameworks',
      displayName: '框架',
      collapsable: false,
    },
    {
      name: 'tools',
      displayName: '工具',
      collapsable: false,
    },
    {
      name: 'javascript/algorithms',
      displayName: '算法',
      collapsable: false,
    },
    {
      name: 'javascript/solutions',
      displayName: '题解',
      collapsable: false,
    },
  ]
  navKeys.forEach(item => {
    sideBarData[`/${item.name}/`] = [
      {
        text: item.displayName,
        collapsible: item.collapsable,
        children: getChildren(item.name)
      },
      // ...getChildren(item.name)
    ]
  })
  // console.log(solutionsArr)
  // console.log(sideBarData['/javascript/'])
  return sideBarData
}
/*
 * 获取文件夹下所有 md 文件名列表
 * input 目录名
 * return Arrary
 */
function getChildren(dirName) {
  console.time('glob')
  let names = []
  let globPath = path.resolve(`./docs/${dirName}/*.md`)
  glob.sync(globPath).forEach(file => {
    const name = path.parse(file).base
    if (name.indexOf('README') < 0) {
      // 解析 heading
      // const firstHeading = util.getFirstHeading(name)
      // if (!firstHeading) {
      //   names.push({
      //     text: name.split('.')[0],
      //     link: name
      //   })
      // } else {
      //   names.push(name)
      // }
      names.push(name)
    }
  })
  console.timeEnd('glob')
  return names
}
