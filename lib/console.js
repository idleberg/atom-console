//#region \0rolldown/runtime.js
var __commonJSMin = (cb, mod) => () => (mod || (cb((mod = { exports: {} }).exports, mod), cb = null), mod.exports);

//#endregion
let atom$1 = require("atom");

//#region node_modules/@children-of-atom/rosetta/dist/index.js
var e = "// Defaults\n@ui-syntax-color: @syntax-background-color;\n@ui-s-h: hue(@ui-syntax-color);\n@ui-s-s: saturation(@ui-syntax-color);\n@ui-s-l: lightness(@ui-syntax-color);\n@ui-inv: 10%;\n@ui-hue: @ui-s-h;\n@ui-saturation: @ui-s-s;\n@ui-lightness: @ui-s-l;\n@ui-lightness-border: (@ui-s-l * 0.6);\n@ui-fg: @text-color;\n@ui-bg: @base-background-color;\n@ui-border: @base-border-color;\n\n@ui-theme-name: unknown;\n\n// Text\n@text-color-faded: fade(@text-color, 20%);\n@text-color-added: @text-color-success;\n@text-color-ignored: @text-color-subtle;\n@text-color-modified: @text-color-warning;\n@text-color-removed: @text-color-error;\n@text-color-renamed: @text-color-info;\n\n// Background levels\n@level-1-color: lighten(@base-background-color, 6%);\n@level-2-color: @base-background-color;\n@level-3-color: darken(@base-background-color, 3%);\n@level-3-color-hover: lighten(@level-3-color, 6%);\n@level-3-color-active: lighten(@level-3-color, 3%);\n\n// Accent\n@accent-luma: luma(hsl(@ui-hue, 50%, 50%));\n@accent-color: @background-color-info;\n@accent-text-color: contrast(@accent-color);\n@accent-bg-color: @background-color-info;\n@accent-bg-text-color: contrast(@accent-bg-color);\n@accent-only-text-color: @text-color-info;\n\n// Components\n@badge-background-color: @background-color-highlight;\n@button-text-color-selected: @text-color-selected;\n@button-border-color-selected: @button-border-color;\n@checkbox-background-color: @background-color-highlight;\n@input-background-color-focus: @input-background-color;\n@input-selection-color: @background-color-selected;\n@input-selection-color-focus: @background-color-selected;\n@overlay-backdrop-color: @app-background-color;\n@overlay-backdrop-opacity: 0.75;\n@progress-background-color: @accent-color;\n@scrollbar-color-editor: @scrollbar-color;\n@scrollbar-background-color-editor: @ui-syntax-color;\n\n// Tabs\n@tab-text-color: @text-color-subtle;\n@tab-text-color-active: @text-color-highlight;\n@tab-text-color-editor: @text-color-highlight;\n@tab-background-color-editor: @ui-syntax-color;\n@tab-inactive-status-added: fade(@text-color-success, 55%);\n@tab-inactive-status-modified: fade(@text-color-warning, 55%);\n\n// Tooltips\n@tooltip-background-color: @accent-bg-color;\n@tooltip-text-color: @accent-bg-text-color;\n@tooltip-text-key-color: @tooltip-background-color;\n@tooltip-background-key-color: @tooltip-text-color;\n\n// Sizes\n@ui-size: 1em;\n@ui-input-size: (@ui-size * 1.15);\n@ui-padding: (@ui-size * 1.5);\n@ui-padding-pane: (@ui-size * 0.5);\n@ui-padding-icon: (@ui-padding / 3.3);\n@ui-line-height: (@ui-size * 2);\n@ui-tab-height: (@ui-size * 2.5);\n\n// Package overrides\n@settings-list-background-color: darken(@level-2-color, 1.5%);\n@theme-config-box-shadow: none;\n@theme-config-box-shadow-selected: none;\n@theme-config-border-selected: @base-border-color;\n\n@import 'ui-variables';\n\n:root {\n  /* Theme identity */\n  --ui-theme-name: @ui-theme-name;\n\n  /* Color derivation */\n  --ui-syntax-color: @ui-syntax-color;\n  --ui-s-h: @ui-s-h;\n  --ui-s-s: @ui-s-s;\n  --ui-s-l: @ui-s-l;\n  --ui-inv: @ui-inv;\n  --ui-hue: @ui-hue;\n  --ui-saturation: @ui-saturation;\n  --ui-lightness: @ui-lightness;\n  --ui-lightness-border: @ui-lightness-border;\n  --ui-fg: @ui-fg;\n  --ui-bg: @ui-bg;\n  --ui-border: @ui-border;\n\n  /* Text (custom) */\n  --text-color-faded: @text-color-faded;\n  --text-color-added: @text-color-added;\n  --text-color-ignored: @text-color-ignored;\n  --text-color-modified: @text-color-modified;\n  --text-color-removed: @text-color-removed;\n  --text-color-renamed: @text-color-renamed;\n\n  /* Background levels */\n  --level-1-color: @level-1-color;\n  --level-2-color: @level-2-color;\n  --level-3-color: @level-3-color;\n  --level-3-color-hover: @level-3-color-hover;\n  --level-3-color-active: @level-3-color-active;\n\n  /* Accent */\n  --accent-luma: @accent-luma;\n  --accent-color: @accent-color;\n  --accent-text-color: @accent-text-color;\n  --accent-bg-color: @accent-bg-color;\n  --accent-bg-text-color: @accent-bg-text-color;\n  --accent-only-text-color: @accent-only-text-color;\n\n  /* Components (custom) */\n  --badge-background-color: @badge-background-color;\n  --button-text-color-selected: @button-text-color-selected;\n  --button-border-color-selected: @button-border-color-selected;\n  --checkbox-background-color: @checkbox-background-color;\n  --input-background-color-focus: @input-background-color-focus;\n  --input-selection-color: @input-selection-color;\n  --input-selection-color-focus: @input-selection-color-focus;\n  --overlay-backdrop-color: @overlay-backdrop-color;\n  --overlay-backdrop-opacity: @overlay-backdrop-opacity;\n  --progress-background-color: @progress-background-color;\n  --scrollbar-color-editor: @scrollbar-color-editor;\n  --scrollbar-background-color-editor: @scrollbar-background-color-editor;\n\n  /* Tabs (custom) */\n  --tab-text-color: @tab-text-color;\n  --tab-text-color-active: @tab-text-color-active;\n  --tab-text-color-editor: @tab-text-color-editor;\n  --tab-background-color-editor: @tab-background-color-editor;\n  --tab-inactive-status-added: @tab-inactive-status-added;\n  --tab-inactive-status-modified: @tab-inactive-status-modified;\n\n  /* Tooltips */\n  --tooltip-background-color: @tooltip-background-color;\n  --tooltip-text-color: @tooltip-text-color;\n  --tooltip-text-key-color: @tooltip-text-key-color;\n  --tooltip-background-key-color: @tooltip-background-key-color;\n\n  /* Sizes (custom) */\n  --ui-size: @ui-size;\n  --ui-input-size: @ui-input-size;\n  --ui-padding: @ui-padding;\n  --ui-padding-pane: @ui-padding-pane;\n  --ui-padding-icon: @ui-padding-icon;\n  --ui-line-height: @ui-line-height;\n  --ui-tab-height: @ui-tab-height;\n\n  /* Package overrides */\n  --settings-list-background-color: @settings-list-background-color;\n  --theme-config-box-shadow: @theme-config-box-shadow;\n  --theme-config-box-shadow-selected: @theme-config-box-shadow-selected;\n  --theme-config-border-selected: @theme-config-border-selected;\n}\n";
var t = "@import 'ui-variables';\n\n:root {\n  /* Text colors */\n  --text-color: @text-color;\n  --text-color-subtle: @text-color-subtle;\n  --text-color-highlight: @text-color-highlight;\n  --text-color-selected: @text-color-selected;\n  --text-color-info: @text-color-info;\n  --text-color-success: @text-color-success;\n  --text-color-warning: @text-color-warning;\n  --text-color-error: @text-color-error;\n\n  /* Background colors */\n  --background-color-info: @background-color-info;\n  --background-color-success: @background-color-success;\n  --background-color-warning: @background-color-warning;\n  --background-color-error: @background-color-error;\n  --background-color-highlight: @background-color-highlight;\n  --background-color-selected: @background-color-selected;\n  --app-background-color: @app-background-color;\n\n  /* Base colors */\n  --base-background-color: @base-background-color;\n  --base-border-color: @base-border-color;\n\n  /* Component colors */\n  --pane-item-background-color: @pane-item-background-color;\n  --pane-item-border-color: @pane-item-border-color;\n  --input-background-color: @input-background-color;\n  --input-border-color: @input-border-color;\n  --tool-panel-background-color: @tool-panel-background-color;\n  --tool-panel-border-color: @tool-panel-border-color;\n  --inset-panel-background-color: @inset-panel-background-color;\n  --inset-panel-border-color: @inset-panel-border-color;\n  --panel-heading-background-color: @panel-heading-background-color;\n  --panel-heading-border-color: @panel-heading-border-color;\n  --overlay-background-color: @overlay-background-color;\n  --overlay-border-color: @overlay-border-color;\n  --button-background-color: @button-background-color;\n  --button-background-color-hover: @button-background-color-hover;\n  --button-background-color-selected: @button-background-color-selected;\n  --button-border-color: @button-border-color;\n  --tab-bar-background-color: @tab-bar-background-color;\n  --tab-bar-border-color: @tab-bar-border-color;\n  --tab-background-color: @tab-background-color;\n  --tab-background-color-active: @tab-background-color-active;\n  --tab-border-color: @tab-border-color;\n  --tree-view-background-color: @tree-view-background-color;\n  --tree-view-border-color: @tree-view-border-color;\n  --scrollbar-color: @scrollbar-color;\n  --scrollbar-background-color: @scrollbar-background-color;\n\n  /* Site colors */\n  --ui-site-color-1: @ui-site-color-1;\n  --ui-site-color-2: @ui-site-color-2;\n  --ui-site-color-3: @ui-site-color-3;\n  --ui-site-color-4: @ui-site-color-4;\n  --ui-site-color-5: @ui-site-color-5;\n\n  /* Sizes */\n  --font-size: @font-size;\n  --input-font-size: @input-font-size;\n  --disclosure-arrow-size: @disclosure-arrow-size;\n  --component-padding: @component-padding;\n  --component-icon-padding: @component-icon-padding;\n  --component-icon-size: @component-icon-size;\n  --component-line-height: @component-line-height;\n  --component-border-radius: @component-border-radius;\n  --tab-height: @tab-height;\n\n  /* Fonts */\n  --font-family: @font-family;\n}\n";
var n = Symbol.for("@children-of-atom/rosetta");
var r = [{
	sourcePath: "@children-of-atom/rosetta/styles/ui-variables.less",
	source: t
}, {
	sourcePath: "@children-of-atom/rosetta/styles/one-ui.less",
	source: e
}];
function i() {
	let e = globalThis;
	return e[n] ?? (e[n] = {
		consumers: 0,
		styles: [],
		themeSubscription: null,
		priority: 0
	}), e[n];
}
function a() {
	let { lessCache: e } = atom.themes;
	if (!e) throw Error("Atom has not compiled any LESS yet, call this once your package has activated");
	return e;
}
function o(e) {
	let t = a();
	e.styles = r.map(({ sourcePath: n, source: r }) => atom.styles.addStyleSheet(t.cssForFile(n, r), {
		sourcePath: n,
		priority: e.priority
	}));
}
function s(e) {
	var _e$themeSubscription;
	for (let t of e.styles) t.dispose();
	e.styles = [], (_e$themeSubscription = e.themeSubscription) === null || _e$themeSubscription === void 0 || _e$themeSubscription.dispose(), e.themeSubscription = null;
}
function c(e = {}) {
	let t = i();
	t.consumers === 0 && (t.priority = e.priority ?? 0, o(t), t.themeSubscription = atom.themes.onDidChangeActiveThemes(() => o(t))), t.consumers += 1;
	let n = !1;
	return { dispose() {
		n || (n = !0, --t.consumers, t.consumers === 0 && s(t));
	} };
}

//#endregion
//#region package.json
var name = "console";

//#endregion
//#region src/config.ts
var config_default = {
	schema: {
		showTimestamp: {
			description: "Displays a timestamp next to the output",
			type: "boolean",
			default: true,
			order: 1
		},
		coloredBadges: {
			description: "Colors background of the timestamp badge",
			type: "boolean",
			default: false,
			order: 2
		},
		wordWrap: {
			description: "Wrap words if the line length exceeds the panel width",
			type: "boolean",
			default: true,
			order: 3
		},
		panelLocation: {
			title: "Panel Location",
			description: "Specifies the panel location. The change will only take effect on the next launch.",
			type: "string",
			order: 4,
			enum: [
				{
					value: "bottom",
					description: "bottom"
				},
				{
					value: "left",
					description: "left"
				},
				{
					value: "right",
					description: "right"
				}
			],
			default: "bottom"
		}
	},
	get(key = "") {
		return (key === null || key === void 0 ? void 0 : key.length) ? atom.config.get(`${name}.${key}`) : atom.config.get(`${name}`);
	},
	migrate(oldKey, newKey) {
		if (!atom.config.get(`${name}.${oldKey}`) || atom.config.get(`${name}.${newKey}`)) return;
		try {
			atom.config.set(`${name}.${newKey}`, atom.config.get(`${name}.${oldKey}`));
		} catch (_error) {
			atom.notifications.addWarning("Failed to migrate configuration, see console for details");
			return;
		}
		atom.config.unset(`${name}.${oldKey}`);
	},
	unset(key = "") {
		const unsetKey = (key === null || key === void 0 ? void 0 : key.length) ? `${name}.${key}` : name;
		atom.config.unset(unsetKey);
	}
};

//#endregion
//#region node_modules/event-kit/dist/disposable.js
var require_disposable = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
	}
	function _defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];
			descriptor.enumerable = descriptor.enumerable || false;
			descriptor.configurable = true;
			if ("value" in descriptor) descriptor.writable = true;
			Object.defineProperty(target, descriptor.key, descriptor);
		}
	}
	function _createClass(Constructor, protoProps, staticProps) {
		if (protoProps) _defineProperties(Constructor.prototype, protoProps);
		if (staticProps) _defineProperties(Constructor, staticProps);
		return Constructor;
	}
	module.exports = /*#__PURE__*/ function() {
		_createClass(Disposable, null, [{
			key: "isDisposable",
			value: function isDisposable(object) {
				return typeof (object != null ? object.dispose : void 0) === "function";
			}
		}]);
		function Disposable(disposalAction) {
			_classCallCheck(this, Disposable);
			this.disposed = false;
			this.disposalAction = disposalAction;
		}
		_createClass(Disposable, [{
			key: "dispose",
			value: function dispose() {
				if (!this.disposed) {
					this.disposed = true;
					if (typeof this.disposalAction === "function") this.disposalAction();
					this.disposalAction = null;
				}
			}
		}]);
		return Disposable;
	}();
}));

//#endregion
//#region node_modules/event-kit/dist/composite-disposable.js
var require_composite_disposable = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
	}
	function _defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];
			descriptor.enumerable = descriptor.enumerable || false;
			descriptor.configurable = true;
			if ("value" in descriptor) descriptor.writable = true;
			Object.defineProperty(target, descriptor.key, descriptor);
		}
	}
	function _createClass(Constructor, protoProps, staticProps) {
		if (protoProps) _defineProperties(Constructor.prototype, protoProps);
		if (staticProps) _defineProperties(Constructor, staticProps);
		return Constructor;
	}
	var Disposable;
	module.exports = /*#__PURE__*/ function() {
		function CompositeDisposable() {
			_classCallCheck(this, CompositeDisposable);
			this.disposed = false;
			this.disposables = /* @__PURE__ */ new Set();
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = void 0;
			try {
				for (var _iterator = arguments[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var disposable = _step.value;
					this.add(disposable);
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return != null) _iterator.return();
				} finally {
					if (_didIteratorError) throw _iteratorError;
				}
			}
		}
		_createClass(CompositeDisposable, [
			{
				key: "dispose",
				value: function dispose() {
					if (!this.disposed) {
						this.disposed = true;
						this.disposables.forEach(function(disposable) {
							return disposable.dispose();
						});
						this.disposables = null;
					}
				}
			},
			{
				key: "add",
				value: function add() {
					if (!this.disposed) {
						var _iteratorNormalCompletion2 = true;
						var _didIteratorError2 = false;
						var _iteratorError2 = void 0;
						try {
							for (var _iterator2 = arguments[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
								var disposable = _step2.value;
								assertDisposable(disposable);
								this.disposables.add(disposable);
							}
						} catch (err) {
							_didIteratorError2 = true;
							_iteratorError2 = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion2 && _iterator2.return != null) _iterator2.return();
							} finally {
								if (_didIteratorError2) throw _iteratorError2;
							}
						}
					}
				}
			},
			{
				key: "remove",
				value: function remove(disposable) {
					if (!this.disposed) this.disposables.delete(disposable);
				}
			},
			{
				key: "delete",
				value: function _delete(disposable) {
					this.remove(disposable);
				}
			},
			{
				key: "clear",
				value: function clear() {
					if (!this.disposed) this.disposables.clear();
				}
			}
		]);
		return CompositeDisposable;
	}();
	function assertDisposable(disposable) {
		if (Disposable == null) Disposable = require_disposable();
		if (!Disposable.isDisposable(disposable)) throw new TypeError("Arguments to CompositeDisposable.add must have a .dispose() method");
	}
}));

//#endregion
//#region node_modules/event-kit/dist/emitter.js
var require_emitter = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
	}
	function _defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];
			descriptor.enumerable = descriptor.enumerable || false;
			descriptor.configurable = true;
			if ("value" in descriptor) descriptor.writable = true;
			Object.defineProperty(target, descriptor.key, descriptor);
		}
	}
	function _createClass(Constructor, protoProps, staticProps) {
		if (protoProps) _defineProperties(Constructor.prototype, protoProps);
		if (staticProps) _defineProperties(Constructor, staticProps);
		return Constructor;
	}
	var Disposable = require_disposable();
	var CompositeDisposable = require_composite_disposable();
	var Emitter = /*#__PURE__*/ function() {
		_createClass(Emitter, null, [
			{
				key: "onEventHandlerException",
				value: function onEventHandlerException(exceptionHandler) {
					var _this = this;
					if (this.exceptionHandlers.length === 0) this.dispatch = this.exceptionHandlingDispatch;
					this.exceptionHandlers.push(exceptionHandler);
					return new Disposable(function() {
						_this.exceptionHandlers.splice(_this.exceptionHandlers.indexOf(exceptionHandler), 1);
						if (_this.exceptionHandlers.length === 0) return _this.dispatch = _this.simpleDispatch;
					});
				}
			},
			{
				key: "simpleDispatch",
				value: function simpleDispatch(handler, value) {
					return handler(value);
				}
			},
			{
				key: "exceptionHandlingDispatch",
				value: function exceptionHandlingDispatch(handler, value) {
					try {
						return handler(value);
					} catch (exception) {
						return this.exceptionHandlers.map(function(exceptionHandler) {
							return exceptionHandler(exception);
						});
					}
				}
			}
		]);
		function Emitter() {
			_classCallCheck(this, Emitter);
			this.disposed = false;
			this.clear();
		}
		_createClass(Emitter, [
			{
				key: "clear",
				value: function clear() {
					if (this.subscriptions != null) this.subscriptions.dispose();
					this.subscriptions = new CompositeDisposable();
					this.handlersByEventName = {};
				}
			},
			{
				key: "dispose",
				value: function dispose() {
					this.subscriptions.dispose();
					this.handlersByEventName = null;
					this.disposed = true;
				}
			},
			{
				key: "on",
				value: function on(eventName, handler, unshift) {
					var _this2 = this;
					if (unshift == null) unshift = false;
					if (this.disposed) throw new Error("Emitter has been disposed");
					if (typeof handler !== "function") throw new Error("Handler must be a function");
					if (this.handlersByEventName[eventName]) {
						if (unshift) this.handlersByEventName[eventName].unshift(handler);
						else this.handlersByEventName[eventName].push(handler);
					} else this.handlersByEventName[eventName] = [handler];
					var cleanup = new Disposable(function() {
						_this2.subscriptions.remove(cleanup);
						return _this2.off(eventName, handler);
					});
					this.subscriptions.add(cleanup);
					return cleanup;
				}
			},
			{
				key: "once",
				value: function once(eventName, handler, unshift) {
					if (unshift == null) unshift = false;
					var disposable = this.on(eventName, function wrapped(value) {
						disposable.dispose();
						return handler(value);
					}, unshift);
					return disposable;
				}
			},
			{
				key: "preempt",
				value: function preempt(eventName, handler) {
					return this.on(eventName, handler, true);
				}
			},
			{
				key: "off",
				value: function off(eventName, handlerToRemove) {
					if (this.disposed) return;
					var handlers = this.handlersByEventName[eventName];
					if (handlers) {
						var handlerIndex = handlers.indexOf(handlerToRemove);
						if (handlerIndex >= 0) handlers.splice(handlerIndex, 1);
						if (handlers.length === 0) delete this.handlersByEventName[eventName];
					}
				}
			},
			{
				key: "emit",
				value: function emit(eventName, value) {
					var handlers = this.handlersByEventName && this.handlersByEventName[eventName];
					if (handlers) {
						var handlersCopy = handlers.slice();
						for (var i = 0; i < handlersCopy.length; i++) this.constructor.dispatch(handlersCopy[i], value);
					}
				}
			},
			{
				key: "emitAsync",
				value: function emitAsync(eventName, value) {
					var _this3 = this;
					var handlers = this.handlersByEventName && this.handlersByEventName[eventName];
					if (handlers) {
						var promises = handlers.map(function(handler) {
							return _this3.constructor.dispatch(handler, value);
						});
						return Promise.all(promises).then(function() {});
					}
					return Promise.resolve();
				}
			},
			{
				key: "getEventNames",
				value: function getEventNames() {
					return Object.keys(this.handlersByEventName);
				}
			},
			{
				key: "listenerCountForEventName",
				value: function listenerCountForEventName(eventName) {
					var handlers = this.handlersByEventName[eventName];
					return handlers == null ? 0 : handlers.length;
				}
			},
			{
				key: "getTotalListenerCount",
				value: function getTotalListenerCount() {
					var result = 0;
					var _arr = Object.keys(this.handlersByEventName);
					for (var _i = 0; _i < _arr.length; _i++) {
						var eventName = _arr[_i];
						result += this.handlersByEventName[eventName].length;
					}
					return result;
				}
			}
		]);
		return Emitter;
	}();
	Emitter.dispatch = Emitter.simpleDispatch;
	Emitter.exceptionHandlers = [];
	module.exports = Emitter;
}));

//#endregion
//#region node_modules/event-kit/dist/event-kit.js
var require_event_kit = /* @__PURE__ */ __commonJSMin(((exports) => {
	exports.Emitter = require_emitter();
	exports.Disposable = require_disposable();
	exports.CompositeDisposable = require_composite_disposable();
}));

//#endregion
//#region \0@oxc-project+runtime@0.144.0/helpers/esm/typeof.js
var import_event_kit = require_event_kit();
function _typeof(o) {
	"@babel/helpers - typeof";
	return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
		return typeof o;
	} : function(o) {
		return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
	}, _typeof(o);
}

//#endregion
//#region \0@oxc-project+runtime@0.144.0/helpers/esm/toPrimitive.js
function toPrimitive(t, r) {
	if ("object" != _typeof(t) || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != _typeof(i)) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}

//#endregion
//#region \0@oxc-project+runtime@0.144.0/helpers/esm/toPropertyKey.js
function toPropertyKey(t) {
	var i = toPrimitive(t, "string");
	return "symbol" == _typeof(i) ? i : i + "";
}

//#endregion
//#region \0@oxc-project+runtime@0.144.0/helpers/esm/defineProperty.js
function _defineProperty(e, r, t) {
	return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}

//#endregion
//#region src/console-manager.ts
var ConsoleManager = class {
	constructor(view) {
		_defineProperty(this, "emitter", void 0);
		_defineProperty(this, "view", void 0);
		this.view = view;
		this.emitter = new import_event_kit.Emitter();
	}
	destroy() {
		var _this$emitter;
		(_this$emitter = this.emitter) === null || _this$emitter === void 0 || _this$emitter.dispose();
	}
	hide() {
		this.view.hide();
	}
	show() {
		this.view.show();
	}
	toggle() {
		this.view.toggle();
	}
	stickBottom() {
		this.view.stickTop = false;
	}
	stickTop() {
		this.view.stickTop = true;
	}
	log(message, level = "log") {
		this.view.log(message, level);
	}
	error(message) {
		this.log(message, "error");
	}
	warn(message) {
		this.log(message, "warning");
	}
	info(message) {
		this.log(message, "info");
	}
	debug(message) {
		this.log(message, "debug");
	}
	raw(rawText, level = "info", lineEnding = "\n") {
		rawText.split(lineEnding).forEach((line) => {
			this.log(line, level);
		});
	}
	clear() {
		this.view.clear();
	}
};

//#endregion
//#region node_modules/svelte/internal/index.mjs
function noop() {}
function add_location(element, file, line, column, char) {
	element.__svelte_meta = { loc: {
		file,
		line,
		column,
		char
	} };
}
function run(fn) {
	return fn();
}
function blank_object() {
	return Object.create(null);
}
function run_all(fns) {
	fns.forEach(run);
}
function is_function(thing) {
	return typeof thing === "function";
}
function safe_not_equal(a, b) {
	return a != a ? b == b : a !== b || a && typeof a === "object" || typeof a === "function";
}
function is_empty(obj) {
	return Object.keys(obj).length === 0;
}
const globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : global;
/**
* Resize observer singleton.
* One listener per element only!
* https://groups.google.com/a/chromium.org/g/blink-dev/c/z6ienONUb5A/m/F5-VcUZtBAAJ
*/
var ResizeObserverSingleton = class ResizeObserverSingleton {
	constructor(options) {
		this.options = options;
		this._listeners = "WeakMap" in globals ? /* @__PURE__ */ new WeakMap() : void 0;
	}
	observe(element, listener) {
		this._listeners.set(element, listener);
		this._getObserver().observe(element, this.options);
		return () => {
			this._listeners.delete(element);
			this._observer.unobserve(element);
		};
	}
	_getObserver() {
		var _a;
		return (_a = this._observer) !== null && _a !== void 0 ? _a : this._observer = new ResizeObserver((entries) => {
			var _a;
			for (const entry of entries) {
				ResizeObserverSingleton.entries.set(entry.target, entry);
				(_a = this._listeners.get(entry.target)) === null || _a === void 0 || _a(entry);
			}
		});
	}
};
ResizeObserverSingleton.entries = "WeakMap" in globals ? /* @__PURE__ */ new WeakMap() : void 0;
let is_hydrating = false;
function start_hydrating() {
	is_hydrating = true;
}
function end_hydrating() {
	is_hydrating = false;
}
function append(target, node) {
	target.appendChild(node);
}
function append_styles(target, style_sheet_id, styles) {
	const append_styles_to = get_root_for_style(target);
	if (!append_styles_to.getElementById(style_sheet_id)) {
		const style = element("style");
		style.id = style_sheet_id;
		style.textContent = styles;
		append_stylesheet(append_styles_to, style);
	}
}
function get_root_for_style(node) {
	if (!node) return document;
	const root = node.getRootNode ? node.getRootNode() : node.ownerDocument;
	if (root && root.host) return root;
	return node.ownerDocument;
}
function append_stylesheet(node, style) {
	append(node.head || node, style);
	return style.sheet;
}
function insert(target, node, anchor) {
	target.insertBefore(node, anchor || null);
}
function detach(node) {
	if (node.parentNode) node.parentNode.removeChild(node);
}
function destroy_each(iterations, detaching) {
	for (let i = 0; i < iterations.length; i += 1) if (iterations[i]) iterations[i].d(detaching);
}
function element(name) {
	return document.createElement(name);
}
function text(data) {
	return document.createTextNode(data);
}
function space() {
	return text(" ");
}
function empty() {
	return text("");
}
function listen(node, event, handler, options) {
	node.addEventListener(event, handler, options);
	return () => node.removeEventListener(event, handler, options);
}
function attr(node, attribute, value) {
	if (value == null) node.removeAttribute(attribute);
	else if (node.getAttribute(attribute) !== value) node.setAttribute(attribute, value);
}
function children(element) {
	return Array.from(element.childNodes);
}
function custom_event(type, detail, { bubbles = false, cancelable = false } = {}) {
	const e = document.createEvent("CustomEvent");
	e.initCustomEvent(type, bubbles, cancelable, detail);
	return e;
}
let current_component;
function set_current_component(component) {
	current_component = component;
}
function get_current_component() {
	if (!current_component) throw new Error("Function called outside component initialization");
	return current_component;
}
/**
* Schedules a callback to run immediately before the component is unmounted.
*
* Out of `onMount`, `beforeUpdate`, `afterUpdate` and `onDestroy`, this is the
* only one that runs inside a server-side component.
*
* https://svelte.dev/docs#run-time-svelte-ondestroy
*/
function onDestroy(fn) {
	get_current_component().$$.on_destroy.push(fn);
}
const dirty_components = [];
const binding_callbacks = [];
let render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = /* @__PURE__ */ Promise.resolve();
let update_scheduled = false;
function schedule_update() {
	if (!update_scheduled) {
		update_scheduled = true;
		resolved_promise.then(flush);
	}
}
function add_render_callback(fn) {
	render_callbacks.push(fn);
}
const seen_callbacks = /* @__PURE__ */ new Set();
let flushidx = 0;
function flush() {
	if (flushidx !== 0) return;
	const saved_component = current_component;
	do {
		try {
			while (flushidx < dirty_components.length) {
				const component = dirty_components[flushidx];
				flushidx++;
				set_current_component(component);
				update(component.$$);
			}
		} catch (e) {
			dirty_components.length = 0;
			flushidx = 0;
			throw e;
		}
		set_current_component(null);
		dirty_components.length = 0;
		flushidx = 0;
		while (binding_callbacks.length) binding_callbacks.pop()();
		for (let i = 0; i < render_callbacks.length; i += 1) {
			const callback = render_callbacks[i];
			if (!seen_callbacks.has(callback)) {
				seen_callbacks.add(callback);
				callback();
			}
		}
		render_callbacks.length = 0;
	} while (dirty_components.length);
	while (flush_callbacks.length) flush_callbacks.pop()();
	update_scheduled = false;
	seen_callbacks.clear();
	set_current_component(saved_component);
}
function update($$) {
	if ($$.fragment !== null) {
		$$.update();
		run_all($$.before_update);
		const dirty = $$.dirty;
		$$.dirty = [-1];
		$$.fragment && $$.fragment.p($$.ctx, dirty);
		$$.after_update.forEach(add_render_callback);
	}
}
/**
* Useful for example to execute remaining `afterUpdate` callbacks before executing `destroy`.
*/
function flush_render_callbacks(fns) {
	const filtered = [];
	const targets = [];
	render_callbacks.forEach((c) => fns.indexOf(c) === -1 ? filtered.push(c) : targets.push(c));
	targets.forEach((c) => c());
	render_callbacks = filtered;
}
const outroing = /* @__PURE__ */ new Set();
function transition_in(block, local) {
	if (block && block.i) {
		outroing.delete(block);
		block.i(local);
	}
}
function mount_component(component, target, anchor, customElement) {
	const { fragment, after_update } = component.$$;
	fragment && fragment.m(target, anchor);
	if (!customElement) add_render_callback(() => {
		const new_on_destroy = component.$$.on_mount.map(run).filter(is_function);
		if (component.$$.on_destroy) component.$$.on_destroy.push(...new_on_destroy);
		else run_all(new_on_destroy);
		component.$$.on_mount = [];
	});
	after_update.forEach(add_render_callback);
}
function destroy_component(component, detaching) {
	const $$ = component.$$;
	if ($$.fragment !== null) {
		flush_render_callbacks($$.after_update);
		run_all($$.on_destroy);
		$$.fragment && $$.fragment.d(detaching);
		$$.on_destroy = $$.fragment = null;
		$$.ctx = [];
	}
}
function make_dirty(component, i) {
	if (component.$$.dirty[0] === -1) {
		dirty_components.push(component);
		schedule_update();
		component.$$.dirty.fill(0);
	}
	component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
}
function init(component, options, instance, create_fragment, not_equal, props, append_styles, dirty = [-1]) {
	const parent_component = current_component;
	set_current_component(component);
	const $$ = component.$$ = {
		fragment: null,
		ctx: [],
		props,
		update: noop,
		not_equal,
		bound: blank_object(),
		on_mount: [],
		on_destroy: [],
		on_disconnect: [],
		before_update: [],
		after_update: [],
		context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
		callbacks: blank_object(),
		dirty,
		skip_bound: false,
		root: options.target || parent_component.$$.root
	};
	append_styles && append_styles($$.root);
	let ready = false;
	$$.ctx = instance ? instance(component, options.props || {}, (i, ret, ...rest) => {
		const value = rest.length ? rest[0] : ret;
		if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
			if (!$$.skip_bound && $$.bound[i]) $$.bound[i](value);
			if (ready) make_dirty(component, i);
		}
		return ret;
	}) : [];
	$$.update();
	ready = true;
	run_all($$.before_update);
	$$.fragment = create_fragment ? create_fragment($$.ctx) : false;
	if (options.target) {
		if (options.hydrate) {
			start_hydrating();
			const nodes = children(options.target);
			$$.fragment && $$.fragment.l(nodes);
			nodes.forEach(detach);
		} else $$.fragment && $$.fragment.c();
		if (options.intro) transition_in(component.$$.fragment);
		mount_component(component, options.target, options.anchor, options.customElement);
		end_hydrating();
		flush();
	}
	set_current_component(parent_component);
}
let SvelteElement;
if (typeof HTMLElement === "function") SvelteElement = class extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}
	connectedCallback() {
		const { on_mount } = this.$$;
		this.$$.on_disconnect = on_mount.map(run).filter(is_function);
		for (const key in this.$$.slotted) this.appendChild(this.$$.slotted[key]);
	}
	attributeChangedCallback(attr, _oldValue, newValue) {
		this[attr] = newValue;
	}
	disconnectedCallback() {
		run_all(this.$$.on_disconnect);
	}
	$destroy() {
		destroy_component(this, 1);
		this.$destroy = noop;
	}
	$on(type, callback) {
		if (!is_function(callback)) return noop;
		const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
		callbacks.push(callback);
		return () => {
			const index = callbacks.indexOf(callback);
			if (index !== -1) callbacks.splice(index, 1);
		};
	}
	$set($$props) {
		if (this.$$set && !is_empty($$props)) {
			this.$$.skip_bound = true;
			this.$$set($$props);
			this.$$.skip_bound = false;
		}
	}
};
/**
* Base class for Svelte components. Used when dev=false.
*/
var SvelteComponent = class {
	$destroy() {
		destroy_component(this, 1);
		this.$destroy = noop;
	}
	$on(type, callback) {
		if (!is_function(callback)) return noop;
		const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
		callbacks.push(callback);
		return () => {
			const index = callbacks.indexOf(callback);
			if (index !== -1) callbacks.splice(index, 1);
		};
	}
	$set($$props) {
		if (this.$$set && !is_empty($$props)) {
			this.$$.skip_bound = true;
			this.$$set($$props);
			this.$$.skip_bound = false;
		}
	}
};
function dispatch_dev(type, detail) {
	document.dispatchEvent(custom_event(type, Object.assign({ version: "3.59.2" }, detail), { bubbles: true }));
}
function append_dev(target, node) {
	dispatch_dev("SvelteDOMInsert", {
		target,
		node
	});
	append(target, node);
}
function insert_dev(target, node, anchor) {
	dispatch_dev("SvelteDOMInsert", {
		target,
		node,
		anchor
	});
	insert(target, node, anchor);
}
function detach_dev(node) {
	dispatch_dev("SvelteDOMRemove", { node });
	detach(node);
}
function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation, has_stop_immediate_propagation) {
	const modifiers = options === true ? ["capture"] : options ? Array.from(Object.keys(options)) : [];
	if (has_prevent_default) modifiers.push("preventDefault");
	if (has_stop_propagation) modifiers.push("stopPropagation");
	if (has_stop_immediate_propagation) modifiers.push("stopImmediatePropagation");
	dispatch_dev("SvelteDOMAddEventListener", {
		node,
		event,
		handler,
		modifiers
	});
	const dispose = listen(node, event, handler, options);
	return () => {
		dispatch_dev("SvelteDOMRemoveEventListener", {
			node,
			event,
			handler,
			modifiers
		});
		dispose();
	};
}
function attr_dev(node, attribute, value) {
	attr(node, attribute, value);
	if (value == null) dispatch_dev("SvelteDOMRemoveAttribute", {
		node,
		attribute
	});
	else dispatch_dev("SvelteDOMSetAttribute", {
		node,
		attribute,
		value
	});
}
function prop_dev(node, property, value) {
	node[property] = value;
	dispatch_dev("SvelteDOMSetProperty", {
		node,
		property,
		value
	});
}
function set_data_dev(text, data) {
	data = "" + data;
	if (text.data === data) return;
	dispatch_dev("SvelteDOMSetData", {
		node: text,
		data
	});
	text.data = data;
}
function validate_each_argument(arg) {
	if (typeof arg !== "string" && !(arg && typeof arg === "object" && "length" in arg)) {
		let msg = "{#each} only iterates over array-like objects.";
		if (typeof Symbol === "function" && arg && Symbol.iterator in arg) msg += " You can use a spread to convert this iterable into an array.";
		throw new Error(msg);
	}
}
function validate_slots(name, slot, keys) {
	for (const slot_key of Object.keys(slot)) if (!~keys.indexOf(slot_key)) console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
}
/**
* Base class for Svelte components with some minor dev-enhancements. Used when dev=true.
*/
var SvelteComponentDev = class extends SvelteComponent {
	constructor(options) {
		if (!options || !options.target && !options.$$inline) throw new Error("'target' is a required option");
		super();
	}
	$destroy() {
		super.$destroy();
		this.$destroy = () => {
			console.warn("Component was already destroyed");
		};
	}
	$capture_state() {}
	$inject_state() {}
};

//#endregion
//#region node_modules/svelte/store/index.mjs
const subscriber_queue = [];
/**
* Create a `Writable` store that allows both updating and reading by subscription.
* @param {*=}value initial value
* @param {StartStopNotifier=} start
*/
function writable(value, start = noop) {
	let stop;
	const subscribers = /* @__PURE__ */ new Set();
	function set(new_value) {
		if (safe_not_equal(value, new_value)) {
			value = new_value;
			if (stop) {
				const run_queue = !subscriber_queue.length;
				for (const subscriber of subscribers) {
					subscriber[1]();
					subscriber_queue.push(subscriber, value);
				}
				if (run_queue) {
					for (let i = 0; i < subscriber_queue.length; i += 2) subscriber_queue[i][0](subscriber_queue[i + 1]);
					subscriber_queue.length = 0;
				}
			}
		}
	}
	function update(fn) {
		set(fn(value));
	}
	function subscribe(run, invalidate = noop) {
		const subscriber = [run, invalidate];
		subscribers.add(subscriber);
		if (subscribers.size === 1) stop = start(set) || noop;
		run(value);
		return () => {
			subscribers.delete(subscriber);
			if (subscribers.size === 0 && stop) {
				stop();
				stop = null;
			}
		};
	}
	return {
		set,
		update,
		subscribe
	};
}

//#endregion
//#region src/store.ts
var store_default = writable({
	action: void 0,
	lines: [],
	showTimestamp: true,
	clear: false,
	filters: []
});

//#endregion
//#region src/utils.ts
function showDock() {
	switch (String(config_default.get("panelLocation")).toLowerCase()) {
		case "left":
			atom.workspace.getLeftDock().show();
			break;
		case "right":
			atom.workspace.getRightDock().show();
			break;
		default: atom.workspace.getBottomDock().show();
	}
}
function hideDock() {
	switch (String(config_default.get("panelLocation")).toLowerCase()) {
		case "left":
			atom.workspace.getLeftDock().hide();
			break;
		case "right":
			atom.workspace.getRightDock().hide();
			break;
		default: atom.workspace.getBottomDock().hide();
	}
}
function getTimestamp() {
	const date = /* @__PURE__ */ new Date();
	const hh = `0${date.getHours()}`.slice(-2);
	const mm = `0${date.getMinutes()}`.slice(-2);
	const ss = `0${date.getSeconds()}`.slice(-2);
	const ms = `${date.getMilliseconds()}0`.slice(0, 3);
	return {
		tooltip: date.toString(),
		visible: `${hh}:${mm}:${ss}.${ms}`
	};
}
function mapLevel(level) {
	switch (level) {
		case "debug": return {
			text: "debug",
			icon: "icon-bug"
		};
		case "error": return {
			text: "error",
			icon: "icon-flame"
		};
		case "info": return {
			text: "info",
			icon: "icon-info"
		};
		case "warn":
		case "warning": return {
			text: "warning",
			icon: "icon-issue-opened"
		};
		case "raw": return {
			text: "info",
			icon: "icon-code"
		};
		default: return {
			text: "highlight",
			icon: "icon-quote"
		};
	}
}
function handleOverflow() {
	return config_default.get("wordWrap") ? `
    overflow: hidden;
    white-space: pre-wrap;
  ` : "";
}
function initStatusBarHeight() {
	const statusBar = document.querySelector("status-bar");
	if (statusBar === null || statusBar === void 0 ? void 0 : statusBar.offsetHeight) document.documentElement.style.setProperty("--status-bar-height", `${statusBar.offsetHeight}px`);
}

//#endregion
//#region node_modules/svelte/ssr.mjs
function onMount() {}
function afterUpdate() {}

//#endregion
//#region src/views/console.svelte
const file = "src/views/console.svelte";
function add_css(target) {
	append_styles(target, "svelte-51jgst", ".scrollable.svelte-51jgst.svelte-51jgst{height:100%;overflow:auto;width:100%}.panel-body.svelte-51jgst.svelte-51jgst{background-color:var(--inset-panel-background-color);cursor:text;height:100%}.console-lines.svelte-51jgst.svelte-51jgst{overflow:visible}.console-lines.svelte-51jgst.svelte-51jgst:empty{padding:0}p.svelte-51jgst.svelte-51jgst{display:flex;margin:0}p[hidden].svelte-51jgst.svelte-51jgst{display:none}p.svelte-51jgst .timestamp.svelte-51jgst{border-left:5px solid;padding:5px;margin-bottom:5px;user-select:none}p.svelte-51jgst .timestamp.error.svelte-51jgst{border-color:var(--text-color-error)}p.svelte-51jgst .timestamp.info.svelte-51jgst{border-color:var(--text-color-info)}p.svelte-51jgst .timestamp.warning.svelte-51jgst{border-color:var(--text-color-warning)}p.svelte-51jgst .badge.svelte-51jgst{cursor:pointer;font-size:11px;position:sticky;top:5px}p.svelte-51jgst .message.svelte-51jgst{font-size:unset;flex-grow:1;margin-bottom:var(--status-bar-height);overflow:hidden}p.svelte-51jgst .message.svelte-51jgst::selection{background-color:var(--background-color-selected);color:var(--text-color-selected)}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc29sZS5zdmVsdGUiLCJzb3VyY2VzIjpbImNvbnNvbGUuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG5cbiAgICBpbXBvcnQgeyBhZnRlclVwZGF0ZSwgb25EZXN0cm95LCBvbk1vdW50IH0gZnJvbSAnc3ZlbHRlJztcbiAgICBpbXBvcnQgc3RvcmUgZnJvbSAnLi4vc3RvcmUnO1xuICAgIGltcG9ydCB7IGhhbmRsZU92ZXJmbG93LCBpbml0U3RhdHVzQmFySGVpZ2h0LCBtYXBMZXZlbCB9IGZyb20gJy4uL3V0aWxzJztcblxuXG4gICAgbGV0IGxpbmVzO1xuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gc3RvcmUuc3Vic2NyaWJlKHN0YXRlID0+IHtcbiAgICAgIHN3aXRjaCAoc3RhdGUuYWN0aW9uKSB7XG4gICAgICAgIGNhc2UgJ2xvZyc6XG4gICAgICAgICAgbGluZXMgPSBbXG4gICAgICAgICAgICAuLi5zdGF0ZS5saW5lc1xuICAgICAgICAgIF07XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnY2xlYXInOlxuICAgICAgICAgIGxpbmVzID0gW107XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICByZXR1cm4gbGluZXM7XG4gICAgfSk7XG5cbiAgICBsZXQgZGl2O1xuXG4gICAgYWZ0ZXJVcGRhdGUoKCkgPT4ge1xuICAgICAgZGl2LnNjcm9sbFRvKHtcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgdG9wOiBkaXYuc2Nyb2xsSGVpZ2h0LFxuICAgICAgICBiZWhhdmlvdXI6ICdzbW9vdGgnXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHNjcm9sbFRvVG9wID0gKCkgPT4ge1xuICAgICAgZGl2LnNjcm9sbFRvKHtcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICBiZWhhdmlvdXI6ICdzbW9vdGgnXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgbGV0IHdvcmRXcmFwO1xuICAgIGF0b20uY29uZmlnLm9ic2VydmUoJ2NvbnNvbGUud29yZFdyYXAnLCBuZXdWYWx1ZSA9PiB7XG4gICAgICB3b3JkV3JhcCA9IG5ld1ZhbHVlXG4gICAgfSk7XG5cbiAgICBsZXQgc2hvd1RpbWVzdGFtcDtcbiAgICBhdG9tLmNvbmZpZy5vYnNlcnZlKCdjb25zb2xlLnNob3dUaW1lc3RhbXAnLCBuZXdWYWx1ZSA9PiB7XG4gICAgICBzaG93VGltZXN0YW1wID0gbmV3VmFsdWVcbiAgICB9KTtcblxuICAgIGxldCBjb2xvcmVkQmFkZ2VzO1xuICAgIGF0b20uY29uZmlnLm9ic2VydmUoJ2NvbnNvbGUuY29sb3JlZEJhZGdlcycsIG5ld1ZhbHVlID0+IHtcbiAgICAgIGNvbG9yZWRCYWRnZXMgPSBuZXdWYWx1ZVxuICAgICAgICA/ICdiYWRnZSdcbiAgICAgICAgOiAndGV4dCc7XG4gICAgfSk7XG5cbiAgICBsZXQgZmlsdGVycyA9IFtdO1xuICAgIGNvbnN0IGZpbHRlckhhbmRsZXIgPSBldmVudCA9PiB7XG4gICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnKTtcblxuICAgICAgY29uc3QgZmlsdGVyID0gZXZlbnQudGFyZ2V0LmlubmVyVGV4dC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICBzdG9yZS51cGRhdGUoc3RhdGUgPT4ge1xuICAgICAgICBpZiAoc3RhdGUuZmlsdGVycy5pbmNsdWRlcyhmaWx0ZXIpKSB7XG4gICAgICAgICAgY29uc3QgaW5kZXggPSBzdGF0ZS5maWx0ZXJzLmluZGV4T2YoZmlsdGVyKTtcbiAgICAgICAgICBzdGF0ZS5maWx0ZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RhdGUuZmlsdGVycy5wdXNoKGZpbHRlcik7XG4gICAgICAgIH1cblxuICAgICAgICBmaWx0ZXJzID0gc3RhdGUuZmlsdGVycztcblxuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBvbk1vdW50KCgpID0+IGluaXRTdGF0dXNCYXJIZWlnaHQoKSk7XG4gICAgb25EZXN0cm95KHVuc3Vic2NyaWJlKTtcbjwvc2NyaXB0PlxuXG48ZGl2IGNsYXNzPSdibG9jayc+XG4gIDxkaXYgY2xhc3M9J2J0bi1ncm91cCc+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBpY29uIGljb24tcXVvdGVcIiBvbjpjbGljaz17ZmlsdGVySGFuZGxlcn0+TG9nPC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBpY29uIGljb24taW5mb1wiIG9uOmNsaWNrPXtmaWx0ZXJIYW5kbGVyfT5JbmZvPC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBpY29uIGljb24taXNzdWUtb3BlbmVkXCIgb246Y2xpY2s9e2ZpbHRlckhhbmRsZXJ9Pldhcm5pbmc8L2J1dHRvbj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGljb24gaWNvbi1mbGFtZVwiIG9uOmNsaWNrPXtmaWx0ZXJIYW5kbGVyfT5FcnJvcjwvYnV0dG9uPlxuICA8L2Rpdj5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwicGFuZWwtYm9keSBzY3JvbGxhYmxlXCIgYmluZDp0aGlzPXtkaXZ9PlxuICAgIDxkaXYgY2xhc3M9XCJjb25zb2xlLWxpbmVzXCIgdGFiaW5kZXg9XCItMVwiPlxuICAgICAgeyNpZiBsaW5lcz8ubGVuZ3RofVxuICAgICAgICB7I2VhY2ggbGluZXMgYXMge2xldmVsLCBtZXNzYWdlLCB0aW1lc3RhbXB9fVxuICAgICAgICAgIDxwIGhpZGRlbj17ZmlsdGVycy5sZW5ndGggJiYgIWZpbHRlcnMuaW5jbHVkZXMobGV2ZWwpfT5cbiAgICAgICAgICAgIHsjaWYgdHlwZW9mIG1lc3NhZ2UgPT09ICdzdHJpbmcnfVxuICAgICAgICAgICAgICB7I2lmIHNob3dUaW1lc3RhbXB9XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpbWVzdGFtcCB7bWFwTGV2ZWwobGV2ZWwpLnRleHR9XCI+XG4gICAgICAgICAgICAgICAgICA8cHJlIGNsYXNzPVwiYmFkZ2Uge2NvbG9yZWRCYWRnZXN9LXttYXBMZXZlbChsZXZlbCkudGV4dH0gaWNvbiB7bWFwTGV2ZWwobGV2ZWwpLmljb259XCIgb246Y2xpY2s9e3Njcm9sbFRvVG9wfT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gdGl0bGU9e3RpbWVzdGFtcC50b29sdGlwfT57dGltZXN0YW1wLnZpc2libGV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9wcmU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgICAgICAgIDxwcmUgY2xhc3M9XCJtZXNzYWdlXCIgc3R5bGU9e3dvcmRXcmFwICYmIGhhbmRsZU92ZXJmbG93KCl9PnttZXNzYWdlfTwvcHJlPlxuICAgICAgICAgICAgezplbHNlfVxuICAgICAgICAgICAgICB7bWVzc2FnZX1cbiAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgICAgPC9wPlxuICAgICAgICB7L2VhY2h9XG4gICAgICB7L2lmfVxuICAgIDwvZGl2PlxuPC9kaXY+XG5cbjxzdHlsZT5cbiAgLnNjcm9sbGFibGUge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5wYW5lbC1ib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbnNldC1wYW5lbC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICBjdXJzb3I6IHRleHQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLmNvbnNvbGUtbGluZXMge1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICB9XG5cbiAgLmNvbnNvbGUtbGluZXM6ZW1wdHkge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cblxuICBwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIHBbaGlkZGVuXSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIHAgLnRpbWVzdGFtcCB7XG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZDtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICB9XG5cbiAgcCAudGltZXN0YW1wLmVycm9yIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXRleHQtY29sb3ItZXJyb3IpO1xuICB9XG5cbiAgcCAudGltZXN0YW1wLmluZm8ge1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdGV4dC1jb2xvci1pbmZvKTtcbiAgfVxuXG4gIHAgLnRpbWVzdGFtcC53YXJuaW5nIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXRleHQtY29sb3Itd2FybmluZyk7XG4gIH1cblxuICBwIC5iYWRnZSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogNXB4O1xuICB9XG5cbiAgcCAubWVzc2FnZSB7XG4gICAgZm9udC1zaXplOiB1bnNldDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3RhdHVzLWJhci1oZWlnaHQpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICBwIC5tZXNzYWdlOjpzZWxlY3Rpb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3Itc2VsZWN0ZWQpO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLXNlbGVjdGVkKTtcbiAgfVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1SEUsdUNBQVksQ0FDVixNQUFNLENBQUUsSUFBSSxDQUNaLFFBQVEsQ0FBRSxJQUFJLENBQ2QsS0FBSyxDQUFFLElBQ1QsQ0FFQSx1Q0FBWSxDQUNWLGdCQUFnQixDQUFFLElBQUksOEJBQThCLENBQUMsQ0FDckQsTUFBTSxDQUFFLElBQUksQ0FDWixNQUFNLENBQUUsSUFDVixDQUVBLDBDQUFlLENBQ2IsUUFBUSxDQUFFLE9BQ1osQ0FFQSwwQ0FBYyxNQUFPLENBQ25CLE9BQU8sQ0FBRSxDQUNYLENBRUEsNkJBQUUsQ0FDQSxPQUFPLENBQUUsSUFBSSxDQUNiLE1BQU0sQ0FBRSxDQUNWLENBRUEsQ0FBQyxDQUFDLE1BQU0sNkJBQUUsQ0FDUixPQUFPLENBQUUsSUFDWCxDQUVBLGVBQUMsQ0FBQyx3QkFBVyxDQUNYLFdBQVcsQ0FBRSxHQUFHLENBQUMsS0FBSyxDQUN0QixPQUFPLENBQUUsR0FBRyxDQUNaLGFBQWEsQ0FBRSxHQUFHLENBQ2xCLFdBQVcsQ0FBRSxJQUNmLENBRUEsZUFBQyxDQUFDLFVBQVUsb0JBQU8sQ0FDakIsWUFBWSxDQUFFLElBQUksa0JBQWtCLENBQ3RDLENBRUEsZUFBQyxDQUFDLFVBQVUsbUJBQU0sQ0FDaEIsWUFBWSxDQUFFLElBQUksaUJBQWlCLENBQ3JDLENBRUEsZUFBQyxDQUFDLFVBQVUsc0JBQVMsQ0FDbkIsWUFBWSxDQUFFLElBQUksb0JBQW9CLENBQ3hDLENBRUEsZUFBQyxDQUFDLG9CQUFPLENBQ1AsTUFBTSxDQUFFLE9BQU8sQ0FDZixTQUFTLENBQUUsSUFBSSxDQUNmLFFBQVEsQ0FBRSxNQUFNLENBQ2hCLEdBQUcsQ0FBRSxHQUNQLENBRUEsZUFBQyxDQUFDLHNCQUFTLENBQ1QsU0FBUyxDQUFFLEtBQUssQ0FDaEIsU0FBUyxDQUFFLENBQUMsQ0FDWixhQUFhLENBQUUsSUFBSSxtQkFBbUIsQ0FBQyxDQUN2QyxRQUFRLENBQUUsTUFDWixDQUVBLGVBQUMsQ0FBQyxzQkFBUSxXQUFZLENBQ3BCLGdCQUFnQixDQUFFLElBQUksMkJBQTJCLENBQUMsQ0FDbEQsS0FBSyxDQUFFLElBQUkscUJBQXFCLENBQ2xDIn0= */");
}
function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[10] = list[i].level;
	child_ctx[11] = list[i].message;
	child_ctx[12] = list[i].timestamp;
	return child_ctx;
}
function create_if_block(ctx) {
	let each_1_anchor;
	let each_value = ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];
	for (let i = 0; i < each_value.length; i += 1) each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	const block = {
		c: function create() {
			for (let i = 0; i < each_blocks.length; i += 1) each_blocks[i].c();
			each_1_anchor = empty();
		},
		m: function mount(target, anchor) {
			for (let i = 0; i < each_blocks.length; i += 1) if (each_blocks[i]) each_blocks[i].m(target, anchor);
			insert_dev(target, each_1_anchor, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & 125) {
				each_value = ctx[0];
				validate_each_argument(each_value);
				let i;
				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);
					if (each_blocks[i]) each_blocks[i].p(child_ctx, dirty);
					else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}
				for (; i < each_blocks.length; i += 1) each_blocks[i].d(1);
				each_blocks.length = each_value.length;
			}
		},
		d: function destroy(detaching) {
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(each_1_anchor);
		}
	};
	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(98:6) {#if lines?.length}",
		ctx
	});
	return block;
}
function create_else_block(ctx) {
	let t_value = ctx[11] + "";
	let t;
	const block = {
		c: function create() {
			t = text(t_value);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & 1 && t_value !== (t_value = ctx[11] + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};
	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(110:12) {:else}",
		ctx
	});
	return block;
}
function create_if_block_1(ctx) {
	let t0;
	let pre;
	let t1_value = ctx[11] + "";
	let t1;
	let pre_style_value;
	let if_block = ctx[3] && create_if_block_2(ctx);
	const block = {
		c: function create() {
			if (if_block) if_block.c();
			t0 = space();
			pre = element("pre");
			t1 = text(t1_value);
			attr_dev(pre, "class", "message svelte-51jgst");
			attr_dev(pre, "style", pre_style_value = ctx[2] && handleOverflow());
			add_location(pre, file, 108, 14, 2826);
		},
		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert_dev(target, t0, anchor);
			insert_dev(target, pre, anchor);
			append_dev(pre, t1);
		},
		p: function update(ctx, dirty) {
			if (ctx[3]) {
				if (if_block) if_block.p(ctx, dirty);
				else {
					if_block = create_if_block_2(ctx);
					if_block.c();
					if_block.m(t0.parentNode, t0);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
			if (dirty & 1 && t1_value !== (t1_value = ctx[11] + "")) set_data_dev(t1, t1_value);
			if (dirty & 4 && pre_style_value !== (pre_style_value = ctx[2] && handleOverflow())) attr_dev(pre, "style", pre_style_value);
		},
		d: function destroy(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(pre);
		}
	};
	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(101:12) {#if typeof message === 'string'}",
		ctx
	});
	return block;
}
function create_if_block_2(ctx) {
	let div_1;
	let pre;
	let t0;
	let span;
	let t1_value = ctx[12].visible + "";
	let t1;
	let span_title_value;
	let t2;
	let pre_class_value;
	let div_1_class_value;
	let mounted;
	let dispose;
	const block = {
		c: function create() {
			div_1 = element("div");
			pre = element("pre");
			t0 = text("                    ");
			span = element("span");
			t1 = text(t1_value);
			t2 = text("\n                  ");
			attr_dev(span, "title", span_title_value = ctx[12].tooltip);
			add_location(span, file, 104, 20, 2685);
			attr_dev(pre, "class", pre_class_value = "badge " + ctx[4] + "-" + mapLevel(ctx[10]).text + " icon " + mapLevel(ctx[10]).icon + " svelte-51jgst");
			add_location(pre, file, 103, 18, 2555);
			attr_dev(div_1, "class", div_1_class_value = "timestamp " + mapLevel(ctx[10]).text + " svelte-51jgst");
			add_location(div_1, file, 102, 16, 2490);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div_1, anchor);
			append_dev(div_1, pre);
			append_dev(pre, t0);
			append_dev(pre, span);
			append_dev(span, t1);
			append_dev(pre, t2);
			if (!mounted) {
				dispose = listen_dev(pre, "click", ctx[6], false, false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & 1 && t1_value !== (t1_value = ctx[12].visible + "")) set_data_dev(t1, t1_value);
			if (dirty & 1 && span_title_value !== (span_title_value = ctx[12].tooltip)) attr_dev(span, "title", span_title_value);
			if (dirty & 17 && pre_class_value !== (pre_class_value = "badge " + ctx[4] + "-" + mapLevel(ctx[10]).text + " icon " + mapLevel(ctx[10]).icon + " svelte-51jgst")) attr_dev(pre, "class", pre_class_value);
			if (dirty & 1 && div_1_class_value !== (div_1_class_value = "timestamp " + mapLevel(ctx[10]).text + " svelte-51jgst")) attr_dev(div_1, "class", div_1_class_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div_1);
			mounted = false;
			dispose();
		}
	};
	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_2.name,
		type: "if",
		source: "(102:14) {#if showTimestamp}",
		ctx
	});
	return block;
}
function create_each_block(ctx) {
	let p;
	let t;
	let p_hidden_value;
	function select_block_type(ctx, dirty) {
		if (typeof ctx[11] === "string") return create_if_block_1;
		return create_else_block;
	}
	let current_block_type = select_block_type(ctx, -1);
	let if_block = current_block_type(ctx);
	const block = {
		c: function create() {
			p = element("p");
			if_block.c();
			t = space();
			p.hidden = p_hidden_value = ctx[5].length && !ctx[5].includes(ctx[10]);
			attr_dev(p, "class", "svelte-51jgst");
			add_location(p, file, 99, 10, 2338);
		},
		m: function mount(target, anchor) {
			insert_dev(target, p, anchor);
			if_block.m(p, null);
			append_dev(p, t);
		},
		p: function update(ctx, dirty) {
			if (current_block_type === (current_block_type = select_block_type(ctx, dirty)) && if_block) if_block.p(ctx, dirty);
			else {
				if_block.d(1);
				if_block = current_block_type(ctx);
				if (if_block) {
					if_block.c();
					if_block.m(p, t);
				}
			}
			if (dirty & 33 && p_hidden_value !== (p_hidden_value = ctx[5].length && !ctx[5].includes(ctx[10]))) prop_dev(p, "hidden", p_hidden_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(p);
			if_block.d();
		}
	};
	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(99:8) {#each lines as {level, message, timestamp}}",
		ctx
	});
	return block;
}
function create_fragment(ctx) {
	var _ctx$;
	let div1;
	let div0;
	let button0;
	let t1;
	let button1;
	let t3;
	let button2;
	let t5;
	let button3;
	let t7;
	let div3;
	let div2;
	let mounted;
	let dispose;
	let if_block = ((_ctx$ = ctx[0]) === null || _ctx$ === void 0 ? void 0 : _ctx$.length) && create_if_block(ctx);
	const block = {
		c: function create() {
			div1 = element("div");
			div0 = element("div");
			button0 = element("button");
			button0.textContent = "Log";
			t1 = space();
			button1 = element("button");
			button1.textContent = "Info";
			t3 = space();
			button2 = element("button");
			button2.textContent = "Warning";
			t5 = space();
			button3 = element("button");
			button3.textContent = "Error";
			t7 = space();
			div3 = element("div");
			div2 = element("div");
			if (if_block) if_block.c();
			attr_dev(button0, "class", "btn icon icon-quote");
			add_location(button0, file, 88, 4, 1813);
			attr_dev(button1, "class", "btn icon icon-info");
			add_location(button1, file, 89, 4, 1891);
			attr_dev(button2, "class", "btn icon icon-issue-opened");
			add_location(button2, file, 90, 4, 1969);
			attr_dev(button3, "class", "btn icon icon-flame");
			add_location(button3, file, 91, 4, 2058);
			attr_dev(div0, "class", "btn-group");
			add_location(div0, file, 87, 2, 1785);
			attr_dev(div1, "class", "block");
			add_location(div1, file, 86, 0, 1763);
			attr_dev(div2, "class", "console-lines svelte-51jgst");
			attr_dev(div2, "tabindex", "-1");
			add_location(div2, file, 96, 4, 2207);
			attr_dev(div3, "class", "panel-body scrollable svelte-51jgst");
			add_location(div3, file, 95, 0, 2151);
		},
		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			append_dev(div0, button0);
			append_dev(div0, t1);
			append_dev(div0, button1);
			append_dev(div0, t3);
			append_dev(div0, button2);
			append_dev(div0, t5);
			append_dev(div0, button3);
			insert_dev(target, t7, anchor);
			insert_dev(target, div3, anchor);
			append_dev(div3, div2);
			if (if_block) if_block.m(div2, null);
			ctx[8](div3);
			if (!mounted) {
				dispose = [
					listen_dev(button0, "click", ctx[7], false, false, false, false),
					listen_dev(button1, "click", ctx[7], false, false, false, false),
					listen_dev(button2, "click", ctx[7], false, false, false, false),
					listen_dev(button3, "click", ctx[7], false, false, false, false)
				];
				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			var _ctx$2;
			if ((_ctx$2 = ctx[0]) === null || _ctx$2 === void 0 ? void 0 : _ctx$2.length) {
				if (if_block) if_block.p(ctx, dirty);
				else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(div2, null);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
			if (detaching) detach_dev(t7);
			if (detaching) detach_dev(div3);
			if (if_block) if_block.d();
			ctx[8](null);
			mounted = false;
			run_all(dispose);
		}
	};
	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});
	return block;
}
function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Console", slots, []);
	let lines;
	const unsubscribe = store_default.subscribe((state) => {
		switch (state.action) {
			case "log":
				$$invalidate(0, lines = [...state.lines]);
				break;
			case "clear": $$invalidate(0, lines = []);
		}
		return lines;
	});
	let div;
	afterUpdate(() => {
		div.scrollTo({
			left: 0,
			top: div.scrollHeight,
			behaviour: "smooth"
		});
	});
	const scrollToTop = () => {
		div.scrollTo({
			top: 0,
			left: 0,
			behaviour: "smooth"
		});
	};
	let wordWrap;
	atom.config.observe("console.wordWrap", (newValue) => {
		$$invalidate(2, wordWrap = newValue);
	});
	let showTimestamp;
	atom.config.observe("console.showTimestamp", (newValue) => {
		$$invalidate(3, showTimestamp = newValue);
	});
	let coloredBadges;
	atom.config.observe("console.coloredBadges", (newValue) => {
		$$invalidate(4, coloredBadges = newValue ? "badge" : "text");
	});
	let filters = [];
	const filterHandler = (event) => {
		event.target.classList.toggle("selected");
		const filter = event.target.innerText.toLowerCase();
		store_default.update((state) => {
			if (state.filters.includes(filter)) {
				const index = state.filters.indexOf(filter);
				state.filters.splice(index, 1);
			} else state.filters.push(filter);
			$$invalidate(5, filters = state.filters);
			return state;
		});
	};
	onMount(() => initStatusBarHeight());
	onDestroy(unsubscribe);
	const writable_props = [];
	Object.keys($$props).forEach((key) => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$" && key !== "slot") console.warn(`<Console> was created with unknown prop '${key}'`);
	});
	function div3_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			div = $$value;
			$$invalidate(1, div);
		});
	}
	$$self.$capture_state = () => ({
		afterUpdate,
		onDestroy,
		onMount,
		store: store_default,
		handleOverflow,
		initStatusBarHeight,
		mapLevel,
		lines,
		unsubscribe,
		div,
		scrollToTop,
		wordWrap,
		showTimestamp,
		coloredBadges,
		filters,
		filterHandler
	});
	$$self.$inject_state = ($$props) => {
		if ("lines" in $$props) $$invalidate(0, lines = $$props.lines);
		if ("div" in $$props) $$invalidate(1, div = $$props.div);
		if ("wordWrap" in $$props) $$invalidate(2, wordWrap = $$props.wordWrap);
		if ("showTimestamp" in $$props) $$invalidate(3, showTimestamp = $$props.showTimestamp);
		if ("coloredBadges" in $$props) $$invalidate(4, coloredBadges = $$props.coloredBadges);
		if ("filters" in $$props) $$invalidate(5, filters = $$props.filters);
	};
	if ($$props && "$$inject" in $$props) $$self.$inject_state($$props.$$inject);
	return [
		lines,
		div,
		wordWrap,
		showTimestamp,
		coloredBadges,
		filters,
		scrollToTop,
		filterHandler,
		div3_binding
	];
}
var Console = class extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {}, add_css);
		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Console",
			options,
			id: create_fragment.name
		});
	}
};

//#endregion
//#region src/console-view.ts
var ConsoleView = class {
	constructor() {
		_defineProperty(this, "disposables", void 0);
	}
	destroy() {
		var _this$disposables;
		(_this$disposables = this.disposables) === null || _this$disposables === void 0 || _this$disposables.dispose();
	}
	getElement() {
		const element = document.createElement("console");
		new Console({ target: element });
		return element;
	}
	getTitle() {
		return "Console";
	}
	getPath() {
		return "panel";
	}
	getURI() {
		return `atom://${name}/${this.getPath()}`;
	}
	getDefaultLocation() {
		return String(config_default.get("panelLocation"));
	}
	show() {
		atom.workspace.open(this, { activatePane: false });
		showDock();
	}
	hide() {
		hideDock();
	}
	toggle() {
		atom.workspace.toggle(this);
	}
	log(message, level) {
		store_default.update((state) => {
			state.lines = [...state.lines || [], {
				level,
				message,
				timestamp: getTimestamp()
			}];
			state.action = "log";
			return state;
		});
	}
	clear() {
		if (atom.inDevMode()) console.log("Clearing console");
		store_default.update((state) => {
			state.action = "clear";
			state.lines = [];
			return state;
		});
	}
};

//#endregion
//#region node_modules/@atxm/developer-console/lib/index.js
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
function __spreadArray(to, from) {
	for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) to[j] = from[i];
	return to;
}
var DeveloperConsole = function() {
	function DeveloperConsole(options) {
		if (options === void 0) options = {};
		this.name = options.name;
		this.styleSheet = "\n      background-color: " + (options.backgroundColor || "darkgrey") + ";\n      border-radius: 2px;\n      color: " + (options.color || "white") + ";\n      line-height: 1.5;\n      padding: 1px 4px;\n      text-shadow: 0 1px 0px rgba(0, 0, 0, 0.2);\n    ";
	}
	DeveloperConsole.prototype.__console__ = function(type) {
		var _a;
		var args = [];
		for (var _i = 1; _i < arguments.length; _i++) args[_i - 1] = arguments[_i];
		if (!(atom === null || atom === void 0 ? void 0 : atom.inDevMode())) return;
		args.unshift("%c" + this.name + "%c", this.styleSheet, "");
		(_a = window.console)[type].apply(_a, args);
	};
	DeveloperConsole.prototype.debug = function() {
		var data = [];
		for (var _i = 0; _i < arguments.length; _i++) data[_i] = arguments[_i];
		this.__console__.apply(this, __spreadArray(["debug"], data));
	};
	DeveloperConsole.prototype.error = function() {
		var data = [];
		for (var _i = 0; _i < arguments.length; _i++) data[_i] = arguments[_i];
		this.__console__.apply(this, __spreadArray(["error"], data));
	};
	DeveloperConsole.prototype.info = function() {
		var data = [];
		for (var _i = 0; _i < arguments.length; _i++) data[_i] = arguments[_i];
		this.__console__.apply(this, __spreadArray(["info"], data));
	};
	DeveloperConsole.prototype.log = function() {
		var data = [];
		for (var _i = 0; _i < arguments.length; _i++) data[_i] = arguments[_i];
		this.__console__.apply(this, __spreadArray(["log"], data));
	};
	DeveloperConsole.prototype.trace = function() {
		var data = [];
		for (var _i = 0; _i < arguments.length; _i++) data[_i] = arguments[_i];
		this.__console__.apply(this, __spreadArray(["trace"], data));
	};
	DeveloperConsole.prototype.warn = function() {
		var data = [];
		for (var _i = 0; _i < arguments.length; _i++) data[_i] = arguments[_i];
		this.__console__.apply(this, __spreadArray(["warn"], data));
	};
	return DeveloperConsole;
}();

//#endregion
//#region src/log.ts
var log_default = new DeveloperConsole({
	name,
	backgroundColor: "deepskyblue"
});

//#endregion
//#region src/console.ts
var console_default = {
	config: config_default.schema,
	consoleView: null,
	subscriptions: new atom$1.CompositeDisposable(),
	activate() {
		log_default.log("Activating package");
		this.consoleView = new ConsoleView();
		this.consoleManager = new ConsoleManager(this.consoleView);
		this.subscriptions.add(c());
		this.subscriptions.add(atom.commands.add("atom-workspace", { "console:show": () => this.consoleManager.show() }));
		this.subscriptions.add(atom.commands.add("atom-workspace", { "console:hide": () => this.consoleManager.hide() }));
		this.subscriptions.add(atom.commands.add("atom-workspace", { "console:toggle": () => this.consoleManager.toggle() }));
		this.subscriptions.add(atom.commands.add("atom-workspace", { "console:clear": () => this.consoleManager.clear() }));
		if (atom.inDevMode()) {
			window.cp = this.consoleManager;
			atom.commands.add("atom-workspace", { "console:log": () => this.consoleManager.raw({ msg: "Hello World" }) });
		}
	},
	deactivate() {
		var _this$subscriptions, _this$consoleView;
		log_default.log("Deactivating package");
		(_this$subscriptions = this.subscriptions) === null || _this$subscriptions === void 0 || _this$subscriptions.dispose();
		(_this$consoleView = this.consoleView) === null || _this$consoleView === void 0 || _this$consoleView.destroy();
	},
	provideConsole() {
		log_default.log("Providing service");
		return this.consoleManager;
	}
};

//#endregion
module.exports = console_default;
//# sourceMappingURL=console.js.map