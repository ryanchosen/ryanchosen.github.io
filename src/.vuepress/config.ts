import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/gh-pages/",

  lang: "zh-CN",
  title: "Blog",
  description: "My Blog",
  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
