---
title: 主题
description: UnoCSS 还支持设置您在 Tailwind Windi 中可能熟悉的主题系统。
---

# 主题

`UnoCSS` 也支持像 Tailwind / Windi 中的主题系统。在用户级别上，您可以在配置中指定 `theme` 属性，它将与默认主题进行深度合并。

## 用法

<!--eslint-skip-->

```ts
theme: {
  // ...
  colors: {
    'veryCool': '#0000ff', // class="text-very-cool"
    'brand': {
      'primary': 'hsla(var(--hue, 217), 78%, 51%)', //class="bg-brand-primary"
    }
  },
}
```

## 在 `rules` 中使用

在规则中使用主题：

```ts
rules: [
  [
    /^text-(.*)$/,
    ([, c], { theme }) => {
      if (theme.colors[c]) return { color: theme.colors[c] }
    }
  ]
]
```

One exception is that UnoCSS gives full control of `breakpoints` to users. When a custom `breakpoints` is provided, the default will be overridden instead of merging. For example:

一个例外是，UnoCSS 将 `breakpoints` 控制权完全留给用户。当提供自定义 `breakpoints` 时，默认值将被覆盖而不是合并。例如：

<!--eslint-skip-->

```ts
theme: {
  // ...
  breakpoints: {
    sm: '320px',
    md: '640px',
  },
}
```

目前，您只能使用 `sm:` 和 `md:` 断点变量。

`verticalBreakpoints` 与 `breakpoints` 相同，但用于垂直布局。
