---
outline: deep
---

# 提取内容

UnoCSS 的工作原理是从代码库中搜索实用程序的用法，并根据需要生成相应的 CSS。我们称这个过程为**提取**。

## 内容来源

UnoCSS 支持从多个来源提取实用程序的用法：

- [流水线](#从构建工具流水线中提取) - 直接从构建工具流水线中提取
- [文件系统](#从文件系统中提取) - 通过读取和监视文件从文件系统中提取
- [内联](#从内联文本中提取) - 从内联纯文本中提取

来自不同来源的实用程序用法将合并在一起，并生成最终的 CSS。

### 从构建工具流水线中提取

这在[Vite](/integrations/vite)和[Webpack](/integrations/webpack)集成中得到支持。

UnoCSS 将读取通过构建工具流水线的内容，并从中提取实用程序的用法。这是最高效和准确的提取方式，因为我们只会智能地提取实际在您的应用中使用的用法，提取过程中不会进行额外的文件 IO 操作。

默认情况下，UnoCSS 将从构建流水线中的具有扩展名 `.jsx`、`.tsx`、`.vue`、`.md`、`.html`、`.svelte`、`.astro` 的文件中提取实用程序用法，但不会包括 `.js` 和 `.ts` 文件。

要配置它们，您可以更新您的 `uno.config.ts` 文件：

```ts
// uno.config.ts
export default defineConfig({
  content: {
    pipeline: {
      include: [
        // 默认配置
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // 包括 js/ts 文件
        'src/**/*.{js,ts}'
      ]
      // 排除文件
      // exclude: []
    }
  }
})
```

您还可以在文件中的任何位置添加 `@unocss-include` 魔术注释，以告诉 UnoCSS 扫描该文件，或者在配置中添加 `*.js` 或 `*.ts`，以将所有 js/ts 文件包含为扫描目标。

```ts
// ./some-utils.js

// 由于默认情况下不包括 `.js` 文件，
// 下面的注释告诉 UnoCSS 强制扫描此文件。
// @unocss-include
export const classes = {
  active: 'bg-primary text-white',
  inactive: 'bg-gray-200 text-gray-500'
}
```

类似地，您还可以添加 `@unocss-ignore` 来绕过对文件的扫描和转换。

如果您希望 UnoCSS 跳过一段不需要提取的代码块，您可以使用成对的 `@unocss-skip-start` 和 `@unocss-skip-end`：

```html
<p class="text-green text-xl">绿色 大号</p>

<!-- @unocss-skip-start -->
<!-- `text-red` 将不会被提取 -->
<p class="text-red">红色</p>
<!-- @unocss-skip-end -->
```

:::tip
您可以在任何提取文件中使用 `@unocss-skip-start` 和 `@unocss-skip-end` 魔术注释，必须**成对**使用才能生效。
:::

### 从文件系统中提取

在一些情况下，您可能使用的集成无法访问构建工具流水线（例如 [PostCSS](/integrations/postcss) 插件），或者您正在与后端框架集成，代码不会通过流水线处理，您可以手动指定要提取的文件。

```ts
// uno.config.ts
export default defineConfig({
  content: {
    filesystem: ['src/**/*.php', 'public/*.html']
  }
})
```

匹配的文件将直接从文件系统中读取，并在开发模式下监视更改。

### 从内联文本中提取

此外，您还可以从内联文本中提取实用程序的用法，这些文本可能来自其他地方。

您还可以传递一个异步函数来返回内容。但请注意，该函数在构建时只会被调用一次。

```ts
// uno.config.ts
export default defineConfig({
  content: {
    inline: [
      // 纯文本
      '<div class="p-4 text-red">一些文本</div>',
      // 异步获取器
      async () => {
        const response = await fetch('https://example.com')
        return response.text()
      }
    ]
  }
})
```

## 限制

由于 UnoCSS 是在**构建时**工作，这意味着只会生成和发送静态呈现的实用程序到您的应用程序。动态使用或在运行时从外部资源获取的实用程序可能**不会**被应用。

### 白名单

有时您可能想要使用动态的拼接，例如：

```html
<div class="p-${size}"></div>
<!-- 这不起作用！ -->
```

由于 UnoCSS 在构建时使用静态提取，编译时我们无法知道所有实用程序的组合情况。为此，您可以配置 `safelist` 选项。

```ts
// uno.config.ts
safelist: 'p-1 p-2 p-3 p-4'.split(' ')
```

将始终生成相应的 CSS：

```css
.p-1 {
  padding: 0.25rem;
}
.p-2 {
  padding: 0.5rem;
}
.p-3 {
  padding: 0.75rem;
}
.p-4 {
  padding: 1rem;
}
```

或者更灵活一些：

```ts
// uno.config.ts
safelist: [...Array.from({ length: 4 }, (_, i) => `p-${i + 1}`)]
```

如果您寻求在运行时进行真正的动态生成，请查看 [@unocss

/runtime](https://github.com/unocss/unocss/tree/main/packages/runtime) 包。

### 黑名单

与 `safelist` 类似，您还可以配置 `blocklist` 来排除某些实用程序的生成。与 `safelist` 不同，`blocklist` 同时接受字符串进行精确匹配和正则表达式进行模式匹配。

```ts
// uno.config.ts
blocklist: ['p-1', /^p-[2-4]$/]
```

这将排除 `p-1` 和 `p-2`、`p-3`、`p-4` 的生成。有助于排除一些误报信息。
