(function(p,t){try{if(typeof document<"u"){const r=document.createElement("style"),e=t.styleId;for(const a in t.attributes)r.setAttribute(a,t.attributes[a]);r.setAttribute("data-dropin",e),r.appendChild(document.createTextNode(p));const o=document.querySelector('style[data-dropin="sdk"]');if(o)o.after(r);else{const a=document.querySelector('link[rel="stylesheet"], style');a?a.before(r):document.head.append(r)}}}catch(r){console.error("dropin-styles (injectCodeFunction)",r)}})(".pdp-carousel{--icon-size: 32px;--icon-extra-padding: 8px;--thumb-peak: 32px;--thumbnails-col-width: 18.6%;position:relative;display:flex;flex-direction:var(--flex-carousel);align-items:center;gap:var(--gap);width:var(--width)}.pdp-carousel--thumbnailsColumn{justify-content:flex-end;align-items:start}.pdp-carousel--thumbnailsRow{align-items:center}.pdp-carousel--arrows{padding-left:calc(var(--icon-size) + var(--icon-extra-padding));padding-right:calc(var(--icon-size) + var(--icon-extra-padding));width:calc(var(--width) - 2 * var(--icon-size) - 2 * var(--icon-extra-padding))}.pdp-carousel__button{position:absolute;top:50%;transform:translateY(-50%);padding:0}.pdp-carousel__button--prev{left:0}.pdp-carousel__button--next{right:0}.pdp-carousel__button__icon--prev{transform:rotate(90deg)}.pdp-carousel__button__icon--next{right:0;transform:rotate(-90deg)}.pdp-carousel--main-image-controls.pdp-carousel--thumbnailsColumn .pdp-carousel__button--prev{left:var(--thumbnails-col-width)}.pdp-carousel--main-image-controls.pdp-carousel--thumbnailsRow .pdp-carousel__button--prev,.pdp-carousel--main-image-controls.pdp-carousel--thumbnailsRow .pdp-carousel__button--next{top:calc(var(--height) / 2)}.pdp-carousel__button--thumbnailsColumn{margin:auto;padding:0}.pdp-carousel__button--thumbnailsRow{padding:0}.pdp-carousel__button__icon--thumbnailsColumn--prev{transform:rotate(180deg)}.pdp-carousel__button__icon--thumbnailsRow--prev{transform:rotate(90deg)}.pdp-carousel__button__icon--thumbnailsRow--next{transform:rotate(-90deg)}.pdp-carousel__wrapper{--peak: 0px;scroll-padding:var(--peak);width:var(--total-width);height:var(--height);display:flex;flex-wrap:nowrap;gap:var(--gap);-webkit-overflow-scrolling:touch}.pdp-carousel__wrapper--horizontal{overflow-x:auto;overflow-y:hidden;scroll-snap-type:x mandatory}.pdp-carousel__slide{display:grid;grid-gap:var(--gap);grid-auto-columns:1fr;grid-auto-rows:100%;scroll-snap-align:end;scroll-snap-stop:always;flex-shrink:0}.pdp-carousel__slide--horizontal{grid-auto-flow:column;width:calc(100% - var(--peak))}.pdp-carousel__slide--horizontal.pdp-carousel__slide--orphan{width:calc((100% / var(--per-page) * var(--length)) - var(--peak) / var(--per-page) * var(--length) - var(--gap) / var(--per-page) * (var(--per-page) - var(--length)))}.pdp-carousel__slide>*{vertical-align:middle;max-width:100%;max-height:100%}.pdp-carousel__slide>img{object-fit:contain;width:100%;height:100%}.pdp-carousel__wrapper--peak{--peak: calc(var(--spacing-medium) + var(--gap))}.pdp-carousel__wrapper--scrollbar{--scroll-foreground: var(--color-neutral-600);--scroll-background: var(--color-neutral-400);scrollbar-color:var(--scroll-foreground) var(--scroll-background);scrollbar-width:thin}.pdp-carousel__wrapper:not(.pdp-carousel__wrapper--scrollbar){scrollbar-width:none}.pdp-carousel__wrapper:not(.pdp-carousel__wrapper--scrollbar)::-webkit-scrollbar{display:none}.pdp-carousel__wrapper--scrollbar::-webkit-scrollbar{width:4px;height:4px}.pdp-carousel__wrapper--scrollbar::-webkit-scrollbar-thumb{background:var(--scroll-foreground)}.pdp-carousel__wrapper--scrollbar::-webkit-scrollbar-track{background:var(--scroll-background)}.pdp-carousel__controls__container--thumbnailsRow{--thumbnails-spacing: var(--spacing-small);--thumbnails-box-width: var(--spacing-xxsmall);--thumbnails-rest: calc(var(--thumbnails-spacing) - var(--thumbnails-box-width));--thumbnails-width: calc((var(--width) - 2 * var(--icon-size) - 4 * var(--thumbnails-spacing) - var(--thumb-peak) - 2 * var(--thumbnails-box-width)) / 4);margin-top:var(--thumbnails-rest);width:var(--width);display:flex}.pdp-carousel__controls__container--thumbnailsColumn{--thumbnails-spacing: var(--spacing-small);--thumbnails-box-width: var(--spacing-xxsmall);--thumbnails-rest: calc(var(--thumbnails-spacing) - var(--thumbnails-box-width));--thumbnails-width: 100%;width:calc(var(--thumbnails-col-width) - var(--thumbnails-rest));margin-right:var(--thumbnails-rest)}.pdp-carousel__controls__container--thumbnailsColumn:not(.pdp-carousel__controls__container--no-arrows){height:calc(max(var(--height),4 * var(--thumbnails-spacing)) - 4 * var(--thumbnails-spacing))}.pdp-carousel__controls__container--thumbnailsColumn.pdp-carousel__controls__container--no-arrows{height:var(--height)}.pdp-carousel__controls__wrapper--thumbnailsColumn{max-height:100%;overflow-y:scroll}.pdp-carousel__controls__wrapper--thumbnailsRow{max-width:100%;overflow-x:scroll}.pdp-carousel__controls--thumbnailsRow>label>span:nth-last-child(1){margin-right:var(--thumbnails-box-width)}.pdp-carousel__controls__wrapper::-webkit-scrollbar{display:none}.pdp-carousel__controls__wrapper{-ms-overflow-style:none;scrollbar-width:none}.pdp-carousel__controls{display:flex;flex-direction:row;gap:var(--spacing-xsmall)}.pdp-carousel__controls--thumbnailsColumn{display:grid;grid-template-columns:repeat(1,1fr);grid-auto-rows:1fr;grid-row-gap:var(--thumbnails-spacing);padding:var(--thumbnails-box-width)}.pdp-carousel__controls--thumbnailsRow{grid-column-gap:var(--thumbnails-spacing);padding:var(--thumbnails-box-width)}.pdp-carousel__controls__button{border-radius:50%;width:10px;height:10px;padding:0;border:none;background:var(--color-neutral-400);cursor:pointer}.pdp-carousel__controls__button:hover{background:var(--color-neutral-500)}.pdp-carousel__controls__button:active,.pdp-carousel__controls__button--active{background:var(--color-neutral-600)}.pdp-carousel__slide--last{width:100%}.pdp-carousel__thumbnail__container input[type=radio]{opacity:0;position:absolute;width:0;height:0}.pdp-carousel__thumbnail__container .pdp-carousel__thumbnail__span{display:inline-block;--bg-color: var(--color-neutral-300);box-shadow:0 0 0 var(--shape-border-width-1) var(--color-neutral-400);position:relative;cursor:pointer;background-color:var(--bg-color);background-image:var(--background-image);background-repeat:no-repeat;background-size:cover;height:100%;width:100%;overflow:hidden}.pdp-carousel__thumbnail__content{width:inherit;position:absolute;top:-9999px;bottom:-9999px;left:-9999px;right:-9999px;margin:auto;overflow:hidden}.pdp-carousel__thumbnail__span:hover{box-shadow:0 0 0 var(--shape-border-width-3) var(--color-neutral-50),0 0 0 var(--shape-border-width-4) var(--color-neutral-500);outline:none}.pdp-carousel__controls__wrapper--thumbnailsRow .pdp-carousel__thumbnail__container{min-width:100px}.pdp-carousel__thumbnail__container input[type=radio]:not(:checked):active~.pdp-carousel-thumbnail__span{box-shadow:0 0 0 var(--shape-border-width-1) var(--color-neutral-500);outline:none}.pdp-carousel__thumbnail__container input[type=radio]:checked~.pdp-carousel__thumbnail__span,.pdp-carousel__thumbnail--selected{box-shadow:0 0 0 var(--shape-border-width-3) var(--color-neutral-50),0 0 0 var(--shape-border-width-4) var(--color-neutral-800)}.pdp-carousel__thumbnail__container input[type=radio]:checked:active~.pdp-carousel__thumbnail__span{box-shadow:0 0 0 var(--shape-border-width-3) var(--color-neutral-50),0 0 0 var(--shape-border-width-4) var(--color-neutral-600)}.pdp-carousel__thumbnail__container input[type=radio]:focus-visible+.pdp-carousel__thumbnail__span{box-shadow:0 0 0 var(--shape-border-width-3) var(--color-neutral-900),0 0 0 6px var(--color-neutral-400)}.pdp-carousel__thumbnail__span>img{object-fit:cover;width:100%;height:100%}.pdp-product{display:grid;grid-template-columns:repeat(var(--grid-1-columns),1fr);grid-column-gap:var(--grid-1-gutters);margin:0 var(--grid-1-margins)}.pdp-product__gallery-column{display:none}.pdp-product__content-column{grid-column:1 / span 4;color:var(--color-neutral-800)}.pdp-product__header{display:grid;grid-auto-rows:max-content;margin-bottom:var(--spacing-medium)}.pdp-product__breadcrumbs{grid-column:1 / -1;padding:var(--spacing-medium) 0 var(--spacing-xxbig)}.pdp-product__title{font:var(--type-display-3-font);letter-spacing:var(--type-display-3-letter-spacing);margin:0}.pdp-product__sku{font:var(--type-body-1-default-font);max-width:600px}.pdp-product__prices{display:flex;gap:var(--spacing-xsmall);margin-top:var(--spacing-medium)}.pdp-product__out-of-stock__text{font:var(--type-headline-2-strong-font)}.pdp-product__options{grid-column:1 / span 4}.pdp-product__price,.pdp-product__price-special{font:var(--type-headline-2-strong-font)}.pdp-product__price,.pdp-product__sku,.pdp-product__price-special,.pdp-product__out-of-stock__text{letter-spacing:var(--type-headline-2-strong-letter-spacing)}.pdp-product__price--grey{color:var(--color-neutral-500)}.pdp-product__actions,.pdp-product__actions--out-of-stock{display:grid;grid-auto-flow:row;gap:var(--grid-1-gutters);grid-auto-rows:max-content;margin-bottom:var(--spacing-xxbig);margin-top:var(--spacing-big)}.pdp-product__short_description,.pdp-product__attributes{font:var(--type-body-1-strong-font);letter-spacing:var(--type-body-1-strong-letter-spacing);margin-bottom:var(--spacing-small)}.pdp-product__description,.pdp-product__attributes li{font:var(--type-body-1-default-font);letter-spacing:var(--type-body-1-default-letter-spacing)}.pdp-product__attributes{margin-top:var(--spacing-xsmall)}.pdp-product__short_description p,.pdp-product__description p,.pdp-product__attributes li p{margin:0}.pdp-product__short_description figure,.pdp-product__description figure{margin:0}.pdp-product__short_description img,.pdp-product__description img{max-width:100%}.pdp-product__images--carousel{max-height:60vh}.pdp-product__images--carousel--thumbnails{max-height:90vh}.pdp-product__images__placeholder{background-color:var(--color-neutral-200)}.pdp-product__buttons{display:grid;grid-auto-rows:max-content;grid-gap:var(--grid-1-gutters)}.pdp-product__buttons a{text-align:center}.pdp-product__buttons a:hover{text-decoration:none}.pdp-product__overlay .pdp-overlay__content{width:100%;height:100%}.pdp-product__overlay__carousel{width:100%;height:100%;box-sizing:border-box}.pdp-product__overlay__carousel img{width:100%;height:100%;object-fit:contain}.pdp-carousel__controls__container--thumbnailsRow img,.pdp-carousel__controls__container--thumbnailsColumn img{object-fit:cover}.pdp-product__quantity,.pdp-product__buttons{grid-column:1 / span 4}@media only screen and (min-width: 1024px){.pdp-product__breadcrumbs{grid-column:2 / -2}.pdp-product{grid-template-columns:repeat(var(--grid-3-columns),1fr);grid-column-gap:var(--grid-3-gutters);margin:0 var(--grid-3-margins);position:relative}.pdp-product__column-container{position:relative;display:flex;flex-direction:column}.pdp-product__column-body{position:sticky;bottom:30%;align-self:flex-end}.pdp-product__gallery-column{display:block;grid-column:2 / span 6}.pdp-product__content-column{grid-column:8 / span 4;padding-top:var(--spacing-medium)}.pdp-product__images--carousel{display:none}.pdp-product__header{margin-bottom:var(--spacing-small)}.pdp-product__actions{grid-template-columns:repeat(var(--grid-1-columns),1fr);grid-column-gap:var(--grid-1-gutters);grid-row-gap:var(--spacing-xxbig);margin-top:var(--spacing-xxbig)}.pdp-product__quantity{grid-column:1 / span 2}.pdp-product__actions--out-of-stock{grid-template-columns:repeat(var(--grid-1-columns),1fr);grid-column-gap:var(--grid-1-gutters);grid-row-gap:var(--spacing-xxbig);margin-top:var(--spacing-small)}.pdp-product__buttons{grid-column:1 / span 4}.pdp-product__out-of-stock__text{grid-column:1 / span 2}.pdp-product__gallery-content,.pdp-product__content{grid-column:2 / span 6}}.pdp-gallery-grid{display:grid;grid-gap:var(--gap);grid-template-columns:repeat(1,1fr);grid-auto-rows:max-content}.pdp-gallery-grid__item>*{height:100%;max-width:100%;min-width:100%;vertical-align:middle;width:100%;object-fit:contain}.pdp-gallery-grid__item:only-child{grid-column:1 / span 2}.pdp-gallery-grid__item:first-child:nth-last-child(2){grid-column:1 / span 2;grid-row:1}.pdp-gallery-grid__item:nth-child(2):last-child{grid-column:1 / 3;grid-row:2}@media only screen and (min-width: 1024px){.pdp-gallery-grid{grid-template-columns:repeat(2,1fr)}}.pdp-price-range .dropin-price{letter-spacing:var(--type-headline-2-strong-letter-spacing);font:var(--type-headline-2-strong-font)}.pdp-price-range__label{font:var(--type-headline-2-strong-font);letter-spacing:var(--type-body-1-strong-letter-spacing);margin-left:5px;margin-right:5px}.pdp-overlay{position:fixed;top:0;left:0;z-index:1000;right:0;bottom:0;background-color:var(--color-neutral-50);display:flex;padding:var(--spacing-medium)}.pdp-overlay--centered{align-items:center;justify-content:center}.pdp-overlay__close-button{position:absolute;top:var(--spacing-medium);right:var(--spacing-medium);z-index:1001}.pdp-swatches{display:grid;grid-auto-flow:row;grid-gap:var(--grid-1-gutters);grid-auto-rows:max-content}.pdp-swatches__field{display:grid;font:var(--type-body-2-strong-font);grid-auto-rows:max-content;gap:var(--spacing-xsmall)}.pdp-swatches__field__label{font:var(--type-details-caption-1-font);letter-spacing:var(--type-details-caption-1-letter-spacing);color:var(--color-neutral-800)}.pdp-swatches__options{display:flex;flex-wrap:wrap;gap:var(--spacing-xsmall)}",{styleId:"PDP"});
var Oe=Object.defineProperty;var we=(e,t,r)=>t in e?Oe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var ne=(e,t,r)=>(we(e,typeof t!="symbol"?t+"":t,r),r);import{useState as je,useEffect as xe}from"@dropins/tools/preact-hooks.js";import{UIProvider as Ae}from"@dropins/tools/components.js";import{events as Se}from"@dropins/tools/event-bus.js";import{jsx as N}from"@dropins/tools/preact-jsx-runtime.js";import{c as Me}from"./chunks/initialize.js";import{options as b,h as _e,Fragment as W,render as oe}from"@dropins/tools/preact.js";import{V as ie}from"./chunks/vcomponent.js";function Ce(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Pe=function(t){return De(t)&&!Ee(t)};function De(e){return!!e&&typeof e=="object"}function Ee(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||Ne(e)}var Fe=typeof Symbol=="function"&&Symbol.for,Le=Fe?Symbol.for("react.element"):60103;function Ne(e){return e.$$typeof===Le}function Te(e){return Array.isArray(e)?[]:{}}function k(e,t){return t.clone!==!1&&t.isMergeableObject(e)?T(Te(e),e,t):e}function $e(e,t,r){return e.concat(t).map(function(o){return k(o,r)})}function Ue(e,t){if(!t.customMerge)return T;var r=t.customMerge(e);return typeof r=="function"?r:T}function qe(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return Object.propertyIsEnumerable.call(e,t)}):[]}function le(e){return Object.keys(e).concat(qe(e))}function be(e,t){try{return t in e}catch{return!1}}function ke(e,t){return be(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))}function Ve(e,t,r){var o={};return r.isMergeableObject(e)&&le(e).forEach(function(i){o[i]=k(e[i],r)}),le(t).forEach(function(i){ke(e,i)||(be(e,i)&&r.isMergeableObject(t[i])?o[i]=Ue(i,r)(e[i],t[i],r):o[i]=k(t[i],r))}),o}function T(e,t,r){r=r||{},r.arrayMerge=r.arrayMerge||$e,r.isMergeableObject=r.isMergeableObject||Pe,r.cloneUnlessOtherwiseSpecified=k;var o=Array.isArray(t),i=Array.isArray(e),p=o===i;return p?o?r.arrayMerge(e,t,r):Ve(e,t,r):k(t,r)}T.all=function(t,r){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(o,i){return T(o,i,r)},{})};var ze=T,We=ze;const Ze=Ce(We);var Be=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i,ge=/^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/,Z=/[\s\n\\/='"\0<>]/,ve=/^xlink:?./,Ge=/["&<]/;function q(e){if(Ge.test(e+="")===!1)return e;for(var t=0,r=0,o="",i="";r<e.length;r++){switch(e.charCodeAt(r)){case 34:i="&quot;";break;case 38:i="&amp;";break;case 60:i="&lt;";break;default:continue}r!==t&&(o+=e.slice(t,r)),o+=i,t=r+1}return r!==t&&(o+=e.slice(t,r)),o}var ae=function(e,t){return String(e).replace(/(\n+)/g,"$1"+(t||"	"))},se=function(e,t,r){return String(e).length>40||String(e).indexOf(`
`)!==-1||String(e).indexOf("<")!==-1},fe={},Ke=/([A-Z])/g;function ye(e){var t="";for(var r in e){var o=e[r];o!=null&&o!==""&&(t&&(t+=" "),t+=r[0]=="-"?r:fe[r]||(fe[r]=r.replace(Ke,"-$1").toLowerCase()),t=typeof o=="number"&&Be.test(r)===!1?t+": "+o+"px;":t+": "+o+";")}return t||void 0}function ee(e,t){return Array.isArray(t)?t.reduce(ee,e):t!=null&&t!==!1&&e.push(t),e}function ce(){this.__d=!0}function me(e,t){return{__v:e,context:t,props:e.props,setState:ce,forceUpdate:ce,__d:!0,__h:[]}}function B(e,t){var r=e.contextType,o=r&&t[r.__c];return r!=null?o?o.props.value:r.__:t}var I=[];function $(e,t,r,o,i,p){if(e==null||typeof e=="boolean")return"";if(typeof e!="object")return typeof e=="function"?"":q(e);var _=r.pretty,u=_&&typeof _=="string"?_:"	";if(Array.isArray(e)){for(var h="",m=0;m<e.length;m++)_&&m>0&&(h+=`
`),h+=$(e[m],t,r,o,i,p);return h}if(e.constructor!==void 0)return"";var M,c=e.type,d=e.props,D=!1;if(typeof c=="function"){if(D=!0,!r.shallow||!o&&r.renderRootComponent!==!1){if(c===W){var y=[];return ee(y,e.props.children),$(y,t,r,r.shallowHighOrder!==!1,i,p)}var g,n=e.__c=me(e,t);b.__b&&b.__b(e);var E=b.__r;if(c.prototype&&typeof c.prototype.render=="function"){var A=B(c,t);(n=e.__c=new c(d,A)).__v=e,n._dirty=n.__d=!0,n.props=d,n.state==null&&(n.state={}),n._nextState==null&&n.__s==null&&(n._nextState=n.__s=n.state),n.context=A,c.getDerivedStateFromProps?n.state=Object.assign({},n.state,c.getDerivedStateFromProps(n.props,n.state)):n.componentWillMount&&(n.componentWillMount(),n.state=n._nextState!==n.state?n._nextState:n.__s!==n.state?n.__s:n.state),E&&E(e),g=n.render(n.props,n.state,n.context)}else for(var C=B(c,t),F=0;n.__d&&F++<25;)n.__d=!1,E&&E(e),g=c.call(e.__c,d,C);return n.getChildContext&&(t=Object.assign({},t,n.getChildContext())),b.diffed&&b.diffed(e),$(g,t,r,r.shallowHighOrder!==!1,i,p)}c=(M=c).displayName||M!==Function&&M.name||function(J){var Q=(Function.prototype.toString.call(J).match(/^\s*function\s+([^( ]+)/)||"")[1];if(!Q){for(var z=-1,R=I.length;R--;)if(I[R]===J){z=R;break}z<0&&(z=I.push(J)-1),Q="UnnamedComponent"+z}return Q}(M)}var w,O,f="<"+c;if(d){var v=Object.keys(d);r&&r.sortAttributes===!0&&v.sort();for(var S=0;S<v.length;S++){var l=v[S],s=d[l];if(l!=="children"){if(!Z.test(l)&&(r&&r.allAttributes||l!=="key"&&l!=="ref"&&l!=="__self"&&l!=="__source")){if(l==="defaultValue")l="value";else if(l==="defaultChecked")l="checked";else if(l==="defaultSelected")l="selected";else if(l==="className"){if(d.class!==void 0)continue;l="class"}else i&&ve.test(l)&&(l=l.toLowerCase().replace(/^xlink:?/,"xlink:"));if(l==="htmlFor"){if(d.for)continue;l="for"}l==="style"&&s&&typeof s=="object"&&(s=ye(s)),l[0]==="a"&&l[1]==="r"&&typeof s=="boolean"&&(s=String(s));var a=r.attributeHook&&r.attributeHook(l,s,t,r,D);if(a||a==="")f+=a;else if(l==="dangerouslySetInnerHTML")O=s&&s.__html;else if(c==="textarea"&&l==="value")w=s;else if((s||s===0||s==="")&&typeof s!="function"){if(!(s!==!0&&s!==""||(s=l,r&&r.xml))){f=f+" "+l;continue}if(l==="value"){if(c==="select"){p=s;continue}c==="option"&&p==s&&d.selected===void 0&&(f+=" selected")}f=f+" "+l+'="'+q(s)+'"'}}}else w=s}}if(_){var j=f.replace(/\n\s*/," ");j===f||~j.indexOf(`
`)?_&&~f.indexOf(`
`)&&(f+=`
`):f=j}if(f+=">",Z.test(c))throw new Error(c+" is not a valid HTML tag name in "+f);var L,he=ge.test(c)||r.voidElements&&r.voidElements.test(c),x=[];if(O)_&&se(O)&&(O=`
`+u+ae(O,u)),f+=O;else if(w!=null&&ee(L=[],w).length){for(var G=_&&~f.indexOf(`
`),te=!1,K=0;K<L.length;K++){var X=L[K];if(X!=null&&X!==!1){var P=$(X,t,r,!0,c==="svg"||c!=="foreignObject"&&i,p);if(_&&!G&&se(P)&&(G=!0),P)if(_){var re=P.length>0&&P[0]!="<";te&&re?x[x.length-1]+=P:x.push(P),te=re}else x.push(P)}}if(_&&G)for(var Y=x.length;Y--;)x[Y]=`
`+u+ae(x[Y],u)}if(x.length||O)f+=x.join("");else if(r&&r.xml)return f.substring(0,f.length-1)+" />";return!he||L||O?(_&&~f.indexOf(`
`)&&(f+=`
`),f=f+"</"+c+">"):f=f.replace(/>$/," />"),f}var Xe={shallow:!0};V.render=V;var Ye=function(e,t){return V(e,t,Xe)},ue=[];function V(e,t,r){t=t||{};var o=b.__s;b.__s=!0;var i,p=_e(W,null);return p.__k=[e],i=r&&(r.pretty||r.voidElements||r.sortAttributes||r.shallow||r.allAttributes||r.xml||r.attributeHook)?$(e,t,r):U(e,t,!1,void 0,p),b.__c&&b.__c(e,ue),b.__s=o,ue.length=0,i}function H(e){return e==null||typeof e=="boolean"?null:typeof e=="string"||typeof e=="number"||typeof e=="bigint"?_e(null,null,e):e}function Je(e,t){return e==="className"?"class":e==="htmlFor"?"for":e==="defaultValue"?"value":e==="defaultChecked"?"checked":e==="defaultSelected"?"selected":t&&ve.test(e)?e.toLowerCase().replace(/^xlink:?/,"xlink:"):e}function Qe(e,t){return e==="style"&&t!=null&&typeof t=="object"?ye(t):e[0]==="a"&&e[1]==="r"&&typeof t=="boolean"?String(t):t}var de=Array.isArray,pe=Object.assign;function U(e,t,r,o,i){if(e==null||e===!0||e===!1||e==="")return"";if(typeof e!="object")return typeof e=="function"?"":q(e);if(de(e)){var p="";i.__k=e;for(var _=0;_<e.length;_++)p+=U(e[_],t,r,o,i),e[_]=H(e[_]);return p}if(e.constructor!==void 0)return"";e.__=i,b.__b&&b.__b(e);var u=e.type,h=e.props;if(typeof u=="function"){var m;if(u===W)m=h.children;else{m=u.prototype&&typeof u.prototype.render=="function"?function(v,S){var l=v.type,s=B(l,S),a=new l(v.props,s);v.__c=a,a.__v=v,a.__d=!0,a.props=v.props,a.state==null&&(a.state={}),a.__s==null&&(a.__s=a.state),a.context=s,l.getDerivedStateFromProps?a.state=pe({},a.state,l.getDerivedStateFromProps(a.props,a.state)):a.componentWillMount&&(a.componentWillMount(),a.state=a.__s!==a.state?a.__s:a.state);var j=b.__r;return j&&j(v),a.render(a.props,a.state,a.context)}(e,t):function(v,S){var l,s=me(v,S),a=B(v.type,S);v.__c=s;for(var j=b.__r,L=0;s.__d&&L++<25;)s.__d=!1,j&&j(v),l=v.type.call(s,v.props,a);return l}(e,t);var M=e.__c;M.getChildContext&&(t=pe({},t,M.getChildContext()))}var c=U(m=m!=null&&m.type===W&&m.key==null?m.props.children:m,t,r,o,e);return b.diffed&&b.diffed(e),e.__=void 0,b.unmount&&b.unmount(e),c}var d,D,y="<";if(y+=u,h)for(var g in d=h.children,h){var n=h[g];if(!(g==="key"||g==="ref"||g==="__self"||g==="__source"||g==="children"||g==="className"&&"class"in h||g==="htmlFor"&&"for"in h||Z.test(g))){if(n=Qe(g=Je(g,r),n),g==="dangerouslySetInnerHTML")D=n&&n.__html;else if(u==="textarea"&&g==="value")d=n;else if((n||n===0||n==="")&&typeof n!="function"){if(n===!0||n===""){n=g,y=y+" "+g;continue}if(g==="value"){if(u==="select"){o=n;continue}u!=="option"||o!=n||"selected"in h||(y+=" selected")}y=y+" "+g+'="'+q(n)+'"'}}}var E=y;if(y+=">",Z.test(u))throw new Error(u+" is not a valid HTML tag name in "+y);var A="",C=!1;if(D)A+=D,C=!0;else if(typeof d=="string")A+=q(d),C=!0;else if(de(d)){e.__k=d;for(var F=0;F<d.length;F++){var w=d[F];if(d[F]=H(w),w!=null&&w!==!1){var O=U(w,t,u==="svg"||u!=="foreignObject"&&r,o,e);O&&(A+=O,C=!0)}}}else if(d!=null&&d!==!1&&d!==!0){e.__k=[H(d)];var f=U(d,t,u==="svg"||u!=="foreignObject"&&r,o,e);f&&(A+=f,C=!0)}if(b.diffed&&b.diffed(e),e.__=void 0,b.unmount&&b.unmount(e),C)y+=A;else if(ge.test(u))return E+" />";return y+"</"+u+">"}V.shallowRender=Ye;class Re{constructor(t){ne(this,"_provider");this._provider=t}render(t,r){return async o=>{var p;if(!t)throw new Error("Component is not defined");if(!o)throw new Error("Root element is not defined");const i=await((p=t.getInitialData)==null?void 0:p.call(t,r))??{};oe(N(ie,{node:this._provider,...this._provider.props,children:N(t,{...r,initialData:i})}),o)}}unmount(t){if(!t)throw new Error("Root element is not defined");oe(null,t)}async toString(t,r,o){var p;if(!t)throw new Error("Component is not defined");const i=await((p=t.getInitialData)==null?void 0:p.call(t,r))??{};return V(N(ie,{node:this._provider,...this._provider.props,children:N(t,{...r,initialData:i})}),{},{...o})}}const Ie={Product:{Incrementer:{label:"Item Quantity"},OutOfStock:{label:"Out of Stock"},AddToCart:{label:"Add to Cart"},Details:{label:"Details"},RegularPrice:{label:"Regular Price"},SpecialPrice:{label:"Special Price"},PriceRange:{From:{label:"From"},To:{label:"to"}},Image:{label:"{product} Image {key} of {total}"}},Swatches:{Required:{label:"Required"}},Carousel:{label:"Carousel",Next:{label:"Next"},Previous:{label:"Previous"},Slide:{label:"Slide"},Controls:{label:"Carousel Controls",Button:{label:"Show slide {key} of {total}"}}},Overlay:{Close:{label:"Close"}}},He={quantityLabel:"Passengers"},et={PDP:Ie,Custom:He},tt={default:et},rt=({children:e})=>{var p;const[t,r]=je(),o=(p=Me.getConfig())==null?void 0:p.langDefinitions;xe(()=>{const _=Se.on("locale",u=>{u!==t&&r(u)},{eager:!0});return()=>{_==null||_.off()}},[t]);const i=Ze(tt,o??{});return N(Ae,{lang:t,langDefinitions:i,children:e})},ut=new Re(N(rt,{}));export{ut as render};
//# sourceMappingURL=render.js.map
