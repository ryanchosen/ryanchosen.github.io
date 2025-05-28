import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Blog",
  description: "My Blog",
  theme,
  head: [
    [
      "script",
      {src: "/script.js", async: true},
    ],
  ]
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
