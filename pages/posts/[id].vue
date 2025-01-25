<script setup lang="ts">
import { readItem } from '@directus/sdk'
import type { Post } from '~/types/from-directus'
import MarkdownIt from 'markdown-it'
import mk from 'markdown-it-katex'
import mdToc from 'markdown-it-toc-done-right'
import mdAnc from 'markdown-it-anchor'

definePageMeta({
  layout: 'base',
})

const route = useRoute()
const id = route.params.id

const post = ref()
const mdContent = ref()
const mdTocValue = ref()
const readPost = async (id: string) => {
  const res = await client.request<Post>(readItem('blog_nesb01t', id))
  return res
}

onMounted(async () => {
  post.value = await readPost(id as string)
  const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
  })
  md.use(mk)
  md.use(mdAnc, {
    permalink: true,
    permalinkSymbol: '',
  }).use(mdToc, {
    listClass: 'toc-list',
    itemClass: 'toc-item',
    linkClass: 'toc-link',
    callback: (html: string, ast: any, options: any, env: any) => {
      mdTocValue.value = html
    },
  })
  mdContent.value = md.render(`${post.value.content}`)
})

const toIndexPage = () => {
  useRouter().back()
}

const toEditPage = () => {
  window.open(`https://api.nescraft.cn/admin/content/blog_nesb01t/${id}`)
}
</script>

<template>
  <div v-if="post" class="post-page">
    <nav>
      <header class="post-description">
        <h1>
          {{ post.title }}
        </h1>
        <h2 class="flex items-center gap-1 opacity-50 flex-wrap">
          {{ post.sub_title }}
          <div class="text-[12px] gap-1 flex items-center">
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
        </h2>

        <div class="flex flex-col items-start gap-1">
          <p class="date">
            <Icon name="gridicons:create" />
            {{ formatDate(post.date_created) }}
          </p>
          <p
            v-if="post.date_updated && post.date_updated != post.date_created"
            class="date"
          >
            <Icon name="icon-park-outline:update-rotation" />
            {{ formatDate(post.date_updated) }}
          </p>
        </div>
      </header>

      <div class="border-t my-4 w-[90%] relative border-neutral-500/20">
        <Icon
          class="absolute right-1 hover:opacity-[35%] transition-all text-purple-500/50 dark:text-purple-200/70 top-4 text-sm"
          name="streamline:cursor-click-solid"
        />
      </div>
      <div v-if="mdTocValue" v-html="mdTocValue" class="toc-nav"></div>
    </nav>

    <div
      v-html="mdContent"
      class="prose-img:rounded-lg prose-img:drop-shadow-lg prose-img:max-h-[170px] prose-ul:text-[15px] prose-li:text-[15px] prose-p:text-[15px] prose-h1:text-[27px] prose-h2:text-[24px] prose-h3:text-[17px] prose max-w-full dark:prose-invert"
    ></div>
  </div>
</template>

<style lang="scss" scoped>
.post-page {
  @apply p-4 pb-48 relative max-w-[1200px] flex mx-auto gap-12;
}

.post-description {
  @apply min-w-[200px];
  @apply flex flex-col items-start gap-2;

  h1 {
    @apply text-xl opacity-70 font-semibold;
  }

  h2 {
    @apply text-[13px] text-purple-900 dark:text-purple-200;
  }

  .date {
    @apply opacity-40 text-[11px] flex items-center gap-1;
  }
}

.toc-nav {
  @apply max-w-[200px] sticky top-[20px] w-[80%];
}
</style>

<style>
body {
  scroll-behavior: smooth;
}
.toc-list {
  @apply list-none;

  .toc-list {
    @apply pl-5;
    list-style: none;
  }
}

*:target {
  padding-top: 20px;

  &::after {
    content: '';
    display: block;
    height: 20px;
    width: 80%;
    margin-top: -20px;

    background-color: rgba(212, 0, 255, 0.181);
  }
}

.toc-item {
  @apply mb-0;
}

.toc-link {
  @apply my-[4px] pt-[2px] pb-[1px];
  @apply text-[12px] text-nowrap truncate block;

  @apply cursor-pointer transition-all;

  @apply opacity-70 bg-gradient-to-r to-purple-500 from-black dark:to-purple-300/50 dark:from-neutral-200 text-transparent bg-clip-text;

  &:hover {
    @apply border-l-[5px] border-neutral-300/60 dark:border-neutral-600/60 pl-[5px] opacity-100;

    @apply bg-gradient-to-r from-purple-800/50 to-transparent text-white dark:text-white/75;
    background-clip: unset;
  }
}
</style>
