---
title: 指令转换器
description: UnoCSS的指令转换器，支持 @apply、@screen 和 theme() 指令 (@unocss/transformer-directives)
outline: deep
---

# 指令转换器

`@unocss/transformer-directives` 是 UnoCSS 的指令转换器，支持 `@apply`、`@screen` 和 `theme()` 指令。

## 安装

::: code-group
  ```bash [pnpm]
  pnpm add -D @unocss/transformer-directives
  ```
  ```bash [yarn]
  yarn add -D @unocss/transformer-directives
  ```
  ```bash [npm]
  npm install -D @unocss/transformer-directives
  ```
:::


```ts
// uno.config.ts
import { defineConfig } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  // ...
  transformers: [
    transformerDirectives(),
  ],
})
```

## 使用

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

#### `--at-apply`

为了与普通的 CSS 兼容，你可以使用 CSS 变量来替换 `@apply` 指令：

```css
.custom-div {
  --at-apply: text-center my-0 font-medium;
}
```

如果你要使用带有 `:` 的规则，则需要将其值用引号括起来：

```css
.custom-div {
  --at-apply: "hover:text-red";
}
```

该功能默认启用了一些别名，您可以通过以下方式配置或禁用它们：

```js
transformerDirectives({
  // the defaults
  applyVariable: ['--at-apply', '--uno-apply', '--uno'],
  // or disable with:
  // applyVariable: false
})
```

### `@screen`

`@screen`指令允许您创建媒体查询，通过名称引用断点，其来自于[`theme.breakpoints`](/config/theme)。

```css
.grid {
  --uno: grid grid-cols-2;
}
@screen xs {
  .grid {
    --uno: grid-cols-1;
  }
}
@screen sm {
  .grid {
    --uno: grid-cols-3;
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

#### 支持断点变体

`@screen`还支持`lt`、`at`变体：

#### `@screen lt-`

```css
.grid {
  --uno: grid grid-cols-2;
}
@screen lt-xs {
  .grid {
    --uno: grid-cols-1;
  }
}
@screen lt-sm {
  .grid {
    --uno: grid-cols-3;
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
#### `@screen at-`

```css
.grid {
  --uno: grid grid-cols-2;
}
@screen at-xs {
  .grid {
    --uno: grid-cols-1;
  }
}
@screen at-xl {
  .grid {
    --uno: grid-cols-3;
  }
}
@screen at-xxl {
  .grid {
    --uno: grid-cols-4;
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

使用`theme()`函数通过点符号访问您的主题配置值。

```css
.btn-blue {
  background-color: theme('colors.blue.500');
}
```

将被编译为：

```css
.btn-blue {
  background-color: #3b82f6;
}
```

## License

- MIT License &copy; 2022-PRESENT [hannoeru](https://github.com/hannoeru)
