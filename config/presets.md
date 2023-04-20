# 预设

预设是将被合并到主配置中的部分配置。

在编写预设时，我们通常会导出一个构造函数，您可以在其中请求一些特定于预设的选项。例如：

```ts
// my-preset.ts
import { Preset } from 'unocss'

export default function myPreset(options: MyPresetOptions): Preset {
  return {
    name: 'my-preset',
    rules: [
      // ...
    ],
    variants: {
      // ...
    }
    // 它支持您在根配置中拥有的大多数配置
  }
}
```

然后用户可以像这样使用它：

```ts
// unocss.config.ts
import { defineConfig } from 'unocss'
import myPreset from './my-preset'

export default defineConfig({
  presets: [
    myPreset({
      /* 预设选项 */
    })
  ]
})
```

您可以查看[官方预设](/presets/)和[社区预设](/presets/community)以获取更多示例。
