"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[3301],{92660:(e,t,i)=>{i.d(t,{Z:()=>s});var n=i(23174),o=i.n(n),a=(i(67294),i(83355)),r=i(50506),l=i(53437);class s extends a.Z{renderComponent(){const{render:e}=this.props,{device:t}=this.environment,i=this.props.modalStore.state;return t.isMobile?o()(l.ZP,{ariaLabel:this.props.ariaLabel,open:i.open,popupType:l.ZP.PopupType.SlideUp,origin:this.props.origin,onDismiss:this.props.onDismiss,render:e,style:this.props.style}):o()(r.Z,{ariaLabel:this.props.ariaLabel,open:i.open,preventHideChildrenWhileOpening:!0,render:e,onDismiss:this.props.onDismiss,style:this.props.style,innerStyle:this.props.innerStyle})}}s.displayName="DefaultPopupOrModal"},1063:(e,t,i)=>{i.d(t,{X:()=>u});var n=i(23174),o=i.n(n),a=(i(67294),i(480)),r=i(24405),l=i(5366),s=i(50906),d=i(8323),c=i(42402);function u(e){window.__c={n:"StartupCouponInlineTextLink"};const t=(0,a.O7)(),i=(0,r.yK)((()=>({couponLink:{fontSize:12}})),[]);return o()(c.Z,{href:"https://notionup.typeform.com/to/qYXezfBW",external:!0,style:i.couponLink,onClick:()=>{const i=(0,d.zt)();s.sS1(t,{tier:e.tier,currentTier:i})}},void 0,o()("div",{},void 0,o()(l.FormattedMessage,{id:"startupCouponInlineLink.text",defaultMessage:"Are you a startup?"})))}},67773:(e,t,i)=>{i.d(t,{G:()=>s});var n=i(23174),o=i.n(n),a=(i(67294),i(5366)),r=i(69653),l=i(42045);function s(e){window.__c={n:"OrderSummaryAccountBalanceItem"};const t=(0,r.hr)(),{accountBalance:i}=e;return 0===i.amount?null:o()("div",{style:t.itemContainer},void 0,o()("div",{style:t.captionContainer},void 0,o()("span",{style:t.name},void 0,o()(a.FormattedMessage,{id:"subscriptionHelpers.lineItems.balance",defaultMessage:"Balance"}))),o()("span",{style:t.credit},void 0,o()(l.W,{cost:i.toMoneyValue(),trailingZeroDisplay:"stripIfInteger"})))}},43761:(e,t,i)=>{i.d(t,{T:()=>s});var n=i(23174),o=i.n(n),a=(i(67294),i(5366)),r=i(69653),l=i(42045);function s(e){window.__c={n:"OrderSummaryDiscountItem"};const t=(0,r.hr)(),{discount:i,promo:n}=e;return o()("div",{style:t.itemContainer},void 0,o()("div",{style:t.captionContainer},void 0,o()("span",{style:t.name},void 0,o()(a.FormattedMessage,{id:"subscriptionHelpers.lineItems.promo",defaultMessage:"Coupon"}))),n.duration_in_months?o()("span",{style:t.caption},void 0,o()(a.FormattedMessage,{id:"subscriptionHelpers.lineItems.promo.subtitle",defaultMessage:"Valid for {durationInMonths} months",values:{durationInMonths:n.duration_in_months}})):void 0,o()("span",{style:t.credit},void 0,o()(l.W,{cost:i.toMoneyValue(),trailingZeroDisplay:"stripIfInteger"})))}},24862:(e,t,i)=>{i.d(t,{r:()=>s});var n=i(23174),o=i.n(n),a=(i(67294),i(5366)),r=i(69653),l=i(42045);function s(e){window.__c={n:"OrderSummarySubtotalItem"};const t=(0,r.hr)(),{subtotal:i}=e;return o()("div",{style:t.itemContainer},void 0,o()("div",{style:t.captionContainer},void 0,o()("span",{style:t.name},void 0,o()(a.FormattedMessage,{id:"subscriptionHelpers.lineItems.subTotal",defaultMessage:"Subtotal"}))),o()("span",{style:t.price},void 0,o()(l.W,{cost:i.toMoneyValue(),trailingZeroDisplay:"stripIfInteger"})))}},26156:(e,t,i)=>{i.d(t,{u:()=>d});var n=i(23174),o=i.n(n),a=(i(67294),i(5366)),r=i(69653),l=i(68785),s=i(42045);function d(e){window.__c={n:"OrderSummaryTaxItem"};const t=(0,r.hr)(),{tax:i,calculatingTax:n}=e;return o()("div",{style:t.itemContainer},void 0,o()("div",{style:t.captionContainer},void 0,o()("span",{style:t.name},void 0,o()(a.FormattedMessage,{id:"subscriptionHelpers.lineItems.taxIfApplicable.title",defaultMessage:"Tax if applicable"}))),o()("span",{style:t.price},void 0,n?o()(l.Z,{}):0===i.amount?"—":o()(s.W,{cost:i.toMoneyValue(),trailingZeroDisplay:"stripIfInteger"})))}},25081:(e,t,i)=>{i.r(t),i.d(t,{default:()=>Be});var n=i(23174),o=i.n(n),a=i(67294),r=i(480),l=i(86628),s=i(24405),d=i(64275),c=i(97880),u=i(82990),p=i(5366),m=i(17153),g=i(41168),y=i(34859),v=i(73428),f=i(11066),b=i(61519),h=i(53336),S=i(92660),C=i(65734),x=i(19234),M=i(77458),w=i(28067),T=i(95485);function I(){return(0,s.yK)((e=>({container:{width:350,display:"flex",marginBottom:72},paymentDetailsContainer:{width:175},paymentDetailsLineItem:{display:"flex",fontSize:14,color:e.regularTextColor,fontWeight:u.Z.fontWeight.regular,marginBottom:8,alignItems:"center"},billedToContainer:{width:175},title:{fontSize:12,color:e.lightTextColor,fontWeight:u.Z.fontWeight.medium,marginBottom:4},text:{fontSize:14,color:e.regularTextColor,fontWeight:u.Z.fontWeight.regular,marginBottom:8},iconStyle:{width:30,height:20,marginRight:5}})),[])}function _(){return o()(p.FormattedMessage,{id:"subscriptionUpdateModal.billedTo",defaultMessage:"Billed to"})}function B(){return o()(p.FormattedMessage,{id:"subscriptionUpdateModal.paymentDetails",defaultMessage:"Payment details"})}function Z(e){window.__c={n:"BillingAddress"};const{address:t}=e,i=(0,p.useIntl)(),n=I(),a=i.formatList([t.addressLine1,t.addressLine2].filter(Boolean),{type:"conjunction",style:"narrow"}),r=i.formatList([t.state,t.country,t.zipCode].filter(Boolean),{type:"conjunction",style:"narrow"}),l=[t.name,t.businessName,a,r].filter(Boolean);return o()("div",{style:n.text},void 0,l.map(((e,t)=>o()("div",{},t,e))))}function F(e){window.__c={n:"PaymentDetails"};const{stripeData:t}=e,i=I();if(t.isSubscribed&&"send_invoice"===t.billing)return null;if(!t.brand||!t.last4)return null;let n=null;switch(t.brand.toLowerCase()){case"visa":n=(0,T.w)(i.iconStyle);break;case"mastercard":n=(0,w.N)(i.iconStyle);break;case"amex":n=(0,M.b)(i.iconStyle)}return o()("div",{style:i.paymentDetailsLineItem},void 0,n,`•••• ${t.last4}`)}function P(e){window.__c={n:"PaymentDetailsAndBillingAddress"};const{data:t}=e,i=I(),n=(0,g.aS)(t);return n&&(0,g.MM)(t)?o()("div",{style:i.container},void 0,o()("div",{style:i.paymentDetailsContainer},void 0,o()("div",{style:i.title},void 0,o()(B,{})),o()("div",{},void 0,o()(F,{stripeData:n}))),n.address&&x.A(n.address)?o()("div",{style:i.billedToContainer},void 0,o()("div",{style:i.title},void 0,o()(_,{})),o()("div",{},void 0,o()(Z,{address:n.address}))):null):null}i(21703);var k=i(50906),O=i(18168);function D(){return(0,s.yK)((e=>({discountText:{color:e.invoiceGreen,fontSize:14},icon:{width:16,height:16},mainTextSelected:{fontWeight:u.Z.fontWeight.medium,color:e.regularTextColor,fontSize:14},mainTextUnselected:{color:e.mediumTextColor,fontSize:14},priceText:{fontSize:12,color:e.mediumTextColor,marginTop:2},row:{display:"flex",alignItems:"center",justifyContent:"center",gap:4,lineHeight:"14px"},sectionHeader:{display:"flex",alignItems:"center",marginBottom:11,fontSize:11,fontWeight:u.Z.fontWeight.semibold,color:e.mediumTextColor}})),[])}function W(e){window.__c={n:"Section"};const{header:t,children:i}=e,n=D();return o()("div",{},void 0,o()("div",{style:n.sectionHeader},void 0,t),i)}function U(e){window.__c={n:"BillingIntervalOption"};const{isSelected:t,billingInterval:i}=e,n=D(),r=t?n.mainTextSelected:n.mainTextUnselected;let l;switch(i){case"month":l=o()(p.FormattedMessage,{id:"spaceSubscriptionSettings.orderOptions.billingPeriodSection.monthly",defaultMessage:"Monthly"});break;case"year":l=o()(p.FormattedMessage,{id:"spaceSubscriptionSettings.orderOptions.billingPeriodSection.yearly",defaultMessage:"Yearly"});break;default:throw new Error(`Unsupported billing interval: ${i}`)}return a.createElement(a.Fragment,null,o()("div",{style:n.row},void 0,o()("div",{style:r},void 0,l),"year"===i?o()("div",{style:n.discountText},void 0,o()(p.FormattedMessage,{id:"spaceSubscriptionSettings.orderOptions.billingPeriodSection.yearlyDiscount",defaultMessage:"{percent}% off",values:{percent:20}})):null))}function z(e){window.__c={n:"SpaceSubscriptionOrderOptions"};const t=(0,r.O7)(),[i,n]=(0,l.VK)((()=>{const e=v.Z.state;return[e.temporaryBillingInterval,e.billingInterval]}),[]),s=(0,a.useMemo)((()=>[{key:"month",isDisabled:"month"===n,render:()=>o()(U,{isSelected:"month"===i,billingInterval:"month"})},{key:"year",isDisabled:"year"===n,render:()=>o()(U,{isSelected:"year"===i,billingInterval:"year"})}]),[n,i]);return a.createElement(a.Fragment,null,o()(W,{header:o()(p.FormattedMessage,{id:"spaceSubscriptionSettings.orderOptions.billingPeriodSection.header",defaultMessage:"Billing period"})},void 0,o()(O.Z,{items:s,value:i,onChange:e=>{k.b0I(t,{billingInterval:e}),v.Z.update((t=>({...t,temporaryBillingInterval:e})))}})))}var A=i(13991),E=i(7057),L=i(69651),V=i(77058),H=i(42853),K=i(16880),R=i(3791),G=i(71993),j=i(94191),X=i(62216),Y=i(69653),q=i(78291),N=i(30751),$=i(64921),Q=i(68785),J=i(32617),ee=i(1063),te=i(95381),ie=i(25889),ne=i(42922);function oe(){return o()(p.FormattedMessage,{id:"subscriptionUpdateModal.confirmationButton",defaultMessage:"Confirm changes"})}function ae(e){window.__c={n:"MidtermConfirmationButton"};const{disabled:t,onClickUpgrade:i}=e,n=(0,s.yK)((e=>({button:{width:"100%",height:40,marginTop:20}})),[]);return o()(ne.Z,{disabled:t,style:n.button,onClick:i},void 0,o()(oe,{}))}var re=i(42045),le=i(67773),se=i(43761),de=i(24862),ce=i(26156);function ue(e){window.__c={n:"SpaceSubscriptionUpdateOrderSummary"};const{data:t,subscriptionTier:i,temporaryBillingInterval:n,calculatingTax:a,taxAmount:s,promo:d}=e,c=Me(),u=(0,r.O7)(),y=(0,J.mn)(),v=(0,l.VK)((()=>{var e;return(0,X.px)(u)&&!(0,R.de)(null===(e=q.default.state.data)||void 0===e?void 0:e.addOns)&&y}),[y,u])?"ai_fifty_percent":void 0,f=Y.Zr(d),{availableCurrencyCodes:b,selectedCurrencyCode:h}=(0,l.VK)((()=>({availableCurrencyCodes:N.Z.availableCurrencyCodes,selectedCurrencyCode:N.Z.selectedCurrencyCode})),[]),S=Y.Lp(e),C=(0,l.VK)((()=>S.map((e=>N.Z.getPrice(u,(t=>t.product===e&&t.billingInterval===n))))),[u,S,n]);if(C.some((e=>!e.isLoaded)))return o()(Q.Z,{});const x=C.map((e=>e.result)).filter(Boolean);if(!x||0===x.length)return null;const M=x[0].unitAmount.currencyValue,w=g.su(t),T=Y.cv({prices:x,quantity:w,coupon:v}),I=Y.VT({calculatingTax:a,taxAmount:s,currencyValue:M}),_=Y.rF({prices:x,quantity:w,promo:f}),B=Y.Et(t,M),Z=T.plus(I).minus(_).minus(B),F=Z.amount<0?Z.withMultipliedAmount(0):Z;return o()("div",{style:c.container},void 0,o()("label",{style:c.header},void 0,o()(p.FormattedMessage,{id:"spaceSubscriptionUpdateModal.orderSummary.header",defaultMessage:"Order summary"}),o()(ie.V,{availableCurrencyCodes:b,from:"update_modal",onSelectCurrency:G.y,selectedCurrencyCode:h})),o()(pe,{data:t}),o()(ye,{totalAmount:F}),o()(ve,{prices:x,data:t,subscriptionTier:i,totalAmount:F,coupon:v,subtotal:T,tax:I,calculatingTax:a,discount:_,promo:f,accountBalance:B}),o()(ae,{disabled:!1,onClickUpgrade:async()=>m.Mg(u,v)}),o()(te.E,{products:S}))}function pe(e){window.__c={n:"ImmediateOrPendingChangeMessage"};const{storeState:t}=(0,l.VK)((()=>({storeState:v.Z.state})),[]);if(!t.open)return null;const{view:i,billingInterval:n,temporaryBillingInterval:a}=t;if((0,j.rO)(i,n,a))return o()(me,{view:i});if((0,j.Z_)(i,n,a)){const t=(0,g.XX)(e.data);return t?o()(ge,{periodEnd:t.periodEnd}):null}return null}function me(e){window.__c={n:"EffectiveToday"};const t=Me();return o()("div",{},void 0,o()("div",{style:t.topSection},void 0,o()("div",{style:t.checkmarkSection},void 0,(0,V.$)(t.checkmark)),o()("label",{style:t.subTitle},void 0,o()(p.FormattedMessage,{id:"spaceSubscriptionUpgradeModal.effectiveToday.header",defaultMessage:"Effective today"}))),o()("div",{style:t.subTitleDescription},void 0,o()(p.FormattedMessage,{id:"spaceSubscriptionUpgradeModal.planWillChangeToday.message",defaultMessage:"{planType, select, add_ons {Add-on} other {Plan}} will change today",values:{planType:e.view}})))}function ge(e){window.__c={n:"PendingChange"};const t=Me();return o()("div",{style:t.pendingChangesContainer},void 0,o()("div",{style:t.topSection},void 0,o()("div",{style:t.checkmarkSection},void 0,(0,L.C)(t.calendar)),o()("label",{style:t.subTitle},void 0,o()(p.FormattedMessage,{id:"spaceSubscriptionUpgradeModal.pendingChange.header",defaultMessage:"Effective {periodEnd}",values:{periodEnd:(0,E.Yx)(e.periodEnd,"medium",A.SP)}}))),o()("div",{style:t.subTitleDescription},void 0,o()(p.FormattedMessage,{id:"spaceSubscriptionUpgradeModal.planWillChangeAtTheEnd.message",defaultMessage:"Billing period will change at the end of your billing period."})))}function ye(e){window.__c={n:"TotalPriceToggle"};const{totalAmount:t}=e,i=Me(),n=(0,r.O7)(),{storeState:s}=(0,l.VK)((()=>({storeState:v.Z.state})),[]);if(!s.open)return null;if("billing_interval"===s.view&&s.billingInterval===s.temporaryBillingInterval)return o()("div",{style:i.totalPriceContainer},void 0,o()("div",{style:i.totalPriceHeader},void 0,o()(p.FormattedMessage,{id:"spaceSubscriptionUpdateOrderSummary.total",defaultMessage:"Total"})),o()("div",{style:i.totalPrice},void 0,"-"));const d=s.isExpandedView,c="year"===s.billingInterval&&"month"===s.temporaryBillingInterval;return o()($.Z,{onClick:()=>d?m.OT(n):m.bX(n),style:i.totalPriceContainer},void 0,c?a.createElement(a.Fragment,null,o()("div",{style:i.estimatedFuturePriceHeader},void 0,o()(p.FormattedMessage,{id:"spaceSubscriptionUpdateOrderSummary.estimatedFuturePrice",defaultMessage:"Estimated future price"})),o()("div",{style:i.estimatedFuturePrice},void 0,o()(re.W,{cost:t.toMoneyValue(),trailingZeroDisplay:"stripIfInteger"}),o()("div",{style:i.estimatedFuturePriceButton},void 0,d?(0,K.R)(i.estimatedFuturePriceIcon):(0,H.i)(i.estimatedFuturePriceIcon)))):a.createElement(a.Fragment,null,o()("div",{style:i.totalPriceHeader},void 0,o()(p.FormattedMessage,{id:"spaceSubscriptionUpdateOrderSummary.estimatedPrice",defaultMessage:"Estimated price"})),o()("div",{style:i.totalPrice},void 0,o()(re.W,{cost:t.toMoneyValue(),trailingZeroDisplay:"stripIfInteger"}),o()("div",{style:i.button},void 0,d?(0,K.R)(i.icon):(0,H.i)(i.icon)))))}function ve(e){window.__c={n:"ExpandedBillingDetails"};const{prices:t,data:i,subscriptionTier:n,totalAmount:a,subtotal:r,tax:s,calculatingTax:d,discount:c,promo:u,coupon:p,accountBalance:m}=e,y=Me(),{storeState:f}=(0,l.VK)((()=>({storeState:v.Z.state})),[]);return f.open&&f.isExpandedView?o()("div",{style:y.container},void 0,o()(fe,{prices:t,data:i,coupon:p}),g.Fu(n)&&o()(ee.X,{tier:n}),o()(Ce,{subtotal:r,tax:s,calculatingTax:d,discount:c,promo:u,coupon:p,accountBalance:m}),o()(xe,{totalAmount:a})):null}function fe(e){const{data:t,prices:i,coupon:n}=e;return a.createElement(a.Fragment,null,i.map((e=>o()(be,{price:e,data:t,coupon:n},e.externalId))))}function be(e){window.__c={n:"SpaceSubscriptionGrossOrderItem"};const{price:t,data:i,coupon:n}=e,a=g.su(i),r=t.getCostPerBillingInterval({quantity:a,coupon:n}),l=(0,s.yK)((e=>({container:{display:"flex",justifyContent:"space-between"},item:{},title:{fontSize:14,marginBottom:4,lineHeight:1},subtitle:{color:e.mediumTextColor,fontSize:12},price:{fontSize:14}})),[]);return o()("div",{style:l.container},void 0,o()("div",{style:l.item},void 0,o()("div",{style:l.title},void 0,o()(he,{price:t})),o()("div",{style:l.subtitle},void 0,o()(Se,{price:t,data:i,coupon:n}))),o()("div",{style:l.price},void 0,o()(re.W,{cost:r.toMoneyValue(),trailingZeroDisplay:"stripIfInteger"})))}function he(e){const{price:t}=e;switch(t.product){case"free":case"student":return null;case"ai":return o()(p.FormattedMessage,{id:"spaceSubscriptionUpdateModal.orderSummary.ai.addOn",defaultMessage:"Notion AI"});case"personal":return o()(p.FormattedMessage,{id:"spaceSubscriptionUpdateModal.orderSummary.singlePlayerPlusPlan",defaultMessage:"Plus plan with a 1-member limit"});case"plus":return o()(p.FormattedMessage,{id:"spaceSubscriptionUpdateModal.orderSummary.plusPlan",defaultMessage:"Plus plan"});case"business":return o()(p.FormattedMessage,{id:"spaceSubscriptionUpdateModal.orderSummary.businessPlan",defaultMessage:"Business plan"});case"enterprise":return o()(p.FormattedMessage,{id:"spaceSubscriptionUpdateModal.orderSummary.enterprisePlan",defaultMessage:"Enterprise plan"});default:(0,c.t1)(t.product)}}function Se(e){const{price:t,data:i,coupon:n}=e,a=g.su(i),r=g.GD(t.billingInterval),l=t.getMonthlyUnitCost(n),s=o()(re.W,{cost:l.toMoneyValue(),trailingZeroDisplay:"stripIfInteger"});switch(r){case"year":return o()(p.FormattedMessage,{id:"spaceSubscriptionUpdateModal.orderSummary.planSubtitle.billedYearly",defaultMessage:"{price} / member / month × {numberOfMembers, plural, one {# member} other {# members}}{br}Billed yearly",values:{br:o()("br",{}),price:s,numberOfMembers:a}});case"month":return o()(p.FormattedMessage,{id:"spaceSubscriptionUpdateModal.orderSummary.planSubtitle.billedMonthly",defaultMessage:"{price} / member / month × {numberOfMembers, plural, one {# member} other {# members}}{br}Billed monthly",values:{br:o()("br",{}),price:s,numberOfMembers:a}});default:(0,c.t1)(r)}}function Ce(e){const{subtotal:t,tax:i,calculatingTax:n,discount:a,promo:r,coupon:l,accountBalance:s,style:d}=e;return o()("div",{style:d},void 0,o()(de.r,{subtotal:t}),o()(ce.u,{tax:i,calculatingTax:n}),r&&!l?o()(se.T,{discount:a,promo:r}):void 0,o()(le.G,{accountBalance:s}))}function xe(e){const{totalAmount:t}=e,i=Y.hr();return o()("div",{style:i.itemContainer},void 0,o()("div",{style:i.captionContainer},void 0,o()("span",{style:i.totalName},void 0,o()(p.FormattedMessage,{id:"spaceSubscriptionUpdateModal.orderSummary.totalForToday",defaultMessage:"Total for today"}))),o()("span",{style:i.totalPrice},void 0,o()(re.W,{cost:t.toMoneyValue(),trailingZeroDisplay:"stripIfInteger"})))}function Me(){return(0,s.yK)((e=>({container:{display:"flex",flexDirection:"column",gap:16,width:250,padding:4},header:{alignItems:"center",color:e.regularTextColor,display:"flex",fontSize:16,fontWeight:u.Z.fontWeight.semibold,gap:8,marginBottom:11},totalPriceContainer:{display:"flex",justifyContent:"space-between",alignItems:"center",lineHeight:1,padding:4,borderRadius:4,margin:-4},totalPriceHeader:{fontSize:14,color:e.regularTextColor,fontWeight:u.Z.fontWeight.semibold},totalPrice:{fontSize:20,color:e.regularTextColor,fontWeight:u.Z.fontWeight.semibold,display:"flex",alignItems:"center"},estimatedFuturePriceHeader:{fontSize:14,color:e.regularTextColor},estimatedFuturePrice:{fontSize:14,color:e.regularTextColor,display:"flex",alignItems:"center"},estimatedFuturePriceIcon:{width:12,height:12},estimatedFuturePriceButton:{marginLeft:4},icon:{width:18,height:18},button:{marginLeft:6},subTitle:{fontSize:14,color:e.regularTextColor,fontWeight:u.Z.fontWeight.medium},subTitleDescription:{fontSize:14,color:e.mediumTextColor,fontWeight:u.Z.fontWeight.regular},couponLink:{fontSize:12},checkmark:{width:18,height:18,marginTop:2,color:e.blueColor},checkmarkSection:{paddingRight:6},calendar:{width:18,height:18,marginTop:2,color:e.regularTextColor},topSection:{display:"flex"},pendingChangesContainer:{width:260}})),[])}function we(e){window.__c={n:"BaseSpaceSubscriptionUpdateModal"};const t=(0,s.yK)((e=>({modal:{fontSize:14,textAlign:"left",display:"flex"},cancelButton:{position:"absolute",top:24,right:20,background:e.buttonHoveredBackground,borderRadius:"100%",width:22,height:22,display:"flex",alignItems:"center",justifyContent:"center",zIndex:10},closeIcon:{width:14,fill:e.mediumTextColor},hovered:{background:e.buttonPressedBackground}})),[]),i=(0,r.O7)();return o()("div",{style:t.modal},void 0,o()("div",{},void 0,o()(f.Z,{onClick:()=>{m.cM(i)},style:t.cancelButton,hoveredStyle:t.hovered},void 0,(0,d.D)(t.closeIcon))),o()(Te,{data:e.data}))}function Te(e){window.__c={n:"SpaceSubscriptionUpdateModalContent"};const{data:t}=e,i=_e(),{storeState:n}=(0,l.VK)((()=>({storeState:v.Z.state})),[]);if(!t||!n.open)return null;const r="billing_interval"===n.view?n.temporaryBillingInterval:n.billingInterval;if(!r)return null;const s="plans"===n.view?i.modalContentBody:i.shorterModalContentBody;return a.createElement(a.Fragment,null,o()("div",{},void 0,o()(h.Z,{type:y.Z.Y,showScrollToBottomIndicator:!0},void 0,o()(Ie,{storeState:n}),o()("div",{style:s},void 0,o()(P,{data:t})))),o()("div",{style:i.sidebar},void 0,o()("div",{style:i.modalContentSidebar},void 0,o()(h.Z,{type:y.Z.Y},void 0,o()(ue,{data:t,promo:void 0,subscriptionTier:n.temporarySubscriptionTier??n.subscriptionTier,onlyShowAddOn:"add_ons"===n.view,taxAmount:n.taxAmount,calculatingTax:n.calculatingTax,temporaryBillingInterval:r,addOnFeature:n.addOnFeature})))))}function Ie(e){window.__c={n:"ModalContent"};const{storeState:t}=e,i=_e();let n=null;const r=t.view;switch(r){case"add_ons":n=a.createElement(a.Fragment,null,o()("div",{style:i.modalContentBody},void 0,o()(C.Q,{subscriptionTier:t.subscriptionTier,addOnFeature:t.addOnFeature,onlyShowAddOn:!0}),o()(b.Z,{size:0})));break;case"billing_interval":n=a.createElement(a.Fragment,null,o()("div",{style:i.billingIntervalBody},void 0,o()("div",{style:i.primaryTextStyle},void 0,o()(p.FormattedMessage,{id:"spaceSubscriptionUpdateModal.billingInterval.title",defaultMessage:"Change billing period"})),o()(z,{}),o()(b.Z,{size:0})));break;case"plans":if(!t.temporarySubscriptionTier)return null;n=o()("div",{style:i.modalContentBody},void 0,o()(C.Q,{subscriptionTier:t.temporarySubscriptionTier,onlyShowAddOn:!1}),o()(b.Z,{size:0}));break;case"default":n=o()("div",{style:i.modalContentBody},void 0,o()(C.Q,{subscriptionTier:t.subscriptionTier,onlyShowAddOn:!1}),o()(b.Z,{size:0}));break;default:(0,c.t1)(r)}return n}function _e(){return(0,s.yK)((e=>({primaryTextStyle:{fontWeight:u.Z.fontWeight.bold,fontSize:20,lineHeight:1.1,marginTop:24},modal:{background:e.popoverBackground,borderRadius:12,width:750,maxHeight:760,display:"flex"},modalContent:{flex:1,maxWidth:"60%",backgroundColor:e.modalBackground,display:"flex",flexDirection:"column",position:"relative",borderRadius:"12px 0 0 12px"},modalContentBody:{padding:"36px 42px 0px 42px",display:"flex",flexDirection:"column",maxWidth:400},shorterModalContentBody:{padding:"24px 42px 0px 42px",display:"flex",flexDirection:"column",maxWidth:400},billingIntervalBody:{minWidth:360,padding:"24px 42px 0 42px",display:"flex",flexDirection:"column",rowGap:24},sidebar:{backgroundColor:e.sidebarSecondaryBackground},modalContentSidebar:{flex:1,borderLeft:`1px solid ${e.lightDividerColor}`,padding:20,display:"flex",flexDirection:"column"}})),[])}const Be=function(e){window.__c={n:"SpaceSubscriptionUpdateModal"};const{data:t}=e,i=(0,s.yK)((()=>({innerStyle:{borderRadius:10}})),[]),n=(0,l.VK)((()=>v.Z.state),[]);return t&&n.open&&(0,g.GJ)(t)?o()(S.Z,{innerStyle:i.innerStyle,requireOnline:!0,modalStore:v.Z,onDismiss:()=>{},render:()=>o()(we,{data:t})}):null}},77058:(e,t,i)=>{i.d(t,{$:()=>a});var n=i(23174),o=i.n(n);i(67294);const a=(0,i(45238).I)("checkmark",{viewBox:"0 0 20 20",svg:o()("path",{d:"M10.0693 18.166C14.7759 18.166 18.6606 14.2812 18.6606 9.58301C18.6606 4.88477 14.7676 1 10.061 1C5.36279 1 1.48633 4.88477 1.48633 9.58301C1.48633 14.2812 5.37109 18.166 10.0693 18.166ZM9.13965 13.6836C8.82422 13.6836 8.56689 13.5508 8.33447 13.2437L6.30078 10.7783C6.15137 10.5874 6.07666 10.3965 6.07666 10.189C6.07666 9.75732 6.41699 9.40869 6.84863 9.40869C7.10596 9.40869 7.30518 9.5 7.521 9.77393L9.11475 11.791L12.5347 6.3125C12.7173 6.02197 12.9497 5.88086 13.2153 5.88086C13.6387 5.88086 14.0205 6.17139 14.0205 6.61133C14.0205 6.80225 13.9209 7.00977 13.8047 7.19238L9.91162 13.2437C9.729 13.5342 9.45508 13.6836 9.13965 13.6836Z"})})}}]);