import{_ as s,o,c as a,N as e}from"./chunks/framework.fcd62fc8.js";const C=JSON.parse('{"title":"UnoCSS VS Code Extension","description":"UnoCSS for VS Code.","frontmatter":{"title":"UnoCSS VS Code Extension","description":"UnoCSS for VS Code."},"headers":[],"relativePath":"integrations/vscode.md","lastUpdated":1681912600000}'),n={name:"integrations/vscode.md"},t=e(`<h1 id="unocss-vs-code-扩展" tabindex="-1">UnoCSS VS Code 扩展 <a class="header-anchor" href="#unocss-vs-code-扩展" aria-label="Permalink to &quot;UnoCSS VS Code 扩展&quot;">​</a></h1><p><a href="https://marketplace.visualstudio.com/items?itemName=antfu.unocss" target="_blank" rel="noreferrer">在插件市场安装</a></p><ul><li>对匹配到的工具进行装饰和提示</li><li>自动加载配置</li><li>匹配到的工具数量</li></ul><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><p>为了获得最佳的 IDE 使用体验，我们建议您 <a href="/unocss-docs-cn/guide/config-file">使用单独的 <code>uno.config.ts</code> 文件</a> 配置您的 UnoCSS。</p><p>扩展程序将尝试在您的项目中查找 <code>UnoCSS</code> 配置。如果未找到配置，则扩展程序将被禁用。要使用 <code>monorepo</code>，请在您的 <code>settings.json</code> 中更改 <code>unocss.root</code> 选项，以便它指向包含配置文件的目录。</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#B8A965;">unocss.root</span><span style="color:#C98A7D99;">&quot;</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&quot;</span><span style="color:#C98A7D;">packages/client</span><span style="color:#C98A7D99;">&quot;</span></span>
<span class="line"><span style="color:#666666;">}</span></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#B5695999;">&quot;</span><span style="color:#998418;">unocss.root</span><span style="color:#B5695999;">&quot;</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&quot;</span><span style="color:#B56959;">packages/client</span><span style="color:#B5695999;">&quot;</span></span>
<span class="line"><span style="color:#999999;">}</span></span></code></pre></div>`,7),l=[t];function c(p,r,i,d,u,_){return o(),a("div",null,l)}const y=s(n,[["render",c]]);export{C as __pageData,y as default};
