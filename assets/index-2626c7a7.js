function t(e){return e<1024?e.toFixed(0)+"B":e<1024*1024?(e/1024).toFixed(0)+"KB":e<1024*1024*1024?(e/(1024*1024)).toFixed(0)+"MB":(e/(1024*1024*1024)).toFixed(0)+"GB"}export{t as f};
