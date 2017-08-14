webpackJsonp([0],{877:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function a(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0}),t.d(n,"default",function(){return T});var i,s,c=t(912),u=(t.n(c),t(9)),l=t.n(u),p=t(193),M=(t.n(p),t(194)),m=t(294),g=t.n(m),f=t(914),d=t.n(f),N=t(900),y=t(905),j=t(915),h=t(908),x=t(916),D=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),b={counter:t(909),slider:t(917),countdown:t(918),github:t(910),connected:t(919)},T=(i=Object(p.kea)({}))(s=function(e){function n(){return r(this,n),o(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return a(n,e),D(n,[{key:"render",value:function(){return l.a.createElement("div",{className:"homepage-scene"},l.a.createElement("div",{className:"landing"},l.a.createElement("div",{className:"intro"},l.a.createElement("img",{src:d.a,alt:""}),l.a.createElement("div",{className:"text"},l.a.createElement("h1",null,"Kea"),l.a.createElement("strong",null,"High level abstraction between ",l.a.createElement("nobr",null,"React and Redux")),l.a.createElement("div",{className:"links"},l.a.createElement(M.a,{to:"/guide/installation"},"Get started"),"    ",l.a.createElement("a",{href:"https://www.github.com/keajs/kea"},"Fork on GitHub"),"    ",l.a.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=keajs&repo=kea&type=star&count=true",frameBorder:"0",scrolling:"0",width:"100px",height:"20px",style:{verticalAlign:"sub"}}))))),l.a.createElement("h2",null,"Simple counter"),l.a.createElement("div",{className:"split"},l.a.createElement("div",{className:"code"},l.a.createElement(g.a,{className:"javascript"},b.counter)),l.a.createElement("div",{className:"description"},l.a.createElement("div",{className:"demo"},l.a.createElement(y.a,null)),l.a.createElement("br",null),"Read the guide: ",l.a.createElement(M.a,{to:"/guide/counter"},"Counter"))),l.a.createElement("h2",null,"Slider"),l.a.createElement("div",{className:"split"},l.a.createElement("div",{className:"code"},l.a.createElement(g.a,{className:"javascript"},b.slider)),l.a.createElement("div",{className:"description"},l.a.createElement("div",{className:"demo"},l.a.createElement(N.a,{id:999})),l.a.createElement("br",null),"Read the guide: ",l.a.createElement(M.a,{to:"/guide/sliders"},"Sliders"))),l.a.createElement("h2",null,"Github"),l.a.createElement("div",{className:"split"},l.a.createElement("div",{className:"code"},l.a.createElement(g.a,{className:"javascript"},b.github)),l.a.createElement("div",{className:"description"},l.a.createElement("div",{className:"demo"},l.a.createElement(h.a,null)),l.a.createElement("br",null),"Read the guide: ",l.a.createElement(M.a,{to:"/guide/github"},"Github"))),l.a.createElement("h2",null,"Debounced countdown"),l.a.createElement("div",{className:"split"},l.a.createElement("div",{className:"code"},l.a.createElement(g.a,{className:"javascript"},b.countdown)),l.a.createElement("div",{className:"description"},l.a.createElement("div",{className:"demo"},l.a.createElement(j.a,null)),l.a.createElement("br",null))),l.a.createElement("h2",null,"Connected logic stores"),l.a.createElement("div",{className:"split"},l.a.createElement("div",{className:"code"},l.a.createElement(g.a,{className:"javascript"},b.connected)),l.a.createElement("div",{className:"description"},l.a.createElement("div",{className:"demo"},l.a.createElement(x.a,null)),l.a.createElement("br",null),"Read the guide: ",l.a.createElement(M.a,{to:"/guide/connected"},"Connected"))))}}]),n}(u.Component))||s},895:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var o=t(15),a=t.n(o),i=t(193),s=(t.n(i),Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e});n.a=Object(i.kea)({actions:function(){return{toggleFeature:function(e){return{feature:e}}}},reducers:function(e){var n=e.actions;return{features:[{},a.a.object,r({},n.toggleFeature,function(e,n){var t=n.feature;return s({},e,r({},t,!e[t]))})]}}})},896:function(e,n,t){var r=t(901);"string"==typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;t(126)(r,o);r.locals&&(e.exports=r.locals)},897:function(e,n,t){"use strict";var r=function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return new Promise(function(t){return setTimeout(function(){return t(n)},e)})};n.a=r},898:function(e,n,t){"use strict";n.a=function(e){return Array.apply(null,{length:e}).map(Number.call,Number)}},899:function(e,n,t){"use strict";n.a=[{src:t(902),url:"https://www.flickr.com/photos/kevinglisson/5855716978",author:"Kevin Glisson"},{src:t(903),url:"https://www.flickr.com/photos/geoftheref/9770370326/",author:"Geof Wilson"},{src:t(904),url:"https://www.flickr.com/photos/apertureeffect/20391690360",author:"Rafal Wadowski"}]},900:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function a(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.d(n,"a",function(){return h});var s,c,u=t(896),l=(t.n(u),t(9)),p=t.n(l),M=t(15),m=t.n(M),g=t(193),f=(t.n(g),t(65)),d=t(897),N=t(898),y=t(899),j=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),h=(s=Object(g.kea)({key:function(e){return e.id},path:function(e){return["scenes","homepage","slider",e]},actions:function(){return{updateSlide:function(e){return{index:e}}}},reducers:function(e){var n=e.actions,t=e.key;return{currentSlide:[e.props.initialSlide||0,m.a.number,i({},n.updateSlide,function(e,n){return n.key===t?n.index%y.a.length:e})]}},selectors:function(e){var n=e.selectors;return{currentImage:[function(){return[n.currentSlide]},function(e){return y.a[e]},m.a.object]}},start:regeneratorRuntime.mark(function e(){var n,t,r,o,a=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=this.actions.updateSlide,console.log("Starting homepage slider saga");case 2:return e.next=5,Object(f.race)({change:Object(f.take)(function(e){return e.type===n.toString()&&e.payload.key===a.key}),timeout:Object(d.a)(5e3)});case 5:if(t=e.sent,!(r=t.timeout)){e.next=13;break}return e.next=10,this.get("currentSlide");case 10:return o=e.sent,e.next=13,Object(f.put)(n(o+1));case 13:e.next=2;break;case 15:case"end":return e.stop()}},e,this)}),stop:regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log("Stopping homepage slider saga");case 1:case"end":return e.stop()}},e,this)}),takeEvery:function(e){var n=e.actions,t=e.workers;return i({},n.updateSlide,t.updateSlide)},workers:{updateSlide:regeneratorRuntime.mark(function e(n){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.payload.key===this.key&&console.log("slide update triggered",n.payload.key,this.key,this.props.id);case 1:case"end":return e.stop()}},e,this)})}}))(c=function(e){function n(){return r(this,n),o(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return a(n,e),j(n,[{key:"render",value:function(){var e=this.props,n=e.currentSlide,t=e.currentImage,r=this.actions.updateSlide,o="Image copyright by "+t.author;return p.a.createElement("div",{className:"kea-slider"},p.a.createElement("img",{src:t.src,alt:o,title:o}),p.a.createElement("div",{className:"buttons"},Object(N.a)(y.a.length).map(function(e){return p.a.createElement("span",{key:e,className:e===n?"selected":"",onClick:function(){return r(e)}})})))}}]),n}(l.Component))||c},901:function(e,n,t){n=e.exports=t(125)(void 0),n.push([e.i,".kea-slider {\n  display: block;\n  width: 100%;\n  height: auto;\n  text-align: center;\n  position: relative;\n}\n\n  .kea-slider img {\n    width: 100%;\n    top: 0;\n    left: 0;\n    z-index: 1;\n  }\n\n  .kea-slider .buttons {\n    position: absolute;\n    bottom: 10px;\n    width: 100%;\n    text-align: center;\n    z-index: 2;\n    line-height: 10px;\n    height: 10px;\n  }\n\n  .kea-slider .buttons span {\n      background: #fff;\n      cursor: pointer;\n      display: inline-block;\n      width: 10px;\n      height: 10px;\n      border-radius: 10px;\n      margin: 0 5px\n    }\n\n  .kea-slider .buttons span.selected {\n  background: #08FF04;\n}\n",""])},902:function(e,n,t){e.exports=t.p+"f3950cfdf9b297de16cb49e4405ee0d3.jpg"},903:function(e,n,t){e.exports=t.p+"a63cfb870de9e2d5a64f396ede8c30b0.jpg"},904:function(e,n,t){e.exports=t.p+"278689e0ed22536cefa31c0ad4ef72bd.jpg"},905:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function a(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.d(n,"a",function(){return d});var s,c,u=t(906),l=(t.n(u),t(9)),p=t.n(l),M=t(15),m=t.n(M),g=t(193),f=(t.n(g),function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}()),d=(s=Object(g.kea)({actions:function(){return{increment:function(){return{amount:arguments.length>0&&void 0!==arguments[0]?arguments[0]:1}},decrement:function(){return{amount:arguments.length>0&&void 0!==arguments[0]?arguments[0]:1}}}},reducers:function(e){var n,t=e.actions;e.key,e.props;return{counter:[0,m.a.number,(n={},i(n,t.increment,function(e,n){return e+n.amount}),i(n,t.decrement,function(e,n){return e-n.amount}),n)]}},selectors:function(e){var n=e.selectors;return{doubleCounter:[function(){return[n.counter]},function(e){return 2*e},m.a.number]}}}))(c=function(e){function n(){return r(this,n),o(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return a(n,e),f(n,[{key:"render",value:function(){var e=this.props,n=e.counter,t=e.doubleCounter,r=this.actions,o=r.increment,a=r.decrement;return p.a.createElement("div",{className:"kea-counter"},"Count: ",n,p.a.createElement("br",null),"Doublecount: ",t,p.a.createElement("br",null),p.a.createElement("button",{onClick:function(){return o(1)}},"Increment"),p.a.createElement("button",{onClick:function(){return a(1)}},"Decrement"))}}]),n}(l.Component))||c},906:function(e,n,t){var r=t(907);"string"==typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;t(126)(r,o);r.locals&&(e.exports=r.locals)},907:function(e,n,t){n=e.exports=t(125)(void 0),n.push([e.i,".kea-counter {\n  margin: 0;\n}\n",""])},908:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function a(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.d(n,"a",function(){return N});var s,c,u=t(9),l=t.n(u),p=t(15),M=t.n(p),m=t(193),g=(t.n(m),t(65)),f=t(195),d=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),N=(s=Object(m.kea)({actions:function(){return{setUsername:function(e){return{username:e}},setRepositories:function(e){return{repositories:e}},setFetchError:function(e){return{message:e}}}},reducers:function(e){var n,t,r,o=e.actions;return{username:["keajs",M.a.string,i({},o.setUsername,function(e,n){return n.username})],repositories:[[],M.a.array,(n={},i(n,o.setUsername,function(){return[]}),i(n,o.setRepositories,function(e,n){return n.repositories}),n)],isLoading:[!0,M.a.bool,(t={},i(t,o.setUsername,function(){return!0}),i(t,o.setRepositories,function(){return!1}),i(t,o.setFetchError,function(){return!1}),t)],error:[null,M.a.string,(r={},i(r,o.setUsername,function(){return null}),i(r,o.setFetchError,function(e,n){return n.message}),r)]}},selectors:function(e){var n=e.selectors;return{sortedRepositories:[function(){return[n.repositories]},function(e){return e.sort(function(e,n){return n.stargazers_count-e.stargazers_count})},M.a.array]}},start:regeneratorRuntime.mark(function e(){var n,t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.actions.setUsername,e.next=3,this.get("username");case 3:return t=e.sent,e.next=6,Object(g.put)(n(t));case 6:case"end":return e.stop()}},e,this)}),takeLatest:function(e){var n=e.actions,t=e.workers;return i({},n.setUsername,t.fetchRepositories)},workers:{fetchRepositories:regeneratorRuntime.mark(function e(n){var t,r,o,a,i,s,c;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.actions,r=t.setRepositories,o=t.setFetchError,a=n.payload.username,e.next=4,Object(f.delay)(100);case 4:return e.next=6,window.fetch("https://api.github.com/users/"+a+"/repos?per_page=250");case 6:if(i=e.sent,200!==i.status){e.next=15;break}return e.next=10,i.json();case 10:return s=e.sent,e.next=13,Object(g.put)(r(s));case 13:e.next=20;break;case 15:return e.next=17,i.json();case 17:return c=e.sent,e.next=20,Object(g.put)(o(c.message));case 20:case"end":return e.stop()}},e,this)})}}))(c=function(e){function n(){return r(this,n),o(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return a(n,e),d(n,[{key:"render",value:function(){var e=this.props,n=e.username,t=e.isLoading,r=e.repositories,o=e.sortedRepositories,a=e.error,i=this.actions.setUsername;return l.a.createElement("div",{className:"example-github-scene"},l.a.createElement("div",{style:{marginBottom:20}},l.a.createElement("h1",null,"Search for a github user"),l.a.createElement("input",{value:n,type:"text",onChange:function(e){return i(e.target.value)}})),t?l.a.createElement("div",null,"Loading..."):r.length>0?l.a.createElement("div",null,"Found ",r.length," repositories for user ",n,"!",o.map(function(e){return l.a.createElement("div",{key:e.id},l.a.createElement("a",{href:e.html_url,target:"_blank"},e.full_name)," - ",e.stargazers_count," stars, ",e.forks," forks.")})):l.a.createElement("div",null,a?"Error: "+a:"No repositories found"))}}]),n}(u.Component))||c},909:function(e,n){e.exports="import React, { Component } from 'react'\nimport PropTypes from 'prop-types'\nimport { kea } from 'kea'\n\n@kea({\n  actions: () => ({\n    increment: (amount) => ({ amount }),\n    decrement: (amount) => ({ amount })\n  }),\n\n  reducers: ({ actions }) => ({\n    counter: [0, PropTypes.number, {\n      [actions.increment]: (state, payload) => state + payload.amount,\n      [actions.decrement]: (state, payload) => state - payload.amount\n    }]\n  }),\n\n  selectors: ({ selectors }) => ({\n    doubleCounter: [\n      () => [selectors.counter],\n      (counter) => counter * 2,\n      PropTypes.number\n    ]\n  })\n})\nexport default class Counter extends Component {\n  render () {\n    const { counter, doubleCounter } = this.props\n    const { increment, decrement } = this.actions\n\n    return (\n      <div className='kea-counter'>\n        Count: {counter}<br />\n        Doublecount: {doubleCounter}<br />\n        <button onClick={() => increment(1)}>Increment</button>\n        <button onClick={() => decrement(1)}>Decrement</button>\n      </div>\n    )\n  }\n}\n"},910:function(e,n){e.exports="import React, { Component } from 'react'\nimport PropTypes from 'prop-types'\nimport { kea } from 'kea'\n\nimport { put, call } from 'redux-saga/effects'\nimport { delay } from 'redux-saga'\n\nconst API_URL = 'https://api.github.com'\n\n@kea({\n  actions: () => ({\n    setUsername: (username) => ({ username }),\n    setRepositories: (repositories) => ({ repositories }),\n    setFetchError: (message) => ({ message })\n  }),\n\n  reducers: ({ actions }) => ({\n    username: ['keajs', PropTypes.string, {\n      [actions.setUsername]: (_, payload) => payload.username\n    }],\n    repositories: [[], PropTypes.array, {\n      [actions.setUsername]: () => [],\n      [actions.setRepositories]: (_, payload) => payload.repositories\n    }],\n    isLoading: [true, PropTypes.bool, {\n      [actions.setUsername]: () => true,\n      [actions.setRepositories]: () => false,\n      [actions.setFetchError]: () => false\n    }],\n    error: [null, PropTypes.string, {\n      [actions.setUsername]: () => null,\n      [actions.setFetchError]: (_, payload) => payload.message\n    }]\n  }),\n\n  selectors: ({ selectors }) => ({\n    sortedRepositories: [\n      () => [selectors.repositories],\n      (repositories) => repositories.sort(\n                          (a, b) => b.stargazers_count - a.stargazers_count),\n      PropTypes.array\n    ]\n  }),\n\n  start: function * () {\n    const { setUsername } = this.actions\n    const username = yield this.get('username')\n    yield put(setUsername(username))\n  },\n\n  takeLatest: ({ actions, workers }) => ({\n    [actions.setUsername]: workers.fetchRepositories\n  }),\n\n  workers: {\n    * fetchRepositories (action) {\n      const { setRepositories, setFetchError } = this.actions\n      const { username } = action.payload\n\n      yield delay(100) // debounce for 100ms\n\n      const url = `${API_URL}/users/${username}/repos?per_page=250`\n      const response = yield window.fetch(url)\n\n      if (response.status === 200) {\n        const json = yield response.json()\n        yield put(setRepositories(json))\n      } else {\n        const json = yield response.json()\n        yield put(setFetchError(json.message))\n      }\n    }\n  }\n})\nexport default class ExampleGithubScene extends Component {\n  render () {\n    const { username, isLoading, repositories,\n            sortedRepositories, error } = this.props\n    const { setUsername } = this.actions\n\n    return (\n      <div className='example-github-scene'>\n        <div style={{marginBottom: 20}}>\n          <h1>Search for a github user</h1>\n          <input value={username}\n                 type='text'\n                 onChange={e => setUsername(e.target.value)} />\n        </div>\n        {isLoading ? (\n          <div>\n            Loading...\n          </div>\n        ) : repositories.length > 0 ? (\n          <div>\n            Found {repositories.length} repositories for user {username}!\n            {sortedRepositories.map(repo => (\n              <div key={repo.id}>\n                <a href={repo.html_url} target='_blank'>{repo.full_name}</a>\n                {' - '}{repo.stargazers_count} stars, {repo.forks} forks.\n              </div>\n            ))}\n          </div>\n        ) : (\n          <div>\n            {error ? `Error: ${error}` : 'No repositories found'}\n          </div>\n        )}\n      </div>\n    )\n  }\n}\n"},912:function(e,n,t){var r=t(913);"string"==typeof r&&(r=[[e.i,r,""]]);var o={};o.transform=void 0;t(126)(r,o);r.locals&&(e.exports=r.locals)},913:function(e,n,t){n=e.exports=t(125)(void 0),n.push([e.i,".homepage-scene {\n  font-family: 'Helvetica Neue', 'Arial', sans-serif;\n}\n\n  .homepage-scene h1 em {\n    border-bottom: 1px dashed #888;\n    cursor: pointer;\n  }\n\n  .homepage-scene .slider-container {\n    max-width: 500px;\n    margin: 0 auto;\n  }\n\n  .homepage-scene h2 {\n    margin-left: 20px;\n    margin-right: 20px;\n    margin-bottom: 0;\n  }\n\n  .homepage-scene .split {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n  }\n\n  .homepage-scene .split .description {\n      -webkit-box-flex: 1;\n          -ms-flex: 1 auto;\n              flex: 1 auto;\n      margin-left: 0;\n    }\n\n  .homepage-scene .split .description .demo {\n        margin: 0;\n      }\n\n  .homepage-scene .split .code {\n      width: 650px;\n      min-width: 650px;\n    }\n\n  .homepage-scene .split .code pre {\n        margin: 0;\n      }\n\n@media (max-width: 959px) {\n\n  .homepage-scene .split {\n    display: block;\n  }\n\n  .homepage-scene .split .description {\n        margin-left: 20px;\n  }\n\n  .homepage-scene .split .code {\n        width: auto;\n        min-width: auto;\n  }\n}\n\n.homepage-scene .landing {\n    border-bottom: 1px solid #ccc;\n    background: #388e3c;\n    padding: 120px 40px 120px 40px;\n    color: #fff;\n}\n\n.homepage-scene .landing a {\n      color: #fff;\n    }\n\n.homepage-scene .landing .intro {\n      margin: 0 auto;\n      max-width: 700px;\n      min-height: 150px;\n    }\n\n.homepage-scene .landing .intro img {\n        float: left;\n        margin-right: 20px;\n        height: 150px;\n        width: 150px;\n      }\n\n.homepage-scene .landing .intro .text {\n        margin-left: 170px;\n      }\n\n.homepage-scene .landing .intro .text h1 {\n          margin-top: 0;\n          padding-top: 10px;\n          padding-bottom: 0;\n          margin-bottom: 0;\n          font-weight: 400;\n          font-size: 44px;\n          border: 0;\n        }\n\n.homepage-scene .landing .intro .text strong {\n          display: block;\n          font-weight: 300;\n          font-size: 24px;\n          margin-bottom: 10px;\n          margin-top: 10px;\n        }\n\n.homepage-scene .landing .intro .text div.links {\n          line-height: 30px;\n        }\n\n@media (max-width: 520px) {\n\n  .homepage-scene .landing {\n    padding: 80px 20px 80px 20px;\n  }\n\n  .homepage-scene .landing .intro {\n        text-align: center;\n  }\n        .homepage-scene .landing .intro img {\n          float: none;\n          margin-right: 0;\n        }\n        .homepage-scene .landing .intro .text {\n          margin-left: 0;\n        }\n}\n",""])},914:function(e,n){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjAwcHgiIGhlaWdodD0iMjAwcHgiIHZpZXdCb3g9IjAgMCAyMDAgMjAwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Ikdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjAwMDAwMCwgMTAuMDAwMDAwKSI+CiAgICAgICAgICAgIDxlbGxpcHNlIGlkPSJPdmFsIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMTEiIGZpbGw9IiNGRkZGRkYiIGN4PSI5OSIgY3k9IjkwIiByeD0iOTAiIHJ5PSI5MCI+PC9lbGxpcHNlPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDMxLjAwMDAwMCkiIGZpbGw9IiMwMDAwMDAiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTE0OS4yOTI2NDEsMjcuMzg3NTQ3IEMxNDcuOTA0OTkyLDIzLjIzNzU5OTIgMTQ1LjI3NTkzNCwyMS44NDk5NTAzIDE0NS4yNzU5MzQsMjEuODQ5OTUwMyBDMTQ1LjI3MjY4NCwyMS44NDk5NTAzIDE0NC43MjM0NzQsMjMuNTc4ODI0NCAxNDMuNDA3MzIsMjQuMzc1MDE2NCBDMTQyLjA5MTE2NiwyNS4xNzEyMDg0IDE0MC40NjMwMzQsMjQuODk0OTc4NSAxNDAuNDYzMDM0LDI0Ljg5NDk3ODUgQzE0MC40NjMwMzQsMjQuODk0OTc4NSAxNDMuNjkwMDQ5LDM5LjY0ODkwNCAxNDIuNjE3NjI3LDQ3LjkwOTgwMjMgQzE0MS41NDUyMDYsNTYuMTY3NDUwOSAxMzguMjE0MTk4LDYxLjk1MjAyOTYgMTM2LjQ0MzA3Nyw2Ni4xOTk0NzAzIEMxMzQuNjc1MjA2LDcwLjQ0NjkxMDkgMTI5LjgwNzA2LDc4Ljc2NjMwNSAxMjUuMTE3NjUyLDg0LjA3MzE2ODUgQzEyMC40MjQ5OTQsODkuMzg2NTMxNSAxMDYuMjYyNTI1LDEwMy4wOTA3ODMgMTAwLjE3MjQ2OSwxMDcuMDA2NzQ4IEM5NC4wODI0MTI0LDExMC45MTk0NjMgOTAuMzg3NDMxNSwxMTEuNDEzNDI3IDkwLjM4NzQzMTUsMTExLjQxMzQyNyBDOTAuMzg3NDMxNSwxMTEuNDEzNDI3IDk2LjM2MDQ5NjQsMTE2LjQ4OTU1OCA5OS4yNjI1MzUxLDExOC4xNTM0MzYgQzEwMi4xNjQ1NzQsMTE5LjgxNzMxNSAxMDMuOTk3NDQsMTE5Ljk4NjMwMyAxMDUuODc1ODAzLDExOS45NDQwNTYgQzEwNy43NTA5MTcsMTE5LjkwNTA1OSAxMDkuNTU0NTM2LDExOS40NTk4NDEgMTEwLjcxNDcwMSwxMTguNzQ0ODkzIEMxMTEuODc0ODY3LDExOC4wMzMxOTUgMTE0LjI4OTQ0MSwxMTcuODUxMjA4IDExNS4xODMxMjYsMTE5LjEwNTYxNyBDMTE2LjA3NjgxLDEyMC4zNTM1MjYgMTE2LjM0MzI5MSwxMjEuODcxMTY2IDExNi4zNDMyOTEsMTIxLjg3MTE2NiBDMTE2LjM0MzI5MSwxMjEuODcxMTY2IDEyMS44Mzg2NDEsMTIyLjA0OTkwMyAxMjMuNTM1MDE3LDEyMy4zNDY1NTggQzEyNS4yMzEzOTQsMTI0LjY0MzIxNCAxMjUuMTQzNjUsMTI3LjYzNjI0NiAxMjUuMTQzNjUsMTI3LjYzNjI0NiBDMTI1LjE0MzY1LDEyNy42MzYyNDYgMTI0LjE5MTQ2OSwxMjQuODA1NzAyIDEyMi41OTU4MzYsMTI0LjgwNTcwMiBDMTIwLjk5Njk1MiwxMjQuODA1NzAyIDEyMi4zMDk4NTcsMTI2LjU4OTgyMiAxMTkuNjgwNzk4LDEyNi40OTg4MjkgQzExNy4wNDg0OSwxMjYuNDA0NTg1IDEwOS43NjU3NywxMjQuNTY4NDY5IDEwMy42MTA3MTgsMTI0LjAwNjI2IEM5Ny40NTU2NjY3LDEyMy40NDQwNTEgOTAuOTY5MTM5MSwxMjQuMTk0NzQ2IDg4LjE1MTU5NDMsMTI0LjU2ODQ2OSBDODUuMzMwNzk5NywxMjQuOTQ1NDQyIDgxLjU3NDA3MzQsMTI1LjkzMzM3IDgwLjA2NjE4MzIsMTI1LjEzMzkyOCBDNzguNTY0NzkyNSwxMjQuMzM0NDg2IDc4LjQyNTA1MjcsMTIzLjExNTgyNSA3OC40MjUwNTI3LDEyMy4xMTU4MjUgQzc4LjQyNTA1MjcsMTIzLjExNTgyNSA3Ny44NTk1OTM5LDEyMy4xNjEzMjIgNzYuNzgwNjcyNSwxMjQuMDU1MDA3IEM3NS42OTg1MDEzLDEyNC45NDU0NDIgNzUuNDYxMjY4NiwxMjYuMTcwNjAzIDc1LjQ2MTI2ODYsMTI2LjE3MDYwMyBDNzUuNDYxMjY4NiwxMjYuMTcwNjAzIDc0LjU3MDgzMzQsMTIzLjc3MjI3NyA3Ni4zMDk0NTY4LDEyMi41OTU4NjMgQzc4LjA0ODA4MDIsMTIxLjQxOTQ0OSA3OS4xMjcwMDE2LDEyMS42NTY2ODEgNzkuMTI3MDAxNiwxMjEuNjU2NjgxIEM3OS4xMjcwMDE2LDEyMS42NTY2ODEgNzkuNzM3OTU3MSwxMjAuNjcyMDAzIDgxLjM4MjMzNzMsMTIwLjg2MDQ4OSBDODMuMDI5OTY3MywxMjEuMDQ1NzI2IDkxLjY3NDMzNzcsMTIwLjY3MjAwMyA5Mi41NjgwMjI2LDEyMC42NzIwMDMgQzkzLjQ2MTcwNzYsMTIwLjY3MjAwMyA5NC42ODM2MTg2LDEyMC40MzgwMiA5My40MTI5NjExLDExOS4zMDcxMDIgQzkyLjE0NTU1MzQsMTE4LjE3OTQzNSA4NS43MDc3NzIzLDExMi4wNzMxMjkgODUuNzA3NzcyMywxMTIuMDczMTI5IEM4NS43MDQ1MjI1LDExMi4wNzMxMjkgNzcuNjM1MzYwMiwxMTMuMTA5ODA0IDcwLjg2Mjg1MzUsMTEyLjg1MzA3MiBDNjQuMDkwMzQ2NywxMTIuNTkzMDkxIDU0LjA5MDgyNSwxMTIuMDE0NjM0IDU0LjA5MDgyNSwxMTIuMDE0NjM0IEM1NC4wOTA4MjUsMTEyLjAxNDYzNCAxNS42NTkxMjQsMTQ0LjE1NDc5MyA4LjQzMTY1MDM5LDE0OS45MTk4NzMgQzEuMjAwOTI3MDEsMTU1LjY4ODIwMyAtMC43NzE2NzkzMjYsMTU0LjczOTI3MiAwLjI1MTk5NjExOSwxNTAuNzk3MzA5IEMxLjI3MjQyMTgsMTQ2Ljg1NTM0NiAxMC44Mzk3MjUsMTM0LjM2OTc1NSAxMC44Mzk3MjUsMTM0LjM2OTc1NSBDMTAuODM2NDc1MiwxMzQuMzY5NzU1IDkuNzQ0NTU0NzcsMTMyLjU0MzM4OCAxMC45ODU5NjQ0LDEyOS4yNjExMjcgQzEyLjIyNzM3MzksMTI1Ljk3MjM2NyAxNC40MTc3MTQ0LDEyMS4yOTkyMDcgMTQuNDE3NzE0NCwxMjEuMjk5MjA3IEMxNC40MTQ0NjQ3LDEyMS4yOTkyMDcgMTAuOTUzNDY2NywxMjUuNjQ3MzkxIDkuODg3NTQ0MzUsMTI2Ljk5NjA0MiBDOC44MjE2MjE5OCwxMjguMzQ3OTQ0IDcuNjA5NDYwMjcsMTI4Ljk5MTM5NyA4LjM5MjY1MzIzLDEyNS44NjE4NzUgQzkuMTc5MDk1OTUsMTIyLjczMjM1MyAxNi44MjkwMzg4LDEwNy41NDk0NTkgMjguODUzMTYzMSw5MS4zODgzODU3IEM0MC44NzQwMzc2LDc1LjIzMDU2MjUgNTMuMTU0ODkzMSw2Ni4xNzk5NzE3IDUzLjE1NDg5MzEsNjYuMTc5OTcxNyBDNTMuMTU0ODkzMSw2Ni4xNzk5NzE3IDY1LjAxNjUyOTMsNTEuNDg3NzkxNyA3Mi44MDI5NjIyLDQ0Ljk2ODc2NjUgQzgwLjU5MjY0NDgsMzguNDQ5NzQxMyA4OC42NDg4MDgxLDMyLjgzNDE1MDMgOTAuNTUzMTY5NCwzMS4zODQ3NTU5IEM5Mi40NTQyODA5LDI5LjkzODYxMTIgOTMuNzIxNjg4NiwyOC4xMjg0OTMgOTQuODEwMzU5MywyNS42ODE0MjEyIEM5NS44OTU3ODAzLDIzLjIzNzU5OTIgMTAzLjY4MjIxMyw5LjExMDg3ODA5IDEwOS44NDA1MTUsMy44NTkyNjA1NyBDMTE1Ljk5ODgxNiwtMS4zOTU2MDY3MSAxMjcuMjA0LC0wLjIwMjk0MzU3NCAxMzEuMTc1MjExLDEuMTkxMjA0ODkgQzEzNS4xNDMxNzIsMi41OTE4NTI4OCAxMzkuMTY5NjI5LDUuNTAwMzkxMDUgMTQwLjY3NzUxOSw3LjIzMjUxNDg5IEMxNDIuMTg4NjU5LDguOTY0NjM4NzQgMTQyLjE4ODY1OSwxMC4zNjUyODY3IDE0Mi4xODg2NTksMTAuMzY1Mjg2NyBDMTQyLjE4NTQwOSwxMC4zNjUyODY3IDE0Ny4yMTYwNDMsMTIuMjA3OTAyNSAxNDkuOTU4ODQzLDE1Ljc4NTg5MTkgQzE1Mi42OTUxNDQsMTkuMzYzODgxNCAxNTUuMDQ0NzIyLDI2Ljc5NjA5MDEgMTQ5Ljk0OTA5NCwzNS4yMTI5NzcgQzE0OS45NDkwOTQsMzUuMjEyOTc3IDE1MC42NzM3OTEsMzEuNTQwNzQ0NSAxNDkuMjkyNjQxLDI3LjM4NzU0NyBaIiBpZD0iRmlsbC0zMyI+PC9wYXRoPgogICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbC0yIiBzdHJva2U9IiNGRkZGRkYiIGN4PSIxMzEiIGN5PSIxMiIgcj0iMiI+PC9jaXJjbGU+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo="},915:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function a(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.d(n,"a",function(){return N});var s,c,u=t(9),l=t.n(u),p=t(15),M=t.n(p),m=t(193),g=(t.n(m),t(897)),f=t(65),d=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),N=(s=Object(m.kea)({actions:function(){return{start:!0,finish:!0,setCounter:function(e){return{counter:e}}}},reducers:function(e){var n,t=e.actions;e.key,e.props;return{counter:[0,M.a.number,i({},t.setCounter,function(e,n){return n.counter})],finished:[!1,M.a.bool,(n={},i(n,t.start,function(){return!1}),i(n,t.finish,function(){return!0}),n)]}},takeLatest:function(e){var n=e.actions;e.workers;return i({},n.start,regeneratorRuntime.mark(function e(){var n,t,r,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,n=this.actions,t=n.setCounter,r=n.finish,o=50;case 3:if(!(o>=0)){e.next=11;break}return e.next=6,Object(f.put)(t(o));case 6:return e.next=8,Object(g.a)(50);case 8:o--,e.next=3;break;case 11:return e.next=13,Object(f.put)(r());case 13:return e.prev=13,e.next=16,Object(f.cancelled)();case 16:if(!e.sent){e.next=18;break}console.log("Countdown was cancelled!");case 18:return e.finish(13);case 19:case"end":return e.stop()}},e,this,[[0,,13,19]])}))}}))(c=function(e){function n(){return r(this,n),o(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return a(n,e),d(n,[{key:"render",value:function(){var e=this.props,n=e.counter,t=e.finished,r=this.actions.start;return l.a.createElement("div",{className:"kea-counter"},"Count: ",n,l.a.createElement("br",null),l.a.createElement("br",null),t?"We made it until the end! finish() action triggered":"Click start to trigger the finish() action in a few seconds",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",{onClick:function(){return r()}},"Start"))}}]),n}(u.Component))||c},916:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function a(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}t.d(n,"a",function(){return m});var i,s,c=t(9),u=t.n(c),l=t(193),p=(t.n(l),t(895)),M=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),m=(i=Object(l.connect)({actions:[p.a,["toggleFeature"]],props:[p.a,["features"]]}))(s=function(e){function n(){return r(this,n),o(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return a(n,e),M(n,[{key:"render",value:function(){var e=this.props.features,n=this.actions.toggleFeature;return u.a.createElement("div",null,u.a.createElement("p",null,e.something?"Something enabled":"Something disabled"),u.a.createElement("button",{onClick:function(){return n("something")}},"Toggle something"))}}]),n}(c.Component))||s},917:function(e,n){e.exports="import React, { Component } from 'react'\nimport PropTypes from 'prop-types'\nimport { kea } from 'kea'\n\nimport { take, race, put } from 'redux-saga/effects'\n\nimport delay from '~/utils/delay' // promise-based timeout helper\nimport range from '~/utils/range' // range(3) === [0, 1, 2]\n\nimport images from './images'     // array of objects [{ src, author }, ...]\n\n@kea({\n  actions: () => ({\n    updateSlide: index => ({ index })\n  }),\n\n  reducers: ({ actions, key }) => ({\n    currentSlide: [0, PropTypes.number, {\n      [actions.updateSlide]: (state, payload) => payload.index % images.length\n    }]\n  }),\n\n  selectors: ({ selectors }) => ({\n    currentImage: [\n      () => [selectors.currentSlide],\n      (currentSlide) => images[currentSlide],\n      PropTypes.object\n    ]\n  }),\n\n  start: function * () {\n    const { updateSlide } = this.actions\n\n    while (true) {\n      const { timeout } = yield race({\n        change: take(updateSlide.toString()),\n        timeout: delay(5000)\n      })\n\n      if (timeout) {\n        const currentSlide = yield this.get('currentSlide')\n        yield put(updateSlide(currentSlide + 1))\n      }\n    }\n  }\n})\nexport default class Slider extends Component {\n  render () {\n    const { currentSlide, currentImage } = this.props\n    const { updateSlide } = this.actions\n\n    const title = `Image copyright by ${currentImage.author}`\n\n    return (\n      <div className='kea-slider'>\n        <img src={currentImage.src} alt={title} title={title} />\n        <div className='buttons'>\n          {range(images.length).map(i => (\n            <span key={i}\n                  className={i === currentSlide ? 'selected' : ''}\n                  onClick={() => updateSlide(i)} />\n          ))}\n        </div>\n      </div>\n    )\n  }\n}\n"},918:function(e,n){e.exports="import React, { Component } from 'react'\nimport PropTypes from 'prop-types'\nimport { kea } from 'kea'\n\nimport delay from '~/utils/delay'\nimport { put, cancelled } from 'redux-saga/effects'\n\n@kea({\n  actions: () => ({\n    start: true,\n    finish: true,\n    setCounter: (counter) => ({ counter })\n  }),\n\n  reducers: ({ actions, key, props }) => ({\n    counter: [0, PropTypes.number, {\n      [actions.setCounter]: (_, payload) => payload.counter\n    }],\n    finished: [false, PropTypes.bool, {\n      [actions.start]: () => false,\n      [actions.finish]: () => true\n    }]\n  }),\n\n  takeLatest: ({ actions, workers }) => ({\n    [actions.start]: function * () {\n      try {\n        const { setCounter, finish } = this.actions\n\n        for (let i = 50; i >= 0; i--) {\n          yield put(setCounter(i))\n          yield delay(50)\n        }\n        yield put(finish())\n      } finally {\n        if (yield cancelled()) {\n          console.log('Countdown was cancelled!')\n        }\n      }\n    }\n  })\n})\nexport default class Counter extends Component {\n  render () {\n    const { counter, finished } = this.props\n    const { start } = this.actions\n\n    return (\n      <div className='kea-counter'>\n        Count: {counter}\n        <br /><br />\n        {finished\n          ? 'We made it until the end! finish() action triggered'\n          : 'Click start to trigger the finish() action in a few seconds'}\n        <br /><br />\n        <button onClick={() => start()}>Start</button>\n      </div>\n    )\n  }\n}\n"},919:function(e,n){e.exports="// features-logic.js\nimport PropTypes from 'prop-types'\nimport { kea } from 'kea'\n\nexport default kea({\n  actions: () => ({\n    toggleFeature: (feature) => ({ feature })\n  }),\n  reducers: ({ actions }) => ({\n    features: [{}, PropTypes.object, {\n      [actions.toggleFeature]: (state, payload) => {\n        const { feature } = payload\n        return {\n          ...state,\n          [feature]: !state[feature]\n        }\n      }\n    }]\n  })\n})\n\n// index.js\nimport React, { Component } from 'react'\nimport { connect } from 'kea'\n\nimport featuresLogic from '../features-logic'\n\n@connect({\n  actions: [\n    featuresLogic, [\n      'toggleFeature'\n    ]\n  ],\n  props: [\n    featuresLogic, [\n      'features'\n    ]\n  ]\n})\nexport default class ConnectedToggle extends Component {\n  render () {\n    const { features } = this.props\n    const { toggleFeature } = this.actions\n\n    return (\n      <div>\n        <p>{features.something ? 'Something enabled' : 'Something disabled'}</p>\n        <button onClick={() => toggleFeature('something')}>Toggle something</button>\n      </div>\n    )\n  }\n}\n"}});