"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[6928],{50526:(e,t,o)=>{o.d(t,{Z:()=>x});var i=o(10434),n=o.n(i),a=o(23174),r=o.n(a),s=o(67294),u=o(480),d=o(86628),l=o(98519),p=o(19889),g=o(97880),c=o(7928),m=o(89583),f=o(33929),v=o(87279),h=o(80444),y=o(64921),w=o(52275),b=o(78140),S=o(32163),M=o(53437),k=o(72495),F=o(64369),q=o(45653);function x(e){let{onChange:t}=e;window.__c={n:"DeveloperIntegrationsAccountSwitcher"};const o=(0,u.O7)(),[i,n]=(0,s.useState)(!1),a=()=>n(!1),l=(0,d.VK)((()=>h.default.state.currentUserStore),[]),c=(0,d.VK)((()=>l?o.currentUser.loggedInUserIds.map((e=>l.getRecordModel({table:p.KJ,id:e}))).filter(g.$K):[]),[l,o]),m=(0,d.VK)((()=>null==l?void 0:l.getValue()),[l]);return m?r()(M.ZP,{popupType:M.kQ.Popup,origin:r()(C,{onClick:()=>n(!0),currentUserValue:m}),render:()=>r()(G,{users:c,currentUserId:m.id,onChange:t,onClose:a}),placementToOrigin:M.ZP.Placement.Bottom,alignmentToOrigin:M.ZP.Alignment.End,onDismiss:a,open:i}):null}function C(e){const{onClick:t,currentUserValue:o}=e;return r()("div",{style:{marginLeft:18}},void 0,r()(y.Z,{onClick:t,style:{borderRadius:"100%"}},void 0,r()(q.Z,{userValue:o,size:32})))}function G(e){window.__c={n:"OpenedSwitcherMenu"};const t=(0,u.O7)(),{users:o,currentUserId:i,onClose:a,onChange:d}=e;return r()(b.Z,{menuType:v.og.Popup},void 0,r()(S.Z,{type:S.i.Vertical,initialFocus:void 0,sections:[{key:"developer-integration-accounts",items:o.map((e=>({key:e.id,action:async()=>{const o=await m.x({environment:t,newCurrentUserId:e.id});null==d||d(o),a()},render:t=>s.createElement(z,n()({},t,{user:e,isLoggedIn:e.id===i}))}))),render:e=>s.createElement(k.Z,e)}]}))}const z=s.forwardRef(((e,t)=>{window.__c={n:"AccountMenuItem"};const{user:o,isLoggedIn:i,...a}=e,u=f.default.getIntl(),p=(0,d.VK)((()=>(0,c.Nz)(u,o)),[u,o]),g=(0,d.VK)((()=>o.email),[o]);return s.createElement(w.Z,n()({},a,{ref:t,title:r()(F.Z,{className:"notranslate"},void 0,p),icon:r()(q.Z,{userValue:o,size:28}),caption:r()(F.Z,{isSmall:!0},void 0,g),right:i&&(0,l.k)({width:12,height:12})}))}))},36360:(e,t,o)=>{o.d(t,{Z:()=>a});var i=o(83355);class n extends i.Z{willMount(e){document.title=e.title}willUpdate(e){document.title=e.title}renderComponent(){return this.props.children}}n.displayName="DocumentTitle";const a=n},96:(e,t,o)=>{o.d(t,{Z:()=>s});var i=o(23174),n=o.n(i),a=(o(67294),o(24405)),r=o(64369);const s=function(e){window.__c={n:"LabeledFormInput"};const{name:t,style:o,children:i,errorMessage:s,isMultiline:u}=e,d=(0,a.yK)((e=>({formInputContainer:{display:"flex",flexDirection:"column",gap:6,width:"100%"},formLabel:{},errorMessage:{fontSize:12,color:e.errorText}})),[]);return n()("div",{style:{...d.formInputContainer,...o}},void 0,n()(r.Z,{isMultiline:u,style:d.formLabel},void 0,t),i,s&&n()("div",{style:d.errorMessage},void 0,s))}},13745:(e,t,o)=>{o.r(t),o.d(t,{default:()=>be});var i=o(23174),n=o.n(i),a=o(67294),r=o(86628),s=o(24405),u=o(82990),d=o(5366),l=o(68785),p=o(32662),g=o(77907),c=o(77080),m=o(13991),f=o(41892),v=o(8848),h=o(60651),y=o(89101),w=o(16354),b=o(53336),S=o(50526),M=o(36360),k=o(17311),F=o(34859);const q=function(e){window.__c={n:"StudentGroupSignupContainer"};const{children:t}=e,o=(0,d.useIntl)(),i=(0,s.yK)((e=>({footerLink:{color:v.ZP.frontTextMedium,cursor:"pointer",textDecoration:"none",display:"block",marginBottom:4},footerColophon:{gridColumn:"auto/span 8"},footerNav:{gridColumn:"auto/span 2",marginBottom:16},footerLogo:{margin:"0 auto 20px",fontSize:0,display:"block"},footerSectionHeader:{fontFamily:u.Z.getCompositeFontFamily(m.SP).mono,fontWeight:u.Z.fontWeight.medium,margin:"0 auto 8px",marginBottom:"1.1em",fontSize:15},footerCopy:{fontSize:15,fontWeight:u.Z.fontWeight.regular,lineHeight:"1.5em",color:v.ZP.frontTextMedium,margin:"0 auto 8px",marginBottom:"1.1em"},footerContainer:{marginTop:60,padding:"70px 30px",alignItems:"flex-start",justifyItems:"flex-start",flex:"1 0 auto",zIndex:999,width:"100%",maxWidth:1160,boxSizing:"border-box",margin:"0 auto",borderTop:`1px solid ${v.ZP.dividerColor}`,display:"grid",gridTemplateColumns:"repeat(12,1fr)",columnGap:16,gap:16},scroller:{height:"100vh",padding:"0px 10px"},innerContainer:{margin:"auto",width:700},topBar:{maxWidth:1100,height:60,margin:"0 auto",display:"flex",alignItems:"center",marginTop:13,marginBottom:10,justifyContent:"space-between"},headerSection:{display:"flex",flexDirection:"column",width:"100%",justifyContent:"center",marginTop:80},header:{fontWeight:u.Z.fontWeight.bold,fontFamily:u.Z.getCompositeFontFamily(m.SP).sans,fontSize:40,color:v.ZP.frontText,overflow:"hidden",lineHeight:"1.2em"},subtitle:{fontWeight:u.Z.fontWeight.regular,fontSize:16,letterSpacing:"0.0005em",lineHeight:"1.5em"},button:{display:"inline-flex",color:v.ZP.frontTextMedium,borderRadius:3,padding:6,fontSize:15,width:"fit-content"},buttonContent:{display:"flex",alignItems:"center"},arrowIcon:{width:20,height:20},gridContainer:{display:"grid",gridTemplateColumns:"180px auto",paddingBottom:120,gap:60},leftColumn:{gridColumnStart:1,gridColumnEnd:2},rightColumn:{gridColumnStart:2,gridColumnEnd:3},icon:{fill:e.regularTextColor,height:36},brandLink:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-start",gap:12,fontSize:24,fontWeight:u.Z.fontWeight.semibold},textInput:{fontSize:14,borderRadius:k.Z.borderRadius,padding:"8px 14px"},textInputDisabled:{fontSize:14,borderRadius:k.Z.borderRadius,padding:"8px 14px"},checkboxContainer:{display:"flex",alignItems:"center",gap:6},formBody:{display:"flex",flexDirection:"column",gap:24,marginTop:24}})),[]);return n()(M.Z,{title:o.formatMessage({id:"studentGroupSignupContainer.document.title",defaultMessage:"Notion for Student Orgs | Notion"})},void 0,n()(b.Z,{style:i.scroller,type:F.Z.Y},void 0,n()("div",{style:i.topBar},void 0,n()(w.Z,{href:y._j.root},void 0,n()("div",{style:i.brandLink},void 0,n()("span",{},void 0,(0,h.h)(i.icon)),n()("div",{},void 0,n()(d.FormattedMessage,{defaultMessage:"Notion",id:"studentGroupSignupContainer.document.header"})))),n()(S.Z,{})),n()("div",{style:{...i.innerContainer}},void 0,n()("div",{style:i.headerSection},void 0,n()("div",{style:i.header},void 0,n()(d.FormattedMessage,{id:"studentGroupSignupContainer.page.title",defaultMessage:"Apply for a free Plus plan for your student organization"})),n()("div",{style:i.subtitle},void 0,n()("p",{},void 0,n()(d.FormattedMessage,{id:"studentGroupSignupContainer.info.line2",defaultMessage:"Please enter your details below about your student organization to receive a free Plus plan upgrade for your student organization’s workspace.",values:{bold:e=>n()("b",{},void 0,e)}})),n()("h3",{},void 0,n()(d.FormattedMessage,{id:"studentGroupSignupContainer.admissionCriteria.line1",defaultMessage:"Admission criteria"})),n()("p",{},void 0,n()(d.FormattedMessage,{id:"studentGroupSignupContainer.admissionCriteria.subtext",defaultMessage:"To be eligible for the discount, please note the following:"})),n()("p",{},void 0,n()(d.FormattedMessage,{id:"studentGroupSignupContainer.admissionCriteria.criteria1",defaultMessage:"1. You must be a student at an accredited U.S. higher education institution to apply. Only workspaces used for verified student-led organizations are eligible for the discount."})),n()("p",{},void 0,n()(d.FormattedMessage,{id:"studentGroupSignupContainer.admissionCriteria.criteria2",defaultMessage:"2. Your email must be a verified domain from your institution."})),n()("p",{},void 0,n()(d.FormattedMessage,{id:"studentGroupSignupContainer.admissionCriteria.criteria3",defaultMessage:"3. All members in your student organization’s workspace must share the same domain from your education institution, before and after your workspace is upgraded."})),n()("p",{},void 0,n()(d.FormattedMessage,{id:"studentGroupSignupContainer.admissionCriteria.criteria4",defaultMessage:"4. Only one application per student organization will be approved. Only an admin of your workspace can apply on behalf of the organization."})),n()("p",{},void 0,n()(d.FormattedMessage,{id:"studentGroupSignupContainer.admissionCriteria.criteria5",defaultMessage:"5. Your organization must be recognized by your institution. In your application, please provide a link for your organization on your institution’s website."}))))),n()("div",{style:{...i.innerContainer}},void 0,t),n()("footer",{style:i.footerContainer},void 0,n()("section",{style:i.footerColophon},void 0,n()("h1",{style:i.footerLogo},void 0,n()("img",{src:f.Z.images.integrations.notionFooterLogoSvg})),n()("h6",{style:i.footerCopy},void 0,n()(d.FormattedMessage,{id:"layout.meta.title",defaultMessage:"The all-in-one workspace for your notes, tasks, wikis, and databases."})),n()("h6",{style:i.footerCopy},void 0,`©${(new Date).getFullYear()} Notion Labs, Inc.`),n()(w.Z,{external:!0,href:y._j.termsAndPrivacy,style:i.footerLink},void 0,n()(d.FormattedMessage,{id:"studentGroupSignupContainer.layout.footer.termsAndPrivacy",defaultMessage:"Terms & Privacy"}))),n()("nav",{style:i.footerNav},void 0,n()("h5",{style:i.footerSectionHeader},void 0,"Notion"),n()(w.Z,{external:!0,href:y._j.studentsRedirect,style:i.footerLink},void 0,n()(d.FormattedMessage,{id:"studentGroupSignupContainer.layout.footer.students",defaultMessage:"Students"})),n()(w.Z,{external:!0,href:y._j.product,style:i.footerLink},void 0,n()(d.FormattedMessage,{id:"studentGroupSignupContainer.layout.footer.product",defaultMessage:"Product"})),n()(w.Z,{external:!0,href:y._j.blog,style:i.footerLink},void 0,n()(d.FormattedMessage,{id:"studentGroupSignupContainer.layout.footer.blog",defaultMessage:"Blog"})),n()(w.Z,{external:!0,href:y._j.careers,style:i.footerLink},void 0,n()(d.FormattedMessage,{id:"studentGroupSignupContainer.layout.footer.careers",defaultMessage:"Careers"}))))))};var x=o(80342),C=o(47453),G=o(42402);const z=(0,d.defineMessages)({question1:{id:"studentGroupSignup.studentGroupFaq.question1",defaultMessage:"What is the student org discount?"},answer1:{id:"studentGroupSignup.studentGroupFaq.answer1",defaultMessage:"<p>For a limited time, we’ll be opening up applications to offer our Plus plan for free to all verified student organizations at accredited higher education institutions in the U.S.</p><p>Our Plus plan offers unlimited blocks & file uploads for teams, ability to add multiple members to a workspace, 30 day page history, up to 100 guests, and more.</p><p>For more information on our plans, visit our <link>Pricing page.</link></p><p><italic><bold>Note:</bold> This discount is only eligible for workspaces for volunteer student organizations. Non student-organization workspaces will not qualify for the discount.</italic></p>"},question2:{id:"studentGroupSignup.studentGroupFaq.question2",defaultMessage:"Why are we offering Notion for free to student orgs?"},answer2:{id:"studentGroupSignup.studentGroupFaq.answer2",defaultMessage:"<p>At Notion, we believe that people think better, dream bigger, and lead stronger, together.</p><p>By offering Notion for free for student organizations, we want to <bold>empower our next generation of dreamers, thinkers, and leaders to do their best work together.</bold></p>"},question3:{id:"studentGroupSignup.studentGroupFaq.question3",defaultMessage:"Who qualifies for the discount?"},answer3:{id:"studentGroupSignup.studentGroupFaq.answer3",defaultMessage:"<p>All official, volunteer student-led organizations at accredited higher education institutions in the U.S. are eligible for the student org discount on their workspace.</p><p>Any organization either registered or listed on your accredited university’s website is considered eligible.</p>"},question4:{id:"studentGroupSignup.studentGroupFaq.question4",defaultMessage:"How do I apply?"},answer4part1:{id:"studentGroupSignup.studentGroupFaq.answer4part1",defaultMessage:"<p>Please submit an application for your student org’s workspace <link>here</link>. To be approved for the discount, all members in your student org’s workspace must have a .edu domain.</p><p>In your application please provide:</p>"},answer4part2:{id:"studentGroupSignup.studentGroupFaq.answer4part2",defaultMessage:"<list>Your student organization’s workspace domain</list><list>Your university name</list><list>Your class or student organization name</list><list>A link on your school’s website demonstrating your class / student organization or a proof of registration</list>"},answer4part3:{id:"studentGroupSignup.studentGroupFaq.answer4part3",defaultMessage:"<p>Once your application is approved, you’ll receive an email from the Notion team confirming that your student organization’s workspace will be upgraded onto our Plus plan.</p>"},question5:{id:"studentGroupSignup.studentGroupFaq.question5",defaultMessage:"When can I apply?"},answer5:{id:"studentGroupSignup.studentGroupFaq.answer5",defaultMessage:"The application for the student org discount will be open until October 13, 2023."},question6:{id:"studentGroupSignup.studentGroupFaq.question6",defaultMessage:"How do I know when I’ve been approved?"},answer6:{id:"studentGroupSignup.studentGroupFaq.answer6",defaultMessage:"Our team will reach out to you once your application has been reviewed! If you’ve been approved for the discount, your workspace will be upgraded."},question7:{id:"studentGroupSignup.studentGroupFaq.question7",defaultMessage:"Do high school organizations qualify for the discount?"},answer7:{id:"studentGroupSignup.studentGroupFaq.answer7",defaultMessage:"We are not offering our Education discount to high schools at this time."},question8:{id:"studentGroupSignup.studentGroupFaq.question8",defaultMessage:"Will the application open again? What if I’m outside the US?"},answer8:{id:"studentGroupSignup.studentGroupFaq.answer8",defaultMessage:"For our initial launch, we’re opening up applications for a limited time to US-only higher education institutions. In the future, we may expand eligibility to others and we may open applications again."},question9:{id:"studentGroupSignup.studentGroupFaq.question9",defaultMessage:"Is there a discount for students outside of student orgs?"},answer9:{id:"studentGroupSignup.studentGroupFaq.answer9",defaultMessage:"<p>Yes! We currently offer our 1-member Plus plan for free to students.</p><p>Learn more about our Notion for education program <link>here</link>.</p>"},question10:{id:"studentGroupSignup.studentGroupFaq.question10",defaultMessage:"How do I join the Notion student community?"},answer10:{id:"studentGroupSignup.studentGroupFaq.answer10",defaultMessage:"<p>Want to represent the next generation of toolmakers on your campus? <linkToCommunity>Join our growing Campus Leaders community</linkToCommunity>, representing over 100 campuses across the globe and counting.</p><p>Visit our <campusLeadersPage>Campus Leaders page</campusLeadersPage> to stay-in-the-know about all of the latest events happening on your campus. </p>"}}),Z=e=>{let{faq:t}=e;window.__c={n:"FaqDrawerItem"};const[o,i]=(0,a.useState)(!1),r=(0,s.yK)((e=>({faq:{borderBottom:`1px solid ${e.lightDividerColor}`},question:{margin:0,cursor:"pointer",display:"flex",alignItems:"center",width:"100%",justifyContent:"space-between"},questionText:{padding:"1em 20px 1em 0",fontWeight:u.Z.fontWeight.semibold},answer:{paddingBottom:"1em"}})),[]);return a.createElement(a.Fragment,null,n()("section",{style:r.faq},void 0,n()("header",{style:r.question,role:"button","aria-pressed":o?"true":"false",onClick:()=>i((e=>!e))},void 0,n()("div",{style:r.questionText},void 0,t.question),o?(0,x.$)({width:14,height:14}):(0,C.R)({width:14,height:14})),o&&n()("div",{style:r.answer},void 0,t.answer)))};const I=function(){window.__c={n:"StudentGroupSignupFaq"};const e=(0,d.useIntl)(),t=[{question:e.formatMessage(z.question1),answer:e.formatMessage(z.answer1,{bold:e=>n()("b",{},void 0,e),italic:e=>n()("i",{},void 0,e),p:e=>n()("p",{},void 0,e),link:e=>n()(G.Z,{href:"https://www.notion.so/pricing"},void 0,e)})},{question:e.formatMessage(z.question2),answer:e.formatMessage(z.answer2,{p:e=>n()("p",{},void 0,e),bold:e=>n()("b",{},void 0,e)})},{question:e.formatMessage(z.question3),answer:e.formatMessage(z.answer3,{p:e=>n()("p",{},void 0,e)})},{question:e.formatMessage(z.question4),answer:a.createElement(a.Fragment,null,e.formatMessage(z.answer4part1,{p:e=>n()("p",{},void 0,e),link:e=>n()(G.Z,{href:"https://www.notion.so/notion-for-student-orgs-apply"},void 0,e)}),n()("ul",{},void 0,e.formatMessage(z.answer4part2,{list:e=>n()("li",{},void 0,e)})),e.formatMessage(z.answer4part3,{p:e=>n()("p",{},void 0,e)}))},{question:e.formatMessage(z.question5),answer:e.formatMessage(z.answer5)},{question:e.formatMessage(z.question6),answer:e.formatMessage(z.answer6)},{question:e.formatMessage(z.question7),answer:e.formatMessage(z.answer7)},{question:e.formatMessage(z.question8),answer:e.formatMessage(z.answer8,{p:e=>n()("p",{},void 0,e)})},{question:e.formatMessage(z.question9),answer:e.formatMessage(z.answer9,{link:e=>n()(G.Z,{href:"https://www.notion.so/product/notion-for-education"},void 0,e),p:e=>n()("p",{},void 0,e)})},{question:e.formatMessage(z.question10),answer:e.formatMessage(z.answer10,{linkToCommunity:e=>n()(G.Z,{href:"https://notion.notion.site/Notion-Campus-Leaders-Program-5817b00cbaa244bca9e0e498804cbab4"},void 0,e),campusLeadersPage:e=>n()(G.Z,{href:"https://notion.notion.site/Notion-Campus-Leaders-Program-5817b00cbaa244bca9e0e498804cbab4"},void 0,e),p:e=>n()("p",{},void 0,e)})}],o=(0,s.yK)((e=>({faqWrap:{borderTop:`1px solid ${e.lightDividerColor}`}})),[]);return n()("article",{style:o.faqWrap},void 0,t.length>0&&t.map(((e,t)=>n()(Z,{faq:e},`faq-${t}`))))};o(57658);var T=o(480),_=o(59054),N=o(72126),E=o(54642),P=o(97122),L=o(60458),W=o(73420),O=o(74194),D=o(31278),V=o(64369),B=o(96),A=o(10434),R=o.n(A),K=o(49085),U=o(35840),X=o(78140),H=o(87279),Y=o(48019),j=o(52275),$=o(68894),J=o(53437),Q=o(72495);class ee extends K.default{getInitialState(){return{query:"",focus:!1}}}const te=function(e){window.__c={n:"SearchSelectionDropdown"};const{items:t,onSelect:o,analyticsName:i,doNotFilter:u}=e,d=(0,T.O7)(),l=(0,r.qz)(e.store,ee),{query:p,focus:g}=(0,r.VK)((()=>null==l?void 0:l.state),[l]),c=(0,s.yK)((e=>({textInput:{fontSize:14,borderRadius:k.Z.borderRadius,padding:"8px 14px",height:36},icon:{width:16,fill:e.lightIconColor}})),[]),m=(0,a.useMemo)((()=>e=>l.setState({...l.state,query:e})),[l]),f=(0,a.useMemo)((()=>e=>l.setState({...l.state,focus:e})),[l]),v=(0,a.useMemo)((()=>[{key:"selections",render:e=>a.createElement(Q.Z,R()({},e,{loading:!1})),actions:t.map(((e,t)=>{const{label:n,value:r,icon:s}=e;return{key:t,value:r??n,displayName:n,analyticsName:i,searchName:void 0,render:e=>a.createElement(j.Z,R()({},e,{title:n,icon:s,focused:!1})),action:()=>{m(n),f(!1),null==o||o(e)},closeParentMenu:!0}}))}]),[t,o,i,f,m]);return n()(J.ZP,{popupType:J.ZP.PopupType.Popup,placementToOrigin:J.ZP.Placement.Bottom,sameWidthAsOrigin:!0,open:g,onDismiss:()=>{f(!1)},origin:n()($.ZP,{inputLeft:""===p&&n()($.f_,{icon:U.R}),showClearButton:!0,value:p,onChange:e=>{m(e.target.value),f(!0)},placeholder:"Type to search...",focus:g,inputOuterStyle:{...c.textInput},onClick:()=>{f(!0)},onClearButtonClick:()=>{m(""),f(!0),null==o||o(void 0)},itemMarginLeft:0,itemMarginRight:0}),render:()=>n()(X.Z,{menuType:H.og.Popup,maxHeight:200,tokenInputHeader:!0,disableHeaderBorder:!0},void 0,n()(Y.Z,{filter:u?void 0:p,context:{blocks:[],environment:d,publicEditMode:void 0},initialFocus:0,sections:v}))})};var oe=o(38755),ie=o(80444),ne=o(59730),ae=o(30845);function re(e){if(!e||0===e.length)throw new ne.XV("This field is required.",{type:"student_group_response_missing"});if(!ae.B(e,"url"))throw new ne.XV("Link to student organization is invalid URL.",{type:"student_group_url_invalid"})}function se(e){if(!e||0===e.length)throw new ne.XV("This field is required.",{type:"student_group_response_missing"});if(e.length>2e3)throw new ne.XV("Response is too long. Please limit your answers to 2000 characters.",{type:"student_group_response_too_long"})}function ue(e,t){if(!e||0===e.length)throw new ne.XV(`This field is required: ${t}`,{type:"student_group_response_missing"})}var de=o(47307),le=o(33954),pe=o(33929);const ge=["workspaceError","institutionError","organizationError","linkToOrganizationError","purposeError"];class ce extends K.default{getInitialState(){return{spaceId:"",spaceName:"",domain:"",userEmail:"",institutionName:"",organizationName:"",linkToOrganization:"",purpose:"",linkToFormVerification:void 0,workspaceError:void 0,institutionError:void 0,organizationError:void 0,linkToOrganizationError:void 0,purposeError:void 0}}}const me=new ce,fe=(0,d.defineMessages)({submitSuccess:{id:"studentGroupSignupForm.success",defaultMessage:"Your application has been submitted! You'll hear back from our team once your application has been reviewed."}});function ve(e){const{value:t,validationFunction:o,fieldName:i}=e;try{o(t),me.setState({...me.state,[i]:void 0})}catch(n){if((0,ne.Cx)(n)){const e=(0,le.nX)(pe.default.getIntl(),n.body);e&&me.setState({...me.state,[i]:e})}}}function he(e){try{const{spaceId:t,institutionName:o,organizationName:i,linkToOrganization:n,purpose:a}=e;!function(e){ve({value:e,validationFunction:ue,fieldName:"workspaceError"})}(t),function(e){ve({value:e,validationFunction:ue,fieldName:"institutionError"})}(o),ve({value:i,validationFunction:se,fieldName:"organizationError"}),ve({value:n,validationFunction:re,fieldName:"linkToOrganizationError"}),function(e){ve({value:e,validationFunction:se,fieldName:"purposeError"})}(a)}catch(t){return!1}for(const o of ge)if(void 0!==me.state[o])return!1;return!0}async function ye(e){const{environment:t,setIsSubmitting:o,institutionNameDropdownStore:i,spaceNameDropdownStore:n}=e;if(he(me.state))try{o(!0);const e=await E.submitEducationGroupApplication(t,{institution:me.state.institutionName,purpose:me.state.purpose,linkToOrganization:me.state.linkToOrganization,spaceId:me.state.spaceId,userEmail:me.state.userEmail,linkToFormVerification:me.state.linkToFormVerification,studentOrgName:me.state.organizationName});if("success"!==e.type){const t=e.body;return void((0,ne.Jx)(t)?function(e){const t=e.clientData.type,o=(0,le.nX)(pe.default.getIntl(),e);o||de.showMessage({message:t});switch(t){case"student_institution_domain_mismatch":me.setState({...me.state,institutionError:o});break;case"student_group_link_to_organization_domain_mismatch":case"student_group_url_invalid":me.setState({...me.state,linkToOrganizationError:o});break;default:de.showMessage({message:o})}}(t):de.showError(e))}de.showMessage({message:pe.default.formatMessage(fe.submitSuccess)}),me.reset(),i.reset(),n.reset()}finally{o(!1)}}const we=function(){window.__c={n:"StudentGroupSignupForm"};const e=(0,T.O7)(),{organizationName:t,linkToOrganization:o,purpose:i,workspaceError:u,institutionError:p,organizationError:g,linkToOrganizationError:c,purposeError:m}=(0,r.VK)((()=>me.state),[]),f=(0,r.qz)(void 0,ee),v=(0,r.qz)(void 0,ee),h=(0,r.VK)((()=>{var e;const t=null===(e=ie.default.state.currentUserStore)||void 0===e?void 0:e.getModel();return t?t.getEmail():""}),[]),y=(0,r.VK)((()=>{var e;return null===(e=ie.default.state.currentUserRootStore)||void 0===e?void 0:e.getSpaceViewStores()}),[]),{query:w}=(0,r.VK)((()=>f.state),[f]),b=(0,s.yK)((e=>({textInput:{fontSize:14,borderRadius:k.Z.borderRadius,padding:"8px 14px"},textInputDisabled:{fontSize:14,borderRadius:k.Z.borderRadius,padding:"8px 14px"},checkboxContainer:{display:"flex",alignItems:"center",gap:6},formBody:{display:"flex",flexDirection:"column",gap:24,marginTop:24},errorText:{color:e.errorText,fontSize:12}})),[]),S=(0,r.VK)((()=>y?function(e,t){if(!t)return[];const o=N.mN(t,(e=>e.getSpaceId())).filter((e=>{const t=e.getSpaceStore();return e.isDefined()&&t&&t.canAdmin()})),i=[];for(const a of o){const t=a.getSpaceStore();if(t){const o=(0,oe.rn)(e,t),r=(0,oe.Wd)(e,t);i.push({label:o,value:a.getSpaceId(),icon:n()(D.Z,{icon:r,isEmptyPage:!1,title:o,size:20,disabled:!0})})}}return i}(e,y):[]),[e,y]);(0,a.useEffect)((()=>{me.reset(),f.reset(),v.reset(),me.setState({...me.state,userEmail:h})}),[h]);const[{value:M}]=(0,_.r5)((async()=>{const t=await async function(e,t){const o=await E.getUniversitiesAndDomains(e,{query:t,limit:20});if("success"!==o.type||!o.data||0===o.data.length)return[];return o.data.map((e=>({label:e.name})))}(e,w);return t||[]}),[e,w],{debounce:300}),[F,q]=(0,a.useState)(!1),[x,C]=(0,a.useState)(!1);return a.createElement(a.Fragment,null,n()("div",{},void 0,n()("h3",{},void 0,n()(d.FormattedMessage,{id:"studentGroupSignupContainer.applicationHeader",defaultMessage:"Application"}))),n()("div",{style:b.formBody},void 0,n()(W.X2,{},void 0,n()(B.Z,{isMultiline:!0,name:a.createElement(a.Fragment,null,n()(d.FormattedMessage,{id:"studentGroupSignupForm.question1.label",defaultMessage:"What is the account email you’re using to log in to your student organization’s workspace?"}),n()("br",{}),n()("br",{}),n()(d.FormattedMessage,{id:"studentGroupSignupForm.question1.info",defaultMessage:"<italic>Note:</italic> Your account's email must be your official education email.",values:{italic:e=>n()("i",{},void 0,e)}}))},void 0,n()(O.Z,{type:"text",style:b.textInputDisabled,value:h,disabled:!0}))),n()(W.X2,{},void 0,n()(B.Z,{name:n()(d.FormattedMessage,{id:"studentGroupSignupForm.question2.label",defaultMessage:"Select your student-led organization's workspace"}),errorMessage:u},void 0,n()(te,{items:S,onSelect:e=>{me.setState({...me.state,spaceName:(null==e?void 0:e.label)||"",spaceId:(null==e?void 0:e.value)||""})},store:v,analyticsName:"studentGroupSignupForm.workspaceDropdown"}))),n()(W.X2,{},void 0,n()(B.Z,{name:n()(d.FormattedMessage,{id:"studentGroupSignupForm.question3.label",defaultMessage:"Select your institution"}),errorMessage:p},void 0,n()(te,{items:M||[],onSelect:e=>{me.setState({...me.state,institutionName:e?e.label:""})},store:f,analyticsName:"studentGroupSignupForm.institutionDropdown",doNotFilter:!0}))),n()(W.X2,{},void 0,n()(B.Z,{name:n()(d.FormattedMessage,{id:"studentGroupSignupForm.question5.label",defaultMessage:"What is the name of your student organization?"}),errorMessage:g},void 0,n()(O.Z,{value:t,type:"text",style:b.textInput,onBlur:e=>{me.setState({...me.state,organizationName:e.target.value})}}))),n()(W.X2,{},void 0,n()(B.Z,{isMultiline:!0,name:a.createElement(a.Fragment,null,n()(d.FormattedMessage,{id:"studentGroupSignupForm.question6.label",defaultMessage:"Please provide a link to your student-led organization listed on your institution’s official website.",values:{bold:e=>n()("b",{},void 0,e)}})),errorMessage:c},void 0,n()(O.Z,{value:o,placeholder:"https://",type:"url",style:b.textInput,onBlur:e=>{me.setState({...me.state,linkToOrganization:e.target.value.trim()})}}))),n()(W.X2,{},void 0,n()(B.Z,{name:n()(d.FormattedMessage,{id:"studentGroupSignupForm.7.label",defaultMessage:"What are you using this discount for?"}),errorMessage:m},void 0,n()(O.Z,{value:i,type:"text",textarea:!0,style:b.textInput,onBlur:e=>{me.setState({...me.state,purpose:e.target.value})}}))),n()(W.X2,{},void 0,n()(V.Z,{isMultiline:!0},void 0,n()("p",{},void 0,n()(d.FormattedMessage,{defaultMessage:"By checking this box, I confirm I am representing a student organization enrolled at the institution I provided.",id:"studentGroupSignupForm.userAgreement.line1"})),n()("p",{},void 0,n()(d.FormattedMessage,{defaultMessage:"You or a member of your student organization must retain proof of enrollment for the duration of your access to the Notion for Student Orgs plan. Notion reserves the right to ask for your eligibility while your workspace is on this discount.",id:"studentGroupSignupForm.userAgreement.line2"})),n()("p",{},void 0,n()(d.FormattedMessage,{defaultMessage:"<bold>If you have misrepresented your eligibility in violation of our terms of service, you agree to pay Notion for any service fees that were initially waived due to the information you provided about your status as a student organization.</bold>",id:"studentGroupSignupForm.userAgreement.line3",values:{bold:e=>n()("b",{},void 0,e)}})))),n()(W.X2,{},void 0,n()("div",{style:b.checkboxContainer},void 0,n()(L.Z,{checked:F,onClick:()=>{q(!F)},size:14}),n()("div",{},void 0,n()(V.Z,{},void 0,n()(d.FormattedMessage,{defaultMessage:"Yes, I confirm.",id:"studentGroupSignupForm.userAgreement.confirm"}))))),!F&&n()("div",{},void 0,n()(V.Z,{style:b.errorText},void 0,"Please confirm before submitting.")),n()(W.X2,{},void 0,n()(P.h,{disabled:x||!F,onClick:async()=>{await ye({environment:e,setIsSubmitting:C,institutionNameDropdownStore:f,spaceNameDropdownStore:v})}},void 0,n()(d.FormattedMessage,{id:"studentGroupSignupForm.submit.label",defaultMessage:"Submit"}),x&&n()(l.Z,{style:{marginLeft:4}})))))};const be=function(e){let{}=e;window.__c={n:"StudentGroupSignup"};const t=(0,s.yK)((e=>({faqHeader:{marginTop:0,fontSize:24,fontWeight:u.Z.fontWeight.semibold,color:e.regularTextColor,marginBottom:24},center:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"}})),[]),[o,i]=a.useState(!1);a.useEffect((()=>{c.default.waitUntilStatsigReady().then((()=>{i(!0)}))}),[]);const m=(0,r.VK)((()=>o&&c.default.checkGate("student_form")),[o]);return o?m?n()(q,{},void 0,n()(we,{}),n()(p.Z,{size:80}),n()("div",{style:t.faqHeader},void 0,n()(d.FormattedMessage,{id:"studentGroupSignup.faq.title",defaultMessage:"FAQs"})),n()(I,{}),n()(p.Z,{size:60})):n()(g.LazyPageError,{route:{name:"notFound"},publicPageData:void 0}):n()("div",{style:t.center},void 0,n()(l.Z,{}))}},80342:(e,t,o)=>{o.d(t,{$:()=>a});var i=o(23174),n=o.n(i);o(67294);const a=(0,o(45238).I)("minus",{viewBox:"0 0 16 16",svg:n()("path",{d:"M3.037 8.844h9.92a.705.705 0 00.368-.103.825.825 0 00.28-.28.73.73 0 000-.773.752.752 0 00-.28-.28.705.705 0 00-.369-.102H3.037a.705.705 0 00-.369.102.824.824 0 00-.28.28.73.73 0 000 .772.914.914 0 00.28.281.705.705 0 00.37.103z"})})}}]);