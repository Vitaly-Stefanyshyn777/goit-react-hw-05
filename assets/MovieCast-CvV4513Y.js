import{j as t,c as u,r as i}from"./index-Dr8p-yoQ.js";import{S as d,b as g}from"./index-BPiEBgU7.js";import{d as p}from"./image-not-found-SSyqKm_O.js";/* empty css                 */const x="_castItemThumb_rhk67_1",f="_castItemTitle_rhk67_14",j="_castItemCharacter_rhk67_23",y="_castItemSpan_rhk67_30",C="_castImg_rhk67_35",s={castItemThumb:x,castItemTitle:f,castItemCharacter:j,castItemSpan:y,castImg:C},N=({dataCast:e})=>{const{profile_path:c,name:r,character:o}=e,m=c?`https://image.tmdb.org/t/p/w500/${c}`:p;return t.jsxs("div",{className:s.castItem,children:[t.jsx("img",{className:s.castImg,src:m,alt:r,width:"200",height:"300"}),t.jsxs("div",{className:s.castInfo,children:[t.jsx("h3",{className:s.castName,children:r}),t.jsxs("p",{className:s.castCharacter,children:[t.jsx("span",{className:s.label,children:"Character:"})," ",o]})]})]})},S="_castList_2iucy_1",T="_castItem_2iucy_9",n={castList:S,castItem:T},w=()=>{const{id:e}=u(),[c,r]=i.useState([]),[o,m]=i.useState(!1),[I,_]=i.useState(!1);return i.useEffect(()=>{const a=setTimeout(()=>{_(!0)},3e3);return(async()=>{m(!0);try{const l=await g(e,"/credits");r(l.cast)}catch(l){console.error(l)}finally{m(!1)}})(),()=>clearTimeout(a)},[e]),t.jsx("section",{className:n.castSection,children:o&&I?t.jsx("div",{children:Array.from({length:6}).map((a,h)=>t.jsxs("div",{className:n.skeletonItem,children:[t.jsx(d,{height:200,width:150,style:{marginBottom:"10px"}}),t.jsx(d,{height:20,width:100})]},h))}):t.jsx("ul",{className:n.castList,children:c.map(a=>t.jsx("li",{className:n.castItem,children:t.jsx(N,{dataCast:a})},a.id))})})};export{w as default};
