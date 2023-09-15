"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[7866],{93963:(e,t,o)=>{o.d(t,{z:()=>a});var r=o(23174),i=o.n(r),n=(o(67294),o(24405)),s=o(5366);function a(e){let{color:t,size:o,style:r}=e;window.__c={n:"StatusDot"};const a=(0,s.useIntl)(),l=(0,n.yK)((e=>({dot:{height:o||8,width:o||8,background:t||e.blueColor,flexShrink:0,borderRadius:"100%",pointerEvents:"none",...r}})),[o,t,r]);return i()("div",{role:"img","aria-label":a.formatMessage({id:"statusDot.ariaLabel",defaultMessage:"New"}),style:l.dot})}},23160:(e,t,o)=>{o.r(t),o.d(t,{default:()=>ie});var r=o(10434),i=o.n(r),n=o(23174),s=o.n(n),a=(o(57658),o(67294)),l=o(83355),d=o(40902),c=o(15145),u=o(41432),h=o(39068),p=o(92785),g=o(55061),v=o(89101),m=o(21202),b=o(6287),y=o(13493),f=o(70279),A=o(33709),S=o(15047),O=o(99108),M=o(97880),k=o(5366),T=o(57559),_=o(1136),C=o(45669),P=o(84076),R=o(63381),w=o(13658),B=o(17022),I=o(69616),E=o(12472),Z=o(36081),D=o(22649),V=o(78976),L=o(74970),F=o(480),N=o(86628),K=o(24405),U=(o(45433),o(23867)),x=o(70203),j=o(82990),W=o(19719),G=o(4083),X=o(60682),Y=o(14976),H=o(98165),q=o(62385),z=o(92559);function $(e){let{activity:t,tabArgs:o,rootStore:r,isLast:n}=e;window.__c={n:"CommentActivityUpdate"};const l=(0,N.VK)((()=>t.getEdits()),[t]),{source:d,tab:u,notification:h}=o;let p=l.filter((e=>{switch(e.type){case"comment-changed":return!1;case"comment-created":case"comment-deleted":return!0;default:(0,M.t1)(e)}}));0===p.length&&0!==l.length&&"updates_sidebar"!==d&&(p=l);const g=p.length>0,v=(0,F.O7)(),b=(0,N.VK)((()=>{const e=r.getRecordStore(r,{table:A.qF,id:t.discussion_id,spaceId:t.space_id});if(e.isDefined())return e}),[t,r]),y=(0,N.VK)((()=>{const e=null==b?void 0:b.getParentPointer();if(e)return T.G.createChildStore(r,e)}),[b,r]),f=(0,N.VK)((()=>Boolean(y&&y.isDefined())),[y]),S=(0,N.VK)((()=>{const e=null==y?void 0:y.getNavigableBlockStore();return(null==e?void 0:e.id)||t.navigable_block_id}),[t.navigable_block_id,y]),O=T.G.createChildStore(r,{table:m.iU,id:S}),_=(0,N.VK)((()=>O.isDefined()),[O]),C=(0,N.VK)((()=>Boolean(y&&(0,H.fl)((0,H.qA)(y)))),[y]),E=(0,N.VK)((()=>{if(!C||!y)return;const e=y.getModel();return e?e.getRenderUrl({getRecordModel:r.getRecordModel,discussionId:t.discussion_id,pageVisitSource:c.tY.Notification}):void 0}),[C,y,r,t.discussion_id]),Z=(0,N.VK)((()=>(0,I.P6)({edits:p,rootStore:r})),[p,r]),K=(0,N.VK)((()=>(0,I.XW)(Z)),[Z]),U=C,x=(0,a.useCallback)((e=>{if((0,B.dG)({...o,environment:v,activity:t,mightCloseTab:U}),!C&&y&&b){var r;const i=e.target;G.oK({environment:v,discussionStore:b,rect:i.getBoundingClientRect(),blockStore:y,discussionLocation:te({forReplyMenu:!0,source:o.source}),activityId:t.id,notificationId:null===(r=o.notification)||void 0===r?void 0:r.id})}}),[t,C,y,b,v,o,U]),j=(0,a.useCallback)((()=>{(0,B.BE)({...o,environment:v,activity:t,mightCloseTab:U})}),[o,v,t,U]),W=s()(V.Z,{titledRecordStore:O,getRecordModel:r.getRecordModel,activity:t,tabArgs:o}),X=(0,N.VK)((()=>(0,I.jC)({recordId:S,recordType:m.iU,tab:u,rootStore:r,environment:v})),[S,u,r,v]),Y=v.device.isMobile,q=(0,N.VK)((()=>te({source:d,forReplyMenu:!1})),[d]),z=(0,N.VK)((()=>(0,I.cr)({activity:t,rootStore:r})),[t,r]),$=null==z?void 0:z.id,ee=null==z?void 0:z.context;return g&&_&&f&&b?a.createElement(L.ZP,i()({timestamp:parseInt(t.end_time),header:s()("span",{},void 0,s()(k.FormattedMessage,{defaultMessage:"{numberOfAuthors, plural, one {{authorOrAuthors} commented in {blockName}} other {{authorOrAuthors} commented in {blockName}}}",values:{numberOfAuthors:Z.length,authorOrAuthors:K,blockName:W},id:"activity.commentActivity.header"})),isLast:n,isPrivate:X,rootStore:r,navigableBlockId:t.navigable_block_id,notification:h,icon:s()(L.BE,{authors:Z}),showSnapshotButton:!1},(0,B.h9)({notification:h,environment:v,tab:u,activity:t})),s()(J,{url:E,onClick:x,discussionId:$,discussionContext:ee,alwaysHighlightWithBlockBar:!1,rootStore:r,source:d}),s()(w.Z,{visible:5,items:p.map(((e,t,o)=>s()(P.Z,{onClick:x,href:E,innerStyle:(0,D.OD)({source:d,isMobile:Y})},t,s()(R.Z,{edit:e,rootStore:r,type:"comment-edit",discussionLocation:q,onReactionClick:j,hideAuthorName:!1}))))}),s()(Q,{activity:t,rootStore:r,tabArgs:o})):null}function J(e){window.__c={n:"CommentContext"};const{url:t,onClick:o,rootStore:r,source:i,discussionId:n,alwaysHighlightWithBlockBar:a,discussionContext:l}=e,d=0===(0,x.llS)(l).length||a,c=(0,F.O7)(),u=c.device.isMobile,h=(0,K.Fg)(),p=(0,K.yK)((e=>({linkbox:{...(0,D.OD)({source:i,isMobile:u}),display:"flex",alignItems:"center",fontSize:14,...d&&{color:e.mediumTextColor},paddingTop:2,paddingBottom:6,marginBottom:0}})),[u,i,d]),g=(0,N.VK)((()=>(0,Y.IY)({environment:c,textValue:l?{value:l,spaceId:r.id}:void 0,parentStore:r,disableHover:!0,disableStyleAnnotations:d,disableDateStyleAnnotations:!1,disabled:!0,highlightDiscussionId:n,theme:h,emojiType:(0,X.e_)(c),katex:c.KatexStore.getKatex(),formulaValueTypes:[]})),[r,c,l,n,h,d]);return l?s()(P.Z,{href:t,onClick:o,innerStyle:p.linkbox},void 0,d&&s()(z.Z,{}),s()("div",{style:j.Z.textOverflowStyle},void 0,g)):null}function Q(e){window.__c={n:"CommentActions"};const{activity:t,rootStore:o,tabArgs:r}=e,{source:i,notification:n,tab:l}=r,d=(0,N.VK)((()=>{const e=o.getRecordStore(o,{table:A.qF,id:t.discussion_id,spaceId:t.space_id});if(e.isDefined())return e}),[t,o]),c=(0,F.O7)(),u=c.device.isMobile,h=(0,N.VK)((()=>T.t1.createChildStore(o,{table:A.qF,id:t.discussion_id,spaceId:(0,U.C)(o.pointer.spaceId)})),[t,o]),p=(0,N.VK)((()=>null==d?void 0:d.getParentId()),[d]),g=(0,a.useCallback)((e=>{if(!p)return;const r=T.G.createChildStore(o,{table:m.iU,id:p}),s=e.target,a=null==n?void 0:n.id;G.oK({environment:c,discussionStore:h,rect:s.getBoundingClientRect(),blockStore:r,discussionLocation:te({forReplyMenu:!0,source:i}),activityId:t.id,notificationId:a}),"notifications_tab"===i&&W.gY({environment:c,notificationId:a,alreadyRead:Boolean(null==n?void 0:n.read),activity:t,tab:l})}),[t,h,c,n,p,o,i,l]),v=(0,K.yK)((e=>({container:{paddingLeft:(0,D.c3)({source:i,isMobile:u}),paddingTop:12,paddingBottom:4},actionButton:(0,D.b9)(e)})),[u,i]),b=Boolean(null==n?void 0:n.visited);return d?s()("div",{style:v.container},void 0,s()(q.Z,{onClick:g,style:v.actionButton},void 0,s()(k.FormattedMessage,{defaultMessage:"Reply",id:"activity.replyButton.label"})),b&&a.createElement(a.Fragment,null,s()(ee,{}),s()(E.D,{tabArgs:r,environment:c,rootStore:o,activity:t}))):null}function ee(){return s()("div",{style:{width:5,display:"inline-block"}})}function te(e){const{forReplyMenu:t,source:o}=e;if("updates_sidebar"===o)return t?"reply_menu_updates_sidebar":"updates_sidebar";return`${t?"reply_menu_":"updates_menu_"}${W.Jn()}`}const oe=a.memo($);class re extends l.Z{constructor(){super(...arguments),this.renderBlockEdit=(e,t,o)=>{const{tabArgs:r}=this.props,{source:i}=r;let n=this.getRecordModel({table:m.iU,id:e.block_id});n&&n.type===u.Ti.tableRow&&(n=this.getRecordModel({table:m.iU,id:n.parent_id}));const a=n?n.getRenderUrl({getRecordModel:this.getRecordModel,pageVisitSource:c.tY.Activity}):v._j.root,l=this.environment.device.isMobile;return"block-deleted"===e.type?e.block_data.block_value.type===u.Ti.page?s()(P.Z,{href:a,onClick:()=>(0,B.dG)({...r,environment:this.environment,activity:o}),innerStyle:(0,D.OD)({source:i,isMobile:l})},t,s()(R.Z,{edit:e,rootStore:this.props.rootStore})):s()("div",{style:(0,D.OD)({source:i,isMobile:l})},t,s()(R.Z,{edit:e,rootStore:this.props.rootStore})):s()(P.Z,{href:a,onClick:()=>(0,B.dG)({...r,environment:this.environment,activity:o}),innerStyle:(0,D.OD)({source:i,isMobile:l})},t,s()(R.Z,{edit:e,rootStore:this.props.rootStore}))},this.renderCollectionPropertyEdit=(e,t)=>{if("collection-property-changed"!==e.type)return;const{source:o}=this.props.tabArgs,r=this.environment.device.isMobile;return s()(P.Z,{href:t,innerStyle:(0,D.OD)({source:o,isMobile:r})},void 0,s()(R.Z,{edit:e,rootStore:this.props.rootStore}))},this.getRecordStore=e=>this.props.rootStore.getRecordStore(this.props.rootStore,e),this.getSpaceStore=e=>T.H2.createChildStore(this.props.rootStore,{table:S.bx,id:e}),this.getDiscussionContext=()=>{const e=(0,I.cr)({activity:this.props.activity,rootStore:this.props.rootStore});if(e)return e.context}}willMountOrUpdate(){this.warmCommentData(),this.environment.KatexStore.loadIfNeeded(this.getDiscussionContext)}warmCommentData(){if("commented"===this.props.activity.type){const t=this.getRecordStore({table:A.qF,id:this.props.activity.discussion_id,spaceId:this.props.activity.space_id});if(t.isDefined()){const o=t.getCommentStores();for(const t of o){var e;null===(e=t.getCreatedByStore())||void 0===e||e.load()}}}}renderComponent(){const{activity:e,rootStore:t,tabArgs:o,isLast:r}=this.props,i=e.type;if(!d.KN(i))return p.log({level:"error",from:"ActivityUpdate",type:"unsupportedActivityType",data:{message:`Activity type ${i} is not supported for ActivityUpdate`}}),null;switch(i){case"block-edited":return this.renderBlockEditActivity(e);case"collection-row-created":case"collection-row-deleted":return this.renderCollectionRowActivity(e);case"top-level-block-created":case"top-level-block-deleted":return this.renderTopLevelBlockActivity(e);case"permissions-edited":return this.renderPermissionsActivity(e);case"permission-group-edited":return this.renderPermissionGroupActivity(e);case"commented":return s()(oe,{activity:e,tabArgs:o,rootStore:t,isLast:r});case"collection-edited":return this.renderCollectionEdited(e);case"collection-view-edited":return this.renderCollectionViewEdited(e);case"collection-property-edited":return this.renderCollectionPropertyEdited(e);case"page-locked":case"page-unlocked":return this.renderPageLockActivity(e);case"page-deleted":case"page-restored":case"page-permanently-deleted":return this.renderPageDeleteOrRestoreActivity(e);default:(0,M.t1)(i)}}renderBlockEditActivity(e){const{tabArgs:t,rootStore:o}=this.props,{notification:r,tab:n}=t,l=e.getEdits();if(!l.length)return;const d=(0,O.hI)(l).filter((e=>{const{block_value:t}="block-changed"===e.type?e.block_data.after:e.block_data;return t.parent_table!==f.x_}));if(0===d.length)return;const c=this.getBlockStore(d[0].navigable_block_id);if(!c.isDefined())return;const u=(0,I.P6)({edits:d,rootStore:o}),h=(0,I.XW)(u),p=s()(V.Z,{titledRecordStore:c,activity:e,tabArgs:t,getRecordModel:o.getRecordModel});return a.createElement(L.ZP,i()({timestamp:parseInt(e.end_time),header:s()("span",{},void 0,s()(k.FormattedMessage,{defaultMessage:"{numberOfAuthors, plural, one {{authorOrAuthors} edited {pageTitle}} other {{authorOrAuthors} edited {pageTitle}}}",id:"activity.blockEdited.header",values:{numberOfAuthors:u.length,authorOrAuthors:h,pageTitle:p}})),isLast:this.props.isLast,isPrivate:(0,I.jC)({recordId:c.id,recordType:"block",tab:n,rootStore:o,environment:this.environment}),rootStore:this.props.rootStore,navigableBlockId:c.id,notification:r,icon:s()(L.BE,{authors:u}),showSnapshotButton:this.isTopbarUpdatesMenu()},(0,B.h9)({notification:r,activity:e,environment:this.environment,tab:n})),s()(w.Z,{visible:5,items:d.map(((t,o)=>this.renderBlockEdit(t,o,e)))}),s()(E.Z,{tabArgs:t,activity:e,isMobile:this.environment.device.isMobile,environment:this.environment,rootStore:o}))}renderCollectionRowActivity(e){const{tabArgs:t,rootStore:o}=this.props,{notification:r,tab:n}=t,l=e.getEdits();if(!l.length)return;const d=l[0],c=this.getBlockStore(e.collection_row_id);if(!c.isDefined())return;if(!c.getProperties())return;const u=(0,I.P6)({edits:l,rootStore:o}),h=(0,I.XW)(u),p=s()(V.Z,{titledRecordStore:c,activity:e,tabArgs:t,getRecordModel:o.getRecordModel}),g="collection-row-created"===d.type?s()(k.FormattedMessage,{defaultMessage:"{numberOfAuthors, plural, one {{authorOrAuthors} created {pageTitle}} other {{authorOrAuthors} created {pageTitle}}}",values:{numberOfAuthors:u.length,authorOrAuthors:h,pageTitle:p},id:"activity.collectionRowCreated.header"}):s()(k.FormattedMessage,{defaultMessage:"{numberOfAuthors, plural, one {{authorOrAuthors} deleted {pageTitle}} other {{authorOrAuthors} deleted {pageTitle}}}",values:{numberOfAuthors:u.length,authorOrAuthors:h,pageTitle:p},id:"activity.collectionRowDeleted.header"});return a.createElement(L.ZP,i()({timestamp:parseInt(e.end_time),header:s()("span",{},void 0,g),isLast:this.props.isLast,isPrivate:(0,I.jC)({recordId:c.id,recordType:"block",tab:n,rootStore:o,environment:this.environment}),rootStore:this.props.rootStore,navigableBlockId:c.id,notification:r,icon:s()(L.BE,{authors:u}),showSnapshotButton:this.isTopbarUpdatesMenu()},(0,B.h9)({notification:r,activity:e,environment:this.environment,tab:n})),s()(E.Z,{tabArgs:t,activity:e,isMobile:this.environment.device.isMobile,environment:this.environment,rootStore:o}))}renderTopLevelBlockActivity(e){const{tabArgs:t,rootStore:o}=this.props,{notification:r,tab:n}=t,l=e.getEdits();if(!l.length)return;const d=l[0],c=this.getBlockStore(e.top_level_block_id);if(!c.isDefined())return;const u=c.hasSpacePermission(),h=(0,I.P6)({edits:l,rootStore:o}),p=(0,I.XW)(h),g=s()(V.Z,{titledRecordStore:c,activity:e,tabArgs:t,getRecordModel:o.getRecordModel});let v;return v=u?"top-level-block-created"===d.type?s()(k.FormattedMessage,{defaultMessage:"{numberOfAuthors, plural, one {{authorOrAuthors} created workspace page {pageTitle}} other {{authorOrAuthors} created workspace page {pageTitle}}}",values:{numberOfAuthors:h.length,authorOrAuthors:p,pageTitle:g},id:"activity.topLevelBlockWorkspaceCreated.header"}):s()(k.FormattedMessage,{defaultMessage:"{numberOfAuthors, plural, one {{authorOrAuthors} deleted workspace page {pageTitle}} other {{authorOrAuthors} deleted workspace page {pageTitle}}}",values:{numberOfAuthors:h.length,authorOrAuthors:p,pageTitle:g},id:"activity.topLevelBlockWorkspaceDeleted.header"}):"top-level-block-created"===d.type?s()(k.FormattedMessage,{defaultMessage:"{numberOfAuthors, plural, one {{authorOrAuthors} created private page {pageTitle}} other {{authorOrAuthors} created private page {pageTitle}}}",values:{numberOfAuthors:h.length,authorOrAuthors:p,pageTitle:g},id:"activity.topLevelBlockPrivateCreated.header"}):s()(k.FormattedMessage,{defaultMessage:"{numberOfAuthors, plural, one {{authorOrAuthors} deleted private page {pageTitle}} other {{authorOrAuthors} deleted private page {pageTitle}}}",values:{numberOfAuthors:h.length,authorOrAuthors:p,pageTitle:g},id:"activity.topLevelBlockPrivateDeleted.header"}),a.createElement(L.ZP,i()({timestamp:parseInt(e.end_time),header:s()("span",{},void 0,v),isLast:this.props.isLast,isPrivate:(0,I.jC)({recordId:c.id,recordType:"block",tab:n,rootStore:o,environment:this.environment}),rootStore:this.props.rootStore,notification:r,icon:s()(L.BE,{authors:h}),showSnapshotButton:!1},(0,B.h9)({notification:r,activity:e,environment:this.environment,tab:n})))}renderPermissionsActivity(e){const{tabArgs:t,rootStore:o}=this.props,{notification:r,tab:n,source:l}=t,c=e.getEdits();if(!c.length)return;const u=(0,O.hI)(c);if(0===u.length)return;let h,p;const g=u[0];if(g.navigable_block_id){const r=this.getBlockStore(g.navigable_block_id);if(!r.isDefined())return;p=s()(V.Z,{titledRecordStore:r,activity:e,tabArgs:t,getRecordModel:o.getRecordModel}),h=(0,I.jC)({recordId:r.id,recordType:"block",tab:n,rootStore:o,environment:this.environment})}else{const r=this.getSpaceStore(g.space_id);if(!r.isDefined())return;p=s()(V.Z,{titledRecordStore:r,activity:e,tabArgs:t,getRecordModel:o.getRecordModel}),h=(0,I.jC)({recordId:g.space_id,recordType:"space",tab:n,rootStore:o,environment:this.environment})}const{autojoinEdits:v,inheritanceEdits:m,otherEdits:b}=d.md(u),y=[];v.forEach(((t,l)=>{const d=(0,I.P6)({edits:[t],rootStore:o}),c=(0,I.XW)(d);y.push(a.createElement(L.ZP,i()({key:`autojoin-${l}`,timestamp:t.timestamp,header:s()("span",{},void 0,s()(k.FormattedMessage,{defaultMessage:"{numberOfAuthors, plural, one {{authorOrAuthors} joined {pageOrSpaceName}} other {{authorOrAuthors} joined {pageOrSpaceName}}}",values:{numberOfAuthors:d.length,authorOrAuthors:c,pageOrSpaceName:p},id:"activity.permissionsActivity.header"})),isLast:this.props.isLast,isPrivate:h,rootStore:this.props.rootStore,navigableBlockId:t.navigable_block_id,notification:r,icon:s()(L.BE,{authors:d}),showSnapshotButton:!1},(0,B.h9)({notification:r,activity:e,environment:this.environment,tab:n}))))}));const f=this.environment.device.isMobile;m.forEach(((d,c)=>{const u=(0,I.P6)({edits:[d],rootStore:o}),g=(0,I.XW)(u);let v;"permission-restriction-created"===d.type?v=s()(k.FormattedMessage,{defaultMessage:"{numberOfAuthors, plural, one {{authorOrAuthors} restricted access for {pageOrSpaceName}} other {{authorOrAuthors} restricted access for {pageOrSpaceName}}}{inSudoMode, select, true { using administrator privileges} other {}}",values:{numberOfAuthors:u.length,authorOrAuthors:g,pageOrSpaceName:p,inSudoMode:d.inSudoMode},id:"activity.restrictPermissionsForActivity.header"}):"permission-restriction-deleted"===d.type&&(v=s()(k.FormattedMessage,{defaultMessage:"{numberOfAuthors, plural, one {{authorOrAuthors} restored inherited access for {pageOrSpaceName}} other {{authorOrAuthors} restored inherited access for {pageOrSpaceName}}}{inSudoMode, select, true { using administrator privileges} other {}}",values:{numberOfAuthors:u.length,authorOrAuthors:g,pageOrSpaceName:p,inSudoMode:d.inSudoMode},id:"activity.restorePermissionsForActivity.header"})),y.push(a.createElement(L.ZP,i()({key:`inheritance-${c}`,timestamp:parseInt(e.end_time),header:s()("span",{},void 0,v),isLast:this.props.isLast,isPrivate:h,rootStore:this.props.rootStore,navigableBlockId:d.navigable_block_id,notification:r,icon:s()(L.BE,{authors:u}),showSnapshotButton:!1},(0,B.h9)({notification:r,activity:e,environment:this.environment,tab:n})),s()("div",{style:(0,D.OD)({source:l,isMobile:f})},void 0,s()(R.Z,{edit:d,rootStore:this.props.rootStore})),s()(E.Z,{tabArgs:t,activity:e,isMobile:f,environment:this.environment,rootStore:o})))}));const A=(d,c,u)=>{if(d.length>0){const p=(0,I.P6)({edits:d,rootStore:o});y.push(a.createElement(L.ZP,i()({key:c,timestamp:parseInt(e.end_time),header:u,isLast:this.props.isLast,isPrivate:h,rootStore:this.props.rootStore,navigableBlockId:g.navigable_block_id,notification:r,icon:s()(L.BE,{authors:p}),showSnapshotButton:!1},(0,B.h9)({notification:r,activity:e,environment:this.environment,tab:n})),d.map(((e,t,o)=>s()("div",{style:(0,D.OD)({source:l,isMobile:f})},t,s()(R.Z,{edit:e,rootStore:this.props.rootStore},t)))),s()(E.Z,{tabArgs:t,activity:e,isMobile:this.environment.device.isMobile,environment:this.environment,rootStore:o})))}},S=b.filter((e=>!e.inSudoMode));if(S.length>0){const e=(0,I.P6)({edits:S,rootStore:o}),t=(0,I.XW)(e);A(S,"other",s()("span",{},void 0,s()(k.FormattedMessage,{defaultMessage:"{numberOfAuthors, plural, one {{authorOrAuthors} updated permission for {pageOrSpaceName}} other {{authorOrAuthors} updated permission for {pageOrSpaceName}}}",values:{numberOfAuthors:e.length,authorOrAuthors:t,pageOrSpaceName:p},id:"activity.updatedPermissionsForActivity.header"})))}const M=b.filter((e=>e.inSudoMode));if(M.length>0){const e=(0,I.P6)({edits:M,rootStore:o}),t=(0,I.XW)(e);A(M,"other-sudo",s()("span",{},void 0,s()(k.FormattedMessage,{defaultMessage:"{numberOfAuthors, plural, one {{authorOrAuthors} updated permission for {pageOrSpaceName}} other {{authorOrAuthors} updated permission for {pageOrSpaceName}}} using administrator privileges",values:{numberOfAuthors:e.length,authorOrAuthors:t,pageOrSpaceName:p},id:"activity.updatedPermissionsForActivityInSudoMode.header"})))}return y}renderPermissionGroupActivity(e){const{tabArgs:t,rootStore:o}=this.props,{notification:r,tab:n,source:l}=t,d=e.getEdits();if(!d.length)return;const c=(0,O.hI)(d),u=c[0];if(!u)return;const h=this.getSpaceStore(u.space_id);if(!h.isDefined())return;const p=(0,B.ME)(h.getModel().getRenderUrl({})),v=s()(Z.Z,{permissionGroup:(0,g.c_)({activity:e,getRecordValue:this.getRecordValue}),spaceId:e.space_id}),m=(0,I.P6)({edits:c,rootStore:o}),b=this.environment.device.isMobile;return a.createElement(L.ZP,i()({timestamp:parseInt(e.end_time),header:s()("span",{},void 0,this.renderPermissionGroupEditedHeader({activity:e,authors:m,groupName:v})),isLast:this.props.isLast,isPrivate:(0,I.jC)({recordId:e.space_id,recordType:"space",tab:n,rootStore:o,environment:this.environment}),rootStore:o,notification:r,icon:s()(L.BE,{authors:m}),showSnapshotButton:!1},(0,B.h9)({notification:r,activity:e,environment:this.environment,tab:n})),s()(P.Z,{href:p,onClick:()=>(0,B.dG)({...t,environment:this.environment,activity:e}),innerStyle:(0,D.OD)({source:l,isMobile:b})},void 0,s()(R.Z,{edit:u,rootStore:o})),s()(E.Z,{tabArgs:t,activity:e,isMobile:b,environment:this.environment,rootStore:o}))}renderCollectionEdited(e){const{tabArgs:t,rootStore:o}=this.props,{notification:r,tab:n}=t,l=e.getEdits();if(!l.length)return;const u=this.getRecordStore({table:b.v,id:e.collection_id,spaceId:e.space_id});if(!u.isDefined())return;const h=l[0];if(!h)return;const p=u.getModel().getRenderUrl({getRecordModel:this.getRecordModel,pageVisitSource:c.tY.Activity}),g=(0,I.P6)({edits:l,rootStore:o}),v=(0,I.XW)(g),m=s()(V.Z,{titledRecordStore:u,activity:e,tabArgs:t,getRecordModel:o.getRecordModel}),y="collection-created"===h.type?s()(k.FormattedMessage,{defaultMessage:"{numberOfAuthors, plural, one {{authorOrAuthors} created {collectionTitle}} other {{authorOrAuthors} created {collectionTitle}}}",values:{numberOfAuthors:g.length,authorOrAuthors:v,collectionTitle:m},id:"activity.collectionCreated.header"}):s()(k.FormattedMessage,{defaultMessage:"{numberOfAuthors, plural, one {{authorOrAuthors} edited {collectionTitle}} other {{authorOrAuthors} edited {collectionTitle}}}",values:{numberOfAuthors:g.length,authorOrAuthors:v,collectionTitle:m},id:"activity.collectionEdited.header"});return a.createElement(L.ZP,i()({timestamp:parseInt(e.end_time),header:s()("span",{},void 0,y),isLast:this.props.isLast,isPrivate:(0,I.jC)({recordId:e.collection_id,recordType:"collection",tab:n,rootStore:o,environment:this.environment}),rootStore:o,navigableBlockId:e.navigable_block_id,notification:r,icon:s()(L.BE,{authors:g}),showSnapshotButton:this.isTopbarUpdatesMenu()},(0,B.h9)({notification:r,activity:e,environment:this.environment,tab:n})),d.OC(h)&&this.renderCollectionDescriptionEdit(h,p),s()(E.Z,{tabArgs:t,activity:e,isMobile:this.environment.device.isMobile,environment:this.environment,rootStore:o}))}renderCollectionDescriptionEdit(e,t){const{source:o}=this.props.tabArgs,r=this.environment.device.isMobile;return s()(P.Z,{href:t,innerStyle:(0,D.OD)({source:o,isMobile:r})},void 0,s()(R.Z,{edit:e,rootStore:this.props.rootStore}))}renderCollectionViewEdited(e){const{tabArgs:t,rootStore:o}=this.props,{notification:r,tab:n}=t,l=e.getEdits();if(!l.length)return;const d=this.getRecordStore({table:b.v,id:e.collection_id,spaceId:e.space_id});if(!d.isDefined())return;const c=this.getRecordStore({table:y.n,id:e.collection_view_id,spaceId:e.space_id});if(!c.isDefined())return;const u=(0,O.hI)(l),h=u[0];if(!h)return;const p=this.renderCollectionViewTitle(c,e),g=s()(V.Z,{titledRecordStore:d,activity:e,tabArgs:t,getRecordModel:o.getRecordModel}),v=(0,I.P6)({edits:u,rootStore:o}),m=(0,I.XW)(v);let f;return f="collection-view-created"===h.type?s()(k.FormattedMessage,{defaultMessage:"{numberOfAuthors, plural, one {{authorOrAuthors} created view {collectionViewTitle} in {collectionTitle}} other {{authorOrAuthors} created view {collectionViewTitle} in {collectionTitle}}}",values:{numberOfAuthors:v.length,authorOrAuthors:m,collectionTitle:g,collectionViewTitle:p},id:"activity.collectionViewCreated.header"}):"collection-view-deleted"===h.type?s()(k.FormattedMessage,{defaultMessage:"{numberOfAuthors, plural, one {{authorOrAuthors} deleted view {collectionViewTitle} in {collectionTitle}} other {{authorOrAuthors} deleted view {collectionViewTitle} in {collectionTitle}}}",values:{numberOfAuthors:v.length,authorOrAuthors:m,collectionTitle:g,collectionViewTitle:p},id:"activity.collectionViewDeleted.header"}):s()(k.FormattedMessage,{defaultMessage:"{numberOfAuthors, plural, one {{authorOrAuthors} edited view {collectionViewTitle} in {collectionTitle}} other {{authorOrAuthors} edited view {collectionViewTitle} in {collectionTitle}}}",values:{numberOfAuthors:v.length,authorOrAuthors:m,collectionTitle:g,collectionViewTitle:p},id:"activity.collectionViewEdited.header"}),a.createElement(L.ZP,i()({timestamp:parseInt(e.end_time),header:s()("span",{},void 0,f),isLast:this.props.isLast,isPrivate:(0,I.jC)({recordId:e.collection_id,recordType:"collection",tab:n,rootStore:o,environment:this.environment}),rootStore:o,navigableBlockId:e.navigable_block_id,notification:r,icon:s()(L.BE,{authors:v}),showSnapshotButton:this.isTopbarUpdatesMenu()},(0,B.h9)({notification:r,activity:e,environment:this.environment,tab:n})),s()(E.Z,{tabArgs:t,activity:e,isMobile:this.environment.device.isMobile,environment:this.environment,rootStore:o}))}renderCollectionPropertyEdited(e){const{tabArgs:t,rootStore:o}=this.props,{notification:r,tab:n}=t,l=e.getEdits();if(!l.length)return;const d=(0,O.hI)(l),u=d[0];if(!u)return;const h=this.getRecordStore({table:b.v,id:e.collection_id,spaceId:e.space_id});if(!h.isDefined())return;const p=h.getModel().getRenderUrl({getRecordModel:this.getRecordModel,pageVisitSource:c.tY.Activity}),g="collection-property-changed"===u.type?u.collection_property_data.after:u.collection_property_data,v=(0,I.P6)({edits:d,rootStore:o}),m=(0,I.XW)(v),y=s()(V.Z,{titledRecordStore:h,activity:e,tabArgs:t,getRecordModel:o.getRecordModel}),f=this.renderCollectionPropertyTitle(g);let A;return A="collection-property-created"===u.type?s()(k.FormattedMessage,{defaultMessage:"{numberOfAuthors, plural, one {{authorOrAuthors} created property {collectionPropertyTitle} in {collectionTitle}} other {{authorOrAuthors} created property {collectionPropertyTitle} in {collectionTitle}}}",values:{numberOfAuthors:v.length,authorOrAuthors:m,collectionTitle:y,collectionPropertyTitle:f},id:"activity.collectionPropertyCreated.header"}):"collection-property-deleted"===u.type?s()(k.FormattedMessage,{defaultMessage:"{numberOfAuthors, plural, one {{authorOrAuthors} deleted property {collectionPropertyTitle} in {collectionTitle}} other {{authorOrAuthors} deleted property {collectionPropertyTitle} in {collectionTitle}}}",values:{numberOfAuthors:v.length,authorOrAuthors:m,collectionTitle:y,collectionPropertyTitle:f},id:"activity.collectionPropertyDeleted.header"}):s()(k.FormattedMessage,{defaultMessage:"{numberOfAuthors, plural, one {{authorOrAuthors} edited property {collectionPropertyTitle} in {collectionTitle}} other {{authorOrAuthors} edited property {collectionPropertyTitle} in {collectionTitle}}}",values:{numberOfAuthors:v.length,authorOrAuthors:m,collectionTitle:y,collectionPropertyTitle:f},id:"activity.collectionPropertyEdited.header"}),a.createElement(L.ZP,i()({timestamp:parseInt(e.end_time),header:s()("span",{},void 0,A),isLast:this.props.isLast,isPrivate:(0,I.jC)({recordId:e.collection_id,recordType:"collection",tab:n,rootStore:o,environment:this.environment}),rootStore:o,navigableBlockId:e.navigable_block_id,notification:r,icon:s()(L.BE,{authors:v}),showSnapshotButton:this.isTopbarUpdatesMenu()},(0,B.h9)({notification:r,activity:e,environment:this.environment,tab:n})),s()(w.Z,{visible:5,items:d.map((e=>this.renderCollectionPropertyEdit(e,p)))}),s()(E.Z,{tabArgs:t,activity:e,isMobile:this.environment.device.isMobile,environment:this.environment,rootStore:o}))}renderPageLockActivity(e){const{tabArgs:t,rootStore:o}=this.props,{notification:r,tab:n}=t,l=e.getEdits();if(!l.length)return;const d=l[0],c=this.getBlockStore(d.navigable_block_id);if(!c.isDefined())return;const u=(0,I.P6)({edits:l,rootStore:o}),h=(0,I.XW)(u),p=s()(V.Z,{titledRecordStore:c,activity:e,tabArgs:t,getRecordModel:o.getRecordModel}),g="page-locked"===e.type?s()(k.FormattedMessage,{defaultMessage:"{numberOfAuthors, plural, one {{authorOrAuthors} locked {blockTitle}} other {{authorOrAuthors} locked {blockTitle}}}",values:{numberOfAuthors:u.length,authorOrAuthors:h,blockTitle:p},id:"activity.pageLocked.header"}):s()(k.FormattedMessage,{defaultMessage:"{numberOfAuthors, plural, one {{authorOrAuthors} unlocked {blockTitle}} other {{authorOrAuthors} unlocked {blockTitle}}}",values:{numberOfAuthors:u.length,authorOrAuthors:h,blockTitle:p},id:"activity.pageUnlocked.header"});return a.createElement(L.ZP,i()({timestamp:parseInt(e.end_time),header:s()("span",{},void 0,g),isPrivate:(0,I.jC)({recordId:c.id,recordType:"block",tab:n,rootStore:o,environment:this.environment}),isLast:this.props.isLast,rootStore:o,navigableBlockId:c.id,notification:r,icon:s()(L.BE,{authors:u}),showSnapshotButton:!1},(0,B.h9)({notification:r,activity:e,environment:this.environment,tab:n})),s()(E.Z,{tabArgs:t,activity:e,isMobile:this.environment.device.isMobile,environment:this.environment,rootStore:o}))}renderPageDeleteOrRestoreActivity(e){const{tabArgs:t,rootStore:o}=this.props,{notification:r,tab:n}=t,l=e.getEdits();if(!l.length)return;const d=l[0];if(!d)return;const c=this.getRecordStore({table:m.iU,id:d.navigable_block_id,spaceId:d.space_id});if(!c.isDefined())return;const u=(0,I.P6)({edits:l,rootStore:o}),h=(0,I.XW)(u),p=s()(V.Z,{titledRecordStore:c,activity:e,tabArgs:t,getRecordModel:o.getRecordModel});let g;return"page-deleted"===e.type?g=s()(k.FormattedMessage,{defaultMessage:"{numberOfAuthors, plural, one {{authorOrAuthors} deleted {blockTitle}} other {{authorOrAuthors} deleted {blockTitle}}}",values:{numberOfAuthors:u.length,authorOrAuthors:h,blockTitle:p},id:"emailActivity.pageDeleted.header"}):"page-restored"===e.type?g=s()(k.FormattedMessage,{defaultMessage:"{numberOfAuthors, plural, one {{authorOrAuthors} restored {blockTitle}} other {{authorOrAuthors} restored {blockTitle}}}",values:{numberOfAuthors:u.length,authorOrAuthors:h,blockTitle:p},id:"emailActivity.pageRestored.header"}):"page-permanently-deleted"===e.type?g=s()(k.FormattedMessage,{defaultMessage:"{numberOfAuthors, plural, one {{authorOrAuthors} permanently deleted {blockTitle}} other {{authorOrAuthors} permanently deleted {blockTitle}}}",values:{numberOfAuthors:u.length,authorOrAuthors:h,blockTitle:p},id:"emailActivity.pagePermanentlyDeleted.header"}):(0,M.t1)(e),a.createElement(L.ZP,i()({timestamp:parseInt(e.end_time),header:s()("span",{},void 0,g),isPrivate:(0,I.jC)({recordId:c.id,recordType:"block",tab:n,rootStore:o,environment:this.environment}),isLast:this.props.isLast,rootStore:o,navigableBlockId:c.id,notification:r,icon:s()(L.BE,{authors:u}),showSnapshotButton:!1},(0,B.h9)({notification:r,activity:e,environment:this.environment,tab:n})),s()(E.Z,{tabArgs:t,activity:e,isMobile:this.environment.device.isMobile,environment:this.environment,rootStore:o}))}renderCollectionPropertyTitle(e){const{theme:t}=this;return s()("span",{style:{...D.nP,whiteSpace:"nowrap"}},void 0,s()(h.ZP,{icon:e.icon,type:e.type,size:12,style:re.svgIconStyle,theme:t}),e.name)}renderCollectionViewTitle(e,t){const{tabArgs:o}=this.props;if(!e.isDefined())return;const r=e.getModel().getRenderUrl({getRecordModel:this.getRecordModel,pageVisitSource:c.tY.Activity}),i=e.getFormat().collection_view_icon,n=e.getType();return s()(P.Z,{href:r,onClick:()=>(0,B.V3)({environment:this.environment,activity:t,...o}),external:!1,innerStyle:{...D.lS,...D.nP},inline:!0},void 0,s()(_.F,{viewIcon:i,viewType:n,color:"light",style:{display:"inline-block",verticalAlign:"middle",marginRight:4,marginBottom:2},size:12}),s()(C.Z,{collectionViewName:e.getName(),collectionViewType:e.getType()}))}isTopbarUpdatesMenu(){return"pageUpdatesSidebar"===this.props.tabArgs.tab}renderPermissionGroupEditedHeader(e){const{activity:t,authors:o,groupName:r}=e,i=(0,I.XW)(o),n=(0,O.hI)(t.getEdits())[0];return n?"permission-group-created"===n.type?s()(k.FormattedMessage,{defaultMessage:"{numberOfAuthors, plural, one {{authorOrAuthors} created group {groupName}} other {{authorOrAuthors} created group {groupName}}}",values:{numberOfAuthors:o.length,authorOrAuthors:i,groupName:s()("span",{style:D.nP},void 0,r)},id:"activity.updatedPermissionGroupCreated.header"}):"permission-group-deleted"===n.type?s()(k.FormattedMessage,{defaultMessage:"{numberOfAuthors, plural, one {{authorOrAuthors} deleted group {groupName}} other {{authorOrAuthors} deleted group {groupName}}}",values:{numberOfAuthors:o.length,authorOrAuthors:i,groupName:s()("span",{style:D.nP},void 0,r)},id:"activity.updatedPermissionGroupDeleted.header"}):s()(k.FormattedMessage,{defaultMessage:"{numberOfAuthors, plural, one {{authorOrAuthors} edited group {groupName}} other {{authorOrAuthors} edited group {groupName}}}",values:{numberOfAuthors:o.length,authorOrAuthors:i,groupName:s()("span",{style:D.nP},void 0,r)},id:"activity.updatedPermissionGroupEditedDefault.header"}):s()(k.FormattedMessage,{defaultMessage:"{numberOfAuthors, plural, one {{authorOrAuthors} edited group {groupName}} other {{authorOrAuthors} edited group {groupName}}}",values:{numberOfAuthors:o.length,authorOrAuthors:i,groupName:s()("span",{style:D.nP},void 0,r)},id:"activity.updatedPermissionGroupEdit.header"})}get getRecordValue(){return this.props.rootStore.getRecordValue}get getRecordModel(){return this.props.rootStore.getRecordModel}getBlockStore(e){return T.G.createChildStore(this.props.rootStore,{table:m.iU,id:e})}}re.displayName="ActivityUpdate",re.svgIconStyle={width:12,height:12,display:"inline-block",verticalAlign:"middle",marginBottom:2,marginRight:4};const ie=re},44295:(e,t,o)=>{o.d(t,{I:()=>n});var r=o(23174),i=o.n(r);o(67294);const n=(0,o(45238).I)("random",{viewBox:"0 0 14 14",svg:i()("path",{d:"M9.45002,6.2999567 C8.87013,6.2999567 8.40002,5.8298565 8.40002,5.24995625 C8.40002,4.670056 8.87013,4.1999558 9.45002,4.1999558 C10.0299,4.1999558 10.5,4.670056 10.5,5.24995625 C10.5,5.8298565 10.0299,6.2999567 9.45002,6.2999567 Z M4.55,6.2999567 C3.9701,6.2999567 3.5,5.8298565 3.5,5.24995625 C3.5,4.670056 3.9701,4.1999558 4.55,4.1999558 C5.1299,4.1999558 5.6,4.670056 5.6,5.24995625 C5.6,5.8298565 5.1299,6.2999567 4.55,6.2999567 Z M6.993,0 C10.864,0 14,3.13600534 14,7.000007 C14,10.8639987 10.864,14 6.993,14 C3.129,14 0,10.8639987 0,7.000007 C0,3.13600534 3.129,0 6.993,0 Z M7,12.5999994 C10.094,12.5999994 12.6,10.0939983 12.6,7.000007 C12.6,3.90600567 10.094,1.4000046 7,1.4000046 C3.906,1.4000046 1.4,3.90600567 1.4,7.000007 C1.4,10.0939983 3.906,12.5999994 7,12.5999994 Z M7,10.8499986 C5.369,10.8499986 3.976,9.83499821 3.416,8.4000076 L4.585,8.4000076 C5.075,9.23299796 5.964,9.7999982 7,9.7999982 C8.036,9.7999982 8.932,9.23299796 9.415,8.4000076 L10.584,8.4000076 C10.024,9.83499821 8.631,10.8499986 7,10.8499986 Z"})})}}]);