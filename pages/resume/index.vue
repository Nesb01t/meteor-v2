<script setup lang="ts"></script>
<template>
  <div class="resume">
    <h1 class="name">nesb01t</h1>
    <header class="personal-info">
      <a target="_blank" href="https://nescraft.cn">
        <Icon name="mingcute:book-2-line" />
        博客 nescraft.cn</a
      >
      <a target="_blank" href="https://github.com/Nesb01t">
        <Icon name="mingcute:github-line" />
        nesb01t</a
      >
      <a>
        <Icon name="mingcute:mail-line" />
        nesb01t@163.com</a
      >
      <a target="_blank" href="https://www.zhihu.com/people/littlelumos">
        <Icon name="mingcute:folder-open-line" />
        知乎 littlelumos</a
      >
      <a>
        <Icon name="mingcute:location-2-line" />
        浙江 · 杭州</a
      >
    </header>

    <section class="section-block">
      <label>
        <Icon name="mingcute:bookmarks-line" />
        教育经历</label
      >

      <ul>
        <li>
          <Icon name="mingcute:diamond-square-line" />
          浙江科技大学 · 数字媒体技术
          <span class="time">2021.09 至 2026.06</span>
        </li>
        <li>
          结业课程: MIT 6.006, CS 61A, CS 61B, UCB CS169, FCC Frontend Camp
        </li>
        <li>中国大学生计算机设计大赛 省三等奖 (游戏组), 软著两项</li>
      </ul>
    </section>

    <section class="section-block">
      <label>
        <Icon name="mingcute:emoji-line" />
        实习经历
      </label>

      <ul>
        <li>
          <Icon name="mingcute:diamond-square-line" />
          <strong>杭州医疗信息化公司A</strong>
          <span class="time">2023.03 至 2023.06</span>
        </li>

        <li>- 基于 Node.js 平台重构 Java + dicom 医疗信息化业务</li>
        <li>- 负责 Vue3 + TS + Vite 医疗可视化 SPA 开发</li>
      </ul>

      <ul>
        <li>
          <Icon name="mingcute:diamond-square-line" />
          <strong>杭州互联网公司B</strong>
          <span class="time">2023.09 至今</span>
        </li>

        <li>
          - 帮助开发基于 Vue + Svelte + RxJS 的 Chrome 插件，完善 service worker
          通信
        </li>
        <li>
          - 处理后台管理系统业务需求，优化公司产品 B 端 ux 体验，内部 monorepo
          组件库
        </li>
      </ul>
    </section>
    <section class="section-block">
      <label>
        <Icon name="mingcute:terminal-box-line" />
        项目经历</label
      >

      <ul>
        <li>
          <Icon name="logos:nodejs-icon-alt" />
          <strong>GoodsCat 谷子猫</strong>
          <a target="_blank" href="https://goodscat.net"
            >https://goodscat.net</a
          >
          <span class="time">2024.04 至 2024.07</span>
        </li>
        <li>
          帮助用户快速, 舒心地完成煤炉 (mercari) 平台商品购物, 支持 OneBot,
          mirai, WxPusher, 邮件推送
        </li>
        <li>
          前端基于 Capacitor + Nuxt.js + UnoCSS 构建多端 release & changelog
          流水线，支持 PWA 机制
        </li>
      </ul>

      <ul>
        <li>
          <Icon name="logos:nodejs-icon-alt" />
          <strong>EachStar 创作互助平台</strong>
          <a target="_blank" href="https://each-star.com"
            >https://each-star.com</a
          >
          <span class="time">2022.09 至 2023.03</span>
        </li>
        <li>
          开源互助社区, 基于 GitHub API 开发, 致力于帮助开源项目积累初始影响力
        </li>
        <li>
          技术栈为 Koa + Nuxt, 前端应用 TailwindCSS + ElementPlus 快速开发,
          遵循标准 Git 工作流进行 CD (持续部署)
        </li>
      </ul>

      <ul>
        <li>
          <Icon name="logos:nodejs-icon-alt" />
          <strong>TomatoMagic 魔法番茄</strong>
          <a target="_blank" href="https://feel.nescraf.cn"
            >https://feel.nescraf.cn</a
          >
          <span class="time">2024.04 至 2024.06</span>
        </li>
        <li>
          基于难易番茄钟和应用心理学开发, 引导用户利用三分法 + TODO LIST
          帮助建立正向反馈的应用系列
        </li>
        <li>
          全栈 SSR + tRPC 应用，并通过 svg 算法生成 canvas 图, 用 Three.js 呈现
          3D 效果
        </li>
      </ul>

      <ul>
        <li>
          <Icon name="logos:nodejs-icon-alt" />
          <strong>ZustCloud 校友录</strong>
          <span class="time">2023.01 至 2024.03</span>
        </li>
        <li>
          帮助校内信息交互的多端应用, 在 Ionic(vue) + Tauri(react) 基础上面向
          PC, H5, Android 平台持续发布
        </li>
        <li>采用 multi-repo 进行项目管理, 将共用模块抽离为私有 npm 包</li>
      </ul>

      <ul>
        <li>
          <Icon name="logos:astro-icon" />
          <strong>meteor-template 博客模板</strong>
          <a target="_blank" href="https://nescraft.cn">https://nescraft.cn</a>
          <span class="time">2023.05 至今</span>
        </li>
        <li>
          基于 Astro.js + daisyUI 实现的 SSG 博客模板, 避免过度水合作用,
          性能极佳且 SEO 友好
        </li>
        <li>
          已整合 Solid.js 生成动态组件, 并可快速部署到 GitHub Pages 或 Vercel
        </li>
      </ul>

      <ul>
        <li>
          <Icon name="logos:microsoft-windows-icon" />
          <strong>RPALite 软件自动化工具</strong>
          <span class="time">2021.12 至 2022.12</span>
        </li>
        <li>根据 RPA 思想设计, 基于 C# + WPF + WinAPI 的软件流程自动化工具</li>
        <li>
          发布了多个辅助软件, 如: 魔兽世界拍卖信息分析, 最终幻想 XIV 自动化助手,
          APEX 英雄经验 BOT
        </li>
      </ul>

      <ul>
        <li>
          <Icon name="logos:microsoft-windows-icon" />
          <strong>最终幻想 XIV 插件 / 工具库</strong>
          <span>内存分析工具 + WebUI</span>
          <a target="_blank" href="https://nesb01t.github.io"
            >https://github.com/Nesb01t/DalamudPlugins</a
          >
          <span class="time">/</span>
        </li>
      </ul>

      <ul>
        <li>
          <Icon name="logos:kotlin-icon" />
          <strong>Kapi 文件交互服务端</strong>
          采用 H2 文件数据库 Ktor 后端, 用于 Web 应用快速部署实验
          <span class="time">/</span>
        </li>
      </ul>

      <ul>
        <li>
          <Icon name="logos:java" />
          <strong>Minecraft 多人游戏插件</strong>
          基于 Kotlin + spigot API, Gradle 构建
          <span class="time">/</span>
        </li>
      </ul>
    </section>

    <section class="section-block">
      <label><Icon name="mingcute:braces-line" />知识技能</label>

      <ul class="skills">
        <li>
          <Icon name="mingcute:diamond-square-line" />
          熟悉 Javascript (ES6) 并常用 Typescript 开发
        </li>

        <li>
          <Icon name="mingcute:diamond-square-line" />
          熟悉 CSS3, Scss 预处理器, 能够熟练使用 UnoCSS / Tailwind CSS
          进行快速开发, 常用 svg, css 动画
        </li>

        <li>
          <Icon name="mingcute:diamond-square-line" />
          阅读过部分 Vue 源码, 熟悉 Vue 及周边生态如 Nuxt, Vite, Pinia
        </li>

        <li>
          <Icon name="mingcute:diamond-square-line" />
          了解并常用前端工程化和构建工具, 如 Vite, ESLint, Prettier, Rollup,
          Webpack
        </li>

        <li>
          <Icon name="mingcute:diamond-square-line" />
          接触过全栈场景, 了解 Ktor, Node.js, Nest.js, Nuxt.js, Next.js
        </li>

        <li>
          <Icon name="mingcute:diamond-square-line" />
          熟悉敏捷开发的方式与流程, 了解 Git flow, GitHub Actions, Docker,
          CI/CD, Nginx, RabbitMQ, Monorepo
        </li>

        <li>
          <Icon name="mingcute:diamond-square-line" />
          熟悉 Linux 系统及常见服务, 常用 Linux Mint 及 TinyCore Desktop
        </li>

        <li class="unique-border-owner">
          <Icon name="mingcute:hexagon-line" />
          了解 Figma, Aesprite, Blender 等设计工具, 了解 3D 建模, 2D 动画,
          能够完成简单的 Shader 需求场景
        </li>

        <li>
          <Icon name="mingcute:hexagon-line" />
          了解 Unity, Cocos, Unreal 等游戏引擎, 了解游戏开发流程及其设计理论
        </li>

        <li>
          <Icon name="mingcute:hexagon-line" />
          有丰富的游戏脚本开发经验, 了解 Lua, Python, Java, C# 等语言
        </li>
      </ul>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.resume {
  @apply pt-8 w-full max-w-[968px] mx-auto px-[36px];

  .name {
    @apply text-2xl pb-1 pl-1 mb-2;
    @apply border-b-[2px] font-[600] text-neutral-600;
  }

  .personal-info {
    @apply flex flex-wrap pl-5;

    a {
      @apply w-1/3 p-1 text-sm flex text-neutral-800 items-center gap-1;
      @apply hover:text-purple-500 cursor-pointer transition-all;
      list-style: none;

      span.iconify {
        @apply size-[16px];
      }
    }
  }

  .section-block {
    @apply my-6;

    label {
      @apply border-b-[1px] text-neutral-600 border-gray-200 pb-1 pl-1 mb-2;
      @apply text-lg font-[600];
      @apply flex items-center gap-1;
    }

    span.iconify {
      @apply size-[21px] text-neutral-600;
    }

    ul {
      @apply pl-6;

      li {
        @apply text-[13px] text-neutral-800 w-full flex items-center gap-3 relative pl-4;

        strong {
          @apply font-[600] text-black;
        }

        a {
          @apply text-purple-400 font-normal;
          @apply hover:text-purple-300 cursor-pointer transition-all;
        }

        span.iconify {
          @apply size-[15px] text-black absolute left-[-4px] top-[2px];
        }
      }

      .time {
        @apply ml-auto mr-3;
        letter-spacing: 0.5px;
      }
    }

    ul + ul {
      @apply mt-2;
    }

    ul.skills {
      li {
        @apply my-[2px];
      }
    }
  }
}

.unique-border-owner {
  @apply border-t-[1px] border-dashed border-purple-600;
}
</style>
