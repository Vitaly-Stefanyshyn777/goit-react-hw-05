import{r,j as e}from"./react-BvMUtuR1.js";import{G as g}from"./react-icons-7sQ8Wqcp.js";import{b as u}from"./films-api-DhFlybDX.js";import{L as h}from"./index-DXK-5Bc2.js";import{d as L}from"./image-not-found-SSyqKm_O.js";import{c as _}from"./clsx-B-dksMZM.js";import{S as n}from"./react-loading-skeleton-DSROPNqW.js";import{c as T}from"./classnames-C9FZUsQl.js";import{c as N,b as y,L as S,N as x,O as b}from"./react-router-Uind0jIb.js";import{f as k}from"./date-fns-BzRktsyD.js";import"./axios-CCb-kr4I.js";import"./react-dom-BPTPhIog.js";import"./scheduler-CzFDRTuY.js";import"./react-loader-spinner-DKP1_6dy.js";import"./styled-components-DYCPWxr_.js";import"./@emotion-sScrWPmR.js";import"./stylis-DinRj2j6.js";import"./cookie-DmSiaxFR.js";const w="_movieDetails_13dpd_1",I="_movieDetailsThumb_13dpd_8",F="_btnLink_13dpd_15",A="_movieDetailsSection_13dpd_39",G="_movieDetailsImg_13dpd_43",M="_movieDetailsTitle_13dpd_47",P="_movieDetailsTagline_13dpd_55",E="_movieDetailsText_13dpd_63",U="_movieDetailsScore_13dpd_70",W="_spanAccent_13dpd_76",H="_iconSpilled_13dpd_81",$="_iconUpright_13dpd_81",O="_movieDetailsTitleFilm_13dpd_98",R="_movieDetailsGenresList_13dpd_105",z="_moreInfo_13dpd_111",B="_moreInfoLinkActive_13dpd_121",C="_forLaptop_13dpd_149",V="_videoPlayerWrapper_13dpd_154",q="_video_13dpd_154",i={movieDetails:w,movieDetailsThumb:I,btnLink:F,movieDetailsSection:A,movieDetailsImg:G,movieDetailsTitle:M,movieDetailsTagline:P,movieDetailsText:E,movieDetailsScore:U,spanAccent:W,iconSpilled:H,iconUpright:$,movieDetailsTitleFilm:O,movieDetailsGenresList:R,moreInfo:z,moreInfoLinkActive:B,forLaptop:C,videoPlayerWrapper:V,video:q},J="_video_8jlm5_1",K={video:J};function Q({filmId:o}){const[t,c]=r.useState("");return r.useEffect(()=>{o&&fetch(`//pleer.videoplayers.club/get_player?w=610&h=370&type=widget&kp_id=${o}&players=videocdn,hdvb,bazon`).then(s=>s.text()).then(s=>{const l=s.match(/<iframe.*<\/iframe>/gm);l&&l.length>0?c(l[1]):console.error("IFrame not found in response")}).catch(s=>{console.error("Error fetching video player:",s)})},[o]),e.jsx("div",{className:T("uitools",K.video),id:"videoplayers",dangerouslySetInnerHTML:{__html:t}})}const _e=()=>{var v;const{id:o}=N(),[t,c]=r.useState(null),[s,l]=r.useState(!1),m=y(),D=((v=m.state)==null?void 0:v.from)??"/";if(r.useEffect(()=>{(async()=>{l(!0);try{const d=await u(o);c(d)}catch(d){console.error(d)}finally{l(!1)}})()},[o]),s)return e.jsx(h,{});if(!t)return null;const f=k(new Date(t.release_date),"MMMM dd yyyy"),p=t.vote_average?(t.vote_average*10).toFixed(0):null,j=t.poster_path?`https://image.tmdb.org/t/p/w500/${t.poster_path}`:L;return e.jsxs("section",{className:i.movieDetails,children:[e.jsx(S,{to:D,children:e.jsxs("button",{className:i.btnLink,children:[e.jsx(g,{size:"20"})," Back"]})}),e.jsxs("div",{className:i.movieDetailsSection,children:[e.jsxs("div",{className:i.movieDetailsThumb,children:[s?e.jsx(n,{className:i.movieDetailsImg,width:350,height:500,duration:5.7}):e.jsx("img",{className:i.movieDetailsImg,src:j,alt:t.original_title,width:"350",height:"500"}),e.jsx("div",{children:s?e.jsxs(e.Fragment,{children:[e.jsx(n,{width:"80%",height:30,duration:1.5}),e.jsx(n,{width:"60%",height:20,duration:1.5}),e.jsx(n,{count:4,duration:1.5})]}):e.jsxs(e.Fragment,{children:[e.jsx("h2",{className:i.movieDetailsTitle,children:t.original_title}),e.jsx("p",{className:i.movieDetailsTagline,children:t.tagline}),e.jsxs("p",{className:i.movieDetailsText,children:[e.jsx("span",{className:i.spanAccent,children:"Release date:"})," ",f]}),p&&e.jsxs("p",{className:i.movieDetailsText,children:[e.jsx("span",{className:i.spanAccent,children:"User Score:"})," ",p,"%"]}),e.jsx("h3",{className:i.movieDetailsTitleFilm,children:"Overview"}),e.jsx("p",{className:i.movieDetailsText,children:t.overview}),e.jsx("h3",{className:i.movieDetailsTitleFilm,children:"Genres"}),e.jsx("ul",{className:i.movieDetailsGenresList,children:s?e.jsxs(e.Fragment,{children:[e.jsx(n,{width:"60%",height:20,duration:1.5}),e.jsx(n,{width:"60%",height:20,duration:1.5})]}):t.genres.map(a=>e.jsx("li",{className:i.movieDetailsText,children:a.name},a.id))})]})})]}),e.jsxs("div",{className:i.videoPlayerWrapper,children:[e.jsx("h3",{className:i.movieDetailsTitleFilm,children:"Watch Trailer"}),e.jsx(Q,{})]}),e.jsxs("nav",{className:i.moreInfo,children:[e.jsx(x,{className:({isActive:a})=>_(i.btnLink,a&&i.moreInfoLinkActive),to:"cast",state:m.state,children:"Cast"}),e.jsx(x,{className:({isActive:a})=>_(i.btnLink,a&&i.moreInfoLinkActive),to:"reviews",state:m.state,children:"Reviews"})]}),e.jsx(r.Suspense,{fallback:e.jsx(h,{}),children:e.jsx(b,{})})]})]})};export{_e as default};