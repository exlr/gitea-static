(self.webpackChunkgitea=self.webpackChunkgitea||[]).push([["tribute"],{"./node_modules/tributejs/dist/tribute.min.js":function(V){(function(k,M){V.exports=M()})(this,function(){"use strict";function k(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")}function M(a,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}function E(a,t,e){return t&&M(a.prototype,t),e&&M(a,e),a}function G(a,t){return function(e){if(Array.isArray(e))return e}(a)||function(e,n){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]"){var i=[],r=!0,o=!1,u=void 0;try{for(var l,s=e[Symbol.iterator]();!(r=(l=s.next()).done)&&(i.push(l.value),!n||i.length!==n);r=!0);}catch(c){o=!0,u=c}finally{try{r||s.return==null||s.return()}finally{if(o)throw u}}return i}}(a,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}if(Array.prototype.find||(Array.prototype.find=function(a){if(this===null)throw new TypeError("Array.prototype.find called on null or undefined");if(typeof a!="function")throw new TypeError("predicate must be a function");for(var t,e=Object(this),n=e.length>>>0,i=arguments[1],r=0;r<n;r++)if(t=e[r],a.call(i,t,r,e))return t}),window&&typeof window.CustomEvent!="function"){var L=function(a,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var e=document.createEvent("CustomEvent");return e.initCustomEvent(a,t.bubbles,t.cancelable,t.detail),e};window.Event!==void 0&&(L.prototype=window.Event.prototype),window.CustomEvent=L}var J=function(){function a(t){k(this,a),this.tribute=t,this.tribute.events=this}return E(a,[{key:"bind",value:function(t){t.boundKeydown=this.keydown.bind(t,this),t.boundKeyup=this.keyup.bind(t,this),t.boundInput=this.input.bind(t,this),t.addEventListener("keydown",t.boundKeydown,!1),t.addEventListener("keyup",t.boundKeyup,!1),t.addEventListener("input",t.boundInput,!1)}},{key:"unbind",value:function(t){t.removeEventListener("keydown",t.boundKeydown,!1),t.removeEventListener("keyup",t.boundKeyup,!1),t.removeEventListener("input",t.boundInput,!1),delete t.boundKeydown,delete t.boundKeyup,delete t.boundInput}},{key:"keydown",value:function(t,e){t.shouldDeactivate(e)&&(t.tribute.isActive=!1,t.tribute.hideMenu());var n=this;t.commandEvent=!1,a.keys().forEach(function(i){i.key===e.keyCode&&(t.commandEvent=!0,t.callbacks()[i.value.toLowerCase()](e,n))})}},{key:"input",value:function(t,e){t.inputEvent=!0,t.keyup.call(this,t,e)}},{key:"click",value:function(t,e){var n=t.tribute;if(n.menu&&n.menu.contains(e.target)){var i=e.target;for(e.preventDefault(),e.stopPropagation();i.nodeName.toLowerCase()!=="li";)if(!(i=i.parentNode)||i===n.menu)throw new Error("cannot find the <li> container for the click");n.selectItemAtIndex(i.getAttribute("data-index"),e),n.hideMenu()}else n.current.element&&!n.current.externalTrigger&&(n.current.externalTrigger=!1,setTimeout(function(){return n.hideMenu()}))}},{key:"keyup",value:function(t,e){if(t.inputEvent&&(t.inputEvent=!1),t.updateSelection(this),e.keyCode!==27){if(!t.tribute.allowSpaces&&t.tribute.hasTrailingSpace)return t.tribute.hasTrailingSpace=!1,t.commandEvent=!0,void t.callbacks().space(e,this);if(!t.tribute.isActive)if(t.tribute.autocompleteMode)t.callbacks().triggerChar(e,this,"");else{var n=t.getKeyCode(t,this,e);if(isNaN(n)||!n)return;var i=t.tribute.triggers().find(function(r){return r.charCodeAt(0)===n});i!==void 0&&t.callbacks().triggerChar(e,this,i)}t.tribute.current.mentionText.length<t.tribute.current.collection.menuShowMinLength||((t.tribute.current.trigger||t.tribute.autocompleteMode)&&t.commandEvent===!1||t.tribute.isActive&&e.keyCode===8)&&t.tribute.showMenuFor(this,!0)}}},{key:"shouldDeactivate",value:function(t){if(!this.tribute.isActive)return!1;if(this.tribute.current.mentionText.length===0){var e=!1;return a.keys().forEach(function(n){t.keyCode===n.key&&(e=!0)}),!e}return!1}},{key:"getKeyCode",value:function(t,e,n){var i=t.tribute,r=i.range.getTriggerInfo(!1,i.hasTrailingSpace,!0,i.allowSpaces,i.autocompleteMode);return!!r&&r.mentionTriggerChar.charCodeAt(0)}},{key:"updateSelection",value:function(t){this.tribute.current.element=t;var e=this.tribute.range.getTriggerInfo(!1,this.tribute.hasTrailingSpace,!0,this.tribute.allowSpaces,this.tribute.autocompleteMode);e&&(this.tribute.current.selectedPath=e.mentionSelectedPath,this.tribute.current.mentionText=e.mentionText,this.tribute.current.selectedOffset=e.mentionSelectedOffset)}},{key:"callbacks",value:function(){var t=this;return{triggerChar:function(e,n,i){var r=t.tribute;r.current.trigger=i;var o=r.collection.find(function(u){return u.trigger===i});r.current.collection=o,r.current.mentionText.length>=r.current.collection.menuShowMinLength&&r.inputEvent&&r.showMenuFor(n,!0)},enter:function(e,n){t.tribute.isActive&&t.tribute.current.filteredItems&&(e.preventDefault(),e.stopPropagation(),setTimeout(function(){t.tribute.selectItemAtIndex(t.tribute.menuSelected,e),t.tribute.hideMenu()},0))},escape:function(e,n){t.tribute.isActive&&(e.preventDefault(),e.stopPropagation(),t.tribute.isActive=!1,t.tribute.hideMenu())},tab:function(e,n){t.callbacks().enter(e,n)},space:function(e,n){t.tribute.isActive&&(t.tribute.spaceSelectsMatch?t.callbacks().enter(e,n):t.tribute.allowSpaces||(e.stopPropagation(),setTimeout(function(){t.tribute.hideMenu(),t.tribute.isActive=!1},0)))},up:function(e,n){if(t.tribute.isActive&&t.tribute.current.filteredItems){e.preventDefault(),e.stopPropagation();var i=t.tribute.current.filteredItems.length,r=t.tribute.menuSelected;i>r&&r>0?(t.tribute.menuSelected--,t.setActiveLi()):r===0&&(t.tribute.menuSelected=i-1,t.setActiveLi(),t.tribute.menu.scrollTop=t.tribute.menu.scrollHeight)}},down:function(e,n){if(t.tribute.isActive&&t.tribute.current.filteredItems){e.preventDefault(),e.stopPropagation();var i=t.tribute.current.filteredItems.length-1,r=t.tribute.menuSelected;i>r?(t.tribute.menuSelected++,t.setActiveLi()):i===r&&(t.tribute.menuSelected=0,t.setActiveLi(),t.tribute.menu.scrollTop=0)}},delete:function(e,n){t.tribute.isActive&&t.tribute.current.mentionText.length<1?t.tribute.hideMenu():t.tribute.isActive&&t.tribute.showMenuFor(n)}}}},{key:"setActiveLi",value:function(t){var e=this.tribute.menu.querySelectorAll("li"),n=e.length>>>0;t&&(this.tribute.menuSelected=parseInt(t));for(var i=0;i<n;i++){var r=e[i];if(i===this.tribute.menuSelected){r.classList.add(this.tribute.current.collection.selectClass);var o=r.getBoundingClientRect(),u=this.tribute.menu.getBoundingClientRect();if(o.bottom>u.bottom){var l=o.bottom-u.bottom;this.tribute.menu.scrollTop+=l}else if(o.top<u.top){var s=u.top-o.top;this.tribute.menu.scrollTop-=s}}else r.classList.remove(this.tribute.current.collection.selectClass)}}},{key:"getFullHeight",value:function(t,e){var n=t.getBoundingClientRect().height;if(e){var i=t.currentStyle||window.getComputedStyle(t);return n+parseFloat(i.marginTop)+parseFloat(i.marginBottom)}return n}}],[{key:"keys",value:function(){return[{key:9,value:"TAB"},{key:8,value:"DELETE"},{key:13,value:"ENTER"},{key:27,value:"ESCAPE"},{key:32,value:"SPACE"},{key:38,value:"UP"},{key:40,value:"DOWN"}]}}]),a}(),Z=function(){function a(t){k(this,a),this.tribute=t,this.tribute.menuEvents=this,this.menu=this.tribute.menu}return E(a,[{key:"bind",value:function(t){var e=this;this.menuClickEvent=this.tribute.events.click.bind(null,this),this.menuContainerScrollEvent=this.debounce(function(){e.tribute.isActive&&e.tribute.showMenuFor(e.tribute.current.element,!1)},300,!1),this.windowResizeEvent=this.debounce(function(){e.tribute.isActive&&e.tribute.range.positionMenuAtCaret(!0)},300,!1),this.tribute.range.getDocument().addEventListener("MSPointerDown",this.menuClickEvent,!1),this.tribute.range.getDocument().addEventListener("mousedown",this.menuClickEvent,!1),window.addEventListener("resize",this.windowResizeEvent),this.menuContainer?this.menuContainer.addEventListener("scroll",this.menuContainerScrollEvent,!1):window.addEventListener("scroll",this.menuContainerScrollEvent)}},{key:"unbind",value:function(t){this.tribute.range.getDocument().removeEventListener("mousedown",this.menuClickEvent,!1),this.tribute.range.getDocument().removeEventListener("MSPointerDown",this.menuClickEvent,!1),window.removeEventListener("resize",this.windowResizeEvent),this.menuContainer?this.menuContainer.removeEventListener("scroll",this.menuContainerScrollEvent,!1):window.removeEventListener("scroll",this.menuContainerScrollEvent)}},{key:"debounce",value:function(t,e,n){var i,r=arguments,o=this;return function(){var u=o,l=r,s=n&&!i;clearTimeout(i),i=setTimeout(function(){i=null,n||t.apply(u,l)},e),s&&t.apply(u,l)}}}]),a}(),$=function(){function a(t){k(this,a),this.tribute=t,this.tribute.range=this}return E(a,[{key:"getDocument",value:function(){var t;return this.tribute.current.collection&&(t=this.tribute.current.collection.iframe),t?t.contentWindow.document:document}},{key:"positionMenuAtCaret",value:function(t){var e,n=this,i=this.tribute.current,r=this.getTriggerInfo(!1,this.tribute.hasTrailingSpace,!0,this.tribute.allowSpaces,this.tribute.autocompleteMode);if(r!==void 0){if(!this.tribute.positionMenu)return void(this.tribute.menu.style.cssText="display: block;");e=this.isContentEditable(i.element)?this.getContentEditableCaretPosition(r.mentionPosition):this.getTextAreaOrInputUnderlinePosition(this.tribute.current.element,r.mentionPosition),this.tribute.menu.style.cssText="top: ".concat(e.top,`px;
                                     left: `).concat(e.left,`px;
                                     right: `).concat(e.right,`px;
                                     bottom: `).concat(e.bottom,`px;
                                     position: absolute;
                                     display: block;`),e.left==="auto"&&(this.tribute.menu.style.left="auto"),e.top==="auto"&&(this.tribute.menu.style.top="auto"),t&&this.scrollIntoView(),window.setTimeout(function(){var o={width:n.tribute.menu.offsetWidth,height:n.tribute.menu.offsetHeight},u=n.isMenuOffScreen(e,o),l=window.innerWidth>o.width&&(u.left||u.right),s=window.innerHeight>o.height&&(u.top||u.bottom);(l||s)&&(n.tribute.menu.style.cssText="display: none",n.positionMenuAtCaret(t))},0)}else this.tribute.menu.style.cssText="display: none"}},{key:"selectElement",value:function(t,e,n){var i,r=t;if(e)for(var o=0;o<e.length;o++){if((r=r.childNodes[e[o]])===void 0)return;for(;r.length<n;)n-=r.length,r=r.nextSibling;r.childNodes.length!==0||r.length||(r=r.previousSibling)}var u=this.getWindowSelection();(i=this.getDocument().createRange()).setStart(r,n),i.setEnd(r,n),i.collapse(!0);try{u.removeAllRanges()}catch(l){}u.addRange(i),t.focus()}},{key:"replaceTriggerText",value:function(t,e,n,i,r){var o=this.getTriggerInfo(!0,n,e,this.tribute.allowSpaces,this.tribute.autocompleteMode);if(o!==void 0){var u=this.tribute.current,l=new CustomEvent("tribute-replaced",{detail:{item:r,instance:u,context:o,event:i}});if(this.isContentEditable(u.element)){t+=typeof this.tribute.replaceTextSuffix=="string"?this.tribute.replaceTextSuffix:"\xA0";var s=o.mentionPosition+o.mentionText.length;this.tribute.autocompleteMode||(s+=o.mentionTriggerChar.length),this.pasteHtml(t,o.mentionPosition,s)}else{var c=this.tribute.current.element,f=typeof this.tribute.replaceTextSuffix=="string"?this.tribute.replaceTextSuffix:" ";t+=f;var h=o.mentionPosition,m=o.mentionPosition+o.mentionText.length+f.length;this.tribute.autocompleteMode||(m+=o.mentionTriggerChar.length-1),c.value=c.value.substring(0,h)+t+c.value.substring(m,c.value.length),c.selectionStart=h+t.length,c.selectionEnd=h+t.length}u.element.dispatchEvent(new CustomEvent("input",{bubbles:!0})),u.element.dispatchEvent(l)}}},{key:"pasteHtml",value:function(t,e,n){var i,r;r=this.getWindowSelection(),(i=this.getDocument().createRange()).setStart(r.anchorNode,e),i.setEnd(r.anchorNode,n),i.deleteContents();var o=this.getDocument().createElement("div");o.innerHTML=t;for(var u,l,s=this.getDocument().createDocumentFragment();u=o.firstChild;)l=s.appendChild(u);i.insertNode(s),l&&((i=i.cloneRange()).setStartAfter(l),i.collapse(!0),r.removeAllRanges(),r.addRange(i))}},{key:"getWindowSelection",value:function(){return this.tribute.collection.iframe?this.tribute.collection.iframe.contentWindow.getSelection():window.getSelection()}},{key:"getNodePositionInParent",value:function(t){if(t.parentNode===null)return 0;for(var e=0;e<t.parentNode.childNodes.length;e++)if(t.parentNode.childNodes[e]===t)return e}},{key:"getContentEditableSelectedPath",value:function(t){var e=this.getWindowSelection(),n=e.anchorNode,i=[];if(n!=null){for(var r,o=n.contentEditable;n!==null&&o!=="true";)r=this.getNodePositionInParent(n),i.push(r),(n=n.parentNode)!==null&&(o=n.contentEditable);return i.reverse(),{selected:n,path:i,offset:e.getRangeAt(0).startOffset}}}},{key:"getTextPrecedingCurrentSelection",value:function(){var t=this.tribute.current,e="";if(this.isContentEditable(t.element)){var n=this.getWindowSelection().anchorNode;if(n!=null){var i=n.textContent,r=this.getWindowSelection().getRangeAt(0).startOffset;i&&r>=0&&(e=i.substring(0,r))}}else{var o=this.tribute.current.element;if(o){var u=o.selectionStart;o.value&&u>=0&&(e=o.value.substring(0,u))}}return e}},{key:"getLastWordInText",value:function(t){var e=(t=t.replace(/\u00A0/g," ")).split(/\s+/);return e[e.length-1].trim()}},{key:"getTriggerInfo",value:function(t,e,n,i,r){var o,u,l,s=this,c=this.tribute.current;if(this.isContentEditable(c.element)){var f=this.getContentEditableSelectedPath(c);f&&(o=f.selected,u=f.path,l=f.offset)}else o=this.tribute.current.element;var h=this.getTextPrecedingCurrentSelection(),m=this.getLastWordInText(h);if(r)return{mentionPosition:h.length-m.length,mentionText:m,mentionSelectedElement:o,mentionSelectedPath:u,mentionSelectedOffset:l};if(h!=null){var v,d=-1;if(this.tribute.collection.forEach(function(T){var S=T.trigger,C=T.requireLeadingSpace?s.lastIndexWithLeadingSpace(h,S):h.lastIndexOf(S);C>d&&(d=C,v=S,n=T.requireLeadingSpace)}),d>=0&&(d===0||!n||/[\xA0\s]/g.test(h.substring(d-1,d)))){var p=h.substring(d+v.length,h.length);v=h.substring(d,d+v.length);var y=p.substring(0,1),b=p.length>0&&(y===" "||y==="\xA0");e&&(p=p.trim());var w=i?/[^\S ]/g:/[\xA0\s]/g;if(this.tribute.hasTrailingSpace=w.test(p),!b&&(t||!w.test(p)))return{mentionPosition:d,mentionText:p,mentionSelectedElement:o,mentionSelectedPath:u,mentionSelectedOffset:l,mentionTriggerChar:v}}}}},{key:"lastIndexWithLeadingSpace",value:function(t,e){for(var n=t.split("").reverse().join(""),i=-1,r=0,o=t.length;r<o;r++){for(var u=r===t.length-1,l=/\s/.test(n[r+1]),s=!0,c=e.length-1;c>=0;c--)if(e[c]!==n[r-c]){s=!1;break}if(s&&(u||l)){i=t.length-1-r;break}}return i}},{key:"isContentEditable",value:function(t){return t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA"}},{key:"isMenuOffScreen",value:function(t,e){var n=window.innerWidth,i=window.innerHeight,r=document.documentElement,o=(window.pageXOffset||r.scrollLeft)-(r.clientLeft||0),u=(window.pageYOffset||r.scrollTop)-(r.clientTop||0),l=typeof t.top=="number"?t.top:u+i-t.bottom-e.height,s=typeof t.right=="number"?t.right:t.left+e.width,c=typeof t.bottom=="number"?t.bottom:t.top+e.height,f=typeof t.left=="number"?t.left:o+n-t.right-e.width;return{top:l<Math.floor(u),right:s>Math.ceil(o+n),bottom:c>Math.ceil(u+i),left:f<Math.floor(o)}}},{key:"getMenuDimensions",value:function(){var t={width:null,height:null};return this.tribute.menu.style.cssText=`top: 0px;
                                 left: 0px;
                                 position: fixed;
                                 display: block;
                                 visibility; hidden;`,t.width=this.tribute.menu.offsetWidth,t.height=this.tribute.menu.offsetHeight,this.tribute.menu.style.cssText="display: none;",t}},{key:"getTextAreaOrInputUnderlinePosition",value:function(t,e,n){var i=window.mozInnerScreenX!==null,r=this.getDocument().createElement("div");r.id="input-textarea-caret-position-mirror-div",this.getDocument().body.appendChild(r);var o=r.style,u=window.getComputedStyle?getComputedStyle(t):t.currentStyle;o.whiteSpace="pre-wrap",t.nodeName!=="INPUT"&&(o.wordWrap="break-word"),o.position="absolute",o.visibility="hidden",["direction","boxSizing","width","height","overflowX","overflowY","borderTopWidth","borderRightWidth","borderBottomWidth","borderLeftWidth","paddingTop","paddingRight","paddingBottom","paddingLeft","fontStyle","fontVariant","fontWeight","fontStretch","fontSize","fontSizeAdjust","lineHeight","fontFamily","textAlign","textTransform","textIndent","textDecoration","letterSpacing","wordSpacing"].forEach(function(C){o[C]=u[C]}),i?(o.width="".concat(parseInt(u.width)-2,"px"),t.scrollHeight>parseInt(u.height)&&(o.overflowY="scroll")):o.overflow="hidden",r.textContent=t.value.substring(0,e),t.nodeName==="INPUT"&&(r.textContent=r.textContent.replace(/\s/g,"\xA0"));var l=this.getDocument().createElement("span");l.textContent=t.value.substring(e)||".",r.appendChild(l);var s=t.getBoundingClientRect(),c=document.documentElement,f=(window.pageXOffset||c.scrollLeft)-(c.clientLeft||0),h=(window.pageYOffset||c.scrollTop)-(c.clientTop||0),m=0,v=0;this.menuContainerIsBody&&(m=s.top,v=s.left);var d={top:m+h+l.offsetTop+parseInt(u.borderTopWidth)+parseInt(u.fontSize)-t.scrollTop,left:v+f+l.offsetLeft+parseInt(u.borderLeftWidth)},p=window.innerWidth,y=window.innerHeight,b=this.getMenuDimensions(),w=this.isMenuOffScreen(d,b);w.right&&(d.right=p-d.left,d.left="auto");var T=this.tribute.menuContainer?this.tribute.menuContainer.offsetHeight:this.getDocument().body.offsetHeight;if(w.bottom){var S=T-(y-(this.tribute.menuContainer?this.tribute.menuContainer.getBoundingClientRect():this.getDocument().body.getBoundingClientRect()).top);d.bottom=S+(y-s.top-l.offsetTop),d.top="auto"}return(w=this.isMenuOffScreen(d,b)).left&&(d.left=p>b.width?f+p-b.width:f,delete d.right),w.top&&(d.top=y>b.height?h+y-b.height:h,delete d.bottom),this.getDocument().body.removeChild(r),d}},{key:"getContentEditableCaretPosition",value:function(t){var e,n=this.getWindowSelection();(e=this.getDocument().createRange()).setStart(n.anchorNode,t),e.setEnd(n.anchorNode,t),e.collapse(!1);var i=e.getBoundingClientRect(),r=document.documentElement,o=(window.pageXOffset||r.scrollLeft)-(r.clientLeft||0),u=(window.pageYOffset||r.scrollTop)-(r.clientTop||0),l={left:i.left+o,top:i.top+i.height+u},s=window.innerWidth,c=window.innerHeight,f=this.getMenuDimensions(),h=this.isMenuOffScreen(l,f);h.right&&(l.left="auto",l.right=s-i.left-o);var m=this.tribute.menuContainer?this.tribute.menuContainer.offsetHeight:this.getDocument().body.offsetHeight;if(h.bottom){var v=m-(c-(this.tribute.menuContainer?this.tribute.menuContainer.getBoundingClientRect():this.getDocument().body.getBoundingClientRect()).top);l.top="auto",l.bottom=v+(c-i.top)}return(h=this.isMenuOffScreen(l,f)).left&&(l.left=s>f.width?o+s-f.width:o,delete l.right),h.top&&(l.top=c>f.height?u+c-f.height:u,delete l.bottom),this.menuContainerIsBody||(l.left=l.left?l.left-this.tribute.menuContainer.offsetLeft:l.left,l.top=l.top?l.top-this.tribute.menuContainer.offsetTop:l.top),l}},{key:"scrollIntoView",value:function(t){var e,n=this.menu;if(n!==void 0){for(;e===void 0||e.height===0;)if((e=n.getBoundingClientRect()).height===0&&((n=n.childNodes[0])===void 0||!n.getBoundingClientRect))return;var i=e.top,r=i+e.height;if(i<0)window.scrollTo(0,window.pageYOffset+e.top-20);else if(r>window.innerHeight){var o=window.pageYOffset+e.top-20;o-window.pageYOffset>100&&(o=window.pageYOffset+100);var u=window.pageYOffset-(window.innerHeight-r);u>o&&(u=o),window.scrollTo(0,u)}}}},{key:"menuContainerIsBody",get:function(){return this.tribute.menuContainer===document.body||!this.tribute.menuContainer}}]),a}(),tt=function(){function a(t){k(this,a),this.tribute=t,this.tribute.search=this}return E(a,[{key:"simpleFilter",value:function(t,e){var n=this;return e.filter(function(i){return n.test(t,i)})}},{key:"test",value:function(t,e){return this.match(t,e)!==null}},{key:"match",value:function(t,e,n){n=n||{},e.length;var i=n.pre||"",r=n.post||"",o=n.caseSensitive&&e||e.toLowerCase();if(n.skip)return{rendered:e,score:0};t=n.caseSensitive&&t||t.toLowerCase();var u=this.traverse(o,t,0,0,[]);return u?{rendered:this.render(e,u.cache,i,r),score:u.score}:null}},{key:"traverse",value:function(t,e,n,i,r){if(e.length===i)return{score:this.calculateScore(r),cache:r.slice()};if(!(t.length===n||e.length-i>t.length-n)){for(var o,u,l=e[i],s=t.indexOf(l,n);s>-1;){if(r.push(s),u=this.traverse(t,e,s+1,i+1,r),r.pop(),!u)return o;(!o||o.score<u.score)&&(o=u),s=t.indexOf(l,s+1)}return o}}},{key:"calculateScore",value:function(t){var e=0,n=1;return t.forEach(function(i,r){r>0&&(t[r-1]+1===i?n+=n+1:n=1),e+=n}),e}},{key:"render",value:function(t,e,n,i){var r=t.substring(0,e[0]);return e.forEach(function(o,u){r+=n+t[o]+i+t.substring(o+1,e[u+1]?e[u+1]:t.length)}),r}},{key:"filter",value:function(t,e,n){var i=this;return n=n||{},e.reduce(function(r,o,u,l){var s=o;n.extract&&((s=n.extract(o))||(s=""));var c=i.match(t,s,n);return c!=null&&(r[r.length]={string:c.rendered,score:c.score,index:u,original:o}),r},[]).sort(function(r,o){var u=o.score-r.score;return u||r.index-o.index})}}]),a}();return function(){function a(t){var e,n=this,i=t.values,r=i===void 0?null:i,o=t.iframe,u=o===void 0?null:o,l=t.selectClass,s=l===void 0?"highlight":l,c=t.containerClass,f=c===void 0?"tribute-container":c,h=t.itemClass,m=h===void 0?"":h,v=t.trigger,d=v===void 0?"@":v,p=t.autocompleteMode,y=p!==void 0&&p,b=t.selectTemplate,w=b===void 0?null:b,T=t.menuItemTemplate,S=T===void 0?null:T,C=t.lookup,I=C===void 0?"key":C,N=t.fillAttr,O=N===void 0?"value":N,D=t.collection,P=D===void 0?null:D,R=t.menuContainer,et=R===void 0?null:R,W=t.noMatchTemplate,A=W===void 0?null:W,H=t.requireLeadingSpace,nt=H===void 0||H,B=t.allowSpaces,F=B!==void 0&&B,_=t.replaceTextSuffix,it=_===void 0?null:_,j=t.positionMenu,rt=j===void 0||j,Y=t.spaceSelectsMatch,ot=Y!==void 0&&Y,z=t.searchOpts,K=z===void 0?{}:z,q=t.menuItemLimit,U=q===void 0?null:q,X=t.menuShowMinLength,Q=X===void 0?0:X;if(k(this,a),this.autocompleteMode=y,this.menuSelected=0,this.current={},this.inputEvent=!1,this.isActive=!1,this.menuContainer=et,this.allowSpaces=F,this.replaceTextSuffix=it,this.positionMenu=rt,this.hasTrailingSpace=!1,this.spaceSelectsMatch=ot,this.autocompleteMode&&(d="",F=!1),r)this.collection=[{trigger:d,iframe:u,selectClass:s,containerClass:f,itemClass:m,selectTemplate:(w||a.defaultSelectTemplate).bind(this),menuItemTemplate:(S||a.defaultMenuItemTemplate).bind(this),noMatchTemplate:(e=A,typeof e=="string"?e.trim()===""?null:e:typeof e=="function"?e.bind(n):A||function(){return"<li>No Match Found!</li>"}.bind(n)),lookup:I,fillAttr:O,values:r,requireLeadingSpace:nt,searchOpts:K,menuItemLimit:U,menuShowMinLength:Q}];else{if(!P)throw new Error("[Tribute] No collection specified.");this.autocompleteMode&&console.warn("Tribute in autocomplete mode does not work for collections"),this.collection=P.map(function(g){return{trigger:g.trigger||d,iframe:g.iframe||u,selectClass:g.selectClass||s,containerClass:g.containerClass||f,itemClass:g.itemClass||m,selectTemplate:(g.selectTemplate||a.defaultSelectTemplate).bind(n),menuItemTemplate:(g.menuItemTemplate||a.defaultMenuItemTemplate).bind(n),noMatchTemplate:function(x){return typeof x=="string"?x.trim()===""?null:x:typeof x=="function"?x.bind(n):A||function(){return"<li>No Match Found!</li>"}.bind(n)}(A),lookup:g.lookup||I,fillAttr:g.fillAttr||O,values:g.values,requireLeadingSpace:g.requireLeadingSpace,searchOpts:g.searchOpts||K,menuItemLimit:g.menuItemLimit||U,menuShowMinLength:g.menuShowMinLength||Q}})}new $(this),new J(this),new Z(this),new tt(this)}return E(a,[{key:"triggers",value:function(){return this.collection.map(function(t){return t.trigger})}},{key:"attach",value:function(t){if(!t)throw new Error("[Tribute] Must pass in a DOM node or NodeList.");if(typeof jQuery!="undefined"&&t instanceof jQuery&&(t=t.get()),t.constructor===NodeList||t.constructor===HTMLCollection||t.constructor===Array)for(var e=t.length,n=0;n<e;++n)this._attach(t[n]);else this._attach(t)}},{key:"_attach",value:function(t){t.hasAttribute("data-tribute")&&console.warn("Tribute was already bound to "+t.nodeName),this.ensureEditable(t),this.events.bind(t),t.setAttribute("data-tribute",!0)}},{key:"ensureEditable",value:function(t){if(a.inputTypes().indexOf(t.nodeName)===-1){if(!t.contentEditable)throw new Error("[Tribute] Cannot bind to "+t.nodeName);t.contentEditable=!0}}},{key:"createMenu",value:function(t){var e=this.range.getDocument().createElement("div"),n=this.range.getDocument().createElement("ul");return e.className=t,e.appendChild(n),this.menuContainer?this.menuContainer.appendChild(e):this.range.getDocument().body.appendChild(e)}},{key:"showMenuFor",value:function(t,e){var n=this;if(!this.isActive||this.current.element!==t||this.current.mentionText!==this.currentMentionTextSnapshot){this.currentMentionTextSnapshot=this.current.mentionText,this.menu||(this.menu=this.createMenu(this.current.collection.containerClass),t.tributeMenu=this.menu,this.menuEvents.bind(this.menu)),this.isActive=!0,this.menuSelected=0,this.current.mentionText||(this.current.mentionText="");var i=function(r){if(n.isActive){var o=n.search.filter(n.current.mentionText,r,{pre:n.current.collection.searchOpts.pre||"<span>",post:n.current.collection.searchOpts.post||"</span>",skip:n.current.collection.searchOpts.skip,extract:function(c){if(typeof n.current.collection.lookup=="string")return c[n.current.collection.lookup];if(typeof n.current.collection.lookup=="function")return n.current.collection.lookup(c,n.current.mentionText);throw new Error("Invalid lookup attribute, lookup must be string or function.")}});n.current.collection.menuItemLimit&&(o=o.slice(0,n.current.collection.menuItemLimit)),n.current.filteredItems=o;var u=n.menu.querySelector("ul");if(n.range.positionMenuAtCaret(e),!o.length){var l=new CustomEvent("tribute-no-match",{detail:n.menu});return n.current.element.dispatchEvent(l),void(typeof n.current.collection.noMatchTemplate=="function"&&!n.current.collection.noMatchTemplate()||!n.current.collection.noMatchTemplate?n.hideMenu():typeof n.current.collection.noMatchTemplate=="function"?u.innerHTML=n.current.collection.noMatchTemplate():u.innerHTML=n.current.collection.noMatchTemplate)}u.innerHTML="";var s=n.range.getDocument().createDocumentFragment();o.forEach(function(c,f){var h=n.range.getDocument().createElement("li");h.setAttribute("data-index",f),h.className=n.current.collection.itemClass,h.addEventListener("mousemove",function(m){var v=G(n._findLiTarget(m.target),2),d=(v[0],v[1]);m.movementY!==0&&n.events.setActiveLi(d)}),n.menuSelected===f&&h.classList.add(n.current.collection.selectClass),h.innerHTML=n.current.collection.menuItemTemplate(c),s.appendChild(h)}),u.appendChild(s)}};typeof this.current.collection.values=="function"?this.current.collection.values(this.current.mentionText,i):i(this.current.collection.values)}}},{key:"_findLiTarget",value:function(t){if(!t)return[];var e=t.getAttribute("data-index");return e?[t,e]:this._findLiTarget(t.parentNode)}},{key:"showMenuForCollection",value:function(t,e){t!==document.activeElement&&this.placeCaretAtEnd(t),this.current.collection=this.collection[e||0],this.current.externalTrigger=!0,this.current.element=t,t.isContentEditable?this.insertTextAtCursor(this.current.collection.trigger):this.insertAtCaret(t,this.current.collection.trigger),this.showMenuFor(t)}},{key:"placeCaretAtEnd",value:function(t){if(t.focus(),window.getSelection!==void 0&&document.createRange!==void 0){var e=document.createRange();e.selectNodeContents(t),e.collapse(!1);var n=window.getSelection();n.removeAllRanges(),n.addRange(e)}else if(document.body.createTextRange!==void 0){var i=document.body.createTextRange();i.moveToElementText(t),i.collapse(!1),i.select()}}},{key:"insertTextAtCursor",value:function(t){var e,n;(n=(e=window.getSelection()).getRangeAt(0)).deleteContents();var i=document.createTextNode(t);n.insertNode(i),n.selectNodeContents(i),n.collapse(!1),e.removeAllRanges(),e.addRange(n)}},{key:"insertAtCaret",value:function(t,e){var n=t.scrollTop,i=t.selectionStart,r=t.value.substring(0,i),o=t.value.substring(t.selectionEnd,t.value.length);t.value=r+e+o,i+=e.length,t.selectionStart=i,t.selectionEnd=i,t.focus(),t.scrollTop=n}},{key:"hideMenu",value:function(){this.menu&&(this.menu.style.cssText="display: none;",this.isActive=!1,this.menuSelected=0,this.current={})}},{key:"selectItemAtIndex",value:function(t,e){if(typeof(t=parseInt(t))=="number"&&!isNaN(t)){var n=this.current.filteredItems[t],i=this.current.collection.selectTemplate(n);i!==null&&this.replaceText(i,e,n)}}},{key:"replaceText",value:function(t,e,n){this.range.replaceTriggerText(t,!0,!0,e,n)}},{key:"_append",value:function(t,e,n){if(typeof t.values=="function")throw new Error("Unable to append to values, as it is a function.");t.values=n?e:t.values.concat(e)}},{key:"append",value:function(t,e,n){var i=parseInt(t);if(typeof i!="number")throw new Error("please provide an index for the collection to update.");var r=this.collection[i];this._append(r,e,n)}},{key:"appendCurrent",value:function(t,e){if(!this.isActive)throw new Error("No active state. Please use append instead and pass an index.");this._append(this.current.collection,t,e)}},{key:"detach",value:function(t){if(!t)throw new Error("[Tribute] Must pass in a DOM node or NodeList.");if(typeof jQuery!="undefined"&&t instanceof jQuery&&(t=t.get()),t.constructor===NodeList||t.constructor===HTMLCollection||t.constructor===Array)for(var e=t.length,n=0;n<e;++n)this._detach(t[n]);else this._detach(t)}},{key:"_detach",value:function(t){var e=this;this.events.unbind(t),t.tributeMenu&&this.menuEvents.unbind(t.tributeMenu),setTimeout(function(){t.removeAttribute("data-tribute"),e.isActive=!1,t.tributeMenu&&t.tributeMenu.remove()})}},{key:"isActive",get:function(){return this._isActive},set:function(t){if(this._isActive!=t&&(this._isActive=t,this.current.element)){var e=new CustomEvent("tribute-active-".concat(t));this.current.element.dispatchEvent(e)}}}],[{key:"defaultSelectTemplate",value:function(t){return t===void 0?"".concat(this.current.collection.trigger).concat(this.current.mentionText):this.range.isContentEditable(this.current.element)?'<span class="tribute-mention">'+(this.current.collection.trigger+t.original[this.current.collection.fillAttr])+"</span>":this.current.collection.trigger+t.original[this.current.collection.fillAttr]}},{key:"defaultMenuItemTemplate",value:function(t){return t.string}},{key:"inputTypes",value:function(){return["TEXTAREA","INPUT"]}}]),a}()})}}]);
