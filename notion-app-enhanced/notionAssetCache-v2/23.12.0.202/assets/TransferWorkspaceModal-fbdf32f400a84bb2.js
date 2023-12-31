"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[4114],{5582:(e,t,r)=>{r.r(t),r.d(t,{TransferWorkspaceModal:()=>j});var a=r(23174),i=r.n(a),n=r(67294),o=r(480),s=r(86628),l=r(24405),d=r(15145),c=r(33728),u=r(5366),m=r(97880),p=r(50906),g=r(54642),f=r(47307),h=r(29974),v=r(28020),y=r(80444),S=r(17364),C=r(1743),k=r(50506),w=r(19889),M=r(82990),b=r(57559),I=r(42922),T=r(61519),W=r(74194),x=r(89728),V=r(64369),U=r(33907);const B=(0,r(45238).I)("commentReply",{viewBox:"0 0 12 12",svg:i()("path",{d:"M11.2324 7.2832C11.2324 4.95117 9.66211 3.33984 7.00195 3.33984H3.32227L1.96875 3.4043L2.99414 2.53711L4.48242 1.08398C4.59961 0.972656 4.67578 0.826172 4.67578 0.632812C4.67578 0.263672 4.41797 0 4.03711 0C3.87305 0 3.69141 0.0761719 3.5625 0.199219L0.205078 3.50977C0.0703125 3.63867 0 3.81445 0 3.99609C0 4.17188 0.0703125 4.34766 0.205078 4.47656L3.5625 7.78711C3.69141 7.91016 3.87305 7.98633 4.03711 7.98633C4.41797 7.98633 4.67578 7.72266 4.67578 7.35352C4.67578 7.16016 4.59961 7.01953 4.48242 6.90234L2.99414 5.44922L1.96875 4.58789L3.32227 4.64648H7.03125C8.90625 4.64648 9.94336 5.71289 9.94336 7.23633C9.94336 8.75977 8.90625 9.87305 7.03125 9.87305H5.66016C5.27344 9.87305 4.99805 10.166 4.99805 10.5234C4.99805 10.8809 5.27344 11.1738 5.66602 11.1738H7.07812C9.69141 11.1738 11.2324 9.63281 11.2324 7.2832Z"})});var Z=r(84169),L=r(74600),_=r(54497),E=r(70043),K=r(18514),q=r(73063),F=r(16354),N=r(45653);const R={inputLabel:{fontWeight:M.Z.fontWeight.medium,fontSize:14,letterSpacing:-.15,textAlign:"left",width:"100%"},input:{width:"100%",marginTop:8}};function D(e){window.__c={n:"TransferModalHeader"};const t=(0,l.yK)((e=>({avatarContainer:{display:"flex",justifyContent:"center",alignItems:"center"},avatarContainerBadged:{position:"relative"},avatarBadgeIcon:{position:"absolute",left:26,top:26,height:20,width:20},exclamationMarkIcon:{width:"100%",height:18,fill:e.accentColors.yellow[500],stroke:e.modalBackground,strokeWidth:3,paintOrder:"stroke fill",overflow:"visible"},arrowRightIcon:{width:16,height:16,marginLeft:12,marginRight:12,fill:e.mediumIconColor},questionMarkIcon:{width:20,height:20,fill:e.mediumIconColor},userIconPlaceholder:{width:40,height:40,borderRadius:"50%",backgroundColor:e.modalBackground,display:"flex",alignItems:"center",justifyContent:"center",boxShadow:E.v.avatarBoxShadow.light,boxSizing:"content-box",border:`1px solid ${e.lightDividerColor}`},headerStyle:{textAlign:"center"},titleContainer:{display:"flex",justifyContent:"center",alignItems:"center",marginTop:15},title:{fontSize:16,fontWeight:M.Z.fontWeight.medium},description:{marginTop:5,fontWeight:M.Z.fontWeight.regular,textAlign:"center",fontSize:13,lineHeight:"16px",letterSpacing:-.08}})),[]);return i()("div",{style:t.headerStyle},void 0,i()("div",{style:t.avatarContainer},void 0,i()("div",{style:t.avatarContainerBadged},void 0,i()(N.Z,{size:40,userValue:e.fromUserValue,avatarShouldShowShadow:!0}),i()("div",{style:t.avatarBadgeIcon},void 0,(0,_.t)(t.exclamationMarkIcon))),(0,U.n)(t.arrowRightIcon),e.targetUserValue?i()(N.Z,{size:40,userValue:e.targetUserValue,avatarShouldShowShadow:!0}):i()("div",{style:t.userIconPlaceholder},void 0,(0,L.L)(t.questionMarkIcon))),i()("div",{style:t.titleContainer},void 0,i()(V.Z,{style:t.title},void 0,i()(u.FormattedMessage,{defaultMessage:"Change workspace account",id:"transferWorkspaceModal.changeAccount.title"})),i()(F.Z,{href:(0,K.UY)("guides.domainManagement")},void 0,i()(q.Z,{icon:Z.m}))),i()(V.Z,{isSecondaryColor:!0,isMultiline:!0,style:t.description},void 0,e.description))}function z(){window.__c={n:"BackToMyWorkspacesButton"};const e=(0,o.O7)(),t=(0,l.yK)((e=>({backIconStyle:{width:12,height:12,marginRight:7,fill:e.mediumIconColor},secondaryButton:{marginTop:12,justifyContent:"center",fontWeight:M.Z.fontWeight.medium,color:e.lightTextColor,letterSpacing:"-0.154px"}})),[]),r=(0,s.VK)((()=>y.default.state.currentUserRootStore),[]),a=(0,s.VK)((()=>y.default.state.currentUserSettingsStore),[]),c=(0,s.VK)((()=>r&&a),[r,a]),m=(0,n.useCallback)((async()=>{r&&a&&await h.L5({environment:e,userRootStore:r,userSettingsStore:a,skipPendingTransferWorkspaces:!0,pageVisitSource:d.tY.BackForward})}),[e,r,a]);return i()(x.Z,{style:t.secondaryButton,onClick:m,disabled:!c},void 0,B(t.backIconStyle),i()(u.FormattedMessage,{id:"transferWorkspaceModal.backToMyWorkspacesButton.label",defaultMessage:"Back to my workspaces"}))}function P(e){window.__c={n:"ConfirmTransferState"};const{currentSpaceStore:t,currentUserValue:r,targetUserId:a,handleConfirm:o,handleBack:d,intl:c}=e,m=(0,l.yK)((e=>({primaryButton:{width:"100%",marginBottom:"10px",marginTop:32},secondaryButton:{color:e.mediumTextColor,fontWeight:M.Z.fontWeight.medium},emailFieldCaption:{textAlign:"center",marginTop:"5px",lineHeight:"15px",fontSize:12,color:e.lightTextColor},inputLabel:R.inputLabel,verificationCodeInputContainer:{marginTop:13},input:R.input,inputContainer:{marginTop:27,width:"100%"},dividerContainer:{marginTop:29},dividerInner:{borderBottomColor:e.regularDividerColor}})),[]),p=(0,s.VK)((()=>t.getName()),[t]),g=(0,s.VK)((()=>b.U6.createChildStore(t,{id:a,table:w.KJ}).getValue()),[t,a]),f=(0,s.VK)((()=>b.U6.createChildStore(t,{id:a,table:w.KJ}).getEmail()),[t,a]),[h,v]=(0,n.useState)(""),y=(0,n.useCallback)((e=>{v(e.currentTarget.value)}),[v]),S=(0,n.useCallback)((async()=>{await o(h)}),[h,o]);return n.createElement(n.Fragment,null,i()(D,{fromUserValue:r,targetUserValue:g,description:i()(u.FormattedMessage,{defaultMessage:"Transfer {currentSpaceName} to the Notion account associated with {targetUserEmail}.",id:"transferWorkspaceModal.confirmTransfer.description",values:{currentSpaceName:p,targetUserEmail:f}})}),i()(T.Z,{size:"100%",innerStyle:m.dividerInner,style:m.dividerContainer}),i()("div",{style:m.inputContainer},void 0,i()(V.Z,{style:m.inputLabel},void 0,i()(u.FormattedMessage,{id:"transferWorkspaceModal.confirmTransfer.emailLabel",defaultMessage:"Email"})),i()(W.Z,{style:m.input,value:f,disabled:!0}),i()(V.Z,{isSecondaryColor:!0,style:m.emailFieldCaption},void 0,i()(u.FormattedMessage,{id:"transferWorkspaceModal.confirmTransfer.emailDescription",defaultMessage:"We just sent you a temporary verification code.{br}Please check your inbox.",values:{br:i()("br",{})}})),i()("div",{style:m.verificationCodeInputContainer},void 0,i()(V.Z,{style:m.inputLabel},void 0,i()(u.FormattedMessage,{id:"transferWorkspaceModal.confirmTransfer.passcodeLabel",defaultMessage:"Verification code"})))),i()(W.Z,{style:m.input,value:h,onChange:y,onSubmit:S,placeholder:c.formatMessage({id:"transferWorkspaceModal.confirmTransfer.passcodePlaceholder",defaultMessage:"Enter verification code..."}),focusInitial:!0}),i()(I.Z,{style:m.primaryButton,onClick:S},void 0,i()(u.FormattedMessage,{defaultMessage:"Confirm transfer",id:"transferWorkspaceModal.confirmTransfer.confirmButton"})),i()(x.Z,{style:m.secondaryButton,onClick:d},void 0,i()(u.FormattedMessage,{defaultMessage:"Cancel",id:"transferWorkspaceModal.confirmTransfer.cancelButton"})))}var H=r(15047);function A(e){window.__c={n:"RequestedTransferStage"};const{currentUserValue:t,currentSpaceStore:r,workspaceTransfer:a,intl:o,handleSubmitEmail:d}=e,c=(0,l.yK)((e=>({primaryButton:{width:"100%",marginTop:32},emailLabel:R.inputLabel,emailInput:R.input,dividerContainer:{marginTop:29},dividerInner:{borderBottomColor:e.regularDividerColor},emphasizedDescriptionText:{fontWeight:M.Z.fontWeight.medium},inputContainer:{marginTop:27,width:"100%"}})),[]),m=(0,s.VK)((()=>t.email),[t]),p=(0,s.VK)((()=>null==r?void 0:r.getName()),[r]),g=(0,s.VK)((()=>b.H2.createChildStore(r,{table:H.bx,id:a.requested_from_space_id}).getName()),[r,a]),[f,h]=(0,n.useState)(""),v=(0,n.useCallback)((()=>{d(f)}),[f,d]);return n.createElement(n.Fragment,null,i()(D,{fromUserValue:t,description:i()(u.FormattedMessage,{id:"transferWorkspaceModal.transferRequested.description",defaultMessage:"{currentWorkspaceName} is associated with {currentUserEmail}. {requestingWorkspaceName} owns {currentUserEmailDomain} and requires that you switch to a personal Notion account to continue using this workspace.{br}{br}Contact {contactEmail} for assistance.",values:{br:i()("br",{}),currentWorkspaceName:p,currentUserEmail:m,currentUserEmailDomain:m.split("@")[1],requestingWorkspaceName:g,contactEmail:i()("span",{style:c.emphasizedDescriptionText},void 0,a.contact_email)}})}),i()(T.Z,{size:"100%",innerStyle:c.dividerInner,style:c.dividerContainer}),i()("div",{style:c.inputContainer},void 0,i()(V.Z,{style:c.emailLabel},void 0,i()(u.FormattedMessage,{id:"transferWorkspaceModal.transferRequested.emailLabel",defaultMessage:"Email"})),i()(W.Z,{style:c.emailInput,value:f,onChange:e=>{h(e.currentTarget.value)},onSubmit:v,placeholder:o.formatMessage({id:"transferWorkspaceModal.transferRequested.emailPlaceholder",defaultMessage:"Personal-use, Notion account email address..."}),focusInitial:!0})),i()(I.Z,{isLarge:!0,style:c.primaryButton,onClick:v},void 0,i()(u.FormattedMessage,{id:"transferWorkspaceModal.transferRequested.continueButton",defaultMessage:"Continue with email"})),i()(z,{}))}function j(e){window.__c={n:"TransferWorkspaceModal"};const{workspaceTransfer:t}=e,r=(0,o.O7)(),a=(0,u.useIntl)(),w=(0,s.VK)((()=>y.default.state.currentSpaceStore),[]),M=(0,s.VK)((()=>y.default.state.currentUserStore),[]),b=(0,s.VK)((()=>y.default.state.currentUserRootStore),[]),I=(0,s.VK)((()=>y.default.state.currentUserSettingsStore),[]),[T,W]=(0,n.useState)({type:"requested"}),x=(0,s.VK)((()=>{var e;return null===(e=(0,v.B7)(r))||void 0===e?void 0:e.getValue()}),[r]),V=(0,l.yK)((e=>({modalInnerStyle:{width:406,padding:"24px 20px 16px 20px",display:"flex",flexDirection:"column",alignItems:"center"}})),[]);if(!w||!M||!x)return null;let U;switch(T.type){case"requested":const e=async e=>{const t=await g.sendVerifyTransferEmail(r,{email:e});"failed"!==t.type?W({type:"confirm",targetUserId:t.data.userId,targetUserEmailDomain:(0,c.Gd)(e)}):f.showError(t)};U=i()(A,{currentUserValue:x,currentSpaceStore:w,workspaceTransfer:t,handleSubmitEmail:e,intl:a});break;case"confirm":const n=async e=>{const a=T.targetUserId,i=await g.transferWorkspaceToUser(r,{targetUserId:a,spaceId:w.id,transferEmailPasscode:e});if("failed"===i.type)return f.showError(i),void W({type:"requested"});p.s4j(r,{newOwner:a,newEmailDomain:T.targetUserEmailDomain||"__UNKNOWN_EMAIL_DOMAIN__",requestingSpaceId:t.requested_from_space_id});const n=S.Z.getSpaceViewStores(r,a).find((e=>e.getSpaceId()===w.id));return n?void(await h.y3({environment:r,userRootStore:b,userSettingsStore:I,spaceViewStore:n,pageVisitSource:d.tY.SwitchSpace})):b&&I?(await h.L5({environment:r,userRootStore:b,userSettingsStore:I,skipPendingTransferWorkspaces:!0,pageVisitSource:d.tY.SwitchSpace}),void W({type:"requested"})):void 0};U=i()(P,{currentSpaceStore:w,currentUserValue:x,targetUserId:T.targetUserId,handleBack:()=>W({type:"requested"}),handleConfirm:n,intl:a});break;default:(0,m.t1)(T)}return i()(C.Z,{capture:!0},void 0,i()(k.Z,{open:!0,innerStyle:V.modalInnerStyle,onDismiss:()=>{},render:()=>U}))}}}]);