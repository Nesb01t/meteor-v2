<script setup lang="ts">
import ColorMode from './color-mode.vue'
</script>

<template>
  <div class="header">
    <div class="header__logo">
      <NuxtLink to="/" class="logo">Nesb01t's Blog</NuxtLink>
    </div>
    <div class="header__nav">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/portfolio/">Portfolio</NuxtLink>
      <NuxtLink to="/about/">About</NuxtLink>
      <ColorMode></ColorMode>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  @apply max-w-[1000px] w-[100%] mx-auto;

  @apply flex justify-between items-center;
  @apply pt-8 px-6 pb-8;

  &__logo {
    @apply text-xl flex items-center gap-2;
  }

  &__nav {
    @apply flex gap-10 text-sm;
    @apply text-gray-700 hover:text-gray-300 dark:text-gray-300 dark:hover:text-gray-600;

    a {
      @apply hover:text-purple-700 hover:scale-[105%] transition-all duration-300;
    }
  }
}

.logo {
  @apply text-purple-700 opacity-80 hover:text-purple-500 transition-all duration-300;
  font-family: 'PlaywriteAR', 'Courier New', Courier, monospace;
  font-weight: bold;
}
</style>
