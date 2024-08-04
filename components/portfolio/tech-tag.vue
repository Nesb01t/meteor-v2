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
  @apply inline-block bg-purple-50 shadow-md text-gray-600 px-[10px] py-[3px] rounded-full;
  @apply flex items-center gap-[5px] font-extralight;
}
</style>
