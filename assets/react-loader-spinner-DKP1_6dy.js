import{j as t}from"./react-BvMUtuR1.js";import{d as a,m as i}from"./styled-components-DYCPWxr_.js";const $="#4fa94d",h={"aria-busy":!0,role:"progressbar"},f=a.div`
  display: ${s=>s.$visible?"flex":"none"};
`,k="http://www.w3.org/2000/svg",e=242.776657104492,y=1.6,b=i`
12.5% {
  stroke-dasharray: ${e*.14}px, ${e}px;
  stroke-dashoffset: -${e*.11}px;
}
43.75% {
  stroke-dasharray: ${e*.35}px, ${e}px;
  stroke-dashoffset: -${e*.35}px;
}
100% {
  stroke-dasharray: ${e*.01}px, ${e}px;
  stroke-dashoffset: -${e*.99}px;
}
`;a.path`
  stroke-dasharray: ${e*.01}px, ${e};
  stroke-dashoffset: 0;
  animation: ${b} ${y}s linear infinite;
`;const g=({height:s=80,width:r=80,radius:n=1,color:o=$,ariaLabel:d="puff-loading",wrapperStyle:c,wrapperClass:l,visible:p=!0})=>t.jsx(f,{style:c,$visible:p,className:l,"data-testid":"puff-loading","aria-label":d,...h,children:t.jsx("svg",{width:r,height:s,viewBox:"0 0 44 44",xmlns:k,stroke:o,"data-testid":"puff-svg",children:t.jsxs("g",{fill:"none",fillRule:"evenodd",strokeWidth:"2",children:[t.jsxs("circle",{cx:"22",cy:"22",r:n,children:[t.jsx("animate",{attributeName:"r",begin:"0s",dur:"1.8s",values:"1; 20",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.165, 0.84, 0.44, 1",repeatCount:"indefinite"}),t.jsx("animate",{attributeName:"strokeOpacity",begin:"0s",dur:"1.8s",values:"1; 0",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.3, 0.61, 0.355, 1",repeatCount:"indefinite"})]}),t.jsxs("circle",{cx:"22",cy:"22",r:n,children:[t.jsx("animate",{attributeName:"r",begin:"-0.9s",dur:"1.8s",values:"1; 20",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.165, 0.84, 0.44, 1",repeatCount:"indefinite"}),t.jsx("animate",{attributeName:"strokeOpacity",begin:"-0.9s",dur:"1.8s",values:"1; 0",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.3, 0.61, 0.355, 1",repeatCount:"indefinite"})]})]})})}),x=i`
to {
   transform: rotate(360deg);
 }
`;a.svg`
  animation: ${x} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`;a.polyline`
  stroke-width: ${s=>s.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`;const m=i`
to {
   stroke-dashoffset: 136;
 }
`;a.polygon`
  stroke-dasharray: 17;
  animation: ${m} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;a.svg`
  transform-origin: 50% 65%;
`;export{g as $};
