import{C as o,r as a,E as r,am as c,an as y}from"./index-338f6742.js";function f(){function l(){const e=document.createElement("div");e.style.position="fixed",e.style.top="0",e.style.left="0",e.style.bottom="0",e.style.right="0",e.style.zIndex="999999",e.style.display="flex",e.style.alignItems="center",e.style.justifyContent="center",e.style.backgroundColor="rgba(255, 255, 255, 0.8)";const d=r(c,{size:"large",tip:"Loading..."});return y(d,e),e}let t=null;o(()=>{t=l()});const n=a(!1),s=()=>{t&&(document.body.appendChild(t),document.body.style.overflow="hidden")},i=()=>{t&&(document.body.removeChild(t),document.body.style.overflow="auto")};return{setLoading:e=>{n.value=e,o(()=>{e&&s(),e||i()})},loading:n}}export{f as u};
