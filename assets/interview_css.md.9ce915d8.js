import{_ as e,c as i,o as a,a as l}from"./app.f364cbbc.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"css","slug":"css","link":"#css","children":[]},{"level":3,"title":"CSS 盒模型","slug":"css-盒模型","link":"#css-盒模型","children":[]},{"level":3,"title":"css 选择器和优先级","slug":"css-选择器和优先级","link":"#css-选择器和优先级","children":[]},{"level":3,"title":"重绘和回流","slug":"重绘和回流","link":"#重绘和回流","children":[]},{"level":3,"title":"对 BFC 的理解","slug":"对-bfc-的理解","link":"#对-bfc-的理解","children":[]},{"level":3,"title":"水平垂直居中的多种实现方式","slug":"水平垂直居中的多种实现方式","link":"#水平垂直居中的多种实现方式","children":[]},{"level":3,"title":"felx 布局","slug":"felx-布局","link":"#felx-布局","children":[]},{"level":3,"title":"line-height 如何继承？","slug":"line-height-如何继承","link":"#line-height-如何继承","children":[]},{"level":3,"title":"2. 单页面应用的路由匹配原理","slug":"_2-单页面应用的路由匹配原理","link":"#_2-单页面应用的路由匹配原理","children":[]},{"level":3,"title":"7. ES Module 的了解","slug":"_7-es-module-的了解","link":"#_7-es-module-的了解","children":[]},{"level":3,"title":"11. vue3 的响应式，vue3 内部怎么代理？","slug":"_11-vue3-的响应式-vue3-内部怎么代理","link":"#_11-vue3-的响应式-vue3-内部怎么代理","children":[]},{"level":3,"title":"12. vue3 的响应式库是独立出来的，它单独使用的时候是什么效果？","slug":"_12-vue3-的响应式库是独立出来的-它单独使用的时候是什么效果","link":"#_12-vue3-的响应式库是独立出来的-它单独使用的时候是什么效果","children":[]},{"level":3,"title":"13. vue3 响应式的 api","slug":"_13-vue3-响应式的-api","link":"#_13-vue3-响应式的-api","children":[]},{"level":3,"title":"14. 讲一下 v-dom 吧，讲一下为什么使用这个，它有什么优缺点？","slug":"_14-讲一下-v-dom-吧-讲一下为什么使用这个-它有什么优缺点","link":"#_14-讲一下-v-dom-吧-讲一下为什么使用这个-它有什么优缺点","children":[]},{"level":3,"title":"15.二叉树算法题、合并有序链表","slug":"_15-二叉树算法题、合并有序链表","link":"#_15-二叉树算法题、合并有序链表","children":[]}],"relativePath":"interview/css.md","lastUpdated":1676366539000}'),h={name:"interview/css.md"},d=l('<h3 id="css" tabindex="-1">css <a class="header-anchor" href="#css" aria-hidden="true">#</a></h3><h3 id="css-盒模型" tabindex="-1">CSS 盒模型 <a class="header-anchor" href="#css-盒模型" aria-hidden="true">#</a></h3><h3 id="css-选择器和优先级" tabindex="-1">css 选择器和优先级 <a class="header-anchor" href="#css-选择器和优先级" aria-hidden="true">#</a></h3><h3 id="重绘和回流" tabindex="-1">重绘和回流 <a class="header-anchor" href="#重绘和回流" aria-hidden="true">#</a></h3><h3 id="对-bfc-的理解" tabindex="-1">对 BFC 的理解 <a class="header-anchor" href="#对-bfc-的理解" aria-hidden="true">#</a></h3><h3 id="水平垂直居中的多种实现方式" tabindex="-1">水平垂直居中的多种实现方式 <a class="header-anchor" href="#水平垂直居中的多种实现方式" aria-hidden="true">#</a></h3><h3 id="felx-布局" tabindex="-1">felx 布局 <a class="header-anchor" href="#felx-布局" aria-hidden="true">#</a></h3><h3 id="line-height-如何继承" tabindex="-1">line-height 如何继承？ <a class="header-anchor" href="#line-height-如何继承" aria-hidden="true">#</a></h3><ul><li>父元素的 line-height 写了具体的值，子元素继承该值；</li><li>父元素的 line-height 写了比例，子元素继承该比例；</li><li>父元素的 line-height 写了百分比，子元素继承父元素的 font-size*百分比</li></ul><h3 id="_2-单页面应用的路由匹配原理" tabindex="-1">2. 单页面应用的路由匹配原理 <a class="header-anchor" href="#_2-单页面应用的路由匹配原理" aria-hidden="true">#</a></h3><h3 id="_7-es-module-的了解" tabindex="-1">7. ES Module 的了解 <a class="header-anchor" href="#_7-es-module-的了解" aria-hidden="true">#</a></h3><h3 id="_11-vue3-的响应式-vue3-内部怎么代理" tabindex="-1">11. vue3 的响应式，vue3 内部怎么代理？ <a class="header-anchor" href="#_11-vue3-的响应式-vue3-内部怎么代理" aria-hidden="true">#</a></h3><h3 id="_12-vue3-的响应式库是独立出来的-它单独使用的时候是什么效果" tabindex="-1">12. vue3 的响应式库是独立出来的，它单独使用的时候是什么效果？ <a class="header-anchor" href="#_12-vue3-的响应式库是独立出来的-它单独使用的时候是什么效果" aria-hidden="true">#</a></h3><h3 id="_13-vue3-响应式的-api" tabindex="-1">13. vue3 响应式的 api <a class="header-anchor" href="#_13-vue3-响应式的-api" aria-hidden="true">#</a></h3><h3 id="_14-讲一下-v-dom-吧-讲一下为什么使用这个-它有什么优缺点" tabindex="-1">14. 讲一下 v-dom 吧，讲一下为什么使用这个，它有什么优缺点？ <a class="header-anchor" href="#_14-讲一下-v-dom-吧-讲一下为什么使用这个-它有什么优缺点" aria-hidden="true">#</a></h3><h3 id="_15-二叉树算法题、合并有序链表" tabindex="-1">15.二叉树算法题、合并有序链表 <a class="header-anchor" href="#_15-二叉树算法题、合并有序链表" aria-hidden="true">#</a></h3>',16),r=[d];function s(n,t,c,u,_,o){return a(),i("div",null,r)}const g=e(h,[["render",s]]);export{f as __pageData,g as default};
