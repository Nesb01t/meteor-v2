<script setup lang="ts"></script>

<template>
  <div class="footer">
    <div class="footer__logo">
      <NuxtLink to="/">Nesb01t's Blog</NuxtLink>
    </div>
    <div class="footer__nav">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/contact">Contact</NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  @apply mt-auto mx-auto max-w-[1000px] w-[100%];

  @apply flex justify-between items-center;
  @apply p-4;

  &__logo {
    @apply text-sm;
  }

  &__nav {
    @apply text-xs flex gap-6;
  }
}
</style>
