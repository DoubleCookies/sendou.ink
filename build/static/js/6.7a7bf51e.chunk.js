(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1875:function(e,a,t){"use strict";t.r(a);var n=t(104),r=t(16),o=t(0),l=t.n(o),c=t(286),i=t(706),p=t(699),s=t(695),u=t(687),d=t(703),m=t(424),h=t(701),k=t(421),w=t(704),f=t(46),y=t(38),g=t(28),b=t(29);function v(){var e=Object(g.a)(["\nquery searchForTrend($weapon: String!) {\n  searchForTrend(weapon: $weapon) {\n    weapon\n    counts {\n      year\n      SZ\n      TC\n      RM\n      CB\n    }\n  }\n}\n"]);return v=function(){return e},e}var E=Object(b.a)(v()),_=[];_[0]=null,_[1]="Jan",_[2]="Feb",_[3]="Mar",_[4]="Apr",_[5]="May",_[6]="Jun",_[7]="Jul",_[8]="Aug",_[9]="Sep",_[10]="Oct",_[11]="Nov",_[12]="Dec";var O={5:{2018:{name:"3.0",link:"https://splatoonwiki.org/wiki/Version_3.0.0_(Splatoon_2)"},2019:{name:"4.8",link:"https://splatoonwiki.org/wiki/Version_4.8.0_(Splatoon_2)"}},6:{2018:{name:"3.1",link:"https://splatoonwiki.org/wiki/Version_3.1.0_(Splatoon_2)"},2019:{name:"4.9",link:"https://splatoonwiki.org/wiki/Version_4.9.0_(Splatoon_2)"}},7:{2018:{name:"3.2",link:"https://splatoonwiki.org/wiki/Version_3.2.0_(Splatoon_2)"},2019:{name:"5.0",link:"https://splatoonwiki.org/wiki/Version_5.0.0_(Splatoon_2)"}},9:{2018:{name:"4.0",link:"https://splatoonwiki.org/wiki/Version_4.0.0_(Splatoon_2)"}},10:{2018:{name:"4.1",link:"https://splatoonwiki.org/wiki/Version_4.1.0_(Splatoon_2)"}},11:{2018:{name:"4.2",link:"https://splatoonwiki.org/wiki/Version_4.2.0_(Splatoon_2)"}},12:{2018:{name:"4.3",link:"https://splatoonwiki.org/wiki/Version_4.3.0_(Splatoon_2)"}},1:{2019:{name:"4.4",link:"https://splatoonwiki.org/wiki/Version_4.4.0_(Splatoon_2)"}},3:{2019:{name:"4.5",link:"https://splatoonwiki.org/wiki/Version_4.5.0_(Splatoon_2)"}},4:{2019:{name:"4.6+4.7",link:"https://splatoonwiki.org/wiki/List_of_updates_in_Splatoon_2"}}},S=["#FF00FF","#008000","#FF0000","#0000FF","#FFA500","#800080","#A52A2A","#1BC5CD","#000080","#5BCCA0"],C=function(){for(var e=[],a=5;a<13;a++)O.hasOwnProperty(a)&&O[a].hasOwnProperty(2018)?e.push({name:a,year:2018,xLabel:_[a],patch:O[a][2018].name}):e.push({name:a,year:2018,xLabel:_[a]});for(var t=new Date,n=t.getFullYear(),r=t.getMonth()+1,o=2019;o<n+1;o++)for(var l=1;l<13&&(o!==n||l!==r);l++){var c=1===l?"Jan (".concat(n,")"):_[l];O.hasOwnProperty(l)&&O[l].hasOwnProperty(o)?e.push({name:l,year:o,xLabel:c,patch:O[l][o].name}):e.push({name:l,year:o,xLabel:c})}return e},j=function(e){for(var a=e.SZ,t=e.TC,n=e.RM,r=e.CB,o=new Array(12).fill(0),l=1;l<13;l++)o[l]=a[l]+t[l]+n[l]+r[l];return o},L=function(e,a){return 2018===a?e-5:2019===a?7+e:7+e+12*(a-2019)},x=function(e){return e.keys.length<9?S[e.keys.length]:"#000000".replace(/0/g,function(){return(~~(16*Math.random())).toString(16)})},A=function(e,a){switch(a.type){case"add":var t=a.trendDocument,r=a.mode,o="ALL"===r?"":" (".concat(r,")"),l="".concat(a.trendDocument.weapon).concat(o);if(-1!==e.keys.indexOf(l))return e;for(var c=Object(f.a)(e.data),i=0;i<t.counts.length;i++){var p=t.counts[i].year,s=null;s="ALL"===r?j(t.counts[i]):t.counts[i][r];for(var u=1;u<13;u++)if(2018===p&&u<5)u=4;else{var d=L(u,p);if(d===c.length)break;c[d][l]=s[u]}}var m={weapon:l,color:x(e)};return{data:c,keys:[].concat(Object(f.a)(e.keys),[m])};case"delete":var h=a.weapon,k=Object(f.a)(e.keys).filter(function(e){return e.weapon!==h});return{data:e.data,keys:k};case"combine":var w=a.left,y=a.right,g="".concat(w," + ").concat(y),b=[].concat(Object(f.a)(e.keys),[{weapon:g,color:x(e)}]).filter(function(e){return e.weapon!==w&&e.weapon!==y});return{data:Object(f.a)(e.data).map(function(e){var a=Object(n.a)({},e),t=0,r=0;return a.hasOwnProperty(w)&&(t=a[w]),a.hasOwnProperty(y)&&(r=a[y]),a[g]=t+r,delete a[w],delete a[y],a}),keys:b};case"randomizeColor":var v=Object(f.a)(e.keys).map(function(e){return e.weapon!==a.weapon?e:Object(n.a)({},e,{color:"#000000".replace(/0/g,function(){return(~~(16*Math.random())).toString(16)})})});return{data:e.data,keys:v};default:throw new Error}};var F=t(154),M=t(57),T=t(155),V=t(1873),D={width:"200px",margin:"0",lineHeight:"24px",border:"1px solid #f5f5f5",backgroundColor:"hsla(0,0%,100%,.8)",padding:"10px"},R={margin:"0",color:"#666",fontWeight:"700"},P={borderTop:"1px solid #f5f5f5",margin:"0"},B={margin:0,color:"#999"},J=[null,"January","February","March","April","May","June","July","August","September","October","November","December"];a.default=function(e){var a=e.setMenuSelection,t=Object(o.useState)(null),f=Object(r.a)(t,2),g=f[0],b=f[1],v=Object(o.useState)(null),_=Object(r.a)(v,2),O=_[0],S=_[1],j=Object(o.useState)(null),L=Object(r.a)(j,2),x=L[0],K=L[1],Z=Object(o.useState)(null),z=Object(r.a)(Z,2),G=z[0],W=z[1],I=Object(o.useState)("ALL"),X=Object(r.a)(I,2),N=X[0],U=X[1],Y=Object(o.useState)(null),$=Object(r.a)(Y,2),q=$[0],H=$[1],Q=function(e,a){var t=Object(o.useReducer)(A,{data:C(),keys:[]}),n=Object(r.a)(t,2),l=n[0],c=n[1],i=Object(y.b)(E,{skip:!e,variables:{weapon:e}}),p=i.data,s=i.loading,u=i.error;return Object(o.useEffect)(function(){!s&&p&&c({type:"add",trendDocument:p.searchForTrend,mode:a})},[s,p,a]),{loading:s,error:u,plotData:l,dispatch:c}}(G,q),ee=Q.loading,ae=Q.error,te=Q.plotData,ne=Q.dispatch,re=Object(F.a)().containerWidth;Object(o.useEffect)(function(){a("trends"),document.title="X Rank Trends - sendou.ink"},[a]);return ae?l.a.createElement("div",{style:{color:"red"}},ae.message):l.a.createElement(c.a,null,l.a.createElement("div",{style:{padding:"5px"}},l.a.createElement(i.a,{as:"h2"},"Compare weapons based on their X Rank Top 500 appearances"),l.a.createElement(T.a,{content:"ALLWEAPONS",value:g,onChange:b}),l.a.createElement("div",{style:{paddingTop:"10px"}},l.a.createElement(p.a,null,l.a.createElement(p.a.Field,null,l.a.createElement(s.a,{label:"All Modes",name:"radioGroup",value:"ALL",checked:"ALL"===N,onChange:function(){return U("ALL")}})),l.a.createElement(p.a.Field,null,l.a.createElement(s.a,{label:"Splat Zones",name:"radioGroup",value:"SZ",checked:"SZ"===N,onChange:function(){return U("SZ")}})),l.a.createElement(p.a.Field,null,l.a.createElement(s.a,{label:"Tower Control",name:"radioGroup",value:"TC",checked:"TC"===N,onChange:function(){return U("TC")}})),l.a.createElement(p.a.Field,null,l.a.createElement(s.a,{label:"Rainmaker",name:"radioGroup",value:"RM",checked:"RM"===N,onChange:function(){return U("RM")}})),l.a.createElement(p.a.Field,null,l.a.createElement(s.a,{label:"Clam Blitz",name:"radioGroup",value:"CB",checked:"CB"===N,onChange:function(){return U("CB")}})))),l.a.createElement("div",{style:{paddingTop:"10px"}},l.a.createElement(u.a,{loading:ee,onClick:function(){W(g),H(N);var e="ALL"===N?g:"".concat(g," (").concat(N,")");S(e),te.keys.length>=1&&K(te.keys[te.keys.length-1].weapon)},disabled:!g},"Add to plot as new"),te.keys.length>=2&&l.a.createElement("div",{style:{paddingTop:"10px"}},l.a.createElement(u.a,{disabled:!O||!x||O===x,onClick:function(){ne({type:"combine",left:O,right:x})}},"Combine..."),l.a.createElement("span",null," ",l.a.createElement(d.a,{inline:!0,options:te.keys.map(function(e){return{text:e.weapon,value:e.weapon}}).filter(function(e){return e.text!==x}),onChange:function(e,a){var t=a.value;S(t)},value:O})," ","with"," ",l.a.createElement(d.a,{inline:!0,options:te.keys.map(function(e){return{text:e.weapon,value:e.weapon}}).filter(function(e){return e.text!==O}),onChange:function(e,a){var t=a.value;K(t)},value:x})))),te.keys.length>0&&l.a.createElement("div",{style:{paddingTop:"10px"}},l.a.createElement(V.e,{width:re,height:500,data:te.data,margin:{top:5,right:50,left:0,bottom:5}},l.a.createElement(V.b,{strokeDasharray:"3 3"}),l.a.createElement(V.g,{dataKey:"xLabel",tickLine:!1}),l.a.createElement(V.g,{dataKey:"patch",tickLine:!0,scale:"band",axisLine:!1,height:1,xAxisId:"patch"}),l.a.createElement(V.h,{allowDecimals:!1,label:{value:"X rank top 500 placements",angle:-90,position:"insideLeft",textAnchor:"middle"}}),l.a.createElement(V.f,{content:l.a.createElement(function(e){var a=e.active,t=e.payload;if(a){if(0===t.length)return null;var r=t[0].payload.name,o=t[0].payload.year,c=null;return t[0].payload.hasOwnProperty("patch")&&(c=4===r&&2019===o?"Patches 4.6 and 4.7 were released.":"Patch ".concat(t[0].payload.patch," was released.")),l.a.createElement("div",{style:D},l.a.createElement("p",{style:R},"".concat(J[r]," (").concat(o,")")),t.map(function(e){return l.a.createElement("p",{style:Object(n.a)({},P,{color:e.stroke}),key:e.dataKey},e.payload[e.dataKey]," - ",e.dataKey)}),c&&l.a.createElement("p",{style:B},c))}return null},null)}),l.a.createElement(V.c,{verticalAlign:"top"}),l.a.createElement(V.a,{dataKey:"xLabel",height:75,stroke:"#000000"}),te.keys.map(function(e){var a=e.weapon,t=e.color;return l.a.createElement(V.d,{key:a,type:"monotone",dataKey:a,stroke:t})})),l.a.createElement(m.a,{columns:2,style:{paddingTop:"10px"}},l.a.createElement(m.a.Column,null,l.a.createElement(h.a,{divided:!0,verticalAlign:"middle"},te.keys.map(function(e){var a=e.weapon,t=e.color;return l.a.createElement(h.a.Item,{key:a},l.a.createElement(h.a.Content,{floated:"right"},l.a.createElement(u.a,{circular:!0,size:"mini",negative:!0,icon:"trash",onClick:function(){return ne({type:"delete",weapon:a})}})),-1===a.indexOf("+")&&l.a.createElement(k.a,{avatar:!0,src:"/wpnSmall/Wst_".concat(M[a.replace(" (SZ)","").replace(" (TC)","").replace(" (RM)","").replace(" (CB)","")],".png")}),l.a.createElement(h.a.Content,null,l.a.createElement("span",{style:{color:t,background:"none",border:"none",cursor:"pointer",WebkitUserSelect:"none",MozUserSelect:"none",MsUserSelect:"none",userSelect:"none"},onClick:function(){return ne({type:"randomizeColor",weapon:a})}},a)))}))),l.a.createElement(m.a.Column,null)))),l.a.createElement(w.a,null,l.a.createElement(w.a.List,null,l.a.createElement(w.a.Item,null,"You can check out all the patch notes"," ",l.a.createElement("a",{href:"https://splatoonwiki.org/wiki/List_of_updates_in_Splatoon_2"},"here")),l.a.createElement(w.a.Item,null,"For alternative take on X Rank trends check out"," ",l.a.createElement("a",{href:"https://www.splatmeta.ink"},"Splat Meta")))))}}}]);
//# sourceMappingURL=6.7a7bf51e.chunk.js.map