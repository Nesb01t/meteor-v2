import { createDirectus, rest } from '@directus/sdk'

export const dirStaticConfig = {
  blogCollection: 'blog_nesb01t',
  portfolioCollection: 'portfolio_nesb01t',
  apiUrl: 'http://nescraft.cn:8055',
  portfolioTags: ['Web'],
}

export const dirAssetsSrc = (src: string) => {
  return `${dirStaticConfig.apiUrl}/assets/${src}`
}

export const client = createDirectus(dirStaticConfig.apiUrl).with(rest())
