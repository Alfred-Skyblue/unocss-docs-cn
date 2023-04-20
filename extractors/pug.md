---
title: Pug 提取器
description: UnoCSS 的 Pug 提取器 (@unocssextractor-pug)
---

# Pug 提取器

UnoCSS 的 Pug 提取器: `@unocss/extractor-pug`。

## Installation

::: code-group

```bash [pnpm]
pnpm add -D @unocss/extractor-pug
```

```bash [yarn]
yarn add -D @unocss/extractor-pug
```

```bash [npm]
npm install -D @unocss/extractor-pug
```

:::

## 使用

```ts
import { defineConfig } from 'unocss'
import { extractorSplit } from '@unocss/core'
import extractorPug from '@unocss/extractor-pug'

export default defineConfig({
  extractors: [extractorPug(), extractorSplit]
})
```
