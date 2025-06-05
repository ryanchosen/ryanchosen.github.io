// .vuepress/client.js

import { defineClientConfig } from "@vuepress/client";
import { onMounted } from "vue";
import { useRoute } from "vue-router"; // 如果你在 setup 中需要

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    // 注册全局路由守卫 (影响所有路由跳转)
    router.beforeEach((to, from, next) => {
      if (to.path === "/" && from.path !== "/") {
        console.log("全局：每次从非首页跳转到首页了！");
        const navbarBTN = document.querySelector(".vp-hero-slide-down-button");
          setTimeout(() => {
            navbar.classList.add("slowdown");
          if (navbarBTN) {
            navbarBTN.classList.add("slowdown");
          }
        }, 500);
      } else if (to.path === "/" && from.path === "/") {
        console.log("全局：首页刷新或直接访问首页。");
      }
      next(); // 必须调用 next()
    });

    // 如果你需要注册全局组件、插件等，可以在这里
  },

  setup() {
    // 这里的逻辑会在 VuePress 客户端应用初始化时执行
    // 类似于全局的 onMounted
    onMounted(() => {
      const route = useRoute(); // 可以在 setup 中获取路由
      if (route.path === "/") {
        console.log("全局 setup: 首页应用已挂载！");
      }
    });
  },
});
