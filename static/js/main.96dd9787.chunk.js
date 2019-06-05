(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{135:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(71),i=n.n(o);n(79),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=n(138),u=n(137),l=n(136),c=r.a.createContext(null),m=n(3),d=n(4),h=n(6),p=n(5),f=n(7),b=r.a.createContext(null),E=function(e){return function(t){return r.a.createElement(b.Consumer,null,function(n){return r.a.createElement(e,Object.assign({},t,{firebase:n}))})}},g=b,v=n(8),O=n(17),S=n.n(O),j=(n(126),n(128),{apiKey:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_API_KEY,authDomain:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_AUTH_DOMAIN,databaseURL:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_DATABASE_URL,projectId:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_PROJECT_ID,storageBucket:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_STORAGE_BUCKET,messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_MESSAGING_SENDER_ID}),w=function e(){var t=this;Object(m.a)(this,e),this.doCreateUserWithEmailAndPassword=function(e,n){return t.auth.createUserWithEmailAndPassword(e,n)},this.doSignInWithEmailAndPassword=function(e,n){return t.auth.signInWithEmailAndPassword(e,n)},this.doSignInWithGoogle=function(){return t.auth.signInWithPopup(t.googleProvider)},this.doSignInWithFacebook=function(){return t.auth.signInWithPopup(t.facebookProvider)},this.doSignInWithTwitter=function(){return t.auth.signInWithPopup(t.twitterProvider)},this.doSignOut=function(){return t.auth.signOut()},this.doPasswordReset=function(e){return t.auth.sendPasswordResetEmail(e)},this.doSendEmailVerification=function(){return t.auth.currentUser.sendEmailVerification({url:Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_CONFIRMATION_EMAIL_REDIRECT})},this.doPasswordUpdate=function(e){return t.auth.currentUser.updatePassword(e)},this.onAuthUserListener=function(e,n){return t.auth.onAuthStateChanged(function(a){a?t.user(a.uid).once("value").then(function(t){var n=t.val();n.roles||(n.roles=[]),a=Object(v.a)({uid:a.uid,email:a.email,emailVerified:a.emailVerified,providerData:a.providerData},n),e(a)}):n()})},this.user=function(e){return t.db.ref("users/".concat(e))},this.users=function(){return t.db.ref("users")},this.message=function(e){return t.db.ref("messages/".concat(e))},this.messages=function(){return t.db.ref("messages")},S.a.initializeApp(j),this.serverValue=S.a.database.ServerValue,this.emailAuthProvider=S.a.auth.EmailAuthProvider,this.auth=S.a.auth(),this.db=S.a.database(),this.googleProvider=new S.a.auth.GoogleAuthProvider,this.facebookProvider=new S.a.auth.FacebookAuthProvider,this.twitterProvider=new S.a.auth.TwitterAuthProvider},y=function(e){var t=function(t){function n(e){var t;return Object(m.a)(this,n),(t=Object(h.a)(this,Object(p.a)(n).call(this,e))).state={authUser:JSON.parse(localStorage.getItem("authUser"))},t}return Object(f.a)(n,t),Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.listener=this.props.firebase.onAuthUserListener(function(t){localStorage.setItem("authUser",JSON.stringify(t)),e.setState({authUser:t})},function(){localStorage.removeItem("authUser"),e.setState({authUser:null})})}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){return r.a.createElement(c.Provider,{value:this.state.authUser},r.a.createElement(e,this.props))}}]),n}(r.a.Component);return E(t)},C=n(139),k=n(12),P="/home",M=function(e){return function(t){var n=function(n){function a(){return Object(m.a)(this,a),Object(h.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(f.a)(a,n),Object(d.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.listener=this.props.firebase.onAuthUserListener(function(n){e(n)||t.props.history.push("/signin")},function(){return t.props.history.push("/signin")})}},{key:"componentWillUnmount",value:function(){this.listener()}},{key:"render",value:function(){var n=this;return r.a.createElement(c.Consumer,null,function(a){return e(a)?r.a.createElement(t,n.props):null})}}]),a}(r.a.Component);return Object(k.a)(C.a,E)(n)}},I=function(e){var t=function(t){function n(e){var t;return Object(m.a)(this,n),(t=Object(h.a)(this,Object(p.a)(n).call(this,e))).onSendEmailVerification=function(){t.props.firebase.doSendEmailVerification().then(function(){return t.setState({isSent:!0})})},t.state={isSent:!1},t}return Object(f.a)(n,t),Object(d.a)(n,[{key:"render",value:function(){var t=this;return r.a.createElement(c.Consumer,null,function(n){return function(e){return e&&!e.emailVerified&&e.providerData.map(function(e){return e.providerId}).includes("password")}(n)?r.a.createElement("div",null,t.state.isSent?r.a.createElement("p",null,"E-Mail confirmation sent: Check you E-Mails (Spam folder included) for a confirmation E-Mail. Refresh this page once you confirmed your E-Mail."):r.a.createElement("p",null,"Verify your E-Mail: Check you E-Mails (Spam folder included) for a confirmation E-Mail or send another confirmation E-Mail."),r.a.createElement("button",{type:"button",onClick:t.onSendEmailVerification,disabled:t.state.isSent},"Send confirmation E-Mail")):r.a.createElement(e,t.props)})}}]),n}(r.a.Component);return E(t)},U=E(function(e){var t=e.firebase;return r.a.createElement("button",{type:"button",onClick:t.doSignOut},"Sign Out")}),A="ADMIN",T=function(e){var t=e.authUser;return r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(l.a,{to:"/"},"Landing")),r.a.createElement("li",null,r.a.createElement(l.a,{to:P},"Home")),r.a.createElement("li",null,r.a.createElement(l.a,{to:"/account"},"Account")),t.roles.includes(A)&&r.a.createElement("li",null,r.a.createElement(l.a,{to:"/admin"},"Admin")),r.a.createElement("li",null,r.a.createElement(U,null)))},L=function(){return r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(l.a,{to:"/"},"Landing")),r.a.createElement("li",null,r.a.createElement(l.a,{to:"/signin"},"Sign In")))},D=function(){return r.a.createElement(c.Consumer,null,function(e){return e?r.a.createElement(T,{authUser:e}):r.a.createElement(L,null)})},x=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome"))},R=n(10),_={username:"",email:"",passwordOne:"",passwordTwo:"",isAdmin:!1,error:null},N="auth/email-already-in-use",W="\n  An account with this E-Mail address already exists.\n  Try to login with this account instead. If you think the\n  account is already used from one of the social logins, try\n  to sign in with one of them. Afterward, associate your accounts\n  on your personal account page.\n",V=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(h.a)(this,Object(p.a)(t).call(this,e))).onSubmit=function(e){var t=n.state,a=t.username,r=t.email,o=t.passwordOne,i=t.isAdmin,s=[];i&&s.push(A),n.props.firebase.doCreateUserWithEmailAndPassword(r,o).then(function(e){return n.props.firebase.user(e.user.uid).set({username:a,email:r,roles:s})}).then(function(){return n.props.firebase.doSendEmailVerification()}).then(function(){n.setState(Object(v.a)({},_)),n.props.history.push(P)}).catch(function(e){e.code===N&&(e.message=W),n.setState({error:e})}),e.preventDefault()},n.onChange=function(e){n.setState(Object(R.a)({},e.target.name,e.target.value))},n.onChangeCheckbox=function(e){n.setState(Object(R.a)({},e.target.name,e.target.checked))},n.state=Object(v.a)({},_),n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.email,a=e.passwordOne,o=e.passwordTwo,i=e.isAdmin,s=e.error,u=a!==o||""===a||""===n||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"username",value:t,onChange:this.onChange,type:"text",placeholder:"Full Name"}),r.a.createElement("input",{name:"email",value:n,onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement("input",{name:"passwordOne",value:a,onChange:this.onChange,type:"password",placeholder:"Password"}),r.a.createElement("input",{name:"passwordTwo",value:o,onChange:this.onChange,type:"password",placeholder:"Confirm Password"}),r.a.createElement("label",null,"Admin:",r.a.createElement("input",{name:"isAdmin",type:"checkbox",checked:i,onChange:this.onChangeCheckbox})),r.a.createElement("button",{disabled:u,type:"submit"},"Sign Up"),s&&r.a.createElement("p",null,s.message))}}]),t}(a.Component),B=function(){return r.a.createElement("p",null,"Don't have an account? ",r.a.createElement(l.a,{to:"/signup"},"Sign Up"))},F=Object(C.a)(E(V)),G=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"SignUp"),r.a.createElement(F,null))},J={email:"",error:null},H=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(h.a)(this,Object(p.a)(t).call(this,e))).onSubmit=function(e){var t=n.state.email;n.props.firebase.doPasswordReset(t).then(function(){n.setState(Object(v.a)({},J))}).catch(function(e){n.setState({error:e})}),e.preventDefault()},n.onChange=function(e){n.setState(Object(R.a)({},e.target.name,e.target.value))},n.state=Object(v.a)({},J),n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.error,a=""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"email",value:this.state.email,onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement("button",{disabled:a,type:"submit"},"Reset My Password"),n&&r.a.createElement("p",null,n.message))}}]),t}(a.Component),K=function(){return r.a.createElement("p",null,r.a.createElement(l.a,{to:"/pw-forget"},"Forgot Password?"))},z=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"PasswordForget"),r.a.createElement(Y,null))},Y=E(H),$={email:"",password:"",error:null},q="auth/account-exists-with-different-credential",Q="\n  An account with an E-Mail address to\n  this social account already exists. Try to login from\n  this account instead and associate your social accounts on\n  your personal account page.\n",X=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(h.a)(this,Object(p.a)(t).call(this,e))).onSubmit=function(e){var t=n.state,a=t.email,r=t.password;n.props.firebase.doSignInWithEmailAndPassword(a,r).then(function(){n.setState(Object(v.a)({},$)),n.props.history.push(P)}).catch(function(e){n.setState({error:e})}),e.preventDefault()},n.onChange=function(e){n.setState(Object(R.a)({},e.target.name,e.target.value))},n.state=Object(v.a)({},$),n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,n=e.password,a=e.error,o=""===n||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"email",value:t,onChange:this.onChange,type:"text",placeholder:"Email Address"}),r.a.createElement("input",{name:"password",value:n,onChange:this.onChange,type:"password",placeholder:"Password"}),r.a.createElement("button",{disabled:o,type:"submit"},"Sign In"),a&&r.a.createElement("p",null,a.message))}}]),t}(a.Component),Z=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(h.a)(this,Object(p.a)(t).call(this,e))).onSubmit=function(e){n.props.firebase.doSignInWithGoogle().then(function(e){return n.props.firebase.user(e.user.uid).set({username:e.user.displayName,email:e.user.email,roles:[]})}).then(function(){n.setState({error:null}),n.props.history.push(P)}).catch(function(e){e.code===q&&(e.message=Q),n.setState({error:e})}),e.preventDefault()},n.state={error:null},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state.error;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("button",{type:"submit"},"Sign In with Google"),e&&r.a.createElement("p",null,e.message))}}]),t}(a.Component),ee=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(h.a)(this,Object(p.a)(t).call(this,e))).onSubmit=function(e){n.props.firebase.doSignInWithFacebook().then(function(e){return n.props.firebase.user(e.user.uid).set({username:e.additionalUserInfo.profile.name,email:e.additionalUserInfo.profile.email,roles:[]})}).then(function(){n.setState({error:null}),n.props.history.push(P)}).catch(function(e){e.code===q&&(e.message=Q),n.setState({error:e})}),e.preventDefault()},n.state={error:null},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state.error;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("button",{type:"submit"},"Sign In with Facebook"),e&&r.a.createElement("p",null,e.message))}}]),t}(a.Component),te=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(h.a)(this,Object(p.a)(t).call(this,e))).onSubmit=function(e){n.props.firebase.doSignInWithTwitter().then(function(e){return n.props.firebase.user(e.user.uid).set({username:e.additionalUserInfo.profile.name,email:e.additionalUserInfo.profile.email,roles:[]})}).then(function(){n.setState({error:null}),n.props.history.push(P)}).catch(function(e){e.code===q&&(e.message=Q),n.setState({error:e})}),e.preventDefault()},n.state={error:null},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state.error;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("button",{type:"submit"},"Sign In with Twitter"),e&&r.a.createElement("p",null,e.message))}}]),t}(a.Component),ne=Object(k.a)(C.a,E)(X),ae=Object(k.a)(C.a,E)(Z),re=Object(k.a)(C.a,E)(ee),oe=Object(k.a)(C.a,E)(te),ie=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"SignIn"),r.a.createElement(ne,null),r.a.createElement(ae,null),r.a.createElement(re,null),r.a.createElement(oe,null),r.a.createElement(K,null),r.a.createElement(B,null))},se=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={users:null},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.firebase.users().on("value",function(t){e.setState({users:t.val()})})}},{key:"componentWillUnmount",value:function(){this.props.firebase.users().off()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Home Page"),r.a.createElement("p",null,"The Home Page is accessible by every signed in user."),r.a.createElement(me,{users:this.state.users}))}}]),t}(a.Component),ue=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(h.a)(this,Object(p.a)(t).call(this,e))).onListenForMessages=function(){n.setState({loading:!0}),n.props.firebase.messages().orderByChild("createdAt").limitToLast(n.state.limit).on("value",function(e){var t=e.val();if(t){var a=Object.keys(t).map(function(e){return Object(v.a)({},t[e],{uid:e})});n.setState({messages:a,loading:!1})}else n.setState({messages:null,loading:!1})})},n.onChangeText=function(e){n.setState({text:e.target.value})},n.onCreateMessage=function(e,t){n.props.firebase.messages().push({text:n.state.text,userId:t.uid,createdAt:n.props.firebase.serverValue.TIMESTAMP}),n.setState({text:""}),e.preventDefault()},n.onEditMessage=function(e,t){n.props.firebase.message(e.uid).set(Object(v.a)({},e,{text:t,editedAt:n.props.firebase.serverValue.TIMESTAMP}))},n.onRemoveMessage=function(e){n.props.firebase.message(e).remove()},n.onNextPage=function(){n.setState(function(e){return{limit:e.limit+5}},n.onListenForMessages)},n.state={text:"",loading:!1,messages:[],limit:5},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.onListenForMessages()}},{key:"componentWillUnmount",value:function(){this.props.firebase.messages().off()}},{key:"render",value:function(){var e=this,t=this.props.users,n=this.state,a=n.text,o=n.messages,i=n.loading;return r.a.createElement(c.Consumer,null,function(n){return r.a.createElement("div",null,!i&&o&&r.a.createElement("button",{type:"button",onClick:e.onNextPage},"More"),i&&r.a.createElement("div",null,"Loading ..."),o&&r.a.createElement(le,{messages:o.map(function(e){return Object(v.a)({},e,{user:t?t[e.userId]:{userId:e.userId}})}),onEditMessage:e.onEditMessage,onRemoveMessage:e.onRemoveMessage}),!o&&r.a.createElement("div",null,"There are no messages ..."),r.a.createElement("form",{onSubmit:function(t){return e.onCreateMessage(t,n)}},r.a.createElement("input",{type:"text",value:a,onChange:e.onChangeText}),r.a.createElement("button",{type:"submit"},"Send")))})}}]),t}(a.Component),le=function(e){var t=e.messages,n=e.onEditMessage,a=e.onRemoveMessage;return r.a.createElement("ul",null,t.map(function(e){return r.a.createElement(ce,{key:e.uid,message:e,onEditMessage:n,onRemoveMessage:a})}))},ce=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(h.a)(this,Object(p.a)(t).call(this,e))).onToggleEditMode=function(){n.setState(function(e){return{editMode:!e.editMode,editText:n.props.message.text}})},n.onChangeEditText=function(e){n.setState({editText:e.target.value})},n.onSaveEditText=function(){n.props.onEditMessage(n.props.message,n.state.editText),n.setState({editMode:!1})},n.state={editMode:!1,editText:n.props.message.text},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.message,n=e.onRemoveMessage,a=this.state,o=a.editMode,i=a.editText;return r.a.createElement("li",null,o?r.a.createElement("input",{type:"text",value:i,onChange:this.onChangeEditText}):r.a.createElement("span",null,r.a.createElement("strong",null,t.user.username||t.user.userId)," ",t.text," ",t.editedAt&&r.a.createElement("span",null,"(Edited)")),o?r.a.createElement("span",null,r.a.createElement("button",{onClick:this.onSaveEditText},"Save"),r.a.createElement("button",{onClick:this.onToggleEditMode},"Reset")):r.a.createElement("button",{onClick:this.onToggleEditMode},"Edit"),!o&&r.a.createElement("button",{type:"button",onClick:function(){return n(t.uid)}},"Delete"))}}]),t}(a.Component),me=E(ue),de=Object(k.a)(E,I,M(function(e){return!!e}))(se),he={passwordOne:"",passwordTwo:"",error:null},pe=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(h.a)(this,Object(p.a)(t).call(this,e))).onSubmit=function(e){var t=n.state.passwordOne;n.props.firebase.doPasswordUpdate(t).then(function(){n.setState(Object(v.a)({},he))}).catch(function(e){n.setState({error:e})}),e.preventDefault()},n.onChange=function(e){n.setState(Object(R.a)({},e.target.name,e.target.value))},n.state=Object(v.a)({},he),n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state,t=e.passwordOne,n=e.passwordTwo,a=e.error,o=t!==n||""===t;return r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"passwordOne",value:t,onChange:this.onChange,type:"password",placeholder:"New Password"}),r.a.createElement("input",{name:"passwordTwo",value:n,onChange:this.onChange,type:"password",placeholder:"Confirm New Password"}),r.a.createElement("button",{disabled:o,type:"submit"},"Reset My Password"),a&&r.a.createElement("p",null,a.message))}}]),t}(a.Component),fe=E(pe),be=[{id:"password",provider:null},{id:"google.com",provider:"googleProvider"},{id:"facebook.com",provider:"facebookProvider"},{id:"twitter.com",provider:"twitterProvider"}],Ee=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(h.a)(this,Object(p.a)(t).call(this,e))).fetchSignInMethods=function(){n.props.firebase.auth.fetchSignInMethodsForEmail(n.props.authUser.email).then(function(e){return n.setState({activeSignInMethods:e,error:null})}).catch(function(e){return n.setState({error:e})})},n.onSocialLoginLink=function(e){n.props.firebase.auth.currentUser.linkWithPopup(n.props.firebase[e]).then(n.fetchSignInMethods).catch(function(e){return n.setState({error:e})})},n.onDefaultLoginLink=function(e){var t=n.props.firebase.emailAuthProvider.credential(n.props.authUser.email,e);n.props.firebase.auth.currentUser.linkAndRetrieveDataWithCredential(t).then(n.fetchSignInMethods).catch(function(e){return n.setState({error:e})})},n.onUnlink=function(e){n.props.firebase.auth.currentUser.unlink(e).then(n.fetchSignInMethods).catch(function(e){return n.setState({error:e})})},n.state={activeSignInMethods:[],error:null},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.fetchSignInMethods()}},{key:"render",value:function(){var e=this,t=this.state,n=t.activeSignInMethods,a=t.error;return r.a.createElement("div",null,"Sign In Methods:",r.a.createElement("ul",null,be.map(function(t){var a=1===n.length,o=n.includes(t.id);return r.a.createElement("li",{key:t.id},"password"===t.id?r.a.createElement(ve,{onlyOneLeft:a,isEnabled:o,signInMethod:t,onLink:e.onDefaultLoginLink,onUnlink:e.onUnlink}):r.a.createElement(ge,{onlyOneLeft:a,isEnabled:o,signInMethod:t,onLink:e.onSocialLoginLink,onUnlink:e.onUnlink}))})),a&&a.message)}}]),t}(a.Component),ge=function(e){var t=e.onlyOneLeft,n=e.isEnabled,a=e.signInMethod,o=e.onLink,i=e.onUnlink;return n?r.a.createElement("button",{type:"button",onClick:function(){return i(a.id)},disabled:t},"Deactivate ",a.id):r.a.createElement("button",{type:"button",onClick:function(){return o(a.provider)}},"Link ",a.id)},ve=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(h.a)(this,Object(p.a)(t).call(this,e))).onSubmit=function(e){e.preventDefault(),n.props.onLink(n.state.passwordOne),n.setState({passwordOne:"",passwordTwo:""})},n.onChange=function(e){n.setState(Object(R.a)({},e.target.name,e.target.value))},n.state={passwordOne:"",passwordTwo:""},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.onlyOneLeft,n=e.isEnabled,a=e.signInMethod,o=e.onUnlink,i=this.state,s=i.passwordOne,u=i.passwordTwo,l=s!==u||""===s;return n?r.a.createElement("button",{type:"button",onClick:function(){return o(a.id)},disabled:t},"Deactivate ",a.id):r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("input",{name:"passwordOne",value:s,onChange:this.onChange,type:"password",placeholder:"New Password"}),r.a.createElement("input",{name:"passwordTwo",value:u,onChange:this.onChange,type:"password",placeholder:"Confirm New Password"}),r.a.createElement("button",{disabled:l,type:"submit"},"Link ",a.id))}}]),t}(a.Component),Oe=E(Ee),Se=Object(k.a)(I,M(function(e){return!!e}))(function(){return r.a.createElement(c.Consumer,null,function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Account: ",e.email),r.a.createElement(Y,null),r.a.createElement(fe,null),r.a.createElement(Oe,{authUser:e}))})}),je=n(140),we=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={loading:!1,users:[]},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),this.props.firebase.users().on("value",function(t){var n=t.val(),a=Object.keys(n).map(function(e){return Object(v.a)({},n[e],{uid:e})});e.setState({users:a,loading:!1})})}},{key:"componentWillUnmount",value:function(){this.props.firebase.users().off()}},{key:"render",value:function(){var e=this.state,t=e.users,n=e.loading;return r.a.createElement("div",null,r.a.createElement("h2",null,"Usersdfsssssssssssssssssvfvvvv"),n&&r.a.createElement("div",null,"Loading ..."),r.a.createElement("ul",null,t.map(function(e){return r.a.createElement("li",{key:e.uid},r.a.createElement("span",null,r.a.createElement("strong",null,"ID:")," ",e.uid),r.a.createElement("span",null,r.a.createElement("strong",null,"E-Mail:")," ",e.email),r.a.createElement("span",null,r.a.createElement("strong",null,"Username:")," ",e.username),r.a.createElement("span",null,r.a.createElement(l.a,{to:{pathname:"".concat("/admin","/").concat(e.uid),state:{user:e}}},"Details")))})))}}]),t}(a.Component),ye=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(h.a)(this,Object(p.a)(t).call(this,e))).onSendPasswordResetEmail=function(){n.props.firebase.doPasswordReset(n.state.user.email)},n.state=Object(v.a)({loading:!1,user:null},e.location.state),n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.state.user||(this.setState({loading:!0}),this.props.firebase.user(this.props.match.params.id).on("value",function(t){e.setState({user:t.val(),loading:!1})}))}},{key:"componentWillUnmount",value:function(){this.props.firebase.user(this.props.match.params.id).off()}},{key:"render",value:function(){var e=this.state,t=e.user,n=e.loading;return r.a.createElement("div",null,r.a.createElement("h2",null,"User (",this.props.match.params.id,")"),n&&r.a.createElement("div",null,"Loading ..."),t&&r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("strong",null,"ID:")," ",t.uid),r.a.createElement("span",null,r.a.createElement("strong",null,"E-Mail:")," ",t.email),r.a.createElement("span",null,r.a.createElement("strong",null,"Username:")," ",t.username),r.a.createElement("span",null,r.a.createElement("button",{type:"button",onClick:this.onSendPasswordResetEmail},"Send Password Reset"))))}}]),t}(a.Component),Ce=E(we),ke=E(ye),Pe=Object(k.a)(I,M(function(e){return e&&e.roles.includes(A)}))(function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Admin"),r.a.createElement("p",null,"The Admin Page is accessible by every signed in admin user."),r.a.createElement(je.a,null,r.a.createElement(u.a,{exact:!0,path:"/admin/:id",component:ke}),r.a.createElement(u.a,{exact:!0,path:"/admin",component:Ce})))}),Me=y(function(){return r.a.createElement(s.a,null,r.a.createElement("div",null,r.a.createElement(D,null),r.a.createElement("hr",null),r.a.createElement(u.a,{exact:!0,path:"/",component:x}),r.a.createElement(u.a,{path:"/signup",component:G}),r.a.createElement(u.a,{path:"/signin",component:ie}),r.a.createElement(u.a,{path:"/pw-forget",component:z}),r.a.createElement(u.a,{path:P,component:de}),r.a.createElement(u.a,{path:"/account",component:Se}),r.a.createElement(u.a,{path:"/admin",component:Pe})))});i.a.render(r.a.createElement(g.Provider,{value:new w},r.a.createElement(Me,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},74:function(e,t,n){e.exports=n(135)},79:function(e,t,n){}},[[74,2,1]]]);
//# sourceMappingURL=main.96dd9787.chunk.js.map