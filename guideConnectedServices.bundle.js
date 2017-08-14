webpackJsonp([11],{884:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"default",function(){return p});var s=r(9),i=r.n(s),u=r(194),c=r(979),l=r(294),f=(r.n(l),function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}()),p=function(e){function t(){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),f(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"connected-scene"},i.a.createElement("div",{className:"description"},i.a.createElement("h2",null,"Example #6 - Connected services"),i.a.createElement("p",null,"The final result will look like this:"),i.a.createElement("div",{className:"demo"},i.a.createElement(c.a,null))),i.a.createElement("div",{className:"description"},i.a.createElement("p",null,"That's it for the guide!"),i.a.createElement("p",null,"Check out the ",i.a.createElement(u.a,{to:"/examples/todos"},"example applications")," or read the ",i.a.createElement(u.a,{to:"/api/logic"},"API docs"),".")))}}]),t}(s.Component)},979:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,"a",function(){return v});var i,u,c=r(9),l=r.n(c),f=r(15),p=r.n(f),m=r(193),h=(r.n(m),r(65)),b=r(980),d=r(981),g=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),v=(i=Object(m.kea)({connect:{actions:[b.a,["fetchRepositories"],d.a,["fetchDetails"]],props:[b.a,["repositories","isLoading as isGithubLoading","error as githubError"],d.a,["stories","karma","isLoading as isHackerNewsLoading","error as hackerNewsError"]]},actions:function(){return{setUsername:function(e){return{username:e}}}},reducers:function(e){var t=e.actions;return{username:["google",p.a.string,s({},t.setUsername,function(e,t){return t.username})]}},start:regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.actions.setUsername,e.next=3,this.get("username");case 3:return r=e.sent,e.next=6,Object(h.put)(t(r));case 6:case"end":return e.stop()}},e,this)}),takeLatest:function(e){var t=e.actions;e.workers;return s({},t.setUsername,regeneratorRuntime.mark(function e(t){var r,n,a,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.actions,n=r.fetchRepositories,a=r.fetchDetails,o=t.payload.username,e.next=4,Object(h.put)(n(o));case 4:return e.next=6,Object(h.put)(a(o));case 6:case"end":return e.stop()}},e,this)}))}}))(u=function(e){function t(){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),g(t,[{key:"render",value:function(){var e=this.props,t=e.username,r=e.isGithubLoading,n=e.isHackerNewsLoading,a=e.repositories,o=e.githubError,s=e.hackerNewsError,i=e.karma,u=e.stories,c=this.actions.setUsername;return l.a.createElement("div",{className:"example-github-scene"},l.a.createElement("div",{style:{marginBottom:20}},l.a.createElement("h1",null,"Search for a github AND hackernews user:"),l.a.createElement("input",{value:t,type:"text",onChange:function(e){return c(e.target.value)}})),n?l.a.createElement("div",null,"Loading..."):s?l.a.createElement("div",null,"Error: ",s):l.a.createElement("div",null,"HN Karma: ",i,l.a.createElement("br",null),"HN Stories: ",u.join(", ")),l.a.createElement("br",null),r?l.a.createElement("div",null,"Loading..."):a.length>0?l.a.createElement("div",null,"Found ",a.length," repositories for user ",t,"!",a.map(function(e){return l.a.createElement("div",{key:e.id},l.a.createElement("a",{href:e.html_url,target:"_blank"},e.full_name)," - ",e.stargazers_count," stars, ",e.forks," forks.")})):l.a.createElement("div",null,o?"Error: "+o:"No repositories found"))}}]),t}(c.Component))||u},980:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var a=r(15),o=r.n(a),s=r(193),i=(r.n(s),r(65)),u=r(195);t.a=Object(s.kea)({actions:function(){return{fetchRepositories:function(e){return{username:e}},setRepositories:function(e){return{repositories:e}},setFetchError:function(e){return{message:e}}}},reducers:function(e){var t,r,a,s=e.actions;return{username:["keajs",o.a.string,n({},s.fetchRepositories,function(e,t){return t.username})],repositories:[[],o.a.array,(t={},n(t,s.fetchRepositories,function(){return[]}),n(t,s.setRepositories,function(e,t){return t.repositories}),t)],isLoading:[!0,o.a.bool,(r={},n(r,s.fetchRepositories,function(){return!0}),n(r,s.setRepositories,function(){return!1}),n(r,s.setFetchError,function(){return!1}),r)],error:[null,o.a.string,(a={},n(a,s.fetchRepositories,function(){return null}),n(a,s.setFetchError,function(e,t){return t.message}),a)]}},takeLatest:function(e){var t=e.actions,r=e.workers;return n({},t.fetchRepositories,r.fetchRepositories)},workers:{fetchRepositories:regeneratorRuntime.mark(function e(t){var r,n,a,o,s,c,l;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.actions,n=r.setRepositories,a=r.setFetchError,o=t.payload.username,e.next=4,Object(u.delay)(100);case 4:return e.next=6,window.fetch("https://api.github.com/users/"+o+"/repos?per_page=250");case 6:if(s=e.sent,200!==s.status){e.next=15;break}return e.next=10,s.json();case 10:return c=e.sent,e.next=13,Object(i.put)(n(c));case 13:e.next=20;break;case 15:return e.next=17,s.json();case 17:return l=e.sent,e.next=20,Object(i.put)(a(l.message));case 20:case"end":return e.stop()}},e,this)})}})},981:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var a=r(15),o=r.n(a),s=r(193),i=(r.n(s),r(65)),u=r(195);t.a=Object(s.kea)({actions:function(){return{fetchDetails:function(e){return{username:e}},setDetails:function(e,t){return{karma:e,stories:t}},setFetchError:function(e){return{message:e}}}},reducers:function(e){var t,r,a,s,i=e.actions;return{username:["keajs",o.a.string,n({},i.fetchDetails,function(e,t){return t.username})],karma:[null,o.a.number,(t={},n(t,i.fetchDetails,function(){return[]}),n(t,i.setDetails,function(e,t){return t.karma}),t)],stories:[[],o.a.array,(r={},n(r,i.fetchDetails,function(){return[]}),n(r,i.setDetails,function(e,t){return t.stories}),r)],isLoading:[!0,o.a.bool,(a={},n(a,i.fetchDetails,function(){return!0}),n(a,i.setDetails,function(){return!1}),n(a,i.setFetchError,function(){return!1}),a)],error:[null,o.a.string,(s={},n(s,i.fetchDetails,function(){return null}),n(s,i.setFetchError,function(e,t){return t.message}),s)]}},takeLatest:function(e){var t=e.actions,r=e.workers;return n({},t.fetchDetails,r.fetchDetails)},workers:{fetchDetails:regeneratorRuntime.mark(function e(t){var r,n,a,o,s,c;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=this.actions,n=r.setDetails,a=r.setFetchError,o=t.payload.username,e.next=4,Object(u.delay)(100);case 4:return e.next=6,window.fetch("https://hacker-news.firebaseio.com/v0/user/"+o+".json");case 6:return s=e.sent,e.next=9,s.json();case 9:if(!(c=e.sent)){e.next=15;break}return e.next=13,Object(i.put)(n(c.karma,c.submitted));case 13:e.next=17;break;case 15:return e.next=17,Object(i.put)(a("Repository not found"));case 17:case"end":return e.stop()}},e,this)})}})}});