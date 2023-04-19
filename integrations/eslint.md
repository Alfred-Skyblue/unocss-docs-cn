---
title: UnoCSS ESLint 配置
description: UnoCSS 的 ESLint 配置 (@unocsseslint-config)。
---

# ESLint 配置

UnoCSS 的 ESLint 配置: `@unocss/eslint-config`.

## 安装

::: code-group
  ```bash [pnpm]
  pnpm add -D @unocss/eslint-config
  ```
  ```bash [yarn]
  yarn add -D @unocss/eslint-config
  ```
  ```bash [npm]
  npm install -D @unocss/eslint-config
  ```
:::

In `.eslintrc`:

```json
{
  "extends": [
    "@unocss"
  ]
}
```

## 规则

- `@unocss/order` - 对类选择器执行特定顺序。
- `@unocss/order-attributify` - 对属性选择器执行特定顺序。

## Prior Arts

感谢 [@devunt](https://github.com/devunt) 的 [eslint-plugin-unocss](https://github.com/devunt/eslint-plugin-unocss)。
