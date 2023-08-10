---
title: UnoCSS Svelte Scoped
description: UnoCSS Svelte Scoped Vite 插件和 UnoCSS 的 Svelte 预处理器。
outline: deep
---

# Svelte Scoped

将每个 Svelte 组件的实用样式的生成 CSS 直接放入 Svelte 组件的 `<style>` 块中，而不是放在全局 CSS 文件中。

这个组件：

```svelte
<div class="mb-1" />
```

被转换为：

```svelte
<div class="uno-ei382o" />

<style>
  :global(.uno-ei382o) {
    margin-bottom: 0.25rem;
  }
</style>
```

## 何时使用

| 使用场景 |     | 描述                                                                                                                              | 使用的包                                                 |
| -------- | --- | --------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| 小型应用 | :x: | 使用一个全局 CSS 文件更方便。使用常规的 [Svelte](/integrations/vite#svelte)/[SvelteKit](/integrations/vite#sveltekit) Vite 插件。 | [unocss/vite](/integrations/vite#svelte)                 |
| 大型应用 | ✅  | Svelte Scoped 可以帮助您避免不断增长的全局 CSS 文件。                                                                             | [@unocss/svelte-scoped/vite](#vite-plugin)               |
| 组件库   | ✅  | 生成的样式直接放置在构建的组件中，而不需要在使用 UnoCSS 的消费应用的构建流程中使用。                                              | [@unocss/svelte-scoped/preprocess](#svelte-preprocessor) |

## 工作原理

常规的 UnoCSS/Tailwind 设置将实用样式放在全局 CSS 文件中，并进行适当的排序。相比之下，Svelte Scoped 将样式分布在许多任意顺序的 Svelte 组件 CSS 文件中。但是，它必须保持实用样式的全局性，以便根据需要进行上下文感知，例如适用于从右到左的情况和其他下面列出的[用例](#context-aware)。这带来了一个挑战，使用 Svelte 的 `:global()` 封装器来退出默认的 Svelte CSS 散列方法，而是使用基于文件名 + 类名的散列来编译唯一的类名，可以使其全局化而不会引起样式冲突。

## 使用方法

由于 Svelte Scoped 会重写您的实用类名，因此您在何处编写它们受到限制：

| 支持的语法 | 示例                             |
| ---------- | -------------------------------- |
| 类属性     | `<div class="mb-1" />`           |
| 类指令     | `<div class:mb-1={condition} />` |
| 类指令缩写 | `<div class:logo />`             |
| 类 prop    | `<Button class="mb-1" />`        |

Svelte Scoped 被设计为用于使用实用样式的项目的即插即用替代方案。因此，类属性中的表达式也受支持（例如 `<div class="mb-1 {foo ? 'mr-1' : 'mr-2'}" />`），但我们建议您将来使用类指令语法。此外，如果您以其他方式使用类名，比如将它们放在 `<script>` 块中或使用 attributify 模式，那么在使用 Svelte Scoped 之前，您需要采取额外的步骤。您可以使用 `safelist` 选项，并在下面的[预设支持](#预设支持)部分中查看更多提示。

### 上下文感知

尽管样式分布在您应用的 Svelte 组件中，但它们仍然是全局类，并将与其特定组件之外的元素的关系一起工作。以下是一些示例：

#### 依赖于父元素

依赖于父组件中的属性的类：

```svelte
<div class="dark:mb-2 rtl:right-0"></div>
```

转换为：

```svelte
<div class="uno-3hashz"></div>

<style>
  :global(.dark .uno-3hashz) {
    margin-bottom: 0.5rem;
  }
  :global([dir="rtl"] .uno-3hashz) {
    right: 0rem;
  }
</style>
```

#### 影响子元素

您可以在三个子元素之间添加间隔，其中一些子元素位于单独的组件中：

```svelte
<div class="space-x-1">
  <div>Status: online</div>
  <Button>FAQ</Button>
  <Button>Login</Button>
</div>
```

转换为：

```svelte
<div class="uno-7haszz">
  <div>Status: online</div>
  <Button>FAQ</Button>
  <Button>Login</Button>
</div>

<style>
  :global(.uno-7haszz > :not([hidden]) ~ :not([hidden])) {
    --un-space-x-reverse: 0;
    margin-left: calc(0.25rem * calc(1 - var(--un-space-x-reverse)));
    margin-right: calc(0.25rem * var(--un-space-x-reverse));
  }
</style>
```

#### 将类传递给子组件

您可以为组件添加一个 `class` prop，以允许在任何使用该组件的地方传递自定义类。

```svelte
<Button class="px-2 py-1">Login</Button>
```

转换为：

```svelte
<Button class="uno-4hshza">Login</Button>

<style>
  :global(.uno-4hshza) {
    padding-left:0.5rem;
    padding-right:0.5rem;
    padding-top:0.25rem;
    padding-bottom:0.25rem;
  }
</style>
```

在接收组件中实现类的简单方法是使用 `{$$props.class}` 将它们放在元素上，例如 `div class="{$$props.class} foo bar" />`。

### 应用指令

您可以在 `<style>` 块中使用应用指令，可以使用 `--at-apply`、`@apply` 或使用 `applyVariables` 选项设置的自定义值。

Svelte Scoped

甚至可以正确处理上下文相关的类，比如正常的 [`@unocss/transformer-directives`](/transformers/directives) 包无法正确处理的 `dark:text-white`，因为它并不是专为 Svelte 样式块构建的。例如，使用 Svelte Scoped，这个组件：

```svelte
<div />

<style>
  div {
    --at-apply: rtl:ml-2;
  }
</style>
```

将被转换为：

```svelte
<div />

<style>
  :global([dir=\\"rtl\\"]) div {
    margin-right: 0.5rem;
  }
</style>
```

为了使 `rtl:ml-2` 正常工作，`[dir="rtl"]` 选择器被封装在 `:global()` 中，以防止 Svelte 编译器自动剥离它，因为组件没有具有该属性的元素。然而，`div` 不能包含在 `:global()` 封装器中，因为这样的样式将会影响到应用中的每个 `div`。

### 其他样式块指令

使用 [theme()](https://unocss.dev/transformers/directives#theme) 也受支持，但 [@screen](https://unocss.dev/transformers/directives#screen) **不受支持**。

## Vite 插件

在 Svelte 或 SvelteKit 应用中，将生成的样式直接注入到 Svelte 组件中，同时将最少必要的样式放在全局样式表中。在 Stackblitz 中查看 [SvelteKit 示例](https://github.com/unocss/unocss/tree/main/examples/sveltekit-scoped)：

[![在 StackBlitz 中打开](https://developer.stackblitz.com/img/open_in_stackblitz_small.svg)](https://stackblitz.com/fork/github/unocss/unocss/tree/main/examples/sveltekit-scoped)

### 安装

::: code-group

```bash [pnpm]
pnpm add -D unocss @unocss/svelte-scoped
```

```bash [yarn]
yarn add -D unocss @unocss/svelte-scoped
```

```bash [npm]
npm install -D unocss @unocss/svelte-scoped
```

:::

#### 添加插件

在你的 Vite 配置中添加 `@unocss/svelte-scoped/vite`：

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'
import UnoCSS from '@unocss/svelte-scoped/vite'

export default defineConfig({
  plugins: [
    UnoCSS({
      // injectReset: '@unocss/reset/normalize.css', // 参见类型定义以获取所有包含的重置选项或如何传递您自己的选项
      // ...其他 Svelte Scoped 选项
    }),
    sveltekit()
  ]
})
```

#### 添加配置文件

根据下面的描述设置你的 `uno.config.ts` 文件。

#### 全局样式

尽管几乎所有的样式都放在各个组件中，但仍然有一些必须放在全局样式表中的样式：预设、白名单和一个可选的重置（如果您使用了 `injectReset` 选项）。

将 `%unocss-svelte-scoped.global%` 占位符添加到你的 `<head>` 标签中。在 Svelte 中，这是 `index.html`。在 SvelteKit 中，这将位于 `app.html` 中的 `%sveltekit.head%` 之前：

```html
<head>
  <!-- ... -->
  <title>SvelteKit 使用 UnoCSS Svelte Scoped</title>
  %unocss-svelte-scoped.global% %sveltekit.head%
</head>
```

如果使用 SvelteKit，您还必须在 `hooks.server.js` 文件的 `transformPageChunk` 钩子中添加以下内容：

```js
/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  const response = await resolve(event, {
    transformPageChunk: ({ html }) =>
      html.replace(
        '%unocss-svelte-scoped.global%',
        'unocss_svelte_scoped_global_styles'
      )
  })
  return response
}
```

_在常规的 Svelte 项目中，Vite 的 `transformIndexHtml` 钩子将自动执行此操作。_

## Svelte 预处理器

通过使用预处理器将生成的样式直接放入构建的组件中，使用实用样式来构建一个不依赖于包含伴随 CSS 文件的组件库。在 Stackblitz 中查看 [SvelteKit 组件库示例](https://github.com/unocss/unocss/tree/main/examples/sveltekit-preprocess)：

[![在 StackBlitz 中打开](https://developer.stackblitz.com/img/open_in_stackblitz_small.svg)](https://stackblitz.com/fork/github/unocss/unocss/tree/main/examples/sveltekit-preprocess)

### 安装

::: code-group

```bash [pnpm]
pnpm add -D unocss @unocss/svelte-scoped
```

```bash [yarn]
yarn add -D unocss @unocss/svelte-scoped
```

```bash [npm]
npm install -D unocss @unocss/svelte-scoped
```

:::

#### 添加预处理器

在你的 Svelte 配置中添加 `@unocss/svelte-scoped/preprocess`：

```ts
// svelte.config.js
import adapter from '@sveltejs/adapter-auto'
import { vitePreprocess } from '@sveltejs/kit/vite'
import UnoCSS from '@unocss/svelte-scoped/preprocess'

const config = {
  preprocess: [
    vitePreprocess(),
    UnoCSS({
      // ...预处理器选项
    })
  ]
  // 其他 Svelte 配置
}
```

#### 在开发中不合并类名

在正常的应用中使用 Svelte Scoped，Vite 插件会自动检测 `dev` 和 `build`。在开发中，类将保持不同，并在浏览器的开发者工具中轻松切换开关。`class="mb-1 mr-1"` 将变成类似于 `class="_mb-1_9hwi32 _mr-1_84jfy4"`。在生产中，这些将被编译成单个类名，使用您所需的前缀，默认为 `uno-`，以及基于文件名 + 类名的哈希值，例如 `class="uno-84dke3"`。

如果要在使用预处理器时获得相同的行为，您必须根据环境手动设置 `combine` 选项。一种方法是安装 [cross-env](https://www.npmjs.com/package/cross-env)，并将您的 dev 脚本更新为以下内容：

```
"dev": "cross-env NODE_ENV=development vite dev",
```

然后调整你的 svelte.config.js：

```diff
+const prod = process.env.NODE_ENV !== 'development'
const config = {
  preprocess: [
    vitePreprocess(),
    UnoCSS({
+      combine: prod,
    }),
  ],
}
```

#### 配置

将您的 UnoCSS 设置添加到 `uno.config.ts` 文件中：

```ts
// uno.config.ts
import { defineConfig } from 'unocss'

export default defineConfig({
  // ...其他 UnoCSS 选项
})
```

由于正常的 UnoCSS 全局用法和 Svelte Scoped 用法之间的差异，不支持提取器。支持预设和转换器，如以下部分所述。有关所有其他详细信息，请参阅[配置文件](/guide/config-file) 和[配置参考](/config/)。

### 预设支持

由于全局样式表中有一些必要的全局样式，而其他样式都包含在各个组件中，所以需要根据情况处理预设：

| 预设                                                                                                                                                                                                                                                                                                                                                  | 是否支持 | 备注                                                                                                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [@unocss/preset-uno](https://unocss.dev/presets/uno)、[@unocss/preset-mini](https://unocss.dev/presets/mini)、[@unocss/preset-wind](https://unocss.dev/presets/wind)、[@unocss/preset-icons](https://github.com/unocss/unocss/tree/main/packages/preset-icons)、[@unocss/web-fonts](https://github.com/unocss/unocss/tree/main/packages/preset-icons) | ✅       | 所有这些预设以及社区插件，例如 [unocss-preset-forms](https://github.com/Julien-R44/unocss-preset-forms)，只依赖于规则/变体/预设的都可以工作。                                                                          |
| [@unocss/preset-typography](https://github.com/unocss/unocss/tree/main/packages/preset-typography)                                                                                                                                                                                                                                                    | ✅       | 由于此预设向预设的 preflight 中添加了规则集，使用此预设时必须将 `prose` 类添加到安全列表中，否则 preflight 将永远不会触发。此预设的所有其他类，例如 `prose-pink`，可以在组件范围内使用。                               |
| [@unocss/preset-rem-to-px](https://github.com/unocss/unocss/tree/main/packages/preset-rem-to-px)                                                                                                                                                                                                                                                      | ✅       | 此类预设和其他类似的只修改样式输出的预设都可以工作。                                                                                                                                                                   |
| [@unocss/preset-attributify](https://github.com/unocss/unocss/tree/main/packages/preset-attributify)                                                                                                                                                                                                                                                  | -        | 此预设不可用。可以使用 [unplugin-attributify-to-class](https://github.com/MellowCo/unplugin-attributify-to-class) Vite 插件 (`attributifyToClass({ include: [/\.svelte$/]})`) 替代，放在 Svelte Scoped Vite 插件之前。 |
| [@unocss/preset-tagify](https://github.com/unocss/unocss/tree/main/packages/preset-tagify)                                                                                                                                                                                                                                                            | -        | 添加自定义提取器的预设将无法工作。创建一个预处理器，将 `<text-red>Hi</text-red>` 转换为 `<span class="text-red">Hi</span>`，然后创建一个 PR 将链接添加到这里。                                                         |

对于其他预设，如果它们不依赖于传统的 `class="..."` 用法，则需要首先将这些类名预处理成 `class="..."` 属性。如果它们添加了像 typography 的 `.prose` 类这样的预设，那么您需要将触发预设添加的类放入安全列表中。

### 转换器支持

转换器支持对 CSS 文件（css|postcss|sass|scss|less|stylus|styl）进行处理。要使用它们，在您的 `vite.config.ts` 中的 `cssFileTransformers` 选项中添加转换器：

```ts
// vite.config.ts
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  plugins: [
    UnoCSS({
      cssFileTransformers: [transformerDirectives()]
    }),
    sveltekit()
  ]
})
```

::: info
由于 Svelte Scoped 的工作方式，不支持在 Svelte 组件中使用转换器。
:::

## 作用域化实用类释放创意

以下是何时可能需要使用作用域化样式的建议：如果在大型项目的生命周期中，每当您使用类似 `.md:max-w-[50vw]` 这样的类，您知道它只会被使用一次，您会因全局样式表的大小不断增加而感到不安，那么可以尝试使用这个包。对于您需要使用准确类名的犹豫会抑制创意。当然，您可以在样式块中使用 `--at-apply: md:max-w-[50vw]`，但这会变得繁琐，上下文中的样式很有用。此外，如果您想在项目中包含各种各样的图标，您将开始感受到将它们添加到全局样式表中的负担。当每个组件承载其自身的样式和图标时，您可以继续扩展项目，而无需分析每个新添加的元素的成本效益。

## 许可

- MIT 许可证 &copy; 2022-PRESENT [Jacob Bowdoin](https://github.com/jacob-8)
