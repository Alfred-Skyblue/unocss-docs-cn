---
title: 变体组转换器
description: 为 UnoCSS 启用 Windi CSS 的变体组特性  (@unocss/transformer-variant-group)
---

# 变体组转换器

为 UnoCSS 启用 Windi CSS 的 [变体组特性](https://windicss.org/features/variant-groups.html)。

## 安装

::: code-group
  ```bash [pnpm]
  pnpm add -D @unocss/transformer-variant-group
  ```
  ```bash [yarn]
  yarn add -D @unocss/transformer-variant-group
  ```
  ```bash [npm]
  npm install -D @unocss/transformer-variant-group
  ```
:::

```ts
// uno.config.ts
import { defineConfig } from 'unocss'
import transformerVariantGroup from '@unocss/transformer-variant-group'

export default defineConfig({
  // ...
  transformers: [
    transformerVariantGroup(),
  ],
})
```

## 使用方法

```html
<div class="hover:(bg-gray-400 font-medium) font-(light mono)"/>
```

将被转换为：

```html
<div class="hover:bg-gray-400 hover:font-medium font-light font-mono"/>
``` 

## License

- MIT License &copy; 2021-PRESENT [Anthony Fu](https://github.com/antfu)
