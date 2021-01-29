(this.webpackJsonpgamekeeper=this.webpackJsonpgamekeeper||[]).push([[0],{38:function(e,t,r){},39:function(e,t,r){},59:function(e,t,r){},60:function(e,t,r){},66:function(e,t,r){},67:function(e,t,r){},68:function(e,t,r){},69:function(e,t,r){},70:function(e,t,r){},71:function(e,t,r){},72:function(e,t,r){"use strict";r.r(t);var n=r(0),c=r(1),a=r.n(c),s=r(31),i=r.n(s),u=(r(38),r(39),r(2)),o=r.n(u),l=r(3),j=r(4),d=function(){return localStorage.getItem("GAMEKEEPER_JWT")},b=function(e){localStorage.setItem("GAMEKEEPER_JWT",e)},p=r(12),m=r.n(p),f=a.a.createContext(void 0),O=r(8),h=r(5),x=(r(59),a.a.createContext(void 0)),v=function(e,t,r){var n="".concat("http://api-gamekeeper.herokuapp.com").concat(t),c={headers:{Authorization:"Bearer ".concat(d())}};switch(e){case"GET":return Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get(n,c);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));case"POST":return Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.post(n,r,c);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));case"PATCH":return Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.patch(n,r,c);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));case"DELETE":return Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.delete(n,c);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))}},g=(r(60),function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),r=t[0],a=t[1],s=Object(c.useState)(""),i=Object(j.a)(s,2),u=i[0],d=i[1],b=Object(c.useState)(!1),p=Object(j.a)(b,2),m=p[0],O=p[1],g=Object(c.useState)(!1),k=Object(j.a)(g,2),_=k[0],N=k[1],w=Object(c.useContext)(f).currentUser,C=Object(c.useContext)(x).fetchUsersGames,S=Object(h.g)(),y=function(){var e=Object(l.a)(o.a.mark((function e(t,r,n){var c,s,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c={title:r,year:n,started:new Date(Date.now()).toDateString(),lastPlayed:new Date(Date.now()).toDateString(),hours:0,completed:!1,completedOn:"",userId:w._id,rogueLike:m},s=v("POST","/games/".concat(w._id),c),e.next=5,s();case 5:return i=e.sent,e.next=8,C(w._id);case 8:return N(!1),a(""),d(""),O(!1),S.push("/gamekeeper/games/".concat(w._id)),e.abrupt("return",i);case 14:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"create-game-form",children:[Object(n.jsx)("div",{className:"app__icon plus",onClick:function(){return N(!_)},title:"Add New Game"}),_&&Object(n.jsxs)("div",{className:"content",children:[Object(n.jsxs)("label",{htmlFor:"",children:["Title:",Object(n.jsx)("input",{type:"text",value:r,onChange:function(e){return a(e.target.value)}})]}),Object(n.jsxs)("label",{htmlFor:"",children:["Release Year:",Object(n.jsx)("input",{type:"text",value:u,onChange:function(e){return d(e.target.value)}})]}),Object(n.jsxs)("label",{htmlFor:"",children:["Rougue-Like?:",Object(n.jsx)("input",{type:"checkbox",checked:m,onChange:function(){O(!m)}})]}),Object(n.jsx)("button",{onClick:function(e){return y(e,r,u)},children:"Create Game"})]})]})}),k=function(){var e=Object(c.useContext)(f),t=e.loggedIn,r=e.currentUser;return Object(n.jsxs)("div",{className:"masthead",children:[Object(n.jsx)("div",{className:"title",children:"Gamekeeper"}),t?Object(n.jsxs)("div",{className:"logged-in",children:[Object(n.jsx)(O.b,{to:"/gamekeeper/users/search",children:Object(n.jsx)("div",{className:"app__icon mag",title:"Find A Friend"})}),Object(n.jsx)(O.b,{to:"/gamekeeper/friends",children:Object(n.jsx)("div",{className:"app__icon star",title:"My Friends"})}),Object(n.jsx)(g,{}),Object(n.jsxs)("span",{title:"My Games",children:["Welcome,"," ",Object(n.jsx)(O.b,{to:"/gamekeeper/games/".concat(r._id),children:r.userName})]})]}):Object(n.jsxs)("div",{className:"login",children:[Object(n.jsx)(O.b,{to:"/gamekeeper/login",children:"Login"}),Object(n.jsx)(O.b,{to:"/gamekeeper/register",children:"Register"})]})]})},_=(r(66),function(e){var t,r,a;switch(e.type){case"login":t="Log In",r="Log In",a="".concat("http://api-gamekeeper.herokuapp.com","/users/login");break;case"register":t="Create Account",r="Submit",a="".concat("http://api-gamekeeper.herokuapp.com","/users")}var s=function(e){var t=Object(c.useContext)(f),r=t.setLoggedIn,n=t.loggedIn,a=t.currentUser,s=t.setCurrentUser,i=Object(c.useState)(""),u=Object(j.a)(i,2),d=u[0],p=u[1],O=Object(c.useState)(""),x=Object(j.a)(O,2),v=x[0],g=x[1],k=Object(c.useState)(""),_=Object(j.a)(k,2),N=_[0],w=_[1],C=Object(h.g)();return{onSubmit:function(){var t=Object(l.a)(o.a.mark((function t(n){var c,a,i,u;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),c={userName:d,password:v},t.prev=2,t.next=5,m.a.post(e,c);case 5:a=t.sent,i=a.data.accessToken,u=a.data.currentUser,i&&(s(u),b(i),r(!0),C.push("/gamekeeper/games/".concat(u._id))),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(2),w(t.t0.message);case 14:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(e){return t.apply(this,arguments)}}(),loggedIn:n,currentUser:a,userName:d,setUserName:p,password:v,setPassword:g,error:N,setError:w}}(a),i=s.onSubmit,u=s.error,d=s.setUserName,p=s.userName,O=s.setPassword,x=s.password;return Object(n.jsx)("div",{className:"user-form",children:Object(n.jsxs)("form",{onSubmit:function(e){return i(e)},children:[Object(n.jsx)("div",{children:t}),Object(n.jsx)("div",{className:"error ".concat(u?"visible":null),children:u}),Object(n.jsxs)("label",{htmlFor:"username",children:["Username",Object(n.jsx)("input",{type:"text",onChange:function(e){return d(e.target.value)},value:p})]}),Object(n.jsxs)("label",{htmlFor:"password",children:["Password",Object(n.jsx)("input",{type:"password",onChange:function(e){return O(e.target.value)},value:x})]}),Object(n.jsx)("button",{type:"submit",children:r})]})})}),N=r(21),w=(r(67),function(e){var t=new Audio(e);return function(e){var r=e.children;return Object(n.jsx)("div",{onClick:function(e){return function(e){e.preventDefault(),t.play()}(e)},children:r})}}),C=function(e){var t=e.completed,r=e.game,a=e.setGames,s=Object(c.useState)(t),i=Object(j.a)(s,2),u=i[0],d=i[1],b=Object(c.useState)(r.hours),p=Object(j.a)(b,2),m=p[0],O=p[1],h=Object(c.useState)(r.lastPlayed),x=Object(j.a)(h,2),g=x[0],k=x[1],_=u?"completed":null,N=r.rogueLike?"brick":"question",C=w("/smw_coin.wav"),S=Object(c.useContext)(f),y=S.loggedIn,U=S.currentUser,D=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),O(n=m+.5),k(new Date(Date.now()).toDateString()),c=v("PATCH","/games/".concat(r._id),{hours:n}),e.next=7,c();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=v("PATCH","/games/".concat(r._id),{completed:!u,completedOn:new Date(Date.now()).toDateString()}),c=v("GET","/games/".concat(U._id)),e.next=5,n();case 5:d(!u),setTimeout(Object(l.a)(o.a.mark((function e(){var t,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c();case 2:t=e.sent,r=t.data.games,a(r);case 5:case"end":return e.stop()}}),e)}))),2e3);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=y&&r.userId===U._id;return Object(n.jsx)("div",{className:"block "+_+" "+N,children:Object(n.jsxs)("div",{className:"block__flex",children:[Object(n.jsxs)("div",{className:"title",children:[Object(n.jsx)("h1",{children:r.title}),Object(n.jsx)("div",{children:r.year})]}),Object(n.jsxs)("div",{children:[Object(n.jsxs)("label",{className:"block__label",children:["Started On:",Object(n.jsx)("div",{className:"block__info",children:r.started})]}),Object(n.jsxs)("label",{className:"block__label",children:["Last Played:",Object(n.jsx)("div",{className:"block__info",children:g})]})]}),Object(n.jsxs)("div",{className:"hours",children:[Object(n.jsxs)("label",{className:"block__label",children:["Hours Played:",Object(n.jsx)("div",{className:"block__info",children:m})]}),!u&&G&&Object(n.jsx)("div",{title:"Add 30 Minutes",className:"app__icon plus",onClick:function(e){D(e)}})]}),u&&Object(n.jsxs)("label",{htmlFor:"",className:"block__label",children:["Completed:",Object(n.jsx)("div",{className:"block__info",children:r.completedOn})]}),u?G&&Object(n.jsx)(C,{children:Object(n.jsxs)("button",{className:"button complete-button complete",onClick:function(e){return I(e)},children:["Resume ",Object(n.jsx)("div",{className:"app__icon one-up"})]})}):G&&Object(n.jsx)(C,{children:Object(n.jsxs)("button",{className:"button complete-button",onClick:function(e){return I(e)},children:["Complete ",Object(n.jsx)("div",{className:"app__icon coin"})]})})]})})},S=(r(68),function(){var e=Object(c.useContext)(x),t=e.games,r=e.fetchUsersGames,a=e.user,s=e.setGames,i=Object(h.h)().userId,u=Object(c.useContext)(f),j=u.setCurrentUser,d=u.currentUser,b=v("PATCH","/users/friend/".concat(i));Object(c.useEffect)((function(){r(i)}),[i]);var p=Object(c.useMemo)((function(){if(t&&t.length>0){var e=t.filter((function(e){return!1===e.completed})),r=t.filter((function(e){return!0===e.completed}));return[].concat(Object(N.a)(e),Object(N.a)(r))}return[]}),[t]),m=function(){var e=Object(l.a)(o.a.mark((function e(){var t,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:t=e.sent,r=t.data,j(r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=i!==d._id,g=d.friends.includes(i),k=O&&!g;return Object(n.jsxs)("div",{className:"games-page center",children:[Object(n.jsxs)("div",{className:"header",children:[k&&Object(n.jsx)("div",{className:"app__icon plus",onClick:function(){return m()},title:"Add This User to My Friends"}),g&&Object(n.jsx)("div",{className:"app__icon star",title:"".concat(a.userName," is your friend")}),a.userName&&Object(n.jsxs)("div",{className:"username",children:[a.userName,"'s Games"]})]}),Object(n.jsx)("div",{className:"blocks",children:t&&p.map((function(e){return Object(n.jsx)(C,{game:e,completed:e.completed,setGames:s},e._id)}))})]})}),y=(r(69),function(e){var t=e.friend,r=Object(c.useContext)(f),a=r.setCurrentUser,s=r.loggedIn,i=r.currentUser,u=s&&i.friends.includes(t._id),j=Object(h.g)(),d=v("PATCH","/users/unfriend/".concat(t._id)),b=v("PATCH","/users/friend/".concat(t._id)),p=function(){var e=Object(l.a)(o.a.mark((function e(t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,d();case 3:r=e.sent,a(r.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(l.a)(o.a.mark((function e(t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,b();case 3:r=e.sent,a(r.data),j.push("/gamekeeper/friends");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsx)("div",{className:"friend",children:Object(n.jsxs)("div",{className:"header",children:[Object(n.jsx)("div",{className:"app__icon mario"}),Object(n.jsx)(O.b,{to:"/gamekeeper/games/".concat(t._id),children:Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"username",children:t.userName}),Object(n.jsx)("div",{children:new Date(t.createdAt).toDateString()})]})}),u?Object(n.jsx)("div",{className:"app__icon goomba",onClick:function(e){return p(e)},title:"Remove From Friends"}):Object(n.jsx)("div",{className:"app__icon plus",onClick:function(e){return m(e)},title:"Add Friend"})]})})}),U=(r(70),function(){var e=Object(c.useContext)(f).currentUser,t=Object(c.useState)([]),r=Object(j.a)(t,2),a=r[0],s=r[1];return Object(c.useEffect)((function(){(function(){var t=Object(l.a)(o.a.mark((function t(){var r,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=v("GET","/users/friends/".concat(e._id)),t.next=3,r();case 3:n=t.sent,s(n.data);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(n.jsxs)("div",{className:"friends-page",children:[Object(n.jsxs)("div",{className:"header",children:[e.userName,"'s Friends"]}),Object(n.jsx)("div",{className:"friends",children:a.map((function(e){return Object(n.jsx)(y,{friend:e},e._id)}))})]})}),D=(r(71),function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),r=t[0],a=t[1],s=Object(c.useState)(""),i=Object(j.a)(s,2),u=i[0],d=i[1],b=Object(c.useContext)(f).currentUser,p=v("GET","/users/search?q=".concat(u)),m=function(){var e=Object(l.a)(o.a.mark((function e(t){var r,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,p();case 3:r=e.sent,n=r.data,a(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"search-page",children:[Object(n.jsxs)("form",{onSubmit:function(e){return m(e)},children:[Object(n.jsxs)("label",{htmlFor:"",children:["Search Users:",Object(n.jsx)("input",{type:"text",onChange:function(e){return d(e.target.value)}})]}),Object(n.jsxs)("button",{type:"submit",children:["Search Friends ",Object(n.jsx)("div",{className:"app__icon mag"})]})]}),Object(n.jsx)("div",{className:"results",children:r.map((function(e){return e._id===b._id?null:Object(n.jsx)(y,{friend:e})}))})]})}),I=function(){var e=Object(c.useContext)(f).loggedIn,t=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),r=t[0],n=t[1],a=Object(c.useState)({userName:""}),s=Object(j.a)(a,2),i=s[0],u=s[1],d=function(){var e=Object(l.a)(o.a.mark((function e(t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("".concat("http://api-gamekeeper.herokuapp.com","/games/").concat(t));case 2:r=e.sent,n(r.data.games),u(r.data.user[0]);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return{games:r,setGames:n,fetchUsersGames:d,user:i}}(),r=t.games,a=t.setGames,s=t.fetchUsersGames,i=t.user;return Object(n.jsx)(x.Provider,{value:{games:r,setGames:a,fetchUsersGames:s,user:i},children:Object(n.jsxs)(O.a,{children:[Object(n.jsx)(k,{}),Object(n.jsxs)(h.d,{children:[Object(n.jsx)(h.b,{path:"/gamekeeper/games/:userId",children:Object(n.jsx)(S,{})}),Object(n.jsx)(h.b,{path:"/gamekeeper/users/search",children:Object(n.jsx)(D,{})}),e?Object(n.jsx)(h.a,{to:"/gamekeeper/games",from:"/gamekeeper/login"}):Object(n.jsx)(h.b,{path:"/gamekeeper/login",children:Object(n.jsx)(_,{type:"login"})}),e?Object(n.jsx)(h.b,{path:"/gamekeeper/friends",children:Object(n.jsx)(U,{})}):Object(n.jsx)(h.a,{to:"/gamekeeper/games",from:"/gamekeeper/friends"}),e?Object(n.jsx)(h.a,{to:"/gamekeeper/games",from:"/gamekeeper/register"}):Object(n.jsx)(h.b,{path:"/gamekeeper/register",children:Object(n.jsx)(_,{type:"register"})})]})]})})};var G=function(){var e=function(){var e=Object(c.useState)({userName:"",_id:void 0,friends:[]}),t=Object(j.a)(e,2),r=t[0],n=t[1],a=Object(c.useState)(!1),s=Object(j.a)(a,2),i=s[0],u=s[1],b=function(){var e=Object(l.a)(o.a.mark((function e(){var t,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=d())){e.next=12;break}return e.next=4,m.a.post("".concat("http://api-gamekeeper.herokuapp.com","/users/validate"),{accessToken:t});case 4:if(r=e.sent,!(c=r.data)){e.next=11;break}n(c),u(!0),e.next=12;break;case 11:return e.abrupt("return");case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{UserContext:f,currentUser:r,setCurrentUser:n,validateUser:b,loggedIn:i,setLoggedIn:u}}(),t=e.currentUser,r=e.setCurrentUser,a=e.validateUser,s=e.loggedIn,i=e.setLoggedIn;return Object(c.useEffect)((function(){a()}),[]),Object(n.jsx)("div",{className:"App",children:Object(n.jsx)("div",{className:"app__background",children:Object(n.jsx)(f.Provider,{value:{currentUser:t,setCurrentUser:r,loggedIn:s,setLoggedIn:i},children:Object(n.jsx)(I,{})})})})},T=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,73)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;r(e),n(e),c(e),a(e),s(e)}))};i.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(G,{})}),document.getElementById("root")),T()}},[[72,1,2]]]);
//# sourceMappingURL=main.0da9197c.chunk.js.map