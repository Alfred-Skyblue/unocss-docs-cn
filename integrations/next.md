---
title: Next.js
description: UnoCSS 和 Next.js 入门。
---

# Next.js

// TODO: link to examples

UnoCSS 和 Next.js 入门。

## 设置

### 安装 

::: code-group
  ```bash [pnpm]
  pnpm add -D unocss @unocss/webpack
  ```
  ```bash [yarn]
  yarn add -D unocss @unocss/webpack
  ```
  ```bash [npm]
  npm install -D unocss @unocss/webpack
  ```
:::

### 配置 

在项目根目录创建 `uno.config.ts`。

```ts
// uno.config.ts
import {
  defineConfig,
  presetAttributify, presetIcons, presetUno, presetWebFonts
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    // ...
  ],
})
 ```

### 添加插件

然后将 UnoCSS 添加为 webpack 的插件，通过 `next.config.js`。

```js{9}
// next.config.js
const UnoCSS = require('@unocss/webpack').default

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.plugins.push(
      UnoCSS(),
    )
    return config
  },
}

module.exports = nextConfig
```

### 导入样式

然后在 `_app.tsx` 中导入 `uno.css`。

```tsx
// _app.tsx
import '@unocss/reset/tailwind.css'
import 'uno.css'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
```


## 使用

使用 `unocss` 为您的组件添加样式！

```tsx
/* index.tsx */
const Home: NextPage = () => {
  return (
    <>
      <main className="py-20 px-12 text-center flex flex-col items-center gap-20px">
        <span text="blue 5xl hover:red" cursor="default">Nextjs</span>
        <div className="i-carbon-car inline-block" text="4xl" />
        <button className="btn w-10rem">Button</button>
      </main>
    </>
  )
}
```

## 热更新

为了支持 HMR，您需要禁用 webpack 的缓存。

```js{5}
// next.config.js
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
+   config.cache = false
    config.plugins.push(UnoCSS())
    return config
  }
}
```

## 故障排除

### 关于虚拟模块的错误

```bash
Error: ENOENT: no such file or directory, open '.../_virtual_/__uno.css'
```

尝试删除 `.next` 目录并重新启动开发服务器。

### 其他问题

您可能需要将目标升级到至少 `es2015` 在您的 `tsconfig.json` 文件中以构建您的项目。


默认情况下不支持扩展名为 .js 的文件。将您的文件扩展名更改为 .jsx 或尝试使用 `include: \.js` 在您的配置中包含 js 文件。 [了解更多](https://github.com/unocss/unocss#scanning)。

