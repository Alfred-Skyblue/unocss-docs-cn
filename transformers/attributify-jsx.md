---
title: Attributify JSX transformer
description: 支持在 JSX/TSX 中使用无值的 attributify (@unocss/transformer-attributify-jsx)
---

#  Attributify JSX 转换器

支持在 JSX/TSX 中使用 [无值的 attributify](/presets/attributify#无值属性)：`@unocss/transformer-attributify-jsx`。

## 介绍

<!-- @unocss-ignore -->

```jsx
export function Component() {
	return (
			<div text-red text-center text-5xl animate-bounce>
				unocss
			</div>
	)
}
```

将被转换为：

```jsx
export function Component() {
  return (
    <div text-red="" text-center="" text-5xl="" animate-bounce="">
      unocss
    </div>
  )
}
```

::: details 如果没有这个转换器，JSX 会将无值属性视为布尔属性。
```jsx
export function Component() {
  return (
    <div text-red={true} text-center={true} text-5xl={true} animate-bounce={true}>
      unocss
    </div>
  )
}
```
:::

## 安装

::: code-group
  ```bash [pnpm]
  pnpm add -D @unocss/transformer-attributify-jsx
  ```
  ```bash [yarn]
  yarn add -D @unocss/transformer-attributify-jsx
  ```
  ```bash [npm]
  npm install -D @unocss/transformer-attributify-jsx
  ```
:::

```ts{12}
// uno.config.ts
import { defineConfig, presetAttributify } from 'unocss'
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx'

export default defineConfig({
  // ...
  presets: [
    // ...
    presetAttributify()
  ],
  transformers: [
    transformerAttributifyJsx(), // <--
  ],
})
```

## 注意事项

::: warning
The rules are almost the same as those of [Attributify preset](/presets/attributify), but there are several precautions.

规则与 [属性化预设](/presets/attributify) 几乎相同，但有一些需要注意的地方。
:::

```html
<div translate-x-100% /> <!-- 不能以 `%` 结尾 -->

<div translate-x-[100px] /> <!-- 不能包含 `[` 或 `]` -->
```

Instead, you may want to use valued attributes instead:

```html
<div translate="x-100%" />

<div translate="x-[100px]" />
```

## 黑名单

该转换器只会转换有效的 UnoCSS 工具类属性。您还可以通过 `blocklist` 属性来屏蔽某些属性，防止它们被转换。

```js
transformerAttributifyJsx({
  blocklist: [/text-[a-zA-Z]*/, 'text-5xl']
})
```

```jsx
<div text-red text-center text-5xl animate-bounce>
  unocss
</div>
```

将被编译为：

```html
<div text-red text-center text-5xl animate-bounce="">
  unocss
</div>
```

## License

- MIT License &copy; 2021-PRESENT [Anthony Fu](https://github.com/antfu)
