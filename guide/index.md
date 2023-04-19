---
title: 指南
description: UnoCSS 入门
---

# 什么是 UnoCSS？

UnoCSS 是一个即时的原子化 CSS 引擎，旨在灵活和可扩展。核心是不拘一格的，所有的 CSS 工具类都是通过预设提供的。

例如，您可以通过在您的本地 [配置文件](/guide/config-file) 中提供规则来定义自定义 CSS 工具类。

```ts
// uno.config.ts
import { defineConfig } from 'unocss'

export default defineConfig({
  rules: [
    ['m-1', { margin: '1px' }]
  ],
})
```
这将在您的项目中添加一个新的 CSS 工具类 m-1。由于 UnoCSS 是按需加载的，它在您的代码库中不使用它之前不会产生任何作用。因此，假设我们有一个像这样的组件：

```html
<div class="m-1">Hello</div>
```

`m-1` 将被检测到，并生成以下 CSS：

```css
.m-1 { margin: 1px; }
```
为了使它更加灵活，您可以通过将规则的第一个参数（我们称之为匹配器）更改为正则表达式，并将其主体更改为函数，从而使规则变得动态化，例如：

```diff
// uno.config.ts
export default defineConfig({
  rules: [
-    ['m-1', { margin: '1px' }]
+    [/^m-([\.\d]+)$/, ([_, num]) => ({ margin: `${num}px` })],
  ],
})
```
通过这样做，现在您可以拥有任意的 margin 工具，如 `m-1`、`m-100` 或 `m-52.43`。并且，UnoCSS 只在您使用它们时才会生成这些工具。


```html
<div class="m-1">Hello</div>
<div class="m-7.5">World</div>
```

```css
.m-1 { margin: 1px; }
.m-7.5 { margin: 7.5px; }
```

## 预设
一旦您创建了一些规则，您可以将它们提取到一个预设中，并与他人分享。例如，您可以为您公司的设计系统创建一个预设，并与您的团队共享。


```ts
// my-preset.ts
import { Preset } from 'unocss'

export const myPreset: Preset = {
  name: 'my-preset',
  rules: [
    [/^m-(\d+)$/, ([_, num]) => ({ margin: `${num}px` })],
    [/^p-(\d+)$/, ([_, num]) => ({ padding: `${num}px` })],
  ],
  variants: [/* ... */],
  shortcuts: [/* ... */]
  // ...
}
```

```ts
// uno.config.ts
import { defineConfig } from 'unocss'
import { myPreset } from './my-preset'

export default defineConfig({
  presets: [
    myPreset // 您自己的预设
  ],
})
```
类似地，我们为您提供了一些官方预设，供您立即开始使用，您还可以找到许多有趣的社区预设。
同样的，我们提供了一些[官方预设](/presets/)让你马上开始使用，你也可以找到很多有趣的[社区预设](/presets/#community).

## 玩转

您可以在浏览器中尝试 UnoCSS，在<a href="/play/" target="_blank">Playground</a>中。或者在<a href="/interactive/" target="_blank">交互文档</a>中查找默认预设中的工具。


## 安装

UnoCSS 针对多种框架提供了许多集成方式：

<!-- // TODO: make a grid with icons -->

- [Vite](/integrations/vite)
- [Nuxt](/integrations/nuxt)
- [Astro](/integrations/astro)
- [Webpack](/integrations/webpack)
- [CLI](/integrations/cli)
- [PostCSS](/integrations/postcss)
- [CDN Runtime](/integrations/runtime)
