<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const width = ref(window.innerWidth)

const updateWidth = () => {
  width.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', updateWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateWidth)
})

const currentWidth = computed(() => width.value)
</script>

<template>
  <div
    class="absolute w-full h-full bg-black/100 z-[1000]"
    v-if="currentWidth < 600"
  >
    <div class="flex h-[100vh] flex-col justify-center items-center gap-1">
      <div class="items-center flex gap-2">
        <Icon class="text-lg" name="uim:web-grid" /> 响应式及移动端施工中
      </div>

      <div>请您使用电脑端打开, 谢谢!</div>

      <div class="text-purple-200 flex gap-[1px]">
        <span class="text-neutral-500 opacity-75">https://</span>
        nescraft.cn
      </div>
    </div>
  </div>

  <div v-else class="layout-base relative">
    <ComHeader />
    <main>
      <slot />
    </main>
    <ComFooter />

    <div
      class="absolute grayscale-[99%] overflow-hidden w-full h-full z-[-1] opacity-75 contrast-[165%] dark:invert-0 invert"
    >
      <ComCoolBg class="scale-[150%] translate-x-[25%]"></ComCoolBg>
      <div
        class="fixed inset-0 w-[100vw] h-[100vh] bg-gradient-to-b from-black to-transparent z-2"
      ></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout-base {
  @apply min-h-[100vh] min-w-[900px];
  @apply flex flex-col;
}
</style>
