import{g as c,h as r,n as l,u as i,r as u,o as m,i as _,w as d,a as f,_ as p}from"./app-Y-o7CDON.js";const h=f("div",{class:"none"},"修改顶栏组件",-1),v=c({__name:"NavBarBeautify",setup(B){const o=t=>{let e=window.location.pathname;const n=document.documentElement.scrollTop;t&&(e=t);const s=document.getElementsByClassName("theme-container");if(s.length<1)return null;const a=s[0];n<60&&(e=="/"||e=="/en/")?a.classList.add("scroll-top"):a.classList.remove("scroll-top")};return r(()=>{l(()=>{window.removeEventListener("scroll",()=>{}),o(),window.addEventListener("scroll",()=>{o()})}),i().beforeEach(e=>{l(()=>{setTimeout(()=>{o(e.fullPath)},50)})})}),(t,e)=>{const n=u("ClientOnly");return m(),_(n,null,{default:d(()=>[h]),_:1})}}}),C=p(v,[["__file","NavBarBeautify.vue"]]);export{C as default};
