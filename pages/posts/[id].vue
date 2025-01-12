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

const toIndexPage = () => {
  useRouter().back()
}

const toEditPage = () => {
  //https://api.nescraft.cn/admin/content/blog_nesb01t/107
  window.open(`https://api.nescraft.cn/admin/content/blog_nesb01t/${id}`)
}
</script>

<template>
  <div v-if="post" class="single-post-page">
    <header>
      <h1>
        {{ post.title }}
      </h1>
      <h2 class="flex items-center gap-2">
        <div class="text-lg opacity-75 gap-2 flex items-center">
          <Icon
            @click="toIndexPage"
            class="cursor-pointer hover:text-purple-500 transition-all"
            name="typcn:arrow-back-outline"
          />
          <Icon
            @click="toEditPage"
            class="cursor-pointer hover:text-purple-500 transition-all"
            name="fluent:edit-12-regular"
          />
        </div>
        {{ post.sub_title }}
      </h2>
      <p class="date">
        创建于 {{ formatDate(post.date_created) }}

        <span
          v-if="post.date_updated"
          class="text-gray-300 dark:text-gray-700 mx-4"
          >|</span
        >
        {{ post.date_updated && `上次更新 ${formatDate(post.date_updated)}` }}
      </p>
    </header>

    <div v-html="mdContent" class="mx-auto mt-16 prose dark:prose-invert"></div>
  </div>
</template>

<style lang="scss" scoped>
.single-post-page {
  @apply p-4 pb-48;
  @apply max-w-[1200px] mx-auto;

  header {
    @apply pb-5 pt-8;
    @apply flex flex-col gap-6;

    h1 {
      @apply text-4xl font-semibold self-center;
    }

    h2 {
      @apply text-lg self-center text-gray-800 dark:text-purple-100;
    }

    .date {
      @apply text-gray-500 text-xs;
      @apply self-center;
    }
  }
}
</style>
