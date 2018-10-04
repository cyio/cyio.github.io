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
      { text: 'Web', link: '/web/' },
      { text: '框架', link: '/frameworks/' },
      { text: 'Node', link: '/node/' },
      { text: '工具', link: '/tools/' },
      { text: 'Github', link: 'https://github.com/cyio' },
      // { text: '项目', link: '/projects/' },
      // { text: '未分类', link: '/uncategorized/' },
      // { text: '关于', link: '/about' },
    ],
    sidebarDepth: 2,
    sidebar: 'auto',
    sidebar: {
      '/javascript/': genSidebarConfig('javascript'),
      '/web/': genSidebarConfig('web'),
      '/node/': genSidebarConfig('node'),
      '/frameworks/': genSidebarConfig('frameworks'),
      '/tools/': genSidebarConfig('tools'),
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
          // '',
          'concept',
          'string',
          'array',
          'object',
          'function',
          'block-level-scope',
          'closure',
          'methods',
          'data-structures',
          'design-patterns',
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
    'web': [
      {
        title: 'web',
        collapsable: false,
        children: [
          // '',
          'dom',
          'html',
          'http',
          'security',
          'css-concept',
          'css-practice',
          'pseudo-elements',
          'grid',
          'browser',
          'web-browser-compatible',
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
          // '',
          'vue',
          'react',
          'react-native',
        ]
      },
    ],
    'tools': [
      {
        title: '工具',
        collapsable: false,
        children: [
          'vim',
          'git',
          'tmux',
          'photoshop',
        ]
      },
    ]
  }
  return config[title]
}
