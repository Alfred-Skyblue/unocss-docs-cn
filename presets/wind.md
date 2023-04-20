---
title: Wind 预设
description: UnoCSS 的 Tailwind / Windi CSS 紧凑预设 (@unocss/preset-wind).
outline: deep
---

# Wind 预设

用于 UnoCSS 的 TailWind/Windi CSS 预设。

[源码](https://github.com/unocss/unocss/tree/main/packages/preset-wind)

::: info
该预设继承 [`@unocss/preset-mini`](/presets/mini)。
:::

## 安装

::: code-group

```bash [pnpm]
pnpm add -D @unocss/preset-wind
```

```bash [yarn]
yarn add -D @unocss/preset-wind
```

```bash [npm]
npm install -D @unocss/preset-wind
```

:::

```ts
// uno.config.ts
import { defineConfig } from 'unocss'
import presetWind from '@unocss/preset-wind'

export default defineConfig({
  presets: [presetWind()]
})
```

::: tip
该预设已经包含在 unocss 包中，您也可以从那里导入：

```ts
import { presetWind } from 'unocss'
```

:::

## 规则

该预设与 [Tailwind CSS](https://tailwindcss.com/) 和 [Windi CSS](https://windicss.org/) 兼容，您可以参考它们的 [文档](https://tailwindcss.com/docs) 获取详细的使用信息。

有关此预设中包含的所有规则和预设，请参见我们的[交互式文档](/interactive/)或直接转到[源码](https://github.com/unocss/unocss/tree/main/packages/preset-wind)。

## 与 Windi CSS 的不同之处

### 断点

| Windi CSS | UnoCSS      |
| :-------- | :---------- |
| `<sm:p-1` | `lt-sm:p-1` |
| `@lg:p-1` | `at-lg:p-1` |
| `>xl:p-1` | `lg:p-1`    |

### 方括号语法中的空格

该预设使用 `_` 而不是 `,` 来表示方括号语法中的空格。

| Windi CSS                          | UnoCSs                             |
| :--------------------------------- | :--------------------------------- |
| `grid-cols-[1fr,10px,max-content]` | `grid-cols-[1fr_10px_max-content]` |

由于某些 CSS 规则需要 `,` 作为值的一部分，例如 `grid-cols-[repeat(3,auto)]`。

## 实验性特性

::: warning
该预设包含可能随时以破坏性方式更改的实验性特性。
:::

### 媒体悬停

媒体悬停解决了移动端触摸包含悬停样式的目标后，悬停样式将一直持续到其他地方触摸的[粘滞悬停](https://css-tricks.com/solving-sticky-hover-states-with-media-hover-hover/)问题。

由于常规的 `:hover` 样式可能被广泛使用，该变体使用 `@hover` 语法来区别于常规的 `hover` 伪类。

变体 `@hover-text-red` 将输出：

```css
@media (hover: hover) and (pointer: fine) {
  .\@hover-text-red:hover {
    --un-text-opacity: 1;
    color: rgba(248, 113, 113, var(--un-text-opacity));
  }
}
```

## Options

::: info
这些预设选项继承自 [`@unocss/preset-mini`](/presets/mini#options)。
:::
