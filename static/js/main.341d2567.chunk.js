(this.webpackJsonpgamekeeper=this.webpackJsonpgamekeeper||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),a=n.n(c),s=n(31),i=n.n(s),u=(n(38),n(39),n(2)),o=n.n(u),l=n(3),j=n(4),d=function(){return localStorage.getItem("GAMEKEEPER_JWT")},b=function(e){localStorage.setItem("GAMEKEEPER_JWT",e)},p=function(){return console.log("production"),"http://api-gamekeeper.herokuapp.com"},m=n(12),f=n.n(m),O=a.a.createContext(void 0),x=n(8),h=n(5),v=(n(59),a.a.createContext(void 0)),g=function(e,t,n){var r="".concat(p()).concat(t),c={headers:{Authorization:"Bearer ".concat(d())}};switch(e){case"GET":return Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get(r,c);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));case"POST":return Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post(r,n,c);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));case"PATCH":return Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.patch(r,n,c);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));case"DELETE":return Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.delete(r,c);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))}},k=(n(60),function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),i=Object(j.a)(s,2),u=i[0],d=i[1],b=Object(c.useState)(!1),p=Object(j.a)(b,2),m=p[0],f=p[1],x=Object(c.useState)(!1),k=Object(j.a)(x,2),_=k[0],N=k[1],w=Object(c.useContext)(O).currentUser,C=Object(c.useContext)(v).fetchUsersGames,S=Object(h.g)(),y=function(){var e=Object(l.a)(o.a.mark((function e(t,n,r){var c,s,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c={title:n,year:r,started:new Date(Date.now()).toDateString(),lastPlayed:new Date(Date.now()).toDateString(),hours:0,completed:!1,completedOn:"",userId:w._id,rogueLike:m},s=g("POST","/games/".concat(w._id),c),e.next=5,s();case 5:return i=e.sent,console.log({newGame:i}),e.next=9,C(w._id);case 9:return N(!1),a(""),d(""),f(!1),S.push("/gamekeeper/games/".concat(w._id)),e.abrupt("return",i);case 15:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"create-game-form",children:[Object(r.jsx)("div",{className:"app__icon plus",onClick:function(){return N(!_)},title:"Add New Game"}),_&&Object(r.jsxs)("div",{className:"content",children:[Object(r.jsxs)("label",{htmlFor:"",children:["Title:",Object(r.jsx)("input",{type:"text",value:n,onChange:function(e){return a(e.target.value)}})]}),Object(r.jsxs)("label",{htmlFor:"",children:["Release Year:",Object(r.jsx)("input",{type:"text",value:u,onChange:function(e){return d(e.target.value)}})]}),Object(r.jsxs)("label",{htmlFor:"",children:["Rougue-Like?:",Object(r.jsx)("input",{type:"checkbox",checked:m,onChange:function(){f(!m)}})]}),Object(r.jsx)("button",{onClick:function(e){return y(e,n,u)},children:"Create Game"})]})]})}),_=function(){var e=Object(c.useContext)(O),t=e.loggedIn,n=e.currentUser;return Object(r.jsxs)("div",{className:"masthead",children:[Object(r.jsx)("div",{className:"title",children:"Gamekeeper"}),t?Object(r.jsxs)("div",{className:"logged-in",children:[Object(r.jsx)(x.b,{to:"/gamekeeper/users/search",children:Object(r.jsx)("div",{className:"app__icon mag",title:"Find A Friend"})}),Object(r.jsx)(x.b,{to:"/gamekeeper/friends",children:Object(r.jsx)("div",{className:"app__icon star",title:"My Friends"})}),Object(r.jsx)(k,{}),Object(r.jsxs)("span",{title:"My Games",children:["Welcome,"," ",Object(r.jsx)(x.b,{to:"/gamekeeper/games/".concat(n._id),children:n.userName})]})]}):Object(r.jsxs)("div",{className:"login",children:[Object(r.jsx)(x.b,{to:"/gamekeeper/login",children:"Login"}),Object(r.jsx)(x.b,{to:"/gamekeeper/register",children:"Register"})]})]})},N=(n(66),function(e){var t,n,a;switch(e.type){case"login":t="Log In",n="Log In",a="".concat(p(),"/users/login");break;case"register":t="Create Account",n="Submit",a="".concat(p(),"/users")}console.log({submitUrl:a});var s=function(e){var t=Object(c.useContext)(O),n=t.setLoggedIn,r=t.loggedIn,a=t.currentUser,s=t.setCurrentUser,i=Object(c.useState)(""),u=Object(j.a)(i,2),d=u[0],p=u[1],m=Object(c.useState)(""),x=Object(j.a)(m,2),v=x[0],g=x[1],k=Object(c.useState)(""),_=Object(j.a)(k,2),N=_[0],w=_[1],C=Object(h.g)();return{onSubmit:function(){var t=Object(l.a)(o.a.mark((function t(r){var c,a,i,u;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),c={userName:d,password:v},t.prev=2,t.next=5,f.a.post(e,c);case 5:a=t.sent,i=a.data.accessToken,u=a.data.currentUser,i&&(s(u),b(i),n(!0),C.push("/gamekeeper/games/".concat(u._id))),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(2),w(t.t0.message);case 14:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(e){return t.apply(this,arguments)}}(),loggedIn:r,currentUser:a,userName:d,setUserName:p,password:v,setPassword:g,error:N,setError:w}}(a),i=s.onSubmit,u=s.error,d=s.setUserName,m=s.userName,x=s.setPassword,v=s.password;return Object(r.jsx)("div",{className:"user-form",children:Object(r.jsxs)("form",{onSubmit:function(e){return i(e)},children:[Object(r.jsx)("div",{children:t}),Object(r.jsx)("div",{className:"error ".concat(u?"visible":null),children:u}),Object(r.jsxs)("label",{htmlFor:"username",children:["Username",Object(r.jsx)("input",{type:"text",onChange:function(e){return d(e.target.value)},value:m})]}),Object(r.jsxs)("label",{htmlFor:"password",children:["Password",Object(r.jsx)("input",{type:"password",onChange:function(e){return x(e.target.value)},value:v})]}),Object(r.jsx)("button",{type:"submit",children:n})]})})}),w=n(21),C=(n(67),function(e){var t=new Audio(e);return function(e){var n=e.children;return Object(r.jsx)("div",{onClick:function(e){return function(e){e.preventDefault(),t.play()}(e)},children:n})}}),S=function(e){var t=e.completed,n=e.game,a=e.setGames,s=Object(c.useState)(t),i=Object(j.a)(s,2),u=i[0],d=i[1],b=Object(c.useState)(n.hours),p=Object(j.a)(b,2),m=p[0],f=p[1],x=Object(c.useState)(n.lastPlayed),h=Object(j.a)(x,2),v=h[0],k=h[1],_=u?"completed":null,N=n.rogueLike?"brick":"question",w=C("/smw_coin.wav"),S=Object(c.useContext)(O),y=S.loggedIn,U=S.currentUser,D=function(){var e=Object(l.a)(o.a.mark((function e(t){var r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),f(r=m+.5),k(new Date(Date.now()).toDateString()),c=g("PATCH","/games/".concat(n._id),{hours:r}),e.next=7,c();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(l.a)(o.a.mark((function e(t){var r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),r=g("PATCH","/games/".concat(n._id),{completed:!u,completedOn:new Date(Date.now()).toDateString()}),c=g("GET","/games/".concat(U._id)),e.next=5,r();case 5:d(!u),setTimeout(Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c();case 2:t=e.sent,n=t.data.games,a(n);case 5:case"end":return e.stop()}}),e)}))),2e3);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=y&&n.userId===U._id;return Object(r.jsx)("div",{className:"block "+_+" "+N,children:Object(r.jsxs)("div",{className:"block__flex",children:[Object(r.jsxs)("div",{className:"title",children:[Object(r.jsx)("h1",{children:n.title}),Object(r.jsx)("div",{children:n.year})]}),Object(r.jsxs)("div",{children:[Object(r.jsxs)("label",{className:"block__label",children:["Started On:",Object(r.jsx)("div",{className:"block__info",children:n.started})]}),Object(r.jsxs)("label",{className:"block__label",children:["Last Played:",Object(r.jsx)("div",{className:"block__info",children:v})]})]}),Object(r.jsxs)("div",{className:"hours",children:[Object(r.jsxs)("label",{className:"block__label",children:["Hours Played:",Object(r.jsx)("div",{className:"block__info",children:m})]}),!u&&I&&Object(r.jsx)("div",{title:"Add 30 Minutes",className:"app__icon plus",onClick:function(e){D(e)}})]}),u&&Object(r.jsxs)("label",{htmlFor:"",className:"block__label",children:["Completed:",Object(r.jsx)("div",{className:"block__info",children:n.completedOn})]}),u?I&&Object(r.jsx)(w,{children:Object(r.jsxs)("button",{className:"button complete-button complete",onClick:function(e){return G(e)},children:["Resume ",Object(r.jsx)("div",{className:"app__icon one-up"})]})}):I&&Object(r.jsx)(w,{children:Object(r.jsxs)("button",{className:"button complete-button",onClick:function(e){return G(e)},children:["Complete ",Object(r.jsx)("div",{className:"app__icon coin"})]})})]})})},y=(n(68),function(){var e=Object(c.useContext)(v),t=e.games,n=e.fetchUsersGames,a=e.user,s=e.setGames,i=Object(h.h)().userId,u=Object(c.useContext)(O),j=u.setCurrentUser,d=u.currentUser,b=g("PATCH","/users/friend/".concat(i));Object(c.useEffect)((function(){n(i)}),[i]),console.log({user:a});var p=Object(c.useMemo)((function(){if(t&&t.length>0){var e=t.filter((function(e){return!1===e.completed})),n=t.filter((function(e){return!0===e.completed}));return[].concat(Object(w.a)(e),Object(w.a)(n))}return[]}),[t]),m=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:t=e.sent,n=t.data,j(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=i!==d._id,x=d.friends.includes(i),k=f&&!x;return Object(r.jsxs)("div",{className:"games-page center",children:[Object(r.jsxs)("div",{className:"header",children:[k&&Object(r.jsx)("div",{className:"app__icon plus",onClick:function(){return m()},title:"Add This User to My Friends"}),x&&Object(r.jsx)("div",{className:"app__icon star",title:"".concat(a.userName," is your friend")}),a.userName&&Object(r.jsxs)("div",{className:"username",children:[a.userName,"'s Games"]})]}),Object(r.jsx)("div",{className:"blocks",children:t&&p.map((function(e){return Object(r.jsx)(S,{game:e,completed:e.completed,setGames:s},e._id)}))})]})}),U=(n(69),function(e){var t=e.friend,n=Object(c.useContext)(O),a=n.setCurrentUser,s=n.loggedIn,i=n.currentUser,u=s&&i.friends.includes(t._id),j=Object(h.g)(),d=g("PATCH","/users/unfriend/".concat(t._id)),b=g("PATCH","/users/friend/".concat(t._id)),p=function(){var e=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,d();case 3:n=e.sent,a(n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,b();case 3:n=e.sent,a(n.data),j.push("/gamekeeper/friends");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsx)("div",{className:"friend",children:Object(r.jsxs)("div",{className:"header",children:[Object(r.jsx)("div",{className:"app__icon mario"}),Object(r.jsx)(x.b,{to:"/gamekeeper/games/".concat(t._id),children:Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"username",children:t.userName}),Object(r.jsx)("div",{children:new Date(t.createdAt).toDateString()})]})}),u?Object(r.jsx)("div",{className:"app__icon goomba",onClick:function(e){return p(e)},title:"Remove From Friends"}):Object(r.jsx)("div",{className:"app__icon plus",onClick:function(e){return m(e)},title:"Add Friend"})]})})}),D=(n(70),function(){var e=Object(c.useContext)(O).currentUser,t=Object(c.useState)([]),n=Object(j.a)(t,2),a=n[0],s=n[1];return Object(c.useEffect)((function(){(function(){var t=Object(l.a)(o.a.mark((function t(){var n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=g("GET","/users/friends/".concat(e._id)),t.next=3,n();case 3:r=t.sent,s(r.data);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(r.jsxs)("div",{className:"friends-page",children:[Object(r.jsxs)("div",{className:"header",children:[e.userName,"'s Friends"]}),Object(r.jsx)("div",{className:"friends",children:a.map((function(e){return Object(r.jsx)(U,{friend:e},e._id)}))})]})}),G=(n(71),function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),i=Object(j.a)(s,2),u=i[0],d=i[1],b=Object(c.useContext)(O).currentUser,p=g("GET","/users/search?q=".concat(u)),m=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,p();case 3:n=e.sent,r=n.data,a(r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"search-page",children:[Object(r.jsxs)("form",{onSubmit:function(e){return m(e)},children:[Object(r.jsxs)("label",{htmlFor:"",children:["Search Users:",Object(r.jsx)("input",{type:"text",onChange:function(e){return d(e.target.value)}})]}),Object(r.jsxs)("button",{type:"submit",children:["Search Friends ",Object(r.jsx)("div",{className:"app__icon mag"})]})]}),Object(r.jsx)("div",{className:"results",children:n.map((function(e){return e._id===b._id?null:Object(r.jsx)(U,{friend:e})}))})]})}),I=function(){var e=Object(c.useContext)(O).loggedIn,t=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)({userName:""}),s=Object(j.a)(a,2),i=s[0],u=s[1],d=function(){var e=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat(p(),"/games/").concat(t));case 2:n=e.sent,r(n.data.games),u(n.data.user[0]);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return{games:n,setGames:r,fetchUsersGames:d,user:i}}(),n=t.games,a=t.setGames,s=t.fetchUsersGames,i=t.user;return Object(r.jsx)(v.Provider,{value:{games:n,setGames:a,fetchUsersGames:s,user:i},children:Object(r.jsxs)(x.a,{children:[Object(r.jsx)(_,{}),Object(r.jsxs)(h.d,{children:[Object(r.jsx)(h.b,{path:"/gamekeeper/games/:userId",children:Object(r.jsx)(y,{})}),Object(r.jsx)(h.b,{path:"/gamekeeper/users/search",children:Object(r.jsx)(G,{})}),e?Object(r.jsx)(h.a,{to:"/gamekeeper/games",from:"/gamekeeper/login"}):Object(r.jsx)(h.b,{path:"/gamekeeper/login",children:Object(r.jsx)(N,{type:"login"})}),e?Object(r.jsx)(h.b,{path:"/gamekeeper/friends",children:Object(r.jsx)(D,{})}):Object(r.jsx)(h.a,{to:"/gamekeeper/games",from:"/gamekeeper/friends"}),e?Object(r.jsx)(h.a,{to:"/gamekeeper/games",from:"/gamekeeper/register"}):Object(r.jsx)(h.b,{path:"/gamekeeper/register",children:Object(r.jsx)(N,{type:"register"})})]})]})})};var T=function(){var e=function(){var e=Object(c.useState)({userName:"",_id:void 0,friends:[]}),t=Object(j.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!1),s=Object(j.a)(a,2),i=s[0],u=s[1],b=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=d())){e.next=12;break}return e.next=4,f.a.post("".concat(p(),"/users/validate"),{accessToken:t});case 4:if(n=e.sent,!(c=n.data)){e.next=11;break}r(c),u(!0),e.next=12;break;case 11:return e.abrupt("return");case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{UserContext:O,currentUser:n,setCurrentUser:r,validateUser:b,loggedIn:i,setLoggedIn:u}}(),t=e.currentUser,n=e.setCurrentUser,a=e.validateUser,s=e.loggedIn,i=e.setLoggedIn;return Object(c.useEffect)((function(){a()}),[]),Object(r.jsx)("div",{className:"App",children:Object(r.jsx)("div",{className:"app__background",children:Object(r.jsx)(O.Provider,{value:{currentUser:t,setCurrentUser:n,loggedIn:s,setLoggedIn:i},children:Object(r.jsx)(I,{})})})})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,73)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(T,{})}),document.getElementById("root")),P()}},[[72,1,2]]]);
//# sourceMappingURL=main.341d2567.chunk.js.map