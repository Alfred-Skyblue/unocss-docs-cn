---
title: 属性化预设
description: 为其他预设启用属性模式的 UnoCSS 预设。
outline: deep
---

# 属性化预设

这个预设可以为其他预设启用 [`attributify` 模式](#属性化模式)。

[源代码](https://github.com/unocss/unocss/tree/main/packages/preset-attributify)

## 安装

::: code-group
  ```bash [pnpm]
  pnpm add -D @unocss/preset-attributify
  ```
  ```bash [yarn]
  yarn add -D @unocss/preset-attributify
  ```
  ```bash [npm]
  npm install -D @unocss/preset-attributify
  ```
:::

```ts
// uno.config.ts
import presetAttributify from '@unocss/preset-attributify'

export default defineConfig({
  presets: [
    presetAttributify({ /* preset options */ }),
    // ...
  ],
})
```

::: tip
这个预设包含在 unocss 包中，你也可以从那里导入它：

```ts
import { presetAttributify } from 'unocss'
```
:::

## 属性化模式

假设你有一个使用 Tailwind 工具类的按钮。当列表变得越来越长时，它变得很难阅读和维护。

```html
<button class="bg-blue-400 hover:bg-blue-500 text-sm text-white font-mono font-light py-2 px-4 rounded border-2 border-blue-200 dark:bg-blue-500 dark:hover:bg-blue-600">
  Button
</button>
```

使用属性化模式，你可以将工具类分成属性：
```html
<button 
  bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600"
  text="sm white"
  font="mono light"
  p="y-2 x-4"
  border="2 rounded blue-200"
>
  Button
</button>
```
例如，`text-sm text-white` 可以合并为 `text="sm white"`，而无需重复相同的前缀。

## 前缀自引用

对于具有与前缀相同的工具类（如 `flex`、`grid`、`border`）的工具类，提供了一个特殊的 ~ 值。

例如:

```html
<button class="border border-red">
  Button
</button>
```

可以写为:

```html
<button border="~ red">
  Button
</button>
```

## 无值属性

除了 Windi CSS 的属性化模式外，这个预设还支持无值属性。


例如：

```html
<div class="m-2 rounded text-teal-400" />
```

可以写为：

```html
<div m-2 rounded text-teal-400 />
```

::: info
注意：如果您使用的是 JSX，`<div foo>` 可能会转换为 `<div foo={true}>`，这将使从 UnoCSS 生成的 CSS 无法匹配属性。要解决此问题，您可能需要尝试 [`transformer-attributify-jsx`](https://github.com/unocss/unocss/tree/main/packages/transformer-attributify-jsx) 以及此预设。
:::

## 属性冲突

如果属性名称与元素或组件的属性名称发生冲突，您可以在属性名称前添加 `un-` 前缀以指定为 UnoCSS 的属性模式。

例如：

```html
<a text="red">This conflicts with links' `text` prop</a>
<!-- to -->
<a un-text="red">Text color to red</a>
```

默认情况下前缀是可选的，如果要强制使用前缀，可以设置：
```ts
presetAttributify({
  prefix: 'un-',
  prefixedOnly: true, // <--
})
```

您也可以通过以下方式禁用某些属性的扫描：

```ts
presetAttributify({
  ignoreAttributes: [
    'text'
    // ...
  ]
})
```

## TypeScript 支持 (JSX/TSX)

创建 `shims.d.ts` 文件并添加以下内容：

> 默认情况下，类型包括 `@unocss/preset-uno` 中的常见属性。如果您需要自定义属性，请参考[类型源代码]((https://github.com/antfu/unocss/blob/main/packages/preset-attributify/src/jsx.ts)) 实现自己的类型。


### Vue

自 Volar 0.36 版本开始，[它现在会严格检查未知属性](https://github.com/johnsoncodehk/volar/issues/1077#issuecomment-1145361472)。如果要退出，请在项目中添加以下文件：

```ts
// html.d.ts
declare module '@vue/runtime-dom' {
  interface HTMLAttributes {
    [key: string]: any
  }
}
declare module '@vue/runtime-core' {
  interface AllowedComponentProps {
    [key: string]: any
  }
}
export {}
```

### React

```ts
import type { AttributifyAttributes } from '@unocss/preset-attributify'

declare module 'react' {
  interface HTMLAttributes<T> extends AttributifyAttributes {}
}
```

### Vue 3

```ts
import type { AttributifyAttributes } from '@unocss/preset-attributify'

declare module '@vue/runtime-dom' {
  interface HTMLAttributes extends AttributifyAttributes {}
}
```

### SolidJS

```ts
import type { AttributifyAttributes } from '@unocss/preset-attributify'

declare module 'solid-js' {
  namespace JSX {
    interface HTMLAttributes<T> extends AttributifyAttributes {}
  }
}
```

### Svelte & SvelteKit

```ts
declare namespace svelteHTML {
  import type { AttributifyAttributes } from '@unocss/preset-attributify'

  type HTMLAttributes = AttributifyAttributes
}
```

### Astro

```ts
import type { AttributifyAttributes } from '@unocss/preset-attributify'

declare global {
  namespace astroHTML.JSX {
    interface HTMLAttributes extends AttributifyAttributes { }
  }
}
```

### Preact

```ts
import type { AttributifyAttributes } from '@unocss/preset-attributify'

declare module 'preact' {
  namespace JSX {
    interface HTMLAttributes extends AttributifyAttributes {}
  }
}
```

### 属性化前缀

```ts
import type { AttributifyNames } from '@unocss/preset-attributify'

type Prefix = 'uno:' // change it to your prefix

interface HTMLAttributes extends Partial<Record<AttributifyNames<Prefix>, string>> {}
```

## 选项

### strict

- **type:** `boolean`
- **default:** `false`

仅为属性或类生成CSS。

### prefix

- **type:** `string`
- **default:** `'un-'`

用于属性化模式的前缀。

### prefixedOnly

- **type:** `boolean`
- **default:** `false`

仅匹配有前缀的属性。

### nonValuedAttribute

- **type:** `boolean`
- **default:** `true`

支持匹配不带值的属性。

### ignoreAttributes

- **type:** `string[]`

要从提取中忽略的属性列表。

### trueToNonValued

- **type:** `boolean`
- **default:** `false`

如果DOM中实际表示为true，则非带值属性也将匹配。此选项用于支持将非带值属性编码为true的框架。启用此选项将打破以true结尾的规则。

## 鸣谢

 由[@Tahul](https://github.com/Tahul) 和 [@antfu](https://github.com/antfu)提出的初始想法，先前在[Windi CSS](https://windicss.org/posts/v30.html#attributify-mode)中的实现由[@voorjaar](https://github.com/voorjaar)完成。
