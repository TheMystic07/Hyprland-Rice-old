"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[653],{93289:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(23174),n=a.n(r),o=a(67294),s=a(13991),i=a(77907);const l=function(e){let{firstDayOfWeek:t,value:a,selectValue:r=!0,onChange:l,disabledDays:d}=e;window.__c={n:"DatePicker"};const u=(0,o.useMemo)((()=>new Date(a)),[a]),[c,m]=(0,o.useState)(u),y=(0,o.useRef)(a);(0,o.useLayoutEffect)((()=>{y.current!==a&&(m(new Date(a)),y.current=a)}),[a]);const p=(0,o.useCallback)(((e,t,a)=>{l(e.getTime())}),[l]);return n()(i.LazyDayPicker,{locale:s.SP,className:"notion-calendar-picker",numberOfMonths:1,weekStartsOn:t,modifiers:r?{value:u}:{},showOutsideDays:!0,fixedWeeks:!0,onDayClick:p,onMonthSelected:m,disabled:d,month:c})}},26803:(e,t,a)=>{a.r(t),a.d(t,{default:()=>J});var r=a(23174),n=a.n(r),o=a(10434),s=a.n(o),i=a(30120),l=a(67294),d=a(480),u=a(86628),c=a(24405),m=a(40506),y=a(53877),p=a(42853),g=a(53523),f=a(24211),v=a(72126),M=a(4615),k=a(81491),b=a(97880),h=a(63143),w=a(5366),I=a(3992),S=a(28020),R=a(87279);const C=[{frequency:"day",interval:1},{frequency:"week",interval:1},{frequency:"month",interval:1},{frequency:"year",interval:1}];var E=a(57559),P=a(52275),F=a(31945),L=a(96525),Z=a(88359),D=a(74194),x=a(3386),q=a(78140),T=a(28992),_=a(32163),A=a(89728),O=a(72495),B=a(7931),W=a(64369),U=a(93289),K=a(84795),z=a(26388);function V(e){window.__c={n:"TimeInput"};const t=(0,d.O7)(),{device:a}=t,r=(0,w.useIntl)(),[o,s]=(0,l.useState)(e.value),[u,m]=(0,l.useState)(void 0),y=t=>{const a=(0,K.parseTime)(t,r),n=i.ou.fromFormat(a??"","T");return n.isValid?(m(void 0),e.onUpdate({hour:n.hour,minute:n.minute})):(m("invalid"),e.onError&&e.onError()),n},p=e=>{const t=e.target.value;s(t),y(t)},g=()=>{const e=y(o);e.isValid&&s(e.toLocaleString(i.ou.TIME_SIMPLE))},f=(0,c.yK)((e=>({input:{textAlign:"right"},error:{boxShadow:e.outlineRedInputBoxShadow}})),[]);return n()(z.Z,{renderTooltip:()=>function(e){if("invalid"===e)return n()(w.FormattedMessage,{defaultMessage:"Invalid time",id:"timeInput.invalid"})}(u),forceVisibleState:void 0!==u,placement:z.Z.Placement.Bottom,render:()=>n()(D.Z,{type:"text",onChange:p,onSubmit:g,onBlur:g,value:o,size:1,style:{...e.style,...u?f.error:{},fontSize:a.isMobile?16:14},inputStyle:f.input})})}var H=a(62069),Y=a(67149),N=a(7057),X=a(64921);function j(e){window.__c={n:"WeekdaySelector"};const{weekdays:t,onChange:a}=e,r=e.minimumSelection??0,o=(0,w.useIntl)(),i=(0,c.yK)((e=>({wrapper:{display:"flex",alignItems:"center",justifyContent:"space-between",textAlign:"center"},selectedDay:{...G,background:e.blueButtonBackground,color:e.regularInvertedTextColor},unselectedDay:{...G,background:e.accentColors.gray[50],color:e.mediumTextColor},selectedDayHover:{background:e.blueButtonHoveredBackground},unselectedDayHover:{background:e.accentColors.gray[100]},selectedDayPressed:{background:e.blueButtonPressedBackground},unselectedDayPressed:{background:e.accentColors.gray[200]}})),[]);return n()(x.Z,{capture:!0},void 0,n()("div",{style:{...i.wrapper,...e.style}},void 0,Y.Z.map(((n,d)=>l.createElement(X.Z,s()({key:n},e,{onClick:()=>{const e=t.includes(n)?t.length>r?t.filter((e=>e!==n)):t:[...t,n];a(e)},style:t.includes(n)?i.selectedDay:i.unselectedDay,hoveredStyle:t.includes(n)?i.selectedDayHover:i.unselectedDayHover,pressedStyle:t.includes(n)?i.selectedDayPressed:i.unselectedDayPressed}),(0,N.er)(o,d+1))))))}const G={borderRadius:"50%",marginLeft:3,marginRight:3,height:25,width:25,fontSize:14,paddingTop:2};const J=(0,l.forwardRef)((function(e,t){const a=(0,d.O7)(),{device:r}=a,o=(0,c.Fg)(),K=(0,w.useIntl)(),[z,Y]=(0,l.useState)(void 0),[N,X]=(0,l.useState)({id:(0,M.ZP)(),start_date:i.ou.local().set({hour:0,minute:0,second:0,millisecond:0}).toMillis(),timezone:(0,y.Sv)(),hour:0,minute:0,frequency:"day",interval:1}),[G,J]=(0,l.useState)(!0),oe=e.templateStore,se=(0,u.VK)((()=>E.Mz.fromBlockStore(oe)),[oe]),ie=(0,u.VK)((()=>void 0===oe.getAutomationId()||(null==se?void 0:se.isReady())),[oe,se]),le=(0,u.VK)((()=>(null==se?void 0:se.isActive())??!1),[se]),de=(0,u.VK)((()=>null==se?void 0:se.getRecurrence()),[se]);void 0===z&&ie&&(void 0!==de?(X({...de,hour:de.hour??0,minute:de.minute??0,start_date:(0,m.YL)(de.start_date)}),Y(!0)):Y(!1));const ue=e=>{const t="week"!==e||void 0!==N.weekdays&&0!==N.weekdays.length?N.weekdays:[(a=N.start_date,(0,b.Yd)(k.RRULE_WEEKDAYS_MAP)[i.ou.fromMillis(a).weekday-1])];var a;X({...N,weekdays:t,frequency:e}),Y(!0)},ce=()=>{I.addRecurrence({environment:a,blockStore:e.templateStore,recurrence:N})},me=r.isMobile?F.Z4.SlideUp:F.Z4.Popup,ye=function(){const{isMobile:e}=(0,d.Fy)();return(0,c.yK)((t=>({iconStyle:{fill:t.regularIconColor,width:e?18:16},customFrequencySelectButton:{color:t.mediumTextColor,fill:t.lightIconColor,fontWeight:500,fontSize:12},weekdayWrapper:{padding:10},inputLabel:{display:"flex",alignItems:"center",...e?{padding:"10px 14px",fontSize:16,background:t.cardBackground}:{paddingLeft:8}},intervalFrequencyLabel:{color:t.lightTextColor},intervalInputWrapper:{width:70,marginLeft:10,marginRight:10},intervalInput:{textAlign:"right"},timeInputWrapper:{width:90,marginLeft:10,marginRight:10},inputSection:{...Q,alignItems:"center",justifyContent:"flex-start",padding:8},chevron:{width:e?14:10,fill:t.lightIconColor,marginLeft:4}})),[e])}(),pe=r.isMobile?"number":"text",ge=C.map((e=>({key:e.frequency,action:()=>{ue(e.frequency)},render:t=>l.createElement(P.Z,s()({},t,{title:ee(e.frequency)}))}))),fe=n()(x.Z,{capture:!0,onLeft:v.yR,onRight:v.yR,onSelectAll:v.yR,onRedo:v.yR,onUndo:v.yR,onCut:v.yR,onCopy:v.yR,onPaste:v.yR,onKeypress:v.yR,onDelete:v.yR,onBackspace:v.yR,onTab:v.yR},void 0,n()(D.Z,{value:N.interval.toString(),style:ye.intervalInputWrapper,inputStyle:ye.intervalInput,type:pe,maxlength:3,onChange:e=>{const t=parseInt(e.target.value);(0,h.hj)(t)&&t>0&&t<=k.MAX_RECURRENCE_INTERVAL&&X({...N,interval:t})},onBlur:e=>{e.target.value=N.interval.toString()}}));return l.createElement(L.Z,s()({},e,{popupType:me,ref:t,stopClickPropagation:!0,renderOrigin:t=>l.createElement(Z.Z,s()({},t,{icon:(0,g.N)(ye.iconStyle),title:n()(w.FormattedMessage,{defaultMessage:"Repeat",id:"database.templatePickerItem.actionMenu.repeat"}),focused:e.focused,showExtensionArrow:r.isMobile,right:ie&&ne({isActive:le,recurrence:de,intl:K})})),render:t=>n()(x.Z,{capture:!0,onEnter:v.yR},void 0,l.createElement(q.Z,function(e,t,a,r){return t?{menuType:R.og.Modal,title:n()(w.FormattedMessage,{defaultMessage:"Repeat",id:"database.templatePickerItem.mobileRepeatModal.title"}),left:n()(w.FormattedMessage,{defaultMessage:"Cancel",id:"database.templatePickerItem.customRecurrence.cancel"}),right:$,rightDisabled:!a,onClickRight:()=>{a&&(r(),e.close())},onClickLeft:()=>{e.close()}}:{menuType:R.og.Popup}}(t,r.isMobile,G,ce),z?l.createElement(l.Fragment,null,n()(O.Z,{style:Q},void 0,n()(B.Z,{innerButtonStyle:{...!r.isMobile&&ye.customFrequencySelectButton},selectedTitle:te(N.frequency),renderMenuSections:r=>[{key:"repeatOptionsSection",render:e=>l.createElement(O.Z,e),items:[...ae({parent:r,updateFrequencyFn:e=>{ue(e)}}),re({environment:a,parent:r,templateStore:e.templateStore,onClose:()=>{Y(!1),t.close()}})]}]}),!r.isMobile&&n()(A.Z,{isBlue:G,isLightGray:!G,onClick:e=>{ce(),t.close()},disabled:!G},void 0,$)),n()(O.Z,{style:ye.inputSection,shouldShowBottomDivider:!0},void 0,n()(W.Z,{style:ye.inputLabel},void 0,function(e,t,a){switch(t){case"day":return n()(w.FormattedMessage,{defaultMessage:"Every {interval} <label>days</label>",id:"database.templatePickerItem.recurrenceInterval.everyXdays",values:{label:e=>n()("label",{style:a},void 0,e),interval:e}});case"week":return n()(w.FormattedMessage,{defaultMessage:"Every {interval} <label>weeks</label>",id:"database.templatePickerItem.recurrenceInterval.everyXweeks",values:{label:e=>n()("label",{style:a},void 0,e),interval:e}});case"month":return n()(w.FormattedMessage,{defaultMessage:"Every {interval} <label>months</label>",id:"database.templatePickerItem.recurrenceInterval.everyXmonths",values:{label:e=>n()("label",{style:a},void 0,e),interval:e}});case"year":return n()(w.FormattedMessage,{defaultMessage:"Every {interval} <label>years</label>",id:"database.templatePickerItem.recurrenceInterval.everyXyears",values:{label:e=>n()("label",{style:a},void 0,e),interval:e}});default:(0,b.t1)(t)}}(fe,N.frequency,ye.intervalFrequencyLabel))),"week"===N.frequency&&n()(O.Z,{},void 0,n()(j,{style:ye.weekdayWrapper,focused:!0,weekdays:N.weekdays||[],minimumSelection:1,onChange:e=>{X({...N,weekdays:e})}})),n()(O.Z,{topBorder:!0},void 0,n()(F.ZP,{popupType:me,renderOrigin:e=>l.createElement(Z.Z,s()({},e,{title:n()(w.FormattedMessage,{defaultMessage:"Starts",id:"database.templatePickerItem.repeatMenu.starts"}),focused:!1,showExtensionArrow:r.isMobile,right:i.ou.fromMillis(N.start_date).setLocale((0,f.E2)(K)).toLocaleString({weekday:"short",month:"short",day:"numeric",year:"numeric"})})),render:e=>n()("div",{style:{padding:"18px 14px 14px"}},void 0,n()(U.Z,{firstDayOfWeek:S.AK.state,value:Math.max(N.start_date,Date.now()),onChange:t=>{X({...N,start_date:t}),e.close()},disabledDays:{before:new Date}}))})),n()(O.Z,{style:ye.inputSection,shouldShowBottomDivider:!0},void 0,n()(W.Z,{style:ye.inputLabel},void 0,n()(w.FormattedMessage,{defaultMessage:"Create at",id:"database.templatePickerItem.repeatMenu.createAt"}),n()(x.Z,{capture:!0,onLeft:v.yR,onRight:v.yR,onSelectAll:v.yR,onRedo:v.yR,onUndo:v.yR,onCut:v.yR,onCopy:v.yR,onPaste:v.yR,onKeypress:v.yR,onDelete:v.yR,onBackspace:v.yR,onTab:v.yR},void 0,n()(V,{value:i.ou.local().set({hour:N.hour,minute:N.minute}).toLocaleString(i.ou.TIME_SIMPLE),style:ye.timeInputWrapper,onUpdate:e=>{X({...N,...e}),J(!0)},onError:()=>{J(!1)}})),n()(H.Z,{renderOrigin:e=>l.createElement(A.Z,e,(0,y.er)(N.timezone),(0,p.i)(ye.chevron)),onSelect:e=>{X({...N,timezone:e})}})))):n()(_.Z,{type:_.i.Vertical,sections:[{key:"repeatOptionsSection",render:e=>l.createElement(O.Z,e),items:[...ge,re({environment:a,parent:t,templateStore:e.templateStore})]}],initialFocus:void 0}),z&&function(e,t,a){const r=(0,k.rruleFromRecurrence)({...t,start_date:(0,m.Io)(new Date(t.start_date))}).after(new Date((0,m.Io)()));if(!r)return null;const o=i.ou.fromJSDate(r).toUTC().setLocale((0,f.E2)(e)).toLocaleString(i.ou.DATETIME_SHORT);return n()(O.Z,{topBorder:!0},void 0,n()(T.Z,{caption:n()("span",{style:{color:a.lightTextColor}},void 0,n()(w.FormattedMessage,{defaultMessage:"Next: {dates}",id:"database.templatePickerItem.recurrenceConfigMenuLabel.next",values:{dates:o}}))}))}(K,N,o)))}))})),Q={display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px"};const $=n()(w.FormattedMessage,{defaultMessage:"Save",id:"database.templatePickerItem.customRecurrence.save"});function ee(e){switch(e){case"day":return n()(w.FormattedMessage,{defaultMessage:"Every day",id:"database.templatePickerItem.quickOptionMenuItem.day"});case"week":return n()(w.FormattedMessage,{defaultMessage:"Every week",id:"database.templatePickerItem.quickOptionMenuItem.week"});case"month":return n()(w.FormattedMessage,{defaultMessage:"Every month",id:"database.templatePickerItem.quickOptionMenuItem.month"});case"year":return n()(w.FormattedMessage,{defaultMessage:"Every year",id:"database.templatePickerItem.quickOptionMenuItem.year"});default:(0,b.t1)(e)}}function te(e){switch(e){case"day":return n()(w.FormattedMessage,{defaultMessage:"Repeat daily",id:"database.templatePickerItem.recurrenceFrequency.daily"});case"week":return n()(w.FormattedMessage,{defaultMessage:"Repeat weekly",id:"database.templatePickerItem.recurrenceFrequency.weekly"});case"month":return n()(w.FormattedMessage,{defaultMessage:"Repeat monthly",id:"database.templatePickerItem.recurrenceFrequency.monthly"});case"year":return n()(w.FormattedMessage,{defaultMessage:"Repeat yearly",id:"database.templatePickerItem.recurrenceFrequency.yearly"});default:(0,b.t1)(e)}}function ae(e){let{parent:t,updateFrequencyFn:a}=e;return C.map((e=>({key:e.frequency,action:()=>{a(e.frequency),t.close()},render:t=>l.createElement(P.Z,s()({},t,{title:te(e.frequency)}))})))}function re(e){let{environment:t,parent:a,templateStore:r,onClose:o}=e;return{key:"disable",action:()=>{I.disableRecurrence({environment:t,blockStore:r}),a.close(),o&&o()},render:e=>l.createElement(P.Z,s()({},e,{title:n()(w.FormattedMessage,{defaultMessage:"Off",id:"database.templatePickerItem.quickOptionMenuItem.off"})}))}}function ne(e){let{isActive:t,recurrence:a,intl:r}=e;return t?a?l.createElement(l.Fragment,null,function(e,t){return(0,k.rruleFromRecurrence)({...e,weekdays:void 0,hour:0,minute:0}).toText((e=>{switch(e){case"every":return t.formatMessage({id:"database.templatePickerItem.repeatMenuLabel.every",defaultMessage:"every"});case"day":return t.formatMessage({id:"database.templatePickerItem.repeatMenuLabel.day",defaultMessage:"day"});case"days":return t.formatMessage({id:"database.templatePickerItem.repeatMenuLabel.days",defaultMessage:"days"});case"week":return t.formatMessage({id:"database.templatePickerItem.repeatMenuLabel.week",defaultMessage:"week"});case"weeks":return t.formatMessage({id:"database.templatePickerItem.repeatMenuLabel.weeks",defaultMessage:"weeks"});case"month":return t.formatMessage({id:"database.templatePickerItem.repeatMenuLabel.month",defaultMessage:"month"});case"months":return t.formatMessage({id:"database.templatePickerItem.repeatMenuLabel.months",defaultMessage:"months"});case"year":return t.formatMessage({id:"database.templatePickerItem.repeatMenuLabel.year",defaultMessage:"year"});case"years":return t.formatMessage({id:"database.templatePickerItem.repeatMenuLabel.years",defaultMessage:"years"});default:return e.toString()}}))}(a,r)):void 0:n()(w.FormattedMessage,{defaultMessage:"Off",id:"database.templatePickerItem.recurrenceConfigMenuLabel.off"})}},54983:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(49085);class n extends r.default{getInitialState(){return{}}}const o=n},81491:(e,t,a)=>{a.r(t),a.d(t,{MAX_RECURRENCE_INTERVAL:()=>s,RRULE_WEEKDAYS_MAP:()=>o,rruleFromRecurrence:()=>i});var r=a(84885);const n={day:r.Ci.DAILY,week:r.Ci.WEEKLY,month:r.Ci.MONTHLY,year:r.Ci.YEARLY},o={MO:r.Ci.MO,TU:r.Ci.TU,WE:r.Ci.WE,TH:r.Ci.TH,FR:r.Ci.FR,SA:r.Ci.SA,SU:r.Ci.SU},s=100;function i(e){const{start_date:t,frequency:a,interval:s,weekdays:i,timezone:l,hour:d,minute:u}=e,c="week"===a&&i?i.map((e=>o[e])):void 0;return new r.Ci({freq:n[a],dtstart:new Date(t),interval:s,byweekday:c,tzid:l,byhour:d??0,byminute:u??0,bysecond:0})}}}]);