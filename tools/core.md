---
title: Core
description: UnoCSS 的核心引擎，不含任何预设。可用作自定义原子 CSS 框架的引擎。
---

# 核心引擎

UnoCSS 的核心引擎，不含任何预设：`@unocss/core`。可用作自定义原子 CSS 框架的引擎。

## 安装

::: code-group

```bash [pnpm]
pnpm add -D @unocss/core
```

```bash [yarn]
yarn add -D @unocss/core
```

```bash [npm]
npm install -D @unocss/core
```

:::

## 用法

```ts
import { createGenerator } from '@unocss/core'

const generator = createGenerator(
  {
    /* 用户选项 */
  },
  {
    /* 默认选项 */
  }
)

const { css } = await generator.generate(code)
```

## License

- MIT License &copy; 2021-PRESENT [Anthony Fu](https://github.com/antfu)
