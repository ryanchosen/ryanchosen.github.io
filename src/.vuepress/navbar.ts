import { navbar } from "vuepress-theme-hope";

export default navbar([
  // "/",
  // "/demo/",
  {
    text: "Docs",
    icon: "undraw_party-streamer",
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
    icon: "undraw_asymmetric-parallels",
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
    text: "K8S",
    icon: "undraw_heart-fun",
    prefix: "/docs/",
    children: [
      {
        text: "K8S",
        icon: "pen-to-square",
        prefix: "K8S/",
        children: [
          { text: "k8s 自动扩缩容HPA原理及adapter配置详解", icon: "pen-to-square", link: "1" },
        ],
      }
    ],
  },
  {
    text: "Clouds",
    icon: "undraw_cloud",
    prefix: "/docs/",
    children: [
      {
        text: "阿里云迁移",
        icon: "pen-to-square",
        prefix: "serviceMigration/",
        children: [
          { text: "ECS 迁移", icon: "pen-to-square", link: "1" },
          { text: "数据库迁移", icon: "pen-to-square", link: "2" },
          { text: "IP 迁移", icon: "pen-to-square", link: "3" },
          { text: "OSS 迁移", icon: "pen-to-square", link: "4" },
          { text: "切换 DNS", icon: "pen-to-square", link: "5" },
          { text: "其他服务迁移", icon: "pen-to-square", link: "6" },
        ],
      }
    ],
  }
]);
