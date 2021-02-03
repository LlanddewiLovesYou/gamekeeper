(this.webpackJsonpgamekeeper=this.webpackJsonpgamekeeper||[]).push([[0],{38:function(e,t,n){},40:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),a=n.n(c),s=n(31),i=n.n(s),u=(n(38),n(2)),o=n.n(u),l=n(3),d=(n(40),n(4)),j=function(){return localStorage.getItem("GAMEKEEPER_JWT")},b=function(e){localStorage.setItem("GAMEKEEPER_JWT",e)},p=n(12),m=n.n(p),f=a.a.createContext(void 0),O=n(5),h=n(7),x=(n(59),["PlayStation 4","PlayStation 5","Xbox One","Xbox X/S","Nintendo Switch","Nintendo DS","VR / Occulus","PC","iOS","Android"]),v=a.a.createContext(void 0),g=function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)({userName:""}),s=Object(d.a)(a,2),i=s[0],u=s[1],j=function(){var e=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("".concat("http://api-gamekeeper.herokuapp.com","/my-games/").concat(t));case 2:n=e.sent,r(n.data.games),u(n.data.user);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return{games:n,setGames:r,fetchUsersGames:j,user:i}},k=function(e,t,n){var r="".concat("http://api-gamekeeper.herokuapp.com").concat(t),c={headers:{Authorization:"Bearer ".concat(j())}};switch(e){case"GET":return Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get(r,c);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));case"POST":return Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.post(r,n,c);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));case"PATCH":return Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.patch(r,n,c);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));case"DELETE":return Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.delete(r,c);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))}},_=(n(60),function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),i=Object(d.a)(s,2),u=i[0],j=i[1],b=Object(c.useState)(!1),p=Object(d.a)(b,2),m=p[0],h=p[1],g=Object(c.useState)(""),_=Object(d.a)(g,2),N=_[0],w=_[1],y=Object(c.useState)(!1),C=Object(d.a)(y,2),S=C[0],U=C[1],G=Object(c.useContext)(f).currentUser,D=Object(c.useContext)(v).fetchUsersGames,I=Object(O.g)(),P=function(){var e=Object(l.a)(o.a.mark((function e(t,n,r){var c,s,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c={title:n,year:r,rogueLike:m,platform:N},s=k("POST","/my-games/".concat(G._id),{game:c}),e.next=5,s();case 5:return i=e.sent,e.next=8,D(G._id);case 8:return U(!1),a(""),j(""),h(!1),I.push("/gamekeeper/games/".concat(G._id)),e.abrupt("return",i);case 14:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"create-game-form",children:[Object(r.jsx)("div",{className:"app__icon plus",onClick:function(){return U(!S)},title:"Add New Game"}),S&&Object(r.jsxs)("div",{className:"content",children:[Object(r.jsxs)("label",{htmlFor:"",children:["Title:",Object(r.jsx)("input",{type:"text",value:n,onChange:function(e){return a(e.target.value)}})]}),Object(r.jsxs)("label",{htmlFor:"",children:["Release Year:",Object(r.jsx)("input",{type:"text",value:u,onChange:function(e){return j(e.target.value)}})]}),Object(r.jsxs)("label",{htmlFor:"",children:["Platform:",Object(r.jsxs)("select",{onChange:function(e){return w(e.target.value)},children:[Object(r.jsx)("option",{value:"",children:" - "}),x.map((function(e){return Object(r.jsx)("option",{value:e,children:e})}))]})]}),Object(r.jsxs)("label",{htmlFor:"",children:["Rogue-Like?:",Object(r.jsx)("input",{type:"checkbox",checked:m,onChange:function(){h(!m)}})]}),Object(r.jsx)("button",{onClick:function(e){return P(e,n,u)},children:"Create Game"})]})]})}),N=function(){var e=Object(c.useContext)(f),t=e.loggedIn,n=e.currentUser;return Object(r.jsxs)("div",{className:"masthead",children:[Object(r.jsx)("div",{className:"title",children:"Gamekeeper"}),t?Object(r.jsxs)("div",{className:"logged-in",children:[Object(r.jsx)(h.b,{to:"/gamekeeper/users/search",children:Object(r.jsx)("div",{className:"app__icon mag",title:"Find A Friend"})}),Object(r.jsx)(h.b,{to:"/gamekeeper/friends",children:Object(r.jsx)("div",{className:"app__icon star",title:"My Friends"})}),Object(r.jsx)(_,{}),Object(r.jsxs)("span",{title:"My Games",children:["Welcome,"," ",Object(r.jsx)(h.b,{to:"/gamekeeper/games/".concat(null===n||void 0===n?void 0:n._id),children:null===n||void 0===n?void 0:n.userName})]})]}):Object(r.jsxs)("div",{className:"login",children:[Object(r.jsx)(h.b,{to:"/gamekeeper/register",children:"Create New User"}),Object(r.jsx)(h.b,{to:"/gamekeeper/login",children:"Login"})]})]})},w=(n(66),function(e){var t,n,a;switch(e.type){case"login":t="Log In",n="Log In",a="".concat("http://api-gamekeeper.herokuapp.com","/users/login");break;case"register":t="Create Account",n="Submit",a="".concat("http://api-gamekeeper.herokuapp.com","/users")}var s=function(e){var t=Object(c.useContext)(f),n=t.setLoggedIn,r=t.loggedIn,a=t.currentUser,s=t.setCurrentUser,i=Object(c.useState)(""),u=Object(d.a)(i,2),j=u[0],p=u[1],h=Object(c.useState)(""),x=Object(d.a)(h,2),v=x[0],g=x[1],k=Object(c.useState)(""),_=Object(d.a)(k,2),N=_[0],w=_[1],y=Object(O.g)();return{onSubmit:function(){var t=Object(l.a)(o.a.mark((function t(r){var c,a,i,u;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),c={userName:j,password:v},t.prev=2,t.next=5,m.a.post(e,c);case 5:a=t.sent,i=a.data.accessToken,u=a.data.currentUser,i&&(s(u),b(i),n(!0),y.push("/gamekeeper/games/".concat(u._id))),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(2),w(t.t0.message);case 14:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(e){return t.apply(this,arguments)}}(),loggedIn:r,currentUser:a,userName:j,setUserName:p,password:v,setPassword:g,error:N,setError:w}}(a),i=s.onSubmit,u=s.error,j=s.setUserName,p=s.userName,h=s.setPassword,x=s.password;return Object(r.jsx)("div",{className:"user-form",children:Object(r.jsxs)("form",{onSubmit:function(e){return i(e)},children:[Object(r.jsx)("div",{children:t}),Object(r.jsx)("div",{className:"error ".concat(u?"visible":null),children:u}),Object(r.jsxs)("label",{htmlFor:"username",children:["Username",Object(r.jsx)("input",{type:"text",onChange:function(e){return j(e.target.value)},value:p})]}),Object(r.jsxs)("label",{htmlFor:"password",children:["Password",Object(r.jsx)("input",{type:"password",onChange:function(e){return h(e.target.value)},value:x})]}),Object(r.jsx)("button",{type:"submit",children:n})]})})}),y=n(21),C=(n(67),function(e){var t=new Audio(e);return function(e){var n=e.children;return Object(r.jsx)("div",{onClick:function(e){return function(e){e.preventDefault(),t.play()}(e)},children:n})}}),S=(n(68),function(e){var t=e.deleteFunction,n=e.usersGame,a=e.addFunction,s=Object(c.useState)(!1),i=Object(d.a)(s,2),u=i[0],j=i[1],b=function(){var e=Object(l.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(n);case 2:j(!1);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a(t);case 2:j(!1);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"block-menu",children:[Object(r.jsx)("div",{className:"app__icon coin icon",onClick:function(){return j(!u)},title:"Edit/Delete Game"}),u&&Object(r.jsx)("div",{className:"menu",children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{onClick:function(e){return p(e)},children:"Add to My Games"}),n&&Object(r.jsx)("li",{className:"delete",onClick:function(e){return b(e)},children:"Delete"})]})})]})}),U=function(e){var t=e.completed,n=e.game,a=e.setGames,s=Object(c.useState)(t),i=Object(d.a)(s,2),u=i[0],j=i[1],b=Object(c.useState)(n.hours.toString()),p=Object(d.a)(b,2),m=p[0],h=p[1],x=Object(c.useState)(!1),v=Object(d.a)(x,2),g=v[0],_=v[1],N=Object(c.useState)(n.lastPlayed),w=Object(d.a)(N,2),y=w[0],U=w[1],G=u?"completed":null,D=n.rogueLike?"brick":"question",I=C("/smw_coin.wav"),P=Object(c.useContext)(f),T=P.loggedIn,E=P.currentUser,F=Object(O.g)(),A=function(){var e=Object(l.a)(o.a.mark((function e(t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!g){e.next=6;break}return U(new Date(Date.now()).toDateString()),r=k("PATCH","/my-games/".concat(n._id),{hours:parseInt(m)}),e.next=6,r();case 6:_(!g);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(l.a)(o.a.mark((function e(t){var r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r=k("PATCH","/my-games/".concat(n._id),{completed:!u,completedOn:new Date(Date.now()).toDateString()}),c=k("GET","/my-games/".concat(E._id)),e.next=5,r();case 5:j(!u),setTimeout(Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c();case 2:t=e.sent,n=t.data.games,a(n);case 5:case"end":return e.stop()}}),e)}))),2e3);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(l.a)(o.a.mark((function e(t){var r,c,s,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r=k("DELETE","/my-games/".concat(n._id)),c=k("GET","/my-games/".concat(E._id)),e.next=5,r();case 5:return e.next=7,c();case 7:s=e.sent,i=s.data.games,a(i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(l.a)(o.a.mark((function e(t){var r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r={title:n.title,year:n.year,rogueLike:n.rogueLike||!1,started:new Date(Date.now()).toDateString(),lastPlayed:new Date(Date.now()).toDateString(),hours:0,completed:!1,completedOn:"",userId:E._id},c=k("POST","/my-games/".concat(E._id,"?gameId=").concat(n.gameId),r),e.next=5,c();case 5:F.push("/gamekeeper/games/".concat(E._id));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=T&&n.userId===E._id;return Object(r.jsx)("div",{className:"block "+G+" "+D,children:Object(r.jsxs)("div",{className:"block__flex",children:[Object(r.jsxs)("div",{className:"title",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:n.title}),Object(r.jsx)("div",{children:n.platform}),Object(r.jsx)("div",{children:n.year})]}),Object(r.jsx)(S,{deleteFunction:R,usersGame:M,addFunction:H})]}),Object(r.jsxs)("div",{children:[Object(r.jsxs)("label",{className:"block__label",children:["Started On:",Object(r.jsx)("div",{className:"block__info",children:n.started})]}),Object(r.jsxs)("label",{className:"block__label",children:["Last Played:",Object(r.jsx)("div",{className:"block__info",children:y})]})]}),Object(r.jsxs)("div",{className:"hours",children:[Object(r.jsxs)("label",{className:"block__label",children:["Hours Played:",g?Object(r.jsx)("input",{type:"text",value:m,onChange:function(e){return h(e.target.value)}}):Object(r.jsx)("div",{className:"block__info",children:m})]}),!u&&M&&Object(r.jsx)("div",{title:"Add Play Time",className:"app__icon plus",onClick:function(e){A(e)}})]}),u&&Object(r.jsxs)("label",{htmlFor:"",className:"block__label",children:["Completed:",Object(r.jsx)("div",{className:"block__info",children:n.completedOn})]}),u?M&&Object(r.jsx)(I,{children:Object(r.jsxs)("button",{className:"button complete-button complete",onClick:function(e){return L(e)},children:["Resume ",Object(r.jsx)("div",{className:"app__icon one-up"})]})}):M&&Object(r.jsx)(I,{children:Object(r.jsxs)("button",{className:"button complete-button",onClick:function(e){return L(e)},children:["Complete ",Object(r.jsx)("div",{className:"app__icon coin"})]})})]})})},G=(n(69),function(){var e=g(),t=e.games,n=e.fetchUsersGames,a=e.user,s=e.setGames,i=Object(O.h)().userId,u=Object(c.useContext)(f),d=u.setCurrentUser,j=u.currentUser,b=k("PATCH","/users/friend/".concat(i));Object(c.useEffect)((function(){n(i)}),[i]);var p=Object(c.useMemo)((function(){if(t&&t.length>0){var e=t.filter((function(e){return!1===e.completed})),n=t.filter((function(e){return!0===e.completed}));return[].concat(Object(y.a)(e),Object(y.a)(n))}return[]}),[t]),m=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:t=e.sent,n=t.data,d(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=i!==j._id,x=j.friends.includes(i),v=h&&!x;return Object(r.jsxs)("div",{className:"games-page center",children:[Object(r.jsxs)("div",{className:"header",children:[v&&Object(r.jsx)("div",{className:"app__icon plus",onClick:function(){return m()},title:"Add This User to My Friends"}),x&&Object(r.jsx)("div",{className:"app__icon star",title:"".concat(a.userName," is your friend")}),a.userName&&Object(r.jsxs)("div",{className:"username",children:[a.userName,"'s Games"]})]}),Object(r.jsx)("div",{className:"blocks",children:t.length>0?p.map((function(e){return Object(r.jsx)(U,{game:e,completed:e.completed,setGames:s},e._id)})):Object(r.jsx)("div",{className:"no-games",children:"Looks like you don't have any games yet! Go add some by clicking the plus sign in the Navbar!"})})]})}),D=(n(70),function(e){var t=e.friend,n=Object(c.useContext)(f),a=n.setCurrentUser,s=n.loggedIn,i=n.currentUser,u=s&&i.friends.includes(t._id),d=Object(O.g)(),j=k("PATCH","/users/unfriend/".concat(t._id)),b=k("PATCH","/users/friend/".concat(t._id)),p=function(){var e=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,j();case 3:n=e.sent,a(n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,b();case 3:n=e.sent,a(n.data),d.push("/gamekeeper/friends");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsx)("div",{className:"friend",children:Object(r.jsxs)("div",{className:"header",children:[Object(r.jsx)("div",{className:"app__icon mario"}),Object(r.jsx)(h.b,{to:"/gamekeeper/games/".concat(t._id),children:Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"username",children:t.userName}),Object(r.jsx)("div",{children:new Date(t.createdAt).toDateString()})]})}),u?Object(r.jsx)("div",{className:"app__icon goomba",onClick:function(e){return p(e)},title:"Remove From Friends"}):Object(r.jsx)("div",{className:"app__icon plus",onClick:function(e){return m(e)},title:"Add Friend"})]})})}),I=(n(71),function(){var e=Object(c.useContext)(f).currentUser,t=Object(c.useState)([]),n=Object(d.a)(t,2),a=n[0],s=n[1];return Object(c.useEffect)((function(){(function(){var t=Object(l.a)(o.a.mark((function t(){var n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=k("GET","/users/friends/".concat(e._id)),t.next=3,n();case 3:r=t.sent,s(r.data);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(r.jsxs)("div",{className:"friends-page",children:[Object(r.jsxs)("div",{className:"header",children:[e.userName,"'s Friends"]}),Object(r.jsx)("div",{className:"friends",children:a.map((function(e){return Object(r.jsx)(D,{friend:e},e._id)}))})]})}),P=(n(72),function(e){var t=e.game,n=Object(c.useContext)(f),a=n.loggedIn,s=n.currentUser,i=g(),u=i.games,d=i.fetchUsersGames,j=Object(O.g)();Object(c.useEffect)((function(){d(s._id)}),[]);var b=a&&!!u.find((function(e){return e.gameId===t._id})),p=k("POST","/my-games/".concat(s._id,"?gameId=").concat(t._id)),m=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,p();case 3:j.push("/gamekeeper/games/".concat(s._id));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsx)("div",{className:"game",children:Object(r.jsxs)("div",{className:"header",children:[Object(r.jsx)("div",{className:"app__icon coin"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"username",children:t.title}),Object(r.jsx)("div",{children:t.platform}),Object(r.jsx)("div",{children:t.year})]}),b?Object(r.jsx)("div",{className:"app__icon"}):Object(r.jsx)("div",{className:"app__icon plus",onClick:function(e){return m(e)},title:"Add Friend"})]})})}),T=(n(73),function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)([]),i=Object(d.a)(s,2),u=i[0],j=i[1],b=Object(c.useState)(""),p=Object(d.a)(b,2),m=p[0],O=p[1],h=Object(c.useContext)(f).currentUser,x=k("GET","/search?q=".concat(m)),v=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,x();case 3:n=e.sent,r=n.data,a(r.userResults),j(r.gameResults);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"search-page",children:[Object(r.jsxs)("form",{onSubmit:function(e){return v(e)},children:[Object(r.jsx)("input",{type:"text",onChange:function(e){return O(e.target.value)}}),Object(r.jsx)("button",{type:"submit",children:"Search Gamekeeper"})]}),Object(r.jsxs)("div",{className:"results",children:[n.length>0&&Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{className:"result-label",children:"Users:"}),n.map((function(e){return e._id===h._id?null:Object(r.jsx)(D,{friend:e})}))]}),u.length>0&&Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{className:"result-label",children:"entries:"}),Object(r.jsx)("div",{className:"entries",children:u.map((function(e){return Object(r.jsx)(P,{game:e})}))})]})]})]})}),E=(n(74),function(){return Object(r.jsxs)("div",{className:"landing-page",children:[Object(r.jsx)("h2",{children:"Hello! Welcome to Gamekeeper!"}),Object(r.jsx)("div",{children:"Gamekeeper was created to help track the games you play in a given year to help facilitate more productive GOTY disscussions"}),Object(r.jsx)("div",{children:"If you're new here, create an account by clicking the link above. If you're already a user, just Login!"})]})}),F=function(){var e=Object(c.useContext)(f).loggedIn,t=g(),n=t.games,a=t.setGames,s=t.fetchUsersGames,i=t.user;return Object(r.jsxs)(v.Provider,{value:{games:n,setGames:a,fetchUsersGames:s,user:i},children:[Object(r.jsx)(N,{}),Object(r.jsxs)(O.d,{children:[Object(r.jsx)(O.b,{exact:!0,path:"/gamekeeper",children:Object(r.jsx)(E,{})}),Object(r.jsx)(O.b,{path:"/gamekeeper/games/:userId",children:Object(r.jsx)(G,{})}),Object(r.jsx)(O.b,{path:"/gamekeeper/users/search",children:Object(r.jsx)(T,{})}),e?Object(r.jsx)(O.a,{to:"/gamekeeper/games",from:"/gamekeeper/login"}):Object(r.jsx)(O.b,{path:"/gamekeeper/login",children:Object(r.jsx)(w,{type:"login"})}),e?Object(r.jsx)(O.b,{path:"/gamekeeper/friends",children:Object(r.jsx)(I,{})}):Object(r.jsx)(O.a,{to:"/gamekeeper/games",from:"/gamekeeper/friends"}),e?Object(r.jsx)(O.a,{to:"/gamekeeper/games",from:"/gamekeeper/register"}):Object(r.jsx)(O.b,{path:"/gamekeeper/register",children:Object(r.jsx)(w,{type:"register"})})]})]})};var A=function(){var e=function(){var e=Object(c.useState)({userName:"",_id:void 0,friends:[]}),t=Object(d.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!1),s=Object(d.a)(a,2),i=s[0],u=s[1],b=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=j())){e.next=12;break}return e.next=4,m.a.post("".concat("http://api-gamekeeper.herokuapp.com","/users/validate"),{accessToken:t});case 4:if(n=e.sent,!(c=n.data)){e.next=11;break}r(c),u(!0),e.next=12;break;case 11:return e.abrupt("return");case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{UserContext:f,currentUser:n,setCurrentUser:r,validateUser:b,loggedIn:i,setLoggedIn:u}}(),t=e.currentUser,n=e.setCurrentUser,a=e.validateUser,s=e.loggedIn,i=e.setLoggedIn,u=Object(O.g)(),b=null===t||void 0===t?void 0:t._id;return Object(c.useEffect)((function(){(function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a();case 2:u.push("/gamekeeper");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[b]),Object(r.jsx)("div",{className:"App",children:Object(r.jsx)("div",{className:"app__background",children:Object(r.jsx)(f.Provider,{value:{currentUser:t,setCurrentUser:n,loggedIn:s,setLoggedIn:i},children:Object(r.jsx)(F,{})})})})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,76)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(h.a,{children:Object(r.jsx)(A,{})})}),document.getElementById("root")),L()}},[[75,1,2]]]);
//# sourceMappingURL=main.04796d6d.chunk.js.map