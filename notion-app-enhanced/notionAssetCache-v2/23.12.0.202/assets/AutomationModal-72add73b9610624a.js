"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[5645],{78737:(e,t,o)=>{o.r(t),o.d(t,{AutomationModal:()=>C});var n=o(23174),i=o.n(n),a=o(67294),r=o(480),c=o(86628),l=o(24405),s=o(63362),d=o(5366),u=o(82990),m=o(17809),f=o(63474),p=o(80444),g=o(58454),y=o(57559),b=o(42922),v=o(1743),x=o(50506),S=o(89728),w=o(31278),k=o(65187);const h=(0,d.defineMessages)({confirmationDialogAriaLabel:{defaultMessage:"Confirmation",id:"automations.ConfirmationDialog.ariaLabel"}});function C(){window.__c={n:"AutomationModal"};const e=(0,c.VK)((()=>g.Z.state),[]),t=(0,r.Fy)(),o=(0,c.VK)((()=>t.isPhone),[t]),n=(0,l.yK)((e=>({innerStyle:{padding:24,width:o?"calc(100% - 20px)":320}})),[o]),d=(0,f.D)(),u=(0,c.VK)((()=>{var e;return null===(e=p.default.state.currentSpaceViewStore)||void 0===e?void 0:e.getSpaceId()}),[]),m=(0,a.useCallback)((e=>{g.Z.setState({open:!1,result:e});const t=g.Z.state;(0,s.W5)(d,{automation_id:t.open&&t.recordStore instanceof y.Mz?t.recordStore.id:void 0,option:e})}),[d]),b=(0,a.useCallback)((()=>m("cancel")),[m]),v=function(){const e=(0,c.VK)((()=>g.Z.state),[]),[t,o]=(0,a.useReducer)(((e,t)=>e+1),1),n=(0,a.useRef)(void 0);return(0,a.useEffect)((()=>{e.open&&e.format!==n.current&&(o(void 0),n.current=e.format)}),[e,n]),t}();return i()(x.Z,{open:e.open,keepFocus:!0,innerStyle:n.innerStyle,disableAnimation:!0,onDismiss:b,render:()=>e.open&&u&&i()(Z,{id:`${v}`,modalState:e,onDismiss:m},`${v}`)})}function Z(e){window.__c={n:"OpenAutomationModal"};const{id:t,modalState:o,onDismiss:n}=e,{icon:r}=o.format,c=(0,d.useIntl)(),s=(0,a.useRef)(null);(0,a.useEffect)((()=>{null!==s.current&&s.current.focus()}),[]);const f=(0,l.yK)((e=>({wrap:{display:"flex",flexDirection:"column"},buttonWrap:{display:"flex",flexDirection:"column",gap:10,marginTop:10},textWrap:{whiteSpace:"pre-wrap",wordBreak:"break-word",textAlign:"center",fontWeight:u.Z.fontWeight.medium,marginTop:10,marginBottom:10,display:"flex",flexDirection:"column",alignItems:"center"},icon:{marginBottom:10},cancelButton:{justifyContent:"center"}})),[]),{store:p}=(0,m.useMockTextStore)({initialValue:o.format.text,onChange:()=>{}}),g=[a.createElement(b.Z,{key:"continue",isLarge:!0,onClick:()=>n("continue"),ref:s},o.format.continueButtonText),i()(S.Z,{isLarge:!0,onClick:()=>n("cancel"),isLightGray:!0,style:f.cancelButton},"cancel",o.format.cancelButtonText)],y=`automation-modal-dialog-${t}`;return i()(v.Z,{capture:!0,allowEsc:!0},void 0,i()("div",{"aria-modal":"true","aria-label":c.formatMessage(h.confirmationDialogAriaLabel),"aria-describedby":y,role:"dialog",style:f.wrap},void 0,i()("div",{style:f.textWrap},void 0,r&&i()("div",{style:f.icon},void 0,i()(w.Z,{size:50,icon:{icon:r,pointer:o.recordStore.pointer},disabled:!0,isEmptyPage:!1,bucket:"public",onChange:()=>{}})),i()("div",{id:y},void 0,i()(k.Z,{disabled:!0,store:p,parentStore:o.recordStore}))),i()("div",{style:f.buttonWrap},void 0,g)))}}}]);