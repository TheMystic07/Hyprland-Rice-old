"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[6991],{85830:(t,e,n)=>{n.r(e),n.d(e,{TldrawAdapter:()=>tt});var o=n(10434),r=n.n(o),s=n(23174),i=n.n(s),a=(n(21703),n(57658),n(52262),n(19874)),l=n(78751),d=n(1991),c=n(65097),u=n(67294),h=n(480),p=n(24405),g=n(92595),m=n(97880);const f={serialize:t=>JSON.stringify(t),deserialize:t=>JSON.parse(t)};function*b(t){for(const[e,n]of(0,m.qP)(t.added))yield[e,[void 0,n]];for(const[e,n]of(0,m.qP)(t.updated))yield[e,n];for(const[e,n]of(0,m.qP)(t.removed))yield[e,[n,void 0]]}class v{constructor(){this.added={},this.removed=new Set}static fromSerializedSnapshot(t){const e=new v;return e.mergeSnapshot(t),e}add(t){this.added[t.id]=t,this.removed.delete(t.id)}remove(t){delete this.added[t],this.removed.add(t)}ignore(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];for(const o of e)delete this.added[o],this.removed.delete(o)}mergeSnapshot(t){for(const[e,n]of(0,m.qP)(t))n?this.add(f.deserialize(n)):this.remove(e)}hasChanges(){return this.removed.size>0||Object.keys(this.added).length>0}}class w{constructor(){this.pendingChanges=[]}getPendingIds(){if(0===this.pendingChanges.length)return new Set;this.pendingChanges.length>1&&(this.pendingChanges=[this.clear()]);const[t]=this.pendingChanges,e=new Set;for(const[n]of b(t))e.add(n);return e}add(t){this.pendingChanges.push(t)}clear(){const t=(0,c.bs)(this.pendingChanges);return this.pendingChanges=[],t}}var y=n(7406),S=n(72126),_=n(4615),C=n(63143),k=n(5366),x=n(47307),I=n(9953),z=n(39699),M=n(8848),P=n(82990);function A(){window.__c={n:"NotionTldrawTheme"};const t=(0,p.Fg)(),e=(0,u.useMemo)((()=>{const e="3px",n=M.ZP.blueWithAlpha(1),o="dark"===t.mode;return{"--color-text":t.regularTextColor,"--color-text-0":t.regularTextColor,"--color-text-1":t.regularTextColor,"--color-text-2":t.mediumTextColor,"--color-text-3":t.lightTextColor,"--color-accent":t.accentColors.red[800],"--color-focus":M.ZP.blueWithAlpha(.14),"--color-selection-stroke":n,"--color-selection-fill":M.ZP.blueWithAlpha(.025),"--color-brush-stroke":"transparent","--color-brush-fill":M.ZP.blueWithAlpha(.14),"--color-muted-2":t.buttonHoveredBackground,"--color-selected":n,"--color-selected-contrast":t.contentBackground,"--color-text-selection":M.ZP.blueWithAlpha(.28),"--color-primary":t.blueButtonBackground,"--color-warn":M.ZP.red,"--radius-0":e,"--radius-1":e,"--radius-2":e,"--radius-3":e,"--radius-4":e,"--color-low":t.popoverBackground,"--opacity-low":.93,"--radius-5":"6px","--color-panel":t.popoverBackground,"--color-panel-contrast":"transparent","--color-divider":t.regularDividerColor,"--shadow-2":t.mediumBoxShadow,"--color-background":t.contentBackground,"--palette-black":t.accentColors.gray[900],"--palette-blue":o?t.accentColors.blue[800]:t.accentColors.blue[500],"--palette-green":o?t.accentColors.green[800]:t.accentColors.green[500],"--palette-grey":o?t.accentColors.gray[700]:t.accentColors.gray[300],"--palette-light-blue":o?t.accentColors.blue[500]:t.accentColors.blue[200],"--palette-light-green":o?t.accentColors.green[500]:t.accentColors.green[300],"--palette-red":o?t.accentColors.red[800]:t.accentColors.red[500],"--palette-light-red":o?t.accentColors.red[500]:t.accentColors.red[300],"--palette-violet":o?t.accentColors.purple[800]:t.accentColors.purple[500],"--palette-light-violet":o?t.accentColors.purple[500]:t.accentColors.purple[300],"--palette-orange":o?t.accentColors.orange[700]:t.accentColors.orange[500],"--palette-yellow":o?t.accentColors.yellow[800]:t.accentColors.yellow[500],"--palette-white":t.contentBackground}}),[t]),n=(0,u.useMemo)((()=>{let t=".rs-container {";for(const[n,o]of Object.entries(e))void 0!==o&&(t+=`\n  ${n}: ${o};`);return t+="\n}",t+=`\n\t\t.tlui-button {\n\t\t\ttext-shadow: none;\n\t\t}\n\n\t\t.tlui-slider__range {\n\t\t\tbackground: var(--color-selection-stroke);\n\t\t}\n\n\t\t/* Try to make menu items look like Notion menu items */\n\t\t.tlui-menu__button {\n\t\t\theight: 28px;\n\t\t\tline-height: 150%;\n\t\t\tfont-size: ${P.Z.fontSize.UIRegular.desktop}px;\n\t\t\tpadding: 0 12px;\n\t\t}\n\n\t\t.tlui-menu__checkbox-item {\n\t\t\tpadding-left: 28px;\n\t\t}\n\n\t\t.tlui-menu__checkbox-item__check .tlui-icon__small {\n\t\t\twidth: 18px;\n\t\t\theight: 18px;\n\t\t}\n\n\t\t.tlui-menu__button::after {\n\t\t\twidth: calc(100% - 8px);\n\t\t\theight: 100%;\n\t\t\tleft: 4px;\n\t\t\tright: 4px;\n\t\t\tbottom: 0;\n\t\t\ttop: 0;\n\t\t}\n\n\t\t.tlui-menu__button:nth-child(n + 2) {\n\t\t\tmargin-top: 0;\n\t\t}\n\n\t\t.tlui-menu__button:nth-last-child(n + 2) {\n\t\t\tmargin-bottom: 0;\n\t\t}\n\n\t\t.tlui-menu__group {\n\t\t\tpadding: 4px 0;\n\t\t}\n\n\t\t.tlui-menu__group[data-size='medium'] {\n\t\t\tmin-width: 200px;\n\t\t}\n\n\t\t/* Styling for how keyboard shortcuts are rendered next to menu items */\n\t\t.tlui-kbd {\n\t\t\tfont-size: ${P.Z.fontSize.UISmall.desktop}px;\n\t\t\tcolor: var(--color-text-3);\n\t\t\tdisplay: flex;\n\t\t\tgap: 0;\n\t\t}\n\n\t\t.tlui-kbd > span {\n\t\t\tpadding: 0;\n\t\t\tmargin: 0;\n\t\t}\n\n\t\t.tlui-kbd span + span::before {\n\t\t\tcontent: '+';\n\t\t}\n\n\t\t.rs-error-boundary__content .rs-error-boundary__refresh {\n\t\t\tcolor: var(--color-background);\n\t\t}\n\n\t\t/* Styling for the Tools panel */\n\t\t.tlui-toolbar__tools {\n\t\t\tborder-radius: 999px;\n\t\t\tpadding: 0 8px;\n\t\t}\n\n\t\t.tlui-button {\n\t\t\t--color-selected: transparent;\n\t\t\t--color-selected-contrast: var(--color-selection-stroke);\n\t\t}\n\n\t\t.tlui-button:not(:disabled):hover::after {\n\t\t\tbackground: var(--color-muted-2);\n\t\t}\n\n\t\t/* Styling for "low" toolbars like the top bar and zoom */\n\t\t.tlui-menu-zone::before,\n\t\t.tlui-navigation-zone,\n\t\t.tlui-navigation-zone::before,\n\t\t.tlui-debug-panel {\n\t\t\tborder: none;\n\t\t\tborder-radius: var(--radius-5);\n\t\t\topacity: var(--opacity-low);\n\t\t}\n\n\t\t.tlui-menu-zone::before,\n\t\t.tlui-navigation-zone::before,\n\t\t.tlui-debug-panel\n\t\t{\n\t\t\tinset: 0;\n\t\t\tbox-shadow: var(--shadow-1);\n\t\t}\n\n\t\t.tlui-help-menu__button {\n\t\t\tdisplay: none;\n\t\t}\n\t\t.tlui-help-menu__button::before  {\n\t\t\tbox-shadow: var(--shadow-1);\n\t\t\topacity: var(--opacity-low);\n\t\t}\n\n\t\t/* Styling for extra-small width controls */\n\t\t.tlui-toolbar__extras__controls {\n\t\t\tmargin-left: 20px;\n\t\t}\n\n\t\t.tlui-toolbar__extras__controls,\n\t\t.tlui-toolbar__extras__controls::before\n\t\t{\n\t\t\tborder: none;\n\t\t\tborder-radius: 12px;\n\t\t\tborder-bottom-left-radius: 0px;\n\t\t\tborder-bottom-right-radius: 0px;\n\t\t}\n\n\n\t\t.tlui-toolbar__extras__controls::before {\n\t\t\tinset: 0;\n\t\t\tbox-shadow: var(--shadow-1);\n\t\t}\n\n\t\t/* Make dialogs fit */\n\t\t.tlui-dialog__content {\n\t\t\tmax-height: 80%;\n\t\t}\n\n\t\t/* Hide the "Page" menu */\n\t\t.tlui-popover:has(.tlui-page-menu__trigger) {\n\t\t\tdisplay: none;\n\t\t}\n\n\t\t.tlui-popover:has(.tlui-page-menu__trigger) + .tlui-menu-zone__divider {\n\t\t\tdisplay: none;\n\t\t}\n\n\t\t/* Disable spurious text selection */\n\t\t.rs-container input, *[contenteditable] .rs-container, *[contenteditable] .rs-container * {\n\t\t\tuser-select: none;\n\t\t\t-webkit-user-select: none;\n\t\t}\n\n\t\t/* Style text selection inside text components */\n\t\t.rs-text-input::selection {\n\t\t\tbackground: var(--color-text-selection);\n\t\t\tcolor: currentColor;\n\t\t\ttext-shadow: none;\n\t\t}\n\t\t`,{__html:t}}),[e]);return i()("style",{dangerouslySetInnerHTML:n})}var E=n(47771),F=n(86628),V=n(44615),Z=n(19889),N=n(36054),O=n(74487),T=n(41641),R=n(2688),B=n(57559);const K=3*C.hM,$=1*C.C0,D=O.literal(0),H=O.record(O.string(),O.union([D,O.string()])),j=O.record(O.string(),O.union([D,H]));function q(t){const{blockStore:e,app:n}=t,o=(0,h.O7)(),r=(0,k.useIntl)(),s=e.userId,i=e.id,a=(0,V.e7)(i),l=null==n?void 0:n.instanceId,d=null==n?void 0:n.store,c=(0,F.VK)((()=>Boolean(n&&l&&s&&i&&(0,T.Z)(a)&&e.canEdit())),[n,i,e,a,l,s]);(0,u.useEffect)((()=>{if(!(c&&n&&l&&s&&d))return;const t=new w,i=R.Z.addListener(a,(function(n,o){!function(t){const{blockStore:e,tldrawStore:n,maybePresenceData:o,pendingChanges:r,intl:s}=t;let i;try{i=(0,N.XS)(j,o)}catch(d){return}const a=new v;for(const[c,u]of(0,m.qP)(i))c!==e.userId&&u&&a.mergeSnapshot(u);if(a.ignore(...r.getPendingIds()),!a.hasChanges())return;const l=Object.values(a.added);for(const c of l)if(E.Anc.isInstance(c)){const{userId:t}=c,n=t.split(":",2)[1];if(n&&(0,_.e)(n)){const o=B.t1.createChildStore(e,{table:Z.KJ,id:n}).getDisplayName(s);a.add(E.bKH.create({id:t,name:o}))}}n.mergeRemoteChanges((()=>{n.put(Object.values(a.added)),n.remove(Array.from(a.removed))}))}({blockStore:e,tldrawStore:d,maybePresenceData:o,pendingChanges:t,intl:r})}),l,o),u=S.P2((()=>{const n=t.clear();!function(t){const{environment:e,blockStore:n,diff:o}=t,{userId:r}=n;if(!r)return;const s=(0,V.e7)(n.id),i={};let a=!1;for(const[l,[,d]]of b(o))if(L(l)){a=!0;const t=d?f.serialize(d):0;i[l]=t}if(!a)return;R.Z.updateField(s,r,i,K,e)}({environment:o,blockStore:e,diff:n})}),$),h=d.listen((function(e){let{changes:n,source:o}=e;"user"===o&&(t.add(n),u())}));return R.Z.onDisconnect(a,[{operation:"setField",key:a,field:s,value:0,ttl:K}],l,o),()=>{h(),i&&R.Z.removeListener(i,o),R.Z.setField(a,s,0,K,o),R.Z.clearOnDisconnect(a,l,o)}}),[c,e.id,a,l,o,e,r,n,s,d])}const U=[E.Anc,E.wwX,E.KjH];function L(t){return U.some((e=>e.isId(t)))}const W=2*C.C0,X=d.bKH.createId(),J=(0,a.F)({format:t=>t}),G=(0,g.exposeDebugValue)("drawings",{});function Y(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n]}function Q(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n]}function tt(t){window.__c={n:"TldrawAdapter"};const{store:e}=t,n="dark"===(0,p.Fg)().mode,[o,s]=(0,u.useState)(void 0),a=(0,u.useCallback)((t=>{s(t)}),[]);(0,u.useEffect)((()=>{o&&(t.disabled?o.enableReadOnlyMode():o.updateUserDocumentSettings({isReadOnly:!1}))}),[o,t.disabled]);const l=(0,u.useRef)();(0,u.useEffect)((()=>{var e,n;t.isEditing?(null==o||o.focus(),null==o||o.updateInstanceState({isFocusMode:(null===(e=l.current)||void 0===e?void 0:e.isFocusMode)??!1}),null==o||o.setSelectedIds((null===(n=l.current)||void 0===n?void 0:n.shapeIds)??[])):o&&(l.current={shapeIds:o.selectedIds,isFocusMode:o.instanceState.isFocusMode},o.blur(),o.updateInstanceState({isFocusMode:!0}),o.setSelectedTool("hand"),o.selectNone())}),[o,t.isEditing]),(0,u.useEffect)((()=>{o&&requestAnimationFrame((()=>{rt.call(o,{inset:0,include:[o.viewportPageBounds]})}))}),[o]);const g=(0,u.useCallback)((t=>{throw x.showErrorMessage(i()(k.FormattedMessage,{id:"drawing.images-not-supported",defaultMessage:"Images are not supported in drawings yet"})),new Error("Image assets are not supported yet.")}),[]),v=d.WqU.default,{syncedStore:_,userId:C,instanceId:M}=function(t){let{store:e,config:n}=t;const o=(0,h.O7)(),[r]=(0,u.useState)((()=>et)),s=(0,u.useMemo)((()=>{const t=e.userId;return t?d.bKH.createCustomId(t):X}),[e.userId]),i=(0,u.useMemo)((()=>{const t=`tab/${r}/store/${e.key}`;return d.KjH.createCustomId(t)}),[r,e.key]),[a,l]=(0,u.useState)(null);(0,u.useEffect)((()=>{const t=`block/${e.id}/store/${e.key}/effect/${nt++}`;l({id:t,syncedStore:{status:"loading"}});const r=e=>{l((n=>(null==n?void 0:n.id)===t?{id:t,syncedStore:e}:n))},a=n.createStore({userId:s,instanceId:i}),d=t=>{const e=(0,c.$F)(a.schema.serialize(),t);if(0===e)return;const n=new Error(e<0?"This drawing is from a newer version of Notion. Update Notion to edit it.":"This drawing is from an older version of Notion. Reload to edit it.");throw Y("schema mismatch",{error:n,incomingSchema:t,ourSchema:a.schema.serialize()}),r({status:"error",error:n}),n},u=e.getDrawingStore(),h=e.getKeyStore("version"),p={drawingStore:u,schemaStore:u.getKeyStore("schema"),snapshotStore:u.getKeyStore("snapshot"),typeStore:u.getKeyStore("type"),getLastVersion:()=>h.isReady()?h.getValue()??-1:-1};let g=!1;const v=new w,_=()=>{if(g)return void Y("skip update: ignoreNotionUpdates");const t=p.drawingStore.getValue();t?(t.schema&&d(t.schema),a.mergeRemoteChanges((()=>{const e=v.getPendingIds(),n=[],o=[];for(const[r,s]of(0,m.qP)(t.snapshot||{}))e.has(r)?Y("skip record: ahead:",{id:r}):s?o.push(f.deserialize(s)):n.push(r);Y("apply updates",{removedIds:n,updatedRecords:o,pendingDiffIds:e}),a.remove(n),a.put(o)}))):Y("skip update: no Notion drawingValue")},C=function(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const n=v.clear(),s=p.getLastVersion();z.createAndCommit({environment:o,userAction:"drawing.persist",userId:e.userId,perform(e){try{g=!0,Q("begin persist",{squashed:n,initialVersion:s});const o=u.getValue();if(o&&"tldraw"!==o.type){const t=Error(`Unknown drawing value type: ${o.type}`);throw r({status:"error",error:t}),t}if(p.typeStore.isReady()&&!p.typeStore.getValue()){const t="tldraw";Q("persist type:",t),I.sO({store:p.drawingStore,value:{type:t},transaction:e})}const i=p.schemaStore.getValue(),l=t||p.schemaStore.isReady()&&!i;if(l){const t=a.schema.serialize();Q("persist schema:",t),I.sO({value:t,store:p.schemaStore,transaction:e})}i&&!t&&d(i);let c={},h=!1;const m=l||p.snapshotStore.isReady()&&!p.snapshotStore.getValue();m&&(h=!0,c=Object.fromEntries(Object.entries(a.serialize()).filter((t=>{let[e]=t;return ot(e)})).map((t=>{let[e,n]=t;return[e,f.serialize(n)]}))));for(const[t,[,e]]of b(n))ot(t)&&(h=!0,c[t]=e?f.serialize(e):0);h&&(Q("persist snapshot update:",c,m),I.sW({store:p.snapshotStore,transaction:e,data:c}))}finally{g=!1,Q("end persist",{initialVersion:s,finalVersion:p.getLastVersion()})}}})},k=S.P2(C,W),x=t=>{let{changes:e,source:n}=t;Q("changes:",n,e),"user"===n&&(v.add(e),k())};let M=!1;(async()=>{try{if(await u.load(),M)return;const t=u.getValue();if(t){const e={};for(const[r,s]of(0,m.qP)(t.snapshot||{}))s&&(e[r]=f.deserialize(s));const n=t.schema?(0,c.$F)(t.schema,a.schema.serialize()):0,o=a.schema.migrateStoreSnapshot(e,t.schema??a.schema.serializeEarliestVersion());if("error"===o.type)throw Y("migration error:",o),new Error(`This version of Notion isn't compatible with this drawing (${o.reason})`);a.mergeRemoteChanges((()=>{a.put(Object.values(e),"initialize")})),0!==n&&C(!0)}u.addListener(_),r({status:"synced",store:a})}catch(t){throw r({status:"error",error:(0,y.tg)(t)}),t}})();const P=a.listen(x);return()=>{M=!0,l((e=>(null==e?void 0:e.id)===t?null:e)),u.removeListener(_),P()}}),[i,n,s,e,o]);const p=(null==a?void 0:a.syncedStore)??{status:"loading"};return{userId:s,instanceId:i,syncedStore:p}}({store:e,config:v});q({blockStore:e,app:o}),(0,u.useEffect)((()=>{if(o)return G[M]=o,()=>{delete G[M]}}),[M,o]);const P=(0,u.useMemo)((()=>{let t=null;return[{helpMenu(e,n,o){const r=n.find((t=>"top"===t.id));return t=(0,d.$5f)("help",...r.children),[]}},{menu(e,n,o){n.push(t);for(const{item:t,parent:r,index:s}of function*(t){const e=[];function*n(t){for(let o=0;o<t.length;o++){const r=t[o];yield{index:o,item:r,path:e,parent:e.at(-1)},"group"!==r.type&&"submenu"!==r.type||(e.push(r),yield*n(r.children),e.pop())}}yield*n(t)}(n))"toggle-dark-mode"===t.id&&r&&r.children.splice(s,1),"LANGUAGE_MENU"===t.id&&r&&r.children.splice(s,1),"insert-media"===t.id&&r&&r.children.splice(s,1);return n},toolbar:(t,e,n)=>e.filter((t=>"asset"!==t.id)),actions(t,e,n){const o=e["toggle-dark-mode"];return o&&(o.kbd=void 0),e}}]}),[]),E={isDarkMode:n,config:v,assetUrls:J,overrides:P};return u.createElement(u.Fragment,null,i()(A,{}),u.createElement(d.gRN,r()({onMount:a,instanceId:M,userId:C,store:_},E,{onCreateAssetFromFile:g}),u.createElement(d.p4C,E,i()(d.xVl,{},void 0,i()(d.Xz7,{})))))}const et=(0,_.ZP)();let nt=0;function ot(t){return![d.F7R,d.iHI,d.bKH,d.Anc,d.luK,d.KjH,d.wwX].some((e=>e.isId(t)))}function rt(t){if(!this.canMoveCamera)return this;const e=[...this.shapeIds];if(e.length<=0)return this;const n=S.oA(e.map((t=>this.getPageBoundsById(t))));null!=t&&t.include&&n.push(...t.include);const o=l.No.Common(n);return st.call(this,o.minX,o.minY,o.width,o.height,void 0,t),this}function st(t,e,n,o,r,s){if(!this.canMoveCamera)return this;const{viewportScreenBounds:i}=this,a=(null==s?void 0:s.inset)??Math.min(256,.28*i.width);let d=(0,l.uZ)(Math.min((i.width-a)/n,(i.height-a)/o),.1,8);return void 0!==r&&(d=Math.min(r,d)),null!=s&&s.duration?this.animateCamera(-t+(i.width-n*d)/2/d,-e+(i.height-o*d)/2/d,d,s):this.setCamera(-t+(i.width-n*d)/2/d,-e+(i.height-o*d)/2/d,d),this}}}]);