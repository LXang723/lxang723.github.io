import { defineUserConfig } from 'vuepress';
import theme from './theme.js';
import { viteBundler } from '@vuepress/bundler-vite';
// import { webpackBundler } from '@vuepress/bundler-webpack';
// 看板娘插件
import { oml2dPlugin } from 'vuepress-plugin-oh-my-live2d';
// 图片预览
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom';
// 代码高亮
import { prismjsPlugin } from '@vuepress/plugin-prismjs';
import { docsearchPlugin } from '@vuepress/plugin-docsearch';

export default defineUserConfig({
  // base: '/',
  title: '柒月廿三',
  head: [
    // https://favicon.io/favicon-converter/
    // ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    // https://www.jsdelivr.com/package/npm/@fontsource/ysabeau-office
    // ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@fontsource/ysabeau-office@5.1.1/index.min.css' }],
    // https://www.jsdelivr.com/?query=author%3A%20wc-ex
    // ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/cn-fontsource-lxgw-wen-kai-gb-screen/font.css' }],
    // ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/cn-fontsource-alimama-dong-fang-da-kai-regular@1.0.3/font.min.css' }]
  ],
  description: '柒月廿三，浅笔流年',
  bundler: viteBundler(),
  host: '127.0.0.1',
  port: 18888,
  // open: true,
  plugins: [
    docsearchPlugin({
      appId: '5J2VCJ71Q9',
      apiKey: 'cec866fe6035358f08779a4fdb539058',
      indexName: 'lxang723_blog_5j2vcj71q9_pages',
      placeholder: '搜索文档',
      locales: {
        '/': {
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonText: '搜索',
            },
          },
        },
      },
    }),
    // https://ecosystem.vuejs.press/zh/plugins/markdown/prismjs.html
    // 行号受语言类型影响，样式显示有问题，使用默认的就好
    // prismjsPlugin({
    //   // theme: 'duotone-sea',
    //   // light: material-light、ateliersulphurpool-light
    //   // dark: 'duotone-sea'
    //   themes: { light: 'ateliersulphurpool-light', dark: 'shades-of-purple' },
    //   notationFocus: true,
    //   notationHighlight: true
    // }),
    // https://ecosystem.vuejs.press/zh/plugins/features/medium-zoom.html
    // https://github.com/francoischalifour/medium-zoom#options
    mediumZoomPlugin({
      selector: 'img',
      zoomOptions: {
        margin: 16,
      },
      delay: 300,
    }),
    // 看板娘
    oml2dPlugin({
      primaryColor: '#5d67e8',
      menus: {
        disable: false,
      },
      models: [
        {
          'path': '/live2d/models/cat-white/model.json',
          'scale': 0.15, // 模型的缩放比例
          'position': [0, 20],
          'stageStyle': {
            'height': 350
          }
        },
        {
          'path': '/live2d/models/cat-black/model.json',
          'scale': 0.15,
          'position': [0, 20],
          'stageStyle': {
            'height': 350
          }
        },
        {
          'path': '/live2d/models/HK416-2-normal/model.json',
          'position': [0, 60],
          'scale': 0.08,
          'stageStyle': {
            'height': 450
          }
        }
      ],
      tips: {
        idleTips: {
          wordTheDay: true
        }
      }
    })
  ],
  // bundler: webpackBundler(),
  theme: theme,
  // debug: true,
});
