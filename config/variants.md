---
title: 变体
description: 变体允许您对现有规则应用一些变体
---

# 变体

[变体](https://windicss.org/utilities/general/variants.html) 允许您对现有的规则应用一些变化，例如 Tailwind 中的 `hover:` 变体。

## 示例

<!--eslint-skip-->

```ts
variants: [
  // hover:
  (matcher) => {
    if (!matcher.startsWith('hover:'))
      return matcher
    return {
      // 去掉前缀并将其传递给下一个变体和规则
      matcher: matcher.slice(6),
      selector: s => `${s}:hover`,
    }
  }
],
rules: [
  [/^m-(\d)$/, ([, d]) => ({ margin: `${d / 4}rem` })],
]
```

- `matcher` 控制变体何时启用。如果返回值是字符串，则将其用作匹配规则的选择器。
- `selector` 提供了自定义生成的 CSS 选择器的可用性。

## 内部实现

让我们看看匹配 `hover:m-2` 时发生了什么：

- 用户使用中提取了 `hover:m-2`
- `hover:m-2` 发送给所有变体进行匹配
- `hover:m-2` 被我们的变体匹配并返回 `m-2`
- 结果 `m-2` 将用于下一轮变体匹配
- 如果没有其他变体匹配，`m-2` 将继续匹配规则
- 第一条规则匹配并生成 `.m-2 { margin: 0.5rem; }`
- 最后，我们将我们的变体转换应用于生成的 CSS。在这种情况下，我们将 `:hover` 前缀添加到 `selector` 钩子中。

因此，将生成以下 CSS：

```css
.hover\:m-2:hover {
  margin: 0.5rem;
}
```

这样，只有当用户悬停在元素上时，才会应用 `m-2`。

## 进一步了解

变体系统非常强大，本指南无法完全涵盖。您可以查看 [默认预设的实现](https://github.com/unocss/unocss/tree/main/packages/preset-mini/src/_variants) 以了解更高级的用法。
