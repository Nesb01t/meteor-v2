<script setup lang="ts">
definePageMeta({
  layout: 'base',
})

const content = ref('')
onMounted(() => {
  content.value = 'Hello, World!'
})
</script>

<template>
  <div class="content">
    <PostList />
  </div>
</template>

<style lang="scss" scoped>
.content {
  @apply max-w-[1200px] mx-auto w-[100%];
}
</style>
