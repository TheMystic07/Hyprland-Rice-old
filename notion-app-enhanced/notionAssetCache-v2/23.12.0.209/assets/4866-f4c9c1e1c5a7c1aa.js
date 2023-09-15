"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[4866],{79474:(e,t,o)=>{o.d(t,{r:()=>n});var r=o(43604);async function n(e){return new Promise((t=>{r.Z.setState({open:!0,onClose:()=>{r.Z.setState({open:!1}),t(!1)},onConfirm:()=>{r.Z.setState({open:!1}),t(!0)},...e})}))}},44866:(e,t,o)=>{o.r(t),o.d(t,{autofillPropertyForBlocks:()=>J,autofillPropertyForCollection:()=>Q,fillAllPagesMessages:()=>V,saveOrRemovePropertyAiInference:()=>ee,submitFeedbackForAiAutofill:()=>$,triggerAiAutofillUpsell:()=>G});var r=o(23174),n=o.n(r),i=(o(57658),o(67294)),a=o(26263),l=o(99036),s=o(74229),c=o(72126),d=o(5366),p=o(482),u=o(4615),f=o(3791),m=o(97880),y=o(50906),g=o(8406),_=o(54642),A=o(14871),I=o(76427),h=o(79474),v=o(47307),C=o(96802),k=o(9953),P=o(64964),S=o(39699),M=o(1865),b=o(86628),O=o(98519),F=o(55332),T=o(79576),w=o(73420),N=o(68785),B=o(6854);const W=function(e){let{environment:t,inferenceIds:o,aiInference:r}=e;window.__c={n:"AiAutofillProgressLabel"};const a=(0,b.VK)((()=>{const{state:e}=T.W;return"uninitialized"===e.type?null:{numBlocksToAutofill:e.numBlocksToAutofill,numBlocksAutofilled:e.numBlocksAutofilled,propertySchema:e.propertySchema,collectionId:e.collectionId,sessionId:e.sessionId,haveAllBlocksCompletedAutofill:e.haveAllBlocksCompletedAutofill}}),[]),l=(0,i.useCallback)((()=>{a&&(o.forEach((e=>{y.qG2(t,{ai_inference_type:r.type,type:"undo_from_snackbar",inference_id:e,collection_id:a.collectionId,session_id:a.sessionId})})),F.Yw(t,!0),P.rN(),T.W.setState({type:"filling",...a,didInterruptStreaming:!0}))}),[a,t,r,o]);if(!a)return null;const{numBlocksToAutofill:s,numBlocksAutofilled:c,propertySchema:{name:p}}=a;return c===s?n()(w.X2,{gap:4,alignItems:"center"},void 0,(0,O.k)({width:16}),n()(d.FormattedMessage,{defaultMessage:'AI updated "{propertyName}" on {numPages, plural, one {1 page} other {# pages}}',id:"snackbar.aiAutofill.autofillInProgress",values:{propertyName:p,numPages:s}}),n()(B.Pn,{onClick:l},void 0,n()(d.FormattedMessage,{defaultMessage:"Undo",id:"snackbar.aiAutofill.undo"})),n()(B.Pn,{onClick:()=>{P.rN()}},void 0,n()(d.FormattedMessage,{defaultMessage:"Close",id:"snackbar.aiAutofill.close"}))):n()(w.X2,{gap:4,alignItems:"center"},void 0,n()(N.Z,{}),n()(d.FormattedMessage,0===c?{defaultMessage:'AI updating "{propertyName}" on {numPages, plural, one {1 page} other {# pages}}',id:"snackbar.aiAutofill.autofillStarting",values:{propertyName:p,numPages:s}}:{defaultMessage:'AI updated "{propertyName}" on {numFilledPages} of {numTotalPages} pages',id:"snackbar.aiAutofill.completedAutofill",values:{propertyName:p,numFilledPages:c,numTotalPages:s}}),n()(B.Pn,{onClick:l},void 0,n()(d.FormattedMessage,{defaultMessage:"Stop & undo",id:"snackbar.aiAutofill.undoAndStop"})))};var L=o(91396),R=o(33929),U=o(80444),E=o(57559),D=o(1310),q=o(78291),Z=o(35057),x=o(84254);const V=(0,d.defineMessages)({fillAllPagesTooltip:{defaultMessage:"{hasNames, select, true {Autofill {propertyName} for all pages in {collectionName}} other {Autofill this property for all pages in the database}}",id:"aiAutofill.fillAllPages.buttonTooltip"},fillAllPagesAddOnMessage:{defaultMessage:"Only with Notion AI add-on",id:"aiAutofill.fillAllPages.onlyWithAiAddOnMessageInTooltip"}});function K(e){let{environment:t,propertyId:o,storesWithCompletions:r,blockIdToInferenceId:n,useTemporaryStore:i}=e;S.createAndCommit({userAction:"BlockPropertyValue.handleActionButtonClick.aiAutofill",environment:t,canUndo:!Boolean(i),undoCheckpoint:!0,perform:e=>{for(const{store:t,temporaryStore:a,completion:l}of r){const r=i?a:t;k.sO({store:r.getPropertyStore(o),value:A.of({text:l.trim(),stripText:!1}),transaction:e});const s=r.getFormat().ai_property_inference_map??{},c=n[t.id]??"";C.FH({stores:[r],update:{ai_property_inference_map:{...s,[o]:{inference_id:c,created_time:Date.now()}}},transaction:e})}}})}const j=(0,d.defineMessages)({FAILED_TO_AUTOFILL:{defaultMessage:"Something went wrong. Please try again later",id:"propertyCompletionActions.error.unableToAutofill"},INVALID_PROPERTY_FOR_AUTOFILL:{defaultMessage:"Invalid property configuration for AI autofill",id:"propertyCompletionActions.error.invalidPropertyForAutofill"},NO_BLOCKS_TO_AUTOFILL:{defaultMessage:"Nothing to update with AI",id:"propertyCompletionActions.error.noBlocksToAutofill"}}),z=(0,d.defineMessages)({featureUnavailable:{id:"completionActions.featureNotEnabledError",defaultMessage:"This feature is not currently enabled"}});function H(e){let{autofillPropertyResult:t}=e;const o=R.default.formatMessage(j[t]);P.rN(),v.deprecatedShowErrorMessage(o)}const Y={ai_limit_property_autofill:n()(d.FormattedMessage,{defaultMessage:"This workspace has used all of its free AI responses. Contact your workspace owner to add Notion AI.",id:"aiAutofill.outOfAiUpsellDialogMessage"}),ai_autofill_on_page_edit:n()(d.FormattedMessage,{defaultMessage:"Auto-update requires the Notion AI Add-on. Contact your workspace owner to add Notion AI.",id:"aiAutofill.autoUpdateOnPageEditUpsellDialogMessage"}),ai_autofill_fill_all_pages:n()(d.FormattedMessage,{defaultMessage:"Updating all pages requires the Notion AI Add-on. Contact your workspace owner to add Notion AI.",id:"aiAutofill.fillAllPagesUpsellDialogMessage"}),ai_autofill_bulk_fill:n()(d.FormattedMessage,{defaultMessage:"Filling more pages at once requires the Notion AI Add-on. Contact your workspace owner to add Notion AI.",id:"aiAutofill.bulkFillUpsellDialogMessage"})};function G(e){var t;let{environment:o,from:r}=e;null!==(t=U.default.state.currentSpaceStore)&&void 0!==t&&t.canAdmin()||v.deprecatedShowErrorMessage(Y[r]),M.y(o,{from:r,for:(0,Z.zt)(),addOnFeature:"ai"})}function X(e){let{errorCode:t,environment:o}=e;return 405===t?P.oV({label:R.default.formatMessage(z.featureUnavailable)}):(402===t&&(P.rN(),G({environment:o,from:"ai_limit_property_autofill"})),x.showCompletionErrorWithCode(t))}async function J(e){var t;let{environment:o,stores:r,property:i,propertySchema:c,userEventForAnalytics:d,sessionIdForAnalytics:p,collectionContextStore:f,from:A,isBulkAction:I,aiInferenceOverride:h}=e;const v=p||(0,u.ZP)(),C=i,k=r.map((e=>({spaceId:e.getSpaceId(),...e.pointer,propertyId:C,inferenceId:(0,u.ZP)()}))),S=r[0].getParentCollectionId()??(null===(t=r[0].getCollectionViewCollectionStore())||void 0===t?void 0:t.id),M=new a.Z({name:"propertyCompletionActions.autofillPropertyForBlocks"});if(T.W.setIsWriting({stores:r,propertySchema:c,sessionIdForAnalytics:p}),"uninitialized"!==T.W.state.type){P.oV({label:n()(W,{environment:o,inferenceIds:k.map((e=>e.inferenceId)),aiInference:(0,l.q3)(c)}),durationMs:D.JY});try{if(o.defaultRecordCache.inMemoryRecordCache.addCacheOverride(M),!(0,m.Of)(k))return H({autofillPropertyResult:"NO_BLOCKS_TO_AUTOFILL"});const e=h||(0,l.q3)(c);if(!e)return H({autofillPropertyResult:"INVALID_PROPERTY_FOR_AUTOFILL"});k.forEach((t=>{y.qG2(o,{type:d,inference_id:t.inferenceId,ai_inference_type:e.type,collection_id:S,session_id:v})}));const t=await _.getCompletionForProperty(o,{blockPropertyPointers:k,aiInference:e,model:(0,L.PD)(o)});if("success"!==t.type)return H({autofillPropertyResult:"FAILED_TO_AUTOFILL"});f&&g.rv({block_id:r[0].pointer.id,property:C,property_type:c.type,from:A,environment:o,collectionContextStore:f,isFromBulkActionsToolbar:I});const n=Object.fromEntries(r.map((e=>[e.pointer.id,{store:e,temporaryStore:e.clone(M),completion:""}]))),i=Object.fromEntries(k.map((e=>[e.id,e.inferenceId]))),a=new Set;if(s.H1.is(t.data)){for await(const e of t.data){if("error"===e.type)return T.W.setState({...T.W.state,didInterruptStreaming:!0}),X({errorCode:e.errorCode,environment:o});if(T.W.state.didInterruptStreaming)return;const t=n[e.blockPropertyPointer.id],r=t.completion+e.completion;n[e.blockPropertyPointer.id]={...t,completion:r},a.add(e.blockPropertyPointer.id),K({environment:o,propertyId:C,storesWithCompletions:Object.values(n),blockIdToInferenceId:i,useTemporaryStore:!0}),T.W.setState({...T.W.state,numBlocksAutofilled:a.size})}T.W.setState({...T.W.state,haveAllBlocksCompletedAutofill:!0})}o.defaultRecordCache.inMemoryRecordCache.removeCacheOverride(M),K({environment:o,propertyId:C,storesWithCompletions:Object.values(n),blockIdToInferenceId:i,useTemporaryStore:!1})}finally{o.defaultRecordCache.inMemoryRecordCache.hasCacheOverride(M)&&o.defaultRecordCache.inMemoryRecordCache.removeCacheOverride(M)}}}function $(e){const{environment:t,inferenceId:o,feedbackType:r,userContent:n,shareWithNotion:i}=e;y.NF$(t,{type:"property_autofill",inference_id:o,feedback_type:r,timestamp:(new Date).toUTCString(),user_comment:n,share_with_notion:i})}async function Q(e){var t,o;let{environment:r,collectionStore:n,propertySchema:i,property:a,sessionIdForAnalytics:s,includedCollectionSchemaUpdateOp:d}=e;const m=(0,l.q3)(i);if(!n||!i||!m)return;const g=(null===(t=q.default.state.data)||void 0===t?void 0:t.addOns)??[];if(!(0,f.de)(g))return void G({environment:r,from:"ai_autofill_fill_all_pages"});if(!(await h.r({sourceAction:"fill_all_pages",propertyName:i.name,collectionName:(null===(o=n.getName())||void 0===o?void 0:o.toString())||""})))return;y.qG2(r,{type:"generate_from_fill_all_pages",inference_id:(0,u.ZP)(),ai_inference_type:m.type,collection_id:n.id,session_id:s??(0,u.ZP)()});const _=c.oA([d]);_.push(p.op.update({pointer:n.pointer,path:["format","update_ai_inferences_status"],args:{[a]:{type:"requested",created_time:Date.now()}}})),I.HW({environment:r,collectionStore:n,performTransaction:e=>{for(const t of _)S.applyOperation({store:(0,E.Kv)(n,t.pointer),operation:t,transaction:e})}})}function ee(e){const{environment:t,propertySchema:o,collectionStore:r,property:n,draftAiInference:i}=e;let a="";switch(o.type){case"text":a="ai_inference";break;case"select":a="select_ai_inference";break;default:return}const s=[];if(s.push({pointer:r.pointer,command:"set",path:["schema",n,a],args:i}),i)y._eA(t,{type:"set_ai_inference",ai_inference_type:i.type,collection_id:r.id});else{const e=(0,l.q3)(o);y._eA(t,{type:"remove_ai_inference",ai_inference_type:null==e?void 0:e.type,collection_id:r.id})}I.HW({environment:t,collectionStore:r,performTransaction:e=>{for(const t of s)S.applyOperation({store:(0,E.Kv)(r,t.pointer),operation:t,transaction:e})}})}}}]);