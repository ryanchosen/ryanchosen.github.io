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
      prefix: "K8S/",
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
      text: "Clouds",
      prefix: "Clouds/",
      // link: "K8S/",
      children: "structure",
      collapsible: true
    },
  ],
});
