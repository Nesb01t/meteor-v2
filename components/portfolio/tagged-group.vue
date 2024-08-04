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
    @apply text-3xl  mb-4 flex gap-2;

    h2 {
      @apply text-xl text-gray-500 self-end;
    }
  }

  &__list {
    @apply flex;

    .portfolio-card {
      @apply w-[340px] h-[170px];
    }
  }
}
</style>
