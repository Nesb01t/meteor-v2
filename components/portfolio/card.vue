<script setup lang="ts">
import type { Portfolio } from '~/types/from-directus'

const props = defineProps<{
  portfolio: Portfolio
}>()
</script>

<template>
  <div v-if="portfolio" class="portfolio-card">
    <img
      class="relative-image"
      v-if="portfolio.cover"
      :src="dirAssetsSrc(portfolio.cover)"
      alt="portfolio image"
    />

    <div class="content">
      <h1 class="name">{{ portfolio.name }}</h1>
      <p class="description">{{ portfolio.description }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.portfolio-card {
  @apply rounded-lg shadow-md;
  @apply relative cursor-pointer;

  &:hover {
    .relative-image {
      @apply blur-[0] brightness-[100%];
    }
  }

  .relative-image {
    @apply blur-[1px] brightness-[40%] transition-all duration-300;
    @apply absolute w-full h-full z-[-1];
    @apply object-cover rounded-lg;
  }

  .content {
    @apply hover:opacity-0 transition-all duration-500;
    @apply text-white px-6 pb-2;
    @apply h-full flex flex-col gap-2 justify-center;

    .name {
      @apply text-2xl font-bold self-center;
    }

    .description {
      @apply text-xs text-wrap text-center self-center;
    }
  }
}
</style>
