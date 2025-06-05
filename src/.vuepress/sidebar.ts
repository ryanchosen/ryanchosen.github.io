import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "博客主页",
      link: "/"
    },
     {
      text: "K8S",
      // icon: "laptop-code",
      prefix: "demo/",
      // link: "K8S/",
      children: "structure",
      collapsible: true
    },
     {
      text: "Docs",
      prefix: "docs/",
      // link: "K8S/",
      children: "structure",
      collapsible: true
    },
    {
      text: "如何使用",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
      collapsible: true
    },
    {
      text: "文章",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
    "intro",
    {
      text: "幻灯片",
      icon: "person-chalkboard",
      link: "https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html",
    },
  ],
});
