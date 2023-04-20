---
title: Rem 转 px 预设
description: 将所有工具类的 rem 转换为 px (@unocss/preset-rem-to-px)。
outline: deep
---

# Rem 转 px 预设

将所有工具类的 rem 转换为 px。

[源码](https://github.com/unocss/unocss/tree/main/packages/preset-rem-to-px)

## 安装

::: code-group

```bash [pnpm]
pnpm add -D @unocss/preset-rem-to-px
```

```bash [yarn]
yarn add -D @unocss/preset-rem-to-px
```

```bash [npm]
npm install -D @unocss/preset-rem-to-px
```

:::

```ts
// uno.config.ts
import { defineConfig } from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
  presets: [
    presetRemToPx()
    // ...other presets
  ]
})
```

## 使用

```html
<div class="m-2"></div>
```

::: code-group

```css [Without]
.m-2 {
  margin: 0.5rem;
}
```

```css [With]
.m-2 {
  margin: 8px;
}
```

:::

## Options

### baseFontSize

- **Type:** `number`
- **Default:** `16`

用于将 rem 转换为 px 的基础字体大小(`1rem = n px`)。
