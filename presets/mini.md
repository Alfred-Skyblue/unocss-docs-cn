---
title: Mini 预设
description: The minimal preset for UnoCSS (@unocss/preset-mini).
outline: deep
---

# Mini 预设

这是 UnoCSS 的基本预设，仅包含最基本的实用工具。

[源码](https://github.com/unocss/unocss/tree/main/packages/preset-mini)

## 安装

::: code-group

```bash [pnpm]
pnpm add -D @unocss/preset-mini
```

```bash [yarn]
yarn add -D @unocss/preset-mini
```

```bash [npm]
npm install -D @unocss/preset-mini
```

:::

```ts
// uno.config.ts
import { defineConfig } from 'unocss'
import presetMini from '@unocss/preset-mini'

export default defineConfig({
  presets: [
    presetMini()
    // ...other presets
  ]
})
```

::: tip
此预设已包含在 `unocss` 包中，您也可以从中导入它：

```ts
import { presetMini } from 'unocss'
```

:::

## 规则

此预设是 [`@unocss/preset-wind`](/presets/wind) 的子集，仅包含与 CSS 属性对齐的最基本实用工具，但不包括 Tailwind 中引入的有争议或复杂的实用工具（`container`、`animation`、`gradient` 等）。这可以是一个良好的起点，用于在熟悉的 Tailwind CSS 或 Windi CSS 工具类之上构建自己的自定义预设。

## 特点

### 暗黑模式

默认情况下，此预设生成基于类的暗黑模式，并带有 `dark:` 变体。

```html
<div class="dark:bg-red:10" />
```

将生成：

```css
.dark .dark\:bg-red\:10 {
  background-color: rgba(248, 113, 113, 0.1);
}
```

要选择基于媒体查询的暗黑模式，您可以使用 `@dark:` 变体：

```html
<div class="@dark:bg-red:10" />
```

```css
@media (prefers-color-scheme: dark) {
  .\@dark\:bg-red\:10 {
    background-color: rgba(248, 113, 113, 0.1);
  }
}
```

或使用 `dark:` 变体的全局配置设置

```ts
presetMini({
  dark: 'media'
})
```

### CSS @layer

支持 [CSS 的原生 @layer](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer) 并使用变体 `layer-xx:`

```html
<div class="layer-foo:p4" />
<div class="layer-bar:m4" />
```

将生成：

```css
@layer foo {
  .layer-foo\:p4 {
    padding: 1rem;
  }
}
@layer bar {
  .layer-bar\:m4 {
    margin: 1rem;
  }
}
```

### 主题

您可以在您的配置中完全自定义主题属性，UnoCSS 最终将深度合并它到默认主题中。

<!--eslint-skip-->

```ts
presetMini({
  theme: {
    // ...
    colors: {
      veryCool: '#0000ff', // class="text-very-cool"
      brand: {
        primary: 'hsla(var(--hue, 217), 78%, 51%)' //class="bg-brand-primary"
      }
    }
  }
})
```

在规则中使用主题:

```ts
rules: [
  [
    /^text-(.*)$/,
    ([, c], { theme }) => {
      if (theme.colors[c]) return { color: theme.colors[c] }
    }
  ]
]
```

::: warning
需要注意的是，UnoCSS 允许用户完全控制 `breakpoints`。当提供自定义的 `breakpoints` 时，将覆盖默认值而不是合并。
:::

通过以下示例，您将只能使用 sm:和 md:断点变体：

```ts
presetMini({
  theme: {
    // ...
    breakpoints: {
      sm: '320px',
      md: '640px'
    }
  }
})
```

::: info
`verticalBreakpoints` 与 `breakpoints` 相同，但是针对垂直布局。
:::

## Options

### dark

- **Type:** `class | media | DarkModeSelectors`
- **Default:** `class`

暗模式选项。它可以是 `class`、`media` 或自定义选择器对象(`DarkModeSelectors`)。

```ts
interface DarkModeSelectors {
  /**
   * 亮色主题选择器。
   *
   * @default '.light'
   */
  light?: string

  /**
   * 暗色主题选择器。
   *
   * @default '.dark'
   */
  dark?: string
}
```

### attributifyPseudo

- **Type:** `Boolean`
- **Default:** `false`

生成伪选择器作为 `[group=""]` 而不是 `.group`。

### variablePrefix

- **Type:** `string`
- **Default:** `un-`

CSS 变量的前缀。

### prefix

- **Type:** `string | string[]`
- **Default:** `undefined`

工具类前缀

### preflight

- **Type:** `boolean`
- **Default:** `true`

生成预设样式。
