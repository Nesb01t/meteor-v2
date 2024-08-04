export interface Post {
  id: string
  title: string
  content: string
  sub_title: string
  tag: string[]
  date_updated: string
  date_created: string

  cover?: string
}

export interface Portfolio {
  id: string
  name: string
  url: string
  description: string
  updated: string
  tag: string
  tech_stack: string[]

  cover?: string
}
