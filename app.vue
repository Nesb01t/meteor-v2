<script lang="ts" setup>
import '~/assets/styles/color-theme.scss'

const online = ref(true)
useHead({
  title: online.value ? "Nesb01t's Blog" : '聪明nes的心理帮助小窝',
  meta: [{ name: 'description', content: 'Page description' }],
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.font.im/css?family=Amaranth:400i|Comfortaa|Marcellus',
    },
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css',
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
