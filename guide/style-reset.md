---
title: 样式重置
description: UnoCSS 在默认情况下不提供样式重置或预检以获得最大的灵活性，并且不会填充您的全局 CSS。
outline: deep
---

# 浏览器样式重置

UnoCSS 默认情况下不提供样式重置或预检以实现最大灵活性，并且不会填充全局 CSS。如果您将 UnoCSS 与其他 CSS 框架一起使用，它们可能已经为您完成了重置。如果您单独使用 UnoCSS，则可以使用 [Normalize.css](https://github.com/csstools/normalize.css)等重置库。

我们还为您提供了一些快速选择的样式重置：

## 安装

::: code-group

```bash [pnpm]
pnpm add @unocss/reset
```

```bash [yarn]
yarn add @unocss/reset
```

```bash [npm]
npm install @unocss/reset
```

:::

## Usage

您可以在 `main.js` 中添加以下任意一个重置样式表。

### normalize.css

来源: https://github.com/csstools/normalize.css

```ts
import '@unocss/reset/normalize.css'
```

### sanitize.css

来源: https://github.com/csstools/sanitize.css

```ts
import '@unocss/reset/sanitize/sanitize.css'
import '@unocss/reset/sanitize/assets.css'
```

### Eric Meyer

来源: https://meyerweb.com/eric/tools/css/reset/index.html

```ts
import '@unocss/reset/eric-meyer.css'
```

### Tailwind

```ts
import '@unocss/reset/tailwind.css'
```

### Tailwind compat

```ts
import '@unocss/reset/tailwind-compat.css'
```

这个样式表基于 [Tailwind reset](#tailwind)，只是去除了按钮的背景颜色覆盖，以避免与 UI 框架发生冲突。请[参阅链接的问题 #2127](https://github.com/unocss/unocss/issues/2127).。

::: code-group

```css [Before]
button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}
```

```css [After]
button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button; /* 1 */
  /*background-color: transparent; !* 2 *!*/
  background-image: none; /* 2 */
}
```

:::
