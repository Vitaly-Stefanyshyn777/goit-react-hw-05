import{j as t,r as i}from"./react-BvMUtuR1.js";import{b as _}from"./films-api-DhFlybDX.js";import{d as u}from"./image-not-found-SSyqKm_O.js";import{S as d}from"./react-loading-skeleton-DSROPNqW.js";import{c as g}from"./react-router-Uind0jIb.js";import"./classnames-C9FZUsQl.js";import"./axios-CCb-kr4I.js";import"./cookie-DmSiaxFR.js";import"./react-dom-BPTPhIog.js";import"./scheduler-CzFDRTuY.js";const x="_castItemThumb_rhk67_1",f="_castItemTitle_rhk67_14",j="_castItemCharacter_rhk67_23",y="_castItemSpan_rhk67_30",C="_castImg_rhk67_35",s={castItemThumb:x,castItemTitle:f,castItemCharacter:j,castItemSpan:y,castImg:C},N=({dataCast:e})=>{const{profile_path:c,name:r,character:n}=e,m=c?`https://image.tmdb.org/t/p/w500/${c}`:u;return t.jsxs("div",{className:s.castItem,children:[t.jsx("img",{className:s.castImg,src:m,alt:r,width:"200",height:"300"}),t.jsxs("div",{className:s.castInfo,children:[t.jsx("h3",{className:s.castName,children:r}),t.jsxs("p",{className:s.castCharacter,children:[t.jsx("span",{className:s.label,children:"Character:"})," ",n]})]})]})},S="_castList_2iucy_1",T="_castItem_2iucy_9",o={castList:S,castItem:T},B=()=>{const{id:e}=g(),[c,r]=i.useState([]),[n,m]=i.useState(!1),[p,I]=i.useState(!1);return i.useEffect(()=>{const a=setTimeout(()=>{I(!0)},3e3);return(async()=>{m(!0);try{const l=await _(e,"/credits");r(l.cast)}catch(l){console.error(l)}finally{m(!1)}})(),()=>clearTimeout(a)},[e]),t.jsx("section",{className:o.castSection,children:n&&p?t.jsx("div",{children:Array.from({length:6}).map((a,h)=>t.jsxs("div",{className:o.skeletonItem,children:[t.jsx(d,{height:200,width:150,style:{marginBottom:"10px"}}),t.jsx(d,{height:20,width:100})]},h))}):t.jsx("ul",{className:o.castList,children:c.map(a=>t.jsx("li",{className:o.castItem,children:t.jsx(N,{dataCast:a})},a.id))})})};export{B as default};
