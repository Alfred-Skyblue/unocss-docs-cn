import{_ as s,o as n,c as a,O as p}from"./chunks/framework.16797aa5.js";const f=JSON.parse('{"title":"预设","description":"预设是 UnoCSS 的核心。他们让您在几分钟内制作自己的自定义框架。","frontmatter":{"title":"预设","description":"预设是 UnoCSS 的核心。他们让您在几分钟内制作自己的自定义框架。","outline":"deep"},"headers":[],"relativePath":"guide/presets.md","lastUpdated":1682258289000}'),l={name:"guide/presets.md"},o=p(`<h1 id="预设" tabindex="-1">预设 <a class="header-anchor" href="#预设" aria-label="Permalink to &quot;预设&quot;">​</a></h1><p>预设是 UnoCSS 的核心。他们让您在几分钟内制作自己的自定义框架。</p><h3 id="使用预设" tabindex="-1">使用预设 <a class="header-anchor" href="#使用预设" aria-label="Permalink to &quot;使用预设&quot;">​</a></h3><p>要将预设设置到您的项目中：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#758575DD;">// uno.config.ts</span></span>
<span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">defineConfig</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">presetAttributify</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">presetUno</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">unocss</span><span style="color:#C98A7D99;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">default</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">defineConfig</span><span style="color:#666666;">({</span></span>
<span class="line"><span style="color:#666666;">  </span><span style="color:#B8A965;">presets</span><span style="color:#666666;">: [</span></span>
<span class="line"><span style="color:#666666;">    </span><span style="color:#80A665;">presetAttributify</span><span style="color:#666666;">({</span></span>
<span class="line"><span style="color:#666666;">      </span><span style="color:#758575DD;">/* 预设选项 */</span></span>
<span class="line"><span style="color:#666666;">    }),</span></span>
<span class="line"><span style="color:#666666;">    </span><span style="color:#80A665;">presetUno</span><span style="color:#666666;">()</span></span>
<span class="line"><span style="color:#666666;">    </span><span style="color:#758575DD;">// ...自定义预设</span></span>
<span class="line"><span style="color:#666666;">  ]</span></span>
<span class="line"><span style="color:#666666;">})</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">// uno.config.ts</span></span>
<span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">defineConfig</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">presetAttributify</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">presetUno</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">unocss</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1E754F;">export</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">default</span><span style="color:#393A34;"> </span><span style="color:#59873A;">defineConfig</span><span style="color:#999999;">({</span></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#998418;">presets</span><span style="color:#999999;">: [</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#59873A;">presetAttributify</span><span style="color:#999999;">({</span></span>
<span class="line"><span style="color:#999999;">      </span><span style="color:#A0ADA0;">/* 预设选项 */</span></span>
<span class="line"><span style="color:#999999;">    }),</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#59873A;">presetUno</span><span style="color:#999999;">()</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#A0ADA0;">// ...自定义预设</span></span>
<span class="line"><span style="color:#999999;">  ]</span></span>
<span class="line"><span style="color:#999999;">})</span></span></code></pre></div><p>当指定了 <code>presets</code> 选项时，将会忽略默认预设。</p><p>要禁用默认预设，您可以将 <code>presets</code> 设置为空数组：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#758575DD;">// uno.config.ts</span></span>
<span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">defineConfig</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">unocss</span><span style="color:#C98A7D99;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">default</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">defineConfig</span><span style="color:#666666;">({</span></span>
<span class="line"><span style="color:#666666;">  </span><span style="color:#B8A965;">presets</span><span style="color:#666666;">: [], </span><span style="color:#758575DD;">// 禁用默认预设</span></span>
<span class="line"><span style="color:#666666;">  </span><span style="color:#B8A965;">rules</span><span style="color:#666666;">: [</span></span>
<span class="line"><span style="color:#666666;">    </span><span style="color:#758575DD;">// 您的自定义规则</span></span>
<span class="line"><span style="color:#666666;">  ]</span></span>
<span class="line"><span style="color:#666666;">})</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">// uno.config.ts</span></span>
<span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">defineConfig</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">unocss</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1E754F;">export</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">default</span><span style="color:#393A34;"> </span><span style="color:#59873A;">defineConfig</span><span style="color:#999999;">({</span></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#998418;">presets</span><span style="color:#999999;">: [], </span><span style="color:#A0ADA0;">// 禁用默认预设</span></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#998418;">rules</span><span style="color:#999999;">: [</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#A0ADA0;">// 您的自定义规则</span></span>
<span class="line"><span style="color:#999999;">  ]</span></span>
<span class="line"><span style="color:#999999;">})</span></span></code></pre></div><p>您可以在<a href="/unocss-docs-cn/presets/">官方预设</a>和<a href="/unocss-docs-cn/presets/community">社区预设</a>中查看更多预设选项。</p>`,9),e=[o];function t(c,r,y,i,A,D){return n(),a("div",null,e)}const E=s(l,[["render",t]]);export{f as __pageData,E as default};