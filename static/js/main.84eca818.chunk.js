(this.webpackJsonppokemon_game=this.webpackJsonppokemon_game||[]).push([[0],{25:function(e,t,a){e.exports=a(44)},30:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(22),l=a.n(r),o=(a(30),a(6)),s=a(1),i=a(15),m=a.n(i),u=a(23),d=a(3),p=Object(n.createContext)();function E(e){var t=Object(n.useState)(365),a=Object(d.a)(t,1)[0],r=Object(n.useState)(12),l=Object(d.a)(r,2),o=l[0],s=l[1],i=Object(n.useState)([]),E=Object(d.a)(i,2),f=E[0],h=E[1],v=Object(n.useState)("https://pokeapi.co/api/v2/pokemon?offset=0&limit=".concat(o)),b=Object(d.a)(v,2),g=b[0],k=b[1],x=Object(n.useState)(""),N=Object(d.a)(x,2),j=N[0],O=N[1],S=Object(n.useState)(""),y=Object(d.a)(S,2),w=y[0],C=y[1],_=Object(n.useState)(!0),F=Object(d.a)(_,2),P=F[0],T=F[1],W=Object(n.useState)(""),B=Object(d.a)(W,2),U=B[0],q=B[1],A=Object(n.useState)(!1),R=Object(d.a)(A,2),I=R[0],D=R[1];return Object(n.useEffect)((function(){var e=U.length>0?"https://pokeapi.co/api/v2/pokemon?offset=0&limit=".concat(a):g;function t(){return(t=Object(u.a)(m.a.mark((function t(){var a,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return a=t.sent,t.next=5,a.json();case 5:return n=t.sent,O(n.next),C(n.previous),t.t0=h,t.next=11,Promise.all(n.results.filter((function(e){return e.name.indexOf(U.toLowerCase())>-1})).map((function(e){return fetch(e.url).then((function(e){return e.json()})).then((function(e){return{id:e.id,name:e.name,height:e.height,weight:e.weight,exp:e.base_experience,src:e.sprites.front_default,src_back:e.sprites.back_default,isSelected:!1}})).catch((function(e){return console.log(e)}))})));case 11:t.t1=t.sent,(0,t.t0)(t.t1),T(!1);case 14:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[g,U,I]),c.a.createElement(p.Provider,{value:{pokes:f,setPokes:h,curUrl:g,setCurUrl:k,nextUrl:j,setNextUrl:O,prevUrl:w,setPrevUrl:C,loading:P,setLoading:T,search:U,setSearch:q,gameStart:I,setGameStart:D,perPokes:o,setPerPokes:s,totalPokes:a}},c.a.createElement(c.a.Fragment,null,e.children))}var f=Object(n.createContext)();function h(e){var t=Object(n.useState)([]),a=Object(d.a)(t,2),r=a[0],l=a[1],o=Object(n.useState)([]),s=Object(d.a)(o,2),i=s[0],m=s[1],u=Object(n.useState)([]),p=Object(d.a)(u,2),E=p[0],h=p[1],v=Object(n.useState)(),b=Object(d.a)(v,2),g=b[0],k=b[1];return c.a.createElement(f.Provider,{value:{team:r,setTeam:l,teamA:i,setTeamA:m,teamB:E,setTeamB:h,isWinner:g,setIsWinner:k}},e.children)}a(32);var v=function(){var e=Object(n.useContext)(p),t=e.search,a=e.setSearch,r=e.pokes,l=e.gameStart,o=Object(n.useContext)(f),s=o.team,i=o.setTeamA;t.length>0&&r.length<1&&(alert("no pokemon"),a(""));return c.a.createElement("div",{className:"SearchBar"},!l&&c.a.createElement("input",{id:"auto",type:"text",value:t,onChange:function(e){!function(e){a(e.target.value),i(s)}(e)},required:!0}))};a(33);var b=Object(s.f)((function(e){var t=navigator.userAgent||navigator.vendor||window.opera;return c.a.createElement(c.a.Fragment,null,"/"!==e.location.pathname&&c.a.createElement("nav",{id:"nav"},-1!==e.location.pathname.indexOf("pokeplay")?c.a.createElement(v,null):c.a.createElement("div",null),c.a.createElement("ul",{ref:e.fullscreenModal},window.screen.availWidth>900&&!0!==/windows phone/i.test(t)&&!0!==/android/i.test(t)&&!0!==(/iPad|iPhone|iPod/.test(t)&&!window.MSStream)&&c.a.createElement("button",{className:"btn btn-animate tooltip fullscreenBtn",onClick:e.toggleFullScreen},"[]",c.a.createElement("span",{className:"tooltiptext"},"full screen")),c.a.createElement(o.c,{exact:!0,className:"btn btn-white btn-animate tooltip",activeClassName:"active-link",to:"/pokegame/","data-lan":"tab"},c.a.createElement("i",{className:"fas fa-home"}),c.a.createElement("span",{className:"tooltiptext"},"home")),c.a.createElement(o.c,{exact:!0,className:"btn btn-white btn-animate tooltip",activeClassName:"active-link",to:"/pokegame/pokeplay","data-lan":"tab"},c.a.createElement("i",{className:"fas fa-play"}),c.a.createElement("span",{className:"tooltiptext"},"play game")),c.a.createElement(o.c,{exact:!0,className:"btn btn-white btn-animate tooltip scorelink",activeClassName:"active-link",to:"/pokegame/scoresheet","data-lan":"tab"},c.a.createElement("i",{className:"fas fa-clipboard"}),c.a.createElement("span",{className:"tooltiptext"},"score sheet")))))}));a(39);var g=function(e){return c.a.createElement("div",{className:"Home",onClick:e.openFullscreen},c.a.createElement("ul",{className:"menu"},c.a.createElement(o.b,{to:"/pokegame/pokeplay",className:"index-btn"},c.a.createElement("span",null,"start game")),c.a.createElement(o.b,{to:"/pokegame/scoresheet",className:"index-btn"},c.a.createElement("span",null,"scroe sheet"))))};var k=function(){var e=Object(n.useContext)(p),t=e.setCurUrl,a=e.nextUrl,r=e.prevUrl,l=e.loading,o=e.search,s=Object(n.useContext)(f),i=s.team,m=s.setTeamA,u={display:o.length>0?"none":"block"};return c.a.createElement("div",{className:"pagination",style:u},c.a.createElement("button",{onClick:function(){m(i),t(r)},disabled:l,className:"prev",style:{opacity:null===r&&0}}),c.a.createElement("button",{onClick:function(){m(i),t(a)},disabled:l,className:"next",style:{opacity:null===a&&0}}))},x=function(e){return c.a.createElement("section",{className:"teamDiv"},c.a.createElement("h2",null,void 0!==e.isWinner&&e.hand),c.a.createElement("p",null,void 0!==e.isWinner&&"total exp: ".concat(e.exp)),e.team.map((function(t){return c.a.createElement("div",{key:"".concat(e.hand).concat(t.name),className:"card"},c.a.createElement("img",{src:t.src,alt:t.name,className:void 0!==t.isWinner?"teamDiv-img-active":""}),c.a.createElement("p",{className:"exp"},void 0!==e.isWinner&&"exp:".concat(t.exp)))})))},N=function(){var e=Object(n.useContext)(f),t=e.team,a=e.teamB,r=e.setTeamB,l=e.isWinner,o=e.setIsWinner,s=Object(n.useContext)(p),i=s.pokes,m=s.gameStart,u=t.reduce((function(e,t){return e+t.exp}),0);return Object(n.useEffect)((function(){if(m){var e=function(e,t){var a=new Array(t),n=e.length,c=new Array(n);if(t>n)throw new RangeError("getRandom: more elements taken than available");for(;t--;){var r=Math.floor(Math.random()*n);a[t]=e[r in c?c[r]:r],c[r]=--n in c?c[n]:n}return a}(i.filter((function(e){return e.id!==t[0].id&&e.id!==t[1].id&&e.id!==t[2].id})),3);a.length<3?r(e):setTimeout((function(){o(t.reduce((function(e,t){return e+t.exp}),0)>a.reduce((function(e,t){return e+t.exp}),0)&&!0)}),600)}})),c.a.createElement(x,{hand:"your hand",isWinner:l,exp:u,team:t})};function j(e){var t=Object(n.useContext)(f),a=t.teamB,r=t.isWinner,l=a.reduce((function(e,t){return e+t.exp}),0);return c.a.createElement(x,{hand:"dealer's hand",isWinner:r,exp:l,team:a})}var O=a(10),S=function(e){var t=Object(n.useContext)(f).team;if(t.length>0)for(var a=0;a<t.length;a++)if(e.id===t[a].id)return!0===e.isSelected;return c.a.createElement("div",{className:"pokeCard"},c.a.createElement("div",{className:"flip-card",key:e.id,id:e.id,onClick:function(){e.choosePoke(e.id)},value:e.id},c.a.createElement("div",{className:"flip-card-inner"},c.a.createElement("div",{className:"flip-card-front"},c.a.createElement("p",{className:"exp","data-exp":"".concat(e.exp)}),c.a.createElement("div",{className:"img-wrapper"},c.a.createElement("img",{src:e.src,alt:e.name})),c.a.createElement("h2",{className:"name"},e.name)),c.a.createElement("div",{className:"flip-card-back"},c.a.createElement("img",{src:e.src_back,alt:e.name})))))};var y=function(){var e=Object(n.useContext)(p),t=e.setCurUrl,a=e.setGameStart,r=e.pokes,l=e.setPokes,o=e.setSearch,s=e.perPokes,i=Object(n.useContext)(f),m=i.isWinner,u=i.team,d=i.setTeam,E=i.teamA;function h(e){u.length<3&&(l(r.map((function(t){return t.id===e&&(t.isSelected=!t.isSelected),t}))),d([].concat(Object(O.a)(E),Object(O.a)(r.filter((function(e){if(e.isSelected)return e})))))),u.length>=2&&(o(""),t("https://pokeapi.co/api/v2/pokemon?offset=0&limit=".concat(s)),a(!0))}return c.a.createElement("section",{className:r.length>s?"pokesDiv scroll-active":"pokesDiv"},void 0===m&&r.map((function(e){return c.a.createElement(S,{key:e.id,id:e.id,src:e.src,height:e.height,weight:e.weight,name:e.name,exp:e.exp,isSelected:e.isSelected,src_back:e.src_back,choosePoke:h})})))},w=function(e){return c.a.createElement("div",{dangerouslySetInnerHTML:{__html:'<iframe width="0" height="0" src="https://www.youtube.com/embed/vX1xq4Ud2z8?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'}})};a(40);var C=function(e){var t=Object(n.useContext)(p),a=t.setCurUrl,r=t.gameStart,l=t.setGameStart,o=t.setLoading,s=t.perPokes,i=Object(n.useContext)(f),m=i.isWinner,u=i.setIsWinner,d=i.setTeam,E=i.setTeamA,h=i.setTeamB;return c.a.createElement("div",{className:"play-pannel"},c.a.createElement("div",{className:void 0!==m?"top-div top-div-active":"top-div"},c.a.createElement(j,null),!r&&c.a.createElement("p",{className:"remark"},"Choose Three Pokemons"),void 0!==m&&c.a.createElement("div",{className:"winlose-div"},c.a.createElement("h1",{className:"text-shadow",style:{color:!0===m&&"var(--yellow)"}},m?"WINNER!!!!!!!!":"LOSER!!!!!!!!"),c.a.createElement("button",{className:"replayBtn",onClick:function(){o(!0),a("https://pokeapi.co/api/v2/pokemon?offset=0&limit=".concat(s)),u(),l(!1),d([]),E([]),h([])}},c.a.createElement("i",{className:"fas fa-redo"}))),c.a.createElement(w,null),c.a.createElement(N,null)),c.a.createElement("div",{className:"play-zone"},r&&void 0===m?c.a.createElement("button",{className:"startBtn",disabled:!0},"Game Start!!!!!"):c.a.createElement("div",null),c.a.createElement(y,null),!r&&c.a.createElement(k,null)))},_=a(9),F=a.n(_),P=Object(n.createContext)();function T(e){var t=Object(n.useContext)(f),a=t.team,r=t.teamB,l=t.isWinner,o=Object(n.useState)([]),s=Object(d.a)(o,2),i=s[0],m=s[1],u=Object(n.useState)([]),p=Object(d.a)(u,2),E=p[0],h=p[1];return Object(n.useEffect)((function(){r.length>=3&&(m([].concat(Object(O.a)(i),[{yourScore:a.reduce((function(e,t){return e+t.exp}),0),dealerScore:r.reduce((function(e,t){return e+t.exp}),0),win:l,date:(new Date).toLocaleDateString()+" "+(new Date).toLocaleTimeString("en",{hour:"2-digit",minute:"2-digit"})}])),h([].concat(Object(O.a)(E),[{yourTeam:a,dealersTeam:r}])))}),[l]),c.a.createElement(P.Provider,{value:{teams:E,setTeams:h,scores:i,setScores:m}},c.a.createElement(c.a.Fragment,null,e.children))}var W=function(e){return c.a.createElement("ul",{className:"round",key:F()()},c.a.createElement("li",null,e.date),c.a.createElement("li",null,e.round),c.a.createElement("li",null,e.yourScore),c.a.createElement("li",null,e.dealerScore),c.a.createElement("li",null,e.yourScore>e.dealerScore?c.a.createElement("i",{className:"fas fa-trophy"}):c.a.createElement("i",{className:"fas fa-tired"})),c.a.createElement("li",null,c.a.createElement(o.b,{to:"scoresheet/detail/round_".concat(e.round)},c.a.createElement("i",{className:"fas fa-book"}))))};a(43);var B=function(e){var t=Object(n.useContext)(P).scores;return c.a.createElement("div",{className:"ScoreSheet"},c.a.createElement("h1",null,"Pokemon Game"),c.a.createElement("h2",null,"Score Sheet"),c.a.createElement("section",{className:"table"},c.a.createElement("ul",{className:"top-div"},c.a.createElement("li",{className:"title"}),c.a.createElement("li",{className:"title"}),c.a.createElement("li",{className:"score"},"score"),c.a.createElement("li",{className:"win-lose"},"win lose"),c.a.createElement("li",{className:"detail"},"detail"),c.a.createElement("li",null,"date"),c.a.createElement("li",null,"round"),c.a.createElement("li",null,"you"),c.a.createElement("li",null,"dealer")),c.a.createElement("ul",{className:"data-div"},t.map((function(e,t){return c.a.createElement(W,{id:t,yourScore:e.yourScore,dealerScore:e.dealerScore,win:e.isWinner,key:F()(),round:t+1,date:e.date})})))))};var U=function(e){var t=e.team,a=e.title,n=e.score;return console.log(t),c.a.createElement("div",{className:"members"},c.a.createElement("h1",null,a),c.a.createElement("h1",null,"total score: ".concat(n)),t.map((function(e){return c.a.createElement("div",{key:F()(),className:"member"},c.a.createElement("img",{src:e.src,alt:e.name}),c.a.createElement("img",{src:e.src_back,alt:e.name}),c.a.createElement("div",{className:"info-div"},c.a.createElement("p",null,e.name),c.a.createElement("p",null,"exp: ".concat(e.exp)),c.a.createElement("p",null,"height: ".concat(e.height)),c.a.createElement("p",null,"weight: ".concat(e.weight))))})))};var q=function(e){var t=Object(n.useContext)(P),a=t.teams,r=t.scores,l=e.match.params.round,o=Number(l.replace("round_",""))-1;return c.a.createElement("div",{id:o,className:"detail-frame"},c.a.createElement("h1",null,"round ".concat(l)),!0===r[o].win&&c.a.createElement("i",{className:"fas fa-trophy"}),c.a.createElement("section",null,c.a.createElement(U,{team:a[o].yourTeam,title:"your  hand",score:r[o].yourScore}),c.a.createElement(U,{team:a[o].dealersTeam,title:"dealer's hand",score:r[o].dealerScore})),c.a.createElement("button",{onClick:e.history.goBack,className:"index-btn"},"Back"))};var A=Object(s.f)((function(e){return c.a.createElement("div",{className:"bg",style:{backgroundImage:"url(".concat(e.location.pathname.indexOf("score")>0?"https://cdn.pixabay.com/photo/2016/09/08/15/18/textured-1654610__340.jpg":e.location.pathname.indexOf("play")>0?"https://cdn.pixabay.com/photo/2017/06/02/10/28/cartoons-2365895__340.jpg":"https://cdn.pixabay.com/photo/2020/04/23/20/13/space-5083905_960_720.jpg",")")},onClick:e.openFullscreen},c.a.createElement("div",{className:"rotate-div"},c.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Ic_screen_rotation_48px.svg/1024px-Ic_screen_rotation_48px.svg.png",alt:"rotate"})))}));var R=function(e){if(Object(n.useContext)(p).loading)return c.a.createElement("div",{className:"loader-wrapper"},c.a.createElement("div",{className:"loader"}));function t(){if(window.screen.availWidth>1100){var e=document.documentElement;e.requestFullscreen?e.requestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.msRequestFullscreen&&e.msRequestFullscreen()}else console.log("screen size under 900px")}return c.a.createElement("div",{className:"GameApp"},c.a.createElement(o.a,null,c.a.createElement(A,{openFullscreen:t}),c.a.createElement(b,{toggleFullScreen:function(e){document.fullscreenElement||document.webkitFullscreenElement||document.mozFullscreenElement||document.msFullscreenElement?document.exitFullscreen().then((function(){return console.log("Document Exited form Full screen mode")})).catch((function(e){return console.error(e)})):document.documentElement.requestFullscreen().catch(console.log)}}),c.a.createElement(s.c,null,c.a.createElement(s.a,{exact:!0,path:"/pokegame",component:function(e){return c.a.createElement(g,{stuff:e,openFullscreen:t})}}),c.a.createElement(s.a,{exact:!0,path:"/pokegame/pokeplay",render:function(){return c.a.createElement(C,null)}}),c.a.createElement(s.a,{exact:!0,path:"/pokegame/scoresheet",component:B}),c.a.createElement(s.a,{exact:!0,path:"/pokegame/scoresheet/detail/:round",component:q}),c.a.createElement(s.a,{component:function(e){return c.a.createElement(g,{stuff:e,openFullscreen:t})}}))))};var I=function(){return c.a.createElement(E,null,c.a.createElement(h,null,c.a.createElement(T,null,c.a.createElement(R,null))))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(I,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.84eca818.chunk.js.map