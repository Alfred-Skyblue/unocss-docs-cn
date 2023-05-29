---
title: 图标预设
description: 使用Pure CSS和UnoCSS(@unocss/preset-icons)实现任何图标的样式。
outline: deep
---

<script setup>
const toggleDark = () => {
  document.querySelector('.VPSwitchAppearance')?.click()
}
</script>

# 图标预设

在 UnoCSS 中使用纯 CSS 图标。

[源码](https://github.com/unocss/unocss/tree/main/packages/preset-icons)

::: tip
推荐阅读：[聊聊纯 CSS 图标](https://antfu.me/posts/icons-in-pure-css)
:::

按照以下规则使用图标

- `<prefix><collection>-<icon>`
- `<prefix><collection>:<icon>`

For examples:

```html
<!-- Phosphor 图标中的基本锚点图标 -->
<div class="i-ph-anchor-simple-thin" />
<!-- 来自 Material Design 图标的橙色闹钟 -->
<div class="i-mdi-alarm text-orange-400" />
<!-- 大号 Vue 标志 -->
<div class="i-logos-vue text-3xl" />
<!-- Linght 模式下显示太阳，Dark 模式下显示月亮，引用自 Carbon -->
<button class="i-carbon-sun dark:i-carbon-moon" />
<!-- Twemoji 笑脸，悬停时变成眼泪 -->
<div
  class="i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy"
/>
```

<div class="w-full flex items-center justify-center gap-x-4 text-4xl p-2 mt-4">
  <div class="i-ph:anchor-simple-thin" />
  <div class="i-mdi:alarm text-orange-400 hover:text-teal-400" />
  <div class="w-2em h-2em i-logos:vue transform transition-800 hover:rotate-180" />
  <button class="i-carbon:sun dark:i-carbon:moon !w-2em !h-2em" @click="toggleDark()" title="toggle dark mode"/>
  <div class="i-twemoji:grinning-face-with-smiling-eyes hover:i-twemoji:face-with-tears-of-joy" /> 
  <div class="text-base my-auto flex"><div class="i-carbon:arrow-left my-auto mr-1" /> Hover it</div>
</div>

查看 [所有可用图标](https://icones.js.org/)。

## 安装

```bash
npm i -D @unocss/preset-icons @iconify-json/[the-collection-you-want]
```

我们使用 [Iconify](https://iconify.design) 作为图标数据源。您需要按照 `@iconify-json/*` 模式在 `devDependencies` 中安装相应的图标集。例如，`@iconify-json/mdi` 是 [Material Design Icons](https://materialdesignicons.com/) 图标，`@iconify-json/tabler` 是 [Tabler](https://tabler-icons.io/)。您可以参考 [Icônes](https://icones.js.org/) 或 [Iconify](https://icon-sets.iconify.design/) 获取所有可用的图标集。

```ts
// uno.config.ts
import { defineConfig } from 'unocss'
import presetIcons from '@unocss/preset-icons'

export default defineConfig({
  presets: [
    presetIcons({
      /* options */
    })
    // ...other presets
  ]
})
```

::: tip
此预设包含在 `unocss` 包中，您也可以从那里导入它：

```ts
import { presetIcons } from 'unocss'
```

:::

::: info
你也可以将此预设单独用作你现有 UI 框架的补充，以获得纯 CSS 图标！
:::

如果您喜欢一次性安装 Iconify 上所有可用的图标集（~130MB）：

```bash
npm i -D @iconify/json
```

### 额外的属性

您可以提供额外的 CSS 属性来控制图标的默认行为。以下是一个让图标默认呈现为行内块级元素的示例：

```ts
presetIcons({
  extraProperties: {
    display: 'inline-block',
    'vertical-align': 'middle'
    // ...
  }
})
```

## 模式覆盖

默认情况下，此预设将根据每个图标的特征自动选择渲染模式。您可以在此篇[博客文章](https://antfu.me/posts/icons-in-pure-css)中了解更多。在某些情况下，您可能希望为每个图标明确设置渲染模式。

- `?bg` 表示 `background-img` - 将图标呈现为背景图片
- `?mask` 表示 `mask` - 将图标呈现为遮罩图像

例如，`vscode-icons:file-type-light-pnpm` 是一个有颜色的图标（`svg` 中不包含 `currentColor`），将呈现为背景图片。使用 `vscode-icons:file-type-light-pnpm?mask` 将其渲染为遮罩图像，覆盖其本来颜色。

```html
<div class="w-full flex items-center justify-center gap-x-4 text-4xl p-2 mt-4">
  <div class="i-vscode-icons:file-type-light-pnpm" />
  <div class="i-vscode-icons:file-type-light-pnpm?mask text-red-300" />
</div>
```

<div class="w-full flex items-center justify-center gap-x-4 text-4xl p-2 mt-4">
  <div class="i-vscode-icons:file-type-light-pnpm" />
  <div class="i-vscode-icons:file-type-light-pnpm?mask text-red-300" />
</div>

## 配置集合和图标解析器

您可以通过 `@iconify-json/[the-collection-you-want]`，`@iconify/json` 或使用 `UnoCSS` 配置中的 `collections` 选项提供集合。

### 浏览器

要加载 `iconify` 集合，您应该使用 `@iconify-json/[the-collection-you-want]` 而不是 `@iconify/json`，因为 `json` 文件太大了。

#### 打包工具

使用打包工具时，您可以使用 `dynamic imports` 提供集合，以便它们作为异步块进行打包并按需加载。

```ts
import presetIcons from '@unocss/preset-icons/browser'

export default defineConfig({
  presets: [
    presetIcons({
      collections: {
        carbon: () =>
          import('@iconify-json/carbon/icons.json').then(i => i.default),
        mdi: () => import('@iconify-json/mdi/icons.json').then(i => i.default),
        logos: () =>
          import('@iconify-json/logos/icons.json').then(i => i.default)
      }
    })
  ]
})
```

#### CDN

或者，如果您希望从 CDN 获取它们，可以在 `v0.32.10` 以后指定 `cdn` 选项。我们推荐 [esm.sh](https://esm.sh/) 作为 CDN 提供者。

```ts
presetIcons({
  cdn: 'https://esm.sh/'
})
```

#### 自定义

您还可以使用 [CustomIconLoader](https://github.com/iconify/iconify/blob/master/packages/utils/src/loader/types.ts#L17) 或 [InlineCollection](https://github.com/iconify/iconify/blob/master/packages/utils/src/loader/types.ts#L86) 提供自定义集合，例如使用 `InlineCollection`：

```ts
presetIcons({
  collections: {
    custom: {
      circle:
        '<svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="50"></circle></svg>'
      /* ... */
    },
    carbon: () =>
      import('@iconify-json/carbon/icons.json').then(i => i.default as any)
    /* ... */
  }
})
```

然后，您可以在您的 html 上使用它: `<span class="i-custom:circle"></span>`

### Node.js

在 `Node.js` 中，预设将自动搜索已安装的 `iconify` 数据集，因此您不需要注册 `iconify` 集合。

您还可以使用 [CustomIconLoader](https://github.com/iconify/iconify/blob/master/packages/utils/src/loader/types.ts#L17) 或 [InlineCollection](https://github.com/iconify/iconify/blob/master/packages/utils/src/loader/types.ts#L86) 提供自己的自定义集合。

此外，您还可以使用 [FileSystemIconLoader](https://github.com/iconify/iconify/blob/master/packages/utils/src/loader/node-loaders.ts#L9) 从文件系统中加载自定义图标。您需要将 `@iconify/utils` 包作为 `dev dependency` 安装。

```ts
// uno.config.ts
import fs from 'node:fs/promises'
import { defineConfig } from 'unocss'
// loader helpers
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'

export default defineConfig({
  presets: [
    presetIcons({
      collections: {
        // key as the collection name
        'my-icons': {
          account: '<svg><!-- ... --></svg>',
          // load your custom icon lazily
          settings: () => fs.readFile('./path/to/my-icon.svg', 'utf-8')
          /* ... */
        },
        'my-other-icons': async iconName => {
          // your custom loader here. Do whatever you want.
          // for example, fetch from a remote server:
          return await fetch(`https://example.com/icons/${iconName}.svg`).then(
            res => res.text()
          )
        },
        // a helper to load icons from the file system
        // files under `./assets/icons` with `.svg` extension will be loaded as it's file name
        // you can also provide a transform callback to change each icon (optional)
        'my-yet-other-icons': FileSystemIconLoader('./assets/icons', svg =>
          svg.replace(/#fff/, 'currentColor')
        )
      }
    })
  ]
})
```

## 图标自定义

您可以使用 `customizations` 配置选项来自定义所有图标。

可用的自定义函数：

- `transform`: 转换原始的 `svg`，仅在使用 `custom` 图标集时应用（`iconify` 集合除外）。
- `customize`: 更改默认的图标自定义值。
- `iconCustomizer`: 更改默认的图标自定义值。

对于每个加载的图标，将按照以下顺序应用自定义：

- 如果提供了 `transform` 并且使用自定义图标集，则将其应用于原始的 `svg`。
- 如果提供了 `customize`，则使用默认自定义应用它。
- 如果提供了 `iconCustomizer` 和 `customize` 自定义，则应用 `iconCustomizer`。

### 全局自定义图标转换

在加载自定义图标时，您可以对它们进行转换，例如添加 `fill` 属性并设置为 `currentColor`：

```ts
presetIcons({
  customizations: {
    transform(svg) {
      return svg.replace(/#fff/, 'currentColor')
    }
  }
})
```

从 `0.30.8` 版本开始，`transform` 提供了集合和图标名称：

```ts
presetIcons({
  customizations: {
    transform(svg, collection, icon) {
      // 不对该集合中的此图标应用 fill
      if (collection === 'custom' && icon === 'my-icon') return svg
      return svg.replace(/#fff/, 'currentColor')
    }
  }
})
```

### 全局图标自定义

在加载任何图标时，您可以自定义所有图标的常见属性，例如配置相同的大小：

```ts
presetIcons({
  customizations: {
    customize(props) {
      props.width = '2em'
      props.height = '2em'
      return props
    }
  }
})
```

### 图标/集合自定义

您可以使用 `iconCustomizer` 配置选项来自定义每个图标。

`iconCustomizer` 优先于其他配置选项。

`iconCustomizer` 将应用于任何集合，也就是说，对于从 `custom` 加载程序、`custom collections` 上的 `inlined` 或来自 `@iconify` 的任何图标。

例如，您可以将 `iconCustomizer` 配置为更改集合中的所有图标或单独的图标：

```ts
presetIcons({
  customizations: {
    iconCustomizer(collection, icon, props) {
      // 自定义此集合中的所有图标
      if (collection === 'my-other-icons') {
        props.width = '4em'
        props.height = '4em'
      }
      // 自定义此集合中的此图标
      if (collection === 'my-icons' && icon === 'account') {
        props.width = '6em'
        props.height = '6em'
      }
      // 自定义此集合中的 @iconify 图标
      if (collection === 'mdi' && icon === 'account') {
        props.width = '2em'
        props.height = '2em'
      }
    }
  }
})
```

## Options

### scale

- Type: `number`
- Default: `1`

相对于当前字体大小（1em）的缩放比例。

### mode

- Type: `'mask' | 'background-img' | 'auto'`
- Default: `'auto'`
- 参考: https://antfu.me/posts/icons-in-pure-css

生成的 CSS 图标的模式。

:::tip

- `mask` - 对于单色图标，使用背景色和 `mask` 属性
- `background-img` - 使用背景图片表示图标，颜色是静态的
- `auto` - 根据图标的样式智能地决定 `mask` 和 `background-img` 之间的模式。
  :::

### prefix

- Type: `string | string[]`
- Default: `'i-'`

匹配图标规则的类前缀。

### extraProperties

- Type: `Record<string, string>`
- Default: `{}`

应用于生成的 CSS 的额外 CSS 属性。

### warn

- Type: `boolean`
- Default: `false`

在匹配缺失的图标时发出警告。

### collections

- Type: `Record<string, (() => Awaitable<IconifyJSON>) | undefined | CustomIconLoader | InlineCollection>`
- Default: `undefined`

在 Node.js 环境中，预设会自动搜索已安装的 iconify 数据集。在浏览器中使用时，提供此选项以提供具有自定义加载机制的数据集。

### layer

- Type: `string`
- Default: `'icons'`

规则层

### customizations

- Type: `Omit<IconCustomizations, 'additionalProps' | 'trimCustomSvg'>`
- Default: `undefined`

自定义图标定制。

### autoInstall

- Type: `boolean`
- Default: `false`

在检测到使用时自动安装图标源包。

:::warning
仅在 `node` 环境中，对于 `browser`，此选项将被忽略。
:::

### unit

- Type: `string`
- Default: `'em'`

自定义图标单位。

### cdn

- Type: `string`
- Default: `undefined`

从 CDN 加载图标。应以 `https://` 开头，以 `/` 结尾。

推荐：

- `https://esm.sh/`
- `https://cdn.skypack.dev/`

### 高级自定义图标集清理

在使用此预设与您自己的自定义图标时，请考虑使用类似于 [Iconify](https://iconify.design/) 所做的任何图标集清理过程。您需要的所有工具都可以在 [Iconify 工具](https://iconify.design/docs/libraries/tools/) 中找到。

您可以查看此 Repo，在 `Vue 3` 项目上使用此预设: [@iconify/tools/@iconify-demo/unocss](https://github.com/iconify/tools/tree/main/%40iconify-demo/unocss)

阅读 [Iconify](https://iconify.design/) 的文章 [Cleaning up icons](https://iconify.design/docs/articles/cleaning-up-icons/) 获取更多详细信息。

## 鸣谢

- 此预设受到 [@husayt](https://github.com/husayt) 创建的 此 [问题](https://github.com/antfu/unplugin-icons/issues/88) 的启发。
- 基于 [@userquin](https://github.com/userquin) 的此 [PR](https://github.com/antfu/unplugin-icons/pull/90) 的工作。
