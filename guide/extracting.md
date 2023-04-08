# 提取

由于 UnoCSS 是在**构建时**工作，这意味着只有在您的应用中静态呈现的工具类才会被生成。在运行时动态使用或从外部资源获取的工具类可能不会被应用。

默认情况下，UnoCSS 将从构建管道中的文件中提取工具类的使用情况，包括扩展名为 `.jsx`，`.tsx`，`.vue`，`.md`，`.html`，`.svelte`，`.astro` 的文件，并在需要时生成相应的 CSS。

.js 和 .ts 文件**不会默认包含在内**。

您可以在文件中任何位置添加 `@unocss-include`，以告诉 UnoCSS 强制扫描该文件，或者在配置中添加 `*.js` 或 `*.ts`，将所有 js/ts 文件包含为扫描目标。

```ts
// ./some-utils.js

// 由于 `.js` 文件默认不包含，下面的注释告诉 UnoCSS 强制扫描该文件。
// @unocss-include
export const classes = {
  active: 'bg-primary text-white',
  inactive: 'bg-gray-200 text-gray-500',
}
```

类似地，您还可以添加 `@unocss-ignore` 来绕过文件的扫描和转换。

## 白名单

有时您可能希望使用动态的拼接，例如：

```html
<div class="p-${size}"></div> <!-- 这不会生效！ -->
```

由于 UnoCSS 在构建时使用静态提取，编译时无法知道所有工具类的组合。为此，您可以配置 `safelist` 选项。

```ts
// uno.config.ts
safelist: 'p-1 p-2 p-3 p-4'.split(' ')
```

将始终生成对应的 CSS：

```css
.p-1 { padding: 0.25rem; }
.p-2 { padding: 0.5rem; }
.p-3 { padding: 0.75rem; }
.p-4 { padding: 1rem; }
```

或者更灵活：

```ts
// uno.config.ts
safelist: [
  ...Array.from({ length: 4 }, (_, i) => `p-${i + 1}`),
]
```
如果您寻求在运行时进行真正的动态生成，可以考虑查看 [@unocss/runtime](https://github.com/unocss/unocss/tree/main/packages/runtime) 包。



## 黑名单
与 `safelist` 类似，您还可以配置 `blocklist` 来排除一些工具类的生成。不同于 `safelist`，`blocklist` 接受字符串进行精确匹配和正则表达式进行模式匹配。


```ts
// uno.config.ts
exclude: [
  'p-1',
  /^p-[2-4]$/,
]
```

这将排除 p-1、p-2、p-3、p-4 的生成。


