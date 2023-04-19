---
title: UnoCSS CDN 运行时
description: CSS-in-JS runtime of UnoCSS (@unocss/runtime).
outline: deep
---

# 运行时

UnoCSS 运行时提供了一个在浏览器中运行 UnoCSS 引擎的 CDN 构建。它将检测 DOM 的变化并即时生成样式。

## 使用方法

在您的 `index.html` 文件中添加以下代码：


```html
<script src="https://cdn.jsdelivr.net/npm/@unocss/runtime"></script>
```

如果需要配置 UnoCSS（可选）：

```html
<script>
 // 传递 unocss 选项
 window.__unocss = {
    rules: [
        // 自定义规则...
    ],
    presets: [
        // 自定义预设...
    ],
    // ...
 }
</script>

```
默认情况下，将应用 [Uno 预设](/presets/uno)。

运行时不包含预先设置的样式重置。如果您希望有样式重置，您可以添加自己的重置样式，或者使用来自 [Reset 包(/guide/style-reset)] 中的样式重置。

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@unocss/reset/normalize.min.css">
<!-- or -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@unocss/reset/tailwind.min.css">
```

## 构建

针对不同的用例，提供了多个构建版本。

### Core

不包含任何预设：

```html
<script src="https://cdn.jsdelivr.net/npm/@unocss/runtime/core.global.js"></script>
```

### Uno (默认)

包含 `@unocss/preset-uno` 预设:

```html
<script src="https://cdn.jsdelivr.net/npm/@unocss/runtime/uno.global.js"></script>
```

### Attributify

包含 `@unocss/preset-uno` 和 `@unocss/preset-attributify` 预设:

```html
<script src="https://cdn.jsdelivr.net/npm/@unocss/runtime/attributify.global.js"></script>
```

### Mini

包含 `@unocss/preset-mini` 和 `@unocss/preset-attributify` 预设:

```html
<script src="https://cdn.jsdelivr.net/npm/@unocss/runtime/mini.global.js"></script>
```

## 构建器使用方法

```bash
npm i @unocss/runtime
```

```ts
import initUnocssRuntime from '@unocss/runtime'

initUnocssRuntime({ /* options */ })
```

## 防止 FOUC

由于 UnoCSS 在 DOM 出现后运行，可能会出现 "未样式化的内容闪烁"（FOUC），导致用户看到页面未经样式化的情况。

使用 `un-cloak` 属性和 CSS 规则，例如 `[un-cloak] { display: none }` 来隐藏无样式的元素，直到 UnoCSS 为它应用样式。

使用 un-cloak 属性和 CSS 规则，例如 `[un-cloak] { display: none }` 来隐藏未经样式化的元素，直到 UnoCSS 为其应用样式。

```css
[un-cloak] {
  display: none;
}
```

```html
<div class="text-blue-500" un-cloak>
    此文本将仅以蓝色显示。
</div>
```
