(this["webpackJsonpgb-react"]=this["webpackJsonpgb-react"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},,,function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var n=s(1),r=s.n(n),c=s(8),a=s.n(c),i=(s(15),s(10)),u=s(4),o=(s(16),{name:"User",logoUrl:"/gb-react/user-solid.svg"}),m={name:"Chatbot.exe",logoUrl:"/gb-react/robot-solid.svg"},l=s(24),g=function(e,t){return{id:Object(l.a)(),user:e,text:t,timestamp:Math.floor((new Date).getTime()/1e3)}},j=s.p+"static/media/paper-plane-solid.57094fe6.svg",b=(s(17),s(0)),f=function(e){var t=Object(n.useState)(""),s=Object(u.a)(t,2),r=s[0],c=s[1];return Object(b.jsxs)("form",{onSubmit:function(t){t.preventDefault(),""!==r&&(c((function(e){return""})),e.onSubmitNewMessage(g(e.user,r)))},className:"new-message-wrapper",children:[Object(b.jsx)("input",{className:"new-message-edit",type:"text",placeholder:"Message",onChange:function(e){e.preventDefault(),c((function(t){return e.target.value}))},value:r}),Object(b.jsx)("button",{type:"submit",className:"new-message-submit",children:Object(b.jsx)("img",{src:j,alt:"Send"})})]})},d=s(6),p=s.n(d),O=(s(20),s(9)),v=s.n(O),h=function(e){return Object(b.jsxs)("div",{className:e.isCurrentUserAuthor?"message-wrapper-reverse":"message-wrapper",children:[Object(b.jsx)("div",{className:"message-logo",children:Object(b.jsx)("img",{src:e.message.user.logoUrl,alt:"logo"})}),Object(b.jsxs)("div",{className:"message-text",children:[Object(b.jsx)("div",{className:"message-user-name",children:e.message.user.name}),Object(b.jsx)("div",{children:e.message.text}),Object(b.jsx)("div",{className:"message-timestamp",children:v()(e.message.timestamp).format("h:mm")})]},e.message.id)]})},x=(s(21),function(e){var t=Object(n.useRef)(null);return Object(n.useEffect)((function(){if(t.current){var e=t.current.scrollHeight-t.current.clientHeight;t.current.scrollTop=e}}),[e.messages]),Object(b.jsx)("div",{className:"message-list",ref:t,children:e.messages.map((function(t){return Object(b.jsx)(h,{message:t,isCurrentUserAuthor:t.user===e.currentUser},t.id)}))})}),w=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),s=t[0],r=t[1],c=function(e){r((function(t){return[].concat(Object(i.a)(t),[e])}))};return function(e,t,s){Object(n.useEffect)((function(){var n=setTimeout((function(){var n;p.a.isEmpty(t)||(null===(n=p.a.last(t))||void 0===n?void 0:n.user)===e||s(g(e,"WE ARE BORG"))}),1500);return function(){return clearTimeout(n)}}),[e,s,t])}(m,s,c),Object(b.jsxs)("div",{className:"app-wrapper",children:[Object(b.jsx)(x,{messages:s,currentUser:o}),Object(b.jsx)(f,{user:o,onSubmitNewMessage:c})]})},N=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,25)).then((function(t){var s=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,a=t.getTTFB;s(e),n(e),r(e),c(e),a(e)}))};a.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(w,{})}),document.getElementById("root")),N()}],[[22,1,2]]]);
//# sourceMappingURL=main.a452259e.chunk.js.map