"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[105],{88625:(e,t,r)=>{r.r(t),r.d(t,{SpaceSubscriptionUpdatePaymentMethodModal:()=>w});var a=r(23174),o=r.n(a),n=(r(21703),r(86664)),i=r(67294),s=r(480),d=r(86628),c=r(24405),l=r(8848),u=r(59730),p=r(97880),m=r(82990),g=r(5366),f=r(47307),y=r(21325),b=r(16100),v=r(41168),h=r(80444),C=r(45407),S=r(42922),M=r(63296),x=r(64369);function w(e){return o()(n.Elements,{stripe:(0,b.getStripe)()},void 0,i.createElement(_,e))}function _(e){window.__c={n:"SpaceSubscriptionUpdatePaymentMethodModalStripeConsumer"};const[t,r,a]=(0,d.AF)(void 0,C.Z),l=(0,n.useStripe)(),m=(0,n.useElements)(),[y,b]=i.useState(!1),[h,w]=i.useState(void 0),_=(0,s.O7)(),B=(0,g.useIntl)(),E=i.useCallback(((e,o)=>{t.paymentRequest||(r({...t,paymentRequest:e,supportsApplePay:Boolean(o&&o.applePay)}),a.addPaymentOption("native_payment_platform"))}),[r,a,t]);i.useEffect((()=>{if(l){const t=l.paymentRequest({country:"US",currency:"usd",total:{label:B.formatMessage({id:"spaceSubscriptionUpdatePaymentMethod.applePay.total.label",defaultMessage:"Notion - You will be charged on a recurring basis"}),amount:0}});t.canMakePayment().then((e=>{e&&E(t,e)})),t.on("token",(t=>{P({environment:_,spaceStore:e.spaceStore,stripeToken:t.token.id,customerData:e.customerData,onComplete:r=>{t.complete(r?"success":"fail"),e.onComplete()}})}))}}),[l,e,B,_,E]);const A=v.zt(t.availablePaymentMethods),F=(0,c.yK)(k,[]);return y?o()("div",{style:F.container},void 0,o()("div",{style:F.header},void 0,o()(g.FormattedMessage,{id:"spaceSubscriptionUpdatePaymentMethod.creditCard.update.header",defaultMessage:"Update credit card"})),o()("div",{style:F.cardContainer},void 0,o()(n.CardElement,{options:{hidePostalCode:!0}})),h&&o()(x.Z,{isMultiline:!1,style:F.error},void 0,h),o()("div",{style:F.upgradeButtonContainer},void 0,o()(S.Z,{style:F.upgradeButton,onClick:()=>async function(e){const{stripe:t,elements:r,environment:a,spaceStore:o,customerData:i,onComplete:s,setError:d}=e;if(!t||!r)return;const c=r.getElement(n.CardElement);if(!c)return;const l=await t.createToken(c);!l.error&&l.token?await P({environment:a,spaceStore:o,stripeToken:l.token.id,customerData:i,onComplete:s}):l.error&&d(l.error.message)}({stripe:l,elements:m,environment:_,spaceStore:e.spaceStore,customerData:e.customerData,onComplete:e.onComplete,setError:w})},void 0,o()(g.FormattedMessage,{id:"spaceSubscriptionUpdatePaymentMethod.creditCard.updateButton",defaultMessage:"Update"})))):o()("div",{style:F.container},void 0,o()("div",{style:F.header},void 0,o()(g.FormattedMessage,{id:"spaceSubscriptionUpdatePaymentMethod.update.header",defaultMessage:"Update payment method"})),o()("div",{style:F.optionGroup},void 0,A.map(((r,a)=>{let{type:n,title:i}=r;return o()("div",{onClick:()=>async function(e){const{customerData:t,newPaymentMethod:r,setCreditCardSelected:a,paymentRequest:n}=e;if("credit_card"===r){if(t.isSubscribed&&"send_invoice"===t.billing){if(!(await f.confirmUserAction({message:o()("span",{},void 0,o()(g.FormattedMessage,{defaultMessage:"Update to automatic billing?",id:"spaceSubscriptionUpdatePaymentMethod.invoiceToCreditCard.confirmMessage"})),description:o()("span",{},void 0,o()(g.FormattedMessage,{defaultMessage:"Your credit card will be charged automatically for future billing events. Invoices will no longer be sent to your billing email, but can be found in the Billing section of your Notion dashboard.",id:"spaceSubscriptionUpdatePaymentMethod.invoiceToCreditCard.confirmDescription"}))})))return}a(!0)}else{if("invoice"===r)throw new u.XV("You cannot select this payment collection method in the app. Please reach out to support.",{type:"collection_method_not_allowed"});"native_payment_platform"===r?n&&n.show():(0,p.t1)(r)}}({customerData:e.customerData,newPaymentMethod:n,paymentRequest:t.paymentRequest,setCreditCardSelected:b})},n,o()(M.Z,{style:{...F.option,...a!==A.length-1?F.optionBorder:void 0}},void 0,i))}))))}async function P(e){const{environment:t,spaceStore:r,stripeToken:a,customerData:o,onComplete:n}=e,{currentUserStore:i}=h.default.state,s=null!=i&&i.isDefined()?i.getEmail():void 0,d=o.billingEmail||s;if(!d)throw new Error("No billing email found.");try{await y.Mg({environment:t,spaceStore:r,paymentData:{type:"stripeToken",value:a},billingEmail:d,from:"space_settings-billing_tab-update_credit_card"}),n(!0)}catch{n(!1)}}function k(e){return{container:{width:500,background:e.popoverBackground,padding:30,borderRadius:3},optionGroup:{borderRadius:"2px",background:e.groupedFormBackground,border:"1px solid",borderColor:e.groupedFormBorder},option:{display:"flex",justifyContent:"flex-start",border:"none",height:void 0,paddingTop:"15px",paddingBottom:"15px"},optionBorder:{borderBottom:"1px solid",borderBottomColor:e.groupedFormBorder},header:{fontSize:18,marginBottom:16,fontWeight:m.Z.fontWeight.medium},cardContainer:{backgroundColor:e.groupedFormBackground,borderWidth:1,borderStyle:"solid",borderColor:e.groupedFormBackground,padding:"10px",marginTop:"10px",marginBottom:"10px"},upgradeButtonContainer:{width:"100%",justifyContent:"flex-end",display:"flex"},upgradeButton:{marginTop:"20px"},error:{marginTop:8,color:l.ZP.red}}}},16100:(e,t,r)=>{r.r(t),r.d(t,{getStripe:()=>h,injectStripe:()=>v,translateStripeError:()=>M,useElementsOptions:()=>S});var a=r(23174),o=r.n(a),n=r(86664),i=r(97894),s=r(67294),d=r(86628),c=r(24405),l=r(24211),u=r(97880),p=r(82990),m=r(50906),g=r(95477),f=r(62216),y=r(80444);let b=null;function v(e){return t=>{const[r]=s.useState(h);return o()(n.Elements,{stripe:r},void 0,o()(n.ElementsConsumer,{},void 0,(r=>{let{stripe:a,elements:o}=r;const n={...t,stripe:a,elements:o};return s.createElement(e,n)})))}}async function h(){return b||(i.loadStripe.setLoadParameters({advancedFraudSignals:!1}),b=(0,i.loadStripe)(g.default.stripe.key)),b}function C(e){switch(e){case"en-US":return"en";case"ko-KR":return"ko";case"ja-JP":return"ja";case"fr-FR":return"fr-FR";case"de-DE":return"de";case"es-ES":return"es-ES";case"es-LA":return"es-419";case"pt-BR":return"pt-BR";case"zh-CN":return"zh";case"zh-TW":return"zh-TW";case"da-DK":return"da";case"nl-NL":return"nl";case"fi-FI":return"fi";case"nb-NO":return"nb";case"sv-SE":return"sv";default:return"auto"}}function S(e){const t=(0,c.Fg)(),{type:r}=e,a="setup"===r||"subscription"===r?e.currency:void 0,o="subscription"===r?e.amount:void 0,[n,i]=(0,d.VK)((()=>{var e;const t=(null===(e=y.default.state)||void 0===e||null===(e=e.currentUserSettingsStore)||void 0===e||null===(e=e.getSettings())||void 0===e?void 0:e.preferred_locale)||l.al;return[f.rR(),t]}),[]);return(0,s.useMemo)((()=>{const e="dark"===t.mode,s={appearance:{labels:"floating",variables:{spacingGridRow:"8px",colorPrimary:t.blueColor,colorText:t.regularTextColor,colorTextPlaceholder:e?"#5A5A5A":"#ACABA9",fontFamily:p.Z.baseFontFamily.sans,borderRadius:"4px"},rules:{".Input":{display:"flex",alignItems:"center",width:"100%",fontSize:"14px",lineHeight:"20px",letterSpacing:"-0.154px",padding:"3px 6px",height:"40px",boxShadow:"none",backgroundColor:e?"#262626":"#F9F9F8",borderWidth:"1px",borderStyle:"solid",borderColor:e?"#1C1C1C":"rgba(227,226,224,0.5)",cursor:"text",color:e?"#E1E1E1":"#1D1B16"},".Label":{fontSize:"14px",color:e?"#5A5A5A":"#ACABA9"},".Label--resting":{fontSize:"14px",lineHeight:"140%",letterSpacing:"-0.154px",color:e?"#5A5A5A":"#ACABA9"},".Label--floating":{fontSize:"10px",fontWeight:"600",lineHeight:"13px",letterSpacing:"0.12px",marginTop:"4px",transition:"all 200ms ease"}}},locale:C(i)};switch(r){case"address":return s;case"setup":return n?{...s,currency:null==a?void 0:a.toLowerCase(),mode:"setup",paymentMethodCreation:"manual"}:{};case"subscription":return n?{...s,amount:o,currency:null==a?void 0:a.toLowerCase(),mode:"subscription",paymentMethodCreation:"manual"}:{};default:(0,u.t1)(r)}}),[t,r,o,a,i,n])}function M(e,t,r){if(!r.code)return r.message||"";switch(m._qN(e,{error:r.code,stripe_decline_code:r.decline_code}),r.code){case"invalid_expiry_year_past":return t.formatMessage({id:"stripeHelpers.invalidExpiryYear.error.message",defaultMessage:"Your card's expiration year is in the past."});case"invalid_cvc":return t.formatMessage({id:"stripeHelpers.invalidCVC.error.message",defaultMessage:"Your card's security code is invalid."});case"invalid_number":return t.formatMessage({id:"stripeHelpers.invalidNumber.error.message",defaultMessage:"Your card number is not a valid credit card number."});case"card_declined":return function(e,t){switch(t){case"expired_card":return e.formatMessage({id:"stripeHelpers.cardDeclined.error.message.expiredCard",defaultMessage:"Your card was declined because it is an expired card."});case"incorrect_number":return e.formatMessage({id:"stripeHelpers.cardDeclined.error.message.incorrectNumber",defaultMessage:"Your card was declined because you input an incorrect number."});case"insufficient_funds":return e.formatMessage({id:"stripeHelpers.cardDeclined.error.message.declinedFunds",defaultMessage:"Your card was declined because of insufficient funds."});case"invalid_cvc":return e.formatMessage({id:"stripeHelpers.cardDeclined.error.message.invalidCvc",defaultMessage:"Your card was declined because you input an invalid CVC number"});case"invalid_amount":return e.formatMessage({id:"stripeHelpers.cardDeclined.error.message.invalidAmount",defaultMessage:"Your card was declined because payment amount exceeds the amount that's allowed."});default:return e.formatMessage({id:"stripeHelpers.cardDeclined.error.message",defaultMessage:"Your card was declined."})}}(t,r.decline_code);default:return r.message||""}}},45407:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(49085),o=r(72126);class n extends a.default{getInitialState(){return{availablePaymentMethods:["credit_card"],paymentRequest:void 0,supportsApplePay:!1}}isPaymentOptionAvailable(e){return this.state.availablePaymentMethods.includes(e)}addPaymentOption(e){const t=o.jj([...this.state.availablePaymentMethods,e]);this.setState({...this.state,availablePaymentMethods:t})}}const i=n}}]);