import { createDirectus, rest } from '@directus/sdk'

interface Blog {
  id: number
  title: string
  content: string
}

interface ApiCollections {
  blog: Blog
}

export const client = createDirectus('http://nescraft.cn:8055').with(rest())

export const dirAssetsSrc = (src: string) => {
  return `http://nescraft.cn:8055/assets/${src}`
}
