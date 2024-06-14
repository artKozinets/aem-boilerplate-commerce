import{useState as o,useCallback as W,useEffect as w}from"@dropins/tools/preact-compat.js";import{events as X}from"@dropins/tools/event-bus.js";import{Divider as Y,PriceSummary as A,Price as h,Picker as q,Input as G,Button as H,CartList as ee,CartItem as te,Image as J}from"@dropins/tools/components.js";import{E as ae}from"../chunks/MiniCart.js";import{classes as S,VComponent as U}from"@dropins/tools/lib.js";import{jsx as a,jsxs as $,Fragment as K}from"@dropins/tools/preact-jsx-runtime.js";import{s as re,n as ne}from"../chunks/getStoreConfig.js";import{b as ie,u as se}from"../chunks/updateProductsFromCart.js";import{g as ce,a as oe,b as le}from"../chunks/getEstimateShipping.js";import{useText as de}from"@dropins/tools/i18n.js";import"@dropins/tools/fetch-graphql.js";const ue=({className:b,children:m,emptyCart:l,heading:d,products:u,priceSummary:p,...t})=>a("div",{...t,className:S(["cart-cart",b]),children:$("div",{className:S(["cart-cart__wrapper"]),children:[d&&$("div",{className:S(["cart-cart__heading",["cart-cart__heading--full-width",!u||!p]]),children:[a(U,{node:d,className:"cart-cart__heading-text"}),a(Y,{variant:"primary",className:S(["cart-cart__heading-divider"])})]}),a("div",{className:S(["cart-cart__content",["cart-cart__content--empty",!u],["cart-cart__content--full-width",!p]]),children:u||a(U,{node:l,className:"cart-cart__empty-cart"})}),u&&p&&a(U,{node:p,className:S(["cart-cart__price-summary"])})]})}),pe=()=>{const[b,m]=o([]),[l,d]=o("US"),[u,p]=o(""),[t,_]=o(""),[D,E]=o([]),[z,f]=o(!1),[B,P]=o(),[R,k]=o(""),[N,F]=o(!1),y=W(i=>{const{shippingCountry:n,shippingState:c="",shippingZip:r=""}=i,Z={countryCode:n,postcode:r,region:{code:c}};F(!0),ce(Z).then(C=>{C&&(P({amount:C.amount.value,currency:C.amount.currency}),d(n),p(c),_(r),k(c||r||n))}).finally(()=>{F(!1)})},[]),O=i=>{i.preventDefault(),p(""),_("");const n=i.target.value;d(n)};return w(()=>{oe().then(i=>{let n="US";const c=i.map(r=>(r.isDefaultCountry&&(n=r.id),{text:r.label,value:r.id}));m(c),d(n)})},[]),w(()=>{f(!0),le(l).then(i=>{const n=i.map(c=>({text:c.name,value:c.code}));E(n)}).finally(()=>{f(!1)})},[l,f]),{loading:N,regionsLoading:z,estimatedDestinationText:R,countries:b,selectedCountry:l,selectedRegion:u,selectedZip:t,regions:D,estimatedShippingPrice:B,handleEstimateShipping:y,handleCountrySelected:O}},me=({children:b,initialData:m=null,routeProduct:l,routeEmptyCartCTA:d,routeCheckout:u,...p})=>{var C,j,Q,V;const[t,_]=o(m),[D,E]=o(new Set),{loading:z,regionsLoading:f,countries:B,regions:P,selectedCountry:R,selectedRegion:k,selectedZip:N,estimatedDestinationText:F,estimatedShippingPrice:y,handleCountrySelected:O,handleEstimateShipping:i}=pe(),n=(e,s)=>{E(g=>(e?g.add(s):g.delete(s),new Set(g)))},c=(e,s)=>{n(!0,e),se([{uid:e,quantity:s}]).finally(()=>{n(!1,e)})},r=de({applyButton:"Cart.PriceSummary.estimatedShippingForm.apply.label",checkout:"Cart.PriceSummary.checkout",countryField:"Cart.PriceSummary.estimatedShippingForm.country.placeholder",discountedPrice:"Cart.CartItem.discountedPrice",download:"Cart.CartItem.download",freeShipping:"Cart.PriceSummary.freeShipping",heading:"Cart.Cart.heading",message:"Cart.CartItem.message",regularPrice:"Cart.CartItem.regularPrice",recipient:"Cart.CartItem.recipient",sender:"Cart.CartItem.sender",stateField:"Cart.PriceSummary.estimatedShippingForm.state.placeholder",taxToBeDetermined:"Cart.PriceSummary.taxToBeDetermined",zipField:"Cart.PriceSummary.estimatedShippingForm.zip.placeholder",file:"Cart.CartItem.file",files:"Cart.CartItem.files"});w(()=>{const e=X.on("cart/data",s=>{var v,x;_(s);const g=(x=(v=s==null?void 0:s.addresses)==null?void 0:v.shipping)==null?void 0:x[0];if(g){const{countryCode:I,regionCode:L,zipCode:T}=g;i({shippingCountry:I,shippingState:L,shippingZip:T})}},{eager:!0});return()=>{e==null||e.off()}},[i]),w(()=>{m&&Object.keys(m).length>0&&ie(m,re.locale||"en-US")},[m]);const Z=(t==null?void 0:t.totalQuantity)??0?a(A,{"data-testid":"price-summary",loading:z,heading:"Order Summary",total:{price:a(h,{amount:t==null?void 0:t.total.value,currency:t==null?void 0:t.total.currency}),estimated:!0},subTotal:{price:a(h,{"data-testid":"subtotal",amount:(C=t==null?void 0:t.subtotal.excludingTax)==null?void 0:C.value,currency:(j=t==null?void 0:t.subtotal.excludingTax)==null?void 0:j.currency})},shipping:t!=null&&t.isVirtual?void 0:{price:(y==null?void 0:y.amount)==0?a("span",{"data-testId":"free-shipping",children:r.freeShipping}):y?a(h,{...y}):a("span",{children:r.taxToBeDetermined}),estimated:!0,countryField:a(q,{name:"shippingCountry",placeholder:r.countryField,value:R,variant:"primary",options:B,handleSelect:O,"data-testid":"estimate-shipping-country-selector"}),stateField:P.length>0?a(q,{name:"shippingState",placeholder:r.stateField,variant:"primary",options:P,value:k,"data-testid":"estimate-shipping-state-selector",disabled:f}):a(G,{"aria-label":r.stateField,name:"shippingState",placeholder:r.stateField,variant:"primary",value:k,disabled:f,"data-testid":"estimate-shipping-state-input",maxLength:50}),zipField:a(G,{"aria-label":r.zipField,name:"shippingZip",placeholder:r.zipField,variant:"primary","data-testid":"estimate-shipping-zip-input",value:N,maxLength:12}),estimateButton:a(H,{variant:"secondary","data-testid":"estimate-shipping-apply-button","aria-label":r.applyButton,children:r.applyButton}),destinationText:F||r.taxToBeDetermined,onEstimate:i},taxTotal:{price:t!=null&&t.totalTax?a(h,{"data-testid":"tax-total",amount:(Q=t==null?void 0:t.totalTax)==null?void 0:Q.value,currency:(V=t==null?void 0:t.totalTax)==null?void 0:V.currency}):a("span",{"data-testid":"tax-total",children:r.taxToBeDetermined}),estimated:!0},primaryAction:u?a(H,{"data-testid":"checkout-button",variant:"primary",href:u({cartId:t.id}),children:r.checkout}):void 0,discounts:t==null?void 0:t.appliedDiscounts.map(e=>({label:e.label,price:a(h,{"data-testid":"summary-discount-total",amount:-e.amount.value,currency:e.amount.currency,sale:!0})}))}):void 0;return a(ue,{...p,heading:a("div",{children:r.heading}),emptyCart:a(ae,{ctaLinkURL:d==null?void 0:d()}),priceSummary:Z,products:(t==null?void 0:t.totalQuantity)??0?a(ee,{children:t==null?void 0:t.items.map((e,s)=>{var x,I,L,T;const g=D.has(e.uid),v={...e.bundleOptions??{},...e.selectedOptions??{},...e.customizableOptions,...e.recipient?{[r.recipient]:e.recipient}:{},...e.recipientEmail&&e.recipient?{[r.recipient]:`${e.recipient} (${e.recipientEmail})`}:{},...e.sender?{[r.sender]:e.sender}:{},...e.senderEmail&&e.sender?{[r.sender]:`${e.sender} (${e.senderEmail})`}:{},...e.message?{[r.message]:e.message}:{},...e.links&&e.links.count?e.links.count>1?{[r.files.replace("{count}",e.links.count.toString())]:e.links.result}:{[r.file.replace("{count}",e.links.count.toString())]:e.links.result}:{}};return a(te,{"data-testid":"cart-item",ariaLabel:e.name,updating:g,image:l?a("a",{href:l(e),children:a(J,{loading:s<4?"eager":"lazy",src:e.image.src,alt:e.image.alt,width:"300",height:"300",params:{width:300}})}):a(J,{loading:s<4?"eager":"lazy",src:e.image.src,alt:e.image.alt,width:"300",height:"300",params:{width:300}}),title:a("span",{children:l?a("a",{href:l(e),children:e.name}):a(K,{children:e.name})}),sku:a("span",{children:e.sku}),configurations:Object.keys(v).length>0?v:void 0,quantity:e.quantity,price:a(h,{amount:(x=e.regularPrice)==null?void 0:x.value,currency:(I=e.regularPrice)==null?void 0:I.currency,style:{font:"inherit"}}),total:$(K,{children:[a(h,{amount:e.total.value,currency:e.total.currency,variant:e.discounted?"strikethrough":"default","data-testid":"regular-total","aria-label":r.regularPrice}),e.discounted&&a(h,{amount:(L=e.discountedTotal)==null?void 0:L.value,currency:(T=e.discountedTotal)==null?void 0:T.currency,sale:e.discounted,"data-testid":"discount-total","aria-label":r.discountedPrice})]}),onQuantity:M=>{c(e.uid,M)},onRemove:()=>{c(e.uid,0)}},e.uid)})}):void 0})};me.getInitialData=async function(){return ne()};export{me as Cart,me as default};
//# sourceMappingURL=Cart.js.map
