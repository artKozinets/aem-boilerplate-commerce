import{h as c,f,j as g,l as S}from"./countries.js";import"@dropins/tools/event-bus.js";class x extends Error{constructor(r){super(r.map(t=>t.message).join(" ")),this.name="FetchError"}}class i extends Error{constructor(r){super(r),this.name="InvalidArgument"}}class $ extends Error{constructor(r){super(r),this.name="UnexpectedError"}}class j extends i{constructor(){super("Cart ID is required")}}class B extends i{constructor(){super("Email is required")}}class F extends i{constructor(){super("Payment method code is required")}}class G extends i{constructor(){super("Billing address is required")}}class Q extends i{constructor(){super("Country Code is required")}}const _=c({pending:!1,data:void 0}),w=c({pending:!1,data:void 0}),C=c({pending:!1,data:void 0}),l=[];function q(e){return new Promise((r,t)=>{l.push(e);const s=()=>{l[0]===e?e().then(r).catch(t).finally(()=>l.shift()):setTimeout(s,100)};s()})}const A=["sender_email","recipient_email"];function P(e){return e.filter(r=>!r.path||!A.some(t=>{var s;return((s=r.path)==null?void 0:s.at(-1))===t}))}const T={cart:_,regions:C,estimateShippingMethods:w};function b(e,r){return r.split(".").reduce((t,s)=>t&&t[s]!==void 0?t[s]:void 0,e)}const v={cart:null,regions:null,estimateShippingMethods:null};async function R(e){const{query:r,options:t,path:s,signalType:u,type:M,transformer:d}=e,n=T[u],p=Symbol();v[u]=p,n.value={...n.value,pending:!0};try{const{data:a,errors:h}=await(M==="mutation"?q(()=>f(r,t).catch(g)):f(r,{method:"GET",cache:"no-cache",...t}).catch(g));if(h){const m=P(h);if(m.length>0)throw new x(m)}let o=b(a,s);if(o===void 0)throw new Error(`No data found at path: ${s}`);return d&&(o=d(o)),n.value={...n.value,data:o},setTimeout(()=>{n.value={...n.value,pending:v[u]===p?!1:n.value.pending}},0),o}catch(a){if(a.name==="AbortError")return;throw n.value={...n.value,pending:!1},a}}const I=(e,r)=>e.amount.value-r.amount.value,y=e=>!(!e||!e.method_code||!e.method_title||S(e.amount.value)||!e.amount.currency),E=e=>({amount:{value:e.amount.value,currency:e.amount.currency},title:e.method_title,code:e.method_code,carrier:{code:e.carrier_code,title:e.carrier_title},value:`${e.carrier_code} - ${e.method_code}`}),V=e=>{if(y(e))return E(e)},k=e=>{if(e)return e.filter(y).map(r=>E(r)).sort(I)};export{x as F,i as I,j as M,$ as U,B as a,F as b,G as c,Q as d,_ as e,R as f,w as g,V as h,C as r,k as t};
//# sourceMappingURL=transform-shipping-methods.js.map
