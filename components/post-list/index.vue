<script setup lang="ts">
import { readItems } from '@directus/sdk'
import type { Post } from '~/types/from-directus'
import Card from './card.vue'
import Hero from '../com/hero.vue'
import TagFilter from './tag-filter.vue'

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

// filter
const tagFilted = ref<string>()
const filtedPosts = computed(() => {
  if (!tagFilted.value) return posts.value
  return posts.value.filter((post: Post) => {
    if (tagFilted.value) {
      return post.tag.includes(tagFilted.value)
    }
  })
})
</script>

<template>
  <div class="post-list">
    <Hero title="Blog" description="日常博客、折腾记录和一些工具推荐" />

    <TagFilter class="my-6" v-model="tagFilted" />

    <ul class="post-list__list">
      <Card v-for="post in filtedPosts" :key="post.id" :post="post" />
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.post-list {
  @apply p-4;

  &__list {
    @apply gap-5;
    @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3;
  }
}
</style>
