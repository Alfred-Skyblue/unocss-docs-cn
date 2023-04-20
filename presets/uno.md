---
title: Uno 预设
description: UnoCSS的默认预设（@unocss/preset-uno）。
outline: deep
---

# Uno preset

UnoCSS 的默认预设。目前它等同于 [`@unocss/preset-wind`](/presets/wind)

[源码](https://github.com/unocss/unocss/tree/main/packages/preset-uno)

::: info
该预设继承自 [`@unocss/preset-wind`](/presets/wind) 和 [`@unocss/preset-mini`](/presets/mini)。
:::

## 安装

::: code-group

```bash [pnpm]
pnpm add -D @unocss/preset-uno
```

```bash [yarn]
yarn add -D @unocss/preset-uno
```

```bash [npm]
npm install -D @unocss/preset-uno
```

:::

```ts
// uno.config.ts
import { defineConfig } from 'unocss'
import presetUno from '@unocss/preset-uno'

export default defineConfig({
  presets: [presetUno()]
})
```

::: tip
该预设已包含在 `unocss` 包中，您也可以从中导入：

```ts
import { presetUno } from 'unocss'
```

:::

## 用法

该预设尝试提供流行的功能优先框架（包括 Tailwind CSS、Windi CSS、Bootstrap、Tachyons 等）的共同超集。

例如，`ml-3`（Tailwind）、`ms-2`（Bootstrap）、`ma4`（Tachyons）和 `mt-10px`（Windi CSS）都是有效的。

```css
.ma4 {
  margin: 1rem;
}
.ml-3 {
  margin-left: 0.75rem;
}
.ms-2 {
  margin-inline-start: 0.5rem;
}
.mt-10px {
  margin-top: 10px;
}
```

## 规则

该预设与 [Tailwind CSS](https://tailwindcss.com/) 和 [Windi CSS](https://windicss.org/) 兼容，您可以参考它们的[文档](https://tailwindcss.com/docs)以获取详细的使用方法。

有关此预设中包含的所有规则和预设，请参阅我们的[交互式文档](/interactive/)，或直接查看[源码](https://github.com/unocss/unocss/tree/main/packages/preset-uno)。

## Options

::: info
该预设选项继承自[`@unocss/preset-mini`](/presets/mini#options)。
:::

有关默认预设的更多详细信息，请查看我们的 [playground](https://uno.antfu.me/play/) 并尝试。同时，您还可以[查看实现](https://github.com/unocss/unocss/tree/main/packages)。
