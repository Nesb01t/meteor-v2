<script setup lang="ts">
import type { Post } from '~/types/from-directus'

const props = defineProps<{
  post?: Post
}>()
</script>

<template>
  <NuxtLink v-if="post" class="post-card" :href="`/posts/${post.id}`">
    <img v-if="post.cover" :src="dirAssetsSrc(post.cover)" alt="post image" />
    <div class="post-card__tag" :style="{ background: getTagColor(post.tag) }">
      <span v-for="t in post.tag">{{ t }}</span>
    </div>
    <div class="post-card__desc">
      <h2>{{ post.title }}</h2>
      <h3>{{ post.sub_title }}</h3>
    </div>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.post-card {
  @apply rounded-lg bg-white shadow-sm;
  @apply border border-gray-400 border-opacity-20;
  @apply flex flex-col relative;

  @apply hover:shadow-lg hover:scale-[101%] transition-shadow transition-transform duration-300;
  @apply cursor-pointer;

  &__tag {
    @apply absolute right-4;
    @apply px-[10px] py-[4px] bg-blue-500 text-white;
    @apply rounded-b-md;
    @apply text-xs;
  }

  &__desc {
    @apply pt-3 pb-4 px-5 flex flex-col gap-2;

    h2 {
      @apply text-xl font-bold;
    }

    h3 {
      @apply text-xs text-gray-500;
    }
  }

  img {
    @apply rounded-t-lg max-w-full object-cover border-b border-gray-300 border-opacity-20;
    @apply h-[150px] md:h-[130px];
  }
}
</style>
