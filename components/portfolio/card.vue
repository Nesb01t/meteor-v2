<script setup lang="ts">
import type { Portfolio } from '~/types/from-directus'
import TechTag from './tech-tag.vue'

const props = defineProps<{
  portfolio: Portfolio
  reverse?: boolean
}>()

const openUrl = (url: string) => {
  if (url) window.open(url, '_blank')
}
</script>

<template>
  <div
    v-if="portfolio"
    class="portfolio-card"
    :class="reverse ? 'reverse' : ''"
  >
    <div class="cover">
      <img
        v-if="portfolio.cover"
        :src="dirAssetsSrc(portfolio.cover)"
        alt="portfolio image"
      />
    </div>

    <div class="content">
      <h1 class="name flex items-center gap-1">
        <span>{{ portfolio.name }}</span>
        <Icon
          v-if="portfolio.url"
          @click="() => openUrl(portfolio.url)"
          name="mdi:link-variant"
          class="link-icon text-gray-500 text-lg hover:text-purple-500 transition-all duration-150 hover:scale-[111%] cursor-pointer"
        ></Icon>
      </h1>
      <p class="description" v-html="portfolio.description" />
      <ul class="flex flex-wrap gap-[10px]">
        <TechTag v-for="i in portfolio.tech_stack" :tech="i" />
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.portfolio-card {
  @apply relative;
  @apply md:grid md:gap-8 md:grid-cols-3;
  @apply max-md:flex max-md:flex-col;

  &:hover {
    @media (min-width: 768px) {
      @apply gap-12;

      .cover {
        transform: scale(1.15) rotateX(15deg) rotateY(18deg);
        box-shadow: 0 0 80px rgba(190, 69, 246, 0.29);
        @apply rounded-xl border-purple-500 dark:border-purple-100 border-2;
      }

      .link-icon {
        @apply scale-[1.15];
      }
    }
  }

  .cover {
    @apply col-span-1;
    @apply min-w-[33%] brightness-[90%] transition-all duration-300;
    @apply overflow-hidden rounded-lg;

    img {
      @apply h-full w-full max-md:h-[380px] object-cover;
    }
  }

  .content {
    @apply col-span-1 md:col-span-2;
    @apply w-full h-full flex flex-col gap-2 md:gap-4 justify-center items-start;

    .name {
      @apply text-2xl font-semibold;
    }

    .description {
      @apply text-sm text-wrap text-left;
      @apply text-gray-600 dark:text-gray-500;
    }
  }
}

.reverse {
  @apply flex md:flex-row-reverse;

  .content {
    @apply items-end;

    .name {
      @apply text-left;
    }

    .description {
      @apply text-right;
    }
  }
}
</style>
