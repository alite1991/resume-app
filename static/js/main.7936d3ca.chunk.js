(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],{24:function(e,t,n){e.exports=n(49)},29:function(e,t,n){},40:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(13),r=n.n(c),l=(n(29),n(7)),i=n(1),s=n(2),m=n(4),u=n(3),d=n(5),f=(n(40),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.children;return o.a.createElement("div",{className:"fullpage ".concat(this.props.className||"")},e)}}]),t}(a.Component)),p=n(6),h=n(23),b=function(e){return o.a.createElement("div",{onClick:e.onClick,style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",marginBottom:"-34px",transform:"translateY(-45px)"}},o.a.createElement("div",{style:{maxWidth:"30px"}},o.a.createElement("img",{src:e.icon})))},y=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={color:"white"},n.changeColor=function(){n.setState({color:"white"===n.state.color?"yellow":"white"})},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(f,{className:"first"},o.a.createElement("h1",{className:"title",style:{color:this.state.color},onMouseOver:function(){e.changeColor()},onMouseLeave:function(){e.changeColor()}},p.title),o.a.createElement("div",null,o.a.createElement("h2",null,p.subtitle)),o.a.createElement("div",{className:"icons-wrapper"},Object.keys(p.links).map((function(e){return o.a.createElement(h.SocialIcon,{url:p.links[e]})})))),o.a.createElement(l.Link,{activeClass:"active",to:"about",spy:!0,smooth:!0,offset:50,duration:500,delay:100},o.a.createElement(b,{icon:p.icons.down,onClick:function(){return console.log("I'm working")}})))}}]),t}(a.Component),g=(n(46),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(f,{className:"second"},o.a.createElement("h3",null,p.sections[0].title),o.a.createElement("div",{className:"paragraphs"},p.sections[0].items.map((function(e){return o.a.createElement("p",null,e.content)})))))}}]),t}(a.Component)),k=(n(47),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.skill;return o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"image-wrapper"},o.a.createElement("img",{src:e.content.image})),o.a.createElement("div",{className:"skill-title-wrapper"},o.a.createElement("h4",null,e.content.title)))}}]),t}(a.Component)),v=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(f,{className:"third"},o.a.createElement("h3",null,p.sections[1].title),o.a.createElement("div",{className:"cards-wrapper"},p.sections[1].items.map((function(e){return o.a.createElement(k,{skill:e})}))))}}]),t}(a.Component),E=n(8),j=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={color1:"white",counter:0},n.changeColor=function(){n.setState({counter:++n.state.counter%E.length}),console.log(n.state.counter),console.log("counter: "+n.state.counter+" and theme.length:"+E.length+" and %:"+n.state.counter%E.length+" theme["+n.state.counter+"]: "),document.body.style.setProperty("--first-back-color",E[n.state.counter-1].first_backcolor),document.body.style.setProperty("--first-color",E[n.state.counter-1].first_color),document.body.style.setProperty("--second-back-color",E[n.state.counter-1].second_backcolor),document.body.style.setProperty("--second-color",E[n.state.counter-1].second_color),document.body.style.setProperty("--third-back-color",E[n.state.counter-1].third_backcolor),document.body.style.setProperty("--third-color",E[n.state.counter-1].third_color)},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return o.a.createElement("span",{onClick:function(){e.changeColor()}},this.props.children)}}]),t}(a.Component);n(48);var O=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"navigation"},o.a.createElement(l.Link,{activeClass:"active",to:"home",spy:!0,smooth:!0,offset:0,duration:500,delay:100},"Home"),o.a.createElement(l.Link,{to:"about",spy:!0,smooth:!0,offset:0,duration:500,delay:100},"About me"),o.a.createElement(l.Link,{to:"skills",spy:!0,smooth:!0,offset:0,duration:500,delay:100},"My Skills"),o.a.createElement("div",{className:"toggleIcon"},o.a.createElement(j,null,"Change Theme!"))),o.a.createElement(l.Element,{name:"home",className:"element"}),o.a.createElement(y,null),o.a.createElement(l.Element,{name:"about",className:"element"}),o.a.createElement(g,null),o.a.createElement(l.Element,{name:"skills",className:"element"}),o.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},6:function(e){e.exports=JSON.parse('{"title":"Hello, I\'m Alireza Tehrani","subtitle":"Full Stack Dev | Mobile App Dev","links":{"github":"https://github.com/alite1991","stackoverflow":"https://stackoverflow.com/users/2506040/alite","linkedin":"https://www.linkedin.com/in/alireza-tehrani-93163a56/"},"sections":[{"title":"About","items":[{"type":"p","content":"I\'m Web Developer since 2012. I\'m interested in both Back-End and Front-End Development.\\r\\nI\'m 29 years old."}]},{"title":"Skills","items":[{"type":"card","content":{"image":"images/asp.png","title":"ASP.Net"}},{"type":"card","content":{"image":"images/sql.png","title":"SQL"}},{"type":"card","content":{"image":"images/react.png","title":"React"}},{"type":"card","content":{"image":"images/js.png","title":"javascript"}},{"type":"card","content":{"image":"images/html.png","title":"HTML"}},{"type":"card","content":{"image":"images/css.png","title":"CSS"}}]}],"icons":{"down":"images/down.png"}}')},8:function(e){e.exports=JSON.parse('[{"first_color":"#fff","first_backcolor":"#8f1338","second_color":"#fff","second_backcolor":"#7a5f1b","third_color":"#7a5f1b","third_backcolor":"#fff"},{"first_color":"#ed6921","first_backcolor":"#ba9c25","second_color":"#fff","second_backcolor":"#53138f","third_color":"#53138f","third_backcolor":"#fff"},{"first_color":"#0ff","first_backcolor":"#138f15","second_color":"#fff","second_backcolor":"#5d0e61","third_color":"#5d0e61","third_backcolor":"#fff"}]')}},[[24,1,2]]]);
//# sourceMappingURL=main.7936d3ca.chunk.js.map