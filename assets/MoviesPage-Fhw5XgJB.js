import{j as e,r as c}from"./react-BvMUtuR1.js";import{_ as r,I as S}from"./react-hot-toast-DOuCFQ7b.js";import{M as _}from"./MovieList-BbJCNB7O.js";import{F as b,a as g,b as x}from"./formik-Kij5_nIu.js";import{a as j}from"./films-api-DhFlybDX.js";import{u as y}from"./react-router-Uind0jIb.js";import"./classnames-C9FZUsQl.js";import"./goober-np-fLvOt.js";import"./image-not-found-SSyqKm_O.js";import"./react-loading-skeleton-DSROPNqW.js";import"./date-fns-BzRktsyD.js";import"./deepmerge-DhIoniG1.js";import"./lodash-es-dVqQl90_.js";import"./react-fast-compare-CnCej0V4.js";import"./hoist-non-react-statics-Buxaj0Kl.js";import"./react-is-8JwjhRSi.js";import"./axios-CCb-kr4I.js";import"./cookie-DmSiaxFR.js";import"./react-dom-BPTPhIog.js";import"./scheduler-CzFDRTuY.js";const T="_searchThumb_1uj7a_1",P="_inputSearch_1uj7a_6",v="_btnSearch_1uj7a_25",h={searchThumb:T,inputSearch:P,btnSearch:v},w=({onSubmit:s})=>{const a=(o,n)=>{const t=o.search.trim().toLowerCase();if(!t){r.error("The search field cannot be empty!");return}s(t),n.resetForm()};return e.jsx("div",{className:h.searchThumb,children:e.jsx(b,{initialValues:{search:""},onSubmit:a,children:e.jsxs(g,{children:[e.jsx(x,{className:h.inputSearch,type:"text",name:"search",autoComplete:"off",autoFocus:!0,placeholder:"Search films"}),e.jsx("button",{className:h.btnSearch,type:"submit",children:"Search"})]})})})},C="_moviesSearch_hewk4_1",F="_btnPaginationThumb_hewk4_5",N="_btnPagination_hewk4_5",k="_toastTextCenter_hewk4_37",L="_loadingContainer_hewk4_43",p={moviesSearch:C,btnPaginationThumb:F,btnPagination:N,toastTextCenter:k,loadingContainer:L},Y=()=>{const[s,a]=c.useState([]),[o,n]=y(),t=o.get("search"),[d,m]=c.useState(!1);c.useEffect(()=>{(async()=>{m(!0);try{const i=await j(t||"popular");a(i.results),i.total_results===0?r.error("No results found."):r.success(`Found ${i.total_results} films.`)}catch(u){console.error("Error fetching films:",u),r.error("Something went wrong, please try again.")}finally{m(!1)}})()},[t]);const f=l=>{n({search:l})};return e.jsx("main",{children:e.jsxs("section",{className:p.moviesSearch,children:[e.jsx(w,{onSubmit:f}),e.jsx(S,{position:"top-right",reverseOrder:!1}),d?e.jsx("div",{className:p.loadingContainer,children:e.jsx("p",{children:"Loading..."})}):s.length>0?e.jsx(_,{filmsList:s}):e.jsx("p",{children:"No results found."})]})})};export{Y as default};
