webpackJsonp([13],{1017:function(e,t,n){var o=n(1018);"string"==typeof o&&(o=[[e.i,o,""]]);var r={};r.transform=void 0;n(126)(o,r);o.locals&&(e.exports=o.locals)},1018:function(e,t,n){t=e.exports=n(125)(void 0),t.push([e.i,".playground-scene {\n  margin: 20px;\n}\n",""])},894:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return v});var c,i,a=n(1017),s=(n.n(a),n(9)),f=n.n(s),l=n(15),p=n.n(l),b=n(193),y=(n.n(b),function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}()),d={1:"book1",2:"book2"},h=Object(b.kea)({reducers:function(e){e.actions;return{books:[d,p.a.object,{}]}}}),k=(c=Object(b.kea)({selectors:function(e){e.selectors;return{book:[function(){return[h.selectors.books,function(e,t){return t.bookId}]},function(e,t){return e[t]},p.a.object]}}}))(i=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),y(t,[{key:"render",value:function(){var e=this.props.book;return f.a.createElement("div",null,e)}}]),t}(s.Component))||i,v=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),y(t,[{key:"render",value:function(){return f.a.createElement("div",{className:"playground-scene"},f.a.createElement(k,{bookId:1}),f.a.createElement(k,{bookId:2}))}}]),t}(s.Component)}});