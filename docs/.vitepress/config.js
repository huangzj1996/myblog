import { defineConfig } from "vitepress";

const config = defineConfig({
  title: "我的博客", // 网站标题
  description: "我的vitepress博客", // 网站描述
  //  部署时的路径 默认 /  可以使用二级地址 /base/
  base: "/",
  // 网页头部配置，引入需要图标，css，js
  head: [],
  // 主题配置
  themeConfig: {
    nav: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "关于",
        link: "/about/",
      },
      {
        text: "前端技术",
        items: [
          {
            text: "TS",
            link: "/ts/basic/",
            activeMatch: "^/ts/",
          },
          {
            text: "vue",
            link: "/vue/",
          },
        ],
      },
    ],
    sidebar: [{ text: "我的", link: "/mine/" }],
    
  },
});

export default config;
