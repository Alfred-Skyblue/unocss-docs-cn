---
title: UnoCSS Astro 集成
description: The UnoCSS integration for Astro (@unocss/astro).
---

# Astro 继承

UnoCSS 在 [Astro](https://astro.build/) 中的集成：`@unocss/astro`。查看[示例](https://github.com/unocss/unocss/tree/main/examples/astro)。

## 安装

::: code-group

```bash [pnpm]
pnpm add -D unocss
```

```bash [yarn]
yarn add -D unocss
```

```bash [npm]
npm install -D unocss
```

:::

```ts
// astro.config.ts
import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'

export default defineConfig({
  integrations: [UnoCSS()]
})
```

创建一个 `uno.config.ts` 文件：

```ts
// uno.config.ts
import { defineConfig } from 'unocss'

export default defineConfig({
  // ...UnoCSS 选项
})
```

### 样式重置

默认情况下，[浏览器样式重置](/guide/style-reset) 不会被注入。要启用它，请安装 `@unocss/reset` 包：

::: code-group

```bash [pnpm]
pnpm add -D @unocss/reset
```

```bash [yarn]
yarn add -D @unocss/reset
```

```bash [npm]
npm install -D @unocss/reset
```

:::

并更新您的 `astro.config.ts`：

```ts
// astro.config.ts
import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'

export default defineConfig({
  integrations: [
    UnoCSS({
      injectReset: true // 或者重置文件的路径
    })
  ]
})
```

### 不使用预设

此插件不带任何默认预设。

::: code-group

```bash [pnpm]
pnpm add -D @unocss/astro
```

```bash [yarn]
yarn add -D @unocss/astro
```

```bash [npm]
npm install -D @unocss/astro
```

:::

```ts
// astro.config.mjs
import UnoCSS from '@unocss/astro'

export default {
  integrations: [UnoCSS()]
}
```

更多详情，请参考 [Vite 插件](/integrations/vite)。

::: info
如果你正在构建一个基于 UnoCSS 的元框架，请[参考这个文件](https://github.com/unocss/unocss/blob/main/packages/unocss/src/astro.ts)中的示例，了解如何绑定默认预设。
:::

## 注意事项

[`client:only`](https://docs.astro.build/en/reference/directives-reference/#clientonly) 组件必须放置在 [`components`](https://docs.astro.build/en/core-concepts/project-structure/#srccomponents) 文件夹中，或者添加到 UnoCSS 的 `extraContent` 配置中，以便进行处理。
