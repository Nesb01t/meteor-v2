const techIcons = {
  // portfolio maintain
  vue: 'logos:vue',
  react: 'logos:react',
  angular: 'logos:angular-icon',
  javascript: 'logos:javascript',
  typescript: 'logos:typescript-icon',
  python: 'logos:python',
  nodejs: 'logos:nodejs-icon',
  html5: 'vscode-icons:file-type-html',
  css3: 'vscode-icons:file-type-css',
  git: 'logos:git-icon',
  github: 'mdi:github',
  gitlab: 'logos:gitlab',
  docker: 'logos:docker-icon',
  kubernetes: 'logos:kubernetes',
  aws: 'logos:aws',
  googlecloud: 'logos:google-cloud',
  azure: 'logos:microsoft-azure',
  mongodb: 'vscode-icons:file-type-mongo',
  postgresql: 'logos:postgresql',
  mysql: 'logos:mysql',
  redis: 'logos:redis',
  sass: 'logos:sass',
  webpack: 'logos:webpack',
  vite: 'logos:vitejs',
  tailwindcss: 'logos:tailwindcss-icon',
  koa: 'logos:nodejs-icon',
  elementplus: 'logos:element',
  astro: 'logos:astro-icon',
  daisyui: 'game-icons:daisy',
  ionic: 'logos:ionic-icon',
  capacitor: 'logos:capacitorjs-icon',
  vueuse: 'logos:vueuse',
  ktor: 'logos:ktor-icon',
  kotlin: 'logos:kotlin-icon',
  nuxtjs: 'logos:nuxt-icon',
  pwa: 'logos:pwa',
  ios: 'logos:apple-app-store',
  tauri: 'logos:tauri',
  avaloniaui: 'logos:uikit',
  dotnet: 'logos:dotnet',
  win32: 'logos:microsoft-windows-icon',
  'c++': 'logos:c-plusplus',
  'c#': 'logos:c-sharp',
  java: 'logos:java',
  gradle: 'logos:gradle',

  // blog maintain
  minecraft: 'mdi:minecraft',
  frontend: 'skill-icons:html',
  linux: 'logos:linux-tux',
  tool: 'mdi:collage',
  other: 'mdi:file-cad-box',
  course: 'mdi:cloud-braces',
  unreal: 'logos:unrealengine-icon',
  backend: 'mdi:server',
  game: 'mdi:gamepad-variant',
  livelong: 'mdi:heart-pulse',
}

const techIconFillColor = {
  minecraft: '#009900',
  tool: '#990088',
  other: '#bb0000',
  course: '#00aaaa',
  backend: '#bb3300',
  game: '#009900',
  livelong: '#ff0000',
}

const postTagColor = {
  minecraft: '#009900',
  frontend: '#009900',
  linux: '#009900',
  tool: '#990088',
  other: '#bb0000',
  course: '#00aaaa',
  unreal: '#009900',
  backend: '#bb3300',
  game: '#009900',
  livelong: '#ff0000',
}

export const getIconName = (tech?: string) => {
  const lowerCase = tech?.toLowerCase() as string
  return (techIcons as any)?.[`${lowerCase}`] || 'mdi:help-circle'
}

export const getIconFillColor = (tech?: string) => {
  const lowerCase = tech?.toLowerCase() as string
  return (techIconFillColor as any)?.[`${lowerCase}`] || '#000000'
}

export const getTagColor = (tag?: string | string[]) => {
  if (Array.isArray(tag) && tag.length > 1) {
    return '#000000'
  }

  const firstTag = Array.isArray(tag) ? tag[0] : tag
  const lowerCase = firstTag?.toLowerCase() as string
  return (postTagColor as any)?.[`${lowerCase}`] || '#000000'
}
