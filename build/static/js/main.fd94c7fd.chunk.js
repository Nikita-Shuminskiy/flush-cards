(this["webpackJsonpfirst-project-lession"]=this["webpackJsonpfirst-project-lession"]||[]).push([[0],{14:function(e,t,n){e.exports={alert:"Alert_alert__-N0pZ",alert__item:"Alert_alert__item__2Csfr",error:"Alert_error__8c7If",success:"Alert_success__3hyV1",info:"Alert_info__1M0mb",warning:"Alert_warning__1E3Bv",alert__item_inner:"Alert_alert__item_inner__1ArzJ",alert__item_text:"Alert_alert__item_text__12APQ",alert__item_cross:"Alert_alert__item_cross__2nOC3"}},17:function(e,t,n){e.exports={error:"Registration_error__1PGxk",wrapContainer:"Registration_wrapContainer__3BOzj",container:"Registration_container__1mQP9",button:"Registration_button__HN3S4",link:"Registration_link__2AK81"}},18:function(e,t,n){e.exports={profile:"Profile_profile__Zkn91",profile__inner:"Profile_profile__inner__1IGix",profile__avatar:"Profile_profile__avatar__1lh2Q"}},21:function(e,t,n){e.exports={wrapContainer:"Login_wrapContainer__1YR5W",container:"Login_container__2JQaw",link:"Login_link__1Eg3z"}},25:function(e,t,n){e.exports={superInput:"SuperInputText_superInput__3LMTd",inputOK:"SuperInputText_inputOK__2LYg_",errorInput:"SuperInputText_errorInput__3-FR4",inputStandart:"SuperInputText_inputStandart__2HSk3",error:"SuperInputText_error__2ZM4P"}},26:function(e,t,n){e.exports={wrapContainer:"PasswordRecovery_wrapContainer__1O-JC",container:"PasswordRecovery_container__1KpOU",link:"PasswordRecovery_link__PfWyT"}},31:function(e,t,n){e.exports={checkBox:"SuperCheckbox_checkBox__1D-xD",spanClassName:"SuperCheckbox_spanClassName__2dKsi"}},32:function(e,t,n){e.exports={default:"SuperButton_default__vNIy1",red:"SuperButton_red__50POv"}},34:function(e,t,n){e.exports={wrapContainer:"NewPassword_wrapContainer__Twgjp",container:"NewPassword_container__16uC-",link:"NewPassword_link__BA_4L"}},35:function(e,t,n){e.exports={wrapContainer:"CheckEmail_wrapContainer__cZ-TO",container:"CheckEmail_container__2fMu1",link:"CheckEmail_link__Nts5z"}},52:function(e,t,n){},53:function(e,t,n){},7:function(e,t,n){e.exports={nav:"Navbar_nav__2IlFK",item:"Navbar_item__1YB8i",active:"Navbar_active__2oqpz",setting:"Navbar_setting__9P2Ho"}},79:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(22),i=n.n(c),s=(n(52),n(53),n(5)),o=n(2),l=n(13),j=n(3),u=n(6),d=n(44),O=n.n(d).a.create({baseURL:"http://localhost:7542/2.0/",withCredentials:!0}),b=function(e){return O.post("auth/register",e)},p=function(e,t){return O.post("auth/set-new-password",{password:e,resetPasswordToken:t})},h=function(e,t,n){return O.post("auth/forgot",{email:e,from:t,message:n})},m=function(e,t,n){return O.post("auth/login",{email:e,password:t,rememberMe:n})},f=function(){return O.delete("auth/me")},x=function(){return O.post("auth/me",{}).then((function(e){return e}))},g=n(47),v="app/INIT",A="app/SET_ALERT",I="app/REMOVE_ALERT",w="app/AUTH_ME",C={initialApp:!1,alertList:[],auth:!1,userData:null},E=function(e,t){return{id:(new Date).getTime(),type:e,title:t}},N=function(e){return{type:A,payload:e}},y=function(e){return{type:I,payload:e}},R=function(){return{type:v}},T=function(){return function(e){x().then((function(t){var n,r;200===t.status&&(e(L(!0)),e((n=!0,r={email:t.data.email},{type:w,payload:{status:n,userData:r}})),e(R()),e(N(E("success","\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c: ".concat(t.data.name)))))})).catch((function(t){e(R()),e(N(E("error","".concat(t))))}))}},k={isLoggedIn:!1},L=function(e){return{type:"login/SET-IS-LOGGED-IN",status:e}},S=n(16),P=n(25),_=n.n(P),M=n(0),U=function(e){e.type;var t=e.onChange,n=e.onChangeText,r=e.onKeyPress,a=e.onEnter,c=e.error,i=(e.className,e.inputClassName),s=Object(S.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","inputClassName"]),l="".concat(_.a.error," ").concat(""),j=" ".concat(_.a.inputStandart," ").concat(c?_.a.errorInput:i," ");return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)("input",Object(o.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),a&&"Enter"===e.key&&a()},className:j},s)),c&&Object(M.jsx)("span",{className:l,children:c})]})},Y=n(31),G=n.n(Y),z=function(e){e.type,e.onChange;var t=e.onChangeChecked,n=e.className,r=(e.spanClassName,e.children),a=Object(S.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),c="".concat(G.a.checkBox," ").concat(n||"");return Object(M.jsxs)("label",{children:[Object(M.jsx)("input",Object(o.a)({type:"checkbox",onChange:function(e){t&&t(e.currentTarget.checked)},className:c},a)),r&&Object(M.jsx)("span",{className:G.a.spanClassName,children:r})]})},Q=n(32),B=n.n(Q),D=function(e){var t=e.red,n=e.className,r=e.value,a=Object(S.a)(e,["red","className","value"]),c="".concat(t?B.a.red:B.a.default," ").concat(n);return Object(M.jsx)("button",Object(o.a)(Object(o.a)({className:c},a),{},{children:r}))},Z=n(21),H=n.n(Z),F=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.login.isLoggedIn})),n=Object(r.useState)({email:"",password:"",rememberMe:!1}),a=Object(l.a)(n,2),c=a[0],i=a[1];return t?Object(M.jsx)(s.a,{to:"/profile"}):Object(M.jsx)("div",{className:H.a.wrapContainer,children:Object(M.jsxs)("div",{className:H.a.container,children:[Object(M.jsxs)("div",{children:[Object(M.jsx)("h1",{children:"Welcome"}),Object(M.jsx)("h3",{children:"Sign In"})]}),Object(M.jsx)("div",{children:Object(M.jsx)(U,{name:"email",type:"email",onChange:function(e){return i(Object(o.a)(Object(o.a)({},c),{},{email:e.currentTarget.value}))},placeholder:"Email"})}),Object(M.jsx)("div",{children:Object(M.jsx)(U,{name:"password",type:"password",onChange:function(e){return i(Object(o.a)(Object(o.a)({},c),{},{password:e.currentTarget.value}))},placeholder:"Password"})}),Object(M.jsxs)("div",{children:[Object(M.jsx)("label",{children:"Remember me"})," ",Object(M.jsx)(z,{type:"checkbox",onChange:function(e){return i(Object(o.a)(Object(o.a)({},c),{},{rememberMe:e.currentTarget.checked}))},name:"rememberMe"})]}),Object(M.jsx)("div",{children:Object(M.jsx)(u.b,{to:"/recoverypassword",className:H.a.link,children:"Forgot Password"})}),Object(M.jsx)("div",{children:Object(M.jsx)(D,{onClick:function(){var t,n,r;e((t=c.email,n=c.password,r=c.rememberMe,function(e){m(t,n,r).then((function(t){e(L(!0))})).catch((function(t){e(N({id:1,type:"error",title:t.response.data.error}))}))}))},value:"Login"})}),Object(M.jsx)("div",{children:Object(M.jsx)(u.b,{to:"/registration",className:H.a.link,children:"Register"})})]})})},W=n(17),K=n.n(W),X={addedUser:{_id:"",email:"",rememberMe:!1,isAdmin:!1},initUser:!1,email:"",successedPassword:!1},V=function(e){var t=Object(j.c)((function(e){return e.registration.initUser})),n=Object(j.b)(),a=Object(r.useState)({email:"",password:"",confirmPassword:""}),c=Object(l.a)(a,2),i=c[0],d=c[1],O=Object(r.useState)(""),p=Object(l.a)(O,2),h=p[0],m=p[1];return t?Object(M.jsx)(s.a,{to:"/login"}):Object(M.jsx)("div",{className:K.a.wrapContainer,children:Object(M.jsxs)("div",{className:K.a.container,children:[Object(M.jsx)("h1",{children:"Registration"}),Object(M.jsx)("div",{children:Object(M.jsx)(U,{name:"email",type:"email",onChange:function(e){return d(Object(o.a)(Object(o.a)({},i),{},{email:e.currentTarget.value}))},placeholder:"Email"})}),Object(M.jsx)("div",{children:Object(M.jsx)(U,{name:"password",type:"password",onChange:function(e){return d(Object(o.a)(Object(o.a)({},i),{},{password:e.currentTarget.value}))},placeholder:"Password"})}),Object(M.jsxs)("div",{children:[Object(M.jsx)(U,{name:"confirm",type:"password",onChange:function(e){return d(Object(o.a)(Object(o.a)({},i),{},{confirmPassword:e.currentTarget.value}))},placeholder:"confirm"}),Object(M.jsx)("div",{className:K.a.error,children:""!==h&&h})]}),Object(M.jsx)("div",{className:K.a.button,children:Object(M.jsx)(D,{onClick:function(){var e;i.password===i.confirmPassword?(n((e=i,function(t){b(e).then((function(e){t({type:"/REGISTRATION/NEW-USER",newUser:e.data.addedUser,initUser:!0})})).catch((function(e){alert(e)}))})),m("")):m("Do not coincide with passwords")},value:"REGISTRATION"})}),Object(M.jsx)("div",{children:Object(M.jsx)(u.b,{to:"/login",className:K.a.link,children:"Login"})})]})})},J=n(26),q=n.n(J),$=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),i=Object(l.a)(c,2),o=i[0],d=i[1],O=Object(j.c)((function(e){return e.registration.email})),b=Object(j.b)();if(""!==O)return Object(M.jsx)(s.a,{to:"/check-email"});return Object(M.jsx)("div",{className:q.a.wrapContainer,children:Object(M.jsxs)("div",{className:q.a.container,children:[Object(M.jsx)("h2",{children:"Forgot your password?"}),Object(M.jsxs)("div",{children:[Object(M.jsx)(U,{name:"email",type:"email",placeholder:"Email",onChange:function(e){return a(e.currentTarget.value)}}),o&&Object(M.jsx)("div",{style:{color:"red"},children:o})]}),Object(M.jsx)("p",{children:"Enter your email address and we will send you further instructions"}),Object(M.jsx)(D,{onClick:function(){n?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(n)||d("Invalid email address"):d("Required"),console.log(n),n&&b(function(e){return function(t){h(e,"IgorSvyrydovskyi@gmail.com",'<div style="background-color: lime; padding: 15px"> password recovery \n    link: <a href= http://localhost:3000/#/set-new-password/$token$>link</a></div>').then((function(n){console.log(n.data.info),t(function(e){return{type:"/REGISTRATION/SET-EMAIL",email:e}}(e))})).catch((function(e){t(N(E("error","".concat(e)))),console.log(e)}))}}(n))},value:"Send Instructions"}),Object(M.jsxs)("div",{children:[Object(M.jsx)("p",{children:"Did you remember your password?"}),Object(M.jsx)(u.b,{to:"/login",className:q.a.link,children:"Try logging in"})]})]})})},ee=n(34),te=n.n(ee),ne=function(){var e=Object(j.c)((function(e){return e.registration.successedPassword})),t=Object(r.useState)(""),n=Object(l.a)(t,2),a=n[0],c=n[1],i=Object(r.useState)(""),o=Object(l.a)(i,2),u=o[0],d=o[1],O=Object(r.useState)(""),b=Object(l.a)(O,2),h=b[0],m=b[1],f=Object(s.g)().token,x=Object(j.b)();console.log(f);if(e)return Object(M.jsx)(s.a,{to:"/login"});return Object(M.jsx)("div",{className:te.a.wrapContainer,children:Object(M.jsxs)("div",{className:te.a.container,children:[Object(M.jsx)("h2",{children:"Create new password"}),Object(M.jsx)(U,{name:"password",type:"password",placeholder:"Password",onChange:function(e){return c(e.currentTarget.value)}}),h&&Object(M.jsx)("div",{style:{color:"red"},children:h}),Object(M.jsx)(U,{name:"password",type:"password",placeholder:"Confirm password",onChange:function(e){return d(e.currentTarget.value)}}),h&&Object(M.jsx)("div",{style:{color:"red"},children:h}),Object(M.jsx)("p",{children:"Create new password and we will send you further instructions to email"}),Object(M.jsx)(D,{onClick:function(){a?a.length<7?m("The password is too small"):u!==a&&m("The passwords are different!"):m("Required"),x(function(e,t){return function(n){p(e,t).then((function(e){console.log(e.data.info),n({type:"/REGISTRATION/SET-NEW-PASSWORD",successedPassword:!0})})).catch((function(e){n(N(E("error","".concat(e)))),console.log(e)}))}}(a,f)),c(""),d("")},value:"Create new password"})]})})},re=n.p+"static/media/1548761996_2019-01-29_141751.e49107d4.jpg",ae=function(){return Object(M.jsx)("div",{children:Object(M.jsx)("img",{src:re,alt:"error"})})},ce=n(14),ie=n.n(ce),se=function(e){var t=e.alertList,n=e.onCloseAlert;return Object(r.useEffect)((function(){if(t){var e=t.filter((function(e){return"error"!==e.type}));0!==e.length&&setTimeout((function(){n(e[0].id)}),2e3)}}),[null===t||void 0===t?void 0:t.length]),Object(M.jsx)("div",{className:ie.a.alert,children:null===t||void 0===t?void 0:t.map((function(e){var t=e.type;return Object(M.jsx)("div",{className:"".concat(ie.a.alert__item," ").concat(ie.a[t]),onClick:function(){return n(e.id)},children:Object(M.jsxs)("div",{className:ie.a.alert__item_inner,children:[Object(M.jsxs)("p",{className:ie.a.alert__item_text,children:[e.type.toUpperCase(),Object(M.jsx)("span",{children:e.title})]}),Object(M.jsx)("span",{className:ie.a.alert__item_cross})]})},e.id)}))})},oe=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.app.alertList}));return Object(M.jsxs)("div",{children:[Object(M.jsx)(U,{}),Object(M.jsx)(z,{}),Object(M.jsx)(D,{}),Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)("button",{onClick:function(){e(N(E("error","Error")))},children:"Error"}),Object(M.jsx)("button",{onClick:function(){e(N(E("success","success")))},children:"Success"}),Object(M.jsx)("button",{onClick:function(){e(N(E("info","info")))},children:"Info"}),Object(M.jsx)("button",{onClick:function(){e(N(E("warning","warning")))},children:"Warning"}),Object(M.jsx)(se,{onCloseAlert:function(t){e(y(t))},alertList:t})]})]})},le=n(7),je=n.n(le),ue=function(){var e=Object(j.c)((function(e){return e.login.isLoggedIn})),t=Object(j.b)();return e?Object(M.jsx)("div",{children:Object(M.jsxs)("div",{className:je.a.nav,children:[Object(M.jsx)("div",{className:je.a.item+" "+je.a.setting,children:Object(M.jsx)(u.b,{activeClassName:je.a.active,to:"/profile",children:"Profile"})}),Object(M.jsx)("div",{className:je.a.item,children:Object(M.jsx)(u.b,{activeClassName:je.a.active,to:"/test",children:"test"})}),Object(M.jsx)("div",{className:je.a.item+" "+je.a.setting,children:Object(M.jsx)(u.b,{activeClassName:je.a.active,to:"/registration",children:"Registration"})}),Object(M.jsx)("div",{className:je.a.item+" "+je.a.setting,children:Object(M.jsx)(u.b,{activeClassName:je.a.active,to:"/login",children:"Login"})}),Object(M.jsx)("div",{className:je.a.item+" "+je.a.setting,children:Object(M.jsx)(u.b,{activeClassName:je.a.active,to:"/recoverypassword",children:"Password Recovery"})}),Object(M.jsx)("div",{className:"".concat(je.a.item),children:Object(M.jsx)(u.b,{activeClassName:je.a.active,to:"/set-new-password",children:"Entry New Password"})}),e&&Object(M.jsx)("button",{onClick:function(){var e;t((e=!1,function(t){f().then((function(){t({type:"login/SET-IS-LOGOUT",status:e})})).catch((function(e){console.log("Error: ",e.response.data.error),t(N({id:1,type:"error",title:e.response.data.error}))}))}))},children:"LOGOUT"})]})}):Object(M.jsx)(s.a,{to:"/login"})},de=n(18),Oe=n.n(de),be=n.p+"static/media/user.6e4f8669.svg",pe=function(){var e=Object(j.c)((function(e){return e.app.userData}));return Object(M.jsx)("section",{className:Oe.a.profile,children:Object(M.jsx)("div",{className:"container",children:Object(M.jsx)("div",{className:Oe.a.profile__inner,children:Object(M.jsxs)("div",{className:Oe.a.profile__info,children:[Object(M.jsx)("div",{className:Oe.a.profile__avatar,children:Object(M.jsx)("img",{src:(null===e||void 0===e?void 0:e.avatar)?e.avatar:be,alt:" "})}),Object(M.jsx)("div",{className:Oe.a.profile__description,children:Object(M.jsx)("p",{children:null===e||void 0===e?void 0:e.email})})]})})})})},he=n(35),me=n.n(he),fe=function(){var e=Object(j.c)((function(e){return e.registration.email}));return Object(M.jsx)("div",{className:me.a.wrapContainer,children:Object(M.jsxs)("div",{className:me.a.container,children:[Object(M.jsx)("img",{src:"data:image/png;base64,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",alt:"envelope"}),Object(M.jsx)("h2",{children:"Check Email"}),Object(M.jsxs)("p",{children:["We\u2019ve sent an Email with instructions to ",e]})]})})},xe=n.p+"static/media/loaging_layoutx.96bd3628.svg",ge=function(){var e={layout:{width:"100%",height:"100vh",backgroundColor:"#fff",position:"fixed",zIndex:"1000"},icon:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}};return Object(M.jsx)("div",{style:e.layout,children:Object(M.jsx)("img",{style:e.icon,src:xe,alt:""})})};var ve=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.app.alertList})),n=Object(j.c)((function(e){return e.app.initialApp}));return Object(r.useEffect)((function(){e(T())}),[]),Object(M.jsx)(M.Fragment,{children:n?Object(M.jsxs)("div",{className:"App",children:[Object(M.jsx)(ue,{}),Object(M.jsxs)(s.d,{children:[Object(M.jsx)(s.b,{path:"/login",render:function(){return Object(M.jsx)(F,{})}}),Object(M.jsx)(s.b,{path:"/registration",render:function(){return Object(M.jsx)(V,{})}}),Object(M.jsx)(s.b,{path:"/profile",render:function(){return Object(M.jsx)(pe,{})}}),Object(M.jsx)(s.b,{path:"/404",render:function(){return Object(M.jsx)(ae,{})}}),Object(M.jsx)(s.b,{path:"/recoverypassword",render:function(){return Object(M.jsx)($,{})}}),Object(M.jsx)(s.b,{path:"/set-new-password/:token",render:function(){return Object(M.jsx)(ne,{})}}),Object(M.jsx)(s.b,{path:"/check-email",render:function(){return Object(M.jsx)(fe,{})}}),Object(M.jsx)(s.b,{path:"/test",render:function(){return Object(M.jsx)(oe,{})}})]}),Object(M.jsx)(se,{alertList:t,onCloseAlert:function(t){return e(y(t))}})]}):Object(M.jsx)(ge,{})})},Ae=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,80)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))},Ie=n(27),we={},Ce=n(46),Ee=Object(Ie.b)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"login/SET-IS-LOGGED-IN":case"login/SET-IS-LOGOUT":return Object(o.a)(Object(o.a)({},e),{},{isLoggedIn:t.status});default:return e}},registration:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"/REGISTRATION/NEW-USER":return Object(o.a)(Object(o.a)({},e),{},{addedUser:t.newUser,initUser:t.initUser});case"/REGISTRATION/SET-NEW-PASSWORD":return Object(o.a)(Object(o.a)({},e),{},{successedPassword:t.successedPassword});case"/REGISTRATION/SET-EMAIL":return Object(o.a)(Object(o.a)({},e),{},{email:t.email});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we;return e},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return Object(o.a)(Object(o.a)({},e),{},{alertList:[].concat(Object(g.a)(e.alertList),[t.payload])});case I:return Object(o.a)(Object(o.a)({},e),{},{alertList:e.alertList.filter((function(e){return e.id!==t.payload}))});case w:return Object(o.a)(Object(o.a)({},e),{},{auth:t.payload.status,userData:Object(o.a)({},t.payload.userData)});case v:return Object(o.a)(Object(o.a)({},e),{},{initialApp:!0});default:return e}}}),Ne=Object(Ie.c)(Ee,Object(Ie.a)(Ce.a));window.store=Ne,i.a.render(Object(M.jsx)(a.a.StrictMode,{children:Object(M.jsx)(j.a,{store:Ne,children:Object(M.jsx)(u.a,{children:Object(M.jsx)(ve,{})})})}),document.getElementById("root")),Ae()}},[[79,1,2]]]);
//# sourceMappingURL=main.fd94c7fd.chunk.js.map