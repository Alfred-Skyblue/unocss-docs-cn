---
title: UnoCSS PostCSS 插件
outline: deep
---

# PostCSS 插件

UnoCSS 的 PostCSS 插件，支持 `@apply`、`@screen` 和 `theme()` 指令。

[源码](https://github.com/unocss/unocss/tree/main/packages/postcss)

::: warning
该包目前处于实验状态，不符合语义化版本规范，并且可能在补丁版本中引入破坏性更改。
:::

## Install

```bash
npm i -D @unocss/postcss
```

```ts
// postcss.config.cjs
module.exports = {
  plugins: {
    '@unocss/postcss': {
      // 可选项
      content: ['**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}']
    }
  }
}
```

```ts
// uno.config.ts
import { defineConfig, presetUno } from 'unocss'

export default defineConfig({
  presets: [presetUno()]
})
```

```css
/* style.css */
@unocss;
```

## 用法

### `@unocss`

`@unocss` 规则是一个占位符，将被生成的 CSS 替换。

您还可以分别注入每个层：

```css
/* style.css */
@unocss preflights;
@unocss default;

/*
  回退层。始终建议包含。
  只有未使用的层将在此处注入。
*/
@unocss;
```

如果您想包含所有层，无论它们之前是否已包含，可以使用 @unocss all。这在需要在多个文件中包含生成的 CSS 时非常有用。

```css
@unocss all;
```

### `@apply`

```css
.custom-div {
  @apply text-center my-0 font-medium;
}
```

将被转换为：

```css
.custom-div {
  margin-top: 0rem;
  margin-bottom: 0rem;
  text-align: center;
  font-weight: 500;
}
```

### `@screen`

`@screen` 指令允许您创建引用您的断点的媒体查询，断点来自 [`theme.breakpoints`](https://github.com/unocss/unocss/blob/main/README.md#extend-theme)。

```css
.grid {
  @apply grid grid-cols-2;
}
@screen xs {
  .grid {
    @apply grid-cols-1;
  }
}
@screen sm {
  .grid {
    @apply grid-cols-3;
  }
}
/* ... */
...
```

将被转换为：

```css
.grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
@media (min-width: 320px) {
  .grid {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
@media (min-width: 640px) {
  .grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
/* ... */
```

#### 断点变体支持

`@screen` 还支持 `lt`、`at` 变体

##### `@screen lt`

```css
.grid {
  @apply grid grid-cols-2;
}
@screen lt-xs {
  .grid {
    @apply grid-cols-1;
  }
}
@screen lt-sm {
  .grid {
    @apply grid-cols-3;
  }
}
/* ... */
```

将被转换为：

```css
.grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
@media (max-width: 319.9px) {
  .grid {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
@media (max-width: 639.9px) {
  .grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
/* ... */
```

##### `@screen at`

```css
.grid {
  @apply grid grid-cols-2;
}
@screen at-xs {
  .grid {
    @apply grid-cols-1;
  }
}
@screen at-xl {
  .grid {
    @apply grid-cols-3;
  }
}
@screen at-xxl {
  .grid {
    @apply grid-cols-4;
  }
}
/* ... */
```

将被转换为：

```css
.grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
@media (min-width: 320px) and (max-width: 639.9px) {
  .grid {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}
@media (min-width: 1280px) and (max-width: 1535.9px) {
  .grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
@media (min-width: 1536px) {
  .grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}
/* ... */
```

### `theme()`

使用 `theme()` 函数使用点表示法访问您的主题配置值。

```css
.btn-blue {
  background-color: theme('colors.blue.500');
}
```

Will be compiled to:

```css
.btn-blue {
  background-color: #3b82f6;
}
```
