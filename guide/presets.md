---
title: 预设
description: 预设是 UnoCSS 的核心。他们让您在几分钟内制作自己的自定义框架。
outline: deep
---

# 预设

预设是 UnoCSS 的核心。他们让您在几分钟内制作自己的自定义框架。

### 使用预设

为您的项目添加预设:

```ts
// uno.config.ts
import { defineConfig, presetAttributify, presetUno } from 'unocss'

export default defineConfig({
  presets: [
    presetAttributify({
      /* 预设选项 */
    }),
    presetUno()
    // ...自定义预设
  ]
})
```

当指定了 `presets` 选项时，将会忽略默认预设。

要禁用默认预设，您可以将 `presets` 设置为空数组：

```ts
// uno.config.ts
import { defineConfig } from 'unocss'

export default defineConfig({
  presets: [], // 禁用默认预设
  rules: [
    // 您的自定义规则
  ]
})
```

您可以在[官方预设](/presets/)和[社区预设](/presets/community)中查看更多预设选项。
