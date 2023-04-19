# 提取器

提取器用于从源代码中提取工具的使用情况。

默认情况下，会使用 [extractorSplit](https://github.com/unocss/unocss/blob/main/packages/core/src/extractors/split.ts) 进行拆分。该提取器会将源代码拆分为标记，然后直接提供给引擎。


您也可以提供自己的提取器来从源代码中提取工具的使用情况。

例如，您可以查看我们如何实现 [pug 提取器](https://github.com/unocss/unocss/tree/main/packages/extractor-pug) 或 [attributify 提取器](https://github.com/unocss/unocss/blob/main/packages/preset-attributify/src/extractor.ts)。
