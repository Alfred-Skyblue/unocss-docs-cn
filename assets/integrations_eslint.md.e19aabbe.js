import{_ as s,o as a,c as n,O as o}from"./chunks/framework.16797aa5.js";const A=JSON.parse('{"title":"UnoCSS ESLint 配置","description":"UnoCSS 的 ESLint 配置 (@unocsseslint-config)。","frontmatter":{"title":"UnoCSS ESLint 配置","description":"UnoCSS 的 ESLint 配置 (@unocsseslint-config)。"},"headers":[],"relativePath":"integrations/eslint.md","lastUpdated":1682089264000}'),l={name:"integrations/eslint.md"},e=o(`<h1 id="eslint-配置" tabindex="-1">ESLint 配置 <a class="header-anchor" href="#eslint-配置" aria-label="Permalink to &quot;ESLint 配置&quot;">​</a></h1><p>UnoCSS 的 ESLint 配置: <code>@unocss/eslint-config</code>.</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-Vtz0R" id="tab-6NslRHu" checked="checked"><label for="tab-6NslRHu">pnpm</label><input type="radio" name="group-Vtz0R" id="tab-mCzzrJT"><label for="tab-mCzzrJT">yarn</label><input type="radio" name="group-Vtz0R" id="tab-dh0ftnV"><label for="tab-dh0ftnV">npm</label></div><div class="blocks"><div class="language-bash active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#80A665;">pnpm</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">add</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">-D</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">@unocss/eslint-config</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#59873A;">pnpm</span><span style="color:#393A34;"> </span><span style="color:#B56959;">add</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">-D</span><span style="color:#393A34;"> </span><span style="color:#B56959;">@unocss/eslint-config</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#80A665;">yarn</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">add</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">-D</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">@unocss/eslint-config</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#59873A;">yarn</span><span style="color:#393A34;"> </span><span style="color:#B56959;">add</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">-D</span><span style="color:#393A34;"> </span><span style="color:#B56959;">@unocss/eslint-config</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#80A665;">npm</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">install</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">-D</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">@unocss/eslint-config</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#59873A;">npm</span><span style="color:#393A34;"> </span><span style="color:#B56959;">install</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">-D</span><span style="color:#393A34;"> </span><span style="color:#B56959;">@unocss/eslint-config</span></span></code></pre></div></div></div><p>In <code>.eslintrc</code>:</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#B8A965;">extends</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">[</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">@unocss</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">]</span></span>
<span class="line"><span style="color:#666666;">}</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B5695999;">&quot;</span><span style="color:#998418;">extends</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">[</span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">@unocss</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">]</span></span>
<span class="line"><span style="color:#999999;">}</span></span></code></pre></div><h2 id="规则" tabindex="-1">规则 <a class="header-anchor" href="#规则" aria-label="Permalink to &quot;规则&quot;">​</a></h2><ul><li><code>@unocss/order</code> - 对类选择器执行特定顺序。</li><li><code>@unocss/order-attributify</code> - 对属性选择器执行特定顺序。</li></ul><h2 id="prior-arts" tabindex="-1">Prior Arts <a class="header-anchor" href="#prior-arts" aria-label="Permalink to &quot;Prior Arts&quot;">​</a></h2><p>感谢 <a href="https://github.com/devunt" target="_blank" rel="noreferrer">@devunt</a> 的 <a href="https://github.com/devunt/eslint-plugin-unocss" target="_blank" rel="noreferrer">eslint-plugin-unocss</a>。</p>`,10),p=[e];function t(c,r,i,d,y,u){return a(),n("div",null,p)}const g=s(l,[["render",t]]);export{A as __pageData,g as default};