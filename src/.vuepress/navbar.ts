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
    text: "K8S",
    icon: "undraw_asymmetric-parallels",
    prefix: "/K8S/",
    children: [
      {
        text: "K8S",
        icon: "pen-to-square",
        // prefix: "K8S/",
        children: [
          { text: "k8s 自动扩缩容HPA原理及adapter配置详解", icon: "pen-to-square", link: "1" },
          { text: "k8s GPU 调度", icon: "pen-to-square", link: "2" },
          { text: "k8s 上安装MetalLB和Nginx Ingress", icon: "pen-to-square", link: "3" },
        ],
      }
    ],
  },
  {
    text: "Clouds",
    icon: "undraw_cloud",
    prefix: "/Clouds/",
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
