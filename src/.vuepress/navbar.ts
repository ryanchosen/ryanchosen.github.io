import { navbar } from "vuepress-theme-hope";

export default navbar([
  // "/",
  // "/demo/",
  {
    text: "Docs",
    prefix: "/docs/",
    children: [
      {
        text: "Cheet sheet",
        prefix: "cheet-sheet/",
        children: [
          {
            text: "Shell",
            link: "shell"
          }
        ],
      },
      {
        text: "Bare Deployment",
        prefix: "bare-deployment/",
        children: [
          { text: "Mysql",  link: "mysql" },
        ],
      },
      {
        text: "Optimization",
        prefix: "optimization/",
        children: [
          { text: "Nginx",  link: "nginx" },
        ],
      },
    ],
  },
  {
    text: "Codes",
    prefix: "/posts/",
    children: [
      {
        text: "苹果",
        prefix: "apple/",
        children: [
          { text: "苹果1", icon: "pen-to-square", link: "1" },
          { text: "苹果2", icon: "pen-to-square", link: "2" },
          "3",
          "4",
        ],
      },
      {
        text: "香蕉",
        icon: "pen-to-square",
        prefix: "banana/",
        children: [
          {
            text: "香蕉 1",
            icon: "pen-to-square",
            link: "1",
          },
          {
            text: "香蕉 2",
            icon: "pen-to-square",
            link: "2",
          },
          "3",
          "4",
        ],
      },
      { text: "樱桃", icon: "pen-to-square", link: "cherry" },
      { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
      "tomato",
      "strawberry",
    ],
  },
  {
    text: "Play",
    icon: "undraw_heart-fun",
    prefix: "/posts/",
    children: [
      {
        text: "苹果",
        icon: "pen-to-square",
        prefix: "apple/",
        children: [
          { text: "苹果1", icon: "pen-to-square", link: "1" },
          { text: "苹果2", icon: "pen-to-square", link: "2" },
          "3",
          "4",
        ],
      },
      {
        text: "香蕉",
        icon: "pen-to-square",
        prefix: "banana/",
        children: [
          {
            text: "香蕉 1",
            icon: "pen-to-square",
            link: "1",
          },
          {
            text: "香蕉 2",
            icon: "pen-to-square",
            link: "2",
          },
          "3",
          "4",
        ],
      },
      { text: "樱桃", icon: "pen-to-square", link: "cherry" },
      { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
      "tomato",
      "strawberry",
    ],
  },
  {
    text: "Clouds",
    icon: "undraw_cloud",
    link: "https://theme-hope.vuejs.press/zh/",
  }
]);
