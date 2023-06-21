import{j as e,B as h}from"./index-e075d66e.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";const r=({heading:c,description:p,buttonText:m,footnote:f,featured:g})=>{let o="card flex flex-col justify-items-center rounded-3xl md:h-96 bg-card-ornament space-y-2.5 p-8 text-neutral-100 rounded text-center mb-8 hover:scale-105 ease-in-out transition-transform";return g?o+=" bg-gold":o+=" bg-roa",e.jsxs("div",{className:o,children:[e.jsx("h1",{className:"font-bold mt-14 text-lg",children:c}),e.jsx("p",{className:"md:flex-grow",children:p}),e.jsx(h,{buttonText:m}),e.jsx("p",{className:"text-ellipsis overflow-hidden whitespace-nowrap",children:e.jsx("small",{className:"text-black",children:e.jsx("em",{className:"italic",children:f})})})]})};r.defaultProps={heading:"Card heading",description:"A small paragraph usually taking up to two lines.",buttonText:"Action",footnote:"A footnote might come handy.",featured:!1};const x=r;r.__docgenInfo={description:"",methods:[],displayName:"Card",props:{heading:{defaultValue:{value:"'Card heading'",computed:!1},required:!1},description:{defaultValue:{value:"'A small paragraph usually taking up to two lines.'",computed:!1},required:!1},buttonText:{defaultValue:{value:"'Action'",computed:!1},required:!1},footnote:{defaultValue:{value:"'A footnote might come handy.'",computed:!1},required:!1},featured:{defaultValue:{value:"false",computed:!1},required:!1}}};const C={title:"Components/Card",component:x,tags:["autodocs"],argTypes:{heading:{control:"text"},description:{control:"text"},buttonText:{control:"text"},footnote:{control:"text"},featured:{control:"boolean"}}},t={args:{heading:"Card heading",description:"A small paragraph usually taking up to two lines.",buttonText:"Action",footnote:"A footnote might come handy.",featured:!1}},a={args:{...t.args,featured:!0}};var s,n,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    heading: 'Card heading',
    description: 'A small paragraph usually taking up to two lines.',
    buttonText: 'Action',
    footnote: 'A footnote might come handy.',
    featured: false
  }
}`,...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var d,i,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...Bronze.args,
    featured: true
  }
}`,...(u=(i=a.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};const j=["Bronze","Featured"];export{t as Bronze,a as Featured,j as __namedExportsOrder,C as default};
//# sourceMappingURL=Card.stories-0a91bf0a.js.map
