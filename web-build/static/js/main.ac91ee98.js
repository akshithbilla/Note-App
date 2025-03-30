(()=>{"use strict";var e={3844:(e,t,r)=>{var o=r(2299),n=r(6665),d=r(3701),a=r(6283),l=r(6773),i=r(9685),f=r(3929),u=r(4825),s=r(397);const c=d.default.create({container:{margin:25,flex:1,backgroundColor:"#f5f5f5",padding:20},heading:{fontSize:24,fontWeight:"bold",marginBottom:20,textAlign:"center"},input:{borderWidth:1,borderColor:"#ccc",borderRadius:8,padding:10,marginBottom:10,backgroundColor:"#fff"},addButton:{backgroundColor:"#5a9",padding:15,borderRadius:8,alignItems:"center"},addButtonText:{color:"#fff",fontWeight:"bold"},noteItem:{flexDirection:"row",justifyContent:"space-between",alignItems:"center",backgroundColor:"#fff",padding:15,marginVertical:5,borderRadius:8},noteText:{flex:1,fontSize:16},deleteButton:{backgroundColor:"#d9534f",borderRadius:8,padding:10},deleteButtonText:{color:"#fff",fontWeight:"bold"}});(0,o.default)((function(){const[e,t]=(0,n.useState)([]),[r,o]=(0,n.useState)("");return(0,s.jsxs)(f.default,{style:c.container,children:[(0,s.jsx)(a.default,{style:c.heading,children:"Notes App"}),(0,s.jsx)(l.default,{style:c.input,placeholder:"Write a note...",value:r,onChangeText:o}),(0,s.jsx)(i.default,{style:c.addButton,onPress:()=>{r.trim().length>0&&(t([...e,{id:Date.now().toString(),content:r}]),o(""))},children:(0,s.jsx)(a.default,{style:c.addButtonText,children:"Add Note"})}),(0,s.jsx)(u.default,{data:e,keyExtractor:e=>e.id,renderItem:({item:r})=>(0,s.jsxs)(f.default,{style:c.noteItem,children:[(0,s.jsx)(a.default,{style:c.noteText,children:r.content}),(0,s.jsx)(i.default,{style:c.deleteButton,onPress:()=>{return o=r.id,void t(e.filter((e=>e.id!==o)));var o},children:(0,s.jsx)(a.default,{style:c.deleteButtonText,children:"Delete"})})]})})]})}))}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var d=t[o]={exports:{}};return e[o](d,d.exports,r),d.exports}r.m=e,(()=>{var e=[];r.O=(t,o,n,d)=>{if(!o){var a=1/0;for(u=0;u<e.length;u++){for(var[o,n,d]=e[u],l=!0,i=0;i<o.length;i++)(!1&d||a>=d)&&Object.keys(r.O).every((e=>r.O[e](o[i])))?o.splice(i--,1):(l=!1,d<a&&(a=d));if(l){e.splice(u--,1);var f=n();void 0!==f&&(t=f)}}return t}d=d||0;for(var u=e.length;u>0&&e[u-1][2]>d;u--)e[u]=e[u-1];e[u]=[o,n,d]}})(),r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={792:0};r.O.j=t=>0===e[t];var t=(t,o)=>{var n,d,[a,l,i]=o,f=0;if(a.some((t=>0!==e[t]))){for(n in l)r.o(l,n)&&(r.m[n]=l[n]);if(i)var u=i(r)}for(t&&t(o);f<a.length;f++)d=a[f],r.o(e,d)&&e[d]&&e[d][0](),e[d]=0;return r.O(u)},o=self.webpackChunkweb=self.webpackChunkweb||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=r.O(void 0,[721],(()=>r(3844)));o=r.O(o)})();
//# sourceMappingURL=main.ac91ee98.js.map