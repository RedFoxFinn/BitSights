(this.webpackJsonpbitsights=this.webpackJsonpbitsights||[]).push([[0],{132:function(e,t,a){e.exports=a(162)},162:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(35),i=a.n(l),u=a(28);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(37),c=a(75),d=function(){return c.a},s=function(){var e;return null!==(e=JSON.parse(localStorage.getItem("".concat(d(),".drstart"))))&&void 0!==e?e:null},v=function(){var e;return null!==(e=JSON.parse(localStorage.getItem("".concat(d(),".drend"))))&&void 0!==e?e:null},m=Object(o.c)({name:"dates",initialState:{daterange_start:null,daterange_end:null},reducers:{SET_DATERANGE_START:function(e,t){e.daterange_start=t.payload},RESET_DATERANGE_START:function(e,t){e.daterange_start=null},SET_DATERANGE_END:function(e,t){e.daterange_end=t.payload},RESET_DATERANGE_END:function(e,t){e.daterange_end=null}}}),E=m.actions,f=(E.SET_DATERANGE_START,E.RESET_DATERANGE_START,E.SET_DATERANGE_END,E.RESET_DATERANGE_END,function(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;null!==e?localStorage.setItem("".concat(d(),".drstart"),JSON.stringify(e)):localStorage.setItem("".concat(d(),".drstart"),JSON.stringify(null))}(e),{type:"dates/SET_DATERANGE_START",payload:e}}),g=function(e){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;null!==e?localStorage.setItem("".concat(d(),".drend"),JSON.stringify(e)):localStorage.setItem("".concat(d(),".drend"),JSON.stringify(null))}(e),{type:"dates/SET_DATERANGE_END",payload:e}},h=m.reducer,b=a(4),p=a(34),_=a.n(p),y=a(47),S=a(84),x=a.n(S),A=a(17),R=a.n(A),O=a(100),T=a.n(O);R.a.extend(T.a);var w,N,k,D=R()("2013-05-01"),I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=a?R.a.utc(e).hour(0).minute(0).second(0).millisecond(0):t?R.a.utc(e).add(1,"hour"):R.a.utc(e).subtract(1,"hour");return n.unix()},M=function(e,t){return R.a.utc(t).diff(R.a.utc(e),"day")},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];w=R.a.utc(new Date);var n=R.a.utc(e).add(t,"day");return n.diff(w,"day")<=0&&R.a.utc(e).diff(D,"day")>=0?a?n.format("YYYY-MM-DD"):n:null},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;return R.a.utc(e).hour(0).minute(0).second(0).millisecond(0).format("YYYY-MM-DD")},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return w=R.a.utc(new Date),R.a.utc(e).diff(D,"day")>=0&&R.a.utc(e).diff(w,"day")<=0?t?R.a.utc(e).hour(0).minute(0).second(0).millisecond(0).format("YYYY-MM-DD"):R.a.utc(e).hour(0).minute(0).second(0).millisecond(0):null},C="https://api.coingecko.com/api/v3/coins/bitcoin",B=function(){var e=Object(y.a)(_.a.mark((function e(){var t,a,n,r,l,i,u,o,c,d,s,v,m,E,f,g;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("".concat(C).concat("?localization=false&tickers=false"));case 2:return t=e.sent,a=null===t||void 0===t?void 0:t.data,n=a.categories,r=a.genesis_date,l=a.hashing_algorithm,i=a.id,u=a.market_data,o=a.name,c=a.symbol,d=u.ath,s=u.ath_date,v=u.atl,m=u.atl_date,E=u.current_price,f=u.last_updated,g={categories:n,genesis_date:r,hashing:l,id:i,name:o,symbol:c,market_data:{allTimeHigh:d.eur,ath_date:s.eur,allTimeLow:v.eur,atl_date:m.eur,current_price:E.eur,updated:f}},e.abrupt("return",null!==g&&void 0!==g?g:null);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(y.a)(_.a.mark((function e(){var t,a,n,r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=I(s(),!1,!1),n=I(v(),!0,!1),e.next=4,x.a.get("".concat(C).concat("/market_chart/range?").concat("vs_currency=eur","&from=").concat(a,"&to=").concat(n));case 4:return r=e.sent,e.abrupt("return",null!==(t=null===r||void 0===r?void 0:r.data)&&void 0!==t?t:null);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=Object(o.b)("values/fetchMarketData",function(){var e=Object(y.a)(_.a.mark((function e(t){var a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P();case 2:return a=e.sent,e.abrupt("return",null!==a&&void 0!==a?a:null);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),G=Object(o.c)({name:"values",initialState:{marketvalues:null,tradingvolumes:null,fallback:-0,loading:!1},reducers:{SET_MARKETVALUES:function(e,t){e.marketvalues=t.payload},RESET_MARKETVALUES:function(e,t){e.marketvalues=null}},extraReducers:(N={},Object(b.a)(N,F.pending,(function(e){e.loading=!0})),Object(b.a)(N,F.fulfilled,(function(e,t){var a=t.payload;e.loading=!1,e.marketvalues=a.prices,e.tradingvolumes=a.total_volumes})),Object(b.a)(N,F.rejected,(function(e){e.loading=!1})),N)}),z=G.actions,K=(z.SET_MARKETVALUES,z.RESET_MARKETVALUES,G.reducer),J=Object(o.b)("basics/fetchBasicData",function(){var e=Object(y.a)(_.a.mark((function e(t){var a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B();case 2:return a=e.sent,e.abrupt("return",null!==a&&void 0!==a?a:null);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),U=Object(o.c)({name:"basics",initialState:{basicInfo:null,loading:!1},reducers:{SET_BASICINFO:function(e,t){e.basicInfo=t.payload},RESET_BASICINFO:function(e,t){e.basicInfo=null}},extraReducers:(k={},Object(b.a)(k,J.pending,(function(e){e.loading=!0})),Object(b.a)(k,J.fulfilled,(function(e,t){var a=t.payload;e.loading=!1,e.basicInfo=a})),Object(b.a)(k,J.rejected,(function(e){e.loading=!1})),k)}),V=U.actions,H=(V.SET_MARKETVALUES,V.RESET_MARKETVALUES,U.reducer),W=Object(o.a)({reducer:{basics:H,dates:h,values:K}}),$=a(225),q=a(223),Q=a(226),X=Object.freeze({PRIMARY:[255,204,29],SECONDARY:[11,70,25],TERTIARY:[17,101,48],BACKGROUND:[218,218,218],ERR:[205,24,24],INFO:[15,44,103],WARN:[255,103,1],SPECIAL:[174,0,90]}),Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default";switch(e){case"background":return"rgb(".concat(X.BACKGROUND,")");case"background-alt":return"rgb(".concat(X.PRIMARY,")");case"header":return"rgb(".concat(X.SECONDARY,")");case"text":return"rgb(".concat(X.TERTIARY,")");case"err":return"rgb(".concat(X.ERR,")");case"warn":return"rgb(".concat(X.WARN,")");case"info":return"rgb(".concat(X.INFO,")");case"special":return"rgb(".concat(X.SPECIAL,")");default:return"rgb(".concat(X.PRIMARY,")")}},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;switch(e){case"background":return"rgb(".concat(X.BACKGROUND,",").concat(t,")");case"background-alt":return"rgb(".concat(X.PRIMARY,",").concat(t,")");case"header":return"rgb(".concat(X.SECONDARY,",").concat(t,")");case"text":return"rgb(".concat(X.TERTIARY,",").concat(t,")");case"err":return"rgb(".concat(X.ERR,",").concat(t,")");case"warn":return"rgb(".concat(X.WARN,",").concat(t,")");case"info":return"rgb(".concat(X.INFO,",").concat(t,")");case"special":return"rgb(".concat(X.SPECIAL,",").concat(t,")");default:return"rgb(".concat(X.PRIMARY,",").concat(t,")")}},te=function(e){var t=e.id,a=Object(u.c)((function(e){return e.basics})),n=Object(u.c)((function(e){return e.values}));return r.a.createElement("header",{id:t,"data-testid":t,style:{display:"inline-flex",textAlign:"center",justifyItems:"center",alignItems:"center"}},r.a.createElement(Q.a,{variant:"h1",title:"\u20bfitcoint market value analytics",sx:{fontSize:"1.5rem",color:Z("special")}},"\u20bfitSights"),!(!a.loading&&!n.loading)&&r.a.createElement(Q.a,{variant:"overline",sx:{marginLeft:"1rem",color:Z("text")}},"[LOADING..]"))},ae=a(219),ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"id",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default";return"".concat(e,".").concat(t)},re=a(221),le=a(210),ie=a(209),ue=a(220),oe=a(228),ce=a(229),de=a(230),se=a(232),ve=a(231),me=function(e){var t=e.dispatcher,a=e.value,n=e.id;return r.a.createElement(se.a,null,r.a.createElement(ie.b,{dateAdapter:le.a},r.a.createElement(ue.a,{id:n,"data-testid":n,sx:{padding:"1rem"},color:null!==a?"success":"info",label:"Date range start",value:a,onChange:function(e){return function(e){t(f(e)),t(F())}(e)},inputFormat:"YYYY-MM-DD",mask:"____-__-__",renderInput:function(e){return r.a.createElement(re.a,Object.assign({},e,{size:"small",color:null!==a?"success":"info",sx:{"&:hover:selected":{outlineColor:"success"}}}))}})))},Ee=function(e){var t=e.dispatcher,a=e.value,n=e.id;return r.a.createElement(se.a,null,r.a.createElement(ie.b,{dateAdapter:le.a},r.a.createElement(ue.a,{id:n,"data-testid":n,sx:{padding:"1rem"},color:null!==a?"success":"info",label:"Date range end",value:a,onChange:function(e){return function(e){t(g(e)),t(F())}(e)},inputFormat:"YYYY-MM-DD",mask:"____-__-__",renderInput:function(e){return r.a.createElement(re.a,Object.assign({},e,{size:"small",color:null!==a?"success":"info"}))}})))},fe=function(e){var t=e.id,a=Object(u.c)((function(e){return e.dates})),n=Object(u.b)();return r.a.createElement(oe.a,{sx:{backgroundColor:Z("background"),padding:"1rem"},id:t,"data-testid":t},r.a.createElement(ce.a,{size:"small"},r.a.createElement(de.a,null,r.a.createElement(ve.a,null,r.a.createElement(me,{dispatcher:n,value:null===a||void 0===a?void 0:a.daterange_start,id:ne(t,"start")}),r.a.createElement(Ee,{dispatcher:n,value:null===a||void 0===a?void 0:a.daterange_end,id:ne(t,"end")})))))},ge=a(24),he=a(109);ge.d.register(ge.c,ge.i,ge.k,ge.h,ge.o,ge.p,ge.f);var be={responsive:!0,scales:{},plugins:{legend:{display:!1,position:"bottom"},title:{display:!1,text:"\u20bfTC market value in \u20ac"}}},pe=function(e){var t=e.data,a=e.id,n=void 0===a?"default":a,l=ne(n,"line_chart");return r.a.createElement(ve.a,{id:n,"data-testid":n},r.a.createElement(se.a,{colSpan:3},r.a.createElement(r.a.Fragment,null,r.a.createElement(Q.a,{variant:"subtitle1",sx:{color:ee("warn",.8)}},"\u20bfTC market value in \u20ac"),r.a.createElement(he.a,{id:l,"data-testid":l,options:be,datasetIdKey:"BTCmarketvalue",data:t}))))},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=e.sort((function(e,t){return e.datetime-t.datetime}));return t?a:Se(a)},ye=function(e,t){return e.reduce((function(e,a){return Math.abs(t-(null===e||void 0===e?void 0:e.datetime))>Math.abs(t-(null===a||void 0===a?void 0:a.datetime))?a:e}))},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=L(s()),a=L(v()),n=M(t,a),r=[],l=[];if(r.push(I(t,!1,!0)),n>1)for(var i=1;i<n;i++)r.push(I(j(t,i),!1,!0));return r.push(I(a,!1,!0)),r.forEach((function(t){l.push(ye(e,t))})),l.map((function(e,t){return{datetime:1e3*e.datetime,value:e.value,index:t}}))},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=[],a={id:1,label:"\u20bfTC, \u20ac",data:[],borderColor:ee("warn",.8),backgroundColor:ee("warn",.6)};e.forEach((function(e){var n=e.datetime,r=e.value;t.push(Y(n)),a.data.push(r)}));var n={labels:t,datasets:[a]};return n},Ae=function(e,t){return e.reduce((function(e,a){return Math.abs(t-a.datetime)<Math.abs(t-e.datetime)?a:e}))},Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=s(),n=v(),r=M(a,n),l=[],i=[];if(l.push(I(a,!1,!0)),r>1)for(var u=1;u<r;u++)l.push(I(j(a,u),!1,!0));return l.push(I(n,!1,!0)),l.forEach((function(t){i.push(Ae(e,t))})),t?i:Oe(i)},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=e.sort((function(e,t){return e.volume-t.volume}));return t.map((function(e){return{datetime:1e3*e.datetime,volume:e.volume}}))},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=0,a=[[]];if(e&&e.length>0){for(var n=0;n<e.length;n++){var r=e[n],l=e[n+1];(null===r||void 0===r?void 0:r.value)>(null===l||void 0===l?void 0:l.value)?a[t].push(r):(null===r||void 0===r?void 0:r.value)<(null===l||void 0===l?void 0:l.value)?(a[t].push(r),a.push([]),t+=1):l||a[t].push(r)}return a.filter((function(e){return e.length>0}))}return null},we=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=0,a=[[]];if(e&&e.length>0){for(var n=0;n<e.length;n++){var r=e[n],l=e[n+1];(null===r||void 0===r?void 0:r.value)<(null===l||void 0===l?void 0:l.value)?a[t].push(r):(null===r||void 0===r?void 0:r.value)>(null===l||void 0===l?void 0:l.value)?(a[t].push(r),a.push([]),t+=1):l||a[t].push(r)}return a.filter((function(e){return e.length>0}))}return null},Ne=function(e){var t=Object(u.c)((function(e){return e.dates})),a=t.daterange_start,l=t.daterange_end,i=Object(u.b)(),o=Object(u.c)((function(e){return e.values})),c=o.marketvalues,d=o.tradingvolumes,s=o.fallback,v=Object(u.c)((function(e){return e.basics})).basicInfo;Object(n.useEffect)((function(){return i(J())}),[i]),setTimeout((function(){return i(J())}),6e4),Object(n.useEffect)((function(){return i(F())}),[i]);var m=function(e){var t=e.id;return a&&l?r.a.createElement(ve.a,{id:t,"data-testid":t},r.a.createElement(se.a,null,r.a.createElement(Q.a,{variant:"subtitle1"},"Date range")),r.a.createElement(se.a,null,r.a.createElement(Q.a,{variant:"body1"},Y(a))),r.a.createElement(se.a,null,r.a.createElement(Q.a,{variant:"body1"},Y(l))),r.a.createElement(se.a,null,r.a.createElement(Q.a,{variant:"body1"},M(a,l)+1," days"))):null},E=function(e){var t=e.dataset,a=void 0===t?null:t,n=e.low,l=void 0!==n&&n,i=e.id,u=void 0===i?"default":i,o=a.sort((function(e,t){return(null===e||void 0===e?void 0:e.value)-(null===t||void 0===t?void 0:t.value)}));return console.log(o),a?r.a.createElement(ve.a,{id:u,"data-testid":u},r.a.createElement(se.a,null,r.a.createElement(Q.a,{variant:"subtitle1"},l?"Lowest":"Highest"," value")),r.a.createElement(se.a,null,r.a.createElement(Q.a,{variant:"body1"},Y(l?a[0].datetime:a[a.length-1].datetime))),r.a.createElement(se.a,null,r.a.createElement(Q.a,{variant:"body1",sx:{color:Z(l?"special":"text")}},l?Math.round(100*(a[0].value+Number.EPSILON))/100:Math.round(100*(a[a.length-1].value+Number.EPSILON))/100," \u20ac"))):null},f=function(e){var t=e.dataset,a=void 0===t?null:t,n=e.low,l=void 0!==n&&n,i=e.id,u=void 0===i?"default":i;return a?r.a.createElement(ve.a,{id:u,"data-testid":u},r.a.createElement(se.a,null,r.a.createElement(Q.a,{variant:"subtitle1"},l?"Lowest":"Highest"," trading volume")),r.a.createElement(se.a,null,r.a.createElement(Q.a,{variant:"body1"},Y(l?a[0].datetime:a[a.length-1].datetime))),r.a.createElement(se.a,null,r.a.createElement(Q.a,{variant:"body1"},l?Math.round(100*(a[0].volume+Number.EPSILON))/100:Math.round(100*(a[a.length-1].volume+Number.EPSILON))/100," \u20ac"))):null},g=function(e){var t=e.dataset,a=void 0===t?null:t,n=e.bearish,l=void 0===n||n,i=e.id,u=void 0===i?"default":i;return a?r.a.createElement(r.a.Fragment,{key:u},r.a.createElement(ve.a,null,r.a.createElement(se.a,null,r.a.createElement(Q.a,{variant:"subtitle1",sx:{color:Z(l?"special":"text")}},"Longest ",l?"bearish":"bullish"," trend")),r.a.createElement(se.a,null,r.a.createElement(Q.a,{variant:"body1",sx:{color:Z(l?"special":"text")}},a.length-1," days"))),r.a.createElement(ve.a,null,r.a.createElement(se.a,null,r.a.createElement(Q.a,{variant:"subtitle1"},l?"Bearish":"Bullish"," trend start")),r.a.createElement(se.a,null,r.a.createElement(Q.a,{variant:"body1"},Y(a[0].datetime))),r.a.createElement(se.a,null,r.a.createElement(Q.a,{variant:"body1",sx:{color:Z("info")}},Math.round(100*(a[0].value+Number.EPSILON))/100," \u20ac"))),r.a.createElement(ve.a,null,r.a.createElement(se.a,null,r.a.createElement(Q.a,{variant:"subtitle1"},l?"Bearish":"Bullish"," trend end")),r.a.createElement(se.a,null,r.a.createElement(Q.a,{variant:"body1"},Y(a[a.length-1].datetime))),r.a.createElement(se.a,null,r.a.createElement(Q.a,{variant:"body1",sx:{color:Z(l?"special":"text")}},Math.round(100*(a[a.length-1].value+Number.EPSILON))/100," \u20ac")))):null},h=function(e){var t=e.datasetBuy,a=void 0===t?null:t,n=e.datasetSell,l=void 0===n?null:n,i=e.id,u=void 0===i?"default":i;return r.a.createElement(r.a.Fragment,{key:u},r.a.createElement(ve.a,null,r.a.createElement(se.a,null,r.a.createElement(Q.a,{variant:"subtitle1",sx:{color:ee("warn",.8)}},"Trade recommendations"))),a?r.a.createElement(ve.a,null,r.a.createElement(se.a,null,r.a.createElement(Q.a,{variant:"subtitle1"},"Buying recommended")),r.a.createElement(se.a,null,r.a.createElement(Q.a,{variant:"body1"},Y(null===a||void 0===a?void 0:a.datetime))),r.a.createElement(se.a,null,r.a.createElement(Q.a,{variant:"body1",sx:{color:Z("special")}},Math.round(100*(a.value+Number.EPSILON))/100," \u20ac"))):r.a.createElement(ve.a,null,r.a.createElement(se.a,null,r.a.createElement(Q.a,{variant:"subtitle1",sx:{color:Z("special")}},"Buying not recommended"))),l?r.a.createElement(ve.a,null,r.a.createElement(se.a,null,r.a.createElement(Q.a,{variant:"subtitle1"},"Selling recommended")),r.a.createElement(se.a,null,r.a.createElement(Q.a,{variant:"body1"},Y(null===l||void 0===l?void 0:l.datetime))),r.a.createElement(se.a,null,r.a.createElement(Q.a,{variant:"body1",sx:{color:Z("text")}},Math.round(100*((null===l||void 0===l?void 0:l.value)+Number.EPSILON))/100," \u20ac"))):r.a.createElement(ve.a,null,r.a.createElement(se.a,null,r.a.createElement(Q.a,{variant:"subtitle1",sx:{color:Z("special")}},"Selling not recommended"))))},b=function(e){var t=e.id,a=c?function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=e.map((function(e){return{datetime:Math.floor(e[0]/1e3),value:e[1]}}));return t?a:_e(a)}(c):null,n=d?function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=e.map((function(e){return{datetime:Math.floor(e[0]/1e3),volume:e[1]}}));return t?a:Re(a)}(d):null,l=c&&a?function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=Te(t).sort((function(e,t){return e.length-t.length}));return null!==(e=a[a.length-1])&&void 0!==e?e:null}(a):null,i=c&&a?function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=we(t).sort((function(e,t){return e.length-t.length}));return null!==(e=a[a.length-1])&&void 0!==e?e:null}(a):null,u=c&&a?function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(!(e&&e.length>0))return null;var t,a,n=null,r=null;if(e.forEach((function(e){var t,a;(null===n||(null===(t=n)||void 0===t?void 0:t.value)>(null===e||void 0===e?void 0:e.value))&&(n=e),(null===r||(null===(a=r)||void 0===a?void 0:a.value)<(null===e||void 0===e?void 0:e.value))&&(r=e)})),(null===(t=n)||void 0===t?void 0:t.datetime)<(null===(a=r)||void 0===a?void 0:a.datetime))return n;if(e.indexOf(r)>0){var l=e.filter((function(e){var t;return(null===e||void 0===e?void 0:e.datetime)<(null===(t=r)||void 0===t?void 0:t.datetime)}));return(null===l||void 0===l?void 0:l.length)>0?l.sort((function(e,t){return e.value-t.value}))[0]:null}if(e.indexOf(n)<e.length-1){var i=e.filter((function(e){var t;return(null===e||void 0===e?void 0:e.datetime)>(null===(t=r)||void 0===t?void 0:t.datetime)}));return(null===i||void 0===i?void 0:i.length)>0?i.sort((function(e,t){return t.value-e.value}))[0]:null}}(a):null,o=c&&a?function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(e){var t,a,n=null,r=null;if(e.forEach((function(e){var t,a;(null===n||(null===(t=n)||void 0===t?void 0:t.value)>(null===e||void 0===e?void 0:e.value))&&(n=e),(null===r||(null===(a=r)||void 0===a?void 0:a.value)<(null===e||void 0===e?void 0:e.value))&&(r=e)})),(null===(t=r)||void 0===t?void 0:t.datetime)<(null===(a=n)||void 0===a?void 0:a.datetime))return r;var l=e.filter((function(e){var t;return(null===e||void 0===e?void 0:e.datetime)>(null===(t=n)||void 0===t?void 0:t.datetime)}));return(null===l||void 0===l?void 0:l.length)>0?l.sort((function(e,t){return e.value-t.value}))[0]:null}return null}(a):null;return a?r.a.createElement(r.a.Fragment,{key:t},r.a.createElement(pe,{data:xe(a),id:ne(t,"value_chart")}),r.a.createElement(E,{dataset:a,low:!0,id:ne(t,"value_low")}),r.a.createElement(E,{dataset:a,low:!1,id:ne(t,"value_high")}),r.a.createElement(ve.a,null,r.a.createElement(se.a,null,r.a.createElement(Q.a,{variant:"subtitle1",sx:{color:ee("warn",.8)}},"Trade volume"))),r.a.createElement(f,{dataset:n,low:!0,id:ne(t,"volume_low")}),r.a.createElement(f,{dataset:n,low:!1,id:ne(t,"volume_high")}),r.a.createElement(h,{datasetBuy:u,datasetSell:o,id:ne(t,"trade_recommendations")}),r.a.createElement(ve.a,null,r.a.createElement(se.a,null,r.a.createElement(Q.a,{variant:"subtitle1",sx:{color:ee("warn",.8)}},"Market value trend"))),r.a.createElement(g,{bearish:!0,dataset:l,id:ne(t,"trend_bearish")}),r.a.createElement(g,{bearish:!1,dataset:i,id:ne(t,"trend_bullish")})):null},p=function(e){var t=e.id,a=void 0===t?"default":t;return r.a.createElement(ae.a,{direction:"column",sx:{margin:"0 1rem"},id:a,"data-testid":a},r.a.createElement(ce.a,{size:"small"},r.a.createElement(de.a,null,r.a.createElement(m,{id:ne(a,"date_range")}),r.a.createElement(b,{id:ne(a,"analysed_data")}))))},_=function(e){var t,a,n,l,i=e.low,u=e.id,o=void 0===u?"default":u;return v?r.a.createElement(ve.a,{id:o,"data-testid":o},r.a.createElement(se.a,null,r.a.createElement(Q.a,{variant:"subtitle1"},"All-Time ",i?"Low":"High")),r.a.createElement(se.a,null,r.a.createElement(Q.a,{variant:"body1"},Y(i?null===v||void 0===v||null===(t=v.market_data)||void 0===t?void 0:t.atl_date:null===v||void 0===v||null===(a=v.market_data)||void 0===a?void 0:a.ath_date))),r.a.createElement(se.a,null,r.a.createElement(Q.a,{variant:"body1",sx:{color:Z(i?"special":"text")}},i?null===v||void 0===v||null===(n=v.market_data)||void 0===n?void 0:n.allTimeLow:null===v||void 0===v||null===(l=v.market_data)||void 0===l?void 0:l.allTimeHigh," \u20ac"))):null},y=function(e){var t,a,n=e.id,l=void 0===n?"default":n;return v?r.a.createElement(ae.a,{direction:"column",sx:{margin:"0 1rem"},id:l,"data-testid":l},r.a.createElement(ce.a,{size:"small"},r.a.createElement(de.a,null,r.a.createElement(ve.a,null,r.a.createElement(se.a,null,r.a.createElement(Q.a,{variant:"body1"},"Value")),r.a.createElement(se.a,null,r.a.createElement(Q.a,{variant:"body1",sx:{color:Z("warn")}},null!==(t=null===v||void 0===v||null===(a=v.market_data)||void 0===a?void 0:a.current_price)&&void 0!==t?t:s," \u20ac")),r.a.createElement(se.a,null,r.a.createElement(Q.a,{variant:"subtitle1"},"Name")),r.a.createElement(se.a,null,r.a.createElement(Q.a,{variant:"body1"},null===v||void 0===v?void 0:v.name))),r.a.createElement(ve.a,null,r.a.createElement(se.a,null,r.a.createElement(Q.a,{variant:"subtitle1"},"Symbol")),r.a.createElement(se.a,null,r.a.createElement(Q.a,{variant:"body1"},null===v||void 0===v?void 0:v.symbol,"btc"===(null===v||void 0===v?void 0:v.symbol)&&", \u20bf")),r.a.createElement(se.a,null,r.a.createElement(Q.a,{variant:"subtitle1"},"Hashing")),r.a.createElement(se.a,null,r.a.createElement(Q.a,{variant:"body1"},null===v||void 0===v?void 0:v.hashing))),r.a.createElement(ve.a,null,r.a.createElement(se.a,null,r.a.createElement(Q.a,{variant:"subtitle1"},"Genesis date")),r.a.createElement(se.a,null,r.a.createElement(Q.a,{variant:"body1"},Y(null===v||void 0===v?void 0:v.genesis_date)))),r.a.createElement(_,{id:ne(l,"athl_high")}),r.a.createElement(_,{low:!0,id:ne(l,"athl_low")})))):null};return r.a.createElement("section",{id:e.id,"data-testid":e.id},r.a.createElement(oe.a,{sx:{backgroundColor:Z("background"),padding:"1rem",margin:"1rem"}},r.a.createElement(Q.a,{variant:"h5",sx:{color:ee("warn",.8),margin:"0 1rem"}},"\u20bfitcoin market value"),r.a.createElement(p,{id:ne(e.id,"ranged_data")})),r.a.createElement(oe.a,{sx:{backgroundColor:Z("background"),padding:"1rem",margin:"1rem"}},r.a.createElement(Q.a,{variant:"h5",sx:{color:ee("warn",.8),margin:"0 1rem"}},"\u20bfitcoin information"),r.a.createElement(y,{id:ne(e.id,"basic_data")})))},ke=function(e){var t=e.id;return r.a.createElement(ae.a,{id:t,"data-testid":t,direction:"column",spacing:2,sx:{margin:"1rem"}},r.a.createElement(fe,{id:ne(t,"daterange")}),r.a.createElement(Ne,{id:ne(t,"insight")}))},De=a(227),Ie=function(e){var t=e.id;return r.a.createElement("footer",{id:t,"data-testid":t,style:{display:"inline-flex",alignItems:"baseline",justifyContent:"center",justifyItems:"center"}},r.a.createElement(Q.a,{variant:"overline",sx:{fontSize:"0.7rem",color:ee("text",.5)}},"Version ",c.c),r.a.createElement(De.a,{underline:"hover",href:"https://github.com/RedFoxFinn/BitSights",sx:{marginLeft:"1rem",color:ee("special",.5)}},r.a.createElement(Q.a,{variant:"overline",sx:{fontSize:"0.7rem"}},"Repository")),r.a.createElement(De.a,{underline:"hover",href:"https://github.com/RedFoxFinn",sx:{marginLeft:"1rem",color:ee("special",.5)}},r.a.createElement(Q.a,{variant:"overline",sx:{fontSize:"0.7rem"}},"Author")))},Me=a(107),je=Object(Me.a)({palette:{primary:{main:"".concat(Z())},secondary:{main:"".concat(Z("header"))},info:{main:"".concat(Z("info"))},error:{main:"".concat(Z("err"))},warning:{main:"".concat(Z("warn"))},success:{main:"".concat(ee("text",.8))},special:{main:"".concat(Z("special"))},background:{main:"".concat(Z("background"))}}}),Ye=function(e){var t=e.id,a=Object(u.c)((function(e){return e.dates})).daterange_end,l=Object(u.b)();return Object(n.useEffect)((function(){var e=v();l(g(e||L()));var t=s();l(f(t||function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];w=R.a.utc(new Date);var a=R.a.utc(e).hour(0).minute(0).second(0).millisecond(0).subtract(7,"day");return a.diff(D,"day")>=0&&R.a.utc(e).diff(w,"day")<=0?t?a.format("YYYY-MM-DD"):a:null}(a)))})),r.a.createElement(q.a,{theme:je},r.a.createElement($.a,{id:t,"data-testid":t,sx:{margin:"1rem 2rem",display:"flex",flexDirection:"column",alignItems:"center"}},r.a.createElement(te,{id:ne(t,"header")}),r.a.createElement(ke,{id:ne(t,"content")}),r.a.createElement(Ie,{id:ne(t,"footer")})))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u.a,{store:W},r.a.createElement(Ye,{id:d()}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},75:function(e){e.exports=JSON.parse('{"a":"rff.app.bitsights","b":"BitSights","c":"1.0.1"}')}},[[132,1,2]]]);
//# sourceMappingURL=main.6cb90d83.chunk.js.map