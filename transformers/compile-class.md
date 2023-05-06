---
title: 编译类转换器
description: 将一组类编译为一个类 (@unocss/transformer-compile-class)
outline: deep
---

# 编译类转换器

<!-- @unocss-ignore -->


将一组类编译成一个类。灵感来自于Windi CSS的[编译模式](https://windicss.org/posts/modes.html#compilation-mode)以及[@UltraCakeBakery](https://github.com/UltraCakeBakery)的[issue #948](https://github.com/unocss/unocss/issues/948)。

## 安装

::: code-group
  ```bash [pnpm]
  pnpm add -D @unocss/transformer-compile-class
  ```
  ```bash [yarn]
  yarn add -D @unocss/transformer-compile-class
  ```
  ```bash [npm]
  npm install -D @unocss/transformer-compile-class
  ```
:::

```ts
// uno.config.ts
import { defineConfig } from 'unocss'
import transformerCompileClass from '@unocss/transformer-compile-class'

export default defineConfig({
  // ...
  transformers: [
    transformerCompileClass(),
  ],
})
```

## 用法

在类字符串的开头添加 `:uno:`，以将它们标记为编译对象。

例如：

```html
<div class=":uno: text-center sm:text-left">
  <div class=":uno: text-sm font-bold hover:text-red"/>
</div>
```

将被编译成：

```html
<div class="uno-qlmcrp">
  <div class="uno-0qw2gr"/>
</div>
```

```css
.uno-qlmcrp {
  text-align: center;
}
.uno-0qw2gr {
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 700;
}
.uno-0qw2gr:hover {
  --un-text-opacity: 1;
  color: rgba(248, 113, 113, var(--un-text-opacity));
}
@media (min-width: 640px) {
  .uno-qlmcrp {
    text-align: left;
  }
}
```

## 选项

您可以使用选项配置编译类的触发字符串和前缀。有关详细信息，请参考[类型](https://github.com/unocss/unocss/blob/main/packages/transformer-compile-class/src/index.ts#L4)。

## License

- MIT License &copy; 2021-PRESENT [Anthony Fu](https://github.com/antfu)
