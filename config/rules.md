---
title: 规则
description: Writing custom rules for UnoCSS is super easy.
---

# 规则

规则定义了 UnoCSS 在代码库中查找和生成 CSS 的方式。

## 静态规则

使用以下示例：

```ts
rules: [
  ['m-1', { margin: '0.25rem' }],
]
```

无论何时在用户的代码库中检测到 `m-1`，将生成以下 CSS：

```css
.m-1 { margin: 0.25rem; }
```

## 动态规则

为了使它更智能，将匹配器更改为正则表达式，将正文更改为函数：

```ts
rules: [
  [/^m-(\d+)$/, ([, d]) => ({ margin: `${d / 4}rem` })],
  [/^p-(\d+)$/, match => ({ padding: `${match[1] / 4}rem` })],
]
```

函数体的第一个参数是匹配结果，你可以解构它以获取匹配的组。

例如，使用以下用法：

```html
<div class="m-100">
  <button class="m-3">
    <icon class="p-5" />
    My Button
  </button>
</div>
```

将生成相应的 CSS：

```css
.m-100 { margin: 25rem; }
.m-3 { margin: 0.75rem; }
.p-5 { padding: 1.25rem; }
```

恭喜！现在你拥有了自己的强大的原子 CSS 实用工具，尽情享用吧！

## 完全控制的规则

::: warning
这是一个高级功能，在大多数情况下不需要它。
:::

当你确实需要一些无法由[动态规则](#动态规则)和[自定义变体](#custom-variants)的组合涵盖的高级规则时，我们也提供了一种方式，为你提供完全控制生成 CSS 的方式。

从动态规则的函数体中返回一个字符串，它将直接传递给生成的 CSS。这也意味着你需要注意诸如 CSS 转义、变体应用、CSS 构造等问题。

```ts
// uno.config.ts
import { defineConfig, toEscapedSelector as e } from 'unocss'

export default defineConfig({
  rules: [
    [/^custom-(.+)$/, ([, name], { rawSelector, currentSelector, variantHandlers, theme }) => {
      // 丢弃不匹配的规则
      if (name.includes('something'))
        return

      // 如果你想的话，可以禁用这个规则的变体
      if (variantHandlers.length)
        return
      const selector = e(rawSelector)
      // 返回一个字符串而不是对象
      return `
${selector} {
  font-size: ${theme.fontSize.sm};
}
/* 你可以有多条规则 */
${selector}::after {
  content: 'after';
}
.foo > ${selector} {
  color: red;
}
/* 或媒体查询 */
@media (min-width: ${theme.breakpoints.sm}) {
  ${selector} {
    font-size: ${theme.fontSize.sm};
  }
}
`
    }],
  ],
})
```

您可能需要阅读一些代码才能充分利用它。

## 排序

UnoCSS尊重您在生成CSS中定义的规则的顺序。后定义的规则具有更高的优先级。

## 规则合并

默认情况下，UnoCSS将合并具有相同属性的CSS规则，以最小化CSS大小。

例如，`<div class="m-2 hover:m2">` 将生成以下CSS规则：

```css
.hover\:m2:hover, .m-2 { margin: 0.5rem; }
```

而不是两个单独的规则：

```css
.hover\:m2:hover { margin: 0.5rem; }
.m-2 { margin: 0.5rem; }
```
