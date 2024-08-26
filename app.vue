<script lang="ts" setup>
import '~/assets/styles/color-theme.scss'

useHead({
  title: "Nesb01t's Blog",
  meta: [{ name: 'description', content: 'Page description' }],
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.font.im/css?family=Comfortaa|Marcellus|Playfair+Display:400i',
    },
  ],
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
  transition: all 0.22s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(18px);
}
</style>
