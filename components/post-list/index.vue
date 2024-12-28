<script setup lang="ts">
import { readItems } from '@directus/sdk'
import type { Post } from '~/types/from-directus'
import Card from './card.vue'
import Hero from '../com/hero.vue'
import TagFilter from './tag-filter.vue'

const posts = ref()

const fetchingPosts = ref(true)
const readPosts = async () => {
  const res = await client.request<Post>(
    readItems(dirStaticConfig.blogCollection, {
      sort: '-date_updated',
    }),
  )
  return res
}

onMounted(async () => {
  posts.value = await readPosts()
  fetchingPosts.value = false
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
    <Hero
      title="Blog"
      :description="`Daily blogs, experimentation records, and some tool recommendations, intended solely for personal learning and sharing.<br> They will not be published on public forums or similar platforms.`"
    />

    <div
      v-if="fetchingPosts"
      class="opacity-80 text-sm flex gap-2 items-center"
    >
      <Icon name="eos-icons:loading" /><span>Loading...</span>
    </div>
    <span v-else-if="posts?.[0]" class="opacity-80 text-xs">
      {{ posts.length }} Posts totally, The last updated on
      {{ formatDate(posts[0]?.date_updated) }}</span
    >

    <TagFilter class="my-6" v-model="tagFilted" />

    <transition name="fade-in" mode="out-in">
      <ul v-if="!fetchingPosts" class="post-list__list">
        <Card v-for="post in filtedPosts" :key="post.id" :post="post" />
      </ul>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.post-list {
  @apply p-4;

  &__list {
    @apply gap-5 pb-48;
    @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3;
  }
}

.fade-in-enter-active,
.fade-in-leave-active {
  @apply transition-all duration-500;
  opacity: 1;
}

.fade-in-enter-from,
.fade-in-leave-to {
  @apply transition-all duration-500;
  opacity: 0;
  transform: translateY(70px);
}
</style>
