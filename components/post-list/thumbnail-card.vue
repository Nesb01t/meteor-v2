<script setup lang="ts">
import type { Post } from '~/types/from-directus'

const props = defineProps<{
  post: Post
}>()

const loading = ref(true)
const imgLoading = ref(true)

onMounted(async () => {
  await new Promise((resolve) => setTimeout(resolve, 12))
  loading.value = false
})
</script>

<template>
  <NuxtLink
    v-if="post && !loading"
    class="post-card"
    :href="`/posts/${post.id}`"
  >
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
      <div class="desc-inner">
        <h2>{{ post.title }}</h2>
        <h3 class="items-center">
          <span class="mr-1">{{ post.sub_title }}</span>
        </h3>
      </div>
    </div>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.post-card {
  @apply rounded-lg shadow-sm border-[1px] border-neutral-500/20;
  @apply border border-opacity-20;
  @apply border-gray-200 dark:border-none;
  @apply flex flex-col relative overflow-hidden;

  @apply hover:scale-[101%] transition-all duration-150;
  @apply cursor-pointer;

  * {
    @apply transition-all;
  }

  &:hover {
    .post-card__cover {
      @apply brightness-[35%];
    }
    .post-card__desc {
      .desc-inner {
        @apply m-auto text-center;
      }
      @apply backdrop-blur-[2px];
    }
  }

  &__cover {
    @apply relative flex justify-center items-center;
    @apply brightness-[75%] dark:brightness-[50%] border-b border-opacity-20;
    @apply border-gray-300 dark:border-white/5;
    @apply h-[150px] md:h-[130px] bg-gradient-to-tr from-blue-100 to-purple-200 dark:from-gray-800 dark:to-gray-900;
  }

  &__tag {
    @apply absolute right-4 top-0 z-[2];
    @apply px-[7px] py-[3px] opacity-75 bg-blue-500 text-white;
    @apply rounded-b-md;
    @apply text-[10px];
    @apply transition-all duration-150;
  }

  &__desc {
    @apply absolute z-[1] inset-0 flex flex-col items-start justify-end p-3 gap-[4px];

    .desc-inner {
      @apply transition-all;

      &:hover {
        @apply text-white;
      }
    }

    h2 {
      @apply text-[14px] font-bold;
      @apply line-clamp-1 !duration-150;
      @apply text-white;

      text-shadow: 1px 1px 2px black;
    }

    h3 {
      @apply text-[10px] opacity-65 h-[24px] text-gray-50 dark:text-gray-200 !duration-150;

      text-shadow: 1px 1px 2px black;
    }
  }

  img {
    @apply w-full h-full max-w-full object-cover;
  }
}

.outrect-loading {
  @apply absolute z-[-100] opacity-0;
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
