<script setup lang="ts">
import { readItems } from '@directus/sdk'
import type { Post } from '~/types/from-directus'
import Card from './card.vue'

const posts = ref()

const readPosts = async () => {
  const res = await client.request<Post>(
    readItems(dirStaticConfig.blogCollection),
  )
  return res
}

onMounted(async () => {
  posts.value = await readPosts()
})
</script>

<template>
  <div class="post-list">
    <div class="post-list__header">
      <h1>博客</h1>
      <h2 class="mt-4">折腾记录、工具推荐</h2>
      <div class="divider"></div>
    </div>
    <ul class="post-list__list">
      <Card v-for="post in posts" :key="post.id" :post="post" />
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.post-list {
  @apply p-4;

  &__header {
    @apply pb-5 flex flex-col;

    h1 {
      @apply text-4xl font-semibold;
    }

    .divider {
      @apply my-6;
      @apply border-b border-gray-400 border-opacity-40;
    }
  }

  &__list {
    @apply gap-5;
    @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3;
  }
}
</style>
