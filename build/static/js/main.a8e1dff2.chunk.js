(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/death-star.28fc51ff.svg"},function(e,t,a){e.exports=a(30)},,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(10),l=a.n(s),c=(a(17),a(1)),i=a(2),o=a(5),u=a(4),m=a(6),p=a(3),d=a.n(p),h=a(7),f=function(){function e(){var t=this;Object(c.a)(this,e),this._apiBase="https://swapi.co/api",this._extractId=function(e){return e.url.match(/\/([0-9]*)\/$/)[1]},this._transformPlanet=function(e){return{id:t._extractId(e),name:e.name,population:e.population,rotationPeriod:e.rotation_period,diameter:e.diameter}},this._transformStarship=function(e){return{id:t._extractId(e),name:e.name,model:e.model,manufacturer:e.manufacturer,costInCredits:e.costInCredits,length:e.length,crew:e.crew,passengers:e.passengers,cargoCapacity:e.cargoCapacity}},this._transformPerson=function(e){return{id:t._extractId(e),name:e.name,gender:e.gender,birthYear:e.birth_year,eyeColor:e.eye_color}}}return Object(i.a)(e,[{key:"getResource",value:function(){var e=Object(h.a)(d.a.mark(function e(t){var a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this._apiBase).concat(t));case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(t,", received ").concat(a.status));case 5:return e.next=7,a.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getAllPerson",value:function(){var e=Object(h.a)(d.a.mark(function e(){var t;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResource("/people/");case 2:return t=e.sent,e.abrupt("return",t.results.map(this._transformPerson));case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getPerson",value:function(){var e=Object(h.a)(d.a.mark(function e(t){var a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResource("/people/".concat(t,"/"));case 2:return a=e.sent,e.abrupt("return",this._transformPerson(a));case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getAllPlanets",value:function(){var e=Object(h.a)(d.a.mark(function e(){var t;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResource("/planets/");case 2:return t=e.sent,e.abrupt("return",t.results.map(this._transformPlanet));case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getPlanet",value:function(){var e=Object(h.a)(d.a.mark(function e(t){var a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResource("/planets/".concat(t,"/"));case 2:return a=e.sent,e.abrupt("return",this._transformPlanet(a));case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getAllStarships",value:function(){var e=Object(h.a)(d.a.mark(function e(){var t;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResource("/starships/");case 2:return t=e.sent,e.abrupt("return",t.results.map(this._transformStarship));case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getStarship",value:function(){var e=Object(h.a)(d.a.mark(function e(t){var a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResource("/starships/".concat(t,"/"));case 2:return a=e.sent,e.abrupt("return",this._transformStarship(a));case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),e}(),v=(a(21),function(){return r.a.createElement("nav",{className:"header d-flex justify-content-between"},r.a.createElement("div",null,r.a.createElement("h1",null,"Star DB")),r.a.createElement("div",{className:"d-flex align-items-center"},r.a.createElement("a",{href:"/"},"People"),r.a.createElement("a",{className:"ml-5",href:"/"},"Planets"),r.a.createElement("a",{className:"ml-5",href:"/"},"Starship")))}),E=(a(22),a(23),function(){return r.a.createElement("div",{className:"lds-css ng-scope"},r.a.createElement("div",{className:"lds-double-ring"},r.a.createElement("div",null),r.a.createElement("div",null)))}),g=(a(24),a(11)),b=a.n(g),y=function(){return r.a.createElement("div",{className:"error-indicator"},r.a.createElement("div",null,r.a.createElement("img",{src:b.a,alt:"Error Icon"}),r.a.createElement("br",null),r.a.createElement("span",{className:"boom text-warning text-uppercase"},"Boom!"),r.a.createElement("br",null),r.a.createElement("span",{className:"text-warning"},"something has gone terribly wrang"),r.a.createElement("br",null),r.a.createElement("span",{className:"text-warning"},"(but we already sent our droids to fix it)")))},N=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).swapiService=new f,a.state={planet:{},loading:!0},a.onPlanetLoaded=function(e){a.setState({planet:e,loading:!1,error:!1})},a.onError=function(){a.setState({error:!0,loading:!1})},a.updatePlanet=function(){var e=Math.floor(12*Math.random())+3;a.swapiService.getPlanet(e).then(a.onPlanetLoaded).catch(a.onError)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.updatePlanet(),this.interval=setInterval(this.updatePlanet,5e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.state,t=e.planet,a=e.loading,n=e.error,s=!(a||n),l=n?r.a.createElement(y,null):null,c=a?r.a.createElement("div",{className:"d-flex align-items-center m-auto"},r.a.createElement(E,null)):null,i=s?r.a.createElement(w,{planet:t}):null;return r.a.createElement("nav",{className:"random-planet"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"d-flex"},l,c,i)))}}]),t}(n.Component),w=function(e){var t=e.planet,a=t.id,s=t.name,l=t.population,c=t.rotationPeriod,i=t.diameter;return r.a.createElement(n.Fragment,null,r.a.createElement("div",null,r.a.createElement("img",{className:"card-img m-3 rounded-lg",alt:"Planet from Star Wars",src:"https://starwars-visualguide.com/assets/img/planets/".concat(a,".jpg")})),r.a.createElement("div",{className:"d-flex align-items-center"},r.a.createElement("div",null,r.a.createElement("h3",null,s),r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement("span",{className:"mr-2"},"Population:"),r.a.createElement("span",null,l)),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("span",{className:"mr-2"},"Rotation Period:"),r.a.createElement("span",null,c)),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("span",{className:"mr-2"},"Diameter:"),r.a.createElement("span",null,i))))))},j=N,P=(a(25),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).swapiService=new f,a.state={itemList:null},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.swapiService.getAllPerson().then(function(t){e.setState({itemList:t})})}},{key:"renderItems",value:function(e){var t=this;return e.map(function(e){var a=e.id,n=e.name;return r.a.createElement("li",{className:"list-group-item",key:a,onClick:function(){return t.props.onItemSelected(a)}},n)})}},{key:"render",value:function(){var e=this.state.itemList;if(!e)return r.a.createElement(E,null);var t=this.renderItems(e);return r.a.createElement("div",{className:"item-list mt-3 w-100"},t)}}]),t}(n.Component)),k=(a(26),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0; s<n; s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).swapiService=new f,a.state={planetList:null},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.swapiService.getAllPlanets().then(function(t){e.setState({planetList:t})})}},{key:"renderItems",value:function(e){var t=this;return e.map(function(e){var a=e.id,n=e.name;return r.a.createElement("li",{className:"list-group-item",key:a,onClick:function(){return t.props.onItemSelected(a)}},n)})}},{key:"render",value:function(){var e=this.state.planetList;if(!e)return r.a.createElement(E,null);var t=this.renderItems(e);return r.a.createElement("div",{className:"item-list mt-3 w-100"},t)}}]),t}(n.Component)),O=(a(27),a(28),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={renderError:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return console.log("render"),this.state.renderError&&(this.foo.bar=0),r.a.createElement("button",{className:"error-button btn btn-danger btn-lg mt-3",onClick:function(){return e.setState({renderError:!0})}},"Throw Error")}}]),t}(n.Component)),S=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).swapiService=new f,a.state={person:null,loading:!1,hasError:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.updatePerson()}},{key:"componentDidUpdate",value:function(e){this.props.personId!==e.personId&&this.updatePerson()}},{key:"componentDidCatch",value:function(e,t){console.log("componentDidCatch()"),this.setState({hasError:!0})}},{key:"updatePerson",value:function(){var e=this,t=this.props.personId;t&&this.swapiService.getPerson(t).then(function(t){e.setState({person:t})})}},{key:"render",value:function(){if(!this.state.person)return r.a.createElement("p",{className:"mt-3"},"Select a person from a list");if(this.state.hasError)return r.a.createElement(y,null);var e=this.state.person,t=e.id,a=e.name,n=e.gender,s=e.birthYear,l=e.eyeColor;return r.a.createElement("nav",{className:"person-details ml-lg-3 mt-3 w-100"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"d-flex"},r.a.createElement("div",null,r.a.createElement("img",{className:"card-img m-3 rounded-lg",alt:"Person from Star Wars",src:"https://starwars-visualguide.com/assets/img/characters/".concat(t,".jpg")})),r.a.createElement("div",{className:"d-flex align-items-center"},r.a.createElement("div",null,r.a.createElement("h3",null,a),r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement("span",{className:"mr-2"},"Gender:"),r.a.createElement("span",null,n)),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("span",{className:"mr-2"},"Birth Year:"),r.a.createElement("span",null,s)),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("span",{className:"mr-2"},"Eye Color:"),r.a.createElement("span",null,l)))))),r.a.createElement("div",{className:"d-flex justify-content-center mb-4"},r.a.createElement(O,null))))}}]),t}(n.Component),x=(a(29),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).swapiService=new f,a.state={planet:null,loading:!1,hasError:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.updatePlanet()}},{key:"componentDidUpdate",value:function(e){this.props.planetId!==e.planetId&&this.updatePlanet()}},{key:"componentDidCatch",value:function(e,t){console.log("componentDidCatch()"),this.setState({hasError:!0})}},{key:"updatePlanet",value:function(){var e=this,t=this.props.planetId;t&&this.swapiService.getPlanet(t).then(function(t){e.setState({planet:t})})}},{key:"render",value:function(){if(!this.state.planet)return r.a.createElement("p",{className:"mt-3"},"Select a planet from a list");if(this.state.hasError)return r.a.createElement(y,null);var e=this.state.planet,t=e.id,a=e.name,n=e.population,s=e.rotationPeriod,l=e.diameter;return r.a.createElement("nav",{className:"planet-details ml-lg-3 mt-3 w-100"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"d-flex"},r.a.createElement("div",null,r.a.createElement("img",{className:"card-img m-3 rounded-lg",alt:"Planet from Star Wars",src:"https://starwars-visualguide.com/assets/img/planets/".concat(t,".jpg")})),r.a.createElement("div",{className:"d-flex align-items-center"},r.a.createElement("div",null,r.a.createElement("h3",null,a),r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement("span",{className:"mr-2"},"Population:"),r.a.createElement("span",null,n)),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("span",{className:"mr-2"},"Rotation Period:"),r.a.createElement("span",null,s)),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("span",{className:"mr-2"},"Diameter:"),r.a.createElement("span",null,l)))))),r.a.createElement("div",{className:"d-flex justify-content-center mb-4"},r.a.createElement(O,null))))}}]),t}(n.Component)),I=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={selectedPerson:5,selectedPlanet:5,hasError:!1},a.onPersonSelected=function(e){a.setState({selectedPerson:e})},a.onPlanetSelected=function(e){a.setState({selectedPlanet:e})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidCatch",value:function(e,t){console.log("componentDidCatch()"),this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement(y,null):r.a.createElement("div",{className:"container"},r.a.createElement(v,null),r.a.createElement("h2",{className:"mt-3"},"Random Planet"),r.a.createElement(j,null),r.a.createElement("h2",{className:"mt-3"},"Select a Person"),r.a.createElement("div",{className:"d-lg-flex mb-3"},r.a.createElement(P,{onItemSelected:this.onPersonSelected}),r.a.createElement(S,{personId:this.state.selectedPerson})),r.a.createElement("h2",{className:"mt-3"},"Select a Planet"),r.a.createElement("div",{className:"d-lg-flex mb-3"},r.a.createElement(k,{onItemSelected:this.onPlanetSelected}),r.a.createElement(x,{planetId:this.state.selectedPlanet})))}}]),t}(n.Component);l.a.render(r.a.createElement(I,null),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.a8e1dff2.chunk.js.map