(this.webpackJsonpbitsights=this.webpackJsonpbitsights||[]).push([[0],{129:function(e,t,a){e.exports=a(159)},159:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(35),i=a.n(l),o=a(26);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(37),u=a(75),d=function(){return u.a},s=function(){var e;return null!==(e=JSON.parse(localStorage.getItem("".concat(d(),".drstart"))))&&void 0!==e?e:null},v=function(){var e;return null!==(e=JSON.parse(localStorage.getItem("".concat(d(),".drend"))))&&void 0!==e?e:null},m=Object(c.c)({name:"dates",initialState:{daterange_start:null,daterange_end:null},reducers:{SET_DATERANGE_START:function(e,t){e.daterange_start=t.payload},RESET_DATERANGE_START:function(e,t){e.daterange_start=null},SET_DATERANGE_END:function(e,t){e.daterange_end=t.payload},RESET_DATERANGE_END:function(e,t){e.daterange_end=null}}}),f=m.actions,E=(f.SET_DATERANGE_START,f.RESET_DATERANGE_START,f.SET_DATERANGE_END,f.RESET_DATERANGE_END,function(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;null!==e?localStorage.setItem("".concat(d(),".drstart"),JSON.stringify(e)):localStorage.setItem("".concat(d(),".drstart"),JSON.stringify(null))}(e),{type:"dates/SET_DATERANGE_START",payload:e}}),g=function(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;null!==e?localStorage.setItem("".concat(d(),".drend"),JSON.stringify(e)):localStorage.setItem("".concat(d(),".drend"),JSON.stringify(null))}(e),{type:"dates/SET_DATERANGE_END",payload:e}},h=m.reducer,b=a(4),p=a(34),_=a.n(p),y=a(47),S=a(84),A=a.n(S),R=a(17),T=a.n(R),x=a(98),O=a.n(x);T.a.extend(O.a);var D,w,N,k=T()("2013-05-01"),I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=a?T.a.utc(e).hour(0).minute(0).second(0).millisecond(0):t?T.a.utc(e).add(1,"hour"):T.a.utc(e).subtract(1,"hour");return n.unix()},j=function(e,t){return T.a.utc(t).diff(T.a.utc(e),"day")},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];D=T.a.utc(new Date);var n=T.a.utc(e).add(t,"day");return n.diff(D,"day")<=0&&T.a.utc(e).diff(k,"day")>=0?a?n.format("YYYY-MM-DD"):n:null},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;return T.a.utc(e).hour(0).minute(0).second(0).millisecond(0).format("YYYY-MM-DD")},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return D=T.a.utc(new Date),T.a.utc(e).diff(k,"day")>=0&&T.a.utc(e).diff(D,"day")<=0?t?T.a.utc(e).hour(0).minute(0).second(0).millisecond(0).format("YYYY-MM-DD"):T.a.utc(e).hour(0).minute(0).second(0).millisecond(0):null},L="https://api.coingecko.com/api/v3/coins/bitcoin",B=function(){var e=Object(y.a)(_.a.mark((function e(){var t,a,n,r,l,i,o,c,u,d,s,v,m,f,E,g;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.get("".concat(L).concat("?localization=false&tickers=false"));case 2:return t=e.sent,a=null===t||void 0===t?void 0:t.data,n=a.categories,r=a.genesis_date,l=a.hashing_algorithm,i=a.id,o=a.market_data,c=a.name,u=a.symbol,d=o.ath,s=o.ath_date,v=o.atl,m=o.atl_date,f=o.current_price,E=o.last_updated,g={categories:n,genesis_date:r,hashing:l,id:i,name:c,symbol:u,market_data:{allTimeHigh:d.eur,ath_date:s.eur,allTimeLow:v.eur,atl_date:m.eur,current_price:f.eur,updated:E}},e.abrupt("return",null!==g&&void 0!==g?g:null);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(y.a)(_.a.mark((function e(){var t,a,n,r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=I(s(),!1,!1),n=I(v(),!0,!1),e.next=4,A.a.get("".concat(L).concat("/market_chart/range?").concat("vs_currency=eur","&from=").concat(a,"&to=").concat(n));case 4:return r=e.sent,e.abrupt("return",null!==(t=null===r||void 0===r?void 0:r.data)&&void 0!==t?t:null);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=Object(c.b)("values/fetchMarketData",function(){var e=Object(y.a)(_.a.mark((function e(t){var a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:return a=e.sent,e.abrupt("return",null!==a&&void 0!==a?a:null);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),P=Object(c.c)({name:"values",initialState:{marketvalues:null,tradingvolumes:null,fallback:-0,loading:!1},reducers:{SET_MARKETVALUES:function(e,t){e.marketvalues=t.payload},RESET_MARKETVALUES:function(e,t){e.marketvalues=null}},extraReducers:(w={},Object(b.a)(w,G.pending,(function(e){e.loading=!0})),Object(b.a)(w,G.fulfilled,(function(e,t){var a=t.payload;e.loading=!1,e.marketvalues=a.prices,e.tradingvolumes=a.total_volumes})),Object(b.a)(w,G.rejected,(function(e){e.loading=!1})),w)}),z=P.actions,K=(z.SET_MARKETVALUES,z.RESET_MARKETVALUES,P.reducer),J=Object(c.b)("basics/fetchBasicData",function(){var e=Object(y.a)(_.a.mark((function e(t){var a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B();case 2:return a=e.sent,e.abrupt("return",null!==a&&void 0!==a?a:null);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),U=Object(c.c)({name:"basics",initialState:{basicInfo:null,loading:!1},reducers:{SET_BASICINFO:function(e,t){e.basicInfo=t.payload},RESET_BASICINFO:function(e,t){e.basicInfo=null}},extraReducers:(N={},Object(b.a)(N,J.pending,(function(e){e.loading=!0})),Object(b.a)(N,J.fulfilled,(function(e,t){var a=t.payload;e.loading=!1,e.basicInfo=a})),Object(b.a)(N,J.rejected,(function(e){e.loading=!1})),N)}),V=U.actions,H=(V.SET_MARKETVALUES,V.RESET_MARKETVALUES,U.reducer),W=Object(c.a)({reducer:{basics:H,dates:h,values:K}}),$=a(225),q=a(223),Q=a(226),X=Object.freeze({PRIMARY:[255,204,29],SECONDARY:[11,70,25],TERTIARY:[17,101,48],BACKGROUND:[218,218,218],ERR:[205,24,24],INFO:[15,44,103],WARN:[255,103,1],SPECIAL:[174,0,90]}),Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default";switch(e){case"background":return"rgb(".concat(X.BACKGROUND,")");case"background-alt":return"rgb(".concat(X.PRIMARY,")");case"header":return"rgb(".concat(X.SECONDARY,")");case"text":return"rgb(".concat(X.TERTIARY,")");case"err":return"rgb(".concat(X.ERR,")");case"warn":return"rgb(".concat(X.WARN,")");case"info":return"rgb(".concat(X.INFO,")");case"special":return"rgb(".concat(X.SPECIAL,")");default:return"rgb(".concat(X.PRIMARY,")")}},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;switch(e){case"background":return"rgb(".concat(X.BACKGROUND,",").concat(t,")");case"background-alt":return"rgb(".concat(X.PRIMARY,",").concat(t,")");case"header":return"rgb(".concat(X.SECONDARY,",").concat(t,")");case"text":return"rgb(".concat(X.TERTIARY,",").concat(t,")");case"err":return"rgb(".concat(X.ERR,",").concat(t,")");case"warn":return"rgb(".concat(X.WARN,",").concat(t,")");case"info":return"rgb(".concat(X.INFO,",").concat(t,")");case"special":return"rgb(".concat(X.SPECIAL,",").concat(t,")");default:return"rgb(".concat(X.PRIMARY,",").concat(t,")")}},te=function(e){var t=e.id,a=Object(o.c)((function(e){return e.basics})),n=Object(o.c)((function(e){return e.values}));return r.a.createElement("header",{id:t,"data-testid":t,style:{display:"inline-flex",textAlign:"center",justifyItems:"center",alignItems:"baseline"}},r.a.createElement(Q.a,{variant:"h1",title:"\u20bfitcoint market value analytics",sx:{fontSize:"1.5rem",color:Z("special")}},"\u20bfitSights "),a.loading||n.loading&&r.a.createElement(Q.a,{variant:"overline",sx:{marginLeft:"1rem",color:Z("text")}},"[LOADING..]"))},ae=a(219),ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"id",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default";return"".concat(e,".").concat(t)},re=a(221),le=a(210),ie=a(209),oe=a(220),ce=function(e){var t=e.dispatcher,a=e.value;return r.a.createElement(ie.b,{dateAdapter:le.a},r.a.createElement(oe.a,{sx:{padding:"1rem"},color:null!==a?"success":"info",label:"Date range start",value:a,onChange:function(e){return function(e){t(E(e)),t(G())}(e)},inputFormat:"YYYY-MM-DD",mask:"____-__-__",renderInput:function(e){return r.a.createElement(re.a,Object.assign({},e,{size:"small",color:null!==a?"success":"info",sx:{"&:hover:selected":{outlineColor:"success"}}}))}}))},ue=function(e){var t=e.dispatcher,a=e.value;return r.a.createElement(ie.b,{dateAdapter:le.a},r.a.createElement(oe.a,{sx:{padding:"1rem"},color:null!==a?"success":"info",label:"Date range end",value:a,onChange:function(e){return function(e){t(g(e)),t(G())}(e)},inputFormat:"YYYY-MM-DD",mask:"____-__-__",renderInput:function(e){return r.a.createElement(re.a,Object.assign({},e,{size:"small",color:null!==a?"success":"info"}))}}))},de=function(e){e.id;var t=Object(o.c)((function(e){return e.dates})),a=Object(o.b)();return r.a.createElement("section",{style:{display:"flex",flexDirection:"row",justifyItems:"space-evenly"}},r.a.createElement(ce,{dispatcher:a,value:null===t||void 0===t?void 0:t.daterange_start}),r.a.createElement(ue,{dispatcher:a,value:null===t||void 0===t?void 0:t.daterange_end}))},se=a(232),ve=a(230),me=a(231),fe=a(229),Ee=a(228),ge=a(24),he=a(107);ge.d.register(ge.c,ge.i,ge.k,ge.h,ge.o,ge.p,ge.f);var be={responsive:!0,scales:{},plugins:{legend:{display:!1,position:"bottom"},title:{display:!1,text:"\u20bfTC market value in \u20ac"}}},pe=function(e){var t=e.data;return r.a.createElement(Ee.a,null,r.a.createElement(fe.a,{colSpan:3},r.a.createElement(r.a.Fragment,null,r.a.createElement(Q.a,{variant:"subtitle1",sx:{color:ee("warn",.8)}},"\u20bfTC market value in \u20ac"),r.a.createElement(he.a,{options:be,datasetIdKey:"BTCmarketvalue",data:t}))))},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=e.sort((function(e,t){return e.datetime-t.datetime}));return t?a:Se(a)},ye=function(e,t){return e.reduce((function(e,a){return Math.abs(t-(null===e||void 0===e?void 0:e.datetime))>Math.abs(t-(null===a||void 0===a?void 0:a.datetime))?a:e}))},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=C(s()),a=C(v()),n=j(t,a),r=[],l=[];if(r.push(I(t,!1,!0)),n>1)for(var i=1;i<n;i++)r.push(I(M(t,i),!1,!0));return r.push(I(a,!1,!0)),r.forEach((function(t){l.push(ye(e,t))})),l.map((function(e,t){return{datetime:1e3*e.datetime,value:e.value,index:t}}))},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=[],a={id:1,label:"\u20bfTC, \u20ac",data:[],borderColor:ee("warn",.8),backgroundColor:ee("warn",.6)};e.forEach((function(e){var n=e.datetime,r=e.value;t.push(Y(n)),a.data.push(r)}));var n={labels:t,datasets:[a]};return n},Re=function(e,t){return e.reduce((function(e,a){return Math.abs(t-a.datetime)<Math.abs(t-e.datetime)?a:e}))},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=s(),n=v(),r=j(a,n),l=[],i=[];if(l.push(I(a,!1,!0)),r>1)for(var o=1;o<r;o++)l.push(I(M(a,o),!1,!0));return l.push(I(n,!1,!0)),l.forEach((function(t){i.push(Re(e,t))})),t?i:xe(i)},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=e.sort((function(e,t){return e.volume-t.volume}));return t.map((function(e){return{datetime:1e3*e.datetime,volume:e.volume}}))},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=0,a=[[]];if(e&&e.length>0){for(var n=0;n<e.length;n++){var r=e[n],l=e[n+1];(null===r||void 0===r?void 0:r.value)>(null===l||void 0===l?void 0:l.value)?a[t].push(r):(null===r||void 0===r?void 0:r.value)<(null===l||void 0===l?void 0:l.value)?(a[t].push(r),a.push([]),t+=1):l||a[t].push(r)}return a.filter((function(e){return e.length>0}))}return null},De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=0,a=[[]];if(e&&e.length>0){for(var n=0;n<e.length;n++){var r=e[n],l=e[n+1];(null===r||void 0===r?void 0:r.value)<(null===l||void 0===l?void 0:l.value)?a[t].push(r):(null===r||void 0===r?void 0:r.value)>(null===l||void 0===l?void 0:l.value)?(a[t].push(r),a.push([]),t+=1):l||a[t].push(r)}return a.filter((function(e){return e.length>0}))}return null},we=function(e){var t=Object(o.c)((function(e){return e.dates})),a=t.daterange_start,l=t.daterange_end,i=Object(o.b)(),c=Object(o.c)((function(e){return e.values})),u=c.marketvalues,d=c.tradingvolumes,s=c.fallback,v=Object(o.c)((function(e){return e.basics})).basicInfo;Object(n.useEffect)((function(){return i(J())}),[i]),setTimeout((function(){return i(J())}),6e4),Object(n.useEffect)((function(){return i(G())}),[i]);var m=function(){return a&&l?r.a.createElement(Ee.a,null,r.a.createElement(fe.a,null,r.a.createElement(Q.a,{variant:"subtitle1"},"Date range")),r.a.createElement(fe.a,null,r.a.createElement(Q.a,{variant:"body1"},Y(a))),r.a.createElement(fe.a,null,r.a.createElement(Q.a,{variant:"body1"},Y(l))),r.a.createElement(fe.a,null,r.a.createElement(Q.a,{variant:"body1"},j(a,l)+1," days"))):null},f=function(e){var t=e.dataset,a=void 0===t?null:t,n=e.low,l=void 0!==n&&n;return a?r.a.createElement(Ee.a,null,r.a.createElement(fe.a,null,r.a.createElement(Q.a,{variant:"subtitle1"},l?"Lowest":"Highest"," trading volume")),r.a.createElement(fe.a,null,r.a.createElement(Q.a,{variant:"body1"},Y(l?a[0].datetime:a[a.length-1].datetime))),r.a.createElement(fe.a,null,r.a.createElement(Q.a,{variant:"body1"},l?Math.round(100*(a[0].volume+Number.EPSILON))/100:Math.round(100*(a[a.length-1].volume+Number.EPSILON))/100," \u20ac"))):null},E=function(e){var t=e.dataset,a=void 0===t?null:t,n=e.bearish,l=void 0===n||n;return a?r.a.createElement(r.a.Fragment,null,r.a.createElement(Ee.a,null,r.a.createElement(fe.a,null,r.a.createElement(Q.a,{variant:"subtitle1",sx:{color:Z(l?"special":"text")}},"Longest ",l?"bearish":"bullish"," trend")),r.a.createElement(fe.a,null,r.a.createElement(Q.a,{variant:"body1",sx:{color:Z(l?"special":"text")}},a.length-1," days"))),r.a.createElement(Ee.a,null,r.a.createElement(fe.a,null,r.a.createElement(Q.a,{variant:"subtitle1"},l?"Bearish":"Bullish"," trend start")),r.a.createElement(fe.a,null,r.a.createElement(Q.a,{variant:"body1"},Y(a[0].datetime))),r.a.createElement(fe.a,null,r.a.createElement(Q.a,{variant:"body1",sx:{color:Z("info")}},Math.round(100*(a[0].value+Number.EPSILON))/100," \u20ac"))),r.a.createElement(Ee.a,null,r.a.createElement(fe.a,null,r.a.createElement(Q.a,{variant:"subtitle1"},l?"Bearish":"Bullish"," trend end")),r.a.createElement(fe.a,null,r.a.createElement(Q.a,{variant:"body1"},Y(a[a.length-1].datetime))),r.a.createElement(fe.a,null,r.a.createElement(Q.a,{variant:"body1",sx:{color:Z(l?"special":"text")}},Math.round(100*(a[a.length-1].value+Number.EPSILON))/100," \u20ac")))):null},g=function(){var e=u&&function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=e.map((function(e){return{datetime:Math.floor(e[0]/1e3),value:e[1]}}));return t?a:_e(a)}(u),t=d&&function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=e.map((function(e){return{datetime:Math.floor(e[0]/1e3),volume:e[1]}}));return t?a:Te(a)}(d),a=u&&function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=Oe(t).sort((function(e,t){return e.length-t.length}));return null!==(e=a[a.length-1])&&void 0!==e?e:null}(e),n=u&&function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=De(t).sort((function(e,t){return e.length-t.length}));return null!==(e=a[a.length-1])&&void 0!==e?e:null}(e);u&&function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(e){var t,a,n=null,r=null;if(e.forEach((function(e){var t,a;(null===n||(null===(t=n)||void 0===t?void 0:t.value)>(null===e||void 0===e?void 0:e.value))&&(n=e),(null===r||(null===(a=r)||void 0===a?void 0:a.value)<(null===e||void 0===e?void 0:e.value))&&(r=e)})),(null===(t=n)||void 0===t?void 0:t.datetime)<(null===(a=r)||void 0===a?void 0:a.datetime))return n;var l=e.filter((function(e){var t;return(null===e||void 0===e?void 0:e.datetime)<(null===(t=r)||void 0===t?void 0:t.datetime)}));return(null===l||void 0===l?void 0:l.length)>0?l.sort((function(e,t){return e.value-t.value}))[0]:null}}(e),u&&function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(e){var t,a,n=null,r=null;if(e.forEach((function(e){var t,a;(null===n||(null===(t=n)||void 0===t?void 0:t.value)>(null===e||void 0===e?void 0:e.value))&&(n=e),(null===r||(null===(a=r)||void 0===a?void 0:a.value)<(null===e||void 0===e?void 0:e.value))&&(r=e)})),(null===(t=r)||void 0===t?void 0:t.datetime)<(null===(a=n)||void 0===a?void 0:a.datetime))return r;var l=e.filter((function(e){var t;return(null===e||void 0===e?void 0:e.datetime)>(null===(t=n)||void 0===t?void 0:t.datetime)}));return(null===l||void 0===l?void 0:l.length)>0?l.sort((function(e,t){return e.value-t.value}))[0]:null}}(e);return e?r.a.createElement(r.a.Fragment,null,r.a.createElement(pe,{data:Ae(e)}),r.a.createElement(f,{dataset:t,low:!0}),r.a.createElement(f,{dataset:t,low:!1}),r.a.createElement(E,{bearish:!0,dataset:a}),r.a.createElement(E,{bearish:!1,dataset:n})):null},h=function(){return r.a.createElement(ae.a,{direction:"column",sx:{marginBottom:"1rem"}},r.a.createElement(ve.a,{size:"small"},r.a.createElement(me.a,null,r.a.createElement(m,null),r.a.createElement(g,null))))},b=function(e){var t,a,n,l,i=e.low,o=void 0!==i&&i;return v?r.a.createElement(Ee.a,null,r.a.createElement(fe.a,null,r.a.createElement(Q.a,{variant:"subtitle1"},"All-Time ",o?"Low":"High")),r.a.createElement(fe.a,null,r.a.createElement(Q.a,{variant:"body1"},Y(o?null===v||void 0===v||null===(t=v.market_data)||void 0===t?void 0:t.atl_date:null===v||void 0===v||null===(a=v.market_data)||void 0===a?void 0:a.ath_date))),r.a.createElement(fe.a,null,r.a.createElement(Q.a,{variant:"body1",sx:{color:Z(o?"special":"text")}},o?null===v||void 0===v||null===(n=v.market_data)||void 0===n?void 0:n.allTimeLow:null===v||void 0===v||null===(l=v.market_data)||void 0===l?void 0:l.allTimeHigh," \u20ac"))):null},p=function(){var e,t;return v?r.a.createElement(ae.a,{direction:"column"},r.a.createElement(ve.a,{size:"small"},r.a.createElement(me.a,null,r.a.createElement(Ee.a,null,r.a.createElement(fe.a,null,r.a.createElement(Q.a,{variant:"body1"},"Value")),r.a.createElement(fe.a,null,r.a.createElement(Q.a,{variant:"body1",sx:{color:Z("warn")}},null!==(e=null===v||void 0===v||null===(t=v.market_data)||void 0===t?void 0:t.current_price)&&void 0!==e?e:s," \u20ac")),r.a.createElement(fe.a,null,r.a.createElement(Q.a,{variant:"subtitle1"},"Name")),r.a.createElement(fe.a,null,r.a.createElement(Q.a,{variant:"body1"},null===v||void 0===v?void 0:v.name))),r.a.createElement(Ee.a,null,r.a.createElement(fe.a,null,r.a.createElement(Q.a,{variant:"subtitle1"},"Symbol")),r.a.createElement(fe.a,null,r.a.createElement(Q.a,{variant:"body1"},null===v||void 0===v?void 0:v.symbol,"btc"===(null===v||void 0===v?void 0:v.symbol)&&", \u20bf")),r.a.createElement(fe.a,null,r.a.createElement(Q.a,{variant:"subtitle1"},"Hashing")),r.a.createElement(fe.a,null,r.a.createElement(Q.a,{variant:"body1"},null===v||void 0===v?void 0:v.hashing))),r.a.createElement(Ee.a,null,r.a.createElement(fe.a,null,r.a.createElement(Q.a,{variant:"subtitle1"},"Genesis date")),r.a.createElement(fe.a,null,r.a.createElement(Q.a,{variant:"body1"},Y(null===v||void 0===v?void 0:v.genesis_date)))),r.a.createElement(b,null),r.a.createElement(b,{low:!0})))):null};return r.a.createElement(r.a.Fragment,null,r.a.createElement(se.a,{sx:{backgroundColor:Z("background"),padding:"1rem",marginTop:"1rem",marginBottom:"1rem"}},r.a.createElement(Q.a,{variant:"h5",sx:{color:ee("warn",.8)}},"\u20bfitcoin market value"),r.a.createElement(h,null)),r.a.createElement(se.a,{sx:{backgroundColor:Z("background"),padding:"1rem",marginTop:"1rem",marginBottom:"1rem"}},r.a.createElement(Q.a,{variant:"h5",sx:{color:ee("warn",.8)}},"\u20bfitcoin information"),r.a.createElement(p,null)))},Ne=function(e){var t=e.id;return r.a.createElement(ae.a,{id:t,"data-testid":t,direction:"column",spacing:2,sx:{marginTop:"1rem",marginBottom:"1rem"}},r.a.createElement(de,{id:ne(t,"daterange")}),r.a.createElement(we,{id:ne(t,"insight")}))},ke=a(227),Ie=function(e){var t=e.id;return r.a.createElement("footer",{id:t,"data-testid":t,style:{display:"inline-flex",alignItems:"baseline",justifyContent:"center",justifyItems:"center"}},r.a.createElement(Q.a,{variant:"overline",sx:{fontSize:"0.7rem",color:ee("text",.5)}},"Version ",u.c),r.a.createElement(ke.a,{underline:"hover",href:"https://github.com/RedFoxFinn/BitSights",sx:{marginLeft:"1rem",color:ee("special",.5)}},r.a.createElement(Q.a,{variant:"overline",sx:{fontSize:"0.7rem"}},"Repository")),r.a.createElement(ke.a,{underline:"hover",href:"https://github.com/RedFoxFinn",sx:{marginLeft:"1rem",color:ee("special",.5)}},r.a.createElement(Q.a,{variant:"overline",sx:{fontSize:"0.7rem"}},"Author")))},je=a(105),Me=Object(je.a)({palette:{primary:{main:"".concat(Z())},secondary:{main:"".concat(Z("header"))},info:{main:"".concat(Z("info"))},error:{main:"".concat(Z("err"))},warning:{main:"".concat(Z("warn"))},success:{main:"".concat(ee("text",.8))},special:{main:"".concat(Z("special"))},background:{main:"".concat(Z("background"))}}}),Ye=function(e){var t=e.id,a=Object(o.c)((function(e){return e.dates})).daterange_end,l=Object(o.b)();return Object(n.useEffect)((function(){var e=v();l(g(e||C()));var t=s();l(E(t||function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];D=T.a.utc(new Date);var a=T.a.utc(e).hour(0).minute(0).second(0).millisecond(0).subtract(7,"day");return a.diff(k,"day")>=0&&T.a.utc(e).diff(D,"day")<=0?t?a.format("YYYY-MM-DD"):a:null}(a)))})),r.a.createElement($.a,{id:t,"data-testid":t},r.a.createElement(q.a,{theme:Me},r.a.createElement($.a,{id:t,"data-testid":t,sx:{margin:"1rem",display:"flex",flexDirection:"column",alignItems:"center"}},r.a.createElement(te,{id:ne(t,"header")}),r.a.createElement(Ne,{id:ne(t,"content")}),r.a.createElement(Ie,{id:ne(t,"footer")}))))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{store:W},r.a.createElement(Ye,{id:d()}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},75:function(e){e.exports=JSON.parse('{"a":"rff.app.bitsights","b":"BitSights","c":"0.4.5"}')}},[[129,1,2]]]);
//# sourceMappingURL=main.b07cab87.chunk.js.map