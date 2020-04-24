const { description } = require('../../package');

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'CCWUYU\'s Site About Code',
  base:"/mysite/",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    // ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['link', { name: 'shortcut icon', content: '/images/favicon.ico' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
   
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  
  // theme:'reform',
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    logo:"/images/icon.png",
    banner:"/images/banner.jpg",
    tags:"tags",
    nav: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'Coding',
        link: '/coding/',
        items:[
          {text:'数据交互笔记',link:'/coding/aboutdata/'},
          {text:'Vuepress',link:'/coding/vuepress/'},
          {text:'Webpack',link:'/coding/webpack/'},
          {text:'Linux',link:'/coding/linux/'},
        ]
      },
      {
        text: 'Blog',
        link: '/blog/'
      },
      {
        text: "Tags",
        link: '/tags/',
        tags: true
      },
      {
        text: 'About',
        link: '/about/'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/lcwalnut'
      },
      {
        text: 'WebSite',
        link: 'https://www.ccwuyu.com'
      },
    ],
    sidebar:{
      '/coding/': [
        {
          title: '数据交互笔记',
          collapsable: true,
          children: [
            'aboutdata',
          ]
        },
        {
          title: 'Vuepress',
          collapsable: true,
          children: [
            'vuepress',
			      'vuepressconfig',
			      'vuepressmarkdown',
          ]
        },
        {
          title: 'Webpack',
          collapsable: true,
          children: [
            'webpack',
			      'webpackloader',
          ]
        },
        {
          title: 'Linux',
          collapsable: true,
          children: [
            'linux',
            'linuxbaseconf',
            'linuxlampconf',
          ]
        }
      ],
    },
  },
  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/plugin-search',
    // '@vuepress-plugin-gitalk'
  ]
}
