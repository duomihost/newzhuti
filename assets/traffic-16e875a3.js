import{d as i,r as n,o as u,c as f,a,b as m,B as _,f as p,E as t,i as v}from"./index-338f6742.js";import{u as x}from"./useLoading-d20fdbfd.js";import{f as r}from"./index-2626c7a7.js";const b={class:"shadow-md bg-white rounded-md border p-[15px]"},g=a("div",{class:"border-b pb-[10px] flex items-center justify-between"},[a("div",{class:"font-bold text-lg"},"流量记录 (当月)")],-1),w=i({__name:"traffic",setup(h){const{setLoading:o}=x(),s=n([]),d=n([{title:"记录时间",dataIndex:"record_at",key:"record_at",customRender:({record:e})=>t("div",v.unix(e.record_at).format("YYYY-MM-DD"))},{title:"实际上行",dataIndex:"u",key:"u",customRender:({record:e})=>t("div",r(e.u))},{title:"实际下行",dataIndex:"d",key:"d",customRender:({record:e})=>t("div",r(e.d))},{title:"扣费倍率",dataIndex:"server_rate",key:"server_rate"},{title:"合计",dataIndex:"hj",key:"hj",customRender:({record:e})=>t("div",r(e.d+e.u))}]);async function c(){try{o(!0);const e=await _();s.value=e.data,o(!1)}catch(e){o(!1),console.log(e)}}return c(),(e,y)=>{const l=p("a-table");return u(),f("div",null,[a("div",b,[g,a("div",null,[m(l,{dataSource:s.value,columns:d.value,pagination:!1,scroll:{x:650}},null,8,["dataSource","columns"])])])])}}});export{w as default};
