import { defineConfig } from "vitepress";

const config = defineConfig({
  title: "不知蠢蠢的博客", // 网站标题
  description: "不知蠢蠢的vitepress博客", // 网站描述
  //  部署时的路径 默认 /  可以使用二级地址 /base/
  base: "/myblog/",
  // 在右下角显示最后更新的时间
  lastUpdated: true,
  // 网页头部配置，引入需要图标，css，js
  head: [],
  // 使url更加简洁
  cleanUrls: true,
  // 主题配置
  themeConfig: {
    // 网站标题
    siteTitle: "不知蠢蠢的博客",
    // 网站徽标
    logo: "/logo.png",
    // 在大纲中显示的页眉级别
    outline: 3,
    // 显示可编辑链接
    // editLink: {
    //   pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
    // },
    socialLinks: [
      { icon: "github", link: "https://github.com/huangzj1996/myblog" },
    ],
    nav: [
      { text: "首页", link: "/" },
      { text: "前端", items: [{ text: "Vue", link: "/vue/" }] },
      { text: "面试题", link: "/interview/" },
    ],
    sidebar: {
      "/vue/": [
        {
          text: "vue2",

          collapsed: false,
          items: [
            {
              text: "vue2-1",
              link: "/vue/vue2",
            },
          ],
        },
        {
          text: "vue3",
          link: "/vue/vue3",
        },
      ],
      "/interview/": [
        {
          text: "JS",
          link: "/interview/js",
        },
        {
          text: "HTML",
          link: "/interview/html",
        },
        {
          text: "CSS",
          link: "/interview/css",
        },
      ],
    },
  },
});

export default config;
