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
        })();
      `,
    ],
  ]
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
