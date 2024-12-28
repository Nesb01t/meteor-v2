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
        v-if="t && tag !== t"
        :name="getIconName(t)"
        class="drop-shadow-sm"
        :style="{ color: getIconFillColor(t) }"
      />
      {{ t }}

      <div class="opacity-65 text-[10px] h-[14px]">12</div>
    </div>
  </ul>
</template>

<style lang="scss" scoped>
.tag-filter {
  @apply flex flex-wrap gap-4;
}

.tech-tag {
  @apply text-xs cursor-pointer transition-all duration-300;
  @apply inline-block shadow-md px-[10px] py-[3px] rounded-full;
  @apply bg-purple-50 bg-opacity-50 text-gray-600 dark:bg-opacity-10 dark:text-gray-300;
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
