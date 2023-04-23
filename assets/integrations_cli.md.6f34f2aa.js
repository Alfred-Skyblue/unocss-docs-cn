import{_ as s,o as a,c as n,O as l}from"./chunks/framework.16797aa5.js";const u=JSON.parse('{"title":"UnoCSS CLI","description":"The CLI for UnoCSS (@unocss/cli).","frontmatter":{"title":"UnoCSS CLI","description":"The CLI for UnoCSS (@unocss/cli)."},"headers":[],"relativePath":"integrations/cli.md","lastUpdated":1682258289000}'),p={name:"integrations/cli.md"},o=l(`<h1 id="cli" tabindex="-1">CLI <a class="header-anchor" href="#cli" aria-label="Permalink to &quot;CLI&quot;">​</a></h1><p>UnoCSS 的命令行界面：<code>@unocss/cli</code>。</p><ul><li>🍱 适用于传统的后端框架，如 Laravel 或 Kirby</li><li>👀 包含<a href="#开发模式">监听模式</a></li><li>🔌 支持通过<a href="#配置"><code>uno.config.ts</code></a>进行自定义配置</li></ul><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>这个包已经包含在 <code>unocss</code> 包中:</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-neKTL" id="tab-Bnw5DYZ" checked="checked"><label for="tab-Bnw5DYZ">pnpm</label><input type="radio" name="group-neKTL" id="tab-MsRBcNt"><label for="tab-MsRBcNt">yarn</label><input type="radio" name="group-neKTL" id="tab-Ps-asxq"><label for="tab-Ps-asxq">npm</label></div><div class="blocks"><div class="language-bash active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#80A665;">pnpm</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">add</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">-D</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">unocss</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#59873A;">pnpm</span><span style="color:#393A34;"> </span><span style="color:#B56959;">add</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">-D</span><span style="color:#393A34;"> </span><span style="color:#B56959;">unocss</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#80A665;">yarn</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">add</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">-D</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">unocss</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#59873A;">yarn</span><span style="color:#393A34;"> </span><span style="color:#B56959;">add</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">-D</span><span style="color:#393A34;"> </span><span style="color:#B56959;">unocss</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#80A665;">npm</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">install</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">-D</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">unocss</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#59873A;">npm</span><span style="color:#393A34;"> </span><span style="color:#B56959;">install</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">-D</span><span style="color:#393A34;"> </span><span style="color:#B56959;">unocss</span></span></code></pre></div></div></div><p>你也可以单独安装 <code>@unocss/cli</code> 包:</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group--0qup" id="tab-M3GMRpB" checked="checked"><label for="tab-M3GMRpB">pnpm</label><input type="radio" name="group--0qup" id="tab-qtvOv6X"><label for="tab-qtvOv6X">yarn</label><input type="radio" name="group--0qup" id="tab-QJ_yzTO"><label for="tab-QJ_yzTO">npm</label></div><div class="blocks"><div class="language-bash active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#80A665;">pnpm</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">add</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">-D</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">@unocss/cli</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#59873A;">pnpm</span><span style="color:#393A34;"> </span><span style="color:#B56959;">add</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">-D</span><span style="color:#393A34;"> </span><span style="color:#B56959;">@unocss/cli</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#80A665;">yarn</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">add</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">-D</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">@unocss/cli</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#59873A;">yarn</span><span style="color:#393A34;"> </span><span style="color:#B56959;">add</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">-D</span><span style="color:#393A34;"> </span><span style="color:#B56959;">@unocss/cli</span></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#80A665;">npm</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">install</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">-D</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D;">@unocss/cli</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#59873A;">npm</span><span style="color:#393A34;"> </span><span style="color:#B56959;">install</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">-D</span><span style="color:#393A34;"> </span><span style="color:#B56959;">@unocss/cli</span></span></code></pre></div></div></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><p>你可以将多个 glob 模式传递给 <code>@unocss/cli</code>：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#80A665;">unocss</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">site/snippets/**/*.php</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">site/templates/**/*.php</span><span style="color:#C98A7D99;">&quot;</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#59873A;">unocss</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">site/snippets/**/*.php</span><span style="color:#B5695999;">&quot;</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">site/templates/**/*.php</span><span style="color:#B5695999;">&quot;</span></span></code></pre></div><p>配置示例:</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>确保在 npm 脚本的 glob 模式中添加转义符号。</p></div><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#B8A965;">scripts</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#B8A965;">dev</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">unocss </span><span style="color:#C99076;">\\&quot;</span><span style="color:#C98A7D;">site/{snippets,templates}/**/*.php</span><span style="color:#C99076;">\\&quot;</span><span style="color:#C98A7D;"> --watch</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#B8A965;">build</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">unocss </span><span style="color:#C99076;">\\&quot;</span><span style="color:#C98A7D;">site/{snippets,templates}/**/*.php</span><span style="color:#C99076;">\\&quot;</span><span style="color:#C98A7D99;">&quot;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">},</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#B8A965;">devDependencies</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#B8A965;">@unocss/cli</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">latest</span><span style="color:#C98A7D99;">&quot;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#666666;">}</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B5695999;">&quot;</span><span style="color:#998418;">scripts</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B5695999;">&quot;</span><span style="color:#998418;">dev</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">unocss </span><span style="color:#A65E2B;">\\&quot;</span><span style="color:#B56959;">site/{snippets,templates}/**/*.php</span><span style="color:#A65E2B;">\\&quot;</span><span style="color:#B56959;"> --watch</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B5695999;">&quot;</span><span style="color:#998418;">build</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">unocss </span><span style="color:#A65E2B;">\\&quot;</span><span style="color:#B56959;">site/{snippets,templates}/**/*.php</span><span style="color:#A65E2B;">\\&quot;</span><span style="color:#B5695999;">&quot;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">},</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B5695999;">&quot;</span><span style="color:#998418;">devDependencies</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#B5695999;">&quot;</span><span style="color:#998418;">@unocss/cli</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">latest</span><span style="color:#B5695999;">&quot;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#999999;">}</span></span></code></pre></div><h3 id="开发模式" tabindex="-1">开发模式 <a class="header-anchor" href="#开发模式" aria-label="Permalink to &quot;开发模式&quot;">​</a></h3><p>添加 --watch (或 -w) 标志以启用文件变动监听:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#80A665;">unocss</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">site/{snippets,templates}/**/*.php</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C99076;">--watch</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#59873A;">unocss</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">site/{snippets,templates}/**/*.php</span><span style="color:#B5695999;">&quot;</span><span style="color:#393A34;"> </span><span style="color:#A65E2B;">--watch</span></span></code></pre></div><h3 id="生产模式" tabindex="-1">生产模式 <a class="header-anchor" href="#生产模式" aria-label="Permalink to &quot;生产模式&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#80A665;">unocss</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">site/{snippets,templates}/**/*.php</span><span style="color:#C98A7D99;">&quot;</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#59873A;">unocss</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">site/{snippets,templates}/**/*.php</span><span style="color:#B5695999;">&quot;</span></span></code></pre></div><p>默认情况下，生成的 <code>uno.css</code> 将会保存在当前目录中。</p><h2 id="内置功能" tabindex="-1">内置功能 <a class="header-anchor" href="#内置功能" aria-label="Permalink to &quot;内置功能&quot;">​</a></h2><h3 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h3><p>在项目的根目录下创建一个 <code>uno.config.js</code> 或 <code>uno.config.ts</code> 配置文件来自定义 UnoCSS。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">defineConfig</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">unocss</span><span style="color:#C98A7D99;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">default</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">defineConfig</span><span style="color:#666666;">({</span></span>
<span class="line"><span style="color:#666666;">  </span><span style="color:#B8A965;">cli</span><span style="color:#666666;">: {</span></span>
<span class="line"><span style="color:#666666;">    </span><span style="color:#B8A965;">entry</span><span style="color:#666666;">: {} </span><span style="color:#758575DD;">// CliEntryItem | CliEntryItem[]</span></span>
<span class="line"><span style="color:#666666;">  }</span></span>
<span class="line"><span style="color:#666666;">  </span><span style="color:#758575DD;">// ...</span></span>
<span class="line"><span style="color:#666666;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#CB7676;">interface</span><span style="color:#DBD7CAEE;"> </span><span style="color:#5DA9A7;">CliEntryItem</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#758575DD;">/**</span></span>
<span class="line"><span style="color:#758575DD;">   * 匹配文件的glob模式</span></span>
<span class="line"><span style="color:#758575DD;">   */</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#BD976A;">patterns</span><span style="color:#666666;">: </span><span style="color:#5DA9A7;">string</span><span style="color:#666666;">[]</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#758575DD;">/**</span></span>
<span class="line"><span style="color:#758575DD;">   * 生成的UnoCSS文件的输出文件名</span></span>
<span class="line"><span style="color:#758575DD;">   */</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#BD976A;">outFile</span><span style="color:#666666;">: </span><span style="color:#5DA9A7;">string</span></span>
<span class="line"><span style="color:#666666;">}</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">defineConfig</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">unocss</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1E754F;">export</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">default</span><span style="color:#393A34;"> </span><span style="color:#59873A;">defineConfig</span><span style="color:#999999;">({</span></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#998418;">cli</span><span style="color:#999999;">: {</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#998418;">entry</span><span style="color:#999999;">: {} </span><span style="color:#A0ADA0;">// CliEntryItem | CliEntryItem[]</span></span>
<span class="line"><span style="color:#999999;">  }</span></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#A0ADA0;">// ...</span></span>
<span class="line"><span style="color:#999999;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#AB5959;">interface</span><span style="color:#393A34;"> </span><span style="color:#2E808F;">CliEntryItem</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#A0ADA0;">/**</span></span>
<span class="line"><span style="color:#A0ADA0;">   * 匹配文件的glob模式</span></span>
<span class="line"><span style="color:#A0ADA0;">   */</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B07D48;">patterns</span><span style="color:#999999;">: </span><span style="color:#2E808F;">string</span><span style="color:#999999;">[]</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#A0ADA0;">/**</span></span>
<span class="line"><span style="color:#A0ADA0;">   * 生成的UnoCSS文件的输出文件名</span></span>
<span class="line"><span style="color:#A0ADA0;">   */</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B07D48;">outFile</span><span style="color:#999999;">: </span><span style="color:#2E808F;">string</span></span>
<span class="line"><span style="color:#999999;">}</span></span></code></pre></div><p>有关选项的完整列表，请查看<a href="/unocss-docs-cn/config/">UnoCSS 配置文档</a>。</p><h2 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-label="Permalink to &quot;选项&quot;">​</a></h2><table><thead><tr><th>Options</th><th></th></tr></thead><tbody><tr><td><code>-v, --version</code></td><td>显示当前 UnoCSS 的版本号</td></tr><tr><td><code>-c, --config-file &lt;file&gt;</code></td><td>配置文件</td></tr><tr><td><code>-o, --out-file &lt;file&gt;</code></td><td>生成的 UnoCSS 文件的输出文件名。默认为当前工作目录中的 <code>uno.css</code></td></tr><tr><td><code>-w, --watch</code></td><td>指示是否应监视 glob 模式找到的文件</td></tr><tr><td><code>--preflights</code></td><td>启用预检样式</td></tr><tr><td><code>-m, --minify</code></td><td>缩小生成的 CSS</td></tr><tr><td><code>-h, --help</code></td><td>显示可用的 CLI 命令</td></tr></tbody></table>`,27),e=[o];function t(c,r,y,i,d,A){return a(),n("div",null,e)}const C=s(p,[["render",t]]);export{u as __pageData,C as default};