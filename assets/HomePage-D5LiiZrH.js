import{r as a,j as t,L as m}from"./index-Dr8p-yoQ.js";import{g as c}from"./index-BPiEBgU7.js";import{M as d}from"./MovieList-1i5IjDSA.js";import"./image-not-found-SSyqKm_O.js";/* empty css                 */import"./format-BzRktsyD.js";const f="_mainSection_1klae_1",u="_mainTitle_1klae_8",p="_loadMoreButton_1klae_28",i={mainSection:f,mainTitle:u,loadMoreButton:p};function T(){const[n,s]=a.useState([]),[r,o]=a.useState(!1),l=async()=>{try{o(!0),s([]);const e=await c();s(e)}catch(e){console.log(e)}finally{o(!1)}};return a.useEffect(()=>{l()},[]),t.jsxs("main",{className:i.mainSection,children:[t.jsx("h1",{className:i.mainTitle,children:"Trending today"}),r&&t.jsx(m,{}),t.jsx(d,{filmsList:n})]})}export{T as default};