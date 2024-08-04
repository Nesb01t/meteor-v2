<script setup lang="ts">
import type { Portfolio } from '~/types/from-directus'
import Card from './card.vue'

const props = defineProps<{
  idx: number
  tag: string
  items: Portfolio[]
}>()
</script>

<template>
  <div class="portfolio-group">
    <h1 class="portfolio-group__title">
      {{ props.tag }}
      <h2>/{{ idx }}</h2>
    </h1>

    <div v-if="!items.length" class="portfolio-group__empty">
      <p>待补充</p>
    </div>
    <div class="portfolio-group__list">
      <template v-for="item in items" :key="item.id">
        <Card class="portfolio-card" :portfolio="item" v-if="item" />
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.portfolio-group {
  @apply self-center;

  &__title {
    @apply text-3xl mb-4 flex gap-2;

    h2 {
      @apply text-xl text-gray-500 self-end;
    }
  }

  &__list {
    @apply grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3;

    .portfolio-card {
      @apply h-[200px];
    }
  }
}
</style>
