<script setup lang="ts">
const props = defineProps<{
  tech: string
}>()
</script>

<template>
  <div class="tech-tag">
    <Icon :name="getIconName(tech)" class="drop-shadow-sm" />
    {{ tech }}
  </div>
</template>

<style lang="scss" scoped>
.tech-tag {
  @apply text-xs cursor-pointer transition-all duration-300;
  @apply inline-block border border-neutral-500/20 px-[10px] py-[3px] rounded-xl;
  @apply bg-purple-50/30 text-gray-600 dark:text-gray-100 dark:bg-gray-200/25;
  @apply flex items-center gap-[5px] font-extralight;
}
</style>
