---
outline: deep
---

# 为什么选择 UnoCSS？

## 动机

我们建议您阅读由 UnoCSS 的创建者 [Anthony Fu](https://antfu.me/) 撰写的博客文章 [Reimagine Atomic CSS](https://antfu.me/posts/reimagine-atomic-css-zh)，以更好地理解 UnoCSS 背后的动机。

## UnoCSS与其他框架的不同之处

### Windi CSS

UnoCSS 由 [Windi CSS](https://windicss.org/) 团队的成员创建，灵感来源于我们在Windi CSS中的工作。虽然 Windi CSS 在2023年3月停止了维护，但您可以将UnoCSS看作是Windi CSS的"精神继承者"。


UnoCSS继承了 Windi 的按需自然样式、[属性模式](/presets/attributify)、[快捷方式](/config/shortcuts)、[变体组](/transformers/variant-group)、[编译模式](/transformers/compile-class)等特性，并在此基础上构建了极具可扩展性和性能的UnoCSS，从而引入了新的功能，如[纯CSS图标](/presets/icons)、[无值属性模式](/presets/attributify#valueless-attributify)、[标签化](/presets/tagify)、[Web字体](/presets/web-fonts)等。

最重要的是，UnoCSS作为一种原子级CSS引擎，所有的功能都是可选的，并且可以轻松创建自己的约定、设计系统和预设 - 您可以选择需要的功能组合。

### Tailwind CSS

Windi CSS和UnoCSS都从[Tailwind CSS](https://tailwindcss.com/)中汲取了很多灵感。由于UnoCSS是从头开始构建的，因此我们可以很好地了解原子CSS是如何通过前期的艺术和抽象转化为优雅且强大的API的。虽然Tailwind CSS和UnoCSS有不同的设计目标，因此无法直接进行比较，但我们将列举一些差异:


Tailwind CSS是一个PostCSS插件，而UnoCSS是一个具有多种一流构建工具集成的同构引擎（包括[PostCSS插件](/integrations/postcss)）。这意味着UnoCSS可以在不同的地方更加灵活地使用（例如，[CDN运行时](/integrations/runtime)，可以动态生成CSS），并且可以与构建工具深度集成，提供更好的HMR、性能和开发者体验（例如，[Inspector](/tools/inspector)）。

从技术上讲，抛开权衡不谈，UnoCSS也被设计成完全可扩展和可定制化，而Tailwind CSS则更加偏向于一种观点。在Tailwind CSS上构建自定义设计系统（或设计令牌）可能会很困难，你无法真正摆脱Tailwind CSS的约定。而在UnoCSS上，您可以完全控制地构建几乎任何您想要的东西。例如，我们在一个[单一的预设](/presets/wind)中实现了整个与Tailwind CSS兼容的实用工具，而且还有许多其他有趣哲学的[社区预设](/presets/community)。


由于UnoCSS提供的灵活性，我们能够在其上尝试许多创新功能，例如：

- [纯CSS图标](/presets/icons)
- [属性模式](/presets/attributify)
- [变体组](/transformers/variant-group)
- [快捷方式](/config/shortcuts)
- [标签化](/presets/tagify)
- [Web 字体](/presets/web-fonts)
- [CDN 运行时](/integrations/runtime)
- [检查器](/tools/inspector)

UnoCSS相较于Tailwind CSS的缺点是不支持Tailwind的插件系统或配置，这意味着从一个定制化程度很高的Tailwind CSS项目迁移可能会更加困难。这是一个有意的决策，旨在使UnoCSS高性能和可扩展，我们相信这种权衡是值得的。
