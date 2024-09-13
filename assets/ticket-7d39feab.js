import{b as s,A as ne,d as le,r as u,a5 as V,o as d,c as _,a as n,w as o,I as y,ah as oe,ai as re,aj as C,f as m,E as L,i as w,h as b,ak as ce,k as Y,X as ie,e as U,F as M,y as z,g as ue,t as S,al as de}from"./index-338f6742.js";import{u as me}from"./useLoading-d20fdbfd.js";var fe={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"};const ve=fe;function T(f){for(var r=1;r<arguments.length;r++){var l=arguments[r]!=null?Object(arguments[r]):{},c=Object.keys(l);typeof Object.getOwnPropertySymbols=="function"&&(c=c.concat(Object.getOwnPropertySymbols(l).filter(function(v){return Object.getOwnPropertyDescriptor(l,v).enumerable}))),c.forEach(function(v){pe(f,v,l[v])})}return f}function pe(f,r,l){return r in f?Object.defineProperty(f,r,{value:l,enumerable:!0,configurable:!0,writable:!0}):f[r]=l,f}var A=function(r,l){var c=T({},r,l.attrs);return s(ne,T({},c,{icon:ve}),null)};A.displayName="UserOutlined";A.inheritAttrs=!1;const F=A,_e={class:"shadow-md bg-white rounded-md border p-[15px]"},ge={class:"border-b pb-[10px] flex items-center justify-between"},xe=n("div",{class:"font-bold text-lg"},"工单列表",-1),ye=n("i",{class:"iconfont icon-gongdanqueren text-[#fff]"},null,-1),be=n("div",{class:"ml-2"},"创建工单",-1),ke={key:0,class:"flex items-center"},he=["onClick"],Oe=["onClick"],Ce={key:0,class:"flex items-center mb-[15px] border-b pb-[15px]"},we={class:"ml-3"},Ye={class:"text-[#999] text-[12px]"},Se=n("span",{class:"mr-2"},"管理员",-1),je={class:"text-[#595959]"},Ie={key:1,class:"flex items-center justify-end mb-[15px] border-b pb-[15px]"},De={class:"mr-3"},Le={class:"text-[#999] text-[12px]"},Ue={class:"text-[#595959] text-end"},He=le({__name:"ticket",setup(f){const r=u([{title:"ID",dataIndex:"id",key:"id"},{title:"主题",dataIndex:"subject",key:"subject"},{title:"级别",dataIndex:"level",key:"level",customRender:({record:e})=>L("div",e.level==0?"低":e.level==1?"中":"高")},{title:"状态",dataIndex:"status",key:"status"},{title:"创建时间",dataIndex:"created_at",key:"created_at",customRender:({record:e})=>L("div",w.unix(e.created_at).format("YYYY-MM-DD HH:mm"))},{title:"最后回复",dataIndex:"updated_at",key:"updated_at",customRender:({record:e})=>L("div",w.unix(e.updated_at).format("YYYY-MM-DD HH:mm"))},{title:"操作",dataIndex:"operate",key:"operate"}]),l=u([]),c=u(""),v=u(!1),k=u(!1),H=u("低"),q=V(["低","中","高"]),i=V({subject:"",level:0,message:""}),{setLoading:p}=me(),h=u(!1),O=u(!1);async function X(){if(!i.subject)return y.error("请输入主题");if(!i.message)return y.error("请输入消息");try{h.value=!0,await oe(i),await j(),h.value=!1,v.value=!1,y.success("创建成功,请等待!")}catch(e){h.value=!1,console.log(e)}}async function G(e){try{p(!0),await de({id:e.id}),await j(),p(!1),y.success("关闭成功")}catch(a){p(!1),console.log(a)}}const B=u({});async function J(){if(c.value)try{O.value=!0,await re({message:c.value,id:B.value.id});const e=await C({id:record.id});l.value=e.data.message,O.value=!1,k.value=!1,y.success("回复成功")}catch(e){O.value=!1,console.log(e)}else return y.error("请输入消息")}let g=null;function Q(){k.value=!1,g&&(clearInterval(g),g=null)}async function W(e){try{c.value="",p(!0);const a=await C({id:e.id});B.value=a.data,l.value=a.data.message,p(!1),k.value=!0,e.status==0&&(g&&(clearInterval(g),g=null),g=setInterval(async()=>{const I=await C({id:e.id});l.value=I.data.message},5e3))}catch{p(!1)}}const N=u([]);async function j(){try{p(!0);const{data:e}=await C();p(!1),N.value=e}catch(e){p(!1),console.log(e)}}j();function Z(e){e=="低"?i.level=0:e=="中"?i.level=1:i.level=2}return(e,a)=>{const I=m("a-button"),P=m("a-tag"),K=m("a-table"),ee=m("a-segmented"),D=m("a-form-item"),te=m("a-input"),$=m("a-textarea"),ae=m("a-form"),E=m("a-modal"),R=m("a-avatar");return d(),_("div",null,[n("div",_e,[n("div",ge,[xe,n("div",null,[s(I,{type:"primary",onClick:a[0]||(a[0]=t=>v.value=!0)},{icon:o(()=>[ye]),default:o(()=>[be]),_:1})])]),n("div",null,[s(K,{dataSource:N.value,columns:r.value,pagination:!1,scroll:{x:900}},{bodyCell:o(({column:t,record:x})=>[t.key==="operate"?(d(),_("div",ke,[n("div",{class:"text-theme cursor-pointer pr-[10px] text-[13px]",onClick:se=>W(x)},[s(b(ce)),Y(" 查看 ")],8,he),x.status==0?(d(),_("div",{key:0,onClick:se=>G(x),class:"text-red-500 cursor-pointer border-l pl-[10px] text-[13px]"},[s(b(ie)),Y(" 关闭 ")],8,Oe)):U("",!0)])):U("",!0),t.key==="status"?(d(),_(M,{key:1},[x.status==0?(d(),z(P,{key:0,color:"#f50"},{default:o(()=>[Y("待回复")]),_:1})):(d(),z(P,{key:1,color:"#87d068"},{default:o(()=>[Y("已关闭")]),_:1}))],64)):U("",!0)]),_:1},8,["dataSource","columns"])])]),n("div",null,[s(E,{open:v.value,"onUpdate:open":a[4]||(a[4]=t=>v.value=t),title:"创建工单",onOk:X,confirmLoading:h.value},{default:o(()=>[s(ae,{model:i,autocomplete:"off",layout:"vertical"},{default:o(()=>[s(D,{label:"期待响应速度",name:"username"},{default:o(()=>[s(ee,{value:H.value,"onUpdate:value":a[1]||(a[1]=t=>H.value=t),onChange:Z,options:q,block:"",size:"large"},null,8,["value","options"])]),_:1}),s(D,{label:"主题",name:"username"},{default:o(()=>[s(te,{value:i.subject,"onUpdate:value":a[2]||(a[2]=t=>i.subject=t),placeholder:"一句话描述你的目的"},null,8,["value"])]),_:1}),s(D,{label:"消息",name:"username"},{default:o(()=>[s($,{value:i.message,"onUpdate:value":a[3]||(a[3]=t=>i.message=t),placeholder:"描述你的问题"},null,8,["value"])]),_:1})]),_:1},8,["model"])]),_:1},8,["open","confirmLoading"]),s(E,{open:k.value,"onUpdate:open":a[6]||(a[6]=t=>k.value=t),title:"工单回复","ok-text":"回复消息","cancel-text":"关闭",onCancel:Q,onOk:J,confirmLoading:O.value},{default:o(()=>[n("div",null,[(d(!0),_(M,null,ue(l.value,(t,x)=>(d(),_(M,{key:x},[t.is_me?(d(),_("div",Ie,[n("div",De,[n("div",Le,[n("span",null,S(b(w).unix(t.created_at).format("YYYY-MM-DD HH:mm:ss")),1)]),n("div",Ue,S(t.message),1)]),s(R,{style:{"background-color":"#87d068"}},{icon:o(()=>[s(b(F))]),_:1})])):(d(),_("div",Ce,[s(R,null,{icon:o(()=>[s(b(F))]),_:1}),n("div",we,[n("div",Ye,[Se,n("span",null,S(b(w).unix(t.created_at).format("YYYY-MM-DD HH:mm:ss")),1)]),n("div",je,S(t.message),1)])]))],64))),128)),s($,{value:c.value,"onUpdate:value":a[5]||(a[5]=t=>c.value=t)},null,8,["value"])])]),_:1},8,["open","confirmLoading"])])])}}});export{He as default};
