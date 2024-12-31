<script setup lang="ts">
const tag = defineModel<string>()
const avaliableTags = dirStaticConfig.blogTags
</script>

<template>
  <ul class="tag-filter">
    <div class="tech-tag" :class="!tag ? 'selected' : ''" @click="tag = ''">
      Select All
    </div>

    <div class="divider" />
    <div
      v-for="t in avaliableTags"
      class="tech-tag flex items-center"
      :class="tag === t ? 'selected' : ''"
      @click="tag = tag === t ? '' : t"
    >
      <Icon
        :name="getIconName(t)"
        class="drop-shadow-sm text-sm"
        :style="{ color: getIconFillColor(t) }"
      />
      {{ t }}
    </div>
  </ul>
</template>

<style lang="scss" scoped>
.tag-filter {
  @apply flex flex-wrap gap-[10px];
}

.tech-tag {
  @apply text-xs cursor-pointer transition-all duration-300;
  @apply inline-block border border-neutral-500/20 px-[10px] py-[3px] rounded-xl;
  @apply bg-purple-50/30 text-gray-600 dark:text-gray-100 dark:bg-gray-200/25;
  @apply flex items-center gap-[5px] font-extralight;
}

.selected {
  @apply bg-purple-400 dark:bg-purple-500 text-white;
}

.divider {
  @apply w-[1px] h-[16px];
  @apply border-r border-gray-300 dark:border-white/20;
  @apply self-center;
}
</style>
