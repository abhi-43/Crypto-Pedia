(this["webpackJsonpcrypto-pedia"]=this["webpackJsonpcrypto-pedia"]||[]).push([[0],{108:function(e,t,n){"use strict";n.r(t),n.d(t,"numberWithCommas",(function(){return C})),n.d(t,"default",(function(){return k}));var c=n(16),a=n(171),r=n(92),i=n(173),o=n(174),s=n(175),l=n(183),u=n(176),d=n(120),j=n(177),b=n(179),p=n(121),h=n(73),f=n(180),O=n(178),g=(n(85),n(0)),m=(n(86),n(25)),x=n(30),y=n(182),v=n(11);function C(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function k(){var e,t=Object(g.useState)(""),n=Object(c.a)(t,2),k=n[0],w=n[1],S=Object(g.useState)(1),E=Object(c.a)(S,2),D=E[0],N=E[1],_=Object(x.a)(),W=_.currency,B=_.symbol,I=_.coins,A=_.loading,F=_.fetchCoins,P=Object(a.a)({row:{backgroundColor:"#16171a",cursor:"pointer","&:hover":{backgroundColor:"#131111"},fontFamily:"Montserrat"},pagination:{"& .MuiPaginationItem-root":{color:"gold"}}})(),R=Object(m.e)(),L=Object(r.a)({palette:{primary:{main:"#fff"},type:"dark"}});Object(g.useEffect)((function(){F()}),[W]);var z=function(){return I.filter((function(e){return e.name.toLowerCase().includes(k)||e.symbol.toLowerCase().includes(k)}))};return Object(v.jsx)(i.a,{theme:L,children:Object(v.jsxs)(o.a,{style:{textAlign:"center"},children:[Object(v.jsx)(s.a,{variant:"h4",style:{margin:18,fontFamily:"Montserrat"},children:"Cryptocurrency Prices by Market Cap"}),Object(v.jsx)(l.a,{label:"Search For a Crypto Currency..",variant:"outlined",style:{marginBottom:20,width:"100%"},onChange:function(e){return w(e.target.value)}}),Object(v.jsx)(u.a,{component:d.a,children:A?Object(v.jsx)(j.a,{style:{backgroundColor:"gold"}}):Object(v.jsxs)(O.a,{"aria-label":"simple table",children:[Object(v.jsx)(b.a,{style:{backgroundColor:"#EEBC1D"},children:Object(v.jsx)(p.a,{children:["Coin","Price","24h Change","Market Cap"].map((function(e){return Object(v.jsx)(h.a,{style:{color:"black",fontWeight:"700",fontFamily:"Montserrat"},align:"Coin"===e?"":"right",children:e},e)}))})}),Object(v.jsx)(f.a,{children:z().slice(10*(D-1),10*(D-1)+10).map((function(e){var t=e.price_change_percentage_24h>0;return Object(v.jsxs)(p.a,{onClick:function(){return R.push("/coins/".concat(e.id))},className:P.row,children:[Object(v.jsxs)(h.a,{component:"th",scope:"row",style:{display:"flex",gap:15},children:[Object(v.jsx)("img",{src:null===e||void 0===e?void 0:e.image,alt:e.name,height:"50",style:{marginBottom:10}}),Object(v.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(v.jsx)("span",{style:{textTransform:"uppercase",fontSize:22},children:e.symbol}),Object(v.jsx)("span",{style:{color:"darkgrey"},children:e.name})]})]}),Object(v.jsxs)(h.a,{align:"right",children:[B," ",C(e.current_price.toFixed(2))]}),Object(v.jsxs)(h.a,{align:"right",style:{color:t>0?"rgb(14, 203, 129)":"red",fontWeight:500},children:[t&&"+",e.price_change_percentage_24h.toFixed(2),"%"]}),Object(v.jsxs)(h.a,{align:"right",children:[B," ",C(e.market_cap.toString().slice(0,-6)),"\xa0M"]})]},e.name)}))})]})}),Object(v.jsx)(y.a,{count:((null===(e=z())||void 0===e?void 0:e.length)/10).toFixed(0),style:{padding:20,width:"100%",display:"flex",justifyContent:"center"},classes:{ul:P.pagination},onChange:function(e,t){N(t),window.scroll(0,450)}})]})})}},137:function(e,t,n){},167:function(e,t,n){},169:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(21),i=n.n(r),o=(n(137),n(74)),s=n(25),l=n(171),u=n(92),d=n(173),j=n(222),b=n(174),p=n(224),h=n(175),f=n(226),O=n(234),g=n(30),m=n(16),x=n(229),y=n(221),v=n(172),C=n(220),k=n(227),w=n(223),S=n(225),E=n(1),D=n(2),N=n(183),_=n(42),W=n(39),B=n(11),I=function(e){var t=e.handleClose,n=Object(c.useState)(""),a=Object(m.a)(n,2),r=a[0],i=a[1],o=Object(c.useState)(""),s=Object(m.a)(o,2),l=s[0],u=s[1],d=Object(g.a)().setAlert,j=function(){var e=Object(D.a)(Object(E.a)().mark((function e(){var n;return Object(E.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r&&l){e.next=3;break}return d({open:!0,message:"Please fill all the Fields",type:"error"}),e.abrupt("return");case 3:return e.prev=3,e.next=6,Object(W.e)(_.a,r,l);case 6:n=e.sent,d({open:!0,message:"Login Successful. Welcome ".concat(n.user.email),type:"success"}),t(),e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(3),d({open:!0,message:e.t0.message,type:"error"}),e.abrupt("return");case 15:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(){return e.apply(this,arguments)}}();return Object(B.jsxs)(S.a,{p:3,style:{display:"flex",flexDirection:"column",gap:"20px"},children:[Object(B.jsx)(N.a,{variant:"outlined",type:"email",label:"Enter Email",value:r,onChange:function(e){return i(e.target.value)},fullWidth:!0}),Object(B.jsx)(N.a,{variant:"outlined",label:"Enter Password",type:"password",value:l,onChange:function(e){return u(e.target.value)},fullWidth:!0}),Object(B.jsx)(C.a,{variant:"contained",size:"large",onClick:j,style:{backgroundColor:"#EEBC1D"},children:"Login"})]})},A=function(e){var t=e.handleClose,n=Object(c.useState)(""),a=Object(m.a)(n,2),r=a[0],i=a[1],o=Object(c.useState)(""),s=Object(m.a)(o,2),l=s[0],u=s[1],d=Object(c.useState)(""),j=Object(m.a)(d,2),b=j[0],p=j[1],h=Object(g.a)().setAlert,f=function(){var e=Object(D.a)(Object(E.a)().mark((function e(){var n;return Object(E.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l===b){e.next=3;break}return h({open:!0,message:"Passwords do not match",type:"error"}),e.abrupt("return");case 3:return e.prev=3,e.next=6,Object(W.b)(_.a,r,l);case 6:n=e.sent,h({open:!0,message:"Sign Up Successful. Welcome ".concat(n.user.email),type:"success"}),t(),e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(3),h({open:!0,message:e.t0.message,type:"error"}),e.abrupt("return");case 15:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(){return e.apply(this,arguments)}}();return Object(B.jsxs)(S.a,{p:3,style:{display:"flex",flexDirection:"column",gap:"20px"},children:[Object(B.jsx)(N.a,{variant:"outlined",type:"email",label:"Enter Email",value:r,onChange:function(e){return i(e.target.value)},fullWidth:!0}),Object(B.jsx)(N.a,{variant:"outlined",label:"Enter Password",type:"password",value:l,onChange:function(e){return u(e.target.value)},fullWidth:!0}),Object(B.jsx)(N.a,{variant:"outlined",label:"Confirm Password",type:"password",value:b,onChange:function(e){return p(e.target.value)},fullWidth:!0}),Object(B.jsx)(C.a,{variant:"contained",size:"large",style:{backgroundColor:"#EEBC1D"},onClick:f,children:"Sign Up"})]})},F=n(114),P=n.n(F),R=Object(l.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{width:400,backgroundColor:e.palette.background.paper,color:"white",borderRadius:10},google:{padding:24,paddingTop:0,display:"flex",flexDirection:"column",textAlign:"center",gap:20,fontSize:20}}}));function L(){var e=R(),t=a.a.useState(!1),n=Object(m.a)(t,2),c=n[0],r=n[1],i=function(){r(!1)},o=a.a.useState(0),s=Object(m.a)(o,2),l=s[0],u=s[1],d=Object(g.a)().setAlert,b=new W.a;return Object(B.jsxs)("div",{children:[Object(B.jsx)(C.a,{variant:"contained",style:{width:85,height:40,backgroundColor:"#EEBC1D"},onClick:function(){r(!0)},children:"Login"}),Object(B.jsx)(x.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:e.modal,open:c,onClose:i,closeAfterTransition:!0,BackdropComponent:y.a,BackdropProps:{timeout:500},children:Object(B.jsx)(v.a,{in:c,children:Object(B.jsxs)("div",{className:e.paper,children:[Object(B.jsx)(j.a,{position:"static",style:{backgroundColor:"transparent",color:"white"},children:Object(B.jsxs)(k.a,{value:l,onChange:function(e,t){u(t)},variant:"fullWidth",style:{borderRadius:10},children:[Object(B.jsx)(w.a,{label:"Login"}),Object(B.jsx)(w.a,{label:"Sign Up"})]})}),0===l&&Object(B.jsx)(I,{handleClose:i}),1===l&&Object(B.jsx)(A,{handleClose:i}),Object(B.jsxs)(S.a,{className:e.google,children:[Object(B.jsx)("span",{children:"OR"}),Object(B.jsx)(P.a,{style:{width:"100%",outline:"none"},onClick:function(){Object(W.f)(_.a,b).then((function(e){d({open:!0,message:"Sign Up Successful. Welcome ".concat(e.user.email),type:"success"}),i()})).catch((function(e){d({open:!0,message:e.message,type:"error"})}))}})]})]})})})]})}var z=n(6),M=n(63),U=n(233),T=n(232),G=n(116),H=n(52),J=n(108),V=Object(l.a)({container:{width:350,padding:25,height:"100%",display:"flex",flexDirection:"column",fontFamily:"monospace"},profile:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:"20px",height:"92%"},logout:{height:"8%",width:"100%",backgroundColor:"#EEBC1D",marginTop:20},picture:{width:200,height:200,cursor:"pointer",backgroundColor:"#EEBC1D",objectFit:"contain"},watchlist:{flex:1,width:"100%",backgroundColor:"grey",borderRadius:10,padding:15,paddingTop:10,display:"flex",flexDirection:"column",alignItems:"center",gap:12,overflowY:"scroll"},coin:{padding:10,borderRadius:5,color:"black",width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center",backgroundColor:"#EEBC1D",boxShadow:"0 0 3px black"}});function X(){var e=V(),t=a.a.useState({right:!1}),n=Object(m.a)(t,2),c=n[0],r=n[1],i=Object(g.a)(),o=i.user,s=i.setAlert,l=i.watchlist,u=i.coins,d=i.symbol;console.log(l,u);var j=function(e,t){return function(n){("keydown"!==n.type||"Tab"!==n.key&&"Shift"!==n.key)&&r(Object(M.a)(Object(M.a)({},c),{},Object(z.a)({},e,t)))}},b=function(){Object(W.g)(_.a),s({open:!0,type:"success",message:"Logout Successfull !"}),j()},p=function(){var e=Object(D.a)(Object(E.a)().mark((function e(t){var n;return Object(E.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(H.a)(_.b,"watchlist",o.uid),e.prev=1,e.next=4,Object(H.d)(n,{coins:l.filter((function(e){return e!==(null===t||void 0===t?void 0:t.id)}))},{merge:!0});case 4:s({open:!0,message:"".concat(t.name," Removed from the Watchlist !"),type:"success"}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),s({open:!0,message:e.t0.message,type:"error"});case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(B.jsx)("div",{children:["right"].map((function(t){return Object(B.jsxs)(a.a.Fragment,{children:[Object(B.jsx)(T.a,{onClick:j(t,!0),style:{height:38,width:38,cursor:"pointer",backgroundColor:"#EEBC1D"},src:o.photoURL,alt:o.displayName||o.email}),Object(B.jsx)(U.a,{anchor:t,open:c[t],onClose:j(t,!1),children:Object(B.jsxs)("div",{className:e.container,children:[Object(B.jsxs)("div",{className:e.profile,children:[Object(B.jsx)(T.a,{className:e.picture,src:o.photoURL,alt:o.displayName||o.email}),Object(B.jsx)("span",{style:{width:"100%",fontSize:25,textAlign:"center",fontWeight:"bolder",wordWrap:"break-word"},children:o.displayName||o.email}),Object(B.jsxs)("div",{className:e.watchlist,children:[Object(B.jsx)("span",{style:{fontSize:15,textShadow:"0 0 5px black"},children:"Watchlist"}),u.map((function(t){return l.includes(t.id)?Object(B.jsxs)("div",{className:e.coin,children:[Object(B.jsx)("span",{children:t.name}),Object(B.jsxs)("span",{style:{display:"flex",gap:8},children:[d," ",Object(J.numberWithCommas)(t.current_price.toFixed(2)),Object(B.jsx)(G.a,{style:{cursor:"pointer"},fontSize:"16",onClick:function(){return p(t)}})]})]}):Object(B.jsx)(B.Fragment,{})}))]})]}),Object(B.jsx)(C.a,{variant:"contained",className:e.logout,onClick:b,children:"Log Out"})]})})]},t)}))})}var Y=Object(l.a)((function(){return{title:{flex:1,color:"gold",fontFamily:"Montserat",fontWeight:"bold",cursor:"pointer"}}})),q=function(){var e=Y(),t=Object(s.e)(),n=Object(g.a)(),c=n.currency,a=n.setCurrency,r=n.user;console.log(c);var i=Object(u.a)({palette:{primary:{main:"#fff"},type:"dark"}});return Object(B.jsx)(d.a,{theme:i,children:Object(B.jsx)(j.a,{color:"transparent",position:"static",children:Object(B.jsx)(b.a,{children:Object(B.jsxs)(p.a,{children:[Object(B.jsx)(h.a,{onClick:function(){return t.push("/")},className:e.title,variant:"h6",children:"Crypto Pedia"}),Object(B.jsxs)(f.a,{variant:"outlined",style:{width:100,height:40,marginRight:15},value:c,onChange:function(e){return a(e.target.value)},children:[Object(B.jsx)(O.a,{value:"USD",children:"USD"}),Object(B.jsx)(O.a,{value:"INR",children:"INR"})]}),r?Object(B.jsx)(X,{}):Object(B.jsx)(L,{})]})})})})},K=n(230),$=n(228),Q=function(){var e=Object(g.a)(),t=e.alert,n=e.setAlert,c=function(e,t){"clickaway"!==t&&n({open:!1})};return Object(B.jsx)(K.a,{open:t.open,autoHideDuration:3e3,onClose:c,children:Object(B.jsx)($.a,{onClose:c,elevation:10,variant:"filled",severity:t.type,children:t.message})})},Z=(n(167),Object(c.lazy)((function(){return Promise.all([n.e(3),n.e(6)]).then(n.bind(null,279))}))),ee=Object(c.lazy)((function(){return Promise.all([n.e(4),n.e(5)]).then(n.bind(null,280))}));var te=function(){var e=Object(l.a)((function(){return{App:{backgroundColor:"#14161a",color:"white",minHeight:"100vh"}}}))();return Object(B.jsxs)(o.a,{children:[Object(B.jsxs)("div",{className:e.App,children:[Object(B.jsx)(q,{}),Object(B.jsxs)(c.Suspense,{fallback:Object(B.jsx)("div",{children:"Loading..."}),children:[Object(B.jsx)(s.a,{path:"/",component:Z,exact:!0}),Object(B.jsx)(s.a,{path:"/coins/:id",component:ee,exact:!0})]})]}),Object(B.jsx)(Q,{})]})};n(168);i.a.render(Object(B.jsx)(a.a.StrictMode,{children:Object(B.jsx)(g.b,{children:Object(B.jsx)(te,{})})}),document.getElementById("root"))},30:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var c=n(1),a=n(2),r=n(16),i=n(85),o=n.n(i),s=n(39),l=n(52),u=n(0),d=n(86),j=n(42),b=n(11),p=Object(u.createContext)();t.b=function(e){var t=e.children,n=Object(u.useState)("INR"),i=Object(r.a)(n,2),h=i[0],f=i[1],O=Object(u.useState)("\u20b9"),g=Object(r.a)(O,2),m=g[0],x=g[1],y=Object(u.useState)([]),v=Object(r.a)(y,2),C=v[0],k=v[1],w=Object(u.useState)(!1),S=Object(r.a)(w,2),E=S[0],D=S[1],N=Object(u.useState)(null),_=Object(r.a)(N,2),W=_[0],B=_[1],I=Object(u.useState)({open:!1,message:"",type:"success"}),A=Object(r.a)(I,2),F=A[0],P=A[1],R=Object(u.useState)([]),L=Object(r.a)(R,2),z=L[0],M=L[1];Object(u.useEffect)((function(){if(W){var e=Object(l.a)(j.b,"watchlist",W.uid),t=Object(l.c)(e,(function(e){e.exists()?M(e.data().coins):console.log("No Items in WatchList")}));return function(){t()}}}),[W]),Object(u.useEffect)((function(){Object(s.d)(j.a,(function(e){B(e||null)}))}),[]);var U=function(){var e=Object(a.a)(Object(c.a)().mark((function e(){var t,n;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return D(!0),e.next=3,o.a.get(Object(d.a)(h));case 3:t=e.sent,n=t.data,console.log(n),k(n),D(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.useEffect)((function(){"INR"===h?x("\u20b9"):"USD"===h&&x("$")}),[h]),Object(b.jsx)(p.Provider,{value:{currency:h,symbol:m,setCurrency:f,coins:C,loading:E,fetchCoins:U,alert:F,setAlert:P,user:W,watchlist:z},children:t})};var h=function(){return Object(u.useContext)(p)}},42:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return l}));var c=n(112),a=n(39),r=n(52),i={apiKey:"AIzaSyBkgdBXolu6uYqDOcnXcMEGSN7GVEV24AU",authDomain:"crypto-pedia-5c6ed.firebaseapp.com",projectId:"crypto-pedia-5c6ed",storageBucket:"crypto-pedia-5c6ed.appspot.com",messagingSenderId:"991418719331",appId:"1:991418719331:web:5abd10d33421996811ec56"},o=Object(c.a)(i),s=Object(a.c)(o),l=Object(r.b)(o)},86:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"d",(function(){return i}));var c=function(e){return"https://api.coingecko.com/api/v3/coins/markets?vs_currency=".concat(e,"&order=market_cap_desc&per_page=100&page=1&sparkline=false")},a=function(e){return"https://api.coingecko.com/api/v3/coins/".concat(e)},r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:365,n=arguments.length>2?arguments[2]:void 0;return"https://api.coingecko.com/api/v3/coins/".concat(e,"/market_chart?vs_currency=").concat(n,"&days=").concat(t)},i=function(e){return"https://api.coingecko.com/api/v3/coins/markets?vs_currency=".concat(e,"&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h")}}},[[169,1,2]]]);
//# sourceMappingURL=main.b242213b.chunk.js.map