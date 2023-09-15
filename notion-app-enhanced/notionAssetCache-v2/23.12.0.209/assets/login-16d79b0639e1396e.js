"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[4535],{1412:(e,t,o)=>{o.r(t),o.d(t,{default:()=>E});var i=o(23174),n=o.n(i),s=o(67294),r=o(83355),a=o(82990),d=o(5366),l=o(95477),g=o(51),c=o(33759),m=o(30278),u=o(83941),h=o(27821);const p=20;function f(e,t){switch(t){case"xl":return(0,h.z)(e,"maxWidth","small")?60:(0,h.z)(e,"maxWidth","giant")?80:160;case"l":return(0,h.z)(e,"maxWidth","small")?60:(0,h.z)(e,"maxWidth","giant")?80:120;case"m":return(0,h.z)(e,"maxWidth","giant")?40:60;case"s":return 40;case"xs":return 20;default:return 0}}function y(e,t){const o=t?f(e,t):0;return{marginTop:o,marginBottom:o}}const v={display:"flex",flexDirection:"column",alignItems:"center"};function S(e){return(0,h.z)(e,"maxWidth","small")?p:(0,h.z)(e,"minWidth","small")&&(0,h.z)(e,"maxWidth","large")?40:60}const M=function(e){return n()("div",{style:v},void 0,e.children)};var C=o(67219),b=o(480),w=o(86628),k=o(24405),x=o(43250);class L extends r.Z{renderComponent(){return n()("div",{className:x.Quo,id:this.props.name})}}L.displayName="FrontAnalyticsScrollPoint";const A=L;var I=o(8848);function T(e){return n()("div",{style:{height:1,background:I.ZP.frontBorder,...e.style}})}var P=o(25476);function Z(e){window.__c={n:"FrontSection"};const t=(0,b.O7)(),o=(0,w.VK)((()=>({xPadding:S(t),marginStyle:y(t,e.marginSize)})),[t,e.marginSize]),i=(0,k.yK)((()=>({section:{paddingLeft:o.xPadding,paddingRight:o.xPadding,width:"100%",margin:"0 auto",overflow:e.overflowHidden?"hidden":"visible",...o.marginStyle,...e.style},inner:{width:"100%",borderRadius:3},divider:{maxWidth:P.P.l,margin:"0 auto"}})),[o.marginStyle,o.xPadding,e.overflowHidden,e.style]);return n()("section",{style:i.section},void 0,e.hasBorderTop&&n()("div",{style:i.divider},void 0,n()(T,{})),n()("div",{style:i.inner},void 0,e.analyticsName&&n()(A,{name:e.analyticsName}),n()(P.Z,{size:e.limit},void 0,e.children)))}var F=o(12337),B=o(23376),N=o(12981),_=o(43116);function R(e){window.__c={n:"LoginPageFromTemplate"};const{loginStore:t,loginPermissionsStore:o,templateName:i,templateImage:s}=e,r=(0,k.yK)((e=>({wrapper:{marginTop:"12vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},twoColumnContainer:{display:"flex",alignItems:"center"},leftColumn:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",maxWidth:320},titleStyle:{fontSize:36,fontWeight:a.Z.fontWeight.bold,marginBottom:24,textAlign:"center",lineHeight:1.1,maxWidth:"100%"},loginActionStyle:{width:"100%",maxWidth:320},screenshotContainer:{marginLeft:"80px"},screenshot:{boxShadow:e.largeLightBoxShadow,borderRadius:"6px",overflow:"hidden",maxWidth:"650px"},loginDisclaimer:{width:"100%",marginTop:"20px"}})),[]);return n()("div",{style:r.wrapper},void 0,n()("div",{style:r.twoColumnContainer},void 0,n()("div",{style:r.leftColumn},void 0,n()("div",{style:r.titleStyle},void 0,n()(d.FormattedMessage,{id:"loginPage.title.fromTemplate",defaultMessage:"Log in to get this template",values:{templateName:i}})),n()(B.Z,{loginStore:t,loginPermissionsStore:o,emailLabelType:"email",emailInputAutoFocus:!0,emailPasscodePlaceholderType:"paste_code",style:r.loginActionStyle,isSignup:!1,showMobileLayout:!1,showAIVersion:!1,from:"frontLoginPage",disableDisclaimer:!0}),n()(_.E,{showMobileLayout:!1,showAIVersion:!1,showInvitationVersion:!1,style:r.loginDisclaimer})),n()("div",{style:r.screenshotContainer},void 0,n()("div",{style:r.screenshot},void 0,n()(N.Z,{src:s,style:{width:"100%"}})))))}var V=o(49245),W=o(9045);class U extends r.Z{constructor(){super(...arguments),this.storeTypes={loginPermissionsStore:m.Z},this.productType=void 0}willMount(e){super.willMount(e);l.default.isAdminMode&&U.forceAdminSamlLoginEnvironments.includes("production")?c.Z.setState({...c.Z.state,loginType:"saml"}):"email"===c.Z.state.loginType&&this.environment.device.isMobileBrowser&&!this.environment.device.isBannedGoogleSSOUserAgent&&c.Z.setState({...c.Z.state,loginType:"google"})}renderComponent(){var e;const t=this.props.isSignup?"signup":"login",{publicPageData:o}=g.Z.state,{device:i,WindowSizeStore:n}=this.environment,s=i.isMobile||i.isMobileBrowser,r=s||n.state.width<852,a="ai"===(null===(e=c.Z.getState())||void 0===e?void 0:e.productType)&&this.props.isSignup;return this.renderMFALoginPage({analyticsName:t,showAIVersion:a,publicPageData:o,showMobileLayout:r,isMobile:s})}renderMFALoginPage(e){let{analyticsName:t,showAIVersion:o,publicPageData:i,showMobileLayout:r,isMobile:a}=e;const d=void 0!==i,l=null==i?void 0:i.spaceName;return n()(C.Z,{hideNotificationBanner:!0,hideNavItems:!0,hideFooter:!0,analyticsName:t,showAIVersion:o},void 0,n()("div",{style:this.props.style?this.props.style:U.columnStyle},void 0,n()(Z,{limit:"l"},void 0,n()(M,{align:"center"},void 0,c.Z.isMfa()?n()(V.Z,{loginStore:c.Z}):!r&&void 0!==(null==i?void 0:i.template)&&(0,u.a)()?n()(R,{loginStore:c.Z,loginPermissionsStore:this.stores.loginPermissionsStore,templateName:i.template.name,templateImage:i.template.imageUrl}):s.createElement(s.Fragment,null,i&&n()("div",{style:this.getIconStyle(a)},void 0,n()(F.Z,{type:F.Z.Type.NoAccess,publicPageData:i})),n()("div",{style:this.getTitleStyle({showMobileLayout:r,showAIVersion:o,hasPublicPageData:d})},void 0,this.renderTitle({showAIVersion:o,isMobile:a,spaceName:l})),n()(B.Z,{loginStore:c.Z,loginPermissionsStore:this.stores.loginPermissionsStore,emailLabelType:!a&&this.props.isSignup?"work_email":"email",emailInputAutoFocus:!0,emailPasscodePlaceholderType:"paste_code",style:this.getLoginActionStyle(),isSignup:this.props.isSignup,showMobileLayout:r,showAIVersion:o,from:"frontLoginPage"}))))))}renderReferringMessage(e){switch(e){case"notion_academy":return n()(d.FormattedMessage,{id:"signupPage.title.fromSourceNotionAcademy",defaultMessage:"Log in to view this lesson"});case"notion_template_gallery":return n()(d.FormattedMessage,{id:"signupPage.title.fromSourceNotionTemplateGallery",defaultMessage:"Log in to duplicate this template"})}}renderTitle(e){const{showAIVersion:t,spaceName:o,isMobile:i}=e,s=new URLSearchParams(window.location.search),r=!0===this.props.isSignup&&!0===i&&s.get("try_notion_cta");if(this.props.isSignup)return o?n()(d.FormattedMessage,{id:"signupPage.titleForSpace",defaultMessage:"Welcome to {company} on Notion",values:{company:o}}):"mobile"===r?n()(d.FormattedMessage,{id:"signupPage.title.tryNotionMobileCTA",defaultMessage:"Sign up to create a Notion page"}):t?n()("div",{},void 0,n()(d.FormattedMessage,{id:"signupPage.title.showAIVersion1",defaultMessage:"Sign up to join the "}),n()("span",{style:{color:"#CA59FF"}},void 0,n()(d.FormattedMessage,{id:"signupPage.title.showAIVersion2",defaultMessage:"Notion AI"})),n()(d.FormattedMessage,{id:"signupPage.title.showAIVersion3",defaultMessage:" waitlist"})):n()(W.Z,{});{const e=s.get("from");return l.default.isAdminMode?"Log In (Admin Mode)":e?this.renderReferringMessage(e):n()(d.FormattedMessage,{id:"loginPage.title",defaultMessage:"Log in"})}}getIconStyle(e){return{marginTop:e?"20vh":"12vh"}}getTitleStyle(e){let t="12vh";e.showMobileLayout&&e.showAIVersion&&(t="20vh");let o=50;return e.showAIVersion&&(o=40),e.showMobileLayout&&(o=34),{...e.hasPublicPageData?{fontSize:e.showMobileLayout?26:36}:{fontSize:o,marginTop:t},fontWeight:a.Z.fontWeight.bold,marginBottom:24,textAlign:"center",lineHeight:1.1,maxWidth:380}}getLoginActionStyle(){return{width:"100%",maxWidth:320,marginBottom:"16vh"}}}U.displayName="FrontLoginPage",U.forceAdminSamlLoginEnvironments=["development","production"],U.columnStyle={display:"flex",flexDirection:"row",width:"100%"};const E=(0,d.injectIntl)(U)},20243:(e,t,o)=>{o.r(t),o.d(t,{default:()=>L});var i=o(10434),n=o.n(i),s=o(23174),r=o.n(s),a=o(30120),d=o(67294),l=o(83355),g=o(70954),c=o(89101),m=o(82990),u=o(5366),h=o(75018),p=o(39634),f=o(34700),y=o(33929),v=o(30278),S=o(85974),M=o(16354),C=o(62385),b=o(36360),w=o(23376),k=o(49245);class x extends l.Z{constructor(){super(...arguments),this.storeTypes={loginStore:S.Z,loginPermissionsStore:v.Z},this.openIntercom=()=>{p.j({environment:this.environment,from:"desktop_login"})}}didMount(){this.environment.currentUser.isLoggedIn()&&h.navigate({environment:this.environment,url:c._j.root,redirect:!0})}renderComponent(){const{device:e}=this.environment,{loginStore:t}=this.stores,o=e.isMac?r()(u.FormattedMessage,{id:"desktopLogin.welcomeMessage.mac",defaultMessage:"Welcome to Notion",values:{isMacApp:e.isMac}}):r()(u.FormattedMessage,{id:"desktopLogin.welcomeMessage.windows",defaultMessage:"Welcome to Notion",values:{isMacApp:e.isMac}});return t.isMfa()?r()("div",{style:x.style},void 0,r()(k.Z,{loginStore:t}),this.renderFooter()):[r()("div",{style:{width:"100%",height:"45px",...(0,f.X)(this.environment.device.isElectronMac,!0)}}),r()(b.Z,{title:y.default.getIntl().formatMessage({defaultMessage:"Log in",id:"loginDesktopPage.title"})},"title"),r()("div",{style:x.style},void 0,r()("div",{style:{display:"flex",width:440}},void 0,(0,g.C)({width:64,height:64,display:"block",flexGrow:0,flexShrink:0,marginTop:4}),r()("div",{style:{flexGrow:1,marginLeft:24,lineHeight:1.4}},void 0,r()("div",{style:{fontWeight:m.Z.fontWeight.semibold,fontSize:21}},void 0,o),r()("div",{style:{fontSize:18}},void 0,r()(u.FormattedMessage,{id:"desktopLogin.loginOrSignupToSyncMessage",defaultMessage:"Log in to sync your content."})))),this.renderLoginAction(),this.renderFooter())]}renderLoginAction(){return d.createElement(w.Z,n()({style:{width:320,marginTop:24},emailPasscodePlaceholderType:"enter_code",emailLabelType:"email",emailInputAutoFocus:!0,from:"LoginDesktop"},this.stores))}renderFooter(){return r()("div",{style:x.footerStyle},void 0,r()(M.Z,{onClick:this.openIntercom},void 0,r()(C.Z,{},void 0,r()(u.FormattedMessage,{id:"desktopLogin.footer.helpCenterLink",defaultMessage:"Need help?"}))),r()(M.Z,{style:{marginLeft:4},href:c._j.termsAndPrivacy,external:!0},void 0,r()(C.Z,{},void 0,r()(u.FormattedMessage,{id:"desktopLogin.footer.privacyAndTermsLink",defaultMessage:"Privacy & Terms"}))),r()(C.Z,{style:{marginLeft:4},disabled:!0},void 0,"© ",a.ou.now().year," ","Notion Labs, Inc."))}}x.displayName="LoginDesktop",x.style={width:"100vw",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",userSelect:"none",WebkitUserSelect:"none"},x.footerStyle={display:"flex",alignItems:"center",justifyContent:"center",lineHeight:1.2,position:"fixed",bottom:16,left:0,right:0};const L=x},58891:(e,t,o)=>{o.r(t),o.d(t,{default:()=>Z});var i=o(10434),n=o.n(i),s=o(23174),r=o.n(s),a=o(30120),d=o(67294),l=o(83355),g=o(8848),c=o(39186),m=o(60651),u=o(70954),h=o(89101),p=o(82990),f=o(5366),y=o(32603),v=o(75018),S=o(39634),M=o(34859),C=o(30278),b=o(85974),w=o(16354),k=o(89728),x=o(53336),L=o(62385),A=o(23376),I=o(49245);const T={width:44,height:44,flexGrow:0,flexShrink:0,marginTop:64,marginBottom:20};class P extends l.Z{constructor(){super(...arguments),this.storeTypes={loginStore:b.Z,loginPermissionsStore:C.Z},this.handleReset=e=>{this.stores.loginStore.setState({loginType:"google",email:"",password:""})},this.openIntercom=()=>{S.j({environment:this.environment,from:"mobile_login"})}}willMount(e){super.willMount(e),"email"===this.stores.loginStore.state.loginType&&this.stores.loginStore.setState({...this.stores.loginStore.state,loginType:"google"}),y.setInitialRenderCompleted()}didMount(){this.environment.currentUser.isLoggedIn()&&v.navigate({environment:this.environment,url:h._j.root,redirect:!0})}renderComponent(){const{loginStore:e}=this.stores,t=e.isEmail()||e.isPassword()||e.isMfa();return r()(x.Z,{style:P.scrollerStyle,type:M.Z.Y},void 0,r()("div",{style:this.getScrollContainerStyle()},void 0,r()(k.Z,{isGray:!0,onClick:this.handleReset,icon:c.G,style:{marginTop:36,marginBottom:12,display:t?"flex":" none"}},void 0,r()(f.FormattedMessage,{defaultMessage:"Go back",id:"loginMobileNative.goBackButton.label"})),"light"===this.theme.mode?(0,m.h)({...T,display:t?"none":"block"}):(0,u.C)({...T,display:t?"none":"block"}),r()("div",{style:{lineHeight:1.4,fontSize:18,color:g.ZP.black,display:t?"none":" block"}},void 0,r()("div",{style:{fontWeight:p.Z.fontWeight.bold,marginBottom:16,color:this.theme.regularTextColor}},void 0,r()(f.FormattedMessage,{defaultMessage:"Welcome to Notion! 👋",id:"loginMobileNative.welcomeMessage"})),r()("div",{style:{marginBottom:20,color:this.theme.regularTextColor}},void 0,r()(f.FormattedMessage,{defaultMessage:"Notion is a collaborative tool for <mediumfont>notes</mediumfont>, <mediumfont>tasks</mediumfont>, and <mediumfont>wikis</mediumfont>",values:{mediumfont:e=>r()("span",{style:{fontWeight:p.Z.fontWeight.medium}},void 0,e)},id:"loginMobileNative.descriptionOfNotion.message"})," ","✍️")),e.isMfa()?r()(I.Z,{loginStore:e}):d.createElement(A.Z,n()({style:{marginBottom:24,alignItems:"flex-start"},captionStyle:{textAlign:"left"},emailPasswordSentPromptStyle:{fontSize:13},emailPasscodePlaceholderType:"enter_code",emailLabelType:"email",emailInputAutoFocus:!0,showMobileLayout:!0,from:"loginMobileNative"},this.stores)),this.renderFooter()))}renderFooter(){return r()("div",{style:P.footerStyle},void 0,r()("div",{style:{display:"flex",alignItems:"center",lineHeight:1.2}},void 0,r()(w.Z,{href:h._j.termsAndPrivacy,external:!0},void 0,r()(L.Z,{},void 0,r()(f.FormattedMessage,{defaultMessage:"Privacy & terms",id:"loginMobileNative.footer.privacyAndTermsButton.label"}))),r()(L.Z,{style:{marginLeft:4},onClick:this.openIntercom},void 0,r()(f.FormattedMessage,{defaultMessage:"Need help?",id:"loginMobileNative.footer.helpButton.label"}))),r()(L.Z,{style:{marginTop:12},disabled:!0},void 0,"© ",a.ou.now().year," ","Notion Labs, Inc."))}getScrollContainerStyle(){const{WindowSizeStore:e}=this.environment;return{width:"100%",maxWidth:414,marginLeft:"auto",marginRight:"auto",paddingTop:e.state.paddingTopCSS,paddingLeft:e.getSafePaddingLeftCSS(34),paddingRight:e.getSafePaddingRightCSS(34)}}}P.displayName="LoginMobileNative",P.footerStyle={marginTop:36,paddingBottom:48,marginLeft:-4},P.scrollerStyle={height:"100%",width:"100%"};const Z=P},48787:(e,t,o)=>{o.r(t),o.d(t,{default:()=>u});var i=o(23174),n=o.n(i),s=(o(67294),o(480)),r=o(86628),a=o(24405),d=o(72126),l=o(82990),g=o(3386),c=o(23376),m=o(49245);function u(e){let{loginStore:t,title:o,description:i,isSignup:a,redirectURL:l,disableLoginLink:u,titleAriaId:y,descriptionAriaId:v}=e;window.__c={n:"LoginModalContent"};const S=(0,s.O7)(),M=(0,r.VK)((()=>{if(t.isMfa())return t.state.settings}),[t]);return n()("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",userSelect:"none",WebkitUserSelect:"none",height:"100%"}},void 0,!M&&!S.device.isMobile&&n()(h,{title:o,titleAriaId:y}),!M&&i&&n()(p,{description:i,descriptionAriaId:v}),n()(g.Z,{capture:!0,onBackspace:d.yR,onLeft:d.yR,onRight:d.yR,onSelectAll:d.yR,onRedo:d.yR,onUndo:d.yR,onCut:d.yR,onCopy:d.yR,onPaste:d.yR,onKeypress:d.yR,onDelete:d.yR,onTab:d.yR},void 0,M&&M.length>0?n()(m.Z,{loginStore:t}):n()(c.Z,{loginStore:t,style:{width:320,marginTop:24,marginBottom:64,...f(S)},isSignup:a,emailPasscodePlaceholderType:"enter_code",emailLabelType:"email",emailInputAutoFocus:!0,disableDisclaimer:!0,redirectURL:l,disableLoginLink:u,from:"loginModal"})))}function h(e){let{title:t,titleAriaId:o}=e;window.__c={n:"Title"};const i=(0,s.O7)();return n()("div",{id:o,style:{fontSize:28,fontWeight:l.Z.fontWeight.semibold,marginTop:90,textAlign:"center",lineHeight:1.1,...f(i)}},void 0,t)}function p(e){let{description:t,descriptionAriaId:o}=e;window.__c={n:"Description"};const i=(0,a.Fg)(),r=(0,s.O7)();return n()("div",{id:o,style:{fontSize:14,color:i.mediumTextColor,width:350,marginTop:12,marginBottom:20,textAlign:"center",lineHeight:1.3,...f(r)}},void 0,t)}function f(e){return e.device.isMobile?{maxWidth:343}:{}}},46420:(e,t,o)=>{o.r(t),o.d(t,{default:()=>p});var i=o(23174),n=o.n(i),s=(o(67294),o(83355)),r=o(9852),a=o(5366),d=o(33759),l=o(30278),g=o(36360),c=o(1412),m=o(20243),u=o(58891);class h extends s.Z{constructor(){super(...arguments),this.storeTypes={loginPermissionsStore:l.Z}}willMount(e){super.willMount(e),e.email&&d.Z.setState({...d.Z.state,email:e.email}),e.redirectURL&&(0,r.setPostLoginRedirect)(e.redirectURL)}didMount(){super.didMount()}renderComponent(){const{device:e}=this.environment,{loginPermissionsStore:t}=this.stores,{intl:o}=this.props;if(e.isElectron)return n()(m.default,{loginStore:d.Z,loginPermissionsStore:t});if(e.isMobileNative)return n()(u.default,{loginStore:d.Z,loginPermissionsStore:t});{const e=`Notion - ${this.props.isSignup?o.formatMessage({defaultMessage:"Sign up",id:"signupPage.pageTitle"}):o.formatMessage({defaultMessage:"Log in",id:"loginPage.pageTitle"})}`;return n()(g.Z,{title:e},void 0,n()(c.default,{isSignup:this.props.isSignup}))}}}h.displayName="LoginPage";const p=(0,a.injectIntl)(h)},49245:(e,t,o)=>{o.d(t,{Z:()=>te});var i=o(23174),n=o.n(i),s=o(67294),r=o(480),a=o(86628),d=o(23048),l=o(68785),g=o(12177),c=o(49085),m=o(97880),u=o(49682),h=o(16010);class p extends c.default{getInitialState(){return{step:"loginUninitialized"}}}class f extends h.o{constructor(e,t){super(e,"login"),this.service=void 0,this.service=t}loginShowChoices(){"loginComplete"!==this.getCurrentStep().step&&(this.store.setState({step:"loginLoadSettings"}),this.doLoadSettings().catch(this.handleUnexpectedError))}loginUseMethod(e){let{mfaSettingId:t}=e;const o=this.checkStep("loginChooseMethod");if(!o)return;const{settings:i}=o,n=i.find((e=>e.mfaSettingId===t));if(n)switch(n.mfaMethod){case"totp":return this.loginChooseTOTP({mfaSettingId:t,friendlyName:n.friendlyName});case"sms":return this.loginChooseSMS({mfaSettingId:t,partialPhoneNumber:n.phoneNumber});case"backup_code":return this.loginChooseBackupCode({mfaSettingId:t});default:throw(0,m.t1)(n)}}loginChooseTOTP(e){let{mfaSettingId:t,friendlyName:o}=e;this.checkStep("loginChooseMethod")&&this.store.setState({isLoading:!1,mfaSettingId:t,friendlyName:o,step:"loginTOTP"})}loginChooseSMS(e){let{mfaSettingId:t,partialPhoneNumber:o}=e;this.checkStep("loginChooseMethod")&&(this.store.setState({isLoading:!0,mfaSettingId:t,partialPhoneNumber:o,step:"loginSMS",resentAt:0,resentStatus:"not-resent"}),this.doSendSMS({mfaSettingId:t}).catch(this.handleUnexpectedError))}loginChooseBackupCode(e){let{mfaSettingId:t}=e;this.checkStep("loginChooseMethod")&&this.store.setState({isLoading:!1,mfaSettingId:t,step:"loginBackupCode"})}loginVerifyBackupCode(e){let{mfaSettingId:t,code:o,onComplete:i}=e;const n=this.checkStep("loginBackupCode");n&&(this.store.setState({...n,isLoading:!0}),this.doVerifyBackupCode({code:o,onComplete:i}).catch(this.handleUnexpectedError))}loginVerifyCode(e){let{mfaMethod:t,mfaSettingId:o,code:i,onComplete:n}=e;const s=y(t),r=this.checkStep(s);r&&(this.store.setState({...r,isLoading:!0}),this.doVerifyCode({mfaMethod:t,mfaSettingId:o,code:i,onComplete:n}).catch(this.handleUnexpectedError))}loginResendSMS(e){const t=this.checkStep("loginSMS");t&&(this.store.setState({...t,isLoading:!0,resentStatus:"resending"}),this.doSendSMS({mfaSettingId:e}).catch(this.handleUnexpectedError))}exit(){this.store.setState({step:"loginUninitialized"})}async doLoadSettings(){const e=await this.withStep("loginLoadSettings",(()=>this.service.loadSettings()));if(!e)return;const{result:t}=e;this.store.setState({step:"loginChooseMethod",settings:t.settings})}async doVerifyBackupCode(e){let{code:t,onComplete:o}=e;const i=await this.withStep("loginBackupCode",(e=>this.service.verifyBackupCode(t)));if(!i)return;const{result:n,state:s}=i;switch(n.status){case"match":n.recovery?(this.store.setState({step:"loginComplete"}),o()):this.store.setState({step:"loginAlertBackupCode",remainingCodes:n.remainingCodes});break;case"error":this.store.setState({...s,error:u.Qj.unexpectedError,isLoading:!1});break;case"incorrect":this.store.setState({...s,error:(0,u.Q3)("backup_code"),isLoading:!1});break;default:return(0,m.t1)(n)}}async doVerifyCode(e){let{mfaMethod:t,mfaSettingId:o,code:i,onComplete:n}=e;const s=y(t),r=await this.withStep(s,(()=>{switch(t){case"totp":return this.service.verifyTOTP(o,i);case"sms":return this.service.verifySMS(o,i);default:(0,m.t1)(t)}}));if(!r)return;const{result:a,state:d}=r;switch(a.status){case"match":this.store.setState({step:"loginComplete"}),n();break;case"error":this.store.setState({...d,error:u.Qj.unexpectedError,isLoading:!1});break;case"incorrect":this.store.setState({...d,error:(0,u.Q3)(t),isLoading:!1});break;default:return(0,m.t1)(a.status)}}async doSendSMS(e){let{mfaSettingId:t}=e;const o=await this.withStep("loginSMS",(e=>this.service.sendSMS(t)));if(!o)return;const{state:i}=o,{resentStatus:n,resentAt:s}="not-resent"===i.resentStatus?{resentStatus:"not-resent",resentAt:0}:{resentStatus:"resent",resentAt:Date.now()};this.store.setState({...i,step:"loginSMS",isLoading:!1,resentStatus:n,resentAt:s})}}function y(e){return"totp"===e?"loginTOTP":"sms"===e?"loginSMS":(0,m.t1)(e)}var v=o(5366),S=o(82990),M=o(457),C=o(10434),b=o.n(C),w=o(39693),k=o.n(w),x=o(24405),L=o(8848),A=o(18514),I=o(42922),T=o(46600);function P(e){return(0,x.EM)({container:{position:"relative",width:324,padding:16},title:{fontWeight:S.Z.fontWeight.semibold,fontSize:20,lineHeight:1.2,color:e.regularTextColor,marginBottom:16,marginLeft:6,marginRight:6,textAlign:"center"},error:{color:L.ZP.red,width:"100%",marginBottom:10,textAlign:"center",fontSize:S.Z.fontSize.UISmall.desktop},header:{fontWeight:S.Z.fontWeight.regular,fontSize:S.Z.fontSize.UIRegular.desktop,color:e.lightTextColor,textAlign:"center",marginBottom:18},primaryActionButton:{width:"100%",margin:"12px auto 0",marginBottom:"12px",height:36},hiddenButton:{display:"none"}})}const Z=function(e){let{primaryAction:t,secondaryActions:o,title:i,header:a,children:d,errorMessage:l}=e;window.__c={n:"MFALoginPrompt"};const g=(0,x.yK)(P,[]),c=(0,r.Fy)(),{isMobileNative:m}=c,u=(0,s.useMemo)((()=>t?n()(I.Z,{style:g.primaryActionButton,isLarge:!0,onClick:t.onClick,disabled:t.disabled,isRed:t.isRed},void 0,t.text):null),[t,g]),h=(0,A.UY)("guides.mfa"),p=(0,s.useMemo)((()=>k()([...o||[],{text:n()(v.FormattedMessage,m?{id:"login.mfa.mfaPrompt.needHelp.mobileNative",defaultMessage:"Need help with 2-step verification?"}:{id:"login.mfa.mfaPrompt.needHelp",defaultMessage:"Need help?"}),type:"link",view:"plain",href:h,isExternal:!0}]).map(((e,t)=>s.createElement(T.Z,b()({},e,{key:t}))))),[o,h,m]),f=l?n()("div",{style:g.error},void 0,l):void 0,y=(0,s.useCallback)((e=>{e.preventDefault(),t&&!t.disabled&&t.onClick()}),[t]);return n()("form",{style:g.container,onSubmit:y},void 0,n()("div",{style:g.title},void 0,i),n()("div",{style:g.header},void 0,a),f,d,u,p,n()("button",{style:g.hiddenButton}))};var F=o(45653);function B(e){let{userStore:t,children:o,hideEmail:i}=e;window.__c={n:"MFALoginPromptTitle"};const s=(0,a.VK)((()=>t.getEmail()),[t]),r=(0,x.yK)((e=>function(e,t){return(0,x.EM)({avatar:{marginBottom:12},title:{marginBottom:t?"auto":12},header:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"},email:{fontSize:S.Z.fontSize.UISmall.desktop,fontWeight:S.Z.fontWeight.regular,color:e.lightTextColor}})}(e,i)),[i]);return n()("div",{style:r.header},void 0,n()(F.Z,{userStore:t,size:64,avatarShouldShowShadow:!0,style:r.avatar}),n()("div",{style:r.title},void 0,o),!i&&n()("div",{style:r.email},void 0,s))}function N(e){window.__c={n:"MFALoginPromptBackupCodesAlert"};const{userStore:t,remainingCodes:o,onComplete:i,errorMessage:a}=e,d=o.filter((e=>!e.hasBeenUsed)).length,l=(0,r.O7)(),g=(0,s.useMemo)((()=>n()(B,{userStore:t,hideEmail:!0},void 0,n()(v.FormattedMessage,0===d?{id:"login.mfa.backupCode.regenerateBackupCodesTitle",defaultMessage:"Regenerate backup codes"}:{id:"login.mfa.backupCode.remainingBackupCodesTitle",defaultMessage:"Remaining backup codes"}))),[t,d]),c=(0,s.useMemo)((()=>n()(v.FormattedMessage,0===d?{id:"login.mfa.backupCode.regenerateBackupCodes.noCodeRemaining.header",defaultMessage:"You've used all of your recovery codes. On the browser or desktop app, go to <boldtext>Settings & members</boldtext> > <boldtext>My account</boldtext> > <boldtext>2-step verification</boldtext> to create new codes.",values:{boldtext:e=>n()("span",{style:{fontWeight:S.Z.fontWeight.semibold}},void 0,e)}}:{id:"login.mfa.backupCode.regenerateBackupCodes.codeRemaining.header",defaultMessage:"You have {numRemainingCodes} backup codes left.",values:{numRemainingCodes:d}})),[d]),m=(0,s.useMemo)((()=>({text:0!==d||l.device.isMobile?n()(v.FormattedMessage,{id:"login.mfa.backupCode.continueButton",defaultMessage:"Continue"}):n()(v.FormattedMessage,{id:"login.mfa.backupCode.goToAccountSettingsButton",defaultMessage:"Go to account settings"}),onClick:l.device.isMobile?i:()=>i(!0)})),[d,i,l.device.isMobile]),u=(0,s.useMemo)((()=>0!==d||l.device.isMobile?[]:[{text:n()(v.FormattedMessage,{id:"login.mfa.backupCode.doThisLaterButton",defaultMessage:"Do this later"}),type:"button",view:"plain",onClick:()=>i()}]),[d,i,l.device.isMobile]),h=(0,s.useMemo)((()=>0!==d?n()(M.Z,{type:"status",status:o}):void 0),[d,o]);return n()(Z,{title:g,header:c,primaryAction:m,secondaryActions:u,errorMessage:a,children:h})}var _=o(1799),R=o(74194);function V(e){let{isLoading:t,userStore:o,errorMessage:i,onVerifyCode:r,onTryAnotherMethod:a}=e;window.__c={n:"MFALoginPromptBackupCodeVerification"};const d=(0,x.yK)(W,[]),[l,g]=(0,s.useState)(""),c=n()(B,{userStore:o,hideEmail:!1},void 0,n()(v.FormattedMessage,{id:"login.mfa.backupCode.verifyCodeTitle",defaultMessage:"Verify your identity"})),m=n()(v.FormattedMessage,{id:"login.mfa.backupCode.verifyCodeHeader",defaultMessage:"Enter an unused one-time backup code."}),u={text:n()(v.FormattedMessage,{id:"login.mfa.backupCode.verifyCodeButton",defaultMessage:"Continue"}),onClick:()=>r(l),disabled:t},h=[{text:n()(v.FormattedMessage,{id:"login.mfa.backupCode.anotherMethod",defaultMessage:"Try another method"}),type:"button",view:"plain",onClick:a}];return n()(Z,{title:c,header:m,primaryAction:u,secondaryActions:h,errorMessage:i},void 0,n()("div",{style:d.body},void 0,n()(R.Z,{value:l,spellCheck:!1,style:d.backupCodeInput,onChange:e=>g((0,_.K)(e.target.value)),placeholder:"1234-1234",disabled:t})))}function W(e){return(0,x.EM)({body:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",marginTop:16,marginBottom:16},backupCodeInput:{background:"light"===e.mode?L.O9.transparent:e.inputBackground,color:e.darkTextColor,height:44,fontSize:16}})}var U=o(71119),E=o(15679);function z(e){let{errorMessage:t,userStore:o,mfaSettings:i,onUseMethod:a,onCancelMfa:d}=e;window.__c={n:"MFALoginPromptMethodChooser"};const l=(0,x.yK)(D,[]),g=(0,r.Fy)(),c=n()(B,{userStore:o,hideEmail:!1},void 0,n()(v.FormattedMessage,{id:"login.mfa.methodChooser.chooseMethodTitle",defaultMessage:"Verify your identity"})),u=k()([!g.isMobileNative&&{text:n()(v.FormattedMessage,{id:"login.mfa.methodChooser.anotherAccount",defaultMessage:"Log into another account"}),type:"button",view:"plain",onClick:d}]),h=(0,s.useMemo)((()=>(0,U.UG)(i).map((e=>{const{mfaMethod:t,mfaSettingId:o}=e;switch(t){case"totp":return n()(E.Z,{type:"totp",isActive:!0,title:e.friendlyName,caption:n()(v.FormattedMessage,{id:"login.mfa.methodChooser.activeSection.useAuthenticator.button.message",defaultMessage:"Use code from authenticator"}),onClick:()=>a("totp",o),style:l.button});case"sms":return n()(E.Z,{type:"sms",isActive:!0,title:e.phoneNumber,caption:n()(v.FormattedMessage,{id:"login.mfa.methodChooser.activeSection.usePhoneNumber.button.message",defaultMessage:"Text me a code"}),onClick:()=>a("sms",o),style:l.button});case"backup_code":return n()(E.Z,{type:"backup_code",isActive:!0,title:n()(v.FormattedMessage,{id:"login.mfa.methodChooser.activeSection.useBackupCode.button.title",defaultMessage:"Use backup code"}),caption:n()(v.FormattedMessage,{id:"login.mfa.methodChooser.activeSection.useBackupCode.button.message",defaultMessage:"Use a one-time backup code"}),onClick:()=>a("backup_code",o),style:l.button});default:(0,m.t1)(t)}}))),[l,i,a]);return n()(Z,{title:c,header:undefined,primaryAction:undefined,secondaryActions:u,errorMessage:t},void 0,n()("div",{style:l.body},void 0,h))}function D(e){return(0,x.EM)({body:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",marginTop:16,marginBottom:16},button:{marginBottom:10}})}var H=o(72126),j=o(56839),K=o(73602),O=o(11898);function G(e){let{isLoading:t,userStore:o,phoneHint:i,resentAt:r,resentStatus:a,errorMessage:d,onVerifyCode:l,onResendLink:g,onTryAnotherMethod:c}=e;window.__c={n:"MFALoginPromptSMSVerification"};const m=(0,x.yK)($,[]),[u,h]=(0,s.useState)([]),p=n()(B,{userStore:o,hideEmail:!1},void 0,n()(v.FormattedMessage,{id:"login.mfa.sms.verifyCodeTitle",defaultMessage:"Verify your identity"})),f=s.createElement(s.Fragment,null,n()(v.FormattedMessage,{id:"login.mfa.sms.verifyCodeHeader",defaultMessage:"Enter the code sent to {phoneHint}.",values:{phoneHint:i}})," ",s.createElement(K.y,{resentAt:r,resentStatus:a,onResendLink:g})),y={text:n()(v.FormattedMessage,{id:"login.mfa.sms.verifyCodeButton",defaultMessage:"Continue"}),onClick:()=>l(u.join("")),disabled:t||"resending"===a||(0,H.oA)(u).length!==j.R$},S=[{text:n()(v.FormattedMessage,{id:"login.mfa.sms.anotherMethod",defaultMessage:"Try another method"}),type:"button",view:"plain",onClick:c}];return n()(Z,{title:p,header:f,primaryAction:y,secondaryActions:S,errorMessage:d},void 0,n()("div",{style:m.body},void 0,n()(O.ZP,{numInputs:j.R$,format:"login",disabled:t,value:u,onChange:h,autoFocus:!0,isValidKey:O.rN})))}function $(e){return(0,x.EM)({body:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",marginTop:16,marginBottom:16}})}var Y=o(18469);function Q(e){let{isLoading:t,userStore:o,friendlyName:i,errorMessage:r,onVerifyCode:a,onTryAnotherMethod:d}=e;window.__c={n:"MFALoginPromptTOTPVerification"};const l=(0,x.yK)(X,[]),[g,c]=(0,s.useState)([]),m=n()(B,{userStore:o,hideEmail:!1},void 0,n()(v.FormattedMessage,{id:"login.mfa.totp.verifyCodeTitle",defaultMessage:"Verify your identity"})),u=n()(v.FormattedMessage,{id:"login.mfa.totp.verifyCodeHeader",defaultMessage:"Enter code from authenticator <boldtext>{friendlyName}</boldtext>.",values:{friendlyName:i,boldtext:e=>n()("span",{style:l.boldText},void 0,e)}}),h={text:n()(v.FormattedMessage,{id:"login.mfa.totp.verifyCodeButton",defaultMessage:"Continue"}),onClick:()=>a(g.join("")),disabled:t||(0,H.oA)(g).length!==Y.R$},p=[{text:n()(v.FormattedMessage,{id:"login.mfa.totp.anotherMethod",defaultMessage:"Try another method"}),type:"button",view:"plain",onClick:d}];return n()(Z,{title:m,header:u,primaryAction:h,secondaryActions:p,errorMessage:r},void 0,n()("div",{style:l.body},void 0,n()(O.ZP,{numInputs:Y.R$,format:"login",disabled:t,value:g,onChange:c,autoFocus:!0,isValidKey:O.rN})))}function X(e){return(0,x.EM)({body:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",marginTop:16,marginBottom:16},boldText:{fontWeight:S.Z.fontWeight.semibold}})}function q(e){window.__c={n:"MFALoginRouter"};const{loginStateMachine:t,userStore:o,onCancelMfa:i,onComplete:a}=e,{device:d}=(0,r.O7)(),c=t.useCurrentStep();return n()(s.Fragment,{},void 0,function(){switch(c.step){case"loginUninitialized":return;case"loginLoadSettings":return n()("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:`calc(100vh - ${d.isMobile?g.Z.mobileHeaderHeight:g.Z.desktopHeaderHeight}px)`}},void 0,n()(l.Z,{}));case"loginChooseMethod":return n()(z,{userStore:o,mfaSettings:c.settings,errorMessage:c.error,onUseMethod:(e,o)=>t.loginUseMethod({mfaSettingId:o}),onCancelMfa:i});case"loginTOTP":return n()(Q,{isLoading:c.isLoading,userStore:o,friendlyName:c.friendlyName,errorMessage:c.error,onVerifyCode:e=>t.loginVerifyCode({mfaMethod:"totp",mfaSettingId:c.mfaSettingId,code:e,onComplete:a}),onTryAnotherMethod:()=>t.loginShowChoices()});case"loginSMS":return n()(G,{isLoading:c.isLoading,userStore:o,phoneHint:c.partialPhoneNumber,errorMessage:c.error,resentAt:c.resentAt,resentStatus:c.resentStatus,onVerifyCode:e=>t.loginVerifyCode({mfaMethod:"sms",mfaSettingId:c.mfaSettingId,code:e,onComplete:a}),onResendLink:()=>{t.loginResendSMS(c.mfaSettingId)},onTryAnotherMethod:()=>t.loginShowChoices()});case"loginBackupCode":return n()(V,{isLoading:c.isLoading,userStore:o,errorMessage:c.error,onVerifyCode:e=>t.loginVerifyBackupCode({mfaSettingId:c.mfaSettingId,code:e,onComplete:a}),onTryAnotherMethod:()=>t.loginShowChoices()});case"loginAlertBackupCode":return n()(N,{userStore:o,remainingCodes:c.remainingCodes,onComplete:a});case"loginComplete":return;default:return(0,m.t1)(c)}}())}var J=o(54642);class ee{constructor(e){this.environment=void 0,this.userId=void 0,this.environment=e.environment,this.userId=e.userId}async loadSettings(){const e=await J.authGetLoginConfiguration(this.environment,{},this.userId);if("success"===e.type){const{data:t}=e;return"required"===t.samlSignIn?{settings:[]}:{settings:t.mfaOptions}}throw e.error}async sendSMS(e){const t=await J.authSendSms(this.environment,{mfaSettingId:e},this.userId);if("success"!==t.type)throw t.error}async verifySMS(e,t){var o;const i=await J.authVerifySmsLogin(this.environment,{mfaSettingId:e,code:t},this.userId);if("success"===i.type)return{status:"match"};if("invalid_mfa_code"===(null===(o=i.body)||void 0===o||null===(o=o.clientData)||void 0===o?void 0:o.type))return{status:"incorrect"};throw i.error}async verifyTOTP(e,t){var o;const i=await J.authVerifyTotpLogin(this.environment,{mfaSettingId:e,code:t},this.userId);if("success"===i.type)return{status:"match"};if("invalid_mfa_code"===(null===(o=i.body)||void 0===o||null===(o=o.clientData)||void 0===o?void 0:o.type))return{status:"incorrect"};throw i.error}async verifyBackupCode(e){var t;const o=await J.authVerifyBackupCodesLogin(this.environment,{code:e},this.userId);if("success"===o.type)return{status:"match",recovery:o.data.recovery,remainingCodes:o.data.remainingCodes};if("invalid_mfa_code"===(null===(t=o.body)||void 0===t||null===(t=t.clientData)||void 0===t?void 0:t.type))return{status:"incorrect"};throw o.error}}function te(e){window.__c={n:"MfaChallenge"};const{loginStore:t}=e,o=(0,r.O7)(),{device:i}=o,[c,m]=(0,s.useState)(void 0),{userId:u,userStore:h,previousPersistedUserId:y,redirectURL:v}=(0,a.VK)((()=>({userId:t.state.userStore.id,userStore:t.state.userStore,previousPersistedUserId:t.state.previousPersistedUserId,redirectURL:t.state.redirectURL})),[t]);(0,s.useEffect)((()=>{if(void 0===c){const e=new ee({environment:o,userId:u}),t=new p,i=new f(t,e);m(i),i.loginShowChoices()}}),[o,u,c]);const S=(0,s.useCallback)((async e=>{await d.Es({environment:o,redirectURL:v,userId:u,previousPersistedUserId:y,regenerateBackupCodes:e})}),[o,u,y,v]);return c?n()(q,{loginStateMachine:c,userStore:h,onCancelMfa:()=>d.X_(t),onComplete:S}):n()("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:`calc(100vh - ${i.isMobile?g.Z.mobileHeaderHeight:g.Z.desktopHeaderHeight}px)`}},void 0,n()(l.Z,{}))}},457:(e,t,o)=>{o.d(t,{Z:()=>c});var i=o(23174),n=o.n(i),s=(o(67294),o(13991)),r=o(24405),a=o(8848),d=o(1799),l=o(97880),g=o(82990);function c(e){window.__c={n:"MFABackupCodes"};const{type:t}=e,o=(0,r.yK)((e=>({pane:{display:"flex",whiteSpace:"pre-line",flexDirection:"column",alignItems:"center",justifyContent:"center",borderRadius:4,backgroundColor:a.FN.light.yellow[50],paddingTop:8,paddingBottom:8,marginBottom:10},textCode:{fontFamily:g.Z.getHeaderFontFamily({pageFont:"mono",locale:s.SP}),fontWeight:g.Z.fontWeight.regular,fontSize:g.Z.fontSize.UIRegular.desktop,font:g.Z.baseFontFamily.emailMono,color:a.FN.light.brown[500],textAlign:"center"},redactedBackupCode:{textDecoration:"line-through",opacity:.2}})),[]);return n()("div",{style:o.pane},void 0,n()("div",{style:o.textCode},void 0,"status"===t?e.status.map(((e,t)=>n()("div",{style:e.hasBeenUsed?o.redactedBackupCode:{}},t,d.A))):"unencryptedCodes"===t?e.backupCodes.map(d.K).join("\n"):(0,l.t1)(t)))}},56839:(e,t,o)=>{o.d(t,{R$:()=>p,ZP:()=>f});var i=o(23174),n=o.n(i),s=o(67294),r=o(24405),a=o(72126),d=o(82990),l=o(5366),g=o(18514),c=o(68785),m=o(88175),u=o(73602),h=o(11898);const p=6;function f(e){let{isLoading:t,phoneNumber:o,errorMessage:i,resentStatus:d,resentAt:f,onDismiss:v,onBack:S,onVerifyCode:M,onResendLink:C}=e;window.__c={n:"MFAPromptSMSVerification"};const b=(0,r.yK)(y,[]),[w,k]=(0,s.useState)([]),x=n()(l.FormattedMessage,{id:"profileSettings.mfa.sms.verifyCodeTitle",defaultMessage:"Verify phone number"}),L=s.createElement(s.Fragment,null,n()(l.FormattedMessage,{id:"profileSettings.mfa.sms.verifyCodeHeader.default",defaultMessage:"Enter the code sent to {phoneNumber} to complete setup.",values:{phoneNumber:o}})," ",s.createElement(u.y,{resentAt:f,resentStatus:d,onResendLink:C})),A={text:t?n()(c.Z,{}):n()(l.FormattedMessage,{id:"profileSettings.mfa.sms.verifyCodeButton",defaultMessage:"Verify code"}),onClick:()=>M(w.join("")),disabled:t||"resending"===d||(0,a.oA)(w).length!==p},I=[{text:n()(l.FormattedMessage,{id:"profileSettings.mfa.sms.verifyCodeNeedHelp",defaultMessage:"Need help?"}),href:(0,g.UY)("guides.mfa"),isExternal:!0,type:"link",view:"plain"}];return n()(m.Z,{title:x,header:L,errorMessage:i,primaryAction:A,secondaryActions:I,onDismiss:v,onBack:S,disableBackButton:t},void 0,n()("div",{style:b.body},void 0,n()(h.ZP,{numInputs:p,format:"settings",disabled:!1,value:w,onChange:k,autoFocus:!0,isValidKey:h.rN})))}function y(e){return(0,r.EM)({body:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",marginTop:16,marginBottom:4},textCode:{fontWeight:d.Z.fontWeight.medium,fontSize:d.Z.fontSize.UIRegular.desktop,lineHeight:1.2,color:e.darkTextColor,marginTop:32,marginBottom:32,textAlign:"center"}})}},18469:(e,t,o)=>{o.d(t,{R$:()=>h,ZP:()=>p});var i=o(23174),n=o.n(i),s=o(67294),r=o(24405),a=o(72126),d=o(82990),l=o(5366),g=o(18514),c=o(68785),m=o(88175),u=o(11898);const h=6;function p(e){let{isLoading:t,errorMessage:o,onDismiss:i,onBack:d,onVerifyCode:p}=e;window.__c={n:"MFAPromptTOTPVerification"};const y=(0,r.yK)(f,[]),[v,S]=(0,s.useState)([]),M=n()(l.FormattedMessage,{id:"profileSettings.mfa.totp.verifyCodeTitle",defaultMessage:"Verify code"}),C=n()(l.FormattedMessage,{id:"profileSettings.mfa.totp.verifyCodeHeader",defaultMessage:"Enter the one-time code from authenticator to complete setup."}),b={text:t?n()(c.Z,{}):n()(l.FormattedMessage,{id:"profileSettings.mfa.totp.verifyCodeButton",defaultMessage:"Verify code"}),onClick:()=>p(v.join("")),disabled:t||(0,a.oA)(v).length!==h},w=[{text:n()(l.FormattedMessage,{id:"profileSettings.mfa.totp.needHelp",defaultMessage:"Need help?"}),href:(0,g.UY)("guides.mfa"),isExternal:!0,type:"link",view:"plain"}];return n()(m.Z,{title:M,header:C,errorMessage:o,primaryAction:b,secondaryActions:w,onDismiss:i,onBack:d,disableBackButton:t},void 0,n()("div",{style:y.body},void 0,n()(u.ZP,{numInputs:h,format:"settings",disabled:t,value:v,onChange:e=>{S(e)},autoFocus:!0,isValidKey:u.rN})))}function f(e){return(0,r.EM)({body:{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",marginTop:16,marginBottom:4},textCode:{fontWeight:d.Z.fontWeight.medium,fontSize:d.Z.fontSize.UIRegular.desktop,lineHeight:1.2,color:e.darkTextColor,marginTop:32,marginBottom:32,textAlign:"center"}})}},39186:(e,t,o)=>{o.d(t,{G:()=>s});var i=o(23174),n=o.n(i);o(67294);const s=(0,o(45238).I)("backward",{viewBox:"0 0 24 24",svg:n()("polygon",{points:"23,11 4.801,11 11.4,4.4 10,3 1,12 10,21 11.4,19.6 4.801,13 23,13 "})})}}]);