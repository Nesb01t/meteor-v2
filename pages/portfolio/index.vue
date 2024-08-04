<script setup lang="ts">
import Hero from '~/components/com/hero.vue'

definePageMeta({
  layout: 'base',
})
</script>

<template>
  <div class="portfolio-page">
    <Portfolio />
  </div>
</template>

<style lang="scss" scoped>
.portfolio-page {
  @apply p-4 flex flex-col max-w-[1000px] w-full mx-auto;
}
.hero {
  @apply w-full mx-auto px-4;
}
</style>
