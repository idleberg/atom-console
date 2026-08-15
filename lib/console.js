var e=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);let t=require("atom");var n=`// Defaults
@ui-syntax-color: @syntax-background-color;
@ui-s-h: hue(@ui-syntax-color);
@ui-s-s: saturation(@ui-syntax-color);
@ui-s-l: lightness(@ui-syntax-color);
@ui-inv: 10%;
@ui-hue: @ui-s-h;
@ui-saturation: @ui-s-s;
@ui-lightness: @ui-s-l;
@ui-lightness-border: (@ui-s-l * 0.6);
@ui-fg: @text-color;
@ui-bg: @base-background-color;
@ui-border: @base-border-color;

@ui-theme-name: unknown;

// Text
@text-color-faded: fade(@text-color, 20%);
@text-color-added: @text-color-success;
@text-color-ignored: @text-color-subtle;
@text-color-modified: @text-color-warning;
@text-color-removed: @text-color-error;
@text-color-renamed: @text-color-info;

// Background levels
@level-1-color: lighten(@base-background-color, 6%);
@level-2-color: @base-background-color;
@level-3-color: darken(@base-background-color, 3%);
@level-3-color-hover: lighten(@level-3-color, 6%);
@level-3-color-active: lighten(@level-3-color, 3%);

// Accent
@accent-luma: luma(hsl(@ui-hue, 50%, 50%));
@accent-color: @background-color-info;
@accent-text-color: contrast(@accent-color);
@accent-bg-color: @background-color-info;
@accent-bg-text-color: contrast(@accent-bg-color);
@accent-only-text-color: @text-color-info;

// Components
@badge-background-color: @background-color-highlight;
@button-text-color-selected: @text-color-selected;
@button-border-color-selected: @button-border-color;
@checkbox-background-color: @background-color-highlight;
@input-background-color-focus: @input-background-color;
@input-selection-color: @background-color-selected;
@input-selection-color-focus: @background-color-selected;
@overlay-backdrop-color: @app-background-color;
@overlay-backdrop-opacity: 0.75;
@progress-background-color: @accent-color;
@scrollbar-color-editor: @scrollbar-color;
@scrollbar-background-color-editor: @ui-syntax-color;

// Tabs
@tab-text-color: @text-color-subtle;
@tab-text-color-active: @text-color-highlight;
@tab-text-color-editor: @text-color-highlight;
@tab-background-color-editor: @ui-syntax-color;
@tab-inactive-status-added: fade(@text-color-success, 55%);
@tab-inactive-status-modified: fade(@text-color-warning, 55%);

// Tooltips
@tooltip-background-color: @accent-bg-color;
@tooltip-text-color: @accent-bg-text-color;
@tooltip-text-key-color: @tooltip-background-color;
@tooltip-background-key-color: @tooltip-text-color;

// Sizes
@ui-size: 1em;
@ui-input-size: (@ui-size * 1.15);
@ui-padding: (@ui-size * 1.5);
@ui-padding-pane: (@ui-size * 0.5);
@ui-padding-icon: (@ui-padding / 3.3);
@ui-line-height: (@ui-size * 2);
@ui-tab-height: (@ui-size * 2.5);

// Package overrides
@settings-list-background-color: darken(@level-2-color, 1.5%);
@theme-config-box-shadow: none;
@theme-config-box-shadow-selected: none;
@theme-config-border-selected: @base-border-color;

@import 'ui-variables';

:root {
  /* Theme identity */
  --ui-theme-name: @ui-theme-name;

  /* Color derivation */
  --ui-syntax-color: @ui-syntax-color;
  --ui-s-h: @ui-s-h;
  --ui-s-s: @ui-s-s;
  --ui-s-l: @ui-s-l;
  --ui-inv: @ui-inv;
  --ui-hue: @ui-hue;
  --ui-saturation: @ui-saturation;
  --ui-lightness: @ui-lightness;
  --ui-lightness-border: @ui-lightness-border;
  --ui-fg: @ui-fg;
  --ui-bg: @ui-bg;
  --ui-border: @ui-border;

  /* Text (custom) */
  --text-color-faded: @text-color-faded;
  --text-color-added: @text-color-added;
  --text-color-ignored: @text-color-ignored;
  --text-color-modified: @text-color-modified;
  --text-color-removed: @text-color-removed;
  --text-color-renamed: @text-color-renamed;

  /* Background levels */
  --level-1-color: @level-1-color;
  --level-2-color: @level-2-color;
  --level-3-color: @level-3-color;
  --level-3-color-hover: @level-3-color-hover;
  --level-3-color-active: @level-3-color-active;

  /* Accent */
  --accent-luma: @accent-luma;
  --accent-color: @accent-color;
  --accent-text-color: @accent-text-color;
  --accent-bg-color: @accent-bg-color;
  --accent-bg-text-color: @accent-bg-text-color;
  --accent-only-text-color: @accent-only-text-color;

  /* Components (custom) */
  --badge-background-color: @badge-background-color;
  --button-text-color-selected: @button-text-color-selected;
  --button-border-color-selected: @button-border-color-selected;
  --checkbox-background-color: @checkbox-background-color;
  --input-background-color-focus: @input-background-color-focus;
  --input-selection-color: @input-selection-color;
  --input-selection-color-focus: @input-selection-color-focus;
  --overlay-backdrop-color: @overlay-backdrop-color;
  --overlay-backdrop-opacity: @overlay-backdrop-opacity;
  --progress-background-color: @progress-background-color;
  --scrollbar-color-editor: @scrollbar-color-editor;
  --scrollbar-background-color-editor: @scrollbar-background-color-editor;

  /* Tabs (custom) */
  --tab-text-color: @tab-text-color;
  --tab-text-color-active: @tab-text-color-active;
  --tab-text-color-editor: @tab-text-color-editor;
  --tab-background-color-editor: @tab-background-color-editor;
  --tab-inactive-status-added: @tab-inactive-status-added;
  --tab-inactive-status-modified: @tab-inactive-status-modified;

  /* Tooltips */
  --tooltip-background-color: @tooltip-background-color;
  --tooltip-text-color: @tooltip-text-color;
  --tooltip-text-key-color: @tooltip-text-key-color;
  --tooltip-background-key-color: @tooltip-background-key-color;

  /* Sizes (custom) */
  --ui-size: @ui-size;
  --ui-input-size: @ui-input-size;
  --ui-padding: @ui-padding;
  --ui-padding-pane: @ui-padding-pane;
  --ui-padding-icon: @ui-padding-icon;
  --ui-line-height: @ui-line-height;
  --ui-tab-height: @ui-tab-height;

  /* Package overrides */
  --settings-list-background-color: @settings-list-background-color;
  --theme-config-box-shadow: @theme-config-box-shadow;
  --theme-config-box-shadow-selected: @theme-config-box-shadow-selected;
  --theme-config-border-selected: @theme-config-border-selected;
}
`,r=`@import 'ui-variables';

:root {
  /* Text colors */
  --text-color: @text-color;
  --text-color-subtle: @text-color-subtle;
  --text-color-highlight: @text-color-highlight;
  --text-color-selected: @text-color-selected;
  --text-color-info: @text-color-info;
  --text-color-success: @text-color-success;
  --text-color-warning: @text-color-warning;
  --text-color-error: @text-color-error;

  /* Background colors */
  --background-color-info: @background-color-info;
  --background-color-success: @background-color-success;
  --background-color-warning: @background-color-warning;
  --background-color-error: @background-color-error;
  --background-color-highlight: @background-color-highlight;
  --background-color-selected: @background-color-selected;
  --app-background-color: @app-background-color;

  /* Base colors */
  --base-background-color: @base-background-color;
  --base-border-color: @base-border-color;

  /* Component colors */
  --pane-item-background-color: @pane-item-background-color;
  --pane-item-border-color: @pane-item-border-color;
  --input-background-color: @input-background-color;
  --input-border-color: @input-border-color;
  --tool-panel-background-color: @tool-panel-background-color;
  --tool-panel-border-color: @tool-panel-border-color;
  --inset-panel-background-color: @inset-panel-background-color;
  --inset-panel-border-color: @inset-panel-border-color;
  --panel-heading-background-color: @panel-heading-background-color;
  --panel-heading-border-color: @panel-heading-border-color;
  --overlay-background-color: @overlay-background-color;
  --overlay-border-color: @overlay-border-color;
  --button-background-color: @button-background-color;
  --button-background-color-hover: @button-background-color-hover;
  --button-background-color-selected: @button-background-color-selected;
  --button-border-color: @button-border-color;
  --tab-bar-background-color: @tab-bar-background-color;
  --tab-bar-border-color: @tab-bar-border-color;
  --tab-background-color: @tab-background-color;
  --tab-background-color-active: @tab-background-color-active;
  --tab-border-color: @tab-border-color;
  --tree-view-background-color: @tree-view-background-color;
  --tree-view-border-color: @tree-view-border-color;
  --scrollbar-color: @scrollbar-color;
  --scrollbar-background-color: @scrollbar-background-color;

  /* Site colors */
  --ui-site-color-1: @ui-site-color-1;
  --ui-site-color-2: @ui-site-color-2;
  --ui-site-color-3: @ui-site-color-3;
  --ui-site-color-4: @ui-site-color-4;
  --ui-site-color-5: @ui-site-color-5;

  /* Sizes */
  --font-size: @font-size;
  --input-font-size: @input-font-size;
  --disclosure-arrow-size: @disclosure-arrow-size;
  --component-padding: @component-padding;
  --component-icon-padding: @component-icon-padding;
  --component-icon-size: @component-icon-size;
  --component-line-height: @component-line-height;
  --component-border-radius: @component-border-radius;
  --tab-height: @tab-height;

  /* Fonts */
  --font-family: @font-family;
}
`,i=Symbol.for(`@children-of-atom/rosetta`),a=[{sourcePath:`@children-of-atom/rosetta/styles/ui-variables.less`,source:r},{sourcePath:`@children-of-atom/rosetta/styles/one-ui.less`,source:n}];function o(){let e=globalThis;return e[i]??(e[i]={consumers:0,styles:[],themeSubscription:null,priority:0}),e[i]}function s(){let{lessCache:e}=atom.themes;if(!e)throw Error(`Atom has not compiled any LESS yet, call this once your package has activated`);return e}function c(e){let t=s();e.styles=a.map(({sourcePath:n,source:r})=>atom.styles.addStyleSheet(t.cssForFile(n,r),{sourcePath:n,priority:e.priority}))}function l(e){var t;for(let t of e.styles)t.dispose();e.styles=[],(t=e.themeSubscription)==null||t.dispose(),e.themeSubscription=null}function u(e={}){let t=o();t.consumers===0&&(t.priority=e.priority??0,c(t),t.themeSubscription=atom.themes.onDidChangeActiveThemes(()=>c(t))),t.consumers+=1;let n=!1;return{dispose(){n||(n=!0,--t.consumers,t.consumers===0&&l(t))}}}var d=`console`,f={schema:{showTimestamp:{description:`Displays a timestamp next to the output`,type:`boolean`,default:!0,order:1},coloredBadges:{description:`Colors background of the timestamp badge`,type:`boolean`,default:!1,order:2},wordWrap:{description:`Wrap words if the line length exceeds the panel width`,type:`boolean`,default:!0,order:3},panelLocation:{title:`Panel Location`,description:`Specifies the panel location. The change will only take effect on the next launch.`,type:`string`,order:4,enum:[{value:`bottom`,description:`bottom`},{value:`left`,description:`left`},{value:`right`,description:`right`}],default:`bottom`}},get(e=``){return e!=null&&e.length?atom.config.get(`${d}.${e}`):atom.config.get(`${d}`)},migrate(e,t){if(!(!atom.config.get(`${d}.${e}`)||atom.config.get(`${d}.${t}`))){try{atom.config.set(`${d}.${t}`,atom.config.get(`${d}.${e}`))}catch{atom.notifications.addWarning(`Failed to migrate configuration, see console for details`);return}atom.config.unset(`${d}.${e}`)}},unset(e=``){let t=e!=null&&e.length?`${d}.${e}`:d;atom.config.unset(t)}},p=e(((e,t)=>{function n(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}t.exports=function(){i(e,null,[{key:`isDisposable`,value:function(e){return typeof(e==null?void 0:e.dispose)==`function`}}]);function e(t){n(this,e),this.disposed=!1,this.disposalAction=t}return i(e,[{key:`dispose`,value:function(){this.disposed||(this.disposed=!0,typeof this.disposalAction==`function`&&this.disposalAction(),this.disposalAction=null)}}]),e}()})),m=e(((e,t)=>{function n(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}var a;t.exports=function(){function e(){n(this,e),this.disposed=!1,this.disposables=new Set;var t=!0,r=!1,i=void 0;try{for(var a=arguments[Symbol.iterator](),o;!(t=(o=a.next()).done);t=!0){var s=o.value;this.add(s)}}catch(e){r=!0,i=e}finally{try{!t&&a.return!=null&&a.return()}finally{if(r)throw i}}}return i(e,[{key:`dispose`,value:function(){this.disposed||(this.disposed=!0,this.disposables.forEach(function(e){return e.dispose()}),this.disposables=null)}},{key:`add`,value:function(){if(!this.disposed){var e=!0,t=!1,n=void 0;try{for(var r=arguments[Symbol.iterator](),i;!(e=(i=r.next()).done);e=!0){var a=i.value;o(a),this.disposables.add(a)}}catch(e){t=!0,n=e}finally{try{!e&&r.return!=null&&r.return()}finally{if(t)throw n}}}}},{key:`remove`,value:function(e){this.disposed||this.disposables.delete(e)}},{key:`delete`,value:function(e){this.remove(e)}},{key:`clear`,value:function(){this.disposed||this.disposables.clear()}}]),e}();function o(e){if(a??(a=p()),!a.isDisposable(e))throw TypeError(`Arguments to CompositeDisposable.add must have a .dispose() method`)}})),h=e(((e,t)=>{function n(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}var a=p(),o=m(),s=function(){i(e,null,[{key:`onEventHandlerException`,value:function(e){var t=this;return this.exceptionHandlers.length===0&&(this.dispatch=this.exceptionHandlingDispatch),this.exceptionHandlers.push(e),new a(function(){if(t.exceptionHandlers.splice(t.exceptionHandlers.indexOf(e),1),t.exceptionHandlers.length===0)return t.dispatch=t.simpleDispatch})}},{key:`simpleDispatch`,value:function(e,t){return e(t)}},{key:`exceptionHandlingDispatch`,value:function(e,t){try{return e(t)}catch(e){return this.exceptionHandlers.map(function(t){return t(e)})}}}]);function e(){n(this,e),this.disposed=!1,this.clear()}return i(e,[{key:`clear`,value:function(){this.subscriptions!=null&&this.subscriptions.dispose(),this.subscriptions=new o,this.handlersByEventName={}}},{key:`dispose`,value:function(){this.subscriptions.dispose(),this.handlersByEventName=null,this.disposed=!0}},{key:`on`,value:function(e,t,n){var r=this;if(n??(n=!1),this.disposed)throw Error(`Emitter has been disposed`);if(typeof t!=`function`)throw Error(`Handler must be a function`);this.handlersByEventName[e]?n?this.handlersByEventName[e].unshift(t):this.handlersByEventName[e].push(t):this.handlersByEventName[e]=[t];var i=new a(function(){return r.subscriptions.remove(i),r.off(e,t)});return this.subscriptions.add(i),i}},{key:`once`,value:function(e,t,n){n??(n=!1);var r=this.on(e,function(e){return r.dispose(),t(e)},n);return r}},{key:`preempt`,value:function(e,t){return this.on(e,t,!0)}},{key:`off`,value:function(e,t){if(!this.disposed){var n=this.handlersByEventName[e];if(n){var r=n.indexOf(t);r>=0&&n.splice(r,1),n.length===0&&delete this.handlersByEventName[e]}}}},{key:`emit`,value:function(e,t){var n=this.handlersByEventName&&this.handlersByEventName[e];if(n)for(var r=n.slice(),i=0;i<r.length;i++)this.constructor.dispatch(r[i],t)}},{key:`emitAsync`,value:function(e,t){var n=this,r=this.handlersByEventName&&this.handlersByEventName[e];if(r){var i=r.map(function(e){return n.constructor.dispatch(e,t)});return Promise.all(i).then(function(){})}return Promise.resolve()}},{key:`getEventNames`,value:function(){return Object.keys(this.handlersByEventName)}},{key:`listenerCountForEventName`,value:function(e){var t=this.handlersByEventName[e];return t==null?0:t.length}},{key:`getTotalListenerCount`,value:function(){for(var e=0,t=Object.keys(this.handlersByEventName),n=0;n<t.length;n++){var r=t[n];e+=this.handlersByEventName[r].length}return e}}]),e}();s.dispatch=s.simpleDispatch,s.exceptionHandlers=[],t.exports=s})),g=e((e=>{e.Emitter=h(),e.Disposable=p(),e.CompositeDisposable=m()}))();function _(e){"@babel/helpers - typeof";return _=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},_(e)}function ee(e,t){if(_(e)!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(_(r)!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function te(e){var t=ee(e,`string`);return _(t)==`symbol`?t:t+``}function v(e,t,n){return(t=te(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var ne=class{constructor(e){v(this,`emitter`,void 0),v(this,`view`,void 0),this.view=e,this.emitter=new g.Emitter}destroy(){var e;(e=this.emitter)==null||e.dispose()}hide(){this.view.hide()}show(){this.view.show()}toggle(){this.view.toggle()}stickBottom(){this.view.stickTop=!1}stickTop(){this.view.stickTop=!0}log(e,t=`log`){this.view.log(e,t)}error(e){this.log(e,`error`)}warn(e){this.log(e,`warning`)}info(e){this.log(e,`info`)}debug(e){this.log(e,`debug`)}raw(e,t=`info`,n=`
`){e.split(n).forEach(e=>{this.log(e,t)})}clear(){this.view.clear()}};function y(){}function b(e){return e()}function x(){return Object.create(null)}function S(e){e.forEach(b)}function C(e){return typeof e==`function`}function w(e,t){return e==e?e!==t||e&&typeof e==`object`||typeof e==`function`:t==t}function re(e){return Object.keys(e).length===0}`WeakMap`in(typeof window<`u`?window:typeof globalThis<`u`?globalThis:global);function T(e,t){e.appendChild(t)}function ie(e,t,n){let r=ae(e);if(!r.getElementById(t)){let e=O(`style`);e.id=t,e.textContent=n,oe(r,e)}}function ae(e){if(!e)return document;let t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function oe(e,t){return T(e.head||e,t),t.sheet}function E(e,t,n){e.insertBefore(t,n||null)}function D(e){e.parentNode&&e.parentNode.removeChild(e)}function se(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function O(e){return document.createElement(e)}function k(e){return document.createTextNode(e)}function A(){return k(` `)}function ce(){return k(``)}function j(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function M(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function le(e){return Array.from(e.childNodes)}function N(e,t){t=``+t,e.data!==t&&(e.data=t)}let P;function F(e){P=e}function ue(){if(!P)throw Error(`Function called outside component initialization`);return P}function de(e){ue().$$.on_destroy.push(e)}const I=[],L=[];let R=[];const z=[],fe=Promise.resolve();let B=!1;function pe(){B||(B=!0,fe.then(W))}function V(e){R.push(e)}const H=new Set;let U=0;function W(){if(U!==0)return;let e=P;do{try{for(;U<I.length;){let e=I[U];U++,F(e),me(e.$$)}}catch(e){throw I.length=0,U=0,e}for(F(null),I.length=0,U=0;L.length;)L.pop()();for(let e=0;e<R.length;e+=1){let t=R[e];H.has(t)||(H.add(t),t())}R.length=0}while(I.length);for(;z.length;)z.pop()();B=!1,H.clear(),F(e)}function me(e){if(e.fragment!==null){e.update(),S(e.before_update);let t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(V)}}function he(e){let t=[],n=[];R.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(e=>e()),R=t}const ge=new Set;function _e(e,t){e&&e.i&&(ge.delete(e),e.i(t))}function ve(e,t,n,r){let{fragment:i,after_update:a}=e.$$;i&&i.m(t,n),r||V(()=>{let t=e.$$.on_mount.map(b).filter(C);e.$$.on_destroy?e.$$.on_destroy.push(...t):S(t),e.$$.on_mount=[]}),a.forEach(V)}function ye(e,t){let n=e.$$;n.fragment!==null&&(he(n.after_update),S(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function be(e,t){e.$$.dirty[0]===-1&&(I.push(e),pe(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function xe(e,t,n,r,i,a,o,s=[-1]){let c=P;F(e);let l=e.$$={fragment:null,ctx:[],props:a,update:y,not_equal:i,bound:x(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:x(),dirty:s,skip_bound:!1,root:t.target||c.$$.root};o&&o(l.root);let u=!1;if(l.ctx=n?n(e,t.props||{},(t,n,...r)=>{let a=r.length?r[0]:n;return l.ctx&&i(l.ctx[t],l.ctx[t]=a)&&(!l.skip_bound&&l.bound[t]&&l.bound[t](a),u&&be(e,t)),n}):[],l.update(),u=!0,S(l.before_update),l.fragment=r?r(l.ctx):!1,t.target){if(t.hydrate){let e=le(t.target);l.fragment&&l.fragment.l(e),e.forEach(D)}else l.fragment&&l.fragment.c();t.intro&&_e(e.$$.fragment),ve(e,t.target,t.anchor,t.customElement),W()}F(c)}var Se=class{$destroy(){ye(this,1),this.$destroy=y}$on(e,t){if(!C(t))return y;let n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{let e=n.indexOf(t);e!==-1&&n.splice(e,1)}}$set(e){this.$$set&&!re(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}};const G=[];function Ce(e,t=y){let n,r=new Set;function i(t){if(w(e,t)&&(e=t,n)){let t=!G.length;for(let t of r)t[1](),G.push(t,e);if(t){for(let e=0;e<G.length;e+=2)G[e][0](G[e+1]);G.length=0}}}function a(t){i(t(e))}function o(a,o=y){let s=[a,o];return r.add(s),r.size===1&&(n=t(i)||y),a(e),()=>{r.delete(s),r.size===0&&n&&(n(),n=null)}}return{set:i,update:a,subscribe:o}}var K=Ce({action:void 0,lines:[],showTimestamp:!0,clear:!1,filters:[]});function we(){switch(String(f.get(`panelLocation`)).toLowerCase()){case`left`:atom.workspace.getLeftDock().show();break;case`right`:atom.workspace.getRightDock().show();break;default:atom.workspace.getBottomDock().show()}}function Te(){switch(String(f.get(`panelLocation`)).toLowerCase()){case`left`:atom.workspace.getLeftDock().hide();break;case`right`:atom.workspace.getRightDock().hide();break;default:atom.workspace.getBottomDock().hide()}}function Ee(){let e=new Date,t=`0${e.getHours()}`.slice(-2),n=`0${e.getMinutes()}`.slice(-2),r=`0${e.getSeconds()}`.slice(-2),i=`${e.getMilliseconds()}0`.slice(0,3);return{tooltip:e.toString(),visible:`${t}:${n}:${r}.${i}`}}function q(e){switch(e){case`debug`:return{text:`debug`,icon:`icon-bug`};case`error`:return{text:`error`,icon:`icon-flame`};case`info`:return{text:`info`,icon:`icon-info`};case`warn`:case`warning`:return{text:`warning`,icon:`icon-issue-opened`};case`raw`:return{text:`info`,icon:`icon-code`};default:return{text:`highlight`,icon:`icon-quote`}}}function J(){return f.get(`wordWrap`)?`
    overflow: hidden;
    white-space: pre-wrap;
  `:``}function De(e){ie(e,`svelte-51jgst`,`.scrollable.svelte-51jgst.svelte-51jgst{height:100%;overflow:auto;width:100%}.panel-body.svelte-51jgst.svelte-51jgst{background-color:var(--inset-panel-background-color);cursor:text;height:100%}.console-lines.svelte-51jgst.svelte-51jgst{overflow:visible}.console-lines.svelte-51jgst.svelte-51jgst:empty{padding:0}p.svelte-51jgst.svelte-51jgst{display:flex;margin:0}p[hidden].svelte-51jgst.svelte-51jgst{display:none}p.svelte-51jgst .timestamp.svelte-51jgst{border-left:5px solid;padding:5px;margin-bottom:5px;user-select:none}p.svelte-51jgst .timestamp.error.svelte-51jgst{border-color:var(--text-color-error)}p.svelte-51jgst .timestamp.info.svelte-51jgst{border-color:var(--text-color-info)}p.svelte-51jgst .timestamp.warning.svelte-51jgst{border-color:var(--text-color-warning)}p.svelte-51jgst .badge.svelte-51jgst{cursor:pointer;font-size:11px;position:sticky;top:5px}p.svelte-51jgst .message.svelte-51jgst{font-size:unset;flex-grow:1;margin-bottom:var(--status-bar-height);overflow:hidden}p.svelte-51jgst .message.svelte-51jgst::selection{background-color:var(--background-color-selected);color:var(--text-color-selected)}`)}function Y(e,t,n){let r=e.slice();return r[10]=t[n].level,r[11]=t[n].message,r[12]=t[n].timestamp,r}function X(e){let t,n=e[0],r=[];for(let t=0;t<n.length;t+=1)r[t]=Ae(Y(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=ce()},m(e,n){for(let t=0;t<r.length;t+=1)r[t]&&r[t].m(e,n);E(e,t,n)},p(e,i){if(i&125){n=e[0];let a;for(a=0;a<n.length;a+=1){let o=Y(e,n,a);r[a]?r[a].p(o,i):(r[a]=Ae(o),r[a].c(),r[a].m(t.parentNode,t))}for(;a<r.length;a+=1)r[a].d(1);r.length=n.length}},d(e){se(r,e),e&&D(t)}}}function Oe(e){let t=e[11]+``,n;return{c(){n=k(t)},m(e,t){E(e,n,t)},p(e,r){r&1&&t!==(t=e[11]+``)&&N(n,t)},d(e){e&&D(n)}}}function ke(e){let t,n,r=e[11]+``,i,a,o=e[3]&&Z(e);return{c(){o&&o.c(),t=A(),n=O(`pre`),i=k(r),M(n,`class`,`message svelte-51jgst`),M(n,`style`,a=e[2]&&J())},m(e,r){o&&o.m(e,r),E(e,t,r),E(e,n,r),T(n,i)},p(e,s){e[3]?o?o.p(e,s):(o=Z(e),o.c(),o.m(t.parentNode,t)):o&&(o.d(1),o=null),s&1&&r!==(r=e[11]+``)&&N(i,r),s&4&&a!==(a=e[2]&&J())&&M(n,`style`,a)},d(e){o&&o.d(e),e&&D(t),e&&D(n)}}}function Z(e){let t,n,r,i,a=e[12].visible+``,o,s,c,l,u,d,f;return{c(){t=O(`div`),n=O(`pre`),r=k(`                    `),i=O(`span`),o=k(a),c=k(`
                  `),M(i,`title`,s=e[12].tooltip),M(n,`class`,l=`badge `+e[4]+`-`+q(e[10]).text+` icon `+q(e[10]).icon+` svelte-51jgst`),M(t,`class`,u=`timestamp `+q(e[10]).text+` svelte-51jgst`)},m(a,s){E(a,t,s),T(t,n),T(n,r),T(n,i),T(i,o),T(n,c),d||(f=j(n,`click`,e[6]),d=!0)},p(e,r){r&1&&a!==(a=e[12].visible+``)&&N(o,a),r&1&&s!==(s=e[12].tooltip)&&M(i,`title`,s),r&17&&l!==(l=`badge `+e[4]+`-`+q(e[10]).text+` icon `+q(e[10]).icon+` svelte-51jgst`)&&M(n,`class`,l),r&1&&u!==(u=`timestamp `+q(e[10]).text+` svelte-51jgst`)&&M(t,`class`,u)},d(e){e&&D(t),d=!1,f()}}}function Ae(e){let t,n,r;function i(e,t){return typeof e[11]==`string`?ke:Oe}let a=i(e,-1),o=a(e);return{c(){t=O(`p`),o.c(),n=A(),t.hidden=r=e[5].length&&!e[5].includes(e[10]),M(t,`class`,`svelte-51jgst`)},m(e,r){E(e,t,r),o.m(t,null),T(t,n)},p(e,s){a===(a=i(e,s))&&o?o.p(e,s):(o.d(1),o=a(e),o&&(o.c(),o.m(t,n))),s&33&&r!==(r=e[5].length&&!e[5].includes(e[10]))&&(t.hidden=r)},d(e){e&&D(t),o.d()}}}function je(e){var t;let n,r,i,a,o,s,c,l,u,d,f,p,m,h,g=((t=e[0])==null?void 0:t.length)&&X(e);return{c(){n=O(`div`),r=O(`div`),i=O(`button`),i.textContent=`Log`,a=A(),o=O(`button`),o.textContent=`Info`,s=A(),c=O(`button`),c.textContent=`Warning`,l=A(),u=O(`button`),u.textContent=`Error`,d=A(),f=O(`div`),p=O(`div`),g&&g.c(),M(i,`class`,`btn icon icon-quote`),M(o,`class`,`btn icon icon-info`),M(c,`class`,`btn icon icon-issue-opened`),M(u,`class`,`btn icon icon-flame`),M(r,`class`,`btn-group`),M(n,`class`,`block`),M(p,`class`,`console-lines svelte-51jgst`),M(p,`tabindex`,`-1`),M(f,`class`,`panel-body scrollable svelte-51jgst`)},m(t,_){E(t,n,_),T(n,r),T(r,i),T(r,a),T(r,o),T(r,s),T(r,c),T(r,l),T(r,u),E(t,d,_),E(t,f,_),T(f,p),g&&g.m(p,null),e[8](f),m||(h=[j(i,`click`,e[7]),j(o,`click`,e[7]),j(c,`click`,e[7]),j(u,`click`,e[7])],m=!0)},p(e,[t]){var n;(n=e[0])!=null&&n.length?g?g.p(e,t):(g=X(e),g.c(),g.m(p,null)):g&&(g.d(1),g=null)},i:y,o:y,d(t){t&&D(n),t&&D(d),t&&D(f),g&&g.d(),e[8](null),m=!1,S(h)}}}function Me(e,t,n){let r,i=K.subscribe(e=>{switch(e.action){case`log`:n(0,r=[...e.lines]);break;case`clear`:n(0,r=[])}return r}),a,o=()=>{a.scrollTo({top:0,left:0,behaviour:`smooth`})},s;atom.config.observe(`console.wordWrap`,e=>{n(2,s=e)});let c;atom.config.observe(`console.showTimestamp`,e=>{n(3,c=e)});let l;atom.config.observe(`console.coloredBadges`,e=>{n(4,l=e?`badge`:`text`)});let u=[],d=e=>{e.target.classList.toggle(`selected`);let t=e.target.innerText.toLowerCase();K.update(e=>{if(e.filters.includes(t)){let n=e.filters.indexOf(t);e.filters.splice(n,1)}else e.filters.push(t);return n(5,u=e.filters),e})};de(i);function f(e){L[e?`unshift`:`push`](()=>{a=e,n(1,a)})}return[r,a,s,c,l,u,o,d,f]}var Ne=class extends Se{constructor(e){super(),xe(this,e,Me,je,w,{},De)}},Pe=class{constructor(){v(this,`disposables`,void 0),v(this,`stickTop`,!1)}destroy(){var e;(e=this.disposables)==null||e.dispose()}getElement(){let e=document.createElement(`console`);return new Ne({target:e}),e}getTitle(){return`Console`}getPath(){return`panel`}getURI(){return`atom://${d}/${this.getPath()}`}getDefaultLocation(){return String(f.get(`panelLocation`))}show(){atom.workspace.open(this,{activatePane:!1}),we()}hide(){Te()}toggle(){atom.workspace.toggle(this)}log(e,t){K.update(n=>(n.lines=[...n.lines||[],{level:t,message:e,timestamp:Ee()}],n.action=`log`,n))}clear(){atom.inDevMode()&&console.log(`Clearing console`),K.update(e=>(e.action=`clear`,e.lines=[],e))}};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function Q(e,t){for(var n=0,r=t.length,i=e.length;n<r;n++,i++)e[i]=t[n];return e}var $=new(function(){function e(e){e===void 0&&(e={}),this.name=e.name,this.styleSheet=`
      background-color: `+(e.backgroundColor||`darkgrey`)+`;
      border-radius: 2px;
      color: `+(e.color||`white`)+`;
      line-height: 1.5;
      padding: 1px 4px;
      text-shadow: 0 1px 0px rgba(0, 0, 0, 0.2);
    `}return e.prototype.__console__=function(e){for(var t,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];atom!=null&&atom.inDevMode()&&(n.unshift(`%c`+this.name+`%c`,this.styleSheet,``),(t=window.console)[e].apply(t,n))},e.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.__console__.apply(this,Q([`debug`],e))},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.__console__.apply(this,Q([`error`],e))},e.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.__console__.apply(this,Q([`info`],e))},e.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.__console__.apply(this,Q([`log`],e))},e.prototype.trace=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.__console__.apply(this,Q([`trace`],e))},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.__console__.apply(this,Q([`warn`],e))},e}())({name:d,backgroundColor:`deepskyblue`}),Fe={config:f.schema,consoleView:null,consoleManager:null,subscriptions:new t.CompositeDisposable,activate(){$.log(`Activating package`);let e=new Pe;this.consoleView=e,this.consoleManager=new ne(e),this.subscriptions.add(u()),this.subscriptions.add(atom.commands.add(`atom-workspace`,{"console:show":()=>{var e;return(e=this.consoleManager)==null?void 0:e.show()}})),this.subscriptions.add(atom.commands.add(`atom-workspace`,{"console:hide":()=>{var e;return(e=this.consoleManager)==null?void 0:e.hide()}})),this.subscriptions.add(atom.commands.add(`atom-workspace`,{"console:toggle":()=>{var e;return(e=this.consoleManager)==null?void 0:e.toggle()}})),this.subscriptions.add(atom.commands.add(`atom-workspace`,{"console:clear":()=>{var e;return(e=this.consoleManager)==null?void 0:e.clear()}})),atom.inDevMode()&&(window.cp=this.consoleManager,atom.commands.add(`atom-workspace`,{"console:log":()=>{var e;return(e=this.consoleManager)==null?void 0:e.raw(`Hello World`)}}))},deactivate(){var e,t;$.log(`Deactivating package`),(e=this.subscriptions)==null||e.dispose(),(t=this.consoleView)==null||t.destroy()},provideConsole(){return $.log(`Providing service`),this.consoleManager}};module.exports=Fe;