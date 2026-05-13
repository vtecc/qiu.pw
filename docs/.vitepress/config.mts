import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/', //网站部署的路径，默认根目录
  // 加上这行
  head: [
    ['link', { rel: 'canonical', href: 'https://qiu.pw' }]
  ],
  title: "自行车组装帮助中心",
  description: "让每一位顾客都能够轻松的安装自己的自行车",
  lastUpdated: true,
  themeConfig: {
    // 👇 在这里添加 outline 配置
    outline: {
      label: '本文目录' // 把英文替换成中文
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '抱闸系列', link: '/brake/' },
      { text: '碟刹系列', link: '/disc/' },
      { text: '关于', link: '/about' }
    ],

    sidebar: {
      '/brake/': [
        {
          text: '抱闸系列安装指南',
          items: [
            { text: '抱闸安装视频教程', link: '/brake/' },
          ]
        },
        {
          text: '抱闸系列问题汇总',
          items: [
            { text: '调节链条松紧', link: '/brake/chain' },
          ]
        }
      ],

      // 碟刹系列侧边栏（已修改）
      '/disc/': [
        // 第一个分组：安装指南
        {
          text: '碟刹系列安装指南',
          items: [
            { text: '碟刹完整安装视频', link: '/disc/' },
          ]
        },
        // 第二个分组：问题汇总（你要新增的）
        {
          text: '碟刹系列问题汇总',
          items: [
            { text: '碟刹调节', link: '/disc/adjust' },
          ]
        }
      ],

      '/': [
        {
          text: '本站简介',
          items: [
            { text: '简介', link: '/guide' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      message: '自行车组装帮助中心 © 2026',
      copyright: '由 VitePress 强力驱动 | 专业自行车安装指导'
    }
  }
})