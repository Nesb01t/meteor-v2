<script setup lang="ts">
definePageMeta({
  layout: 'base',
})
</script>

<template>
  <div class="about">
    <h1 class="hello">Hey there, This is Nesb01t</h1>
    <p class="description">
      Do not go gentle into that good night, Old age should burn and rave at
      close of day, Rage, rage against the dying of the light.
    </p>

    <img
      class="image-blackhole"
      :src="dirAssetsSrc('8bc959d6-2a23-4b13-a157-70693d4486e1')"
    />
    <div class="image-lore">不要温和地走进那个良夜《星际穿越》</div>

    <div class="vertical-group mt-20">
      <h2 class="sub-title w-1/2 pl-4">The Path to Code</h2>
      <p class="w-1/2 pr-4 lore">
        初中开始接触编程和游戏开发，运营过多种游戏社区服务器，开发过辅助工具。大学选择数媒技，宽泛地学习了简单的前后端，游戏开发，逆向工程，直到工作中的前端开发，一直在进行探索和学习。
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about {
  @apply flex flex-col items-center;
  @apply w-full px-2 gap-2 pt-8 pb-48;

  .hello {
    @apply text-5xl font-semibold text-center my-12;
  }

  .description {
    @apply text-base text-gray-500 text-center max-w-[600px] text-wrap;
  }

  .image-blackhole {
    @apply max-w-[800px] mt-16;
  }

  .image-lore {
    @apply text-xs flex justify-end max-w-[800px] w-full pr-1;
    @apply text-gray-400 dark:text-gray-500;
  }

  .sub-title {
    @apply text-3xl font-semibold text-start;
    letter-spacing: 0.5px;
  }
}

.vertical-group {
  @apply flex max-w-[800px];
}

.lore {
  @apply text-base flex flex-col;
  @apply text-gray-900 dark:text-gray-300;
}
</style>
