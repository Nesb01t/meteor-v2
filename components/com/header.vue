<script setup lang="ts"></script>

<template>
  <div class="header">
    <div class="header__logo">
      <NuxtLink to="/">Nesb01t's Blog</NuxtLink>
    </div>
    <div class="header__nav">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/contact">Contact</NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header {
  @apply max-w-[1000px] w-[100%] mx-auto;

  @apply flex justify-between items-center;
  @apply p-4;

  &__logo {
    @apply text-xl;
  }

  &__nav {
    @apply flex gap-6;
  }
}
</style>
