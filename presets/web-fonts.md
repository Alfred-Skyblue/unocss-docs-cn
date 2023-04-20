---
title: Web字体预设
description: UnoCSS 的 Web 字体支持 (@unocss/preset-web-fonts)。
outline: deep
---

# Web 字体预设

通过提供字体名称，从 [Google Fonts](https://fonts.google.com/)、[FontShare](https://www.fontshare.com/) 等提供商使用 Web 字体。

查看 [所有支持的提供商](#提供商)。

[源码](https://github.com/unocss/unocss/tree/main/packages/preset-web-fonts)

## 安装

::: code-group

```bash [pnpm]
pnpm add -D @unocss/preset-web-fonts
```

```bash [yarn]
yarn add -D @unocss/preset-web-fonts
```

```bash [npm]
npm install -D @unocss/preset-web-fonts
```

:::

```ts
// uno.config.ts
import { defineConfig } from 'unocss'
import presetWebFonts from '@unocss/preset-web-fonts'
import presetUno from '@unocss/preset-uno'

export default defineConfig({
  presets: [
    presetUno(),
    presetWebFonts({
      /* options */
    })
  ]
})
```

::: tip
此预设已包含在 `unocss` 包中，您也可以从该包中导入它：

```ts
import { presetWebFonts } from 'unocss'
```

:::

## 提供商

当前支持的提供商：

- `none` - 仅将字体视为系统字体
- `google` - [Google Fonts](https://fonts.google.com/)
- `bunny` - [Privacy-Friendly Google Fonts](https://fonts.bunny.net/)
- `fontshare` - [Quality Font Service by ITF](https://www.fontshare.com/)

::: info
欢迎通过 PR 添加更多提供商。 🙌
:::

### 自定义获取函数

使用您自己的函数来获取字体源。

```ts
// uno.config.ts
import { defineConfig } from 'unocss'
import presetWebFonts from '@unocss/preset-web-fonts'
import presetUno from '@unocss/preset-uno'
import axios from 'axios'
import ProxyAgent from 'proxy-agent'

export default defineConfig({
  presets: [
    presetUno(),
    presetWebFonts({
      // 使用带有 https 代理的 axios
      customFetch: (url: string) =>
        axios.get(url, {
          httpsAgent: new ProxyAgent('https://localhost:7890')
        }),
      provider: 'google',
      fonts: {
        sans: 'Roboto',
        mono: ['Fira Code', 'Fira Mono:400,700']
      }
    })
  ]
})
```

## Options

### provider

- **Type:** `WebFontsProviders`
- **Default:** `google`

Web 字体的提供者服务。

```ts
type WebFontsProviders = 'google' | 'bunny' | 'fontshare' | 'none'
```

### fonts

- **Type:** `Record<string, WebFontMeta | string | (WebFontMeta | string)[]>`

字体。更多细节请参见[示例](#示例)。

```ts
interface WebFontMeta {
  name: string
  weights?: (string | number)[]
  italic?: boolean
  /**
   * Override the provider
   * @default <matches root config>
   */
  provider?: WebFontsProviders
}
```

### extendTheme

- **Type:** `boolean`
- **Default:** `true`

扩展主题对象。

### themeKey

- **Type:** `string`
- **Default:** `fontFamily`

主题对象的 key。

### inlineImports

- **Type:** `boolean`
- **Default:** `true`

内联 CSS `@import()`。

### customFetch

- **Type:** `(url: string) => Promise<string>`
- **Default:** `undefined`

使用自己的函数来获取字体源。请参见[自定义获取函数](#自定义获取函数)。

## 示例

```ts
presetWebFonts({
  provider: 'google', // 默认提供者
  fonts: {
    // 这些将扩展默认主题
    sans: 'Roboto',
    mono: ['Fira Code', 'Fira Mono:400,700'],
    // 自定义的
    lobster: 'Lobster',
    lato: [
      {
        name: 'Lato',
        weights: ['400', '700'],
        italic: true
      },
      {
        name: 'sans-serif',
        provider: 'none'
      }
    ]
  }
})
```

将自动生成以下 CSS：

```css
@import url('https://fonts.googleapis.com/css2?family=Roboto&family=Fira+Code&family=Fira+Mono:wght@400;700&family=Lobster&family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap');

/* 层：默认 */
.font-lato {
  font-family: 'Lato', sans-serif;
}
.font-lobster {
  font-family: 'Lobster';
}
.font-mono {
  font-family: 'Fira Code', 'Fira Mono', ui-monospace, SFMono-Regular, Menlo,
    Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
}
.font-sans {
  font-family: 'Roboto', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
}
```
