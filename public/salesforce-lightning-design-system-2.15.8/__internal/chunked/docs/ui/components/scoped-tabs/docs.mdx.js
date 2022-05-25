var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/docs/./ui/components/scoped-tabs/docs.mdx.js"]=function(e){function t(t){for(var n,r,i=t[0],c=t[1],l=t[2],h=0,u=[];h<i.length;h++)r=i[h],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&u.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(d&&d(t);u.length;)u.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,i=1;i<a.length;i++){var c=a[i];0!==s[c]&&(n=!1)}n&&(o.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},s={66:0},o=[];function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/assets/scripts/bundle/";var i=this.webpackJsonpSLDS___internal_chunked_docs=this.webpackJsonpSLDS___internal_chunked_docs||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=c;return o.push([226,0]),a()}({0:function(e,t){e.exports=React},19:function(e,t){e.exports=ReactDOM},20:function(e,t){e.exports=JSBeautify},226:function(e,t,a){"use strict";a.r(t),a.d(t,"getElement",(function(){return m})),a.d(t,"getContents",(function(){return y}));var n=a(0),s=a(4),o=a(1),r=(a(39),a(2)),i=a(79),c=s.c.a,l=s.c.code,d=s.c.h2,h=s.c.h3,u=s.c.h4,b=s.c.li,f=s.c.p,p=s.c.strong,v=s.c.ul,m=function(){return Object(n.createElement)(s.b,{},Object(n.createElement)("div",{className:"doc lead"},"A tab keeps related content in a single container that is shown and hidden through navigation."),Object(n.createElement)(o.a,{exampleOnly:!0},i.b),d({id:"About-Scoped-Tabs"},"About Scoped Tabs"),f({},"Because tab sets can be nested, pay close attention to the markup. They are constructed to prevent styles from leaking from parent tab sets into child tab sets."),h({id:"Accessibility"},"Accessibility"),f({},"Tabbed UIs have three parts with specific ",p({},"ARIA")," role requirements:"),v({},b({},"The tab list, which should have ",l({},'role="tablist"')),b({},"The tabs in that list, which should each be an ",l({},'<a role="tab">')," anchor wrapped in a ",l({},'<li role="presentation">')," list item"),b({},"The tab panels, which display each tab’s content and should each have ",l({},'role="tabpanel"'))),u({id:"Markup"},"Markup"),v({},b({},"Selected tab’s anchor has ",l({},'aria-selected="true"'),", all other tabs’ anchors have ",l({},'aria-selected="false"')),b({},"Selected tab’s anchor has ",l({},'tabindex="0"'),", all other tabs have ",l({},'tabindex="-1"')),b({},"Each tab’s anchor has an ",l({},"aria-controls")," attribute whose value is the id of the associated ",l({},'<div role="tabpanel">')),b({},"Each tab panel has an ",l({},"aria-labelledby")," attribute whose value is the id of its associated ",l({},'<a role="tab">'))),u({id:"Keyboard-Interactions"},"Keyboard Interactions"),v({},b({},"Arrow keys, when focus is on selected tab, cycle selection to the next or previous tab"),b({},"Tab key, when focus is before the tab list, moves focus to the selected tab"),b({},"Tab key, when focus is on selected tab, moves focus into the selected tab’s associated tab panel or to the next focusable element on the page if that panel has no focusable elements"),b({},"Shift+Tab keys, when focus is on first element in a tab panel, move focus to the selected tab")),d({id:"Base"},"Base"),Object(n.createElement)(o.a,null,i.b),d({id:"Selecting-Tabs"},"Selecting Tabs"),Object(n.createElement)(o.a,null,Object(r.f)(i.d,"selected")),h({id:"JavaScript-Needs"},"JavaScript Needs"),f({},"The active tab has two markup requirements:"),v({},b({},"The ",l({},".slds-active")," class should be placed on the ",l({},"li")," with ",l({},".slds-tabs_{variant}__item"),"."),b({},"The corresponding ",l({},".slds-tabs_{variant}__content")," container receives ",l({},".slds-show"),".")),f({},"Inactive ",l({},".slds-tabs_{variant}__content")," containers receive ",l({},".slds-hide"),".\nWhen the user clicks a different tab, move the ",l({},".slds-active")," class and\ntoggle the ",l({},".slds-hide"),"/",l({},".slds-show")," classes."),d({id:"With-Overflowing-Items"},"With Overflowing Items"),Object(n.createElement)(o.a,null,Object(r.f)(i.c,"overflowing-items")),d({id:"Sizes"},"Sizes"),h({id:"Medium"},"Medium"),Object(n.createElement)(o.a,null,Object(r.f)(i.c,"size-medium")),h({id:"Large"},"Large"),Object(n.createElement)(o.a,null,Object(r.f)(i.c,"size-large")),d({id:"Styling-Hooks-Overview"},"Styling Hooks Overview"),f({},"See the ",c({href:"/components/tabs/#Styling-Hooks-Overview"},"Tabs Styling Hooks")," table."))},y=function(){return Object(s.a)(m())}}});