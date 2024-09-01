<script setup lang="ts"></script>

<template>
  <div class="footer">
    <div class="footer__logo">
      <NuxtLink to="https://github.com/Nesb01t/meteor-v2"
        >🌠 MeteorTemplate V2</NuxtLink
      >
      <NuxtLink to="https://nuxt.com/">Powered by Nuxt.js</NuxtLink>
    </div>
    <div class="footer__nav">
      <NuxtLink to="https://beian.miit.gov.cn/">浙ICP备2024103738号-1</NuxtLink>
      <div class="flex gap-8">
        <NuxtLink to="https://github.com/nesb01t">我的 GitHub</NuxtLink>
        <NuxtLink to="https://juejin.cn/user/1128536414880599"
          >稀土掘金</NuxtLink
        >
        <NuxtLink to="https://each-star.com/#/">EachStar 社区</NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  @apply mt-auto mx-auto max-w-[1000px] w-[100%];

  @apply flex justify-between items-center;
  @apply p-4 pb-8;

  &__logo {
    @apply text-sm flex flex-col gap-2;
  }

  &__nav {
    @apply text-xs flex flex-col gap-4 items-end;
  }

  a {
    @apply hover:text-purple-800 transition-all duration-300;
  }
}
</style>
