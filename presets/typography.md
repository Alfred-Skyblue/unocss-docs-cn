---
title: 排版预设
description: UnoCSS (@unocss/preset-typography)的排版类。
outline: deep
---

# 排版预设

提供了一组文本排版类，您可以使用它们将排版默认设置添加到普通 HTML 中。

[源码](https://github.com/unocss/unocss/tree/main/packages/preset-typography)

## 安装

::: code-group

```bash [pnpm]
pnpm add -D @unocss/preset-typography
```

```bash [yarn]
yarn add -D @unocss/preset-typography
```

```bash [npm]
npm install -D @unocss/preset-typography
```

:::

::: tip
此预设包含在 `unocss` 包中，您也可以从中导入：

```ts
import { presetTypography } from 'unocss'
```

:::

## 使用方法

```js
// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetUno
} from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify(), // 使用attribute模式时必须
    presetUno(), // 必须
    presetTypography()
  ]
})
```

::: code-group

```html [Classes]
<article class="text-base prose prose-truegray xl:text-xl">
  {{ markdown }}
  <p class="not-prose">一些文本</p>
</article>
```

```html [Attributes]
<article text-base prose prose-truegray xl="text-xl">
  {{ markdown }}
  <p class="not-prose">一些文本</p>
</article>
```

:::

::: warning
注意：`not-prose` 只能作为类名使用，不能作为属性名。
:::

## 亮点

### 任意字体大小

使用任意您喜欢的正文字号，并且 `prose` 将为相应的 HTML 元素缩放样式。例如，`prose text-lg` 具有正文字号 `1.125rem`，`h1` 将按比例 2.25 倍缩放。请参考[支持的所有 HTML 元素](https://github.com/unocss/unocss/blob/main/packages/preset-typography/src/preflights/default.ts)。

### 任意颜色

使用 UnoCSS 的 `prose-${colorName}` 应用任意颜色（例如，`prose-coolgray`，`prose-sky`），因为 `prose` 默认没有任何颜色。请参见[所有可用颜色](#colors)。例如，`prose prose-truegray` 将使用相应的颜色为相应的 HTML 元素。

### 单一工具实现暗模式

使用 `prose-invert` 实现排版暗模式（背景色需要用户处理）。例如，`prose dark:prose-invert` 将在暗模式下使用反转颜色。

### 您自己的样式

`prose` 没有设置默认样式，因此不在 `prose` 中的元素样式将保持不变，就像 UnoCSS 一样。

### 使用 `not` 工具撤销样式

将 `not-prose` 应用于元素可撤销其应用的排版样式。例如，`<table class="not-prose">` 将跳过此预设为 `table` 元素应用的样式 **（注意：`not` 工具只能在类中使用，因为它只用于 CSS 选择器，而不被 UnoCSS 扫描）**。

### 兼容选项

此预设使用一些不被广泛支持的伪类，但你可以禁用它们。([#2064](https://github.com/unocss/unocss/pull/2064))

- 如果启用了 `noColonNot` 或 `noColonWhere`，则 `not-prose` 将不可用。
- 如果启用了 `noColonIs`，则属性模式的行为将出现错误。

## Utilities

|  规则   |                                                  此规则的样式                                                   |
| :-----: | :-------------------------------------------------------------------------------------------------------------: |
| `prose` | 参考 [GitHub](https://github.com/unocss/unocss/blob/main/packages/preset-typography/src/preflights/default.ts). |

### Colors

| 规则 (color)    |
| --------------- |
| `prose-rose`    |
| `prose-pink`    |
| `prose-fuchsia` |
| `prose-purple`  |
| `prose-violet`  |
| `prose-indigo`  |
| `prose-blue`    |
| `prose-sky`     |
| `prose-cyan`    |
| `prose-teal`    |
| `prose-emerald` |
| `prose-green`   |
| `prose-lime`    |
| `prose-yellow`  |
| `prose-amber`   |
| `prose-orange`  |
| `prose-red`     |
| `prose-gray`    |
| `prose-slate`   |
| `prose-zinc`    |
| `prose-neutral` |
| `prose-stone`   |

## Options

此预设具有 `selectorName` 和 `cssExtend` 配置，供喜欢覆盖或扩展的用户使用。

:::tip
传递给 `cssExtend` 的 CSS 声明将会

- 如果值冲突，则**覆盖**内置样式，否则
- 与内置样式**深度合并**
  :::

### selectorName

- **Type:** `string`
- **Default:** `prose`

用于应用排版工具的类名。要取消元素的样式，请使用 `not-${selectorName}`，默认为 `not-prose`。

:::tip
`not` 工具仅在类中可用。
:::

### cssExtend

- **Type:** `Record<string, CSSObject>`
- **Default:** `undefined`

使用 CSS 声明块扩展或覆盖 CSS 选择器。

### compatibility

- **Type:** `TypographyCompatibilityOptions`
- **Default:** `undefined`

请参考[兼容选项](#兼容选项)。

:::warning
请注意，它将影响一些功能。
:::

```ts
interface TypographyCompatibilityOptions {
  noColonWhere?: boolean
  noColonIs?: boolean
  noColonNot?: boolean
}
```

## 示例

```ts
// uno.config.ts
import { defineConfig, presetAttributify, presetUno } from 'unocss'
import { presetTypography } from '@unocss/preset-typography'

export default defineConfig({
  presets: [
    presetAttributify(), // 如果使用属性模式，则必需
    presetUno(), // 必需
    presetTypography({
      selectorName: 'markdown', // 现在可以使用类似于`markdown markdown-gray`，`not-markdown`的方式
      // cssExtend是一个对象，其CSS选择器作为键，CSS声明块作为值，就像编写普通CSS一样。
      cssExtend: {
        code: {
          color: '#8b5cf6'
        },
        'a:hover': {
          color: '#f43f5e'
        },
        'a:visited': {
          color: '#14b8a6'
        }
      }
    })
  ]
})
```

## 鸣谢

- [TailwindCSS Typography](https://github.com/tailwindlabs/tailwindcss-typography)
- [WindiCSS Typography](https://github.com/windicss/windicss/tree/main/src/plugin/typography)
