<script setup lang="ts">
import { readItems } from '@directus/sdk'
import type { Post } from '~/types/post'
import Card from './card.vue'
const posts = ref()

const readPosts = async () => {
  const res = await client.request<Post>(readItems('blog_nesb01t'))
  return res
}

onMounted(async () => {
  posts.value = await readPosts()
})
</script>

<template>
  <div class="post-list">
    <div class="post-list__header">
      <h1>博客列表</h1>
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
      @apply text-4xl font-bold;
    }

    .divider {
      @apply my-6;
      @apply border-b border-gray-400 border-opacity-40;
    }
  }

  &__list {
    @apply grid grid-cols-1 gap-5;
  }
}
</style>
