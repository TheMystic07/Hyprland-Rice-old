"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[9595],{83023:(e,t,i)=>{i(10434);var r=i(23174),o=i.n(r);i(67294),i(480),i(24405);(0,i(45238).I)("gift",{viewBox:"0 0 14 14",svg:o()("path",{d:"M7.95789 3.54464C8.00247 3.30845 8.16614 2.97748 8.48043 2.66319C8.84104 2.30258 9.38851 1.92751 9.87755 1.74943C10.1088 1.66523 10.237 1.65112 10.2972 1.65266C10.6256 1.99575 10.8618 2.39413 10.9488 2.70912C10.9917 2.86422 10.9849 2.94927 10.9797 2.97718L10.9792 2.98003C10.9777 2.9894 10.9767 2.99539 10.9553 3.01675C10.5461 3.42596 10.0755 3.57832 9.4321 3.60836C9.09223 3.62423 8.7328 3.60413 8.31688 3.57258C8.25969 3.56824 8.20022 3.56356 8.13892 3.55874L7.95789 3.54464ZM6.97082 2.14136C7.10128 1.95114 7.25234 1.76996 7.41977 1.60253C8.39608 0.626221 10.3325 -0.434439 11.3089 0.541871C12.2852 1.51818 12.9923 3.10109 12.016 4.07741C11.4993 4.59409 10.9264 4.86563 10.3362 4.99913H14V7.99913H13H8V5.05253C7.65076 5.02523 7.31443 4.99913 7.00006 4.99913C6.99017 4.98924 6.98043 4.9793 6.97082 4.96932C6.96122 4.9793 6.95148 4.98924 6.94159 4.99913C6.64476 4.99913 6.32836 5.0224 6 5.04797V7.99913H1H0V4.99913H3.60548C3.01529 4.86563 2.44237 4.59409 1.92569 4.07741C0.949377 3.10109 1.65648 1.51818 2.6328 0.541871C3.60911 -0.434439 5.54557 0.626221 6.52188 1.60253C6.68931 1.76996 6.84037 1.95114 6.97082 2.14136ZM10.3411 1.66021C10.3418 1.65908 10.3348 1.65588 10.3179 1.65399C10.3319 1.6604 10.3404 1.66134 10.3411 1.66021ZM1 8.99913V13.9991H6V8.99913H1ZM8 8.99913V13.9991H13V8.99913H8ZM5.46122 2.66319C5.77551 2.97748 5.93918 3.30845 5.98376 3.54464L5.80273 3.55874C5.74143 3.56356 5.68196 3.56824 5.62477 3.57258C5.20886 3.60413 4.84942 3.62423 4.50955 3.60836C3.86611 3.57832 3.39557 3.42596 2.98635 3.01675C2.965 2.99539 2.96399 2.9894 2.96241 2.98003L2.96191 2.97718C2.95674 2.94927 2.94998 2.86422 2.99284 2.70912C3.07987 2.39413 3.31602 1.99575 3.64441 1.65266C3.70469 1.65112 3.83287 1.66523 4.0641 1.74943C4.55314 1.92751 5.10061 2.30258 5.46122 2.66319ZM3.60056 1.66021C3.59983 1.65908 3.60685 1.65588 3.6238 1.65399C3.60977 1.6604 3.60129 1.66134 3.60056 1.66021Z"})});i(5366),i(75018),i(95477),i(4023),i(64921),i(26388),i(14694)},27556:(e,t,i)=>{i.d(t,{Ke:()=>r.LazyOutlinerViewAllButton,k4:()=>o,uO:()=>n,vJ:()=>r.LazyOutlinerViewAllPopup});var r=i(77907);const o=30,n=20},13089:(e,t,i)=>{i.d(t,{u:()=>S});var r=i(23174),o=i.n(r),n=i(67294),s=i(480),a=i(86628),l=i(72126),d=i(69246),c=i(150),h=i(89971),p=i(28020);var u=i(80444),g=i(79131),m=i(14360);function S(e){let{teams:t,reorderable:i,onNavigate:r,id:S}=e;window.__c={n:"TeamOutlinerList"};const v=(0,s.O7)(),y=function(){const e=(0,s.O7)();return(0,a.VK)((()=>(0,p.k_)(e).state),[e])}(),{currentSpaceViewStore:C,currentSpaceStore:f}=(0,a.VK)((()=>{const{currentSpaceViewStore:e,currentSpaceStore:t}=u.default.state;return{currentSpaceViewStore:e,currentSpaceStore:t}}),[]),b=(0,a.VK)((()=>t.map((e=>e.id))),[t]),w=(0,a.VK)((()=>l.KX(t,"id")),[t]),[I,Z]=(0,n.useState)({});return(0,n.useEffect)((()=>{(null==f?void 0:f.id)&&Z((e=>h.oO({teamIds:b,oldState:e,spaceId:f.id,userId:v.currentUser.id})))}),[null==f?void 0:f.id,v.currentUser.id,b]),C&&y?o()(g.ZP,{id:S,direction:"vertical",keys:b,disabled:!i,renderKey:e=>I[e]&&o()(m.O,{shouldPersistToggleState:!0,teamStore:w[e],sidebarState:y,isLastTeam:l.Z$(b)===e,teamOutlinerType:d.kg,customToggleStore:I[e],onNavigate:r},e),onDrop:(e,t)=>{c.Ct({environment:v,currentSpaceViewStore:C,orderedTeamIds:e,userAction:"SidebarOutliner.SidebarOutliner",isExplicitUserAction:!0,dropArgs:t})}}):n.createElement(n.Fragment,null)}},22709:(e,t,i)=>{i.d(t,{_S:()=>E,g6:()=>A,ZP:()=>N});var r=i(23174),o=i.n(r),n=(i(67294),i(83355)),s=i(49085),a=i(80503),l=i(5366),d=i(14720),c=i(50906),h=i(94507),p=i(65452),u=i(64921),g=i(31945),m=i(39849),S=i(92955),v=i(37240),y=i(82990),C=i(38755),f=i(56496),b=i(31278),w=i(14694),I=i(46783);class Z extends n.Z{renderComponent(){return o()("div",{style:this.getPlaceholderPageStyle()},void 0,this.props.showIcon&&(0,I.w)({width:16,height:16,fill:this.theme.buttonHoveredBackground}),o()("div",{style:this.getPlaceholderTextWrapStyle()},void 0,o()("div",{style:Z.getPlaceholderTextStyle(this.theme)})))}getPlaceholderPageStyle(){return{height:28,display:"flex",alignItems:"center",width:"100%",padding:this.props.showIcon?"0 15px":"0 0px"}}getPlaceholderTextWrapStyle(){return{flexGrow:1,marginLeft:this.props.showIcon?10:0,height:28,display:"flex",alignItems:"center"}}static getPlaceholderTextStyle(e){const t=Math.ceil(60),i=Math.floor(85),r=`${Math.floor(Math.random()*(i-t+1))+t}%`;return{height:4,background:e.buttonHoveredBackground,width:r}}}Z.displayName="SidebarPlaceholderItem";const M=Z;class x extends n.Z{willMountOrUpdate(){"store"===this.props.type&&this.props.spaceStore.getValue()}renderComponent(){const{device:e}=this.environment,{props:t}=this,{activeUserEmailAddress:i,isMobile:r,style:n,showExpand:s}=t,a="store"===t.type?(0,C.rn)(this.environment,t.spaceStore):t.spaceName;return o()(w.Z,{style:{overflow:"hidden",width:"100%",...r&&{fontSize:14,padding:0,marginRight:12},...!r&&{paddingLeft:14,paddingRight:14},...n||{}},left:a?this.renderRecordIcon(a,"store"===t.type?void 0:t.spaceIcon,r,"store"===t.type?t.spaceStore:void 0):this.renderPlaceholderRecordIcon(),disableMobileBorder:!0},void 0,!a&&this.renderPlaceholderTitle(),a&&o()("div",{style:{display:"flex",alignItems:"center",justifyContent:i?"space-between":"start"},className:"notranslate"},void 0,o()("div",{style:{display:"flex",flexDirection:"column",marginRight:6,marginTop:e.isAndroid?3:0,...x.truncateStyle}},void 0,o()("div",{style:{color:this.theme.regularTextColor,fontWeight:y.Z.fontWeight.medium,...x.truncateStyle}},void 0,a),o()("div",{style:{color:this.theme.mediumTextColor,fontSize:11,lineHeight:"12px",fontWeight:y.Z.fontWeight.regular,...x.truncateStyle}},void 0,i)),s&&o()("div",{style:{flexGrow:0,flexShrink:0,width:12,height:12,fill:this.theme.mediumIconColor}},void 0,(0,v.s)())))}renderRecordIcon(e,t,i,r){const n=r?(0,C.Wd)(this.environment,r):t?{icon:t,pointer:{table:"space",id:"undefined"}}:void 0,s=r?(0,C.rn)(this.environment,r):e;return o()(b.Z,{disabled:!0,icon:n,isEmptyPage:!1,title:s,size:i?24:22,style:{marginTop:1,color:this.theme.regularTextColor,fontWeight:y.Z.fontWeight.medium}})}renderPlaceholderRecordIcon(){return o()("div",{style:{opacity:.25}},void 0,o()(f.Z,{size:20,title:void 0}))}renderPlaceholderTitle(){return o()(M,{showIcon:!1})}}x.displayName="SidebarSpaceName",x.truncateStyle={whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"};const P=x;var k=i(29538),V=i(43250),L=i(80444),T=i(30278),H=i(85974),O=i(76487),R=i(62213),U=i(17364);let E=function(e){return e[e.Regular=0]="Regular",e[e.DesktopMac=1]="DesktopMac",e[e.Mobile=2]="Mobile",e}({});class A extends n.Z{constructor(){super(...arguments),this.sidebarSwitcherIsHovered=s.default.createValue(!1),this.storeTypes={loginStore:H.Z,loginPermissionsStore:T.Z},this.height={[E.Regular]:a.Aj,[E.DesktopMac]:a.br,[E.Mobile]:"auto"},this.handleClick=()=>{R.Z.setState({...R.Z.state,open:!0}),c.air(this.environment),U.Z.getUserIds(this.environment).forEach((e=>{U.Z.getSpaceViewStores(this.environment,e).forEach((t=>{const i=t.getSpaceId();i&&(p.h({environment:this.environment,spaceId:i,userId:e}),h.I({environment:this.environment,spaceId:i,userId:e}))}))}))}}renderComponent(){const{device:e}=this.environment,{shouldShowUnexpandButton:t}=this.props,{currentSpaceStore:i,currentUserStore:r}=L.default.state,n=U.Z.getUserIds(this.environment);if(!i||!r)return;const s=n.length>1?r.getEmail():void 0,a=this.getUnreadCountForOtherSpaces(),l=Boolean(this.props.disabled),c=this.stores;return o()(g.ZP,{popupType:e.isMobile?g.Z4.SlideUp:g.Z4.Popup,buttonPopupStore:R.Z,renderOrigin:()=>o()(u.Z,{style:{...A.buttonStyle,height:this.height[this.props.format],marginBottom:s?e.isMobile?0:8:0,padding:0,...this.props.buttonStyle},mobileFeedback:e.isMobile,onClick:this.handleClick,disabled:l,className:V.rli,hovered:this.sidebarSwitcherIsHovered.state,ignoreLocalHoverState:!0,onMouseEnter:()=>this.sidebarSwitcherIsHovered.setState(!0),onMouseLeave:()=>this.sidebarSwitcherIsHovered.setState(!1)},void 0,o()(P,{isMobile:this.isMobile,spaceStore:i,activeUserEmailAddress:s,showExpand:!l,type:"store",style:{marginLeft:0}}),o()("div",{className:V.JiD,style:{display:"flex",alignItems:"center",height:"100%",marginLeft:"auto",marginRight:a?0:12}},void 0,t&&o()(k.V,{}),o()(S.Z,{type:"otherSpaces",color:m.Z.Color.Red,style:{marginLeft:6,marginRight:14}}))),originGap:0,disableMutationObserver:!0,forceInitialInbound:!0,style:e.isMobile?{}:{width:320,overflow:"hidden"},render:e=>o()(d.Rv,{parent:e,redirectURL:this.props.redirectURL,disableLoginLink:this.props.disableLoginLink,onSpaceClick:this.props.onSpaceClick,loginStore:c.loginStore,loginPermissionsStore:c.loginPermissionsStore})})}get isMobile(){return this.props.format===E.Mobile}getUnreadCountForOtherSpaces(){return O.Z.getUnreadMentionsCountForOtherSpaces()}}A.displayName="SidebarSwitcherMultiAccount",A.Format=E,A.buttonStyle={display:"flex",alignItems:"center",minWidth:0,height:"100%",width:"100%"};const N=(0,l.injectIntl)(A)}}]);