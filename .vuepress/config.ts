import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { hopeTheme } from "vuepress-theme-hope";
// import sakura from "vuepress-plugin-sakura";
// const sakura = require("vuepress-plugin-sakura")
// const { sakura } = pkg;

export default defineUserConfig({
  title: "My test page",
  description: "mytestpage",
  base: "/", // for build

  dest: "./dist",

  locales: {
    "/": {
      lang: "en-US",
      title: "Blog Demo",
      description: "A blog demo for vuepress-theme-hope",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "博客演示",
      description: "vuepress-theme-hope 的博客演示",
    },
  },

  theme,
  // theme: hopeTheme({
  //   themeColor: {
  //     blue: "#2196f3",
  //     red: "#f26d6d",
  //     green: "#3eaf7c",
  //     orange: "#fb9b5f",
  //   },
  // }),
  shouldPrefetch: false,
  // plugins: [
  //   sakura({
  //     num: 20,  // 默认数量
  //       show: true, //  是否显示
  //       zIndex: -1,   // 层级
  //       img: {
  //         replace: false,  // false 默认图 true 换图 需要填写httpUrl地址
  //         httpUrl: '...'     // 绝对路径
  //       }
  //   })
  // ]
});


