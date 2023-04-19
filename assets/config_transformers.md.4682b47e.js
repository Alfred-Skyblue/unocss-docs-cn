import{_ as s,o as n,c as a,N as p}from"./chunks/framework.fcd62fc8.js";const m=JSON.parse('{"title":"Transformers","description":"","frontmatter":{},"headers":[],"relativePath":"config/transformers.md","lastUpdated":1681912600000}'),l={name:"config/transformers.md"},o=p(`<h1 id="transformers" tabindex="-1">Transformers <a class="header-anchor" href="#transformers" aria-label="Permalink to &quot;Transformers&quot;">​</a></h1><p>Transformers 用于转换源代码以支持约定。</p><p>它提供了一个统一的接口来转换源代码以支持约定。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#758575DD;">// my-transformer.ts</span></span>
<span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">createFilter</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">@rollup/pluginutils</span><span style="color:#C98A7D99;">&#39;</span></span>
<span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">SourceCodeTransformer</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">unocss</span><span style="color:#C98A7D99;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">default</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">function</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">myTransformers</span><span style="color:#666666;">(</span><span style="color:#BD976A;">options</span><span style="color:#666666;">: </span><span style="color:#5DA9A7;">MyOptions</span><span style="color:#666666;"> </span><span style="color:#CB7676;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{}):</span><span style="color:#DBD7CAEE;"> </span><span style="color:#5DA9A7;">SourceCodeTransformer</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#4D9375;">return</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#666666;">    </span><span style="color:#B8A965;">name</span><span style="color:#666666;">: </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">my-transformer</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#666666;">    </span><span style="color:#B8A965;">enforce</span><span style="color:#666666;">: </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">pre</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">, </span><span style="color:#758575DD;">// 在其他transformer之前执行</span></span>
<span class="line"><span style="color:#666666;">    </span><span style="color:#80A665;">idFilter</span><span style="color:#666666;">() {</span></span>
<span class="line"><span style="color:#666666;">      </span><span style="color:#758575DD;">// 只转换 .tsx 和 .jsx 文件</span></span>
<span class="line"><span style="color:#666666;">      </span><span style="color:#4D9375;">return</span><span style="color:#666666;"> </span><span style="color:#BD976A;">id</span><span style="color:#666666;">.</span><span style="color:#80A665;">match</span><span style="color:#666666;">(</span><span style="color:#C98A7D99;">/</span><span style="color:#E6CC77;">\\.</span><span style="color:#666666;">[</span><span style="color:#C99076;">tj</span><span style="color:#666666;">]</span><span style="color:#C4704F;">sx</span><span style="color:#4D9375;">$</span><span style="color:#C98A7D99;">/</span><span style="color:#666666;">)</span></span>
<span class="line"><span style="color:#666666;">    },</span></span>
<span class="line"><span style="color:#666666;">    </span><span style="color:#CB7676;">async</span><span style="color:#666666;"> </span><span style="color:#80A665;">transform</span><span style="color:#666666;">(</span><span style="color:#BD976A;">code</span><span style="color:#666666;">, </span><span style="color:#BD976A;">id</span><span style="color:#666666;">, { </span><span style="color:#BD976A;">uno</span><span style="color:#666666;"> }) {</span></span>
<span class="line"><span style="color:#666666;">      </span><span style="color:#758575DD;">// code 是一个 MagicString 实例</span></span>
<span class="line"><span style="color:#666666;">      </span><span style="color:#BD976A;">code</span><span style="color:#666666;">.</span><span style="color:#80A665;">appendRight</span><span style="color:#666666;">(</span><span style="color:#4C9A91;">0</span><span style="color:#666666;">, </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">/* my transformer */</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">)</span></span>
<span class="line"><span style="color:#666666;">    },</span></span>
<span class="line"><span style="color:#666666;">  }</span></span>
<span class="line"><span style="color:#666666;">}</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">// my-transformer.ts</span></span>
<span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">createFilter</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">@rollup/pluginutils</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">SourceCodeTransformer</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">unocss</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1E754F;">export</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">default</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#59873A;">myTransformers</span><span style="color:#999999;">(</span><span style="color:#B07D48;">options</span><span style="color:#999999;">: </span><span style="color:#2E808F;">MyOptions</span><span style="color:#999999;"> </span><span style="color:#AB5959;">=</span><span style="color:#393A34;"> </span><span style="color:#999999;">{}):</span><span style="color:#393A34;"> </span><span style="color:#2E808F;">SourceCodeTransformer</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#1E754F;">return</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#998418;">name</span><span style="color:#999999;">: </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">my-transformer</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#998418;">enforce</span><span style="color:#999999;">: </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">pre</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">, </span><span style="color:#A0ADA0;">// 在其他transformer之前执行</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#59873A;">idFilter</span><span style="color:#999999;">() {</span></span>
<span class="line"><span style="color:#999999;">      </span><span style="color:#A0ADA0;">// 只转换 .tsx 和 .jsx 文件</span></span>
<span class="line"><span style="color:#999999;">      </span><span style="color:#1E754F;">return</span><span style="color:#999999;"> </span><span style="color:#B07D48;">id</span><span style="color:#999999;">.</span><span style="color:#59873A;">match</span><span style="color:#999999;">(</span><span style="color:#B5695999;">/</span><span style="color:#BDA437;">\\.</span><span style="color:#999999;">[</span><span style="color:#A65E2B;">tj</span><span style="color:#999999;">]</span><span style="color:#AB5E3F;">sx</span><span style="color:#1E754F;">$</span><span style="color:#B5695999;">/</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#999999;">    },</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#AB5959;">async</span><span style="color:#999999;"> </span><span style="color:#59873A;">transform</span><span style="color:#999999;">(</span><span style="color:#B07D48;">code</span><span style="color:#999999;">, </span><span style="color:#B07D48;">id</span><span style="color:#999999;">, { </span><span style="color:#B07D48;">uno</span><span style="color:#999999;"> }) {</span></span>
<span class="line"><span style="color:#999999;">      </span><span style="color:#A0ADA0;">// code 是一个 MagicString 实例</span></span>
<span class="line"><span style="color:#999999;">      </span><span style="color:#B07D48;">code</span><span style="color:#999999;">.</span><span style="color:#59873A;">appendRight</span><span style="color:#999999;">(</span><span style="color:#2F798A;">0</span><span style="color:#999999;">, </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">/* my transformer */</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#999999;">    },</span></span>
<span class="line"><span style="color:#999999;">  }</span></span>
<span class="line"><span style="color:#999999;">}</span></span></code></pre></div><p>您可以查看<a href="/unocss-docs-cn/presets/#transformers">官方的 transformers</a>了解更多示例。</p>`,5),e=[o];function r(t,c,y,A,i,D){return n(),a("div",null,e)}const E=s(l,[["render",r]]);export{m as __pageData,E as default};
