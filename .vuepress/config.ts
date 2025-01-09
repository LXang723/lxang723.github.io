import { defineUserConfig } from "vuepress";
import recoTheme from "./theme.js";
import { viteBundler } from '@vuepress/bundler-vite';
// import { webpackBundler } from '@vuepress/bundler-webpack';
// 水印插件
// import { watermarkPlugin } from '@vuepress/plugin-watermark';
// 看板娘插件
// import { oml2dPlugin } from 'vuepress-plugin-oh-my-live2d';
// 图片预览 https://ecosystem.vuejs.press/zh/plugins/features/medium-zoom.html
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom';
// 代码高亮
import { prismjsPlugin } from '@vuepress/plugin-prismjs';

export default defineUserConfig({
  // base: "/",
  title: "柒月廿三",
  head: [
    // ['link', { rel: 'icon', href: '/favicon.ico' }]
    ['link', { rel: 'icon', href: '/images/head/square.png' }],
    // https://www.jsdelivr.com/package/npm/@fontsource/ysabeau-office
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@fontsource/ysabeau-office@5.1.1/index.min.css' }],
    // https://www.jsdelivr.com/?query=author%3A%20wc-ex
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/cn-fontsource-lxgw-wen-kai-gb-screen/font.css' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/cn-fontsource-alimama-dong-fang-da-kai-regular@1.0.3/font.min.css' }]
  ],
  description: "柒月廿三，浅笔流年",
  bundler: viteBundler(),
  host: "127.0.0.1",
  port: 18888,
  // open: true,
  plugins: [
    // https://ecosystem.vuejs.press/zh/plugins/markdown/prismjs.html
    prismjsPlugin({
      theme: 'material-light',
      // light: material-light、ateliersulphurpool-light
      // dark: 'duotone-sea'
      // themes: { light: 'ateliersulphurpool-light', dark: 'shades-of-purple' },
    }),
    // https://github.com/francoischalifour/medium-zoom#options
    mediumZoomPlugin({
      // 默认会应用于所有 Markdown 渲染的图片
      selector: 'img',
      // 配置缩放选项
      zoomOptions: {
        margin: 16, // 图片与窗口的边距
      },
      // 应用前的钩子函数
      delay: 300, // 延迟应用 zoom 的时间 (毫秒)
    }),
    // 水印
    // watermarkPlugin({
    //   // options
    //   enabled: false,
    //   watermarkOptions: {
    //     content: '这是个水印'
    //   }
    // }),
    // 看板娘
    // oml2dPlugin({
    //   // 在这里配置选项
    //   models: [
    //     {
    //       "path": "https://model.oml2d.com/cat-black/model.json",
    //       "scale": 0.15,
    //       "position": [0, 20],
    //       "stageStyle": {
    //         "height": 350
    //       }
    //     }
    //   ]
    // })
  ],
  // bundler: webpackBundler(),
  theme: recoTheme,
  // debug: true,
});
