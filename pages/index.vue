<script setup lang="ts">
definePageMeta({
  layout: 'base',
})
</script>

<template>
  <div class="index">
    <section class="relative w-full flex flex-col">
      <div
        class="absolute right-[27%] max-sm:right-[20px] transition-all top-[60px] blur-[70px] rounded-full bg-gradient-to-br from-purple-700 to-yellow-300 min-w-[120px] w-[15%] aspect-video"
      ></div>
      <div class="flex">
        <h1
          class="text-[36px] font-semibold tracking-wide text-transparent bg-gradient-to-r to-purple-400 dark:from-purple-300 dark:to-neutral-300 from-neutral-600 bg-clip-text"
        >
          Hey there, This is Nesb01t🖐️
        </h1>
      </div>

      <ul
        class="lores text-[14px] mt-4 font-light flex flex-col items-start gap-1"
      >
        <li class="opacity-85">
          When I transitioned from half-stack
          <Icon name="file-icons:nestjs" /><Icon name="uim:vuejs" /><Icon
            name="mdi:react"
          />
          web development to learning <Icon name="file-icons:houdini" /> Houdini
          and <Icon name="mdi:unity" /><Icon name="mdi:unreal" /> game
          development,
        </li>

        <li class="opacity-85">
          I've decided to document some exciting past experiences, So that's it
          <Icon name="radix-icons:face" /> !
        </li>

        <li class="opacity-55 mt-3">
          · My first in-person internship landed in 2023, and grateful for the
          nice people I've met along my journey.
        </li>

        <li class="opacity-55">
          · Since 2012, my passion for Minecraft and modding has led me to learn
          <Icon name="hugeicons:java" /> Java.
        </li>

        <li class="opacity-55">
          · Familiar with the Warcraft III editor, created many
          <Icon name="file-icons:warcraft-iii" />
          maps.
        </li>

        <li class="mt-3 flex">
          <NuxtLink to="/posts/" class="href mr-[6px]">
            <Icon name="iconoir:post" /> check out articles
          </NuxtLink>
          <NuxtLink to="/portfolio/" class="href">
            <Icon name="fluent-emoji-high-contrast:artist-palette" /> link to
            portfolio
          </NuxtLink>
        </li>

        <li
          class="mt-24 text-base bg-gradient-to-r from-purple-500 to-black dark:from-purple-50 dark:to-neutral-600 text-transparent bg-clip-text"
        >
          Technologies used/experienced in projects. you can contact me if you
          interested in any of them.
        </li>

        <li class="mt-3 flex w-full">
          <div class="href">
            <Icon name="material-symbols:mail-outline" />
            intellines@outlook.com
          </div>

          <NuxtLink
            to="https://github.com/nesb01t"
            target="_blank"
            class="href ml-[6px]"
          >
            <Icon name="mdi:github" />nesb01t
          </NuxtLink>

          <div class="href ml-[6px]">
            <Icon name="mingcute:qq-line" />
            1317699264
          </div>

          <NuxtLink
            to="https://space.bilibili.com/1624454327"
            target="_blank"
            class="href ml-[6px]"
          >
            <Icon name="mingcute:bilibili-line" />
            真名稚生
          </NuxtLink>
        </li>

        <li class="mt-4 flex w-full">
          <TechGroup></TechGroup>
        </li>
      </ul>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.index {
  @apply max-w-[1200px] mx-auto w-[100%] p-4;
}

.lores {
  li {
    @apply flex items-center gap-[3px];
  }

  .href {
    @apply cursor-pointer bg-black/5 dark:bg-white/10 items-center flex px-3 py-[5px] rounded-md gap-[5px] opacity-85 hover:bg-purple-900/15 transition-all;
  }
}

@keyframes infinite-scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
