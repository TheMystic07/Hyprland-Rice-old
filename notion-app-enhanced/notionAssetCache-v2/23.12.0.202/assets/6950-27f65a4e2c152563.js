"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[6950],{42876:(e,t,n)=>{n.d(t,{ZP:()=>K,N_:()=>T});var a=n(23174),o=n.n(a),i=n(10434),r=n.n(i),c=(n(57658),n(67294)),l=n(480),s=n(86628),u=n(24405),d=n(41892),h=n(77657),m=n(82114),g=n(36591),p=n(90199),f=n(35840),k=n(55159),v=n(72126),w=n(68626),S=n(97880),C=n(5366),y=n(54642),b=n(42631),x=n(33929),N=n(18441),B=n(80444),I=n(30874),F=n(49085),L=n(92595);class Z extends F.default{getStateForBot(e){return this.state[e]??{channels:{},fetching:!1,lastRefreshed:0}}updateStateForBot(e,t){this.setState({...this.state,[e]:{...this.getStateForBot(e),...t}})}addChannelsForBot(e,t){const n=this.getStateForBot(e);this.setState({...this.state,[e]:{...n,channels:{...n.channels,...t}}})}}const A=new Z;(0,L.exposeDebugValue)("ExternalNotificationChannelsStore",A);const E=A;var M=n(52275),V=n(68894),W=n(68785),_=n(72495),P=n(33411);const R=(0,C.defineMessages)({channelSearchPlaceholder:{id:"notificationRuleSettings.selectChannelView.searchInput.placeholder",defaultMessage:"Search…"}});function K(e){window.__c={n:"SlackSelectChannelView"};const{currentNotificationChannel:t,onNotificationChannelSelect:n,onClose:a,onNewSlackAccountAdded:i,renderMenu:m,channelFilter:p}=e,k=(0,l.O7)(),{isMobile:F}=(0,l.Fy)(),L=(0,s.VK)((()=>I.Z.completeSlackAuthentications.state),[]),Z=e.currentExternalAuthentication??v.Ps(L);c.useEffect((()=>{Z&&async function(e){const{environment:t,botId:n,spaceId:a}=e,o=E.getStateForBot(n);if(o.fetching||Date.now()-o.lastRefreshed<15e3)return;let i;E.updateStateForBot(n,{fetching:!0,lastRefreshed:Date.now()});for(;;){const e=await y.getExternalNotificationChannels(t,{botId:n,spaceId:a,cursor:i});if("success"!==e.type){console.error(e.error);break}{const t={};for(const n of e.data.channels)t[n.id]=n;if(E.addChannelsForBot(n,t),i=e.data.cursor,!i)break}}E.updateStateForBot(n,{fetching:!1})}({environment:k,botId:Z.id,spaceId:Z.space_id})}),[k,Z]);const[A,K]=c.useState(""),{loadedChannelsForAccount:z,isLoading:j}=(0,s.VK)((()=>{if(!Z)return{loadedChannelsForAccount:[],isLoading:!1};const e=E.getStateForBot(Z.id);return{loadedChannelsForAccount:Object.values(e.channels),isLoading:e.fetching}}),[Z]),q=(0,s.VK)((()=>I.Z.integrations.state.find((e=>e.id===h.nO))),[]),H=(0,s.VK)((()=>{var e;return null===(e=B.default.state.currentSpaceStore)||void 0===e?void 0:e.id}),[]),D=c.useCallback((e=>{Z&&n(e,Z),a()}),[n,Z,a]),J=(0,u.yK)((e=>({icon:{marginLeft:8,width:12,height:12,color:e.lightTextColor},container:{backgroundColor:e.popoverBackground,marginTop:12,marginBottom:6},searchIcon:{width:14,height:14,marginRight:6,flexGrow:0,flexShrink:0,color:e.regularIconColor}})),[]),$=c.useCallback((e=>{const{channel:n}=e;return{key:n.id,render:e=>c.createElement(M.Z,r()({},e,{icon:T({channel:n,styles:J.icon}),desktopIconStyle:{width:8},title:n.name,right:n.id===(null==t?void 0:t.id)&&(0,g.e)(J.icon)})),action:()=>{D(n)}}}),[D,J.icon,t]),{publicChannels:U,privateChannels:Y,personalChannels:G}=c.useMemo((()=>function(e,t){const n=[],a=[],o=[];for(const i of e)t&&!t(i)||("public"===i.type?n.push(i):"private"===i.type?a.push(i):"me"===i.type?o.push(i):(0,S.t1)(i.type));return{publicChannels:n,privateChannels:a,personalChannels:o}}(z,p)),[p,z]),Q=c.useCallback((()=>U.map((e=>({menuListItem:$({channel:e}),channelName:e.name})))),[U,$]),X=c.useCallback((()=>Y.map((e=>({menuListItem:$({channel:e}),channelName:e.name})))),[Y,$]),ee=c.useCallback((()=>G.map((e=>({menuListItem:$({channel:e}),channelName:e.name})))),[G,$]),te=c.useCallback((()=>Q().map((e=>{let{menuListItem:t,channelName:n}=e;if(O({channelName:n,query:A}))return t})).filter(S.$K)),[Q,A]),ne=c.useCallback((()=>X().map((e=>{let{menuListItem:t,channelName:n}=e;if(O({channelName:n,query:A}))return t})).filter(S.$K)),[X,A]),ae=c.useCallback((()=>ee().map((e=>{let{menuListItem:t,channelName:n}=e;if(O({channelName:n,query:A}))return t})).filter(S.$K)),[ee,A]),oe=c.useCallback((()=>{if(!Z)return[];const e=[],t=te(),n=ne(),a=ae();return a.length>0&&e.push({key:"personal-channels",render:e=>c.createElement(_.Z,r()({},e,{title:(0,N.jg)(Z).organizationName})),items:a}),t.length>0&&e.push({key:"public-channels",render:e=>c.createElement(_.Z,r()({},e,{topBorder:a.length>0,title:0===a.length&&(0,N.jg)(Z).organizationName})),items:t}),n.length>0&&e.push({key:"private-channels",render:e=>c.createElement(_.Z,r()({},e,{topBorder:t.length>0,title:0===a.length&&t.length>0&&(0,N.jg)(Z).organizationName})),items:n}),e}),[te,ne,ae,Z]);if(!Z||!q)return null;const ie=[{key:"search-input-section",items:[{key:"search-input-item",action:()=>{},render:e=>o()("div",{},void 0,c.createElement(V.ZP,r()({},e,{inputLeft:o()(V.f_,{icon:f.R}),inputRight:o()(P.Z,{show:j,showDelay:500,showHold:300,render:e=>e&&o()(W.Z,{style:{marginRight:2}})}),showClearButton:!0,placeholder:x.default.formatMessage(R.channelSearchPlaceholder),focusInitial:!F,value:A,onChange:e=>{K(e.target.value)}})))}],render:e=>c.createElement(_.Z,e)},...oe()];return t||ie.push({key:"add-another-slack-account-section",items:[{key:"add-another-slack-account-item",action:async()=>{if(!H)return;const e=await b.hM({environment:k,integration:q,spaceId:H,from:"collection_view_settings"});w.x.isFail(e)||i()},render:e=>c.createElement(M.Z,r()({},e,{icon:o()("img",{src:d.Z.images.externalIntegrations.slackIconPng,style:{width:18,height:"auto"}}),title:o()(C.FormattedMessage,{id:"notificationRuleSettings.selectChannelView.setupAnotherSlackAccount.label",defaultMessage:"Add another Slack account"})}))}],render:e=>c.createElement(_.Z,r()({},e,{topBorder:!0}))}),c.createElement(c.Fragment,null,m(ie))}function O(e){const{channelName:t,query:n}=e;return 0===n.length||t.toLocaleLowerCase().indexOf(n.trim().toLocaleLowerCase())>=0}function T(e){const{channel:t,styles:n}=e;return"private"===t.type?(0,p.b)(n):"me"===t.type?(0,m.p)(n):(0,k.J)(n)}},93364:(e,t,n)=>{n.d(t,{U:()=>B});var a=n(10434),o=n.n(a),i=n(23174),r=n.n(i),c=(n(30541),n(57658),n(67294)),l=n(480),s=n(86628),u=n(24405),d=n(41892),h=n(77657),m=n(5257),g=n(35840),p=n(5366),f=n(68626),k=n(42631),v=n(33929),w=n(18441),S=n(80444),C=n(30874),y=n(52275),b=n(68894),x=n(72495);const N=(0,p.defineMessages)({workspaceSearchPlaceholder:{id:"notificationRuleSettings.selectWorkspaceView.searchInput.placeholder",defaultMessage:"Search…"}});function B(e){window.__c={n:"SlackSelectWorkspaceView"};const{onWorkspaceSelect:t,renderMenu:n,workspaceFilter:a,onNewSlackAccountAdded:i}=e,B=(0,l.O7)(),{isMobile:I}=(0,l.Fy)(),F=(0,s.VK)((()=>{var e;return null===(e=S.default.state.currentSpaceStore)||void 0===e?void 0:e.id}),[]),L=(0,s.VK)((()=>(0,w.P9)(C.Z.completeSlackAuthentications.state,a)),[a]),Z=(0,s.VK)((()=>C.Z.integrations.state.find((e=>e.id===h.nO))),[]),[A,E]=c.useState(""),M=(0,u.yK)((e=>({chevronRight:{width:12,height:"auto",color:e.lightIconColor}})),[]);if(!Z)return null;const V=Object.entries((0,w.YJ)(L,A)).map(((e,n)=>{let[a,i]=e;return{key:a,items:i.map((e=>{let{workspaceName:n,externalAuthentication:a}=e;return{key:a.id,action:()=>{t(a)},render:e=>c.createElement(y.Z,o()({},e,{title:n??r()(p.FormattedMessage,{id:"notificationRuleSettings.selectWorkspace.untitledWorkspace",defaultMessage:"Slack workspace"}),right:(0,m.o)(M.chevronRight)}))}})),render:e=>c.createElement(x.Z,o()({},e,{title:a,topBorder:0!==n}))}}));return V.unshift({key:"search-input-section",items:[{key:"search-input-item",action:()=>{},render:e=>r()("div",{},void 0,c.createElement(b.ZP,o()({},e,{inputLeft:r()(b.f_,{icon:g.R}),showClearButton:!0,placeholder:v.default.formatMessage(N.workspaceSearchPlaceholder),focus:!I||void 0,value:A,onChange:e=>{E(e.target.value)}})))}],render:e=>c.createElement(x.Z,e)}),V.push({key:"add-another-slack-account-section",items:[{key:"add-another-slack-account-item",action:async()=>{if(!F)return;const e=await k.hM({environment:B,integration:Z,spaceId:F,from:"collection_view_settings"});f.x.isFail(e)||e.value.externalAuthentication&&(t(e.value.externalAuthentication),null==i||i())},render:e=>c.createElement(y.Z,o()({},e,{icon:r()("img",{src:d.Z.images.externalIntegrations.slackIconPng,style:{width:18,height:"auto"}}),title:r()(p.FormattedMessage,{id:"notificationRuleSettings.selectWorkspaceView.setupAnotherSlackAccount.label",defaultMessage:"Add another Slack account"})}))}],render:e=>c.createElement(x.Z,o()({},e,{topBorder:!0}))}),c.createElement(c.Fragment,null,n(V))}},18441:(e,t,n)=>{n.d(t,{P9:()=>l,YJ:()=>s,jc:()=>c,jg:()=>r});n(57658);var a=n(77657),o=n(59753),i=n(32161);function r(e){if(e.integration_id!==a.nO)throw"Cannot render account for integration.";const t=/(.+) - (.+)/.exec(e.account_name);if(!t)return{accountName:e.account_name};const[,n,o]=t;return{organizationName:n,accountName:o}}function c(e){return o.kk.fromValue(i.P,e).getSlackWorkspaceId()}function l(e,t){return t?e.filter((e=>{const n=c(e);return!!n&&t(n)})):e}function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const n={};for(const a of e){const{accountName:e,organizationName:o}=r(a);u({query:t,accountName:e,organizationName:o})&&(n[e]||(n[e]=[]),n[e].push({externalAuthentication:a,workspaceName:o}))}return n}function u(e){const{accountName:t,organizationName:n,query:a}=e;if(0===a.length)return!0;const o=t.toLocaleLowerCase().indexOf(a.trim().toLocaleLowerCase())>=0,i=!!n&&n.toLocaleLowerCase().indexOf(a.trim().toLocaleLowerCase())>=0;return o||i}},24457:(e,t,n)=>{n.d(t,{F:()=>c,U:()=>r});var a=n(480),o=n(86628),i=n(87279);function r(e){return e.device.isPhone||"actionSheet"===e.tabletBehavior&&e.device.isTablet?{menuType:i.og.ActionSheet}:{menuType:i.og.Popup,maxHeight:e.maxHeight,maxWidth:e.maxWidth,paddingTop:e.paddingTop,paddingBottom:e.paddingBottom,width:e.width,minWidth:e.minWidth}}function c(e){const t=(0,a.Fy)();return(0,o.VK)((()=>r({device:t,maxHeight:null==e?void 0:e.maxHeight,maxWidth:null==e?void 0:e.maxWidth,paddingTop:null==e?void 0:e.paddingTop,paddingBottom:null==e?void 0:e.paddingBottom,width:null==e?void 0:e.width,minWidth:null==e?void 0:e.minWidth,tabletBehavior:null==e?void 0:e.tabletBehavior})),[t,null==e?void 0:e.maxHeight,null==e?void 0:e.maxWidth,null==e?void 0:e.paddingTop,null==e?void 0:e.paddingBottom,null==e?void 0:e.width,null==e?void 0:e.minWidth,null==e?void 0:e.tabletBehavior])}},82114:(e,t,n)=>{n.d(t,{Q:()=>r,p:()=>c});var a=n(23174),o=n.n(a),i=(n(67294),n(45238));const r=o()("path",{d:"M.911 8.034c0 4.505 3.049 7.24 7.246 7.24 1.135 0 2.215-.158 2.885-.376.472-.15.622-.397.622-.65a.44.44 0 00-.451-.444 1.3 1.3 0 00-.321.048c-.834.205-1.552.341-2.516.341-3.74 0-6.29-2.255-6.29-6.118 0-3.698 2.407-6.275 6.03-6.275 3.206 0 5.886 1.975 5.886 5.523 0 2.072-.697 3.466-1.825 3.466-.752 0-1.176-.437-1.176-1.183V4.972c0-.37-.205-.595-.554-.595-.341 0-.553.226-.553.595v.779h-.062c-.349-.84-1.203-1.374-2.222-1.374-1.77 0-3.014 1.51-3.014 3.678 0 2.187 1.237 3.712 3.042 3.712 1.06 0 1.88-.575 2.276-1.545h.062c.13.963.943 1.551 2.023 1.551 1.907 0 3.09-1.873 3.09-4.498 0-3.971-2.92-6.548-6.96-6.548C3.886.727.912 3.632.912 8.034zm6.911 2.652c-1.223 0-2.003-1.018-2.003-2.638 0-1.593.786-2.611 2.01-2.611 1.258 0 2.05.998 2.05 2.584 0 1.62-.813 2.665-2.057 2.665z"}),c=(0,i.I)("at",{viewBox:"0 0 16 16",svg:r})}}]);