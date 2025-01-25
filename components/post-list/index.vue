<script setup lang="ts">
import { aggregate, readCollection, readItems } from '@directus/sdk'
import type { Post } from '~/types/from-directus'
import Card from './card.vue'
import Hero from '../com/hero.vue'
import TagFilter from './tag-filter.vue'
import { useIntersectionObserver } from '@vueuse/core'
import { ref, onMounted } from 'vue'
import { client, dirStaticConfig } from '../../utils/directus'

const PAGE_LIMIT = 12

const index = ref(0)
const isEnd = ref(false)
const fetchingPosts = ref(false)

const count = ref()
const posts = ref<Post[]>([] as Post[])
const readPosts = async (page: number) => {
  const res = await client.request<Post[]>(
    readItems(dirStaticConfig.blogCollection, {
      sort: '-date_updated',
      limit: PAGE_LIMIT,
      page,
    }),
  )
  const countRes = await client.request<{ count: number }[]>(
    aggregate(dirStaticConfig.blogCollection, {
      aggregate: { count: '*' },
    }),
  )
  count.value = countRes[0].count
  if (res.length < PAGE_LIMIT) isEnd.value = true
  return res
}

const readNextPage = async () => {
  if (isEnd.value || fetchingPosts.value) return
  fetchingPosts.value = true
  posts.value = [...posts.value, ...(await readPosts(++index.value))]
  fetchingPosts.value = false

  await new Promise((resolve) => setTimeout(resolve, 66))
  if (targetVisible.value) {
    readNextPage()
  }
}
onMounted(readNextPage)

const tagFilted = ref<string>()

// lazy loading
const target = ref(null)
const targetVisible = ref(false)
useIntersectionObserver(target, async ([entry], observerElement) => {
  targetVisible.value = entry.isIntersecting
  if (entry.isIntersecting) {
    readNextPage()
  }
})
</script>

<template>
  <div class="post-list">
    <Hero
      title="Blog"
      :description="`Daily blogs, experimentation records, and some tool recommendations, intended solely for personal learning and sharing.<br> They will not be published on public forums or similar platforms.`"
    />

    <div class="h-[20px]">
      <div
        v-if="fetchingPosts"
        class="opacity-80 text-sm flex gap-2 items-center"
      >
        <Icon name="eos-icons:loading" /><span>Loading...</span>
      </div>
      <span v-else-if="posts?.[0]" class="opacity-80 text-xs">
        <span v-if="count > 0"
          >There are a total of {{ count }} articles,
        </span>
        The last updated on
        {{ formatDate(posts[0]?.date_updated) }}</span
      >
    </div>

    <TagFilter class="my-6" v-model="tagFilted" />

    <ul v-if="posts" class="post-list__list">
      <TransitionGroup name="fade-in">
        <template v-for="(p, idx) in posts" :key="idx">
          <Card v-if="!tagFilted || p.tag.includes(tagFilted)" :post="p" />
        </template>
      </TransitionGroup>
    </ul>

    <div
      ref="target"
      v-if="!isEnd"
      class="flex items-center gap-2 opacity-75 justify-center my-6"
    >
      <Icon class="text-xl mt-[-3px]" name="eos-icons:loading" /> Loading More
    </div>
  </div>
</template>

<style lang="scss" scoped>
.post-list {
  @apply p-4;

  &__list {
    @apply gap-5 items-stretch flex justify-stretch;
    @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3;
  }
}

.fade-in-enter-active,
.fade-in-leave-active {
  @apply transition-all duration-[0.7s];
  opacity: 1;
}

.fade-in-enter-from,
.fade-in-leave-to {
  @apply transition-all duration-[0.7s];
  opacity: 0;
  filter: blur(0.5px) grayscale(0.5);
  transform: translateY(30px);
}
</style>
