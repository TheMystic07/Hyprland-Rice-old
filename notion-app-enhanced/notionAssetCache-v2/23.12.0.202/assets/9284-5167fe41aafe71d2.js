"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[9284],{9284:(e,t,o)=>{o.r(t),o.d(t,{applyFeatures:()=>ne,applyPresetFeatures:()=>re,createTypedDBsInTeam:()=>me,createWikiInTeam:()=>ve,initializeApp:()=>te,installAppsInTeam:()=>fe,removeDependencies:()=>ae});o(57658),o(21703);var r=o(15145),i=o(41432),n=o(90559),a=o(14714),l=o(99036),c=o(80951),p=o(45433),s=o(77657),d=o(6695),u=o(92785),m=o(74181),f=o(72126),v=o(91155),_=o(4615),g=o(21202),S=o(6287),y=o(13493),b=o(9844),w=o(15047),k=o(29369),h=o(19889),C=o(11002),P=o(73314),V=o(70203),I=o(97880),T=o(5366),U=o(58449),M=o(93959),A=o(52821),R=o(78316),B=o(77181),E=o(33929),z=o(95697),x=o(30874),F=o(57559),O=o(50906),W=o(54642),D=o(81924),H=o(74882),Z=o(16956),q=o(76427),N=o(28673),j=o(47307),G=o(96802),K=o(94419),Y=o(70442),$=o(9953),X=o(75018),L=o(28014),J=o(150),Q=o(39699);const ee=(0,T.defineMessages)({initializeAppTemplateError:{id:"appTemplateActions.initializeAppTemplateError.message",defaultMessage:"Duplicate template failed."}});function te(e){const{environment:t,temporaryContainerBlockStore:o,transaction:i}=e,a=re({...e,initializeStore:o,createOrModify:"create"});return a&&a.length>0&&X.navigateToBlock({environment:t,store:a[0],redirect:!0,pageVisitSource:r.tY.Onboarding}),i.postSubmitCallbacks.push((async e=>{e?j.showErrorMessage(E.default.formatMessage(ee.initializeAppTemplateError)):a&&await async function(e){const{environment:t,appCollectionViewBlockStores:o}=e,r=f.oA(o.map((e=>{const t=e.getCollectionViewCollectionStore();if(t){const e=t.getSchema();if((0,n.$z)(e).length>0)return t}})));for(const i of r)await H.K({environment:t,collectionStore:i})}({environment:t,appCollectionViewBlockStores:a})})),a}function oe(e){const{environment:t,spaceViewStore:o,appUri:r,parentStore:n,spaceId:a,transaction:l,presetUri:c}=e,p=(0,U.appPackageConfigs)().find((e=>e.uri===r));if(!n.isDefined()||!p)return;if(0===p.presets.length)throw new Error(`No presets configuration for specified app: ${r}`);const s=p.presets.find((e=>e.uri===c));if(c&&!s)throw new Error("Couldn't find specified preset");const d=s||p.presets[0],u=(0,M.KC)((0,U.appPackageConfigs)(),d),m=p.presets.filter((e=>!(0,M.Mi)(e.uri)));if(r.startsWith("notion://wiki")||1!==m.length){const e=$.ae({environment:t,table:g.iU,value:{type:i.Ti.collectionViewPage,parent_id:n.id,parent_table:n.table,space_id:a,format:{app_config_uri:r,collection_view_sub_type:"app_container",page_icon:p.logo,app_template_preset:d.uri,app_template_features:u},properties:{title:(0,V.TPx)(r.startsWith("notion://wiki")?p.name:d.shortName)},alive:!0},inMemoryRecordCache:n.inMemoryRecordCache,transaction:l}),c=F.G.createChildStore(n,e.pointer);return de(t,o,n,c,l,"prepend"),[c]}return ne({environment:t,spaceViewStore:o,appParentStore:n,appUri:r,features:u,createOrModify:"create",transaction:l})}function re(e){const{environment:t,appUri:o,presetUri:r,transaction:i,createOrModify:n,from:a}=e,l=(0,U.appPackageConfigs)().find((e=>e.uri===o)),c=null==l?void 0:l.presets.find((e=>e.uri===r));if(c)return i.postSubmitCallbacks.push((e=>{O.Y4z(t,{preset_uri:ie(r),status:Boolean(e)?"fail":"success",from:a}),e&&u.log({level:"error",from:"appTemplateActions.applyPresetFeatures",type:"transactionFailed",error:(0,v.Ui)(e),data:{miscDataToConvertToString:{appUri:o,presetUri:r,createOrModify:n,from:a}}})})),ne({...e,features:(0,M.KC)((0,U.appPackageConfigs)(),c)});u.log({level:"error",from:"appTemplateActions.applyPresetFeatures",type:"presetNotFound",error:{name:`Preset not found for appUri ${o} and presetUri ${r}. From: ${a}`}})}function ie(e){return p.wC.template_gallery.filter((e=>e!==p.rK)).includes(e)?e:"other"}function ne(e){const{environment:t,spaceViewStore:o,appParentStore:r,appUri:n,features:s,transaction:u,createOrModify:v}=e,k=(0,U.appPackageConfigs)().find((e=>e.uri===n));if(!k||!r.isDefined())return;let C;if("modify"===v){const t=f.jj(f.oA(e.appCollectionViewBlockStores.map((e=>e.getFormat().app_id))));if(1!==t.length)throw new Error("App collection view block stores must have the same app id");C=t[0]}const P=(0,M._3)({featurePointers:s,appPackage:k});if(0===P.length)return;let T={};if("create"===e.createOrModify&&e.initializeStore){const t=P.filter((e=>"collection_view_block"===e.type));t.length>0&&($.sW({store:e.initializeStore,data:{type:e.initializeStore.isType(i.Ti.collectionViewPage)||e.initializeStore.isType(i.Ti.collectionView)?e.initializeStore.getType():i.Ti.collectionViewPage,format:{collection_pointer:e.initializeStore.getFormat().collection_pointer,app_config_uri:t[0].uri,page_icon:t[0].icon,page_cover:t[0].cover},properties:{...e.initializeStore.getProperties(),title:(0,V.TPx)(t[0].name)}},transaction:u}),T[t[0].uri]=e.initializeStore.id)}else"modify"===e.createOrModify&&(T=Object.assign({},...f.oA(e.appCollectionViewBlockStores.map((e=>{var t;return null===(t=e.getFormat())||void 0===t?void 0:t.app_uri_map})))));const A={...T};!function(e,t,o,r,i,n,s){const u=[...r.filter((e=>{let{type:t}=e;return"collection_view_block"===t})),...r.filter((e=>{let{type:t}=e;return"collection"===t})),...r.filter((e=>{let{type:t}=e;return"sub_external_collection"===t})),...r.filter((e=>{let{type:t}=e;return"property"===t})),...r.filter((e=>{let{type:t}=e;return"database_template"===t})),...r.filter((e=>{let{type:t}=e;return"block"===t})),...r.filter((e=>{let{type:t}=e;return"view"===t}))],v=o.table===w.bx?o.id:o.getSpaceId();if(!v)return;for(const c of u)if("collection_view_block"===c.type){const r=i[c.uri];if(r){var _;const i=F.G.createChildStore(o,{table:g.iU,id:r,spaceId:v});null!==(_=le(t,o,i))&&void 0!==_&&null!==(_=_.getValue())&&void 0!==_&&_.includes(i.id)||de(e,t,o,i,s,"append"),$.sW({store:i,data:{parent_id:o.id,parent_table:o.table,alive:!0},transaction:s})}else{const r=$.ae({environment:e,table:g.iU,inMemoryRecordCache:o.inMemoryRecordCache,value:{type:o.table===g.iU&&"app_container"===o.getFormat().collection_view_sub_type?"collection_view":"collection_view_page",parent_id:o.id,parent_table:o.table,space_id:v,format:{app_config_uri:c.uri,page_icon:c.icon,page_cover:c.cover},properties:{title:(0,V.TPx)(c.name)},alive:!0},transaction:s});i[c.uri]=r.id;de(e,t,o,F.G.createChildStore(o,r.pointer),s,"append")}}else if("collection"===c.type){const t=ue(o,c.blockUri,i);if(!t)throw new Error("SubViewBlockStore not found");const r=t.getCollectionViewSourceCollectionStore();r&&q.A9({collectionViewBlockStore:t,collectionStore:r,transaction:s});const n=i[c.uri];if(n){const e=F.NW.createChildStore(o,{table:S.v,id:n,spaceId:v});q.zz({collectionViewBlockStore:t,collectionStore:e,transaction:s}),$.sW({store:e,data:{alive:!0,parent_id:t.id,parent_table:t.table},transaction:s})}else{const o=$.ae({environment:e,table:S.v,inMemoryRecordCache:t.inMemoryRecordCache,value:{...c.value,parent_id:t.id,parent_table:t.table,space_id:t.getSpaceId(),format:{app_config_uri:c.uri,app_uri_map:Object.fromEntries(Object.keys(c.value.schema??{}).filter((e=>e.startsWith("notion://"))).map((e=>[e,e]))),...c.value.format},alive:!0},transaction:s});i[c.uri]=o.id;const r=F.NW.createChildStore(t,o.pointer);q.zz({collectionViewBlockStore:t,collectionStore:r,transaction:s})}}else if("sub_external_collection"===c.type){const t=x.Z.getIntegrationsAsRecordMap().getValue({table:b.K2,id:c.integrationId});if(!t||!(0,m.VM)(t))throw new Error("Invalid integration");const r=se(o,c.parentCollectionUri,i);if(!r)throw new Error("Unable to find parent collection store");const n=r.getDeletedSchema()[c.relationUri];if(n&&(0,l.NK)(n)&&n.collection_pointer){i[c.uri]=n.collection_pointer.id;continue}const a=N.c({environment:e,pattern:c.pattern,integration:t,parentCollectionStore:r,transaction:s});i[c.uri]=a.id}else if("property"===c.type)pe({environment:e,appConfig:n,appParentStore:o,dependency:c,uriMap:i,transaction:s});else if("view"===c.type){const t="block"===o.table&&o.getFormat().app_config_uri===c.blockUri?o:ue(o,c.blockUri,i);if(!t)throw new Error("View's home block not found");const r=i[c.uri];if(r){const e=F.Xr.createChildStore(o,{table:y.n,id:r,spaceId:v});$.sW({store:e,data:{alive:!0,parent_id:t.id,parent_table:t.table},transaction:s}),K.R3({parent:t.getCollectionViewsStore(),append:e,transaction:s})}else{var k,C,P,T,U,A,R,E,z,O,W;const r=se(o,c.collectionUri,i);if(!r)throw new Error("View source collection not found");const n=r.getPropertyMapping(),l=e=>(null==n?void 0:n[e])??e,u=null===(k=c.value.format)||void 0===k?void 0:k.collection_group_by,m=u?{...u,property:l(u.property)}:void 0,_=null===(C=c.value.format)||void 0===C?void 0:C.board_columns_by,g=_?{..._,property:l(_.property)}:void 0,S=null==n?void 0:n[p.Es.SubTaskRelation],b=null==n?void 0:n[p.Es.BlockingRelation],w=c.value.type,h=w?(0,d.oz)(w):void 0,V=h?null===(P=c.value.format)||void 0===P?void 0:P[h]:void 0,x=h?{[h]:null==V?void 0:V.map((e=>{const t=l(e.property);return{...e,property:t}}))}:{};if(S&&!(0,B.Av)(w)&&h){var D;const e=null===(D=x[h])||void 0===D?void 0:D.findIndex((e=>e.property===S)),t=x[h];t&&(!e||e<0?t.push({property:S,visible:!0}):t[e].visible=!0)}const H={...c.value.format,collection_group_by:m,board_columns_by:g,property_filters:null===(T=c.value.format)||void 0===T||null===(T=T.property_filters)||void 0===T?void 0:T.map((e=>{let{id:t,filter:o}=e;const{filter:r}=o;if("relation_contains"===r.operator){const e=(Array.isArray(r.value)?r.value:[r.value]).map((e=>{const t=e.type;if("relative"===t)return e;if("exact"===t){const t=e.value,o=t&&i[t];return o?{...e,value:o}:e}(0,I.t1)(t)}));return{id:t,filter:{property:l(o.property),filter:{operator:r.operator,value:e}}}}return{id:t,filter:{...o,property:l(o.property)}}})),collection_groups:null===(U=c.value.format)||void 0===U||null===(U=U.collection_groups)||void 0===U?void 0:U.map((e=>"relation"===e.value.type&&e.value.value&&!(0,a.t2)(e.value.value)&&i[e.value.value.id]?{...e,value:{type:"relation",value:{id:i[e.value.value.id],table:"block",spaceId:r.getSpaceId()}}}:e)),...x,table_subitem_toggle_column:"title",...S?{collection_view_subitem:{property:S}}:{},...b?{timeline_arrows_by:{property:b}}:{}},Z=f.oA(null===(A=c.value.page_sort)||void 0===A?void 0:A.map((e=>i[e]))),q=null===(R=c.value.query2)||void 0===R||null===(R=R.aggregations)||void 0===R?void 0:R.map((e=>e.property?{...e,property:(null==n?void 0:n[e.property])??e.property}:e)),N=null===(E=c.value.query2)||void 0===E||null===(E=E.sort)||void 0===E?void 0:E.map((e=>({...e,property:l(e.property)}))),j=null===(z=c.value.query2)||void 0===z?void 0:z.timeline_by,G=j?l(j):void 0,Y=null===(O=c.value.query2)||void 0===O?void 0:O.calendar_by,X=Y?l(Y):void 0,L=null===(W=c.value.query2)||void 0===W?void 0:W.filter,J=L?(0,M.RN)(L,n):void 0,Q=$.ae({environment:e,table:y.n,inMemoryRecordCache:o.inMemoryRecordCache,value:{...c.value,parent_id:t.id,parent_table:t.table,space_id:v,format:{...H,app_config_uri:c.uri,collection_pointer:r.pointer},query2:{...c.value.query2,filter:J,aggregations:q,sort:N,timeline_by:G,calendar_by:X},page_sort:Z,alive:!0},transaction:s});i[c.uri]=Q.id;const ee=F.Xr.createChildStore(t,Q.pointer);K.R3({parent:t.getCollectionViewsStore(),append:ee,transaction:s})}}else if("database_template"===c.type){const t=se(o,c.collectionUri,i);if(!t)throw new Error("Collection not found");const r=t.getTemplatePagesStore(),n=i[c.uri];if(n){const e=F.G.createChildStore(t,{table:g.iU,id:n,spaceId:t.getSpaceId()});$.sW({store:e,data:{alive:!0,parent_id:t.id,parent_table:t.table,is_template:!0},transaction:s}),K.R3({parent:r,append:e,transaction:s}),c.isDefault&&G.FH({stores:[t],update:{collection_default_template:{template_page_id:e.id}},transaction:s})}else{var H;const n=$.ae({environment:e,table:g.iU,inMemoryRecordCache:o.inMemoryRecordCache,value:{...c.blockValue,parent_id:t.id,parent_table:t.table,space_id:t.getSpaceId(),is_template:!0,alive:!0,format:{...null===(H=c.blockValue)||void 0===H?void 0:H.format,app_config_uri:c.uri,...c.blockValue.format}},transaction:s});i[c.uri]=n.id,K.R3({parent:r,append:n,transaction:s}),c.isDefault&&G.FH({stores:[t],update:{collection_default_template:{template_page_id:n.id}},transaction:s})}}else"block"===c.type?ce(e,o,c,i,s):"page_template"===c.type||(0,I.t1)(c);!function(e,t,o,r,i){for(const n of o){const o=ue(t,n.uri,r);if(o){const a=o.getParentStore();if(a&&"collection"===a.table&&n.blockValue.properties){const l={};Object.entries(n.blockValue.properties).forEach((o=>{var i,n;let[p,s]=o;if("relation"===(null===(i=a.getSchema()[p])||void 0===i?void 0:i.type)){const e=(0,c.rq)(s),o=f.oA(e.map((e=>{const o=r[e.id];if(o)return{table:g.iU,id:o,spaceId:t.table===w.bx?t.id:t.getSpaceId()}}))),i=(0,c.ow)(o);l[p]=i}else"person"===(null===(n=a.getSchema()[p])||void 0===n?void 0:n.type)&&e.currentUser.id?l[p]=(0,c.C1)([{table:h.KJ,id:e.currentUser.id}]):l[p]=s})),$.sW({store:o.getPropertiesStore(),data:l,transaction:i})}}}}(e,o,r.filter((e=>{let{type:t}=e;return"block"===t})),i,s)}(t,o,r,P,A,k,u),P.map((e=>{if("collection_view_block"===e.type){const t=ue(r,e.uri,A);t&&function(e,t,o){const r=e.getCollectionViewStores().map((e=>{const o=e.getFormat().app_config_uri;let r=o?null==t?void 0:t.indexOf(o):null==t?void 0:t.length;return void 0!==r&&-1!==r||(r=null==t?void 0:t.length),{viewStore:e,order:r}})),i=f.MR(r,(e=>e.order)).map((e=>e.viewStore.id));$.sW({store:e,data:{view_ids:i},transaction:o})}(t,e.defaultViewsOrder||[],u)}}));const R=f.oA(f.jj(f.oA(P.map((e=>{if("collection_view_block"===e.type)return e.uri;if("blockUri"in e){const t=(0,M.TD)([e.blockUri],k);if(t&&t.length&&"collection_view_block"===t[0].type)return e.blockUri}}))))),E=f.oA(R.map((e=>ue(r,e,A))));if("create"===v&&e.initializeStore){const t=e.initializeStore.getPermissionItemsStore().getValue();t&&E.forEach((e=>{$.sW({store:e,data:{permissions:t},transaction:u})}))}const z="create"===v?f.oA([e.initializeStore]):e.appCollectionViewBlockStores,O=E.filter((e=>void 0===z.find((t=>t.id===e.id))));if(z.length>0&&O.length>0){const e=z[z.length-1],t=le(o,r,e);t&&O.forEach(((o,r)=>{K.HP({parent:t,current:o,after:0===r?e:O[r-1],transaction:u})}))}const W=C||(0,_.ZP)();return function(e,t,o,r,i){e.forEach((e=>{const n=e.getFormat().app_config_uri;if(n){var a;const l=(0,M.$Q)(new Set([n]),t),c={};l.forEach((e=>{o[e.uri]&&(c[e.uri]=o[e.uri])})),c[n]=o[n],G.FH({stores:[e],update:{app_uri_map:{...(null===(a=e.getFormat())||void 0===a?void 0:a.app_uri_map)||{},...c},app_id:r},transaction:i})}}))}(E,P,A,W,u),E}function ae(e){const{environment:t,dependencies:o,appCollectionViewBlockStores:r,from:i}=e,n=function(e){return e.filter((t=>{if("collection"===t.type){return Boolean(e.find((e=>"collection_view_block"===e.type&&e.uri===t.blockUri)))}if("property"===t.type||"view"===t.type||"collection_view_block"===t.type||"page_template"===t.type||"block"===t.type||"database_template"===t.type||"sub_external_collection"===t.type)return!0;(0,I.t1)(t)}))}(o),a=Object.assign({},...f.oA(r.map((e=>{var t;return null===(t=e.getFormat())||void 0===t?void 0:t.app_uri_map}))));Q.createAndCommit({userAction:"appTemplateActions.removeDependencies",environment:t,perform:e=>{!function(e){const{environment:t,appCollectionViewBlockStores:o,dependenciesToRemove:r,completeUriMap:i,transaction:n}=e,a=[...r.filter((e=>{let{type:t}=e;return"view"===t})),...r.filter((e=>{let{type:t}=e;return"block"===t})),...r.filter((e=>{let{type:t}=e;return"database_template"===t})),...r.filter((e=>{let{type:t}=e;return"page_template"===t})),...r.filter((e=>{let{type:t}=e;return"property"===t})),...r.filter((e=>{let{type:t}=e;return"sub_external_collection"===t})),...r.filter((e=>{let{type:t}=e;return"collection"===t})),...r.filter((e=>{let{type:t}=e;return"collection_view_block"===t}))];for(const c of a)if("collection_view_block"===c.type){const e=o.find((e=>{var t;return(null===(t=e.getFormat())||void 0===t?void 0:t.app_config_uri)===c.uri}));e&&n.postSubmitCallbacks.push((o=>{o||W.deleteBlocks(t,{blocks:[{id:e.id,spaceId:e.getSpaceId()}],permanentlyDelete:!0})}))}else if("collection"===c.type){const e=o.find((e=>{var t;return(null===(t=e.getFormat())||void 0===t?void 0:t.app_config_uri)===c.blockUri}));if(e){const t=se(e,c.uri,i);t&&q.A9({collectionViewBlockStore:e,collectionStore:t,transaction:n})}}else if("property"===c.type){const r=o.find((e=>{var t;return(null===(t=e.getCollectionStore())||void 0===t||null===(t=t.getFormat())||void 0===t?void 0:t.app_config_uri)===c.collectionUri}))??o[0],a=se(r,c.collectionUri,i);if(a){let o;var l;if("relation"===c.propertySchema.type&&c.propertySchema.collection_pointer)o=se(r,null===(l=c.propertySchema.collection_pointer)||void 0===l?void 0:l.id,i);Z.E2({environment:t,collectionStore:a,schema:a.getSchema(),property:c.uri,transaction:n,targetCollectionStore:o}),O.y9e(t,{property_type:c.propertySchema.type,from:e.from,property:c.uri,collection_id:a.id})}}else if("view"===c.type){const e=i[c.uri];if(!e)throw new Error("Cannot delete view: id not found in map.");const t=o.find((e=>{var t;return(null===(t=e.getFormat())||void 0===t?void 0:t.app_config_uri)===c.blockUri}));if(t){const o=F.Xr.createChildStore(t,{table:y.n,id:e,spaceId:t.getSpaceId()});q.dp({collectionViewBlockStore:t,collectionViewStore:o,transaction:n})}}else"page_template"===c.type||"block"===c.type||"database_template"===c.type||"sub_external_collection"===c.type||(0,I.t1)(c)}({environment:t,appCollectionViewBlockStores:r,dependenciesToRemove:n,completeUriMap:a,transaction:e,from:i})}})}function le(e,t,o){if(t.table===k.e0)return t.getTeamPagesStore();if(t.table===w.bx){var r,i;if(null!==(r=e.getPrivatePagesStore().getValue())&&void 0!==r&&r.includes(o.id))return e.getPrivatePagesStore();if(null!==(i=e.getSharedPagesStore().getValue())&&void 0!==i&&i.includes(o.id))return e.getSharedPagesStore()}else{if(t.table===g.iU)return t.getContentStore();(0,I.t1)(t)}}function ce(e,t,o,r,i){let n=ue(t,o.uri,r);const a="collection"===o.parentType?se(t,o.parentUri,r):ue(t,o.parentUri,r);if(!a)return{blockStore:n,parentStore:void 0};if(n)$.sW({store:n,data:{parent_id:a.id,parent_table:a.table,alive:!0},transaction:i});else{const l=t.table===w.bx?t.id:t.getSpaceId();if(!l)return;const c=$.ae({environment:e,table:g.iU,value:{type:o.blockValue.type,parent_id:a.id,parent_table:a.table,space_id:l,alive:!0,format:{...o.blockValue.format,app_config_uri:o.uri},properties:o.blockValue.properties},inMemoryRecordCache:t.inMemoryRecordCache,transaction:i});n=F.G.createChildStore(a,c.pointer),r[o.uri]=c.pointer.id}return"block"===a.table&&K.R3({parent:a.getContentStore(),append:n,transaction:i}),{blockStore:n,parentStore:a}}function pe(e){var t;const{environment:o,transaction:r,appParentStore:i,dependency:n,uriMap:a,appConfig:c}=e,p=se(i,n.collectionUri,a);if(!p)throw new Error("Collection not found");let d=n.propertySchema;if("relation"===d.type){if(!d.collection_pointer)throw new Error("Invalid relation schema.");const e=se(i,d.collection_pointer.id,a);if(!e)throw new Error("Relation target collection not found");const t=p.getDeletedSchema(),c=t[n.uri];if(n.isConnectedRelation&&n.integrationId===s.U9&&c&&(0,l.NK)(c)&&c.collection_pointer){const e=R.D8({deletedSchema:t,property:n.uri});if(!e)throw new Error("Deleted property schema was not found");q.xO({environment:o,collectionStore:p,update:e.updateSchema,transaction:r}),q.$N({collectionStore:p,update:e.updateDeletedSchema,transaction:r}),d={...d,collection_pointer:c.collection_pointer,collection_id:c.collection_pointer.id}}else d={...d,collection_pointer:null==e?void 0:e.pointer,collection_id:null==e?void 0:e.pointer.id}}else if("select"===d.type){const e=p.getSchema()[n.uri];if(e&&"select"===e.type){var u;const t=(0,M.TD)([n.uri],c),o=f.xH(f.oA(t.map((e=>{var t;if("property"===e.type&&"select"===e.propertySchema.type)return null===(t=e.propertySchema.options)||void 0===t?void 0:t.map((e=>e.id))})))),r=(null===(u=e.options)||void 0===u?void 0:u.filter((e=>!o.includes(e.id))))||[];d={...d,options:[...d.options||[],...r]}}}else if("auto_increment_id"===d.type){const e=p.getSchema(),t=(0,I.qP)(e).find((e=>{var t;const o=e[0],r=null===(t=e[1])||void 0===t?void 0:t.type;return o&&r&&"auto_increment_id"===r}));if(t){var m;const e=t[0];return G.FH({stores:[p],update:{app_uri_map:{...null===(m=p.getFormat())||void 0===m?void 0:m.app_uri_map,[n.uri]:e}},transaction:r}),n.uri}}else"text"===d.type&&d.ai_inference&&d.ai_inference.auto_update_on_edit&&(d.ai_inference.auto_update_on_edit=(0,A.k4)());q.xO({environment:o,collectionStore:p,update:{[n.uri]:d},transaction:r}),G.FH({stores:[p],update:{app_uri_map:{...null===(t=p.getFormat())||void 0===t?void 0:t.app_uri_map,[n.uri]:n.uri}},transaction:r})}function se(e,t,o){return o[t]?F.NW.createChildStore(e,{table:S.v,id:o[t],spaceId:e.table===w.bx?e.id:e.getSpaceId()}):void 0}function de(e,t,o,r,i,n){if(o.table!==g.iU)if(o.table===w.bx){if((null==t?void 0:t.getSpaceId())!==o.id)return;L.Hj({environment:e,spaceStore:o,spaceViewStore:t,pageStore:r,isPrivate:!0,transaction:i})}else o.table===k.e0?J.c0({teamStore:o,store:r,transaction:i,location:{type:n}}):(0,I.t1)(o)}function ue(e,t,o){return o[t]?F.G.createChildStore(e,{table:g.iU,id:o[t],spaceId:e.table===w.bx?e.id:e.getSpaceId()}):void 0}function me(e){const{presetUri:t,environment:o,spaceViewStore:r,teamStore:i,from:n}=e,a=Date.now(),{serverCommitResult:l,performResult:c}=Q.createAndCommit({userAction:`teamActions.createTypedDBsInTeam.${U.presetUriToHumanReadableName[t]}`,environment:o,perform:e=>{const a=(0,M.SP)((0,U.appPackageConfigs)(),t);if(!a)return;const l=re({environment:o,spaceViewStore:r,appParentStore:i,appUri:a.uri,createOrModify:"create",transaction:e,presetUri:t,from:n});return D.createSprintPage({environment:o,spaceViewStore:r,appParentStore:i,transaction:e,blockStores:l,creationEntryPoint:{type:"preset",presetUri:t}}),l&&O.bRT(o,{created_block_stores:l,preset_uri:t,destination_team_id:i.id,from:n}),l}});return l.then((()=>{O.meY(o,{from:n,preset_uri:t,time:Date.now()-a})})),c??[]}async function fe(e){const{environment:t,presets:o,spaceStore:r,spaceViewStore:i,teamStore:n}=e,{isAndroid:a,ramSizeInGB:l}=t.device;if(a&&(!l||l<2)){const e=o.slice().reverse().map((e=>{const{serverCommitResult:o,performResult:a}=Q.createAndCommit({environment:t,userAction:"AppsSetup.onContinueWithApps",perform:o=>{var a;const l=null===(a=(0,M.SP)((0,U.appPackageConfigs)(),e))||void 0===a?void 0:a.uri;if(!l)return;return oe({environment:t,spaceViewStore:i,appUri:l,parentStore:(0,z.bq)()?n:r,spaceId:r.id,transaction:o,presetUri:e})}});return{serverCommitResult:o,performResult:a}}));await Promise.all(e.map((e=>e.serverCommitResult)));return f.oA(f.xH(f.GY(e.map((e=>e.performResult)))))}{const{serverCommitResult:e,performResult:{collectionViewBlockStores:a}}=Q.createAndCommit({environment:t,userAction:"AppsSetup.onContinueWithApps",perform:e=>{const a=f.xH(f.oA(o.slice().reverse().map((o=>{var a;const l=null===(a=(0,M.SP)((0,U.appPackageConfigs)(),o))||void 0===a?void 0:a.uri;if(!l)return;return oe({environment:t,spaceViewStore:i,appUri:l,parentStore:(0,z.bq)()?n:r,spaceId:r.id,transaction:e,presetUri:o})}))));return a.reverse(),{collectionViewBlockStores:a}}});return await e,a}}async function ve(e){const{environment:t,spaceStore:o,spaceViewStore:r,teamStore:i,appendOrPrepend:n,persona:a}=e,l=function(e){switch(e){case"sales":return C.Y.salesWikiV2;case"product":return C.Y.productWikiV2;case"eng":return C.Y.engineeringWikiV2;case"other":case"marketing":default:return C.Y.teamWiki}}(a);return await Y.rC({environment:t,item:(0,P.G)(l,E.default.getIntl()),isPrivate:!1,spaceStore:o,spaceViewStore:r,useMinimalTemplates:!0,teamStore:i,type:"inTeam",from:"sidebar_team_section",isOnboarding:!1,appendOrPrepend:n})}},81924:(e,t,o)=>{o.r(t),o.d(t,{createSprintPage:()=>y});var r=o(41432),i=o(45433),n=o(21202),a=o(13493),l=o(15047),c=o(29369),p=o(97880),s=o(5366),d=o(33929),u=o(57559),m=o(76427),f=o(94419),v=o(9953),_=o(28014),g=o(150);const S=(0,s.defineMessages)({sprintBoard_0:{id:"appTemplatesSprintBoardActions.sprintBoard_0",defaultMessage:"Sprint board"}});function y(e){const{environment:t,spaceViewStore:o,appParentStore:s,transaction:y,blockStores:b,creationEntryPoint:w}=e;if("preset"===w.type&&w.presetUri!==i.tt)return;if(!b)return;const k=b.find((e=>e.getFormat().app_config_uri===i.TZ)),h=b.find((e=>e.getFormat().app_config_uri===i.pz));if(!k||!h)return;return function(e){const{environment:t,spaceViewStore:o,appParentStore:s,transaction:y,tasksBlockStore:b,location:w}=e,k=s.table===l.bx?s.id:s.getSpaceId(),h=s.table===l.bx?s:s.getSpaceStore();if(!k||!h)return;const C=function(e){const{environment:t,appParentStore:o,tasksBlockStore:l,transaction:c,spaceId:p}=e,s=function(e){const{environment:t,appParentStore:o,transaction:i,spaceId:a}=e,l=v.ae({environment:t,table:n.iU,value:{type:r.Ti.collectionViewPage,parent_id:o.id,parent_table:o.table,space_id:a,alive:!0,format:{page_icon:"/icons/run_lightgray.svg",special_page_for_pm_launch:"sprint_board"},properties:{title:[[d.default.formatMessage(S.sprintBoard_0)]]}},inMemoryRecordCache:o.inMemoryRecordCache,transaction:i});return u.G.createChildStore(o,l.pointer)}({environment:t,appParentStore:o,transaction:c,spaceId:p});return[i.g3,i.sV,i.y$].forEach((e=>{!function(e){var t;const{collectionViewBlock:o,tasksBlockStore:r,viewUri:i,spaceId:n,transaction:l}=e,c=r.getCollectionPointer(),p=null===(t=r.getFormat())||void 0===t||null===(t=t.app_uri_map)||void 0===t?void 0:t[i];if(!p)return;const s=u.Xr.createChildStore(o,{table:a.n,id:p,spaceId:n});c&&s&&function(e){const{viewStore:t,transaction:o,tasksCollectionPointer:r,viewBlockStore:i}=e,n=t.getName(),a=t.getPageSort(),l=t.getFormat(),c=t.getKeyStore("query2").getValue(),p=t.clone(),s=t.getType();v.sW({store:p,data:{name:n,type:s,page_sort:a,format:{...l,collection_pointer:r},query2:c,alive:!0,parent_id:i.id,parent_table:i.table},transaction:o}),f.R3({parent:i.getCollectionViewsStore(),append:p,transaction:o})}({viewStore:s,transaction:l,tasksCollectionPointer:c,viewBlockStore:o});m.dp({collectionViewBlockStore:r,collectionViewStore:s,transaction:l})}({collectionViewBlock:s,tasksBlockStore:l,viewUri:e,spaceId:p,transaction:c})})),s}({environment:t,appParentStore:s,tasksBlockStore:b,transaction:y,spaceId:k});return function(e,t,o,r,i,a){if(o.table===n.iU)"prepend"===a.type&&f.Ce({parent:o.getContentStore(),prepend:r,before:a.before,transaction:i});else if(o.table===l.bx){if(t.getSpaceId()!==o.id)return;_.Hj({environment:e,spaceStore:o,spaceViewStore:t,pageStore:r,isPrivate:!0,transaction:i,location:a})}else o.table===c.e0?g.c0({teamStore:o,store:r,transaction:i,location:a}):(0,p.t1)(o)}(t,o,s,C,y,w),C}({environment:t,spaceViewStore:o,appParentStore:s,transaction:y,tasksBlockStore:k,location:{type:"prepend",before:h.id}})}},70442:(e,t,o)=>{o.d(t,{$7:()=>U,GF:()=>F,Hp:()=>x,Lf:()=>B,RL:()=>R,rC:()=>E,xv:()=>A,zO:()=>M});o(21703);var r=o(15145),i=o(92785),n=o(59730),a=o(15157),l=o(5366),c=o(45953),p=o(21202),s=o(23867),d=(o(95477),o(33929)),u=o(98165),m=o(80444),f=o(56638),v=o(50906),_=o(54642),g=o(54532),S=o(89858),y=o(9953),b=o(4408),w=o(75018),k=o(24677),h=o(74647),C=o(28014),P=o(39699),V=o(39865);const I="LastViewedTemplateId",T=(0,l.defineMessages)({clientCopyError:{defaultMessage:"Client copy could not be created.",id:"spaceActions.createGettingStartedPage.copyNotCreated.error"}});function U(e){const{environment:t,item:o,createNewPage:r,isPrivate:i}=e;k.ZH(t),f.Z.setState({open:!0,item:o,createNewPage:r,isPrivate:i,isLoading:!1}),a.Z.set({userId:t.currentUser.id,key:I,value:o.rootId}),v.jWY(t,{template_name:o.name,from:r?"sidebar":"newPage"})}function M(e){let{templateItem:t,currentUserId:o}=e;const r=f.Z.state.item;f.Z.setState({...f.Z.state,item:t}),r!==t&&a.Z.set({userId:o,key:I,value:t.rootId})}function A(e){f.Z.setState({item:f.Z.state.item,open:!1}),k.ZH(e)}async function R(e){const{item:t,environment:o,spaceStore:i}=e;f.Z.state.open&&f.Z.setState({...f.Z.state,isLoading:!0});const n=e.initializeStore?{...e,initializeStore:e.initializeStore,isPrivate:!1,type:"inExistingStore",useMinimalTemplates:!1}:{...e,type:"inSpace",useMinimalTemplates:!1,isOnboarding:!1};let a=!1;const l=Date.now();let c;try{c=await E(n),a=!0,w.navigateToBlock({environment:o,store:c,pageVisitSource:r.tY.Create}),A(o),o.device.isMobile&&h.close()}finally{var p;const r=Date.now()-l,n=e.initializeStore?u.VP(e.initializeStore):void 0,s=e.initializeStore?!Boolean(n):e.isPrivate;v.enX(o,{template_name:t.name,destination:s?"private":"team",template_block_id:t.rootId,template_duplication_duration_ms:r,team_id:null==n?void 0:n.id,created_page_id:null===(p=c)||void 0===p?void 0:p.id}),v.XyT(o,{from:"inApp",success:a,context:e.from,template_name:t.name,template_block_id:t.rootId,target_space_id:i.id,template_duplication_duration_ms:r})}}async function B(e){const{environment:t,initializeStore:o,item:r,isPrivate:i,useMinimalTemplates:n,spaceStore:a,spaceViewStore:l}=e,p=n?r.rootId:r.previewRootId,s=await _.loadBlockSubtree(t,{block:{id:p,spaceId:r.spaceId},shallow:!1});let u;"success"===s.type&&(u=c.PF.create(s.data.subtreeRecordMap));const m="pageTemplateModalActions.loadAndDuplicatePageTemplate",{performResult:f}=P.createAndCommit({userAction:m,environment:t,perform:e=>{const r=o||C.KE({environment:t,spaceStore:a,spaceViewStore:l,isPrivate:i,loading:!0,transaction:e});b.fL({environment:t,inMemoryRecordCache:r.inMemoryRecordCache,recordMap:u,debugSource:m});const n=g.K8(t,{blockId:p,inMemoryRecordCache:r.inMemoryRecordCache,allowCopyCollections:!0,requireFullSubtree:!1,skipTransclusionContainerChildren:!1,allowCopyExternalObjectInstances:!0});if(!n)throw new Error(d.default.getIntl().formatMessage(T.clientCopyError));return g.E9({environment:t,sourceBlockId:p,targetBlockPointer:r.pointer,sourceBlockSubtree:n,targetInMemoryRecordCache:r.inMemoryRecordCache,transaction:e,deepCopyTransclusionContainers:!0,resolveTemplateVariables:!0,useCrdt:r.useCrdt()}),r}});return f}async function E(e){const{environment:t,item:o,useRecordCache:r,isPrivate:i,useMinimalTemplates:n,spaceStore:a,spaceViewStore:l,isOnboarding:c}=e,{serverCommitResult:s,performResult:{pageStore:d,copyBlock:u}}=P.createAndCommit({userAction:"pageTemplateModalActions.createTemplateInstance",environment:t,perform:c=>{let s;s="inExistingStore"===e.type&&e.initializeStore?e.initializeStore:"inTeam"===e.type&&e.teamStore?S.pq({environment:t,spaceStore:a,spaceViewStore:l,teamStore:e.teamStore,from:e.from,loading:!0,appendOrPrepend:e.appendOrPrepend?e.appendOrPrepend:"append",transaction:c}):C.KE({environment:t,spaceStore:a,spaceViewStore:l,isPrivate:i,loading:!0,transaction:c});const d={id:r&&!n?o.previewRootId:o.rootId,table:p.iU,spaceId:o.spaceId};return F({item:o,spaceViewStore:l,transaction:c}),function(e){const{item:t,transaction:o,spaceViewStore:r}=e;if(r){const e=r.getSidebarHiddenTemplateIds();if(e.indexOf(t.rootId)<0){const i=e.concat([t.rootId]);y.sW({store:r,data:{sidebar_hidden_templates:i},transaction:o})}}}({item:o,spaceViewStore:l,transaction:c}),{pageStore:s,copyBlock:d}}});return await s,await x({environment:t,pageStore:d,copyBlock:u,useRecordCache:r,item:o,isOnboarding:Boolean(c)}),d}const z={block:!0,collection:!0,collection_view:!0,discussion:!0,comment:!0};async function x(e){const{environment:t,pageStore:o,copyBlock:r,item:a,useRecordCache:l,isOnboarding:p}=e,d=c.Ak.create();l&&l.forEachRecord(t.currentUser.id,(e=>{let{model:t}=e;z[t.table]&&d.setModel(t.pointer,t)}));const{currentSpaceStore:u}=m.default.state;if(!u)throw new n.p8("Could not get currentSpaceStore.");return"failed"===(await _.initializePageTemplate(t,{recordMap:d.toJson({allowVersionDowngrade:!1}),sourceBlock:r,targetBlock:{id:o.pointer.id,table:o.pointer.table,spaceId:(0,s.C)(o.pointer.spaceId)},isOnboarding:p})).type&&(P.createAndCommit({userAction:"pageTemplateModalActions.initializePageTemplate.deletePageWhenError",environment:t,perform:e=>{V.y8({environment:t,blocks:[o],transaction:e})}}),p&&v.XyT(t,{success:!1,template_name:a.name,template_id:a.id,template_block_id:a.rootId,target_space_id:u.id,from:"onboarding"}),i.log({level:"error",from:"pageTemplateModalActions.initializePageTemplate",type:"duplicateTemplateError",data:{miscDataToConvertToString:{template_name:a.name,template_id:a.id,template_block_id:a.rootId,is_onboarding:p}}})),o}function F(e){const{item:t,transaction:o,spaceViewStore:r}=e;if(r){const e=r.getVisitedTemplateIds();if(e.indexOf(t.rootId)<0){const i=e.concat([t.rootId]);y.sW({store:r,data:{visited_templates:i},transaction:o})}}}}}]);