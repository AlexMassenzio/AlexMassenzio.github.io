import{S as y,P as b,W as L,C as O,M as C,a as P,b as a,c as v,A as M,O as R,T as u,E as m,u as x}from"./vendor.0f2b317f.js";const S=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))f(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&f(s)}).observe(document,{childList:!0,subtree:!0});function h(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function f(e){if(e.ep)return;e.ep=!0;const t=h(e);fetch(e.href,t)}};S();const d=new y,o=new b(75,window.innerWidth/window.innerHeight,.1,1e3),i=new L({canvas:document.querySelector("#bg")});i.setPixelRatio(window.devicePixelRatio);i.setSize(window.innerWidth,window.innerHeight);o.position.setZ(0);const T=new O(10,10,10,10),z=new C({color:16737095,wireframe:!0}),c=new P(T,z);d.add(c);c.rotateX(a.degToRad(90));const w=new v(16777215);w.position.set(5,5,5);const A=new M(16777215);d.add(w,A);const E=new R(o,i.domElement),l=new u({z:0}).to({z:18},5e3).delay(1e3).easing(m.Cubic.InOut),p=new u({d:0}).to({d:180},3e3).delay(250).easing(m.Cubic.InOut);l.onUpdate(n=>{o.position.setZ(n.z)});l.onComplete(()=>{p.start()});p.onUpdate(n=>{c.rotation.set(a.degToRad(90),a.degToRad(n.d),0)});l.start();function g(){requestAnimationFrame(g),x(),E.update(),i.render(d,o)}g();
