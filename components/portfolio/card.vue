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
        {{ portfolio.name
        }}<Icon
          v-if="portfolio.url"
          @click="() => openUrl(portfolio.url)"
          name="mdi:link-variant"
          class="text-gray-500 text-lg hover:text-purple-500 transition-all duration-150 hover:scale-[111%] cursor-pointer"
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
  @apply grid gap-8 grid-cols-1 md:grid-cols-3;

  .cover {
    @apply col-span-3 md:col-span-1;
    @apply min-w-[33%] brightness-[90%] transition-all duration-300;
    @apply overflow-hidden rounded-lg;

    img {
      @apply h-full w-full object-cover;
    }
  }

  .content {
    @apply col-span-3 md:col-span-2;
    @apply w-full h-full flex flex-col gap-4 justify-center items-start;
    @apply text-black drop-shadow-md drop-shadow-sm;

    .name {
      @apply text-2xl font-semibold;
    }

    .description {
      @apply text-base text-wrap text-left;
    }
  }
}

.reverse {
  @apply flex flex-row-reverse;

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
