(this.webpackJsonpweb_dev_project_2=this.webpackJsonpweb_dev_project_2||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(14),s=c.n(a),i=c(2),l=(c(23),c(24),c(25),c(39),c(40),c(21)),o=c(8),d=c(15),j=c(28),b={shape:["oval","squiggle","diamond"],color:["red","green","blue"],number:[1,2,3],shading:["solid","open","striped"]},u=c.n(j)()(b),h=function(e,t){var c=Object.keys(e)[Math.floor(4*Math.random())],n=Math.floor(3*Math.random());return t.filter((function(t){return t[c]===e[c][n]}))}(b,u);console.log(h);var O=function(e,t){for(var c=[];c.length<t;){var n=Math.floor(Math.random()*e);-1===c.indexOf(n)&&c.push(n)}return c},f=function(e){var t;return t=e===N.EASY?O(27,12):O(81,12),console.log(t),t},m=function(e,t,c){var n,r=[];if(t===N.EASY){var a=Array(27).fill().map((function(e,t){return t})).filter((function(t){return!e.includes(t)})).filter((function(e){return!c.includes(e)})),s=O(a.length,3);for(n=0;n<3;n++)r.push(a[s[n]])}else{var i=Array(81).fill().map((function(e,t){return t})).filter((function(t){return!e.includes(t)})).filter((function(e){return!c.includes(e)})),l=O(i.length,3);for(n=0;n<3;n++)r.push(i[l[n]])}return r},g=function(e,t,c){var n=m(e,t,c),r=e.concat(n);return console.log(r),r},x=function(e,t){if(e.includes(t)){var c=e.indexOf(t);return-1!==c&&e.splice(c,1),e}return e.length>=3||e.push(t),e},v=function(e,t,c,n){var r=m(t,n,c);console.log("EXTRA "+r);var a=t.concat(r);return a=a.filter((function(t){return!e.includes(t)}))},p=function(e,t){for(var c,n=(c=t===N.EASY?h:u)[e[0]],r=c[e[1]],a=c[e[2]],s=[],i=0;i<4;i++)s[i]=n[Object.keys(n)[i]]===r[Object.keys(r)[i]]&&r[Object.keys(r)[i]]===a[Object.keys(a)[i]]&&n[Object.keys(n)[i]]===a[Object.keys(a)[i]]||n[Object.keys(n)[i]]!==r[Object.keys(r)[i]]&&r[Object.keys(r)[i]]!==a[Object.keys(a)[i]]&&n[Object.keys(n)[i]]!==a[Object.keys(a)[i]];return!s.includes(!1)},y=function(e,t){var c=!1;console.log(e);for(var n=0;n<e.length-2;n++)for(var r=n+1;r<e.length-1;r++)for(var a=r+1;a<e.length;a++){var s=[];if(s.push(e[n]),s.push(e[r]),s.push(e[a]),p(s,t))return console.log("There is a set on the board"),console.log(s),c=!0}return console.log("There is no possible set on the board"),c},S=function(e,t){var c=!1;return y(e,t)&&0!==e.length||(console.log("There is no possible set and the game may be over."),c=!0),c},N={EASY:"easy",MEDIUM:"medium",HARD:"hard"},E={difficulty:"",cardBoard:f(N.EASY),userSelect:[],cardBeenSet:[]},k="ADD_THREE_CARDS",C="RESET",B="USER_SELECT_CARDS",A="REPLACE_SET_CARD",w="SELECT_CARD_BE_ZERO",R="CHANGE_DIFFICULTY",_=Object(d.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return Object(o.a)(Object(o.a)({},e),{},{difficulty:t.payload.difficulty});case k:return Object(o.a)(Object(o.a)({},e),{},{cardBoard:t.payload.cardBoard});case C:return Object(o.a)(Object(o.a)({},e),{},{cardBoard:t.payload.cardBoard,cardBeenSet:t.payload.cardBeenSet});case B:var c=Object(o.a)(Object(o.a)({},e),{},{userSelect:Object(l.a)(t.payload.userSelect)});return console.log(c),c;case w:return Object(o.a)(Object(o.a)({},e),{},{userSelect:Object(l.a)(t.payload.userSelect)});case A:return Object(o.a)(Object(o.a)({},e),{},{cardBoard:t.payload.cardBoard,cardBeenSet:t.payload.cardBeenSet});default:return e}})),T=c(10),D=function(e){return{type:R,payload:{difficulty:e}}},I=function(){var e=_.getState().difficulty;return{type:C,payload:{cardBoard:f(e),cardBeenSet:[]}}},M=function(){var e=_.getState().cardBoard,t=_.getState().difficulty,c=_.getState().userSelect,n=_.getState().cardBeenSet.concat(c);return{type:k,payload:{cardBoard:g(e,t,n)}}},Y=function(){return{type:w,payload:{userSelect:[]}}},H=c(0),L=function(){var e=Object(i.b)();return Object(H.jsx)("div",{className:"nav",children:Object(H.jsxs)("div",{className:"row nav-row",children:[Object(H.jsx)("div",{className:"col-sm col",children:Object(H.jsx)(T.b,{to:"/",children:Object(H.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){return e(Y())},children:"Home"})})}),Object(H.jsx)("div",{className:"col-sm col",children:Object(H.jsx)("img",{className:"nav-image",src:"/images/set_cards.png",alt:"Set Card"})}),Object(H.jsx)("div",{className:"col-sm col",children:Object(H.jsx)(T.b,{to:"/rules",children:Object(H.jsx)("button",{type:"button",className:"btn btn-primary",onClick:function(){return e(Y())},children:"Rules"})})})]})})},F=c(11),U=function(){var e,t,c,n=Object(i.b)(),r=function(e){n(D(e)),n(I())};return Object(H.jsx)("div",{className:"main-container",children:Object(H.jsxs)("div",{className:"padding-10",children:[Object(H.jsxs)("div",{children:[Object(H.jsx)("h2",{children:"Welcome!"}),Object(H.jsx)("div",{children:"Choose a level of difficulty below to get started:"})]}),Object(H.jsxs)("div",{className:"padding-30",children:[Object(H.jsx)("div",{className:"row",children:Object(H.jsx)("div",(e={className:"col-sm"},Object(F.a)(e,"className","general-padding"),Object(F.a)(e,"children",Object(H.jsx)(T.b,{to:"/easy",children:Object(H.jsx)("button",{type:"button",className:"btn btn-primary btn-lg",onClick:function(){return r(N.EASY)},children:"Easy"})})),e))}),Object(H.jsx)("div",{className:"row",children:Object(H.jsx)("div",(t={className:"col-sm"},Object(F.a)(t,"className","general-padding"),Object(F.a)(t,"children",Object(H.jsx)(T.b,{to:"/medium",children:Object(H.jsx)("button",{type:"button",className:"btn btn-primary btn-lg",onClick:function(){return r(N.MEDIUM)},children:"Medium"})})),t))}),Object(H.jsx)("div",{className:"row",children:Object(H.jsx)("div",(c={className:"col-sm"},Object(F.a)(c,"className","general-padding"),Object(F.a)(c,"children",Object(H.jsx)(T.b,{to:"/hard",children:Object(H.jsx)("button",{type:"button",className:"btn btn-primary btn-lg",onClick:function(){return r(N.HARD)},children:"Hard"})})),c))})]})]})})},P=function(){return Object(H.jsx)("div",{className:"main-container",children:Object(H.jsxs)("div",{className:"text-left",children:[Object(H.jsx)("div",{className:"text-center",children:Object(H.jsx)("h2",{children:"Rules"})}),Object(H.jsx)("p",{children:"The object of the game is to identify a 'Set' of three cards from the cards laid out on the screen. Each card has a variation of the following four features:"}),Object(H.jsxs)("ol",{children:[Object(H.jsx)("li",{children:"COLOR: Each card is red, green, or blue."}),Object(H.jsx)("li",{children:"SHAPE: Each card contains ovals, squiggles, or diamonds."}),Object(H.jsx)("li",{children:"NUMBER: Each card has one, two, or three symbols."}),Object(H.jsx)("li",{children:"SHADING: Each card is solid, open, or striped."})]}),Object(H.jsx)("p",{children:"A 'Set' consists of three cards in which each feature is EITHER the same on each card OR is different on each card. In other words, any feature in the 'Set' of three cards is either common to all three cards or is different on each card."}),Object(H.jsxs)("div",{children:["An example of a set is 3 cards with:",Object(H.jsxs)("ul",{children:[Object(H.jsx)("li",{children:"color: different on each card,"}),Object(H.jsx)("li",{children:"symbol: oval (the same on each card),"}),Object(H.jsx)("li",{children:"number: two (the same on each card),"}),Object(H.jsx)("li",{children:"shading: solid (the same on each card)"})]})]})]})})},q=c(4),G=function(e){var t=Object(i.c)((function(e){return e.userSelect})),c=Object(i.b)(),n=e.shape+"_"+e.shading+"_"+e.color+".png",r=e.shape+"_"+e.shading+"_"+e.color+"_"+e.number,a="card-container";t.includes(e.cardIndex)&&(a+=" highlighted");var s=function(){for(var t=[],c=0;c<e.number;c++)t.push(n);return t}();return Object(H.jsx)("div",{className:a,onClick:function(){return c(function(e){var t=_.getState().userSelect;return{type:B,payload:{userSelect:x(t,e)}}}(e.cardIndex))},children:Object(H.jsx)("a",{children:s.map((function(e,t){return Object(H.jsx)("div",{children:Object(H.jsx)("img",{src:"/images/"+e,alt:n},r)})}))})})},J=function(){var e=Object(i.c)((function(e){return e.cardBoard})),t=Object(i.c)((function(e){return e.difficulty})),c=Object(i.c)((function(e){return e.userSelect})),n=Object(i.b)(),r=function(){3===c.length&&(function(e){for(var c,n=(c=t===N.EASY?h:u)[e[0]],r=c[e[1]],a=c[e[2]],s=[],i=0;i<4;i++)s[i]=n[Object.keys(n)[i]]===r[Object.keys(r)[i]]&&r[Object.keys(r)[i]]===a[Object.keys(a)[i]]&&n[Object.keys(n)[i]]===a[Object.keys(a)[i]]||n[Object.keys(n)[i]]!==r[Object.keys(r)[i]]&&r[Object.keys(r)[i]]!==a[Object.keys(a)[i]]&&n[Object.keys(n)[i]]!==a[Object.keys(a)[i]];return!s.includes(!1)}(c)?(alert("That's a set!"),n(function(){var e=_.getState().userSelect,t=_.getState().cardBoard,c=_.getState().cardBeenSet.concat(e),n=_.getState().difficulty;return console.log("cardboard "+t),console.log("CardInSet "+c),console.log("userselect "+e),n===N.EASY&&c.length+t.length-e.length===27||n!==N.EASY&&c.length+t.length-e.length===81?{type:A,payload:{cardBoard:t.filter((function(t){return!e.includes(t)})),cardBeenSet:c}}:{type:A,payload:{cardBoard:v(e,t,c,n),cardBeenSet:c}}}())):alert("That's not a set!"),n(Y()))};return Object(H.jsxs)("div",{children:[Object(H.jsx)("div",{className:"board",children:Object(H.jsx)("div",{className:"board-container",children:t===N.EASY?e.map((function(e,t){return Object(H.jsx)("div",{className:"cards",children:Object(H.jsx)(G,{shape:h[e].shape,color:h[e].color,shading:h[e].shading,number:h[e].number,cardIndex:e,cardSet:h})})})):e.map((function(e,t){return Object(H.jsx)("div",{className:"cards",children:Object(H.jsx)(G,{shape:u[e].shape,color:u[e].color,number:u[e].number,shading:u[e].shading,cardIndex:e,cardSet:u})})}))})}),Object(H.jsx)("div",{className:"d-grid gap-2 col-6 mx-auto",children:Object(H.jsxs)("button",{className:"btn btn-success",onClick:function(){return r()},disabled:!(3===c.length),children:[" ","Submit!"]})})]})},W=function(e){var t=Object(i.c)((function(e){return e.cardBoard})),c=Object(i.c)((function(e){return e.difficulty})),n=Object(i.c)((function(e){return e.cardBeenSet})),r=Object(i.b)(),a=t.length+n.length>=27;return console.log(a),r(D(N.EASY)),console.log("This level is "+c),Object(H.jsx)("div",{className:"main-container",children:Object(H.jsxs)("div",{className:"game",children:[S(t,c)&&t.length<12?Object(H.jsxs)("div",{children:[Object(H.jsx)("h2",{children:"No more possible set."}),Object(H.jsx)("h1",{children:"Congratulations!"})]}):Object(H.jsx)("div",{className:"board-space",children:Object(H.jsx)(J,{})}),Object(H.jsx)("div",{children:Object(H.jsxs)("div",{className:"row game-row",children:[Object(H.jsx)("div",{className:" col-sm general-padding",children:Object(H.jsx)("button",{className:"btn btn-danger btn-lg pad",onClick:function(){return r(I())},children:"Reset"})}),Object(H.jsx)("div",{className:"col-sm general-padding",children:t.length<=18?Object(H.jsx)("button",{className:"btn btn-info btn-lg pad",onClick:function(){return r(M())},disabled:a,children:"Add 3 Cards"}):""})]})})]})})},X=function(e){var t=Object(i.c)((function(e){return e.cardBoard})),c=Object(i.c)((function(e){return e.difficulty})),n=Object(i.c)((function(e){return e.cardBeenSet})),r=Object(i.b)(),a=t.length+n.length>=81;console.log(a),r(D(N.MEDIUM)),console.log("This level is "+c);var s=y(t,c);return!s&&t.length>=12&&(r(M()),console.log("3 cards have been added"),s=y(t,c)),Object(H.jsx)("div",{className:"main-container",children:Object(H.jsxs)("div",{className:"game",children:[S(t,c)?Object(H.jsxs)("div",{children:[Object(H.jsx)("h2",{children:"No more possible set."}),Object(H.jsx)("h1",{children:"Congratulations!"})]}):Object(H.jsx)("div",{className:"board-space",children:Object(H.jsx)(J,{})}),Object(H.jsx)("div",{children:Object(H.jsxs)("div",{className:"row game-row",children:[Object(H.jsx)("div",{className:"col-sm general-padding",children:Object(H.jsx)("button",{className:"btn btn-danger btn-lg pad",onClick:function(){return r(I())},children:"Reset"})}),Object(H.jsx)("div",{className:"col-sm general-padding",children:t.length<=18?Object(H.jsx)("button",{className:"btn btn-info btn-lg pad",onClick:function(){return r(M())},disabled:a,children:"Add 3 Cards"}):""})]})})]})})},Z=function(e){var t=Object(i.c)((function(e){return e.cardBoard})),c=Object(i.c)((function(e){return e.difficulty})),n=Object(i.c)((function(e){return e.cardBeenSet})),r=Object(i.b)(),a=t.length+n.length>=81;return console.log(a),r(D(N.HARD)),console.log("This level is "+c),Object(H.jsx)("div",{className:"main-container",children:Object(H.jsxs)("div",{className:"game",children:[S(t,c)&&t.length<12?Object(H.jsxs)("div",{children:[Object(H.jsx)("h2",{children:"No more possible set."}),Object(H.jsx)("h1",{children:"Congratulations!"})]}):Object(H.jsx)("div",{className:"board-space",children:Object(H.jsx)(J,{})}),Object(H.jsx)("div",{children:Object(H.jsxs)("div",{className:"row game-row",children:[Object(H.jsx)("div",{className:"col-sm general-padding",children:Object(H.jsx)("button",{className:"btn btn-danger btn-lg pad",onClick:function(){return r(I())},children:"Reset"})}),Object(H.jsx)("div",{className:"col-sm general-padding",children:t.length<=18?Object(H.jsx)("button",{className:"btn btn-info btn-lg pad",onClick:function(){return r(M())},disabled:a,children:"Add 3 Cards"}):""})]})})]})})},z=function(){return Object(H.jsx)("div",{className:"main-layout",children:Object(H.jsxs)(T.a,{children:[Object(H.jsx)(L,{}),Object(H.jsxs)(q.c,{children:[Object(H.jsx)(q.a,{path:"/",component:U,exact:!0}),Object(H.jsx)(q.a,{path:"/rules",component:P}),Object(H.jsx)(q.a,{path:"/easy",component:W}),Object(H.jsx)(q.a,{path:"/medium",component:X}),Object(H.jsx)(q.a,{path:"/hard",component:Z})]})]})})},K=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,47)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))};c(45);s.a.render(Object(H.jsx)(r.a.StrictMode,{children:Object(H.jsx)(i.a,{store:_,children:Object(H.jsx)(z,{})})}),document.getElementById("root")),K()}},[[46,1,2]]]);
//# sourceMappingURL=main.d064fda1.chunk.js.map