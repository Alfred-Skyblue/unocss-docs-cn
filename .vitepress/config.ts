import { createWriteStream } from 'fs'
import { resolve } from 'path'
import { defineConfig } from 'vitepress'
import type { DefaultTheme } from 'vitepress/types'
import { SitemapStream } from 'sitemap'
// @ts-ignore
import { version } from '../package.json'

const ogUrl = 'https://unocss.dev/'
const ogImage = `${ogUrl}og.png`
const title = 'UnoCSS'
const description = 'unocss 中文文档'
const links = []
const Guides: DefaultTheme.NavItemWithLink[] = [
  { text: '开始使用', link: '/guide/' },
  { text: '为什么选择UnoCSS？', link: '/guide/why' },
  { text: '预设', link: '/guide/presets' },
  { text: '样式重置', link: '/guide/style-reset' },
  { text: '配置文件', link: '/guide/config-file' },
  { text: '提取和安全列表', link: '/guide/extracting' },
  { text: '包', link: '/guide/packages' }
]

const Configs: DefaultTheme.NavItemWithLink[] = [
  { text: '概述', link: '/config/' },
  { text: '规则', link: '/config/rules' },
  { text: '快捷方式', link: '/config/shortcuts' },
  { text: '主题', link: '/config/theme' },
  { text: '变体', link: '/config/variants' },
  { text: '提取器', link: '/config/extractors' },
  { text: '转换器', link: '/config/transformers' },
  { text: '预检查', link: '/config/preflights' },
  { text: '图层', link: '/config/layers' },
  { text: '预设', link: '/config/presets' }
]

const Integrations: DefaultTheme.NavItemWithLink[] = [
  { text: 'Vite', link: '/integrations/vite' },
  { text: 'Nuxt', link: '/integrations/nuxt' },
  { text: 'Astro', link: '/integrations/astro' },
  { text: 'Webpack', link: '/integrations/webpack' },
  { text: 'Runtime', link: '/integrations/runtime' },
  { text: 'CLI', link: '/integrations/cli' },
  { text: 'PostCSS', link: '/integrations/postcss' },
  { text: 'ESLint', link: '/integrations/eslint' },
  { text: 'VSCode extension', link: '/integrations/vscode' }
]

const Presets: DefaultTheme.NavItemWithLink[] = [
  { text: 'Uno (默认)', link: '/presets/uno' },
  { text: '图标', link: '/presets/icons' },
  { text: '属性化', link: '/presets/attributify' },
  { text: '排版', link: '/presets/typography' },
  { text: 'Web 字体', link: '/presets/web-fonts' },
  { text: 'Wind', link: '/presets/wind' },
  { text: 'Mini', link: '/presets/mini' },
  { text: '标签化', link: '/presets/tagify' },
  { text: 'Rem to px', link: '/presets/rem-to-px' }
]

const Transformers: DefaultTheme.NavItemWithLink[] = [
  { text: '转换组', link: '/transformers/variant-group' },
  { text: '指令', link: '/transformers/directives' },
  { text: '编译类', link: '/transformers/compile-class' },
  { text: 'JSX 属性化', link: '/transformers/attributify-jsx' }
]

const Extractors: DefaultTheme.NavItemWithLink[] = [
  { text: 'Pug 提取器', link: '/extractors/pug' }
  // { text: 'Svelte extractor', link: '/extractors/svelte' },
]

const Tools: DefaultTheme.NavItemWithLink[] = [
  { text: '检查器', link: '/tools/inspector' },
  { text: '核心', link: '/tools/core' },
  { text: '自动完成', link: '/tools/autocomplete' }
]

const Nav: DefaultTheme.NavItem[] = [
  {
    text: '指南',
    items: [
      {
        text: '指南',
        items: Guides
      }
    ]
  },
  {
    text: '集成',
    items: [
      {
        text: '集成',
        items: Integrations
      },
      {
        text: '示例',
        link: 'https://github.com/unocss/unocss/tree/main/examples'
      }
    ]
  },
  {
    text: '配置',
    items: [
      {
        text: '配置文件',
        link: '/guide/config-file'
      },
      {
        text: 'Concepts',
        items: Configs
      }
    ]
  },
  {
    text: '预设',
    items: [
      {
        text: '概述',
        link: '/presets/'
      },
      {
        text: '社区预设',
        link: '/presets/community'
      },
      {
        text: '预设',
        items: Presets
      },
      {
        text: '转换器',
        items: Transformers
      },
      {
        text: '转换器',
        items: Extractors
      }
    ]
  },
  {
    text: '关于本站',
    link: '/about/'
  },
  { text: '交互式文档', link: `${ogUrl}interactive/`, target: '_blank' },
  { text: '演练场', link: `${ogUrl}play/`, target: '_blank' },
  {
    text: `v${version}`,
    items: [
      {
        text: '发行说明',
        link: 'https://github.com/unocss/unocss/releases'
      },
      {
        text: '贡献',
        link: 'https://github.com/unocss/unocss/blob/main/CONTRIBUTING.md'
      }
    ]
  }
]

const SidebarGuide: DefaultTheme.SidebarItem[] = [
  {
    text: '指南',
    items: Guides
  },
  {
    text: '集成',
    items: Integrations
  },
  {
    text: 'Presets',
    link: '/presets/'
  },
  {
    text: '配置',
    link: '/config/'
  },
  {
    text: '示例',
    link: 'https://github.com/unocss/unocss/tree/main/examples'
  }
]

const SidebarPresets: DefaultTheme.SidebarItem[] = [
  {
    text: '概述',
    link: '/presets/'
  },
  {
    text: '预设',
    collapsed: false,
    items: Presets
  },
  {
    text: '社区预设',
    link: '/presets/community'
  },
  {
    text: '转换器',
    collapsed: false,
    items: Transformers
  },
  {
    text: '提取器',
    collapsed: false,
    items: Extractors
  },
  {
    text: '第三方包',
    collapsed: false,
    items: Tools
  }
]

const SidebarConfig: DefaultTheme.SidebarItem[] = [
  {
    text: '配置',
    collapsed: false,
    items: Configs
  },
  {
    text: '配置文件',
    link: '/guide/config-file'
  }
]
const GITHUB_URL = '/unocss-docs-cn/'
export default defineConfig({
  lang: 'zh-CN',
  title,
  base: GITHUB_URL,
  titleTemplate: title,
  description,
  outDir: './dist',
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh'
    },
    en: {
      label: 'English',
      lang: 'en',
      link: 'https://unocss.dev/'
    }
  },
  head: [
    [
      'link',
      { rel: 'icon', href: `${GITHUB_URL}favicon.svg`, type: 'image/svg+xml' }
    ],
    [
      'link',
      {
        rel: 'alternate icon',
        href: `${GITHUB_URL}favicon.ico`,
        type: 'image/png',
        sizes: '16x16'
      }
    ],
    ['meta', { name: 'author', content: 'Anthony Fu' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: title }],
    ['meta', { name: 'og:description', content: description }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { name: 'twitter:title', content: title }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: ogImage }],
    ['meta', { name: 'twitter:site', content: '@antfu7' }],
    ['meta', { name: 'twitter:url', content: ogUrl }],
    [
      'link',
      {
        rel: 'search',
        type: 'application/opensearchdescription+xml',
        href: '/search.xml',
        title: 'UnoCSS'
      }
    ]
  ],
  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: [/^\/play/, /^\/interactive/, /:\/\/localhost/],

  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark'
    }
  },

  themeConfig: {
    logo: '/logo.svg',
    nav: Nav,
    // @ts-ignore
    localeLinks: {
      text: '简体中文',
      items: [{ text: 'English', link: 'https://unocss.dev/' }]
    },
    sidebar: {
      '/guide/': SidebarGuide,
      '/integrations/': SidebarGuide,
      '/about/': SidebarGuide,
      '/tools/': SidebarPresets,
      '/presets/': SidebarPresets,
      '/transformers/': SidebarPresets,
      '/extractors/': SidebarPresets,
      '/config/': SidebarConfig
    },
    algolia: {
      appId: 'AXP9JFI96W',
      apiKey: '161aea93f115d66f8f0d8658af517c03',
      indexName: 'unocss--cn',
      placeholder: '请输入关键词',
      translations:{
        button:{
          buttonText:'搜索'
        }
      }
    },
    editLink: {
      pattern: 'https://github.com/unocss/unocss/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/unocss/unocss' },
      { icon: 'discord', link: 'https://chat.antfu.me' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2021-PRESENT Anthony Fu'
    }
  },

  //region Generate sitemap
  transformHtml: (_, id, { pageData }) => {
    if (!/[\\/]404\.html$/.test(id)) {
      links.push({
        // you might need to change this if not using clean urls mode
        url: pageData.relativePath.replace(/((^|\/)index)?\.md$/, '$2'),
        lastmod: pageData.lastUpdated
      })
    }
  },
  buildEnd: async ({ outDir }) => {
    const sitemap = new SitemapStream({
      hostname: 'https://alfred-skyblue.github.io/unocss-docs-cn/'
    })
    const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))
    sitemap.pipe(writeStream)
    links.forEach(link => sitemap.write(link))
    sitemap.end()
    // eslint-disable-next-line promise/param-names
    await new Promise(r => writeStream.on('finish', r))
  }
  //endregion
})
