<script lang="ts" setup>
import '~/assets/styles/color-theme.scss'

useHead({
  title: "Nesb01t's Blog",
  meta: [{ name: 'description', content: 'Page description' }],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
body {
  overflow-y: scroll;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.25s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
