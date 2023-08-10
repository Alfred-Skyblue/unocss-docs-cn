---
title: UnoCSS Vite 插件
description: The Vite plugin for UnoCSS (@unocss/vite).
outline: deep
---

# Vite 插件

Vite 插件随 `unocss` 包一起提供。

## Installation

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

安装插件：

```ts
// vite.config.ts
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [UnoCSS()]
})
```

创建一个 `uno.config.ts` 文件：

```ts
// uno.config.ts
import { defineConfig } from 'unocss'

export default defineConfig({
  // ...UnoCSS选项
})
```

将 `virtual:uno.css` 添加到您的主入口文件：

```ts
// main.ts
import 'virtual:uno.css'
```

## 模式

Vite 插件提供了一组不同行为的模式。

### `global` (默认)

这是插件的默认模式：在这个模式中，您需要在入口点添加 uno.css 的引入。

此模式为 `build` 和 `dev` 提供了一组 Vite 插件，并支持热更新。

生成的 `css` 将作为全局样式注入到 `index.html`。

### `vue-scoped`

此模式将生成的 CSS 注入到 Vue 单文件组件的 `<style scoped>` 中，以实现样式隔离。

### `svelte-scoped`

`svelte-scoped` 模式已移至其自己的包中，请参阅 [@unocss/svelte-scoped/vite](/integrations/svelte-scoped)。

### `shadow-dom`

由于 `Web Components` 使用 `Shadow DOM`，无法直接从全局样式表中对内容进行样式设置（除非使用 `custom css vars`，这些变量将渗透到 `Shadow DOM` 中），因此需要将插件生成的 CSS 内联到 `Shadow DOM` 样式中。

要将生成的 CSS 内联，只需要将插件模式配置为 `shadow-dom`，并在每个 Web 组件样式的 CSS 块中包含 `@unocss-placeholder` 占位符。如果您在 Vue 单文件组件中定义自定义样式，并希望与 UnoCSS 一起定义，请将占位符包装在 CSS 注释中，以避免 IDE 中的语法错误。

### `per-module` (实验性)

此模式将为每个模块生成一个 CSS 样式表，并可进行作用域限定。

### `dist-chunk` (实验性)

此模式将在构建时为每个代码块生成一个 CSS 样式表，适用于 MPA。

## 在 DevTools 中编辑类

由于 "按需" 的限制，DevTools 不知道您尚未在源代码中使用的类。因此，如果您想通过在 DevTools 中直接更改类来尝试其工作原理，只需在主入口文件中添加以下行。

```ts
import 'uno.css'
import 'virtual:unocss-devtools'
```

::: warning
请谨慎使用，我们在内部使用 [`MutationObserver`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) 来检测类名的变化。这意味着不仅您手动进行的更改，还包括您在脚本中进行的更改，都将被检测并包含在样式表中。这可能会导致在生产构建中添加基于某些逻辑的动态类名时，在开发和生产构建之间出现错位。如果可能的话，我们建议将您的动态部分添加到[safelist](https://github.com/unocss/unocss/issues/511)或为您的生产构建设置 UI 回归测试。
:::

## 框架

某些 UI/App 框架需要一些特殊的处理才能正常工作，如果您正在使用以下框架之一，请按照建议进行操作。

### React

如果您正在使用 `@vitejs/plugin-react`:

```ts
// vite.config.js
import UnoCSS from 'unocss/vite'
import React from '@vitejs/plugin-react'

export default {
  plugins: [React(), UnoCSS()]
}
```

如果您正在使用 `@unocss/preset-attributify`，您应该从 `build` 脚本中删除 `tsc`。

如果您正在使用 `@vitejs/plugin-react` 与 `@unocss/preset-attributify`，您必须在 `@vitejs/plugin-react` 之前添加 `UnoCSS` 插件。

```ts
// vite.config.js
import UnoCSS from 'unocss/vite'
import React from '@vitejs/plugin-react'

export default {
  plugins: [UnoCSS(), React()]
}
```

您可以在 [examples/vite-react](https://github.com/unocss/unocss/tree/main/examples/vite-react) 目录下找到一个使用了这两个插件的 React 示例项目，查看其 `package.json` 文件和 Vite 配置文件中的脚本设置。

### Preact

如果您正在使用 `@preact/preset-vite`:

```ts
// vite.config.js
import Preact from '@preact/preset-vite'
import UnoCSS from 'unocss/vite'

export default {
  plugins: [UnoCSS(), Preact()]
}
```

或者如果您正在使用 `@prefresh/vite`:

```ts
// vite.config.js
import Prefresh from '@prefresh/vite'
import UnoCSS from 'unocss/vite'

export default {
  plugins: [UnoCSS(), Prefresh()]
}
```

如果您正在使用 `@unocss/preset-attributify`，您应该从 `build` 脚本中删除 `tsc`。

您可以在 [examples/vite-preact](https://github.com/unocss/unocss/tree/main/examples/vite-preact) 目录下找到一个使用了这两个插件的 `Preact` 示例项目，查看其 `package.json` 文件和 Vite 配置文件中的脚本设置。

### Svelte

您必须在 `@sveltejsvite-plugin-svelte` 之前添加插件。

To support `class:foo` and `class:foo={bar}` add the plugin and configure `extractorSvelte` on `extractors` option.

为了支持 `class:foo` 和 `class:foo={bar}` 的写法，你需要在 `extractors` 选项中添加 `extractorSvelte` 配置。

您可以将简单的规则与 `class:` 一起使用，比如 `class:bg-red-500={foo}` ，或者使用 `shortcuts` 来包含多个规则，参考下面链接的示例项目中的 `src/App.svelte` 文件。

```ts
// vite.config.js
import { svelte } from '@sveltejs/vite-plugin-svelte'
import UnoCSS from 'unocss/vite'
import extractorSvelte from '@unocss/extractor-svelte'

export default {
  plugins: [
    UnoCSS({
      extractors: [extractorSvelte()]
      /* more options */
    }),
    svelte()
  ]
}
```

_You have a `Vite + Svelte` example project on [examples/vite-svelte](https://github.com/unocss/unocss/tree/main/examples/vite-svelte) directory._

你可以在 [examples/vite-svelte](https://github.com/unocss/unocss/tree/main/examples/vite-svelte) 目录中找到一个 `Vite + Svelte` 的示例项目。

### Sveltekit

为了支持 `class:foo` 和 `class:foo={bar}` 的写法，你需要在 `extractors` 选项中添加 `extractorSvelte` 配置。

您可以将简单的规则与 `class:` 一起使用，比如 `class:bg-red-500={foo}` ，或者使用 `shortcuts` 来包含多个规则，参考下面链接的示例项目中的 `src/routes/+layout.svelte` 文件。

```ts
// vite.config.js
import { sveltekit } from '@sveltejs/kit/vite'
import UnoCSS from 'unocss/vite'
import extractorSvelte from '@unocss/extractor-svelte'

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [
    UnoCSS({
      extractors: [extractorSvelte()]
      /* more options */
    }),
    sveltekit()
  ]
}
```

<!-- :sandbox{src="https://stackblitz.com/fork/github/unocss/unocss/tree/main/examples/sveltekit"} -->

你可以在 [examples/sveltekit](https://github.com/unocss/unocss/tree/main/examples/sveltekit) 目录中找到一个 `SvelteKit` 的示例项目。

### Web Components

要与 `Web Components` 一起使用，您需要在插件上启用 `shadow-dom` 模式。

请不要忘记删除 `uno.css` 的导入，因为 `shadow-dom` 模式不会将其公开，因此应用程序将无法工作。

```ts
// vite.config.js
import UnoCSS from 'unocss/vite'

export default {
  plugins: [
    UnoCSS({
      mode: 'shadow-dom'
      /* more options */
    })
  ]
}
```

在每个 `web component` 中，只需将 `@unocss-placeholder` 添加到其样式 CSS 块中：

```ts
const template = document.createElement('template')
template.innerHTML = `
<style>
:host {...}
@unocss-placeholder
</style>
<div class="m-1em">
...
</div>
`
```

如果您正在使用 [Lit](https://lit.dev/):：

```ts
@customElement('my-element')
export class MyElement extends LitElement {
  static styles = css`
    :host {...}
    @unocss-placeholder
  `
  // ...
}
```

您可以在 [examples/vite-lit](https://github.com/unocss/unocss/tree/main/examples/vite-lit) 目录中找到一个 `Web Components` 示例项目。

#### `::part` 内置支持

您可以使用 `::part`，因为该插件通过 `shortcuts` 支持它，并使用 `preset-mini` 中的 `part-[<part-name>]:<rule|shortcut>` 规则，例如使用简单规则，如 `part-[<part-name>]:bg-green-500` 或使用一些 `shortcut`：请在下面链接的示例项目中查看 `src/my-element.ts`。

`part-[<part-name>]:<rule|shortcut>` 仅在使用 `shadow-dom` 模式时，该插件才会起作用。

该插件使用 `nth-of-type` 来避免在同一个 `web component` 中出现多个部分的冲突，并且对于不同 `web component` 上的相同部分，您不需要担心，该插件将为您处理。

```ts
// vite.config.js
import UnoCSS from 'unocss/vite'

export default {
  plugins: [
    UnoCSS({
      mode: 'shadow-dom',
      shortcuts: [
        { 'cool-blue': 'bg-blue-500 text-white' },
        { 'cool-green': 'bg-green-500 text-black' }
      ]
      /* more options */
    })
  ]
}
```

然后在您的 web components 中：

```ts
// my-container-wc.ts
const template = document.createElement('template')
template.innerHTML = `
<style>
@unocss-placeholder
</style>
<my-wc-with-parts class="part-[cool-part]:cool-blue part-[another-cool-part]:cool-green">...</my-wc-with-parts>
`
```

```ts
// my-wc-with-parts.ts
const template = document.createElement('template')
template.innerHTML = `
<style>
@unocss-placeholder
</style>
<div>
  <div part="cool-part">...</div>
  <div part="another-cool-part">...</div>
</div>
`
```

### Solid

```ts
// vite.config.js
import solidPlugin from 'vite-plugin-solid'
import UnoCSS from 'unocss/vite'

export default {
  plugins: [
    solidPlugin(),
    UnoCSS({
      /* options */
    })
  ]
}
```

您可以在 [examples/vite-solid](https://github.com/unocss/unocss/tree/main/examples/vite-solid) 目录中找到一个 `Vite + Solid` 示例项目。

### Elm

在 UnoCSS 的插件之前，您需要添加 `vite-plugin-elm` 插件。

```ts
// vite.config.js
import { defineConfig } from 'vite'
import Elm from 'vite-plugin-elm'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [Elm(), UnoCSS()]
})
```

您可以在 [examples/vite-elm](https://github.com/unocss/unocss/tree/main/examples/vite-elm) 目录中找到一个 `Vite + Elm` 示例项目。

## License

- MIT License &copy; 2021-PRESENT [Anthony Fu](https://github.com/antfu)
