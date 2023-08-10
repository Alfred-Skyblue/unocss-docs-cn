---
title: UnoCSS CLI
description: The CLI for UnoCSS (@unocss/cli).
---

# CLI

UnoCSS 的命令行界面：`@unocss/cli`。

- 🍱 适用于传统的后端框架，如 Laravel 或 Kirby
- 👀 包含[监听模式](#开发模式)
- 🔌 支持通过[`uno.config.ts`](#配置)进行自定义配置

## 安装

这个包已经包含在 `unocss` 包中:

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

你也可以单独安装 `@unocss/cli` 包:

::: code-group

```bash [pnpm]
pnpm add -D @unocss/cli
```

```bash [yarn]
yarn add -D @unocss/cli
```

```bash [npm]
npm install -D @unocss/cli
```

:::

## 使用

你可以将多个 glob 模式传递给 `@unocss/cli`：

```bash
unocss "site/snippets/**/*.php" "site/templates/**/*.php"
```

配置示例:

::: info
确保在 npm 脚本的 glob 模式中添加转义符号。
:::

```json
{
  "scripts": {
    "dev": "unocss \"site/{snippets,templates}/**/*.php\" --watch",
    "build": "unocss \"site/{snippets,templates}/**/*.php\""
  },
  "devDependencies": {
    "@unocss/cli": "latest"
  }
}
```

### 开发模式

添加 --watch (或 -w) 标志以启用文件变动监听:

```bash
unocss "site/{snippets,templates}/**/*.php" --watch
```

### 生产模式

```bash
unocss "site/{snippets,templates}/**/*.php"
```

默认情况下，生成的 `uno.css` 将会保存在当前目录中。

## 内置功能

### 配置

在项目的根目录下创建一个 `uno.config.js` 或 `uno.config.ts` 配置文件来自定义 UnoCSS。

```ts
import { defineConfig } from 'unocss'

export default defineConfig({
  cli: {
    entry: {} // CliEntryItem | CliEntryItem[]
  }
  // ...
})

interface CliEntryItem {
  /**
   * 匹配文件的glob模式
   */
  patterns: string[]
  /**
   * 生成的UnoCSS文件的输出文件名
   */
  outFile: string
}
```

有关选项的完整列表，请查看[UnoCSS 配置文档](/config/)。

## 选项

| Options                    |                                                                          |
| -------------------------- | ------------------------------------------------------------------------ |
| `-v, --version`            | 显示当前 UnoCSS 的版本号                                                 |
| `-c, --config-file <file>` | 配置文件                                                                 |
| `-o, --out-file <file>`    | 生成的 UnoCSS 文件的输出文件名。默认为当前工作目录中的 `uno.css`         |
| `--stdout`                 | 将生成的 UnoCSS 文件写入 STDOUT。会导致 `--watch` 和 `--out-file` 被忽略 |
| `-w, --watch`              | 指示是否应监视 glob 模式找到的文件                                       |
| `--preflights`             | 启用预检样式                                                             |
| `-m, --minify`             | 缩小生成的 CSS                                                           |
| `-h, --help`               | 显示可用的 CLI 命令                                                      |
