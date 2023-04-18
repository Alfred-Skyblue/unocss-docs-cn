---
title: UnoCSS Nuxt Module
description: UnoCSS 的 Nuxt 模块。
---

# Nuxt Module

UnoCSS 的 Nuxt 模块。

## 安装

::: code-group
  ```bash [pnpm]
  pnpm add -D @unocss/nuxt
  ```
  ```bash [yarn]
  yarn add -D @unocss/nuxt
  ```
  ```bash [npm]
  npm install -D @unocss/nuxt
  ```
:::


在您的 Nuxt 配置文件中添加  `@unocss/nuxt` ：

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
  ],
})
```

创建一个 `uno.config.ts` 文件：

```ts
// uno.config.ts
import { defineConfig } from 'unocss'

export default defineConfig({
  // ...UnoCSS 选项
})
```

`uno.css` 入口将会被模块自动注入。

## 支持状态

| | Nuxt 2 | Nuxt Bridge | Nuxt 3 |
| --- | :-- | :-- | :-- |
| Webpack Dev | ✅ | ✅ | 🚧 |
| Webpack Build | ✅ | ✅ | ✅ |
| Vite Dev | - | ✅ | ✅ |
| Vite Build | - | ✅ | ✅ |

## 配置

我们建议使用专用的 uno.config.ts 文件进行配置。详见[配置文件](/guide/config-file)了解更多细节。

## License

- MIT License &copy; 2021-PRESENT [Anthony Fu](https://github.com/antfu)
