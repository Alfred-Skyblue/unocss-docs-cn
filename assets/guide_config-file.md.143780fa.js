import{_ as s,o as n,c as a,R as p}from"./chunks/framework.7470696c.js";const B=JSON.parse('{"title":"配置文件","description":"","frontmatter":{},"headers":[],"relativePath":"guide/config-file.md","lastUpdated":1683264350000}'),l={name:"guide/config-file.md"},o=p(`<h1 id="配置文件" tabindex="-1">配置文件 <a class="header-anchor" href="#配置文件" aria-label="Permalink to &quot;配置文件&quot;">​</a></h1><p>我们<strong>强烈推荐使用一个专用的 <code>uno.config.ts</code> 文件</strong>来配置您的 UnoCSS，以便在 IDE 和其他集成中获得最佳体验。</p><p>一个完整的配置文件如下所示：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#758575DD;">// uno.config.ts</span></span>
<span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#BD976A;">defineConfig</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#BD976A;">presetAttributify</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#BD976A;">presetIcons</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#BD976A;">presetTypography</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#BD976A;">presetUno</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#BD976A;">presetWebFonts</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#BD976A;">transformerDirectives</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#BD976A;">transformerVariantGroup</span></span>
<span class="line"><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">unocss</span><span style="color:#C98A7D99;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">default</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">defineConfig</span><span style="color:#666666;">({</span></span>
<span class="line"><span style="color:#666666;">  </span><span style="color:#B8A965;">shortcuts</span><span style="color:#666666;">: [</span></span>
<span class="line"><span style="color:#666666;">    </span><span style="color:#758575DD;">// ...</span></span>
<span class="line"><span style="color:#666666;">  ],</span></span>
<span class="line"><span style="color:#666666;">  </span><span style="color:#B8A965;">theme</span><span style="color:#666666;">: {</span></span>
<span class="line"><span style="color:#666666;">    </span><span style="color:#B8A965;">colors</span><span style="color:#666666;">: {</span></span>
<span class="line"><span style="color:#666666;">      </span><span style="color:#758575DD;">// ...</span></span>
<span class="line"><span style="color:#666666;">    }</span></span>
<span class="line"><span style="color:#666666;">  },</span></span>
<span class="line"><span style="color:#666666;">  </span><span style="color:#B8A965;">presets</span><span style="color:#666666;">: [</span></span>
<span class="line"><span style="color:#666666;">    </span><span style="color:#80A665;">presetUno</span><span style="color:#666666;">(),</span></span>
<span class="line"><span style="color:#666666;">    </span><span style="color:#80A665;">presetAttributify</span><span style="color:#666666;">(),</span></span>
<span class="line"><span style="color:#666666;">    </span><span style="color:#80A665;">presetIcons</span><span style="color:#666666;">(),</span></span>
<span class="line"><span style="color:#666666;">    </span><span style="color:#80A665;">presetTypography</span><span style="color:#666666;">(),</span></span>
<span class="line"><span style="color:#666666;">    </span><span style="color:#80A665;">presetWebFonts</span><span style="color:#666666;">({</span></span>
<span class="line"><span style="color:#666666;">      </span><span style="color:#B8A965;">fonts</span><span style="color:#666666;">: {</span></span>
<span class="line"><span style="color:#666666;">        </span><span style="color:#758575DD;">// ...</span></span>
<span class="line"><span style="color:#666666;">      }</span></span>
<span class="line"><span style="color:#666666;">    })</span></span>
<span class="line"><span style="color:#666666;">  ],</span></span>
<span class="line"><span style="color:#666666;">  </span><span style="color:#B8A965;">transformers</span><span style="color:#666666;">: [</span><span style="color:#80A665;">transformerDirectives</span><span style="color:#666666;">(), </span><span style="color:#80A665;">transformerVariantGroup</span><span style="color:#666666;">()]</span></span>
<span class="line"><span style="color:#666666;">})</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">// uno.config.ts</span></span>
<span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B07D48;">defineConfig</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B07D48;">presetAttributify</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B07D48;">presetIcons</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B07D48;">presetTypography</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B07D48;">presetUno</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B07D48;">presetWebFonts</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B07D48;">transformerDirectives</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B07D48;">transformerVariantGroup</span></span>
<span class="line"><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">unocss</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1E754F;">export</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">default</span><span style="color:#393A34;"> </span><span style="color:#59873A;">defineConfig</span><span style="color:#999999;">({</span></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#998418;">shortcuts</span><span style="color:#999999;">: [</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#A0ADA0;">// ...</span></span>
<span class="line"><span style="color:#999999;">  ],</span></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#998418;">theme</span><span style="color:#999999;">: {</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#998418;">colors</span><span style="color:#999999;">: {</span></span>
<span class="line"><span style="color:#999999;">      </span><span style="color:#A0ADA0;">// ...</span></span>
<span class="line"><span style="color:#999999;">    }</span></span>
<span class="line"><span style="color:#999999;">  },</span></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#998418;">presets</span><span style="color:#999999;">: [</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#59873A;">presetUno</span><span style="color:#999999;">(),</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#59873A;">presetAttributify</span><span style="color:#999999;">(),</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#59873A;">presetIcons</span><span style="color:#999999;">(),</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#59873A;">presetTypography</span><span style="color:#999999;">(),</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#59873A;">presetWebFonts</span><span style="color:#999999;">({</span></span>
<span class="line"><span style="color:#999999;">      </span><span style="color:#998418;">fonts</span><span style="color:#999999;">: {</span></span>
<span class="line"><span style="color:#999999;">        </span><span style="color:#A0ADA0;">// ...</span></span>
<span class="line"><span style="color:#999999;">      }</span></span>
<span class="line"><span style="color:#999999;">    })</span></span>
<span class="line"><span style="color:#999999;">  ],</span></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#998418;">transformers</span><span style="color:#999999;">: [</span><span style="color:#59873A;">transformerDirectives</span><span style="color:#999999;">(), </span><span style="color:#59873A;">transformerVariantGroup</span><span style="color:#999999;">()]</span></span>
<span class="line"><span style="color:#999999;">})</span></span></code></pre></div><p>与在 vite.config.ts 或其他工具配置中内联配置相比，专用的配置文件将更好地与<a href="/unocss-docs-cn/integrations/vscode">IDEs</a>和其他工具集成，例如<a href="/unocss-docs-cn/integrations/eslint">ESLint plugin</a>，并且能够更好地支持 HMR（热更新）。</p><p>默认情况下，UnoCSS 将自动在您的项目根目录中查找 <code>uno.config.{js,ts,mjs,mts}</code> 或 <code>unocss.config.{js,ts,mjs,mts}</code> 文件。您还可以手动指定配置文件，例如在 Vite 中：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#758575DD;">// vite.config.ts</span></span>
<span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">defineConfig</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">vite</span><span style="color:#C98A7D99;">&#39;</span></span>
<span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">UnoCSS</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">unocss/vite</span><span style="color:#C98A7D99;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">default</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">defineConfig</span><span style="color:#666666;">({</span></span>
<span class="line"><span style="color:#666666;">  </span><span style="color:#B8A965;">plugins</span><span style="color:#666666;">: [</span></span>
<span class="line"><span style="color:#666666;">    </span><span style="color:#80A665;">UnoCSS</span><span style="color:#666666;">({</span></span>
<span class="line"><span style="color:#666666;">      </span><span style="color:#B8A965;">configFile</span><span style="color:#666666;">: </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">../my-uno.config.ts</span><span style="color:#C98A7D99;">&#39;</span></span>
<span class="line"><span style="color:#666666;">    })</span></span>
<span class="line"><span style="color:#666666;">  ]</span></span>
<span class="line"><span style="color:#666666;">})</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">// vite.config.ts</span></span>
<span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">defineConfig</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">vite</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">UnoCSS</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">unocss/vite</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1E754F;">export</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">default</span><span style="color:#393A34;"> </span><span style="color:#59873A;">defineConfig</span><span style="color:#999999;">({</span></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#998418;">plugins</span><span style="color:#999999;">: [</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#59873A;">UnoCSS</span><span style="color:#999999;">({</span></span>
<span class="line"><span style="color:#999999;">      </span><span style="color:#998418;">configFile</span><span style="color:#999999;">: </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">../my-uno.config.ts</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"><span style="color:#999999;">    })</span></span>
<span class="line"><span style="color:#999999;">  ]</span></span>
<span class="line"><span style="color:#999999;">})</span></span></code></pre></div><p>有关支持的配置选项的完整列表，请参阅<a href="/unocss-docs-cn/config/">配置参考</a>。</p>`,8),e=[o];function c(t,r,y,i,A,D){return n(),a("div",null,e)}const d=s(l,[["render",c]]);export{B as __pageData,d as default};
