"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[8611],{68611:(e,t,i)=>{i.r(t),i.d(t,{default:()=>M});var n=i(10434),s=i.n(n),o=i(23174),r=i.n(o),a=i(67294),l=i(40782),d=i(83355),c=i(8848),p=i(37652),u=i(35840),h=i(72126),m=i(89101),f=i(82990),g=i(77671),v=i(54642),y=i(75018),S=(i(95477),i(59266)),w=i(28020),R=i(45023),C=i(91203),b=i(33846),k=i(72087),I=i(31150),Z=i(86867),x=i(74194),V=i(84076),E=i(63296),B=i(77137),L=i(36360);i(27369);class A extends d.Z{constructor(){super(...arguments),this.searchRef=a.createRef(),this.firstApiRef=a.createRef(),this.apiSectionRefs={find:a.createRef(),pricing:a.createRef(),recovery:a.createRef(),security:a.createRef(),rateLimits:a.createRef(),experiments:a.createRef(),findAdminLogs:a.createRef(),utilities:a.createRef(),integrations:a.createRef(),marketing:a.createRef(),domainClaim:a.createRef(),ai:a.createRef(),spaceConsolidation:a.createRef()},this.storeTypes={searchStore:b.Z,ownershipRequestStore:k.Z},this.performGetOwnershipRequest=async()=>{const e=await v.adminGetOwnership(this.environment,{});if("failed"!==e.type)return e.data},this.scrollToSection=e=>{const t=this.apiSectionRefs[e];t.current&&t.current.scrollIntoView()},this.handleKeyDown=e=>{(0,R.Z)(this.environment,e,"command+/")&&(e.preventDefault(),this.stores.searchStore.reset(),this.searchRef.current&&this.searchRef.current.focusInput())},this.handleLogOut=()=>{g.B(this.environment)},this.filterStore=this.createComputedStore((()=>{const e=this.stores.searchStore.state.inputValue.toLowerCase();if(!(e.length<=1))try{return new RegExp(e,"i")}catch(t){return void console.error(`Can't filter with invalid regex "${e}"`,t)}}))}didMount(){window.addEventListener("keydown",this.handleKeyDown)}willUnmount(){window.removeEventListener("keydown",this.handleKeyDown)}renderComponent(){const e=(0,w.B7)(this.environment),{searchStore:t,ownershipRequestStore:i}=this.stores,n=(0,S.v2)(),o=n?S.Fr:S.AA,d=this.filterStore.state,h=void 0!==d?o.filter((e=>(0,S.H2)(e,d))):o,g=new Set(C.Z.getState()||[]),v=h.filter((e=>g.has(e.apiName))).map((e=>{const t=i.state.result?i.state.result[e.apiName]:void 0;return r()(I.Z,{style:A.itemStyle,api:e,owner:t},e.apiName)})),R=this.renderSection({key:"favorites",title:"⭐ Favorites",children:v});let b=!0;const k=S.KC.map((e=>{const t=h.filter((t=>t.sectionName===e)).map((e=>{const t=b?this.firstApiRef:void 0,n=i.state.result?i.state.result[e.apiName]:void 0;return b=!1,a.createElement(I.Z,{style:A.itemStyle,ref:t,key:e.apiName,api:e,owner:n})}));return this.renderSection({key:e,title:S._c[e].title,children:t})})),M={request:{},performRequest:this.performGetOwnershipRequest,render:()=>null};return r()(L.Z,{title:"Notion Admin Mode"},void 0,r()("div",{style:A.wrapStyle},void 0,r()("div",{style:A.style},void 0,r()("div",{style:A.itemStyle},void 0,r()("div",{style:A.headerStyle},void 0,"Notion ",!n&&"Restricted"," Admin Mode"," ",void 0),r()("div",{style:{marginBottom:12}},void 0,r()(V.Z,{href:"https://dev.notion.so/notion/Use-Admin-Mode-05f1e0ad9aa749a4b3dc07410b499465",external:!0,inline:!0,underline:!0},void 0,"Click here")," ","to learn more about how to use Admin Mode."),r()("div",{style:{display:"flex"}},void 0,(null==e?void 0:e.isDefined())&&r()("div",{style:{flex:1}},void 0,"Currently Logged in as: ",e.getEmail()),!(null!=e&&e.isDefined())&&r()("div",{style:A.warningTextStyle},void 0,r()(V.Z,{innerStyle:{textDecoration:"underline"},href:m._j.login},void 0,"Please log in.")),(null==e?void 0:e.isDefined())&&r()(E.Z,{onClick:this.handleLogOut,style:{height:"auto"}},void 0,"Log Out")),n&&r()(Z.Z,{}),!n&&r()(E.Z,{onClick:()=>{y.navigate({environment:this.environment,url:"/"})},style:{marginTop:12,display:"flex",alignItems:"center"}},void 0,(0,p.V)({width:12,height:12,marginRight:12}),"Navigate to user workspace")),r()("div",{style:A.itemStyle},void 0,r()("div",{style:{fontWeight:f.Z.fontWeight.bold,fontSize:18,marginBottom:6}},void 0,"Go to (cmd-/)"),r()("div",{style:{marginBottom:14,display:"flex"}},void 0,a.createElement(x.Z,{showClearButton:!0,placeholder:"Filter, then press enter to jump",ref:this.searchRef,focusInitial:!0,value:this.stores.searchStore.state.inputValue,onChange:e=>{t.setState({...t.state,inputValue:e.target.value})},left:(0,u.R)({width:14,height:14,marginRight:6,flexGrow:0,flexShrink:0,fill:c.Vx().mediumIconColor}),onSubmit:()=>{this.firstApiRef.current&&this.firstApiRef.current.focus()}})),S.KC.map((e=>r()("div",{style:{marginTop:6}},e,r()(V.Z,{onClick:()=>this.scrollToSection(e),underline:!0},void 0,S._c[e].title))))),R,k,h.length<o.length&&r()("div",{style:{opacity:.7,width:"100%",color:c.Vx().lightIconColor,margin:8,fontStyle:"italic"}},void 0,o.length-h.length,' hidden. To show all, press Cmd-/ or click "Clear" above.',r()("br",{}),this.randomQuip())),r()(l.Ix,{hideProgressBar:!0,autoClose:1500,transition:l.Mi})),a.createElement(B.Z,s()({},M,{requestStore:i})))}renderSection(e){const{title:t,children:i,key:n}=e;if(i&&(!Array.isArray(i)||i.length))return a.createElement("div",{ref:this.apiSectionRefs[n],id:n,key:n,style:{...A.style,marginTop:12,marginBottom:12,width:"100%"}},r()("div",{style:{...A.headerStyle,width:"100%",marginLeft:A.itemStyle.margin}},void 0,t),i)}randomQuip(){return h.UP(["Hi, spam duplicate","Your hair is looking so nice today!",'"The faster we are at getting botter, the faster we get botter" - Doug EngelBot',"You're doing a great job, keep it up!!","Computing for everyone","Remember to take a stretch break every once in a while"])}}A.displayName="Admin",A.wrapStyle={height:"100vh",overflow:"auto",background:c.Vx().sidebarBackground,padding:8},A.style={display:"flex",flexWrap:"wrap"},A.headerStyle={fontWeight:f.Z.fontWeight.bold,fontSize:36},A.itemStyle={width:500,padding:18,margin:8,border:`1px solid ${c.Vx().outlineButtonBorder}`,background:"white",position:"relative"},A.warningTextStyle={fontWeight:f.Z.fontWeight.bold,color:"red"};const M=A},31150:(e,t,i)=>{i.d(t,{Z:()=>P});var n=i(10434),s=i.n(n),o=i(23174),r=i.n(o),a=(i(21703),i(57658),i(67294)),l=i(83355),d=i(480),c=i(49085),p=i(8848),u=i(72126),h=i(4615),m=i(89101),f=i(97880),g=i(82990),v=i(5366),y=i(54642),S=i(92625),w=i(53471),R=i(59266),C=i(24608),b=i(77907);class k extends c.default{getInitialState(){return{inputValues:{}}}}const I=k;var Z=i(91203),x=i(3104),V=i(52275),E=i(60458),B=i(41358),L=i(74194),A=i(84076),M=i(68785),N=i(50506),T=i(63296),O=i(45959),U=i(64369),D=i(62069);const j={...["userId","spaceId","blockId","pageId","integrationId","spaceId","fileId","teamId","collectionId","botId"].reduce(((e,t)=>({[t]:R.b9,[`${t}s`]:R.uy,...e})),{}),...["userEmail","fromEmail","toEmail"].reduce(((e,t)=>({[t]:R.cL,[`${t}s`]:R.VX,...e})),{}),domain:R.Ic,domains:R.EJ,supportTicketLink:R.ZT};function F(e){window.__c={n:"ImageUploadInput"};const{fieldName:t,acceptMultiple:i,store:n}=e,[s,o]=(0,a.useState)((()=>({isUploading:!1,errorMessage:void 0,uploadedFileUrls:[]}))),l=(0,d.O7)();return a.createElement(a.Fragment,null,r()(T.Z,{isLarge:!0,style:{width:"fit-content",backgroundColor:"white"},onClick:()=>{w.cR({multiple:!!i,environment:l,onStart:()=>{o({...s,isUploading:!0,errorMessage:void 0,uploadedFileUrls:[]})},bucket:"public",onError:e=>{o({isUploading:!1,errorMessage:e.message,uploadedFileUrls:[]})},onComplete:e=>{o({isUploading:!1,errorMessage:void 0,uploadedFileUrls:e}),n.setState({response:void 0,inputValues:{...n.state.inputValues,[t]:i?e:e[0]}})},accept:"image/*"})}},void 0,i?"Upload images":"Upload image",s.isUploading&&r()(M.Z,{style:{marginLeft:4}})),s.uploadedFileUrls&&r()("div",{},void 0,s.uploadedFileUrls.join(",")),s.errorMessage&&r()("div",{style:{color:p.ZP.red,display:"inline-flex",marginLeft:8}},void 0,s.errorMessage))}const z=(0,v.defineMessages)({loading:{id:"adminAPIRequest.loadingMessage",defaultMessage:"Loading…"}});class K extends l.Z{constructor(){super(...arguments),this.firstInputRef=a.createRef(),this.fileInputRef=a.createRef(),this.storeTypes={store:I,fileNameStore:c.default.createClass("")},this.buildPlaceholder=(e,t)=>void 0!==t.placeholder?t.placeholder:e in j?j[e]:void 0,this.renderKey=(e,t,i)=>{const{store:n}=this.stores,o=n.state.inputValues[t],l=0===i?this.firstInputRef:void 0;let d;if(e.type===R.It.String)d=a.createElement(L.Z,{ref:l,value:"string"==typeof o?o:"",placeholder:this.buildPlaceholder(t,e),showClearButton:!0,onChange:e=>{n.setState({response:void 0,inputValues:{...n.state.inputValues,[t]:e.target.value}})},onSubmit:this.handleSubmit,onClearButtonClick:()=>{n.setState({response:void 0,inputValues:{...n.state.inputValues,[t]:void 0}})}});else if(e.type===R.It.Number)d=a.createElement(L.Z,{ref:l,type:"number",value:"number"==typeof o?o.toString():"",onChange:e=>{n.setState({response:void 0,inputValues:{...n.state.inputValues,[t]:parseInt(e.target.value)}})},onSubmit:this.handleSubmit});else if(e.type===R.It.Options){const i=[K.undefinedKey,...e.options],r={menuTitle:t,items:i,selectedItem:o,onSelect:e=>{n.setState({response:void 0,inputValues:{...n.state.inputValues,[t]:e===K.undefinedKey?void 0:e}})},getKey:e=>e,renderItem:e=>a.createElement(V.Z,s()({},e,{title:e.value===K.undefinedKey?"Empty":e.value})),renderOrigin:e=>a.createElement(T.Z,s()({isLarge:!0,style:{marginBottom:8}},e),o||"Empty"),width:300};d=a.createElement(O.Z,r)}else if(e.type===R.It.Boolean)d=r()(E.Z,{checked:Boolean(o),size:20,onClick:e=>{n.setState({response:void 0,inputValues:{...n.state.inputValues,[t]:!Boolean(o)}})}});else if(e.type===R.It.Csv)d=a.createElement(a.Fragment,null,r()(T.Z,{isLarge:!0,onClick:()=>{var e;null===(e=this.fileInputRef)||void 0===e||null===(e=e.current)||void 0===e||e.click()},style:{marginRight:10}},void 0,"Upload"),this.stores.fileNameStore.state,a.createElement("input",{ref:this.fileInputRef,style:{display:"none"},type:"file",name:e.name||"csv file",onChange:e=>this.handleOnChangeCsvFile(t,e)}));else if(e.type===R.It.Image||e.type===R.It.Images){const i=e.type===R.It.Images;d=r()(F,{fieldName:t,acceptMultiple:i,store:n})}else e.type===R.It.Timezone?d=r()(D.Z,{renderOrigin:e=>a.createElement(T.Z,e,o),onSelect:e=>{n.setState({response:void 0,inputValues:{...n.state.inputValues,[t]:e}})}}):(0,f.t1)(e);return r()("div",{},t,r()("div",{style:{marginTop:12,marginBottom:4}},void 0,u.fl(t)),e.comment&&r()(U.Z,{isSmall:!0,isMultiline:!0,style:{marginTop:4,marginBottom:8}},void 0,e.comment),d)},this.handleOnChangeCsvFile=async(e,t)=>{const{store:i,fileNameStore:n}=this.stores,s=t.target.files;if(null==s||!s.length)return;const o=s[0],r=await o.text();n.setState(o.name),i.setState({response:void 0,inputValues:{...i.state.inputValues,[e]:r}})},this.handleSubmit=()=>{this.props.api.confirmationApiName?this.handleConfirm():this.handleConfirmedSubmit()},this.handleConfirm=()=>{const{store:e}=this.stores,{confirmationApiName:t,schema:i}=this.props.api,{inputValues:n}=e.state;if(!t)throw new Error("Should not have gotten here without a confirmationApiName");const s=this.normalizeInputValues(n,i),o=y[t];if(!o)throw new Error(`Missing api handler for ${t} - likely either a typo in client/helpers/adminHelpers.tsx or missing declaration in client/actions/api.ts`);S.j({message:z.loading}),o(this.environment,s).then((t=>{S.x(),this.downloadAsCsv(t),e.setState({...e.state,confirmationResponse:t})}))},this.handleConfirmedSubmit=()=>{const{store:e}=this.stores,{apiName:t,schema:i}=this.props.api,{inputValues:n}=e.state,s=this.normalizeInputValues(n,i);S.j({message:z.loading});const o=y[t];if(!o)throw new Error(`Missing api handler for ${t} - likely either a typo in client/helpers/adminHelpers.tsx or missing declaration in client/actions/api.ts`);o(this.environment,s).then((t=>{S.x(),this.downloadAsCsv(t)||e.setState({...e.state,confirmationResponse:void 0,response:t})}))},this.handleCancel=()=>{const{store:e}=this.stores;e.setState({inputValues:e.state.inputValues})},this.handleModalDismiss=()=>{const{store:e}=this.stores;if(!e.state.response)return;"failed"===e.state.response.type||this.props.api.isReadOnly?e.setState({inputValues:e.state.inputValues}):this.resetStoreState(this.props)},this.handlePin=()=>{const{api:e}=this.props,t=Z.Z.getState()||[],i=t.indexOf(e.apiName);-1===i?t.push(e.apiName):t.splice(i,1),Z.Z.setState(t)}}willMount(e){this.resetStoreState(e)}didMount(){this.shouldShowInline()&&this.handleSubmit()}renderComponent(){const{api:e,owner:t,defaultParams:i,style:n}=this.props,{apiName:s,displayName:o,schema:l,description:d,emoji:c,isDestructive:p}=e,h=(0,R.G0)(s),m=-1!==(Z.Z.getState()||[]).indexOf(s)?"⭐":"☆",{confirmationResponse:f,response:g}=this.stores.store.state;return r()("div",{style:n},void 0,r()("div",{style:K.headerStyle},void 0,r()(B.Z,{size:24,emoji:c}),r()("span",{style:{marginLeft:4}},void 0,o||u.fl(s)),r()("span",{style:{flexGrow:1}}),r()("a",{onClick:this.handlePin,style:{cursor:"pointer"}},void 0,r()(B.Z,{size:18,emoji:m}))),d&&r()(U.Z,{isSmall:!0,isMultiline:!0},void 0,d),!this.shouldShowInline()&&a.createElement(a.Fragment,null,Object.entries(l).map(((e,t)=>{let[n,s]=e;return i&&i[n]?void 0:this.renderKey(s,n,t)})),r()(T.Z,{style:{marginTop:8,marginBottom:8},isLarge:!0,onClick:this.handleSubmit,isRed:p},void 0,"Submit")),this.shouldShowInline()&&!g&&r()("div",{},void 0,r()(M.Z,{style:{width:18,height:18}}),"Loading ..."),this.renderError(f),this.renderConfirmation(f),this.renderError(g),this.renderResponse(g),(h||t)&&r()("div",{style:K.footerStyle},void 0,t&&r()("span",{},void 0,"Owned by"," ",r()("a",{href:`https://notion.slack.com/app_redirect?channel=${t.slackChannel}`},void 0,t.teamName)),h&&t&&r()("span",{},void 0," | "),h&&r()("span",{},void 0,"Full Admin Tool")))}renderConfirmation(e){if(e&&"success"===e.type)return r()(N.Z,{open:!0,innerStyle:K.modalStyle,onDismiss:this.handleCancel,disableAnimation:!0,render:()=>a.createElement(a.Fragment,null,r()(U.Z,{isSmall:!0,isMultiline:!0,style:{marginBottom:8}},void 0,"Does this information about the action you're about to take look good to you? Hit Confirm if it does. Cancel if not."),r()(b.LazyAdminReactJson,{data:e.data}),r()(T.Z,{style:{marginTop:8,marginBottom:8},isLarge:!0,onClick:this.handleConfirmedSubmit},void 0,"Confirm"),r()(T.Z,{style:{marginTop:8,marginBottom:8,marginLeft:8},isLarge:!0,onClick:this.handleCancel},void 0,"Cancel"))})}renderError(e){if(!e)return;if("success"===e.type)return;const t=(0,C.pO)(e);return 401===e.status?r()("div",{style:K.responseErrorStyle},void 0,t," Likely fixed by"," ",r()(A.Z,{innerStyle:{textDecoration:"underline"},href:m._j.login},void 0,"signing in.")):r()("div",{style:K.responseErrorStyle},void 0,t)}renderResponse(e){if(!e||"success"!==e.type)return;const t=this.props.api.customResponseRenderer?r()(this.props.api.customResponseRenderer,{data:e.data,environment:this.environment,singleRecordMode:this.props.singleRecordMode}):r()(x.Z,{data:e.data});return this.shouldShowInline()?t:r()(N.Z,{open:Boolean(e&&"success"===e.type),innerStyle:K.modalStyle,onDismiss:this.handleModalDismiss,disableAnimation:!0,render:()=>t})}focus(){this.firstInputRef.current&&this.firstInputRef.current.focusInput()}downloadAsCsv(e){if(n=e,Boolean("success"===n.type&&Array.isArray(null===(s=n.data)||void 0===s?void 0:s.rows)&&(null===(o=n.data)||void 0===o?void 0:o.rows.length)>0&&"string"==typeof(null===(r=n.data)||void 0===r?void 0:r.filename))){const{filename:n,rows:s}=e.data,o=Array.from(s.reduce(((e,t)=>(Object.keys(t).forEach((t=>e.add(t))),e)),new Set)),r=[o];for(const e of s){const t=new Array(o.length);for(let i=0;i<t.length;i++){const n=o[i];t[i]=e[n]}r.push(t)}const a=r.map((e=>e.join(","))).join("\n");var t=new Blob([a],{type:"data:text/csv"}),i=window.URL.createObjectURL(t);const l=document.createElement("a");return l.download=n,l.href=i,l.click(),!0}var n,s,o,r;return!1}shouldShowInline(){const{showByDefault:e,singleRecordMode:t}=this.props;return e&&t}resetStoreState(e){const{defaultParams:t}=e,{store:i}=this.stores,n={};for(const s of Object.keys(e.api.schema)){const i=e.api.schema[s];t&&t[s]?n[s]=t[s]:i&&void 0!==i.defaultValue?n[s]=i.defaultValue:n[s]=void 0}i.setState({inputValues:n})}normalizeInputValues(e,t){const i={};for(const n of Object.keys(e)){const s=e[n];t[n]&&(u.HD(s)&&h.qn(s.trim())?i[n]=h.wr(s.trim()):i[n]=s)}return i}}K.undefinedKey="__undefined",K.headerStyle={fontWeight:g.Z.fontWeight.bold,fontSize:20,display:"flex",alignItems:"center",marginBottom:6},K.footerStyle={fontSize:10,position:"absolute",bottom:7,right:20},K.responseErrorStyle={color:p.ZP.red,display:"inline-block",marginLeft:8},K.modalStyle={width:"calc(100% - 120px)",height:"calc(100% - 120px)",padding:24,fontSize:"1.2em",overflow:"scroll"};const P=K},91203:(e,t,i)=>{i.d(t,{Z:()=>o});var n=i(53809),s=i(30548);const o=new n.D({key:"adminFavoriteToolsSetting",namespace:s.$p,important:!1,trackingType:"preference"})},37652:(e,t,i)=>{i.d(t,{V:()=>o});var n=i(23174),s=i.n(n);i(67294);const o=(0,i(45238).I)("arrowLeft",{viewBox:"0 0 30 30",svg:s()("polygon",{points:"29 14 4.813 14 13.406 5.406 12 4 1 15 12 26 13.406 24.594 4.813 16 29 16"})})},27369:()=>{}}]);