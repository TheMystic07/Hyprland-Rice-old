"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[7218],{57218:(e,t,n)=>{n.r(t);n(57658);var i=n(92595),s=n(43993);function o(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return d(e,t,{lines:[],latestRandomId:0,uuidMap:t.uuidMap??{},instanceIdsShown:new Set}).join("\n")}function c(e,t){return t[e]??e}function d(e,t,n){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";const s=e.getTextSlice(),o=s.textInstanceId;t.isInstanceIdRandom&&!n.uuidMap[o]&&(n.uuidMap[o]=`[random UUID #${++n.latestRandomId}]`);const u=c(s.textInstanceId,n.uuidMap);n.lines.push(`${i}- id: ${u}`),n.instanceIdsShown.has(o)||(n.instanceIdsShown.add(o),n.lines.push(`${i}  clock: ${s.opClock.getValue()}`)),n.lines.push(`${i}  text: ${JSON.stringify(s.getTextValue())}`);const a=Array.from(s.iterateItems({includeDeleted:!0,includeEndItem:!0})).map((e=>r(e,n.uuidMap)));n.lines.push(`${i}  items: ${a.join(" ")}`),e.children.length>0&&n.lines.push(`${i}  children:`);for(const c of e.children)d(c,t,n,`${i}  `);return n.lines}function r(e,t){const n=e.toString();if(e instanceof s.Jy){const i=`${c(e.id[0],t)}@${e.id[1]}`;return n.replace(" ",` ${i} `)}if(e instanceof s.JE){const i=`${c(e.id[0],t)}@${e.id[1]}`;return n.replace("]",` ${i}]`)}return n}var u=n(27724);i.exposeDebugValue("visualizeTextSliceTreesOfSelectedBlocks",(()=>{const e=u.default.state.stores,t={},n=new a(t);e.forEach(((e,i)=>{t[e.id]=`block${i+1}`;const s=e.getTextSliceTree();s&&n.pseudonymizeSessions(s)}));const i=[];for(const s of e){const e=s.getTextSliceTree();if(e){const n=o(e,{uuidMap:t});i.push(`TextSliceTree for ${t[s.id]} (${s.id}):\n\n${n}`)}}console.log(i.join("\n\n"))}));class a{constructor(e){this.nextId=0,this.uuidMap=e}pseudonymizeSessions(e){for(const t of e.getTextSlice().iterateItems({includeDeleted:!0,includeEndItem:!0}))if(t instanceof s.Jy||t instanceof s.JE){const e=t.id[0];this.uuidMap[e]||(this.uuidMap[e]=this.zeroOrPositiveIntToLetters(this.nextId++))}for(const t of e.children)this.pseudonymizeSessions(t)}zeroOrPositiveIntToLetters(e){const t="A".codePointAt(0)-"0".codePointAt(0);return e.toString().split("").map((e=>String.fromCodePoint(e.charCodeAt(0)+t))).join("")}}}}]);