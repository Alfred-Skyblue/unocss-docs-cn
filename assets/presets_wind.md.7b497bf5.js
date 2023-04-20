import{_ as s,o as a,c as n,N as o}from"./chunks/framework.fcd62fc8.js";const h=JSON.parse('{"title":"Wind 预设","description":"UnoCSS 的 Tailwind / Windi CSS 紧凑预设 (@unocss/preset-wind).","frontmatter":{"title":"Wind 预设","description":"UnoCSS 的 Tailwind / Windi CSS 紧凑预设 (@unocss/preset-wind).","outline":"deep"},"headers":[],"relativePath":"presets/wind.md","lastUpdated":1681962075000}'),l={name:"presets/wind.md"},p=o(`<h1 id="wind-预设" tabindex="-1">Wind 预设 <a class="header-anchor" href="#wind-预设" aria-label="Permalink to &quot;Wind 预设&quot;">​</a></h1><p>用于 UnoCSS 的 TailWind/Windi CSS 预设。</p><p><a href="https://github.com/unocss/unocss/tree/main/packages/preset-wind" target="_blank" rel="noreferrer">源码</a></p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>该预设继承 <a href="/unocss-docs-cn/presets/mini"><code>@unocss/preset-mini</code></a>。</p></div><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-K6POk" id="tab-HRFwt-c" checked="checked"><label for="tab-HRFwt-c">pnpm</label><input type="radio" name="group-K6POk" id="tab-nXx4dCv"><label for="tab-nXx4dCv">yarn</label><input type="radio" name="group-K6POk" id="tab-4B8yi_3"><label for="tab-4B8yi_3">npm</label></div><div class="blocks"><div class="language-bash active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#80A665;">pnpm</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">add</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">-D</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">@unocss/preset-wind</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#59873A;">pnpm</span><span style="color:#393A34;"> </span><span style="color:#B56959;">add</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">-D</span><span style="color:#393A34;"> </span><span style="color:#B56959;">@unocss/preset-wind</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#80A665;">yarn</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">add</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">-D</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">@unocss/preset-wind</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#59873A;">yarn</span><span style="color:#393A34;"> </span><span style="color:#B56959;">add</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">-D</span><span style="color:#393A34;"> </span><span style="color:#B56959;">@unocss/preset-wind</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#80A665;">npm</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">install</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">-D</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">@unocss/preset-wind</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#59873A;">npm</span><span style="color:#393A34;"> </span><span style="color:#B56959;">install</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">-D</span><span style="color:#393A34;"> </span><span style="color:#B56959;">@unocss/preset-wind</span></span></code></pre></div></div></div><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#758575DD;">// uno.config.ts</span></span>
<span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">defineConfig</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">unocss</span><span style="color:#C98A7D99;">&#39;</span></span>
<span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">presetWind</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">@unocss/preset-wind</span><span style="color:#C98A7D99;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">default</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">defineConfig</span><span style="color:#666666;">({</span></span>
<span class="line"><span style="color:#666666;">  </span><span style="color:#B8A965;">presets</span><span style="color:#666666;">: [</span><span style="color:#80A665;">presetWind</span><span style="color:#666666;">()]</span></span>
<span class="line"><span style="color:#666666;">})</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">// uno.config.ts</span></span>
<span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">defineConfig</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">unocss</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">presetWind</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">@unocss/preset-wind</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1E754F;">export</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">default</span><span style="color:#393A34;"> </span><span style="color:#59873A;">defineConfig</span><span style="color:#999999;">({</span></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#998418;">presets</span><span style="color:#999999;">: [</span><span style="color:#59873A;">presetWind</span><span style="color:#999999;">()]</span></span>
<span class="line"><span style="color:#999999;">})</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>该预设已经包含在 unocss 包中，您也可以从那里导入：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">presetWind</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">unocss</span><span style="color:#C98A7D99;">&#39;</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">presetWind</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">unocss</span><span style="color:#B5695999;">&#39;</span></span></code></pre></div></div><h2 id="规则" tabindex="-1">规则 <a class="header-anchor" href="#规则" aria-label="Permalink to &quot;规则&quot;">​</a></h2><p>该预设与 <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">Tailwind CSS</a> 和 <a href="https://windicss.org/" target="_blank" rel="noreferrer">Windi CSS</a> 兼容，您可以参考它们的 <a href="https://tailwindcss.com/docs" target="_blank" rel="noreferrer">文档</a> 获取详细的使用信息。</p><p>有关此预设中包含的所有规则和预设，请参见我们的<a href="/unocss-docs-cn/interactive/">交互式文档</a>或直接转到<a href="https://github.com/unocss/unocss/tree/main/packages/preset-wind" target="_blank" rel="noreferrer">源码</a>。</p><h2 id="与-windi-css-的不同之处" tabindex="-1">与 Windi CSS 的不同之处 <a class="header-anchor" href="#与-windi-css-的不同之处" aria-label="Permalink to &quot;与 Windi CSS 的不同之处&quot;">​</a></h2><h3 id="断点" tabindex="-1">断点 <a class="header-anchor" href="#断点" aria-label="Permalink to &quot;断点&quot;">​</a></h3><table><thead><tr><th style="text-align:left;">Windi CSS</th><th style="text-align:left;">UnoCSS</th></tr></thead><tbody><tr><td style="text-align:left;"><code>&lt;sm:p-1</code></td><td style="text-align:left;"><code>lt-sm:p-1</code></td></tr><tr><td style="text-align:left;"><code>@lg:p-1</code></td><td style="text-align:left;"><code>at-lg:p-1</code></td></tr><tr><td style="text-align:left;"><code>&gt;xl:p-1</code></td><td style="text-align:left;"><code>lg:p-1</code></td></tr></tbody></table><h3 id="方括号语法中的空格" tabindex="-1">方括号语法中的空格 <a class="header-anchor" href="#方括号语法中的空格" aria-label="Permalink to &quot;方括号语法中的空格&quot;">​</a></h3><p>该预设使用 <code>_</code> 而不是 <code>,</code> 来表示方括号语法中的空格。</p><table><thead><tr><th style="text-align:left;">Windi CSS</th><th style="text-align:left;">UnoCSs</th></tr></thead><tbody><tr><td style="text-align:left;"><code>grid-cols-[1fr,10px,max-content]</code></td><td style="text-align:left;"><code>grid-cols-[1fr_10px_max-content]</code></td></tr></tbody></table><p>由于某些 CSS 规则需要 <code>,</code> 作为值的一部分，例如 <code>grid-cols-[repeat(3,auto)]</code>。</p><h2 id="实验性特性" tabindex="-1">实验性特性 <a class="header-anchor" href="#实验性特性" aria-label="Permalink to &quot;实验性特性&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>该预设包含可能随时以破坏性方式更改的实验性特性。</p></div><h3 id="媒体悬停" tabindex="-1">媒体悬停 <a class="header-anchor" href="#媒体悬停" aria-label="Permalink to &quot;媒体悬停&quot;">​</a></h3><p>媒体悬停解决了移动端触摸包含悬停样式的目标后，悬停样式将一直持续到其他地方触摸的<a href="https://css-tricks.com/solving-sticky-hover-states-with-media-hover-hover/" target="_blank" rel="noreferrer">粘滞悬停</a>问题。</p><p>由于常规的 <code>:hover</code> 样式可能被广泛使用，该变体使用 <code>@hover</code> 语法来区别于常规的 <code>hover</code> 伪类。</p><p>变体 <code>@hover-text-red</code> 将输出：</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#666666;">@</span><span style="color:#4D9375;">media</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">(</span><span style="color:#B8A965;">hover</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#B8A965;">hover</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">and</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">(</span><span style="color:#DBD7CAEE;">pointer</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> fine</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">.</span><span style="color:#C99076;">\\@</span><span style="color:#BD976A;">hover-text-red</span><span style="color:#666666;">:</span><span style="color:#BD976A;">hover</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#BD976A;">--un-text-opacity</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">1</span><span style="color:#666666;">;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#B8A965;">color</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#B8A965;">rgba</span><span style="color:#666666;">(</span><span style="color:#4C9A91;">248</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">113</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4C9A91;">113</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#B8A965;">var</span><span style="color:#666666;">(</span><span style="color:#BD976A;">--un-text-opacity</span><span style="color:#666666;">));</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#666666;">}</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#999999;">@</span><span style="color:#1E754F;">media</span><span style="color:#393A34;"> </span><span style="color:#999999;">(</span><span style="color:#998418;">hover</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#998418;">hover</span><span style="color:#999999;">)</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">and</span><span style="color:#393A34;"> </span><span style="color:#999999;">(</span><span style="color:#393A34;">pointer</span><span style="color:#999999;">:</span><span style="color:#393A34;"> fine</span><span style="color:#999999;">)</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">.</span><span style="color:#A65E2B;">\\@</span><span style="color:#B07D48;">hover-text-red</span><span style="color:#999999;">:</span><span style="color:#B07D48;">hover</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B07D48;">--un-text-opacity</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">1</span><span style="color:#999999;">;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#998418;">color</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#998418;">rgba</span><span style="color:#999999;">(</span><span style="color:#2F798A;">248</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">113</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#2F798A;">113</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#998418;">var</span><span style="color:#999999;">(</span><span style="color:#B07D48;">--un-text-opacity</span><span style="color:#999999;">));</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#999999;">}</span></span></code></pre></div><h2 id="options" tabindex="-1">Options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;Options&quot;">​</a></h2><div class="info custom-block"><p class="custom-block-title">INFO</p><p>这些预设选项继承自 <a href="/unocss-docs-cn/presets/mini#options"><code>@unocss/preset-mini</code></a>。</p></div>`,27),e=[p];function t(c,r,i,y,d,A){return a(),n("div",null,e)}const C=s(l,[["render",t]]);export{h as __pageData,C as default};
