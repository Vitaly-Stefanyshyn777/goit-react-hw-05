import{r as s,j as t,L as c}from"./index-4Rhf5bMu.js";import{g as l}from"./index-BENkMmmD.js";import{M as d}from"./MovieList-NY7PPSc5.js";import"./image-not-found-SSyqKm_O.js";/* empty css                 */import"./format-BzRktsyD.js";const f="_mainSection_z2oz1_1",u="_mainTitle_z2oz1_5",p="_loadMoreButton_z2oz1_183",i={mainSection:f,mainTitle:u,loadMoreButton:p};function z(){const[n,e]=s.useState([]),[r,a]=s.useState(!1),m=async()=>{try{a(!0),e([]);const o=await l();e(o)}catch(o){console.log(o)}finally{a(!1)}};return s.useEffect(()=>{m()},[]),t.jsxs("main",{className:i.mainSection,children:[t.jsx("h1",{className:i.mainTitle,children:"Trending today"}),r&&t.jsx(c,{}),t.jsx(d,{filmsList:n})]})}export{z as default};
