(this.webpackJsonppicss=this.webpackJsonppicss||[]).push([[0],{19:function(e,t,a){e.exports=a(44)},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),s=a.n(c),i=a(7),u=a.n(i),o=a(2),m=a(3),l=a(5),p=a(4),h=a(6),f=a(18),b=a.n(f).a.create({baseURL:"https://api.unsplash.com",headers:{Authorization:"Client-ID 9e7c77d43c955415d9fa6480897d6bc37831cabe012e7caa7d8221d3463d5749"}}),d=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={term:" "},a.onFormSumbit=function(e){e.preventDefault(),a.props.onSubmit(a.state.term)},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"ui segment"},r.a.createElement("form",{onSubmit:this.onFormSumbit,className:"ui form"},r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Image Search"),r.a.createElement("input",{type:"text",value:this.state.term,onChange:function(t){return e.setState({term:t.target.value})}}))))}}]),t}(r.a.Component),v=(a(43),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(p.a)(t).call(this,e))).setSpans=function(){var e=a.imageRef.current.clientHeight,t=Math.ceil(e/10);a.setState({spans:t})},a.state={spans:0},a.imageRef=r.a.createRef(),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.imageRef.current.addEventListener("load",this.setSpans)}},{key:"render",value:function(){var e=this.props.image,t=e.description,a=e.urls;return r.a.createElement("div",{style:{gridRowEnd:"span ".concat(this.state.spans)}},r.a.createElement("img",{ref:this.imageRef,alt:t,src:a.regular}))}}]),t}(r.a.Component)),g=function(e){var t=e.images.map((function(e){return r.a.createElement(v,{key:e.id,image:e})}));return r.a.createElement("div",{className:"image-list"},t)},S=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={images:[]},a.onSearchSubmit=function(e){var t;return u.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.a.awrap(b.get("/search/photos",{params:{query:e}}));case 2:t=n.sent,a.setState({images:t.data.results});case 4:case"end":return n.stop()}}))},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ui container",style:{marginTop:"10px"}},r.a.createElement(d,{onSubmit:this.onSearchSubmit}),r.a.createElement(g,{images:this.state.images}))}}]),t}(r.a.Component);s.a.render(r.a.createElement(S,null),document.querySelector("#root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.00bb55cc.chunk.js.map