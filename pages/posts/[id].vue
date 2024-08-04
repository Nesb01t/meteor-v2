<script setup lang="ts">
import { readItem } from '@directus/sdk'
import type { Post } from '~/types/from-directus'
import MarkdownIt from 'markdown-it'

definePageMeta({
  layout: 'base',
})

const route = useRoute()
const id = route.params.id

const post = ref()
const mdContent = ref()
const readPost = async (id: string) => {
  const res = await client.request<Post>(readItem('blog_nesb01t', id))
  return res
}

onMounted(async () => {
  post.value = await readPost(id as string)
  mdContent.value = new MarkdownIt().render(post.value.content)
})
</script>

<template>
  <div v-if="post" class="single-post-page">
    <header>
      <h1>{{ post.title }}</h1>
      <h2>{{ post.sub_title }}</h2>
      <p class="date">
        创建于 {{ formatDate(post.date_created) }}

        <span v-if="post.date_updated" class="text-gray-300 mx-4">|</span>
        {{ post.date_updated && `上次更新 ${formatDate(post.date_updated)}` }}
      </p>
    </header>

    <div class="divider" />

    <div v-html="mdContent" class="prose"></div>
  </div>
</template>

<style lang="scss" scoped>
.single-post-page {
  @apply p-4 pb-48;
  @apply max-w-[1000px] mx-auto;

  header {
    @apply pb-5 pt-8;
    @apply flex flex-col gap-6;

    h1 {
      @apply text-4xl font-semibold self-center;
    }

    h2 {
      @apply text-lg self-center text-gray-800;
    }

    .date {
      @apply text-gray-500 text-xs;
      @apply self-center;
    }
  }
}
</style>
