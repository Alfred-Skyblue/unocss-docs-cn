import{d as p,o as h,c as d,z as a,E as f,b as u,a4 as i,M as r,a5 as g,u as m,p as b,k as v,a6 as y,a7 as _,a8 as w,a9 as k,aa as A,ab as P,ac as T,ad as x,ae as C,af as S,ag as j,ah as z,J as V}from"./chunks/framework.7470696c.js";import{V as D,t as c}from"./chunks/theme.6e98cf46.js";function E(t){return t.links=[{icon:"github",link:`https://github.com/${t.github}`}],t.webtools&&t.links.push({icon:"mastodon",link:`https://elk.zone/m.webtoo.ls/@${t.webtools}`}),t.discord&&t.links.push({icon:"discord",link:t.discord}),t.youtube&&t.links.push({icon:"youtube",link:`https://www.youtube.com/@${t.youtube}`}),t.links.push({icon:"twitter",link:`https://twitter.com/${t.twitter}`}),t}const L=[{avatar:"https://github.com/antfu.png",name:"Anthony Fu",github:"antfu",webtools:"antfu",youtube:"antfu",discord:"https://chat.antfu.me",twitter:"antfu7",sponsor:"https://github.com/sponsors/antfu",title:"A fanatical open sourceror, working",org:"NuxtLabs",orgLink:"https://nuxtlabs.com/",desc:"Core team member of Vite & Vue"},{avatar:"https://github.com/chu121su12.png",name:"Saya",github:"chu121su12",title:"Programmer"},{avatar:"https://github.com/zyyv.png",name:"Chris",github:"zyyv",twitter:"chris_zyyv",title:"Regardless of the past, do not ask the future."},{avatar:"https://github.com/sibbng.png",name:"sibbng",github:"sibbng",twitter:"sibbng",title:"Designer / Developer"},{avatar:"https://github.com/userquin.png",name:"Joaquín Sánchez",github:"userquin",webtools:"userquin",twitter:"userquin",title:"A fullstack and android developer",desc:"Vite's fanatical follower"},{avatar:"https://github.com/QiroNT.png",name:"Chino Moca",github:"QiroNT",twitter:"QiroNT",title:"Balance & Tradeoff"},{avatar:"https://github.com/johannschopplich.png",name:"Johann Schopplich",github:"johannschopplich",title:"Full Stack Developer",desc:"Pharmacist prior to that"},{avatar:"https://github.com/ydcjeff.png",name:"Jeff Yang",github:"ydcjeff",twitter:"ydcjeff"},{avatar:"https://github.com/sudongyuer.png",name:"Tsuki Su",github:"sudongyuer",twitter:"sudongyuer",title:"A zealous open sourceror & Full Stack Developer & Junior designer",desc:"Previously worked at Tencent, now starting a business"}],R=L.map(t=>E(t)),F={class:"content"},M={class:"content-container"},N={class:"main"},$={class:"vp-doc",flex:"","flex-col":"","items-center":"","mt-10":""},q=a("h2",{id:"meet-the-team",op70:"","font-normal":"",p:"t-10 b-2"}," Meet The Team ",-1),B={"w-full":"","p-10":""},J=a("h2",{id:"sponsored-by",op70:"","font-normal":"","pt-5":"","pb-2":""}," Sponsored by ",-1),O=a("div",{grid:"~ cols-1","w-full":"","text-center":"","mt-10":""},[a("div",{class:"flex flex-col"},[a("a",{href:"https://cdn.jsdelivr.net/gh/antfu/static/sponsors.svg",target:"_blank",rel:"noopener noreferrer"},[a("img",{crossorigin:"anonymous","inline-block":"",width:"768",height:"1464",class:"resizable-img",loading:"lazy",src:"https://cdn.jsdelivr.net/gh/antfu/static/sponsors.svg",alt:"Anthony Fu's sponsors"})])])],-1),Q=p({__name:"HomePage",setup(t){return(e,n)=>(h(),d("div",F,[a("div",M,[a("main",N,[a("div",$,[q,a("div",B,[f(u(D),{size:"small",members:u(R)},null,8,["members"])]),J,O])])])]))}}),H={...c,Layout:()=>i(c.Layout,null,{"home-features-after":()=>i(Q)}),enhanceApp(){}};function l(t){if(t.extends){const e=l(t.extends);return{...e,...t,async enhanceApp(n){e.enhanceApp&&await e.enhanceApp(n),t.enhanceApp&&await t.enhanceApp(n)}}}return t}const s=l(H),I=p({name:"VitePressApp",setup(){const{site:t}=m();return b(()=>{v(()=>{document.documentElement.lang=t.value.lang,document.documentElement.dir=t.value.dir})}),y(),_(),w(),s.setup&&s.setup(),()=>i(s.Layout)}});async function G(){const t=Y(),e=U();e.provide(k,t);const n=A(t.route);return e.provide(P,n),e.component("Content",T),e.component("ClientOnly",x),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get(){return n.frontmatter.value}},$params:{get(){return n.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:e,router:t,siteData:C}),{app:e,router:t,data:n}}function U(){return S(I)}function Y(){let t=r,e;return j(n=>{let o=z(n);return t&&(e=o),(t||e===o)&&(o=o.replace(/\.js$/,".lean.js")),r&&(t=!1),V(()=>import(o),[])},s.NotFound)}r&&G().then(({app:t,router:e,data:n})=>{e.go().then(()=>{g(e.route,n.site),t.mount("#app")})});export{G as createApp};