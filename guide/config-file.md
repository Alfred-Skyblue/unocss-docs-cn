# 配置文件

我们**强烈推荐使用一个专用的 `uno.config.ts` 文件**来配置您的 UnoCSS，以便在 IDE 和其他集成中获得最佳体验。

一个完整的配置文件如下所示：

```ts
// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  shortcuts: [
    // ...
  ],
  theme: {
    colors: {
      // ...
    }
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        // ...
      }
    })
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()]
})
```

与在 vite.config.ts 或其他工具配置中内联配置相比，专用的配置文件将更好地与[IDEs](/integrations/vscode)和其他工具集成，例如[ESLint plugin](/integrations/eslint)，并且能够更好地支持 HMR（热更新）。

默认情况下，UnoCSS 将自动在您的项目根目录中查找 `uno.config.{js,ts,mjs,mts}` 或 `unocss.config.{js,ts,mjs,mts}` 文件。您还可以手动指定配置文件，例如在 Vite 中：

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [
    UnoCSS({
      configFile: '../my-uno.config.ts'
    })
  ]
})
```

有关支持的配置选项的完整列表，请参阅[配置参考](/config/)。
