(this["webpackJsonpcovid-slayer"]=this["webpackJsonpcovid-slayer"]||[]).push([[0],{217:function(e,t,a){},313:function(e,t,a){},320:function(e,t,a){},321:function(e,t,a){},322:function(e,t,a){},323:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a(0),c=a.n(n),r=a(28),o=a.n(r),l=a(82),i=a(33),j=(a(216),a(329)),d=a(92),b=a(112),u=a(63),p=a(332),O=a(337),m=a(49),h=a(328),x=a(341),f=a(342),g=(a(217),a(48)),v=a.n(g),y=a(67),w=a(7),S=a(182),k=function(){var e=Object(y.d)(),t=Object(i.f)();return Object(w.jsx)(b.a,{children:Object(w.jsxs)(u.a,{span:6,offset:9,children:[Object(w.jsxs)(p.a,{name:"normal_login",className:"login-form",initialValues:{remember:!0},onFinish:function(a){var s=new FormData;s.append("username",a.username?a.username:""),s.append("password",a.password?S(a.password):""),v.a.post("https://covidslayer.club/public/index.php/v1/login",s).then((function(a){200===a.status?"true"===a.data.status?(localStorage.setItem("name",a.data.name),localStorage.setItem("user_id",a.data.user_id),e.success("Welcome, "+a.data.name),t.push("dashboard/")):e.error("Sorry, the credentials dont match. Please try again."):e.error("Something went wrong! Please try again.")}),(function(e){console.log(e)}))},children:[Object(w.jsx)(p.a.Item,{name:"username",rules:[{required:!0,message:"Please input your Username!"}],children:Object(w.jsx)(O.a,{prefix:Object(w.jsx)(x.a,{className:"site-form-item-icon"}),placeholder:"Username"})}),Object(w.jsx)(p.a.Item,{name:"password",rules:[{required:!0,message:"Please input your Password!"}],children:Object(w.jsx)(O.a,{prefix:Object(w.jsx)(f.a,{className:"site-form-item-icon"}),type:"password",placeholder:"Password"})}),Object(w.jsx)(p.a.Item,{children:Object(w.jsx)(m.a,{type:"primary",size:"large",htmlType:"submit",block:!0,className:"login-form-button",children:"Log in"})})]}),Object(w.jsx)(h.a,{children:"OR"}),Object(w.jsx)(m.a,{type:"primary",ghost:!0,block:!0,size:"large",onClick:function(){t.push("/register")},children:"Register"})]})})},I=a(38),C=a.n(I),F=a(54),T=a(5),E=a(333),P=a(331),D=a(338),N=(a(313),function(){var e=Object(i.f)();return Object(w.jsx)(b.a,{justify:"end",children:Object(w.jsx)(u.a,{span:2,offset:11,children:Object(w.jsx)(m.a,{type:"primary",danger:!0,onClick:function(){localStorage.removeItem("user_id"),localStorage.removeItem("name"),e.push("/login")},children:"Logout"})})})}),A=a(339),_=a(330),G=E.a.Title,M=function(){var e=Object(n.useState)([]),t=Object(T.a)(e,2),a=t[0],s=t[1],c="https://covidslayer.club/public/index.php/",r=[{title:"Game ID",dataIndex:"GAME_ID",key:"GAME_ID"},{title:"STATUS",key:"STATUS",dataIndex:"STATUS",render:function(e){return Object(w.jsx)(w.Fragment,{children:"WON"===e?Object(w.jsx)(D.a,{color:"green",children:e},e):Object(w.jsx)(D.a,{color:"volcano",children:e},e)})}},{title:"Date",dataIndex:"DATE",key:"DATE"},{title:"Action",key:"action",render:function(e,t){return Object(w.jsx)(A.b,{size:"middle",children:Object(w.jsx)("div",{children:"Check Game Log"})})}}],o=Object(n.useCallback)(Object(F.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=new FormData).append("id",localStorage.getItem("user_id")),v.a.post(c+"v1/getUserGameLog",t).then((function(e){200===e.status?s(e.data):console.log("failed")}),(function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)}))),[c]);return Object(n.useEffect)((function(){o()}),[o]),Object(w.jsx)(b.a,{children:Object(w.jsxs)(u.a,{span:16,children:[Object(w.jsx)(G,{level:2,children:"Your Game History"}),Object(w.jsx)(_.a,{columns:r,dataSource:a,size:"small"})]})})},L=E.a.Title,U=function(){var e=Object(n.useState)([]),t=Object(T.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)([]),r=Object(T.a)(c,2),o=r[0],l=r[1],i="https://covidslayer.club/public/index.php/",j=[{title:"NAME",dataIndex:"NAME",key:"NAME"},{title:"PLAYER ID",dataIndex:"USER_ID",key:"USER_ID"},{title:"COUNT",dataIndex:"COUNT",key:"COUNT"}],d=Object(n.useCallback)(Object(F.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=new FormData).append("id",localStorage.getItem("user_id")),v.a.post(i+"v1/getTopGainerandLosers",t).then((function(e){200===e.status?(s(e.data.GAINERS),l(e.data.LOSERS)):console.log("failed")}),(function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)}))),[i]);return Object(n.useEffect)((function(){d()}),[d]),Object(w.jsxs)(b.a,{children:[Object(w.jsxs)(u.a,{span:11,children:[Object(w.jsx)(L,{level:2,children:"Top Players"}),Object(w.jsx)(_.a,{columns:j,dataSource:a,size:"small"})]}),Object(w.jsxs)(u.a,{span:11,offset:1,children:[Object(w.jsx)(L,{level:2,children:"Top Losers"}),Object(w.jsx)(_.a,{columns:j,dataSource:o,size:"small"})]})]})},z=E.a.Title,R=function(){var e=Object(n.useState)(0),t=Object(T.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(0),r=Object(T.a)(c,2),o=r[0],l=r[1],j=Object(i.f)(),d="https://covidslayer.club/public/index.php/",p=localStorage.getItem("name");null==localStorage.getItem("user_id")&&(j.push("/login"),console.log(localStorage.getItem("user_id")));var O=Object(n.useCallback)(Object(F.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=new FormData).append("id",localStorage.getItem("user_id")),v.a.post(d+"v1/getUserGameCount",t).then((function(e){200===e.status?(s(e.data.WON[0].WON),l(e.data.LOST[0].LOST)):console.log("failed")}),(function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e)}))),[d]);Object(n.useEffect)((function(){O()}),[O]);var h=function(){return Math.random().toString(20).substr(2,6)};return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(N,{}),Object(w.jsx)(b.a,{children:Object(w.jsxs)(u.a,{span:18,offset:3,children:[Object(w.jsx)(m.a,{type:"primary",onClick:function(){var e=h(),t=new FormData;t.append("game_id",e),t.append("user_id",localStorage.getItem("user_id")),v.a.post(d+"v1/registerGame",t).then((function(t){200===t.status?"true"===t.data.status&&j.push("../battlefield/"+e):console.log("failed")}),(function(e){console.log(e)}))},children:"New Game"}),Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),Object(w.jsxs)(z,{level:1,children:["Welcome, ",p]}),Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),Object(w.jsxs)(b.a,{className:"textCenter",children:[Object(w.jsx)(u.a,{span:11,children:Object(w.jsx)(P.a,{title:"Games Won",bordered:!1,children:Object(w.jsx)(D.a,{color:"green",children:Object(w.jsx)(z,{level:2,children:a})})})}),Object(w.jsx)(u.a,{span:11,offset:1,children:Object(w.jsx)(P.a,{title:"Games Lost",bordered:!1,children:Object(w.jsx)(D.a,{color:"volcano",children:Object(w.jsx)(z,{level:2,children:o})})})})]}),Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),Object(w.jsx)(M,{}),Object(w.jsx)(U,{})]})})]})},W=(a(320),a(121)),q=a(334),B=W.a.Option,H={labelCol:{xs:{span:24},sm:{span:8}},wrapperCol:{xs:{span:24},sm:{span:16}}},Y={wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:8}}},J=E.a.Title,V=a(182),K=function(){var e=Object(y.d)(),t=Object(i.f)(),a=p.a.useForm(),n=Object(T.a)(a,1)[0];return Object(w.jsx)(b.a,{children:Object(w.jsxs)(u.a,{span:8,offset:8,children:[Object(w.jsx)(J,{level:1,className:"textCenter",children:"Registration"}),Object(w.jsxs)(p.a,Object(s.a)(Object(s.a)({},H),{},{form:n,name:"register",onFinish:function(a){var s=new FormData;s.append("name",a.name?a.name:""),s.append("email",a.email?a.email:""),s.append("age",a.age?a.age:""),s.append("gender",a.gender?a.gender:""),s.append("password",a.password?V(a.password):""),v.a.post("http://localhost:8080/v1/register",s).then((function(a){200===a.status?(t.push("/login"),e.success("Registration Done. Login to Continue!")):console.log("failed")}),(function(e){console.log(e)}))},scrollToFirstError:!0,children:[Object(w.jsx)(p.a.Item,{name:"name",label:"Full Name",rules:[{required:!0,message:"Please input your Name!"}],children:Object(w.jsx)(O.a,{})}),Object(w.jsx)(p.a.Item,{name:"email",label:"E-mail",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}],children:Object(w.jsx)(O.a,{})}),Object(w.jsx)(p.a.Item,{name:"password",label:"Password",rules:[{required:!0,message:"Please input your password!"}],hasFeedback:!0,children:Object(w.jsx)(O.a.Password,{})}),Object(w.jsx)(p.a.Item,{name:"confirm",label:"Confirm Password",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:"Please confirm your password!"},function(e){var t=e.getFieldValue;return{validator:function(e,a){return a&&t("password")!==a?Promise.reject(new Error("The two passwords that you entered do not match!")):Promise.resolve()}}}],children:Object(w.jsx)(O.a.Password,{})}),Object(w.jsx)(p.a.Item,{name:"gender",label:"Gender",rules:[{required:!0,message:"Please select gender!"}],children:Object(w.jsxs)(W.a,{placeholder:"select your gender",children:[Object(w.jsx)(B,{value:"male",children:"Male"}),Object(w.jsx)(B,{value:"female",children:"Female"}),Object(w.jsx)(B,{value:"other",children:"Other"})]})}),Object(w.jsx)(p.a.Item,{name:"age",label:"Age",rules:[{required:!0,message:"Please input Age!"}],children:Object(w.jsx)(q.a,{style:{width:"100%"}})}),Object(w.jsx)(p.a.Item,Object(s.a)(Object(s.a)({},Y),{},{children:Object(w.jsx)(m.a,{type:"primary",htmlType:"submit",children:"Register"})}))]}))]})})},Q=a(9),X=a(335),Z=(a(321),a(336)),$=function(e){var t=e.title,a=e.content,s=e.visible;return Object(w.jsx)(Z.a,{title:t,visible:s,closable:!1,footer:null,children:Object(w.jsx)("p",{children:a})})},ee=a(340),te=(a(322),E.a.Title),ae=function(e){var t=e.commentary;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(te,{level:2,children:"Commentary Box"}),Object(w.jsx)(ee.b,{className:"scrollableList",size:"small",bordered:!0,dataSource:t,renderItem:function(e){return Object(w.jsx)(ee.b.Item,{children:e})}})]})},se=E.a.Title,ne=function(e){var t=Object(y.d)(),a=Object(i.f)(),s="https://covidslayer.club/public/index.php/",c=e.match.params.id,r=Object(n.useState)(100),o=Object(T.a)(r,2),l=o[0],j=o[1],d=Object(n.useState)(100),p=Object(T.a)(d,2),O=p[0],h=p[1],x=Object(n.useState)(""),f=Object(T.a)(x,2),g=f[0],S=f[1],k=Object(n.useState)([]),I=Object(T.a)(k,2),C=I[0],F=I[1],E=Object(n.useState)(!1),P=Object(T.a)(E,2),D=P[0],A=P[1],_=function(e){var t="",a="";"attack"===e?(t=G(1,10),a=G(1,10),U(-t,"player","attack"),U(-a,"monster","attack")):(t=G(10,20),a=G(10,20),U(-t,"player","blast"),U(-a,"monster","blast"));var s=[].concat(Object(Q.a)(C),["Monster "+e+" the player by "+a]);F(s),s=[].concat(Object(Q.a)(s),["Player "+e+" the monster by "+t]),F(s);var n=O,c=l;h(n-t),j(c-a),M(n-t,c-a)},G=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)},M=function(e,s){e<=0?(S("Player"),A(!0),L("Player"),t.success("Player Won!"),a.push("../dashboard/")):s<=0&&(S("Monster"),A(!0),L("Monster"),t.error("Monster Won! You Lost"),a.push("../dashboard/"))},L=function(e){var t=new FormData;t.append("game_id",c),t.append("winner",e),v.a.post(s+"v1/logGameWinner",t).then((function(e){200===e.status?e.data.status:console.log("failed")}),(function(e){console.log(e)}))},U=function(e,t,a){var n=new FormData;n.append("game_id",c),n.append("point",e),n.append("playertype",t),n.append("type",a),v.a.post(s+"v1/logGame",n).then((function(e){200===e.status?e.data.status:console.log("failed")}),(function(e){console.log(e)}))};return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)($,{title:"Winner Winner Chicken Dinner",content:g,visible:D}),Object(w.jsx)(N,{}),Object(w.jsxs)(b.a,{children:[Object(w.jsxs)(u.a,{span:12,offset:3,children:[Object(w.jsx)(b.a,{className:"battleField",children:Object(w.jsx)(u.a,{span:20,offset:2,children:Object(w.jsx)(se,{level:2,children:"I am a timer"})})}),Object(w.jsxs)(b.a,{className:"battleField",children:[Object(w.jsxs)(u.a,{span:12,children:[Object(w.jsx)(se,{level:2,children:"You"}),Object(w.jsx)(X.a,{type:"circle",strokeColor:{"0%":"#ED2938","20%":"#ED2938","40%":"#B25F4A","60%":"#77945C","80%":"#3BCA6D","100%":"#00FF7F"},percent:l})]}),Object(w.jsxs)(u.a,{span:12,children:[Object(w.jsx)(se,{level:2,children:"Covid Monster"}),Object(w.jsx)(X.a,{type:"circle",strokeColor:{"0%":"#ED2938","20%":"#ED2938","40%":"#B25F4A","60%":"#77945C","80%":"#3BCA6D","100%":"#00FF7F"},percent:O})]})]}),Object(w.jsxs)(b.a,{children:[Object(w.jsx)(u.a,{span:4,offset:2,children:Object(w.jsx)(m.a,{type:"danger",block:!0,size:"large",onClick:function(){return _("attack")},children:"Attack"})}),Object(w.jsx)(u.a,{span:4,offset:2,children:Object(w.jsx)(m.a,{type:"danger",block:!0,size:"large",onClick:function(){return _("blast")},children:"Blast"})}),Object(w.jsx)(u.a,{span:4,offset:2,children:Object(w.jsx)(m.a,{type:"success",style:{background:"#00cc00",borderColor:"#00cc00",color:"#fff"},block:!0,size:"large",onClick:function(){var e=G(1,10),t=G(10,20);U(t,"player","heal"),U(-e,"monster","attack");var a=[].concat(Object(Q.a)(C),["Monster attacks the player by "+e]);F(a),a=[].concat(Object(Q.a)(a),["Player heals by "+t]),F(a);var s=O,n=l;n+=t,j(n-=e),M(s,n)},children:"Heal"})}),Object(w.jsx)(u.a,{span:4,offset:2,children:Object(w.jsx)(m.a,{type:"primary",block:!0,size:"large",onClick:function(){L("Monster"),a.push("../dashboard/")},children:"Give Up!"})})]})]}),Object(w.jsx)(u.a,{span:6,offset:1,children:Object(w.jsx)(ae,{commentary:C})})]})]})},ce=function(){return Object(w.jsxs)("div",{id:"wrapper",children:[Object(w.jsx)("img",{src:"https://i.imgur.com/qIufhof.png"}),Object(w.jsx)("div",{id:"info",children:Object(w.jsx)("h3",{children:"This page could not be found"})})]})},re=j.a.Header,oe=j.a.Footer,le=j.a.Content;var ie=function(){return Object(w.jsxs)(j.a,{children:[Object(w.jsx)(re,{className:"mainHeader",children:Object(w.jsx)(d.a,{theme:"dark",mode:"horizontal",children:Object(w.jsx)(d.a.Item,{children:"Covid Slayer"})})}),Object(w.jsx)(le,{children:Object(w.jsx)(l.a,{children:Object(w.jsxs)(i.c,{children:[Object(w.jsx)(i.a,{exact:!0,path:"/covid-slayer",component:k}),Object(w.jsx)(i.a,{exact:!0,path:"/",component:k}),Object(w.jsx)(i.a,{exact:!0,path:"/login",component:k}),Object(w.jsx)(i.a,{exact:!0,path:"/dashboard",component:R}),Object(w.jsx)(i.a,{exact:!0,path:"/register",component:K}),Object(w.jsx)(i.a,{exact:!0,path:"/battlefield/:id",component:ne}),Object(w.jsx)(i.a,{component:ce})]})})}),Object(w.jsx)(oe,{style:{textAlign:"center"},children:"Covid Slayer 2020."})]})},je=a(204),de={position:y.b.TOP_RIGHT,timeout:5e3,offset:"30px",transition:y.c.SCALE};o.a.render(Object(w.jsx)(c.a.StrictMode,{children:Object(w.jsx)(y.a,Object(s.a)(Object(s.a)({template:je.a},de),{},{children:Object(w.jsx)(ie,{})}))}),document.getElementById("root"))}},[[323,1,2]]]);
//# sourceMappingURL=main.78d16ed4.chunk.js.map