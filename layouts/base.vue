<script setup lang="ts"></script>

<template>
  <div class="layout-base relative">
    <ComHeader />
    <main>
      <slot />
    </main>
    <ComFooter />

    <div
      class="absolute grayscale-[99%] overflow-hidden w-full h-full z-[-1] opacity-75 contrast-[165%] dark:invert-0 invert"
    >
      <ComCoolBg class="scale-[175%] translate-x-[25%]"></ComCoolBg>
      <div
        class="fixed inset-0 w-[100vw] h-[100vh] bg-gradient-to-b from-black to-transparent z-2"
      ></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout-base {
  @apply min-h-[100vh];
  @apply flex flex-col;
}
</style>
