<script setup lang="ts">
import { readItems } from '@directus/sdk'
import type { Portfolio } from '~/types/from-directus'
import TaggedGroup from './tagged-group.vue'

// 获取 Portfolio
const portfolio = ref()
const readPortfolio = async () => {
  const res = await client.request<Portfolio>(
    readItems(dirStaticConfig.portfolioCollection),
  )
  return res
}
onMounted(async () => {
  portfolio.value = await readPortfolio()
  taggedGroupList.value = mapTaggedGroupList()
})

// 手动分组
interface PortfolioGroup {
  index: number
  tag: string
  items: Portfolio[]
}
const tagList = dirStaticConfig.portfolioTags
const taggedGroupList = ref<PortfolioGroup[]>([])
const mapTaggedGroupList = (): PortfolioGroup[] => {
  return tagList.map((tag) => ({
    index: tagList.indexOf(tag),
    tag,
    items: portfolio.value.filter((item: Portfolio) => item.tag === tag),
  }))
}
</script>

<template>
  <div class="portfolio">
    <template v-for="m in taggedGroupList" :key="m">
      <TaggedGroup
        class="w-full"
        :tag="m.tag"
        :items="m.items"
        :idx="m.index"
      />
    </template>
  </div>
</template>

<style lang="scss" scoped>
.portfolio {
  @apply w-full px-2 flex flex-col gap-[240px] pb-48;
}
</style>
