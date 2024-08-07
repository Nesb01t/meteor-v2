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
  @apply text-xs cursor-default;
  @apply inline-block shadow-md px-[10px] py-[3px] rounded-full;
  @apply flex items-center gap-[5px] font-extralight;
  @apply text-gray-600 bg-purple-50 bg-opacity-50 dark:bg-opacity-10 dark:text-gray-300;
}
</style>
