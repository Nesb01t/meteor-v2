<script setup lang="ts">
import type { Post } from '~/types/post'

const props = defineProps<{
  post?: Post
}>()
</script>

<template>
  <div v-if="post" class="post-card">
    <img v-if="post.cover" :src="dirAssetsSrc(post.cover)" alt="post image" />
    <div class="post-card__desc">
      <h2>{{ post.title }}</h2>
      <h3>{{ post.sub_title }}</h3>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.post-card {
  @apply rounded-lg bg-white shadow-sm;
  @apply border border-gray-400 border-opacity-20;
  @apply flex flex-col;

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
    @apply rounded-t-lg max-w-full h-[200px] object-cover;
  }
}
</style>
