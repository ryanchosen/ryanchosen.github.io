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
      {},
      `\
        (function() {
            function run() {
              var loader = document.createElement('div');
              loader.className = 'loader';
              document.body.appendChild(loader);
              
              var loader1 = document.createElement('div');
              loader1.className = 'custom-loader-overlay';
              document.body.appendChild(loader1);

              setTimeout(function() {
                loader.classList.add('fade-out');
                loader1.classList.add('fade-out');
                setTimeout(function() {
                  if (loader && loader.parentNode) loader.parentNode.removeChild(loader);
                  if (loader1 && loader1.parentNode) loader1.parentNode.removeChild(loader1);
                }, 400); // 等待过渡动画结束
              }, 1200); 
            }
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', run);
            } else {
              run();
            }

          const navbarElement = document.querySelector('.vp-navbar');
          const navbarBTN = document.querySelector('.vp-hero-slide-down-button');

          // 检查元素是否存在
              // 使用 setTimeout 在 1000 毫秒 (1秒) 后执行操作
              setTimeout(() => {
                  // 给元素添加 'slowdown' 类
                  navbarElement.classList.add('slowdown');
                  navbarBTN.classList.add('slowdown');
              }, 1000);
              })();
              // 禁用滚动
      function preventScroll(e) {
        e.preventDefault();
      }
      window.addEventListener('wheel', preventScroll, { passive: false });
      window.addEventListener('touchmove', preventScroll, { passive: false });
      window.addEventListener('scroll', preventScroll, { passive: false });

      setTimeout(function() {
        // 恢复滚动
        window.removeEventListener('wheel', preventScroll, { passive: false });
        window.removeEventListener('touchmove', preventScroll, { passive: false });
        window.removeEventListener('scroll', preventScroll, { passive: false });
      }, 1500);
      `,
    ],
  ]
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
