import{H as N}from"./CartSummaryItem.js";import"@dropins/tools/preact-hooks.js";import{i as L}from"./countries.js";import"@dropins/tools/event-bus.js";import{e as D}from"./transform-shipping-methods.js";import{s as k}from"./SelectedShippingMethodSignal.js";import{Card as E,Divider as g,ProgressSpinner as z,Price as y,Skeleton as A,SkeletonRow as v}from"@dropins/tools/components/index.js";/* empty css                     */import{jsxs as u,jsx as r,Fragment as I}from"@dropins/tools/preact-jsx-runtime.js";import{c as d}from"./classes.js";import{Text as n}from"@dropins/tools/i18n.js";const j=({className:o,summary:p,isLoading:t=!1,...T})=>{const{total:m,subtotal:h,shipping:i,tax:c}=p;return u(E,{...T,className:d(["checkout-order-summary",["checkout-order-summary--loading",t],o]),children:[r(N,{level:2,className:"checkout-order-summary__title",children:r(n,{id:"Checkout.OrderSummary.title"})}),r(g,{variant:"primary"}),t&&r(z,{className:"checkout-order-summary__spinner"}),u("div",{"data-testid":"order-summary-subtotal",className:"checkout-order-summary__row",children:[r("p",{children:r(n,{id:"Checkout.OrderSummary.subtotal"})}),r(y,{amount:h.amount,currency:h.currency,className:d(["checkout-order-summary__price",o])})]}),h.isTaxIncl&&r("div",{"data-testid":"order-summary-subtotal-incl-tax",className:"checkout-order-summary__row checkout-order-summary__row--muted",children:r("p",{children:r(n,{id:"Checkout.OrderSummary.includingTaxes"})})}),i!=null&&u("div",{"data-testid":"order-summary-shipping",className:"checkout-order-summary__row",children:[r("p",{"data-testid":"order-summary-shipping-label",children:i.isEstimated?r(n,{id:"Checkout.OrderSummary.estimatedShipping"}):r(n,{id:"Checkout.OrderSummary.shipping"})}),i.amount===0?r("p",{"data-testid":"estimated-shipping",className:"checkout-order-summary__price",children:r(n,{id:"Checkout.OrderSummary.freeShipping"})}):r(y,{"data-testid":"estimated-shipping",amount:i.amount,currency:i.currency,className:d(["checkout-order-summary__price",o])})]}),c!=null&&!c.breakdown&&u("div",{"data-testid":"order-summary-tax",className:"checkout-order-summary__row",children:[r("p",{children:r(n,{id:"Checkout.OrderSummary.tax"})}),r(y,{amount:c.amount,currency:c.currency,className:d(["checkout-order-summary__price",o])})]}),c!=null&&c.breakdown&&u(I,{children:[r(g,{variant:"secondary"}),r("div",{className:"checkout-order-summary__row checkout-order-summary__row--margin-bottom",children:r("p",{children:r(n,{id:"Checkout.OrderSummary.taxBreakdown"})})}),c.breakdown.map(e=>u("div",{"data-testid":"order-summary-tax-breakdown",className:"checkout-order-summary__row checkout-order-summary__row--muted",children:[r("p",{children:e.label}),r(y,{amount:e.amount.value,currency:e.amount.currency,className:d(["checkout-order-summary__price",o])})]},e.label)),u("div",{"data-testid":"order-summary-tax-breakdown-total",className:"checkout-order-summary__row checkout-order-summary__row--strong checkout-order-summary__row--margin-top",children:[r("p",{children:r(n,{id:"Checkout.OrderSummary.taxTotal"})}),r(y,{amount:c.amount,currency:c.currency,className:d(["checkout-order-summary__price",o])})]}),r(g,{variant:"secondary"})]}),u("div",{"data-testid":"order-summary-total-incl-tax",className:"checkout-order-summary__row checkout-order-summary__row--emphasized",children:[r("p",{children:r(n,{id:"Checkout.OrderSummary.total"})}),r(y,{amount:m.inclTax.amount,currency:m.inclTax.currency,className:d(["checkout-order-summary__price",o])})]}),m.exclTax!=null&&u("div",{"data-testid":"order-summary-total-excl-tax",className:"checkout-order-summary__row checkout-order-summary__row--muted",children:[r("p",{children:r(n,{id:"Checkout.OrderSummary.totalExclTax"})}),r(y,{amount:m.exclTax.amount,currency:m.exclTax.currency,className:d(["checkout-order-summary__price",o])})]})]})},F=()=>u(A,{"data-testid":"order-summary-skeleton",className:"order-summary__skeleton",children:[r(v,{variant:"heading",size:"medium"}),r(v,{variant:"empty",size:"medium"}),r(v,{size:"large",fullWidth:!0,lines:3})]}),w=0,G=2,H={isLoading:!0};function P(){const{config:o}=L(),p=o===void 0,t=D.value.data;if(p||t===void 0)return H;const m=o.taxCartDisplay,h=m.shoppingCartDisplaySubtotal===G,i=t==null?void 0:t.shippingAddresses,c=!!(i!=null&&i.length),e=t==null?void 0:t.prices,x=e==null?void 0:e.grand_total,C=!!x,S=h?e==null?void 0:e.subtotal_including_tax:e==null?void 0:e.subtotal_excluding_tax,_=(e==null?void 0:e.applied_taxes)||[],f=!!_.length;if(!C)return{isLoading:!1};const a={total:{inclTax:{amount:x.value,currency:x.currency}},subtotal:{amount:S.value,currency:S.currency,isTaxIncl:h}};if(f){const l=_.reduce((b,O)=>b+O.amount.value,w),s=_[0];a.tax={amount:l,currency:s.amount.currency},m.shoppingCartDisplayFullSummary&&(a.tax.breakdown=_)}if(!f&&m.shoppingCartDisplayZeroTax&&(a.tax={amount:w,currency:a.total.inclTax.currency}),m.shoppingCartDisplayGrandTotal){const l=a.tax?a.total.inclTax.amount-a.tax.amount:a.total.inclTax.amount;a.total.exclTax={amount:l,currency:a.total.inclTax.currency}}if(c){const l=i[0],s=l==null?void 0:l.selectedShippingMethod;return s?(a.shipping={amount:s==null?void 0:s.amount.value,currency:s==null?void 0:s.amount.currency,isEstimated:!1},{isLoading:!1,summary:a}):{isLoading:!1,summary:a}}return k.value?(a.shipping={amount:k.value.amount.value,currency:k.value.amount.currency,isEstimated:!0},a.total.inclTax.amount+=a.shipping.amount,a.total.exclTax&&(a.total.exclTax.amount+=a.shipping.amount),{isLoading:!1,summary:a}):{isLoading:!1,summary:a}}const Q=({...o})=>{const{isLoading:p,summary:t}=P();return u("div",{...o,children:[!t&&r(F,{}),t&&r(j,{isLoading:p,summary:t})]})};export{Q as O,P as u};
//# sourceMappingURL=OrderSummary.js.map