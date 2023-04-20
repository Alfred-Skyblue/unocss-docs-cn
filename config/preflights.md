---
title: 预检
description: 您可以从配置中注入原始 css 作为预处理。 已解决的主题可用于自定义 css。
---

# 预检

您可以从配置中注入原始 css 作为预处理。解析的 `theme` 可用于自定义 css。

<!--eslint-skip-->

```ts
preflights: [
  {
    getCSS: ({ theme }) => `
      * {
        color: ${theme.colors.gray?.[700] ?? '#333'};
        padding: 0;
        margin: 0;
      }
    `
  }
]
```
