<script setup lang="ts"></script>

<template>
  <div class="header">
    <div class="header__logo">
      <NuxtLink to="/" class="logo">Nesb01t's Blog</NuxtLink>
    </div>
    <div class="header__nav">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/portfolio/">Portfolio</NuxtLink>
      <NuxtLink to="/about/">About</NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  @apply max-w-[1000px] w-[100%] mx-auto;

  @apply flex justify-between items-center;
  @apply pt-8 px-6 pb-8;

  &__logo {
    @apply text-xl;
  }

  &__nav {
    @apply flex gap-8 text-sm text-gray-700;
  }
}

.logo {
  @apply text-purple-700 opacity-80;
  font-family: 'PlaywriteAR', 'Courier New', Courier, monospace;
  font-weight: bold;
}
</style>
