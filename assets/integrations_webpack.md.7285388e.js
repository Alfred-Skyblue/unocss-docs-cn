import{_ as s,o as a,c as n,N as p}from"./chunks/framework.fcd62fc8.js";const b=JSON.parse('{"title":"UnoCSS Webpack Plugin","description":"The webpack plugin for UnoCSS (@unocss/webpack).","frontmatter":{"title":"UnoCSS Webpack Plugin","description":"The webpack plugin for UnoCSS (@unocss/webpack)."},"headers":[],"relativePath":"integrations/webpack.md","lastUpdated":1681912600000}'),l={name:"integrations/webpack.md"},o=p(`<h1 id="webpack-插件" tabindex="-1">Webpack 插件 <a class="header-anchor" href="#webpack-插件" aria-label="Permalink to &quot;Webpack 插件&quot;">​</a></h1><p>The webpack plugin for UnoCSS: <code>@unocss/webpack</code>. Currently, this plugin only supports the <a href="https://github.com/unocss/unocss/blob/main/packages/vite/src/types.ts#L11-L21" target="_blank" rel="noreferrer"><code>global</code> mode</a>.</p><p>UnoCSS 的 Webpack 插件：<code>@unocss/webpack</code>。目前，此插件仅支持 <a href="https://github.com/unocss/unocss/blob/main/packages/vite/src/types.ts#L11-L21" target="_blank" rel="noreferrer">global模式</a>。</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>此插件不带有任何默认预设。</p></div><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-Z-hj4" id="tab-yKEGeee" checked="checked"><label for="tab-yKEGeee">pnpm</label><input type="radio" name="group-Z-hj4" id="tab-C7k5RAL"><label for="tab-C7k5RAL">yarn</label><input type="radio" name="group-Z-hj4" id="tab-IizRXHm"><label for="tab-IizRXHm">npm</label></div><div class="blocks"><div class="language-bash active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#80A665;">pnpm</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">add</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">-D</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">@unocss/webpack</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#59873A;">pnpm</span><span style="color:#393A34;"> </span><span style="color:#B56959;">add</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">-D</span><span style="color:#393A34;"> </span><span style="color:#B56959;">@unocss/webpack</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#80A665;">yarn</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">add</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">-D</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">@unocss/webpack</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#59873A;">yarn</span><span style="color:#393A34;"> </span><span style="color:#B56959;">add</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">-D</span><span style="color:#393A34;"> </span><span style="color:#B56959;">@unocss/webpack</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#80A665;">npm</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">install</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">-D</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">@unocss/webpack</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#59873A;">npm</span><span style="color:#393A34;"> </span><span style="color:#B56959;">install</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">-D</span><span style="color:#393A34;"> </span><span style="color:#B56959;">@unocss/webpack</span></span></code></pre></div></div></div><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-zddhQ" id="tab-9AKEBoC" checked="checked"><label for="tab-9AKEBoC">webpack 5</label><input type="radio" name="group-zddhQ" id="tab-dWjJhAH"><label for="tab-dWjJhAH">webpack 4</label></div><div class="blocks"><div class="language-ts active"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#758575DD;">// webpack.config.js</span></span>
<span class="line"><span style="color:#CB7676;">const </span><span style="color:#BD976A;">UnoCSS</span><span style="color:#CB7676;"> = </span><span style="color:#80A665;">require</span><span style="color:#666666;">(</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">@unocss/webpack</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">).</span><span style="color:#BD976A;">default</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B8A965;">module</span><span style="color:#666666;">.</span><span style="color:#B8A965;">exports</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">=</span><span style="color:#666666;"> {</span></span>
<span class="line"><span style="color:#666666;">  </span><span style="color:#B8A965;">plugins</span><span style="color:#666666;">: [</span></span>
<span class="line"><span style="color:#666666;">    </span><span style="color:#80A665;">UnoCSS</span><span style="color:#666666;">(),</span></span>
<span class="line"><span style="color:#666666;">  ],</span></span>
<span class="line"><span style="color:#666666;">  </span><span style="color:#B8A965;">optimization</span><span style="color:#666666;">: {</span></span>
<span class="line"><span style="color:#666666;">    </span><span style="color:#B8A965;">realContentHash</span><span style="color:#666666;">: </span><span style="color:#4D9375;">true</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#666666;">  },</span></span>
<span class="line"><span style="color:#666666;">}</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">// webpack.config.js</span></span>
<span class="line"><span style="color:#AB5959;">const </span><span style="color:#B07D48;">UnoCSS</span><span style="color:#AB5959;"> = </span><span style="color:#59873A;">require</span><span style="color:#999999;">(</span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">@unocss/webpack</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">).</span><span style="color:#B07D48;">default</span></span>
<span class="line"></span>
<span class="line"><span style="color:#998418;">module</span><span style="color:#999999;">.</span><span style="color:#998418;">exports</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#999999;"> {</span></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#998418;">plugins</span><span style="color:#999999;">: [</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#59873A;">UnoCSS</span><span style="color:#999999;">(),</span></span>
<span class="line"><span style="color:#999999;">  ],</span></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#998418;">optimization</span><span style="color:#999999;">: {</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#998418;">realContentHash</span><span style="color:#999999;">: </span><span style="color:#1E754F;">true</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#999999;">  },</span></span>
<span class="line"><span style="color:#999999;">}</span></span></code></pre></div><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#758575DD;">// webpack.config.js</span></span>
<span class="line"><span style="color:#CB7676;">const </span><span style="color:#BD976A;">UnoCSS</span><span style="color:#CB7676;"> = </span><span style="color:#80A665;">require</span><span style="color:#666666;">(</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">@unocss/webpack</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">).</span><span style="color:#BD976A;">default</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B8A965;">module</span><span style="color:#666666;">.</span><span style="color:#B8A965;">exports</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">=</span><span style="color:#666666;"> {</span></span>
<span class="line"><span style="color:#666666;">  </span><span style="color:#B8A965;">plugins</span><span style="color:#666666;">: [</span></span>
<span class="line"><span style="color:#666666;">    </span><span style="color:#80A665;">UnoCSS</span><span style="color:#666666;">(),</span></span>
<span class="line"><span style="color:#666666;">  ],</span></span>
<span class="line"><span style="color:#666666;">  </span><span style="color:#B8A965;">css</span><span style="color:#666666;">: {</span></span>
<span class="line"><span style="color:#666666;">    </span><span style="color:#B8A965;">extract</span><span style="color:#666666;">: {</span></span>
<span class="line"><span style="color:#666666;">      </span><span style="color:#B8A965;">filename</span><span style="color:#666666;">: </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">[name].[hash:9].css</span><span style="color:#C98A7D99;">&#39;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#666666;">    },</span></span>
<span class="line"><span style="color:#666666;">  },</span></span>
<span class="line"><span style="color:#666666;">}</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">// webpack.config.js</span></span>
<span class="line"><span style="color:#AB5959;">const </span><span style="color:#B07D48;">UnoCSS</span><span style="color:#AB5959;"> = </span><span style="color:#59873A;">require</span><span style="color:#999999;">(</span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">@unocss/webpack</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">).</span><span style="color:#B07D48;">default</span></span>
<span class="line"></span>
<span class="line"><span style="color:#998418;">module</span><span style="color:#999999;">.</span><span style="color:#998418;">exports</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">=</span><span style="color:#999999;"> {</span></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#998418;">plugins</span><span style="color:#999999;">: [</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#59873A;">UnoCSS</span><span style="color:#999999;">(),</span></span>
<span class="line"><span style="color:#999999;">  ],</span></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#998418;">css</span><span style="color:#999999;">: {</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#998418;">extract</span><span style="color:#999999;">: {</span></span>
<span class="line"><span style="color:#999999;">      </span><span style="color:#998418;">filename</span><span style="color:#999999;">: </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">[name].[hash:9].css</span><span style="color:#B5695999;">&#39;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#999999;">    },</span></span>
<span class="line"><span style="color:#999999;">  },</span></span>
<span class="line"><span style="color:#999999;">}</span></span></code></pre></div></div></div><p>创建一个 <code>uno.config.ts</code> 文件：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#758575DD;">// uno.config.ts</span></span>
<span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">defineConfig</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">unocss</span><span style="color:#C98A7D99;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">default</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">defineConfig</span><span style="color:#666666;">({</span></span>
<span class="line"><span style="color:#666666;">  </span><span style="color:#758575DD;">// ...UnoCSS options</span></span>
<span class="line"><span style="color:#666666;">})</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">// uno.config.ts</span></span>
<span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">defineConfig</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">unocss</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1E754F;">export</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">default</span><span style="color:#393A34;"> </span><span style="color:#59873A;">defineConfig</span><span style="color:#999999;">({</span></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#A0ADA0;">// ...UnoCSS options</span></span>
<span class="line"><span style="color:#999999;">})</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>如果您使用的是webpack@4.x，<code>optimization.realContentHash</code> 配置不受支持，并且您应该使用 <code>css.extract.filename</code> 自定义CSS文件名（我们使用前9个哈希码字母作为示例）。请注意此捆绑包和<a href="https://github.com/webpack/webpack/issues/9520#issuecomment-749534245" target="_blank" rel="noreferrer">webpack#9520</a>的<a href="https://github.com/unocss/unocss/issues/1728" target="_blank" rel="noreferrer">已知问题</a>。</p></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><p>将 <code>uno.css</code> 添加到您的主入口中：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#758575DD;">// main.ts</span></span>
<span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">uno.css</span><span style="color:#C98A7D99;">&#39;</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">// main.ts</span></span>
<span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">uno.css</span><span style="color:#B5695999;">&#39;</span></span></code></pre></div>`,13),e=[o];function c(t,r,i,y,d,A){return a(),n("div",null,e)}const D=s(l,[["render",c]]);export{b as __pageData,D as default};
