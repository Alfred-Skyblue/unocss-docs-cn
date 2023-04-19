import{_ as s,o as a,c as n,N as l}from"./chunks/framework.fcd62fc8.js";const h=JSON.parse('{"title":"UnoCSS Nuxt Module","description":"UnoCSS 的 Nuxt 模块。","frontmatter":{"title":"UnoCSS Nuxt Module","description":"UnoCSS 的 Nuxt 模块。"},"headers":[],"relativePath":"integrations/nuxt.md","lastUpdated":1681912600000}'),e={name:"integrations/nuxt.md"},o=l(`<h1 id="nuxt-module" tabindex="-1">Nuxt Module <a class="header-anchor" href="#nuxt-module" aria-label="Permalink to &quot;Nuxt Module&quot;">​</a></h1><p>UnoCSS 的 Nuxt 模块。</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-uiFgq" id="tab-zwHtBYj" checked="checked"><label for="tab-zwHtBYj">pnpm</label><input type="radio" name="group-uiFgq" id="tab-cE7oQho"><label for="tab-cE7oQho">yarn</label><input type="radio" name="group-uiFgq" id="tab-6r85-B0"><label for="tab-6r85-B0">npm</label></div><div class="blocks"><div class="language-bash active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#80A665;">pnpm</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">add</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">-D</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">@unocss/nuxt</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#59873A;">pnpm</span><span style="color:#393A34;"> </span><span style="color:#B56959;">add</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">-D</span><span style="color:#393A34;"> </span><span style="color:#B56959;">@unocss/nuxt</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#80A665;">yarn</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">add</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">-D</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">@unocss/nuxt</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#59873A;">yarn</span><span style="color:#393A34;"> </span><span style="color:#B56959;">add</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">-D</span><span style="color:#393A34;"> </span><span style="color:#B56959;">@unocss/nuxt</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#80A665;">npm</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">install</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">-D</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">@unocss/nuxt</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#59873A;">npm</span><span style="color:#393A34;"> </span><span style="color:#B56959;">install</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">-D</span><span style="color:#393A34;"> </span><span style="color:#B56959;">@unocss/nuxt</span></span></code></pre></div></div></div><p>在您的 Nuxt 配置文件中添加 <code>@unocss/nuxt</code> ：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#758575DD;">// nuxt.config.ts</span></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">default</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">defineNuxtConfig</span><span style="color:#666666;">({</span></span>
<span class="line"><span style="color:#666666;">  </span><span style="color:#B8A965;">modules</span><span style="color:#666666;">: [</span></span>
<span class="line"><span style="color:#666666;">    </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">@unocss/nuxt</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#666666;">  ],</span></span>
<span class="line"><span style="color:#666666;">})</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">// nuxt.config.ts</span></span>
<span class="line"><span style="color:#1E754F;">export</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">default</span><span style="color:#393A34;"> </span><span style="color:#59873A;">defineNuxtConfig</span><span style="color:#999999;">({</span></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#998418;">modules</span><span style="color:#999999;">: [</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">@unocss/nuxt</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#999999;">  ],</span></span>
<span class="line"><span style="color:#999999;">})</span></span></code></pre></div><p>创建一个 <code>uno.config.ts</code> 文件：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#758575DD;">// uno.config.ts</span></span>
<span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">defineConfig</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">unocss</span><span style="color:#C98A7D99;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">default</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">defineConfig</span><span style="color:#666666;">({</span></span>
<span class="line"><span style="color:#666666;">  </span><span style="color:#758575DD;">// ...UnoCSS 选项</span></span>
<span class="line"><span style="color:#666666;">})</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">// uno.config.ts</span></span>
<span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">defineConfig</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">unocss</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1E754F;">export</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">default</span><span style="color:#393A34;"> </span><span style="color:#59873A;">defineConfig</span><span style="color:#999999;">({</span></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#A0ADA0;">// ...UnoCSS 选项</span></span>
<span class="line"><span style="color:#999999;">})</span></span></code></pre></div><p><code>uno.css</code> 入口将会被模块自动注入。</p><h2 id="支持状态" tabindex="-1">支持状态 <a class="header-anchor" href="#支持状态" aria-label="Permalink to &quot;支持状态&quot;">​</a></h2><table><thead><tr><th></th><th style="text-align:left;">Nuxt 2</th><th style="text-align:left;">Nuxt Bridge</th><th style="text-align:left;">Nuxt 3</th></tr></thead><tbody><tr><td>Webpack Dev</td><td style="text-align:left;">✅</td><td style="text-align:left;">✅</td><td style="text-align:left;">🚧</td></tr><tr><td>Webpack Build</td><td style="text-align:left;">✅</td><td style="text-align:left;">✅</td><td style="text-align:left;">✅</td></tr><tr><td>Vite Dev</td><td style="text-align:left;">-</td><td style="text-align:left;">✅</td><td style="text-align:left;">✅</td></tr><tr><td>Vite Build</td><td style="text-align:left;">-</td><td style="text-align:left;">✅</td><td style="text-align:left;">✅</td></tr></tbody></table><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><p>我们建议使用专用的 uno.config.ts 文件进行配置。详见<a href="/unocss-docs-cn/guide/config-file">配置文件</a>了解更多细节。</p><h2 id="license" tabindex="-1">License <a class="header-anchor" href="#license" aria-label="Permalink to &quot;License&quot;">​</a></h2><ul><li>MIT License © 2021-PRESENT <a href="https://github.com/antfu" target="_blank" rel="noreferrer">Anthony Fu</a></li></ul>`,15),t=[o];function p(c,r,i,d,y,u){return a(),n("div",null,t)}const D=s(e,[["render",p]]);export{h as __pageData,D as default};
