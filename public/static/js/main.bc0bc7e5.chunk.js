(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,a){},36:function(e,t,a){e.exports=a(80)},41:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(13),o=a.n(r),c=(a(41),a(4)),i=a(5),s=a(7),m=a(6),u=a(8),h=a(84),p=a(83),d=a(15),E=a.n(d),f=a(3),v=function(e){var t=e._id,a=e.Title,n=e.deleteItem,r=(e.editItem,e.Players),o=e.Time,c=e.date,i=e.Location,s=(e.post,e.sumar),m=e.showsumar;return l.a.createElement(f.d,null,l.a.createElement(f.b,null,l.a.createElement(f.c,null,l.a.createElement(f.g,null,"Sports: ",a),l.a.createElement(f.e,null,"Location: ",i),l.a.createElement(f.f,null,"players: ",r,l.a.createElement("button",{onClick:function(){return s()}},function(){return m()})),l.a.createElement(f.f,null,"Date: ",c),l.a.createElement(f.f,null,"Time: ",o),l.a.createElement(f.a,{color:"danger",onClick:function(){return n(t)}},"Eliminar"))))},b="http://localhost:3000/api",g=function(e,t){E.a.post("".concat(b,"/auth/login"),e).then(function(e){localStorage.setItem("token",e.data.token),localStorage.setItem("user",JSON.stringify(e.data.user)),t.push("/home")}).catch(function(e){console.error(e)})},C=function(e,t){E.a.post("".concat(b,"/auth/register"),e).then(function(e){t.push("/login")}).catch(function(e){console.error(e)})},y=function(e,t){E.a.post("".concat(b,"/posts"),e).then(function(e){t.push("/"),console.log("err")}).catch(function(e){console.error("este:",e.response)})},k=function(e,t){console.log(t);var a=new FormData;Object.keys(t).forEach(function(e){a.append(e,t[e])}),E.a.patch("".concat(b,"/auth/").concat(e),a,{headers:{"Content-Type":"multipart/form-data"}}).then(function(e){console.log(e)})},j=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).editItem=function(e){console.log("hola",e)},e.deleteItem=function(t){E.a.delete("".concat(e.base_url,"/posts/").concat(t)).then(function(){var a=e.state.posts;a=a.filter(function(e){return e._id!==t}),e.setState({posts:a})})},e.sumar=function(){e.setState({clicks:e.state.clicks+1})},e.showsumar=function(){e.setState({clicks:e.state.clicks})},e.state={posts:[],clicks:0},e.base_url="http://localhost:3000/api",e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=localStorage.getItem("token");if(!t)return this.props.history.push("/login");(function(e){return E.a.get("".concat(b,"/posts"),{headers:{"x-access-token":e}}).then(function(e){return e}).catch(function(e){console.log(e)})})(t).then(function(t){var a=t.data.posts;e.setState({posts:a}),console.log(t)}).catch(function(e){console.log(e.response)})}},{key:"render",value:function(){var e=this,t=this.state.posts;return l.a.createElement("div",{className:"box"},t.length>0?l.a.createElement("div",null,t.map(function(t){return l.a.createElement(v,Object.assign({deleteItem:e.deleteItem,key:t._id},t,{post:t,editItem:e.editItem,sumar:e.sumar}))})):l.a.createElement("strong",null,"No hay nada"))}}]),t}(n.Component),O=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).handleChange=function(t){var a=e.state.form;a[t.target.name]=t.target.value,e.setState({form:a}),console.log(e.state)},e.handleSubmit=function(t){t.preventDefault(),console.log(e.state.form),y(e.state.form,e.props.history)},e.state={form:{Title:"Soccer",Location:"Viveros",date:"",Time:"",Players:""}},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=this;if(this.props.match.params.id){E.a.get("".concat("http://localhost:3000/api","/posts/").concat(this.props.match.params.id)).then(function(t){var a=t.data.post;e.setState({form:a})})}}},{key:"render",value:function(){var e=this.state.form,t=e.Title,a=e.Location,n=e.date,r=e.Time,o=e.Players;return l.a.createElement("div",{className:"boxes"},l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",null,l.a.createElement(f.i,{htmlFor:""},"Sport"),l.a.createElement(f.h,{type:"select",name:"Title",value:t,onChange:this.handleChange},l.a.createElement("option",{value:"Soccer"},"Soccer"),l.a.createElement("option",{value:"Basketball"},"Basquetbol"),l.a.createElement("option",{value:"Volleyball"},"Volleybol"))),l.a.createElement("div",null,l.a.createElement(f.i,{htmlFor:""},"Location"),l.a.createElement(f.h,{type:"select",name:"Location",value:a,onChange:this.handleChange},l.a.createElement("option",{value:"Viveros"},"Viveros"),l.a.createElement("option",{value:"Alberca"},"Alberca Olimpica"),l.a.createElement("option",{value:"Parque"},"Parque De Los Venados"))),l.a.createElement("div",null,l.a.createElement(f.i,{htmlFor:""},"Players:",l.a.createElement(f.h,{value:o,type:"number",name:"Players",onChange:this.handleChange}))),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:""},"Date:",l.a.createElement(f.h,{value:n,type:"date",name:"date",onChange:this.handleChange}))),l.a.createElement("div",null,l.a.createElement(f.i,{htmlFor:""},"Time:",l.a.createElement(f.h,{value:r,type:"time",name:"Time",onChange:this.handleChange}))),l.a.createElement(f.a,{type:"submit",color:"success"},"Crear"))),l.a.createElement("div",{className:"home-row"},l.a.createElement(j,null)))}}]),t}(n.Component),S=a(81),w=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).handleChange=function(t){var a=e.state.user;a[t.target.name]=t.target.value,e.setState({user:a}),console.log(a)},e.handleSubmit=function(t){t.preventDefault(),g(e.state.user,e.props.history)},e.state={user:{email:"",password:""}},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.user,t=e.email,a=e.password;return l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"box"},l.a.createElement("div",null,l.a.createElement("label",{htmlFor:""},"Email:",l.a.createElement("input",{onChange:this.handleChange,type:"email",value:t,name:"email",placeholder:"ejemplo@ejemplo.com"}))),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:""},"Password:",l.a.createElement("input",{onChange:this.handleChange,type:"password",name:"password",value:a}))),l.a.createElement("button",{type:"submit"},"Login")),l.a.createElement(S.a,{to:"/register"},"No tienes cuenta"))}}]),t}(l.a.Component),P=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).handleChange=function(t){var a=e.state.form;a[t.target.name]=t.target.files?t.target.files[0]:t.target.value,e.setState({form:a}),console.log(e.state.form)},e.handleSubmit=function(t){t.preventDefault(),console.log(e.state.form),k(e.props.match.params.id,e.state.form)},e.state={form:{username:""}},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("img",{src:"",alt:""}),l.a.createElement("strong",null,"Mi email"),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",null,l.a.createElement("label",{htmlFor:""},"Email:",l.a.createElement("input",{type:"text",name:"email",onChange:this.handleChange}))),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:""},"Foto:",l.a.createElement("input",{onClick:this.handleChange,type:"file",name:"picture"}))),l.a.createElement("button",{type:"submit"},"Actualizar")))}}]),t}(n.Component),F=(a(31),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).handleChange=function(t){var a=e.state.user;a[t.target.name]=t.target.value,e.setState({user:a}),console.log(e.state)},e.handleSubmit=function(t){t.preventDefault(),C(e.state.user,e.props.history)},e.state={user:{username:"",email:"",password:"",confirmPassword:""}},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.user,t=e.email,a=e.password,n=e.confirmPassword,r=e.username;return l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"box"},l.a.createElement("div",null,l.a.createElement("label",{htmlFor:""},"Username",l.a.createElement("input",{onChange:this.handleChange,type:"username",value:r,name:"username",placeholder:"username"}))),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:""},"Email:",l.a.createElement("input",{onChange:this.handleChange,type:"email",value:t,name:"email",placeholder:"ejemplo@ejemplo.com"}))),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:""},"Password:",l.a.createElement("input",{onChange:this.handleChange,type:"password",name:"password",value:a}))),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:""},"Confirm Password:",l.a.createElement("input",{onChange:this.handleChange,type:"password",value:n,name:"confirmPassword"}))),l.a.createElement("button",{type:"submit"},"Register")))}}]),t}(n.Component)),I=a(11),T={width:"100%",height:"100%"},x=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(I.Map,{google:this.props.google,zoom:14,style:T,initialCenter:{lat:19.398054,lng:-99.171665}},l.a.createElement(I.Marker,{onClick:this.onMarkerClick,name:"Current location"}),l.a.createElement(I.InfoWindow,{onClose:this.onInfoWindowClose},l.a.createElement("div",null)),l.a.createElement(I.Marker,{name:"Viveros",position:{lat:19.351403,lng:-99.171449}}),l.a.createElement(I.Marker,null),l.a.createElement(I.Marker,{name:"Parque de los Venados",position:{lat:19.373137,lng:-99.155747}}),l.a.createElement(I.Marker,null),l.a.createElement(I.Marker,{name:"Alberca Olimpica",position:{lat:19.35846,lng:-99.154696}}),l.a.createElement(I.Marker,null),l.a.createElement(I.Marker,{name:"Parque San Lorenzo",position:{lat:19.376244,lng:-99.176315}}),l.a.createElement(I.Marker,null))}}]),t}(l.a.Component),M=Object(I.GoogleApiWrapper)({apiKey:"AIzaSyDt0SLdf6TYG8eNb0F50yfI1u9hqFX29sw"})(x),L=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={form:{Title:"Soccer",Location:"Viveros",date:"",Time:"",Players:""}},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.form,t=e.Title,a=e.Location,n=e.date,r=e.Time,o=e.Players;return l.a.createElement("div",null,l.a.createElement("div",{className:"boxes"},l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",null,l.a.createElement(f.i,{htmlFor:""},"Title"),l.a.createElement(f.h,{type:"select",name:"Title",value:t,onChange:this.handleChange},l.a.createElement("option",{value:"Soccer"},"Soccer"),l.a.createElement("option",{value:"Basketball"},"Basquetbol"),l.a.createElement("option",{value:"Volleyball"},"Volleybol"))),l.a.createElement("div",null,l.a.createElement(f.i,{htmlFor:""},"Location"),l.a.createElement(f.h,{type:"select",name:"Location",value:a,onChange:this.handleChange},l.a.createElement("option",{value:"Viveros"},"Viveros"),l.a.createElement("option",{value:"Alberca"},"Alberca Olimpica"),l.a.createElement("option",{value:"Parque"},"Parque De Los Venados"))),l.a.createElement("div",null,l.a.createElement(f.i,{htmlFor:""},"Players:",l.a.createElement(f.h,{value:o,type:"number",name:"Players",onChange:this.handleChange}))),l.a.createElement("div",null,l.a.createElement("label",{htmlFor:""},"Date:",l.a.createElement(f.h,{value:n,type:"date",name:"date",onChange:this.handleChange}))),l.a.createElement("div",null,l.a.createElement(f.i,{htmlFor:""},"Time:",l.a.createElement(f.h,{value:r,type:"time",name:"Time",onChange:this.handleChange}))),l.a.createElement(f.a,{type:"submit",color:"success"},"Crear")))))}}]),t}(l.a.Component),N=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).IncrementItem=function(){a.setState({clicks:a.state.clicks+1})},a.DecreaseItem=function(){a.setState({clicks:a.state.clicks-1})},a.ToggleClick=function(){a.setState({show:!a.state.show})},a.state={clicks:0,show:!0},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("button",{onClick:this.IncrementItem},this.state.clicks),l.a.createElement("button",{onClick:this.DecreaseItem},"Click to decrease by 1"),l.a.createElement("button",{onClick:this.ToggleClick},this.state.show?"Hide number":"Show number"),this.state.show?l.a.createElement("h2",null,this.state.clicks):"")}}]),t}(n.Component),V=function(){return l.a.createElement(h.a,null,l.a.createElement(p.a,{exact:!0,path:"/Home",component:j}),l.a.createElement(p.a,{exact:!0,path:"/api/posts",component:O}),l.a.createElement(p.a,{exact:!0,path:"/",component:w}),l.a.createElement(p.a,{exact:!0,path:"/register",component:F}),l.a.createElement(p.a,{exact:!0,path:"/Profile",component:P}),l.a.createElement(p.a,{exact:!0,path:"/maps",component:M}),l.a.createElement(p.a,{exact:!0,path:"/api/edit",component:L}),l.a.createElement(p.a,{exact:!0,path:"/click",component:N}))},D=function(){return l.a.createElement(f.j,{expand:"md",className:"stick-nav"},l.a.createElement(f.k,{href:"/home"},"Home"),l.a.createElement(f.k,{href:"/Profile"},"Profile"),l.a.createElement(f.k,{href:"/api/posts"},"Games"),l.a.createElement(f.k,{href:"/maps"},"Maps"),l.a.createElement(f.k,{href:"/click"},"Maps"))},q=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"casa"},l.a.createElement("div",{className:"cambia"},l.a.createElement(D,null)),l.a.createElement("div",{className:"App"},l.a.createElement(V,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=a(82);a(78);o.a.render(l.a.createElement(function(){return l.a.createElement(A.a,null,l.a.createElement(q,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[36,2,1]]]);
//# sourceMappingURL=main.bc0bc7e5.chunk.js.map