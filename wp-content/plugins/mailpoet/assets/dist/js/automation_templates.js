"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[457],{57384:(e,t,a)=>{var o=a(2226),n=a(47107),i=a(89912),l=a(38313),s=a(96854),r=a(44259),m=a(70079),c=a(9234),u=a(84209),d=a(20174),h=a(82299),p=a(35250);function _({showModal:e,onClose:t}){return e?(0,p.jsx)(d.Z,{onRequestClose:t,tracking:{utm_medium:"upsell_modal",utm_campaign:"create_automation_from_scratch"},children:(0,n.__)("Creating custom automations is a premium feature.","mailpoet")}):null}function x({variant:e="secondary"}){const[t,a]=(0,m.useState)(!1),[o,i]=(0,m.useState)(null),[l,s]=(0,m.useState)(!1),r=(0,m.useCallback)((()=>{!function(e,t){u.Hooks.applyFilters("mailpoet.automation.templates.from_scratch_button",(()=>{s(!1),a(!0)}))(t)}(0,i)}),[]);return(0,p.jsxs)(p.Fragment,{children:[o&&(0,p.jsx)(h.q,{type:"error",closable:!0,timeout:!1,children:(0,p.jsx)("p",{children:o})}),(0,p.jsx)(c.ZP,{variant:e,isBusy:l&&"link"!==e,disabled:l,onClick:()=>{s(!0),r()},children:(0,n.__)("Create custom automation","mailpoet")}),(0,p.jsx)(_,{showModal:t,onClose:()=>{a(!1),s(!1)}})]})}var g=a(2632),j=a(69177),w=a(55473),f=a(518);const k=[{name:"all",title:(0,p.jsx)(w.J$,{title:(0,n.__)("All","mailpoet"),count:l.U.length})},...l.G.map((e=>({...e,count:l.U.filter((t=>t.category===e.slug)).length}))).filter((({count:e})=>e>0)).map((({name:e,slug:t,count:a})=>({name:t,title:(0,p.jsx)(w.J$,{title:e,count:a})})))];function C(){return window.location.search.includes("loadedvia=woo_multichannel_dashboard")&&window.MailPoet.trackEvent("MailPoet - WooCommerce Multichannel Marketing dashboard > Automation template selection page",{"WooCommerce version":window.mailpoet_woocommerce_version}),(0,p.jsxs)("div",{className:"mailpoet-main-container",children:[(0,p.jsx)(r.Q,{}),(0,p.jsx)(g.m,{heading:(0,n.__)("Start with a template","mailpoet"),headingPrefix:(0,p.jsx)(g.x,{href:j.MailPoet.urls.automationListing,label:(0,n.__)("Back to automation list","mailpoet")}),children:(0,p.jsx)(x,{})}),(0,p.jsx)(w.x4,{tabs:k,children:e=>(0,p.jsx)(f.p,{templates:l.U.filter((t=>"all"===e.name||t.category===e.name))})}),(0,p.jsxs)(w.$_,{children:[(0,p.jsx)("p",{children:(0,n.__)("Can’t find what you’re looking for?","mailpoet")}),(0,p.jsx)(x,{variant:"link"})]})]})}window.addEventListener("DOMContentLoaded",(()=>{const e=document.getElementById("mailpoet_automation_templates");e&&((0,i.registerTranslations)(),(0,s.q)(),(0,o.s)(e).render((0,p.jsx)(C,{})))}))},65311:e=>{e.exports=jQuery}},e=>{e.O(0,[351],(()=>(57384,e(e.s=57384)))),e.O()}]);