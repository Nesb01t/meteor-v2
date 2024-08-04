<script setup lang="ts">
const props = defineProps<{
  title?: string
  description?: string
}>()
</script>

<template>
  <div class="hero">
    <h1>{{ title }}</h1>
    <h2 class="mt-4">{{ description }}</h2>
    <!-- <div class="divider"/> -->
  </div>
</template>

<style lang="scss" scoped>
.hero {
  @apply pb-5 flex flex-col;

  h1 {
    @apply text-4xl font-semibold;
  }

  .divider {
    @apply my-6;
    @apply border-b border-gray-400 border-opacity-40;
  }
}
</style>
