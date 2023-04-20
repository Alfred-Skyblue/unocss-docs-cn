---
title: Tagify 预设
description: UnoCSS 的 Tagify 模式 (@unocss/preset-tagify)。
outline: deep
---

# Tagify 预设

该预设可为其他预设启用 [标签化模式](#tagify-预设)。

[源码](https://github.com/unocss/unocss/tree/main/packages/preset-tagify)

## 安装

```bash
npm i -D @unocss/preset-tagify
```

```ts
// uno.config.ts
import { defineConfig } from 'unocss'
import presetTagify from '@unocss/preset-tagify'

export default defineConfig({
  presets: [
    presetTagify({
      /* options */
    })
    // ...other presets
  ]
})
```

## 标签化模式

当您只需要将单个 unocss 规则应用于元素时，该预设会非常有用。

```html
<span class="text-red">red text</span>
<div class="flex">flexbox</div>
I'm feeling
<span class="i-line-md-emoji-grin"></span>
today!
```

使用 Tagify 模式，您可以将 CSS 样式嵌入 HTML 标签：

```html
<text-red>red text</text-red>
<flex>flexbox</flex>
I'm feeling
<i-line-md-emoji-grin />
today!
```

上面的 HTML 与您预期的完全一样。

## 带前缀

```js
presetTagify({
  prefix: 'un-'
})
```

```html
<!-- this will be matched -->
<un-flex></un-flex>
<!-- this will not be matched -->
<flex></flex>
```

## 额外属性

您可以将额外的属性注入到匹配规则中：

```js
presetTagify({
  // adds display: inline-block to matched icons
  extraProperties: matched =>
    matched.startsWith('i-') ? { display: 'inline-block' } : {}
})
```

```js
presetTagify({
  // extraProperties can also be a plain object
  extraProperties: { display: 'block' }
})
```

## Options

### prefix

- **Type:** `string`

Tagify 变量使用的前缀。

### excludedTags

- **Type:** `string[] | RegExp[]`
- **Default:** `['b', /^h\d+$/, 'table']`

要排除处理的标签。

### extraProperties

- **Type:** `Record<string, string> | ((matched: string) => Partial<Record<string, string>>)`

要应用于匹配规则的额外 CSS 属性。

### defaultExtractor

- **Type:** `boolean`
- **Default:** `true`

启用默认提取器。
