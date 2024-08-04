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
    <div class="portfolio-group__title">
      <h1>· {{ props.tag }}</h1>
      <h2>/{{ idx }}</h2>
    </div>

    <div v-if="!items.length" class="portfolio-group__empty">
      <p>待补充</p>
    </div>
    <div class="portfolio-group__list">
      <template v-for="(item, idx) in items" :key="item.id">
        <Card
          class="portfolio-card"
          :portfolio="item"
          v-if="item"
          :reverse="idx % 2 == 0"
        />
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.portfolio-group {
  @apply self-center;

  &__title {
    @apply text-4xl mb-4 flex gap-2;

    h2 {
      @apply text-2xl text-gray-500 self-end;
    }
  }

  &__list {
    @apply flex flex-col gap-24;

    .portfolio-card {
      @apply h-[230px];
    }
  }
}
</style>
