---
title: UnoCSS VS Code 扩展
description: UnoCSS for VS Code.
---

# UnoCSS VS Code 扩展

[在插件市场安装](https://marketplace.visualstudio.com/items?itemName=antfu.unocss)

- 对匹配到的工具进行装饰和提示
- 自动加载配置
- 匹配到的工具数量

## 配置

为了获得最佳的 IDE 使用体验，我们建议您 [使用单独的 `uno.config.ts` 文件](/guide/config-file) 配置您的 UnoCSS。

扩展程序将尝试在您的项目中查找 `UnoCSS` 配置。如果未找到配置，则扩展程序将被禁用。要使用 `monorepo`，请在您的 `settings.json` 中更改 `unocss.root` 选项，以便它指向包含配置文件的目录。

```json
{
  "unocss.root": "packages/client"
}
```
