import { createDirectus, rest } from '@directus/sdk'

export const dirStaticConfig = {
  blogCollection: 'blog_nesb01t',
  blogTags: [
    'Minecraft',
    'Frontend',
    'Linux',
    'Tool',
    'Other',
    'Course',
    'Unreal',
    'Backend',
  ],
  portfolioCollection: 'portfolio_nesb01t',
  apiUrl: 'https://nescraft.cn:8055',
  portfolioTags: ['Web', 'Desktop', 'Game', 'Other'],
}

export const dirAssetsSrc = (src: string) => {
  return `${dirStaticConfig.apiUrl}/assets/${src}`
}

export const client = createDirectus(dirStaticConfig.apiUrl).with(rest())
