<script setup lang="ts">
import type { Post } from '~/types/from-directus'

const props = defineProps<{
  post?: Post
}>()

const imgLoading = ref(true)
</script>

<template>
  <NuxtLink v-if="post" class="post-card" :href="`/posts/${post.id}`">
    <div class="post-card__cover">
      <NuxtImg
        v-if="post.cover"
        :src="dirAssetsSrc(post.cover)"
        :class="imgLoading ? `outrect-loading` : ''"
        alt="post image"
        loading="lazy"
        @load="imgLoading = false"
      />
      <div v-if="imgLoading" class="text-sm opacity-70 flex items-center gap-1">
        <Icon name="eos-icons:loading" />Loading...
      </div>
    </div>
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
  @apply rounded-lg shadow-sm;
  @apply border border-opacity-20;
  @apply border-gray-200 dark:border-none;
  @apply flex flex-col relative;

  @apply hover:shadow-lg hover:scale-[101%] transition-all duration-150;
  @apply cursor-pointer;

  &:hover {
    .post-card__tag {
      @apply rounded-md top-3 shadow-lg;
    }

    .post-card__desc {
      @apply text-purple-900 dark:text-purple-300;
    }
  }

  &__cover {
    @apply relative flex justify-center items-center;
    @apply brightness-95 rounded-t-lg dark:brightness-[70%] border-b border-opacity-20;
    @apply border-gray-300 dark:border-white/5;
    @apply h-[150px] md:h-[130px] bg-gradient-to-tr from-blue-100 to-purple-200 dark:from-gray-800 dark:to-gray-900;
  }

  &__tag {
    @apply absolute right-4 top-0;
    @apply px-[10px] py-[4px] bg-blue-500 text-white;
    @apply rounded-b-md;
    @apply text-xs;
    @apply transition-all duration-150;
  }

  &__desc {
    @apply pt-3 pb-4 px-5 flex flex-col flex-1 gap-2 rounded-b-lg;
    @apply bg-white dark:bg-black/50;

    h2 {
      @apply text-lg font-bold;
      @apply line-clamp-1 !duration-150;
    }

    h3 {
      @apply text-xs text-gray-500 dark:text-gray-400 !duration-150;
    }
  }

  img {
    @apply w-full h-full max-w-full object-cover;
  }
}

.outrect-loading {
  @apply absolute z-[-100] opacity-0;
}
</style>
