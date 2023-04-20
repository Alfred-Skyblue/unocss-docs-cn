---
outline: deep
---

# 为什么选择 UnoCSS？

## 动机

我们建议您阅读由 UnoCSS 的创建者 [Anthony Fu](https://antfu.me/) 撰写的博客文章 [Reimagine Atomic CSS](https://antfu.me/posts/reimagine-atomic-css-zh)，以更好地理解 UnoCSS 背后的动机。

## UnoCSS 与其他框架的不同之处

### Windi CSS

UnoCSS 由 [Windi CSS](https://windicss.org/) 团队的成员创建，灵感来源于我们在 Windi CSS 中的工作。虽然 Windi CSS 在 2023 年 3 月停止了维护，但您可以将 UnoCSS 看作是 Windi CSS 的"精神继承者"。

UnoCSS 继承了 Windi 的按需自然样式、[属性模式](/presets/attributify)、[快捷方式](/config/shortcuts)、[变体组](/transformers/variant-group)、[编译模式](/transformers/compile-class)等特性，并在此基础上构建了极具可扩展性和性能的 UnoCSS，从而引入了新的功能，如[纯 CSS 图标](/presets/icons)、[无值属性模式](/presets/attributify#valueless-attributify)、[标签化](/presets/tagify)、[Web 字体](/presets/web-fonts)等。

最重要的是，UnoCSS 作为一种原子级 CSS 引擎，所有的功能都是可选的，并且可以轻松创建自己的约定、设计系统和预设 - 您可以选择需要的功能组合。

### Tailwind CSS

Windi CSS 和 UnoCSS 都从[Tailwind CSS](https://tailwindcss.com/)中汲取了很多灵感。由于 UnoCSS 是从头开始构建的，因此我们可以很好地了解原子 CSS 是如何通过前期的艺术和抽象转化为优雅且强大的 API 的。虽然 Tailwind CSS 和 UnoCSS 有不同的设计目标，因此无法直接进行比较，但我们将列举一些差异:

Tailwind CSS 是一个 PostCSS 插件，而 UnoCSS 是一个具有多种一流构建工具集成的同构引擎（包括[PostCSS 插件](/integrations/postcss)）。这意味着 UnoCSS 可以在不同的地方更加灵活地使用（例如，[CDN 运行时](/integrations/runtime)，可以动态生成 CSS），并且可以与构建工具深度集成，提供更好的 HMR、性能和开发者体验（例如，[Inspector](/tools/inspector)）。

从技术上讲，抛开权衡不谈，UnoCSS 也被设计成完全可扩展和可定制化，而 Tailwind CSS 则更加偏向于一种观点。在 Tailwind CSS 上构建自定义设计系统（或设计令牌）可能会很困难，你无法真正摆脱 Tailwind CSS 的约定。而在 UnoCSS 上，您可以完全控制地构建几乎任何您想要的东西。例如，我们在一个[单一的预设](/presets/wind)中实现了整个与 Tailwind CSS 兼容的工具，而且还有许多其他有趣哲学的[社区预设](/presets/community)。

由于 UnoCSS 提供的灵活性，我们能够在其上尝试许多创新功能，例如：

- [纯 CSS 图标](/presets/icons)
- [属性模式](/presets/attributify)
- [变体组](/transformers/variant-group)
- [快捷方式](/config/shortcuts)
- [标签化](/presets/tagify)
- [Web 字体](/presets/web-fonts)
- [CDN 运行时](/integrations/runtime)
- [检查器](/tools/inspector)

UnoCSS 相较于 Tailwind CSS 的缺点是不支持 Tailwind 的插件系统或配置，这意味着从一个定制化程度很高的 Tailwind CSS 项目迁移可能会更加困难。这是一个有意的决策，旨在使 UnoCSS 高性能和可扩展，我们相信这种权衡是值得的。
