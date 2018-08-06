module.exports = {
  title: 'Oaker小站',
  description: 'Just playing around',
  head: [
    ['link', { rel: 'icon', href: `/favicon.ico` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#0089a7' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon.ico' }],
  ],
  serviceWorker: true,
  themeConfig: {
    serviceWorker: {
      updatePopup: true
    },
    evergreen: true,
    nav: [
      // { text: '主页', link: '/' },
      { text: 'Blog', link: '/' },
      { text: 'JS', link: '/javascript/' },
      { text: 'CSS', link: '/css/' },
      { text: '框架', link: '/frameworks/' },
      { text: 'Node', link: '/node/' },
      { text: 'Linux', link: '/linux/' },
      { text: '项目', link: '/projects/' },
      { text: '未分类', link: '/uncategorized/' },
      // { text: '关于', link: '/about' },
    ],
    sidebarDepth: 2,
    sidebar: 'auto',
    sidebar: {
      '/javascript/': genSidebarConfig('javascript'),
      '/css/': genSidebarConfig('css'),
      '/node/': genSidebarConfig('node'),
      '/frameworks/': genSidebarConfig('frameworks'),
      '/linux/': genSidebarConfig('linux'),
      // '/blog/',
    }
  },
}

function genSidebarConfig (title) {
  let config = {
    'javascript': [
      {
        title: 'Javascript',
        collapsable: false,
        children: [
          '',
          'concept',
          'string',
          'array',
          'object',
          'function',
          'block-level-scope',
          'closure',
          'methods',
          'data-structures',
          'dom',
          'debug',
          'ES6',
          'event',
          'async',
          'regexp',
          'type',
          'tricks',
        ]
      },
    ],
    'css': [
      {
        title: 'css',
        collapsable: false,
        children: [
          '',
        ]
      },
    ],
    'node': [
      {
        title: 'Node',
        collapsable: false,
        children: [
          '',
          'puppeteer',
          'express',
        ]
      },
    ],
    'frameworks': [
      {
        title: 'frameworks',
        collapsable: true,
        children: [
          '',
          'vue',
        ]
      },
    ],
    'linux': [
      {
        title: 'Linux',
        collapsable: false,
        children: [
          'vim',
          'git',
        ]
      },
    ]
  }
  return config[title]
}
