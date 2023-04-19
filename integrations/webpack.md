---
title: UnoCSS Webpack 插件
description: The webpack plugin for UnoCSS (@unocss/webpack).
---

# Webpack 插件

The webpack plugin for UnoCSS: `@unocss/webpack`. Currently, this plugin only supports the [`global` mode](https://github.com/unocss/unocss/blob/main/packages/vite/src/types.ts#L11-L21).

UnoCSS 的 Webpack 插件：`@unocss/webpack`。目前，此插件仅支持 [global模式](https://github.com/unocss/unocss/blob/main/packages/vite/src/types.ts#L11-L21)。


::: info
此插件不带有任何默认预设。
:::

## 安装

::: code-group
  ```bash [pnpm]
  pnpm add -D @unocss/webpack
  ```
  ```bash [yarn]
  yarn add -D @unocss/webpack
  ```
  ```bash [npm]
  npm install -D @unocss/webpack
  ```
:::

::: code-group
```ts [webpack 5]
// webpack.config.js
const UnoCSS = require('@unocss/webpack').default

module.exports = {
  plugins: [
    UnoCSS(),
  ],
  optimization: {
    realContentHash: true,
  },
}
```

```ts [webpack 4]
// webpack.config.js
const UnoCSS = require('@unocss/webpack').default

module.exports = {
  plugins: [
    UnoCSS(),
  ],
  css: {
    extract: {
      filename: '[name].[hash:9].css',
    },
  },
}
```
:::

创建一个 `uno.config.ts` 文件：
```ts
// uno.config.ts
import { defineConfig } from 'unocss'

export default defineConfig({
  // ...UnoCSS options
})
```

::: warning
如果您使用的是webpack@4.x，`optimization.realContentHash` 配置不受支持，并且您应该使用 `css.extract.filename` 自定义CSS文件名（我们使用前9个哈希码字母作为示例）。请注意此捆绑包和[webpack#9520](https://github.com/webpack/webpack/issues/9520#issuecomment-749534245)的[已知问题](https://github.com/unocss/unocss/issues/1728)。
:::

## 使用

将 `uno.css` 添加到您的主入口中：
```ts
// main.ts
import 'uno.css'
```
