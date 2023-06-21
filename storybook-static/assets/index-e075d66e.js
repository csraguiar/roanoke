import{r as i}from"./index-c013ead5.js";var u={exports:{}},a={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=i,m=Symbol.for("react.element"),b=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,_=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x={key:!0,ref:!0,__self:!0,__source:!0};function d(t,e,o){var r,n={},s=null,l=null;o!==void 0&&(s=""+o),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(l=e.ref);for(r in e)c.call(e,r)&&!x.hasOwnProperty(r)&&(n[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)n[r]===void 0&&(n[r]=e[r]);return{$$typeof:m,type:t,key:s,ref:l,props:n,_owner:_.current}}a.Fragment=b;a.jsx=d;a.jsxs=d;u.exports=a;var y=u.exports;const p=({primary:t,buttonText:e})=>{let o="mt-auto hover:shadow-md active:shadow-inner transition-shadow px-8 py-4 w-full bg-neutral-0 border border-neutral-100 bg-amber-50 hover:bg-white box-border border-black rounded-full font-bold text-xl";return t||(o+=" bg-transparent border-zinc-200"),y.jsx("button",{"data-primary":t,className:o,type:"button",children:e})};p.defaultProps={buttonText:"Action",primary:!0};p.__docgenInfo={description:"",methods:[],displayName:"Button",props:{buttonText:{defaultValue:{value:"'Action'",computed:!1},required:!1},primary:{defaultValue:{value:"true",computed:!1},required:!1}}};export{p as B,y as j};
//# sourceMappingURL=index-e075d66e.js.map
