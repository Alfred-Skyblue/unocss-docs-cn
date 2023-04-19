# Transformers

Transformers 用于转换源代码以支持约定。

它提供了一个统一的接口来转换源代码以支持约定。

```ts
// my-transformer.ts
import { createFilter } from '@rollup/pluginutils'
import { SourceCodeTransformer } from 'unocss'

export default function myTransformers(options: MyOptions = {}): SourceCodeTransformer {
  return {
    name: 'my-transformer',
    enforce: 'pre', // 在其他transformer之前执行
    idFilter() {
      // 只转换 .tsx 和 .jsx 文件
      return id.match(/\.[tj]sx$/)
    },
    async transform(code, id, { uno }) {
      // code 是一个 MagicString 实例
      code.appendRight(0, '/* my transformer */')
    },
  }
}
```

您可以查看[官方的 transformers](/presets/#transformers)了解更多示例。

