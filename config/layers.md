---
title: 图层
icon: ph:stack-bold
description: UnoCSS 允许您根据需要定义图层。
---

# 图层

CSS 的顺序将影响它们的优先级。虽然我们将[保留规则的顺序](/config/rules#ordering)，但有时您可能希望将一些工具类分组，以更明确地控制它们的顺序。

## 用法

与 Tailwind 不同，它提供 3 个固定的图层(`base`，`components`，`utilities`)，UnoCSS 允许您根据需要定义图层。要设置图层，您可以将元数据作为您的规则的第三项传递：

```ts
rules: [
  [/^m-(\d)$/, ([, d]) => ({ margin: `${d / 4}rem` }), { layer: 'utilities' }],
  // 当您省略图层时，它将是 `default`
  ['btn', { padding: '4px' }],
]
```

这将生成：

```css
/* 图层: default */
.btn { padding: 4px; }
/* 图层: utilities */
.m-2 { margin: 0.5rem; }
```

每个预设样式也可以设置图层：

```ts
preflights: [
  {
    layer: 'my-layer',
    getCSS: async () => (await fetch('my-style.css')).text(),
  },
]
```

## 排序

您可以通过以下方式控制图层的顺序：

<!--eslint-skip-->

```ts
layers: {
  components: -1,
  default: 1,
  utilities: 2,
  'my-layer': 3,
}
```

未指定顺序的图层将按字母顺序排序。

当您希望在图层之间添加自定义 CSS 时，您可以更新入口模块：

```ts
// 'uno:[layer-name].css'
import 'uno:components.css'
// 不是 'components' 和 'utilities' 图层的将会退化到这里
import 'uno.css'
// 您自己的 CSS
import './my-custom.css'
// "utilities" 图层将拥有最高的优先级
import 'uno:utilities.css'
```
