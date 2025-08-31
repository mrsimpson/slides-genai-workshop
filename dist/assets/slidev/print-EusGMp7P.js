import{d as _,$ as u,y as f,f as i,o as r,g as e,t as a,F as h,Z as g,i as v,e as b,a0 as x}from"../modules/vue-BNGsAQNe.js";import{u as N,j as y,c as p,b as k}from"../index-DNBiCjCj.js";import{N as j}from"./NoteDisplay-CMyp-B0n.js";import"../modules/shiki-Cjn8CT-5.js";const w=_({__name:"print",setup(m,{expose:n}){n();const{slides:l,total:o}=N();u(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),y({title:`Notes - ${p.title}`});const d=f(()=>l.value.map(t=>{var s;return(s=t.meta)==null?void 0:s.slide}).filter(t=>t!==void 0&&t.noteHTML!=="")),c={slides:l,total:o,slidesWithNote:d,get configs(){return p},NoteDisplay:j};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}}),S={id:"page-root"},D={class:"m-4"},L={class:"mb-10"},T={class:"text-4xl font-bold mt-2"},V={class:"opacity-50"},B={class:"text-lg"},H={class:"font-bold flex gap-2"},W={class:"opacity-50"},C={key:0,class:"border-main mb-8"};function F(m,n,l,o,d,c){return r(),i("div",S,[e("div",D,[e("div",L,[e("h1",T,a(o.configs.title),1),e("div",V,a(new Date().toLocaleString()),1)]),(r(!0),i(h,null,g(o.slidesWithNote,(t,s)=>(r(),i("div",{key:s,class:"flex flex-col gap-4 break-inside-avoid-page"},[e("div",null,[e("h2",B,[e("div",H,[e("div",W,a(t==null?void 0:t.no)+"/"+a(o.total),1),x(" "+a(t==null?void 0:t.title)+" ",1),n[0]||(n[0]=e("div",{class:"flex-auto"},null,-1))])]),b(o.NoteDisplay,{"note-html":t.noteHTML,class:"max-w-full"},null,8,["note-html"])]),s<o.slidesWithNote.length-1?(r(),i("hr",C)):v("v-if",!0)]))),128))])])}const O=k(w,[["render",F],["__file","/Users/oliverjaegle/projects/deutschebahn/slides/genai-workshop/node_modules/@slidev/client/pages/presenter/print.vue"]]);export{O as default};
