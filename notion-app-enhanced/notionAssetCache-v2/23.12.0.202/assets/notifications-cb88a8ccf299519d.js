"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[1909],{27386:(e,t,o)=>{o.d(t,{Z:()=>u,k:()=>c});var i=o(23174),n=o.n(i),a=(o(67294),o(83355)),s=o(34859),l=o(91754),r=o(61519),d=o(53336);function c(e){return e?18:60}class p extends a.Z{static renderDivider(){return n()(r.Z,{size:37})}renderComponent(){const{device:e}=this.environment,{children:t,controlRow:o,bannerText:i,controlRowPaddingTopBottom:a=16}=this.props,r=()=>e.isMobile?18:36;return this.props.disableScroller?n()("div",{style:{paddingLeft:c(e.isMobile),paddingRight:c(e.isMobile)}},void 0,n()("div",{style:{paddingTop:r(),paddingBottom:r()}},void 0,t),o&&n()("div",{style:{paddingTop:a,paddingBottom:a,boxShadow:`0 -1px 0 ${this.theme.regularDividerColor}`}},void 0,o)):n()("div",{style:{display:"flex",flexDirection:"column",width:"100%",height:"100%",backgroundColor:this.theme.cardContentBackground}},void 0,i&&n()(l.Z,{styleKey:l.v.Blue,isMobile:!1},void 0,i),n()(d.Z,{type:s.Z.All,style:{flexGrow:1,WebkitOverflowScrolling:"touch",transform:"translateZ(0)",paddingLeft:c(e.isMobile),paddingRight:c(e.isMobile),paddingTop:i?15:r(),paddingBottom:i?22:r()}},void 0,t),o&&n()("div",{style:{flexGrow:0,flexShrink:0,paddingLeft:c(e.isMobile),paddingRight:c(e.isMobile),paddingTop:a,paddingBottom:a,boxShadow:`0 -1px 0 ${this.theme.regularDividerColor}`}},void 0,o))}}p.displayName="SettingBox";const u=p},55422:(e,t,o)=>{o.d(t,{Z:()=>E});var i=o(10434),n=o.n(i),a=o(23174),s=o.n(a),l=(o(57658),o(67294)),r=o(480),d=o(86628),c=o(24405),p=o(36591),u=o(42853),g=o(97880),m=o(5366),h=o(61045),b=o(1865),f=o(11368),y=o(87279),v=o(23570),M=o(52275),T=o(31945),w=o(78140),Z=o(28992),C=o(32163),S=o(63296),k=o(89728),x=o(72495),B=o(24006),R=o(26388),I=o(64369),U=o(91718),P=o(27386),L=o(23189);function E(e){window.__c={n:"SettingsItem"};const{title:t,caption:o,captionStyle:i,isMobile:n,upsellOptions:a,type:p,shouldHighlight:u}=e,g=(0,r.O7)(),{paddingLeftCSS:m,paddingRightCSS:y}=(0,d.VK)((()=>g.WindowSizeStore.state),[g]),[M,T]=(0,l.useState)(!1),w=(0,l.useCallback)((()=>T(!0)),[T]),Z=(0,l.useCallback)((()=>T(!1)),[T]),C=(0,l.useContext)(f.Ue),S=(0,l.useRef)(null);(0,l.useEffect)((()=>{u&&S.current&&h.bx({element:S.current,scrollers:{verticalScroller:null==C?void 0:C.verticalScroller},vertical:{reveal:"closest"},horizontal:void 0,animate:!0})}),[u,S,null==C?void 0:C.verticalScroller]);const k=(0,l.useMemo)((()=>{if(n){if("dropdown"===p)return{display:"flex",flexDirection:"column"};if("toggleToButton"===e.type&&e.isOn||"custom"===e.type&&!0===e.useFlexboxStyle)return{}}return{display:"flex",alignItems:"center",justifyContent:"space-between"}}),[n,p,e]),x=(0,c.yK)((t=>({container:{...k,paddingLeft:n?m:void 0,paddingRight:n?y:void 0,cursor:M&&!e.disabled?"pointer":e.disabled?"not-allowed":"default",...u?{backgroundColor:t.buttonHoveredBackground,marginLeft:-1*(0,P.k)(n),marginRight:-1*(0,P.k)(n),paddingLeft:(0,P.k)(n),paddingRight:(0,P.k)(n),marginTop:-1*(0,v.f)(n)/2,marginBottom:-1*(0,v.f)(n)/2,paddingTop:(0,v.f)(n)/2,paddingBottom:(0,v.f)(n)/2}:{}},description:{display:"flex",flexDirection:"column",marginRight:"10%"},captionStyle:{...i},title:{display:"flex",flexDirection:"row"}})),[n,m,y,u,M,i,e.disabled,k]),B="toggle"===e.type||"toggleToButton"===e.type||"custom"===e.type&&!e.disableSettingsItemClick,E=l.createElement("div",{ref:S,style:x.container,onClick:()=>{if(!(e.disabled||"custom"===e.type&&e.disableSettingsItemClick))return a&&a.shouldUpsell?b.y(g,{from:a.analyticsName,for:a.subscriptionTier}):void("toggle"===e.type?e.onToggle():"toggleToButton"===e.type?e.onClick():"custom"===e.type&&e.customButton&&l.isValidElement(e.customButton)&&e.customButton.props.onClick&&"function"==typeof e.customButton.props.onClick&&e.customButton.props.onClick())},onMouseEnter:B?w:void 0,onMouseLeave:B?Z:void 0},s()("div",{style:x.description},void 0,s()(L.Z,{smallMarginBottom:!0,disabled:e.disabled,isCritical:e.isCritical},void 0,s()("div",{style:x.title},void 0,t,e.badge),a&&a.shouldUpsell&&s()(U.Z,{subscriptionTier:a.subscriptionTier,analyticsName:a.analyticsName,onClick:()=>b.y(g,{from:a.analyticsName,for:a.subscriptionTier}),desktopStyle:{display:"inline-block",marginLeft:8,marginTop:-3}})),s()(I.Z,{style:x.captionStyle,isSmall:!0,isMultiline:!0},void 0,o)),l.createElement(F,e));return e.tooltipLabel?s()(R.Z,{placement:R.Z.Placement.Bottom,alignment:R.Z.Alignment.Center,disableTooltip:e.disableTooltip,renderTooltip:()=>e.tooltipLabel,render:e=>l.createElement("div",e,E)}):E}function F(e){return"toggle"===e.type?s()(B.Z,{on:e.isOn,disabled:e.disabled}):"dropdown"===e.type?l.createElement(A,e):"custom"===e.type?l.createElement(l.Fragment,null,e.customButton):"toggleToButton"===e.type?e.isOn?s()("div",{style:{marginTop:12}},void 0,s()(S.Z,{isLarge:!0,onClick:e.onClick,style:e.buttonStyle,disabled:e.disabled},void 0,e.buttonLabel)):s()(B.Z,{on:!1,onClick:e.onClick,disabled:e.disabled}):void(0,g.t1)(e)}function A(e){var t;window.__c={n:"Dropdown"};const{isMobile:o,title:i,upsellOptions:a,currentOption:r,options:d,info:g,onSelectOption:h,menuStyle:b}=e,f=null===(t=d.find((e=>{let{key:t}=e;return t===r})))||void 0===t?void 0:t.label,v=(0,c.yK)((e=>({button:{marginTop:12,marginBottom:4,marginRight:o?"auto":void 0,paddingLeft:o?12:8,paddingRight:o?12:8,height:o?44:28,border:o?`1px solid ${e.outlineButtonBorder}`:void 0},icon:{width:10,marginLeft:4,fill:e.lightIconColor}})),[o]),S=Boolean(a&&a.shouldUpsell)||e.disabled;return s()(T.ZP,{popupType:o?T.Z4.SlideUp:T.Z4.Popup,placementToOrigin:T.pO.Right,renderOrigin:e=>l.createElement(k.Z,n()({},e,{isLarge:!0,style:{...v.button,opacity:S?.4:1},disabled:S}),f,(0,u.i)(v.icon)),render:e=>{let t;t=o?{menuType:y.og.Modal,title:i,right:s()(m.FormattedMessage,{defaultMessage:"Done",id:"settingItem.buttonPopup.done.label"}),onClickRight:e.close}:{menuType:y.og.Popup,width:250,...b};const a=[{key:"settings-item-section",render:e=>l.createElement(x.Z,e),items:d.map((t=>{let{key:i,label:a,caption:r}=t;return{key:i,action:()=>{h(i),e.close()},render:e=>l.createElement(M.Z,n()({},e,{title:a,caption:r,shouldWrapCaption:!0,right:f===a?s()("div",{style:{width:o?16:14}},void 0,(0,p.e)()):void 0}))}}))}];if(g){const e=g.map((e=>{let{key:t,label:o}=e;return{key:t,action:()=>{},render:e=>l.createElement(Z.Z,n()({},e,{shouldWrapCaption:!0,caption:o}))}}));a.push({key:"info-item-section",render:e=>l.createElement(x.Z,n()({},e,{topBorder:!0})),items:e})}return l.createElement(w.Z,t,s()(C.Z,{type:C.i.Vertical,sections:a,initialFocus:void 0}))}})}},16436:(e,t,o)=>{o.r(t),o.d(t,{default:()=>pe});var i=o(10434),n=o.n(i),a=o(23174),s=o.n(a),l=o(67294),r=o(83355),d=o(49085),c=o(1464),p=o(98519),u=o(72126),g=o(29477),m=o(97880),h=o(5366),b=o(19719),f=o(17659),y=o(43250),v=o(87279),M=o(51811),T=o(5162),w=o(80444),Z=o(4761),C=o(84708),S=o(23063),k=o(36488),x=o(68785),B=o(78140),R=o(89728),I=o(43145),U=o(30506),P=o(33411),L=o(83785),E=o(82598),F=o(33836),A=o(480),N=o(86628),_=o(24405),O=o(82990),D=o(18514),K=o(76487),G=o(26388),V=o(74523),H=o(39849),W=o(66957),Y=o(27315),j=o(18442),z=o(50906),X=o(17652),$=o(14786),q=o(92083),Q=o(62820),J=o(73063);function ee(e){let{location:t}=e;window.__c={n:"InboxNotificationSettingsButton"};const o=(0,h.useIntl)(),i=(0,A.O7)(),a=(0,l.useCallback)((()=>{const{device:e}=i;z.FRk(i),e.isMobile?$.Z.setState({open:!0,source:$.Y.Updates}):(Q.Z.setState({...Q.Z.state,open:!1}),(0,X.rB)()?q.Z.setState({...q.Z.state,currentTab:"notifications",defaultSubtab:void 0}):q.Z.setState({...q.Z.state,currentTab:"notifications_and_settings",defaultSubtab:void 0}),q.Z.setState({...q.Z.state,open:!0}))}),[i]),r=(0,_.yK)((e=>({mobileTopBarIcon:{height:18,width:18,fill:e.regularTextColor},webUpdatesModalIcon:{width:16,height:16}})),[]);let d;switch(t){case"mobileTopBar":d=r.mobileTopBarIcon;break;case"webUpdatesModal":d=r.webUpdatesModalIcon;break;default:(0,m.t1)(t)}return s()(G.Z,{renderTooltip:()=>s()(h.FormattedMessage,{defaultMessage:"Open notifications settings",id:"updatesModal.openNotifications.tooltip"}),render:e=>l.createElement(J.Z,n()({icon:j.H,iconStyle:d,onClick:a,ariaLabel:o.formatMessage({id:"updatesModal.openNotifications.tooltipAriaLabel",defaultMessage:"Open notifications settings button"})},e))})}const te=l.memo(ee);var oe=o(79198);function ie(e){let{location:t,onClick:o}=e;window.__c={n:"InboxRefreshAllTabButton"};const i=(0,h.useIntl)(),a=(0,N.VK)((()=>Z.ZP.state.currentTab),[]),r=(0,_.yK)((e=>({mobileTopBarIcon:{height:18,width:18,fill:e.regularTextColor},webUpdatesModalIcon:{height:17,width:17}})),[]);if("allPages"!==a)return null;let d;switch(t){case"mobileTopBar":d=r.mobileTopBarIcon;break;case"webUpdatesModal":d=r.webUpdatesModalIcon;break;default:(0,m.t1)(t)}return s()(G.Z,{renderTooltip:()=>s()(h.FormattedMessage,{defaultMessage:"Refresh",id:"updatesModal.allUpdatesRefreshButton.refreshButtonDescription"}),render:e=>l.createElement(J.Z,n()({icon:oe.n,iconStyle:d,onClick:o,ariaLabel:i.formatMessage({defaultMessage:"Refresh",id:"updatesModal.allUpdatesRefreshButton.refreshButtonDescriptionAriaLabel"})},e))})}const ne=l.memo(ie);var ae=o(92955);function se(e){let{orderedTabConfigs:t,onClickRefreshAllTab:o}=e;window.__c={n:"InboxModalHeader"};const i=(0,A.Fy)(),a=(0,A.O7)(),{currentTab:r,currentTabIndex:d}=(0,N.VK)((()=>{const{currentTab:e}=Z.ZP.state,o=t.findIndex((t=>t.tab===e));return{currentTab:e,currentTabIndex:o}}),[t]),c=(0,l.useMemo)((()=>t.map(((e,t)=>{if(e.showSeparatorBefore)return t-1})).filter(m.$K)),[t]),p=(0,N.VK)((()=>K.Z.getUnreadCountForCurrentSpace().mentions>0),[]),u=(0,l.useCallback)((e=>{const o=t[e],i=null==o?void 0:o.tab;i&&r!==i&&f.G7({environment:a,newTab:i,shouldTrack:!0})}),[r,a,t]),g=(0,_.yK)((()=>({mentionsContainer:{display:"flex",alignItems:"center",justifyContent:"center",fontWeight:p?O.Z.fontWeight.medium:void 0},tabBarRightStyle:{justifyContent:"space-between"},helpButton:{marginLeft:0,...i.isMobile&&{marginTop:-1}},unreadMentionsBadge:{marginLeft:6},actionButtons:{display:"flex",justifyContent:"center",gap:6}})),[i.isMobile,p]),b=H.Z.Color.Red,v={mentions:s()("div",{style:g.mentionsContainer,className:y.I2F},void 0,s()("div",{},void 0,s()(h.FormattedMessage,{defaultMessage:"Inbox",id:"updatesModal.mentionsTab.title"})),s()(ae.Z,{type:"currentSpace",color:b,style:g.unreadMentionsBadge})),allPages:s()("div",{className:y.gjL},void 0,s()(h.FormattedMessage,{defaultMessage:"All",id:"updatesModal.allUpdatesTab.title"})),archive:s()("div",{className:y.HKr},void 0,s()(h.FormattedMessage,{defaultMessage:"Archived",id:"updatesModal.archiveTab.title"}))},M=t.map((e=>v[e.tab])),T="webUpdatesModal",w=!i.isMobile&&s()("div",{style:g.actionButtons},void 0,s()(ne,{location:T,onClick:o}),s()(F.Z,{location:T}),s()(te,{location:T})),C=l.createElement(l.Fragment,null,s()(G.Z,{render:e=>l.createElement(V.Z,n()({href:(0,D.UY)("guides.notifications"),analyticsFrom:"inbox_tabs_link",style:g.helpButton},e)),renderTooltip:()=>s()(h.FormattedMessage,{id:"updatesButton.learnMoreAboutInboxLink",defaultMessage:"Learn more about notifications"})}),w);return l.createElement(l.Fragment,null,s()(W.Z,{tabs:M,selectedIndex:d,onChange:u,separatorIndexes:c,right:C,rightStyle:g.tabBarRightStyle}),"mentions"===r&&s()(Y.Z,{}))}const le=l.memo(se);var re=o(59878);const de=[{tab:"mentions"},{tab:"archive"},{tab:"allPages",showSeparatorBefore:!0}];class ce extends r.Z{constructor(){super(...arguments),this.storeTypes={refreshCountStore:d.default.createClass(0)},this.loadingSpinner=()=>{if((0,T.Y)("supportsNativeHome"))return s()(P.Z,{show:void 0!==Z.ZP.state.loadingId,showDelay:400,showHold:0,render:e=>s()(e?x.Z:"div",{style:{width:14}})})},this.handleCloseUpdatesPopup=()=>{b.nI(this.environment),f.G7({environment:this.environment,newTab:"mentions",shouldTrack:!1})},this.handleSwipeLeft=()=>{const e=de.findIndex((e=>e.tab===Z.ZP.state.currentTab)),t=de[e+1].tab;void 0!==t&&f.G7({environment:this.environment,newTab:t,shouldTrack:!0})},this.handleSwipeRight=()=>{const e=de.findIndex((e=>e.tab===Z.ZP.state.currentTab)),t=de[e-1].tab;void 0!==t&&f.G7({environment:this.environment,newTab:t,shouldTrack:!0})},this.handleRefreshAll=()=>{const{refreshCountStore:e}=this.stores;e.setState(e.state+1)},this.handleRefreshAllThrottled=u.Ds(this.handleRefreshAll,1e3,{leading:!0})}willUnmount(){this.handleCloseUpdatesPopup()}renderComponent(){const{device:e}=this.environment;let t;const o=s()(le,{onClickRefreshAllTab:this.handleRefreshAllThrottled,orderedTabConfigs:de});if(e.isMobile){const i="mobileTopBar";t={menuType:v.og.Modal,title:s()(h.FormattedMessage,{defaultMessage:"Updates",id:"updatesModal.mobileMenu.title"}),width:this.props.format===M.EX.RenderAsPage?"100vw":void 0,renderAsPage:this.props.format===M.EX.RenderAsPage,right:[s()(ne,{onClick:this.handleRefreshAllThrottled,location:i},"InboxRefreshAllTabButton"),s()(F.Z,{location:i},"InboxFilterForUnreadButton"),s()("span",{style:{width:8}},"paddingSpan"),s()(te,{location:i},"InboxNotificationSettingsButton")],left:[this.loadingSpinner(),e.isPhone&&(0,T.Y)("supportsNativeHome")&&this.props.format===M.EX.RenderAsPage?void 0:(0,c.k)({fill:this.theme.regularTextColor,width:26,height:26})],onClickLeft:this.props.onClose,header:o,whiteBackground:!0}}else t={menuType:v.og.Popup,header:o,height:"auto"};return s()(U.Z,{onSwipeLeft:this.handleSwipeLeft,onSwipeRight:this.handleSwipeRight,render:e=>l.createElement(B.Z,n()({},t,e,{className:y.C18}),s()(I.Z,{onChange:(e,t)=>{let{offsetFromTop:o}=t;Z.n_.setState(o<=0)}}),s()(k.Z,{capture:!0,allowUndo:!0,allowEsc:!0,allowMobileAutoScroll:!0,render:()=>this.props.format===M.EX.RenderAsPage?this.renderContentAsPageWithLazyLoader():this.renderContent()}))})}renderContent(){const e=Z.ZP.state.currentTab;if("allPages"===e){const{currentSpaceStore:e,mainEditorCurrentBlockStore:t}=w.default.state;return e&&t?s()(C.Z,{spaceId:e.id,empty:()=>s()(E.Z,{message:s()(h.FormattedMessage,{defaultMessage:"Updates on pages in your workspace will appear here.",id:"updatesModal.allPagesTab.emptyPrompt"}),title:s()(h.FormattedMessage,{defaultMessage:"No new updates",id:"updatesModal.allPagesTab.emptyPromptTitle"})}),source:"notifications_tab"},`all-pages-${this.stores.refreshCountStore.state}`):null}if("mentions"===e){const e=Z.ZP.state.showOnlyUnreadNotifications;return s()(re.Z,{type:"mentions",empty:e?this.renderEmptyUnreadMentionsTab():s()(E.Z,{message:s()(h.FormattedMessage,{defaultMessage:"You'll be notified here for @mentions, page activity, requests, and page invites.",id:"updatesModal.spaceUpdatesTab.allArchivedRequests"}),title:s()(h.FormattedMessage,{defaultMessage:"You're all caught up",id:"updatesModal.spaceUpdatesTab.allArchivedTitle"})}),source:"notifications_tab",tab:"inbox"},"mentions")}if("archive"===e)return s()(re.Z,{type:"archive",empty:s()(E.Z,{message:s()(h.FormattedMessage,{defaultMessage:"Any Inbox updates you archived will show up here.",id:"updatesModal.archiveTab.emptyPrompt"}),title:s()(h.FormattedMessage,{defaultMessage:"No archived updates",id:"updatesModal.archiveTab.emptyPromptTitle"})}),source:"notifications_tab",tab:"archive"},"archive");(0,m.t1)(e)}renderContentAsPageWithLazyLoader(){return s()(L.Z,{fetch:async()=>{await g.Vs(0),await w.default.waitUntil((()=>void 0!==w.default.state.currentSpaceStore))},loading:()=>s()(l.Fragment,{}),willRender:()=>{var e;null===(e=this.environment.mobileNative)||void 0===e||e.markTransitionReady({type:"updates"})},render:()=>s()(S.Z,{isVisible:!0,enterAnimationStyle:{opacity:0},animationStyle:{opacity:1},blockRenderQueueOnEnter:!0,render:()=>this.renderContent()})})}renderEmptyUnreadMentionsTab(){return s()(E.Z,{icon:p.k,title:s()(h.FormattedMessage,{defaultMessage:"You've read everything",id:"updatesModal.spaceUpdatesTab.emptyUnreadMentionsTabTitle"}),message:s()("div",{},void 0,s()(h.FormattedMessage,{defaultMessage:"You have more notifications in your inbox.",id:"updatesModal.spaceUpdatesTab.emptyUnreadMentionsTabMessage"}),s()("div",{style:{height:12}}),s()(R.Z,{isBlue:!0,onClick:()=>{"mentions"===Z.ZP.state.currentTab&&Z.ZP.setState({...Z.ZP.state,showOnlyUnreadNotifications:!1,unreadNotificationIds:[]})}},void 0,s()(h.FormattedMessage,{defaultMessage:"See all",id:"updatesModal.spaceUpdatesTab.emptyUnreadMentionsTabButton"})))})}}ce.displayName="UpdatesPopup",ce.Format=M.EX;const pe=ce},35356:(e,t,o)=>{o.d(t,{D:()=>a});var i=o(86628),n=o(77080);function a(e){window.__c={n:"ExperimentSwitch"};const{experimentId:t,groups:o,disableExposureLogging:a}=e;return o[function(e){const{experimentId:t,disableExposureLogging:o,defaultGroup:a}=e;return(0,i.VK)((()=>n.default.getEligibleGroup({experimentId:t,defaultGroup:a??"control",disableExposureLogging:o})),[t,o,a])}({experimentId:t,disableExposureLogging:a})]}},23570:(e,t,o)=>{function i(e){return e?32:18}o.d(t,{f:()=>i})}}]);