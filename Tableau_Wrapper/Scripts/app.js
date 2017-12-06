/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "Scripts/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (immutable) */ __webpack_exports__["a"] = AggregateError;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FEATURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return PLATFORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return isInitialized; });
/* harmony export (immutable) */ __webpack_exports__["e"] = initializePAL;
/* unused harmony export reset */

function AggregateError(message, innerError, skipIfAlreadyAggregate) {
  if (innerError) {
    if (innerError.innerError && skipIfAlreadyAggregate) {
      return innerError;
    }

    var separator = '\n------------------------------------------------\n';

    message += separator + 'Inner Error:\n';

    if (typeof innerError === 'string') {
      message += 'Message: ' + innerError;
    } else {
      if (innerError.message) {
        message += 'Message: ' + innerError.message;
      } else {
        message += 'Unknown Inner Error Type. Displaying Inner Error as JSON:\n ' + JSON.stringify(innerError, null, '  ');
      }

      if (innerError.stack) {
        message += '\nInner Error Stack:\n' + innerError.stack;
        message += '\nEnd Inner Error Stack';
      }
    }

    message += separator;
  }

  var e = new Error(message);
  if (innerError) {
    e.innerError = innerError;
  }

  return e;
}

var FEATURE = {};

var PLATFORM = {
  noop: function noop() {},
  eachModule: function eachModule() {},
  moduleName: function (_moduleName) {
    function moduleName(_x) {
      return _moduleName.apply(this, arguments);
    }

    moduleName.toString = function () {
      return _moduleName.toString();
    };

    return moduleName;
  }(function (moduleName) {
    return moduleName;
  })
};

PLATFORM.global = function () {
  if (typeof self !== 'undefined') {
    return self;
  }

  if (typeof global !== 'undefined') {
    return global;
  }

  return new Function('return this')();
}();

var DOM = {};
var isInitialized = false;

function initializePAL(callback) {
  if (isInitialized) {
    return;
  }
  isInitialized = true;
  if (typeof Object.getPropertyDescriptor !== 'function') {
    Object.getPropertyDescriptor = function (subject, name) {
      var pd = Object.getOwnPropertyDescriptor(subject, name);
      var proto = Object.getPrototypeOf(subject);
      while (typeof pd === 'undefined' && proto !== null) {
        pd = Object.getOwnPropertyDescriptor(proto, name);
        proto = Object.getPrototypeOf(proto);
      }
      return pd;
    };
  }

  callback(PLATFORM, FEATURE, DOM);
}
function reset() {
  isInitialized = false;
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(35)))

/***/ }),

/***/ 1:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export animationEvent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Animator; });
/* unused harmony export CompositionTransactionNotifier */
/* unused harmony export CompositionTransactionOwnershipToken */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CompositionTransaction; });
/* unused harmony export _hyphenate */
/* unused harmony export _isAllWhitespace */
/* unused harmony export ViewEngineHooksResource */
/* unused harmony export viewEngineHooks */
/* unused harmony export ElementEvents */
/* unused harmony export ResourceLoadContext */
/* unused harmony export ViewCompileInstruction */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BehaviorInstruction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return TargetInstruction; });
/* unused harmony export viewStrategy */
/* unused harmony export RelativeViewStrategy */
/* unused harmony export ConventionalViewStrategy */
/* unused harmony export NoViewStrategy */
/* unused harmony export TemplateRegistryViewStrategy */
/* unused harmony export InlineViewStrategy */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return ViewLocator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return BindingLanguage; });
/* unused harmony export SlotCustomAttribute */
/* unused harmony export PassThroughSlot */
/* unused harmony export ShadowSlot */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ShadowDOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return ViewResources; });
/* unused harmony export View */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return ViewSlot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return BoundViewFactory; });
/* unused harmony export ViewFactory */
/* unused harmony export ViewCompiler */
/* unused harmony export ResourceModule */
/* unused harmony export ResourceDescription */
/* unused harmony export ModuleAnalyzer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return ViewEngine; });
/* unused harmony export Controller */
/* unused harmony export BehaviorPropertyObserver */
/* unused harmony export BindableProperty */
/* unused harmony export HtmlBehaviorResource */
/* unused harmony export children */
/* unused harmony export child */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return SwapStrategies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return CompositionEngine; });
/* unused harmony export ElementConfigResource */
/* harmony export (immutable) */ __webpack_exports__["s"] = resource;
/* unused harmony export behavior */
/* harmony export (immutable) */ __webpack_exports__["q"] = customElement;
/* harmony export (immutable) */ __webpack_exports__["p"] = customAttribute;
/* harmony export (immutable) */ __webpack_exports__["t"] = templateController;
/* harmony export (immutable) */ __webpack_exports__["o"] = bindable;
/* unused harmony export dynamicOptions */
/* unused harmony export useShadowDOM */
/* unused harmony export processAttributes */
/* unused harmony export processContent */
/* unused harmony export containerless */
/* unused harmony export useViewStrategy */
/* harmony export (immutable) */ __webpack_exports__["u"] = useView;
/* unused harmony export inlineView */
/* harmony export (immutable) */ __webpack_exports__["r"] = noView;
/* unused harmony export elementConfig */
/* unused harmony export viewResources */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return TemplatingEngine; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_logging__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_pal__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_aurelia_path__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aurelia_loader__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_aurelia_dependency_injection__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_aurelia_task_queue__ = __webpack_require__(9);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp, _dec, _class2, _dec2, _class3, _dec3, _class4, _dec4, _class5, _dec5, _class6, _class7, _temp2, _dec6, _class8, _class9, _temp3, _class11, _dec7, _class13, _dec8, _class14, _class15, _temp4, _dec9, _class16, _dec10, _class17, _dec11, _class18;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };












var animationEvent = {
  enterBegin: 'animation:enter:begin',
  enterActive: 'animation:enter:active',
  enterDone: 'animation:enter:done',
  enterTimeout: 'animation:enter:timeout',

  leaveBegin: 'animation:leave:begin',
  leaveActive: 'animation:leave:active',
  leaveDone: 'animation:leave:done',
  leaveTimeout: 'animation:leave:timeout',

  staggerNext: 'animation:stagger:next',

  removeClassBegin: 'animation:remove-class:begin',
  removeClassActive: 'animation:remove-class:active',
  removeClassDone: 'animation:remove-class:done',
  removeClassTimeout: 'animation:remove-class:timeout',

  addClassBegin: 'animation:add-class:begin',
  addClassActive: 'animation:add-class:active',
  addClassDone: 'animation:add-class:done',
  addClassTimeout: 'animation:add-class:timeout',

  animateBegin: 'animation:animate:begin',
  animateActive: 'animation:animate:active',
  animateDone: 'animation:animate:done',
  animateTimeout: 'animation:animate:timeout',

  sequenceBegin: 'animation:sequence:begin',
  sequenceDone: 'animation:sequence:done'
};

var Animator = function () {
  function Animator() {
    
  }

  Animator.prototype.enter = function enter(element) {
    return Promise.resolve(false);
  };

  Animator.prototype.leave = function leave(element) {
    return Promise.resolve(false);
  };

  Animator.prototype.removeClass = function removeClass(element, className) {
    element.classList.remove(className);
    return Promise.resolve(false);
  };

  Animator.prototype.addClass = function addClass(element, className) {
    element.classList.add(className);
    return Promise.resolve(false);
  };

  Animator.prototype.animate = function animate(element, className) {
    return Promise.resolve(false);
  };

  Animator.prototype.runSequence = function runSequence(animations) {};

  Animator.prototype.registerEffect = function registerEffect(effectName, properties) {};

  Animator.prototype.unregisterEffect = function unregisterEffect(effectName) {};

  return Animator;
}();

var CompositionTransactionNotifier = function () {
  function CompositionTransactionNotifier(owner) {
    

    this.owner = owner;
    this.owner._compositionCount++;
  }

  CompositionTransactionNotifier.prototype.done = function done() {
    this.owner._compositionCount--;
    this.owner._tryCompleteTransaction();
  };

  return CompositionTransactionNotifier;
}();

var CompositionTransactionOwnershipToken = function () {
  function CompositionTransactionOwnershipToken(owner) {
    

    this.owner = owner;
    this.owner._ownershipToken = this;
    this.thenable = this._createThenable();
  }

  CompositionTransactionOwnershipToken.prototype.waitForCompositionComplete = function waitForCompositionComplete() {
    this.owner._tryCompleteTransaction();
    return this.thenable;
  };

  CompositionTransactionOwnershipToken.prototype.resolve = function resolve() {
    this._resolveCallback();
  };

  CompositionTransactionOwnershipToken.prototype._createThenable = function _createThenable() {
    var _this = this;

    return new Promise(function (resolve, reject) {
      _this._resolveCallback = resolve;
    });
  };

  return CompositionTransactionOwnershipToken;
}();

var CompositionTransaction = function () {
  function CompositionTransaction() {
    

    this._ownershipToken = null;
    this._compositionCount = 0;
  }

  CompositionTransaction.prototype.tryCapture = function tryCapture() {
    return this._ownershipToken === null ? new CompositionTransactionOwnershipToken(this) : null;
  };

  CompositionTransaction.prototype.enlist = function enlist() {
    return new CompositionTransactionNotifier(this);
  };

  CompositionTransaction.prototype._tryCompleteTransaction = function _tryCompleteTransaction() {
    if (this._compositionCount <= 0) {
      this._compositionCount = 0;

      if (this._ownershipToken !== null) {
        var token = this._ownershipToken;
        this._ownershipToken = null;
        token.resolve();
      }
    }
  };

  return CompositionTransaction;
}();

var capitalMatcher = /([A-Z])/g;

function addHyphenAndLower(char) {
  return '-' + char.toLowerCase();
}

function _hyphenate(name) {
  return (name.charAt(0).toLowerCase() + name.slice(1)).replace(capitalMatcher, addHyphenAndLower);
}

function _isAllWhitespace(node) {
  return !(node.auInterpolationTarget || /[^\t\n\r ]/.test(node.textContent));
}

var ViewEngineHooksResource = function () {
  function ViewEngineHooksResource() {
    
  }

  ViewEngineHooksResource.prototype.initialize = function initialize(container, target) {
    this.instance = container.get(target);
  };

  ViewEngineHooksResource.prototype.register = function register(registry, name) {
    registry.registerViewEngineHooks(this.instance);
  };

  ViewEngineHooksResource.prototype.load = function load(container, target) {};

  ViewEngineHooksResource.convention = function convention(name) {
    if (name.endsWith('ViewEngineHooks')) {
      return new ViewEngineHooksResource();
    }
  };

  return ViewEngineHooksResource;
}();

function viewEngineHooks(target) {
  var deco = function deco(t) {
    __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["b" /* metadata */].define(__WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["b" /* metadata */].resource, new ViewEngineHooksResource(), t);
  };

  return target ? deco(target) : deco;
}

var ElementEvents = function () {
  function ElementEvents(element) {
    

    this.element = element;
    this.subscriptions = {};
  }

  ElementEvents.prototype._enqueueHandler = function _enqueueHandler(handler) {
    this.subscriptions[handler.eventName] = this.subscriptions[handler.eventName] || [];
    this.subscriptions[handler.eventName].push(handler);
  };

  ElementEvents.prototype._dequeueHandler = function _dequeueHandler(handler) {
    var index = void 0;
    var subscriptions = this.subscriptions[handler.eventName];
    if (subscriptions) {
      index = subscriptions.indexOf(handler);
      if (index > -1) {
        subscriptions.splice(index, 1);
      }
    }
    return handler;
  };

  ElementEvents.prototype.publish = function publish(eventName) {
    var detail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var bubbles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var cancelable = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

    var event = __WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["b" /* DOM */].createCustomEvent(eventName, { cancelable: cancelable, bubbles: bubbles, detail: detail });
    this.element.dispatchEvent(event);
  };

  ElementEvents.prototype.subscribe = function subscribe(eventName, handler) {
    var _this2 = this;

    var bubbles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    if (handler && typeof handler === 'function') {
      handler.eventName = eventName;
      handler.handler = handler;
      handler.bubbles = bubbles;
      handler.dispose = function () {
        _this2.element.removeEventListener(eventName, handler, bubbles);
        _this2._dequeueHandler(handler);
      };
      this.element.addEventListener(eventName, handler, bubbles);
      this._enqueueHandler(handler);
      return handler;
    }

    return undefined;
  };

  ElementEvents.prototype.subscribeOnce = function subscribeOnce(eventName, handler) {
    var _this3 = this;

    var bubbles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    if (handler && typeof handler === 'function') {
      var _ret = function () {
        var _handler = function _handler(event) {
          handler(event);
          _handler.dispose();
        };
        return {
          v: _this3.subscribe(eventName, _handler, bubbles)
        };
      }();

      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
    }

    return undefined;
  };

  ElementEvents.prototype.dispose = function dispose(eventName) {
    if (eventName && typeof eventName === 'string') {
      var subscriptions = this.subscriptions[eventName];
      if (subscriptions) {
        while (subscriptions.length) {
          var subscription = subscriptions.pop();
          if (subscription) {
            subscription.dispose();
          }
        }
      }
    } else {
      this.disposeAll();
    }
  };

  ElementEvents.prototype.disposeAll = function disposeAll() {
    for (var key in this.subscriptions) {
      this.dispose(key);
    }
  };

  return ElementEvents;
}();

var ResourceLoadContext = function () {
  function ResourceLoadContext() {
    

    this.dependencies = {};
  }

  ResourceLoadContext.prototype.addDependency = function addDependency(url) {
    this.dependencies[url] = true;
  };

  ResourceLoadContext.prototype.hasDependency = function hasDependency(url) {
    return url in this.dependencies;
  };

  return ResourceLoadContext;
}();

var ViewCompileInstruction = function ViewCompileInstruction() {
  var targetShadowDOM = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var compileSurrogate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  

  this.targetShadowDOM = targetShadowDOM;
  this.compileSurrogate = compileSurrogate;
  this.associatedModuleId = null;
};

ViewCompileInstruction.normal = new ViewCompileInstruction();

var BehaviorInstruction = function () {
  BehaviorInstruction.enhance = function enhance() {
    var instruction = new BehaviorInstruction();
    instruction.enhance = true;
    return instruction;
  };

  BehaviorInstruction.unitTest = function unitTest(type, attributes) {
    var instruction = new BehaviorInstruction();
    instruction.type = type;
    instruction.attributes = attributes || {};
    return instruction;
  };

  BehaviorInstruction.element = function element(node, type) {
    var instruction = new BehaviorInstruction();
    instruction.type = type;
    instruction.attributes = {};
    instruction.anchorIsContainer = !(node.hasAttribute('containerless') || type.containerless);
    instruction.initiatedByBehavior = true;
    return instruction;
  };

  BehaviorInstruction.attribute = function attribute(attrName, type) {
    var instruction = new BehaviorInstruction();
    instruction.attrName = attrName;
    instruction.type = type || null;
    instruction.attributes = {};
    return instruction;
  };

  BehaviorInstruction.dynamic = function dynamic(host, viewModel, viewFactory) {
    var instruction = new BehaviorInstruction();
    instruction.host = host;
    instruction.viewModel = viewModel;
    instruction.viewFactory = viewFactory;
    instruction.inheritBindingContext = true;
    return instruction;
  };

  function BehaviorInstruction() {
    

    this.initiatedByBehavior = false;
    this.enhance = false;
    this.partReplacements = null;
    this.viewFactory = null;
    this.originalAttrName = null;
    this.skipContentProcessing = false;
    this.contentFactory = null;
    this.viewModel = null;
    this.anchorIsContainer = false;
    this.host = null;
    this.attributes = null;
    this.type = null;
    this.attrName = null;
    this.inheritBindingContext = false;
  }

  return BehaviorInstruction;
}();

BehaviorInstruction.normal = new BehaviorInstruction();

var TargetInstruction = (_temp = _class = function () {
  TargetInstruction.shadowSlot = function shadowSlot(parentInjectorId) {
    var instruction = new TargetInstruction();
    instruction.parentInjectorId = parentInjectorId;
    instruction.shadowSlot = true;
    return instruction;
  };

  TargetInstruction.contentExpression = function contentExpression(expression) {
    var instruction = new TargetInstruction();
    instruction.contentExpression = expression;
    return instruction;
  };

  TargetInstruction.lifting = function lifting(parentInjectorId, liftingInstruction) {
    var instruction = new TargetInstruction();
    instruction.parentInjectorId = parentInjectorId;
    instruction.expressions = TargetInstruction.noExpressions;
    instruction.behaviorInstructions = [liftingInstruction];
    instruction.viewFactory = liftingInstruction.viewFactory;
    instruction.providers = [liftingInstruction.type.target];
    instruction.lifting = true;
    return instruction;
  };

  TargetInstruction.normal = function normal(injectorId, parentInjectorId, providers, behaviorInstructions, expressions, elementInstruction) {
    var instruction = new TargetInstruction();
    instruction.injectorId = injectorId;
    instruction.parentInjectorId = parentInjectorId;
    instruction.providers = providers;
    instruction.behaviorInstructions = behaviorInstructions;
    instruction.expressions = expressions;
    instruction.anchorIsContainer = elementInstruction ? elementInstruction.anchorIsContainer : true;
    instruction.elementInstruction = elementInstruction;
    return instruction;
  };

  TargetInstruction.surrogate = function surrogate(providers, behaviorInstructions, expressions, values) {
    var instruction = new TargetInstruction();
    instruction.expressions = expressions;
    instruction.behaviorInstructions = behaviorInstructions;
    instruction.providers = providers;
    instruction.values = values;
    return instruction;
  };

  function TargetInstruction() {
    

    this.injectorId = null;
    this.parentInjectorId = null;

    this.shadowSlot = false;
    this.slotName = null;
    this.slotFallbackFactory = null;

    this.contentExpression = null;

    this.expressions = null;
    this.behaviorInstructions = null;
    this.providers = null;

    this.viewFactory = null;

    this.anchorIsContainer = false;
    this.elementInstruction = null;
    this.lifting = false;

    this.values = null;
  }

  return TargetInstruction;
}(), _class.noExpressions = Object.freeze([]), _temp);

var viewStrategy = __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["d" /* protocol */].create('aurelia:view-strategy', {
  validate: function validate(target) {
    if (!(typeof target.loadViewFactory === 'function')) {
      return 'View strategies must implement: loadViewFactory(viewEngine: ViewEngine, compileInstruction: ViewCompileInstruction, loadContext?: ResourceLoadContext): Promise<ViewFactory>';
    }

    return true;
  },
  compose: function compose(target) {
    if (!(typeof target.makeRelativeTo === 'function')) {
      target.makeRelativeTo = __WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["d" /* PLATFORM */].noop;
    }
  }
});

var RelativeViewStrategy = (_dec = viewStrategy(), _dec(_class2 = function () {
  function RelativeViewStrategy(path) {
    

    this.path = path;
    this.absolutePath = null;
  }

  RelativeViewStrategy.prototype.loadViewFactory = function loadViewFactory(viewEngine, compileInstruction, loadContext, target) {
    if (this.absolutePath === null && this.moduleId) {
      this.absolutePath = Object(__WEBPACK_IMPORTED_MODULE_3_aurelia_path__["d" /* relativeToFile */])(this.path, this.moduleId);
    }

    compileInstruction.associatedModuleId = this.moduleId;
    return viewEngine.loadViewFactory(this.absolutePath || this.path, compileInstruction, loadContext, target);
  };

  RelativeViewStrategy.prototype.makeRelativeTo = function makeRelativeTo(file) {
    if (this.absolutePath === null) {
      this.absolutePath = Object(__WEBPACK_IMPORTED_MODULE_3_aurelia_path__["d" /* relativeToFile */])(this.path, file);
    }
  };

  return RelativeViewStrategy;
}()) || _class2);

var ConventionalViewStrategy = (_dec2 = viewStrategy(), _dec2(_class3 = function () {
  function ConventionalViewStrategy(viewLocator, origin) {
    

    this.moduleId = origin.moduleId;
    this.viewUrl = viewLocator.convertOriginToViewUrl(origin);
  }

  ConventionalViewStrategy.prototype.loadViewFactory = function loadViewFactory(viewEngine, compileInstruction, loadContext, target) {
    compileInstruction.associatedModuleId = this.moduleId;
    return viewEngine.loadViewFactory(this.viewUrl, compileInstruction, loadContext, target);
  };

  return ConventionalViewStrategy;
}()) || _class3);

var NoViewStrategy = (_dec3 = viewStrategy(), _dec3(_class4 = function () {
  function NoViewStrategy(dependencies, dependencyBaseUrl) {
    

    this.dependencies = dependencies || null;
    this.dependencyBaseUrl = dependencyBaseUrl || '';
  }

  NoViewStrategy.prototype.loadViewFactory = function loadViewFactory(viewEngine, compileInstruction, loadContext, target) {
    var entry = this.entry;
    var dependencies = this.dependencies;

    if (entry && entry.factoryIsReady) {
      return Promise.resolve(null);
    }

    this.entry = entry = new __WEBPACK_IMPORTED_MODULE_4_aurelia_loader__["b" /* TemplateRegistryEntry */](this.moduleId || this.dependencyBaseUrl);

    entry.dependencies = [];
    entry.templateIsLoaded = true;

    if (dependencies !== null) {
      for (var i = 0, ii = dependencies.length; i < ii; ++i) {
        var current = dependencies[i];

        if (typeof current === 'string' || typeof current === 'function') {
          entry.addDependency(current);
        } else {
          entry.addDependency(current.from, current.as);
        }
      }
    }

    compileInstruction.associatedModuleId = this.moduleId;

    return viewEngine.loadViewFactory(entry, compileInstruction, loadContext, target);
  };

  return NoViewStrategy;
}()) || _class4);

var TemplateRegistryViewStrategy = (_dec4 = viewStrategy(), _dec4(_class5 = function () {
  function TemplateRegistryViewStrategy(moduleId, entry) {
    

    this.moduleId = moduleId;
    this.entry = entry;
  }

  TemplateRegistryViewStrategy.prototype.loadViewFactory = function loadViewFactory(viewEngine, compileInstruction, loadContext, target) {
    var entry = this.entry;

    if (entry.factoryIsReady) {
      return Promise.resolve(entry.factory);
    }

    compileInstruction.associatedModuleId = this.moduleId;
    return viewEngine.loadViewFactory(entry, compileInstruction, loadContext, target);
  };

  return TemplateRegistryViewStrategy;
}()) || _class5);

var InlineViewStrategy = (_dec5 = viewStrategy(), _dec5(_class6 = function () {
  function InlineViewStrategy(markup, dependencies, dependencyBaseUrl) {
    

    this.markup = markup;
    this.dependencies = dependencies || null;
    this.dependencyBaseUrl = dependencyBaseUrl || '';
  }

  InlineViewStrategy.prototype.loadViewFactory = function loadViewFactory(viewEngine, compileInstruction, loadContext, target) {
    var entry = this.entry;
    var dependencies = this.dependencies;

    if (entry && entry.factoryIsReady) {
      return Promise.resolve(entry.factory);
    }

    this.entry = entry = new __WEBPACK_IMPORTED_MODULE_4_aurelia_loader__["b" /* TemplateRegistryEntry */](this.moduleId || this.dependencyBaseUrl);
    entry.template = __WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["b" /* DOM */].createTemplateFromMarkup(this.markup);

    if (dependencies !== null) {
      for (var i = 0, ii = dependencies.length; i < ii; ++i) {
        var current = dependencies[i];

        if (typeof current === 'string' || typeof current === 'function') {
          entry.addDependency(current);
        } else {
          entry.addDependency(current.from, current.as);
        }
      }
    }

    compileInstruction.associatedModuleId = this.moduleId;
    return viewEngine.loadViewFactory(entry, compileInstruction, loadContext, target);
  };

  return InlineViewStrategy;
}()) || _class6);

var ViewLocator = (_temp2 = _class7 = function () {
  function ViewLocator() {
    
  }

  ViewLocator.prototype.getViewStrategy = function getViewStrategy(value) {
    if (!value) {
      return null;
    }

    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && 'getViewStrategy' in value) {
      var _origin = __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["a" /* Origin */].get(value.constructor);

      value = value.getViewStrategy();

      if (typeof value === 'string') {
        value = new RelativeViewStrategy(value);
      }

      viewStrategy.assert(value);

      if (_origin.moduleId) {
        value.makeRelativeTo(_origin.moduleId);
      }

      return value;
    }

    if (typeof value === 'string') {
      value = new RelativeViewStrategy(value);
    }

    if (viewStrategy.validate(value)) {
      return value;
    }

    if (typeof value !== 'function') {
      value = value.constructor;
    }

    var origin = __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["a" /* Origin */].get(value);
    var strategy = __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["b" /* metadata */].get(ViewLocator.viewStrategyMetadataKey, value);

    if (!strategy) {
      if (!origin.moduleId) {
        throw new Error('Cannot determine default view strategy for object.', value);
      }

      strategy = this.createFallbackViewStrategy(origin);
    } else if (origin.moduleId) {
      strategy.moduleId = origin.moduleId;
    }

    return strategy;
  };

  ViewLocator.prototype.createFallbackViewStrategy = function createFallbackViewStrategy(origin) {
    return new ConventionalViewStrategy(this, origin);
  };

  ViewLocator.prototype.convertOriginToViewUrl = function convertOriginToViewUrl(origin) {
    var moduleId = origin.moduleId;
    var id = moduleId.endsWith('.js') || moduleId.endsWith('.ts') ? moduleId.substring(0, moduleId.length - 3) : moduleId;
    return id + '.html';
  };

  return ViewLocator;
}(), _class7.viewStrategyMetadataKey = 'aurelia:view-strategy', _temp2);

function mi(name) {
  throw new Error('BindingLanguage must implement ' + name + '().');
}

var BindingLanguage = function () {
  function BindingLanguage() {
    
  }

  BindingLanguage.prototype.inspectAttribute = function inspectAttribute(resources, elementName, attrName, attrValue) {
    mi('inspectAttribute');
  };

  BindingLanguage.prototype.createAttributeInstruction = function createAttributeInstruction(resources, element, info, existingInstruction) {
    mi('createAttributeInstruction');
  };

  BindingLanguage.prototype.inspectTextContent = function inspectTextContent(resources, value) {
    mi('inspectTextContent');
  };

  return BindingLanguage;
}();

var noNodes = Object.freeze([]);

var SlotCustomAttribute = (_dec6 = Object(__WEBPACK_IMPORTED_MODULE_5_aurelia_dependency_injection__["d" /* inject */])(__WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["b" /* DOM */].Element), _dec6(_class8 = function () {
  function SlotCustomAttribute(element) {
    

    this.element = element;
    this.element.auSlotAttribute = this;
  }

  SlotCustomAttribute.prototype.valueChanged = function valueChanged(newValue, oldValue) {};

  return SlotCustomAttribute;
}()) || _class8);

var PassThroughSlot = function () {
  function PassThroughSlot(anchor, name, destinationName, fallbackFactory) {
    

    this.anchor = anchor;
    this.anchor.viewSlot = this;
    this.name = name;
    this.destinationName = destinationName;
    this.fallbackFactory = fallbackFactory;
    this.destinationSlot = null;
    this.projections = 0;
    this.contentView = null;

    var attr = new SlotCustomAttribute(this.anchor);
    attr.value = this.destinationName;
  }

  PassThroughSlot.prototype.renderFallbackContent = function renderFallbackContent(view, nodes, projectionSource, index) {
    if (this.contentView === null) {
      this.contentView = this.fallbackFactory.create(this.ownerView.container);
      this.contentView.bind(this.ownerView.bindingContext, this.ownerView.overrideContext);

      var slots = Object.create(null);
      slots[this.destinationSlot.name] = this.destinationSlot;

      ShadowDOM.distributeView(this.contentView, slots, projectionSource, index, this.destinationSlot.name);
    }
  };

  PassThroughSlot.prototype.passThroughTo = function passThroughTo(destinationSlot) {
    this.destinationSlot = destinationSlot;
  };

  PassThroughSlot.prototype.addNode = function addNode(view, node, projectionSource, index) {
    if (this.contentView !== null) {
      this.contentView.removeNodes();
      this.contentView.detached();
      this.contentView.unbind();
      this.contentView = null;
    }

    if (node.viewSlot instanceof PassThroughSlot) {
      node.viewSlot.passThroughTo(this);
      return;
    }

    this.projections++;
    this.destinationSlot.addNode(view, node, projectionSource, index);
  };

  PassThroughSlot.prototype.removeView = function removeView(view, projectionSource) {
    this.projections--;
    this.destinationSlot.removeView(view, projectionSource);

    if (this.needsFallbackRendering) {
      this.renderFallbackContent(null, noNodes, projectionSource);
    }
  };

  PassThroughSlot.prototype.removeAll = function removeAll(projectionSource) {
    this.projections = 0;
    this.destinationSlot.removeAll(projectionSource);

    if (this.needsFallbackRendering) {
      this.renderFallbackContent(null, noNodes, projectionSource);
    }
  };

  PassThroughSlot.prototype.projectFrom = function projectFrom(view, projectionSource) {
    this.destinationSlot.projectFrom(view, projectionSource);
  };

  PassThroughSlot.prototype.created = function created(ownerView) {
    this.ownerView = ownerView;
  };

  PassThroughSlot.prototype.bind = function bind(view) {
    if (this.contentView) {
      this.contentView.bind(view.bindingContext, view.overrideContext);
    }
  };

  PassThroughSlot.prototype.attached = function attached() {
    if (this.contentView) {
      this.contentView.attached();
    }
  };

  PassThroughSlot.prototype.detached = function detached() {
    if (this.contentView) {
      this.contentView.detached();
    }
  };

  PassThroughSlot.prototype.unbind = function unbind() {
    if (this.contentView) {
      this.contentView.unbind();
    }
  };

  _createClass(PassThroughSlot, [{
    key: 'needsFallbackRendering',
    get: function get() {
      return this.fallbackFactory && this.projections === 0;
    }
  }]);

  return PassThroughSlot;
}();

var ShadowSlot = function () {
  function ShadowSlot(anchor, name, fallbackFactory) {
    

    this.anchor = anchor;
    this.anchor.isContentProjectionSource = true;
    this.anchor.viewSlot = this;
    this.name = name;
    this.fallbackFactory = fallbackFactory;
    this.contentView = null;
    this.projections = 0;
    this.children = [];
    this.projectFromAnchors = null;
    this.destinationSlots = null;
  }

  ShadowSlot.prototype.addNode = function addNode(view, node, projectionSource, index, destination) {
    if (this.contentView !== null) {
      this.contentView.removeNodes();
      this.contentView.detached();
      this.contentView.unbind();
      this.contentView = null;
    }

    if (node.viewSlot instanceof PassThroughSlot) {
      node.viewSlot.passThroughTo(this);
      return;
    }

    if (this.destinationSlots !== null) {
      ShadowDOM.distributeNodes(view, [node], this.destinationSlots, this, index);
    } else {
      node.auOwnerView = view;
      node.auProjectionSource = projectionSource;
      node.auAssignedSlot = this;

      var anchor = this._findAnchor(view, node, projectionSource, index);
      var parent = anchor.parentNode;

      parent.insertBefore(node, anchor);
      this.children.push(node);
      this.projections++;
    }
  };

  ShadowSlot.prototype.removeView = function removeView(view, projectionSource) {
    if (this.destinationSlots !== null) {
      ShadowDOM.undistributeView(view, this.destinationSlots, this);
    } else if (this.contentView && this.contentView.hasSlots) {
      ShadowDOM.undistributeView(view, this.contentView.slots, projectionSource);
    } else {
      var found = this.children.find(function (x) {
        return x.auSlotProjectFrom === projectionSource;
      });
      if (found) {
        var _children = found.auProjectionChildren;

        for (var i = 0, ii = _children.length; i < ii; ++i) {
          var _child = _children[i];

          if (_child.auOwnerView === view) {
            _children.splice(i, 1);
            view.fragment.appendChild(_child);
            i--;ii--;
            this.projections--;
          }
        }

        if (this.needsFallbackRendering) {
          this.renderFallbackContent(view, noNodes, projectionSource);
        }
      }
    }
  };

  ShadowSlot.prototype.removeAll = function removeAll(projectionSource) {
    if (this.destinationSlots !== null) {
      ShadowDOM.undistributeAll(this.destinationSlots, this);
    } else if (this.contentView && this.contentView.hasSlots) {
      ShadowDOM.undistributeAll(this.contentView.slots, projectionSource);
    } else {
      var found = this.children.find(function (x) {
        return x.auSlotProjectFrom === projectionSource;
      });

      if (found) {
        var _children2 = found.auProjectionChildren;
        for (var i = 0, ii = _children2.length; i < ii; ++i) {
          var _child2 = _children2[i];
          _child2.auOwnerView.fragment.appendChild(_child2);
          this.projections--;
        }

        found.auProjectionChildren = [];

        if (this.needsFallbackRendering) {
          this.renderFallbackContent(null, noNodes, projectionSource);
        }
      }
    }
  };

  ShadowSlot.prototype._findAnchor = function _findAnchor(view, node, projectionSource, index) {
    if (projectionSource) {
      var found = this.children.find(function (x) {
        return x.auSlotProjectFrom === projectionSource;
      });
      if (found) {
        if (index !== undefined) {
          var _children3 = found.auProjectionChildren;
          var viewIndex = -1;
          var lastView = void 0;

          for (var i = 0, ii = _children3.length; i < ii; ++i) {
            var current = _children3[i];

            if (current.auOwnerView !== lastView) {
              viewIndex++;
              lastView = current.auOwnerView;

              if (viewIndex >= index && lastView !== view) {
                _children3.splice(i, 0, node);
                return current;
              }
            }
          }
        }

        found.auProjectionChildren.push(node);
        return found;
      }
    }

    return this.anchor;
  };

  ShadowSlot.prototype.projectTo = function projectTo(slots) {
    this.destinationSlots = slots;
  };

  ShadowSlot.prototype.projectFrom = function projectFrom(view, projectionSource) {
    var anchor = __WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["b" /* DOM */].createComment('anchor');
    var parent = this.anchor.parentNode;
    anchor.auSlotProjectFrom = projectionSource;
    anchor.auOwnerView = view;
    anchor.auProjectionChildren = [];
    parent.insertBefore(anchor, this.anchor);
    this.children.push(anchor);

    if (this.projectFromAnchors === null) {
      this.projectFromAnchors = [];
    }

    this.projectFromAnchors.push(anchor);
  };

  ShadowSlot.prototype.renderFallbackContent = function renderFallbackContent(view, nodes, projectionSource, index) {
    if (this.contentView === null) {
      this.contentView = this.fallbackFactory.create(this.ownerView.container);
      this.contentView.bind(this.ownerView.bindingContext, this.ownerView.overrideContext);
      this.contentView.insertNodesBefore(this.anchor);
    }

    if (this.contentView.hasSlots) {
      var slots = this.contentView.slots;
      var projectFromAnchors = this.projectFromAnchors;

      if (projectFromAnchors !== null) {
        for (var slotName in slots) {
          var slot = slots[slotName];

          for (var i = 0, ii = projectFromAnchors.length; i < ii; ++i) {
            var anchor = projectFromAnchors[i];
            slot.projectFrom(anchor.auOwnerView, anchor.auSlotProjectFrom);
          }
        }
      }

      this.fallbackSlots = slots;
      ShadowDOM.distributeNodes(view, nodes, slots, projectionSource, index);
    }
  };

  ShadowSlot.prototype.created = function created(ownerView) {
    this.ownerView = ownerView;
  };

  ShadowSlot.prototype.bind = function bind(view) {
    if (this.contentView) {
      this.contentView.bind(view.bindingContext, view.overrideContext);
    }
  };

  ShadowSlot.prototype.attached = function attached() {
    if (this.contentView) {
      this.contentView.attached();
    }
  };

  ShadowSlot.prototype.detached = function detached() {
    if (this.contentView) {
      this.contentView.detached();
    }
  };

  ShadowSlot.prototype.unbind = function unbind() {
    if (this.contentView) {
      this.contentView.unbind();
    }
  };

  _createClass(ShadowSlot, [{
    key: 'needsFallbackRendering',
    get: function get() {
      return this.fallbackFactory && this.projections === 0;
    }
  }]);

  return ShadowSlot;
}();

var ShadowDOM = (_temp3 = _class9 = function () {
  function ShadowDOM() {
    
  }

  ShadowDOM.getSlotName = function getSlotName(node) {
    if (node.auSlotAttribute === undefined) {
      return ShadowDOM.defaultSlotKey;
    }

    return node.auSlotAttribute.value;
  };

  ShadowDOM.distributeView = function distributeView(view, slots, projectionSource, index, destinationOverride) {
    var nodes = void 0;

    if (view === null) {
      nodes = noNodes;
    } else {
      var childNodes = view.fragment.childNodes;
      var ii = childNodes.length;
      nodes = new Array(ii);

      for (var i = 0; i < ii; ++i) {
        nodes[i] = childNodes[i];
      }
    }

    ShadowDOM.distributeNodes(view, nodes, slots, projectionSource, index, destinationOverride);
  };

  ShadowDOM.undistributeView = function undistributeView(view, slots, projectionSource) {
    for (var slotName in slots) {
      slots[slotName].removeView(view, projectionSource);
    }
  };

  ShadowDOM.undistributeAll = function undistributeAll(slots, projectionSource) {
    for (var slotName in slots) {
      slots[slotName].removeAll(projectionSource);
    }
  };

  ShadowDOM.distributeNodes = function distributeNodes(view, nodes, slots, projectionSource, index, destinationOverride) {
    for (var i = 0, ii = nodes.length; i < ii; ++i) {
      var currentNode = nodes[i];
      var nodeType = currentNode.nodeType;

      if (currentNode.isContentProjectionSource) {
        currentNode.viewSlot.projectTo(slots);

        for (var slotName in slots) {
          slots[slotName].projectFrom(view, currentNode.viewSlot);
        }

        nodes.splice(i, 1);
        ii--;i--;
      } else if (nodeType === 1 || nodeType === 3 || currentNode.viewSlot instanceof PassThroughSlot) {
        if (nodeType === 3 && _isAllWhitespace(currentNode)) {
          nodes.splice(i, 1);
          ii--;i--;
        } else {
          var found = slots[destinationOverride || ShadowDOM.getSlotName(currentNode)];

          if (found) {
            found.addNode(view, currentNode, projectionSource, index);
            nodes.splice(i, 1);
            ii--;i--;
          }
        }
      } else {
        nodes.splice(i, 1);
        ii--;i--;
      }
    }

    for (var _slotName in slots) {
      var slot = slots[_slotName];

      if (slot.needsFallbackRendering) {
        slot.renderFallbackContent(view, nodes, projectionSource, index);
      }
    }
  };

  return ShadowDOM;
}(), _class9.defaultSlotKey = '__au-default-slot-key__', _temp3);

function register(lookup, name, resource, type) {
  if (!name) {
    return;
  }

  var existing = lookup[name];
  if (existing) {
    if (existing !== resource) {
      throw new Error('Attempted to register ' + type + ' when one with the same name already exists. Name: ' + name + '.');
    }

    return;
  }

  lookup[name] = resource;
}

var ViewResources = function () {
  function ViewResources(parent, viewUrl) {
    

    this.bindingLanguage = null;

    this.parent = parent || null;
    this.hasParent = this.parent !== null;
    this.viewUrl = viewUrl || '';
    this.lookupFunctions = {
      valueConverters: this.getValueConverter.bind(this),
      bindingBehaviors: this.getBindingBehavior.bind(this)
    };
    this.attributes = Object.create(null);
    this.elements = Object.create(null);
    this.valueConverters = Object.create(null);
    this.bindingBehaviors = Object.create(null);
    this.attributeMap = Object.create(null);
    this.values = Object.create(null);
    this.beforeCompile = this.afterCompile = this.beforeCreate = this.afterCreate = this.beforeBind = this.beforeUnbind = false;
  }

  ViewResources.prototype._tryAddHook = function _tryAddHook(obj, name) {
    if (typeof obj[name] === 'function') {
      var func = obj[name].bind(obj);
      var counter = 1;
      var callbackName = void 0;

      while (this[callbackName = name + counter.toString()] !== undefined) {
        counter++;
      }

      this[name] = true;
      this[callbackName] = func;
    }
  };

  ViewResources.prototype._invokeHook = function _invokeHook(name, one, two, three, four) {
    if (this.hasParent) {
      this.parent._invokeHook(name, one, two, three, four);
    }

    if (this[name]) {
      this[name + '1'](one, two, three, four);

      var callbackName = name + '2';
      if (this[callbackName]) {
        this[callbackName](one, two, three, four);

        callbackName = name + '3';
        if (this[callbackName]) {
          this[callbackName](one, two, three, four);

          var counter = 4;

          while (this[callbackName = name + counter.toString()] !== undefined) {
            this[callbackName](one, two, three, four);
            counter++;
          }
        }
      }
    }
  };

  ViewResources.prototype.registerViewEngineHooks = function registerViewEngineHooks(hooks) {
    this._tryAddHook(hooks, 'beforeCompile');
    this._tryAddHook(hooks, 'afterCompile');
    this._tryAddHook(hooks, 'beforeCreate');
    this._tryAddHook(hooks, 'afterCreate');
    this._tryAddHook(hooks, 'beforeBind');
    this._tryAddHook(hooks, 'beforeUnbind');
  };

  ViewResources.prototype.getBindingLanguage = function getBindingLanguage(bindingLanguageFallback) {
    return this.bindingLanguage || (this.bindingLanguage = bindingLanguageFallback);
  };

  ViewResources.prototype.patchInParent = function patchInParent(newParent) {
    var originalParent = this.parent;

    this.parent = newParent || null;
    this.hasParent = this.parent !== null;

    if (newParent.parent === null) {
      newParent.parent = originalParent;
      newParent.hasParent = originalParent !== null;
    }
  };

  ViewResources.prototype.relativeToView = function relativeToView(path) {
    return Object(__WEBPACK_IMPORTED_MODULE_3_aurelia_path__["d" /* relativeToFile */])(path, this.viewUrl);
  };

  ViewResources.prototype.registerElement = function registerElement(tagName, behavior) {
    register(this.elements, tagName, behavior, 'an Element');
  };

  ViewResources.prototype.getElement = function getElement(tagName) {
    return this.elements[tagName] || (this.hasParent ? this.parent.getElement(tagName) : null);
  };

  ViewResources.prototype.mapAttribute = function mapAttribute(attribute) {
    return this.attributeMap[attribute] || (this.hasParent ? this.parent.mapAttribute(attribute) : null);
  };

  ViewResources.prototype.registerAttribute = function registerAttribute(attribute, behavior, knownAttribute) {
    this.attributeMap[attribute] = knownAttribute;
    register(this.attributes, attribute, behavior, 'an Attribute');
  };

  ViewResources.prototype.getAttribute = function getAttribute(attribute) {
    return this.attributes[attribute] || (this.hasParent ? this.parent.getAttribute(attribute) : null);
  };

  ViewResources.prototype.registerValueConverter = function registerValueConverter(name, valueConverter) {
    register(this.valueConverters, name, valueConverter, 'a ValueConverter');
  };

  ViewResources.prototype.getValueConverter = function getValueConverter(name) {
    return this.valueConverters[name] || (this.hasParent ? this.parent.getValueConverter(name) : null);
  };

  ViewResources.prototype.registerBindingBehavior = function registerBindingBehavior(name, bindingBehavior) {
    register(this.bindingBehaviors, name, bindingBehavior, 'a BindingBehavior');
  };

  ViewResources.prototype.getBindingBehavior = function getBindingBehavior(name) {
    return this.bindingBehaviors[name] || (this.hasParent ? this.parent.getBindingBehavior(name) : null);
  };

  ViewResources.prototype.registerValue = function registerValue(name, value) {
    register(this.values, name, value, 'a value');
  };

  ViewResources.prototype.getValue = function getValue(name) {
    return this.values[name] || (this.hasParent ? this.parent.getValue(name) : null);
  };

  return ViewResources;
}();

var View = function () {
  function View(container, viewFactory, fragment, controllers, bindings, children, slots) {
    

    this.container = container;
    this.viewFactory = viewFactory;
    this.resources = viewFactory.resources;
    this.fragment = fragment;
    this.firstChild = fragment.firstChild;
    this.lastChild = fragment.lastChild;
    this.controllers = controllers;
    this.bindings = bindings;
    this.children = children;
    this.slots = slots;
    this.hasSlots = false;
    this.fromCache = false;
    this.isBound = false;
    this.isAttached = false;
    this.bindingContext = null;
    this.overrideContext = null;
    this.controller = null;
    this.viewModelScope = null;
    this.animatableElement = undefined;
    this._isUserControlled = false;
    this.contentView = null;

    for (var key in slots) {
      this.hasSlots = true;
      break;
    }
  }

  View.prototype.returnToCache = function returnToCache() {
    this.viewFactory.returnViewToCache(this);
  };

  View.prototype.created = function created() {
    var i = void 0;
    var ii = void 0;
    var controllers = this.controllers;

    for (i = 0, ii = controllers.length; i < ii; ++i) {
      controllers[i].created(this);
    }
  };

  View.prototype.bind = function bind(bindingContext, overrideContext, _systemUpdate) {
    var controllers = void 0;
    var bindings = void 0;
    var children = void 0;
    var i = void 0;
    var ii = void 0;

    if (_systemUpdate && this._isUserControlled) {
      return;
    }

    if (this.isBound) {
      if (this.bindingContext === bindingContext) {
        return;
      }

      this.unbind();
    }

    this.isBound = true;
    this.bindingContext = bindingContext;
    this.overrideContext = overrideContext || Object(__WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["q" /* createOverrideContext */])(bindingContext);

    this.resources._invokeHook('beforeBind', this);

    bindings = this.bindings;
    for (i = 0, ii = bindings.length; i < ii; ++i) {
      bindings[i].bind(this);
    }

    if (this.viewModelScope !== null) {
      bindingContext.bind(this.viewModelScope.bindingContext, this.viewModelScope.overrideContext);
      this.viewModelScope = null;
    }

    controllers = this.controllers;
    for (i = 0, ii = controllers.length; i < ii; ++i) {
      controllers[i].bind(this);
    }

    children = this.children;
    for (i = 0, ii = children.length; i < ii; ++i) {
      children[i].bind(bindingContext, overrideContext, true);
    }

    if (this.hasSlots) {
      ShadowDOM.distributeView(this.contentView, this.slots);
    }
  };

  View.prototype.addBinding = function addBinding(binding) {
    this.bindings.push(binding);

    if (this.isBound) {
      binding.bind(this);
    }
  };

  View.prototype.unbind = function unbind() {
    var controllers = void 0;
    var bindings = void 0;
    var children = void 0;
    var i = void 0;
    var ii = void 0;

    if (this.isBound) {
      this.isBound = false;
      this.resources._invokeHook('beforeUnbind', this);

      if (this.controller !== null) {
        this.controller.unbind();
      }

      bindings = this.bindings;
      for (i = 0, ii = bindings.length; i < ii; ++i) {
        bindings[i].unbind();
      }

      controllers = this.controllers;
      for (i = 0, ii = controllers.length; i < ii; ++i) {
        controllers[i].unbind();
      }

      children = this.children;
      for (i = 0, ii = children.length; i < ii; ++i) {
        children[i].unbind();
      }

      this.bindingContext = null;
      this.overrideContext = null;
    }
  };

  View.prototype.insertNodesBefore = function insertNodesBefore(refNode) {
    refNode.parentNode.insertBefore(this.fragment, refNode);
  };

  View.prototype.appendNodesTo = function appendNodesTo(parent) {
    parent.appendChild(this.fragment);
  };

  View.prototype.removeNodes = function removeNodes() {
    var fragment = this.fragment;
    var current = this.firstChild;
    var end = this.lastChild;
    var next = void 0;

    while (current) {
      next = current.nextSibling;
      fragment.appendChild(current);

      if (current === end) {
        break;
      }

      current = next;
    }
  };

  View.prototype.attached = function attached() {
    var controllers = void 0;
    var children = void 0;
    var i = void 0;
    var ii = void 0;

    if (this.isAttached) {
      return;
    }

    this.isAttached = true;

    if (this.controller !== null) {
      this.controller.attached();
    }

    controllers = this.controllers;
    for (i = 0, ii = controllers.length; i < ii; ++i) {
      controllers[i].attached();
    }

    children = this.children;
    for (i = 0, ii = children.length; i < ii; ++i) {
      children[i].attached();
    }
  };

  View.prototype.detached = function detached() {
    var controllers = void 0;
    var children = void 0;
    var i = void 0;
    var ii = void 0;

    if (this.isAttached) {
      this.isAttached = false;

      if (this.controller !== null) {
        this.controller.detached();
      }

      controllers = this.controllers;
      for (i = 0, ii = controllers.length; i < ii; ++i) {
        controllers[i].detached();
      }

      children = this.children;
      for (i = 0, ii = children.length; i < ii; ++i) {
        children[i].detached();
      }
    }
  };

  return View;
}();

function getAnimatableElement(view) {
  if (view.animatableElement !== undefined) {
    return view.animatableElement;
  }

  var current = view.firstChild;

  while (current && current.nodeType !== 1) {
    current = current.nextSibling;
  }

  if (current && current.nodeType === 1) {
    return view.animatableElement = current.classList.contains('au-animate') ? current : null;
  }

  return view.animatableElement = null;
}

var ViewSlot = function () {
  function ViewSlot(anchor, anchorIsContainer) {
    var animator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Animator.instance;

    

    this.anchor = anchor;
    this.anchorIsContainer = anchorIsContainer;
    this.bindingContext = null;
    this.overrideContext = null;
    this.animator = animator;
    this.children = [];
    this.isBound = false;
    this.isAttached = false;
    this.contentSelectors = null;
    anchor.viewSlot = this;
    anchor.isContentProjectionSource = false;
  }

  ViewSlot.prototype.animateView = function animateView(view) {
    var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'enter';

    var animatableElement = getAnimatableElement(view);

    if (animatableElement !== null) {
      switch (direction) {
        case 'enter':
          return this.animator.enter(animatableElement);
        case 'leave':
          return this.animator.leave(animatableElement);
        default:
          throw new Error('Invalid animation direction: ' + direction);
      }
    }
  };

  ViewSlot.prototype.transformChildNodesIntoView = function transformChildNodesIntoView() {
    var parent = this.anchor;

    this.children.push({
      fragment: parent,
      firstChild: parent.firstChild,
      lastChild: parent.lastChild,
      returnToCache: function returnToCache() {},
      removeNodes: function removeNodes() {
        var last = void 0;

        while (last = parent.lastChild) {
          parent.removeChild(last);
        }
      },
      created: function created() {},
      bind: function bind() {},
      unbind: function unbind() {},
      attached: function attached() {},
      detached: function detached() {}
    });
  };

  ViewSlot.prototype.bind = function bind(bindingContext, overrideContext) {
    var i = void 0;
    var ii = void 0;
    var children = void 0;

    if (this.isBound) {
      if (this.bindingContext === bindingContext) {
        return;
      }

      this.unbind();
    }

    this.isBound = true;
    this.bindingContext = bindingContext = bindingContext || this.bindingContext;
    this.overrideContext = overrideContext = overrideContext || this.overrideContext;

    children = this.children;
    for (i = 0, ii = children.length; i < ii; ++i) {
      children[i].bind(bindingContext, overrideContext, true);
    }
  };

  ViewSlot.prototype.unbind = function unbind() {
    if (this.isBound) {
      var i = void 0;
      var ii = void 0;
      var _children4 = this.children;

      this.isBound = false;
      this.bindingContext = null;
      this.overrideContext = null;

      for (i = 0, ii = _children4.length; i < ii; ++i) {
        _children4[i].unbind();
      }
    }
  };

  ViewSlot.prototype.add = function add(view) {
    if (this.anchorIsContainer) {
      view.appendNodesTo(this.anchor);
    } else {
      view.insertNodesBefore(this.anchor);
    }

    this.children.push(view);

    if (this.isAttached) {
      view.attached();
      return this.animateView(view, 'enter');
    }
  };

  ViewSlot.prototype.insert = function insert(index, view) {
    var children = this.children;
    var length = children.length;

    if (index === 0 && length === 0 || index >= length) {
      return this.add(view);
    }

    view.insertNodesBefore(children[index].firstChild);
    children.splice(index, 0, view);

    if (this.isAttached) {
      view.attached();
      return this.animateView(view, 'enter');
    }
  };

  ViewSlot.prototype.move = function move(sourceIndex, targetIndex) {
    if (sourceIndex === targetIndex) {
      return;
    }

    var children = this.children;
    var view = children[sourceIndex];

    view.removeNodes();
    view.insertNodesBefore(children[targetIndex].firstChild);
    children.splice(sourceIndex, 1);
    children.splice(targetIndex, 0, view);
  };

  ViewSlot.prototype.remove = function remove(view, returnToCache, skipAnimation) {
    return this.removeAt(this.children.indexOf(view), returnToCache, skipAnimation);
  };

  ViewSlot.prototype.removeMany = function removeMany(viewsToRemove, returnToCache, skipAnimation) {
    var _this4 = this;

    var children = this.children;
    var ii = viewsToRemove.length;
    var i = void 0;
    var rmPromises = [];

    viewsToRemove.forEach(function (child) {
      if (skipAnimation) {
        child.removeNodes();
        return;
      }

      var animation = _this4.animateView(child, 'leave');
      if (animation) {
        rmPromises.push(animation.then(function () {
          return child.removeNodes();
        }));
      } else {
        child.removeNodes();
      }
    });

    var removeAction = function removeAction() {
      if (_this4.isAttached) {
        for (i = 0; i < ii; ++i) {
          viewsToRemove[i].detached();
        }
      }

      if (returnToCache) {
        for (i = 0; i < ii; ++i) {
          viewsToRemove[i].returnToCache();
        }
      }

      for (i = 0; i < ii; ++i) {
        var index = children.indexOf(viewsToRemove[i]);
        if (index >= 0) {
          children.splice(index, 1);
        }
      }
    };

    if (rmPromises.length > 0) {
      return Promise.all(rmPromises).then(function () {
        return removeAction();
      });
    }

    return removeAction();
  };

  ViewSlot.prototype.removeAt = function removeAt(index, returnToCache, skipAnimation) {
    var _this5 = this;

    var view = this.children[index];

    var removeAction = function removeAction() {
      index = _this5.children.indexOf(view);
      view.removeNodes();
      _this5.children.splice(index, 1);

      if (_this5.isAttached) {
        view.detached();
      }

      if (returnToCache) {
        view.returnToCache();
      }

      return view;
    };

    if (!skipAnimation) {
      var animation = this.animateView(view, 'leave');
      if (animation) {
        return animation.then(function () {
          return removeAction();
        });
      }
    }

    return removeAction();
  };

  ViewSlot.prototype.removeAll = function removeAll(returnToCache, skipAnimation) {
    var _this6 = this;

    var children = this.children;
    var ii = children.length;
    var i = void 0;
    var rmPromises = [];

    children.forEach(function (child) {
      if (skipAnimation) {
        child.removeNodes();
        return;
      }

      var animation = _this6.animateView(child, 'leave');
      if (animation) {
        rmPromises.push(animation.then(function () {
          return child.removeNodes();
        }));
      } else {
        child.removeNodes();
      }
    });

    var removeAction = function removeAction() {
      if (_this6.isAttached) {
        for (i = 0; i < ii; ++i) {
          children[i].detached();
        }
      }

      if (returnToCache) {
        for (i = 0; i < ii; ++i) {
          var _child3 = children[i];

          if (_child3) {
            _child3.returnToCache();
          }
        }
      }

      _this6.children = [];
    };

    if (rmPromises.length > 0) {
      return Promise.all(rmPromises).then(function () {
        return removeAction();
      });
    }

    return removeAction();
  };

  ViewSlot.prototype.attached = function attached() {
    var i = void 0;
    var ii = void 0;
    var children = void 0;
    var child = void 0;

    if (this.isAttached) {
      return;
    }

    this.isAttached = true;

    children = this.children;
    for (i = 0, ii = children.length; i < ii; ++i) {
      child = children[i];
      child.attached();
      this.animateView(child, 'enter');
    }
  };

  ViewSlot.prototype.detached = function detached() {
    var i = void 0;
    var ii = void 0;
    var children = void 0;

    if (this.isAttached) {
      this.isAttached = false;
      children = this.children;
      for (i = 0, ii = children.length; i < ii; ++i) {
        children[i].detached();
      }
    }
  };

  ViewSlot.prototype.projectTo = function projectTo(slots) {
    var _this7 = this;

    this.projectToSlots = slots;
    this.add = this._projectionAdd;
    this.insert = this._projectionInsert;
    this.move = this._projectionMove;
    this.remove = this._projectionRemove;
    this.removeAt = this._projectionRemoveAt;
    this.removeMany = this._projectionRemoveMany;
    this.removeAll = this._projectionRemoveAll;
    this.children.forEach(function (view) {
      return ShadowDOM.distributeView(view, slots, _this7);
    });
  };

  ViewSlot.prototype._projectionAdd = function _projectionAdd(view) {
    ShadowDOM.distributeView(view, this.projectToSlots, this);

    this.children.push(view);

    if (this.isAttached) {
      view.attached();
    }
  };

  ViewSlot.prototype._projectionInsert = function _projectionInsert(index, view) {
    if (index === 0 && !this.children.length || index >= this.children.length) {
      this.add(view);
    } else {
      ShadowDOM.distributeView(view, this.projectToSlots, this, index);

      this.children.splice(index, 0, view);

      if (this.isAttached) {
        view.attached();
      }
    }
  };

  ViewSlot.prototype._projectionMove = function _projectionMove(sourceIndex, targetIndex) {
    if (sourceIndex === targetIndex) {
      return;
    }

    var children = this.children;
    var view = children[sourceIndex];

    ShadowDOM.undistributeView(view, this.projectToSlots, this);
    ShadowDOM.distributeView(view, this.projectToSlots, this, targetIndex);

    children.splice(sourceIndex, 1);
    children.splice(targetIndex, 0, view);
  };

  ViewSlot.prototype._projectionRemove = function _projectionRemove(view, returnToCache) {
    ShadowDOM.undistributeView(view, this.projectToSlots, this);
    this.children.splice(this.children.indexOf(view), 1);

    if (this.isAttached) {
      view.detached();
    }
  };

  ViewSlot.prototype._projectionRemoveAt = function _projectionRemoveAt(index, returnToCache) {
    var view = this.children[index];

    ShadowDOM.undistributeView(view, this.projectToSlots, this);
    this.children.splice(index, 1);

    if (this.isAttached) {
      view.detached();
    }
  };

  ViewSlot.prototype._projectionRemoveMany = function _projectionRemoveMany(viewsToRemove, returnToCache) {
    var _this8 = this;

    viewsToRemove.forEach(function (view) {
      return _this8.remove(view, returnToCache);
    });
  };

  ViewSlot.prototype._projectionRemoveAll = function _projectionRemoveAll(returnToCache) {
    ShadowDOM.undistributeAll(this.projectToSlots, this);

    var children = this.children;

    if (this.isAttached) {
      for (var i = 0, ii = children.length; i < ii; ++i) {
        children[i].detached();
      }
    }

    this.children = [];
  };

  return ViewSlot;
}();

var ProviderResolver = Object(__WEBPACK_IMPORTED_MODULE_5_aurelia_dependency_injection__["e" /* resolver */])(_class11 = function () {
  function ProviderResolver() {
    
  }

  ProviderResolver.prototype.get = function get(container, key) {
    var id = key.__providerId__;
    return id in container ? container[id] : container[id] = container.invoke(key);
  };

  return ProviderResolver;
}()) || _class11;

var providerResolverInstance = new ProviderResolver();

function elementContainerGet(key) {
  if (key === __WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["b" /* DOM */].Element) {
    return this.element;
  }

  if (key === BoundViewFactory) {
    if (this.boundViewFactory) {
      return this.boundViewFactory;
    }

    var factory = this.instruction.viewFactory;
    var _partReplacements = this.partReplacements;

    if (_partReplacements) {
      factory = _partReplacements[factory.part] || factory;
    }

    this.boundViewFactory = new BoundViewFactory(this, factory, _partReplacements);
    return this.boundViewFactory;
  }

  if (key === ViewSlot) {
    if (this.viewSlot === undefined) {
      this.viewSlot = new ViewSlot(this.element, this.instruction.anchorIsContainer);
      this.element.isContentProjectionSource = this.instruction.lifting;
      this.children.push(this.viewSlot);
    }

    return this.viewSlot;
  }

  if (key === ElementEvents) {
    return this.elementEvents || (this.elementEvents = new ElementEvents(this.element));
  }

  if (key === CompositionTransaction) {
    return this.compositionTransaction || (this.compositionTransaction = this.parent.get(key));
  }

  if (key === ViewResources) {
    return this.viewResources;
  }

  if (key === TargetInstruction) {
    return this.instruction;
  }

  return this.superGet(key);
}

function createElementContainer(parent, element, instruction, children, partReplacements, resources) {
  var container = parent.createChild();
  var providers = void 0;
  var i = void 0;

  container.element = element;
  container.instruction = instruction;
  container.children = children;
  container.viewResources = resources;
  container.partReplacements = partReplacements;

  providers = instruction.providers;
  i = providers.length;

  while (i--) {
    container._resolvers.set(providers[i], providerResolverInstance);
  }

  container.superGet = container.get;
  container.get = elementContainerGet;

  return container;
}

function hasAttribute(name) {
  return this._element.hasAttribute(name);
}

function getAttribute(name) {
  return this._element.getAttribute(name);
}

function setAttribute(name, value) {
  this._element.setAttribute(name, value);
}

function makeElementIntoAnchor(element, elementInstruction) {
  var anchor = __WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["b" /* DOM */].createComment('anchor');

  if (elementInstruction) {
    var firstChild = element.firstChild;

    if (firstChild && firstChild.tagName === 'AU-CONTENT') {
      anchor.contentElement = firstChild;
    }

    anchor._element = element;

    anchor.hasAttribute = hasAttribute;
    anchor.getAttribute = getAttribute;
    anchor.setAttribute = setAttribute;
  }

  __WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["b" /* DOM */].replaceNode(anchor, element);

  return anchor;
}

function applyInstructions(containers, element, instruction, controllers, bindings, children, shadowSlots, partReplacements, resources) {
  var behaviorInstructions = instruction.behaviorInstructions;
  var expressions = instruction.expressions;
  var elementContainer = void 0;
  var i = void 0;
  var ii = void 0;
  var current = void 0;
  var instance = void 0;

  if (instruction.contentExpression) {
    bindings.push(instruction.contentExpression.createBinding(element.nextSibling));
    element.nextSibling.auInterpolationTarget = true;
    element.parentNode.removeChild(element);
    return;
  }

  if (instruction.shadowSlot) {
    var commentAnchor = __WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["b" /* DOM */].createComment('slot');
    var slot = void 0;

    if (instruction.slotDestination) {
      slot = new PassThroughSlot(commentAnchor, instruction.slotName, instruction.slotDestination, instruction.slotFallbackFactory);
    } else {
      slot = new ShadowSlot(commentAnchor, instruction.slotName, instruction.slotFallbackFactory);
    }

    __WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["b" /* DOM */].replaceNode(commentAnchor, element);
    shadowSlots[instruction.slotName] = slot;
    controllers.push(slot);
    return;
  }

  if (behaviorInstructions.length) {
    if (!instruction.anchorIsContainer) {
      element = makeElementIntoAnchor(element, instruction.elementInstruction);
    }

    containers[instruction.injectorId] = elementContainer = createElementContainer(containers[instruction.parentInjectorId], element, instruction, children, partReplacements, resources);

    for (i = 0, ii = behaviorInstructions.length; i < ii; ++i) {
      current = behaviorInstructions[i];
      instance = current.type.create(elementContainer, current, element, bindings);
      controllers.push(instance);
    }
  }

  for (i = 0, ii = expressions.length; i < ii; ++i) {
    bindings.push(expressions[i].createBinding(element));
  }
}

function styleStringToObject(style, target) {
  var attributes = style.split(';');
  var firstIndexOfColon = void 0;
  var i = void 0;
  var current = void 0;
  var key = void 0;
  var value = void 0;

  target = target || {};

  for (i = 0; i < attributes.length; i++) {
    current = attributes[i];
    firstIndexOfColon = current.indexOf(':');
    key = current.substring(0, firstIndexOfColon).trim();
    value = current.substring(firstIndexOfColon + 1).trim();
    target[key] = value;
  }

  return target;
}

function styleObjectToString(obj) {
  var result = '';

  for (var key in obj) {
    result += key + ':' + obj[key] + ';';
  }

  return result;
}

function applySurrogateInstruction(container, element, instruction, controllers, bindings, children) {
  var behaviorInstructions = instruction.behaviorInstructions;
  var expressions = instruction.expressions;
  var providers = instruction.providers;
  var values = instruction.values;
  var i = void 0;
  var ii = void 0;
  var current = void 0;
  var instance = void 0;
  var currentAttributeValue = void 0;

  i = providers.length;
  while (i--) {
    container._resolvers.set(providers[i], providerResolverInstance);
  }

  for (var key in values) {
    currentAttributeValue = element.getAttribute(key);

    if (currentAttributeValue) {
      if (key === 'class') {
        element.setAttribute('class', currentAttributeValue + ' ' + values[key]);
      } else if (key === 'style') {
        var styleObject = styleStringToObject(values[key]);
        styleStringToObject(currentAttributeValue, styleObject);
        element.setAttribute('style', styleObjectToString(styleObject));
      }
    } else {
      element.setAttribute(key, values[key]);
    }
  }

  if (behaviorInstructions.length) {
    for (i = 0, ii = behaviorInstructions.length; i < ii; ++i) {
      current = behaviorInstructions[i];
      instance = current.type.create(container, current, element, bindings);

      if (instance.contentView) {
        children.push(instance.contentView);
      }

      controllers.push(instance);
    }
  }

  for (i = 0, ii = expressions.length; i < ii; ++i) {
    bindings.push(expressions[i].createBinding(element));
  }
}

var BoundViewFactory = function () {
  function BoundViewFactory(parentContainer, viewFactory, partReplacements) {
    

    this.parentContainer = parentContainer;
    this.viewFactory = viewFactory;
    this.factoryCreateInstruction = { partReplacements: partReplacements };
  }

  BoundViewFactory.prototype.create = function create() {
    var view = this.viewFactory.create(this.parentContainer.createChild(), this.factoryCreateInstruction);
    view._isUserControlled = true;
    return view;
  };

  BoundViewFactory.prototype.setCacheSize = function setCacheSize(size, doNotOverrideIfAlreadySet) {
    this.viewFactory.setCacheSize(size, doNotOverrideIfAlreadySet);
  };

  BoundViewFactory.prototype.getCachedView = function getCachedView() {
    return this.viewFactory.getCachedView();
  };

  BoundViewFactory.prototype.returnViewToCache = function returnViewToCache(view) {
    this.viewFactory.returnViewToCache(view);
  };

  _createClass(BoundViewFactory, [{
    key: 'isCaching',
    get: function get() {
      return this.viewFactory.isCaching;
    }
  }]);

  return BoundViewFactory;
}();

var ViewFactory = function () {
  function ViewFactory(template, instructions, resources) {
    

    this.isCaching = false;

    this.template = template;
    this.instructions = instructions;
    this.resources = resources;
    this.cacheSize = -1;
    this.cache = null;
  }

  ViewFactory.prototype.setCacheSize = function setCacheSize(size, doNotOverrideIfAlreadySet) {
    if (size) {
      if (size === '*') {
        size = Number.MAX_VALUE;
      } else if (typeof size === 'string') {
        size = parseInt(size, 10);
      }
    }

    if (this.cacheSize === -1 || !doNotOverrideIfAlreadySet) {
      this.cacheSize = size;
    }

    if (this.cacheSize > 0) {
      this.cache = [];
    } else {
      this.cache = null;
    }

    this.isCaching = this.cacheSize > 0;
  };

  ViewFactory.prototype.getCachedView = function getCachedView() {
    return this.cache !== null ? this.cache.pop() || null : null;
  };

  ViewFactory.prototype.returnViewToCache = function returnViewToCache(view) {
    if (view.isAttached) {
      view.detached();
    }

    if (view.isBound) {
      view.unbind();
    }

    if (this.cache !== null && this.cache.length < this.cacheSize) {
      view.fromCache = true;
      this.cache.push(view);
    }
  };

  ViewFactory.prototype.create = function create(container, createInstruction, element) {
    createInstruction = createInstruction || BehaviorInstruction.normal;

    var cachedView = this.getCachedView();
    if (cachedView !== null) {
      return cachedView;
    }

    var fragment = createInstruction.enhance ? this.template : this.template.cloneNode(true);
    var instructables = fragment.querySelectorAll('.au-target');
    var instructions = this.instructions;
    var resources = this.resources;
    var controllers = [];
    var bindings = [];
    var children = [];
    var shadowSlots = Object.create(null);
    var containers = { root: container };
    var partReplacements = createInstruction.partReplacements;
    var i = void 0;
    var ii = void 0;
    var view = void 0;
    var instructable = void 0;
    var instruction = void 0;

    this.resources._invokeHook('beforeCreate', this, container, fragment, createInstruction);

    if (element && this.surrogateInstruction !== null) {
      applySurrogateInstruction(container, element, this.surrogateInstruction, controllers, bindings, children);
    }

    if (createInstruction.enhance && fragment.hasAttribute('au-target-id')) {
      instructable = fragment;
      instruction = instructions[instructable.getAttribute('au-target-id')];
      applyInstructions(containers, instructable, instruction, controllers, bindings, children, shadowSlots, partReplacements, resources);
    }

    for (i = 0, ii = instructables.length; i < ii; ++i) {
      instructable = instructables[i];
      instruction = instructions[instructable.getAttribute('au-target-id')];
      applyInstructions(containers, instructable, instruction, controllers, bindings, children, shadowSlots, partReplacements, resources);
    }

    view = new View(container, this, fragment, controllers, bindings, children, shadowSlots);

    if (!createInstruction.initiatedByBehavior) {
      view.created();
    }

    this.resources._invokeHook('afterCreate', view);

    return view;
  };

  return ViewFactory;
}();

var nextInjectorId = 0;
function getNextInjectorId() {
  return ++nextInjectorId;
}

var lastAUTargetID = 0;
function getNextAUTargetID() {
  return (++lastAUTargetID).toString();
}

function makeIntoInstructionTarget(element) {
  var value = element.getAttribute('class');
  var auTargetID = getNextAUTargetID();

  element.setAttribute('class', value ? value + ' au-target' : 'au-target');
  element.setAttribute('au-target-id', auTargetID);

  return auTargetID;
}

function makeShadowSlot(compiler, resources, node, instructions, parentInjectorId) {
  var auShadowSlot = __WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["b" /* DOM */].createElement('au-shadow-slot');
  __WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["b" /* DOM */].replaceNode(auShadowSlot, node);

  var auTargetID = makeIntoInstructionTarget(auShadowSlot);
  var instruction = TargetInstruction.shadowSlot(parentInjectorId);

  instruction.slotName = node.getAttribute('name') || ShadowDOM.defaultSlotKey;
  instruction.slotDestination = node.getAttribute('slot');

  if (node.innerHTML.trim()) {
    var fragment = __WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["b" /* DOM */].createDocumentFragment();
    var _child4 = void 0;

    while (_child4 = node.firstChild) {
      fragment.appendChild(_child4);
    }

    instruction.slotFallbackFactory = compiler.compile(fragment, resources);
  }

  instructions[auTargetID] = instruction;

  return auShadowSlot;
}

var ViewCompiler = (_dec7 = Object(__WEBPACK_IMPORTED_MODULE_5_aurelia_dependency_injection__["d" /* inject */])(BindingLanguage, ViewResources), _dec7(_class13 = function () {
  function ViewCompiler(bindingLanguage, resources) {
    

    this.bindingLanguage = bindingLanguage;
    this.resources = resources;
  }

  ViewCompiler.prototype.compile = function compile(source, resources, compileInstruction) {
    resources = resources || this.resources;
    compileInstruction = compileInstruction || ViewCompileInstruction.normal;
    source = typeof source === 'string' ? __WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["b" /* DOM */].createTemplateFromMarkup(source) : source;

    var content = void 0;
    var part = void 0;
    var cacheSize = void 0;

    if (source.content) {
      part = source.getAttribute('part');
      cacheSize = source.getAttribute('view-cache');
      content = __WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["b" /* DOM */].adoptNode(source.content);
    } else {
      content = source;
    }

    compileInstruction.targetShadowDOM = compileInstruction.targetShadowDOM && __WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["c" /* FEATURE */].shadowDOM;
    resources._invokeHook('beforeCompile', content, resources, compileInstruction);

    var instructions = {};
    this._compileNode(content, resources, instructions, source, 'root', !compileInstruction.targetShadowDOM);

    var firstChild = content.firstChild;
    if (firstChild && firstChild.nodeType === 1) {
      var targetId = firstChild.getAttribute('au-target-id');
      if (targetId) {
        var ins = instructions[targetId];

        if (ins.shadowSlot || ins.lifting || ins.elementInstruction && !ins.elementInstruction.anchorIsContainer) {
          content.insertBefore(__WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["b" /* DOM */].createComment('view'), firstChild);
        }
      }
    }

    var factory = new ViewFactory(content, instructions, resources);

    factory.surrogateInstruction = compileInstruction.compileSurrogate ? this._compileSurrogate(source, resources) : null;
    factory.part = part;

    if (cacheSize) {
      factory.setCacheSize(cacheSize);
    }

    resources._invokeHook('afterCompile', factory);

    return factory;
  };

  ViewCompiler.prototype._compileNode = function _compileNode(node, resources, instructions, parentNode, parentInjectorId, targetLightDOM) {
    switch (node.nodeType) {
      case 1:
        return this._compileElement(node, resources, instructions, parentNode, parentInjectorId, targetLightDOM);
      case 3:
        var expression = resources.getBindingLanguage(this.bindingLanguage).inspectTextContent(resources, node.wholeText);
        if (expression) {
          var marker = __WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["b" /* DOM */].createElement('au-marker');
          var auTargetID = makeIntoInstructionTarget(marker);
          (node.parentNode || parentNode).insertBefore(marker, node);
          node.textContent = ' ';
          instructions[auTargetID] = TargetInstruction.contentExpression(expression);

          while (node.nextSibling && node.nextSibling.nodeType === 3) {
            (node.parentNode || parentNode).removeChild(node.nextSibling);
          }
        } else {
          while (node.nextSibling && node.nextSibling.nodeType === 3) {
            node = node.nextSibling;
          }
        }
        return node.nextSibling;
      case 11:
        var currentChild = node.firstChild;
        while (currentChild) {
          currentChild = this._compileNode(currentChild, resources, instructions, node, parentInjectorId, targetLightDOM);
        }
        break;
      default:
        break;
    }

    return node.nextSibling;
  };

  ViewCompiler.prototype._compileSurrogate = function _compileSurrogate(node, resources) {
    var tagName = node.tagName.toLowerCase();
    var attributes = node.attributes;
    var bindingLanguage = resources.getBindingLanguage(this.bindingLanguage);
    var knownAttribute = void 0;
    var property = void 0;
    var instruction = void 0;
    var i = void 0;
    var ii = void 0;
    var attr = void 0;
    var attrName = void 0;
    var attrValue = void 0;
    var info = void 0;
    var type = void 0;
    var expressions = [];
    var expression = void 0;
    var behaviorInstructions = [];
    var values = {};
    var hasValues = false;
    var providers = [];

    for (i = 0, ii = attributes.length; i < ii; ++i) {
      attr = attributes[i];
      attrName = attr.name;
      attrValue = attr.value;

      info = bindingLanguage.inspectAttribute(resources, tagName, attrName, attrValue);
      type = resources.getAttribute(info.attrName);

      if (type) {
        knownAttribute = resources.mapAttribute(info.attrName);
        if (knownAttribute) {
          property = type.attributes[knownAttribute];

          if (property) {
            info.defaultBindingMode = property.defaultBindingMode;

            if (!info.command && !info.expression) {
              info.command = property.hasOptions ? 'options' : null;
            }

            if (info.command && info.command !== 'options' && type.primaryProperty) {
              var primaryProperty = type.primaryProperty;
              attrName = info.attrName = primaryProperty.name;

              info.defaultBindingMode = primaryProperty.defaultBindingMode;
            }
          }
        }
      }

      instruction = bindingLanguage.createAttributeInstruction(resources, node, info, undefined, type);

      if (instruction) {
        if (instruction.alteredAttr) {
          type = resources.getAttribute(instruction.attrName);
        }

        if (instruction.discrete) {
          expressions.push(instruction);
        } else {
          if (type) {
            instruction.type = type;
            this._configureProperties(instruction, resources);

            if (type.liftsContent) {
              throw new Error('You cannot place a template controller on a surrogate element.');
            } else {
              behaviorInstructions.push(instruction);
            }
          } else {
            expressions.push(instruction.attributes[instruction.attrName]);
          }
        }
      } else {
        if (type) {
          instruction = BehaviorInstruction.attribute(attrName, type);
          instruction.attributes[resources.mapAttribute(attrName)] = attrValue;

          if (type.liftsContent) {
            throw new Error('You cannot place a template controller on a surrogate element.');
          } else {
            behaviorInstructions.push(instruction);
          }
        } else if (attrName !== 'id' && attrName !== 'part' && attrName !== 'replace-part') {
          hasValues = true;
          values[attrName] = attrValue;
        }
      }
    }

    if (expressions.length || behaviorInstructions.length || hasValues) {
      for (i = 0, ii = behaviorInstructions.length; i < ii; ++i) {
        instruction = behaviorInstructions[i];
        instruction.type.compile(this, resources, node, instruction);
        providers.push(instruction.type.target);
      }

      for (i = 0, ii = expressions.length; i < ii; ++i) {
        expression = expressions[i];
        if (expression.attrToRemove !== undefined) {
          node.removeAttribute(expression.attrToRemove);
        }
      }

      return TargetInstruction.surrogate(providers, behaviorInstructions, expressions, values);
    }

    return null;
  };

  ViewCompiler.prototype._compileElement = function _compileElement(node, resources, instructions, parentNode, parentInjectorId, targetLightDOM) {
    var tagName = node.tagName.toLowerCase();
    var attributes = node.attributes;
    var expressions = [];
    var expression = void 0;
    var behaviorInstructions = [];
    var providers = [];
    var bindingLanguage = resources.getBindingLanguage(this.bindingLanguage);
    var liftingInstruction = void 0;
    var viewFactory = void 0;
    var type = void 0;
    var elementInstruction = void 0;
    var elementProperty = void 0;
    var i = void 0;
    var ii = void 0;
    var attr = void 0;
    var attrName = void 0;
    var attrValue = void 0;
    var originalAttrName = void 0;
    var instruction = void 0;
    var info = void 0;
    var property = void 0;
    var knownAttribute = void 0;
    var auTargetID = void 0;
    var injectorId = void 0;

    if (tagName === 'slot') {
      if (targetLightDOM) {
        node = makeShadowSlot(this, resources, node, instructions, parentInjectorId);
      }
      return node.nextSibling;
    } else if (tagName === 'template') {
      if (!('content' in node)) {
        throw new Error('You cannot place a template element within ' + node.namespaceURI + ' namespace');
      }
      viewFactory = this.compile(node, resources);
      viewFactory.part = node.getAttribute('part');
    } else {
      type = resources.getElement(node.getAttribute('as-element') || tagName);
      if (type) {
        elementInstruction = BehaviorInstruction.element(node, type);
        type.processAttributes(this, resources, node, attributes, elementInstruction);
        behaviorInstructions.push(elementInstruction);
      }
    }

    for (i = 0, ii = attributes.length; i < ii; ++i) {
      attr = attributes[i];
      originalAttrName = attrName = attr.name;
      attrValue = attr.value;
      info = bindingLanguage.inspectAttribute(resources, tagName, attrName, attrValue);

      if (targetLightDOM && info.attrName === 'slot') {
        info.attrName = attrName = 'au-slot';
      }

      type = resources.getAttribute(info.attrName);
      elementProperty = null;

      if (type) {
        knownAttribute = resources.mapAttribute(info.attrName);
        if (knownAttribute) {
          property = type.attributes[knownAttribute];

          if (property) {
            info.defaultBindingMode = property.defaultBindingMode;

            if (!info.command && !info.expression) {
              info.command = property.hasOptions ? 'options' : null;
            }

            if (info.command && info.command !== 'options' && type.primaryProperty) {
              var primaryProperty = type.primaryProperty;
              attrName = info.attrName = primaryProperty.name;

              info.defaultBindingMode = primaryProperty.defaultBindingMode;
            }
          }
        }
      } else if (elementInstruction) {
        elementProperty = elementInstruction.type.attributes[info.attrName];
        if (elementProperty) {
          info.defaultBindingMode = elementProperty.defaultBindingMode;
        }
      }

      if (elementProperty) {
        instruction = bindingLanguage.createAttributeInstruction(resources, node, info, elementInstruction);
      } else {
        instruction = bindingLanguage.createAttributeInstruction(resources, node, info, undefined, type);
      }

      if (instruction) {
        if (instruction.alteredAttr) {
          type = resources.getAttribute(instruction.attrName);
        }

        if (instruction.discrete) {
          expressions.push(instruction);
        } else {
          if (type) {
            instruction.type = type;
            this._configureProperties(instruction, resources);

            if (type.liftsContent) {
              instruction.originalAttrName = originalAttrName;
              liftingInstruction = instruction;
              break;
            } else {
              behaviorInstructions.push(instruction);
            }
          } else if (elementProperty) {
            elementInstruction.attributes[info.attrName].targetProperty = elementProperty.name;
          } else {
            expressions.push(instruction.attributes[instruction.attrName]);
          }
        }
      } else {
        if (type) {
          instruction = BehaviorInstruction.attribute(attrName, type);
          instruction.attributes[resources.mapAttribute(attrName)] = attrValue;

          if (type.liftsContent) {
            instruction.originalAttrName = originalAttrName;
            liftingInstruction = instruction;
            break;
          } else {
            behaviorInstructions.push(instruction);
          }
        } else if (elementProperty) {
          elementInstruction.attributes[attrName] = attrValue;
        }
      }
    }

    if (liftingInstruction) {
      liftingInstruction.viewFactory = viewFactory;
      node = liftingInstruction.type.compile(this, resources, node, liftingInstruction, parentNode);
      auTargetID = makeIntoInstructionTarget(node);
      instructions[auTargetID] = TargetInstruction.lifting(parentInjectorId, liftingInstruction);
    } else {
      var skipContentProcessing = false;

      if (expressions.length || behaviorInstructions.length) {
        injectorId = behaviorInstructions.length ? getNextInjectorId() : false;

        for (i = 0, ii = behaviorInstructions.length; i < ii; ++i) {
          instruction = behaviorInstructions[i];
          instruction.type.compile(this, resources, node, instruction, parentNode);
          providers.push(instruction.type.target);
          skipContentProcessing = skipContentProcessing || instruction.skipContentProcessing;
        }

        for (i = 0, ii = expressions.length; i < ii; ++i) {
          expression = expressions[i];
          if (expression.attrToRemove !== undefined) {
            node.removeAttribute(expression.attrToRemove);
          }
        }

        auTargetID = makeIntoInstructionTarget(node);
        instructions[auTargetID] = TargetInstruction.normal(injectorId, parentInjectorId, providers, behaviorInstructions, expressions, elementInstruction);
      }

      if (skipContentProcessing) {
        return node.nextSibling;
      }

      var currentChild = node.firstChild;
      while (currentChild) {
        currentChild = this._compileNode(currentChild, resources, instructions, node, injectorId || parentInjectorId, targetLightDOM);
      }
    }

    return node.nextSibling;
  };

  ViewCompiler.prototype._configureProperties = function _configureProperties(instruction, resources) {
    var type = instruction.type;
    var attrName = instruction.attrName;
    var attributes = instruction.attributes;
    var property = void 0;
    var key = void 0;
    var value = void 0;

    var knownAttribute = resources.mapAttribute(attrName);
    if (knownAttribute && attrName in attributes && knownAttribute !== attrName) {
      attributes[knownAttribute] = attributes[attrName];
      delete attributes[attrName];
    }

    for (key in attributes) {
      value = attributes[key];

      if (value !== null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
        property = type.attributes[key];

        if (property !== undefined) {
          value.targetProperty = property.name;
        } else {
          value.targetProperty = key;
        }
      }
    }
  };

  return ViewCompiler;
}()) || _class13);

var ResourceModule = function () {
  function ResourceModule(moduleId) {
    

    this.id = moduleId;
    this.moduleInstance = null;
    this.mainResource = null;
    this.resources = null;
    this.viewStrategy = null;
    this.isInitialized = false;
    this.onLoaded = null;
    this.loadContext = null;
  }

  ResourceModule.prototype.initialize = function initialize(container) {
    var current = this.mainResource;
    var resources = this.resources;
    var vs = this.viewStrategy;

    if (this.isInitialized) {
      return;
    }

    this.isInitialized = true;

    if (current !== undefined) {
      current.metadata.viewStrategy = vs;
      current.initialize(container);
    }

    for (var i = 0, ii = resources.length; i < ii; ++i) {
      current = resources[i];
      current.metadata.viewStrategy = vs;
      current.initialize(container);
    }
  };

  ResourceModule.prototype.register = function register(registry, name) {
    var main = this.mainResource;
    var resources = this.resources;

    if (main !== undefined) {
      main.register(registry, name);
      name = null;
    }

    for (var i = 0, ii = resources.length; i < ii; ++i) {
      resources[i].register(registry, name);
      name = null;
    }
  };

  ResourceModule.prototype.load = function load(container, loadContext) {
    if (this.onLoaded !== null) {
      return this.loadContext === loadContext ? Promise.resolve() : this.onLoaded;
    }

    var main = this.mainResource;
    var resources = this.resources;
    var loads = void 0;

    if (main !== undefined) {
      loads = new Array(resources.length + 1);
      loads[0] = main.load(container, loadContext);
      for (var i = 0, ii = resources.length; i < ii; ++i) {
        loads[i + 1] = resources[i].load(container, loadContext);
      }
    } else {
      loads = new Array(resources.length);
      for (var _i = 0, _ii = resources.length; _i < _ii; ++_i) {
        loads[_i] = resources[_i].load(container, loadContext);
      }
    }

    this.loadContext = loadContext;
    this.onLoaded = Promise.all(loads);
    return this.onLoaded;
  };

  return ResourceModule;
}();

var ResourceDescription = function () {
  function ResourceDescription(key, exportedValue, resourceTypeMeta) {
    

    if (!resourceTypeMeta) {
      resourceTypeMeta = __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["b" /* metadata */].get(__WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["b" /* metadata */].resource, exportedValue);

      if (!resourceTypeMeta) {
        resourceTypeMeta = new HtmlBehaviorResource();
        resourceTypeMeta.elementName = _hyphenate(key);
        __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["b" /* metadata */].define(__WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["b" /* metadata */].resource, resourceTypeMeta, exportedValue);
      }
    }

    if (resourceTypeMeta instanceof HtmlBehaviorResource) {
      if (resourceTypeMeta.elementName === undefined) {
        resourceTypeMeta.elementName = _hyphenate(key);
      } else if (resourceTypeMeta.attributeName === undefined) {
        resourceTypeMeta.attributeName = _hyphenate(key);
      } else if (resourceTypeMeta.attributeName === null && resourceTypeMeta.elementName === null) {
        HtmlBehaviorResource.convention(key, resourceTypeMeta);
      }
    } else if (!resourceTypeMeta.name) {
      resourceTypeMeta.name = _hyphenate(key);
    }

    this.metadata = resourceTypeMeta;
    this.value = exportedValue;
  }

  ResourceDescription.prototype.initialize = function initialize(container) {
    this.metadata.initialize(container, this.value);
  };

  ResourceDescription.prototype.register = function register(registry, name) {
    this.metadata.register(registry, name);
  };

  ResourceDescription.prototype.load = function load(container, loadContext) {
    return this.metadata.load(container, this.value, loadContext);
  };

  return ResourceDescription;
}();

var ModuleAnalyzer = function () {
  function ModuleAnalyzer() {
    

    this.cache = Object.create(null);
  }

  ModuleAnalyzer.prototype.getAnalysis = function getAnalysis(moduleId) {
    return this.cache[moduleId];
  };

  ModuleAnalyzer.prototype.analyze = function analyze(moduleId, moduleInstance, mainResourceKey) {
    var mainResource = void 0;
    var fallbackValue = void 0;
    var fallbackKey = void 0;
    var resourceTypeMeta = void 0;
    var key = void 0;
    var exportedValue = void 0;
    var resources = [];
    var conventional = void 0;
    var vs = void 0;
    var resourceModule = void 0;

    resourceModule = this.cache[moduleId];
    if (resourceModule) {
      return resourceModule;
    }

    resourceModule = new ResourceModule(moduleId);
    this.cache[moduleId] = resourceModule;

    if (typeof moduleInstance === 'function') {
      moduleInstance = { 'default': moduleInstance };
    }

    if (mainResourceKey) {
      mainResource = new ResourceDescription(mainResourceKey, moduleInstance[mainResourceKey]);
    }

    for (key in moduleInstance) {
      exportedValue = moduleInstance[key];

      if (key === mainResourceKey || typeof exportedValue !== 'function') {
        continue;
      }

      resourceTypeMeta = __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["b" /* metadata */].get(__WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["b" /* metadata */].resource, exportedValue);

      if (resourceTypeMeta) {
        if (resourceTypeMeta.attributeName === null && resourceTypeMeta.elementName === null) {
          HtmlBehaviorResource.convention(key, resourceTypeMeta);
        }

        if (resourceTypeMeta.attributeName === null && resourceTypeMeta.elementName === null) {
          resourceTypeMeta.elementName = _hyphenate(key);
        }

        if (!mainResource && resourceTypeMeta instanceof HtmlBehaviorResource && resourceTypeMeta.elementName !== null) {
          mainResource = new ResourceDescription(key, exportedValue, resourceTypeMeta);
        } else {
          resources.push(new ResourceDescription(key, exportedValue, resourceTypeMeta));
        }
      } else if (viewStrategy.decorates(exportedValue)) {
        vs = exportedValue;
      } else if (exportedValue instanceof __WEBPACK_IMPORTED_MODULE_4_aurelia_loader__["b" /* TemplateRegistryEntry */]) {
        vs = new TemplateRegistryViewStrategy(moduleId, exportedValue);
      } else {
        if (conventional = HtmlBehaviorResource.convention(key)) {
          if (conventional.elementName !== null && !mainResource) {
            mainResource = new ResourceDescription(key, exportedValue, conventional);
          } else {
            resources.push(new ResourceDescription(key, exportedValue, conventional));
          }

          __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["b" /* metadata */].define(__WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["b" /* metadata */].resource, conventional, exportedValue);
        } else if (conventional = __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["m" /* ValueConverterResource */].convention(key) || __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["b" /* BindingBehaviorResource */].convention(key) || ViewEngineHooksResource.convention(key)) {
          resources.push(new ResourceDescription(key, exportedValue, conventional));
          __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["b" /* metadata */].define(__WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["b" /* metadata */].resource, conventional, exportedValue);
        } else if (!fallbackValue) {
          fallbackValue = exportedValue;
          fallbackKey = key;
        }
      }
    }

    if (!mainResource && fallbackValue) {
      mainResource = new ResourceDescription(fallbackKey, fallbackValue);
    }

    resourceModule.moduleInstance = moduleInstance;
    resourceModule.mainResource = mainResource;
    resourceModule.resources = resources;
    resourceModule.viewStrategy = vs;

    return resourceModule;
  };

  return ModuleAnalyzer;
}();

var logger = __WEBPACK_IMPORTED_MODULE_0_aurelia_logging__["getLogger"]('templating');

function ensureRegistryEntry(loader, urlOrRegistryEntry) {
  if (urlOrRegistryEntry instanceof __WEBPACK_IMPORTED_MODULE_4_aurelia_loader__["b" /* TemplateRegistryEntry */]) {
    return Promise.resolve(urlOrRegistryEntry);
  }

  return loader.loadTemplate(urlOrRegistryEntry);
}

var ProxyViewFactory = function () {
  function ProxyViewFactory(promise) {
    var _this9 = this;

    

    promise.then(function (x) {
      return _this9.viewFactory = x;
    });
  }

  ProxyViewFactory.prototype.create = function create(container, bindingContext, createInstruction, element) {
    return this.viewFactory.create(container, bindingContext, createInstruction, element);
  };

  ProxyViewFactory.prototype.setCacheSize = function setCacheSize(size, doNotOverrideIfAlreadySet) {
    this.viewFactory.setCacheSize(size, doNotOverrideIfAlreadySet);
  };

  ProxyViewFactory.prototype.getCachedView = function getCachedView() {
    return this.viewFactory.getCachedView();
  };

  ProxyViewFactory.prototype.returnViewToCache = function returnViewToCache(view) {
    this.viewFactory.returnViewToCache(view);
  };

  _createClass(ProxyViewFactory, [{
    key: 'isCaching',
    get: function get() {
      return this.viewFactory.isCaching;
    }
  }]);

  return ProxyViewFactory;
}();

var auSlotBehavior = null;

var ViewEngine = (_dec8 = Object(__WEBPACK_IMPORTED_MODULE_5_aurelia_dependency_injection__["d" /* inject */])(__WEBPACK_IMPORTED_MODULE_4_aurelia_loader__["a" /* Loader */], __WEBPACK_IMPORTED_MODULE_5_aurelia_dependency_injection__["a" /* Container */], ViewCompiler, ModuleAnalyzer, ViewResources), _dec8(_class14 = (_temp4 = _class15 = function () {
  function ViewEngine(loader, container, viewCompiler, moduleAnalyzer, appResources) {
    

    this.loader = loader;
    this.container = container;
    this.viewCompiler = viewCompiler;
    this.moduleAnalyzer = moduleAnalyzer;
    this.appResources = appResources;
    this._pluginMap = {};

    if (auSlotBehavior === null) {
      auSlotBehavior = new HtmlBehaviorResource();
      auSlotBehavior.attributeName = 'au-slot';
      __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["b" /* metadata */].define(__WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["b" /* metadata */].resource, auSlotBehavior, SlotCustomAttribute);
    }

    auSlotBehavior.initialize(container, SlotCustomAttribute);
    auSlotBehavior.register(appResources);
  }

  ViewEngine.prototype.addResourcePlugin = function addResourcePlugin(extension, implementation) {
    var name = extension.replace('.', '') + '-resource-plugin';
    this._pluginMap[extension] = name;
    this.loader.addPlugin(name, implementation);
  };

  ViewEngine.prototype.loadViewFactory = function loadViewFactory(urlOrRegistryEntry, compileInstruction, loadContext, target) {
    var _this10 = this;

    loadContext = loadContext || new ResourceLoadContext();

    return ensureRegistryEntry(this.loader, urlOrRegistryEntry).then(function (registryEntry) {
      var url = registryEntry.address;

      if (registryEntry.onReady) {
        if (!loadContext.hasDependency(url)) {
          loadContext.addDependency(url);
          return registryEntry.onReady;
        }

        if (registryEntry.template === null) {
          return registryEntry.onReady;
        }

        return Promise.resolve(new ProxyViewFactory(registryEntry.onReady));
      }

      loadContext.addDependency(url);

      registryEntry.onReady = _this10.loadTemplateResources(registryEntry, compileInstruction, loadContext, target).then(function (resources) {
        registryEntry.resources = resources;

        if (registryEntry.template === null) {
          return registryEntry.factory = null;
        }

        var viewFactory = _this10.viewCompiler.compile(registryEntry.template, resources, compileInstruction);
        return registryEntry.factory = viewFactory;
      });

      return registryEntry.onReady;
    });
  };

  ViewEngine.prototype.loadTemplateResources = function loadTemplateResources(registryEntry, compileInstruction, loadContext, target) {
    var resources = new ViewResources(this.appResources, registryEntry.address);
    var dependencies = registryEntry.dependencies;
    var importIds = void 0;
    var names = void 0;

    compileInstruction = compileInstruction || ViewCompileInstruction.normal;

    if (dependencies.length === 0 && !compileInstruction.associatedModuleId) {
      return Promise.resolve(resources);
    }

    importIds = dependencies.map(function (x) {
      return x.src;
    });
    names = dependencies.map(function (x) {
      return x.name;
    });
    logger.debug('importing resources for ' + registryEntry.address, importIds);

    if (target) {
      var viewModelRequires = __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["b" /* metadata */].get(ViewEngine.viewModelRequireMetadataKey, target);
      if (viewModelRequires) {
        var templateImportCount = importIds.length;
        for (var i = 0, ii = viewModelRequires.length; i < ii; ++i) {
          var req = viewModelRequires[i];
          var importId = typeof req === 'function' ? __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["a" /* Origin */].get(req).moduleId : Object(__WEBPACK_IMPORTED_MODULE_3_aurelia_path__["d" /* relativeToFile */])(req.src || req, registryEntry.address);

          if (importIds.indexOf(importId) === -1) {
            importIds.push(importId);
            names.push(req.as);
          }
        }
        logger.debug('importing ViewModel resources for ' + compileInstruction.associatedModuleId, importIds.slice(templateImportCount));
      }
    }

    return this.importViewResources(importIds, names, resources, compileInstruction, loadContext);
  };

  ViewEngine.prototype.importViewModelResource = function importViewModelResource(moduleImport, moduleMember) {
    var _this11 = this;

    return this.loader.loadModule(moduleImport).then(function (viewModelModule) {
      var normalizedId = __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["a" /* Origin */].get(viewModelModule).moduleId;
      var resourceModule = _this11.moduleAnalyzer.analyze(normalizedId, viewModelModule, moduleMember);

      if (!resourceModule.mainResource) {
        throw new Error('No view model found in module "' + moduleImport + '".');
      }

      resourceModule.initialize(_this11.container);

      return resourceModule.mainResource;
    });
  };

  ViewEngine.prototype.importViewResources = function importViewResources(moduleIds, names, resources, compileInstruction, loadContext) {
    var _this12 = this;

    loadContext = loadContext || new ResourceLoadContext();
    compileInstruction = compileInstruction || ViewCompileInstruction.normal;

    moduleIds = moduleIds.map(function (x) {
      return _this12._applyLoaderPlugin(x);
    });

    return this.loader.loadAllModules(moduleIds).then(function (imports) {
      var i = void 0;
      var ii = void 0;
      var analysis = void 0;
      var normalizedId = void 0;
      var current = void 0;
      var associatedModule = void 0;
      var container = _this12.container;
      var moduleAnalyzer = _this12.moduleAnalyzer;
      var allAnalysis = new Array(imports.length);

      for (i = 0, ii = imports.length; i < ii; ++i) {
        current = imports[i];
        normalizedId = __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["a" /* Origin */].get(current).moduleId;

        analysis = moduleAnalyzer.analyze(normalizedId, current);
        analysis.initialize(container);
        analysis.register(resources, names[i]);

        allAnalysis[i] = analysis;
      }

      if (compileInstruction.associatedModuleId) {
        associatedModule = moduleAnalyzer.getAnalysis(compileInstruction.associatedModuleId);

        if (associatedModule) {
          associatedModule.register(resources);
        }
      }

      for (i = 0, ii = allAnalysis.length; i < ii; ++i) {
        allAnalysis[i] = allAnalysis[i].load(container, loadContext);
      }

      return Promise.all(allAnalysis).then(function () {
        return resources;
      });
    });
  };

  ViewEngine.prototype._applyLoaderPlugin = function _applyLoaderPlugin(id) {
    var index = id.lastIndexOf('.');
    if (index !== -1) {
      var ext = id.substring(index);
      var pluginName = this._pluginMap[ext];

      if (pluginName === undefined) {
        return id;
      }

      return this.loader.applyPluginToUrl(id, pluginName);
    }

    return id;
  };

  return ViewEngine;
}(), _class15.viewModelRequireMetadataKey = 'aurelia:view-model-require', _temp4)) || _class14);

var Controller = function () {
  function Controller(behavior, instruction, viewModel, container) {
    

    this.behavior = behavior;
    this.instruction = instruction;
    this.viewModel = viewModel;
    this.isAttached = false;
    this.view = null;
    this.isBound = false;
    this.scope = null;
    this.container = container;
    this.elementEvents = container.elementEvents || null;

    var observerLookup = behavior.observerLocator.getOrCreateObserversLookup(viewModel);
    var handlesBind = behavior.handlesBind;
    var attributes = instruction.attributes;
    var boundProperties = this.boundProperties = [];
    var properties = behavior.properties;
    var i = void 0;
    var ii = void 0;

    behavior._ensurePropertiesDefined(viewModel, observerLookup);

    for (i = 0, ii = properties.length; i < ii; ++i) {
      properties[i]._initialize(viewModel, observerLookup, attributes, handlesBind, boundProperties);
    }
  }

  Controller.prototype.created = function created(owningView) {
    if (this.behavior.handlesCreated) {
      this.viewModel.created(owningView, this.view);
    }
  };

  Controller.prototype.automate = function automate(overrideContext, owningView) {
    this.view.bindingContext = this.viewModel;
    this.view.overrideContext = overrideContext || Object(__WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["q" /* createOverrideContext */])(this.viewModel);
    this.view._isUserControlled = true;

    if (this.behavior.handlesCreated) {
      this.viewModel.created(owningView || null, this.view);
    }

    this.bind(this.view);
  };

  Controller.prototype.bind = function bind(scope) {
    var skipSelfSubscriber = this.behavior.handlesBind;
    var boundProperties = this.boundProperties;
    var i = void 0;
    var ii = void 0;
    var x = void 0;
    var observer = void 0;
    var selfSubscriber = void 0;

    if (this.isBound) {
      if (this.scope === scope) {
        return;
      }

      this.unbind();
    }

    this.isBound = true;
    this.scope = scope;

    for (i = 0, ii = boundProperties.length; i < ii; ++i) {
      x = boundProperties[i];
      observer = x.observer;
      selfSubscriber = observer.selfSubscriber;
      observer.publishing = false;

      if (skipSelfSubscriber) {
        observer.selfSubscriber = null;
      }

      x.binding.bind(scope);
      observer.call();

      observer.publishing = true;
      observer.selfSubscriber = selfSubscriber;
    }

    var overrideContext = void 0;
    if (this.view !== null) {
      if (skipSelfSubscriber) {
        this.view.viewModelScope = scope;
      }

      if (this.viewModel === scope.overrideContext.bindingContext) {
        overrideContext = scope.overrideContext;
      } else if (this.instruction.inheritBindingContext) {
        overrideContext = Object(__WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["q" /* createOverrideContext */])(this.viewModel, scope.overrideContext);
      } else {
        overrideContext = Object(__WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["q" /* createOverrideContext */])(this.viewModel);
        overrideContext.__parentOverrideContext = scope.overrideContext;
      }

      this.view.bind(this.viewModel, overrideContext);
    } else if (skipSelfSubscriber) {
      overrideContext = scope.overrideContext;

      if (scope.overrideContext.__parentOverrideContext !== undefined && this.viewModel.viewFactory && this.viewModel.viewFactory.factoryCreateInstruction.partReplacements) {
        overrideContext = Object.assign({}, scope.overrideContext);
        overrideContext.parentOverrideContext = scope.overrideContext.__parentOverrideContext;
      }
      this.viewModel.bind(scope.bindingContext, overrideContext);
    }
  };

  Controller.prototype.unbind = function unbind() {
    if (this.isBound) {
      var _boundProperties = this.boundProperties;
      var _i2 = void 0;
      var _ii2 = void 0;

      this.isBound = false;
      this.scope = null;

      if (this.view !== null) {
        this.view.unbind();
      }

      if (this.behavior.handlesUnbind) {
        this.viewModel.unbind();
      }

      if (this.elementEvents !== null) {
        this.elementEvents.disposeAll();
      }

      for (_i2 = 0, _ii2 = _boundProperties.length; _i2 < _ii2; ++_i2) {
        _boundProperties[_i2].binding.unbind();
      }
    }
  };

  Controller.prototype.attached = function attached() {
    if (this.isAttached) {
      return;
    }

    this.isAttached = true;

    if (this.behavior.handlesAttached) {
      this.viewModel.attached();
    }

    if (this.view !== null) {
      this.view.attached();
    }
  };

  Controller.prototype.detached = function detached() {
    if (this.isAttached) {
      this.isAttached = false;

      if (this.view !== null) {
        this.view.detached();
      }

      if (this.behavior.handlesDetached) {
        this.viewModel.detached();
      }
    }
  };

  return Controller;
}();

var BehaviorPropertyObserver = (_dec9 = Object(__WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["v" /* subscriberCollection */])(), _dec9(_class16 = function () {
  function BehaviorPropertyObserver(taskQueue, obj, propertyName, selfSubscriber, initialValue) {
    

    this.taskQueue = taskQueue;
    this.obj = obj;
    this.propertyName = propertyName;
    this.notqueued = true;
    this.publishing = false;
    this.selfSubscriber = selfSubscriber;
    this.currentValue = this.oldValue = initialValue;
  }

  BehaviorPropertyObserver.prototype.getValue = function getValue() {
    return this.currentValue;
  };

  BehaviorPropertyObserver.prototype.setValue = function setValue(newValue) {
    var oldValue = this.currentValue;

    if (oldValue !== newValue) {
      this.oldValue = oldValue;
      this.currentValue = newValue;

      if (this.publishing && this.notqueued) {
        if (this.taskQueue.flushing) {
          this.call();
        } else {
          this.notqueued = false;
          this.taskQueue.queueMicroTask(this);
        }
      }
    }
  };

  BehaviorPropertyObserver.prototype.call = function call() {
    var oldValue = this.oldValue;
    var newValue = this.currentValue;

    this.notqueued = true;

    if (newValue === oldValue) {
      return;
    }

    if (this.selfSubscriber) {
      this.selfSubscriber(newValue, oldValue);
    }

    this.callSubscribers(newValue, oldValue);
    this.oldValue = newValue;
  };

  BehaviorPropertyObserver.prototype.subscribe = function subscribe(context, callable) {
    this.addSubscriber(context, callable);
  };

  BehaviorPropertyObserver.prototype.unsubscribe = function unsubscribe(context, callable) {
    this.removeSubscriber(context, callable);
  };

  return BehaviorPropertyObserver;
}()) || _class16);

function getObserver(instance, name) {
  var lookup = instance.__observers__;

  if (lookup === undefined) {
    var ctor = Object.getPrototypeOf(instance).constructor;
    var _behavior = __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["b" /* metadata */].get(__WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["b" /* metadata */].resource, ctor);
    if (!_behavior.isInitialized) {
      _behavior.initialize(__WEBPACK_IMPORTED_MODULE_5_aurelia_dependency_injection__["a" /* Container */].instance || new __WEBPACK_IMPORTED_MODULE_5_aurelia_dependency_injection__["a" /* Container */](), instance.constructor);
    }

    lookup = _behavior.observerLocator.getOrCreateObserversLookup(instance);
    _behavior._ensurePropertiesDefined(instance, lookup);
  }

  return lookup[name];
}

var BindableProperty = function () {
  function BindableProperty(nameOrConfig) {
    

    if (typeof nameOrConfig === 'string') {
      this.name = nameOrConfig;
    } else {
      Object.assign(this, nameOrConfig);
    }

    this.attribute = this.attribute || _hyphenate(this.name);
    if (this.defaultBindingMode === null || this.defaultBindingMode === undefined) {
      this.defaultBindingMode = __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["n" /* bindingMode */].oneWay;
    }
    this.changeHandler = this.changeHandler || null;
    this.owner = null;
    this.descriptor = null;
  }

  BindableProperty.prototype.registerWith = function registerWith(target, behavior, descriptor) {
    behavior.properties.push(this);
    behavior.attributes[this.attribute] = this;
    this.owner = behavior;

    if (descriptor) {
      this.descriptor = descriptor;
      return this._configureDescriptor(descriptor);
    }

    return undefined;
  };

  BindableProperty.prototype._configureDescriptor = function _configureDescriptor(descriptor) {
    var name = this.name;

    descriptor.configurable = true;
    descriptor.enumerable = true;

    if ('initializer' in descriptor) {
      this.defaultValue = descriptor.initializer;
      delete descriptor.initializer;
      delete descriptor.writable;
    }

    if ('value' in descriptor) {
      this.defaultValue = descriptor.value;
      delete descriptor.value;
      delete descriptor.writable;
    }

    descriptor.get = function () {
      return getObserver(this, name).getValue();
    };

    descriptor.set = function (value) {
      getObserver(this, name).setValue(value);
    };

    descriptor.get.getObserver = function (obj) {
      return getObserver(obj, name);
    };

    return descriptor;
  };

  BindableProperty.prototype.defineOn = function defineOn(target, behavior) {
    var name = this.name;
    var handlerName = void 0;

    if (this.changeHandler === null) {
      handlerName = name + 'Changed';
      if (handlerName in target.prototype) {
        this.changeHandler = handlerName;
      }
    }

    if (this.descriptor === null) {
      Object.defineProperty(target.prototype, name, this._configureDescriptor(behavior, {}));
    }
  };

  BindableProperty.prototype.createObserver = function createObserver(viewModel) {
    var selfSubscriber = null;
    var defaultValue = this.defaultValue;
    var changeHandlerName = this.changeHandler;
    var name = this.name;
    var initialValue = void 0;

    if (this.hasOptions) {
      return undefined;
    }

    if (changeHandlerName in viewModel) {
      if ('propertyChanged' in viewModel) {
        selfSubscriber = function selfSubscriber(newValue, oldValue) {
          viewModel[changeHandlerName](newValue, oldValue);
          viewModel.propertyChanged(name, newValue, oldValue);
        };
      } else {
        selfSubscriber = function selfSubscriber(newValue, oldValue) {
          return viewModel[changeHandlerName](newValue, oldValue);
        };
      }
    } else if ('propertyChanged' in viewModel) {
      selfSubscriber = function selfSubscriber(newValue, oldValue) {
        return viewModel.propertyChanged(name, newValue, oldValue);
      };
    } else if (changeHandlerName !== null) {
      throw new Error('Change handler ' + changeHandlerName + ' was specified but not declared on the class.');
    }

    if (defaultValue !== undefined) {
      initialValue = typeof defaultValue === 'function' ? defaultValue.call(viewModel) : defaultValue;
    }

    return new BehaviorPropertyObserver(this.owner.taskQueue, viewModel, this.name, selfSubscriber, initialValue);
  };

  BindableProperty.prototype._initialize = function _initialize(viewModel, observerLookup, attributes, behaviorHandlesBind, boundProperties) {
    var selfSubscriber = void 0;
    var observer = void 0;
    var attribute = void 0;
    var defaultValue = this.defaultValue;

    if (this.isDynamic) {
      for (var key in attributes) {
        this._createDynamicProperty(viewModel, observerLookup, behaviorHandlesBind, key, attributes[key], boundProperties);
      }
    } else if (!this.hasOptions) {
      observer = observerLookup[this.name];

      if (attributes !== null) {
        selfSubscriber = observer.selfSubscriber;
        attribute = attributes[this.attribute];

        if (behaviorHandlesBind) {
          observer.selfSubscriber = null;
        }

        if (typeof attribute === 'string') {
          viewModel[this.name] = attribute;
          observer.call();
        } else if (attribute) {
          boundProperties.push({ observer: observer, binding: attribute.createBinding(viewModel) });
        } else if (defaultValue !== undefined) {
          observer.call();
        }

        observer.selfSubscriber = selfSubscriber;
      }

      observer.publishing = true;
    }
  };

  BindableProperty.prototype._createDynamicProperty = function _createDynamicProperty(viewModel, observerLookup, behaviorHandlesBind, name, attribute, boundProperties) {
    var changeHandlerName = name + 'Changed';
    var selfSubscriber = null;
    var observer = void 0;
    var info = void 0;

    if (changeHandlerName in viewModel) {
      if ('propertyChanged' in viewModel) {
        selfSubscriber = function selfSubscriber(newValue, oldValue) {
          viewModel[changeHandlerName](newValue, oldValue);
          viewModel.propertyChanged(name, newValue, oldValue);
        };
      } else {
        selfSubscriber = function selfSubscriber(newValue, oldValue) {
          return viewModel[changeHandlerName](newValue, oldValue);
        };
      }
    } else if ('propertyChanged' in viewModel) {
      selfSubscriber = function selfSubscriber(newValue, oldValue) {
        return viewModel.propertyChanged(name, newValue, oldValue);
      };
    }

    observer = observerLookup[name] = new BehaviorPropertyObserver(this.owner.taskQueue, viewModel, name, selfSubscriber);

    Object.defineProperty(viewModel, name, {
      configurable: true,
      enumerable: true,
      get: observer.getValue.bind(observer),
      set: observer.setValue.bind(observer)
    });

    if (behaviorHandlesBind) {
      observer.selfSubscriber = null;
    }

    if (typeof attribute === 'string') {
      viewModel[name] = attribute;
      observer.call();
    } else if (attribute) {
      info = { observer: observer, binding: attribute.createBinding(viewModel) };
      boundProperties.push(info);
    }

    observer.publishing = true;
    observer.selfSubscriber = selfSubscriber;
  };

  return BindableProperty;
}();

var lastProviderId = 0;

function nextProviderId() {
  return ++lastProviderId;
}

function doProcessContent() {
  return true;
}
function doProcessAttributes() {}

var HtmlBehaviorResource = function () {
  function HtmlBehaviorResource() {
    

    this.elementName = null;
    this.attributeName = null;
    this.attributeDefaultBindingMode = undefined;
    this.liftsContent = false;
    this.targetShadowDOM = false;
    this.shadowDOMOptions = null;
    this.processAttributes = doProcessAttributes;
    this.processContent = doProcessContent;
    this.usesShadowDOM = false;
    this.childBindings = null;
    this.hasDynamicOptions = false;
    this.containerless = false;
    this.properties = [];
    this.attributes = {};
    this.isInitialized = false;
    this.primaryProperty = null;
  }

  HtmlBehaviorResource.convention = function convention(name, existing) {
    var behavior = void 0;

    if (name.endsWith('CustomAttribute')) {
      behavior = existing || new HtmlBehaviorResource();
      behavior.attributeName = _hyphenate(name.substring(0, name.length - 15));
    }

    if (name.endsWith('CustomElement')) {
      behavior = existing || new HtmlBehaviorResource();
      behavior.elementName = _hyphenate(name.substring(0, name.length - 13));
    }

    return behavior;
  };

  HtmlBehaviorResource.prototype.addChildBinding = function addChildBinding(behavior) {
    if (this.childBindings === null) {
      this.childBindings = [];
    }

    this.childBindings.push(behavior);
  };

  HtmlBehaviorResource.prototype.initialize = function initialize(container, target) {
    var proto = target.prototype;
    var properties = this.properties;
    var attributeName = this.attributeName;
    var attributeDefaultBindingMode = this.attributeDefaultBindingMode;
    var i = void 0;
    var ii = void 0;
    var current = void 0;

    if (this.isInitialized) {
      return;
    }

    this.isInitialized = true;
    target.__providerId__ = nextProviderId();

    this.observerLocator = container.get(__WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["i" /* ObserverLocator */]);
    this.taskQueue = container.get(__WEBPACK_IMPORTED_MODULE_7_aurelia_task_queue__["a" /* TaskQueue */]);

    this.target = target;
    this.usesShadowDOM = this.targetShadowDOM && __WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["c" /* FEATURE */].shadowDOM;
    this.handlesCreated = 'created' in proto;
    this.handlesBind = 'bind' in proto;
    this.handlesUnbind = 'unbind' in proto;
    this.handlesAttached = 'attached' in proto;
    this.handlesDetached = 'detached' in proto;
    this.htmlName = this.elementName || this.attributeName;

    if (attributeName !== null) {
      if (properties.length === 0) {
        new BindableProperty({
          name: 'value',
          changeHandler: 'valueChanged' in proto ? 'valueChanged' : null,
          attribute: attributeName,
          defaultBindingMode: attributeDefaultBindingMode
        }).registerWith(target, this);
      }

      current = properties[0];

      if (properties.length === 1 && current.name === 'value') {
        current.isDynamic = current.hasOptions = this.hasDynamicOptions;
        current.defineOn(target, this);
      } else {
        for (i = 0, ii = properties.length; i < ii; ++i) {
          properties[i].defineOn(target, this);
          if (properties[i].primaryProperty) {
            if (this.primaryProperty) {
              throw new Error('Only one bindable property on a custom element can be defined as the default');
            }
            this.primaryProperty = properties[i];
          }
        }

        current = new BindableProperty({
          name: 'value',
          changeHandler: 'valueChanged' in proto ? 'valueChanged' : null,
          attribute: attributeName,
          defaultBindingMode: attributeDefaultBindingMode
        });

        current.hasOptions = true;
        current.registerWith(target, this);
      }
    } else {
      for (i = 0, ii = properties.length; i < ii; ++i) {
        properties[i].defineOn(target, this);
      }

      this._copyInheritedProperties(container, target);
    }
  };

  HtmlBehaviorResource.prototype.register = function register(registry, name) {
    var _this13 = this;

    if (this.attributeName !== null) {
      registry.registerAttribute(name || this.attributeName, this, this.attributeName);

      if (Array.isArray(this.aliases)) {
        this.aliases.forEach(function (alias) {
          registry.registerAttribute(alias, _this13, _this13.attributeName);
        });
      }
    }

    if (this.elementName !== null) {
      registry.registerElement(name || this.elementName, this);
    }
  };

  HtmlBehaviorResource.prototype.load = function load(container, target, loadContext, viewStrategy, transientView) {
    var _this14 = this;

    var options = void 0;

    if (this.elementName !== null) {
      viewStrategy = container.get(ViewLocator).getViewStrategy(viewStrategy || this.viewStrategy || target);
      options = new ViewCompileInstruction(this.targetShadowDOM, true);

      if (!viewStrategy.moduleId) {
        viewStrategy.moduleId = __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["a" /* Origin */].get(target).moduleId;
      }

      return viewStrategy.loadViewFactory(container.get(ViewEngine), options, loadContext, target).then(function (viewFactory) {
        if (!transientView || !_this14.viewFactory) {
          _this14.viewFactory = viewFactory;
        }

        return viewFactory;
      });
    }

    return Promise.resolve(this);
  };

  HtmlBehaviorResource.prototype.compile = function compile(compiler, resources, node, instruction, parentNode) {
    if (this.liftsContent) {
      if (!instruction.viewFactory) {
        var template = __WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["b" /* DOM */].createElement('template');
        var fragment = __WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["b" /* DOM */].createDocumentFragment();
        var cacheSize = node.getAttribute('view-cache');
        var part = node.getAttribute('part');

        node.removeAttribute(instruction.originalAttrName);
        __WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["b" /* DOM */].replaceNode(template, node, parentNode);
        fragment.appendChild(node);
        instruction.viewFactory = compiler.compile(fragment, resources);

        if (part) {
          instruction.viewFactory.part = part;
          node.removeAttribute('part');
        }

        if (cacheSize) {
          instruction.viewFactory.setCacheSize(cacheSize);
          node.removeAttribute('view-cache');
        }

        node = template;
      }
    } else if (this.elementName !== null) {
      var _partReplacements2 = {};

      if (this.processContent(compiler, resources, node, instruction) && node.hasChildNodes()) {
        var currentChild = node.firstChild;
        var contentElement = this.usesShadowDOM ? null : __WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["b" /* DOM */].createElement('au-content');
        var nextSibling = void 0;
        var toReplace = void 0;

        while (currentChild) {
          nextSibling = currentChild.nextSibling;

          if (currentChild.tagName === 'TEMPLATE' && (toReplace = currentChild.getAttribute('replace-part'))) {
            _partReplacements2[toReplace] = compiler.compile(currentChild, resources);
            __WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["b" /* DOM */].removeNode(currentChild, parentNode);
            instruction.partReplacements = _partReplacements2;
          } else if (contentElement !== null) {
            if (currentChild.nodeType === 3 && _isAllWhitespace(currentChild)) {
              __WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["b" /* DOM */].removeNode(currentChild, parentNode);
            } else {
              contentElement.appendChild(currentChild);
            }
          }

          currentChild = nextSibling;
        }

        if (contentElement !== null && contentElement.hasChildNodes()) {
          node.appendChild(contentElement);
        }

        instruction.skipContentProcessing = false;
      } else {
        instruction.skipContentProcessing = true;
      }
    } else if (!this.processContent(compiler, resources, node, instruction)) {
      instruction.skipContentProcessing = true;
    }

    return node;
  };

  HtmlBehaviorResource.prototype.create = function create(container, instruction, element, bindings) {
    var viewHost = void 0;
    var au = null;

    instruction = instruction || BehaviorInstruction.normal;
    element = element || null;
    bindings = bindings || null;

    if (this.elementName !== null && element) {
      if (this.usesShadowDOM) {
        viewHost = element.attachShadow(this.shadowDOMOptions);
        container.registerInstance(__WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["b" /* DOM */].boundary, viewHost);
      } else {
        viewHost = element;
        if (this.targetShadowDOM) {
          container.registerInstance(__WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["b" /* DOM */].boundary, viewHost);
        }
      }
    }

    if (element !== null) {
      element.au = au = element.au || {};
    }

    var viewModel = instruction.viewModel || container.get(this.target);
    var controller = new Controller(this, instruction, viewModel, container);
    var childBindings = this.childBindings;
    var viewFactory = void 0;

    if (this.liftsContent) {
      au.controller = controller;
    } else if (this.elementName !== null) {
      viewFactory = instruction.viewFactory || this.viewFactory;
      container.viewModel = viewModel;

      if (viewFactory) {
        controller.view = viewFactory.create(container, instruction, element);
      }

      if (element !== null) {
        au.controller = controller;

        if (controller.view) {
          if (!this.usesShadowDOM && (element.childNodes.length === 1 || element.contentElement)) {
            var contentElement = element.childNodes[0] || element.contentElement;
            controller.view.contentView = { fragment: contentElement };
            contentElement.parentNode && __WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["b" /* DOM */].removeNode(contentElement);
          }

          if (instruction.anchorIsContainer) {
            if (childBindings !== null) {
              for (var _i3 = 0, _ii3 = childBindings.length; _i3 < _ii3; ++_i3) {
                controller.view.addBinding(childBindings[_i3].create(element, viewModel, controller));
              }
            }

            controller.view.appendNodesTo(viewHost);
          } else {
            controller.view.insertNodesBefore(viewHost);
          }
        } else if (childBindings !== null) {
          for (var _i4 = 0, _ii4 = childBindings.length; _i4 < _ii4; ++_i4) {
            bindings.push(childBindings[_i4].create(element, viewModel, controller));
          }
        }
      } else if (controller.view) {
        controller.view.controller = controller;

        if (childBindings !== null) {
          for (var _i5 = 0, _ii5 = childBindings.length; _i5 < _ii5; ++_i5) {
            controller.view.addBinding(childBindings[_i5].create(instruction.host, viewModel, controller));
          }
        }
      } else if (childBindings !== null) {
        for (var _i6 = 0, _ii6 = childBindings.length; _i6 < _ii6; ++_i6) {
          bindings.push(childBindings[_i6].create(instruction.host, viewModel, controller));
        }
      }
    } else if (childBindings !== null) {
      for (var _i7 = 0, _ii7 = childBindings.length; _i7 < _ii7; ++_i7) {
        bindings.push(childBindings[_i7].create(element, viewModel, controller));
      }
    }

    if (au !== null) {
      au[this.htmlName] = controller;
    }

    if (instruction.initiatedByBehavior && viewFactory) {
      controller.view.created();
    }

    return controller;
  };

  HtmlBehaviorResource.prototype._ensurePropertiesDefined = function _ensurePropertiesDefined(instance, lookup) {
    var properties = void 0;
    var i = void 0;
    var ii = void 0;
    var observer = void 0;

    if ('__propertiesDefined__' in lookup) {
      return;
    }

    lookup.__propertiesDefined__ = true;
    properties = this.properties;

    for (i = 0, ii = properties.length; i < ii; ++i) {
      observer = properties[i].createObserver(instance);

      if (observer !== undefined) {
        lookup[observer.propertyName] = observer;
      }
    }
  };

  HtmlBehaviorResource.prototype._copyInheritedProperties = function _copyInheritedProperties(container, target) {
    var _this15 = this;

    var behavior = void 0;
    var derived = target;

    while (true) {
      var proto = Object.getPrototypeOf(target.prototype);
      target = proto && proto.constructor;
      if (!target) {
        return;
      }
      behavior = __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["b" /* metadata */].getOwn(__WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["b" /* metadata */].resource, target);
      if (behavior) {
        break;
      }
    }
    behavior.initialize(container, target);

    var _loop = function _loop(_i8, _ii8) {
      var prop = behavior.properties[_i8];

      if (_this15.properties.some(function (p) {
        return p.name === prop.name;
      })) {
        return 'continue';
      }

      new BindableProperty(prop).registerWith(derived, _this15);
    };

    for (var _i8 = 0, _ii8 = behavior.properties.length; _i8 < _ii8; ++_i8) {
      var _ret2 = _loop(_i8, _ii8);

      if (_ret2 === 'continue') continue;
    }
  };

  return HtmlBehaviorResource;
}();

function createChildObserverDecorator(selectorOrConfig, all) {
  return function (target, key, descriptor) {
    var actualTarget = typeof key === 'string' ? target.constructor : target;
    var r = __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["b" /* metadata */].getOrCreateOwn(__WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["b" /* metadata */].resource, HtmlBehaviorResource, actualTarget);

    if (typeof selectorOrConfig === 'string') {
      selectorOrConfig = {
        selector: selectorOrConfig,
        name: key
      };
    }

    if (descriptor) {
      descriptor.writable = true;
      descriptor.configurable = true;
    }

    selectorOrConfig.all = all;
    r.addChildBinding(new ChildObserver(selectorOrConfig));
  };
}

function children(selectorOrConfig) {
  return createChildObserverDecorator(selectorOrConfig, true);
}

function child(selectorOrConfig) {
  return createChildObserverDecorator(selectorOrConfig, false);
}

var ChildObserver = function () {
  function ChildObserver(config) {
    

    this.name = config.name;
    this.changeHandler = config.changeHandler || this.name + 'Changed';
    this.selector = config.selector;
    this.all = config.all;
  }

  ChildObserver.prototype.create = function create(viewHost, viewModel, controller) {
    return new ChildObserverBinder(this.selector, viewHost, this.name, viewModel, controller, this.changeHandler, this.all);
  };

  return ChildObserver;
}();

var noMutations = [];

function trackMutation(groupedMutations, binder, record) {
  var mutations = groupedMutations.get(binder);

  if (!mutations) {
    mutations = [];
    groupedMutations.set(binder, mutations);
  }

  mutations.push(record);
}

function onChildChange(mutations, observer) {
  var binders = observer.binders;
  var bindersLength = binders.length;
  var groupedMutations = new Map();

  for (var _i9 = 0, _ii9 = mutations.length; _i9 < _ii9; ++_i9) {
    var record = mutations[_i9];
    var added = record.addedNodes;
    var removed = record.removedNodes;

    for (var j = 0, jj = removed.length; j < jj; ++j) {
      var node = removed[j];
      if (node.nodeType === 1) {
        for (var k = 0; k < bindersLength; ++k) {
          var binder = binders[k];
          if (binder.onRemove(node)) {
            trackMutation(groupedMutations, binder, record);
          }
        }
      }
    }

    for (var _j = 0, _jj = added.length; _j < _jj; ++_j) {
      var _node = added[_j];
      if (_node.nodeType === 1) {
        for (var _k = 0; _k < bindersLength; ++_k) {
          var _binder = binders[_k];
          if (_binder.onAdd(_node)) {
            trackMutation(groupedMutations, _binder, record);
          }
        }
      }
    }
  }

  groupedMutations.forEach(function (value, key) {
    if (key.changeHandler !== null) {
      key.viewModel[key.changeHandler](value);
    }
  });
}

var ChildObserverBinder = function () {
  function ChildObserverBinder(selector, viewHost, property, viewModel, controller, changeHandler, all) {
    

    this.selector = selector;
    this.viewHost = viewHost;
    this.property = property;
    this.viewModel = viewModel;
    this.controller = controller;
    this.changeHandler = changeHandler in viewModel ? changeHandler : null;
    this.usesShadowDOM = controller.behavior.usesShadowDOM;
    this.all = all;

    if (!this.usesShadowDOM && controller.view && controller.view.contentView) {
      this.contentView = controller.view.contentView;
    } else {
      this.contentView = null;
    }
  }

  ChildObserverBinder.prototype.matches = function matches(element) {
    if (element.matches(this.selector)) {
      if (this.contentView === null) {
        return true;
      }

      var contentView = this.contentView;
      var assignedSlot = element.auAssignedSlot;

      if (assignedSlot && assignedSlot.projectFromAnchors) {
        var anchors = assignedSlot.projectFromAnchors;

        for (var _i10 = 0, _ii10 = anchors.length; _i10 < _ii10; ++_i10) {
          if (anchors[_i10].auOwnerView === contentView) {
            return true;
          }
        }

        return false;
      }

      return element.auOwnerView === contentView;
    }

    return false;
  };

  ChildObserverBinder.prototype.bind = function bind(source) {
    var viewHost = this.viewHost;
    var viewModel = this.viewModel;
    var observer = viewHost.__childObserver__;

    if (!observer) {
      observer = viewHost.__childObserver__ = __WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["b" /* DOM */].createMutationObserver(onChildChange);

      var options = {
        childList: true,
        subtree: !this.usesShadowDOM
      };

      observer.observe(viewHost, options);
      observer.binders = [];
    }

    observer.binders.push(this);

    if (this.usesShadowDOM) {
      var current = viewHost.firstElementChild;

      if (this.all) {
        var items = viewModel[this.property];
        if (!items) {
          items = viewModel[this.property] = [];
        } else {
          items.length = 0;
        }

        while (current) {
          if (this.matches(current)) {
            items.push(current.au && current.au.controller ? current.au.controller.viewModel : current);
          }

          current = current.nextElementSibling;
        }

        if (this.changeHandler !== null) {
          this.viewModel[this.changeHandler](noMutations);
        }
      } else {
        while (current) {
          if (this.matches(current)) {
            var value = current.au && current.au.controller ? current.au.controller.viewModel : current;
            this.viewModel[this.property] = value;

            if (this.changeHandler !== null) {
              this.viewModel[this.changeHandler](value);
            }

            break;
          }

          current = current.nextElementSibling;
        }
      }
    }
  };

  ChildObserverBinder.prototype.onRemove = function onRemove(element) {
    if (this.matches(element)) {
      var value = element.au && element.au.controller ? element.au.controller.viewModel : element;

      if (this.all) {
        var items = this.viewModel[this.property] || (this.viewModel[this.property] = []);
        var index = items.indexOf(value);

        if (index !== -1) {
          items.splice(index, 1);
        }

        return true;
      }

      return false;
    }

    return false;
  };

  ChildObserverBinder.prototype.onAdd = function onAdd(element) {
    if (this.matches(element)) {
      var value = element.au && element.au.controller ? element.au.controller.viewModel : element;

      if (this.all) {
        var items = this.viewModel[this.property] || (this.viewModel[this.property] = []);
        var index = 0;
        var prev = element.previousElementSibling;

        while (prev) {
          if (this.matches(prev)) {
            index++;
          }

          prev = prev.previousElementSibling;
        }

        items.splice(index, 0, value);
        return true;
      }

      this.viewModel[this.property] = value;

      if (this.changeHandler !== null) {
        this.viewModel[this.changeHandler](value);
      }
    }

    return false;
  };

  ChildObserverBinder.prototype.unbind = function unbind() {
    if (this.viewHost.__childObserver__) {
      this.viewHost.__childObserver__.disconnect();
      this.viewHost.__childObserver__ = null;
    }
  };

  return ChildObserverBinder;
}();

function remove(viewSlot, previous) {
  return Array.isArray(previous) ? viewSlot.removeMany(previous, true) : viewSlot.remove(previous, true);
}

var SwapStrategies = {
  before: function before(viewSlot, previous, callback) {
    return previous === undefined ? callback() : callback().then(function () {
      return remove(viewSlot, previous);
    });
  },
  with: function _with(viewSlot, previous, callback) {
    return previous === undefined ? callback() : Promise.all([remove(viewSlot, previous), callback()]);
  },
  after: function after(viewSlot, previous, callback) {
    return Promise.resolve(viewSlot.removeAll(true)).then(callback);
  }
};

function tryActivateViewModel(context) {
  if (context.skipActivation || typeof context.viewModel.activate !== 'function') {
    return Promise.resolve();
  }

  return context.viewModel.activate(context.model) || Promise.resolve();
}

var CompositionEngine = (_dec10 = Object(__WEBPACK_IMPORTED_MODULE_5_aurelia_dependency_injection__["d" /* inject */])(ViewEngine, ViewLocator), _dec10(_class17 = function () {
  function CompositionEngine(viewEngine, viewLocator) {
    

    this.viewEngine = viewEngine;
    this.viewLocator = viewLocator;
  }

  CompositionEngine.prototype._swap = function _swap(context, view) {
    var swapStrategy = SwapStrategies[context.swapOrder] || SwapStrategies.after;
    var previousViews = context.viewSlot.children.slice();

    return swapStrategy(context.viewSlot, previousViews, function () {
      return Promise.resolve(context.viewSlot.add(view)).then(function () {
        if (context.currentController) {
          context.currentController.unbind();
        }
      });
    }).then(function () {
      if (context.compositionTransactionNotifier) {
        context.compositionTransactionNotifier.done();
      }
    });
  };

  CompositionEngine.prototype._createControllerAndSwap = function _createControllerAndSwap(context) {
    var _this16 = this;

    return this.createController(context).then(function (controller) {
      controller.automate(context.overrideContext, context.owningView);

      if (context.compositionTransactionOwnershipToken) {
        return context.compositionTransactionOwnershipToken.waitForCompositionComplete().then(function () {
          return _this16._swap(context, controller.view);
        }).then(function () {
          return controller;
        });
      }

      return _this16._swap(context, controller.view).then(function () {
        return controller;
      });
    });
  };

  CompositionEngine.prototype.createController = function createController(context) {
    var _this17 = this;

    var childContainer = void 0;
    var viewModel = void 0;
    var viewModelResource = void 0;
    var m = void 0;

    return this.ensureViewModel(context).then(tryActivateViewModel).then(function () {
      childContainer = context.childContainer;
      viewModel = context.viewModel;
      viewModelResource = context.viewModelResource;
      m = viewModelResource.metadata;

      var viewStrategy = _this17.viewLocator.getViewStrategy(context.view || viewModel);

      if (context.viewResources) {
        viewStrategy.makeRelativeTo(context.viewResources.viewUrl);
      }

      return m.load(childContainer, viewModelResource.value, null, viewStrategy, true);
    }).then(function (viewFactory) {
      return m.create(childContainer, BehaviorInstruction.dynamic(context.host, viewModel, viewFactory));
    });
  };

  CompositionEngine.prototype.ensureViewModel = function ensureViewModel(context) {
    var childContainer = context.childContainer = context.childContainer || context.container.createChild();

    if (typeof context.viewModel === 'string') {
      context.viewModel = context.viewResources ? context.viewResources.relativeToView(context.viewModel) : context.viewModel;

      return this.viewEngine.importViewModelResource(context.viewModel).then(function (viewModelResource) {
        childContainer.autoRegister(viewModelResource.value);

        if (context.host) {
          childContainer.registerInstance(__WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["b" /* DOM */].Element, context.host);
        }

        context.viewModel = childContainer.viewModel = childContainer.get(viewModelResource.value);
        context.viewModelResource = viewModelResource;
        return context;
      });
    }

    var m = __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["b" /* metadata */].getOrCreateOwn(__WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["b" /* metadata */].resource, HtmlBehaviorResource, context.viewModel.constructor);
    m.elementName = m.elementName || 'dynamic-element';
    m.initialize(context.container || childContainer, context.viewModel.constructor);
    context.viewModelResource = { metadata: m, value: context.viewModel.constructor };
    childContainer.viewModel = context.viewModel;
    return Promise.resolve(context);
  };

  CompositionEngine.prototype.compose = function compose(context) {
    var _this18 = this;

    context.childContainer = context.childContainer || context.container.createChild();
    context.view = this.viewLocator.getViewStrategy(context.view);

    var transaction = context.childContainer.get(CompositionTransaction);
    var compositionTransactionOwnershipToken = transaction.tryCapture();

    if (compositionTransactionOwnershipToken) {
      context.compositionTransactionOwnershipToken = compositionTransactionOwnershipToken;
    } else {
      context.compositionTransactionNotifier = transaction.enlist();
    }

    if (context.viewModel) {
      return this._createControllerAndSwap(context);
    } else if (context.view) {
      if (context.viewResources) {
        context.view.makeRelativeTo(context.viewResources.viewUrl);
      }

      return context.view.loadViewFactory(this.viewEngine, new ViewCompileInstruction()).then(function (viewFactory) {
        var result = viewFactory.create(context.childContainer);
        result.bind(context.bindingContext, context.overrideContext);

        if (context.compositionTransactionOwnershipToken) {
          return context.compositionTransactionOwnershipToken.waitForCompositionComplete().then(function () {
            return _this18._swap(context, result);
          }).then(function () {
            return result;
          });
        }

        return _this18._swap(context, result).then(function () {
          return result;
        });
      });
    } else if (context.viewSlot) {
      context.viewSlot.removeAll();

      if (context.compositionTransactionNotifier) {
        context.compositionTransactionNotifier.done();
      }

      return Promise.resolve(null);
    }

    return Promise.resolve(null);
  };

  return CompositionEngine;
}()) || _class17);

var ElementConfigResource = function () {
  function ElementConfigResource() {
    
  }

  ElementConfigResource.prototype.initialize = function initialize(container, target) {};

  ElementConfigResource.prototype.register = function register(registry, name) {};

  ElementConfigResource.prototype.load = function load(container, target) {
    var config = new target();
    var eventManager = container.get(__WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["f" /* EventManager */]);
    eventManager.registerElementConfig(config);
  };

  return ElementConfigResource;
}();

function validateBehaviorName(name, type) {
  if (/[A-Z]/.test(name)) {
    var newName = _hyphenate(name);
    __WEBPACK_IMPORTED_MODULE_0_aurelia_logging__["getLogger"]('templating').warn('\'' + name + '\' is not a valid ' + type + ' name and has been converted to \'' + newName + '\'. Upper-case letters are not allowed because the DOM is not case-sensitive.');
    return newName;
  }
  return name;
}

function resource(instance) {
  return function (target) {
    __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["b" /* metadata */].define(__WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["b" /* metadata */].resource, instance, target);
  };
}

function behavior(override) {
  return function (target) {
    if (override instanceof HtmlBehaviorResource) {
      __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["b" /* metadata */].define(__WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["b" /* metadata */].resource, override, target);
    } else {
      var r = __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["b" /* metadata */].getOrCreateOwn(__WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["b" /* metadata */].resource, HtmlBehaviorResource, target);
      Object.assign(r, override);
    }
  };
}

function customElement(name) {
  return function (target) {
    var r = __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["b" /* metadata */].getOrCreateOwn(__WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["b" /* metadata */].resource, HtmlBehaviorResource, target);
    r.elementName = validateBehaviorName(name, 'custom element');
  };
}

function customAttribute(name, defaultBindingMode, aliases) {
  return function (target) {
    var r = __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["b" /* metadata */].getOrCreateOwn(__WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["b" /* metadata */].resource, HtmlBehaviorResource, target);
    r.attributeName = validateBehaviorName(name, 'custom attribute');
    r.attributeDefaultBindingMode = defaultBindingMode;
    r.aliases = aliases;
  };
}

function templateController(target) {
  var deco = function deco(t) {
    var r = __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["b" /* metadata */].getOrCreateOwn(__WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["b" /* metadata */].resource, HtmlBehaviorResource, t);
    r.liftsContent = true;
  };

  return target ? deco(target) : deco;
}

function bindable(nameOrConfigOrTarget, key, descriptor) {
  var deco = function deco(target, key2, descriptor2) {
    var actualTarget = key2 ? target.constructor : target;
    var r = __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["b" /* metadata */].getOrCreateOwn(__WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["b" /* metadata */].resource, HtmlBehaviorResource, actualTarget);
    var prop = void 0;

    if (key2) {
      nameOrConfigOrTarget = nameOrConfigOrTarget || {};
      nameOrConfigOrTarget.name = key2;
    }

    prop = new BindableProperty(nameOrConfigOrTarget);
    return prop.registerWith(actualTarget, r, descriptor2);
  };

  if (!nameOrConfigOrTarget) {
    return deco;
  }

  if (key) {
    var _target = nameOrConfigOrTarget;
    nameOrConfigOrTarget = null;
    return deco(_target, key, descriptor);
  }

  return deco;
}

function dynamicOptions(target) {
  var deco = function deco(t) {
    var r = __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["b" /* metadata */].getOrCreateOwn(__WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["b" /* metadata */].resource, HtmlBehaviorResource, t);
    r.hasDynamicOptions = true;
  };

  return target ? deco(target) : deco;
}

var defaultShadowDOMOptions = { mode: 'open' };

function useShadowDOM(targetOrOptions) {
  var options = typeof targetOrOptions === 'function' || !targetOrOptions ? defaultShadowDOMOptions : targetOrOptions;

  var deco = function deco(t) {
    var r = __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["b" /* metadata */].getOrCreateOwn(__WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["b" /* metadata */].resource, HtmlBehaviorResource, t);
    r.targetShadowDOM = true;
    r.shadowDOMOptions = options;
  };

  return typeof targetOrOptions === 'function' ? deco(targetOrOptions) : deco;
}

function processAttributes(processor) {
  return function (t) {
    var r = __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["b" /* metadata */].getOrCreateOwn(__WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["b" /* metadata */].resource, HtmlBehaviorResource, t);
    r.processAttributes = function (compiler, resources, node, attributes, elementInstruction) {
      try {
        processor(compiler, resources, node, attributes, elementInstruction);
      } catch (error) {
        __WEBPACK_IMPORTED_MODULE_0_aurelia_logging__["getLogger"]('templating').error(error);
      }
    };
  };
}

function doNotProcessContent() {
  return false;
}

function processContent(processor) {
  return function (t) {
    var r = __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["b" /* metadata */].getOrCreateOwn(__WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["b" /* metadata */].resource, HtmlBehaviorResource, t);
    r.processContent = processor ? function (compiler, resources, node, instruction) {
      try {
        return processor(compiler, resources, node, instruction);
      } catch (error) {
        __WEBPACK_IMPORTED_MODULE_0_aurelia_logging__["getLogger"]('templating').error(error);
        return false;
      }
    } : doNotProcessContent;
  };
}

function containerless(target) {
  var deco = function deco(t) {
    var r = __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["b" /* metadata */].getOrCreateOwn(__WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["b" /* metadata */].resource, HtmlBehaviorResource, t);
    r.containerless = true;
  };

  return target ? deco(target) : deco;
}

function useViewStrategy(strategy) {
  return function (target) {
    __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["b" /* metadata */].define(ViewLocator.viewStrategyMetadataKey, strategy, target);
  };
}

function useView(path) {
  return useViewStrategy(new RelativeViewStrategy(path));
}

function inlineView(markup, dependencies, dependencyBaseUrl) {
  return useViewStrategy(new InlineViewStrategy(markup, dependencies, dependencyBaseUrl));
}

function noView(targetOrDependencies, dependencyBaseUrl) {
  var target = void 0;
  var dependencies = void 0;
  if (typeof targetOrDependencies === 'function') {
    target = targetOrDependencies;
  } else {
    dependencies = targetOrDependencies;
    target = undefined;
  }

  var deco = function deco(t) {
    __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["b" /* metadata */].define(ViewLocator.viewStrategyMetadataKey, new NoViewStrategy(dependencies, dependencyBaseUrl), t);
  };

  return target ? deco(target) : deco;
}

function elementConfig(target) {
  var deco = function deco(t) {
    __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["b" /* metadata */].define(__WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["b" /* metadata */].resource, new ElementConfigResource(), t);
  };

  return target ? deco(target) : deco;
}

function viewResources() {
  for (var _len = arguments.length, resources = Array(_len), _key = 0; _key < _len; _key++) {
    resources[_key] = arguments[_key];
  }

  return function (target) {
    __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["b" /* metadata */].define(ViewEngine.viewModelRequireMetadataKey, resources, target);
  };
}

var TemplatingEngine = (_dec11 = Object(__WEBPACK_IMPORTED_MODULE_5_aurelia_dependency_injection__["d" /* inject */])(__WEBPACK_IMPORTED_MODULE_5_aurelia_dependency_injection__["a" /* Container */], ModuleAnalyzer, ViewCompiler, CompositionEngine), _dec11(_class18 = function () {
  function TemplatingEngine(container, moduleAnalyzer, viewCompiler, compositionEngine) {
    

    this._container = container;
    this._moduleAnalyzer = moduleAnalyzer;
    this._viewCompiler = viewCompiler;
    this._compositionEngine = compositionEngine;
    container.registerInstance(Animator, Animator.instance = new Animator());
  }

  TemplatingEngine.prototype.configureAnimator = function configureAnimator(animator) {
    this._container.unregister(Animator);
    this._container.registerInstance(Animator, Animator.instance = animator);
  };

  TemplatingEngine.prototype.compose = function compose(context) {
    return this._compositionEngine.compose(context);
  };

  TemplatingEngine.prototype.enhance = function enhance(instruction) {
    if (instruction instanceof __WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["b" /* DOM */].Element) {
      instruction = { element: instruction };
    }

    var compilerInstructions = {};
    var resources = instruction.resources || this._container.get(ViewResources);

    this._viewCompiler._compileNode(instruction.element, resources, compilerInstructions, instruction.element.parentNode, 'root', true);

    var factory = new ViewFactory(instruction.element, compilerInstructions, resources);
    var container = instruction.container || this._container.createChild();
    var view = factory.create(container, BehaviorInstruction.enhance());

    view.bind(instruction.bindingContext || {}, instruction.overrideContext);

    view.firstChild = view.lastChild = view.fragment;
    view.fragment = __WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["b" /* DOM */].createDocumentFragment();
    view.attached();

    return view;
  };

  return TemplatingEngine;
}()) || _class18);

/***/ }),

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TemplateDependency */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TemplateRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Loader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_path__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__ = __webpack_require__(6);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();






var TemplateDependency = function TemplateDependency(src, name) {
  

  this.src = src;
  this.name = name;
};

var TemplateRegistryEntry = function () {
  function TemplateRegistryEntry(address) {
    

    this.templateIsLoaded = false;
    this.factoryIsReady = false;
    this.resources = null;
    this.dependencies = null;

    this.address = address;
    this.onReady = null;
    this._template = null;
    this._factory = null;
  }

  TemplateRegistryEntry.prototype.addDependency = function addDependency(src, name) {
    var finalSrc = typeof src === 'string' ? Object(__WEBPACK_IMPORTED_MODULE_0_aurelia_path__["d" /* relativeToFile */])(src, this.address) : __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["a" /* Origin */].get(src).moduleId;

    this.dependencies.push(new TemplateDependency(finalSrc, name));
  };

  _createClass(TemplateRegistryEntry, [{
    key: 'template',
    get: function get() {
      return this._template;
    },
    set: function set(value) {
      var address = this.address;
      var requires = void 0;
      var current = void 0;
      var src = void 0;
      var dependencies = void 0;

      this._template = value;
      this.templateIsLoaded = true;

      requires = value.content.querySelectorAll('require');
      dependencies = this.dependencies = new Array(requires.length);

      for (var i = 0, ii = requires.length; i < ii; ++i) {
        current = requires[i];
        src = current.getAttribute('from');

        if (!src) {
          throw new Error('<require> element in ' + address + ' has no "from" attribute.');
        }

        dependencies[i] = new TemplateDependency(Object(__WEBPACK_IMPORTED_MODULE_0_aurelia_path__["d" /* relativeToFile */])(src, address), current.getAttribute('as'));

        if (current.parentNode) {
          current.parentNode.removeChild(current);
        }
      }
    }
  }, {
    key: 'factory',
    get: function get() {
      return this._factory;
    },
    set: function set(value) {
      this._factory = value;
      this.factoryIsReady = true;
    }
  }]);

  return TemplateRegistryEntry;
}();

var Loader = function () {
  function Loader() {
    

    this.templateRegistry = {};
  }

  Loader.prototype.map = function map(id, source) {
    throw new Error('Loaders must implement map(id, source).');
  };

  Loader.prototype.normalizeSync = function normalizeSync(moduleId, relativeTo) {
    throw new Error('Loaders must implement normalizeSync(moduleId, relativeTo).');
  };

  Loader.prototype.normalize = function normalize(moduleId, relativeTo) {
    throw new Error('Loaders must implement normalize(moduleId: string, relativeTo: string): Promise<string>.');
  };

  Loader.prototype.loadModule = function loadModule(id) {
    throw new Error('Loaders must implement loadModule(id).');
  };

  Loader.prototype.loadAllModules = function loadAllModules(ids) {
    throw new Error('Loader must implement loadAllModules(ids).');
  };

  Loader.prototype.loadTemplate = function loadTemplate(url) {
    throw new Error('Loader must implement loadTemplate(url).');
  };

  Loader.prototype.loadText = function loadText(url) {
    throw new Error('Loader must implement loadText(url).');
  };

  Loader.prototype.applyPluginToUrl = function applyPluginToUrl(url, pluginName) {
    throw new Error('Loader must implement applyPluginToUrl(url, pluginName).');
  };

  Loader.prototype.addPlugin = function addPlugin(pluginName, implementation) {
    throw new Error('Loader must implement addPlugin(pluginName, implementation).');
  };

  Loader.prototype.getOrCreateTemplateRegistryEntry = function getOrCreateTemplateRegistryEntry(address) {
    return this.templateRegistry[address] || (this.templateRegistry[address] = new TemplateRegistryEntry(address));
  };

  return Loader;
}();

/***/ }),

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export _normalizeAbsolutePath */
/* unused harmony export _createRootedPath */
/* unused harmony export _resolveUrl */
/* unused harmony export pipelineStatus */
/* unused harmony export Pipeline */
/* unused harmony export CommitChangesStep */
/* unused harmony export NavigationInstruction */
/* unused harmony export NavModel */
/* unused harmony export isNavigationCommand */
/* unused harmony export Redirect */
/* unused harmony export RedirectToRoute */
/* unused harmony export RouterConfiguration */
/* unused harmony export activationStrategy */
/* unused harmony export BuildNavigationPlanStep */
/* unused harmony export _buildNavigationPlan */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Router; });
/* unused harmony export CanDeactivatePreviousStep */
/* unused harmony export CanActivateNextStep */
/* unused harmony export DeactivatePreviousStep */
/* unused harmony export ActivateNextStep */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RouteLoader; });
/* unused harmony export LoadRouteStep */
/* unused harmony export PipelineProvider */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_logging__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_route_recognizer__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_dependency_injection__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_aurelia_history__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aurelia_event_aggregator__ = __webpack_require__("aurelia-event-aggregator");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









function _normalizeAbsolutePath(path, hasPushState) {
  var absolute = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (!hasPushState && path[0] !== '#') {
    path = '#' + path;
  }

  if (hasPushState && absolute) {
    path = path.substring(1, path.length);
  }

  return path;
}

function _createRootedPath(fragment, baseUrl, hasPushState, absolute) {
  if (isAbsoluteUrl.test(fragment)) {
    return fragment;
  }

  var path = '';

  if (baseUrl.length && baseUrl[0] !== '/') {
    path += '/';
  }

  path += baseUrl;

  if ((!path.length || path[path.length - 1] !== '/') && fragment[0] !== '/') {
    path += '/';
  }

  if (path.length && path[path.length - 1] === '/' && fragment[0] === '/') {
    path = path.substring(0, path.length - 1);
  }

  return _normalizeAbsolutePath(path + fragment, hasPushState, absolute);
}

function _resolveUrl(fragment, baseUrl, hasPushState) {
  if (isRootedPath.test(fragment)) {
    return _normalizeAbsolutePath(fragment, hasPushState);
  }

  return _createRootedPath(fragment, baseUrl, hasPushState);
}

var isRootedPath = /^#?\//;
var isAbsoluteUrl = /^([a-z][a-z0-9+\-.]*:)?\/\//i;

var pipelineStatus = {
  completed: 'completed',
  canceled: 'canceled',
  rejected: 'rejected',
  running: 'running'
};

var Pipeline = function () {
  function Pipeline() {
    

    this.steps = [];
  }

  Pipeline.prototype.addStep = function addStep(step) {
    var run = void 0;

    if (typeof step === 'function') {
      run = step;
    } else if (typeof step.getSteps === 'function') {
      var steps = step.getSteps();
      for (var i = 0, l = steps.length; i < l; i++) {
        this.addStep(steps[i]);
      }

      return this;
    } else {
      run = step.run.bind(step);
    }

    this.steps.push(run);

    return this;
  };

  Pipeline.prototype.run = function run(instruction) {
    var index = -1;
    var steps = this.steps;

    function next() {
      index++;

      if (index < steps.length) {
        var currentStep = steps[index];

        try {
          return currentStep(instruction, next);
        } catch (e) {
          return next.reject(e);
        }
      } else {
        return next.complete();
      }
    }

    next.complete = createCompletionHandler(next, pipelineStatus.completed);
    next.cancel = createCompletionHandler(next, pipelineStatus.canceled);
    next.reject = createCompletionHandler(next, pipelineStatus.rejected);

    return next();
  };

  return Pipeline;
}();

function createCompletionHandler(next, status) {
  return function (output) {
    return Promise.resolve({ status: status, output: output, completed: status === pipelineStatus.completed });
  };
}

var CommitChangesStep = function () {
  function CommitChangesStep() {
    
  }

  CommitChangesStep.prototype.run = function run(navigationInstruction, next) {
    return navigationInstruction._commitChanges(true).then(function () {
      navigationInstruction._updateTitle();
      return next();
    });
  };

  return CommitChangesStep;
}();

var NavigationInstruction = function () {
  function NavigationInstruction(init) {
    

    this.plan = null;
    this.options = {};

    Object.assign(this, init);

    this.params = this.params || {};
    this.viewPortInstructions = {};

    var ancestorParams = [];
    var current = this;
    do {
      var currentParams = Object.assign({}, current.params);
      if (current.config && current.config.hasChildRouter) {
        delete currentParams[current.getWildCardName()];
      }

      ancestorParams.unshift(currentParams);
      current = current.parentInstruction;
    } while (current);

    var allParams = Object.assign.apply(Object, [{}, this.queryParams].concat(ancestorParams));
    this.lifecycleArgs = [allParams, this.config, this];
  }

  NavigationInstruction.prototype.getAllInstructions = function getAllInstructions() {
    var instructions = [this];
    for (var key in this.viewPortInstructions) {
      var childInstruction = this.viewPortInstructions[key].childNavigationInstruction;
      if (childInstruction) {
        instructions.push.apply(instructions, childInstruction.getAllInstructions());
      }
    }

    return instructions;
  };

  NavigationInstruction.prototype.getAllPreviousInstructions = function getAllPreviousInstructions() {
    return this.getAllInstructions().map(function (c) {
      return c.previousInstruction;
    }).filter(function (c) {
      return c;
    });
  };

  NavigationInstruction.prototype.addViewPortInstruction = function addViewPortInstruction(viewPortName, strategy, moduleId, component) {
    var config = Object.assign({}, this.lifecycleArgs[1], { currentViewPort: viewPortName });
    var viewportInstruction = this.viewPortInstructions[viewPortName] = {
      name: viewPortName,
      strategy: strategy,
      moduleId: moduleId,
      component: component,
      childRouter: component.childRouter,
      lifecycleArgs: [].concat(this.lifecycleArgs[0], config, this.lifecycleArgs[2])
    };

    return viewportInstruction;
  };

  NavigationInstruction.prototype.getWildCardName = function getWildCardName() {
    var wildcardIndex = this.config.route.lastIndexOf('*');
    return this.config.route.substr(wildcardIndex + 1);
  };

  NavigationInstruction.prototype.getWildcardPath = function getWildcardPath() {
    var wildcardName = this.getWildCardName();
    var path = this.params[wildcardName] || '';

    if (this.queryString) {
      path += '?' + this.queryString;
    }

    return path;
  };

  NavigationInstruction.prototype.getBaseUrl = function getBaseUrl() {
    var _this = this;

    var fragment = decodeURI(this.fragment);

    if (fragment === '') {
      var nonEmptyRoute = this.router.routes.find(function (route) {
        return route.name === _this.config.name && route.route !== '';
      });
      if (nonEmptyRoute) {
        fragment = nonEmptyRoute.route;
      }
    }

    if (!this.params) {
      return encodeURI(fragment);
    }

    var wildcardName = this.getWildCardName();
    var path = this.params[wildcardName] || '';

    if (!path) {
      return encodeURI(fragment);
    }

    return encodeURI(fragment.substr(0, fragment.lastIndexOf(path)));
  };

  NavigationInstruction.prototype._commitChanges = function _commitChanges(waitToSwap) {
    var _this2 = this;

    var router = this.router;
    router.currentInstruction = this;

    if (this.previousInstruction) {
      this.previousInstruction.config.navModel.isActive = false;
    }

    this.config.navModel.isActive = true;

    router._refreshBaseUrl();
    router.refreshNavigation();

    var loads = [];
    var delaySwaps = [];

    var _loop = function _loop(viewPortName) {
      var viewPortInstruction = _this2.viewPortInstructions[viewPortName];
      var viewPort = router.viewPorts[viewPortName];

      if (!viewPort) {
        throw new Error('There was no router-view found in the view for ' + viewPortInstruction.moduleId + '.');
      }

      if (viewPortInstruction.strategy === activationStrategy.replace) {
        if (viewPortInstruction.childNavigationInstruction && viewPortInstruction.childNavigationInstruction.parentCatchHandler) {
          loads.push(viewPortInstruction.childNavigationInstruction._commitChanges());
        } else {
          if (waitToSwap) {
            delaySwaps.push({ viewPort: viewPort, viewPortInstruction: viewPortInstruction });
          }
          loads.push(viewPort.process(viewPortInstruction, waitToSwap).then(function (x) {
            if (viewPortInstruction.childNavigationInstruction) {
              return viewPortInstruction.childNavigationInstruction._commitChanges();
            }

            return undefined;
          }));
        }
      } else {
        if (viewPortInstruction.childNavigationInstruction) {
          loads.push(viewPortInstruction.childNavigationInstruction._commitChanges(waitToSwap));
        }
      }
    };

    for (var viewPortName in this.viewPortInstructions) {
      _loop(viewPortName);
    }

    return Promise.all(loads).then(function () {
      delaySwaps.forEach(function (x) {
        return x.viewPort.swap(x.viewPortInstruction);
      });
      return null;
    }).then(function () {
      return prune(_this2);
    });
  };

  NavigationInstruction.prototype._updateTitle = function _updateTitle() {
    var title = this._buildTitle();
    if (title) {
      this.router.history.setTitle(title);
    }
  };

  NavigationInstruction.prototype._buildTitle = function _buildTitle() {
    var separator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ' | ';

    var title = '';
    var childTitles = [];

    if (this.config.navModel.title) {
      title = this.router.transformTitle(this.config.navModel.title);
    }

    for (var viewPortName in this.viewPortInstructions) {
      var _viewPortInstruction = this.viewPortInstructions[viewPortName];

      if (_viewPortInstruction.childNavigationInstruction) {
        var childTitle = _viewPortInstruction.childNavigationInstruction._buildTitle(separator);
        if (childTitle) {
          childTitles.push(childTitle);
        }
      }
    }

    if (childTitles.length) {
      title = childTitles.join(separator) + (title ? separator : '') + title;
    }

    if (this.router.title) {
      title += (title ? separator : '') + this.router.transformTitle(this.router.title);
    }

    return title;
  };

  return NavigationInstruction;
}();

function prune(instruction) {
  instruction.previousInstruction = null;
  instruction.plan = null;
}

var NavModel = function () {
  function NavModel(router, relativeHref) {
    

    this.isActive = false;
    this.title = null;
    this.href = null;
    this.relativeHref = null;
    this.settings = {};
    this.config = null;

    this.router = router;
    this.relativeHref = relativeHref;
  }

  NavModel.prototype.setTitle = function setTitle(title) {
    this.title = title;

    if (this.isActive) {
      this.router.updateTitle();
    }
  };

  return NavModel;
}();

function isNavigationCommand(obj) {
  return obj && typeof obj.navigate === 'function';
}

var Redirect = function () {
  function Redirect(url) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    

    this.url = url;
    this.options = Object.assign({ trigger: true, replace: true }, options);
    this.shouldContinueProcessing = false;
  }

  Redirect.prototype.setRouter = function setRouter(router) {
    this.router = router;
  };

  Redirect.prototype.navigate = function navigate(appRouter) {
    var navigatingRouter = this.options.useAppRouter ? appRouter : this.router || appRouter;
    navigatingRouter.navigate(this.url, this.options);
  };

  return Redirect;
}();

var RedirectToRoute = function () {
  function RedirectToRoute(route) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    

    this.route = route;
    this.params = params;
    this.options = Object.assign({ trigger: true, replace: true }, options);
    this.shouldContinueProcessing = false;
  }

  RedirectToRoute.prototype.setRouter = function setRouter(router) {
    this.router = router;
  };

  RedirectToRoute.prototype.navigate = function navigate(appRouter) {
    var navigatingRouter = this.options.useAppRouter ? appRouter : this.router || appRouter;
    navigatingRouter.navigateToRoute(this.route, this.params, this.options);
  };

  return RedirectToRoute;
}();

var RouterConfiguration = function () {
  function RouterConfiguration() {
    

    this.instructions = [];
    this.options = {};
    this.pipelineSteps = [];
  }

  RouterConfiguration.prototype.addPipelineStep = function addPipelineStep(name, step) {
    this.pipelineSteps.push({ name: name, step: step });
    return this;
  };

  RouterConfiguration.prototype.addAuthorizeStep = function addAuthorizeStep(step) {
    return this.addPipelineStep('authorize', step);
  };

  RouterConfiguration.prototype.addPreActivateStep = function addPreActivateStep(step) {
    return this.addPipelineStep('preActivate', step);
  };

  RouterConfiguration.prototype.addPreRenderStep = function addPreRenderStep(step) {
    return this.addPipelineStep('preRender', step);
  };

  RouterConfiguration.prototype.addPostRenderStep = function addPostRenderStep(step) {
    return this.addPipelineStep('postRender', step);
  };

  RouterConfiguration.prototype.fallbackRoute = function fallbackRoute(fragment) {
    this._fallbackRoute = fragment;
    return this;
  };

  RouterConfiguration.prototype.map = function map(route) {
    if (Array.isArray(route)) {
      route.forEach(this.map.bind(this));
      return this;
    }

    return this.mapRoute(route);
  };

  RouterConfiguration.prototype.mapRoute = function mapRoute(config) {
    this.instructions.push(function (router) {
      var routeConfigs = [];

      if (Array.isArray(config.route)) {
        for (var i = 0, ii = config.route.length; i < ii; ++i) {
          var _current = Object.assign({}, config);
          _current.route = config.route[i];
          routeConfigs.push(_current);
        }
      } else {
        routeConfigs.push(Object.assign({}, config));
      }

      var navModel = void 0;
      for (var _i = 0, _ii = routeConfigs.length; _i < _ii; ++_i) {
        var _routeConfig = routeConfigs[_i];
        _routeConfig.settings = _routeConfig.settings || {};
        if (!navModel) {
          navModel = router.createNavModel(_routeConfig);
        }

        router.addRoute(_routeConfig, navModel);
      }
    });

    return this;
  };

  RouterConfiguration.prototype.mapUnknownRoutes = function mapUnknownRoutes(config) {
    this.unknownRouteConfig = config;
    return this;
  };

  RouterConfiguration.prototype.exportToRouter = function exportToRouter(router) {
    var instructions = this.instructions;
    for (var i = 0, ii = instructions.length; i < ii; ++i) {
      instructions[i](router);
    }

    if (this.title) {
      router.title = this.title;
    }

    if (this.unknownRouteConfig) {
      router.handleUnknownRoutes(this.unknownRouteConfig);
    }

    if (this._fallbackRoute) {
      router.fallbackRoute = this._fallbackRoute;
    }

    router.options = this.options;

    var pipelineSteps = this.pipelineSteps;
    if (pipelineSteps.length) {
      if (!router.isRoot) {
        throw new Error('Pipeline steps can only be added to the root router');
      }

      var pipelineProvider = router.pipelineProvider;
      for (var _i2 = 0, _ii2 = pipelineSteps.length; _i2 < _ii2; ++_i2) {
        var _pipelineSteps$_i = pipelineSteps[_i2],
            _name = _pipelineSteps$_i.name,
            step = _pipelineSteps$_i.step;

        pipelineProvider.addStep(_name, step);
      }
    }
  };

  return RouterConfiguration;
}();

var activationStrategy = {
  noChange: 'no-change',
  invokeLifecycle: 'invoke-lifecycle',
  replace: 'replace'
};

var BuildNavigationPlanStep = function () {
  function BuildNavigationPlanStep() {
    
  }

  BuildNavigationPlanStep.prototype.run = function run(navigationInstruction, next) {
    return _buildNavigationPlan(navigationInstruction).then(function (plan) {
      navigationInstruction.plan = plan;
      return next();
    }).catch(next.cancel);
  };

  return BuildNavigationPlanStep;
}();

function _buildNavigationPlan(instruction, forceLifecycleMinimum) {
  var prev = instruction.previousInstruction;
  var config = instruction.config;
  var plan = {};

  if ('redirect' in config) {
    var redirectLocation = _resolveUrl(config.redirect, getInstructionBaseUrl(instruction));
    if (instruction.queryString) {
      redirectLocation += '?' + instruction.queryString;
    }

    return Promise.reject(new Redirect(redirectLocation));
  }

  if (prev) {
    var newParams = hasDifferentParameterValues(prev, instruction);
    var pending = [];

    var _loop2 = function _loop2(viewPortName) {
      var prevViewPortInstruction = prev.viewPortInstructions[viewPortName];
      var nextViewPortConfig = config.viewPorts[viewPortName];

      if (!nextViewPortConfig) throw new Error('Invalid Route Config: Configuration for viewPort "' + viewPortName + '" was not found for route: "' + instruction.config.route + '."');

      var viewPortPlan = plan[viewPortName] = {
        name: viewPortName,
        config: nextViewPortConfig,
        prevComponent: prevViewPortInstruction.component,
        prevModuleId: prevViewPortInstruction.moduleId
      };

      if (prevViewPortInstruction.moduleId !== nextViewPortConfig.moduleId) {
        viewPortPlan.strategy = activationStrategy.replace;
      } else if ('determineActivationStrategy' in prevViewPortInstruction.component.viewModel) {
        var _prevViewPortInstruct;

        viewPortPlan.strategy = (_prevViewPortInstruct = prevViewPortInstruction.component.viewModel).determineActivationStrategy.apply(_prevViewPortInstruct, instruction.lifecycleArgs);
      } else if (config.activationStrategy) {
        viewPortPlan.strategy = config.activationStrategy;
      } else if (newParams || forceLifecycleMinimum) {
        viewPortPlan.strategy = activationStrategy.invokeLifecycle;
      } else {
        viewPortPlan.strategy = activationStrategy.noChange;
      }

      if (viewPortPlan.strategy !== activationStrategy.replace && prevViewPortInstruction.childRouter) {
        var path = instruction.getWildcardPath();
        var task = prevViewPortInstruction.childRouter._createNavigationInstruction(path, instruction).then(function (childInstruction) {
          viewPortPlan.childNavigationInstruction = childInstruction;

          return _buildNavigationPlan(childInstruction, viewPortPlan.strategy === activationStrategy.invokeLifecycle).then(function (childPlan) {
            childInstruction.plan = childPlan;
          });
        });

        pending.push(task);
      }
    };

    for (var viewPortName in prev.viewPortInstructions) {
      _loop2(viewPortName);
    }

    return Promise.all(pending).then(function () {
      return plan;
    });
  }

  for (var viewPortName in config.viewPorts) {
    plan[viewPortName] = {
      name: viewPortName,
      strategy: activationStrategy.replace,
      config: instruction.config.viewPorts[viewPortName]
    };
  }

  return Promise.resolve(plan);
}

function hasDifferentParameterValues(prev, next) {
  var prevParams = prev.params;
  var nextParams = next.params;
  var nextWildCardName = next.config.hasChildRouter ? next.getWildCardName() : null;

  for (var key in nextParams) {
    if (key === nextWildCardName) {
      continue;
    }

    if (prevParams[key] !== nextParams[key]) {
      return true;
    }
  }

  for (var _key in prevParams) {
    if (_key === nextWildCardName) {
      continue;
    }

    if (prevParams[_key] !== nextParams[_key]) {
      return true;
    }
  }

  if (!next.options.compareQueryParams) {
    return false;
  }

  var prevQueryParams = prev.queryParams;
  var nextQueryParams = next.queryParams;
  for (var _key2 in nextQueryParams) {
    if (prevQueryParams[_key2] !== nextQueryParams[_key2]) {
      return true;
    }
  }

  for (var _key3 in prevQueryParams) {
    if (prevQueryParams[_key3] !== nextQueryParams[_key3]) {
      return true;
    }
  }

  return false;
}

function getInstructionBaseUrl(instruction) {
  var instructionBaseUrlParts = [];
  instruction = instruction.parentInstruction;

  while (instruction) {
    instructionBaseUrlParts.unshift(instruction.getBaseUrl());
    instruction = instruction.parentInstruction;
  }

  instructionBaseUrlParts.unshift('/');
  return instructionBaseUrlParts.join('');
}

var Router = function () {
  function Router(container, history) {
    var _this3 = this;

    

    this.parent = null;
    this.options = {};

    this.transformTitle = function (title) {
      if (_this3.parent) {
        return _this3.parent.transformTitle(title);
      }
      return title;
    };

    this.container = container;
    this.history = history;
    this.reset();
  }

  Router.prototype.reset = function reset() {
    var _this4 = this;

    this.viewPorts = {};
    this.routes = [];
    this.baseUrl = '';
    this.isConfigured = false;
    this.isNavigating = false;
    this.isExplicitNavigation = false;
    this.isExplicitNavigationBack = false;
    this.navigation = [];
    this.currentInstruction = null;
    this._fallbackOrder = 100;
    this._recognizer = new __WEBPACK_IMPORTED_MODULE_1_aurelia_route_recognizer__["a" /* RouteRecognizer */]();
    this._childRecognizer = new __WEBPACK_IMPORTED_MODULE_1_aurelia_route_recognizer__["a" /* RouteRecognizer */]();
    this._configuredPromise = new Promise(function (resolve) {
      _this4._resolveConfiguredPromise = resolve;
    });
  };

  Router.prototype.registerViewPort = function registerViewPort(viewPort, name) {
    name = name || 'default';
    this.viewPorts[name] = viewPort;
  };

  Router.prototype.ensureConfigured = function ensureConfigured() {
    return this._configuredPromise;
  };

  Router.prototype.configure = function configure(callbackOrConfig) {
    var _this5 = this;

    this.isConfigured = true;

    var result = callbackOrConfig;
    var config = void 0;
    if (typeof callbackOrConfig === 'function') {
      config = new RouterConfiguration();
      result = callbackOrConfig(config);
    }

    return Promise.resolve(result).then(function (c) {
      if (c && c.exportToRouter) {
        config = c;
      }

      config.exportToRouter(_this5);
      _this5.isConfigured = true;
      _this5._resolveConfiguredPromise();
    });
  };

  Router.prototype.navigate = function navigate(fragment, options) {
    if (!this.isConfigured && this.parent) {
      return this.parent.navigate(fragment, options);
    }

    this.isExplicitNavigation = true;
    return this.history.navigate(_resolveUrl(fragment, this.baseUrl, this.history._hasPushState), options);
  };

  Router.prototype.navigateToRoute = function navigateToRoute(route, params, options) {
    var path = this.generate(route, params);
    return this.navigate(path, options);
  };

  Router.prototype.navigateBack = function navigateBack() {
    this.isExplicitNavigationBack = true;
    this.history.navigateBack();
  };

  Router.prototype.createChild = function createChild(container) {
    var childRouter = new Router(container || this.container.createChild(), this.history);
    childRouter.parent = this;
    return childRouter;
  };

  Router.prototype.generate = function generate(name, params) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var hasRoute = this._recognizer.hasRoute(name);
    if ((!this.isConfigured || !hasRoute) && this.parent) {
      return this.parent.generate(name, params);
    }

    if (!hasRoute) {
      throw new Error('A route with name \'' + name + '\' could not be found. Check that `name: \'' + name + '\'` was specified in the route\'s config.');
    }

    var path = this._recognizer.generate(name, params);
    var rootedPath = _createRootedPath(path, this.baseUrl, this.history._hasPushState, options.absolute);
    return options.absolute ? '' + this.history.getAbsoluteRoot() + rootedPath : rootedPath;
  };

  Router.prototype.createNavModel = function createNavModel(config) {
    var navModel = new NavModel(this, 'href' in config ? config.href : config.route);
    navModel.title = config.title;
    navModel.order = config.nav;
    navModel.href = config.href;
    navModel.settings = config.settings;
    navModel.config = config;

    return navModel;
  };

  Router.prototype.addRoute = function addRoute(config, navModel) {
    validateRouteConfig(config, this.routes);

    if (!('viewPorts' in config) && !config.navigationStrategy) {
      config.viewPorts = {
        'default': {
          moduleId: config.moduleId,
          view: config.view
        }
      };
    }

    if (!navModel) {
      navModel = this.createNavModel(config);
    }

    this.routes.push(config);

    var path = config.route;
    if (path.charAt(0) === '/') {
      path = path.substr(1);
    }
    var caseSensitive = config.caseSensitive === true;
    var state = this._recognizer.add({ path: path, handler: config, caseSensitive: caseSensitive });

    if (path) {
      var _settings = config.settings;
      delete config.settings;
      var withChild = JSON.parse(JSON.stringify(config));
      config.settings = _settings;
      withChild.route = path + '/*childRoute';
      withChild.hasChildRouter = true;
      this._childRecognizer.add({
        path: withChild.route,
        handler: withChild,
        caseSensitive: caseSensitive
      });

      withChild.navModel = navModel;
      withChild.settings = config.settings;
      withChild.navigationStrategy = config.navigationStrategy;
    }

    config.navModel = navModel;

    if ((navModel.order || navModel.order === 0) && this.navigation.indexOf(navModel) === -1) {
      if (!navModel.href && navModel.href !== '' && (state.types.dynamics || state.types.stars)) {
        throw new Error('Invalid route config for "' + config.route + '" : dynamic routes must specify an "href:" to be included in the navigation model.');
      }

      if (typeof navModel.order !== 'number') {
        navModel.order = ++this._fallbackOrder;
      }

      this.navigation.push(navModel);
      this.navigation = this.navigation.sort(function (a, b) {
        return a.order - b.order;
      });
    }
  };

  Router.prototype.hasRoute = function hasRoute(name) {
    return !!(this._recognizer.hasRoute(name) || this.parent && this.parent.hasRoute(name));
  };

  Router.prototype.hasOwnRoute = function hasOwnRoute(name) {
    return this._recognizer.hasRoute(name);
  };

  Router.prototype.handleUnknownRoutes = function handleUnknownRoutes(config) {
    var _this6 = this;

    if (!config) {
      throw new Error('Invalid unknown route handler');
    }

    this.catchAllHandler = function (instruction) {
      return _this6._createRouteConfig(config, instruction).then(function (c) {
        instruction.config = c;
        return instruction;
      });
    };
  };

  Router.prototype.updateTitle = function updateTitle() {
    if (this.parent) {
      return this.parent.updateTitle();
    }

    if (this.currentInstruction) {
      this.currentInstruction._updateTitle();
    }
    return undefined;
  };

  Router.prototype.refreshNavigation = function refreshNavigation() {
    var nav = this.navigation;

    for (var i = 0, length = nav.length; i < length; i++) {
      var _current2 = nav[i];
      if (!_current2.config.href) {
        _current2.href = _createRootedPath(_current2.relativeHref, this.baseUrl, this.history._hasPushState);
      } else {
        _current2.href = _normalizeAbsolutePath(_current2.config.href, this.history._hasPushState);
      }
    }
  };

  Router.prototype._refreshBaseUrl = function _refreshBaseUrl() {
    if (this.parent) {
      var baseUrl = this.parent.currentInstruction.getBaseUrl();
      this.baseUrl = this.parent.baseUrl + baseUrl;
    }
  };

  Router.prototype._createNavigationInstruction = function _createNavigationInstruction() {
    var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var parentInstruction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    var fragment = url;
    var queryString = '';

    var queryIndex = url.indexOf('?');
    if (queryIndex !== -1) {
      fragment = url.substr(0, queryIndex);
      queryString = url.substr(queryIndex + 1);
    }

    var results = this._recognizer.recognize(url);
    if (!results || !results.length) {
      results = this._childRecognizer.recognize(url);
    }

    var instructionInit = {
      fragment: fragment,
      queryString: queryString,
      config: null,
      parentInstruction: parentInstruction,
      previousInstruction: this.currentInstruction,
      router: this,
      options: {
        compareQueryParams: this.options.compareQueryParams
      }
    };

    if (results && results.length) {
      var first = results[0];
      var _instruction = new NavigationInstruction(Object.assign({}, instructionInit, {
        params: first.params,
        queryParams: first.queryParams || results.queryParams,
        config: first.config || first.handler
      }));

      if (typeof first.handler === 'function') {
        return evaluateNavigationStrategy(_instruction, first.handler, first);
      } else if (first.handler && typeof first.handler.navigationStrategy === 'function') {
        return evaluateNavigationStrategy(_instruction, first.handler.navigationStrategy, first.handler);
      }

      return Promise.resolve(_instruction);
    } else if (this.catchAllHandler) {
      var _instruction2 = new NavigationInstruction(Object.assign({}, instructionInit, {
        params: { path: fragment },
        queryParams: results ? results.queryParams : {},
        config: null }));

      return evaluateNavigationStrategy(_instruction2, this.catchAllHandler);
    } else if (this.parent) {
      var _router = this._parentCatchAllHandler(this.parent);

      if (_router) {
        var newParentInstruction = this._findParentInstructionFromRouter(_router, parentInstruction);

        var _instruction3 = new NavigationInstruction(Object.assign({}, instructionInit, {
          params: { path: fragment },
          queryParams: results ? results.queryParams : {},
          router: _router,
          parentInstruction: newParentInstruction,
          parentCatchHandler: true,
          config: null }));

        return evaluateNavigationStrategy(_instruction3, _router.catchAllHandler);
      }
    }

    return Promise.reject(new Error('Route not found: ' + url));
  };

  Router.prototype._findParentInstructionFromRouter = function _findParentInstructionFromRouter(router, instruction) {
    if (instruction.router === router) {
      instruction.fragment = router.baseUrl;
      return instruction;
    } else if (instruction.parentInstruction) {
      return this._findParentInstructionFromRouter(router, instruction.parentInstruction);
    }
    return undefined;
  };

  Router.prototype._parentCatchAllHandler = function _parentCatchAllHandler(router) {
    if (router.catchAllHandler) {
      return router;
    } else if (router.parent) {
      return this._parentCatchAllHandler(router.parent);
    }
    return false;
  };

  Router.prototype._createRouteConfig = function _createRouteConfig(config, instruction) {
    var _this7 = this;

    return Promise.resolve(config).then(function (c) {
      if (typeof c === 'string') {
        return { moduleId: c };
      } else if (typeof c === 'function') {
        return c(instruction);
      }

      return c;
    }).then(function (c) {
      return typeof c === 'string' ? { moduleId: c } : c;
    }).then(function (c) {
      c.route = instruction.params.path;
      validateRouteConfig(c, _this7.routes);

      if (!c.navModel) {
        c.navModel = _this7.createNavModel(c);
      }

      return c;
    });
  };

  _createClass(Router, [{
    key: 'isRoot',
    get: function get() {
      return !this.parent;
    }
  }]);

  return Router;
}();

function validateRouteConfig(config, routes) {
  if ((typeof config === 'undefined' ? 'undefined' : _typeof(config)) !== 'object') {
    throw new Error('Invalid Route Config');
  }

  if (typeof config.route !== 'string') {
    var _name2 = config.name || '(no name)';
    throw new Error('Invalid Route Config for "' + _name2 + '": You must specify a "route:" pattern.');
  }

  if (!('redirect' in config || config.moduleId || config.navigationStrategy || config.viewPorts)) {
    throw new Error('Invalid Route Config for "' + config.route + '": You must specify a "moduleId:", "redirect:", "navigationStrategy:", or "viewPorts:".');
  }
}

function evaluateNavigationStrategy(instruction, evaluator, context) {
  return Promise.resolve(evaluator.call(context, instruction)).then(function () {
    if (!('viewPorts' in instruction.config)) {
      instruction.config.viewPorts = {
        'default': {
          moduleId: instruction.config.moduleId
        }
      };
    }

    return instruction;
  });
}

var CanDeactivatePreviousStep = function () {
  function CanDeactivatePreviousStep() {
    
  }

  CanDeactivatePreviousStep.prototype.run = function run(navigationInstruction, next) {
    return processDeactivatable(navigationInstruction, 'canDeactivate', next);
  };

  return CanDeactivatePreviousStep;
}();

var CanActivateNextStep = function () {
  function CanActivateNextStep() {
    
  }

  CanActivateNextStep.prototype.run = function run(navigationInstruction, next) {
    return processActivatable(navigationInstruction, 'canActivate', next);
  };

  return CanActivateNextStep;
}();

var DeactivatePreviousStep = function () {
  function DeactivatePreviousStep() {
    
  }

  DeactivatePreviousStep.prototype.run = function run(navigationInstruction, next) {
    return processDeactivatable(navigationInstruction, 'deactivate', next, true);
  };

  return DeactivatePreviousStep;
}();

var ActivateNextStep = function () {
  function ActivateNextStep() {
    
  }

  ActivateNextStep.prototype.run = function run(navigationInstruction, next) {
    return processActivatable(navigationInstruction, 'activate', next, true);
  };

  return ActivateNextStep;
}();

function processDeactivatable(navigationInstruction, callbackName, next, ignoreResult) {
  var plan = navigationInstruction.plan;
  var infos = findDeactivatable(plan, callbackName);
  var i = infos.length;

  function inspect(val) {
    if (ignoreResult || shouldContinue(val)) {
      return iterate();
    }

    return next.cancel(val);
  }

  function iterate() {
    if (i--) {
      try {
        var viewModel = infos[i];
        var _result = viewModel[callbackName](navigationInstruction);
        return processPotential(_result, inspect, next.cancel);
      } catch (error) {
        return next.cancel(error);
      }
    }

    return next();
  }

  return iterate();
}

function findDeactivatable(plan, callbackName) {
  var list = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  for (var viewPortName in plan) {
    var _viewPortPlan = plan[viewPortName];
    var prevComponent = _viewPortPlan.prevComponent;

    if ((_viewPortPlan.strategy === activationStrategy.invokeLifecycle || _viewPortPlan.strategy === activationStrategy.replace) && prevComponent) {
      var viewModel = prevComponent.viewModel;

      if (callbackName in viewModel) {
        list.push(viewModel);
      }
    }

    if (_viewPortPlan.strategy === activationStrategy.replace && prevComponent) {
      addPreviousDeactivatable(prevComponent, callbackName, list);
    } else if (_viewPortPlan.childNavigationInstruction) {
      findDeactivatable(_viewPortPlan.childNavigationInstruction.plan, callbackName, list);
    }
  }

  return list;
}

function addPreviousDeactivatable(component, callbackName, list) {
  var childRouter = component.childRouter;

  if (childRouter && childRouter.currentInstruction) {
    var viewPortInstructions = childRouter.currentInstruction.viewPortInstructions;

    for (var viewPortName in viewPortInstructions) {
      var _viewPortInstruction2 = viewPortInstructions[viewPortName];
      var prevComponent = _viewPortInstruction2.component;
      var prevViewModel = prevComponent.viewModel;

      if (callbackName in prevViewModel) {
        list.push(prevViewModel);
      }

      addPreviousDeactivatable(prevComponent, callbackName, list);
    }
  }
}

function processActivatable(navigationInstruction, callbackName, next, ignoreResult) {
  var infos = findActivatable(navigationInstruction, callbackName);
  var length = infos.length;
  var i = -1;

  function inspect(val, router) {
    if (ignoreResult || shouldContinue(val, router)) {
      return iterate();
    }

    return next.cancel(val);
  }

  function iterate() {
    i++;

    if (i < length) {
      try {
        var _current3$viewModel;

        var _current3 = infos[i];
        var _result2 = (_current3$viewModel = _current3.viewModel)[callbackName].apply(_current3$viewModel, _current3.lifecycleArgs);
        return processPotential(_result2, function (val) {
          return inspect(val, _current3.router);
        }, next.cancel);
      } catch (error) {
        return next.cancel(error);
      }
    }

    return next();
  }

  return iterate();
}

function findActivatable(navigationInstruction, callbackName) {
  var list = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var router = arguments[3];

  var plan = navigationInstruction.plan;

  Object.keys(plan).filter(function (viewPortName) {
    var viewPortPlan = plan[viewPortName];
    var viewPortInstruction = navigationInstruction.viewPortInstructions[viewPortName];
    var viewModel = viewPortInstruction.component.viewModel;

    if ((viewPortPlan.strategy === activationStrategy.invokeLifecycle || viewPortPlan.strategy === activationStrategy.replace) && callbackName in viewModel) {
      list.push({
        viewModel: viewModel,
        lifecycleArgs: viewPortInstruction.lifecycleArgs,
        router: router
      });
    }

    if (viewPortPlan.childNavigationInstruction) {
      findActivatable(viewPortPlan.childNavigationInstruction, callbackName, list, viewPortInstruction.component.childRouter || router);
    }
  });

  return list;
}

function shouldContinue(output, router) {
  if (output instanceof Error) {
    return false;
  }

  if (isNavigationCommand(output)) {
    if (typeof output.setRouter === 'function') {
      output.setRouter(router);
    }

    return !!output.shouldContinueProcessing;
  }

  if (output === undefined) {
    return true;
  }

  return output;
}

var SafeSubscription = function () {
  function SafeSubscription(subscriptionFunc) {
    

    this._subscribed = true;
    this._subscription = subscriptionFunc(this);

    if (!this._subscribed) this.unsubscribe();
  }

  SafeSubscription.prototype.unsubscribe = function unsubscribe() {
    if (this._subscribed && this._subscription) this._subscription.unsubscribe();

    this._subscribed = false;
  };

  _createClass(SafeSubscription, [{
    key: 'subscribed',
    get: function get() {
      return this._subscribed;
    }
  }]);

  return SafeSubscription;
}();

function processPotential(obj, resolve, reject) {
  if (obj && typeof obj.then === 'function') {
    return Promise.resolve(obj).then(resolve).catch(reject);
  }

  if (obj && typeof obj.subscribe === 'function') {
    var obs = obj;
    return new SafeSubscription(function (sub) {
      return obs.subscribe({
        next: function next() {
          if (sub.subscribed) {
            sub.unsubscribe();
            resolve(obj);
          }
        },
        error: function error(_error) {
          if (sub.subscribed) {
            sub.unsubscribe();
            reject(_error);
          }
        },
        complete: function complete() {
          if (sub.subscribed) {
            sub.unsubscribe();
            resolve(obj);
          }
        }
      });
    });
  }

  try {
    return resolve(obj);
  } catch (error) {
    return reject(error);
  }
}

var RouteLoader = function () {
  function RouteLoader() {
    
  }

  RouteLoader.prototype.loadRoute = function loadRoute(router, config, navigationInstruction) {
    throw Error('Route loaders must implement "loadRoute(router, config, navigationInstruction)".');
  };

  return RouteLoader;
}();

var LoadRouteStep = function () {
  LoadRouteStep.inject = function inject() {
    return [RouteLoader];
  };

  function LoadRouteStep(routeLoader) {
    

    this.routeLoader = routeLoader;
  }

  LoadRouteStep.prototype.run = function run(navigationInstruction, next) {
    return loadNewRoute(this.routeLoader, navigationInstruction).then(next).catch(next.cancel);
  };

  return LoadRouteStep;
}();

function loadNewRoute(routeLoader, navigationInstruction) {
  var toLoad = determineWhatToLoad(navigationInstruction);
  var loadPromises = toLoad.map(function (current) {
    return loadRoute(routeLoader, current.navigationInstruction, current.viewPortPlan);
  });

  return Promise.all(loadPromises);
}

function determineWhatToLoad(navigationInstruction) {
  var toLoad = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var plan = navigationInstruction.plan;

  for (var viewPortName in plan) {
    var _viewPortPlan2 = plan[viewPortName];

    if (_viewPortPlan2.strategy === activationStrategy.replace) {
      toLoad.push({ viewPortPlan: _viewPortPlan2, navigationInstruction: navigationInstruction });

      if (_viewPortPlan2.childNavigationInstruction) {
        determineWhatToLoad(_viewPortPlan2.childNavigationInstruction, toLoad);
      }
    } else {
      var _viewPortInstruction3 = navigationInstruction.addViewPortInstruction(viewPortName, _viewPortPlan2.strategy, _viewPortPlan2.prevModuleId, _viewPortPlan2.prevComponent);

      if (_viewPortPlan2.childNavigationInstruction) {
        _viewPortInstruction3.childNavigationInstruction = _viewPortPlan2.childNavigationInstruction;
        determineWhatToLoad(_viewPortPlan2.childNavigationInstruction, toLoad);
      }
    }
  }

  return toLoad;
}

function loadRoute(routeLoader, navigationInstruction, viewPortPlan) {
  var moduleId = viewPortPlan.config.moduleId;

  return loadComponent(routeLoader, navigationInstruction, viewPortPlan.config).then(function (component) {
    var viewPortInstruction = navigationInstruction.addViewPortInstruction(viewPortPlan.name, viewPortPlan.strategy, moduleId, component);

    var childRouter = component.childRouter;
    if (childRouter) {
      var path = navigationInstruction.getWildcardPath();

      return childRouter._createNavigationInstruction(path, navigationInstruction).then(function (childInstruction) {
        viewPortPlan.childNavigationInstruction = childInstruction;

        return _buildNavigationPlan(childInstruction).then(function (childPlan) {
          childInstruction.plan = childPlan;
          viewPortInstruction.childNavigationInstruction = childInstruction;

          return loadNewRoute(routeLoader, childInstruction);
        });
      });
    }

    return undefined;
  });
}

function loadComponent(routeLoader, navigationInstruction, config) {
  var router = navigationInstruction.router;
  var lifecycleArgs = navigationInstruction.lifecycleArgs;

  return routeLoader.loadRoute(router, config, navigationInstruction).then(function (component) {
    var viewModel = component.viewModel,
        childContainer = component.childContainer;

    component.router = router;
    component.config = config;

    if ('configureRouter' in viewModel) {
      var childRouter = childContainer.getChildRouter();
      component.childRouter = childRouter;

      return childRouter.configure(function (c) {
        return viewModel.configureRouter.apply(viewModel, [c, childRouter].concat(lifecycleArgs));
      }).then(function () {
        return component;
      });
    }

    return component;
  });
}

var PipelineSlot = function () {
  function PipelineSlot(container, name, alias) {
    

    this.steps = [];

    this.container = container;
    this.slotName = name;
    this.slotAlias = alias;
  }

  PipelineSlot.prototype.getSteps = function getSteps() {
    var _this8 = this;

    return this.steps.map(function (x) {
      return _this8.container.get(x);
    });
  };

  return PipelineSlot;
}();

var PipelineProvider = function () {
  PipelineProvider.inject = function inject() {
    return [__WEBPACK_IMPORTED_MODULE_2_aurelia_dependency_injection__["a" /* Container */]];
  };

  function PipelineProvider(container) {
    

    this.container = container;
    this.steps = [BuildNavigationPlanStep, CanDeactivatePreviousStep, LoadRouteStep, this._createPipelineSlot('authorize'), CanActivateNextStep, this._createPipelineSlot('preActivate', 'modelbind'), DeactivatePreviousStep, ActivateNextStep, this._createPipelineSlot('preRender', 'precommit'), CommitChangesStep, this._createPipelineSlot('postRender', 'postcomplete')];
  }

  PipelineProvider.prototype.createPipeline = function createPipeline() {
    var _this9 = this;

    var pipeline = new Pipeline();
    this.steps.forEach(function (step) {
      return pipeline.addStep(_this9.container.get(step));
    });
    return pipeline;
  };

  PipelineProvider.prototype._findStep = function _findStep(name) {
    return this.steps.find(function (x) {
      return x.slotName === name || x.slotAlias === name;
    });
  };

  PipelineProvider.prototype.addStep = function addStep(name, step) {
    var found = this._findStep(name);
    if (found) {
      if (!found.steps.includes(step)) {
        found.steps.push(step);
      }
    } else {
      throw new Error('Invalid pipeline slot name: ' + name + '.');
    }
  };

  PipelineProvider.prototype.removeStep = function removeStep(name, step) {
    var slot = this._findStep(name);
    if (slot) {
      slot.steps.splice(slot.steps.indexOf(step), 1);
    }
  };

  PipelineProvider.prototype._clearSteps = function _clearSteps() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    var slot = this._findStep(name);
    if (slot) {
      slot.steps = [];
    }
  };

  PipelineProvider.prototype.reset = function reset() {
    this._clearSteps('authorize');
    this._clearSteps('preActivate');
    this._clearSteps('preRender');
    this._clearSteps('postRender');
  };

  PipelineProvider.prototype._createPipelineSlot = function _createPipelineSlot(name, alias) {
    return new PipelineSlot(this.container, name, alias);
  };

  return PipelineProvider;
}();

var logger = __WEBPACK_IMPORTED_MODULE_0_aurelia_logging__["getLogger"]('app-router');

var AppRouter = function (_Router) {
  _inherits(AppRouter, _Router);

  AppRouter.inject = function inject() {
    return [__WEBPACK_IMPORTED_MODULE_2_aurelia_dependency_injection__["a" /* Container */], __WEBPACK_IMPORTED_MODULE_3_aurelia_history__["a" /* History */], PipelineProvider, __WEBPACK_IMPORTED_MODULE_4_aurelia_event_aggregator__["a" /* EventAggregator */]];
  };

  function AppRouter(container, history, pipelineProvider, events) {
    

    var _this10 = _possibleConstructorReturn(this, _Router.call(this, container, history));

    _this10.pipelineProvider = pipelineProvider;
    _this10.events = events;
    return _this10;
  }

  AppRouter.prototype.reset = function reset() {
    _Router.prototype.reset.call(this);
    this.maxInstructionCount = 10;
    if (!this._queue) {
      this._queue = [];
    } else {
      this._queue.length = 0;
    }
  };

  AppRouter.prototype.loadUrl = function loadUrl(url) {
    var _this11 = this;

    return this._createNavigationInstruction(url).then(function (instruction) {
      return _this11._queueInstruction(instruction);
    }).catch(function (error) {
      logger.error(error);
      restorePreviousLocation(_this11);
    });
  };

  AppRouter.prototype.registerViewPort = function registerViewPort(viewPort, name) {
    var _this12 = this;

    _Router.prototype.registerViewPort.call(this, viewPort, name);

    if (!this.isActive) {
      var viewModel = this._findViewModel(viewPort);
      if ('configureRouter' in viewModel) {
        if (!this.isConfigured) {
          var resolveConfiguredPromise = this._resolveConfiguredPromise;
          this._resolveConfiguredPromise = function () {};
          return this.configure(function (config) {
            return viewModel.configureRouter(config, _this12);
          }).then(function () {
            _this12.activate();
            resolveConfiguredPromise();
          });
        }
      } else {
        this.activate();
      }
    } else {
      this._dequeueInstruction();
    }

    return Promise.resolve();
  };

  AppRouter.prototype.activate = function activate(options) {
    if (this.isActive) {
      return;
    }

    this.isActive = true;
    this.options = Object.assign({ routeHandler: this.loadUrl.bind(this) }, this.options, options);
    this.history.activate(this.options);
    this._dequeueInstruction();
  };

  AppRouter.prototype.deactivate = function deactivate() {
    this.isActive = false;
    this.history.deactivate();
  };

  AppRouter.prototype._queueInstruction = function _queueInstruction(instruction) {
    var _this13 = this;

    return new Promise(function (resolve) {
      instruction.resolve = resolve;
      _this13._queue.unshift(instruction);
      _this13._dequeueInstruction();
    });
  };

  AppRouter.prototype._dequeueInstruction = function _dequeueInstruction() {
    var _this14 = this;

    var instructionCount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    return Promise.resolve().then(function () {
      if (_this14.isNavigating && !instructionCount) {
        return undefined;
      }

      var instruction = _this14._queue.shift();
      _this14._queue.length = 0;

      if (!instruction) {
        return undefined;
      }

      _this14.isNavigating = true;
      instruction.previousInstruction = _this14.currentInstruction;

      if (!instructionCount) {
        _this14.events.publish('router:navigation:processing', { instruction: instruction });
      } else if (instructionCount === _this14.maxInstructionCount - 1) {
        logger.error(instructionCount + 1 + ' navigation instructions have been attempted without success. Restoring last known good location.');
        restorePreviousLocation(_this14);
        return _this14._dequeueInstruction(instructionCount + 1);
      } else if (instructionCount > _this14.maxInstructionCount) {
        throw new Error('Maximum navigation attempts exceeded. Giving up.');
      }

      var pipeline = _this14.pipelineProvider.createPipeline();

      return pipeline.run(instruction).then(function (result) {
        return processResult(instruction, result, instructionCount, _this14);
      }).catch(function (error) {
        return { output: error instanceof Error ? error : new Error(error) };
      }).then(function (result) {
        return resolveInstruction(instruction, result, !!instructionCount, _this14);
      });
    });
  };

  AppRouter.prototype._findViewModel = function _findViewModel(viewPort) {
    if (this.container.viewModel) {
      return this.container.viewModel;
    }

    if (viewPort.container) {
      var container = viewPort.container;

      while (container) {
        if (container.viewModel) {
          this.container.viewModel = container.viewModel;
          return container.viewModel;
        }

        container = container.parent;
      }
    }

    return undefined;
  };

  return AppRouter;
}(Router);

function processResult(instruction, result, instructionCount, router) {
  if (!(result && 'completed' in result && 'output' in result)) {
    result = result || {};
    result.output = new Error('Expected router pipeline to return a navigation result, but got [' + JSON.stringify(result) + '] instead.');
  }

  var finalResult = null;
  if (isNavigationCommand(result.output)) {
    result.output.navigate(router);
  } else {
    finalResult = result;

    if (!result.completed) {
      if (result.output instanceof Error) {
        logger.error(result.output);
      }

      restorePreviousLocation(router);
    }
  }

  return router._dequeueInstruction(instructionCount + 1).then(function (innerResult) {
    return finalResult || innerResult || result;
  });
}

function resolveInstruction(instruction, result, isInnerInstruction, router) {
  instruction.resolve(result);

  var eventArgs = { instruction: instruction, result: result };
  if (!isInnerInstruction) {
    router.isNavigating = false;
    router.isExplicitNavigation = false;
    router.isExplicitNavigationBack = false;

    var eventName = void 0;

    if (result.output instanceof Error) {
      eventName = 'error';
    } else if (!result.completed) {
      eventName = 'canceled';
    } else {
      var _queryString = instruction.queryString ? '?' + instruction.queryString : '';
      router.history.previousLocation = instruction.fragment + _queryString;
      eventName = 'success';
    }

    router.events.publish('router:navigation:' + eventName, eventArgs);
    router.events.publish('router:navigation:complete', eventArgs);
  } else {
    router.events.publish('router:navigation:child:complete', eventArgs);
  }

  return result;
}

function restorePreviousLocation(router) {
  var previousLocation = router.history.previousLocation;
  if (previousLocation) {
    router.navigate(router.history.previousLocation, { trigger: false, replace: true });
  } else if (router.fallbackRoute) {
    router.navigate(router.fallbackRoute, { trigger: true, replace: true });
  } else {
    logger.error('Router navigation failed, and no previous location or fallbackRoute could be restored.');
  }
}

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return aureliaHideClassName; });
/* harmony export (immutable) */ __webpack_exports__["c"] = injectAureliaHideStyleAtHead;
/* harmony export (immutable) */ __webpack_exports__["b"] = injectAureliaHideStyleAtBoundary;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_pal__ = __webpack_require__(0);


var aureliaHideClassName = 'aurelia-hide';

var aureliaHideClass = '.' + aureliaHideClassName + ' { display:none !important; }';

function injectAureliaHideStyleAtHead() {
  __WEBPACK_IMPORTED_MODULE_0_aurelia_pal__["b" /* DOM */].injectStyles(aureliaHideClass);
}

function injectAureliaHideStyleAtBoundary(domBoundary) {
  if (__WEBPACK_IMPORTED_MODULE_0_aurelia_pal__["c" /* FEATURE */].shadowDOM && domBoundary && !domBoundary.hasAureliaHideStyle) {
    domBoundary.hasAureliaHideStyle = true;
    __WEBPACK_IMPORTED_MODULE_0_aurelia_pal__["b" /* DOM */].injectStyles(aureliaHideClass, domBoundary);
  }
}

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export json */
/* unused harmony export HttpClientConfiguration */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpClient; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };



function json(body) {
  return new Blob([JSON.stringify(body !== undefined ? body : {})], { type: 'application/json' });
}

var HttpClientConfiguration = function () {
  function HttpClientConfiguration() {
    

    this.baseUrl = '';
    this.defaults = {};
    this.interceptors = [];
  }

  HttpClientConfiguration.prototype.withBaseUrl = function withBaseUrl(baseUrl) {
    this.baseUrl = baseUrl;
    return this;
  };

  HttpClientConfiguration.prototype.withDefaults = function withDefaults(defaults) {
    this.defaults = defaults;
    return this;
  };

  HttpClientConfiguration.prototype.withInterceptor = function withInterceptor(interceptor) {
    this.interceptors.push(interceptor);
    return this;
  };

  HttpClientConfiguration.prototype.useStandardConfiguration = function useStandardConfiguration() {
    var standardConfig = { credentials: 'same-origin' };
    Object.assign(this.defaults, standardConfig, this.defaults);
    return this.rejectErrorResponses();
  };

  HttpClientConfiguration.prototype.rejectErrorResponses = function rejectErrorResponses() {
    return this.withInterceptor({ response: rejectOnError });
  };

  return HttpClientConfiguration;
}();

function rejectOnError(response) {
  if (!response.ok) {
    throw response;
  }

  return response;
}

var HttpClient = function () {
  function HttpClient() {
    

    this.activeRequestCount = 0;
    this.isRequesting = false;
    this.isConfigured = false;
    this.baseUrl = '';
    this.defaults = null;
    this.interceptors = [];

    if (typeof fetch === 'undefined') {
      throw new Error('HttpClient requires a Fetch API implementation, but the current environment doesn\'t support it. You may need to load a polyfill such as https://github.com/github/fetch');
    }
  }

  HttpClient.prototype.configure = function configure(config) {
    var normalizedConfig = void 0;

    if ((typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object') {
      normalizedConfig = { defaults: config };
    } else if (typeof config === 'function') {
      normalizedConfig = new HttpClientConfiguration();
      normalizedConfig.baseUrl = this.baseUrl;
      normalizedConfig.defaults = Object.assign({}, this.defaults);
      normalizedConfig.interceptors = this.interceptors;

      var c = config(normalizedConfig);
      if (HttpClientConfiguration.prototype.isPrototypeOf(c)) {
        normalizedConfig = c;
      }
    } else {
      throw new Error('invalid config');
    }

    var defaults = normalizedConfig.defaults;
    if (defaults && Headers.prototype.isPrototypeOf(defaults.headers)) {
      throw new Error('Default headers must be a plain object.');
    }

    this.baseUrl = normalizedConfig.baseUrl;
    this.defaults = defaults;
    this.interceptors = normalizedConfig.interceptors || [];
    this.isConfigured = true;

    return this;
  };

  HttpClient.prototype.fetch = function (_fetch) {
    function fetch(_x, _x2) {
      return _fetch.apply(this, arguments);
    }

    fetch.toString = function () {
      return _fetch.toString();
    };

    return fetch;
  }(function (input, init) {
    var _this = this;

    trackRequestStart.call(this);

    var request = Promise.resolve().then(function () {
      return buildRequest.call(_this, input, init, _this.defaults);
    });
    var promise = processRequest(request, this.interceptors).then(function (result) {
      var response = null;

      if (Response.prototype.isPrototypeOf(result)) {
        response = result;
      } else if (Request.prototype.isPrototypeOf(result)) {
        request = Promise.resolve(result);
        response = fetch(result);
      } else {
        throw new Error('An invalid result was returned by the interceptor chain. Expected a Request or Response instance, but got [' + result + ']');
      }

      return request.then(function (_request) {
        return processResponse(response, _this.interceptors, _request);
      });
    });

    return trackRequestEndWith.call(this, promise);
  });

  return HttpClient;
}();

var absoluteUrlRegexp = /^([a-z][a-z0-9+\-.]*:)?\/\//i;

function trackRequestStart() {
  this.isRequesting = !! ++this.activeRequestCount;
}

function trackRequestEnd() {
  this.isRequesting = !! --this.activeRequestCount;
}

function trackRequestEndWith(promise) {
  var handle = trackRequestEnd.bind(this);
  promise.then(handle, handle);
  return promise;
}

function parseHeaderValues(headers) {
  var parsedHeaders = {};
  for (var name in headers || {}) {
    if (headers.hasOwnProperty(name)) {
      parsedHeaders[name] = typeof headers[name] === 'function' ? headers[name]() : headers[name];
    }
  }
  return parsedHeaders;
}

function buildRequest(input, init) {
  var defaults = this.defaults || {};
  var request = void 0;
  var body = void 0;
  var requestContentType = void 0;

  var parsedDefaultHeaders = parseHeaderValues(defaults.headers);
  if (Request.prototype.isPrototypeOf(input)) {
    request = input;
    requestContentType = new Headers(request.headers).get('Content-Type');
  } else {
    init || (init = {});
    body = init.body;
    var bodyObj = body ? { body: body } : null;
    var requestInit = Object.assign({}, defaults, { headers: {} }, init, bodyObj);
    requestContentType = new Headers(requestInit.headers).get('Content-Type');
    request = new Request(getRequestUrl(this.baseUrl, input), requestInit);
  }
  if (!requestContentType && new Headers(parsedDefaultHeaders).has('content-type')) {
    request.headers.set('Content-Type', new Headers(parsedDefaultHeaders).get('content-type'));
  }
  setDefaultHeaders(request.headers, parsedDefaultHeaders);
  if (body && Blob.prototype.isPrototypeOf(body) && body.type) {
    request.headers.set('Content-Type', body.type);
  }
  return request;
}

function getRequestUrl(baseUrl, url) {
  if (absoluteUrlRegexp.test(url)) {
    return url;
  }

  return (baseUrl || '') + url;
}

function setDefaultHeaders(headers, defaultHeaders) {
  for (var name in defaultHeaders || {}) {
    if (defaultHeaders.hasOwnProperty(name) && !headers.has(name)) {
      headers.set(name, defaultHeaders[name]);
    }
  }
}

function processRequest(request, interceptors) {
  return applyInterceptors(request, interceptors, 'request', 'requestError');
}

function processResponse(response, interceptors, request) {
  return applyInterceptors(response, interceptors, 'response', 'responseError', request);
}

function applyInterceptors(input, interceptors, successName, errorName) {
  for (var _len = arguments.length, interceptorArgs = Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
    interceptorArgs[_key - 4] = arguments[_key];
  }

  return (interceptors || []).reduce(function (chain, interceptor) {
    var successHandler = interceptor[successName];
    var errorHandler = interceptor[errorName];

    return chain.then(successHandler && function (value) {
      return successHandler.call.apply(successHandler, [interceptor, value].concat(interceptorArgs));
    } || identity, errorHandler && function (reason) {
      return errorHandler.call.apply(errorHandler, [interceptor, reason].concat(interceptorArgs));
    } || thrower);
  }, Promise.resolve(input));
}

function identity(x) {
  return x;
}

function thrower(x) {
  throw x;
}

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(5))(99);

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return History; });


function mi(name) {
  throw new Error('History must implement ' + name + '().');
}

var History = function () {
  function History() {
    
  }

  History.prototype.activate = function activate(options) {
    mi('activate');
  };

  History.prototype.deactivate = function deactivate() {
    mi('deactivate');
  };

  History.prototype.getAbsoluteRoot = function getAbsoluteRoot() {
    mi('getAbsoluteRoot');
  };

  History.prototype.navigate = function navigate(fragment, options) {
    mi('navigate');
  };

  History.prototype.navigateBack = function navigateBack() {
    mi('navigateBack');
  };

  History.prototype.setTitle = function setTitle(title) {
    mi('setTitle');
  };

  History.prototype.setState = function setState(key, value) {
    mi('setState');
  };

  History.prototype.getState = function getState(key) {
    mi('getState');
  };

  return History;
}();

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IfCore; });


var IfCore = function () {
  function IfCore(viewFactory, viewSlot) {
    

    this.viewFactory = viewFactory;
    this.viewSlot = viewSlot;
    this.view = null;
    this.bindingContext = null;
    this.overrideContext = null;

    this.showing = false;
  }

  IfCore.prototype.bind = function bind(bindingContext, overrideContext) {
    this.bindingContext = bindingContext;
    this.overrideContext = overrideContext;
  };

  IfCore.prototype.unbind = function unbind() {
    if (this.view === null) {
      return;
    }

    this.view.unbind();

    if (!this.viewFactory.isCaching) {
      return;
    }

    if (this.showing) {
      this.showing = false;
      this.viewSlot.remove(this.view, true, true);
    } else {
      this.view.returnToCache();
    }

    this.view = null;
  };

  IfCore.prototype._show = function _show() {
    if (this.showing) {
      if (!this.view.isBound) {
        this.view.bind(this.bindingContext, this.overrideContext);
      }
      return;
    }

    if (this.view === null) {
      this.view = this.viewFactory.create();
    }

    if (!this.view.isBound) {
      this.view.bind(this.bindingContext, this.overrideContext);
    }

    this.showing = true;
    return this.viewSlot.add(this.view);
  };

  IfCore.prototype._hide = function _hide() {
    var _this = this;

    if (!this.showing) {
      return;
    }

    this.showing = false;
    var removed = this.viewSlot.remove(this.view);

    if (removed instanceof Promise) {
      return removed.then(function () {
        return _this.view.unbind();
      });
    }

    this.view.unbind();
  };

  return IfCore;
}();

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepeatStrategyLocator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__null_repeat_strategy__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array_repeat_strategy__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_repeat_strategy__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__set_repeat_strategy__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__number_repeat_strategy__ = __webpack_require__(23);








var RepeatStrategyLocator = function () {
  function RepeatStrategyLocator() {
    

    this.matchers = [];
    this.strategies = [];

    this.addStrategy(function (items) {
      return items === null || items === undefined;
    }, new __WEBPACK_IMPORTED_MODULE_0__null_repeat_strategy__["a" /* NullRepeatStrategy */]());
    this.addStrategy(function (items) {
      return items instanceof Array;
    }, new __WEBPACK_IMPORTED_MODULE_1__array_repeat_strategy__["a" /* ArrayRepeatStrategy */]());
    this.addStrategy(function (items) {
      return items instanceof Map;
    }, new __WEBPACK_IMPORTED_MODULE_2__map_repeat_strategy__["a" /* MapRepeatStrategy */]());
    this.addStrategy(function (items) {
      return items instanceof Set;
    }, new __WEBPACK_IMPORTED_MODULE_3__set_repeat_strategy__["a" /* SetRepeatStrategy */]());
    this.addStrategy(function (items) {
      return typeof items === 'number';
    }, new __WEBPACK_IMPORTED_MODULE_4__number_repeat_strategy__["a" /* NumberRepeatStrategy */]());
  }

  RepeatStrategyLocator.prototype.addStrategy = function addStrategy(matcher, strategy) {
    this.matchers.push(matcher);
    this.strategies.push(strategy);
  };

  RepeatStrategyLocator.prototype.getStrategy = function getStrategy(items) {
    var matchers = this.matchers;

    for (var i = 0, ii = matchers.length; i < ii; ++i) {
      if (matchers[i](items)) {
        return this.strategies[i];
      }
    }

    return null;
  };

  return RepeatStrategyLocator;
}();

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NullRepeatStrategy; });


var NullRepeatStrategy = function () {
  function NullRepeatStrategy() {
    
  }

  NullRepeatStrategy.prototype.instanceChanged = function instanceChanged(repeat, items) {
    repeat.removeAllViews(true);
  };

  NullRepeatStrategy.prototype.getCollectionObserver = function getCollectionObserver(observerLocator, items) {};

  return NullRepeatStrategy;
}();

/***/ }),

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return resolver; });
/* unused harmony export Lazy */
/* unused harmony export All */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Optional; });
/* unused harmony export Parent */
/* unused harmony export StrategyResolver */
/* unused harmony export Factory */
/* unused harmony export NewInstance */
/* unused harmony export getDecoratorDependencies */
/* unused harmony export lazy */
/* unused harmony export all */
/* unused harmony export optional */
/* unused harmony export parent */
/* unused harmony export factory */
/* unused harmony export newInstance */
/* unused harmony export invoker */
/* unused harmony export invokeAsFactory */
/* unused harmony export FactoryInvoker */
/* unused harmony export registration */
/* unused harmony export transient */
/* unused harmony export singleton */
/* unused harmony export TransientRegistration */
/* unused harmony export SingletonRegistration */
/* unused harmony export _emptyParameters */
/* unused harmony export InvocationHandler */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Container; });
/* harmony export (immutable) */ __webpack_exports__["c"] = autoinject;
/* harmony export (immutable) */ __webpack_exports__["d"] = inject;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_metadata__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_pal__ = __webpack_require__(0);
var _dec, _class, _dec2, _class3, _dec3, _class5, _dec4, _class7, _dec5, _class9, _dec6, _class11, _dec7, _class13, _classInvokers;






var resolver = __WEBPACK_IMPORTED_MODULE_0_aurelia_metadata__["d" /* protocol */].create('aurelia:resolver', function (target) {
  if (!(typeof target.get === 'function')) {
    return 'Resolvers must implement: get(container: Container, key: any): any';
  }

  return true;
});

var Lazy = (_dec = resolver(), _dec(_class = function () {
  function Lazy(key) {
    

    this._key = key;
  }

  Lazy.prototype.get = function get(container) {
    var _this = this;

    return function () {
      return container.get(_this._key);
    };
  };

  Lazy.of = function of(key) {
    return new Lazy(key);
  };

  return Lazy;
}()) || _class);

var All = (_dec2 = resolver(), _dec2(_class3 = function () {
  function All(key) {
    

    this._key = key;
  }

  All.prototype.get = function get(container) {
    return container.getAll(this._key);
  };

  All.of = function of(key) {
    return new All(key);
  };

  return All;
}()) || _class3);

var Optional = (_dec3 = resolver(), _dec3(_class5 = function () {
  function Optional(key) {
    var checkParent = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

    

    this._key = key;
    this._checkParent = checkParent;
  }

  Optional.prototype.get = function get(container) {
    if (container.hasResolver(this._key, this._checkParent)) {
      return container.get(this._key);
    }

    return null;
  };

  Optional.of = function of(key) {
    var checkParent = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

    return new Optional(key, checkParent);
  };

  return Optional;
}()) || _class5);

var Parent = (_dec4 = resolver(), _dec4(_class7 = function () {
  function Parent(key) {
    

    this._key = key;
  }

  Parent.prototype.get = function get(container) {
    return container.parent ? container.parent.get(this._key) : null;
  };

  Parent.of = function of(key) {
    return new Parent(key);
  };

  return Parent;
}()) || _class7);

var StrategyResolver = (_dec5 = resolver(), _dec5(_class9 = function () {
  function StrategyResolver(strategy, state) {
    

    this.strategy = strategy;
    this.state = state;
  }

  StrategyResolver.prototype.get = function get(container, key) {
    switch (this.strategy) {
      case 0:
        return this.state;
      case 1:
        var singleton = container.invoke(this.state);
        this.state = singleton;
        this.strategy = 0;
        return singleton;
      case 2:
        return container.invoke(this.state);
      case 3:
        return this.state(container, key, this);
      case 4:
        return this.state[0].get(container, key);
      case 5:
        return container.get(this.state);
      default:
        throw new Error('Invalid strategy: ' + this.strategy);
    }
  };

  return StrategyResolver;
}()) || _class9);

var Factory = (_dec6 = resolver(), _dec6(_class11 = function () {
  function Factory(key) {
    

    this._key = key;
  }

  Factory.prototype.get = function get(container) {
    var _this2 = this;

    return function () {
      for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
        rest[_key] = arguments[_key];
      }

      return container.invoke(_this2._key, rest);
    };
  };

  Factory.of = function of(key) {
    return new Factory(key);
  };

  return Factory;
}()) || _class11);

var NewInstance = (_dec7 = resolver(), _dec7(_class13 = function () {
  function NewInstance(key) {
    

    this.key = key;
    this.asKey = key;

    for (var _len2 = arguments.length, dynamicDependencies = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      dynamicDependencies[_key2 - 1] = arguments[_key2];
    }

    this.dynamicDependencies = dynamicDependencies;
  }

  NewInstance.prototype.get = function get(container) {
    var dynamicDependencies = this.dynamicDependencies.length > 0 ? this.dynamicDependencies.map(function (dependency) {
      return dependency['protocol:aurelia:resolver'] ? dependency.get(container) : container.get(dependency);
    }) : undefined;
    var instance = container.invoke(this.key, dynamicDependencies);
    container.registerInstance(this.asKey, instance);
    return instance;
  };

  NewInstance.prototype.as = function as(key) {
    this.asKey = key;
    return this;
  };

  NewInstance.of = function of(key) {
    for (var _len3 = arguments.length, dynamicDependencies = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      dynamicDependencies[_key3 - 1] = arguments[_key3];
    }

    return new (Function.prototype.bind.apply(NewInstance, [null].concat([key], dynamicDependencies)))();
  };

  return NewInstance;
}()) || _class13);

function getDecoratorDependencies(target, name) {
  var dependencies = target.inject;
  if (typeof dependencies === 'function') {
    throw new Error('Decorator ' + name + ' cannot be used with "inject()".  Please use an array instead.');
  }
  if (!dependencies) {
    dependencies = __WEBPACK_IMPORTED_MODULE_0_aurelia_metadata__["b" /* metadata */].getOwn(__WEBPACK_IMPORTED_MODULE_0_aurelia_metadata__["b" /* metadata */].paramTypes, target).slice();
    target.inject = dependencies;
  }

  return dependencies;
}

function lazy(keyValue) {
  return function (target, key, index) {
    var params = getDecoratorDependencies(target, 'lazy');
    params[index] = Lazy.of(keyValue);
  };
}

function all(keyValue) {
  return function (target, key, index) {
    var params = getDecoratorDependencies(target, 'all');
    params[index] = All.of(keyValue);
  };
}

function optional() {
  var checkParentOrTarget = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

  var deco = function deco(checkParent) {
    return function (target, key, index) {
      var params = getDecoratorDependencies(target, 'optional');
      params[index] = Optional.of(params[index], checkParent);
    };
  };
  if (typeof checkParentOrTarget === 'boolean') {
    return deco(checkParentOrTarget);
  }
  return deco(true);
}

function parent(target, key, index) {
  var params = getDecoratorDependencies(target, 'parent');
  params[index] = Parent.of(params[index]);
}

function factory(keyValue, asValue) {
  return function (target, key, index) {
    var params = getDecoratorDependencies(target, 'factory');
    var factory = Factory.of(keyValue);
    params[index] = asValue ? factory.as(asValue) : factory;
  };
}

function newInstance(asKeyOrTarget) {
  for (var _len4 = arguments.length, dynamicDependencies = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    dynamicDependencies[_key4 - 1] = arguments[_key4];
  }

  var deco = function deco(asKey) {
    return function (target, key, index) {
      var params = getDecoratorDependencies(target, 'newInstance');
      params[index] = NewInstance.of.apply(NewInstance, [params[index]].concat(dynamicDependencies));
      if (!!asKey) {
        params[index].as(asKey);
      }
    };
  };
  if (arguments.length >= 1) {
    return deco(asKeyOrTarget);
  }
  return deco();
}

function invoker(value) {
  return function (target) {
    __WEBPACK_IMPORTED_MODULE_0_aurelia_metadata__["b" /* metadata */].define(__WEBPACK_IMPORTED_MODULE_0_aurelia_metadata__["b" /* metadata */].invoker, value, target);
  };
}

function invokeAsFactory(potentialTarget) {
  var deco = function deco(target) {
    __WEBPACK_IMPORTED_MODULE_0_aurelia_metadata__["b" /* metadata */].define(__WEBPACK_IMPORTED_MODULE_0_aurelia_metadata__["b" /* metadata */].invoker, FactoryInvoker.instance, target);
  };

  return potentialTarget ? deco(potentialTarget) : deco;
}

var FactoryInvoker = function () {
  function FactoryInvoker() {
    
  }

  FactoryInvoker.prototype.invoke = function invoke(container, fn, dependencies) {
    var i = dependencies.length;
    var args = new Array(i);

    while (i--) {
      args[i] = container.get(dependencies[i]);
    }

    return fn.apply(undefined, args);
  };

  FactoryInvoker.prototype.invokeWithDynamicDependencies = function invokeWithDynamicDependencies(container, fn, staticDependencies, dynamicDependencies) {
    var i = staticDependencies.length;
    var args = new Array(i);

    while (i--) {
      args[i] = container.get(staticDependencies[i]);
    }

    if (dynamicDependencies !== undefined) {
      args = args.concat(dynamicDependencies);
    }

    return fn.apply(undefined, args);
  };

  return FactoryInvoker;
}();

FactoryInvoker.instance = new FactoryInvoker();

function registration(value) {
  return function (target) {
    __WEBPACK_IMPORTED_MODULE_0_aurelia_metadata__["b" /* metadata */].define(__WEBPACK_IMPORTED_MODULE_0_aurelia_metadata__["b" /* metadata */].registration, value, target);
  };
}

function transient(key) {
  return registration(new TransientRegistration(key));
}

function singleton(keyOrRegisterInChild) {
  var registerInChild = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

  return registration(new SingletonRegistration(keyOrRegisterInChild, registerInChild));
}

var TransientRegistration = function () {
  function TransientRegistration(key) {
    

    this._key = key;
  }

  TransientRegistration.prototype.registerResolver = function registerResolver(container, key, fn) {
    var existingResolver = container.getResolver(this._key || key);
    return existingResolver === undefined ? container.registerTransient(this._key || key, fn) : existingResolver;
  };

  return TransientRegistration;
}();

var SingletonRegistration = function () {
  function SingletonRegistration(keyOrRegisterInChild) {
    var registerInChild = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

    

    if (typeof keyOrRegisterInChild === 'boolean') {
      this._registerInChild = keyOrRegisterInChild;
    } else {
      this._key = keyOrRegisterInChild;
      this._registerInChild = registerInChild;
    }
  }

  SingletonRegistration.prototype.registerResolver = function registerResolver(container, key, fn) {
    var targetContainer = this._registerInChild ? container : container.root;
    var existingResolver = targetContainer.getResolver(this._key || key);
    return existingResolver === undefined ? targetContainer.registerSingleton(this._key || key, fn) : existingResolver;
  };

  return SingletonRegistration;
}();

function validateKey(key) {
  if (key === null || key === undefined) {
    throw new Error('key/value cannot be null or undefined. Are you trying to inject/register something that doesn\'t exist with DI?');
  }
}
var _emptyParameters = Object.freeze([]);

__WEBPACK_IMPORTED_MODULE_0_aurelia_metadata__["b" /* metadata */].registration = 'aurelia:registration';
__WEBPACK_IMPORTED_MODULE_0_aurelia_metadata__["b" /* metadata */].invoker = 'aurelia:invoker';

var resolverDecorates = resolver.decorates;

var InvocationHandler = function () {
  function InvocationHandler(fn, invoker, dependencies) {
    

    this.fn = fn;
    this.invoker = invoker;
    this.dependencies = dependencies;
  }

  InvocationHandler.prototype.invoke = function invoke(container, dynamicDependencies) {
    return dynamicDependencies !== undefined ? this.invoker.invokeWithDynamicDependencies(container, this.fn, this.dependencies, dynamicDependencies) : this.invoker.invoke(container, this.fn, this.dependencies);
  };

  return InvocationHandler;
}();

function invokeWithDynamicDependencies(container, fn, staticDependencies, dynamicDependencies) {
  var i = staticDependencies.length;
  var args = new Array(i);
  var lookup = void 0;

  while (i--) {
    lookup = staticDependencies[i];

    if (lookup === null || lookup === undefined) {
      throw new Error('Constructor Parameter with index ' + i + ' cannot be null or undefined. Are you trying to inject/register something that doesn\'t exist with DI?');
    } else {
      args[i] = container.get(lookup);
    }
  }

  if (dynamicDependencies !== undefined) {
    args = args.concat(dynamicDependencies);
  }

  return Reflect.construct(fn, args);
}

var classInvokers = (_classInvokers = {}, _classInvokers[0] = {
  invoke: function invoke(container, Type) {
    return new Type();
  },

  invokeWithDynamicDependencies: invokeWithDynamicDependencies
}, _classInvokers[1] = {
  invoke: function invoke(container, Type, deps) {
    return new Type(container.get(deps[0]));
  },

  invokeWithDynamicDependencies: invokeWithDynamicDependencies
}, _classInvokers[2] = {
  invoke: function invoke(container, Type, deps) {
    return new Type(container.get(deps[0]), container.get(deps[1]));
  },

  invokeWithDynamicDependencies: invokeWithDynamicDependencies
}, _classInvokers[3] = {
  invoke: function invoke(container, Type, deps) {
    return new Type(container.get(deps[0]), container.get(deps[1]), container.get(deps[2]));
  },

  invokeWithDynamicDependencies: invokeWithDynamicDependencies
}, _classInvokers[4] = {
  invoke: function invoke(container, Type, deps) {
    return new Type(container.get(deps[0]), container.get(deps[1]), container.get(deps[2]), container.get(deps[3]));
  },

  invokeWithDynamicDependencies: invokeWithDynamicDependencies
}, _classInvokers[5] = {
  invoke: function invoke(container, Type, deps) {
    return new Type(container.get(deps[0]), container.get(deps[1]), container.get(deps[2]), container.get(deps[3]), container.get(deps[4]));
  },

  invokeWithDynamicDependencies: invokeWithDynamicDependencies
}, _classInvokers.fallback = {
  invoke: invokeWithDynamicDependencies,
  invokeWithDynamicDependencies: invokeWithDynamicDependencies
}, _classInvokers);

function getDependencies(f) {
  if (!f.hasOwnProperty('inject')) {
    return [];
  }

  if (typeof f.inject === 'function') {
    return f.inject();
  }

  return f.inject;
}

var Container = function () {
  function Container(configuration) {
    

    if (configuration === undefined) {
      configuration = {};
    }

    this._configuration = configuration;
    this._onHandlerCreated = configuration.onHandlerCreated;
    this._handlers = configuration.handlers || (configuration.handlers = new Map());
    this._resolvers = new Map();
    this.root = this;
    this.parent = null;
  }

  Container.prototype.makeGlobal = function makeGlobal() {
    Container.instance = this;
    return this;
  };

  Container.prototype.setHandlerCreatedCallback = function setHandlerCreatedCallback(onHandlerCreated) {
    this._onHandlerCreated = onHandlerCreated;
    this._configuration.onHandlerCreated = onHandlerCreated;
  };

  Container.prototype.registerInstance = function registerInstance(key, instance) {
    return this.registerResolver(key, new StrategyResolver(0, instance === undefined ? key : instance));
  };

  Container.prototype.registerSingleton = function registerSingleton(key, fn) {
    return this.registerResolver(key, new StrategyResolver(1, fn === undefined ? key : fn));
  };

  Container.prototype.registerTransient = function registerTransient(key, fn) {
    return this.registerResolver(key, new StrategyResolver(2, fn === undefined ? key : fn));
  };

  Container.prototype.registerHandler = function registerHandler(key, handler) {
    return this.registerResolver(key, new StrategyResolver(3, handler));
  };

  Container.prototype.registerAlias = function registerAlias(originalKey, aliasKey) {
    return this.registerResolver(aliasKey, new StrategyResolver(5, originalKey));
  };

  Container.prototype.registerResolver = function registerResolver(key, resolver) {
    validateKey(key);

    var allResolvers = this._resolvers;
    var result = allResolvers.get(key);

    if (result === undefined) {
      allResolvers.set(key, resolver);
    } else if (result.strategy === 4) {
      result.state.push(resolver);
    } else {
      allResolvers.set(key, new StrategyResolver(4, [result, resolver]));
    }

    return resolver;
  };

  Container.prototype.autoRegister = function autoRegister(key, fn) {
    fn = fn === undefined ? key : fn;

    if (typeof fn === 'function') {
      var _registration = __WEBPACK_IMPORTED_MODULE_0_aurelia_metadata__["b" /* metadata */].get(__WEBPACK_IMPORTED_MODULE_0_aurelia_metadata__["b" /* metadata */].registration, fn);

      if (_registration === undefined) {
        return this.registerResolver(key, new StrategyResolver(1, fn));
      }

      return _registration.registerResolver(this, key, fn);
    }

    return this.registerResolver(key, new StrategyResolver(0, fn));
  };

  Container.prototype.autoRegisterAll = function autoRegisterAll(fns) {
    var i = fns.length;
    while (i--) {
      this.autoRegister(fns[i]);
    }
  };

  Container.prototype.unregister = function unregister(key) {
    this._resolvers.delete(key);
  };

  Container.prototype.hasResolver = function hasResolver(key) {
    var checkParent = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

    validateKey(key);

    return this._resolvers.has(key) || checkParent && this.parent !== null && this.parent.hasResolver(key, checkParent);
  };

  Container.prototype.getResolver = function getResolver(key) {
    return this._resolvers.get(key);
  };

  Container.prototype.get = function get(key) {
    validateKey(key);

    if (key === Container) {
      return this;
    }

    if (resolverDecorates(key)) {
      return key.get(this, key);
    }

    var resolver = this._resolvers.get(key);

    if (resolver === undefined) {
      if (this.parent === null) {
        return this.autoRegister(key).get(this, key);
      }

      var _registration2 = __WEBPACK_IMPORTED_MODULE_0_aurelia_metadata__["b" /* metadata */].get(__WEBPACK_IMPORTED_MODULE_0_aurelia_metadata__["b" /* metadata */].registration, key);

      if (_registration2 === undefined) {
        return this.parent._get(key);
      }

      return _registration2.registerResolver(this, key, key).get(this, key);
    }

    return resolver.get(this, key);
  };

  Container.prototype._get = function _get(key) {
    var resolver = this._resolvers.get(key);

    if (resolver === undefined) {
      if (this.parent === null) {
        return this.autoRegister(key).get(this, key);
      }

      return this.parent._get(key);
    }

    return resolver.get(this, key);
  };

  Container.prototype.getAll = function getAll(key) {
    validateKey(key);

    var resolver = this._resolvers.get(key);

    if (resolver === undefined) {
      if (this.parent === null) {
        return _emptyParameters;
      }

      return this.parent.getAll(key);
    }

    if (resolver.strategy === 4) {
      var state = resolver.state;
      var i = state.length;
      var results = new Array(i);

      while (i--) {
        results[i] = state[i].get(this, key);
      }

      return results;
    }

    return [resolver.get(this, key)];
  };

  Container.prototype.createChild = function createChild() {
    var child = new Container(this._configuration);
    child.root = this.root;
    child.parent = this;
    return child;
  };

  Container.prototype.invoke = function invoke(fn, dynamicDependencies) {
    try {
      var _handler = this._handlers.get(fn);

      if (_handler === undefined) {
        _handler = this._createInvocationHandler(fn);
        this._handlers.set(fn, _handler);
      }

      return _handler.invoke(this, dynamicDependencies);
    } catch (e) {
      throw new __WEBPACK_IMPORTED_MODULE_1_aurelia_pal__["a" /* AggregateError */]('Error invoking ' + fn.name + '. Check the inner error for details.', e, true);
    }
  };

  Container.prototype._createInvocationHandler = function _createInvocationHandler(fn) {
    var dependencies = void 0;

    if (fn.inject === undefined) {
      dependencies = __WEBPACK_IMPORTED_MODULE_0_aurelia_metadata__["b" /* metadata */].getOwn(__WEBPACK_IMPORTED_MODULE_0_aurelia_metadata__["b" /* metadata */].paramTypes, fn) || _emptyParameters;
    } else {
      dependencies = [];
      var ctor = fn;
      while (typeof ctor === 'function') {
        var _dependencies;

        (_dependencies = dependencies).push.apply(_dependencies, getDependencies(ctor));
        ctor = Object.getPrototypeOf(ctor);
      }
    }

    var invoker = __WEBPACK_IMPORTED_MODULE_0_aurelia_metadata__["b" /* metadata */].getOwn(__WEBPACK_IMPORTED_MODULE_0_aurelia_metadata__["b" /* metadata */].invoker, fn) || classInvokers[dependencies.length] || classInvokers.fallback;

    var handler = new InvocationHandler(fn, invoker, dependencies);
    return this._onHandlerCreated !== undefined ? this._onHandlerCreated(handler) : handler;
  };

  return Container;
}();

function autoinject(potentialTarget) {
  var deco = function deco(target) {
    var previousInject = target.inject ? target.inject.slice() : null;
    var autoInject = __WEBPACK_IMPORTED_MODULE_0_aurelia_metadata__["b" /* metadata */].getOwn(__WEBPACK_IMPORTED_MODULE_0_aurelia_metadata__["b" /* metadata */].paramTypes, target) || _emptyParameters;
    if (!previousInject) {
      target.inject = autoInject;
    } else {
      for (var i = 0; i < autoInject.length; i++) {
        if (previousInject[i] && previousInject[i] !== autoInject[i]) {
          var prevIndex = previousInject.indexOf(autoInject[i]);
          if (prevIndex > -1) {
            previousInject.splice(prevIndex, 1);
          }
          previousInject.splice(prevIndex > -1 && prevIndex < i ? i - 1 : i, 0, autoInject[i]);
        } else if (!previousInject[i]) {
          previousInject[i] = autoInject[i];
        }
      }
      target.inject = previousInject;
    }
  };

  return potentialTarget ? deco(potentialTarget) : deco;
}

function inject() {
  for (var _len5 = arguments.length, rest = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    rest[_key5] = arguments[_key5];
  }

  return function (target, key, descriptor) {
    if (typeof descriptor === 'number' && rest.length === 1) {
      var params = target.inject;
      if (typeof params === 'function') {
        throw new Error('Decorator inject cannot be used with "inject()".  Please use an array instead.');
      }
      if (!params) {
        params = __WEBPACK_IMPORTED_MODULE_0_aurelia_metadata__["b" /* metadata */].getOwn(__WEBPACK_IMPORTED_MODULE_0_aurelia_metadata__["b" /* metadata */].paramTypes, target).slice();
        target.inject = params;
      }
      params[descriptor] = rest[0];
      return;
    }

    if (descriptor) {
      var _fn = descriptor.value;
      _fn.inject = rest;
    } else {
      target.inject = rest;
    }
  };
}

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArrayRepeatStrategy; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__repeat_utilities__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__ = __webpack_require__(3);





var ArrayRepeatStrategy = function () {
  function ArrayRepeatStrategy() {
    
  }

  ArrayRepeatStrategy.prototype.getCollectionObserver = function getCollectionObserver(observerLocator, items) {
    return observerLocator.getArrayObserver(items);
  };

  ArrayRepeatStrategy.prototype.instanceChanged = function instanceChanged(repeat, items) {
    var _this = this;

    var itemsLength = items.length;

    if (!items || itemsLength === 0) {
      repeat.removeAllViews(true, !repeat.viewsRequireLifecycle);
      return;
    }

    var children = repeat.views();
    var viewsLength = children.length;

    if (viewsLength === 0) {
      this._standardProcessInstanceChanged(repeat, items);
      return;
    }

    if (repeat.viewsRequireLifecycle) {
      var childrenSnapshot = children.slice(0);
      var itemNameInBindingContext = repeat.local;
      var matcher = repeat.matcher();

      var itemsPreviouslyInViews = [];
      var viewsToRemove = [];

      for (var index = 0; index < viewsLength; index++) {
        var view = childrenSnapshot[index];
        var oldItem = view.bindingContext[itemNameInBindingContext];

        if (Object(__WEBPACK_IMPORTED_MODULE_0__repeat_utilities__["c" /* indexOf */])(items, oldItem, matcher) === -1) {
          viewsToRemove.push(view);
        } else {
          itemsPreviouslyInViews.push(oldItem);
        }
      }

      var updateViews = void 0;
      var removePromise = void 0;

      if (itemsPreviouslyInViews.length > 0) {
        removePromise = repeat.removeViews(viewsToRemove, true, !repeat.viewsRequireLifecycle);
        updateViews = function updateViews() {
          for (var _index = 0; _index < itemsLength; _index++) {
            var item = items[_index];
            var indexOfView = Object(__WEBPACK_IMPORTED_MODULE_0__repeat_utilities__["c" /* indexOf */])(itemsPreviouslyInViews, item, matcher, _index);
            var _view = void 0;

            if (indexOfView === -1) {
              var overrideContext = Object(__WEBPACK_IMPORTED_MODULE_0__repeat_utilities__["a" /* createFullOverrideContext */])(repeat, items[_index], _index, itemsLength);
              repeat.insertView(_index, overrideContext.bindingContext, overrideContext);

              itemsPreviouslyInViews.splice(_index, 0, undefined);
            } else if (indexOfView === _index) {
              _view = children[indexOfView];
              itemsPreviouslyInViews[indexOfView] = undefined;
            } else {
              _view = children[indexOfView];
              repeat.moveView(indexOfView, _index);
              itemsPreviouslyInViews.splice(indexOfView, 1);
              itemsPreviouslyInViews.splice(_index, 0, undefined);
            }

            if (_view) {
              Object(__WEBPACK_IMPORTED_MODULE_0__repeat_utilities__["g" /* updateOverrideContext */])(_view.overrideContext, _index, itemsLength);
            }
          }

          _this._inPlaceProcessItems(repeat, items);
        };
      } else {
        removePromise = repeat.removeAllViews(true, !repeat.viewsRequireLifecycle);
        updateViews = function updateViews() {
          return _this._standardProcessInstanceChanged(repeat, items);
        };
      }

      if (removePromise instanceof Promise) {
        removePromise.then(updateViews);
      } else {
        updateViews();
      }
    } else {
      this._inPlaceProcessItems(repeat, items);
    }
  };

  ArrayRepeatStrategy.prototype._standardProcessInstanceChanged = function _standardProcessInstanceChanged(repeat, items) {
    for (var i = 0, ii = items.length; i < ii; i++) {
      var overrideContext = Object(__WEBPACK_IMPORTED_MODULE_0__repeat_utilities__["a" /* createFullOverrideContext */])(repeat, items[i], i, ii);
      repeat.addView(overrideContext.bindingContext, overrideContext);
    }
  };

  ArrayRepeatStrategy.prototype._inPlaceProcessItems = function _inPlaceProcessItems(repeat, items) {
    var itemsLength = items.length;
    var viewsLength = repeat.viewCount();

    while (viewsLength > itemsLength) {
      viewsLength--;
      repeat.removeView(viewsLength, true, !repeat.viewsRequireLifecycle);
    }

    var local = repeat.local;

    for (var i = 0; i < viewsLength; i++) {
      var view = repeat.view(i);
      var last = i === itemsLength - 1;
      var middle = i !== 0 && !last;

      if (view.bindingContext[local] === items[i] && view.overrideContext.$middle === middle && view.overrideContext.$last === last) {
        continue;
      }

      view.bindingContext[local] = items[i];
      view.overrideContext.$middle = middle;
      view.overrideContext.$last = last;
      repeat.updateBindings(view);
    }

    for (var _i = viewsLength; _i < itemsLength; _i++) {
      var overrideContext = Object(__WEBPACK_IMPORTED_MODULE_0__repeat_utilities__["a" /* createFullOverrideContext */])(repeat, items[_i], _i, itemsLength);
      repeat.addView(overrideContext.bindingContext, overrideContext);
    }
  };

  ArrayRepeatStrategy.prototype.instanceMutated = function instanceMutated(repeat, array, splices) {
    var _this2 = this;

    if (repeat.__queuedSplices) {
      for (var i = 0, ii = splices.length; i < ii; ++i) {
        var _splices$i = splices[i],
            index = _splices$i.index,
            removed = _splices$i.removed,
            addedCount = _splices$i.addedCount;

        Object(__WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["t" /* mergeSplice */])(repeat.__queuedSplices, index, removed, addedCount);
      }

      repeat.__array = array.slice(0);
      return;
    }

    var maybePromise = this._runSplices(repeat, array.slice(0), splices);
    if (maybePromise instanceof Promise) {
      var queuedSplices = repeat.__queuedSplices = [];

      var runQueuedSplices = function runQueuedSplices() {
        if (!queuedSplices.length) {
          repeat.__queuedSplices = undefined;
          repeat.__array = undefined;
          return;
        }

        var nextPromise = _this2._runSplices(repeat, repeat.__array, queuedSplices) || Promise.resolve();
        queuedSplices = repeat.__queuedSplices = [];
        nextPromise.then(runQueuedSplices);
      };

      maybePromise.then(runQueuedSplices);
    }
  };

  ArrayRepeatStrategy.prototype._runSplices = function _runSplices(repeat, array, splices) {
    var _this3 = this;

    var removeDelta = 0;
    var rmPromises = [];

    for (var i = 0, ii = splices.length; i < ii; ++i) {
      var splice = splices[i];
      var removed = splice.removed;

      for (var j = 0, jj = removed.length; j < jj; ++j) {
        var viewOrPromise = repeat.removeView(splice.index + removeDelta + rmPromises.length, true);
        if (viewOrPromise instanceof Promise) {
          rmPromises.push(viewOrPromise);
        }
      }
      removeDelta -= splice.addedCount;
    }

    if (rmPromises.length > 0) {
      return Promise.all(rmPromises).then(function () {
        var spliceIndexLow = _this3._handleAddedSplices(repeat, array, splices);
        Object(__WEBPACK_IMPORTED_MODULE_0__repeat_utilities__["h" /* updateOverrideContexts */])(repeat.views(), spliceIndexLow);
      });
    }

    var spliceIndexLow = this._handleAddedSplices(repeat, array, splices);
    Object(__WEBPACK_IMPORTED_MODULE_0__repeat_utilities__["h" /* updateOverrideContexts */])(repeat.views(), spliceIndexLow);

    return undefined;
  };

  ArrayRepeatStrategy.prototype._handleAddedSplices = function _handleAddedSplices(repeat, array, splices) {
    var spliceIndex = void 0;
    var spliceIndexLow = void 0;
    var arrayLength = array.length;
    for (var i = 0, ii = splices.length; i < ii; ++i) {
      var splice = splices[i];
      var addIndex = spliceIndex = splice.index;
      var end = splice.index + splice.addedCount;

      if (typeof spliceIndexLow === 'undefined' || spliceIndexLow === null || spliceIndexLow > splice.index) {
        spliceIndexLow = spliceIndex;
      }

      for (; addIndex < end; ++addIndex) {
        var overrideContext = Object(__WEBPACK_IMPORTED_MODULE_0__repeat_utilities__["a" /* createFullOverrideContext */])(repeat, array[addIndex], addIndex, arrayLength);
        repeat.insertView(addIndex, overrideContext.bindingContext, overrideContext);
      }
    }

    return spliceIndexLow;
  };

  return ArrayRepeatStrategy;
}();

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapRepeatStrategy; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__repeat_utilities__ = __webpack_require__(8);




var MapRepeatStrategy = function () {
  function MapRepeatStrategy() {
    
  }

  MapRepeatStrategy.prototype.getCollectionObserver = function getCollectionObserver(observerLocator, items) {
    return observerLocator.getMapObserver(items);
  };

  MapRepeatStrategy.prototype.instanceChanged = function instanceChanged(repeat, items) {
    var _this = this;

    var removePromise = repeat.removeAllViews(true, !repeat.viewsRequireLifecycle);
    if (removePromise instanceof Promise) {
      removePromise.then(function () {
        return _this._standardProcessItems(repeat, items);
      });
      return;
    }
    this._standardProcessItems(repeat, items);
  };

  MapRepeatStrategy.prototype._standardProcessItems = function _standardProcessItems(repeat, items) {
    var index = 0;
    var overrideContext = void 0;

    items.forEach(function (value, key) {
      overrideContext = Object(__WEBPACK_IMPORTED_MODULE_0__repeat_utilities__["a" /* createFullOverrideContext */])(repeat, value, index, items.size, key);
      repeat.addView(overrideContext.bindingContext, overrideContext);
      ++index;
    });
  };

  MapRepeatStrategy.prototype.instanceMutated = function instanceMutated(repeat, map, records) {
    var key = void 0;
    var i = void 0;
    var ii = void 0;
    var overrideContext = void 0;
    var removeIndex = void 0;
    var addIndex = void 0;
    var record = void 0;
    var rmPromises = [];
    var viewOrPromise = void 0;

    for (i = 0, ii = records.length; i < ii; ++i) {
      record = records[i];
      key = record.key;
      switch (record.type) {
        case 'update':
          removeIndex = this._getViewIndexByKey(repeat, key);
          viewOrPromise = repeat.removeView(removeIndex, true, !repeat.viewsRequireLifecycle);
          if (viewOrPromise instanceof Promise) {
            rmPromises.push(viewOrPromise);
          }
          overrideContext = Object(__WEBPACK_IMPORTED_MODULE_0__repeat_utilities__["a" /* createFullOverrideContext */])(repeat, map.get(key), removeIndex, map.size, key);
          repeat.insertView(removeIndex, overrideContext.bindingContext, overrideContext);
          break;
        case 'add':
          addIndex = repeat.viewCount() <= map.size - 1 ? repeat.viewCount() : map.size - 1;
          overrideContext = Object(__WEBPACK_IMPORTED_MODULE_0__repeat_utilities__["a" /* createFullOverrideContext */])(repeat, map.get(key), addIndex, map.size, key);
          repeat.insertView(map.size - 1, overrideContext.bindingContext, overrideContext);
          break;
        case 'delete':
          if (record.oldValue === undefined) {
            return;
          }
          removeIndex = this._getViewIndexByKey(repeat, key);
          viewOrPromise = repeat.removeView(removeIndex, true, !repeat.viewsRequireLifecycle);
          if (viewOrPromise instanceof Promise) {
            rmPromises.push(viewOrPromise);
          }
          break;
        case 'clear':
          repeat.removeAllViews(true, !repeat.viewsRequireLifecycle);
          break;
        default:
          continue;
      }
    }

    if (rmPromises.length > 0) {
      Promise.all(rmPromises).then(function () {
        Object(__WEBPACK_IMPORTED_MODULE_0__repeat_utilities__["h" /* updateOverrideContexts */])(repeat.views(), 0);
      });
    } else {
      Object(__WEBPACK_IMPORTED_MODULE_0__repeat_utilities__["h" /* updateOverrideContexts */])(repeat.views(), 0);
    }
  };

  MapRepeatStrategy.prototype._getViewIndexByKey = function _getViewIndexByKey(repeat, key) {
    var i = void 0;
    var ii = void 0;
    var child = void 0;

    for (i = 0, ii = repeat.viewCount(); i < ii; ++i) {
      child = repeat.view(i);
      if (child.bindingContext[repeat.key] === key) {
        return i;
      }
    }

    return undefined;
  };

  return MapRepeatStrategy;
}();

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetRepeatStrategy; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__repeat_utilities__ = __webpack_require__(8);




var SetRepeatStrategy = function () {
  function SetRepeatStrategy() {
    
  }

  SetRepeatStrategy.prototype.getCollectionObserver = function getCollectionObserver(observerLocator, items) {
    return observerLocator.getSetObserver(items);
  };

  SetRepeatStrategy.prototype.instanceChanged = function instanceChanged(repeat, items) {
    var _this = this;

    var removePromise = repeat.removeAllViews(true, !repeat.viewsRequireLifecycle);
    if (removePromise instanceof Promise) {
      removePromise.then(function () {
        return _this._standardProcessItems(repeat, items);
      });
      return;
    }
    this._standardProcessItems(repeat, items);
  };

  SetRepeatStrategy.prototype._standardProcessItems = function _standardProcessItems(repeat, items) {
    var index = 0;
    var overrideContext = void 0;

    items.forEach(function (value) {
      overrideContext = Object(__WEBPACK_IMPORTED_MODULE_0__repeat_utilities__["a" /* createFullOverrideContext */])(repeat, value, index, items.size);
      repeat.addView(overrideContext.bindingContext, overrideContext);
      ++index;
    });
  };

  SetRepeatStrategy.prototype.instanceMutated = function instanceMutated(repeat, set, records) {
    var value = void 0;
    var i = void 0;
    var ii = void 0;
    var overrideContext = void 0;
    var removeIndex = void 0;
    var record = void 0;
    var rmPromises = [];
    var viewOrPromise = void 0;

    for (i = 0, ii = records.length; i < ii; ++i) {
      record = records[i];
      value = record.value;
      switch (record.type) {
        case 'add':
          var size = Math.max(set.size - 1, 0);
          overrideContext = Object(__WEBPACK_IMPORTED_MODULE_0__repeat_utilities__["a" /* createFullOverrideContext */])(repeat, value, size, set.size);
          repeat.insertView(size, overrideContext.bindingContext, overrideContext);
          break;
        case 'delete':
          removeIndex = this._getViewIndexByValue(repeat, value);
          viewOrPromise = repeat.removeView(removeIndex, true, !repeat.viewsRequireLifecycle);
          if (viewOrPromise instanceof Promise) {
            rmPromises.push(viewOrPromise);
          }
          break;
        case 'clear':
          repeat.removeAllViews(true, !repeat.viewsRequireLifecycle);
          break;
        default:
          continue;
      }
    }

    if (rmPromises.length > 0) {
      Promise.all(rmPromises).then(function () {
        Object(__WEBPACK_IMPORTED_MODULE_0__repeat_utilities__["h" /* updateOverrideContexts */])(repeat.views(), 0);
      });
    } else {
      Object(__WEBPACK_IMPORTED_MODULE_0__repeat_utilities__["h" /* updateOverrideContexts */])(repeat.views(), 0);
    }
  };

  SetRepeatStrategy.prototype._getViewIndexByValue = function _getViewIndexByValue(repeat, value) {
    var i = void 0;
    var ii = void 0;
    var child = void 0;

    for (i = 0, ii = repeat.viewCount(); i < ii; ++i) {
      child = repeat.view(i);
      if (child.bindingContext[repeat.local] === value) {
        return i;
      }
    }

    return undefined;
  };

  return SetRepeatStrategy;
}();

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NumberRepeatStrategy; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__repeat_utilities__ = __webpack_require__(8);




var NumberRepeatStrategy = function () {
  function NumberRepeatStrategy() {
    
  }

  NumberRepeatStrategy.prototype.getCollectionObserver = function getCollectionObserver() {
    return null;
  };

  NumberRepeatStrategy.prototype.instanceChanged = function instanceChanged(repeat, value) {
    var _this = this;

    var removePromise = repeat.removeAllViews(true, !repeat.viewsRequireLifecycle);
    if (removePromise instanceof Promise) {
      removePromise.then(function () {
        return _this._standardProcessItems(repeat, value);
      });
      return;
    }
    this._standardProcessItems(repeat, value);
  };

  NumberRepeatStrategy.prototype._standardProcessItems = function _standardProcessItems(repeat, value) {
    var childrenLength = repeat.viewCount();
    var i = void 0;
    var ii = void 0;
    var overrideContext = void 0;
    var viewsToRemove = void 0;

    value = Math.floor(value);
    viewsToRemove = childrenLength - value;

    if (viewsToRemove > 0) {
      if (viewsToRemove > childrenLength) {
        viewsToRemove = childrenLength;
      }

      for (i = 0, ii = viewsToRemove; i < ii; ++i) {
        repeat.removeView(childrenLength - (i + 1), true, !repeat.viewsRequireLifecycle);
      }

      return;
    }

    for (i = childrenLength, ii = value; i < ii; ++i) {
      overrideContext = Object(__WEBPACK_IMPORTED_MODULE_0__repeat_utilities__["a" /* createFullOverrideContext */])(repeat, i, i, ii);
      repeat.addView(overrideContext.bindingContext, overrideContext);
    }

    Object(__WEBPACK_IMPORTED_MODULE_0__repeat_utilities__["h" /* updateOverrideContexts */])(repeat.views(), 0);
  };

  return NumberRepeatStrategy;
}();

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export lifecycleOptionalBehaviors */
/* harmony export (immutable) */ __webpack_exports__["a"] = viewsRequireLifecycle;

var lifecycleOptionalBehaviors = ['focus', 'if', 'repeat', 'show', 'with'];

function behaviorRequiresLifecycle(instruction) {
  var t = instruction.type;
  var name = t.elementName !== null ? t.elementName : t.attributeName;
  return lifecycleOptionalBehaviors.indexOf(name) === -1 && (t.handlesAttached || t.handlesBind || t.handlesCreated || t.handlesDetached || t.handlesUnbind) || t.viewFactory && viewsRequireLifecycle(t.viewFactory) || instruction.viewFactory && viewsRequireLifecycle(instruction.viewFactory);
}

function targetRequiresLifecycle(instruction) {
  var behaviors = instruction.behaviorInstructions;
  if (behaviors) {
    var i = behaviors.length;
    while (i--) {
      if (behaviorRequiresLifecycle(behaviors[i])) {
        return true;
      }
    }
  }

  return instruction.viewFactory && viewsRequireLifecycle(instruction.viewFactory);
}

function viewsRequireLifecycle(viewFactory) {
  if ('_viewsRequireLifecycle' in viewFactory) {
    return viewFactory._viewsRequireLifecycle;
  }

  viewFactory._viewsRequireLifecycle = false;

  if (viewFactory.viewFactory) {
    viewFactory._viewsRequireLifecycle = viewsRequireLifecycle(viewFactory.viewFactory);
    return viewFactory._viewsRequireLifecycle;
  }

  if (viewFactory.template.querySelector('.au-animate')) {
    viewFactory._viewsRequireLifecycle = true;
    return true;
  }

  for (var id in viewFactory.instructions) {
    if (targetRequiresLifecycle(viewFactory.instructions[id])) {
      viewFactory._viewsRequireLifecycle = true;
      return true;
    }
  }

  viewFactory._viewsRequireLifecycle = false;
  return false;
}

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractRepeater; });


var AbstractRepeater = function () {
  function AbstractRepeater(options) {
    

    Object.assign(this, {
      local: 'items',
      viewsRequireLifecycle: true
    }, options);
  }

  AbstractRepeater.prototype.viewCount = function viewCount() {
    throw new Error('subclass must implement `viewCount`');
  };

  AbstractRepeater.prototype.views = function views() {
    throw new Error('subclass must implement `views`');
  };

  AbstractRepeater.prototype.view = function view(index) {
    throw new Error('subclass must implement `view`');
  };

  AbstractRepeater.prototype.matcher = function matcher() {
    throw new Error('subclass must implement `matcher`');
  };

  AbstractRepeater.prototype.addView = function addView(bindingContext, overrideContext) {
    throw new Error('subclass must implement `addView`');
  };

  AbstractRepeater.prototype.insertView = function insertView(index, bindingContext, overrideContext) {
    throw new Error('subclass must implement `insertView`');
  };

  AbstractRepeater.prototype.moveView = function moveView(sourceIndex, targetIndex) {
    throw new Error('subclass must implement `moveView`');
  };

  AbstractRepeater.prototype.removeAllViews = function removeAllViews(returnToCache, skipAnimation) {
    throw new Error('subclass must implement `removeAllViews`');
  };

  AbstractRepeater.prototype.removeViews = function removeViews(viewsToRemove, returnToCache, skipAnimation) {
    throw new Error('subclass must implement `removeView`');
  };

  AbstractRepeater.prototype.removeView = function removeView(index, returnToCache, skipAnimation) {
    throw new Error('subclass must implement `removeView`');
  };

  AbstractRepeater.prototype.updateBindings = function updateBindings(view) {
    throw new Error('subclass must implement `updateBindings`');
  };

  return AbstractRepeater;
}();

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HTMLSanitizer; });


var SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

var HTMLSanitizer = function () {
  function HTMLSanitizer() {
    
  }

  HTMLSanitizer.prototype.sanitize = function sanitize(input) {
    return input.replace(SCRIPT_REGEX, '');
  };

  return HTMLSanitizer;
}();

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BindingSignaler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_binding__ = __webpack_require__(3);




var BindingSignaler = function () {
  function BindingSignaler() {
    

    this.signals = {};
  }

  BindingSignaler.prototype.signal = function signal(name) {
    var bindings = this.signals[name];
    if (!bindings) {
      return;
    }
    var i = bindings.length;
    while (i--) {
      bindings[i].call(__WEBPACK_IMPORTED_MODULE_0_aurelia_binding__["u" /* sourceContext */]);
    }
  };

  return BindingSignaler;
}();

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppLogger; });
var AppLogger = /** @class */ (function () {
    function AppLogger() {
    }
    AppLogger.prototype.log = function (msg) {
        console.log(new Date().toISOString() + " - " + msg);
    };
    return AppLogger;
}());



/***/ }),

/***/ 29:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getArrayObserver */
/* unused harmony export getMapObserver */
/* unused harmony export getSetObserver */
/* unused harmony export targetContext */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return sourceContext; });
/* harmony export (immutable) */ __webpack_exports__["o"] = camelCase;
/* harmony export (immutable) */ __webpack_exports__["q"] = createOverrideContext;
/* unused harmony export getContextFor */
/* unused harmony export createScopeForTest */
/* harmony export (immutable) */ __webpack_exports__["p"] = connectable;
/* harmony export (immutable) */ __webpack_exports__["s"] = enqueueBindingConnect;
/* harmony export (immutable) */ __webpack_exports__["v"] = subscriberCollection;
/* unused harmony export ExpressionObserver */
/* unused harmony export calcSplices */
/* harmony export (immutable) */ __webpack_exports__["t"] = mergeSplice;
/* unused harmony export projectArraySplices */
/* unused harmony export getChangeRecords */
/* unused harmony export ModifyCollectionObserver */
/* unused harmony export CollectionLengthObserver */
/* unused harmony export Expression */
/* unused harmony export Chain */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BindingBehavior; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return ValueConverter; });
/* unused harmony export Assign */
/* unused harmony export Conditional */
/* unused harmony export AccessThis */
/* unused harmony export AccessScope */
/* unused harmony export AccessMember */
/* unused harmony export AccessKeyed */
/* unused harmony export CallScope */
/* unused harmony export CallMember */
/* unused harmony export CallFunction */
/* unused harmony export Binary */
/* unused harmony export PrefixNot */
/* unused harmony export LiteralPrimitive */
/* unused harmony export LiteralString */
/* unused harmony export LiteralArray */
/* unused harmony export LiteralObject */
/* unused harmony export Unparser */
/* unused harmony export ExpressionCloner */
/* unused harmony export cloneExpression */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return bindingMode; });
/* unused harmony export Token */
/* unused harmony export Lexer */
/* unused harmony export Scanner */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return Parser; });
/* unused harmony export ParserImplementation */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return delegationStrategy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return EventManager; });
/* unused harmony export DirtyChecker */
/* unused harmony export DirtyCheckProperty */
/* unused harmony export propertyAccessor */
/* unused harmony export PrimitiveObserver */
/* unused harmony export SetterObserver */
/* unused harmony export XLinkAttributeObserver */
/* unused harmony export dataAttributeAccessor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return DataAttributeObserver; });
/* unused harmony export StyleObserver */
/* unused harmony export ValueAttributeObserver */
/* unused harmony export CheckedObserver */
/* unused harmony export SelectValueObserver */
/* unused harmony export ClassObserver */
/* unused harmony export hasDeclaredDependencies */
/* unused harmony export declarePropertyDependencies */
/* unused harmony export computedFrom */
/* unused harmony export ComputedExpression */
/* unused harmony export createComputedObserver */
/* unused harmony export elements */
/* unused harmony export presentationElements */
/* unused harmony export presentationAttributes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return SVGAnalyzer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return ObserverLocator; });
/* unused harmony export ObjectObservationAdapter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return BindingExpression; });
/* unused harmony export Binding */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CallExpression; });
/* unused harmony export Call */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return ValueConverterResource; });
/* harmony export (immutable) */ __webpack_exports__["w"] = valueConverter;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BindingBehaviorResource; });
/* unused harmony export bindingBehavior */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ListenerExpression; });
/* unused harmony export Listener */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return NameExpression; });
/* unused harmony export BindingEngine */
/* unused harmony export observable */
/* unused harmony export connectBindingToSignal */
/* unused harmony export signalBindings */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_logging__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_pal__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_task_queue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_aurelia_metadata__ = __webpack_require__(6);




var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _class, _dec3, _class2, _dec4, _class3, _dec5, _class5, _dec6, _class7, _dec7, _class8, _dec8, _class9, _dec9, _class10, _class12, _temp, _dec10, _class13, _class14, _temp2;

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var targetContext = 'Binding:target';
var sourceContext = 'Binding:source';

var map = Object.create(null);

function camelCase(name) {
  if (name in map) {
    return map[name];
  }
  var result = name.charAt(0).toLowerCase() + name.slice(1).replace(/[_.-](\w|$)/g, function (_, x) {
    return x.toUpperCase();
  });
  map[name] = result;
  return result;
}

function createOverrideContext(bindingContext, parentOverrideContext) {
  return {
    bindingContext: bindingContext,
    parentOverrideContext: parentOverrideContext || null
  };
}

function getContextFor(name, scope, ancestor) {
  var oc = scope.overrideContext;

  if (ancestor) {
    while (ancestor && oc) {
      ancestor--;
      oc = oc.parentOverrideContext;
    }
    if (ancestor || !oc) {
      return undefined;
    }
    return name in oc ? oc : oc.bindingContext;
  }

  while (oc && !(name in oc) && !(oc.bindingContext && name in oc.bindingContext)) {
    oc = oc.parentOverrideContext;
  }
  if (oc) {
    return name in oc ? oc : oc.bindingContext;
  }

  return scope.bindingContext || scope.overrideContext;
}

function createScopeForTest(bindingContext, parentBindingContext) {
  if (parentBindingContext) {
    return {
      bindingContext: bindingContext,
      overrideContext: createOverrideContext(bindingContext, createOverrideContext(parentBindingContext))
    };
  }
  return {
    bindingContext: bindingContext,
    overrideContext: createOverrideContext(bindingContext)
  };
}

var slotNames = [];
var versionSlotNames = [];

for (var i = 0; i < 100; i++) {
  slotNames.push('_observer' + i);
  versionSlotNames.push('_observerVersion' + i);
}

function addObserver(observer) {
  var observerSlots = this._observerSlots === undefined ? 0 : this._observerSlots;
  var i = observerSlots;
  while (i-- && this[slotNames[i]] !== observer) {}

  if (i === -1) {
    i = 0;
    while (this[slotNames[i]]) {
      i++;
    }
    this[slotNames[i]] = observer;
    observer.subscribe(sourceContext, this);

    if (i === observerSlots) {
      this._observerSlots = i + 1;
    }
  }

  if (this._version === undefined) {
    this._version = 0;
  }
  this[versionSlotNames[i]] = this._version;
}

function observeProperty(obj, propertyName) {
  var observer = this.observerLocator.getObserver(obj, propertyName);
  addObserver.call(this, observer);
}

function observeArray(array) {
  var observer = this.observerLocator.getArrayObserver(array);
  addObserver.call(this, observer);
}

function unobserve(all) {
  var i = this._observerSlots;
  while (i--) {
    if (all || this[versionSlotNames[i]] !== this._version) {
      var observer = this[slotNames[i]];
      this[slotNames[i]] = null;
      if (observer) {
        observer.unsubscribe(sourceContext, this);
      }
    }
  }
}

function connectable() {
  return function (target) {
    target.prototype.observeProperty = observeProperty;
    target.prototype.observeArray = observeArray;
    target.prototype.unobserve = unobserve;
    target.prototype.addObserver = addObserver;
  };
}

var queue = [];
var queued = {};
var nextId = 0;
var minimumImmediate = 100;
var frameBudget = 15;

var isFlushRequested = false;
var immediate = 0;

function flush(animationFrameStart) {
  var length = queue.length;
  var i = 0;
  while (i < length) {
    var binding = queue[i];
    queued[binding.__connectQueueId] = false;
    binding.connect(true);
    i++;

    if (i % 100 === 0 && __WEBPACK_IMPORTED_MODULE_1_aurelia_pal__["d" /* PLATFORM */].performance.now() - animationFrameStart > frameBudget) {
      break;
    }
  }
  queue.splice(0, i);

  if (queue.length) {
    __WEBPACK_IMPORTED_MODULE_1_aurelia_pal__["d" /* PLATFORM */].requestAnimationFrame(flush);
  } else {
    isFlushRequested = false;
    immediate = 0;
  }
}

function enqueueBindingConnect(binding) {
  if (immediate < minimumImmediate) {
    immediate++;
    binding.connect(false);
  } else {
    var id = binding.__connectQueueId;
    if (id === undefined) {
      id = nextId;
      nextId++;
      binding.__connectQueueId = id;
    }

    if (!queued[id]) {
      queue.push(binding);
      queued[id] = true;
    }
  }
  if (!isFlushRequested) {
    isFlushRequested = true;
    __WEBPACK_IMPORTED_MODULE_1_aurelia_pal__["d" /* PLATFORM */].requestAnimationFrame(flush);
  }
}

function addSubscriber(context, callable) {
  if (this.hasSubscriber(context, callable)) {
    return false;
  }
  if (!this._context0) {
    this._context0 = context;
    this._callable0 = callable;
    return true;
  }
  if (!this._context1) {
    this._context1 = context;
    this._callable1 = callable;
    return true;
  }
  if (!this._context2) {
    this._context2 = context;
    this._callable2 = callable;
    return true;
  }
  if (!this._contextsRest) {
    this._contextsRest = [context];
    this._callablesRest = [callable];
    return true;
  }
  this._contextsRest.push(context);
  this._callablesRest.push(callable);
  return true;
}

function removeSubscriber(context, callable) {
  if (this._context0 === context && this._callable0 === callable) {
    this._context0 = null;
    this._callable0 = null;
    return true;
  }
  if (this._context1 === context && this._callable1 === callable) {
    this._context1 = null;
    this._callable1 = null;
    return true;
  }
  if (this._context2 === context && this._callable2 === callable) {
    this._context2 = null;
    this._callable2 = null;
    return true;
  }
  var callables = this._callablesRest;
  if (callables === undefined || callables.length === 0) {
    return false;
  }
  var contexts = this._contextsRest;
  var i = 0;
  while (!(callables[i] === callable && contexts[i] === context) && callables.length > i) {
    i++;
  }
  if (i >= callables.length) {
    return false;
  }
  contexts.splice(i, 1);
  callables.splice(i, 1);
  return true;
}

var arrayPool1 = [];
var arrayPool2 = [];
var poolUtilization = [];

function callSubscribers(newValue, oldValue) {
  var context0 = this._context0;
  var callable0 = this._callable0;
  var context1 = this._context1;
  var callable1 = this._callable1;
  var context2 = this._context2;
  var callable2 = this._callable2;
  var length = this._contextsRest ? this._contextsRest.length : 0;
  var contextsRest = void 0;
  var callablesRest = void 0;
  var poolIndex = void 0;
  var i = void 0;
  if (length) {
    poolIndex = poolUtilization.length;
    while (poolIndex-- && poolUtilization[poolIndex]) {}
    if (poolIndex < 0) {
      poolIndex = poolUtilization.length;
      contextsRest = [];
      callablesRest = [];
      poolUtilization.push(true);
      arrayPool1.push(contextsRest);
      arrayPool2.push(callablesRest);
    } else {
      poolUtilization[poolIndex] = true;
      contextsRest = arrayPool1[poolIndex];
      callablesRest = arrayPool2[poolIndex];
    }

    i = length;
    while (i--) {
      contextsRest[i] = this._contextsRest[i];
      callablesRest[i] = this._callablesRest[i];
    }
  }

  if (context0) {
    if (callable0) {
      callable0.call(context0, newValue, oldValue);
    } else {
      context0(newValue, oldValue);
    }
  }
  if (context1) {
    if (callable1) {
      callable1.call(context1, newValue, oldValue);
    } else {
      context1(newValue, oldValue);
    }
  }
  if (context2) {
    if (callable2) {
      callable2.call(context2, newValue, oldValue);
    } else {
      context2(newValue, oldValue);
    }
  }
  if (length) {
    for (i = 0; i < length; i++) {
      var callable = callablesRest[i];
      var context = contextsRest[i];
      if (callable) {
        callable.call(context, newValue, oldValue);
      } else {
        context(newValue, oldValue);
      }
      contextsRest[i] = null;
      callablesRest[i] = null;
    }
    poolUtilization[poolIndex] = false;
  }
}

function hasSubscribers() {
  return !!(this._context0 || this._context1 || this._context2 || this._contextsRest && this._contextsRest.length);
}

function hasSubscriber(context, callable) {
  var has = this._context0 === context && this._callable0 === callable || this._context1 === context && this._callable1 === callable || this._context2 === context && this._callable2 === callable;
  if (has) {
    return true;
  }
  var index = void 0;
  var contexts = this._contextsRest;
  if (!contexts || (index = contexts.length) === 0) {
    return false;
  }
  var callables = this._callablesRest;
  while (index--) {
    if (contexts[index] === context && callables[index] === callable) {
      return true;
    }
  }
  return false;
}

function subscriberCollection() {
  return function (target) {
    target.prototype.addSubscriber = addSubscriber;
    target.prototype.removeSubscriber = removeSubscriber;
    target.prototype.callSubscribers = callSubscribers;
    target.prototype.hasSubscribers = hasSubscribers;
    target.prototype.hasSubscriber = hasSubscriber;
  };
}

var ExpressionObserver = (_dec = connectable(), _dec2 = subscriberCollection(), _dec(_class = _dec2(_class = function () {
  function ExpressionObserver(scope, expression, observerLocator, lookupFunctions) {
    

    this.scope = scope;
    this.expression = expression;
    this.observerLocator = observerLocator;
    this.lookupFunctions = lookupFunctions;
  }

  ExpressionObserver.prototype.getValue = function getValue() {
    return this.expression.evaluate(this.scope, this.lookupFunctions);
  };

  ExpressionObserver.prototype.setValue = function setValue(newValue) {
    this.expression.assign(this.scope, newValue);
  };

  ExpressionObserver.prototype.subscribe = function subscribe(context, callable) {
    var _this = this;

    if (!this.hasSubscribers()) {
      this.oldValue = this.expression.evaluate(this.scope, this.lookupFunctions);
      this.expression.connect(this, this.scope);
    }
    this.addSubscriber(context, callable);
    if (arguments.length === 1 && context instanceof Function) {
      return {
        dispose: function dispose() {
          _this.unsubscribe(context, callable);
        }
      };
    }
  };

  ExpressionObserver.prototype.unsubscribe = function unsubscribe(context, callable) {
    if (this.removeSubscriber(context, callable) && !this.hasSubscribers()) {
      this.unobserve(true);
      this.oldValue = undefined;
    }
  };

  ExpressionObserver.prototype.call = function call() {
    var newValue = this.expression.evaluate(this.scope, this.lookupFunctions);
    var oldValue = this.oldValue;
    if (newValue !== oldValue) {
      this.oldValue = newValue;
      this.callSubscribers(newValue, oldValue);
    }
    this._version++;
    this.expression.connect(this, this.scope);
    this.unobserve(false);
  };

  return ExpressionObserver;
}()) || _class) || _class);

function isIndex(s) {
  return +s === s >>> 0;
}

function toNumber(s) {
  return +s;
}

function newSplice(index, removed, addedCount) {
  return {
    index: index,
    removed: removed,
    addedCount: addedCount
  };
}

var EDIT_LEAVE = 0;
var EDIT_UPDATE = 1;
var EDIT_ADD = 2;
var EDIT_DELETE = 3;

function ArraySplice() {}

ArraySplice.prototype = {
  calcEditDistances: function calcEditDistances(current, currentStart, currentEnd, old, oldStart, oldEnd) {
    var rowCount = oldEnd - oldStart + 1;
    var columnCount = currentEnd - currentStart + 1;
    var distances = new Array(rowCount);
    var north = void 0;
    var west = void 0;

    for (var _i = 0; _i < rowCount; ++_i) {
      distances[_i] = new Array(columnCount);
      distances[_i][0] = _i;
    }

    for (var j = 0; j < columnCount; ++j) {
      distances[0][j] = j;
    }

    for (var _i2 = 1; _i2 < rowCount; ++_i2) {
      for (var _j = 1; _j < columnCount; ++_j) {
        if (this.equals(current[currentStart + _j - 1], old[oldStart + _i2 - 1])) {
          distances[_i2][_j] = distances[_i2 - 1][_j - 1];
        } else {
          north = distances[_i2 - 1][_j] + 1;
          west = distances[_i2][_j - 1] + 1;
          distances[_i2][_j] = north < west ? north : west;
        }
      }
    }

    return distances;
  },

  spliceOperationsFromEditDistances: function spliceOperationsFromEditDistances(distances) {
    var i = distances.length - 1;
    var j = distances[0].length - 1;
    var current = distances[i][j];
    var edits = [];
    while (i > 0 || j > 0) {
      if (i === 0) {
        edits.push(EDIT_ADD);
        j--;
        continue;
      }
      if (j === 0) {
        edits.push(EDIT_DELETE);
        i--;
        continue;
      }
      var northWest = distances[i - 1][j - 1];
      var west = distances[i - 1][j];
      var north = distances[i][j - 1];

      var min = void 0;
      if (west < north) {
        min = west < northWest ? west : northWest;
      } else {
        min = north < northWest ? north : northWest;
      }

      if (min === northWest) {
        if (northWest === current) {
          edits.push(EDIT_LEAVE);
        } else {
          edits.push(EDIT_UPDATE);
          current = northWest;
        }
        i--;
        j--;
      } else if (min === west) {
        edits.push(EDIT_DELETE);
        i--;
        current = west;
      } else {
        edits.push(EDIT_ADD);
        j--;
        current = north;
      }
    }

    edits.reverse();
    return edits;
  },

  calcSplices: function calcSplices(current, currentStart, currentEnd, old, oldStart, oldEnd) {
    var prefixCount = 0;
    var suffixCount = 0;

    var minLength = Math.min(currentEnd - currentStart, oldEnd - oldStart);
    if (currentStart === 0 && oldStart === 0) {
      prefixCount = this.sharedPrefix(current, old, minLength);
    }

    if (currentEnd === current.length && oldEnd === old.length) {
      suffixCount = this.sharedSuffix(current, old, minLength - prefixCount);
    }

    currentStart += prefixCount;
    oldStart += prefixCount;
    currentEnd -= suffixCount;
    oldEnd -= suffixCount;

    if (currentEnd - currentStart === 0 && oldEnd - oldStart === 0) {
      return [];
    }

    if (currentStart === currentEnd) {
      var _splice = newSplice(currentStart, [], 0);
      while (oldStart < oldEnd) {
        _splice.removed.push(old[oldStart++]);
      }

      return [_splice];
    } else if (oldStart === oldEnd) {
      return [newSplice(currentStart, [], currentEnd - currentStart)];
    }

    var ops = this.spliceOperationsFromEditDistances(this.calcEditDistances(current, currentStart, currentEnd, old, oldStart, oldEnd));

    var splice = undefined;
    var splices = [];
    var index = currentStart;
    var oldIndex = oldStart;
    for (var _i3 = 0; _i3 < ops.length; ++_i3) {
      switch (ops[_i3]) {
        case EDIT_LEAVE:
          if (splice) {
            splices.push(splice);
            splice = undefined;
          }

          index++;
          oldIndex++;
          break;
        case EDIT_UPDATE:
          if (!splice) {
            splice = newSplice(index, [], 0);
          }

          splice.addedCount++;
          index++;

          splice.removed.push(old[oldIndex]);
          oldIndex++;
          break;
        case EDIT_ADD:
          if (!splice) {
            splice = newSplice(index, [], 0);
          }

          splice.addedCount++;
          index++;
          break;
        case EDIT_DELETE:
          if (!splice) {
            splice = newSplice(index, [], 0);
          }

          splice.removed.push(old[oldIndex]);
          oldIndex++;
          break;
      }
    }

    if (splice) {
      splices.push(splice);
    }
    return splices;
  },

  sharedPrefix: function sharedPrefix(current, old, searchLength) {
    for (var _i4 = 0; _i4 < searchLength; ++_i4) {
      if (!this.equals(current[_i4], old[_i4])) {
        return _i4;
      }
    }

    return searchLength;
  },

  sharedSuffix: function sharedSuffix(current, old, searchLength) {
    var index1 = current.length;
    var index2 = old.length;
    var count = 0;
    while (count < searchLength && this.equals(current[--index1], old[--index2])) {
      count++;
    }

    return count;
  },

  calculateSplices: function calculateSplices(current, previous) {
    return this.calcSplices(current, 0, current.length, previous, 0, previous.length);
  },

  equals: function equals(currentValue, previousValue) {
    return currentValue === previousValue;
  }
};

var arraySplice = new ArraySplice();

function calcSplices(current, currentStart, currentEnd, old, oldStart, oldEnd) {
  return arraySplice.calcSplices(current, currentStart, currentEnd, old, oldStart, oldEnd);
}

function intersect(start1, end1, start2, end2) {
  if (end1 < start2 || end2 < start1) {
    return -1;
  }

  if (end1 === start2 || end2 === start1) {
    return 0;
  }

  if (start1 < start2) {
    if (end1 < end2) {
      return end1 - start2;
    }

    return end2 - start2;
  }

  if (end2 < end1) {
    return end2 - start1;
  }

  return end1 - start1;
}

function mergeSplice(splices, index, removed, addedCount) {
  var splice = newSplice(index, removed, addedCount);

  var inserted = false;
  var insertionOffset = 0;

  for (var _i5 = 0; _i5 < splices.length; _i5++) {
    var current = splices[_i5];
    current.index += insertionOffset;

    if (inserted) {
      continue;
    }

    var intersectCount = intersect(splice.index, splice.index + splice.removed.length, current.index, current.index + current.addedCount);

    if (intersectCount >= 0) {

      splices.splice(_i5, 1);
      _i5--;

      insertionOffset -= current.addedCount - current.removed.length;

      splice.addedCount += current.addedCount - intersectCount;
      var deleteCount = splice.removed.length + current.removed.length - intersectCount;

      if (!splice.addedCount && !deleteCount) {
        inserted = true;
      } else {
        var currentRemoved = current.removed;

        if (splice.index < current.index) {
          var prepend = splice.removed.slice(0, current.index - splice.index);
          Array.prototype.push.apply(prepend, currentRemoved);
          currentRemoved = prepend;
        }

        if (splice.index + splice.removed.length > current.index + current.addedCount) {
          var append = splice.removed.slice(current.index + current.addedCount - splice.index);
          Array.prototype.push.apply(currentRemoved, append);
        }

        splice.removed = currentRemoved;
        if (current.index < splice.index) {
          splice.index = current.index;
        }
      }
    } else if (splice.index < current.index) {

      inserted = true;

      splices.splice(_i5, 0, splice);
      _i5++;

      var offset = splice.addedCount - splice.removed.length;
      current.index += offset;
      insertionOffset += offset;
    }
  }

  if (!inserted) {
    splices.push(splice);
  }
}

function createInitialSplices(array, changeRecords) {
  var splices = [];

  for (var _i6 = 0; _i6 < changeRecords.length; _i6++) {
    var record = changeRecords[_i6];
    switch (record.type) {
      case 'splice':
        mergeSplice(splices, record.index, record.removed.slice(), record.addedCount);
        break;
      case 'add':
      case 'update':
      case 'delete':
        if (!isIndex(record.name)) {
          continue;
        }

        var index = toNumber(record.name);
        if (index < 0) {
          continue;
        }

        mergeSplice(splices, index, [record.oldValue], record.type === 'delete' ? 0 : 1);
        break;
      default:
        console.error('Unexpected record type: ' + JSON.stringify(record));
        break;
    }
  }

  return splices;
}

function projectArraySplices(array, changeRecords) {
  var splices = [];

  createInitialSplices(array, changeRecords).forEach(function (splice) {
    if (splice.addedCount === 1 && splice.removed.length === 1) {
      if (splice.removed[0] !== array[splice.index]) {
        splices.push(splice);
      }

      return;
    }

    splices = splices.concat(calcSplices(array, splice.index, splice.index + splice.addedCount, splice.removed, 0, splice.removed.length));
  });

  return splices;
}

function newRecord(type, object, key, oldValue) {
  return {
    type: type,
    object: object,
    key: key,
    oldValue: oldValue
  };
}

function getChangeRecords(map) {
  var entries = new Array(map.size);
  var keys = map.keys();
  var i = 0;
  var item = void 0;

  while (item = keys.next()) {
    if (item.done) {
      break;
    }

    entries[i] = newRecord('added', map, item.value);
    i++;
  }

  return entries;
}

var ModifyCollectionObserver = (_dec3 = subscriberCollection(), _dec3(_class2 = function () {
  function ModifyCollectionObserver(taskQueue, collection) {
    

    this.taskQueue = taskQueue;
    this.queued = false;
    this.changeRecords = null;
    this.oldCollection = null;
    this.collection = collection;
    this.lengthPropertyName = collection instanceof Map || collection instanceof Set ? 'size' : 'length';
  }

  ModifyCollectionObserver.prototype.subscribe = function subscribe(context, callable) {
    this.addSubscriber(context, callable);
  };

  ModifyCollectionObserver.prototype.unsubscribe = function unsubscribe(context, callable) {
    this.removeSubscriber(context, callable);
  };

  ModifyCollectionObserver.prototype.addChangeRecord = function addChangeRecord(changeRecord) {
    if (!this.hasSubscribers() && !this.lengthObserver) {
      return;
    }

    if (changeRecord.type === 'splice') {
      var index = changeRecord.index;
      var arrayLength = changeRecord.object.length;
      if (index > arrayLength) {
        index = arrayLength - changeRecord.addedCount;
      } else if (index < 0) {
        index = arrayLength + changeRecord.removed.length + index - changeRecord.addedCount;
      }
      if (index < 0) {
        index = 0;
      }
      changeRecord.index = index;
    }

    if (this.changeRecords === null) {
      this.changeRecords = [changeRecord];
    } else {
      this.changeRecords.push(changeRecord);
    }

    if (!this.queued) {
      this.queued = true;
      this.taskQueue.queueMicroTask(this);
    }
  };

  ModifyCollectionObserver.prototype.flushChangeRecords = function flushChangeRecords() {
    if (this.changeRecords && this.changeRecords.length || this.oldCollection) {
      this.call();
    }
  };

  ModifyCollectionObserver.prototype.reset = function reset(oldCollection) {
    this.oldCollection = oldCollection;

    if (this.hasSubscribers() && !this.queued) {
      this.queued = true;
      this.taskQueue.queueMicroTask(this);
    }
  };

  ModifyCollectionObserver.prototype.getLengthObserver = function getLengthObserver() {
    return this.lengthObserver || (this.lengthObserver = new CollectionLengthObserver(this.collection));
  };

  ModifyCollectionObserver.prototype.call = function call() {
    var changeRecords = this.changeRecords;
    var oldCollection = this.oldCollection;
    var records = void 0;

    this.queued = false;
    this.changeRecords = [];
    this.oldCollection = null;

    if (this.hasSubscribers()) {
      if (oldCollection) {
        if (this.collection instanceof Map || this.collection instanceof Set) {
          records = getChangeRecords(oldCollection);
        } else {
          records = calcSplices(this.collection, 0, this.collection.length, oldCollection, 0, oldCollection.length);
        }
      } else {
        if (this.collection instanceof Map || this.collection instanceof Set) {
          records = changeRecords;
        } else {
          records = projectArraySplices(this.collection, changeRecords);
        }
      }

      this.callSubscribers(records);
    }

    if (this.lengthObserver) {
      this.lengthObserver.call(this.collection[this.lengthPropertyName]);
    }
  };

  return ModifyCollectionObserver;
}()) || _class2);

var CollectionLengthObserver = (_dec4 = subscriberCollection(), _dec4(_class3 = function () {
  function CollectionLengthObserver(collection) {
    

    this.collection = collection;
    this.lengthPropertyName = collection instanceof Map || collection instanceof Set ? 'size' : 'length';
    this.currentValue = collection[this.lengthPropertyName];
  }

  CollectionLengthObserver.prototype.getValue = function getValue() {
    return this.collection[this.lengthPropertyName];
  };

  CollectionLengthObserver.prototype.setValue = function setValue(newValue) {
    this.collection[this.lengthPropertyName] = newValue;
  };

  CollectionLengthObserver.prototype.subscribe = function subscribe(context, callable) {
    this.addSubscriber(context, callable);
  };

  CollectionLengthObserver.prototype.unsubscribe = function unsubscribe(context, callable) {
    this.removeSubscriber(context, callable);
  };

  CollectionLengthObserver.prototype.call = function call(newValue) {
    var oldValue = this.currentValue;
    this.callSubscribers(newValue, oldValue);
    this.currentValue = newValue;
  };

  return CollectionLengthObserver;
}()) || _class3);

var pop = Array.prototype.pop;
var push = Array.prototype.push;
var reverse = Array.prototype.reverse;
var shift = Array.prototype.shift;
var sort = Array.prototype.sort;
var splice = Array.prototype.splice;
var unshift = Array.prototype.unshift;

Array.prototype.pop = function () {
  var notEmpty = this.length > 0;
  var methodCallResult = pop.apply(this, arguments);
  if (notEmpty && this.__array_observer__ !== undefined) {
    this.__array_observer__.addChangeRecord({
      type: 'delete',
      object: this,
      name: this.length,
      oldValue: methodCallResult
    });
  }
  return methodCallResult;
};

Array.prototype.push = function () {
  var methodCallResult = push.apply(this, arguments);
  if (this.__array_observer__ !== undefined) {
    this.__array_observer__.addChangeRecord({
      type: 'splice',
      object: this,
      index: this.length - arguments.length,
      removed: [],
      addedCount: arguments.length
    });
  }
  return methodCallResult;
};

Array.prototype.reverse = function () {
  var oldArray = void 0;
  if (this.__array_observer__ !== undefined) {
    this.__array_observer__.flushChangeRecords();
    oldArray = this.slice();
  }
  var methodCallResult = reverse.apply(this, arguments);
  if (this.__array_observer__ !== undefined) {
    this.__array_observer__.reset(oldArray);
  }
  return methodCallResult;
};

Array.prototype.shift = function () {
  var notEmpty = this.length > 0;
  var methodCallResult = shift.apply(this, arguments);
  if (notEmpty && this.__array_observer__ !== undefined) {
    this.__array_observer__.addChangeRecord({
      type: 'delete',
      object: this,
      name: 0,
      oldValue: methodCallResult
    });
  }
  return methodCallResult;
};

Array.prototype.sort = function () {
  var oldArray = void 0;
  if (this.__array_observer__ !== undefined) {
    this.__array_observer__.flushChangeRecords();
    oldArray = this.slice();
  }
  var methodCallResult = sort.apply(this, arguments);
  if (this.__array_observer__ !== undefined) {
    this.__array_observer__.reset(oldArray);
  }
  return methodCallResult;
};

Array.prototype.splice = function () {
  var methodCallResult = splice.apply(this, arguments);
  if (this.__array_observer__ !== undefined) {
    this.__array_observer__.addChangeRecord({
      type: 'splice',
      object: this,
      index: +arguments[0],
      removed: methodCallResult,
      addedCount: arguments.length > 2 ? arguments.length - 2 : 0
    });
  }
  return methodCallResult;
};

Array.prototype.unshift = function () {
  var methodCallResult = unshift.apply(this, arguments);
  if (this.__array_observer__ !== undefined) {
    this.__array_observer__.addChangeRecord({
      type: 'splice',
      object: this,
      index: 0,
      removed: [],
      addedCount: arguments.length
    });
  }
  return methodCallResult;
};

function _getArrayObserver(taskQueue, array) {
  return ModifyArrayObserver.for(taskQueue, array);
}

var ModifyArrayObserver = function (_ModifyCollectionObse) {
  _inherits(ModifyArrayObserver, _ModifyCollectionObse);

  function ModifyArrayObserver(taskQueue, array) {
    

    return _possibleConstructorReturn(this, _ModifyCollectionObse.call(this, taskQueue, array));
  }

  ModifyArrayObserver.for = function _for(taskQueue, array) {
    if (!('__array_observer__' in array)) {
      Reflect.defineProperty(array, '__array_observer__', {
        value: ModifyArrayObserver.create(taskQueue, array),
        enumerable: false, configurable: false
      });
    }
    return array.__array_observer__;
  };

  ModifyArrayObserver.create = function create(taskQueue, array) {
    return new ModifyArrayObserver(taskQueue, array);
  };

  return ModifyArrayObserver;
}(ModifyCollectionObserver);

var Expression = function () {
  function Expression() {
    

    this.isChain = false;
    this.isAssignable = false;
  }

  Expression.prototype.evaluate = function evaluate(scope, lookupFunctions, args) {
    throw new Error('Binding expression "' + this + '" cannot be evaluated.');
  };

  Expression.prototype.assign = function assign(scope, value, lookupFunctions) {
    throw new Error('Binding expression "' + this + '" cannot be assigned to.');
  };

  Expression.prototype.toString = function toString() {
    return typeof FEATURE_NO_UNPARSER === 'undefined' ? _Unparser.unparse(this) : Function.prototype.toString.call(this);
  };

  return Expression;
}();

var Chain = function (_Expression) {
  _inherits(Chain, _Expression);

  function Chain(expressions) {
    

    var _this3 = _possibleConstructorReturn(this, _Expression.call(this));

    _this3.expressions = expressions;
    _this3.isChain = true;
    return _this3;
  }

  Chain.prototype.evaluate = function evaluate(scope, lookupFunctions) {
    var result = void 0;
    var expressions = this.expressions;
    var last = void 0;

    for (var _i7 = 0, length = expressions.length; _i7 < length; ++_i7) {
      last = expressions[_i7].evaluate(scope, lookupFunctions);

      if (last !== null) {
        result = last;
      }
    }

    return result;
  };

  Chain.prototype.accept = function accept(visitor) {
    return visitor.visitChain(this);
  };

  return Chain;
}(Expression);

var BindingBehavior = function (_Expression2) {
  _inherits(BindingBehavior, _Expression2);

  function BindingBehavior(expression, name, args) {
    

    var _this4 = _possibleConstructorReturn(this, _Expression2.call(this));

    _this4.expression = expression;
    _this4.name = name;
    _this4.args = args;
    return _this4;
  }

  BindingBehavior.prototype.evaluate = function evaluate(scope, lookupFunctions) {
    return this.expression.evaluate(scope, lookupFunctions);
  };

  BindingBehavior.prototype.assign = function assign(scope, value, lookupFunctions) {
    return this.expression.assign(scope, value, lookupFunctions);
  };

  BindingBehavior.prototype.accept = function accept(visitor) {
    return visitor.visitBindingBehavior(this);
  };

  BindingBehavior.prototype.connect = function connect(binding, scope) {
    this.expression.connect(binding, scope);
  };

  BindingBehavior.prototype.bind = function bind(binding, scope, lookupFunctions) {
    if (this.expression.expression && this.expression.bind) {
      this.expression.bind(binding, scope, lookupFunctions);
    }
    var behavior = lookupFunctions.bindingBehaviors(this.name);
    if (!behavior) {
      throw new Error('No BindingBehavior named "' + this.name + '" was found!');
    }
    var behaviorKey = 'behavior-' + this.name;
    if (binding[behaviorKey]) {
      throw new Error('A binding behavior named "' + this.name + '" has already been applied to "' + this.expression + '"');
    }
    binding[behaviorKey] = behavior;
    behavior.bind.apply(behavior, [binding, scope].concat(evalList(scope, this.args, binding.lookupFunctions)));
  };

  BindingBehavior.prototype.unbind = function unbind(binding, scope) {
    var behaviorKey = 'behavior-' + this.name;
    binding[behaviorKey].unbind(binding, scope);
    binding[behaviorKey] = null;
    if (this.expression.expression && this.expression.unbind) {
      this.expression.unbind(binding, scope);
    }
  };

  return BindingBehavior;
}(Expression);

var ValueConverter = function (_Expression3) {
  _inherits(ValueConverter, _Expression3);

  function ValueConverter(expression, name, args, allArgs) {
    

    var _this5 = _possibleConstructorReturn(this, _Expression3.call(this));

    _this5.expression = expression;
    _this5.name = name;
    _this5.args = args;
    _this5.allArgs = allArgs;
    return _this5;
  }

  ValueConverter.prototype.evaluate = function evaluate(scope, lookupFunctions) {
    var converter = lookupFunctions.valueConverters(this.name);
    if (!converter) {
      throw new Error('No ValueConverter named "' + this.name + '" was found!');
    }

    if ('toView' in converter) {
      return converter.toView.apply(converter, evalList(scope, this.allArgs, lookupFunctions));
    }

    return this.allArgs[0].evaluate(scope, lookupFunctions);
  };

  ValueConverter.prototype.assign = function assign(scope, value, lookupFunctions) {
    var converter = lookupFunctions.valueConverters(this.name);
    if (!converter) {
      throw new Error('No ValueConverter named "' + this.name + '" was found!');
    }

    if ('fromView' in converter) {
      value = converter.fromView.apply(converter, [value].concat(evalList(scope, this.args, lookupFunctions)));
    }

    return this.allArgs[0].assign(scope, value, lookupFunctions);
  };

  ValueConverter.prototype.accept = function accept(visitor) {
    return visitor.visitValueConverter(this);
  };

  ValueConverter.prototype.connect = function connect(binding, scope) {
    var expressions = this.allArgs;
    var i = expressions.length;
    while (i--) {
      expressions[i].connect(binding, scope);
    }
    var converter = binding.lookupFunctions.valueConverters(this.name);
    if (!converter) {
      throw new Error('No ValueConverter named "' + this.name + '" was found!');
    }
    var signals = converter.signals;
    if (signals === undefined) {
      return;
    }
    i = signals.length;
    while (i--) {
      connectBindingToSignal(binding, signals[i]);
    }
  };

  return ValueConverter;
}(Expression);

var Assign = function (_Expression4) {
  _inherits(Assign, _Expression4);

  function Assign(target, value) {
    

    var _this6 = _possibleConstructorReturn(this, _Expression4.call(this));

    _this6.target = target;
    _this6.value = value;
    _this6.isAssignable = true;
    return _this6;
  }

  Assign.prototype.evaluate = function evaluate(scope, lookupFunctions) {
    return this.target.assign(scope, this.value.evaluate(scope, lookupFunctions));
  };

  Assign.prototype.accept = function accept(vistor) {
    vistor.visitAssign(this);
  };

  Assign.prototype.connect = function connect(binding, scope) {};

  Assign.prototype.assign = function assign(scope, value) {
    this.value.assign(scope, value);
    this.target.assign(scope, value);
  };

  return Assign;
}(Expression);

var Conditional = function (_Expression5) {
  _inherits(Conditional, _Expression5);

  function Conditional(condition, yes, no) {
    

    var _this7 = _possibleConstructorReturn(this, _Expression5.call(this));

    _this7.condition = condition;
    _this7.yes = yes;
    _this7.no = no;
    return _this7;
  }

  Conditional.prototype.evaluate = function evaluate(scope, lookupFunctions) {
    return !!this.condition.evaluate(scope, lookupFunctions) ? this.yes.evaluate(scope, lookupFunctions) : this.no.evaluate(scope, lookupFunctions);
  };

  Conditional.prototype.accept = function accept(visitor) {
    return visitor.visitConditional(this);
  };

  Conditional.prototype.connect = function connect(binding, scope) {
    this.condition.connect(binding, scope);
    if (this.condition.evaluate(scope)) {
      this.yes.connect(binding, scope);
    } else {
      this.no.connect(binding, scope);
    }
  };

  return Conditional;
}(Expression);

var AccessThis = function (_Expression6) {
  _inherits(AccessThis, _Expression6);

  function AccessThis(ancestor) {
    

    var _this8 = _possibleConstructorReturn(this, _Expression6.call(this));

    _this8.ancestor = ancestor;
    return _this8;
  }

  AccessThis.prototype.evaluate = function evaluate(scope, lookupFunctions) {
    var oc = scope.overrideContext;
    var i = this.ancestor;
    while (i-- && oc) {
      oc = oc.parentOverrideContext;
    }
    return i < 1 && oc ? oc.bindingContext : undefined;
  };

  AccessThis.prototype.accept = function accept(visitor) {
    return visitor.visitAccessThis(this);
  };

  AccessThis.prototype.connect = function connect(binding, scope) {};

  return AccessThis;
}(Expression);

var AccessScope = function (_Expression7) {
  _inherits(AccessScope, _Expression7);

  function AccessScope(name, ancestor) {
    

    var _this9 = _possibleConstructorReturn(this, _Expression7.call(this));

    _this9.name = name;
    _this9.ancestor = ancestor;
    _this9.isAssignable = true;
    return _this9;
  }

  AccessScope.prototype.evaluate = function evaluate(scope, lookupFunctions) {
    var context = getContextFor(this.name, scope, this.ancestor);
    return context[this.name];
  };

  AccessScope.prototype.assign = function assign(scope, value) {
    var context = getContextFor(this.name, scope, this.ancestor);
    return context ? context[this.name] = value : undefined;
  };

  AccessScope.prototype.accept = function accept(visitor) {
    return visitor.visitAccessScope(this);
  };

  AccessScope.prototype.connect = function connect(binding, scope) {
    var context = getContextFor(this.name, scope, this.ancestor);
    binding.observeProperty(context, this.name);
  };

  return AccessScope;
}(Expression);

var AccessMember = function (_Expression8) {
  _inherits(AccessMember, _Expression8);

  function AccessMember(object, name) {
    

    var _this10 = _possibleConstructorReturn(this, _Expression8.call(this));

    _this10.object = object;
    _this10.name = name;
    _this10.isAssignable = true;
    return _this10;
  }

  AccessMember.prototype.evaluate = function evaluate(scope, lookupFunctions) {
    var instance = this.object.evaluate(scope, lookupFunctions);
    return instance === null || instance === undefined ? instance : instance[this.name];
  };

  AccessMember.prototype.assign = function assign(scope, value) {
    var instance = this.object.evaluate(scope);

    if (instance === null || instance === undefined) {
      instance = {};
      this.object.assign(scope, instance);
    }

    instance[this.name] = value;
    return value;
  };

  AccessMember.prototype.accept = function accept(visitor) {
    return visitor.visitAccessMember(this);
  };

  AccessMember.prototype.connect = function connect(binding, scope) {
    this.object.connect(binding, scope);
    var obj = this.object.evaluate(scope);
    if (obj) {
      binding.observeProperty(obj, this.name);
    }
  };

  return AccessMember;
}(Expression);

var AccessKeyed = function (_Expression9) {
  _inherits(AccessKeyed, _Expression9);

  function AccessKeyed(object, key) {
    

    var _this11 = _possibleConstructorReturn(this, _Expression9.call(this));

    _this11.object = object;
    _this11.key = key;
    _this11.isAssignable = true;
    return _this11;
  }

  AccessKeyed.prototype.evaluate = function evaluate(scope, lookupFunctions) {
    var instance = this.object.evaluate(scope, lookupFunctions);
    var lookup = this.key.evaluate(scope, lookupFunctions);
    return getKeyed(instance, lookup);
  };

  AccessKeyed.prototype.assign = function assign(scope, value) {
    var instance = this.object.evaluate(scope);
    var lookup = this.key.evaluate(scope);
    return setKeyed(instance, lookup, value);
  };

  AccessKeyed.prototype.accept = function accept(visitor) {
    return visitor.visitAccessKeyed(this);
  };

  AccessKeyed.prototype.connect = function connect(binding, scope) {
    this.object.connect(binding, scope);
    var obj = this.object.evaluate(scope);
    if (obj instanceof Object) {
      this.key.connect(binding, scope);
      var key = this.key.evaluate(scope);

      if (key !== null && key !== undefined && !(Array.isArray(obj) && typeof key === 'number')) {
        binding.observeProperty(obj, key);
      }
    }
  };

  return AccessKeyed;
}(Expression);

var CallScope = function (_Expression10) {
  _inherits(CallScope, _Expression10);

  function CallScope(name, args, ancestor) {
    

    var _this12 = _possibleConstructorReturn(this, _Expression10.call(this));

    _this12.name = name;
    _this12.args = args;
    _this12.ancestor = ancestor;
    return _this12;
  }

  CallScope.prototype.evaluate = function evaluate(scope, lookupFunctions, mustEvaluate) {
    var args = evalList(scope, this.args, lookupFunctions);
    var context = getContextFor(this.name, scope, this.ancestor);
    var func = getFunction(context, this.name, mustEvaluate);
    if (func) {
      return func.apply(context, args);
    }
    return undefined;
  };

  CallScope.prototype.accept = function accept(visitor) {
    return visitor.visitCallScope(this);
  };

  CallScope.prototype.connect = function connect(binding, scope) {
    var args = this.args;
    var i = args.length;
    while (i--) {
      args[i].connect(binding, scope);
    }
  };

  return CallScope;
}(Expression);

var CallMember = function (_Expression11) {
  _inherits(CallMember, _Expression11);

  function CallMember(object, name, args) {
    

    var _this13 = _possibleConstructorReturn(this, _Expression11.call(this));

    _this13.object = object;
    _this13.name = name;
    _this13.args = args;
    return _this13;
  }

  CallMember.prototype.evaluate = function evaluate(scope, lookupFunctions, mustEvaluate) {
    var instance = this.object.evaluate(scope, lookupFunctions);
    var args = evalList(scope, this.args, lookupFunctions);
    var func = getFunction(instance, this.name, mustEvaluate);
    if (func) {
      return func.apply(instance, args);
    }
    return undefined;
  };

  CallMember.prototype.accept = function accept(visitor) {
    return visitor.visitCallMember(this);
  };

  CallMember.prototype.connect = function connect(binding, scope) {
    this.object.connect(binding, scope);
    var obj = this.object.evaluate(scope);
    if (getFunction(obj, this.name, false)) {
      var args = this.args;
      var _i8 = args.length;
      while (_i8--) {
        args[_i8].connect(binding, scope);
      }
    }
  };

  return CallMember;
}(Expression);

var CallFunction = function (_Expression12) {
  _inherits(CallFunction, _Expression12);

  function CallFunction(func, args) {
    

    var _this14 = _possibleConstructorReturn(this, _Expression12.call(this));

    _this14.func = func;
    _this14.args = args;
    return _this14;
  }

  CallFunction.prototype.evaluate = function evaluate(scope, lookupFunctions, mustEvaluate) {
    var func = this.func.evaluate(scope, lookupFunctions);
    if (typeof func === 'function') {
      return func.apply(null, evalList(scope, this.args, lookupFunctions));
    }
    if (!mustEvaluate && (func === null || func === undefined)) {
      return undefined;
    }
    throw new Error(this.func + ' is not a function');
  };

  CallFunction.prototype.accept = function accept(visitor) {
    return visitor.visitCallFunction(this);
  };

  CallFunction.prototype.connect = function connect(binding, scope) {
    this.func.connect(binding, scope);
    var func = this.func.evaluate(scope);
    if (typeof func === 'function') {
      var args = this.args;
      var _i9 = args.length;
      while (_i9--) {
        args[_i9].connect(binding, scope);
      }
    }
  };

  return CallFunction;
}(Expression);

var Binary = function (_Expression13) {
  _inherits(Binary, _Expression13);

  function Binary(operation, left, right) {
    

    var _this15 = _possibleConstructorReturn(this, _Expression13.call(this));

    _this15.operation = operation;
    _this15.left = left;
    _this15.right = right;
    return _this15;
  }

  Binary.prototype.evaluate = function evaluate(scope, lookupFunctions) {
    var left = this.left.evaluate(scope, lookupFunctions);

    switch (this.operation) {
      case '&&':
        return left && this.right.evaluate(scope, lookupFunctions);
      case '||':
        return left || this.right.evaluate(scope, lookupFunctions);
    }

    var right = this.right.evaluate(scope, lookupFunctions);

    switch (this.operation) {
      case '==':
        return left == right;
      case '===':
        return left === right;
      case '!=':
        return left != right;
      case '!==':
        return left !== right;
    }

    if (left === null || right === null || left === undefined || right === undefined) {
      switch (this.operation) {
        case '+':
          if (left !== null && left !== undefined) return left;
          if (right !== null && right !== undefined) return right;
          return 0;
        case '-':
          if (left !== null && left !== undefined) return left;
          if (right !== null && right !== undefined) return 0 - right;
          return 0;
      }

      return null;
    }

    switch (this.operation) {
      case '+':
        return autoConvertAdd(left, right);
      case '-':
        return left - right;
      case '*':
        return left * right;
      case '/':
        return left / right;
      case '%':
        return left % right;
      case '<':
        return left < right;
      case '>':
        return left > right;
      case '<=':
        return left <= right;
      case '>=':
        return left >= right;
      case '^':
        return left ^ right;
    }

    throw new Error('Internal error [' + this.operation + '] not handled');
  };

  Binary.prototype.accept = function accept(visitor) {
    return visitor.visitBinary(this);
  };

  Binary.prototype.connect = function connect(binding, scope) {
    this.left.connect(binding, scope);
    var left = this.left.evaluate(scope);
    if (this.operation === '&&' && !left || this.operation === '||' && left) {
      return;
    }
    this.right.connect(binding, scope);
  };

  return Binary;
}(Expression);

var PrefixNot = function (_Expression14) {
  _inherits(PrefixNot, _Expression14);

  function PrefixNot(operation, expression) {
    

    var _this16 = _possibleConstructorReturn(this, _Expression14.call(this));

    _this16.operation = operation;
    _this16.expression = expression;
    return _this16;
  }

  PrefixNot.prototype.evaluate = function evaluate(scope, lookupFunctions) {
    return !this.expression.evaluate(scope, lookupFunctions);
  };

  PrefixNot.prototype.accept = function accept(visitor) {
    return visitor.visitPrefix(this);
  };

  PrefixNot.prototype.connect = function connect(binding, scope) {
    this.expression.connect(binding, scope);
  };

  return PrefixNot;
}(Expression);

var LiteralPrimitive = function (_Expression15) {
  _inherits(LiteralPrimitive, _Expression15);

  function LiteralPrimitive(value) {
    

    var _this17 = _possibleConstructorReturn(this, _Expression15.call(this));

    _this17.value = value;
    return _this17;
  }

  LiteralPrimitive.prototype.evaluate = function evaluate(scope, lookupFunctions) {
    return this.value;
  };

  LiteralPrimitive.prototype.accept = function accept(visitor) {
    return visitor.visitLiteralPrimitive(this);
  };

  LiteralPrimitive.prototype.connect = function connect(binding, scope) {};

  return LiteralPrimitive;
}(Expression);

var LiteralString = function (_Expression16) {
  _inherits(LiteralString, _Expression16);

  function LiteralString(value) {
    

    var _this18 = _possibleConstructorReturn(this, _Expression16.call(this));

    _this18.value = value;
    return _this18;
  }

  LiteralString.prototype.evaluate = function evaluate(scope, lookupFunctions) {
    return this.value;
  };

  LiteralString.prototype.accept = function accept(visitor) {
    return visitor.visitLiteralString(this);
  };

  LiteralString.prototype.connect = function connect(binding, scope) {};

  return LiteralString;
}(Expression);

var LiteralArray = function (_Expression17) {
  _inherits(LiteralArray, _Expression17);

  function LiteralArray(elements) {
    

    var _this19 = _possibleConstructorReturn(this, _Expression17.call(this));

    _this19.elements = elements;
    return _this19;
  }

  LiteralArray.prototype.evaluate = function evaluate(scope, lookupFunctions) {
    var elements = this.elements;
    var result = [];

    for (var _i10 = 0, length = elements.length; _i10 < length; ++_i10) {
      result[_i10] = elements[_i10].evaluate(scope, lookupFunctions);
    }

    return result;
  };

  LiteralArray.prototype.accept = function accept(visitor) {
    return visitor.visitLiteralArray(this);
  };

  LiteralArray.prototype.connect = function connect(binding, scope) {
    var length = this.elements.length;
    for (var _i11 = 0; _i11 < length; _i11++) {
      this.elements[_i11].connect(binding, scope);
    }
  };

  return LiteralArray;
}(Expression);

var LiteralObject = function (_Expression18) {
  _inherits(LiteralObject, _Expression18);

  function LiteralObject(keys, values) {
    

    var _this20 = _possibleConstructorReturn(this, _Expression18.call(this));

    _this20.keys = keys;
    _this20.values = values;
    return _this20;
  }

  LiteralObject.prototype.evaluate = function evaluate(scope, lookupFunctions) {
    var instance = {};
    var keys = this.keys;
    var values = this.values;

    for (var _i12 = 0, length = keys.length; _i12 < length; ++_i12) {
      instance[keys[_i12]] = values[_i12].evaluate(scope, lookupFunctions);
    }

    return instance;
  };

  LiteralObject.prototype.accept = function accept(visitor) {
    return visitor.visitLiteralObject(this);
  };

  LiteralObject.prototype.connect = function connect(binding, scope) {
    var length = this.keys.length;
    for (var _i13 = 0; _i13 < length; _i13++) {
      this.values[_i13].connect(binding, scope);
    }
  };

  return LiteralObject;
}(Expression);

function evalList(scope, list, lookupFunctions) {
  var length = list.length;
  var result = [];
  for (var _i14 = 0; _i14 < length; _i14++) {
    result[_i14] = list[_i14].evaluate(scope, lookupFunctions);
  }
  return result;
}

function autoConvertAdd(a, b) {
  if (a !== null && b !== null) {
    if (typeof a === 'string' && typeof b !== 'string') {
      return a + b.toString();
    }

    if (typeof a !== 'string' && typeof b === 'string') {
      return a.toString() + b;
    }

    return a + b;
  }

  if (a !== null) {
    return a;
  }

  if (b !== null) {
    return b;
  }

  return 0;
}

function getFunction(obj, name, mustExist) {
  var func = obj === null || obj === undefined ? null : obj[name];
  if (typeof func === 'function') {
    return func;
  }
  if (!mustExist && (func === null || func === undefined)) {
    return null;
  }
  throw new Error(name + ' is not a function');
}

function getKeyed(obj, key) {
  if (Array.isArray(obj)) {
    return obj[parseInt(key, 10)];
  } else if (obj) {
    return obj[key];
  } else if (obj === null || obj === undefined) {
    return undefined;
  }

  return obj[key];
}

function setKeyed(obj, key, value) {
  if (Array.isArray(obj)) {
    var index = parseInt(key, 10);

    if (obj.length <= index) {
      obj.length = index + 1;
    }

    obj[index] = value;
  } else {
    obj[key] = value;
  }

  return value;
}

var _Unparser = null;


if (typeof FEATURE_NO_UNPARSER === 'undefined') {
  _Unparser = function () {
    function Unparser(buffer) {
      

      this.buffer = buffer;
    }

    Unparser.unparse = function unparse(expression) {
      var buffer = [];
      var visitor = new _Unparser(buffer);

      expression.accept(visitor);

      return buffer.join('');
    };

    Unparser.prototype.write = function write(text) {
      this.buffer.push(text);
    };

    Unparser.prototype.writeArgs = function writeArgs(args) {
      this.write('(');

      for (var _i15 = 0, length = args.length; _i15 < length; ++_i15) {
        if (_i15 !== 0) {
          this.write(',');
        }

        args[_i15].accept(this);
      }

      this.write(')');
    };

    Unparser.prototype.visitChain = function visitChain(chain) {
      var expressions = chain.expressions;

      for (var _i16 = 0, length = expression.length; _i16 < length; ++_i16) {
        if (_i16 !== 0) {
          this.write(';');
        }

        expressions[_i16].accept(this);
      }
    };

    Unparser.prototype.visitBindingBehavior = function visitBindingBehavior(behavior) {
      var args = behavior.args;

      behavior.expression.accept(this);
      this.write('&' + behavior.name);

      for (var _i17 = 0, length = args.length; _i17 < length; ++_i17) {
        this.write(':');
        args[_i17].accept(this);
      }
    };

    Unparser.prototype.visitValueConverter = function visitValueConverter(converter) {
      var args = converter.args;

      converter.expression.accept(this);
      this.write('|' + converter.name);

      for (var _i18 = 0, length = args.length; _i18 < length; ++_i18) {
        this.write(':');
        args[_i18].accept(this);
      }
    };

    Unparser.prototype.visitAssign = function visitAssign(assign) {
      assign.target.accept(this);
      this.write('=');
      assign.value.accept(this);
    };

    Unparser.prototype.visitConditional = function visitConditional(conditional) {
      conditional.condition.accept(this);
      this.write('?');
      conditional.yes.accept(this);
      this.write(':');
      conditional.no.accept(this);
    };

    Unparser.prototype.visitAccessThis = function visitAccessThis(access) {
      if (access.ancestor === 0) {
        this.write('$this');
        return;
      }
      this.write('$parent');
      var i = access.ancestor - 1;
      while (i--) {
        this.write('.$parent');
      }
    };

    Unparser.prototype.visitAccessScope = function visitAccessScope(access) {
      var i = access.ancestor;
      while (i--) {
        this.write('$parent.');
      }
      this.write(access.name);
    };

    Unparser.prototype.visitAccessMember = function visitAccessMember(access) {
      access.object.accept(this);
      this.write('.' + access.name);
    };

    Unparser.prototype.visitAccessKeyed = function visitAccessKeyed(access) {
      access.object.accept(this);
      this.write('[');
      access.key.accept(this);
      this.write(']');
    };

    Unparser.prototype.visitCallScope = function visitCallScope(call) {
      var i = call.ancestor;
      while (i--) {
        this.write('$parent.');
      }
      this.write(call.name);
      this.writeArgs(call.args);
    };

    Unparser.prototype.visitCallFunction = function visitCallFunction(call) {
      call.func.accept(this);
      this.writeArgs(call.args);
    };

    Unparser.prototype.visitCallMember = function visitCallMember(call) {
      call.object.accept(this);
      this.write('.' + call.name);
      this.writeArgs(call.args);
    };

    Unparser.prototype.visitPrefix = function visitPrefix(prefix) {
      this.write('(' + prefix.operation);
      prefix.expression.accept(this);
      this.write(')');
    };

    Unparser.prototype.visitBinary = function visitBinary(binary) {
      binary.left.accept(this);
      this.write(binary.operation);
      binary.right.accept(this);
    };

    Unparser.prototype.visitLiteralPrimitive = function visitLiteralPrimitive(literal) {
      this.write('' + literal.value);
    };

    Unparser.prototype.visitLiteralArray = function visitLiteralArray(literal) {
      var elements = literal.elements;

      this.write('[');

      for (var _i19 = 0, length = elements.length; _i19 < length; ++_i19) {
        if (_i19 !== 0) {
          this.write(',');
        }

        elements[_i19].accept(this);
      }

      this.write(']');
    };

    Unparser.prototype.visitLiteralObject = function visitLiteralObject(literal) {
      var keys = literal.keys;
      var values = literal.values;

      this.write('{');

      for (var _i20 = 0, length = keys.length; _i20 < length; ++_i20) {
        if (_i20 !== 0) {
          this.write(',');
        }

        this.write('\'' + keys[_i20] + '\':');
        values[_i20].accept(this);
      }

      this.write('}');
    };

    Unparser.prototype.visitLiteralString = function visitLiteralString(literal) {
      var escaped = literal.value.replace(/'/g, "\'");
      this.write('\'' + escaped + '\'');
    };

    return Unparser;
  }();
}

var ExpressionCloner = function () {
  function ExpressionCloner() {
    
  }

  ExpressionCloner.prototype.cloneExpressionArray = function cloneExpressionArray(array) {
    var clonedArray = [];
    var i = array.length;
    while (i--) {
      clonedArray[i] = array[i].accept(this);
    }
    return clonedArray;
  };

  ExpressionCloner.prototype.visitChain = function visitChain(chain) {
    return new Chain(this.cloneExpressionArray(chain.expressions));
  };

  ExpressionCloner.prototype.visitBindingBehavior = function visitBindingBehavior(behavior) {
    return new BindingBehavior(behavior.expression.accept(this), behavior.name, this.cloneExpressionArray(behavior.args));
  };

  ExpressionCloner.prototype.visitValueConverter = function visitValueConverter(converter) {
    return new ValueConverter(converter.expression.accept(this), converter.name, this.cloneExpressionArray(converter.args));
  };

  ExpressionCloner.prototype.visitAssign = function visitAssign(assign) {
    return new Assign(assign.target.accept(this), assign.value.accept(this));
  };

  ExpressionCloner.prototype.visitConditional = function visitConditional(conditional) {
    return new Conditional(conditional.condition.accept(this), conditional.yes.accept(this), conditional.no.accept(this));
  };

  ExpressionCloner.prototype.visitAccessThis = function visitAccessThis(access) {
    return new AccessThis(access.ancestor);
  };

  ExpressionCloner.prototype.visitAccessScope = function visitAccessScope(access) {
    return new AccessScope(access.name, access.ancestor);
  };

  ExpressionCloner.prototype.visitAccessMember = function visitAccessMember(access) {
    return new AccessMember(access.object.accept(this), access.name);
  };

  ExpressionCloner.prototype.visitAccessKeyed = function visitAccessKeyed(access) {
    return new AccessKeyed(access.object.accept(this), access.key.accept(this));
  };

  ExpressionCloner.prototype.visitCallScope = function visitCallScope(call) {
    return new CallScope(call.name, this.cloneExpressionArray(call.args), call.ancestor);
  };

  ExpressionCloner.prototype.visitCallFunction = function visitCallFunction(call) {
    return new CallFunction(call.func.accept(this), this.cloneExpressionArray(call.args));
  };

  ExpressionCloner.prototype.visitCallMember = function visitCallMember(call) {
    return new CallMember(call.object.accept(this), call.name, this.cloneExpressionArray(call.args));
  };

  ExpressionCloner.prototype.visitPrefix = function visitPrefix(prefix) {
    return new PrefixNot(prefix.operation, prefix.expression.accept(this));
  };

  ExpressionCloner.prototype.visitBinary = function visitBinary(binary) {
    return new Binary(binary.operation, binary.left.accept(this), binary.right.accept(this));
  };

  ExpressionCloner.prototype.visitLiteralPrimitive = function visitLiteralPrimitive(literal) {
    return new LiteralPrimitive(literal);
  };

  ExpressionCloner.prototype.visitLiteralArray = function visitLiteralArray(literal) {
    return new LiteralArray(this.cloneExpressionArray(literal.elements));
  };

  ExpressionCloner.prototype.visitLiteralObject = function visitLiteralObject(literal) {
    return new LiteralObject(literal.keys, this.cloneExpressionArray(literal.values));
  };

  ExpressionCloner.prototype.visitLiteralString = function visitLiteralString(literal) {
    return new LiteralString(literal.value);
  };

  return ExpressionCloner;
}();

function cloneExpression(expression) {
  var visitor = new ExpressionCloner();
  return expression.accept(visitor);
}

var bindingMode = {
  oneTime: 0,
  toView: 1,
  oneWay: 1,
  twoWay: 2,
  fromView: 3
};

var Token = function () {
  function Token(index, text) {
    

    this.index = index;
    this.text = text;
  }

  Token.prototype.withOp = function withOp(op) {
    this.opKey = op;
    return this;
  };

  Token.prototype.withGetterSetter = function withGetterSetter(key) {
    this.key = key;
    return this;
  };

  Token.prototype.withValue = function withValue(value) {
    this.value = value;
    return this;
  };

  Token.prototype.toString = function toString() {
    return 'Token(' + this.text + ')';
  };

  return Token;
}();

var Lexer = function () {
  function Lexer() {
    
  }

  Lexer.prototype.lex = function lex(text) {
    var scanner = new Scanner(text);
    var tokens = [];
    var token = scanner.scanToken();

    while (token) {
      tokens.push(token);
      token = scanner.scanToken();
    }

    return tokens;
  };

  return Lexer;
}();

var Scanner = function () {
  function Scanner(input) {
    

    this.input = input;
    this.length = input.length;
    this.peek = 0;
    this.index = -1;

    this.advance();
  }

  Scanner.prototype.scanToken = function scanToken() {
    while (this.peek <= $SPACE) {
      if (++this.index >= this.length) {
        this.peek = $EOF;
        return null;
      }

      this.peek = this.input.charCodeAt(this.index);
    }

    if (isIdentifierStart(this.peek)) {
      return this.scanIdentifier();
    }

    if (isDigit(this.peek)) {
      return this.scanNumber(this.index);
    }

    var start = this.index;

    switch (this.peek) {
      case $PERIOD:
        this.advance();
        return isDigit(this.peek) ? this.scanNumber(start) : new Token(start, '.');
      case $LPAREN:
      case $RPAREN:
      case $LBRACE:
      case $RBRACE:
      case $LBRACKET:
      case $RBRACKET:
      case $COMMA:
      case $COLON:
      case $SEMICOLON:
        return this.scanCharacter(start, String.fromCharCode(this.peek));
      case $SQ:
      case $DQ:
        return this.scanString();
      case $PLUS:
      case $MINUS:
      case $STAR:
      case $SLASH:
      case $PERCENT:
      case $CARET:
      case $QUESTION:
        return this.scanOperator(start, String.fromCharCode(this.peek));
      case $LT:
      case $GT:
      case $BANG:
      case $EQ:
        return this.scanComplexOperator(start, $EQ, String.fromCharCode(this.peek), '=');
      case $AMPERSAND:
        return this.scanComplexOperator(start, $AMPERSAND, '&', '&');
      case $BAR:
        return this.scanComplexOperator(start, $BAR, '|', '|');
      case $NBSP:
        while (isWhitespace(this.peek)) {
          this.advance();
        }

        return this.scanToken();
    }

    var character = String.fromCharCode(this.peek);
    this.error('Unexpected character [' + character + ']');
    return null;
  };

  Scanner.prototype.scanCharacter = function scanCharacter(start, text) {
    assert(this.peek === text.charCodeAt(0));
    this.advance();
    return new Token(start, text);
  };

  Scanner.prototype.scanOperator = function scanOperator(start, text) {
    assert(this.peek === text.charCodeAt(0));
    assert(OPERATORS.indexOf(text) !== -1);
    this.advance();
    return new Token(start, text).withOp(text);
  };

  Scanner.prototype.scanComplexOperator = function scanComplexOperator(start, code, one, two) {
    assert(this.peek === one.charCodeAt(0));
    this.advance();

    var text = one;

    if (this.peek === code) {
      this.advance();
      text += two;
    }

    if (this.peek === code) {
      this.advance();
      text += two;
    }

    assert(OPERATORS.indexOf(text) !== -1);

    return new Token(start, text).withOp(text);
  };

  Scanner.prototype.scanIdentifier = function scanIdentifier() {
    assert(isIdentifierStart(this.peek));
    var start = this.index;

    this.advance();

    while (isIdentifierPart(this.peek)) {
      this.advance();
    }

    var text = this.input.substring(start, this.index);
    var result = new Token(start, text);

    if (OPERATORS.indexOf(text) !== -1) {
      result.withOp(text);
    } else {
      result.withGetterSetter(text);
    }

    return result;
  };

  Scanner.prototype.scanNumber = function scanNumber(start) {
    assert(isDigit(this.peek));
    var simple = this.index === start;
    this.advance();

    while (true) {
      if (!isDigit(this.peek)) {
        if (this.peek === $PERIOD) {
          simple = false;
        } else if (isExponentStart(this.peek)) {
          this.advance();

          if (isExponentSign(this.peek)) {
            this.advance();
          }

          if (!isDigit(this.peek)) {
            this.error('Invalid exponent', -1);
          }

          simple = false;
        } else {
          break;
        }
      }

      this.advance();
    }

    var text = this.input.substring(start, this.index);
    var value = simple ? parseInt(text, 10) : parseFloat(text);
    return new Token(start, text).withValue(value);
  };

  Scanner.prototype.scanString = function scanString() {
    assert(this.peek === $SQ || this.peek === $DQ);

    var start = this.index;
    var quote = this.peek;

    this.advance();

    var buffer = void 0;
    var marker = this.index;

    while (this.peek !== quote) {
      if (this.peek === $BACKSLASH) {
        if (!buffer) {
          buffer = [];
        }

        buffer.push(this.input.substring(marker, this.index));
        this.advance();

        var _unescaped = void 0;

        if (this.peek === $u) {
          var hex = this.input.substring(this.index + 1, this.index + 5);

          if (!/[A-Z0-9]{4}/.test(hex)) {
            this.error('Invalid unicode escape [\\u' + hex + ']');
          }

          _unescaped = parseInt(hex, 16);

          for (var _i21 = 0; _i21 < 5; ++_i21) {
            this.advance();
          }
        } else {
          _unescaped = unescape(this.peek);
          this.advance();
        }

        buffer.push(String.fromCharCode(_unescaped));
        marker = this.index;
      } else if (this.peek === $EOF) {
        this.error('Unterminated quote');
      } else {
        this.advance();
      }
    }

    var last = this.input.substring(marker, this.index);
    this.advance();
    var text = this.input.substring(start, this.index);

    var unescaped = last;

    if (buffer !== null && buffer !== undefined) {
      buffer.push(last);
      unescaped = buffer.join('');
    }

    return new Token(start, text).withValue(unescaped);
  };

  Scanner.prototype.advance = function advance() {
    if (++this.index >= this.length) {
      this.peek = $EOF;
    } else {
      this.peek = this.input.charCodeAt(this.index);
    }
  };

  Scanner.prototype.error = function error(message) {
    var offset = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

    var position = this.index + offset;
    throw new Error('Lexer Error: ' + message + ' at column ' + position + ' in expression [' + this.input + ']');
  };

  return Scanner;
}();

var OPERATORS = ['undefined', 'null', 'true', 'false', '+', '-', '*', '/', '%', '^', '=', '==', '===', '!=', '!==', '<', '>', '<=', '>=', '&&', '||', '&', '|', '!', '?'];

var $EOF = 0;
var $TAB = 9;
var $LF = 10;
var $VTAB = 11;
var $FF = 12;
var $CR = 13;
var $SPACE = 32;
var $BANG = 33;
var $DQ = 34;
var $$ = 36;
var $PERCENT = 37;
var $AMPERSAND = 38;
var $SQ = 39;
var $LPAREN = 40;
var $RPAREN = 41;
var $STAR = 42;
var $PLUS = 43;
var $COMMA = 44;
var $MINUS = 45;
var $PERIOD = 46;
var $SLASH = 47;
var $COLON = 58;
var $SEMICOLON = 59;
var $LT = 60;
var $EQ = 61;
var $GT = 62;
var $QUESTION = 63;

var $0 = 48;
var $9 = 57;

var $A = 65;
var $E = 69;
var $Z = 90;

var $LBRACKET = 91;
var $BACKSLASH = 92;
var $RBRACKET = 93;
var $CARET = 94;
var $_ = 95;

var $a = 97;
var $e = 101;
var $f = 102;
var $n = 110;
var $r = 114;
var $t = 116;
var $u = 117;
var $v = 118;
var $z = 122;

var $LBRACE = 123;
var $BAR = 124;
var $RBRACE = 125;
var $NBSP = 160;

function isWhitespace(code) {
  return code >= $TAB && code <= $SPACE || code === $NBSP;
}

function isIdentifierStart(code) {
  return $a <= code && code <= $z || $A <= code && code <= $Z || code === $_ || code === $$;
}

function isIdentifierPart(code) {
  return $a <= code && code <= $z || $A <= code && code <= $Z || $0 <= code && code <= $9 || code === $_ || code === $$;
}

function isDigit(code) {
  return $0 <= code && code <= $9;
}

function isExponentStart(code) {
  return code === $e || code === $E;
}

function isExponentSign(code) {
  return code === $MINUS || code === $PLUS;
}

function unescape(code) {
  switch (code) {
    case $n:
      return $LF;
    case $f:
      return $FF;
    case $r:
      return $CR;
    case $t:
      return $TAB;
    case $v:
      return $VTAB;
    default:
      return code;
  }
}

function assert(condition, message) {
  if (!condition) {
    throw message || 'Assertion failed';
  }
}

var EOF = new Token(-1, null);

var Parser = function () {
  function Parser() {
    

    this.cache = {};
    this.lexer = new Lexer();
  }

  Parser.prototype.parse = function parse(input) {
    input = input || '';

    return this.cache[input] || (this.cache[input] = new ParserImplementation(this.lexer, input).parseChain());
  };

  return Parser;
}();

var ParserImplementation = function () {
  function ParserImplementation(lexer, input) {
    

    this.index = 0;
    this.input = input;
    this.tokens = lexer.lex(input);
  }

  ParserImplementation.prototype.parseChain = function parseChain() {
    var isChain = false;
    var expressions = [];

    while (this.optional(';')) {
      isChain = true;
    }

    while (this.index < this.tokens.length) {
      if (this.peek.text === ')' || this.peek.text === '}' || this.peek.text === ']') {
        this.error('Unconsumed token ' + this.peek.text);
      }

      var expr = this.parseBindingBehavior();
      expressions.push(expr);

      while (this.optional(';')) {
        isChain = true;
      }

      if (isChain) {
        this.error('Multiple expressions are not allowed.');
      }
    }

    return expressions.length === 1 ? expressions[0] : new Chain(expressions);
  };

  ParserImplementation.prototype.parseBindingBehavior = function parseBindingBehavior() {
    var result = this.parseValueConverter();

    while (this.optional('&')) {
      var name = this.peek.text;
      var args = [];

      this.advance();

      while (this.optional(':')) {
        args.push(this.parseExpression());
      }

      result = new BindingBehavior(result, name, args);
    }

    return result;
  };

  ParserImplementation.prototype.parseValueConverter = function parseValueConverter() {
    var result = this.parseExpression();

    while (this.optional('|')) {
      var name = this.peek.text;
      var args = [];

      this.advance();

      while (this.optional(':')) {
        args.push(this.parseExpression());
      }

      result = new ValueConverter(result, name, args, [result].concat(args));
    }

    return result;
  };

  ParserImplementation.prototype.parseExpression = function parseExpression() {
    var start = this.peek.index;
    var result = this.parseConditional();

    while (this.peek.text === '=') {
      if (!result.isAssignable) {
        var end = this.index < this.tokens.length ? this.peek.index : this.input.length;
        var _expression = this.input.substring(start, end);

        this.error('Expression ' + _expression + ' is not assignable');
      }

      this.expect('=');
      result = new Assign(result, this.parseConditional());
    }

    return result;
  };

  ParserImplementation.prototype.parseConditional = function parseConditional() {
    var start = this.peek.index;
    var result = this.parseLogicalOr();

    if (this.optional('?')) {
      var yes = this.parseExpression();

      if (!this.optional(':')) {
        var end = this.index < this.tokens.length ? this.peek.index : this.input.length;
        var _expression2 = this.input.substring(start, end);

        this.error('Conditional expression ' + _expression2 + ' requires all 3 expressions');
      }

      var no = this.parseExpression();
      result = new Conditional(result, yes, no);
    }

    return result;
  };

  ParserImplementation.prototype.parseLogicalOr = function parseLogicalOr() {
    var result = this.parseLogicalAnd();

    while (this.optional('||')) {
      result = new Binary('||', result, this.parseLogicalAnd());
    }

    return result;
  };

  ParserImplementation.prototype.parseLogicalAnd = function parseLogicalAnd() {
    var result = this.parseEquality();

    while (this.optional('&&')) {
      result = new Binary('&&', result, this.parseEquality());
    }

    return result;
  };

  ParserImplementation.prototype.parseEquality = function parseEquality() {
    var result = this.parseRelational();

    while (true) {
      if (this.optional('==')) {
        result = new Binary('==', result, this.parseRelational());
      } else if (this.optional('!=')) {
        result = new Binary('!=', result, this.parseRelational());
      } else if (this.optional('===')) {
        result = new Binary('===', result, this.parseRelational());
      } else if (this.optional('!==')) {
        result = new Binary('!==', result, this.parseRelational());
      } else {
        return result;
      }
    }
  };

  ParserImplementation.prototype.parseRelational = function parseRelational() {
    var result = this.parseAdditive();

    while (true) {
      if (this.optional('<')) {
        result = new Binary('<', result, this.parseAdditive());
      } else if (this.optional('>')) {
        result = new Binary('>', result, this.parseAdditive());
      } else if (this.optional('<=')) {
        result = new Binary('<=', result, this.parseAdditive());
      } else if (this.optional('>=')) {
        result = new Binary('>=', result, this.parseAdditive());
      } else {
        return result;
      }
    }
  };

  ParserImplementation.prototype.parseAdditive = function parseAdditive() {
    var result = this.parseMultiplicative();

    while (true) {
      if (this.optional('+')) {
        result = new Binary('+', result, this.parseMultiplicative());
      } else if (this.optional('-')) {
        result = new Binary('-', result, this.parseMultiplicative());
      } else {
        return result;
      }
    }
  };

  ParserImplementation.prototype.parseMultiplicative = function parseMultiplicative() {
    var result = this.parsePrefix();

    while (true) {
      if (this.optional('*')) {
        result = new Binary('*', result, this.parsePrefix());
      } else if (this.optional('%')) {
        result = new Binary('%', result, this.parsePrefix());
      } else if (this.optional('/')) {
        result = new Binary('/', result, this.parsePrefix());
      } else {
        return result;
      }
    }
  };

  ParserImplementation.prototype.parsePrefix = function parsePrefix() {
    if (this.optional('+')) {
      return this.parsePrefix();
    } else if (this.optional('-')) {
      return new Binary('-', new LiteralPrimitive(0), this.parsePrefix());
    } else if (this.optional('!')) {
      return new PrefixNot('!', this.parsePrefix());
    }

    return this.parseAccessOrCallMember();
  };

  ParserImplementation.prototype.parseAccessOrCallMember = function parseAccessOrCallMember() {
    var result = this.parsePrimary();

    while (true) {
      if (this.optional('.')) {
        var name = this.peek.text;

        this.advance();

        if (this.optional('(')) {
          var args = this.parseExpressionList(')');
          this.expect(')');
          if (result instanceof AccessThis) {
            result = new CallScope(name, args, result.ancestor);
          } else {
            result = new CallMember(result, name, args);
          }
        } else {
          if (result instanceof AccessThis) {
            result = new AccessScope(name, result.ancestor);
          } else {
            result = new AccessMember(result, name);
          }
        }
      } else if (this.optional('[')) {
        var key = this.parseExpression();
        this.expect(']');
        result = new AccessKeyed(result, key);
      } else if (this.optional('(')) {
        var _args = this.parseExpressionList(')');
        this.expect(')');
        result = new CallFunction(result, _args);
      } else {
        return result;
      }
    }
  };

  ParserImplementation.prototype.parsePrimary = function parsePrimary() {
    if (this.optional('(')) {
      var result = this.parseExpression();
      this.expect(')');
      return result;
    } else if (this.optional('null')) {
      return new LiteralPrimitive(null);
    } else if (this.optional('undefined')) {
      return new LiteralPrimitive(undefined);
    } else if (this.optional('true')) {
      return new LiteralPrimitive(true);
    } else if (this.optional('false')) {
      return new LiteralPrimitive(false);
    } else if (this.optional('[')) {
      var elements = this.parseExpressionList(']');
      this.expect(']');
      return new LiteralArray(elements);
    } else if (this.peek.text === '{') {
      return this.parseObject();
    } else if (this.peek.key !== null && this.peek.key !== undefined) {
      return this.parseAccessOrCallScope();
    } else if (this.peek.value !== null && this.peek.value !== undefined) {
      var value = this.peek.value;
      this.advance();
      return value instanceof String || typeof value === 'string' ? new LiteralString(value) : new LiteralPrimitive(value);
    } else if (this.index >= this.tokens.length) {
      throw new Error('Unexpected end of expression: ' + this.input);
    } else {
      this.error('Unexpected token ' + this.peek.text);
    }
  };

  ParserImplementation.prototype.parseAccessOrCallScope = function parseAccessOrCallScope() {
    var name = this.peek.key;

    this.advance();

    if (name === '$this') {
      return new AccessThis(0);
    }

    var ancestor = 0;
    while (name === '$parent') {
      ancestor++;
      if (this.optional('.')) {
        name = this.peek.key;
        this.advance();
      } else if (this.peek === EOF || this.peek.text === '(' || this.peek.text === ')' || this.peek.text === '[' || this.peek.text === '}' || this.peek.text === ',' || this.peek.text === '|' || this.peek.text === '&') {
        return new AccessThis(ancestor);
      } else {
        this.error('Unexpected token ' + this.peek.text);
      }
    }

    if (this.optional('(')) {
      var args = this.parseExpressionList(')');
      this.expect(')');
      return new CallScope(name, args, ancestor);
    }

    return new AccessScope(name, ancestor);
  };

  ParserImplementation.prototype.parseObject = function parseObject() {
    var keys = [];
    var values = [];

    this.expect('{');

    if (this.peek.text !== '}') {
      do {
        var peek = this.peek;
        var value = peek.value;
        keys.push(typeof value === 'string' ? value : peek.text);

        this.advance();
        if (peek.key && (this.peek.text === ',' || this.peek.text === '}')) {
          --this.index;
          values.push(this.parseAccessOrCallScope());
        } else {
          this.expect(':');
          values.push(this.parseExpression());
        }
      } while (this.optional(','));
    }

    this.expect('}');

    return new LiteralObject(keys, values);
  };

  ParserImplementation.prototype.parseExpressionList = function parseExpressionList(terminator) {
    var result = [];

    if (this.peek.text !== terminator) {
      do {
        result.push(this.parseExpression());
      } while (this.optional(','));
    }

    return result;
  };

  ParserImplementation.prototype.optional = function optional(text) {
    if (this.peek.text === text) {
      this.advance();
      return true;
    }

    return false;
  };

  ParserImplementation.prototype.expect = function expect(text) {
    if (this.peek.text === text) {
      this.advance();
    } else {
      this.error('Missing expected ' + text);
    }
  };

  ParserImplementation.prototype.advance = function advance() {
    this.index++;
  };

  ParserImplementation.prototype.error = function error(message) {
    var location = this.index < this.tokens.length ? 'at column ' + (this.tokens[this.index].index + 1) + ' in' : 'at the end of the expression';

    throw new Error('Parser Error: ' + message + ' ' + location + ' [' + this.input + ']');
  };

  _createClass(ParserImplementation, [{
    key: 'peek',
    get: function get() {
      return this.index < this.tokens.length ? this.tokens[this.index] : EOF;
    }
  }]);

  return ParserImplementation;
}();

var mapProto = Map.prototype;

function _getMapObserver(taskQueue, map) {
  return ModifyMapObserver.for(taskQueue, map);
}

var ModifyMapObserver = function (_ModifyCollectionObse2) {
  _inherits(ModifyMapObserver, _ModifyCollectionObse2);

  function ModifyMapObserver(taskQueue, map) {
    

    return _possibleConstructorReturn(this, _ModifyCollectionObse2.call(this, taskQueue, map));
  }

  ModifyMapObserver.for = function _for(taskQueue, map) {
    if (!('__map_observer__' in map)) {
      Reflect.defineProperty(map, '__map_observer__', {
        value: ModifyMapObserver.create(taskQueue, map),
        enumerable: false, configurable: false
      });
    }
    return map.__map_observer__;
  };

  ModifyMapObserver.create = function create(taskQueue, map) {
    var observer = new ModifyMapObserver(taskQueue, map);

    var proto = mapProto;
    if (proto.set !== map.set || proto.delete !== map.delete || proto.clear !== map.clear) {
      proto = {
        set: map.set,
        delete: map.delete,
        clear: map.clear
      };
    }

    map.set = function () {
      var hasValue = map.has(arguments[0]);
      var type = hasValue ? 'update' : 'add';
      var oldValue = map.get(arguments[0]);
      var methodCallResult = proto.set.apply(map, arguments);
      if (!hasValue || oldValue !== map.get(arguments[0])) {
        observer.addChangeRecord({
          type: type,
          object: map,
          key: arguments[0],
          oldValue: oldValue
        });
      }
      return methodCallResult;
    };

    map.delete = function () {
      var hasValue = map.has(arguments[0]);
      var oldValue = map.get(arguments[0]);
      var methodCallResult = proto.delete.apply(map, arguments);
      if (hasValue) {
        observer.addChangeRecord({
          type: 'delete',
          object: map,
          key: arguments[0],
          oldValue: oldValue
        });
      }
      return methodCallResult;
    };

    map.clear = function () {
      var methodCallResult = proto.clear.apply(map, arguments);
      observer.addChangeRecord({
        type: 'clear',
        object: map
      });
      return methodCallResult;
    };

    return observer;
  };

  return ModifyMapObserver;
}(ModifyCollectionObserver);

function findOriginalEventTarget(event) {
  return event.path && event.path[0] || event.deepPath && event.deepPath[0] || event.target;
}

function stopPropagation() {
  this.standardStopPropagation();
  this.propagationStopped = true;
}

function interceptStopPropagation(event) {
  event.standardStopPropagation = event.stopPropagation;
  event.stopPropagation = stopPropagation;
}

function handleCapturedEvent(event) {
  var interceptInstalled = false;
  event.propagationStopped = false;
  var target = findOriginalEventTarget(event);

  var orderedCallbacks = [];

  while (target) {
    if (target.capturedCallbacks) {
      var callback = target.capturedCallbacks[event.type];
      if (callback) {
        if (!interceptInstalled) {
          interceptStopPropagation(event);
          interceptInstalled = true;
        }
        orderedCallbacks.push(callback);
      }
    }
    target = target.parentNode;
  }
  for (var _i22 = orderedCallbacks.length - 1; _i22 >= 0; _i22--) {
    var orderedCallback = orderedCallbacks[_i22];
    if ('handleEvent' in orderedCallback) {
      orderedCallback.handleEvent(event);
    } else {
      orderedCallback(event);
    }
    if (event.propagationStopped) {
      break;
    }
  }
}

var CapturedHandlerEntry = function () {
  function CapturedHandlerEntry(eventName) {
    

    this.eventName = eventName;
    this.count = 0;
  }

  CapturedHandlerEntry.prototype.increment = function increment() {
    this.count++;

    if (this.count === 1) {
      __WEBPACK_IMPORTED_MODULE_1_aurelia_pal__["b" /* DOM */].addEventListener(this.eventName, handleCapturedEvent, true);
    }
  };

  CapturedHandlerEntry.prototype.decrement = function decrement() {
    this.count--;

    if (this.count === 0) {
      __WEBPACK_IMPORTED_MODULE_1_aurelia_pal__["b" /* DOM */].removeEventListener(this.eventName, handleCapturedEvent, true);
    }
  };

  return CapturedHandlerEntry;
}();

function handleDelegatedEvent(event) {
  var interceptInstalled = false;
  event.propagationStopped = false;
  var target = findOriginalEventTarget(event);

  while (target && !event.propagationStopped) {
    if (target.delegatedCallbacks) {
      var callback = target.delegatedCallbacks[event.type];
      if (callback) {
        if (!interceptInstalled) {
          interceptStopPropagation(event);
          interceptInstalled = true;
        }
        if ('handleEvent' in callback) {
          callback.handleEvent(event);
        } else {
          callback(event);
        }
      }
    }

    target = target.parentNode;
  }
}

var DelegateHandlerEntry = function () {
  function DelegateHandlerEntry(eventName) {
    

    this.eventName = eventName;
    this.count = 0;
  }

  DelegateHandlerEntry.prototype.increment = function increment() {
    this.count++;

    if (this.count === 1) {
      __WEBPACK_IMPORTED_MODULE_1_aurelia_pal__["b" /* DOM */].addEventListener(this.eventName, handleDelegatedEvent, false);
    }
  };

  DelegateHandlerEntry.prototype.decrement = function decrement() {
    this.count--;

    if (this.count === 0) {
      __WEBPACK_IMPORTED_MODULE_1_aurelia_pal__["b" /* DOM */].removeEventListener(this.eventName, handleDelegatedEvent);
    }
  };

  return DelegateHandlerEntry;
}();

var DefaultEventStrategy = function () {
  function DefaultEventStrategy() {
    

    this.delegatedHandlers = {};
    this.capturedHandlers = {};
  }

  DefaultEventStrategy.prototype.subscribe = function subscribe(target, targetEvent, callback, strategy) {
    var _this22 = this;

    var delegatedHandlers = void 0;
    var capturedHandlers = void 0;
    var handlerEntry = void 0;

    if (strategy === delegationStrategy.bubbling) {
      var _ret = function () {
        delegatedHandlers = _this22.delegatedHandlers;
        handlerEntry = delegatedHandlers[targetEvent] || (delegatedHandlers[targetEvent] = new DelegateHandlerEntry(targetEvent));
        var delegatedCallbacks = target.delegatedCallbacks || (target.delegatedCallbacks = {});

        handlerEntry.increment();
        delegatedCallbacks[targetEvent] = callback;

        return {
          v: function v() {
            handlerEntry.decrement();
            delegatedCallbacks[targetEvent] = null;
          }
        };
      }();

      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
    }
    if (strategy === delegationStrategy.capturing) {
      var _ret2 = function () {
        capturedHandlers = _this22.capturedHandlers;
        handlerEntry = capturedHandlers[targetEvent] || (capturedHandlers[targetEvent] = new CapturedHandlerEntry(targetEvent));
        var capturedCallbacks = target.capturedCallbacks || (target.capturedCallbacks = {});

        handlerEntry.increment();
        capturedCallbacks[targetEvent] = callback;

        return {
          v: function v() {
            handlerEntry.decrement();
            capturedCallbacks[targetEvent] = null;
          }
        };
      }();

      if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
    }

    target.addEventListener(targetEvent, callback, false);

    return function () {
      target.removeEventListener(targetEvent, callback);
    };
  };

  return DefaultEventStrategy;
}();

var delegationStrategy = {
  none: 0,
  capturing: 1,
  bubbling: 2
};

var EventManager = function () {
  function EventManager() {
    

    this.elementHandlerLookup = {};
    this.eventStrategyLookup = {};

    this.registerElementConfig({
      tagName: 'input',
      properties: {
        value: ['change', 'input'],
        checked: ['change', 'input'],
        files: ['change', 'input']
      }
    });

    this.registerElementConfig({
      tagName: 'textarea',
      properties: {
        value: ['change', 'input']
      }
    });

    this.registerElementConfig({
      tagName: 'select',
      properties: {
        value: ['change']
      }
    });

    this.registerElementConfig({
      tagName: 'content editable',
      properties: {
        value: ['change', 'input', 'blur', 'keyup', 'paste']
      }
    });

    this.registerElementConfig({
      tagName: 'scrollable element',
      properties: {
        scrollTop: ['scroll'],
        scrollLeft: ['scroll']
      }
    });

    this.defaultEventStrategy = new DefaultEventStrategy();
  }

  EventManager.prototype.registerElementConfig = function registerElementConfig(config) {
    var tagName = config.tagName.toLowerCase();
    var properties = config.properties;
    var propertyName = void 0;

    this.elementHandlerLookup[tagName] = {};

    for (propertyName in properties) {
      if (properties.hasOwnProperty(propertyName)) {
        this.registerElementPropertyConfig(tagName, propertyName, properties[propertyName]);
      }
    }
  };

  EventManager.prototype.registerElementPropertyConfig = function registerElementPropertyConfig(tagName, propertyName, events) {
    this.elementHandlerLookup[tagName][propertyName] = this.createElementHandler(events);
  };

  EventManager.prototype.createElementHandler = function createElementHandler(events) {
    return {
      subscribe: function subscribe(target, callbackOrListener) {
        events.forEach(function (changeEvent) {
          target.addEventListener(changeEvent, callbackOrListener, false);
        });

        return function () {
          events.forEach(function (changeEvent) {
            target.removeEventListener(changeEvent, callbackOrListener, false);
          });
        };
      }
    };
  };

  EventManager.prototype.registerElementHandler = function registerElementHandler(tagName, handler) {
    this.elementHandlerLookup[tagName.toLowerCase()] = handler;
  };

  EventManager.prototype.registerEventStrategy = function registerEventStrategy(eventName, strategy) {
    this.eventStrategyLookup[eventName] = strategy;
  };

  EventManager.prototype.getElementHandler = function getElementHandler(target, propertyName) {
    var tagName = void 0;
    var lookup = this.elementHandlerLookup;

    if (target.tagName) {
      tagName = target.tagName.toLowerCase();

      if (lookup[tagName] && lookup[tagName][propertyName]) {
        return lookup[tagName][propertyName];
      }

      if (propertyName === 'textContent' || propertyName === 'innerHTML') {
        return lookup['content editable'].value;
      }

      if (propertyName === 'scrollTop' || propertyName === 'scrollLeft') {
        return lookup['scrollable element'][propertyName];
      }
    }

    return null;
  };

  EventManager.prototype.addEventListener = function addEventListener(target, targetEvent, callbackOrListener, delegate) {
    return (this.eventStrategyLookup[targetEvent] || this.defaultEventStrategy).subscribe(target, targetEvent, callbackOrListener, delegate);
  };

  return EventManager;
}();

var DirtyChecker = function () {
  function DirtyChecker() {
    

    this.tracked = [];
    this.checkDelay = 120;
  }

  DirtyChecker.prototype.addProperty = function addProperty(property) {
    var tracked = this.tracked;

    tracked.push(property);

    if (tracked.length === 1) {
      this.scheduleDirtyCheck();
    }
  };

  DirtyChecker.prototype.removeProperty = function removeProperty(property) {
    var tracked = this.tracked;
    tracked.splice(tracked.indexOf(property), 1);
  };

  DirtyChecker.prototype.scheduleDirtyCheck = function scheduleDirtyCheck() {
    var _this23 = this;

    setTimeout(function () {
      return _this23.check();
    }, this.checkDelay);
  };

  DirtyChecker.prototype.check = function check() {
    var tracked = this.tracked;
    var i = tracked.length;

    while (i--) {
      var current = tracked[i];

      if (current.isDirty()) {
        current.call();
      }
    }

    if (tracked.length) {
      this.scheduleDirtyCheck();
    }
  };

  return DirtyChecker;
}();

var DirtyCheckProperty = (_dec5 = subscriberCollection(), _dec5(_class5 = function () {
  function DirtyCheckProperty(dirtyChecker, obj, propertyName) {
    

    this.dirtyChecker = dirtyChecker;
    this.obj = obj;
    this.propertyName = propertyName;
  }

  DirtyCheckProperty.prototype.getValue = function getValue() {
    return this.obj[this.propertyName];
  };

  DirtyCheckProperty.prototype.setValue = function setValue(newValue) {
    this.obj[this.propertyName] = newValue;
  };

  DirtyCheckProperty.prototype.call = function call() {
    var oldValue = this.oldValue;
    var newValue = this.getValue();

    this.callSubscribers(newValue, oldValue);

    this.oldValue = newValue;
  };

  DirtyCheckProperty.prototype.isDirty = function isDirty() {
    return this.oldValue !== this.obj[this.propertyName];
  };

  DirtyCheckProperty.prototype.subscribe = function subscribe(context, callable) {
    if (!this.hasSubscribers()) {
      this.oldValue = this.getValue();
      this.dirtyChecker.addProperty(this);
    }
    this.addSubscriber(context, callable);
  };

  DirtyCheckProperty.prototype.unsubscribe = function unsubscribe(context, callable) {
    if (this.removeSubscriber(context, callable) && !this.hasSubscribers()) {
      this.dirtyChecker.removeProperty(this);
    }
  };

  return DirtyCheckProperty;
}()) || _class5);

var logger = __WEBPACK_IMPORTED_MODULE_0_aurelia_logging__["getLogger"]('property-observation');

var propertyAccessor = {
  getValue: function getValue(obj, propertyName) {
    return obj[propertyName];
  },
  setValue: function setValue(value, obj, propertyName) {
    obj[propertyName] = value;
  }
};

var PrimitiveObserver = function () {
  function PrimitiveObserver(primitive, propertyName) {
    

    this.doNotCache = true;

    this.primitive = primitive;
    this.propertyName = propertyName;
  }

  PrimitiveObserver.prototype.getValue = function getValue() {
    return this.primitive[this.propertyName];
  };

  PrimitiveObserver.prototype.setValue = function setValue() {
    var type = _typeof(this.primitive);
    throw new Error('The ' + this.propertyName + ' property of a ' + type + ' (' + this.primitive + ') cannot be assigned.');
  };

  PrimitiveObserver.prototype.subscribe = function subscribe() {};

  PrimitiveObserver.prototype.unsubscribe = function unsubscribe() {};

  return PrimitiveObserver;
}();

var SetterObserver = (_dec6 = subscriberCollection(), _dec6(_class7 = function () {
  function SetterObserver(taskQueue, obj, propertyName) {
    

    this.taskQueue = taskQueue;
    this.obj = obj;
    this.propertyName = propertyName;
    this.queued = false;
    this.observing = false;
  }

  SetterObserver.prototype.getValue = function getValue() {
    return this.obj[this.propertyName];
  };

  SetterObserver.prototype.setValue = function setValue(newValue) {
    this.obj[this.propertyName] = newValue;
  };

  SetterObserver.prototype.getterValue = function getterValue() {
    return this.currentValue;
  };

  SetterObserver.prototype.setterValue = function setterValue(newValue) {
    var oldValue = this.currentValue;

    if (oldValue !== newValue) {
      if (!this.queued) {
        this.oldValue = oldValue;
        this.queued = true;
        this.taskQueue.queueMicroTask(this);
      }

      this.currentValue = newValue;
    }
  };

  SetterObserver.prototype.call = function call() {
    var oldValue = this.oldValue;
    var newValue = this.currentValue;

    this.queued = false;

    this.callSubscribers(newValue, oldValue);
  };

  SetterObserver.prototype.subscribe = function subscribe(context, callable) {
    if (!this.observing) {
      this.convertProperty();
    }
    this.addSubscriber(context, callable);
  };

  SetterObserver.prototype.unsubscribe = function unsubscribe(context, callable) {
    this.removeSubscriber(context, callable);
  };

  SetterObserver.prototype.convertProperty = function convertProperty() {
    this.observing = true;
    this.currentValue = this.obj[this.propertyName];
    this.setValue = this.setterValue;
    this.getValue = this.getterValue;

    if (!Reflect.defineProperty(this.obj, this.propertyName, {
      configurable: true,
      enumerable: this.propertyName in this.obj ? this.obj.propertyIsEnumerable(this.propertyName) : true,
      get: this.getValue.bind(this),
      set: this.setValue.bind(this)
    })) {
      logger.warn('Cannot observe property \'' + this.propertyName + '\' of object', this.obj);
    }
  };

  return SetterObserver;
}()) || _class7);

var XLinkAttributeObserver = function () {
  function XLinkAttributeObserver(element, propertyName, attributeName) {
    

    this.element = element;
    this.propertyName = propertyName;
    this.attributeName = attributeName;
  }

  XLinkAttributeObserver.prototype.getValue = function getValue() {
    return this.element.getAttributeNS('http://www.w3.org/1999/xlink', this.attributeName);
  };

  XLinkAttributeObserver.prototype.setValue = function setValue(newValue) {
    return this.element.setAttributeNS('http://www.w3.org/1999/xlink', this.attributeName, newValue);
  };

  XLinkAttributeObserver.prototype.subscribe = function subscribe() {
    throw new Error('Observation of a "' + this.element.nodeName + '" element\'s "' + this.propertyName + '" property is not supported.');
  };

  return XLinkAttributeObserver;
}();

var dataAttributeAccessor = {
  getValue: function getValue(obj, propertyName) {
    return obj.getAttribute(propertyName);
  },
  setValue: function setValue(value, obj, propertyName) {
    if (value === null || value === undefined) {
      obj.removeAttribute(propertyName);
    } else {
      obj.setAttribute(propertyName, value);
    }
  }
};

var DataAttributeObserver = function () {
  function DataAttributeObserver(element, propertyName) {
    

    this.element = element;
    this.propertyName = propertyName;
  }

  DataAttributeObserver.prototype.getValue = function getValue() {
    return this.element.getAttribute(this.propertyName);
  };

  DataAttributeObserver.prototype.setValue = function setValue(newValue) {
    if (newValue === null || newValue === undefined) {
      return this.element.removeAttribute(this.propertyName);
    }
    return this.element.setAttribute(this.propertyName, newValue);
  };

  DataAttributeObserver.prototype.subscribe = function subscribe() {
    throw new Error('Observation of a "' + this.element.nodeName + '" element\'s "' + this.propertyName + '" property is not supported.');
  };

  return DataAttributeObserver;
}();

var StyleObserver = function () {
  function StyleObserver(element, propertyName) {
    

    this.element = element;
    this.propertyName = propertyName;

    this.styles = null;
    this.version = 0;
  }

  StyleObserver.prototype.getValue = function getValue() {
    return this.element.style.cssText;
  };

  StyleObserver.prototype._setProperty = function _setProperty(style, value) {
    var priority = '';

    if (value !== null && value !== undefined && typeof value.indexOf === 'function' && value.indexOf('!important') !== -1) {
      priority = 'important';
      value = value.replace('!important', '');
    }
    this.element.style.setProperty(style, value, priority);
  };

  StyleObserver.prototype.setValue = function setValue(newValue) {
    var styles = this.styles || {};
    var style = void 0;
    var version = this.version;

    if (newValue !== null && newValue !== undefined) {
      if (newValue instanceof Object) {
        var value = void 0;
        for (style in newValue) {
          if (newValue.hasOwnProperty(style)) {
            value = newValue[style];
            style = style.replace(/([A-Z])/g, function (m) {
              return '-' + m.toLowerCase();
            });
            styles[style] = version;
            this._setProperty(style, value);
          }
        }
      } else if (newValue.length) {
        var rx = /\s*([\w\-]+)\s*:\s*((?:(?:[\w\-]+\(\s*(?:"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|[\w\-]+\(\s*(?:^"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|[^\)]*)\),?|[^\)]*)\),?|"(?:\\"|[^"])*"|'(?:\\'|[^'])*'|[^;]*),?\s*)+);?/g;
        var pair = void 0;
        while ((pair = rx.exec(newValue)) !== null) {
          style = pair[1];
          if (!style) {
            continue;
          }

          styles[style] = version;
          this._setProperty(style, pair[2]);
        }
      }
    }

    this.styles = styles;
    this.version += 1;

    if (version === 0) {
      return;
    }

    version -= 1;
    for (style in styles) {
      if (!styles.hasOwnProperty(style) || styles[style] !== version) {
        continue;
      }

      this.element.style.removeProperty(style);
    }
  };

  StyleObserver.prototype.subscribe = function subscribe() {
    throw new Error('Observation of a "' + this.element.nodeName + '" element\'s "' + this.propertyName + '" property is not supported.');
  };

  return StyleObserver;
}();

var ValueAttributeObserver = (_dec7 = subscriberCollection(), _dec7(_class8 = function () {
  function ValueAttributeObserver(element, propertyName, handler) {
    

    this.element = element;
    this.propertyName = propertyName;
    this.handler = handler;
    if (propertyName === 'files') {
      this.setValue = function () {};
    }
  }

  ValueAttributeObserver.prototype.getValue = function getValue() {
    return this.element[this.propertyName];
  };

  ValueAttributeObserver.prototype.setValue = function setValue(newValue) {
    newValue = newValue === undefined || newValue === null ? '' : newValue;
    if (this.element[this.propertyName] !== newValue) {
      this.element[this.propertyName] = newValue;
      this.notify();
    }
  };

  ValueAttributeObserver.prototype.notify = function notify() {
    var oldValue = this.oldValue;
    var newValue = this.getValue();

    this.callSubscribers(newValue, oldValue);

    this.oldValue = newValue;
  };

  ValueAttributeObserver.prototype.handleEvent = function handleEvent() {
    this.notify();
  };

  ValueAttributeObserver.prototype.subscribe = function subscribe(context, callable) {
    if (!this.hasSubscribers()) {
      this.oldValue = this.getValue();
      this.disposeHandler = this.handler.subscribe(this.element, this);
    }

    this.addSubscriber(context, callable);
  };

  ValueAttributeObserver.prototype.unsubscribe = function unsubscribe(context, callable) {
    if (this.removeSubscriber(context, callable) && !this.hasSubscribers()) {
      this.disposeHandler();
      this.disposeHandler = null;
    }
  };

  return ValueAttributeObserver;
}()) || _class8);

var checkedArrayContext = 'CheckedObserver:array';
var checkedValueContext = 'CheckedObserver:value';

var CheckedObserver = (_dec8 = subscriberCollection(), _dec8(_class9 = function () {
  function CheckedObserver(element, handler, observerLocator) {
    

    this.element = element;
    this.handler = handler;
    this.observerLocator = observerLocator;
  }

  CheckedObserver.prototype.getValue = function getValue() {
    return this.value;
  };

  CheckedObserver.prototype.setValue = function setValue(newValue) {
    if (this.initialSync && this.value === newValue) {
      return;
    }

    if (this.arrayObserver) {
      this.arrayObserver.unsubscribe(checkedArrayContext, this);
      this.arrayObserver = null;
    }

    if (this.element.type === 'checkbox' && Array.isArray(newValue)) {
      this.arrayObserver = this.observerLocator.getArrayObserver(newValue);
      this.arrayObserver.subscribe(checkedArrayContext, this);
    }

    this.oldValue = this.value;
    this.value = newValue;
    this.synchronizeElement();
    this.notify();

    if (!this.initialSync) {
      this.initialSync = true;
      this.observerLocator.taskQueue.queueMicroTask(this);
    }
  };

  CheckedObserver.prototype.call = function call(context, splices) {
    this.synchronizeElement();

    if (!this.valueObserver) {
      this.valueObserver = this.element.__observers__.model || this.element.__observers__.value;
      if (this.valueObserver) {
        this.valueObserver.subscribe(checkedValueContext, this);
      }
    }
  };

  CheckedObserver.prototype.synchronizeElement = function synchronizeElement() {
    var value = this.value;
    var element = this.element;
    var elementValue = element.hasOwnProperty('model') ? element.model : element.value;
    var isRadio = element.type === 'radio';
    var matcher = element.matcher || function (a, b) {
      return a === b;
    };

    element.checked = isRadio && !!matcher(value, elementValue) || !isRadio && value === true || !isRadio && Array.isArray(value) && value.findIndex(function (item) {
      return !!matcher(item, elementValue);
    }) !== -1;
  };

  CheckedObserver.prototype.synchronizeValue = function synchronizeValue() {
    var value = this.value;
    var element = this.element;
    var elementValue = element.hasOwnProperty('model') ? element.model : element.value;
    var index = void 0;
    var matcher = element.matcher || function (a, b) {
      return a === b;
    };

    if (element.type === 'checkbox') {
      if (Array.isArray(value)) {
        index = value.findIndex(function (item) {
          return !!matcher(item, elementValue);
        });
        if (element.checked && index === -1) {
          value.push(elementValue);
        } else if (!element.checked && index !== -1) {
          value.splice(index, 1);
        }

        return;
      }

      value = element.checked;
    } else if (element.checked) {
      value = elementValue;
    } else {
      return;
    }

    this.oldValue = this.value;
    this.value = value;
    this.notify();
  };

  CheckedObserver.prototype.notify = function notify() {
    var oldValue = this.oldValue;
    var newValue = this.value;

    if (newValue === oldValue) {
      return;
    }

    this.callSubscribers(newValue, oldValue);
  };

  CheckedObserver.prototype.handleEvent = function handleEvent() {
    this.synchronizeValue();
  };

  CheckedObserver.prototype.subscribe = function subscribe(context, callable) {
    if (!this.hasSubscribers()) {
      this.disposeHandler = this.handler.subscribe(this.element, this);
    }
    this.addSubscriber(context, callable);
  };

  CheckedObserver.prototype.unsubscribe = function unsubscribe(context, callable) {
    if (this.removeSubscriber(context, callable) && !this.hasSubscribers()) {
      this.disposeHandler();
      this.disposeHandler = null;
    }
  };

  CheckedObserver.prototype.unbind = function unbind() {
    if (this.arrayObserver) {
      this.arrayObserver.unsubscribe(checkedArrayContext, this);
      this.arrayObserver = null;
    }
    if (this.valueObserver) {
      this.valueObserver.unsubscribe(checkedValueContext, this);
    }
  };

  return CheckedObserver;
}()) || _class9);

var selectArrayContext = 'SelectValueObserver:array';

var SelectValueObserver = (_dec9 = subscriberCollection(), _dec9(_class10 = function () {
  function SelectValueObserver(element, handler, observerLocator) {
    

    this.element = element;
    this.handler = handler;
    this.observerLocator = observerLocator;
  }

  SelectValueObserver.prototype.getValue = function getValue() {
    return this.value;
  };

  SelectValueObserver.prototype.setValue = function setValue(newValue) {
    if (newValue !== null && newValue !== undefined && this.element.multiple && !Array.isArray(newValue)) {
      throw new Error('Only null or Array instances can be bound to a multi-select.');
    }
    if (this.value === newValue) {
      return;
    }

    if (this.arrayObserver) {
      this.arrayObserver.unsubscribe(selectArrayContext, this);
      this.arrayObserver = null;
    }

    if (Array.isArray(newValue)) {
      this.arrayObserver = this.observerLocator.getArrayObserver(newValue);
      this.arrayObserver.subscribe(selectArrayContext, this);
    }

    this.oldValue = this.value;
    this.value = newValue;
    this.synchronizeOptions();
    this.notify();

    if (!this.initialSync) {
      this.initialSync = true;
      this.observerLocator.taskQueue.queueMicroTask(this);
    }
  };

  SelectValueObserver.prototype.call = function call(context, splices) {
    this.synchronizeOptions();
  };

  SelectValueObserver.prototype.synchronizeOptions = function synchronizeOptions() {
    var value = this.value;
    var isArray = void 0;

    if (Array.isArray(value)) {
      isArray = true;
    }

    var options = this.element.options;
    var i = options.length;
    var matcher = this.element.matcher || function (a, b) {
      return a === b;
    };

    var _loop = function _loop() {
      var option = options.item(i);
      var optionValue = option.hasOwnProperty('model') ? option.model : option.value;
      if (isArray) {
        option.selected = value.findIndex(function (item) {
          return !!matcher(optionValue, item);
        }) !== -1;
        return 'continue';
      }
      option.selected = !!matcher(optionValue, value);
    };

    while (i--) {
      var _ret3 = _loop();

      if (_ret3 === 'continue') continue;
    }
  };

  SelectValueObserver.prototype.synchronizeValue = function synchronizeValue() {
    var _this24 = this;

    var options = this.element.options;
    var count = 0;
    var value = [];

    for (var _i23 = 0, ii = options.length; _i23 < ii; _i23++) {
      var _option = options.item(_i23);
      if (!_option.selected) {
        continue;
      }
      value.push(_option.hasOwnProperty('model') ? _option.model : _option.value);
      count++;
    }

    if (this.element.multiple) {
      if (Array.isArray(this.value)) {
        var _ret4 = function () {
          var matcher = _this24.element.matcher || function (a, b) {
            return a === b;
          };

          var i = 0;

          var _loop2 = function _loop2() {
            var a = _this24.value[i];
            if (value.findIndex(function (b) {
              return matcher(a, b);
            }) === -1) {
              _this24.value.splice(i, 1);
            } else {
              i++;
            }
          };

          while (i < _this24.value.length) {
            _loop2();
          }

          i = 0;

          var _loop3 = function _loop3() {
            var a = value[i];
            if (_this24.value.findIndex(function (b) {
              return matcher(a, b);
            }) === -1) {
              _this24.value.push(a);
            }
            i++;
          };

          while (i < value.length) {
            _loop3();
          }
          return {
            v: void 0
          };
        }();

        if ((typeof _ret4 === 'undefined' ? 'undefined' : _typeof(_ret4)) === "object") return _ret4.v;
      }
    } else {
      if (count === 0) {
        value = null;
      } else {
        value = value[0];
      }
    }

    if (value !== this.value) {
      this.oldValue = this.value;
      this.value = value;
      this.notify();
    }
  };

  SelectValueObserver.prototype.notify = function notify() {
    var oldValue = this.oldValue;
    var newValue = this.value;

    this.callSubscribers(newValue, oldValue);
  };

  SelectValueObserver.prototype.handleEvent = function handleEvent() {
    this.synchronizeValue();
  };

  SelectValueObserver.prototype.subscribe = function subscribe(context, callable) {
    if (!this.hasSubscribers()) {
      this.disposeHandler = this.handler.subscribe(this.element, this);
    }
    this.addSubscriber(context, callable);
  };

  SelectValueObserver.prototype.unsubscribe = function unsubscribe(context, callable) {
    if (this.removeSubscriber(context, callable) && !this.hasSubscribers()) {
      this.disposeHandler();
      this.disposeHandler = null;
    }
  };

  SelectValueObserver.prototype.bind = function bind() {
    var _this25 = this;

    this.domObserver = __WEBPACK_IMPORTED_MODULE_1_aurelia_pal__["b" /* DOM */].createMutationObserver(function () {
      _this25.synchronizeOptions();
      _this25.synchronizeValue();
    });
    this.domObserver.observe(this.element, { childList: true, subtree: true });
  };

  SelectValueObserver.prototype.unbind = function unbind() {
    this.domObserver.disconnect();
    this.domObserver = null;

    if (this.arrayObserver) {
      this.arrayObserver.unsubscribe(selectArrayContext, this);
      this.arrayObserver = null;
    }
  };

  return SelectValueObserver;
}()) || _class10);

var ClassObserver = function () {
  function ClassObserver(element) {
    

    this.element = element;
    this.doNotCache = true;
    this.value = '';
    this.version = 0;
  }

  ClassObserver.prototype.getValue = function getValue() {
    return this.value;
  };

  ClassObserver.prototype.setValue = function setValue(newValue) {
    var nameIndex = this.nameIndex || {};
    var version = this.version;
    var names = void 0;
    var name = void 0;

    if (newValue !== null && newValue !== undefined && newValue.length) {
      names = newValue.split(/\s+/);
      for (var _i24 = 0, length = names.length; _i24 < length; _i24++) {
        name = names[_i24];
        if (name === '') {
          continue;
        }
        nameIndex[name] = version;
        this.element.classList.add(name);
      }
    }

    this.value = newValue;
    this.nameIndex = nameIndex;
    this.version += 1;

    if (version === 0) {
      return;
    }

    version -= 1;
    for (name in nameIndex) {
      if (!nameIndex.hasOwnProperty(name) || nameIndex[name] !== version) {
        continue;
      }
      this.element.classList.remove(name);
    }
  };

  ClassObserver.prototype.subscribe = function subscribe() {
    throw new Error('Observation of a "' + this.element.nodeName + '" element\'s "class" property is not supported.');
  };

  return ClassObserver;
}();

function hasDeclaredDependencies(descriptor) {
  return !!(descriptor && descriptor.get && descriptor.get.dependencies);
}

function declarePropertyDependencies(ctor, propertyName, dependencies) {
  var descriptor = Object.getOwnPropertyDescriptor(ctor.prototype, propertyName);
  descriptor.get.dependencies = dependencies;
}

function computedFrom() {
  for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
    rest[_key] = arguments[_key];
  }

  return function (target, key, descriptor) {
    descriptor.get.dependencies = rest;
    return descriptor;
  };
}

var ComputedExpression = function (_Expression19) {
  _inherits(ComputedExpression, _Expression19);

  function ComputedExpression(name, dependencies) {
    

    var _this26 = _possibleConstructorReturn(this, _Expression19.call(this));

    _this26.name = name;
    _this26.dependencies = dependencies;
    _this26.isAssignable = true;
    return _this26;
  }

  ComputedExpression.prototype.evaluate = function evaluate(scope, lookupFunctions) {
    return scope.bindingContext[this.name];
  };

  ComputedExpression.prototype.assign = function assign(scope, value) {
    scope.bindingContext[this.name] = value;
  };

  ComputedExpression.prototype.accept = function accept(visitor) {
    throw new Error('not implemented');
  };

  ComputedExpression.prototype.connect = function connect(binding, scope) {
    var dependencies = this.dependencies;
    var i = dependencies.length;
    while (i--) {
      dependencies[i].connect(binding, scope);
    }
  };

  return ComputedExpression;
}(Expression);

function createComputedObserver(obj, propertyName, descriptor, observerLocator) {
  var dependencies = descriptor.get.dependencies;
  if (!(dependencies instanceof ComputedExpression)) {
    var _i25 = dependencies.length;
    while (_i25--) {
      dependencies[_i25] = observerLocator.parser.parse(dependencies[_i25]);
    }
    dependencies = descriptor.get.dependencies = new ComputedExpression(propertyName, dependencies);
  }

  var scope = { bindingContext: obj, overrideContext: createOverrideContext(obj) };
  return new ExpressionObserver(scope, dependencies, observerLocator);
}

var svgElements = void 0;
var svgPresentationElements = void 0;
var svgPresentationAttributes = void 0;
var svgAnalyzer = void 0;

if (typeof FEATURE_NO_SVG === 'undefined') {
  (function () {
    svgElements = {
      a: ['class', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'target', 'transform', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
      altGlyph: ['class', 'dx', 'dy', 'externalResourcesRequired', 'format', 'glyphRef', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'rotate', 'style', 'systemLanguage', 'x', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
      altGlyphDef: ['id', 'xml:base', 'xml:lang', 'xml:space'],
      altGlyphItem: ['id', 'xml:base', 'xml:lang', 'xml:space'],
      animate: ['accumulate', 'additive', 'attributeName', 'attributeType', 'begin', 'by', 'calcMode', 'dur', 'end', 'externalResourcesRequired', 'fill', 'from', 'id', 'keySplines', 'keyTimes', 'max', 'min', 'onbegin', 'onend', 'onload', 'onrepeat', 'repeatCount', 'repeatDur', 'requiredExtensions', 'requiredFeatures', 'restart', 'systemLanguage', 'to', 'values', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
      animateColor: ['accumulate', 'additive', 'attributeName', 'attributeType', 'begin', 'by', 'calcMode', 'dur', 'end', 'externalResourcesRequired', 'fill', 'from', 'id', 'keySplines', 'keyTimes', 'max', 'min', 'onbegin', 'onend', 'onload', 'onrepeat', 'repeatCount', 'repeatDur', 'requiredExtensions', 'requiredFeatures', 'restart', 'systemLanguage', 'to', 'values', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
      animateMotion: ['accumulate', 'additive', 'begin', 'by', 'calcMode', 'dur', 'end', 'externalResourcesRequired', 'fill', 'from', 'id', 'keyPoints', 'keySplines', 'keyTimes', 'max', 'min', 'onbegin', 'onend', 'onload', 'onrepeat', 'origin', 'path', 'repeatCount', 'repeatDur', 'requiredExtensions', 'requiredFeatures', 'restart', 'rotate', 'systemLanguage', 'to', 'values', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
      animateTransform: ['accumulate', 'additive', 'attributeName', 'attributeType', 'begin', 'by', 'calcMode', 'dur', 'end', 'externalResourcesRequired', 'fill', 'from', 'id', 'keySplines', 'keyTimes', 'max', 'min', 'onbegin', 'onend', 'onload', 'onrepeat', 'repeatCount', 'repeatDur', 'requiredExtensions', 'requiredFeatures', 'restart', 'systemLanguage', 'to', 'type', 'values', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
      circle: ['class', 'cx', 'cy', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'r', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
      clipPath: ['class', 'clipPathUnits', 'externalResourcesRequired', 'id', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
      'color-profile': ['id', 'local', 'name', 'rendering-intent', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
      cursor: ['externalResourcesRequired', 'id', 'requiredExtensions', 'requiredFeatures', 'systemLanguage', 'x', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
      defs: ['class', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
      desc: ['class', 'id', 'style', 'xml:base', 'xml:lang', 'xml:space'],
      ellipse: ['class', 'cx', 'cy', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'rx', 'ry', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
      feBlend: ['class', 'height', 'id', 'in', 'in2', 'mode', 'result', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
      feColorMatrix: ['class', 'height', 'id', 'in', 'result', 'style', 'type', 'values', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
      feComponentTransfer: ['class', 'height', 'id', 'in', 'result', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
      feComposite: ['class', 'height', 'id', 'in', 'in2', 'k1', 'k2', 'k3', 'k4', 'operator', 'result', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
      feConvolveMatrix: ['bias', 'class', 'divisor', 'edgeMode', 'height', 'id', 'in', 'kernelMatrix', 'kernelUnitLength', 'order', 'preserveAlpha', 'result', 'style', 'targetX', 'targetY', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
      feDiffuseLighting: ['class', 'diffuseConstant', 'height', 'id', 'in', 'kernelUnitLength', 'result', 'style', 'surfaceScale', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
      feDisplacementMap: ['class', 'height', 'id', 'in', 'in2', 'result', 'scale', 'style', 'width', 'x', 'xChannelSelector', 'xml:base', 'xml:lang', 'xml:space', 'y', 'yChannelSelector'],
      feDistantLight: ['azimuth', 'elevation', 'id', 'xml:base', 'xml:lang', 'xml:space'],
      feFlood: ['class', 'height', 'id', 'result', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
      feFuncA: ['amplitude', 'exponent', 'id', 'intercept', 'offset', 'slope', 'tableValues', 'type', 'xml:base', 'xml:lang', 'xml:space'],
      feFuncB: ['amplitude', 'exponent', 'id', 'intercept', 'offset', 'slope', 'tableValues', 'type', 'xml:base', 'xml:lang', 'xml:space'],
      feFuncG: ['amplitude', 'exponent', 'id', 'intercept', 'offset', 'slope', 'tableValues', 'type', 'xml:base', 'xml:lang', 'xml:space'],
      feFuncR: ['amplitude', 'exponent', 'id', 'intercept', 'offset', 'slope', 'tableValues', 'type', 'xml:base', 'xml:lang', 'xml:space'],
      feGaussianBlur: ['class', 'height', 'id', 'in', 'result', 'stdDeviation', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
      feImage: ['class', 'externalResourcesRequired', 'height', 'id', 'preserveAspectRatio', 'result', 'style', 'width', 'x', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
      feMerge: ['class', 'height', 'id', 'result', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
      feMergeNode: ['id', 'xml:base', 'xml:lang', 'xml:space'],
      feMorphology: ['class', 'height', 'id', 'in', 'operator', 'radius', 'result', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
      feOffset: ['class', 'dx', 'dy', 'height', 'id', 'in', 'result', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
      fePointLight: ['id', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y', 'z'],
      feSpecularLighting: ['class', 'height', 'id', 'in', 'kernelUnitLength', 'result', 'specularConstant', 'specularExponent', 'style', 'surfaceScale', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
      feSpotLight: ['id', 'limitingConeAngle', 'pointsAtX', 'pointsAtY', 'pointsAtZ', 'specularExponent', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y', 'z'],
      feTile: ['class', 'height', 'id', 'in', 'result', 'style', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
      feTurbulence: ['baseFrequency', 'class', 'height', 'id', 'numOctaves', 'result', 'seed', 'stitchTiles', 'style', 'type', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
      filter: ['class', 'externalResourcesRequired', 'filterRes', 'filterUnits', 'height', 'id', 'primitiveUnits', 'style', 'width', 'x', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
      font: ['class', 'externalResourcesRequired', 'horiz-adv-x', 'horiz-origin-x', 'horiz-origin-y', 'id', 'style', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'xml:base', 'xml:lang', 'xml:space'],
      'font-face': ['accent-height', 'alphabetic', 'ascent', 'bbox', 'cap-height', 'descent', 'font-family', 'font-size', 'font-stretch', 'font-style', 'font-variant', 'font-weight', 'hanging', 'id', 'ideographic', 'mathematical', 'overline-position', 'overline-thickness', 'panose-1', 'slope', 'stemh', 'stemv', 'strikethrough-position', 'strikethrough-thickness', 'underline-position', 'underline-thickness', 'unicode-range', 'units-per-em', 'v-alphabetic', 'v-hanging', 'v-ideographic', 'v-mathematical', 'widths', 'x-height', 'xml:base', 'xml:lang', 'xml:space'],
      'font-face-format': ['id', 'string', 'xml:base', 'xml:lang', 'xml:space'],
      'font-face-name': ['id', 'name', 'xml:base', 'xml:lang', 'xml:space'],
      'font-face-src': ['id', 'xml:base', 'xml:lang', 'xml:space'],
      'font-face-uri': ['id', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
      foreignObject: ['class', 'externalResourcesRequired', 'height', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
      g: ['class', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
      glyph: ['arabic-form', 'class', 'd', 'glyph-name', 'horiz-adv-x', 'id', 'lang', 'orientation', 'style', 'unicode', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'xml:base', 'xml:lang', 'xml:space'],
      glyphRef: ['class', 'dx', 'dy', 'format', 'glyphRef', 'id', 'style', 'x', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
      hkern: ['g1', 'g2', 'id', 'k', 'u1', 'u2', 'xml:base', 'xml:lang', 'xml:space'],
      image: ['class', 'externalResourcesRequired', 'height', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'preserveAspectRatio', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'width', 'x', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
      line: ['class', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'x1', 'x2', 'xml:base', 'xml:lang', 'xml:space', 'y1', 'y2'],
      linearGradient: ['class', 'externalResourcesRequired', 'gradientTransform', 'gradientUnits', 'id', 'spreadMethod', 'style', 'x1', 'x2', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y1', 'y2'],
      marker: ['class', 'externalResourcesRequired', 'id', 'markerHeight', 'markerUnits', 'markerWidth', 'orient', 'preserveAspectRatio', 'refX', 'refY', 'style', 'viewBox', 'xml:base', 'xml:lang', 'xml:space'],
      mask: ['class', 'externalResourcesRequired', 'height', 'id', 'maskContentUnits', 'maskUnits', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
      metadata: ['id', 'xml:base', 'xml:lang', 'xml:space'],
      'missing-glyph': ['class', 'd', 'horiz-adv-x', 'id', 'style', 'vert-adv-y', 'vert-origin-x', 'vert-origin-y', 'xml:base', 'xml:lang', 'xml:space'],
      mpath: ['externalResourcesRequired', 'id', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
      path: ['class', 'd', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'pathLength', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
      pattern: ['class', 'externalResourcesRequired', 'height', 'id', 'patternContentUnits', 'patternTransform', 'patternUnits', 'preserveAspectRatio', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'viewBox', 'width', 'x', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
      polygon: ['class', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'points', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
      polyline: ['class', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'points', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
      radialGradient: ['class', 'cx', 'cy', 'externalResourcesRequired', 'fx', 'fy', 'gradientTransform', 'gradientUnits', 'id', 'r', 'spreadMethod', 'style', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
      rect: ['class', 'externalResourcesRequired', 'height', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'rx', 'ry', 'style', 'systemLanguage', 'transform', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
      script: ['externalResourcesRequired', 'id', 'type', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
      set: ['attributeName', 'attributeType', 'begin', 'dur', 'end', 'externalResourcesRequired', 'fill', 'id', 'max', 'min', 'onbegin', 'onend', 'onload', 'onrepeat', 'repeatCount', 'repeatDur', 'requiredExtensions', 'requiredFeatures', 'restart', 'systemLanguage', 'to', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
      stop: ['class', 'id', 'offset', 'style', 'xml:base', 'xml:lang', 'xml:space'],
      style: ['id', 'media', 'title', 'type', 'xml:base', 'xml:lang', 'xml:space'],
      svg: ['baseProfile', 'class', 'contentScriptType', 'contentStyleType', 'externalResourcesRequired', 'height', 'id', 'onabort', 'onactivate', 'onclick', 'onerror', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'onresize', 'onscroll', 'onunload', 'onzoom', 'preserveAspectRatio', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'version', 'viewBox', 'width', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y', 'zoomAndPan'],
      switch: ['class', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'xml:base', 'xml:lang', 'xml:space'],
      symbol: ['class', 'externalResourcesRequired', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'preserveAspectRatio', 'style', 'viewBox', 'xml:base', 'xml:lang', 'xml:space'],
      text: ['class', 'dx', 'dy', 'externalResourcesRequired', 'id', 'lengthAdjust', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'rotate', 'style', 'systemLanguage', 'textLength', 'transform', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
      textPath: ['class', 'externalResourcesRequired', 'id', 'lengthAdjust', 'method', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'spacing', 'startOffset', 'style', 'systemLanguage', 'textLength', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space'],
      title: ['class', 'id', 'style', 'xml:base', 'xml:lang', 'xml:space'],
      tref: ['class', 'dx', 'dy', 'externalResourcesRequired', 'id', 'lengthAdjust', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'rotate', 'style', 'systemLanguage', 'textLength', 'x', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
      tspan: ['class', 'dx', 'dy', 'externalResourcesRequired', 'id', 'lengthAdjust', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'rotate', 'style', 'systemLanguage', 'textLength', 'x', 'xml:base', 'xml:lang', 'xml:space', 'y'],
      use: ['class', 'externalResourcesRequired', 'height', 'id', 'onactivate', 'onclick', 'onfocusin', 'onfocusout', 'onload', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'requiredExtensions', 'requiredFeatures', 'style', 'systemLanguage', 'transform', 'width', 'x', 'xlink:actuate', 'xlink:arcrole', 'xlink:href', 'xlink:role', 'xlink:show', 'xlink:title', 'xlink:type', 'xml:base', 'xml:lang', 'xml:space', 'y'],
      view: ['externalResourcesRequired', 'id', 'preserveAspectRatio', 'viewBox', 'viewTarget', 'xml:base', 'xml:lang', 'xml:space', 'zoomAndPan'],
      vkern: ['g1', 'g2', 'id', 'k', 'u1', 'u2', 'xml:base', 'xml:lang', 'xml:space']
    };


    svgPresentationElements = {
      'a': true,
      'altGlyph': true,
      'animate': true,
      'animateColor': true,
      'circle': true,
      'clipPath': true,
      'defs': true,
      'ellipse': true,
      'feBlend': true,
      'feColorMatrix': true,
      'feComponentTransfer': true,
      'feComposite': true,
      'feConvolveMatrix': true,
      'feDiffuseLighting': true,
      'feDisplacementMap': true,
      'feFlood': true,
      'feGaussianBlur': true,
      'feImage': true,
      'feMerge': true,
      'feMorphology': true,
      'feOffset': true,
      'feSpecularLighting': true,
      'feTile': true,
      'feTurbulence': true,
      'filter': true,
      'font': true,
      'foreignObject': true,
      'g': true,
      'glyph': true,
      'glyphRef': true,
      'image': true,
      'line': true,
      'linearGradient': true,
      'marker': true,
      'mask': true,
      'missing-glyph': true,
      'path': true,
      'pattern': true,
      'polygon': true,
      'polyline': true,
      'radialGradient': true,
      'rect': true,
      'stop': true,
      'svg': true,
      'switch': true,
      'symbol': true,
      'text': true,
      'textPath': true,
      'tref': true,
      'tspan': true,
      'use': true
    };

    svgPresentationAttributes = {
      'alignment-baseline': true,
      'baseline-shift': true,
      'clip-path': true,
      'clip-rule': true,
      'clip': true,
      'color-interpolation-filters': true,
      'color-interpolation': true,
      'color-profile': true,
      'color-rendering': true,
      'color': true,
      'cursor': true,
      'direction': true,
      'display': true,
      'dominant-baseline': true,
      'enable-background': true,
      'fill-opacity': true,
      'fill-rule': true,
      'fill': true,
      'filter': true,
      'flood-color': true,
      'flood-opacity': true,
      'font-family': true,
      'font-size-adjust': true,
      'font-size': true,
      'font-stretch': true,
      'font-style': true,
      'font-variant': true,
      'font-weight': true,
      'glyph-orientation-horizontal': true,
      'glyph-orientation-vertical': true,
      'image-rendering': true,
      'kerning': true,
      'letter-spacing': true,
      'lighting-color': true,
      'marker-end': true,
      'marker-mid': true,
      'marker-start': true,
      'mask': true,
      'opacity': true,
      'overflow': true,
      'pointer-events': true,
      'shape-rendering': true,
      'stop-color': true,
      'stop-opacity': true,
      'stroke-dasharray': true,
      'stroke-dashoffset': true,
      'stroke-linecap': true,
      'stroke-linejoin': true,
      'stroke-miterlimit': true,
      'stroke-opacity': true,
      'stroke-width': true,
      'stroke': true,
      'text-anchor': true,
      'text-decoration': true,
      'text-rendering': true,
      'unicode-bidi': true,
      'visibility': true,
      'word-spacing': true,
      'writing-mode': true
    };

    var createElement = function createElement(html) {
      var div = __WEBPACK_IMPORTED_MODULE_1_aurelia_pal__["b" /* DOM */].createElement('div');
      div.innerHTML = html;
      return div.firstChild;
    };

    svgAnalyzer = function () {
      function SVGAnalyzer() {
        

        if (createElement('<svg><altGlyph /></svg>').firstElementChild.nodeName === 'altglyph' && elements.altGlyph) {
          elements.altglyph = elements.altGlyph;
          delete elements.altGlyph;
          elements.altglyphdef = elements.altGlyphDef;
          delete elements.altGlyphDef;
          elements.altglyphitem = elements.altGlyphItem;
          delete elements.altGlyphItem;
          elements.glyphref = elements.glyphRef;
          delete elements.glyphRef;
        }
      }

      SVGAnalyzer.prototype.isStandardSvgAttribute = function isStandardSvgAttribute(nodeName, attributeName) {
        return presentationElements[nodeName] && presentationAttributes[attributeName] || elements[nodeName] && elements[nodeName].indexOf(attributeName) !== -1;
      };

      return SVGAnalyzer;
    }();
  })();
}

var elements = svgElements;
var presentationElements = svgPresentationElements;
var presentationAttributes = svgPresentationAttributes;
var SVGAnalyzer = svgAnalyzer || function () {
  function _class11() {
    
  }

  _class11.prototype.isStandardSvgAttribute = function isStandardSvgAttribute() {
    return false;
  };

  return _class11;
}();

var ObserverLocator = (_temp = _class12 = function () {
  function ObserverLocator(taskQueue, eventManager, dirtyChecker, svgAnalyzer, parser) {
    

    this.taskQueue = taskQueue;
    this.eventManager = eventManager;
    this.dirtyChecker = dirtyChecker;
    this.svgAnalyzer = svgAnalyzer;
    this.parser = parser;
    this.adapters = [];
    this.logger = __WEBPACK_IMPORTED_MODULE_0_aurelia_logging__["getLogger"]('observer-locator');
  }

  ObserverLocator.prototype.getObserver = function getObserver(obj, propertyName) {
    var observersLookup = obj.__observers__;
    var observer = void 0;

    if (observersLookup && propertyName in observersLookup) {
      return observersLookup[propertyName];
    }

    observer = this.createPropertyObserver(obj, propertyName);

    if (!observer.doNotCache) {
      if (observersLookup === undefined) {
        observersLookup = this.getOrCreateObserversLookup(obj);
      }

      observersLookup[propertyName] = observer;
    }

    return observer;
  };

  ObserverLocator.prototype.getOrCreateObserversLookup = function getOrCreateObserversLookup(obj) {
    return obj.__observers__ || this.createObserversLookup(obj);
  };

  ObserverLocator.prototype.createObserversLookup = function createObserversLookup(obj) {
    var value = {};

    if (!Reflect.defineProperty(obj, '__observers__', {
      enumerable: false,
      configurable: false,
      writable: false,
      value: value
    })) {
      this.logger.warn('Cannot add observers to object', obj);
    }

    return value;
  };

  ObserverLocator.prototype.addAdapter = function addAdapter(adapter) {
    this.adapters.push(adapter);
  };

  ObserverLocator.prototype.getAdapterObserver = function getAdapterObserver(obj, propertyName, descriptor) {
    for (var _i26 = 0, ii = this.adapters.length; _i26 < ii; _i26++) {
      var adapter = this.adapters[_i26];
      var observer = adapter.getObserver(obj, propertyName, descriptor);
      if (observer) {
        return observer;
      }
    }
    return null;
  };

  ObserverLocator.prototype.createPropertyObserver = function createPropertyObserver(obj, propertyName) {
    var descriptor = void 0;
    var handler = void 0;
    var xlinkResult = void 0;

    if (!(obj instanceof Object)) {
      return new PrimitiveObserver(obj, propertyName);
    }

    if (obj instanceof __WEBPACK_IMPORTED_MODULE_1_aurelia_pal__["b" /* DOM */].Element) {
      if (propertyName === 'class') {
        return new ClassObserver(obj);
      }
      if (propertyName === 'style' || propertyName === 'css') {
        return new StyleObserver(obj, propertyName);
      }
      handler = this.eventManager.getElementHandler(obj, propertyName);
      if (propertyName === 'value' && obj.tagName.toLowerCase() === 'select') {
        return new SelectValueObserver(obj, handler, this);
      }
      if (propertyName === 'checked' && obj.tagName.toLowerCase() === 'input') {
        return new CheckedObserver(obj, handler, this);
      }
      if (handler) {
        return new ValueAttributeObserver(obj, propertyName, handler);
      }
      xlinkResult = /^xlink:(.+)$/.exec(propertyName);
      if (xlinkResult) {
        return new XLinkAttributeObserver(obj, propertyName, xlinkResult[1]);
      }
      if (propertyName === 'role' && (obj instanceof __WEBPACK_IMPORTED_MODULE_1_aurelia_pal__["b" /* DOM */].Element || obj instanceof __WEBPACK_IMPORTED_MODULE_1_aurelia_pal__["b" /* DOM */].SVGElement) || /^\w+:|^data-|^aria-/.test(propertyName) || obj instanceof __WEBPACK_IMPORTED_MODULE_1_aurelia_pal__["b" /* DOM */].SVGElement && this.svgAnalyzer.isStandardSvgAttribute(obj.nodeName, propertyName)) {
        return new DataAttributeObserver(obj, propertyName);
      }
    }

    descriptor = Object.getPropertyDescriptor(obj, propertyName);

    if (hasDeclaredDependencies(descriptor)) {
      return createComputedObserver(obj, propertyName, descriptor, this);
    }

    if (descriptor) {
      var existingGetterOrSetter = descriptor.get || descriptor.set;
      if (existingGetterOrSetter) {
        if (existingGetterOrSetter.getObserver) {
          return existingGetterOrSetter.getObserver(obj);
        }

        var adapterObserver = this.getAdapterObserver(obj, propertyName, descriptor);
        if (adapterObserver) {
          return adapterObserver;
        }
        return new DirtyCheckProperty(this.dirtyChecker, obj, propertyName);
      }
    }

    if (obj instanceof Array) {
      if (propertyName === 'length') {
        return this.getArrayObserver(obj).getLengthObserver();
      }

      return new DirtyCheckProperty(this.dirtyChecker, obj, propertyName);
    } else if (obj instanceof Map) {
      if (propertyName === 'size') {
        return this.getMapObserver(obj).getLengthObserver();
      }

      return new DirtyCheckProperty(this.dirtyChecker, obj, propertyName);
    } else if (obj instanceof Set) {
      if (propertyName === 'size') {
        return this.getSetObserver(obj).getLengthObserver();
      }

      return new DirtyCheckProperty(this.dirtyChecker, obj, propertyName);
    }

    return new SetterObserver(this.taskQueue, obj, propertyName);
  };

  ObserverLocator.prototype.getAccessor = function getAccessor(obj, propertyName) {
    if (obj instanceof __WEBPACK_IMPORTED_MODULE_1_aurelia_pal__["b" /* DOM */].Element) {
      if (propertyName === 'class' || propertyName === 'style' || propertyName === 'css' || propertyName === 'value' && (obj.tagName.toLowerCase() === 'input' || obj.tagName.toLowerCase() === 'select') || propertyName === 'checked' && obj.tagName.toLowerCase() === 'input' || propertyName === 'model' && obj.tagName.toLowerCase() === 'input' || /^xlink:.+$/.exec(propertyName)) {
        return this.getObserver(obj, propertyName);
      }
      if (/^\w+:|^data-|^aria-/.test(propertyName) || obj instanceof __WEBPACK_IMPORTED_MODULE_1_aurelia_pal__["b" /* DOM */].SVGElement && this.svgAnalyzer.isStandardSvgAttribute(obj.nodeName, propertyName) || obj.tagName.toLowerCase() === 'img' && propertyName === 'src' || obj.tagName.toLowerCase() === 'a' && propertyName === 'href') {
        return dataAttributeAccessor;
      }
    }
    return propertyAccessor;
  };

  ObserverLocator.prototype.getArrayObserver = function getArrayObserver(array) {
    return _getArrayObserver(this.taskQueue, array);
  };

  ObserverLocator.prototype.getMapObserver = function getMapObserver(map) {
    return _getMapObserver(this.taskQueue, map);
  };

  ObserverLocator.prototype.getSetObserver = function getSetObserver(set) {
    return _getSetObserver(this.taskQueue, set);
  };

  return ObserverLocator;
}(), _class12.inject = [__WEBPACK_IMPORTED_MODULE_2_aurelia_task_queue__["a" /* TaskQueue */], EventManager, DirtyChecker, SVGAnalyzer, Parser], _temp);

var ObjectObservationAdapter = function () {
  function ObjectObservationAdapter() {
    
  }

  ObjectObservationAdapter.prototype.getObserver = function getObserver(object, propertyName, descriptor) {
    throw new Error('BindingAdapters must implement getObserver(object, propertyName).');
  };

  return ObjectObservationAdapter;
}();

var BindingExpression = function () {
  function BindingExpression(observerLocator, targetProperty, sourceExpression, mode, lookupFunctions, attribute) {
    

    this.observerLocator = observerLocator;
    this.targetProperty = targetProperty;
    this.sourceExpression = sourceExpression;
    this.mode = mode;
    this.lookupFunctions = lookupFunctions;
    this.attribute = attribute;
    this.discrete = false;
  }

  BindingExpression.prototype.createBinding = function createBinding(target) {
    return new Binding(this.observerLocator, this.sourceExpression, target, this.targetProperty, this.mode, this.lookupFunctions);
  };

  return BindingExpression;
}();

var Binding = (_dec10 = connectable(), _dec10(_class13 = function () {
  function Binding(observerLocator, sourceExpression, target, targetProperty, mode, lookupFunctions) {
    

    this.observerLocator = observerLocator;
    this.sourceExpression = sourceExpression;
    this.target = target;
    this.targetProperty = targetProperty;
    this.mode = mode;
    this.lookupFunctions = lookupFunctions;
  }

  Binding.prototype.updateTarget = function updateTarget(value) {
    this.targetObserver.setValue(value, this.target, this.targetProperty);
  };

  Binding.prototype.updateSource = function updateSource(value) {
    this.sourceExpression.assign(this.source, value, this.lookupFunctions);
  };

  Binding.prototype.call = function call(context, newValue, oldValue) {
    if (!this.isBound) {
      return;
    }
    if (context === sourceContext) {
      oldValue = this.targetObserver.getValue(this.target, this.targetProperty);
      newValue = this.sourceExpression.evaluate(this.source, this.lookupFunctions);
      if (newValue !== oldValue) {
        this.updateTarget(newValue);
      }
      if (this.mode !== bindingMode.oneTime) {
        this._version++;
        this.sourceExpression.connect(this, this.source);
        this.unobserve(false);
      }
      return;
    }
    if (context === targetContext) {
      if (newValue !== this.sourceExpression.evaluate(this.source, this.lookupFunctions)) {
        this.updateSource(newValue);
      }
      return;
    }
    throw new Error('Unexpected call context ' + context);
  };

  Binding.prototype.bind = function bind(source) {
    if (this.isBound) {
      if (this.source === source) {
        return;
      }
      this.unbind();
    }
    this.isBound = true;
    this.source = source;

    if (this.sourceExpression.bind) {
      this.sourceExpression.bind(this, source, this.lookupFunctions);
    }

    var mode = this.mode;
    if (!this.targetObserver) {
      var method = mode === bindingMode.twoWay || mode === bindingMode.fromView ? 'getObserver' : 'getAccessor';
      this.targetObserver = this.observerLocator[method](this.target, this.targetProperty);
    }

    if ('bind' in this.targetObserver) {
      this.targetObserver.bind();
    }
    if (this.mode !== bindingMode.fromView) {
      var value = this.sourceExpression.evaluate(source, this.lookupFunctions);
      this.updateTarget(value);
    }

    if (mode === bindingMode.toView) {
      enqueueBindingConnect(this);
    } else if (mode === bindingMode.twoWay) {
      this.sourceExpression.connect(this, source);
      this.targetObserver.subscribe(targetContext, this);
    } else if (mode === bindingMode.fromView) {
      this.targetObserver.subscribe(targetContext, this);
    }
  };

  Binding.prototype.unbind = function unbind() {
    if (!this.isBound) {
      return;
    }
    this.isBound = false;
    if (this.sourceExpression.unbind) {
      this.sourceExpression.unbind(this, this.source);
    }
    this.source = null;
    if ('unbind' in this.targetObserver) {
      this.targetObserver.unbind();
    }
    if (this.targetObserver.unsubscribe) {
      this.targetObserver.unsubscribe(targetContext, this);
    }
    this.unobserve(true);
  };

  Binding.prototype.connect = function connect(evaluate) {
    if (!this.isBound) {
      return;
    }
    if (evaluate) {
      var value = this.sourceExpression.evaluate(this.source, this.lookupFunctions);
      this.updateTarget(value);
    }
    this.sourceExpression.connect(this, this.source);
  };

  return Binding;
}()) || _class13);

var CallExpression = function () {
  function CallExpression(observerLocator, targetProperty, sourceExpression, lookupFunctions) {
    

    this.observerLocator = observerLocator;
    this.targetProperty = targetProperty;
    this.sourceExpression = sourceExpression;
    this.lookupFunctions = lookupFunctions;
  }

  CallExpression.prototype.createBinding = function createBinding(target) {
    return new Call(this.observerLocator, this.sourceExpression, target, this.targetProperty, this.lookupFunctions);
  };

  return CallExpression;
}();

var Call = function () {
  function Call(observerLocator, sourceExpression, target, targetProperty, lookupFunctions) {
    

    this.sourceExpression = sourceExpression;
    this.target = target;
    this.targetProperty = observerLocator.getObserver(target, targetProperty);
    this.lookupFunctions = lookupFunctions;
  }

  Call.prototype.callSource = function callSource($event) {
    var overrideContext = this.source.overrideContext;
    Object.assign(overrideContext, $event);
    overrideContext.$event = $event;
    var mustEvaluate = true;
    var result = this.sourceExpression.evaluate(this.source, this.lookupFunctions, mustEvaluate);
    delete overrideContext.$event;
    for (var prop in $event) {
      delete overrideContext[prop];
    }
    return result;
  };

  Call.prototype.bind = function bind(source) {
    var _this27 = this;

    if (this.isBound) {
      if (this.source === source) {
        return;
      }
      this.unbind();
    }
    this.isBound = true;
    this.source = source;

    if (this.sourceExpression.bind) {
      this.sourceExpression.bind(this, source, this.lookupFunctions);
    }
    this.targetProperty.setValue(function ($event) {
      return _this27.callSource($event);
    });
  };

  Call.prototype.unbind = function unbind() {
    if (!this.isBound) {
      return;
    }
    this.isBound = false;
    if (this.sourceExpression.unbind) {
      this.sourceExpression.unbind(this, this.source);
    }
    this.source = null;
    this.targetProperty.setValue(null);
  };

  return Call;
}();

var ValueConverterResource = function () {
  function ValueConverterResource(name) {
    

    this.name = name;
  }

  ValueConverterResource.convention = function convention(name) {
    if (name.endsWith('ValueConverter')) {
      return new ValueConverterResource(camelCase(name.substring(0, name.length - 14)));
    }
  };

  ValueConverterResource.prototype.initialize = function initialize(container, target) {
    this.instance = container.get(target);
  };

  ValueConverterResource.prototype.register = function register(registry, name) {
    registry.registerValueConverter(name || this.name, this.instance);
  };

  ValueConverterResource.prototype.load = function load(container, target) {};

  return ValueConverterResource;
}();

function valueConverter(nameOrTarget) {
  if (nameOrTarget === undefined || typeof nameOrTarget === 'string') {
    return function (target) {
      __WEBPACK_IMPORTED_MODULE_3_aurelia_metadata__["b" /* metadata */].define(__WEBPACK_IMPORTED_MODULE_3_aurelia_metadata__["b" /* metadata */].resource, new ValueConverterResource(nameOrTarget), target);
    };
  }

  __WEBPACK_IMPORTED_MODULE_3_aurelia_metadata__["b" /* metadata */].define(__WEBPACK_IMPORTED_MODULE_3_aurelia_metadata__["b" /* metadata */].resource, new ValueConverterResource(), nameOrTarget);
}

var BindingBehaviorResource = function () {
  function BindingBehaviorResource(name) {
    

    this.name = name;
  }

  BindingBehaviorResource.convention = function convention(name) {
    if (name.endsWith('BindingBehavior')) {
      return new BindingBehaviorResource(camelCase(name.substring(0, name.length - 15)));
    }
  };

  BindingBehaviorResource.prototype.initialize = function initialize(container, target) {
    this.instance = container.get(target);
  };

  BindingBehaviorResource.prototype.register = function register(registry, name) {
    registry.registerBindingBehavior(name || this.name, this.instance);
  };

  BindingBehaviorResource.prototype.load = function load(container, target) {};

  return BindingBehaviorResource;
}();

function bindingBehavior(nameOrTarget) {
  if (nameOrTarget === undefined || typeof nameOrTarget === 'string') {
    return function (target) {
      __WEBPACK_IMPORTED_MODULE_3_aurelia_metadata__["b" /* metadata */].define(__WEBPACK_IMPORTED_MODULE_3_aurelia_metadata__["b" /* metadata */].resource, new BindingBehaviorResource(nameOrTarget), target);
    };
  }

  __WEBPACK_IMPORTED_MODULE_3_aurelia_metadata__["b" /* metadata */].define(__WEBPACK_IMPORTED_MODULE_3_aurelia_metadata__["b" /* metadata */].resource, new BindingBehaviorResource(), nameOrTarget);
}

var ListenerExpression = function () {
  function ListenerExpression(eventManager, targetEvent, sourceExpression, delegationStrategy, preventDefault, lookupFunctions) {
    

    this.eventManager = eventManager;
    this.targetEvent = targetEvent;
    this.sourceExpression = sourceExpression;
    this.delegationStrategy = delegationStrategy;
    this.discrete = true;
    this.preventDefault = preventDefault;
    this.lookupFunctions = lookupFunctions;
  }

  ListenerExpression.prototype.createBinding = function createBinding(target) {
    return new Listener(this.eventManager, this.targetEvent, this.delegationStrategy, this.sourceExpression, target, this.preventDefault, this.lookupFunctions);
  };

  return ListenerExpression;
}();

var Listener = function () {
  function Listener(eventManager, targetEvent, delegationStrategy, sourceExpression, target, preventDefault, lookupFunctions) {
    

    this.eventManager = eventManager;
    this.targetEvent = targetEvent;
    this.delegationStrategy = delegationStrategy;
    this.sourceExpression = sourceExpression;
    this.target = target;
    this.preventDefault = preventDefault;
    this.lookupFunctions = lookupFunctions;
  }

  Listener.prototype.callSource = function callSource(event) {
    var overrideContext = this.source.overrideContext;
    overrideContext.$event = event;
    var mustEvaluate = true;
    var result = this.sourceExpression.evaluate(this.source, this.lookupFunctions, mustEvaluate);
    delete overrideContext.$event;
    if (result !== true && this.preventDefault) {
      event.preventDefault();
    }
    return result;
  };

  Listener.prototype.handleEvent = function handleEvent(event) {
    this.callSource(event);
  };

  Listener.prototype.bind = function bind(source) {
    if (this.isBound) {
      if (this.source === source) {
        return;
      }
      this.unbind();
    }
    this.isBound = true;
    this.source = source;

    if (this.sourceExpression.bind) {
      this.sourceExpression.bind(this, source, this.lookupFunctions);
    }
    this._disposeListener = this.eventManager.addEventListener(this.target, this.targetEvent, this, this.delegationStrategy);
  };

  Listener.prototype.unbind = function unbind() {
    if (!this.isBound) {
      return;
    }
    this.isBound = false;
    if (this.sourceExpression.unbind) {
      this.sourceExpression.unbind(this, this.source);
    }
    this.source = null;
    this._disposeListener();
    this._disposeListener = null;
  };

  return Listener;
}();

function getAU(element) {
  var au = element.au;

  if (au === undefined) {
    throw new Error('No Aurelia APIs are defined for the element: "' + element.tagName + '".');
  }

  return au;
}

var NameExpression = function () {
  function NameExpression(sourceExpression, apiName, lookupFunctions) {
    

    this.sourceExpression = sourceExpression;
    this.apiName = apiName;
    this.lookupFunctions = lookupFunctions;
    this.discrete = true;
  }

  NameExpression.prototype.createBinding = function createBinding(target) {
    return new NameBinder(this.sourceExpression, NameExpression.locateAPI(target, this.apiName), this.lookupFunctions);
  };

  NameExpression.locateAPI = function locateAPI(element, apiName) {
    switch (apiName) {
      case 'element':
        return element;
      case 'controller':
        return getAU(element).controller;
      case 'view-model':
        return getAU(element).controller.viewModel;
      case 'view':
        return getAU(element).controller.view;
      default:
        var target = getAU(element)[apiName];

        if (target === undefined) {
          throw new Error('Attempted to reference "' + apiName + '", but it was not found amongst the target\'s API.');
        }

        return target.viewModel;
    }
  };

  return NameExpression;
}();

var NameBinder = function () {
  function NameBinder(sourceExpression, target, lookupFunctions) {
    

    this.sourceExpression = sourceExpression;
    this.target = target;
    this.lookupFunctions = lookupFunctions;
  }

  NameBinder.prototype.bind = function bind(source) {
    if (this.isBound) {
      if (this.source === source) {
        return;
      }
      this.unbind();
    }
    this.isBound = true;
    this.source = source;
    if (this.sourceExpression.bind) {
      this.sourceExpression.bind(this, source, this.lookupFunctions);
    }
    this.sourceExpression.assign(this.source, this.target, this.lookupFunctions);
  };

  NameBinder.prototype.unbind = function unbind() {
    if (!this.isBound) {
      return;
    }
    this.isBound = false;
    if (this.sourceExpression.evaluate(this.source, this.lookupFunctions) === this.target) {
      this.sourceExpression.assign(this.source, null, this.lookupFunctions);
    }
    if (this.sourceExpression.unbind) {
      this.sourceExpression.unbind(this, this.source);
    }
    this.source = null;
  };

  return NameBinder;
}();

var LookupFunctions = {
  bindingBehaviors: function bindingBehaviors(name) {
    return null;
  },
  valueConverters: function valueConverters(name) {
    return null;
  }
};

var BindingEngine = (_temp2 = _class14 = function () {
  function BindingEngine(observerLocator, parser) {
    

    this.observerLocator = observerLocator;
    this.parser = parser;
  }

  BindingEngine.prototype.createBindingExpression = function createBindingExpression(targetProperty, sourceExpression) {
    var mode = arguments.length <= 2 || arguments[2] === undefined ? bindingMode.toView : arguments[2];
    var lookupFunctions = arguments.length <= 3 || arguments[3] === undefined ? LookupFunctions : arguments[3];

    return new BindingExpression(this.observerLocator, targetProperty, this.parser.parse(sourceExpression), mode, lookupFunctions);
  };

  BindingEngine.prototype.propertyObserver = function propertyObserver(obj, propertyName) {
    var _this28 = this;

    return {
      subscribe: function subscribe(callback) {
        var observer = _this28.observerLocator.getObserver(obj, propertyName);
        observer.subscribe(callback);
        return {
          dispose: function dispose() {
            return observer.unsubscribe(callback);
          }
        };
      }
    };
  };

  BindingEngine.prototype.collectionObserver = function collectionObserver(collection) {
    var _this29 = this;

    return {
      subscribe: function subscribe(callback) {
        var observer = void 0;
        if (collection instanceof Array) {
          observer = _this29.observerLocator.getArrayObserver(collection);
        } else if (collection instanceof Map) {
          observer = _this29.observerLocator.getMapObserver(collection);
        } else if (collection instanceof Set) {
          observer = _this29.observerLocator.getSetObserver(collection);
        } else {
          throw new Error('collection must be an instance of Array, Map or Set.');
        }
        observer.subscribe(callback);
        return {
          dispose: function dispose() {
            return observer.unsubscribe(callback);
          }
        };
      }
    };
  };

  BindingEngine.prototype.expressionObserver = function expressionObserver(bindingContext, expression) {
    var scope = { bindingContext: bindingContext, overrideContext: createOverrideContext(bindingContext) };
    return new ExpressionObserver(scope, this.parser.parse(expression), this.observerLocator, LookupFunctions);
  };

  BindingEngine.prototype.parseExpression = function parseExpression(expression) {
    return this.parser.parse(expression);
  };

  BindingEngine.prototype.registerAdapter = function registerAdapter(adapter) {
    this.observerLocator.addAdapter(adapter);
  };

  return BindingEngine;
}(), _class14.inject = [ObserverLocator, Parser], _temp2);

var setProto = Set.prototype;

function _getSetObserver(taskQueue, set) {
  return ModifySetObserver.for(taskQueue, set);
}

var ModifySetObserver = function (_ModifyCollectionObse3) {
  _inherits(ModifySetObserver, _ModifyCollectionObse3);

  function ModifySetObserver(taskQueue, set) {
    

    return _possibleConstructorReturn(this, _ModifyCollectionObse3.call(this, taskQueue, set));
  }

  ModifySetObserver.for = function _for(taskQueue, set) {
    if (!('__set_observer__' in set)) {
      Reflect.defineProperty(set, '__set_observer__', {
        value: ModifySetObserver.create(taskQueue, set),
        enumerable: false, configurable: false
      });
    }
    return set.__set_observer__;
  };

  ModifySetObserver.create = function create(taskQueue, set) {
    var observer = new ModifySetObserver(taskQueue, set);

    var proto = setProto;
    if (proto.add !== set.add || proto.delete !== set.delete || proto.clear !== set.clear) {
      proto = {
        add: set.add,
        delete: set.delete,
        clear: set.clear
      };
    }

    set.add = function () {
      var type = 'add';
      var oldSize = set.size;
      var methodCallResult = proto.add.apply(set, arguments);
      var hasValue = set.size === oldSize;
      if (!hasValue) {
        observer.addChangeRecord({
          type: type,
          object: set,
          value: Array.from(set).pop()
        });
      }
      return methodCallResult;
    };

    set.delete = function () {
      var hasValue = set.has(arguments[0]);
      var methodCallResult = proto.delete.apply(set, arguments);
      if (hasValue) {
        observer.addChangeRecord({
          type: 'delete',
          object: set,
          value: arguments[0]
        });
      }
      return methodCallResult;
    };

    set.clear = function () {
      var methodCallResult = proto.clear.apply(set, arguments);
      observer.addChangeRecord({
        type: 'clear',
        object: set
      });
      return methodCallResult;
    };

    return observer;
  };

  return ModifySetObserver;
}(ModifyCollectionObserver);

function observable(targetOrConfig, key, descriptor) {
  function deco(target, key, descriptor, config) {
    var isClassDecorator = key === undefined;
    if (isClassDecorator) {
      target = target.prototype;
      key = typeof config === 'string' ? config : config.name;
    }

    var innerPropertyName = '_' + key;
    var innerPropertyDescriptor = {
      configurable: true,
      enumerable: false,
      writable: true
    };

    var callbackName = config && config.changeHandler || key + 'Changed';

    if (descriptor) {
      if (typeof descriptor.initializer === 'function') {
        innerPropertyDescriptor.value = descriptor.initializer();
      }
    } else {
      descriptor = {};
    }

    if (!('enumerable' in descriptor)) {
      descriptor.enumerable = true;
    }

    delete descriptor.value;
    delete descriptor.writable;
    delete descriptor.initializer;

    Reflect.defineProperty(target, innerPropertyName, innerPropertyDescriptor);

    descriptor.get = function () {
      return this[innerPropertyName];
    };
    descriptor.set = function (newValue) {
      var oldValue = this[innerPropertyName];
      if (newValue === oldValue) {
        return;
      }

      this[innerPropertyName] = newValue;
      Reflect.defineProperty(this, innerPropertyName, { enumerable: false });

      if (this[callbackName]) {
        this[callbackName](newValue, oldValue, key);
      }
    };

    descriptor.get.dependencies = [innerPropertyName];

    if (isClassDecorator) {
      Reflect.defineProperty(target, key, descriptor);
    } else {
      return descriptor;
    }
  }

  if (key === undefined) {
    return function (t, k, d) {
      return deco(t, k, d, targetOrConfig);
    };
  }
  return deco(targetOrConfig, key, descriptor);
}

var signals = {};

function connectBindingToSignal(binding, name) {
  if (!signals.hasOwnProperty(name)) {
    signals[name] = 0;
  }
  binding.observeProperty(signals, name);
}

function signalBindings(name) {
  if (signals.hasOwnProperty(name)) {
    signals[name]++;
  }
}

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublishEvents; });
var PublishEvents = /** @class */ (function () {
    function PublishEvents() {
    }
    Object.defineProperty(PublishEvents.prototype, "VizLoadEvent", {
        get: function () { return "newViz"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PublishEvents.prototype, "DownloadPdfEvent", {
        get: function () { return "ddlPdf"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PublishEvents.prototype, "DownloadPptEvent", {
        get: function () { return "ddlPpt"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PublishEvents.prototype, "DownloadExcelEvent", {
        get: function () { return "ddlExcel"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PublishEvents.prototype, "DownloadImageEvent", {
        get: function () { return "ddlImage"; },
        enumerable: true,
        configurable: true
    });
    return PublishEvents;
}());



/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(5))(83);

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(33);
__webpack_require__(51);
module.exports = __webpack_require__(54);


/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

// This file contains an empty module that does nothing.
// It's meant to be added as an entry point to the main bundle
// and helps reliably adding some Aurelia dependencies that are attached 
// to no module in particular, such as `includeAll` results or `aureliaApp`.
//
// Trying to attach those dependencies to, for example, 'aurelia-bootstrapper' 
// is unreliable if 'aurelia-bootstrapper' is in a DLL outside the bundle.
//
// Trying to attach to 'aurelia-loader-webpack' works well, unless a user
// configures a customized loader instead (unlikely, but in theory supported).


/***/ }),

/***/ 34:
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,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ywapc6kLupAym9mxktKynGdRNlmXGrHl+ASiM72kcjCapKieNa3dhGhOAHhNC5az1uCm7POCAtEqutKi/3zqhPh60+edtJ4rnZ9Lb9mjDfk2pOGbZD1zdkXFYPRE1T1o+OYZ0fo1TKv/PF2F0NvOWK6unnENonjvGrUC+fedESZsPeebL+b2MbmTPWss5wO47gZRqH084ocoHMwWzweL4vW8auhEe8vdZsjHixxycSsZw965hZwfPpCVEznk+eCvmSecH1czWKIhq7ZEptHwFifXQBHHL7LTLfTqmPnT+TE4g4ntEJsvWyLtjjDNy2JfBtsC4bFuukTKMXL1fuLZBipH0mPx9YpYHef6KXtwTYF2Ca1DF64eBtgp/muLlEPgnPhELaQsF228mekVzwg04L5BUs865drEiLIj75HJU566pab65d3e981v5MuDzrbnM7IO0IO5FXsffUNK3IpW1KLkqo+97GdP+9rb/va4z73ud8/73vv+98APvvCHT/y1BAQAIfkECQQAzgAsAAAAALQAtACHAAAAAQEBAgICAwMDBAQEBQUFBgYGBwcHCAgICQkJCgoKCwsLDAwMDQ0NDg4ODw8PEBAQEREREhISExMTFBQUFRUVFhYWFxcXGBgYGRkZGhoaGxsbHBwcHR0dHh4eHx8fICAgISEhIiIiIyMjJCQkJSUlJiYmJycnKCgoKSkpKioqKysrLCwsLS0tLi4uLy8vMDAwMTExMjIyMzMzNDQ0NTU1NjY2Nzc3ODg4OTk5Ojo6Ozs7PDw8PT09Pj4+Pz8/QEBAQUFBQkJCQ0NDRERERUVFRkZGR0dHSEhISUlJSkpKS0tLTExMTU1NTk5OT09PUFBQUVFRUlJSU1NTWl1ebHZ6gpaelrTAo8fWrNXlsdzttODxteHzteL0teL0teL0teL0teL0tuP0tuP1tuP1tuP1t+P1ueT1uuT1u+T1u+T1u+T1u+T1u+T1u+T1vOX2veX2v+b2wOf2wuf2wuf2wuf2wuf2wuf2w+j3xOj3xun3yOn3yOn3yOn3yOn3yer4zev4z+z4z+z4z+z4z+z4z+z40Oz40O350O350e350u750+751O751u/51u/51/D61/D62PD62fD62/H63PL63fL63fL73fL73fL73/L74PP74vP74/T75PX75vX86Pb86Pb86fb86vf86vf86/f86/f86/f86/f87Pf97fj97/n98Pn98fr98fr98fr98vr99Pr99fv99vv99/z99/z99/z+9/z+9/z++Pz++Pz++v3+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v///v///////////////////////v///v///v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7//v7//v7//v7//v7//v7//v7//v7//v///v///v///v///v///v///v///v///v///v///v///v///v///v///v///v///v///v///v///v///v//CP4AnQkcSLCgwYMIEypcyLChw4cQI0qcSLGixYsYM2rcyLGjx48gQ4ocSbKkyZMoU6pcybKly5cwY8qcSbOmzZs4c+rcybOnz59AgwodSrSo0aNIkypdyrSp06dQoxqER7Wq1KsIq2qFh7WrwK1bvWIFq1XsVbJWzUJFW1atU7Zp3TKFS1VuzLoZ6XLN6MqVXYm6bAm2NQ6j3ou6JpFZjEaRrr8Mx+EaPBjXxcMVdaFZzJlMHluQE46jTNpyRcwTdeXp3BkN6NAGA5Om/Jgiaol/WLOuBNvg5Nm0bdOlWEk36zy9C/4GPriwxNsPbW02zhlNcoKymQuuHRG6Q0XUO/77uT4wu3bCz4dHTBW+syLyAkefF2waoneGq9sv5gRfYK75gjn30H0KcaLfYnH0J5B553WnnkOaHUgGbwo6s9x5AjZEIEKKHYgGd/0xqF2GC21okC0STljhQP8BCGKJDzKU24EJrhgfgAE6ZCJB7EmYio3l4ZiLjjEqFIeEgAA5kHwualgkQsVJ+JqSzjA5n5NwMRThgZNQSdCF2r140I7OOCLhh14uiSN6Cu3oSor8pTkQmMyJWdCOM+qHh5wEWYlhm0/ymOKPfAbZJKBoLQSIhO8VuiSdwJF4J1sKoejhlF3BM5krsdhiZ0R+1okoWQqZySVGnjjyxxuJcIJpTf7XvNLXrK68gss1FrV43qcDJaqQHzTyquUlerxh7LF/CNvSNbHQ6qytFYU6W30JgYXfgaBUxIkcx3ZrbLI20eLsuLVKCuF81Go0XXjjTZRKsd7GK4lNspI7bix7QSTZrh6BF55rEtkCSLwEv6FHTePYq/Ct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///////////////////////////////////////////+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v/+/v/+//////////////////////////////////////////////////////8I/gC/CRxIsKDBgwgTKlzIsKHDhxAjSpxIsaLFixgzatzIsaPHjyBDihxJsqTJkyhTqlzJsqXLlzBjypxJs6bNmzhz6tzJs6fPn0CDCh1KtKjRo0iTKl3KtKnTp1CjGrQmDBgwYdakakUo7JfXr8K2ihXY9avZsGOlWjPL9lfWtFDLtvWKFq7TuWztPsVrVm/TtXy9vvXr0tpgi4ADHyaM0touXLciA1scMTFfypUNa2bc0FquyKBv5cLs0DJe0qU1q0bN2Rrk0KBHUzQ9l/XC1bg5IwwGG7au2YEFz8atWp7ug597hw42kXZb2wjlEV993KBy2LigTw3uVuL03NUJ/uq6HpqXd+7aC36nHn7gLvKh0w90zla+wPXs238bBj92ZfSZ4WeYfgMl198wENFnln0CbkagQLz1d0t2Dyn4FYMNGvfgN9ZIKFmFAKbW4IYDRShhehYK11mD1mhI4jcGwrdLaSEyxKJ9hHXooXYpdmfjjS+K52EundWoEJBBzufhLczdZmR0SCYpEDAeUnjkkwdFKSWHS5p3ZXC2abnlfkuy1mOYLI5ZUIzk/aYQd7elqSZBOp74ZnBHijknLx7OmJBcc9WVpZxz0llmQhaidiOORyXzyy2tTPgLRlRK6CVXeAk6FaEVnSKJH2ksAoqfN8kDSyuopgqLLi56x6Zy/m7+2Zammwpo0TCd4JHGrrz6gaBN8kCa6rCtuDIpRfz1R+RtwVgVDHQZVgQKHLxWu6uvNulC7LatwEKrQ+P159GIE8Giq7XoVmLTqdxuG0sy3vV36UbkQrSLIejmmwYeNVnT7r+sRpTsdcV4JN16Anei78K40CTPv/8aK/B1TY77XUSnULuwvr/OxC7E3N7ybUIDg9bxR9NBBAuoG+vLb03agvwvLvCWBgwvvDxb0sH27bJIyxura5OwMnPrSsBJ4aox0Pn6gVMyHxe9LSzHGnXKuUzni8fJNQUr9b+xtArUMPhmre8iXN/0S9Rfp+rKyDqpsrTZ1cJxyk/J4NI2/rdV9wQK3fk2QupPwhC9N6pw1wQL4Nb6AYtR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MjIyMzMzNDQ0NTU1NjY2Nzc3ODg4OTk5Ojo6Ozs7PDw8PT09Pj4+Pz8/QEBAQUFBQkJCQ0NDRERERUVFRkZGR0dHSEhISUlJSkpKS0tLTExMTU1NTk5OT09PUFBQXWNmd4mQka+7ocfWqtXmr9zvseDysuH0suH0suH0suH0suH0s+H0s+L1s+L1s+L1teL1tuP1uOP1ueP1ueP1ueP1uuT2uuT2uuT2uuT2vOX2veX2v+b2v+b2v+b2wOf3wOf3wOf3wOf3wuf3xOj3xen3xun3xun3x+n4x+r4yer4y+v4zOv4zev4zev4zev4zev4zuz4zuz4zuz4z+z40e350e350+351O751u/52fD52vD52vD62vH62/H62/H62/H62/H63fL63/P64PP64PP64fP74vT74/T75fX75/X75/X75/X75/b86fb87Pj87fj87fj87fj87fj87vn98Pn98vr98/r99Pr99Pr99Pv99Pv99fv99fv99fv99vv+9/z++Pz++f3++v3++/3++/7++/7+/P7+/f7+/v7+/v7+/v7+/v7+/v7+/v7+/v7//v7//v7//v7//v7//v7//v7//v7/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////CP4AxwkcSLCgwYMIEypcyLChw4cQI0qcSLGixYsYM2rcyLGjx48gQ4ocSbKkyZMoU6pcybKly5cwY8qcSbOmzZs4c+rcybOnz59AgwodSrSo0aNIkypdyrSp06dQoxqcxcqUKVazpGpFeKqU16+ntooV2PWr2bBjpd4yy7bUrbRRY7U1Gwsu1Lls7T7Fa1ZvU1x8v+LyC7NWrYxrA7vNCAwY4Yi5TH2a/AlVLouJA7+tCIyWq8+xZjl+vBCXKMqURV2mmJnv5onAYn2e7SrWaNIHcaHerZq14sWwZdOebRv3QVe7eftW/DqirOHDDxsveDo5alcTW+Nt/rAW9OF1p/4TtJ58cETtc7k3jP19uHiC1clPRgsRfVv1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6/jN6/jN6/jO7PjP7PjQ7PjS7fnT7fnT7fnU7vnU7vnW7/nX7/nY8Pna8Prb8frb8frd8vrf8/rg8/rh8/vh9Pvj9Pvk9fvm9fvo9vzs9/zt+Pzu+Pzu+Pzu+Pzv+f3x+f30+v30+/30+/31+/72+/73/P74/P75/f76/f77/f77/v78/v78/v78/v76/f76/f77/f78/v79/v79/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7////+///////////////////+/v7+/v/+/v/+/v////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8I/gCrCRxIsKDBgwgTKlzIsKHDhxAjSpxIsaLFixgzatzIsaPHjyBDihxJsqTJkyhTqlzJsqXLlzBjypxJs6bNmzhz6tzJs6fPn0CDCh1KtKjRo0iTKl3KtKnTp1CjGjwkiA8fQYmkaj3oCZCer2ABedpKtpofsGj1ACqrFVLatJDYRh30Fu0guVDrpsX7VC9avk0j+QUbCTBMSHExuh2sJ/FFSZIMR+QEqA6dy4M4WVw82PFET4r+iA5UaKzkhYIvq6ajRzNFzn49R/QUSLTtP4MqnU4YyfJq1a1fM25M0dOg27cD6d5tsNDv33uEM5b98Djy24uYG9Tz/HehibD1/lJvuOg68rvaCdrpvrpO4Yjh645fWKm2edtr0w/kw351fojxvTWfQoXcdxt6+lUDSH+rOQLfcAMiFImBt32XYDWHMAjcg9NFZB2Ffzh4YTV3aHjZIQBCCJEjII42okDOmViHaw0FCNdDtLX4R3YvcrKeiQgyZCNaERYUWotivQijiZe9J6SKDVWi445KDlSiiX44NCRYRQ70IYWBVDmQI0zSIeJCW37VZTUT6uikmPyZiEeNUC70pYGEiElQJGVaqFCa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b8/73vv+98APvvCHT/ziG//4yE++8pfP/OY7//lEDAgAIfkECQQA9wAsAAAAALQAtACHAAAAAQEBAgICAwMDBAQEBQUFBgYGBwcHCAgICQkJCgoKCwsLDAwMDQ0NDg4ODw8PEBAQEREREhISExMTFBQUFRUVFhYWFxcXGBgYGRkZGhoaGxsbHBwcHR0dHh4eHx8fICAgISEhIiIiIyMjJCQkJSUlJiYmJycnKCgoKSkpKioqKysrLCwsLS0tLi4uLy8vMDAwMTExMjIyMzMzNDQ0NTU1NjY2Nzc3ODg4OTk5Ojo6Ozs7PDw8PT09Pj4+Pz8/QEBAQUFBQkJCQ0NDRERERUVFW2Nneo+XlLO/o8nYrNbmst3vtODyteL0teL0teL0teL0teL0teL0tuL0tuP1tuP1tuP1tuP1t+P1uOP1ueT1uuT1u+T1u+T1vOX2vOX2vOX2vOX2vOX2vOX2vuX2v+b2wOf2wef2wuf2wuf2wuf2wuf2wuf2wuf3wuf3w+j3w+j3w+j3xOj3xen3x+n3yOn3yOn3yOn3yOn3yOr4yOr4yOr4yer4yer4yer4yer4yur4zOv4zuz4z+z4z+z40Oz50Oz50Oz50Oz50O350O350u351O751e/51u/51u/51+/61+/61+/61+/61+/61+/61/D62PD62vH63PH63PH63PH63fL63fL63fL73fL73fL73fL73fL73vL73/P74PP74fT74vT74/T74/T75PX75PX75PX75PX85PX85PX85fX85/X86fb86vb86vb86vb86vf86vf86/f86/f87Pf87fj87/n98Pn88Pn88Pn88Pn88fn88fr88vr98/r99Pv99fv99vv99/z+9/z+9/z+9/z+9/z+9/z+9/z+9/z++Pz++Pz++v3+/P7+/f7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v///v///v///v///v///////////////////////////v///v///v///v///v///v//CP4A7wkcSLCgwYMIEypcyLChw4cQI0qcSLGixYsYM2rcyLGjx48gQ4ocSbKkyZMoU6pcybKly5cwY8qcSbOmzZs4c+rcybOnz59AgwodSrSo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0M9eC8TvTJGis5wizf4xyvMTaTs7XWE3/7HPywJmi3id5nZOe4KHsXa5hNntZ++6xxGMjLpn8e1Vx0g1DO5FwFPa7yRVyMYT75HFM54jelb2rR9PdIFTfiORT/XkL580zXPeI9VYBpmXQfjPm/70qE+96lfP+ta7/vWwj73sZ0/72tv+9rjP/VICAgAh+QQJBADtACwAAAAAtAC0AIcAAAABAQECAgIDAwMEBAQFBQUGBgYHBwcICAgJCQkKCgoLCwsMDAwNDQ0ODg4PDw8QEBARERESEhITExMUFBQVFRUWFhYXFxcYGBgZGRkaGhobGxscHBwdHR0eHh4fHx8gICAhISEiIiIjIyMkJCQlJSUmJiYnJycoKCgpKSkqKiorKyssLCwtLS0uLi4vLy8wMDAxMTEyMjIzMzM0NDQ1NTU2NjY3Nzc4ODg5OTk6Ojo7Ozs8PDw9PT0+Pj4/Pz9AQEBBQUFCQkJDQ0NERERFRUVGRkZHR0dISEhJSUlKSkpLS0tMTExNTU1OTk5PT09QUFBRUVFYW1xgZWh6i5OSrrmkyNeu1uaz3e+14PK24vS24vS24vS24vS24vS34vS34/S34/W34/W34/W54/W65PW75fW95fW95fW95fW95fW+5va+5va+5va+5va+5va/5vbA5vbC5/bD5/bD5/bD5/bE6PfE6PfE6PfE6PfE6PfG6PfH6ffJ6vfK6vfK6vfL6/jL6/jL6/jL6/jM6/jO7PjR7PjR7PjR7PjR7PjR7fjS7fjS7fnT7fnU7vnV7vnW7/nW7/nX7/nX7/nX7/nY8PrZ8Prb8frd8vrd8vre8vre8vre8vre8vre8/vf8/vh9Pvj9Pvk9Pvk9Pvk9Pvk9Pvl9fvm9fzn9vzo9vzo9vzp9vzq9/zr9/zr9/zs+Pzs+Pzs+Pzs9/zs9/zs9/zs+Pzu+Pzw+fzx+fzy+v3y+v3y+v3y+v30+v31+/32+/33/P73/P74/P74/P75/P75/f75/f75/f75/f75/f75/f76/f77/f78/v78/v78/v78/v78/v78/v78/v78/v79/v79/v79/v7+/v7+/v7+/v7+///+///+///+///+///+///+////////////////////////////////////////////////////////////////////////////////////////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sYarB+MtpxjEIb4w/oVwrOFlZFnLZq5eNb7sYyuFg8WsZUiZtxxB39aYU06Or3m9a+YzL8QWIVYvYK4cXzUTOs6a+zKT5RJo8sp0z1GWKZCZ27gQMZq8b04Ipo98aTqHScwEzuuoeZxXP+/X0YvGs5vNVui8zjnEdVZOpa0La4GsOsa8XS56O52dTx930AT5tYwjot/94vc8bCZwr31d64TtV8iG2bVuu6vsDndXu+hVtHjbHGo9V9va6A2Rtlc7bUmdu7forfJpn/yZd/tnu7mWDKpzO+uJdJvLFKlGsys6aansOxn99re9IyLwN+L11NQYLzXKTWtIV4SzbfRFuw0TDopPZuEUYcbATFL67wQX/KuFdqx/zKzy4G453y0vyL9PblYE8xjbMS/IgWPM4JxHJBm/QMwvnu3zohv96EhPutKXzvSmO/3pUI+61KdO9apb/eoMCQgAIfkECQQA9wAsAAAAALQAtACHAAAAAQEBAgICAwMDBAQEBQUFBgYGBwcHCAgICQkJCgoKCwsLDAwMDQ0NDg4ODw8PEBAQEREREhISExMTFBQUFRUVFhYWFxcXGBgYGRkZGhoaGxsbHBwcHR0dHh4eHx8fICAgISEhIiIiIyMjJCQkJSUlJiYmJycnKCgoKSkpKioqKysrLCwsLS0tLi4uLy8vMDAwMTExMjIyMzMzNDQ0NTU1NjY2Nzc3ODg4OTk5Ojo6Ozs7PDw8PT09Pj4+Pz8/QEBAQUFBQkJCQ0NDRERERUVFRkZGR0dHSEhISUlJSkpKS0tLTExMTU1NTk5OVVhaYmtugpmjl7jGps7frdnrsN7wsuDzsuH0suH0suH0suH0suH0s+H0s+L0s+L1s+L1tOL1teL1t+P1ueP1ueP1ueP1ueP1ueP1ueP1uuT2uuT2u+T2vOX2vub2v+b2v+b2v+b2v+b2v+b2wOf3wOf3wef3wuf3w+j3xen3xun3xun3xun3xun3x+n4x+n4x+r4yur4zOv4zev4zev4zez4zev4zez4zev5zuz5z+z50Oz50e350u350u350+350+350+350+350+350+751O751O751e751+/52PD52fD52vD52vD52vD52/D52/H62/H62/H62/H62/H63PH63vL63/P64PP64fP64fT74fP74fT74vT74/T75fX75/X75/X75/X75/b75/b76Pb86Pb86fb86vf87Pj87fj87fj87vj87vj87vj87vn87vn97/n98Pn98Pn98fr98vr98vr99Pr99Pv99fv99Pv+9Pv+9fv99fv99fv99vv+9/z++Pz++f3++v3++v3++/3++/3++/7++/7++/7++/7++/7++/7+/P7+/P7+/f7+/v7+/v7+/v7+/v7//v7//v7//v7//v7//v7//v7//v7//v7//v7//v7//v///v///v///v7+/v7+/v7+////////////////////////////////////////////////////////CP4A7wkcSLCgwYMIEypcyLChw4cQI0qcSLGixYsYM2rcyLGjx48gQ4ocSbKkyZMoU6pcybKly5cwY8qcSbOmzZs4c+rcybOnz59AgwodSrSo0aNIkypdyrSp06dQoxqchQkRIkyzpGo9OG3Sn69gJ03bSvbeIrBo/0wqqxVY2rTA2EYd9RbtKLlQ66bF+1QvWr5NlfkFqwwwTGLEMrod/CcuRmfODEechukOnculxlZcPNgxRW6zrCKalIqbZIbOEF1eTQeR5omc/XqWyG2SaNGYoJ1O6Mwy69WuKcbWOxsit6q3RU/Svdsgq9+/Ewln3JhiqOTJazU3qBo6a1awqf4Xd1gLe3JM2wv69n75TuSIw+uOZwjNtnnRi9ITXMSeNXr44klkyn23haLfQJP0x9ovADI2n0LJEHibKQcKNIuCwDXYWUTISYjILRUK9AeGl2X1UHxvPYjQLR5aVUmIAj1H4h2vMYQiXA/V1iIi2sE4zXoKUujQjWipaNArOy5iGoz3yEjiezYG2BA0O/LI5EAjkrhWQ0SCZSRB17X44pUC/ULiZQxG6WBDEe6YDJkD8UfiH1xKuZAlO5IC50DOnEkHeAt1+dWX95S3I3N73mPKmTQGaidCOrb4SqID/XimgQoJWp1CrCS5JKX3XHgmlAcJxlhhvFUJIqgDBXKmdP4KUbdQmB5ewipBZp6ZJkKyJtRmi2/eOhAmZ26JEF1+3ZUQKTsKKaxAvY2aUJcqUtniIoiSpUwqi6jRRyWtYLQoiZgidFZd+SXUqaQY/cLKKJWkcsszOWlzhxr45nsHKdpUNE2WCqaL0DTnorVIjQbRSmAln9JWSyaVRCzxKA3PpE0f+WaMLxypVCSqgogwNEuYoZioUIcEEprQLZdI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JiYmJycnKCgoKSkpKioqKysrLCwsLS0tLi4uLy8vMDAwMTExMjIyMzMzNDQ0NTU1NjY2Nzc3ODg4OTk5Ojo6Ozs7PDw8PT09Pj4+Pz8/QEBAQUFBQkJCQ0NDRERERUVFRkZGR0dHSEhISUlJSkpKS0tLTExMTU1NTk5OT09PUFBQUVFRUlJSU1NTVFRUVVVVVlZWV1dXWFhYWVlZYGJkcHt/gZSclK+7pMjWrdXlst3vtODyteL0teL0teL0teL0teL0teL0tuL0tuL0tuP1tuP1tuP1tuP1t+P1uOP1ueT1u+T1u+T1u+T1u+T1u+T1u+T1vOX2vOX2vOX2veX2vuX2wOb2wef2wuf2wuf2wuf2wuf2w+f2w+j3w+j3w+j3xOj3xun3x+n3yOn3yOn3yOn3yOn3yOr3yer3yer4yer4yur4y+v4zev4zuz4zuz4z+z4z+z4z+z4z+z40O350u751O/51u/51u/51u/51u/51/D51/D62PD62fD62/H63PH63PH63fL63fL73/L74PP74vT74vT74/T75PT75PX75fX86Pb86vb86vb86/f87Pf87fj87vj87/n88Pn88fn98fr98fr98fr98vr99Pr99/v9+fz++fz+9/z++fz++/3+/P3+/f7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7//v7//v7//v///v///v///v///////v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/////////////////////////////v///v///v///v///v///v//CP4A7QkcSLCgwYMIEypcyLChw4cQI0qcSLGixYsYM2rcyLGjx48gQ4ocSbKkyZMoU6pcybKly5cwY8qcSbOmzZs4c+rcybOnz59AgwodSrSo0aNIkypdyrSp06dQoxp85UmSJE+xpGo9aKxSoa9gKxnbStaeV7BoK5XVqgut20K61kYl9RYtKblQ67rF+1QvWr5Nf/kF+wswzF+FMbYdDDcjMGCGIxrz1CeP5VRjKy4eHLeisVePQk/CHJkhsUeWU+d5lHniZr+dJxqbFLr2o03ESickVll1atYUX+uNLXmTbduTcus22Mq3b7WuGTeeKOr4cVnL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4LfRIxp4eFlL8k9HXDKyDjG4l1NoF1v74S7n+LxRbiF8F7jiOP+0zr0d4nVHhsv0BYa+I1LyiWRj4voFNlRQG16lV6TpTod6LOCapdG2mBhLb7nQLSJf4WKZ3BayRsYTgnWLFOPm8Hztp6WOT0R/uu4dcTneOfLmPht970x3NeA3omQ4g3zwFrFG4Zeci7UjfiEZ3vAu7Pv4ylv+8pjPvOY3z/nOe/7zoA+96EdP+tKb/vSov0lAAAAh+QQJBADmACwAAAAAtAC0AIcAAAABAQECAgIDAwMEBAQFBQUGBgYHBwcICAgJCQkKCgoLCwsMDAwNDQ0ODg4PDw8QEBARERESEhITExMUFBQVFRUWFhYXFxcYGBgZGRkaGhobGxscHBwdHR0eHh4fHx8gICAhISEiIiIjIyMkJCQlJSUmJiYnJycoKCgpKSkqKiorKyssLCwtLS0uLi4vLy8wMDAxMTEyMjIzMzM0NDQ1NTU2NjY3Nzc4ODg5OTk6Ojo7Ozs8PDw9PT0+Pj4/Pz9AQEBBQUFCQkJDQ0NERERFRUVGRkZHR0dISEhJSUlKSkpLS0tMTExNTU1OTk5PT09WWVpja29/lZ6VtcOlzt+s2Ouv3fCx3/Ox4PSx4PSx4PSx4PSy4fSy4fWy4fWy4fW04vW34/W44/W44/W44/W44/W55Pa55Pa65Pa85fa95va+5va+5va+5va/5va/5/bB5/bC5/bD6PbE6PfE6PfE6PfF6PfF6ffG6ffH6ffI6vfL6vjL6vjL6vjN6/jQ7PjR7fjS7fjT7fjT7fjS7fnT7vnV7vnW7/nY7/nY7/nY8PnZ8Pna8Prc8frd8vre8vrf8vrg8/rg8/vg8/vj9Pvl9fvm9fvn9vzo9vzp9vzq9/zs9/zt+Pzt+Pzt+P3t+P3w+f3z+v3z+v32+/73/P75/P75/P76/f76/f76/f76/f77/f79/v7+/v7+/v7+/v7+/v7+/v7+/v/+/v/+/v/+///+///+///+///+///////////////////////////////////////////////////////////////////////////////////////////////+/v7+/v7////////////////////////////////////////////////////////////////////////////////////////+/v/+/v/+/v/+/v/+/v/+/v/+/v/+/v/+/v/+/v/+/v/+/v/+/v/+/v/+/v/+/v/+/v/+/v/+/v/+/v/+/v/+/v/+/v8I/gDNCRxIsKDBgwgTKlzIsKHDhxAjSpxIsaLFixgzatzIsaPHjyBDihxJsqTJkyhTqlzJsqXLlzBjypxJs6bNmzhz6tzJs6fPn0CDCh1KtKjRo0iTKl3KtKnTp1CjGqRUSI+eQpSkaj24qs+br2D7rNpK1pxXsGj7lNUKCq3bN6DWRlX0Fq0iuVDrusX7VC9avk1F+QUrCjBMUYUxth0MN+OoUYYjpirE5oxlR6ksLh4ct+IqSndC63E0NvJCUngsqz6DJzPFzX47T1ylJ7TtO4VImU5IqvJq1a1fM248u9Dt23p07zYo6fdvtRNh65Ud0fjx25WWG0ztfLWk6MOp/j+sdP14Ie0F1XRfzUY5ROl1xTckVbu8bT3oCfZZv/p8RPhvycdQI/bddkh+A/3B32qd/BfefwXe1giCAlWyIHAOMiagQtZFeIcmFAoEx4WWZfcQgG5tiJAmHobmR4gCNUciG641hCJaKhpEW4t3mBhiKuqROKFDN4KVY0GgtahHaTDKSKJ7CxX51ZEDkcJjjzASNCKJfxD5YEMdRvhilgN1QqJlDTIkJXFRXkmldvuRGIeNXy7kB493kUkQKWee8V2UdSZEHo9Q6mlOI2fSCKiGC+3YYlaGEgTkmXkmtOaRkvC4ZKQFWXhmoQUJxlhiCI1yJYicFsTdhdAlNNxC/mEWCEiqBpl5ZpoIvWqpm7QaVMiZXSZEl1+VHqQIj0P2umeQF4I6UJEqWqmks1GN8ggfXsAByJ8WIUpisQad9VarB2X6KEaeQGKIH41gUkpOqaThxbz0prFIjRKlsuWC5OooblhMHnRIi34EHNE7lhDix8IMG/LOTfrSK/G8YTxSkacL4sEQVVZhxVCs5eEqESZ/MGzywg7bVMjELHuRhicUxcmfGh7VV+CBE4mi8Mk8Q0qTvC2zbAdkEZHCbHf+cURggclJVMoiPEftByE1gRL01fdGhHF3mXjUSYSoPoSw1GQTLVMqV18dBrcObe0dSEleF7ZDnpRMttQP0xRG/tpXwwHzeEer4eNHLCI3N0OirHu31IGozHfagJjNUCqNFFKIJPiCtEoljTRCicEKldLI4nf7TBMcj6uddVII20161DjbNArQqbecBttEebLz61EHkjfE2NYetB2Z//QO1LxL3cjvOUmyt/Ash3GJUJ24nrzJf2zy0yh/QN+yI0Bpcn3UkrwblCeoey/x3zyJMv7Jh5A6lPPqU1y8TaVYf332SaWiSP1ewN1NNvG+hVWCeUgZRfCgB66bUOJ9jTCfUzxBu9QFSyeSuF4g5AcVRzzvcdPbSSd494fDSWUyjwuDT/QXNUogkCygsEPaBIgTApJNERIEjCdkyDIa5sSG/idTBAcjMwpF2CEMaSgE+34iCkoE4g+KqEQOlUXFKlrxiljMoha3yMUuehEv7wijGMdIxjK+ECqkQIwa18jGNlLLJO9YRSrmSMc62vGOdlzFGY8yCqpY7o+ADKQgA0kJyZHkHXhMpCITuUehvKNyg4ykJAO5vJIgcpGYzCTrIDnJTkoyWSK5ZCZHicdG/qQTnkylJEWmOVK6Mo9IkYQqZxlIH3LklbikI1IUQcteFqKBHsllLnfpS1oCsyNyFCYpQScUWRZTlbbciCiViUlT+gSVz0wlK0FCzVEqhZPZjCQoQ9nNRVrTeOAMJyAreZI4lpOOenRKH9X5x0K6xIz4/jRjWUjxmH76858AfeMXB0rQghr0oAhNqEIXylCm3CIV/BxFKs4pu0w8wnOeuB9g3hHRf2oUJ6BYhEhHugh7RoYVHQWoRH0SUpK6lBJTJMtDVQpQnzTCpThdRCZYsZZU0FSlFH2JKHKa00a86Sjv+ClNY2qTSxCVqI8w5FJukVKl+vOjM9HEU59aCawKZaZWpalXY9LSrRLVEzxFyirC+lNS3IInrLipWYlqVKMkla0/DSpMRjHXrUpCqjy5RSnw+tOx0sQTfd0qJgx7NsLSlBR6nYko5JpYnNZ1J1R1rErdShRWUKKyRK1EWm9yC80GlLE6AQVlQTvSR4y2Jqb1/icpUvHWpLDCE6tlbTRb4tPYjqIUtW1IZkXB2ZG8AxSa2AQo9JoKp7J2pCbcq28jWwpPWPe6TN2IKCTBXe5SYogKGYUknrsIi9GktJqdbUSqe932ClQz3Y2vJMCrENU+97UwYYVmabve9vo3ox4hhXzlS9+E3Ja12W1JVdsaXLH9178FrsgmBhzfz+Xrs30dZ0x6q1TIUkQUD/avRyhB4fhigiKjyG1Oo/sS9D4WtQZhb4itSyVRdEITmuhEhAViiRLHd8cKwe1TJYFfmbhYtvylyC1AMePrRvgdm7iElKe8CVNewsfddWFFbqtiIufkofwkRSlgjBBSNPm6gB1I/pSnzGbtJaQTWO7uUet7ic9SAsBreceZr9vI5rL5zx9dRZy9y0xagXjPEQbFn/+cI00MWhJuruIq9mzdQgtk0YtWiIAf/V4yHfrMO8b0nxdy5UEPjlYyPrMp/SxqKWM1FY+er7JuQWlPpHkgrG61V+E8aC3TysyUbvBBci1qr74j1nNejp4pfWtct3rKY93uoy1NoU83+U3ExrRhK/FoFlNo0pSmtrOffQnDbnrQnV4OkxHtkGwvmrGljrPpYDSKWgfV3YB2iKAfDeTI0JrS6RYIvtmMWlA82tchqnewHzJwaIst1v0GzLrPnOBhk7vcEJG2vGGU6hkn2xwNd3VE0no86IjLxdozFrdBQo5xiJwby5HOD8ofbPJxP5vM5phwnEOIIEpHVuAXx/m+sTxv7Uw8xM1OCMtxbg6Nl9gSCW9yzSUVdIrEm8JTJ8uyHwwKYTO86hNBmI9VvtGj09jrXyc30wUidvlaguyGuYW1i0uRpVvkuPHtxM8Nswq4L8TuGJljQ22u68F75OKGPzy5E98RRbf644z/+80jz5E1LzrmlMcIlC+/98wvRBTI1QQosu750pv+9KhPvepXz/rWu/71sI+97GdP+9rb/va4X0pAAAAh+QQJBADwACwAAAAAtAC0AIcAAAABAQECAgIDAwMEBAQFBQUGBgYHBwcICAgJCQkKCgoLCwsMDAwNDQ0ODg4PDw8QEBARERESEhITExMUFBQVFRUWFhYXFxcYGBgZGRkaGhobGxscHBwdHR0eHh4fHx8gICAhISEiIiIjIyMkJCQlJSUmJiYnJycoKCgpKSkqKiorKyssLCwtLS0uLi4vLy8wMDAxMTEyMjIzMzM0NDQ1NTU2NjY3Nzc4ODg5OTk6Ojo7Ozs8PDw9PT0+Pj4/Pz9AQEBBQUFCQkJDQ0NERERFRUVGRkZHR0dISEhJSUlKSkpLS0tMTExNTU1OTk5PT09QUFBRUVFSUlJTU1NUVFRVVVVWVlZXV1dYWFhZWVlfYmR0gYeEmaKTrrqhxNOq0eKv2uyy3vG04PO04fS04fS04fS04fS14fS14vW14vW14vW24vW44/W55PW65PW65PW65PW65PW75Pa75fa75fa75fa95fa+5vbA5vbA5vbA5vbA5vbA5vbA5/bB5/fB5/fD5/fF6PfG6ffH6ffH6ffH6ffH6ffH6ffI6vjJ6vjL6vjM6/jO6/jO6/jO6/jO6/jO6/jO6/jP7PnQ7PnR7fnT7vnU7vnU7vnU7vnU7vnV7/nW7/rX8PrZ8Pra8Pra8frb8frb8frb8frb8frc8vrc8vrc8vrd8vre8vrf8/vh8/vi8/vi9Pvj9Pvj9Pvj9Pvj9Pvj9Pvk9Pvn9fvo9vvp9vzp9vzp9vzp9vzp9/zp9/zq9/zr9/zs+Pzt+Pzu+Pzv+f3w+f3w+f3x+f3y+v3z+v30+v31+/31+/31+/31+/32+/32+/72+/72+/72/P72/P73/P73/P74/P74/P76/f77/f78/f78/f78/f78/f78/f78/f78/f78/v78/v78/v78/v78/v78/v79/v79/v79/v79/v7+/v/+/v/+/v/+/v/////////////////////////////////+/v/+/v/+/v/+/v/+/v////////////////////////////8I/gDhCRxIsKDBgwgTKlzIsKHDhxAjSpxIsaLFixgzatzIsaPHjyBDihxJsqTJkyhTqlzJsqXLlzBjypxJs6bNmzhz6tzJs6fPn0CDCh1KtKjRo0iTKl3KtKnTp1CjGmRFCRAgSqykaj1oDVGdr2ARWdtKFp5XsGgRldXqC63bOr7WRt30Fu0muVDrusX7VC9avk2J+QVLDDDMYcMyth0MN2OxYoYjVqMER41lT9UsLh4ct6I1VX9CC+o0NvJCZYAsq1YDKDPFzX47T7QmKLTtP5KkmU6orPJq1a1fM248W9Lt24J07zaY6vdvtRNh65UdkdLx46+WG0ztfHWq6MOp/j98df24JO0FfXe3DEeZROl1xTeUVru87UDoCRZav3rS+/ASdWLfbZTkN9Ai/K3WS0TwvSXfQsIMeFsnBgr0SoLAMQggRMZJGJotFQp0B4aWZfdQg249mJAtHoaWSIgCNUciHK41hCJaKnJVn4cmhliNegl+cuKGDYHWYiClwSgjie7ZSORC0rQYWo8wwjMiiYs4dCNYORZkXYsvVjlQLyRatiBDW37V5UARSimMmPqVqYeTjK0pECJSXgInQcqUqcZ3C6VJnELkSancngJ9UiaNgT6po5SqIErQj2XqqZCga4YiJZKSEnRh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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(5))(20);

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(5))(47);

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export State */
/* unused harmony export StaticSegment */
/* unused harmony export DynamicSegment */
/* unused harmony export StarSegment */
/* unused harmony export EpsilonSegment */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteRecognizer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_path__ = __webpack_require__(7);




var State = function () {
  function State(charSpec) {
    

    this.charSpec = charSpec;
    this.nextStates = [];
  }

  State.prototype.get = function get(charSpec) {
    for (var _iterator = this.nextStates, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var child = _ref;

      var isEqual = child.charSpec.validChars === charSpec.validChars && child.charSpec.invalidChars === charSpec.invalidChars;

      if (isEqual) {
        return child;
      }
    }

    return undefined;
  };

  State.prototype.put = function put(charSpec) {
    var state = this.get(charSpec);

    if (state) {
      return state;
    }

    state = new State(charSpec);

    this.nextStates.push(state);

    if (charSpec.repeat) {
      state.nextStates.push(state);
    }

    return state;
  };

  State.prototype.match = function match(ch) {
    var nextStates = this.nextStates;
    var results = [];

    for (var i = 0, l = nextStates.length; i < l; i++) {
      var child = nextStates[i];
      var charSpec = child.charSpec;

      if (charSpec.validChars !== undefined) {
        if (charSpec.validChars.indexOf(ch) !== -1) {
          results.push(child);
        }
      } else if (charSpec.invalidChars !== undefined) {
        if (charSpec.invalidChars.indexOf(ch) === -1) {
          results.push(child);
        }
      }
    }

    return results;
  };

  return State;
}();

var specials = ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'];

var escapeRegex = new RegExp('(\\' + specials.join('|\\') + ')', 'g');

var StaticSegment = function () {
  function StaticSegment(string, caseSensitive) {
    

    this.string = string;
    this.caseSensitive = caseSensitive;
  }

  StaticSegment.prototype.eachChar = function eachChar(callback) {
    var s = this.string;
    for (var i = 0, ii = s.length; i < ii; ++i) {
      var ch = s[i];
      callback({ validChars: this.caseSensitive ? ch : ch.toUpperCase() + ch.toLowerCase() });
    }
  };

  StaticSegment.prototype.regex = function regex() {
    return this.string.replace(escapeRegex, '\\$1');
  };

  StaticSegment.prototype.generate = function generate() {
    return this.string;
  };

  return StaticSegment;
}();

var DynamicSegment = function () {
  function DynamicSegment(name, optional) {
    

    this.name = name;
    this.optional = optional;
  }

  DynamicSegment.prototype.eachChar = function eachChar(callback) {
    callback({ invalidChars: '/', repeat: true });
  };

  DynamicSegment.prototype.regex = function regex() {
    return this.optional ? '([^/]+)?' : '([^/]+)';
  };

  DynamicSegment.prototype.generate = function generate(params, consumed) {
    consumed[this.name] = true;
    return params[this.name];
  };

  return DynamicSegment;
}();

var StarSegment = function () {
  function StarSegment(name) {
    

    this.name = name;
  }

  StarSegment.prototype.eachChar = function eachChar(callback) {
    callback({ invalidChars: '', repeat: true });
  };

  StarSegment.prototype.regex = function regex() {
    return '(.+)';
  };

  StarSegment.prototype.generate = function generate(params, consumed) {
    consumed[this.name] = true;
    return params[this.name];
  };

  return StarSegment;
}();

var EpsilonSegment = function () {
  function EpsilonSegment() {
    
  }

  EpsilonSegment.prototype.eachChar = function eachChar() {};

  EpsilonSegment.prototype.regex = function regex() {
    return '';
  };

  EpsilonSegment.prototype.generate = function generate() {
    return '';
  };

  return EpsilonSegment;
}();

var RouteRecognizer = function () {
  function RouteRecognizer() {
    

    this.rootState = new State();
    this.names = {};
  }

  RouteRecognizer.prototype.add = function add(route) {
    var _this = this;

    if (Array.isArray(route)) {
      route.forEach(function (r) {
        return _this.add(r);
      });
      return undefined;
    }

    var currentState = this.rootState;
    var regex = '^';
    var types = { statics: 0, dynamics: 0, stars: 0 };
    var names = [];
    var routeName = route.handler.name;
    var isEmpty = true;
    var isAllOptional = true;
    var segments = parse(route.path, names, types, route.caseSensitive);

    for (var i = 0, ii = segments.length; i < ii; i++) {
      var segment = segments[i];
      if (segment instanceof EpsilonSegment) {
        continue;
      }

      isEmpty = false;
      isAllOptional = isAllOptional && segment.optional;

      currentState = addSegment(currentState, segment);
      regex += segment.optional ? '/?' : '/';
      regex += segment.regex();
    }

    if (isAllOptional) {
      if (isEmpty) {
        currentState = currentState.put({ validChars: '/' });
        regex += '/';
      } else {
        var finalState = this.rootState.put({ validChars: '/' });
        currentState.epsilon = [finalState];
        currentState = finalState;
      }
    }

    var handlers = [{ handler: route.handler, names: names }];

    if (routeName) {
      var routeNames = Array.isArray(routeName) ? routeName : [routeName];
      for (var _i2 = 0; _i2 < routeNames.length; _i2++) {
        this.names[routeNames[_i2]] = {
          segments: segments,
          handlers: handlers
        };
      }
    }

    currentState.handlers = handlers;
    currentState.regex = new RegExp(regex + '$', route.caseSensitive ? '' : 'i');
    currentState.types = types;

    return currentState;
  };

  RouteRecognizer.prototype.handlersFor = function handlersFor(name) {
    var route = this.names[name];
    if (!route) {
      throw new Error('There is no route named ' + name);
    }

    return [].concat(route.handlers);
  };

  RouteRecognizer.prototype.hasRoute = function hasRoute(name) {
    return !!this.names[name];
  };

  RouteRecognizer.prototype.generate = function generate(name, params) {
    var route = this.names[name];
    if (!route) {
      throw new Error('There is no route named ' + name);
    }

    var handler = route.handlers[0].handler;
    if (handler.generationUsesHref) {
      return handler.href;
    }

    var routeParams = Object.assign({}, params);
    var segments = route.segments;
    var consumed = {};
    var output = '';

    for (var i = 0, l = segments.length; i < l; i++) {
      var segment = segments[i];

      if (segment instanceof EpsilonSegment) {
        continue;
      }

      var segmentValue = segment.generate(routeParams, consumed);
      if (segmentValue === null || segmentValue === undefined) {
        if (!segment.optional) {
          throw new Error('A value is required for route parameter \'' + segment.name + '\' in route \'' + name + '\'.');
        }
      } else {
        output += '/';
        output += segmentValue;
      }
    }

    if (output.charAt(0) !== '/') {
      output = '/' + output;
    }

    for (var param in consumed) {
      delete routeParams[param];
    }

    var queryString = Object(__WEBPACK_IMPORTED_MODULE_0_aurelia_path__["a" /* buildQueryString */])(routeParams);
    output += queryString ? '?' + queryString : '';

    return output;
  };

  RouteRecognizer.prototype.recognize = function recognize(path) {
    var states = [this.rootState];
    var queryParams = {};
    var isSlashDropped = false;
    var normalizedPath = path;

    var queryStart = normalizedPath.indexOf('?');
    if (queryStart !== -1) {
      var queryString = normalizedPath.substr(queryStart + 1, normalizedPath.length);
      normalizedPath = normalizedPath.substr(0, queryStart);
      queryParams = Object(__WEBPACK_IMPORTED_MODULE_0_aurelia_path__["c" /* parseQueryString */])(queryString);
    }

    normalizedPath = decodeURI(normalizedPath);

    if (normalizedPath.charAt(0) !== '/') {
      normalizedPath = '/' + normalizedPath;
    }

    var pathLen = normalizedPath.length;
    if (pathLen > 1 && normalizedPath.charAt(pathLen - 1) === '/') {
      normalizedPath = normalizedPath.substr(0, pathLen - 1);
      isSlashDropped = true;
    }

    for (var i = 0, l = normalizedPath.length; i < l; i++) {
      states = recognizeChar(states, normalizedPath.charAt(i));
      if (!states.length) {
        break;
      }
    }

    var solutions = [];
    for (var _i3 = 0, _l = states.length; _i3 < _l; _i3++) {
      if (states[_i3].handlers) {
        solutions.push(states[_i3]);
      }
    }

    states = sortSolutions(solutions);

    var state = solutions[0];
    if (state && state.handlers) {
      if (isSlashDropped && state.regex.source.slice(-5) === '(.+)$') {
        normalizedPath = normalizedPath + '/';
      }

      return findHandler(state, normalizedPath, queryParams);
    }
  };

  return RouteRecognizer;
}();

var RecognizeResults = function RecognizeResults(queryParams) {
  

  this.splice = Array.prototype.splice;
  this.slice = Array.prototype.slice;
  this.push = Array.prototype.push;
  this.length = 0;
  this.queryParams = queryParams || {};
};

function parse(route, names, types, caseSensitive) {
  var normalizedRoute = route;
  if (route.charAt(0) === '/') {
    normalizedRoute = route.substr(1);
  }

  var results = [];

  var splitRoute = normalizedRoute.split('/');
  for (var i = 0, ii = splitRoute.length; i < ii; ++i) {
    var segment = splitRoute[i];

    var match = segment.match(/^:([^?]+)(\?)?$/);
    if (match) {
      var _match = match,
          _name = _match[1],
          optional = _match[2];

      if (_name.indexOf('=') !== -1) {
        throw new Error('Parameter ' + _name + ' in route ' + route + ' has a default value, which is not supported.');
      }
      results.push(new DynamicSegment(_name, !!optional));
      names.push(_name);
      types.dynamics++;
      continue;
    }

    match = segment.match(/^\*(.+)$/);
    if (match) {
      results.push(new StarSegment(match[1]));
      names.push(match[1]);
      types.stars++;
    } else if (segment === '') {
      results.push(new EpsilonSegment());
    } else {
      results.push(new StaticSegment(segment, caseSensitive));
      types.statics++;
    }
  }

  return results;
}

function sortSolutions(states) {
  return states.sort(function (a, b) {
    if (a.types.stars !== b.types.stars) {
      return a.types.stars - b.types.stars;
    }

    if (a.types.stars) {
      if (a.types.statics !== b.types.statics) {
        return b.types.statics - a.types.statics;
      }
      if (a.types.dynamics !== b.types.dynamics) {
        return b.types.dynamics - a.types.dynamics;
      }
    }

    if (a.types.dynamics !== b.types.dynamics) {
      return a.types.dynamics - b.types.dynamics;
    }

    if (a.types.statics !== b.types.statics) {
      return b.types.statics - a.types.statics;
    }

    return 0;
  });
}

function recognizeChar(states, ch) {
  var nextStates = [];

  for (var i = 0, l = states.length; i < l; i++) {
    var state = states[i];
    nextStates.push.apply(nextStates, state.match(ch));
  }

  var skippableStates = nextStates.filter(function (s) {
    return s.epsilon;
  });

  var _loop = function _loop() {
    var newStates = [];
    skippableStates.forEach(function (s) {
      nextStates.push.apply(nextStates, s.epsilon);
      newStates.push.apply(newStates, s.epsilon);
    });
    skippableStates = newStates.filter(function (s) {
      return s.epsilon;
    });
  };

  while (skippableStates.length > 0) {
    _loop();
  }

  return nextStates;
}

function findHandler(state, path, queryParams) {
  var handlers = state.handlers;
  var regex = state.regex;
  var captures = path.match(regex);
  var currentCapture = 1;
  var result = new RecognizeResults(queryParams);

  for (var i = 0, l = handlers.length; i < l; i++) {
    var _handler = handlers[i];
    var _names = _handler.names;
    var _params = {};

    for (var j = 0, m = _names.length; j < m; j++) {
      _params[_names[j]] = captures[currentCapture++];
    }

    result.push({ handler: _handler.handler, params: _params, isDynamic: !!_names.length });
  }

  return result;
}

function addSegment(currentState, segment) {
  var state = currentState.put({ validChars: '/' });
  segment.eachChar(function (ch) {
    state = state.put(ch);
  });

  if (segment.optional) {
    currentState.epsilon = currentState.epsilon || [];
    currentState.epsilon.push(state);
  }

  return state;
}

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TemplatingRouteLoader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_templating__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_aurelia_path__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aurelia_metadata__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__router_view__ = __webpack_require__("aurelia-templating-router/router-view");
var _dec, _class;



function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var TemplatingRouteLoader = (_dec = Object(__WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__["d" /* inject */])(__WEBPACK_IMPORTED_MODULE_1_aurelia_templating__["e" /* CompositionEngine */]), _dec(_class = function (_RouteLoader) {
  _inherits(TemplatingRouteLoader, _RouteLoader);

  function TemplatingRouteLoader(compositionEngine) {
    

    var _this = _possibleConstructorReturn(this, _RouteLoader.call(this));

    _this.compositionEngine = compositionEngine;
    return _this;
  }

  TemplatingRouteLoader.prototype.loadRoute = function loadRoute(router, config) {
    var childContainer = router.container.createChild();

    var viewModel = /\.html/.test(config.moduleId) ? createDynamicClass(config.moduleId) : Object(__WEBPACK_IMPORTED_MODULE_3_aurelia_path__["d" /* relativeToFile */])(config.moduleId, __WEBPACK_IMPORTED_MODULE_4_aurelia_metadata__["a" /* Origin */].get(router.container.viewModel.constructor).moduleId);

    var instruction = {
      viewModel: viewModel,
      childContainer: childContainer,
      view: config.view || config.viewStrategy,
      router: router
    };

    childContainer.registerSingleton(__WEBPACK_IMPORTED_MODULE_5__router_view__["RouterViewLocator"]);

    childContainer.getChildRouter = function () {
      var childRouter = void 0;

      childContainer.registerHandler(__WEBPACK_IMPORTED_MODULE_2_aurelia_router__["c" /* Router */], function (c) {
        return childRouter || (childRouter = router.createChild(childContainer));
      });

      return childContainer.get(__WEBPACK_IMPORTED_MODULE_2_aurelia_router__["c" /* Router */]);
    };

    return this.compositionEngine.ensureViewModel(instruction);
  };

  return TemplatingRouteLoader;
}(__WEBPACK_IMPORTED_MODULE_2_aurelia_router__["b" /* RouteLoader */])) || _class);

function createDynamicClass(moduleId) {
  var _dec2, _dec3, _class2;

  var name = /([^\/^\?]+)\.html/i.exec(moduleId)[1];

  var DynamicClass = (_dec2 = Object(__WEBPACK_IMPORTED_MODULE_1_aurelia_templating__["q" /* customElement */])(name), _dec3 = Object(__WEBPACK_IMPORTED_MODULE_1_aurelia_templating__["u" /* useView */])(moduleId), _dec2(_class2 = _dec3(_class2 = function () {
    function DynamicClass() {
      
    }

    DynamicClass.prototype.bind = function bind(bindingContext) {
      this.$parent = bindingContext;
    };

    return DynamicClass;
  }()) || _class2) || _class2);


  return DynamicClass;
}

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _createCSSResource;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_templating__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_loader__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_dependency_injection__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_aurelia_path__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aurelia_pal__ = __webpack_require__(0);
function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var cssUrlMatcher = /url\((?!['"]data)([^)]+)\)/gi;

function fixupCSSUrls(address, css) {
  if (typeof css !== 'string') {
    throw new Error('Failed loading required CSS file: ' + address);
  }
  return css.replace(cssUrlMatcher, function (match, p1) {
    var quote = p1.charAt(0);
    if (quote === '\'' || quote === '"') {
      p1 = p1.substr(1, p1.length - 2);
    }
    return 'url(\'' + Object(__WEBPACK_IMPORTED_MODULE_3_aurelia_path__["d" /* relativeToFile */])(p1, address) + '\')';
  });
}

var CSSResource = function () {
  function CSSResource(address) {
    

    this.address = address;
    this._scoped = null;
    this._global = false;
    this._alreadyGloballyInjected = false;
  }

  CSSResource.prototype.initialize = function initialize(container, target) {
    this._scoped = new target(this);
  };

  CSSResource.prototype.register = function register(registry, name) {
    if (name === 'scoped') {
      registry.registerViewEngineHooks(this._scoped);
    } else {
      this._global = true;
    }
  };

  CSSResource.prototype.load = function load(container) {
    var _this = this;

    return container.get(__WEBPACK_IMPORTED_MODULE_1_aurelia_loader__["a" /* Loader */]).loadText(this.address).catch(function (err) {
      return null;
    }).then(function (text) {
      text = fixupCSSUrls(_this.address, text);
      _this._scoped.css = text;
      if (_this._global) {
        _this._alreadyGloballyInjected = true;
        __WEBPACK_IMPORTED_MODULE_4_aurelia_pal__["b" /* DOM */].injectStyles(text);
      }
    });
  };

  return CSSResource;
}();

var CSSViewEngineHooks = function () {
  function CSSViewEngineHooks(owner) {
    

    this.owner = owner;
    this.css = null;
  }

  CSSViewEngineHooks.prototype.beforeCompile = function beforeCompile(content, resources, instruction) {
    if (instruction.targetShadowDOM) {
      __WEBPACK_IMPORTED_MODULE_4_aurelia_pal__["b" /* DOM */].injectStyles(this.css, content, true);
    } else if (__WEBPACK_IMPORTED_MODULE_4_aurelia_pal__["c" /* FEATURE */].scopedCSS) {
      var styleNode = __WEBPACK_IMPORTED_MODULE_4_aurelia_pal__["b" /* DOM */].injectStyles(this.css, content, true);
      styleNode.setAttribute('scoped', 'scoped');
    } else if (this._global && !this.owner._alreadyGloballyInjected) {
      __WEBPACK_IMPORTED_MODULE_4_aurelia_pal__["b" /* DOM */].injectStyles(this.css);
      this.owner._alreadyGloballyInjected = true;
    }
  };

  return CSSViewEngineHooks;
}();

function _createCSSResource(address) {
  var _dec, _class;

  var ViewCSS = (_dec = Object(__WEBPACK_IMPORTED_MODULE_0_aurelia_templating__["s" /* resource */])(new CSSResource(address)), _dec(_class = function (_CSSViewEngineHooks) {
    _inherits(ViewCSS, _CSSViewEngineHooks);

    function ViewCSS() {
      

      return _possibleConstructorReturn(this, _CSSViewEngineHooks.apply(this, arguments));
    }

    return ViewCSS;
  }(CSSViewEngineHooks)) || _class);

  return ViewCSS;
}

/***/ }),

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logLevel", function() { return logLevel; });
/* harmony export (immutable) */ __webpack_exports__["getLogger"] = getLogger;
/* harmony export (immutable) */ __webpack_exports__["addAppender"] = addAppender;
/* harmony export (immutable) */ __webpack_exports__["removeAppender"] = removeAppender;
/* harmony export (immutable) */ __webpack_exports__["setLevel"] = setLevel;
/* harmony export (immutable) */ __webpack_exports__["getLevel"] = getLevel;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return Logger; });


var logLevel = {
  none: 0,
  error: 1,
  warn: 2,
  info: 3,
  debug: 4
};

var loggers = {};
var appenders = [];
var globalDefaultLevel = logLevel.none;

function appendArgs() {
  return [this].concat(Array.prototype.slice.call(arguments));
}

function logFactory(level) {
  var threshold = logLevel[level];
  return function () {
    if (this.level < threshold) {
      return;
    }

    var args = appendArgs.apply(this, arguments);
    var i = appenders.length;
    while (i--) {
      var _appenders$i;

      (_appenders$i = appenders[i])[level].apply(_appenders$i, args);
    }
  };
}

function connectLoggers() {
  var proto = Logger.prototype;
  proto.debug = logFactory('debug');
  proto.info = logFactory('info');
  proto.warn = logFactory('warn');
  proto.error = logFactory('error');
}

function getLogger(id) {
  return loggers[id] || new Logger(id);
}

function addAppender(appender) {
  if (appenders.push(appender) === 1) {
    connectLoggers();
  }
}

function removeAppender(appender) {
  appenders = appenders.filter(function (a) {
    return a !== appender;
  });
}

function setLevel(level) {
  globalDefaultLevel = level;
  for (var key in loggers) {
    loggers[key].setLevel(level);
  }
}

function getLevel() {
  return globalDefaultLevel;
}

var Logger = function () {
  function Logger(id) {
    

    var cached = loggers[id];
    if (cached) {
      return cached;
    }

    loggers[id] = this;
    this.id = id;
    this.level = globalDefaultLevel;
  }

  Logger.prototype.debug = function debug(message) {};

  Logger.prototype.info = function info(message) {};

  Logger.prototype.warn = function warn(message) {};

  Logger.prototype.error = function error(message) {};

  Logger.prototype.setLevel = function setLevel(level) {
    this.level = level;
  };

  return Logger;
}();

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getElementName */
/* harmony export (immutable) */ __webpack_exports__["a"] = configure;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_templating__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dynamic_element__ = __webpack_require__(41);



function getElementName(address) {
  return (/([^\/^\?]+)\.html/i.exec(address)[1].toLowerCase()
  );
}

function configure(config) {
  var viewEngine = config.container.get(__WEBPACK_IMPORTED_MODULE_0_aurelia_templating__["k" /* ViewEngine */]);
  var loader = config.aurelia.loader;

  viewEngine.addResourcePlugin('.html', {
    'fetch': function fetch(address) {
      return loader.loadTemplate(address).then(function (registryEntry) {
        var _ref;

        var bindable = registryEntry.template.getAttribute('bindable');
        var elementName = getElementName(address);

        if (bindable) {
          bindable = bindable.split(',').map(function (x) {
            return x.trim();
          });
          registryEntry.template.removeAttribute('bindable');
        } else {
          bindable = [];
        }

        return _ref = {}, _ref[elementName] = Object(__WEBPACK_IMPORTED_MODULE_1__dynamic_element__["a" /* _createDynamicElement */])(elementName, address, bindable), _ref;
      });
    }
  });
}

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _createDynamicElement;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_templating__ = __webpack_require__(1);



function _createDynamicElement(name, viewUrl, bindableNames) {
  var _dec, _dec2, _class;

  var DynamicElement = (_dec = Object(__WEBPACK_IMPORTED_MODULE_0_aurelia_templating__["q" /* customElement */])(name), _dec2 = Object(__WEBPACK_IMPORTED_MODULE_0_aurelia_templating__["u" /* useView */])(viewUrl), _dec(_class = _dec2(_class = function () {
    function DynamicElement() {
      
    }

    DynamicElement.prototype.bind = function bind(bindingContext) {
      this.$parent = bindingContext;
    };

    return DynamicElement;
  }()) || _class) || _class);

  for (var i = 0, ii = bindableNames.length; i < ii; ++i) {
    Object(__WEBPACK_IMPORTED_MODULE_0_aurelia_templating__["o" /* bindable */])(bindableNames[i])(DynamicElement);
  }
  return DynamicElement;
}

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tether__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tether___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tether__);

var TooltipService = /** @class */ (function () {
    function TooltipService() {
    }
    TooltipService.prototype.createAttachment = function (target, element, position) {
        var attachment;
        var targetAttachment;
        if (position === 'top') {
            attachment = 'bottom center';
            targetAttachment = "top center";
        }
        else if (position === 'bottom') {
            attachment = 'top center';
            targetAttachment = "bottom center";
        }
        else if (position === 'left') {
            attachment = 'center right';
            targetAttachment = "center left";
        }
        else {
            attachment = 'center left';
            targetAttachment = "center right";
        }
        return new __WEBPACK_IMPORTED_MODULE_0_tether___default.a({
            element: element,
            target: target,
            attachment: attachment,
            targetAttachment: targetAttachment
        });
    };
    TooltipService.prototype.setTriggers = function (element, triggers, listeners) {
        if (!triggers.includes('none')) {
            if (triggers.includes('mouseover')) {
                element.addEventListener('mouseover', listeners.in);
                element.addEventListener('mouseleave', listeners.out);
            }
            if (triggers.includes('focus')) {
                element.addEventListener('focus', listeners.in);
                element.addEventListener('blur', listeners.out);
            }
            if (triggers.includes('click')) {
                element.addEventListener('click', listeners.click);
            }
            else if (triggers.includes('outsideClick')) {
                element.addEventListener('click', listeners.in);
                document.addEventListener('click', listeners.outside);
            }
        }
    };
    TooltipService.prototype.removeTriggers = function (element, triggers, listeners) {
        if (!triggers.includes('none')) {
            if (triggers.includes('mouseover')) {
                element.removeEventListener('mouseover', listeners.in);
                element.removeEventListener('mouseleave', listeners.out);
            }
            if (triggers.includes('focus')) {
                element.removeEventListener('focus', listeners.in);
                element.removeEventListener('blur', listeners.out);
            }
            if (triggers.includes('click')) {
                element.removeEventListener('click', listeners.click);
            }
            else if (triggers.includes('outsideClick')) {
                element.removeEventListener('click', listeners.in);
                document.removeEventListener('click', listeners.outside);
            }
        }
    };
    return TooltipService;
}());



/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(5))(38);

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bootstrapOptions; });
var bootstrapOptions = {
    version: 3,
    accordionCloseOthers: true,
    accordionGroupPanelClass: 'panel-default',
    btnLoadingText: 'Loading...',
    dropdownAutoClose: 'always',
    paginationBoundaryLinks: false,
    paginationDirectionLinks: true,
    paginationFirstText: 'First',
    paginationHideSinglePage: true,
    paginationLastText: 'Last',
    paginationNextText: '>',
    paginationPreviousText: '<',
    popoverPosition: 'top',
    popoverTrigger: 'mouseover',
    tabsetType: 'tabs',
    tabsetVertical: false,
    tooltipClass: 'tooltip',
    tooltipPosition: 'top',
    tooltipTrigger: 'mouseover'
};


/***/ }),

/***/ 45:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VizTokenRepository; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__ = __webpack_require__("aurelia-framework");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_fetch_client__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_whatwg_fetch__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_whatwg_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_whatwg_fetch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VizTokenRepository = /** @class */ (function () {
    function VizTokenRepository(httpClient) {
        this._http = httpClient;
    }
    VizTokenRepository.prototype.getData = function (userName, siteName) {
        var _this = this;
        // this.siteId = siteId;
        // this.siteName = siteName;
        var opt = {
            credentials: "same-origin"
        };
        var prms = new Promise(function (res, rej) {
            _this._http.fetch(_this.getUrl(userName, siteName), opt)
                .then(function (rsp) {
                if (!rsp.ok) {
                    throw new Error("Status: " + rsp.status + ", Details: " + rsp.statusText);
                }
                return rsp.text();
            })
                .then(function (data) {
                _this.vizToken = data;
                res(_this.vizToken);
            })
                .catch(function (err) {
                console.log("(error) from vizTokenRepo.getData: " + JSON.stringify(err));
                rej(err);
            });
        });
        return prms;
    };
    VizTokenRepository.prototype.getPptDlguid = function (contentUrl) {
        var _this = this;
        var url = "Home/GetPpt?viewContentUrl=" + contentUrl;
        var opt = { credentials: "same-origin" };
        var prms = new Promise(function (res, rej) {
            _this._http.fetch(url, opt)
                .then(function (rsp) {
                if (!rsp.ok) {
                    throw new Error("Status: " + rsp.status + ", Details: " + rsp.statusText);
                }
                res(rsp.text());
            })
                .catch(function (err) { return rej(err); });
        });
        return prms;
    };
    VizTokenRepository.prototype.reset = function () {
        this.vizToken = null;
    };
    VizTokenRepository.prototype.getUrl = function (userName, siteName) {
        return "Home/GetVizToken?userName=" + encodeURIComponent(userName) + "&siteName=" + encodeURIComponent(siteName);
    };
    VizTokenRepository = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["g" /* inject */])(__WEBPACK_IMPORTED_MODULE_1_aurelia_fetch_client__["a" /* HttpClient */]),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_aurelia_fetch_client__["a" /* HttpClient */]])
    ], VizTokenRepository);
    return VizTokenRepository;
}());



/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuDataRepository; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__ = __webpack_require__("aurelia-framework");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_fetch_client__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_whatwg_fetch__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_whatwg_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_whatwg_fetch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuDataRepository = /** @class */ (function () {
    function MenuDataRepository(httpClient) {
        this._http = httpClient;
    }
    MenuDataRepository.prototype.getData = function () {
        var _this = this;
        var prms = new Promise(function (resolve, reject) {
            if (!_this.menuData) {
                _this._http.fetch("Home/GetMenuData", { credentials: "same-origin" })
                    .then(function (respone) { return respone.json(); })
                    .then(function (data) {
                    var tempData = data;
                    tempData.Categories.forEach(function (c) {
                        c.Workbooks.forEach(function (w) {
                            w.PreviewImage = "Content/Images/WorkbookPreviewImages/site-" + tempData.SiteId +
                                "/workbook-" + w.Id + ".png";
                        });
                    });
                    _this.menuData = tempData;
                    resolve(_this.menuData);
                });
            }
            else {
                resolve(_this.menuData);
            }
        });
        return prms;
    };
    MenuDataRepository.prototype.refresh = function () {
        this.menuData = null;
    };
    MenuDataRepository = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["g" /* inject */])(__WEBPACK_IMPORTED_MODULE_1_aurelia_fetch_client__["a" /* HttpClient */]),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_aurelia_fetch_client__["a" /* HttpClient */]])
    ], MenuDataRepository);
    return MenuDataRepository;
}());



/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(5))(96);

/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(5))(97);

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = vendor_ca561017996a615e3be0;

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
__webpack_require__(15);
module.exports = self.fetch.bind(self);


/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_pal__ = __webpack_require__(0);
// With default aurelia-loader-webpack config, this module is added as an extra entry
// before any other code executes so that PAL.Loader is properly configured.
// There are several tricky points worth noticing.
// 
// We don't add aurelia-loader-webpack itself as an entry point (used to until 2.0 RC2)
// because it (transitively) brings too much bagage with itself, most notably polyfills.
// This made it super-hard to add other polyfills before Aurelia's and led to various bugs.
//
// We don't add custom code in aurelia-pal or aurelia-loader or aurelia-bootstrapper to detect
// the Webpack environment and configure the loader because they might live in a DLL.
// If they do, they would bring aurelia-loader-webpack along in the DLL and this is a special 
// library that *has to be in the main chunk.*
//
// The over-complicated design I've settled upon in the end is to use this special module
// as an entry point that configures aurelia-loader-webpack. It has minimal static imports:
// just aurelia-pal, which itself has no other dependencies and doesn't run much code.
// It hacks the loader field into a getter so that it can synchronously load aurelia-loader-webpack
// just in time when it is demanded by aurelia-bootstrapper.
// This enables users to load polyfills before aurelia-loader-webpack is actually loaded.



var Loader;

Object.defineProperty(__WEBPACK_IMPORTED_MODULE_0_aurelia_pal__["d" /* PLATFORM */], "Loader", {
  get: function() {
    return Loader || (Loader = __webpack_require__(52).WebpackLoader);
  },
  set: function(value) {
    Loader = value;
  }
});


/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextTemplateLoader", function() { return TextTemplateLoader; });
/* harmony export (immutable) */ __webpack_exports__["ensureOriginOnExports"] = ensureOriginOnExports;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebpackLoader", function() { return WebpackLoader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_metadata__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_loader__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_pal__ = __webpack_require__(0);
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



/**
* An implementation of the TemplateLoader interface implemented with text-based loading.
*/
var TextTemplateLoader = (function () {
    function TextTemplateLoader() {
    }
    /**
    * Loads a template.
    * @param loader The loader that is requesting the template load.
    * @param entry The TemplateRegistryEntry to load and populate with a template.
    * @return A promise which resolves when the TemplateRegistryEntry is loaded with a template.
    */
    TextTemplateLoader.prototype.loadTemplate = function (loader, entry) {
        return __awaiter(this, void 0, void 0, function () {
            var text;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, loader.loadText(entry.address)];
                    case 1:
                        text = _a.sent();
                        entry.template = __WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["b" /* DOM */].createTemplateFromMarkup(text);
                        return [2 /*return*/];
                }
            });
        });
    };
    return TextTemplateLoader;
}());

function ensureOriginOnExports(moduleExports, moduleId) {
    var target = moduleExports;
    var key;
    var exportedValue;
    if (target.__useDefault) {
        target = target.default;
    }
    __WEBPACK_IMPORTED_MODULE_0_aurelia_metadata__["a" /* Origin */].set(target, new __WEBPACK_IMPORTED_MODULE_0_aurelia_metadata__["a" /* Origin */](moduleId, 'default'));
    if (typeof target === 'object') {
        for (key in target) {
            exportedValue = target[key];
            if (typeof exportedValue === 'function') {
                __WEBPACK_IMPORTED_MODULE_0_aurelia_metadata__["a" /* Origin */].set(exportedValue, new __WEBPACK_IMPORTED_MODULE_0_aurelia_metadata__["a" /* Origin */](moduleId, key));
            }
        }
    }
    return moduleExports;
}
/**
* A default implementation of the Loader abstraction which works with webpack (extended common-js style).
*/
var WebpackLoader = (function (_super) {
    __extends(WebpackLoader, _super);
    function WebpackLoader() {
        var _this = _super.call(this) || this;
        _this.moduleRegistry = Object.create(null);
        _this.loaderPlugins = Object.create(null);
        _this.modulesBeingLoaded = new Map();
        _this.useTemplateLoader(new TextTemplateLoader());
        _this.addPlugin('template-registry-entry', {
            fetch: function (moduleId) { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                var HmrContext, entry;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // HMR:
                            if (false) {
                                if (!this.hmrContext) {
                                    HmrContext = require('aurelia-hot-module-reload').HmrContext;
                                    this.hmrContext = new HmrContext(this);
                                }
                                module.hot.accept(moduleId, function () { return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, this.hmrContext.handleViewChange(moduleId)];
                                            case 1:
                                                _a.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                }); });
                            }
                            entry = this.getOrCreateTemplateRegistryEntry(moduleId);
                            if (!!entry.templateIsLoaded) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.templateLoader.loadTemplate(this, entry)];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2: return [2 /*return*/, entry];
                    }
                });
            }); }
        });
        __WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["d" /* PLATFORM */].eachModule = function (callback) {
            var registry = __webpack_require__.c;
            var cachedModuleIds = Object.getOwnPropertyNames(registry);
            cachedModuleIds
                .forEach(function (moduleId) {
                var moduleExports = registry[moduleId].exports;
                if (typeof moduleExports === 'object') {
                    callback(moduleId, moduleExports);
                }
            });
        };
        return _this;
    }
    WebpackLoader.prototype._import = function (address, defaultHMR) {
        if (defaultHMR === void 0) { defaultHMR = true; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var addressParts, moduleId, loaderPlugin, plugin_1, asyncModuleId, callback;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        addressParts = address.split('!');
                        moduleId = addressParts.splice(addressParts.length - 1, 1)[0];
                        loaderPlugin = addressParts.length === 1 ? addressParts[0] : null;
                        if (!loaderPlugin) return [3 /*break*/, 2];
                        plugin_1 = this.loaderPlugins[loaderPlugin];
                        if (!plugin_1) {
                            throw new Error("Plugin " + loaderPlugin + " is not registered in the loader.");
                        }
                        if (false) {
                            module.hot.accept(moduleId, function () { return plugin_1.hot(moduleId); });
                        }
                        return [4 /*yield*/, plugin_1.fetch(moduleId)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        if (__webpack_require__.m[moduleId]) {
                            if (defaultHMR && module.hot && this.hmrContext) {
                                module.hot.accept(moduleId, function () { return _this.hmrContext.handleModuleChange(moduleId, module.hot); });
                            }
                            return [2 /*return*/, __webpack_require__(moduleId)];
                        }
                        asyncModuleId = "async!" + moduleId;
                        if (!__webpack_require__.m[asyncModuleId]) return [3 /*break*/, 4];
                        if (defaultHMR && module.hot && this.hmrContext) {
                            module.hot.accept(moduleId, function () { return _this.hmrContext.handleModuleChange(moduleId, module.hot); });
                            module.hot.accept(asyncModuleId, function () { });
                        }
                        callback = __webpack_require__(asyncModuleId);
                        return [4 /*yield*/, new Promise(callback)];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4: throw new Error("Unable to find module with ID: " + moduleId);
                }
            });
        });
    };
    /**
    * Maps a module id to a source.
    * @param id The module id.
    * @param source The source to map the module to.
    */
    WebpackLoader.prototype.map = function (id, source) { };
    /**
    * Normalizes a module id.
    * @param moduleId The module id to normalize.
    * @param relativeTo What the module id should be normalized relative to.
    * @return The normalized module id.
    */
    WebpackLoader.prototype.normalizeSync = function (moduleId, relativeTo) {
        return moduleId;
    };
    /**
    * Normalizes a module id.
    * @param moduleId The module id to normalize.
    * @param relativeTo What the module id should be normalized relative to.
    * @return The normalized module id.
    */
    WebpackLoader.prototype.normalize = function (moduleId, relativeTo) {
        return Promise.resolve(moduleId);
    };
    /**
    * Instructs the loader to use a specific TemplateLoader instance for loading templates
    * @param templateLoader The instance of TemplateLoader to use for loading templates.
    */
    WebpackLoader.prototype.useTemplateLoader = function (templateLoader) {
        this.templateLoader = templateLoader;
    };
    /**
    * Loads a collection of modules.
    * @param ids The set of module ids to load.
    * @return A Promise for an array of loaded modules.
    */
    WebpackLoader.prototype.loadAllModules = function (ids) {
        var _this = this;
        return Promise.all(ids.map(function (id) { return _this.loadModule(id); }));
    };
    /**
    * Loads a module.
    * @param moduleId The module ID to load.
    * @return A Promise for the loaded module.
    */
    WebpackLoader.prototype.loadModule = function (moduleId, defaultHMR) {
        if (defaultHMR === void 0) { defaultHMR = true; }
        return __awaiter(this, void 0, void 0, function () {
            var existing, beingLoaded, moduleExports;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        existing = this.moduleRegistry[moduleId];
                        if (existing) {
                            return [2 /*return*/, existing];
                        }
                        beingLoaded = this.modulesBeingLoaded.get(moduleId);
                        if (beingLoaded) {
                            return [2 /*return*/, beingLoaded];
                        }
                        beingLoaded = this._import(moduleId, defaultHMR);
                        this.modulesBeingLoaded.set(moduleId, beingLoaded);
                        return [4 /*yield*/, beingLoaded];
                    case 1:
                        moduleExports = _a.sent();
                        this.moduleRegistry[moduleId] = ensureOriginOnExports(moduleExports, moduleId);
                        this.modulesBeingLoaded.delete(moduleId);
                        return [2 /*return*/, moduleExports];
                }
            });
        });
    };
    /**
    * Loads a template.
    * @param url The url of the template to load.
    * @return A Promise for a TemplateRegistryEntry containing the template.
    */
    WebpackLoader.prototype.loadTemplate = function (url) {
        return this.loadModule(this.applyPluginToUrl(url, 'template-registry-entry'), false);
    };
    /**
    * Loads a text-based resource.
    * @param url The url of the text file to load.
    * @return A Promise for text content.
    */
    WebpackLoader.prototype.loadText = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadModule(url, false)];
                    case 1:
                        result = _a.sent();
                        if (result instanceof Array && result[0] instanceof Array && result.hasOwnProperty('toString')) {
                            // we're dealing with a file loaded using the css-loader:
                            return [2 /*return*/, result.toString()];
                        }
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
    * Alters a module id so that it includes a plugin loader.
    * @param url The url of the module to load.
    * @param pluginName The plugin to apply to the module id.
    * @return The plugin-based module id.
    */
    WebpackLoader.prototype.applyPluginToUrl = function (url, pluginName) {
        return pluginName + "!" + url;
    };
    /**
    * Registers a plugin with the loader.
    * @param pluginName The name of the plugin.
    * @param implementation The plugin implementation.
    */
    WebpackLoader.prototype.addPlugin = function (pluginName, implementation) {
        this.loaderPlugins[pluginName] = implementation;
    };
    return WebpackLoader;
}(__WEBPACK_IMPORTED_MODULE_1_aurelia_loader__["a" /* Loader */]));

__WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["d" /* PLATFORM */].Loader = WebpackLoader;

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(53)(module)))

/***/ }),

/***/ 53:
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["bootstrap"] = bootstrap;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "starting", function() { return starting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_polyfills__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_pal__ = __webpack_require__(0);



var bootstrapPromises = [];
var startResolve = void 0;

var startPromise = new Promise(function (resolve) {
  return startResolve = resolve;
});
var host = __WEBPACK_IMPORTED_MODULE_1_aurelia_pal__["d" /* PLATFORM */].global;
var isNodeLike = typeof process !== 'undefined' && !process.browser;

function ready() {
  if (!host.document || host.document.readyState === 'complete') {
    return Promise.resolve();
  }

  return new Promise(function (resolve) {
    host.document.addEventListener('DOMContentLoaded', completed);
    host.addEventListener('load', completed);

    function completed() {
      host.document.removeEventListener('DOMContentLoaded', completed);
      host.removeEventListener('load', completed);
      resolve();
    }
  });
}

function createLoader() {
  if (__WEBPACK_IMPORTED_MODULE_1_aurelia_pal__["d" /* PLATFORM */].Loader) {
    return Promise.resolve(new __WEBPACK_IMPORTED_MODULE_1_aurelia_pal__["d" /* PLATFORM */].Loader());
  }

  if (false) {
    if (typeof __webpack_require__ !== 'undefined') {
      var m = __webpack_require__(require.resolve('aurelia-loader-webpack'));
      return Promise.resolve(new m.WebpackLoader());
    }

    if (host.System && typeof host.System.config === 'function') {
      return host.System.normalize('aurelia-bootstrapper').then(function (bsn) {
        return host.System.normalize('aurelia-loader-default', bsn);
      }).then(function (loaderName) {
        return host.System.import(loaderName).then(function (m) {
          return new m.DefaultLoader();
        });
      });
    }

    if (typeof host.require === 'function' && typeof host.require.version === 'string') {
      return new Promise(function (resolve, reject) {
        return host.require(['aurelia-loader-default'], function (m) {
          return resolve(new m.DefaultLoader());
        }, reject);
      });
    }

    if (isNodeLike && typeof module !== 'undefined' && typeof module.require !== 'undefined') {
      var _m = module.require('aurelia-loader-nodejs');
      return Promise.resolve(new _m.NodeJsLoader());
    }
  }

  return Promise.reject('No PLATFORM.Loader is defined and there is neither a System API (ES6) or a Require API (AMD) globally available to load your app.');
}

function initializePal(loader) {
  var type = void 0;

  var isRenderer = isNodeLike && (process.type === 'renderer' || process.versions['node-webkit']);

  if (isNodeLike && !isRenderer) {
    type = 'nodejs';
  } else if (typeof window !== 'undefined') {
    type = 'browser';
  } else if (typeof self !== 'undefined') {
    type = 'worker';
  } else {
    throw new Error('Could not determine platform implementation to load.');
  }

  return loader.loadModule('aurelia-pal-' + type).then(function (palModule) {
    return type === 'nodejs' && !__WEBPACK_IMPORTED_MODULE_1_aurelia_pal__["f" /* isInitialized */] && palModule.globalize() || palModule.initialize();
  });
}

function preparePlatform(loader) {
  var map = function map(moduleId, relativeTo) {
    return loader.normalize(moduleId, relativeTo).then(function (normalized) {
      loader.map(moduleId, normalized);
      return normalized;
    });
  };

  return initializePal(loader).then(function () {
    return loader.normalize('aurelia-bootstrapper');
  }).then(function (bootstrapperName) {
    var frameworkPromise = map('aurelia-framework', bootstrapperName);

    return Promise.all([frameworkPromise, frameworkPromise.then(function (frameworkName) {
      return map('aurelia-dependency-injection', frameworkName);
    }), map('aurelia-router', bootstrapperName), map('aurelia-logging-console', bootstrapperName)]);
  }).then(function (_ref) {
    var frameworkName = _ref[0];
    return loader.loadModule(frameworkName);
  }).then(function (fx) {
    return startResolve(function () {
      return new fx.Aurelia(loader);
    });
  });
}

function config(appHost, configModuleId, aurelia) {
  aurelia.host = appHost;
  aurelia.configModuleId = configModuleId || null;

  if (configModuleId) {
    return aurelia.loader.loadModule(configModuleId).then(function (customConfig) {
      if (!customConfig.configure) {
        throw new Error('Cannot initialize module \'' + configModuleId + '\' without a configure function.');
      }

      return customConfig.configure(aurelia);
    });
  }

  aurelia.use.standardConfiguration().developmentLogging();

  return aurelia.start().then(function () {
    return aurelia.setRoot();
  });
}

function run() {
  return ready().then(createLoader).then(preparePlatform).then(function () {
    var appHosts = host.document.querySelectorAll('[aurelia-app],[data-aurelia-app]');
    for (var i = 0, ii = appHosts.length; i < ii; ++i) {
      var appHost = appHosts[i];
      var moduleId = appHost.getAttribute('aurelia-app') || appHost.getAttribute('data-aurelia-app');
      bootstrap(config.bind(null, appHost, moduleId));
    }

    var toConsole = console.error.bind(console);
    var bootstraps = bootstrapPromises.map(function (p) {
      return p.catch(toConsole);
    });
    bootstrapPromises = null;
    return Promise.all(bootstraps);
  });
}

function bootstrap(configure) {
  var p = startPromise.then(function (factory) {
    return configure(factory());
  });
  if (bootstrapPromises) bootstrapPromises.push(p);
  return p;
}

var starting = run();
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(55)))

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(5))(49);

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_pal__ = __webpack_require__(0);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };



if (typeof FEATURE_NO_ES2015 === 'undefined') {

  (function (Object, GOPS) {
    'use strict';

    if (GOPS in Object) return;

    var setDescriptor,
        G = __WEBPACK_IMPORTED_MODULE_0_aurelia_pal__["d" /* PLATFORM */].global,
        id = 0,
        random = '' + Math.random(),
        prefix = '__\x01symbol:',
        prefixLength = prefix.length,
        internalSymbol = '__\x01symbol@@' + random,
        DP = 'defineProperty',
        DPies = 'defineProperties',
        GOPN = 'getOwnPropertyNames',
        GOPD = 'getOwnPropertyDescriptor',
        PIE = 'propertyIsEnumerable',
        gOPN = Object[GOPN],
        gOPD = Object[GOPD],
        create = Object.create,
        keys = Object.keys,
        defineProperty = Object[DP],
        $defineProperties = Object[DPies],
        descriptor = gOPD(Object, GOPN),
        ObjectProto = Object.prototype,
        hOP = ObjectProto.hasOwnProperty,
        pIE = ObjectProto[PIE],
        toString = ObjectProto.toString,
        indexOf = Array.prototype.indexOf || function (v) {
      for (var i = this.length; i-- && this[i] !== v;) {}
      return i;
    },
        addInternalIfNeeded = function addInternalIfNeeded(o, uid, enumerable) {
      if (!hOP.call(o, internalSymbol)) {
        defineProperty(o, internalSymbol, {
          enumerable: false,
          configurable: false,
          writable: false,
          value: {}
        });
      }
      o[internalSymbol]['@@' + uid] = enumerable;
    },
        createWithSymbols = function createWithSymbols(proto, descriptors) {
      var self = create(proto);
      if (descriptors !== null && (typeof descriptors === 'undefined' ? 'undefined' : _typeof(descriptors)) === 'object') {
        gOPN(descriptors).forEach(function (key) {
          if (propertyIsEnumerable.call(descriptors, key)) {
            $defineProperty(self, key, descriptors[key]);
          }
        });
      }
      return self;
    },
        copyAsNonEnumerable = function copyAsNonEnumerable(descriptor) {
      var newDescriptor = create(descriptor);
      newDescriptor.enumerable = false;
      return newDescriptor;
    },
        get = function get() {},
        onlyNonSymbols = function onlyNonSymbols(name) {
      return name != internalSymbol && !hOP.call(source, name);
    },
        onlySymbols = function onlySymbols(name) {
      return name != internalSymbol && hOP.call(source, name);
    },
        propertyIsEnumerable = function propertyIsEnumerable(key) {
      var uid = '' + key;
      return onlySymbols(uid) ? hOP.call(this, uid) && this[internalSymbol] && this[internalSymbol]['@@' + uid] : pIE.call(this, key);
    },
        setAndGetSymbol = function setAndGetSymbol(uid) {
      var descriptor = {
        enumerable: false,
        configurable: true,
        get: get,
        set: function set(value) {
          setDescriptor(this, uid, {
            enumerable: false,
            configurable: true,
            writable: true,
            value: value
          });
          addInternalIfNeeded(this, uid, true);
        }
      };
      defineProperty(ObjectProto, uid, descriptor);
      return source[uid] = defineProperty(Object(uid), 'constructor', sourceConstructor);
    },
        _Symbol = function _Symbol2(description) {
      if (this && this !== G) {
        throw new TypeError('Symbol is not a constructor');
      }
      return setAndGetSymbol(prefix.concat(description || '', random, ++id));
    },
        source = create(null),
        sourceConstructor = { value: _Symbol },
        sourceMap = function sourceMap(uid) {
      return source[uid];
    },
        $defineProperty = function defineProp(o, key, descriptor) {
      var uid = '' + key;
      if (onlySymbols(uid)) {
        setDescriptor(o, uid, descriptor.enumerable ? copyAsNonEnumerable(descriptor) : descriptor);
        addInternalIfNeeded(o, uid, !!descriptor.enumerable);
      } else {
        defineProperty(o, key, descriptor);
      }
      return o;
    },
        $getOwnPropertySymbols = function getOwnPropertySymbols(o) {
      var cof = toString.call(o);
      o = cof === '[object String]' ? o.split('') : Object(o);
      return gOPN(o).filter(onlySymbols).map(sourceMap);
    };

    descriptor.value = $defineProperty;
    defineProperty(Object, DP, descriptor);

    descriptor.value = $getOwnPropertySymbols;
    defineProperty(Object, GOPS, descriptor);

    var cachedWindowNames = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' ? Object.getOwnPropertyNames(window) : [];
    var originalObjectGetOwnPropertyNames = Object.getOwnPropertyNames;
    descriptor.value = function getOwnPropertyNames(o) {
      if (toString.call(o) === '[object Window]') {
        try {
          return originalObjectGetOwnPropertyNames(o);
        } catch (e) {
          return [].concat([], cachedWindowNames);
        }
      }
      return gOPN(o).filter(onlyNonSymbols);
    };
    defineProperty(Object, GOPN, descriptor);

    descriptor.value = function defineProperties(o, descriptors) {
      var symbols = $getOwnPropertySymbols(descriptors);
      if (symbols.length) {
        keys(descriptors).concat(symbols).forEach(function (uid) {
          if (propertyIsEnumerable.call(descriptors, uid)) {
            $defineProperty(o, uid, descriptors[uid]);
          }
        });
      } else {
        $defineProperties(o, descriptors);
      }
      return o;
    };
    defineProperty(Object, DPies, descriptor);

    descriptor.value = propertyIsEnumerable;
    defineProperty(ObjectProto, PIE, descriptor);

    descriptor.value = _Symbol;
    defineProperty(G, 'Symbol', descriptor);

    descriptor.value = function (key) {
      var uid = prefix.concat(prefix, key, random);
      return uid in ObjectProto ? source[uid] : setAndGetSymbol(uid);
    };
    defineProperty(_Symbol, 'for', descriptor);

    descriptor.value = function (symbol) {
      return hOP.call(source, symbol) ? symbol.slice(prefixLength * 2, -random.length) : void 0;
    };
    defineProperty(_Symbol, 'keyFor', descriptor);

    descriptor.value = function getOwnPropertyDescriptor(o, key) {
      var descriptor = gOPD(o, key);
      if (descriptor && onlySymbols(key)) {
        descriptor.enumerable = propertyIsEnumerable.call(o, key);
      }
      return descriptor;
    };
    defineProperty(Object, GOPD, descriptor);

    descriptor.value = function (proto, descriptors) {
      return arguments.length === 1 ? create(proto) : createWithSymbols(proto, descriptors);
    };
    defineProperty(Object, 'create', descriptor);

    descriptor.value = function () {
      var str = toString.call(this);
      return str === '[object String]' && onlySymbols(this) ? '[object Symbol]' : str;
    };
    defineProperty(ObjectProto, 'toString', descriptor);

    try {
      setDescriptor = create(defineProperty({}, prefix, {
        get: function get() {
          return defineProperty(this, prefix, { value: false })[prefix];
        }
      }))[prefix] || defineProperty;
    } catch (o_O) {
      setDescriptor = function setDescriptor(o, key, descriptor) {
        var protoDescriptor = gOPD(ObjectProto, key);
        delete ObjectProto[key];
        defineProperty(o, key, descriptor);
        defineProperty(ObjectProto, key, protoDescriptor);
      };
    }
  })(Object, 'getOwnPropertySymbols');

  (function (O, S) {
    var dP = O.defineProperty,
        ObjectProto = O.prototype,
        toString = ObjectProto.toString,
        toStringTag = 'toStringTag',
        descriptor;
    ['iterator', 'match', 'replace', 'search', 'split', 'hasInstance', 'isConcatSpreadable', 'unscopables', 'species', 'toPrimitive', toStringTag].forEach(function (name) {
      if (!(name in Symbol)) {
        dP(Symbol, name, { value: Symbol(name) });
        switch (name) {
          case toStringTag:
            descriptor = O.getOwnPropertyDescriptor(ObjectProto, 'toString');
            descriptor.value = function () {
              var str = toString.call(this),
                  tst = typeof this === 'undefined' || this === null ? undefined : this[Symbol.toStringTag];
              return typeof tst === 'undefined' ? str : '[object ' + tst + ']';
            };
            dP(ObjectProto, 'toString', descriptor);
            break;
        }
      }
    });
  })(Object, Symbol);

  (function (Si, AP, SP) {

    function returnThis() {
      return this;
    }

    if (!AP[Si]) AP[Si] = function () {
      var i = 0,
          self = this,
          iterator = {
        next: function next() {
          var done = self.length <= i;
          return done ? { done: done } : { done: done, value: self[i++] };
        }
      };
      iterator[Si] = returnThis;
      return iterator;
    };

    if (!SP[Si]) SP[Si] = function () {
      var fromCodePoint = String.fromCodePoint,
          self = this,
          i = 0,
          length = self.length,
          iterator = {
        next: function next() {
          var done = length <= i,
              c = done ? '' : fromCodePoint(self.codePointAt(i));
          i += c.length;
          return done ? { done: done } : { done: done, value: c };
        }
      };
      iterator[Si] = returnThis;
      return iterator;
    };
  })(Symbol.iterator, Array.prototype, String.prototype);
}

if (typeof FEATURE_NO_ES2015 === 'undefined') {

  Number.isNaN = Number.isNaN || function (value) {
    return value !== value;
  };

  Number.isFinite = Number.isFinite || function (value) {
    return typeof value === "number" && isFinite(value);
  };
}

if (!String.prototype.endsWith || function () {
  try {
    return !"ab".endsWith("a", 1);
  } catch (e) {
    return true;
  }
}()) {
  String.prototype.endsWith = function (searchString, position) {
    var subjectString = this.toString();
    if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
      position = subjectString.length;
    }
    position -= searchString.length;
    var lastIndex = subjectString.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
  };
}

if (!String.prototype.startsWith || function () {
  try {
    return !"ab".startsWith("b", 1);
  } catch (e) {
    return true;
  }
}()) {
  String.prototype.startsWith = function (searchString, position) {
    position = position || 0;
    return this.substr(position, searchString.length) === searchString;
  };
}

if (typeof FEATURE_NO_ES2015 === 'undefined') {

  if (!Array.from) {
    Array.from = function () {
      var toInteger = function toInteger(it) {
        return isNaN(it = +it) ? 0 : (it > 0 ? Math.floor : Math.ceil)(it);
      };
      var toLength = function toLength(it) {
        return it > 0 ? Math.min(toInteger(it), 0x1fffffffffffff) : 0;
      };
      var iterCall = function iterCall(iter, fn, val, index) {
        try {
          return fn(val, index);
        } catch (E) {
          if (typeof iter.return == 'function') iter.return();
          throw E;
        }
      };

      return function from(arrayLike) {
        var O = Object(arrayLike),
            C = typeof this == 'function' ? this : Array,
            aLen = arguments.length,
            mapfn = aLen > 1 ? arguments[1] : undefined,
            mapping = mapfn !== undefined,
            index = 0,
            iterFn = O[Symbol.iterator],
            length,
            result,
            step,
            iterator;
        if (mapping) mapfn = mapfn.bind(aLen > 2 ? arguments[2] : undefined);
        if (iterFn != undefined && !Array.isArray(arrayLike)) {
          for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
            result[index] = mapping ? iterCall(iterator, mapfn, step.value, index) : step.value;
          }
        } else {
          length = toLength(O.length);
          for (result = new C(length); length > index; index++) {
            result[index] = mapping ? mapfn(O[index], index) : O[index];
          }
        }
        result.length = index;
        return result;
      };
    }();
  }

  if (!Array.prototype.find) {
    Object.defineProperty(Array.prototype, 'find', {
      configurable: true,
      writable: true,
      enumerable: false,
      value: function value(predicate) {
        if (this === null) {
          throw new TypeError('Array.prototype.find called on null or undefined');
        }
        if (typeof predicate !== 'function') {
          throw new TypeError('predicate must be a function');
        }
        var list = Object(this);
        var length = list.length >>> 0;
        var thisArg = arguments[1];
        var value;

        for (var i = 0; i < length; i++) {
          value = list[i];
          if (predicate.call(thisArg, value, i, list)) {
            return value;
          }
        }
        return undefined;
      }
    });
  }

  if (!Array.prototype.findIndex) {
    Object.defineProperty(Array.prototype, 'findIndex', {
      configurable: true,
      writable: true,
      enumerable: false,
      value: function value(predicate) {
        if (this === null) {
          throw new TypeError('Array.prototype.findIndex called on null or undefined');
        }
        if (typeof predicate !== 'function') {
          throw new TypeError('predicate must be a function');
        }
        var list = Object(this);
        var length = list.length >>> 0;
        var thisArg = arguments[1];
        var value;

        for (var i = 0; i < length; i++) {
          value = list[i];
          if (predicate.call(thisArg, value, i, list)) {
            return i;
          }
        }
        return -1;
      }
    });
  }
}

if (typeof FEATURE_NO_ES2016 === 'undefined' && !Array.prototype.includes) {
  Object.defineProperty(Array.prototype, 'includes', {
    configurable: true,
    writable: true,
    enumerable: false,
    value: function value(searchElement) {
      var O = Object(this);
      var len = parseInt(O.length) || 0;
      if (len === 0) {
        return false;
      }
      var n = parseInt(arguments[1]) || 0;
      var k;
      if (n >= 0) {
        k = n;
      } else {
        k = len + n;
        if (k < 0) {
          k = 0;
        }
      }
      var currentElement;
      while (k < len) {
        currentElement = O[k];
        if (searchElement === currentElement || searchElement !== searchElement && currentElement !== currentElement) {
          return true;
        }
        k++;
      }
      return false;
    }
  });
}

if (typeof FEATURE_NO_ES2015 === 'undefined') {

  (function () {
    var needsFix = false;

    try {
      var s = Object.keys('a');
      needsFix = s.length !== 1 || s[0] !== '0';
    } catch (e) {
      needsFix = true;
    }

    if (needsFix) {
      Object.keys = function () {
        var hasOwnProperty = Object.prototype.hasOwnProperty,
            hasDontEnumBug = !{ toString: null }.propertyIsEnumerable('toString'),
            dontEnums = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'],
            dontEnumsLength = dontEnums.length;

        return function (obj) {
          if (obj === undefined || obj === null) {
            throw TypeError('Cannot convert undefined or null to object');
          }

          obj = Object(obj);

          var result = [],
              prop,
              i;

          for (prop in obj) {
            if (hasOwnProperty.call(obj, prop)) {
              result.push(prop);
            }
          }

          if (hasDontEnumBug) {
            for (i = 0; i < dontEnumsLength; i++) {
              if (hasOwnProperty.call(obj, dontEnums[i])) {
                result.push(dontEnums[i]);
              }
            }
          }

          return result;
        };
      }();
    }
  })();

  (function (O) {
    if ('assign' in O) {
      return;
    }

    O.defineProperty(O, 'assign', {
      configurable: true,
      writable: true,
      value: function () {
        var gOPS = O.getOwnPropertySymbols,
            pIE = O.propertyIsEnumerable,
            filterOS = gOPS ? function (self) {
          return gOPS(self).filter(pIE, self);
        } : function () {
          return Array.prototype;
        };

        return function assign(where) {
          if (gOPS && !(where instanceof O)) {
            console.warn('problematic Symbols', where);
          }

          function set(keyOrSymbol) {
            where[keyOrSymbol] = arg[keyOrSymbol];
          }

          for (var i = 1, ii = arguments.length; i < ii; ++i) {
            var arg = arguments[i];

            if (arg === null || arg === undefined) {
              continue;
            }

            O.keys(arg).concat(filterOS(arg)).forEach(set);
          }

          return where;
        };
      }()
    });
  })(Object);
}

if (typeof FEATURE_NO_ES2015 === 'undefined') {

  (function (global) {
    var i;

    var defineProperty = Object.defineProperty,
        is = function is(a, b) {
      return a === b || a !== a && b !== b;
    };

    if (typeof WeakMap == 'undefined') {
      global.WeakMap = createCollection({
        'delete': sharedDelete,

        clear: sharedClear,

        get: sharedGet,

        has: mapHas,

        set: sharedSet
      }, true);
    }

    if (typeof Map == 'undefined' || typeof new Map().values !== 'function' || !new Map().values().next) {
      var _createCollection;

      global.Map = createCollection((_createCollection = {
        'delete': sharedDelete,

        has: mapHas,

        get: sharedGet,

        set: sharedSet,

        keys: sharedKeys,

        values: sharedValues,

        entries: mapEntries,

        forEach: sharedForEach,

        clear: sharedClear
      }, _createCollection[Symbol.iterator] = mapEntries, _createCollection));
    }

    if (typeof Set == 'undefined' || typeof new Set().values !== 'function' || !new Set().values().next) {
      var _createCollection2;

      global.Set = createCollection((_createCollection2 = {
        has: setHas,

        add: sharedAdd,

        'delete': sharedDelete,

        clear: sharedClear,

        keys: sharedValues,
        values: sharedValues,

        entries: setEntries,

        forEach: sharedForEach
      }, _createCollection2[Symbol.iterator] = sharedValues, _createCollection2));
    }

    if (typeof WeakSet == 'undefined') {
      global.WeakSet = createCollection({
        'delete': sharedDelete,

        add: sharedAdd,

        clear: sharedClear,

        has: setHas
      }, true);
    }

    function createCollection(proto, objectOnly) {
      function Collection(a) {
        if (!this || this.constructor !== Collection) return new Collection(a);
        this._keys = [];
        this._values = [];
        this._itp = [];
        this.objectOnly = objectOnly;

        if (a) init.call(this, a);
      }

      if (!objectOnly) {
        defineProperty(proto, 'size', {
          get: sharedSize
        });
      }

      proto.constructor = Collection;
      Collection.prototype = proto;

      return Collection;
    }

    function init(a) {
      var i;

      if (this.add) a.forEach(this.add, this);else a.forEach(function (a) {
          this.set(a[0], a[1]);
        }, this);
    }

    function sharedDelete(key) {
      if (this.has(key)) {
        this._keys.splice(i, 1);
        this._values.splice(i, 1);

        this._itp.forEach(function (p) {
          if (i < p[0]) p[0]--;
        });
      }

      return -1 < i;
    };

    function sharedGet(key) {
      return this.has(key) ? this._values[i] : undefined;
    }

    function has(list, key) {
      if (this.objectOnly && key !== Object(key)) throw new TypeError("Invalid value used as weak collection key");

      if (key != key || key === 0) for (i = list.length; i-- && !is(list[i], key);) {} else i = list.indexOf(key);
      return -1 < i;
    }

    function setHas(value) {
      return has.call(this, this._values, value);
    }

    function mapHas(value) {
      return has.call(this, this._keys, value);
    }

    function sharedSet(key, value) {
      this.has(key) ? this._values[i] = value : this._values[this._keys.push(key) - 1] = value;
      return this;
    }

    function sharedAdd(value) {
      if (!this.has(value)) this._values.push(value);
      return this;
    }

    function sharedClear() {
      (this._keys || 0).length = this._values.length = 0;
    }

    function sharedKeys() {
      return sharedIterator(this._itp, this._keys);
    }

    function sharedValues() {
      return sharedIterator(this._itp, this._values);
    }

    function mapEntries() {
      return sharedIterator(this._itp, this._keys, this._values);
    }

    function setEntries() {
      return sharedIterator(this._itp, this._values, this._values);
    }

    function sharedIterator(itp, array, array2) {
      var _ref;

      var p = [0],
          done = false;
      itp.push(p);
      return _ref = {}, _ref[Symbol.iterator] = function () {
        return this;
      }, _ref.next = function next() {
        var v,
            k = p[0];
        if (!done && k < array.length) {
          v = array2 ? [array[k], array2[k]] : array[k];
          p[0]++;
        } else {
          done = true;
          itp.splice(itp.indexOf(p), 1);
        }
        return { done: done, value: v };
      }, _ref;
    }

    function sharedSize() {
      return this._values.length;
    }

    function sharedForEach(callback, context) {
      var it = this.entries();
      for (;;) {
        var r = it.next();
        if (r.done) break;
        callback.call(context, r.value[1], r.value[0], this);
      }
    }
  })(__WEBPACK_IMPORTED_MODULE_0_aurelia_pal__["d" /* PLATFORM */].global);
}

if (typeof FEATURE_NO_ES2015 === 'undefined') {
  (function () {

    var bind = Function.prototype.bind;

    if (typeof __WEBPACK_IMPORTED_MODULE_0_aurelia_pal__["d" /* PLATFORM */].global.Reflect === 'undefined') {
      __WEBPACK_IMPORTED_MODULE_0_aurelia_pal__["d" /* PLATFORM */].global.Reflect = {};
    }

    if (typeof Reflect.defineProperty !== 'function') {
      Reflect.defineProperty = function (target, propertyKey, descriptor) {
        if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' ? target === null : typeof target !== 'function') {
          throw new TypeError('Reflect.defineProperty called on non-object');
        }
        try {
          Object.defineProperty(target, propertyKey, descriptor);
          return true;
        } catch (e) {
          return false;
        }
      };
    }

    if (typeof Reflect.construct !== 'function') {
      Reflect.construct = function (Target, args) {
        if (args) {
          switch (args.length) {
            case 0:
              return new Target();
            case 1:
              return new Target(args[0]);
            case 2:
              return new Target(args[0], args[1]);
            case 3:
              return new Target(args[0], args[1], args[2]);
            case 4:
              return new Target(args[0], args[1], args[2], args[3]);
          }
        }

        var a = [null];
        a.push.apply(a, args);
        return new (bind.apply(Target, a))();
      };
    }

    if (typeof Reflect.ownKeys !== 'function') {
      Reflect.ownKeys = function (o) {
        return Object.getOwnPropertyNames(o).concat(Object.getOwnPropertySymbols(o));
      };
    }
  })();
}

if (typeof FEATURE_NO_ESNEXT === 'undefined') {
  (function () {

    var emptyMetadata = Object.freeze({});
    var metadataContainerKey = '__metadata__';

    if (typeof Reflect.getOwnMetadata !== 'function') {
      Reflect.getOwnMetadata = function (metadataKey, target, targetKey) {
        if (target.hasOwnProperty(metadataContainerKey)) {
          return (target[metadataContainerKey][targetKey] || emptyMetadata)[metadataKey];
        }
      };
    }

    if (typeof Reflect.defineMetadata !== 'function') {
      Reflect.defineMetadata = function (metadataKey, metadataValue, target, targetKey) {
        var metadataContainer = target.hasOwnProperty(metadataContainerKey) ? target[metadataContainerKey] : target[metadataContainerKey] = {};
        var targetContainer = metadataContainer[targetKey] || (metadataContainer[targetKey] = {});
        targetContainer[metadataKey] = metadataValue;
      };
    }

    if (typeof Reflect.metadata !== 'function') {
      Reflect.metadata = function (metadataKey, metadataValue) {
        return function (target, targetKey) {
          Reflect.defineMetadata(metadataKey, metadataValue, target, targetKey);
        };
      };
    }
  })();
}

/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Origin; });
/* unused harmony export decorators */
/* unused harmony export deprecated */
/* harmony export (immutable) */ __webpack_exports__["c"] = mixin;
/* harmony export (immutable) */ __webpack_exports__["d"] = protocol;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_pal__ = __webpack_require__(0);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };





function isObject(val) {
  return val && (typeof val === 'function' || (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object');
}

var metadata = {
  resource: 'aurelia:resource',
  paramTypes: 'design:paramtypes',
  propertyType: 'design:type',
  properties: 'design:properties',
  get: function get(metadataKey, target, targetKey) {
    if (!isObject(target)) {
      return undefined;
    }
    var result = metadata.getOwn(metadataKey, target, targetKey);
    return result === undefined ? metadata.get(metadataKey, Object.getPrototypeOf(target), targetKey) : result;
  },
  getOwn: function getOwn(metadataKey, target, targetKey) {
    if (!isObject(target)) {
      return undefined;
    }
    return Reflect.getOwnMetadata(metadataKey, target, targetKey);
  },
  define: function define(metadataKey, metadataValue, target, targetKey) {
    Reflect.defineMetadata(metadataKey, metadataValue, target, targetKey);
  },
  getOrCreateOwn: function getOrCreateOwn(metadataKey, Type, target, targetKey) {
    var result = metadata.getOwn(metadataKey, target, targetKey);

    if (result === undefined) {
      result = new Type();
      Reflect.defineMetadata(metadataKey, result, target, targetKey);
    }

    return result;
  }
};

var originStorage = new Map();
var unknownOrigin = Object.freeze({ moduleId: undefined, moduleMember: undefined });

var Origin = function () {
  function Origin(moduleId, moduleMember) {
    

    this.moduleId = moduleId;
    this.moduleMember = moduleMember;
  }

  Origin.get = function get(fn) {
    var origin = originStorage.get(fn);

    if (origin === undefined) {
      __WEBPACK_IMPORTED_MODULE_0_aurelia_pal__["d" /* PLATFORM */].eachModule(function (key, value) {
        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
          for (var name in value) {
            var exp = value[name];
            if (exp === fn) {
              originStorage.set(fn, origin = new Origin(key, name));
              return true;
            }
          }
        }

        if (value === fn) {
          originStorage.set(fn, origin = new Origin(key, 'default'));
          return true;
        }

        return false;
      });
    }

    return origin || unknownOrigin;
  };

  Origin.set = function set(fn, origin) {
    originStorage.set(fn, origin);
  };

  return Origin;
}();

function decorators() {
  for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
    rest[_key] = arguments[_key];
  }

  var applicator = function applicator(target, key, descriptor) {
    var i = rest.length;

    if (key) {
      descriptor = descriptor || {
        value: target[key],
        writable: true,
        configurable: true,
        enumerable: true
      };

      while (i--) {
        descriptor = rest[i](target, key, descriptor) || descriptor;
      }

      Object.defineProperty(target, key, descriptor);
    } else {
      while (i--) {
        target = rest[i](target) || target;
      }
    }

    return target;
  };

  applicator.on = applicator;
  return applicator;
}

function deprecated(optionsOrTarget, maybeKey, maybeDescriptor) {
  function decorator(target, key, descriptor) {
    var methodSignature = target.constructor.name + '#' + key;
    var options = maybeKey ? {} : optionsOrTarget || {};
    var message = 'DEPRECATION - ' + methodSignature;

    if (typeof descriptor.value !== 'function') {
      throw new SyntaxError('Only methods can be marked as deprecated.');
    }

    if (options.message) {
      message += ' - ' + options.message;
    }

    return _extends({}, descriptor, {
      value: function deprecationWrapper() {
        if (options.error) {
          throw new Error(message);
        } else {
          console.warn(message);
        }

        return descriptor.value.apply(this, arguments);
      }
    });
  }

  return maybeKey ? decorator(optionsOrTarget, maybeKey, maybeDescriptor) : decorator;
}

function mixin(behavior) {
  var instanceKeys = Object.keys(behavior);

  function _mixin(possible) {
    var decorator = function decorator(target) {
      var resolvedTarget = typeof target === 'function' ? target.prototype : target;

      var i = instanceKeys.length;
      while (i--) {
        var property = instanceKeys[i];
        Object.defineProperty(resolvedTarget, property, {
          value: behavior[property],
          writable: true
        });
      }
    };

    return possible ? decorator(possible) : decorator;
  }

  return _mixin;
}

function alwaysValid() {
  return true;
}
function noCompose() {}

function ensureProtocolOptions(options) {
  if (options === undefined) {
    options = {};
  } else if (typeof options === 'function') {
    options = {
      validate: options
    };
  }

  if (!options.validate) {
    options.validate = alwaysValid;
  }

  if (!options.compose) {
    options.compose = noCompose;
  }

  return options;
}

function createProtocolValidator(validate) {
  return function (target) {
    var result = validate(target);
    return result === true;
  };
}

function createProtocolAsserter(name, validate) {
  return function (target) {
    var result = validate(target);
    if (result !== true) {
      throw new Error(result || name + ' was not correctly implemented.');
    }
  };
}

function protocol(name, options) {
  options = ensureProtocolOptions(options);

  var result = function result(target) {
    var resolvedTarget = typeof target === 'function' ? target.prototype : target;

    options.compose(resolvedTarget);
    result.assert(resolvedTarget);

    Object.defineProperty(resolvedTarget, 'protocol:' + name, {
      enumerable: false,
      configurable: false,
      writable: false,
      value: true
    });
  };

  result.validate = createProtocolValidator(options.validate);
  result.assert = createProtocolAsserter(name, options.validate);

  return result;
}

protocol.create = function (name, options) {
  options = ensureProtocolOptions(options);
  var hidden = 'protocol:' + name;
  var result = function result(target) {
    var decorator = protocol(name, options);
    return target ? decorator(target) : decorator;
  };

  result.decorates = function (obj) {
    return obj[hidden] === true;
  };
  result.validate = createProtocolValidator(options.validate);
  result.assert = createProtocolAsserter(name, options.validate);

  return result;
};

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = relativeToFile;
/* harmony export (immutable) */ __webpack_exports__["b"] = join;
/* harmony export (immutable) */ __webpack_exports__["a"] = buildQueryString;
/* harmony export (immutable) */ __webpack_exports__["c"] = parseQueryString;
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

function trimDots(ary) {
  for (var i = 0; i < ary.length; ++i) {
    var part = ary[i];
    if (part === '.') {
      ary.splice(i, 1);
      i -= 1;
    } else if (part === '..') {
      if (i === 0 || i === 1 && ary[2] === '..' || ary[i - 1] === '..') {
        continue;
      } else if (i > 0) {
        ary.splice(i - 1, 2);
        i -= 2;
      }
    }
  }
}

function relativeToFile(name, file) {
  var fileParts = file && file.split('/');
  var nameParts = name.trim().split('/');

  if (nameParts[0].charAt(0) === '.' && fileParts) {
    var normalizedBaseParts = fileParts.slice(0, fileParts.length - 1);
    nameParts.unshift.apply(nameParts, normalizedBaseParts);
  }

  trimDots(nameParts);

  return nameParts.join('/');
}

function join(path1, path2) {
  if (!path1) {
    return path2;
  }

  if (!path2) {
    return path1;
  }

  var schemeMatch = path1.match(/^([^/]*?:)\//);
  var scheme = schemeMatch && schemeMatch.length > 0 ? schemeMatch[1] : '';
  path1 = path1.substr(scheme.length);

  var urlPrefix = void 0;
  if (path1.indexOf('///') === 0 && scheme === 'file:') {
    urlPrefix = '///';
  } else if (path1.indexOf('//') === 0) {
    urlPrefix = '//';
  } else if (path1.indexOf('/') === 0) {
    urlPrefix = '/';
  } else {
    urlPrefix = '';
  }

  var trailingSlash = path2.slice(-1) === '/' ? '/' : '';

  var url1 = path1.split('/');
  var url2 = path2.split('/');
  var url3 = [];

  for (var i = 0, ii = url1.length; i < ii; ++i) {
    if (url1[i] === '..') {
      url3.pop();
    } else if (url1[i] === '.' || url1[i] === '') {
      continue;
    } else {
      url3.push(url1[i]);
    }
  }

  for (var _i = 0, _ii = url2.length; _i < _ii; ++_i) {
    if (url2[_i] === '..') {
      url3.pop();
    } else if (url2[_i] === '.' || url2[_i] === '') {
      continue;
    } else {
      url3.push(url2[_i]);
    }
  }

  return scheme + urlPrefix + url3.join('/') + trailingSlash;
}

var encode = encodeURIComponent;
var encodeKey = function encodeKey(k) {
  return encode(k).replace('%24', '$');
};

function buildParam(key, value, traditional) {
  var result = [];
  if (value === null || value === undefined) {
    return result;
  }
  if (Array.isArray(value)) {
    for (var i = 0, l = value.length; i < l; i++) {
      if (traditional) {
        result.push(encodeKey(key) + '=' + encode(value[i]));
      } else {
        var arrayKey = key + '[' + (_typeof(value[i]) === 'object' && value[i] !== null ? i : '') + ']';
        result = result.concat(buildParam(arrayKey, value[i]));
      }
    }
  } else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && !traditional) {
    for (var propertyName in value) {
      result = result.concat(buildParam(key + '[' + propertyName + ']', value[propertyName]));
    }
  } else {
    result.push(encodeKey(key) + '=' + encode(value));
  }
  return result;
}

function buildQueryString(params, traditional) {
  var pairs = [];
  var keys = Object.keys(params || {}).sort();
  for (var i = 0, len = keys.length; i < len; i++) {
    var key = keys[i];
    pairs = pairs.concat(buildParam(key, params[key], traditional));
  }

  if (pairs.length === 0) {
    return '';
  }

  return pairs.join('&');
}

function processScalarParam(existedParam, value) {
  if (Array.isArray(existedParam)) {
    existedParam.push(value);
    return existedParam;
  }
  if (existedParam !== undefined) {
    return [existedParam, value];
  }

  return value;
}

function parseComplexParam(queryParams, keys, value) {
  var currentParams = queryParams;
  var keysLastIndex = keys.length - 1;
  for (var j = 0; j <= keysLastIndex; j++) {
    var key = keys[j] === '' ? currentParams.length : keys[j];
    if (j < keysLastIndex) {
      var prevValue = !currentParams[key] || _typeof(currentParams[key]) === 'object' ? currentParams[key] : [currentParams[key]];
      currentParams = currentParams[key] = prevValue || (isNaN(keys[j + 1]) ? {} : []);
    } else {
      currentParams = currentParams[key] = value;
    }
  }
}

function parseQueryString(queryString) {
  var queryParams = {};
  if (!queryString || typeof queryString !== 'string') {
    return queryParams;
  }

  var query = queryString;
  if (query.charAt(0) === '?') {
    query = query.substr(1);
  }

  var pairs = query.replace(/\+/g, ' ').split('&');
  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i].split('=');
    var key = decodeURIComponent(pair[0]);
    if (!key) {
      continue;
    }

    var keys = key.split('][');
    var keysLastIndex = keys.length - 1;

    if (/\[/.test(keys[0]) && /\]$/.test(keys[keysLastIndex])) {
      keys[keysLastIndex] = keys[keysLastIndex].replace(/\]$/, '');
      keys = keys.shift().split('[').concat(keys);
      keysLastIndex = keys.length - 1;
    } else {
      keysLastIndex = 0;
    }

    if (pair.length >= 2) {
      var value = pair[1] ? decodeURIComponent(pair[1]) : '';
      if (keysLastIndex) {
        parseComplexParam(queryParams, keys, value);
      } else {
        queryParams[key] = processScalarParam(queryParams[key], value);
      }
    } else {
      queryParams[key] = true;
    }
  }
  return queryParams;
}

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["h"] = updateOverrideContexts;
/* harmony export (immutable) */ __webpack_exports__["a"] = createFullOverrideContext;
/* harmony export (immutable) */ __webpack_exports__["g"] = updateOverrideContext;
/* harmony export (immutable) */ __webpack_exports__["b"] = getItemsSourceExpression;
/* harmony export (immutable) */ __webpack_exports__["e"] = unwrapExpression;
/* harmony export (immutable) */ __webpack_exports__["d"] = isOneTime;
/* harmony export (immutable) */ __webpack_exports__["f"] = updateOneTimeBinding;
/* harmony export (immutable) */ __webpack_exports__["c"] = indexOf;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_binding__ = __webpack_require__(3);


var oneTime = __WEBPACK_IMPORTED_MODULE_0_aurelia_binding__["n" /* bindingMode */].oneTime;

function updateOverrideContexts(views, startIndex) {
  var length = views.length;

  if (startIndex > 0) {
    startIndex = startIndex - 1;
  }

  for (; startIndex < length; ++startIndex) {
    updateOverrideContext(views[startIndex].overrideContext, startIndex, length);
  }
}

function createFullOverrideContext(repeat, data, index, length, key) {
  var bindingContext = {};
  var overrideContext = Object(__WEBPACK_IMPORTED_MODULE_0_aurelia_binding__["q" /* createOverrideContext */])(bindingContext, repeat.scope.overrideContext);

  if (typeof key !== 'undefined') {
    bindingContext[repeat.key] = key;
    bindingContext[repeat.value] = data;
  } else {
    bindingContext[repeat.local] = data;
  }
  updateOverrideContext(overrideContext, index, length);
  return overrideContext;
}

function updateOverrideContext(overrideContext, index, length) {
  var first = index === 0;
  var last = index === length - 1;
  var even = index % 2 === 0;

  overrideContext.$index = index;
  overrideContext.$first = first;
  overrideContext.$last = last;
  overrideContext.$middle = !(first || last);
  overrideContext.$odd = !even;
  overrideContext.$even = even;
}

function getItemsSourceExpression(instruction, attrName) {
  return instruction.behaviorInstructions.filter(function (bi) {
    return bi.originalAttrName === attrName;
  })[0].attributes.items.sourceExpression;
}

function unwrapExpression(expression) {
  var unwrapped = false;
  while (expression instanceof __WEBPACK_IMPORTED_MODULE_0_aurelia_binding__["a" /* BindingBehavior */]) {
    expression = expression.expression;
  }
  while (expression instanceof __WEBPACK_IMPORTED_MODULE_0_aurelia_binding__["l" /* ValueConverter */]) {
    expression = expression.expression;
    unwrapped = true;
  }
  return unwrapped ? expression : null;
}

function isOneTime(expression) {
  while (expression instanceof __WEBPACK_IMPORTED_MODULE_0_aurelia_binding__["a" /* BindingBehavior */]) {
    if (expression.name === 'oneTime') {
      return true;
    }
    expression = expression.expression;
  }
  return false;
}

function updateOneTimeBinding(binding) {
  if (binding.call && binding.mode === oneTime) {
    binding.call(__WEBPACK_IMPORTED_MODULE_0_aurelia_binding__["u" /* sourceContext */]);
  } else if (binding.updateOneTimeBindings) {
    binding.updateOneTimeBindings();
  }
}

function indexOf(array, item, matcher, startIndex) {
  if (!matcher) {
    return array.indexOf(item);
  }
  var length = array.length;
  for (var index = startIndex || 0; index < length; index++) {
    if (matcher(array[index], item)) {
      return index;
    }
  }
  return -1;
}

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskQueue; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_pal__ = __webpack_require__(0);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };





var hasSetImmediate = typeof setImmediate === 'function';
var stackSeparator = '\nEnqueued in TaskQueue by:\n';
var microStackSeparator = '\nEnqueued in MicroTaskQueue by:\n';

function makeRequestFlushFromMutationObserver(flush) {
  var toggle = 1;
  var observer = __WEBPACK_IMPORTED_MODULE_0_aurelia_pal__["b" /* DOM */].createMutationObserver(flush);
  var node = __WEBPACK_IMPORTED_MODULE_0_aurelia_pal__["b" /* DOM */].createTextNode('');
  observer.observe(node, { characterData: true });
  return function requestFlush() {
    toggle = -toggle;
    node.data = toggle;
  };
}

function makeRequestFlushFromTimer(flush) {
  return function requestFlush() {
    var timeoutHandle = setTimeout(handleFlushTimer, 0);

    var intervalHandle = setInterval(handleFlushTimer, 50);
    function handleFlushTimer() {
      clearTimeout(timeoutHandle);
      clearInterval(intervalHandle);
      flush();
    }
  };
}

function onError(error, task, longStacks) {
  if (longStacks && task.stack && (typeof error === 'undefined' ? 'undefined' : _typeof(error)) === 'object' && error !== null) {
    error.stack = filterFlushStack(error.stack) + task.stack;
  }

  if ('onError' in task) {
    task.onError(error);
  } else if (hasSetImmediate) {
    setImmediate(function () {
      throw error;
    });
  } else {
    setTimeout(function () {
      throw error;
    }, 0);
  }
}

var TaskQueue = function () {
  function TaskQueue() {
    var _this = this;

    

    this.flushing = false;
    this.longStacks = false;

    this.microTaskQueue = [];
    this.microTaskQueueCapacity = 1024;
    this.taskQueue = [];

    if (__WEBPACK_IMPORTED_MODULE_0_aurelia_pal__["c" /* FEATURE */].mutationObserver) {
      this.requestFlushMicroTaskQueue = makeRequestFlushFromMutationObserver(function () {
        return _this.flushMicroTaskQueue();
      });
    } else {
      this.requestFlushMicroTaskQueue = makeRequestFlushFromTimer(function () {
        return _this.flushMicroTaskQueue();
      });
    }

    this.requestFlushTaskQueue = makeRequestFlushFromTimer(function () {
      return _this.flushTaskQueue();
    });
  }

  TaskQueue.prototype._flushQueue = function _flushQueue(queue, capacity) {
    var index = 0;
    var task = void 0;

    try {
      this.flushing = true;
      while (index < queue.length) {
        task = queue[index];
        if (this.longStacks) {
          this.stack = typeof task.stack === 'string' ? task.stack : undefined;
        }
        task.call();
        index++;

        if (index > capacity) {
          for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
            queue[scan] = queue[scan + index];
          }

          queue.length -= index;
          index = 0;
        }
      }
    } catch (error) {
      onError(error, task, this.longStacks);
    } finally {
      this.flushing = false;
    }
  };

  TaskQueue.prototype.queueMicroTask = function queueMicroTask(task) {
    if (this.microTaskQueue.length < 1) {
      this.requestFlushMicroTaskQueue();
    }

    if (this.longStacks) {
      task.stack = this.prepareQueueStack(microStackSeparator);
    }

    this.microTaskQueue.push(task);
  };

  TaskQueue.prototype.queueTask = function queueTask(task) {
    if (this.taskQueue.length < 1) {
      this.requestFlushTaskQueue();
    }

    if (this.longStacks) {
      task.stack = this.prepareQueueStack(stackSeparator);
    }

    this.taskQueue.push(task);
  };

  TaskQueue.prototype.flushTaskQueue = function flushTaskQueue() {
    var queue = this.taskQueue;
    this.taskQueue = [];
    this._flushQueue(queue, Number.MAX_VALUE);
  };

  TaskQueue.prototype.flushMicroTaskQueue = function flushMicroTaskQueue() {
    var queue = this.microTaskQueue;
    this._flushQueue(queue, this.microTaskQueueCapacity);
    queue.length = 0;
  };

  TaskQueue.prototype.prepareQueueStack = function prepareQueueStack(separator) {
    var stack = separator + filterQueueStack(captureStack());

    if (typeof this.stack === 'string') {
      stack = filterFlushStack(stack) + this.stack;
    }

    return stack;
  };

  return TaskQueue;
}();

function captureStack() {
  var error = new Error();

  if (error.stack) {
    return error.stack;
  }

  try {
    throw error;
  } catch (e) {
    return e.stack;
  }
}

function filterQueueStack(stack) {
  return stack.replace(/^[\s\S]*?\bqueue(Micro)?Task\b[^\n]*\n/, '');
}

function filterFlushStack(stack) {
  var index = stack.lastIndexOf('flushMicroTaskQueue');

  if (index < 0) {
    index = stack.lastIndexOf('flushTaskQueue');
    if (index < 0) {
      return stack;
    }
  }

  index = stack.lastIndexOf('\n', index);

  return index < 0 ? stack : stack.substr(0, index);
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(36).setImmediate))

/***/ }),

/***/ "aurelia-bootstrap":
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(5))(102);

/***/ }),

/***/ "aurelia-event-aggregator":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventAggregator; });
/* unused harmony export includeEventsIn */
/* harmony export (immutable) */ __webpack_exports__["configure"] = configure;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_logging__ = __webpack_require__(4);




var logger = __WEBPACK_IMPORTED_MODULE_0_aurelia_logging__["getLogger"]('event-aggregator');

var Handler = function () {
  function Handler(messageType, callback) {
    

    this.messageType = messageType;
    this.callback = callback;
  }

  Handler.prototype.handle = function handle(message) {
    if (message instanceof this.messageType) {
      this.callback.call(null, message);
    }
  };

  return Handler;
}();

function invokeCallback(callback, data, event) {
  try {
    callback(data, event);
  } catch (e) {
    logger.error(e);
  }
}

function invokeHandler(handler, data) {
  try {
    handler.handle(data);
  } catch (e) {
    logger.error(e);
  }
}

var EventAggregator = function () {
  function EventAggregator() {
    

    this.eventLookup = {};
    this.messageHandlers = [];
  }

  EventAggregator.prototype.publish = function publish(event, data) {
    var subscribers = void 0;
    var i = void 0;

    if (!event) {
      throw new Error('Event was invalid.');
    }

    if (typeof event === 'string') {
      subscribers = this.eventLookup[event];
      if (subscribers) {
        subscribers = subscribers.slice();
        i = subscribers.length;

        while (i--) {
          invokeCallback(subscribers[i], data, event);
        }
      }
    } else {
      subscribers = this.messageHandlers.slice();
      i = subscribers.length;

      while (i--) {
        invokeHandler(subscribers[i], event);
      }
    }
  };

  EventAggregator.prototype.subscribe = function subscribe(event, callback) {
    var handler = void 0;
    var subscribers = void 0;

    if (!event) {
      throw new Error('Event channel/type was invalid.');
    }

    if (typeof event === 'string') {
      handler = callback;
      subscribers = this.eventLookup[event] || (this.eventLookup[event] = []);
    } else {
      handler = new Handler(event, callback);
      subscribers = this.messageHandlers;
    }

    subscribers.push(handler);

    return {
      dispose: function dispose() {
        var idx = subscribers.indexOf(handler);
        if (idx !== -1) {
          subscribers.splice(idx, 1);
        }
      }
    };
  };

  EventAggregator.prototype.subscribeOnce = function subscribeOnce(event, callback) {
    var sub = this.subscribe(event, function (a, b) {
      sub.dispose();
      return callback(a, b);
    });

    return sub;
  };

  return EventAggregator;
}();

function includeEventsIn(obj) {
  var ea = new EventAggregator();

  obj.subscribeOnce = function (event, callback) {
    return ea.subscribeOnce(event, callback);
  };

  obj.subscribe = function (event, callback) {
    return ea.subscribe(event, callback);
  };

  obj.publish = function (event, data) {
    ea.publish(event, data);
  };

  return ea;
}

function configure(config) {
  config.instance(EventAggregator, includeEventsIn(config.aurelia));
}

/***/ }),

/***/ "aurelia-framework":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Aurelia", function() { return Aurelia; });
/* unused harmony export FrameworkConfiguration */
/* unused harmony export LogManager */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_logging__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_dependency_injection__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_loader__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aurelia_pal__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_aurelia_path__ = __webpack_require__(7);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1_aurelia_dependency_injection__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_1_aurelia_dependency_injection__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__ = __webpack_require__(3);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_6_aurelia_binding__["n"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_aurelia_metadata__ = __webpack_require__(6);
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["o"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["p"]; });
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_aurelia_task_queue__ = __webpack_require__(9);
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4_aurelia_pal__["b"]; });









function preventActionlessFormSubmit() {
  __WEBPACK_IMPORTED_MODULE_4_aurelia_pal__["b" /* DOM */].addEventListener('submit', function (evt) {
    var target = evt.target;
    var action = target.action;

    if (target.tagName.toLowerCase() === 'form' && !action) {
      evt.preventDefault();
    }
  });
}

var Aurelia = function () {
  function Aurelia(loader, container, resources) {
    

    this.loader = loader || new __WEBPACK_IMPORTED_MODULE_4_aurelia_pal__["d" /* PLATFORM */].Loader();
    this.container = container || new __WEBPACK_IMPORTED_MODULE_1_aurelia_dependency_injection__["a" /* Container */]().makeGlobal();
    this.resources = resources || new __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["m" /* ViewResources */]();
    this.use = new FrameworkConfiguration(this);
    this.logger = __WEBPACK_IMPORTED_MODULE_0_aurelia_logging__["getLogger"]('aurelia');
    this.hostConfigured = false;
    this.host = null;

    this.use.instance(Aurelia, this);
    this.use.instance(__WEBPACK_IMPORTED_MODULE_2_aurelia_loader__["a" /* Loader */], this.loader);
    this.use.instance(__WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["m" /* ViewResources */], this.resources);
  }

  Aurelia.prototype.start = function start() {
    var _this = this;

    if (this._started) {
      return this._started;
    }

    this.logger.info('Aurelia Starting');
    return this._started = this.use.apply().then(function () {
      preventActionlessFormSubmit();

      if (!_this.container.hasResolver(__WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["c" /* BindingLanguage */])) {
        var message = 'You must configure Aurelia with a BindingLanguage implementation.';
        _this.logger.error(message);
        throw new Error(message);
      }

      _this.logger.info('Aurelia Started');
      var evt = __WEBPACK_IMPORTED_MODULE_4_aurelia_pal__["b" /* DOM */].createCustomEvent('aurelia-started', { bubbles: true, cancelable: true });
      __WEBPACK_IMPORTED_MODULE_4_aurelia_pal__["b" /* DOM */].dispatchEvent(evt);
      return _this;
    });
  };

  Aurelia.prototype.enhance = function enhance() {
    var _this2 = this;

    var bindingContext = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var applicationHost = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    this._configureHost(applicationHost || __WEBPACK_IMPORTED_MODULE_4_aurelia_pal__["b" /* DOM */].querySelectorAll('body')[0]);

    return new Promise(function (resolve) {
      var engine = _this2.container.get(__WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["j" /* TemplatingEngine */]);
      _this2.root = engine.enhance({ container: _this2.container, element: _this2.host, resources: _this2.resources, bindingContext: bindingContext });
      _this2.root.attached();
      _this2._onAureliaComposed();
      resolve(_this2);
    });
  };

  Aurelia.prototype.setRoot = function setRoot() {
    var _this3 = this;

    var root = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
    var applicationHost = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

    var instruction = {};

    if (this.root && this.root.viewModel && this.root.viewModel.router) {
      this.root.viewModel.router.deactivate();
      this.root.viewModel.router.reset();
    }

    this._configureHost(applicationHost);

    var engine = this.container.get(__WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["j" /* TemplatingEngine */]);
    var transaction = this.container.get(__WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["f" /* CompositionTransaction */]);
    delete transaction.initialComposition;

    if (!root) {
      if (this.configModuleId) {
        root = Object(__WEBPACK_IMPORTED_MODULE_5_aurelia_path__["d" /* relativeToFile */])('./app', this.configModuleId);
      } else {
        root = 'app';
      }
    }

    instruction.viewModel = root;
    instruction.container = instruction.childContainer = this.container;
    instruction.viewSlot = this.hostSlot;
    instruction.host = this.host;

    return engine.compose(instruction).then(function (r) {
      _this3.root = r;
      instruction.viewSlot.attached();
      _this3._onAureliaComposed();
      return _this3;
    });
  };

  Aurelia.prototype._configureHost = function _configureHost(applicationHost) {
    if (this.hostConfigured) {
      return;
    }
    applicationHost = applicationHost || this.host;

    if (!applicationHost || typeof applicationHost === 'string') {
      this.host = __WEBPACK_IMPORTED_MODULE_4_aurelia_pal__["b" /* DOM */].getElementById(applicationHost || 'applicationHost');
    } else {
      this.host = applicationHost;
    }

    if (!this.host) {
      throw new Error('No applicationHost was specified.');
    }

    this.hostConfigured = true;
    this.host.aurelia = this;
    this.hostSlot = new __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["n" /* ViewSlot */](this.host, true);
    this.hostSlot.transformChildNodesIntoView();
    this.container.registerInstance(__WEBPACK_IMPORTED_MODULE_4_aurelia_pal__["b" /* DOM */].boundary, this.host);
  };

  Aurelia.prototype._onAureliaComposed = function _onAureliaComposed() {
    var evt = __WEBPACK_IMPORTED_MODULE_4_aurelia_pal__["b" /* DOM */].createCustomEvent('aurelia-composed', { bubbles: true, cancelable: true });
    setTimeout(function () {
      return __WEBPACK_IMPORTED_MODULE_4_aurelia_pal__["b" /* DOM */].dispatchEvent(evt);
    }, 1);
  };

  return Aurelia;
}();

var logger = __WEBPACK_IMPORTED_MODULE_0_aurelia_logging__["getLogger"]('aurelia');
var extPattern = /\.[^/.]+$/;

function runTasks(config, tasks) {
  var current = void 0;
  var next = function next() {
    current = tasks.shift();
    if (current) {
      return Promise.resolve(current(config)).then(next);
    }

    return Promise.resolve();
  };

  return next();
}

function loadPlugin(config, loader, info) {
  logger.debug('Loading plugin ' + info.moduleId + '.');
  config.resourcesRelativeTo = info.resourcesRelativeTo;

  var id = info.moduleId;

  if (info.resourcesRelativeTo.length > 1) {
    return loader.normalize(info.moduleId, info.resourcesRelativeTo[1]).then(function (normalizedId) {
      return _loadPlugin(normalizedId);
    });
  }

  return _loadPlugin(id);

  function _loadPlugin(moduleId) {
    return loader.loadModule(moduleId).then(function (m) {
      if ('configure' in m) {
        return Promise.resolve(m.configure(config, info.config || {})).then(function () {
          config.resourcesRelativeTo = null;
          logger.debug('Configured plugin ' + info.moduleId + '.');
        });
      }

      config.resourcesRelativeTo = null;
      logger.debug('Loaded plugin ' + info.moduleId + '.');
    });
  }
}

function loadResources(aurelia, resourcesToLoad, appResources) {
  var viewEngine = aurelia.container.get(__WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["k" /* ViewEngine */]);

  return Promise.all(Object.keys(resourcesToLoad).map(function (n) {
    return _normalize(resourcesToLoad[n]);
  })).then(function (loads) {
    var names = [];
    var importIds = [];

    loads.forEach(function (l) {
      names.push(undefined);
      importIds.push(l.importId);
    });

    return viewEngine.importViewResources(importIds, names, appResources);
  });

  function _normalize(load) {
    var moduleId = load.moduleId;
    var ext = getExt(moduleId);

    if (isOtherResource(moduleId)) {
      moduleId = removeExt(moduleId);
    }

    return aurelia.loader.normalize(moduleId, load.relativeTo).then(function (normalized) {
      return {
        name: load.moduleId,
        importId: isOtherResource(load.moduleId) ? addOriginalExt(normalized, ext) : normalized
      };
    });
  }

  function isOtherResource(name) {
    var ext = getExt(name);
    if (!ext) return false;
    if (ext === '') return false;
    if (ext === '.js' || ext === '.ts') return false;
    return true;
  }

  function removeExt(name) {
    return name.replace(extPattern, '');
  }

  function addOriginalExt(normalized, ext) {
    return removeExt(normalized) + '.' + ext;
  }
}

function getExt(name) {
  var match = name.match(extPattern);
  if (match && match.length > 0) {
    return match[0].split('.')[1];
  }
}

function assertProcessed(plugins) {
  if (plugins.processed) {
    throw new Error('This config instance has already been applied. To load more plugins or global resources, create a new FrameworkConfiguration instance.');
  }
}

var FrameworkConfiguration = function () {
  function FrameworkConfiguration(aurelia) {
    var _this4 = this;

    

    this.aurelia = aurelia;
    this.container = aurelia.container;
    this.info = [];
    this.processed = false;
    this.preTasks = [];
    this.postTasks = [];
    this.resourcesToLoad = {};
    this.preTask(function () {
      return aurelia.loader.normalize('aurelia-bootstrapper').then(function (name) {
        return _this4.bootstrapperName = name;
      });
    });
    this.postTask(function () {
      return loadResources(aurelia, _this4.resourcesToLoad, aurelia.resources);
    });
  }

  FrameworkConfiguration.prototype.instance = function instance(type, _instance) {
    this.container.registerInstance(type, _instance);
    return this;
  };

  FrameworkConfiguration.prototype.singleton = function singleton(type, implementation) {
    this.container.registerSingleton(type, implementation);
    return this;
  };

  FrameworkConfiguration.prototype.transient = function transient(type, implementation) {
    this.container.registerTransient(type, implementation);
    return this;
  };

  FrameworkConfiguration.prototype.preTask = function preTask(task) {
    assertProcessed(this);
    this.preTasks.push(task);
    return this;
  };

  FrameworkConfiguration.prototype.postTask = function postTask(task) {
    assertProcessed(this);
    this.postTasks.push(task);
    return this;
  };

  FrameworkConfiguration.prototype.feature = function feature(plugin) {
    var config = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var hasIndex = /\/index$/i.test(plugin);
    var moduleId = hasIndex || getExt(plugin) ? plugin : plugin + '/index';
    var root = hasIndex ? plugin.substr(0, plugin.length - 6) : plugin;
    return this.plugin({ moduleId: moduleId, resourcesRelativeTo: [root, ''], config: config });
  };

  FrameworkConfiguration.prototype.globalResources = function globalResources(resources) {
    assertProcessed(this);

    var toAdd = Array.isArray(resources) ? resources : arguments;
    var resource = void 0;
    var resourcesRelativeTo = this.resourcesRelativeTo || ['', ''];

    for (var i = 0, ii = toAdd.length; i < ii; ++i) {
      resource = toAdd[i];
      if (typeof resource !== 'string') {
        throw new Error('Invalid resource path [' + resource + ']. Resources must be specified as relative module IDs.');
      }

      var parent = resourcesRelativeTo[0];
      var grandParent = resourcesRelativeTo[1];
      var name = resource;

      if ((resource.startsWith('./') || resource.startsWith('../')) && parent !== '') {
        name = Object(__WEBPACK_IMPORTED_MODULE_5_aurelia_path__["b" /* join */])(parent, resource);
      }

      this.resourcesToLoad[name] = { moduleId: name, relativeTo: grandParent };
    }

    return this;
  };

  FrameworkConfiguration.prototype.globalName = function globalName(resourcePath, newName) {
    assertProcessed(this);
    this.resourcesToLoad[resourcePath] = { moduleId: newName, relativeTo: '' };
    return this;
  };

  FrameworkConfiguration.prototype.plugin = function plugin(_plugin, config) {
    assertProcessed(this);

    if (typeof _plugin === 'string') {
      return this.plugin({ moduleId: _plugin, resourcesRelativeTo: [_plugin, ''], config: config || {} });
    }

    this.info.push(_plugin);
    return this;
  };

  FrameworkConfiguration.prototype._addNormalizedPlugin = function _addNormalizedPlugin(name, config) {
    var _this5 = this;

    var plugin = { moduleId: name, resourcesRelativeTo: [name, ''], config: config || {} };
    this.plugin(plugin);

    this.preTask(function () {
      var relativeTo = [name, _this5.bootstrapperName];
      plugin.moduleId = name;
      plugin.resourcesRelativeTo = relativeTo;
      return Promise.resolve();
    });

    return this;
  };

  FrameworkConfiguration.prototype.defaultBindingLanguage = function defaultBindingLanguage() {
    return this._addNormalizedPlugin('aurelia-templating-binding');
  };

  FrameworkConfiguration.prototype.router = function router() {
    return this._addNormalizedPlugin('aurelia-templating-router');
  };

  FrameworkConfiguration.prototype.history = function history() {
    return this._addNormalizedPlugin('aurelia-history-browser');
  };

  FrameworkConfiguration.prototype.defaultResources = function defaultResources() {
    return this._addNormalizedPlugin('aurelia-templating-resources');
  };

  FrameworkConfiguration.prototype.eventAggregator = function eventAggregator() {
    return this._addNormalizedPlugin('aurelia-event-aggregator');
  };

  FrameworkConfiguration.prototype.basicConfiguration = function basicConfiguration() {
    return this.defaultBindingLanguage().defaultResources().eventAggregator();
  };

  FrameworkConfiguration.prototype.standardConfiguration = function standardConfiguration() {
    return this.basicConfiguration().history().router();
  };

  FrameworkConfiguration.prototype.developmentLogging = function developmentLogging() {
    var _this6 = this;

    this.preTask(function () {
      return _this6.aurelia.loader.normalize('aurelia-logging-console', _this6.bootstrapperName).then(function (name) {
        return _this6.aurelia.loader.loadModule(name).then(function (m) {
          __WEBPACK_IMPORTED_MODULE_0_aurelia_logging__["addAppender"](new m.ConsoleAppender());
          __WEBPACK_IMPORTED_MODULE_0_aurelia_logging__["setLevel"](__WEBPACK_IMPORTED_MODULE_0_aurelia_logging__["logLevel"].debug);
        });
      });
    });

    return this;
  };

  FrameworkConfiguration.prototype.apply = function apply() {
    var _this7 = this;

    if (this.processed) {
      return Promise.resolve();
    }

    return runTasks(this, this.preTasks).then(function () {
      var loader = _this7.aurelia.loader;
      var info = _this7.info;
      var current = void 0;

      var next = function next() {
        current = info.shift();
        if (current) {
          return loadPlugin(_this7, loader, current).then(next);
        }

        _this7.processed = true;
        return Promise.resolve();
      };

      return next().then(function () {
        return runTasks(_this7, _this7.postTasks);
      });
    });
  };

  return FrameworkConfiguration;
}();













var LogManager = __WEBPACK_IMPORTED_MODULE_0_aurelia_logging__;

/***/ }),

/***/ "aurelia-history-browser":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export LinkHandler */
/* unused harmony export DefaultLinkHandler */
/* harmony export (immutable) */ __webpack_exports__["configure"] = configure;
/* unused harmony export BrowserHistory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_pal__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_history__ = __webpack_require__(16);
var _class, _temp;

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var LinkHandler = function () {
  function LinkHandler() {
    
  }

  LinkHandler.prototype.activate = function activate(history) {};

  LinkHandler.prototype.deactivate = function deactivate() {};

  return LinkHandler;
}();

var DefaultLinkHandler = function (_LinkHandler) {
  _inherits(DefaultLinkHandler, _LinkHandler);

  function DefaultLinkHandler() {
    

    var _this = _possibleConstructorReturn(this, _LinkHandler.call(this));

    _this.handler = function (e) {
      var _DefaultLinkHandler$g = DefaultLinkHandler.getEventInfo(e);

      var shouldHandleEvent = _DefaultLinkHandler$g.shouldHandleEvent;
      var href = _DefaultLinkHandler$g.href;


      if (shouldHandleEvent) {
        e.preventDefault();
        _this.history.navigate(href);
      }
    };
    return _this;
  }

  DefaultLinkHandler.prototype.activate = function activate(history) {
    if (history._hasPushState) {
      this.history = history;
      __WEBPACK_IMPORTED_MODULE_0_aurelia_pal__["b" /* DOM */].addEventListener('click', this.handler, true);
    }
  };

  DefaultLinkHandler.prototype.deactivate = function deactivate() {
    __WEBPACK_IMPORTED_MODULE_0_aurelia_pal__["b" /* DOM */].removeEventListener('click', this.handler);
  };

  DefaultLinkHandler.getEventInfo = function getEventInfo(event) {
    var info = {
      shouldHandleEvent: false,
      href: null,
      anchor: null
    };

    var target = DefaultLinkHandler.findClosestAnchor(event.target);
    if (!target || !DefaultLinkHandler.targetIsThisWindow(target)) {
      return info;
    }

    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) {
      return info;
    }

    var href = target.getAttribute('href');
    info.anchor = target;
    info.href = href;

    var leftButtonClicked = event.which === 1;
    var isRelative = href && !(href.charAt(0) === '#' || /^[a-z]+:/i.test(href));

    info.shouldHandleEvent = leftButtonClicked && isRelative;
    return info;
  };

  DefaultLinkHandler.findClosestAnchor = function findClosestAnchor(el) {
    while (el) {
      if (el.tagName === 'A') {
        return el;
      }

      el = el.parentNode;
    }
  };

  DefaultLinkHandler.targetIsThisWindow = function targetIsThisWindow(target) {
    var targetWindow = target.getAttribute('target');
    var win = __WEBPACK_IMPORTED_MODULE_0_aurelia_pal__["d" /* PLATFORM */].global;

    return !targetWindow || targetWindow === win.name || targetWindow === '_self' || targetWindow === 'top' && win === win.top;
  };

  return DefaultLinkHandler;
}(LinkHandler);

function configure(config) {
  config.singleton(__WEBPACK_IMPORTED_MODULE_1_aurelia_history__["a" /* History */], BrowserHistory);
  config.transient(LinkHandler, DefaultLinkHandler);
}

var BrowserHistory = (_temp = _class = function (_History) {
  _inherits(BrowserHistory, _History);

  function BrowserHistory(linkHandler) {
    

    var _this2 = _possibleConstructorReturn(this, _History.call(this));

    _this2._isActive = false;
    _this2._checkUrlCallback = _this2._checkUrl.bind(_this2);

    _this2.location = __WEBPACK_IMPORTED_MODULE_0_aurelia_pal__["d" /* PLATFORM */].location;
    _this2.history = __WEBPACK_IMPORTED_MODULE_0_aurelia_pal__["d" /* PLATFORM */].history;
    _this2.linkHandler = linkHandler;
    return _this2;
  }

  BrowserHistory.prototype.activate = function activate(options) {
    if (this._isActive) {
      throw new Error('History has already been activated.');
    }

    var wantsPushState = !!options.pushState;

    this._isActive = true;
    this.options = Object.assign({}, { root: '/' }, this.options, options);

    this.root = ('/' + this.options.root + '/').replace(rootStripper, '/');

    this._wantsHashChange = this.options.hashChange !== false;
    this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);

    var eventName = void 0;
    if (this._hasPushState) {
      eventName = 'popstate';
    } else if (this._wantsHashChange) {
      eventName = 'hashchange';
    }

    __WEBPACK_IMPORTED_MODULE_0_aurelia_pal__["d" /* PLATFORM */].addEventListener(eventName, this._checkUrlCallback);

    if (this._wantsHashChange && wantsPushState) {
      var loc = this.location;
      var atRoot = loc.pathname.replace(/[^\/]$/, '$&/') === this.root;

      if (!this._hasPushState && !atRoot) {
        this.fragment = this._getFragment(null, true);
        this.location.replace(this.root + this.location.search + '#' + this.fragment);

        return true;
      } else if (this._hasPushState && atRoot && loc.hash) {
          this.fragment = this._getHash().replace(routeStripper, '');
          this.history.replaceState({}, __WEBPACK_IMPORTED_MODULE_0_aurelia_pal__["b" /* DOM */].title, this.root + this.fragment + loc.search);
        }
    }

    if (!this.fragment) {
      this.fragment = this._getFragment();
    }

    this.linkHandler.activate(this);

    if (!this.options.silent) {
      return this._loadUrl();
    }
  };

  BrowserHistory.prototype.deactivate = function deactivate() {
    __WEBPACK_IMPORTED_MODULE_0_aurelia_pal__["d" /* PLATFORM */].removeEventListener('popstate', this._checkUrlCallback);
    __WEBPACK_IMPORTED_MODULE_0_aurelia_pal__["d" /* PLATFORM */].removeEventListener('hashchange', this._checkUrlCallback);
    this._isActive = false;
    this.linkHandler.deactivate();
  };

  BrowserHistory.prototype.getAbsoluteRoot = function getAbsoluteRoot() {
    var origin = createOrigin(this.location.protocol, this.location.hostname, this.location.port);
    return '' + origin + this.root;
  };

  BrowserHistory.prototype.navigate = function navigate(fragment) {
    var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var _ref$trigger = _ref.trigger;
    var trigger = _ref$trigger === undefined ? true : _ref$trigger;
    var _ref$replace = _ref.replace;
    var replace = _ref$replace === undefined ? false : _ref$replace;

    if (fragment && absoluteUrl.test(fragment)) {
      this.location.href = fragment;
      return true;
    }

    if (!this._isActive) {
      return false;
    }

    fragment = this._getFragment(fragment || '');

    if (this.fragment === fragment && !replace) {
      return false;
    }

    this.fragment = fragment;

    var url = this.root + fragment;

    if (fragment === '' && url !== '/') {
      url = url.slice(0, -1);
    }

    if (this._hasPushState) {
      url = url.replace('//', '/');
      this.history[replace ? 'replaceState' : 'pushState']({}, __WEBPACK_IMPORTED_MODULE_0_aurelia_pal__["b" /* DOM */].title, url);
    } else if (this._wantsHashChange) {
      updateHash(this.location, fragment, replace);
    } else {
      return this.location.assign(url);
    }

    if (trigger) {
      return this._loadUrl(fragment);
    }
  };

  BrowserHistory.prototype.navigateBack = function navigateBack() {
    this.history.back();
  };

  BrowserHistory.prototype.setTitle = function setTitle(title) {
    __WEBPACK_IMPORTED_MODULE_0_aurelia_pal__["b" /* DOM */].title = title;
  };

  BrowserHistory.prototype.setState = function setState(key, value) {
    var state = Object.assign({}, this.history.state);
    state[key] = value;
    this.history.replaceState(state, null, null);
  };

  BrowserHistory.prototype.getState = function getState(key) {
    var state = Object.assign({}, this.history.state);
    return state[key];
  };

  BrowserHistory.prototype._getHash = function _getHash() {
    return this.location.hash.substr(1);
  };

  BrowserHistory.prototype._getFragment = function _getFragment(fragment, forcePushState) {
    var root = void 0;

    if (!fragment) {
      if (this._hasPushState || !this._wantsHashChange || forcePushState) {
        fragment = this.location.pathname + this.location.search;
        root = this.root.replace(trailingSlash, '');
        if (!fragment.indexOf(root)) {
          fragment = fragment.substr(root.length);
        }
      } else {
        fragment = this._getHash();
      }
    }

    return '/' + fragment.replace(routeStripper, '');
  };

  BrowserHistory.prototype._checkUrl = function _checkUrl() {
    var current = this._getFragment();
    if (current !== this.fragment) {
      this._loadUrl();
    }
  };

  BrowserHistory.prototype._loadUrl = function _loadUrl(fragmentOverride) {
    var fragment = this.fragment = this._getFragment(fragmentOverride);

    return this.options.routeHandler ? this.options.routeHandler(fragment) : false;
  };

  return BrowserHistory;
}(__WEBPACK_IMPORTED_MODULE_1_aurelia_history__["a" /* History */]), _class.inject = [LinkHandler], _temp);

var routeStripper = /^#?\/*|\s+$/g;

var rootStripper = /^\/+|\/+$/g;

var trailingSlash = /\/$/;

var absoluteUrl = /^([a-z][a-z0-9+\-.]*:)?\/\//i;

function updateHash(location, fragment, replace) {
  if (replace) {
    var _href = location.href.replace(/(javascript:|#).*$/, '');
    location.replace(_href + '#' + fragment);
  } else {
    location.hash = '#' + fragment;
  }
}

function createOrigin(protocol, hostname, port) {
  return protocol + '//' + hostname + (port ? ':' + port : '');
}

/***/ }),

/***/ "aurelia-logging-console":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleAppender", function() { return ConsoleAppender; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_logging__ = __webpack_require__(4);




var ConsoleAppender = function () {
  function ConsoleAppender() {
    
  }

  ConsoleAppender.prototype.debug = function debug(logger) {
    var _console;

    for (var _len = arguments.length, rest = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    (_console = console).debug.apply(_console, ['DEBUG [' + logger.id + ']'].concat(rest));
  };

  ConsoleAppender.prototype.info = function info(logger) {
    var _console2;

    for (var _len2 = arguments.length, rest = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      rest[_key2 - 1] = arguments[_key2];
    }

    (_console2 = console).info.apply(_console2, ['INFO [' + logger.id + ']'].concat(rest));
  };

  ConsoleAppender.prototype.warn = function warn(logger) {
    var _console3;

    for (var _len3 = arguments.length, rest = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      rest[_key3 - 1] = arguments[_key3];
    }

    (_console3 = console).warn.apply(_console3, ['WARN [' + logger.id + ']'].concat(rest));
  };

  ConsoleAppender.prototype.error = function error(logger) {
    var _console4;

    for (var _len4 = arguments.length, rest = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
      rest[_key4 - 1] = arguments[_key4];
    }

    (_console4 = console).error.apply(_console4, ['ERROR [' + logger.id + ']'].concat(rest));
  };

  return ConsoleAppender;
}();

/***/ }),

/***/ "aurelia-pal-browser":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_PLATFORM", function() { return _PLATFORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_FEATURE", function() { return _FEATURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_DOM", function() { return _DOM; });
/* harmony export (immutable) */ __webpack_exports__["initialize"] = initialize;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_pal__ = __webpack_require__(0);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



var _PLATFORM = {
  location: window.location,
  history: window.history,
  addEventListener: function addEventListener(eventName, callback, capture) {
    this.global.addEventListener(eventName, callback, capture);
  },
  removeEventListener: function removeEventListener(eventName, callback, capture) {
    this.global.removeEventListener(eventName, callback, capture);
  },

  performance: window.performance,
  requestAnimationFrame: function requestAnimationFrame(callback) {
    return this.global.requestAnimationFrame(callback);
  }
};

if (typeof FEATURE_NO_IE === 'undefined') {
  var test = function test() {};

  if (test.name === undefined) {
    Object.defineProperty(Function.prototype, 'name', {
      get: function get() {
        var name = this.toString().match(/^\s*function\s*(\S*)\s*\(/)[1];

        Object.defineProperty(this, 'name', { value: name });
        return name;
      }
    });
  }
}

if (typeof FEATURE_NO_IE === 'undefined') {
  if (!('classList' in document.createElement('_')) || document.createElementNS && !('classList' in document.createElementNS('http://www.w3.org/2000/svg', 'g'))) {
    (function () {
      var protoProp = 'prototype';
      var strTrim = String.prototype.trim;
      var arrIndexOf = Array.prototype.indexOf;
      var emptyArray = [];

      var DOMEx = function DOMEx(type, message) {
        this.name = type;
        this.code = DOMException[type];
        this.message = message;
      };

      var checkTokenAndGetIndex = function checkTokenAndGetIndex(classList, token) {
        if (token === '') {
          throw new DOMEx('SYNTAX_ERR', 'An invalid or illegal string was specified');
        }

        if (/\s/.test(token)) {
          throw new DOMEx('INVALID_CHARACTER_ERR', 'String contains an invalid character');
        }

        return arrIndexOf.call(classList, token);
      };

      var ClassList = function ClassList(elem) {
        var trimmedClasses = strTrim.call(elem.getAttribute('class') || '');
        var classes = trimmedClasses ? trimmedClasses.split(/\s+/) : emptyArray;

        for (var i = 0, ii = classes.length; i < ii; ++i) {
          this.push(classes[i]);
        }

        this._updateClassName = function () {
          elem.setAttribute('class', this.toString());
        };
      };

      var classListProto = ClassList[protoProp] = [];

      DOMEx[protoProp] = Error[protoProp];

      classListProto.item = function (i) {
        return this[i] || null;
      };

      classListProto.contains = function (token) {
        token += '';
        return checkTokenAndGetIndex(this, token) !== -1;
      };

      classListProto.add = function () {
        var tokens = arguments;
        var i = 0;
        var ii = tokens.length;
        var token = void 0;
        var updated = false;

        do {
          token = tokens[i] + '';
          if (checkTokenAndGetIndex(this, token) === -1) {
            this.push(token);
            updated = true;
          }
        } while (++i < ii);

        if (updated) {
          this._updateClassName();
        }
      };

      classListProto.remove = function () {
        var tokens = arguments;
        var i = 0;
        var ii = tokens.length;
        var token = void 0;
        var updated = false;
        var index = void 0;

        do {
          token = tokens[i] + '';
          index = checkTokenAndGetIndex(this, token);
          while (index !== -1) {
            this.splice(index, 1);
            updated = true;
            index = checkTokenAndGetIndex(this, token);
          }
        } while (++i < ii);

        if (updated) {
          this._updateClassName();
        }
      };

      classListProto.toggle = function (token, force) {
        token += '';

        var result = this.contains(token);
        var method = result ? force !== true && 'remove' : force !== false && 'add';

        if (method) {
          this[method](token);
        }

        if (force === true || force === false) {
          return force;
        }

        return !result;
      };

      classListProto.toString = function () {
        return this.join(' ');
      };

      Object.defineProperty(Element.prototype, 'classList', {
        get: function get() {
          return new ClassList(this);
        },
        enumerable: true,
        configurable: true
      });
    })();
  } else {
    var testElement = document.createElement('_');
    testElement.classList.add('c1', 'c2');

    if (!testElement.classList.contains('c2')) {
      var createMethod = function createMethod(method) {
        var original = DOMTokenList.prototype[method];

        DOMTokenList.prototype[method] = function (token) {
          for (var i = 0, ii = arguments.length; i < ii; ++i) {
            token = arguments[i];
            original.call(this, token);
          }
        };
      };

      createMethod('add');
      createMethod('remove');
    }

    testElement.classList.toggle('c3', false);

    if (testElement.classList.contains('c3')) {
      (function () {
        var _toggle = DOMTokenList.prototype.toggle;

        DOMTokenList.prototype.toggle = function (token, force) {
          if (1 in arguments && !this.contains(token) === !force) {
            return force;
          }

          return _toggle.call(this, token);
        };
      })();
    }

    testElement = null;
  }
}

if (typeof FEATURE_NO_IE === 'undefined') {
  // @license http://opensource.org/licenses/MIT
  if ('performance' in window === false) {
    window.performance = {};
  }

  if ('now' in window.performance === false) {
    (function () {
      var nowOffset = Date.now();

      if (performance.timing && performance.timing.navigationStart) {
        nowOffset = performance.timing.navigationStart;
      }

      window.performance.now = function now() {
        return Date.now() - nowOffset;
      };
    })();
  }

  _PLATFORM.performance = window.performance;
}

if (typeof FEATURE_NO_IE === 'undefined') {
  (function () {
    var con = window.console = window.console || {};
    var nop = function nop() {};

    if (!con.memory) con.memory = {};
    ('assert,clear,count,debug,dir,dirxml,error,exception,group,' + 'groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,' + 'show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn').split(',').forEach(function (m) {
      if (!con[m]) con[m] = nop;
    });

    if (_typeof(con.log) === 'object') {
      'log,info,warn,error,assert,dir,clear,profile,profileEnd'.split(',').forEach(function (method) {
        console[method] = this.bind(console[method], console);
      }, Function.prototype.call);
    }
  })();
}

if (typeof FEATURE_NO_IE === 'undefined') {
  if (!window.CustomEvent || typeof window.CustomEvent !== 'function') {
    var _CustomEvent = function _CustomEvent(event, params) {
      params = params || {
        bubbles: false,
        cancelable: false,
        detail: undefined
      };

      var evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    };

    _CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = _CustomEvent;
  }
}

if (Element && !Element.prototype.matches) {
  var proto = Element.prototype;
  proto.matches = proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector;
}

var _FEATURE = {
  shadowDOM: !!HTMLElement.prototype.attachShadow,
  scopedCSS: 'scoped' in document.createElement('style'),
  htmlTemplateElement: 'content' in document.createElement('template'),
  mutationObserver: !!(window.MutationObserver || window.WebKitMutationObserver),
  ensureHTMLTemplateElement: function ensureHTMLTemplateElement(t) {
    return t;
  }
};

if (typeof FEATURE_NO_IE === 'undefined') {
  (function () {
    var isSVGTemplate = function isSVGTemplate(el) {
      return el.tagName === 'template' && el.namespaceURI === 'http://www.w3.org/2000/svg';
    };

    var fixSVGTemplateElement = function fixSVGTemplateElement(el) {
      var template = el.ownerDocument.createElement('template');
      var attrs = el.attributes;
      var length = attrs.length;
      var attr = void 0;

      el.parentNode.insertBefore(template, el);

      while (length-- > 0) {
        attr = attrs[length];
        template.setAttribute(attr.name, attr.value);
        el.removeAttribute(attr.name);
      }

      el.parentNode.removeChild(el);

      return fixHTMLTemplateElement(template);
    };

    var fixHTMLTemplateElement = function fixHTMLTemplateElement(template) {
      var content = template.content = document.createDocumentFragment();
      var child = void 0;

      while (child = template.firstChild) {
        content.appendChild(child);
      }

      return template;
    };

    var fixHTMLTemplateElementRoot = function fixHTMLTemplateElementRoot(template) {
      var content = fixHTMLTemplateElement(template).content;
      var childTemplates = content.querySelectorAll('template');

      for (var i = 0, ii = childTemplates.length; i < ii; ++i) {
        var child = childTemplates[i];

        if (isSVGTemplate(child)) {
          fixSVGTemplateElement(child);
        } else {
          fixHTMLTemplateElement(child);
        }
      }

      return template;
    };

    if (!_FEATURE.htmlTemplateElement) {
      _FEATURE.ensureHTMLTemplateElement = fixHTMLTemplateElementRoot;
    }
  })();
}

var shadowPoly = window.ShadowDOMPolyfill || null;

var _DOM = {
  Element: Element,
  SVGElement: SVGElement,
  boundary: 'aurelia-dom-boundary',
  addEventListener: function addEventListener(eventName, callback, capture) {
    document.addEventListener(eventName, callback, capture);
  },
  removeEventListener: function removeEventListener(eventName, callback, capture) {
    document.removeEventListener(eventName, callback, capture);
  },
  adoptNode: function adoptNode(node) {
    return document.adoptNode(node, true);
  },
  createAttribute: function createAttribute(name) {
    return document.createAttribute(name);
  },
  createElement: function createElement(tagName) {
    return document.createElement(tagName);
  },
  createTextNode: function createTextNode(text) {
    return document.createTextNode(text);
  },
  createComment: function createComment(text) {
    return document.createComment(text);
  },
  createDocumentFragment: function createDocumentFragment() {
    return document.createDocumentFragment();
  },
  createTemplateElement: function createTemplateElement() {
    var template = document.createElement('template');
    return _FEATURE.ensureHTMLTemplateElement(template);
  },
  createMutationObserver: function createMutationObserver(callback) {
    return new (window.MutationObserver || window.WebKitMutationObserver)(callback);
  },
  createCustomEvent: function createCustomEvent(eventType, options) {
    return new window.CustomEvent(eventType, options);
  },
  dispatchEvent: function dispatchEvent(evt) {
    document.dispatchEvent(evt);
  },
  getComputedStyle: function getComputedStyle(element) {
    return window.getComputedStyle(element);
  },
  getElementById: function getElementById(id) {
    return document.getElementById(id);
  },
  querySelectorAll: function querySelectorAll(query) {
    return document.querySelectorAll(query);
  },
  nextElementSibling: function nextElementSibling(element) {
    if (element.nextElementSibling) {
      return element.nextElementSibling;
    }
    do {
      element = element.nextSibling;
    } while (element && element.nodeType !== 1);
    return element;
  },
  createTemplateFromMarkup: function createTemplateFromMarkup(markup) {
    var parser = document.createElement('div');
    parser.innerHTML = markup;

    var temp = parser.firstElementChild;
    if (!temp || temp.nodeName !== 'TEMPLATE') {
      throw new Error('Template markup must be wrapped in a <template> element e.g. <template> <!-- markup here --> </template>');
    }

    return _FEATURE.ensureHTMLTemplateElement(temp);
  },
  appendNode: function appendNode(newNode, parentNode) {
    (parentNode || document.body).appendChild(newNode);
  },
  replaceNode: function replaceNode(newNode, node, parentNode) {
    if (node.parentNode) {
      node.parentNode.replaceChild(newNode, node);
    } else if (shadowPoly !== null) {
      shadowPoly.unwrap(parentNode).replaceChild(shadowPoly.unwrap(newNode), shadowPoly.unwrap(node));
    } else {
      parentNode.replaceChild(newNode, node);
    }
  },
  removeNode: function removeNode(node, parentNode) {
    if (node.parentNode) {
      node.parentNode.removeChild(node);
    } else if (parentNode) {
      if (shadowPoly !== null) {
        shadowPoly.unwrap(parentNode).removeChild(shadowPoly.unwrap(node));
      } else {
        parentNode.removeChild(node);
      }
    }
  },
  injectStyles: function injectStyles(styles, destination, prepend) {
    var node = document.createElement('style');
    node.innerHTML = styles;
    node.type = 'text/css';

    destination = destination || document.head;

    if (prepend && destination.childNodes.length > 0) {
      destination.insertBefore(node, destination.childNodes[0]);
    } else {
      destination.appendChild(node);
    }

    return node;
  }
};

function initialize() {
  if (__WEBPACK_IMPORTED_MODULE_0_aurelia_pal__["f" /* isInitialized */]) {
    return;
  }

  Object(__WEBPACK_IMPORTED_MODULE_0_aurelia_pal__["e" /* initializePAL */])(function (platform, feature, dom) {
    Object.assign(platform, _PLATFORM);
    Object.assign(feature, _FEATURE);
    Object.assign(dom, _DOM);

    Object.defineProperty(dom, 'title', {
      get: function get() {
        return document.title;
      },
      set: function set(value) {
        document.title = value;
      }
    });

    Object.defineProperty(dom, 'activeElement', {
      get: function get() {
        return document.activeElement;
      }
    });

    Object.defineProperty(platform, 'XMLHttpRequest', {
      get: function get() {
        return platform.global.XMLHttpRequest;
      }
    });
  });
}

/***/ }),

/***/ "aurelia-templating-binding":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AttributeMap */
/* unused harmony export InterpolationBindingExpression */
/* unused harmony export InterpolationBinding */
/* unused harmony export ChildInterpolationBinding */
/* unused harmony export SyntaxInterpreter */
/* unused harmony export TemplatingBindingLanguage */
/* harmony export (immutable) */ __webpack_exports__["configure"] = configure;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_logging__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_templating__ = __webpack_require__(1);
var _class, _temp, _dec, _class2, _class3, _temp2, _class4, _temp3;

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var AttributeMap = (_temp = _class = function () {
  function AttributeMap(svg) {
    

    this.elements = Object.create(null);
    this.allElements = Object.create(null);

    this.svg = svg;

    this.registerUniversal('accesskey', 'accessKey');
    this.registerUniversal('contenteditable', 'contentEditable');
    this.registerUniversal('tabindex', 'tabIndex');
    this.registerUniversal('textcontent', 'textContent');
    this.registerUniversal('innerhtml', 'innerHTML');
    this.registerUniversal('scrolltop', 'scrollTop');
    this.registerUniversal('scrollleft', 'scrollLeft');
    this.registerUniversal('readonly', 'readOnly');

    this.register('label', 'for', 'htmlFor');

    this.register('img', 'usemap', 'useMap');

    this.register('input', 'maxlength', 'maxLength');
    this.register('input', 'minlength', 'minLength');
    this.register('input', 'formaction', 'formAction');
    this.register('input', 'formenctype', 'formEncType');
    this.register('input', 'formmethod', 'formMethod');
    this.register('input', 'formnovalidate', 'formNoValidate');
    this.register('input', 'formtarget', 'formTarget');

    this.register('textarea', 'maxlength', 'maxLength');

    this.register('td', 'rowspan', 'rowSpan');
    this.register('td', 'colspan', 'colSpan');
    this.register('th', 'rowspan', 'rowSpan');
    this.register('th', 'colspan', 'colSpan');
  }

  AttributeMap.prototype.register = function register(elementName, attributeName, propertyName) {
    elementName = elementName.toLowerCase();
    attributeName = attributeName.toLowerCase();
    var element = this.elements[elementName] = this.elements[elementName] || Object.create(null);
    element[attributeName] = propertyName;
  };

  AttributeMap.prototype.registerUniversal = function registerUniversal(attributeName, propertyName) {
    attributeName = attributeName.toLowerCase();
    this.allElements[attributeName] = propertyName;
  };

  AttributeMap.prototype.map = function map(elementName, attributeName) {
    if (this.svg.isStandardSvgAttribute(elementName, attributeName)) {
      return attributeName;
    }
    elementName = elementName.toLowerCase();
    attributeName = attributeName.toLowerCase();
    var element = this.elements[elementName];
    if (element !== undefined && attributeName in element) {
      return element[attributeName];
    }
    if (attributeName in this.allElements) {
      return this.allElements[attributeName];
    }

    if (/(?:^data-)|(?:^aria-)|:/.test(attributeName)) {
      return attributeName;
    }
    return Object(__WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["o" /* camelCase */])(attributeName);
  };

  return AttributeMap;
}(), _class.inject = [__WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["k" /* SVGAnalyzer */]], _temp);

var InterpolationBindingExpression = function () {
  function InterpolationBindingExpression(observerLocator, targetProperty, parts, mode, lookupFunctions, attribute) {
    

    this.observerLocator = observerLocator;
    this.targetProperty = targetProperty;
    this.parts = parts;
    this.mode = mode;
    this.lookupFunctions = lookupFunctions;
    this.attribute = this.attrToRemove = attribute;
    this.discrete = false;
  }

  InterpolationBindingExpression.prototype.createBinding = function createBinding(target) {
    if (this.parts.length === 3) {
      return new ChildInterpolationBinding(target, this.observerLocator, this.parts[1], this.mode, this.lookupFunctions, this.targetProperty, this.parts[0], this.parts[2]);
    }
    return new InterpolationBinding(this.observerLocator, this.parts, target, this.targetProperty, this.mode, this.lookupFunctions);
  };

  return InterpolationBindingExpression;
}();

function validateTarget(target, propertyName) {
  if (propertyName === 'style') {
    __WEBPACK_IMPORTED_MODULE_0_aurelia_logging__["getLogger"]('templating-binding').info('Internet Explorer does not support interpolation in "style" attributes.  Use the style attribute\'s alias, "css" instead.');
  } else if (target.parentElement && target.parentElement.nodeName === 'TEXTAREA' && propertyName === 'textContent') {
    throw new Error('Interpolation binding cannot be used in the content of a textarea element.  Use <textarea value.bind="expression"></textarea> instead.');
  }
}

var InterpolationBinding = function () {
  function InterpolationBinding(observerLocator, parts, target, targetProperty, mode, lookupFunctions) {
    

    validateTarget(target, targetProperty);
    this.observerLocator = observerLocator;
    this.parts = parts;
    this.target = target;
    this.targetProperty = targetProperty;
    this.targetAccessor = observerLocator.getAccessor(target, targetProperty);
    this.mode = mode;
    this.lookupFunctions = lookupFunctions;
  }

  InterpolationBinding.prototype.interpolate = function interpolate() {
    if (this.isBound) {
      var value = '';
      var parts = this.parts;
      for (var i = 0, ii = parts.length; i < ii; i++) {
        value += i % 2 === 0 ? parts[i] : this['childBinding' + i].value;
      }
      this.targetAccessor.setValue(value, this.target, this.targetProperty);
    }
  };

  InterpolationBinding.prototype.updateOneTimeBindings = function updateOneTimeBindings() {
    for (var i = 1, ii = this.parts.length; i < ii; i += 2) {
      var child = this['childBinding' + i];
      if (child.mode === __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["n" /* bindingMode */].oneTime) {
        child.call();
      }
    }
  };

  InterpolationBinding.prototype.bind = function bind(source) {
    if (this.isBound) {
      if (this.source === source) {
        return;
      }
      this.unbind();
    }
    this.source = source;

    var parts = this.parts;
    for (var i = 1, ii = parts.length; i < ii; i += 2) {
      var binding = new ChildInterpolationBinding(this, this.observerLocator, parts[i], this.mode, this.lookupFunctions);
      binding.bind(source);
      this['childBinding' + i] = binding;
    }

    this.isBound = true;
    this.interpolate();
  };

  InterpolationBinding.prototype.unbind = function unbind() {
    if (!this.isBound) {
      return;
    }
    this.isBound = false;
    this.source = null;
    var parts = this.parts;
    for (var i = 1, ii = parts.length; i < ii; i += 2) {
      var name = 'childBinding' + i;
      this[name].unbind();
    }
  };

  return InterpolationBinding;
}();

var ChildInterpolationBinding = (_dec = Object(__WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["p" /* connectable */])(), _dec(_class2 = function () {
  function ChildInterpolationBinding(target, observerLocator, sourceExpression, mode, lookupFunctions, targetProperty, left, right) {
    

    if (target instanceof InterpolationBinding) {
      this.parent = target;
    } else {
      validateTarget(target, targetProperty);
      this.target = target;
      this.targetProperty = targetProperty;
      this.targetAccessor = observerLocator.getAccessor(target, targetProperty);
    }
    this.observerLocator = observerLocator;
    this.sourceExpression = sourceExpression;
    this.mode = mode;
    this.lookupFunctions = lookupFunctions;
    this.left = left;
    this.right = right;
  }

  ChildInterpolationBinding.prototype.updateTarget = function updateTarget(value) {
    value = value === null || value === undefined ? '' : value.toString();
    if (value !== this.value) {
      this.value = value;
      if (this.parent) {
        this.parent.interpolate();
      } else {
        this.targetAccessor.setValue(this.left + value + this.right, this.target, this.targetProperty);
      }
    }
  };

  ChildInterpolationBinding.prototype.call = function call() {
    if (!this.isBound) {
      return;
    }

    this.rawValue = this.sourceExpression.evaluate(this.source, this.lookupFunctions);
    this.updateTarget(this.rawValue);

    if (this.mode !== __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["n" /* bindingMode */].oneTime) {
      this._version++;
      this.sourceExpression.connect(this, this.source);
      if (this.rawValue instanceof Array) {
        this.observeArray(this.rawValue);
      }
      this.unobserve(false);
    }
  };

  ChildInterpolationBinding.prototype.bind = function bind(source) {
    if (this.isBound) {
      if (this.source === source) {
        return;
      }
      this.unbind();
    }
    this.isBound = true;
    this.source = source;

    var sourceExpression = this.sourceExpression;
    if (sourceExpression.bind) {
      sourceExpression.bind(this, source, this.lookupFunctions);
    }

    this.rawValue = sourceExpression.evaluate(source, this.lookupFunctions);
    this.updateTarget(this.rawValue);

    if (this.mode === __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["n" /* bindingMode */].oneWay) {
      Object(__WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["s" /* enqueueBindingConnect */])(this);
    }
  };

  ChildInterpolationBinding.prototype.unbind = function unbind() {
    if (!this.isBound) {
      return;
    }
    this.isBound = false;
    var sourceExpression = this.sourceExpression;
    if (sourceExpression.unbind) {
      sourceExpression.unbind(this, this.source);
    }
    this.source = null;
    this.value = null;
    this.rawValue = null;
    this.unobserve(true);
  };

  ChildInterpolationBinding.prototype.connect = function connect(evaluate) {
    if (!this.isBound) {
      return;
    }
    if (evaluate) {
      this.rawValue = this.sourceExpression.evaluate(this.source, this.lookupFunctions);
      this.updateTarget(this.rawValue);
    }
    this.sourceExpression.connect(this, this.source);
    if (this.rawValue instanceof Array) {
      this.observeArray(this.rawValue);
    }
  };

  return ChildInterpolationBinding;
}()) || _class2);

var SyntaxInterpreter = (_temp2 = _class3 = function () {
  function SyntaxInterpreter(parser, observerLocator, eventManager, attributeMap) {
    

    this.parser = parser;
    this.observerLocator = observerLocator;
    this.eventManager = eventManager;
    this.attributeMap = attributeMap;
  }

  SyntaxInterpreter.prototype.interpret = function interpret(resources, element, info, existingInstruction, context) {
    if (info.command in this) {
      return this[info.command](resources, element, info, existingInstruction, context);
    }

    return this.handleUnknownCommand(resources, element, info, existingInstruction, context);
  };

  SyntaxInterpreter.prototype.handleUnknownCommand = function handleUnknownCommand(resources, element, info, existingInstruction, context) {
    __WEBPACK_IMPORTED_MODULE_0_aurelia_logging__["getLogger"]('templating-binding').warn('Unknown binding command.', info);
    return existingInstruction;
  };

  SyntaxInterpreter.prototype.determineDefaultBindingMode = function determineDefaultBindingMode(element, attrName, context) {
    var tagName = element.tagName.toLowerCase();

    if (tagName === 'input' && (attrName === 'value' || attrName === 'files') && element.type !== 'checkbox' && element.type !== 'radio' || tagName === 'input' && attrName === 'checked' && (element.type === 'checkbox' || element.type === 'radio') || (tagName === 'textarea' || tagName === 'select') && attrName === 'value' || (attrName === 'textcontent' || attrName === 'innerhtml') && element.contentEditable === 'true' || attrName === 'scrolltop' || attrName === 'scrollleft') {
      return __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["n" /* bindingMode */].twoWay;
    }

    if (context && attrName in context.attributes && context.attributes[attrName] && context.attributes[attrName].defaultBindingMode >= __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["n" /* bindingMode */].oneTime) {
      return context.attributes[attrName].defaultBindingMode;
    }

    return __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["n" /* bindingMode */].oneWay;
  };

  SyntaxInterpreter.prototype.bind = function bind(resources, element, info, existingInstruction, context) {
    var instruction = existingInstruction || __WEBPACK_IMPORTED_MODULE_2_aurelia_templating__["b" /* BehaviorInstruction */].attribute(info.attrName);

    instruction.attributes[info.attrName] = new __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["c" /* BindingExpression */](this.observerLocator, this.attributeMap.map(element.tagName, info.attrName), this.parser.parse(info.attrValue), info.defaultBindingMode === undefined || info.defaultBindingMode === null ? this.determineDefaultBindingMode(element, info.attrName, context) : info.defaultBindingMode, resources.lookupFunctions);

    return instruction;
  };

  SyntaxInterpreter.prototype.trigger = function trigger(resources, element, info) {
    return new __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["g" /* ListenerExpression */](this.eventManager, info.attrName, this.parser.parse(info.attrValue), __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["r" /* delegationStrategy */].none, true, resources.lookupFunctions);
  };

  SyntaxInterpreter.prototype.capture = function capture(resources, element, info) {
    return new __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["g" /* ListenerExpression */](this.eventManager, info.attrName, this.parser.parse(info.attrValue), __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["r" /* delegationStrategy */].capturing, true, resources.lookupFunctions);
  };

  SyntaxInterpreter.prototype.delegate = function delegate(resources, element, info) {
    return new __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["g" /* ListenerExpression */](this.eventManager, info.attrName, this.parser.parse(info.attrValue), __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["r" /* delegationStrategy */].bubbling, true, resources.lookupFunctions);
  };

  SyntaxInterpreter.prototype.call = function call(resources, element, info, existingInstruction) {
    var instruction = existingInstruction || __WEBPACK_IMPORTED_MODULE_2_aurelia_templating__["b" /* BehaviorInstruction */].attribute(info.attrName);

    instruction.attributes[info.attrName] = new __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["d" /* CallExpression */](this.observerLocator, info.attrName, this.parser.parse(info.attrValue), resources.lookupFunctions);

    return instruction;
  };

  SyntaxInterpreter.prototype.options = function options(resources, element, info, existingInstruction, context) {
    var instruction = existingInstruction || __WEBPACK_IMPORTED_MODULE_2_aurelia_templating__["b" /* BehaviorInstruction */].attribute(info.attrName);
    var attrValue = info.attrValue;
    var language = this.language;
    var name = null;
    var target = '';
    var current = void 0;
    var i = void 0;
    var ii = void 0;
    var inString = false;
    var inEscape = false;
    var foundName = false;

    for (i = 0, ii = attrValue.length; i < ii; ++i) {
      current = attrValue[i];

      if (current === ';' && !inString) {
        if (!foundName) {
          name = this._getPrimaryPropertyName(resources, context);
        }
        info = language.inspectAttribute(resources, '?', name, target.trim());
        language.createAttributeInstruction(resources, element, info, instruction, context);

        if (!instruction.attributes[info.attrName]) {
          instruction.attributes[info.attrName] = info.attrValue;
        }

        target = '';
        name = null;
      } else if (current === ':' && name === null) {
        foundName = true;
        name = target.trim();
        target = '';
      } else if (current === '\\') {
        target += current;
        inEscape = true;
        continue;
      } else {
        target += current;

        if (name !== null && inEscape === false && current === '\'') {
          inString = !inString;
        }
      }

      inEscape = false;
    }

    if (!foundName) {
      name = this._getPrimaryPropertyName(resources, context);
    }

    if (name !== null) {
      info = language.inspectAttribute(resources, '?', name, target.trim());
      language.createAttributeInstruction(resources, element, info, instruction, context);

      if (!instruction.attributes[info.attrName]) {
        instruction.attributes[info.attrName] = info.attrValue;
      }
    }

    return instruction;
  };

  SyntaxInterpreter.prototype._getPrimaryPropertyName = function _getPrimaryPropertyName(resources, context) {
    var type = resources.getAttribute(context.attributeName);
    if (type && type.primaryProperty) {
      return type.primaryProperty.name;
    }
    return null;
  };

  SyntaxInterpreter.prototype['for'] = function _for(resources, element, info, existingInstruction) {
    var parts = void 0;
    var keyValue = void 0;
    var instruction = void 0;
    var attrValue = void 0;
    var isDestructuring = void 0;

    attrValue = info.attrValue;
    isDestructuring = attrValue.match(/^ *[[].+[\]]/);
    parts = isDestructuring ? attrValue.split('of ') : attrValue.split(' of ');

    if (parts.length !== 2) {
      throw new Error('Incorrect syntax for "for". The form is: "$local of $items" or "[$key, $value] of $items".');
    }

    instruction = existingInstruction || __WEBPACK_IMPORTED_MODULE_2_aurelia_templating__["b" /* BehaviorInstruction */].attribute(info.attrName);

    if (isDestructuring) {
      keyValue = parts[0].replace(/[[\]]/g, '').replace(/,/g, ' ').replace(/\s+/g, ' ').trim().split(' ');
      instruction.attributes.key = keyValue[0];
      instruction.attributes.value = keyValue[1];
    } else {
      instruction.attributes.local = parts[0];
    }

    instruction.attributes.items = new __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["c" /* BindingExpression */](this.observerLocator, 'items', this.parser.parse(parts[1]), __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["n" /* bindingMode */].oneWay, resources.lookupFunctions);

    return instruction;
  };

  SyntaxInterpreter.prototype['two-way'] = function twoWay(resources, element, info, existingInstruction) {
    var instruction = existingInstruction || __WEBPACK_IMPORTED_MODULE_2_aurelia_templating__["b" /* BehaviorInstruction */].attribute(info.attrName);

    instruction.attributes[info.attrName] = new __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["c" /* BindingExpression */](this.observerLocator, this.attributeMap.map(element.tagName, info.attrName), this.parser.parse(info.attrValue), __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["n" /* bindingMode */].twoWay, resources.lookupFunctions);

    return instruction;
  };

  SyntaxInterpreter.prototype['to-view'] = function toView(resources, element, info, existingInstruction) {
    var instruction = existingInstruction || __WEBPACK_IMPORTED_MODULE_2_aurelia_templating__["b" /* BehaviorInstruction */].attribute(info.attrName);

    instruction.attributes[info.attrName] = new __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["c" /* BindingExpression */](this.observerLocator, this.attributeMap.map(element.tagName, info.attrName), this.parser.parse(info.attrValue), __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["n" /* bindingMode */].toView, resources.lookupFunctions);

    return instruction;
  };

  SyntaxInterpreter.prototype['from-view'] = function fromView(resources, element, info, existingInstruction) {
    var instruction = existingInstruction || __WEBPACK_IMPORTED_MODULE_2_aurelia_templating__["b" /* BehaviorInstruction */].attribute(info.attrName);

    instruction.attributes[info.attrName] = new __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["c" /* BindingExpression */](this.observerLocator, this.attributeMap.map(element.tagName, info.attrName), this.parser.parse(info.attrValue), __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["n" /* bindingMode */].fromView, resources.lookupFunctions);

    return instruction;
  };

  SyntaxInterpreter.prototype['one-time'] = function oneTime(resources, element, info, existingInstruction) {
    var instruction = existingInstruction || __WEBPACK_IMPORTED_MODULE_2_aurelia_templating__["b" /* BehaviorInstruction */].attribute(info.attrName);

    instruction.attributes[info.attrName] = new __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["c" /* BindingExpression */](this.observerLocator, this.attributeMap.map(element.tagName, info.attrName), this.parser.parse(info.attrValue), __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["n" /* bindingMode */].oneTime, resources.lookupFunctions);

    return instruction;
  };

  return SyntaxInterpreter;
}(), _class3.inject = [__WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["j" /* Parser */], __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["i" /* ObserverLocator */], __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["f" /* EventManager */], AttributeMap], _temp2);

SyntaxInterpreter.prototype['one-way'] = SyntaxInterpreter.prototype['to-view'];

var info = {};

var TemplatingBindingLanguage = (_temp3 = _class4 = function (_BindingLanguage) {
  _inherits(TemplatingBindingLanguage, _BindingLanguage);

  function TemplatingBindingLanguage(parser, observerLocator, syntaxInterpreter, attributeMap) {
    

    var _this = _possibleConstructorReturn(this, _BindingLanguage.call(this));

    _this.parser = parser;
    _this.observerLocator = observerLocator;
    _this.syntaxInterpreter = syntaxInterpreter;
    _this.emptyStringExpression = _this.parser.parse('\'\'');
    syntaxInterpreter.language = _this;
    _this.attributeMap = attributeMap;
    return _this;
  }

  TemplatingBindingLanguage.prototype.inspectAttribute = function inspectAttribute(resources, elementName, attrName, attrValue) {
    var parts = attrName.split('.');

    info.defaultBindingMode = null;

    if (parts.length === 2) {
      info.attrName = parts[0].trim();
      info.attrValue = attrValue;
      info.command = parts[1].trim();

      if (info.command === 'ref') {
        info.expression = new __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["h" /* NameExpression */](this.parser.parse(attrValue), info.attrName, resources.lookupFunctions);
        info.command = null;
        info.attrName = 'ref';
      } else {
        info.expression = null;
      }
    } else if (attrName === 'ref') {
      info.attrName = attrName;
      info.attrValue = attrValue;
      info.command = null;
      info.expression = new __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["h" /* NameExpression */](this.parser.parse(attrValue), 'element', resources.lookupFunctions);
    } else {
      info.attrName = attrName;
      info.attrValue = attrValue;
      info.command = null;
      var interpolationParts = this.parseInterpolation(resources, attrValue);
      if (interpolationParts === null) {
        info.expression = null;
      } else {
        info.expression = new InterpolationBindingExpression(this.observerLocator, this.attributeMap.map(elementName, attrName), interpolationParts, __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["n" /* bindingMode */].oneWay, resources.lookupFunctions, attrName);
      }
    }

    return info;
  };

  TemplatingBindingLanguage.prototype.createAttributeInstruction = function createAttributeInstruction(resources, element, theInfo, existingInstruction, context) {
    var instruction = void 0;

    if (theInfo.expression) {
      if (theInfo.attrName === 'ref') {
        return theInfo.expression;
      }

      instruction = existingInstruction || __WEBPACK_IMPORTED_MODULE_2_aurelia_templating__["b" /* BehaviorInstruction */].attribute(theInfo.attrName);
      instruction.attributes[theInfo.attrName] = theInfo.expression;
    } else if (theInfo.command) {
      instruction = this.syntaxInterpreter.interpret(resources, element, theInfo, existingInstruction, context);
    }

    return instruction;
  };

  TemplatingBindingLanguage.prototype.inspectTextContent = function inspectTextContent(resources, value) {
    var parts = this.parseInterpolation(resources, value);
    if (parts === null) {
      return null;
    }
    return new InterpolationBindingExpression(this.observerLocator, 'textContent', parts, __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["n" /* bindingMode */].oneWay, resources.lookupFunctions, 'textContent');
  };

  TemplatingBindingLanguage.prototype.parseInterpolation = function parseInterpolation(resources, value) {
    var i = value.indexOf('${', 0);
    var ii = value.length;
    var char = void 0;
    var pos = 0;
    var open = 0;
    var quote = null;
    var interpolationStart = void 0;
    var parts = void 0;
    var partIndex = 0;

    while (i >= 0 && i < ii - 2) {
      open = 1;
      interpolationStart = i;
      i += 2;

      do {
        char = value[i];
        i++;

        if (char === "'" || char === '"') {
          if (quote === null) {
            quote = char;
          } else if (quote === char) {
            quote = null;
          }
          continue;
        }

        if (char === '\\') {
          i++;
          continue;
        }

        if (quote !== null) {
          continue;
        }

        if (char === '{') {
          open++;
        } else if (char === '}') {
          open--;
        }
      } while (open > 0 && i < ii);

      if (open === 0) {
        parts = parts || [];
        if (value[interpolationStart - 1] === '\\' && value[interpolationStart - 2] !== '\\') {
          parts[partIndex] = value.substring(pos, interpolationStart - 1) + value.substring(interpolationStart, i);
          partIndex++;
          parts[partIndex] = this.emptyStringExpression;
          partIndex++;
        } else {
          parts[partIndex] = value.substring(pos, interpolationStart);
          partIndex++;
          parts[partIndex] = this.parser.parse(value.substring(interpolationStart + 2, i - 1));
          partIndex++;
        }
        pos = i;
        i = value.indexOf('${', i);
      } else {
        break;
      }
    }

    if (partIndex === 0) {
      return null;
    }

    parts[partIndex] = value.substr(pos);
    return parts;
  };

  return TemplatingBindingLanguage;
}(__WEBPACK_IMPORTED_MODULE_2_aurelia_templating__["c" /* BindingLanguage */]), _class4.inject = [__WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["j" /* Parser */], __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["i" /* ObserverLocator */], SyntaxInterpreter, AttributeMap], _temp3);

function configure(config) {
  config.container.registerSingleton(__WEBPACK_IMPORTED_MODULE_2_aurelia_templating__["c" /* BindingLanguage */], TemplatingBindingLanguage);
  config.container.registerAlias(__WEBPACK_IMPORTED_MODULE_2_aurelia_templating__["c" /* BindingLanguage */], TemplatingBindingLanguage);
}

/***/ }),

/***/ "aurelia-templating-resources":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configure", function() { return configure; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_pal__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__compose__ = __webpack_require__("aurelia-templating-resources/compose");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__if__ = __webpack_require__("aurelia-templating-resources/if");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__else__ = __webpack_require__("aurelia-templating-resources/else");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__with__ = __webpack_require__("aurelia-templating-resources/with");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__repeat__ = __webpack_require__("aurelia-templating-resources/repeat");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__show__ = __webpack_require__("aurelia-templating-resources/show");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__hide__ = __webpack_require__("aurelia-templating-resources/hide");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sanitize_html__ = __webpack_require__("aurelia-templating-resources/sanitize-html");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__replaceable__ = __webpack_require__("aurelia-templating-resources/replaceable");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__focus__ = __webpack_require__("aurelia-templating-resources/focus");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_aurelia_templating__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__css_resource__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__html_sanitizer__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__attr_binding_behavior__ = __webpack_require__("aurelia-templating-resources/attr-binding-behavior");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__binding_mode_behaviors__ = __webpack_require__("aurelia-templating-resources/binding-mode-behaviors");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__throttle_binding_behavior__ = __webpack_require__("aurelia-templating-resources/throttle-binding-behavior");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__debounce_binding_behavior__ = __webpack_require__("aurelia-templating-resources/debounce-binding-behavior");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__self_binding_behavior__ = __webpack_require__("aurelia-templating-resources/self-binding-behavior");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__signal_binding_behavior__ = __webpack_require__("aurelia-templating-resources/signal-binding-behavior");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__binding_signaler__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__update_trigger_binding_behavior__ = __webpack_require__("aurelia-templating-resources/update-trigger-binding-behavior");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__abstract_repeater__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__repeat_strategy_locator__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__html_resource_plugin__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__null_repeat_strategy__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__array_repeat_strategy__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__map_repeat_strategy__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__set_repeat_strategy__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__number_repeat_strategy__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__repeat_utilities__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__analyze_view_factory__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__aurelia_hide_style__ = __webpack_require__(13);
/* unused harmony reexport Compose */
/* unused harmony reexport If */
/* unused harmony reexport Else */
/* unused harmony reexport With */
/* unused harmony reexport Repeat */
/* unused harmony reexport Show */
/* unused harmony reexport Hide */
/* unused harmony reexport HTMLSanitizer */
/* unused harmony reexport SanitizeHTMLValueConverter */
/* unused harmony reexport Replaceable */
/* unused harmony reexport Focus */
/* unused harmony reexport AttrBindingBehavior */
/* unused harmony reexport OneTimeBindingBehavior */
/* unused harmony reexport OneWayBindingBehavior */
/* unused harmony reexport TwoWayBindingBehavior */
/* unused harmony reexport ThrottleBindingBehavior */
/* unused harmony reexport DebounceBindingBehavior */
/* unused harmony reexport SelfBindingBehavior */
/* unused harmony reexport SignalBindingBehavior */
/* unused harmony reexport BindingSignaler */
/* unused harmony reexport UpdateTriggerBindingBehavior */
/* unused harmony reexport AbstractRepeater */
/* unused harmony reexport RepeatStrategyLocator */
/* unused harmony reexport NullRepeatStrategy */
/* unused harmony reexport ArrayRepeatStrategy */
/* unused harmony reexport MapRepeatStrategy */
/* unused harmony reexport SetRepeatStrategy */
/* unused harmony reexport NumberRepeatStrategy */
/* unused harmony reexport createFullOverrideContext */
/* unused harmony reexport updateOverrideContext */
/* unused harmony reexport getItemsSourceExpression */
/* unused harmony reexport isOneTime */
/* unused harmony reexport updateOneTimeBinding */
/* unused harmony reexport unwrapExpression */
/* unused harmony reexport viewsRequireLifecycle */


































function configure(config) {
  Object(__WEBPACK_IMPORTED_MODULE_32__aurelia_hide_style__["c" /* injectAureliaHideStyleAtHead */])();

  config.globalResources('./compose', './if', './else', './with', './repeat', './show', './hide', './replaceable', './sanitize-html', './focus', './binding-mode-behaviors', './self-binding-behavior', './throttle-binding-behavior', './debounce-binding-behavior', './signal-binding-behavior', './update-trigger-binding-behavior', './attr-binding-behavior');

  Object(__WEBPACK_IMPORTED_MODULE_24__html_resource_plugin__["a" /* configure */])(config);

  var viewEngine = config.container.get(__WEBPACK_IMPORTED_MODULE_11_aurelia_templating__["k" /* ViewEngine */]);
  var styleResourcePlugin = {
    fetch: function fetch(address) {
      var _ref;

      return _ref = {}, _ref[address] = Object(__WEBPACK_IMPORTED_MODULE_12__css_resource__["a" /* _createCSSResource */])(address), _ref;
    }
  };
  ['.css', '.less', '.sass', '.scss', '.styl'].forEach(function (ext) {
    return viewEngine.addResourcePlugin(ext, styleResourcePlugin);
  });
}



/***/ }),

/***/ "aurelia-templating-resources/attr-binding-behavior":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttrBindingBehavior", function() { return AttrBindingBehavior; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_binding__ = __webpack_require__(3);




var AttrBindingBehavior = function () {
  function AttrBindingBehavior() {
    
  }

  AttrBindingBehavior.prototype.bind = function bind(binding, source) {
    binding.targetObserver = new __WEBPACK_IMPORTED_MODULE_0_aurelia_binding__["e" /* DataAttributeObserver */](binding.target, binding.targetProperty);
  };

  AttrBindingBehavior.prototype.unbind = function unbind(binding, source) {};

  return AttrBindingBehavior;
}();

/***/ }),

/***/ "aurelia-templating-resources/binding-mode-behaviors":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneTimeBindingBehavior", function() { return OneTimeBindingBehavior; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneWayBindingBehavior", function() { return OneWayBindingBehavior; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwoWayBindingBehavior", function() { return TwoWayBindingBehavior; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_binding__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__ = __webpack_require__(6);
var _dec, _class, _dec2, _class2, _dec3, _class3;






var modeBindingBehavior = {
  bind: function bind(binding, source, lookupFunctions) {
    binding.originalMode = binding.mode;
    binding.mode = this.mode;
  },
  unbind: function unbind(binding, source) {
    binding.mode = binding.originalMode;
    binding.originalMode = null;
  }
};

var OneTimeBindingBehavior = (_dec = Object(__WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["c" /* mixin */])(modeBindingBehavior), _dec(_class = function OneTimeBindingBehavior() {
  

  this.mode = __WEBPACK_IMPORTED_MODULE_0_aurelia_binding__["n" /* bindingMode */].oneTime;
}) || _class);

var OneWayBindingBehavior = (_dec2 = Object(__WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["c" /* mixin */])(modeBindingBehavior), _dec2(_class2 = function OneWayBindingBehavior() {
  

  this.mode = __WEBPACK_IMPORTED_MODULE_0_aurelia_binding__["n" /* bindingMode */].oneWay;
}) || _class2);

var TwoWayBindingBehavior = (_dec3 = Object(__WEBPACK_IMPORTED_MODULE_1_aurelia_metadata__["c" /* mixin */])(modeBindingBehavior), _dec3(_class3 = function TwoWayBindingBehavior() {
  

  this.mode = __WEBPACK_IMPORTED_MODULE_0_aurelia_binding__["n" /* bindingMode */].twoWay;
}) || _class3);

/***/ }),

/***/ "aurelia-templating-resources/compose":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Compose", function() { return Compose; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_logging__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_task_queue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aurelia_pal__ = __webpack_require__(0);
var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}



function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}







var logger = __WEBPACK_IMPORTED_MODULE_1_aurelia_logging__["getLogger"]('templating-resources');

var Compose = (_dec = Object(__WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["q" /* customElement */])('compose'), _dec2 = Object(__WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__["d" /* inject */])(__WEBPACK_IMPORTED_MODULE_4_aurelia_pal__["b" /* DOM */].Element, __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__["a" /* Container */], __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["e" /* CompositionEngine */], __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["n" /* ViewSlot */], __WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["m" /* ViewResources */], __WEBPACK_IMPORTED_MODULE_2_aurelia_task_queue__["a" /* TaskQueue */]), _dec(_class = Object(__WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["r" /* noView */])(_class = _dec2(_class = (_class2 = function () {
  function Compose(element, container, compositionEngine, viewSlot, viewResources, taskQueue) {
    

    _initDefineProp(this, 'model', _descriptor, this);

    _initDefineProp(this, 'view', _descriptor2, this);

    _initDefineProp(this, 'viewModel', _descriptor3, this);

    _initDefineProp(this, 'swapOrder', _descriptor4, this);

    this.element = element;
    this.container = container;
    this.compositionEngine = compositionEngine;
    this.viewSlot = viewSlot;
    this.viewResources = viewResources;
    this.taskQueue = taskQueue;
    this.currentController = null;
    this.currentViewModel = null;
    this.changes = Object.create(null);
  }

  Compose.prototype.created = function created(owningView) {
    this.owningView = owningView;
  };

  Compose.prototype.bind = function bind(bindingContext, overrideContext) {
    this.bindingContext = bindingContext;
    this.overrideContext = overrideContext;
    this.changes.view = this.view;
    this.changes.viewModel = this.viewModel;
    this.changes.model = this.model;
    processChanges(this);
  };

  Compose.prototype.unbind = function unbind() {
    this.changes = Object.create(null);
    this.pendingTask = null;
    this.bindingContext = null;
    this.overrideContext = null;
    var returnToCache = true;
    var skipAnimation = true;
    this.viewSlot.removeAll(returnToCache, skipAnimation);
  };

  Compose.prototype.modelChanged = function modelChanged(newValue, oldValue) {
    this.changes.model = newValue;
    requestUpdate(this);
  };

  Compose.prototype.viewChanged = function viewChanged(newValue, oldValue) {
    this.changes.view = newValue;
    requestUpdate(this);
  };

  Compose.prototype.viewModelChanged = function viewModelChanged(newValue, oldValue) {
    this.changes.viewModel = newValue;
    requestUpdate(this);
  };

  return Compose;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'model', [__WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["o" /* bindable */]], {
  enumerable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'view', [__WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["o" /* bindable */]], {
  enumerable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'viewModel', [__WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["o" /* bindable */]], {
  enumerable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'swapOrder', [__WEBPACK_IMPORTED_MODULE_3_aurelia_templating__["o" /* bindable */]], {
  enumerable: true,
  initializer: null
})), _class2)) || _class) || _class) || _class);

function isEmpty(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
}

function tryActivateViewModel(vm, model) {
  if (vm && typeof vm.activate === 'function') {
    return Promise.resolve(vm.activate(model));
  }
}

function createInstruction(composer, instruction) {
  return Object.assign(instruction, {
    bindingContext: composer.bindingContext,
    overrideContext: composer.overrideContext,
    owningView: composer.owningView,
    container: composer.container,
    viewSlot: composer.viewSlot,
    viewResources: composer.viewResources,
    currentController: composer.currentController,
    host: composer.element,
    swapOrder: composer.swapOrder
  });
}

function processChanges(composer) {
  var changes = composer.changes;
  composer.changes = Object.create(null);

  if (!('view' in changes) && !('viewModel' in changes) && 'model' in changes) {
    composer.pendingTask = tryActivateViewModel(composer.currentViewModel, changes.model);
    if (!composer.pendingTask) {
      return;
    }
  } else {
    var instruction = {
      view: composer.view,
      viewModel: composer.currentViewModel || composer.viewModel,
      model: composer.model
    };

    instruction = Object.assign(instruction, changes);

    instruction = createInstruction(composer, instruction);
    composer.pendingTask = composer.compositionEngine.compose(instruction).then(function (controller) {
      composer.currentController = controller;
      composer.currentViewModel = controller ? controller.viewModel : null;
    });
  }

  composer.pendingTask = composer.pendingTask.catch(function (e) {
    logger.error(e);
  }).then(function () {
    if (!composer.pendingTask) {
      return;
    }

    composer.pendingTask = null;
    if (!isEmpty(composer.changes)) {
      processChanges(composer);
    }
  });
}

function requestUpdate(composer) {
  if (composer.pendingTask || composer.updateRequested) {
    return;
  }
  composer.updateRequested = true;
  composer.taskQueue.queueMicroTask(function () {
    composer.updateRequested = false;
    processChanges(composer);
  });
}

/***/ }),

/***/ "aurelia-templating-resources/debounce-binding-behavior":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebounceBindingBehavior", function() { return DebounceBindingBehavior; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_binding__ = __webpack_require__(3);




function debounce(newValue) {
  var _this = this;

  var state = this.debounceState;
  if (state.immediate) {
    state.immediate = false;
    this.debouncedMethod(newValue);
    return;
  }
  clearTimeout(state.timeoutId);
  state.timeoutId = setTimeout(function () {
    return _this.debouncedMethod(newValue);
  }, state.delay);
}

var DebounceBindingBehavior = function () {
  function DebounceBindingBehavior() {
    
  }

  DebounceBindingBehavior.prototype.bind = function bind(binding, source) {
    var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;

    var methodToDebounce = 'updateTarget';
    if (binding.callSource) {
      methodToDebounce = 'callSource';
    } else if (binding.updateSource && binding.mode === __WEBPACK_IMPORTED_MODULE_0_aurelia_binding__["n" /* bindingMode */].twoWay) {
      methodToDebounce = 'updateSource';
    }

    binding.debouncedMethod = binding[methodToDebounce];
    binding.debouncedMethod.originalName = methodToDebounce;

    binding[methodToDebounce] = debounce;

    binding.debounceState = {
      delay: delay,
      timeoutId: null,
      immediate: methodToDebounce === 'updateTarget' };
  };

  DebounceBindingBehavior.prototype.unbind = function unbind(binding, source) {
    var methodToRestore = binding.debouncedMethod.originalName;
    binding[methodToRestore] = binding.debouncedMethod;
    binding.debouncedMethod = null;
    clearTimeout(binding.debounceState.timeoutId);
    binding.debounceState = null;
  };

  return DebounceBindingBehavior;
}();

/***/ }),

/***/ "aurelia-templating-resources/else":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Else", function() { return Else; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_templating__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_dependency_injection__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__if_core__ = __webpack_require__(17);
var _dec, _dec2, _class;



function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Else = (_dec = Object(__WEBPACK_IMPORTED_MODULE_0_aurelia_templating__["p" /* customAttribute */])('else'), _dec2 = Object(__WEBPACK_IMPORTED_MODULE_1_aurelia_dependency_injection__["d" /* inject */])(__WEBPACK_IMPORTED_MODULE_0_aurelia_templating__["d" /* BoundViewFactory */], __WEBPACK_IMPORTED_MODULE_0_aurelia_templating__["n" /* ViewSlot */]), _dec(_class = Object(__WEBPACK_IMPORTED_MODULE_0_aurelia_templating__["t" /* templateController */])(_class = _dec2(_class = function (_IfCore) {
  _inherits(Else, _IfCore);

  function Else(viewFactory, viewSlot) {
    

    var _this = _possibleConstructorReturn(this, _IfCore.call(this, viewFactory, viewSlot));

    _this._registerInIf();
    return _this;
  }

  Else.prototype.bind = function bind(bindingContext, overrideContext) {
    _IfCore.prototype.bind.call(this, bindingContext, overrideContext);

    if (this.ifVm.condition) {
      this._hide();
    } else {
      this._show();
    }
  };

  Else.prototype._registerInIf = function _registerInIf() {
    var previous = this.viewSlot.anchor.previousSibling;
    while (previous && !previous.au) {
      previous = previous.previousSibling;
    }
    if (!previous || !previous.au.if) {
      throw new Error("Can't find matching If for Else custom attribute.");
    }
    this.ifVm = previous.au.if.viewModel;
    this.ifVm.elseVm = this;
  };

  return Else;
}(__WEBPACK_IMPORTED_MODULE_2__if_core__["a" /* IfCore */])) || _class) || _class) || _class);

/***/ }),

/***/ "aurelia-templating-resources/focus":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Focus", function() { return Focus; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_templating__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_dependency_injection__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_aurelia_task_queue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aurelia_pal__ = __webpack_require__(0);
var _dec, _dec2, _class;









var Focus = (_dec = Object(__WEBPACK_IMPORTED_MODULE_0_aurelia_templating__["p" /* customAttribute */])('focus', __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["n" /* bindingMode */].twoWay), _dec2 = Object(__WEBPACK_IMPORTED_MODULE_2_aurelia_dependency_injection__["d" /* inject */])(__WEBPACK_IMPORTED_MODULE_4_aurelia_pal__["b" /* DOM */].Element, __WEBPACK_IMPORTED_MODULE_3_aurelia_task_queue__["a" /* TaskQueue */]), _dec(_class = _dec2(_class = function () {
  function Focus(element, taskQueue) {
    

    this.element = element;
    this.taskQueue = taskQueue;
    this.isAttached = false;
    this.needsApply = false;
  }

  Focus.prototype.valueChanged = function valueChanged(newValue) {
    if (this.isAttached) {
      this._apply();
    } else {
      this.needsApply = true;
    }
  };

  Focus.prototype._apply = function _apply() {
    var _this = this;

    if (this.value) {
      this.taskQueue.queueMicroTask(function () {
        if (_this.value) {
          _this.element.focus();
        }
      });
    } else {
      this.element.blur();
    }
  };

  Focus.prototype.attached = function attached() {
    this.isAttached = true;
    if (this.needsApply) {
      this.needsApply = false;
      this._apply();
    }
    this.element.addEventListener('focus', this);
    this.element.addEventListener('blur', this);
  };

  Focus.prototype.detached = function detached() {
    this.isAttached = false;
    this.element.removeEventListener('focus', this);
    this.element.removeEventListener('blur', this);
  };

  Focus.prototype.handleEvent = function handleEvent(e) {
    if (e.type === 'focus') {
      this.value = true;
    } else if (__WEBPACK_IMPORTED_MODULE_4_aurelia_pal__["b" /* DOM */].activeElement !== this.element) {
      this.value = false;
    }
  };

  return Focus;
}()) || _class) || _class);

/***/ }),

/***/ "aurelia-templating-resources/hide":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hide", function() { return Hide; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_templating__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_pal__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__aurelia_hide_style__ = __webpack_require__(13);
var _dec, _dec2, _class;








var Hide = (_dec = Object(__WEBPACK_IMPORTED_MODULE_1_aurelia_templating__["p" /* customAttribute */])('hide'), _dec2 = Object(__WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__["d" /* inject */])(__WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["b" /* DOM */].Element, __WEBPACK_IMPORTED_MODULE_1_aurelia_templating__["a" /* Animator */], __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__["b" /* Optional */].of(__WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["b" /* DOM */].boundary, true)), _dec(_class = _dec2(_class = function () {
  function Hide(element, animator, domBoundary) {
    

    this.element = element;
    this.animator = animator;
    this.domBoundary = domBoundary;
  }

  Hide.prototype.created = function created() {
    Object(__WEBPACK_IMPORTED_MODULE_3__aurelia_hide_style__["b" /* injectAureliaHideStyleAtBoundary */])(this.domBoundary);
  };

  Hide.prototype.valueChanged = function valueChanged(newValue) {
    if (newValue) {
      this.animator.addClass(this.element, __WEBPACK_IMPORTED_MODULE_3__aurelia_hide_style__["a" /* aureliaHideClassName */]);
    } else {
      this.animator.removeClass(this.element, __WEBPACK_IMPORTED_MODULE_3__aurelia_hide_style__["a" /* aureliaHideClassName */]);
    }
  };

  Hide.prototype.bind = function bind(bindingContext) {
    this.valueChanged(this.value);
  };

  return Hide;
}()) || _class) || _class);

/***/ }),

/***/ "aurelia-templating-resources/if":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "If", function() { return If; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_templating__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_dependency_injection__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__if_core__ = __webpack_require__(17);
var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2;

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}



function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}





var If = (_dec = Object(__WEBPACK_IMPORTED_MODULE_0_aurelia_templating__["p" /* customAttribute */])('if'), _dec2 = Object(__WEBPACK_IMPORTED_MODULE_1_aurelia_dependency_injection__["d" /* inject */])(__WEBPACK_IMPORTED_MODULE_0_aurelia_templating__["d" /* BoundViewFactory */], __WEBPACK_IMPORTED_MODULE_0_aurelia_templating__["n" /* ViewSlot */]), _dec3 = Object(__WEBPACK_IMPORTED_MODULE_0_aurelia_templating__["o" /* bindable */])({ primaryProperty: true }), _dec(_class = Object(__WEBPACK_IMPORTED_MODULE_0_aurelia_templating__["t" /* templateController */])(_class = _dec2(_class = (_class2 = function (_IfCore) {
  _inherits(If, _IfCore);

  function If() {
    var _temp, _this, _ret;

    

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _IfCore.call.apply(_IfCore, [this].concat(args))), _this), _initDefineProp(_this, 'condition', _descriptor, _this), _initDefineProp(_this, 'swapOrder', _descriptor2, _this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  If.prototype.bind = function bind(bindingContext, overrideContext) {
    _IfCore.prototype.bind.call(this, bindingContext, overrideContext);
    if (this.condition) {
      this._show();
    } else {
      this._hide();
    }
  };

  If.prototype.conditionChanged = function conditionChanged(newValue) {
    this._update(newValue);
  };

  If.prototype._update = function _update(show) {
    var _this2 = this;

    if (this.animating) {
      return;
    }

    var promise = void 0;
    if (this.elseVm) {
      promise = show ? this._swap(this.elseVm, this) : this._swap(this, this.elseVm);
    } else {
      promise = show ? this._show() : this._hide();
    }

    if (promise) {
      this.animating = true;
      promise.then(function () {
        _this2.animating = false;
        if (_this2.condition !== _this2.showing) {
          _this2._update(_this2.condition);
        }
      });
    }
  };

  If.prototype._swap = function _swap(remove, add) {
    switch (this.swapOrder) {
      case 'before':
        return Promise.resolve(add._show()).then(function () {
          return remove._hide();
        });
      case 'with':
        return Promise.all([remove._hide(), add._show()]);
      default:
        var promise = remove._hide();
        return promise ? promise.then(function () {
          return add._show();
        }) : add._show();
    }
  };

  return If;
}(__WEBPACK_IMPORTED_MODULE_2__if_core__["a" /* IfCore */]), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'condition', [_dec3], {
  enumerable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'swapOrder', [__WEBPACK_IMPORTED_MODULE_0_aurelia_templating__["o" /* bindable */]], {
  enumerable: true,
  initializer: null
})), _class2)) || _class) || _class) || _class);

/***/ }),

/***/ "aurelia-templating-resources/repeat":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Repeat", function() { return Repeat; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_templating__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__repeat_strategy_locator__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__repeat_utilities__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__analyze_view_factory__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__abstract_repeater__ = __webpack_require__(25);
var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}



function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}









var Repeat = (_dec = Object(__WEBPACK_IMPORTED_MODULE_2_aurelia_templating__["p" /* customAttribute */])('repeat'), _dec2 = Object(__WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__["d" /* inject */])(__WEBPACK_IMPORTED_MODULE_2_aurelia_templating__["d" /* BoundViewFactory */], __WEBPACK_IMPORTED_MODULE_2_aurelia_templating__["i" /* TargetInstruction */], __WEBPACK_IMPORTED_MODULE_2_aurelia_templating__["n" /* ViewSlot */], __WEBPACK_IMPORTED_MODULE_2_aurelia_templating__["m" /* ViewResources */], __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["i" /* ObserverLocator */], __WEBPACK_IMPORTED_MODULE_3__repeat_strategy_locator__["a" /* RepeatStrategyLocator */]), _dec(_class = Object(__WEBPACK_IMPORTED_MODULE_2_aurelia_templating__["t" /* templateController */])(_class = _dec2(_class = (_class2 = function (_AbstractRepeater) {
  _inherits(Repeat, _AbstractRepeater);

  function Repeat(viewFactory, instruction, viewSlot, viewResources, observerLocator, strategyLocator) {
    

    var _this = _possibleConstructorReturn(this, _AbstractRepeater.call(this, {
      local: 'item',
      viewsRequireLifecycle: Object(__WEBPACK_IMPORTED_MODULE_5__analyze_view_factory__["a" /* viewsRequireLifecycle */])(viewFactory)
    }));

    _initDefineProp(_this, 'items', _descriptor, _this);

    _initDefineProp(_this, 'local', _descriptor2, _this);

    _initDefineProp(_this, 'key', _descriptor3, _this);

    _initDefineProp(_this, 'value', _descriptor4, _this);

    _this.viewFactory = viewFactory;
    _this.instruction = instruction;
    _this.viewSlot = viewSlot;
    _this.lookupFunctions = viewResources.lookupFunctions;
    _this.observerLocator = observerLocator;
    _this.key = 'key';
    _this.value = 'value';
    _this.strategyLocator = strategyLocator;
    _this.ignoreMutation = false;
    _this.sourceExpression = Object(__WEBPACK_IMPORTED_MODULE_4__repeat_utilities__["b" /* getItemsSourceExpression */])(_this.instruction, 'repeat.for');
    _this.isOneTime = Object(__WEBPACK_IMPORTED_MODULE_4__repeat_utilities__["d" /* isOneTime */])(_this.sourceExpression);
    _this.viewsRequireLifecycle = Object(__WEBPACK_IMPORTED_MODULE_5__analyze_view_factory__["a" /* viewsRequireLifecycle */])(viewFactory);
    return _this;
  }

  Repeat.prototype.call = function call(context, changes) {
    this[context](this.items, changes);
  };

  Repeat.prototype.bind = function bind(bindingContext, overrideContext) {
    this.scope = { bindingContext: bindingContext, overrideContext: overrideContext };
    this.matcherBinding = this._captureAndRemoveMatcherBinding();
    this.itemsChanged();
  };

  Repeat.prototype.unbind = function unbind() {
    this.scope = null;
    this.items = null;
    this.matcherBinding = null;
    this.viewSlot.removeAll(true, true);
    this._unsubscribeCollection();
  };

  Repeat.prototype._unsubscribeCollection = function _unsubscribeCollection() {
    if (this.collectionObserver) {
      this.collectionObserver.unsubscribe(this.callContext, this);
      this.collectionObserver = null;
      this.callContext = null;
    }
  };

  Repeat.prototype.itemsChanged = function itemsChanged() {
    this._unsubscribeCollection();

    if (!this.scope) {
      return;
    }

    var items = this.items;
    this.strategy = this.strategyLocator.getStrategy(items);
    if (!this.strategy) {
      throw new Error('Value for \'' + this.sourceExpression + '\' is non-repeatable');
    }

    if (!this.isOneTime && !this._observeInnerCollection()) {
      this._observeCollection();
    }
    this.strategy.instanceChanged(this, items);
  };

  Repeat.prototype._getInnerCollection = function _getInnerCollection() {
    var expression = Object(__WEBPACK_IMPORTED_MODULE_4__repeat_utilities__["e" /* unwrapExpression */])(this.sourceExpression);
    if (!expression) {
      return null;
    }
    return expression.evaluate(this.scope, null);
  };

  Repeat.prototype.handleCollectionMutated = function handleCollectionMutated(collection, changes) {
    if (!this.collectionObserver) {
      return;
    }
    this.strategy.instanceMutated(this, collection, changes);
  };

  Repeat.prototype.handleInnerCollectionMutated = function handleInnerCollectionMutated(collection, changes) {
    var _this2 = this;

    if (!this.collectionObserver) {
      return;
    }

    if (this.ignoreMutation) {
      return;
    }
    this.ignoreMutation = true;
    var newItems = this.sourceExpression.evaluate(this.scope, this.lookupFunctions);
    this.observerLocator.taskQueue.queueMicroTask(function () {
      return _this2.ignoreMutation = false;
    });

    if (newItems === this.items) {
      this.itemsChanged();
    } else {
      this.items = newItems;
    }
  };

  Repeat.prototype._observeInnerCollection = function _observeInnerCollection() {
    var items = this._getInnerCollection();
    var strategy = this.strategyLocator.getStrategy(items);
    if (!strategy) {
      return false;
    }
    this.collectionObserver = strategy.getCollectionObserver(this.observerLocator, items);
    if (!this.collectionObserver) {
      return false;
    }
    this.callContext = 'handleInnerCollectionMutated';
    this.collectionObserver.subscribe(this.callContext, this);
    return true;
  };

  Repeat.prototype._observeCollection = function _observeCollection() {
    var items = this.items;
    this.collectionObserver = this.strategy.getCollectionObserver(this.observerLocator, items);
    if (this.collectionObserver) {
      this.callContext = 'handleCollectionMutated';
      this.collectionObserver.subscribe(this.callContext, this);
    }
  };

  Repeat.prototype._captureAndRemoveMatcherBinding = function _captureAndRemoveMatcherBinding() {
    if (this.viewFactory.viewFactory) {
      var instructions = this.viewFactory.viewFactory.instructions;
      var instructionIds = Object.keys(instructions);
      for (var i = 0; i < instructionIds.length; i++) {
        var expressions = instructions[instructionIds[i]].expressions;
        if (expressions) {
          for (var ii = 0; i < expressions.length; i++) {
            if (expressions[ii].targetProperty === 'matcher') {
              var matcherBinding = expressions[ii];
              expressions.splice(ii, 1);
              return matcherBinding;
            }
          }
        }
      }
    }

    return undefined;
  };

  Repeat.prototype.viewCount = function viewCount() {
    return this.viewSlot.children.length;
  };

  Repeat.prototype.views = function views() {
    return this.viewSlot.children;
  };

  Repeat.prototype.view = function view(index) {
    return this.viewSlot.children[index];
  };

  Repeat.prototype.matcher = function matcher() {
    return this.matcherBinding ? this.matcherBinding.sourceExpression.evaluate(this.scope, this.matcherBinding.lookupFunctions) : null;
  };

  Repeat.prototype.addView = function addView(bindingContext, overrideContext) {
    var view = this.viewFactory.create();
    view.bind(bindingContext, overrideContext);
    this.viewSlot.add(view);
  };

  Repeat.prototype.insertView = function insertView(index, bindingContext, overrideContext) {
    var view = this.viewFactory.create();
    view.bind(bindingContext, overrideContext);
    this.viewSlot.insert(index, view);
  };

  Repeat.prototype.moveView = function moveView(sourceIndex, targetIndex) {
    this.viewSlot.move(sourceIndex, targetIndex);
  };

  Repeat.prototype.removeAllViews = function removeAllViews(returnToCache, skipAnimation) {
    return this.viewSlot.removeAll(returnToCache, skipAnimation);
  };

  Repeat.prototype.removeViews = function removeViews(viewsToRemove, returnToCache, skipAnimation) {
    return this.viewSlot.removeMany(viewsToRemove, returnToCache, skipAnimation);
  };

  Repeat.prototype.removeView = function removeView(index, returnToCache, skipAnimation) {
    return this.viewSlot.removeAt(index, returnToCache, skipAnimation);
  };

  Repeat.prototype.updateBindings = function updateBindings(view) {
    var j = view.bindings.length;
    while (j--) {
      Object(__WEBPACK_IMPORTED_MODULE_4__repeat_utilities__["f" /* updateOneTimeBinding */])(view.bindings[j]);
    }
    j = view.controllers.length;
    while (j--) {
      var k = view.controllers[j].boundProperties.length;
      while (k--) {
        var binding = view.controllers[j].boundProperties[k].binding;
        Object(__WEBPACK_IMPORTED_MODULE_4__repeat_utilities__["f" /* updateOneTimeBinding */])(binding);
      }
    }
  };

  return Repeat;
}(__WEBPACK_IMPORTED_MODULE_6__abstract_repeater__["a" /* AbstractRepeater */]), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'items', [__WEBPACK_IMPORTED_MODULE_2_aurelia_templating__["o" /* bindable */]], {
  enumerable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'local', [__WEBPACK_IMPORTED_MODULE_2_aurelia_templating__["o" /* bindable */]], {
  enumerable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'key', [__WEBPACK_IMPORTED_MODULE_2_aurelia_templating__["o" /* bindable */]], {
  enumerable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'value', [__WEBPACK_IMPORTED_MODULE_2_aurelia_templating__["o" /* bindable */]], {
  enumerable: true,
  initializer: null
})), _class2)) || _class) || _class) || _class);

/***/ }),

/***/ "aurelia-templating-resources/replaceable":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Replaceable", function() { return Replaceable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_templating__ = __webpack_require__(1);
var _dec, _dec2, _class;






var Replaceable = (_dec = Object(__WEBPACK_IMPORTED_MODULE_1_aurelia_templating__["p" /* customAttribute */])('replaceable'), _dec2 = Object(__WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__["d" /* inject */])(__WEBPACK_IMPORTED_MODULE_1_aurelia_templating__["d" /* BoundViewFactory */], __WEBPACK_IMPORTED_MODULE_1_aurelia_templating__["n" /* ViewSlot */]), _dec(_class = Object(__WEBPACK_IMPORTED_MODULE_1_aurelia_templating__["t" /* templateController */])(_class = _dec2(_class = function () {
  function Replaceable(viewFactory, viewSlot) {
    

    this.viewFactory = viewFactory;
    this.viewSlot = viewSlot;
    this.view = null;
  }

  Replaceable.prototype.bind = function bind(bindingContext, overrideContext) {
    if (this.view === null) {
      this.view = this.viewFactory.create();
      this.viewSlot.add(this.view);
    }

    this.view.bind(bindingContext, overrideContext);
  };

  Replaceable.prototype.unbind = function unbind() {
    this.view.unbind();
  };

  return Replaceable;
}()) || _class) || _class) || _class);

/***/ }),

/***/ "aurelia-templating-resources/sanitize-html":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SanitizeHTMLValueConverter", function() { return SanitizeHTMLValueConverter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_binding__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_dependency_injection__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__html_sanitizer__ = __webpack_require__(26);
var _dec, _dec2, _class;







var SanitizeHTMLValueConverter = (_dec = Object(__WEBPACK_IMPORTED_MODULE_0_aurelia_binding__["w" /* valueConverter */])('sanitizeHTML'), _dec2 = Object(__WEBPACK_IMPORTED_MODULE_1_aurelia_dependency_injection__["d" /* inject */])(__WEBPACK_IMPORTED_MODULE_2__html_sanitizer__["a" /* HTMLSanitizer */]), _dec(_class = _dec2(_class = function () {
  function SanitizeHTMLValueConverter(sanitizer) {
    

    this.sanitizer = sanitizer;
  }

  SanitizeHTMLValueConverter.prototype.toView = function toView(untrustedMarkup) {
    if (untrustedMarkup === null || untrustedMarkup === undefined) {
      return null;
    }

    return this.sanitizer.sanitize(untrustedMarkup);
  };

  return SanitizeHTMLValueConverter;
}()) || _class) || _class);

/***/ }),

/***/ "aurelia-templating-resources/self-binding-behavior":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelfBindingBehavior", function() { return SelfBindingBehavior; });


function findOriginalEventTarget(event) {
  return event.path && event.path[0] || event.deepPath && event.deepPath[0] || event.target;
}

function handleSelfEvent(event) {
  var target = findOriginalEventTarget(event);
  if (this.target !== target) return;
  this.selfEventCallSource(event);
}

var SelfBindingBehavior = function () {
  function SelfBindingBehavior() {
    
  }

  SelfBindingBehavior.prototype.bind = function bind(binding, source) {
    if (!binding.callSource || !binding.targetEvent) throw new Error('Self binding behavior only supports event.');
    binding.selfEventCallSource = binding.callSource;
    binding.callSource = handleSelfEvent;
  };

  SelfBindingBehavior.prototype.unbind = function unbind(binding, source) {
    binding.callSource = binding.selfEventCallSource;
    binding.selfEventCallSource = null;
  };

  return SelfBindingBehavior;
}();

/***/ }),

/***/ "aurelia-templating-resources/show":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Show", function() { return Show; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_templating__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_pal__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__aurelia_hide_style__ = __webpack_require__(13);
var _dec, _dec2, _class;








var Show = (_dec = Object(__WEBPACK_IMPORTED_MODULE_1_aurelia_templating__["p" /* customAttribute */])('show'), _dec2 = Object(__WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__["d" /* inject */])(__WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["b" /* DOM */].Element, __WEBPACK_IMPORTED_MODULE_1_aurelia_templating__["a" /* Animator */], __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__["b" /* Optional */].of(__WEBPACK_IMPORTED_MODULE_2_aurelia_pal__["b" /* DOM */].boundary, true)), _dec(_class = _dec2(_class = function () {
  function Show(element, animator, domBoundary) {
    

    this.element = element;
    this.animator = animator;
    this.domBoundary = domBoundary;
  }

  Show.prototype.created = function created() {
    Object(__WEBPACK_IMPORTED_MODULE_3__aurelia_hide_style__["b" /* injectAureliaHideStyleAtBoundary */])(this.domBoundary);
  };

  Show.prototype.valueChanged = function valueChanged(newValue) {
    if (newValue) {
      this.animator.removeClass(this.element, __WEBPACK_IMPORTED_MODULE_3__aurelia_hide_style__["a" /* aureliaHideClassName */]);
    } else {
      this.animator.addClass(this.element, __WEBPACK_IMPORTED_MODULE_3__aurelia_hide_style__["a" /* aureliaHideClassName */]);
    }
  };

  Show.prototype.bind = function bind(bindingContext) {
    this.valueChanged(this.value);
  };

  return Show;
}()) || _class) || _class);

/***/ }),

/***/ "aurelia-templating-resources/signal-binding-behavior":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignalBindingBehavior", function() { return SignalBindingBehavior; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__binding_signaler__ = __webpack_require__(27);




var SignalBindingBehavior = function () {
  SignalBindingBehavior.inject = function inject() {
    return [__WEBPACK_IMPORTED_MODULE_0__binding_signaler__["a" /* BindingSignaler */]];
  };

  function SignalBindingBehavior(bindingSignaler) {
    

    this.signals = bindingSignaler.signals;
  }

  SignalBindingBehavior.prototype.bind = function bind(binding, source) {
    if (!binding.updateTarget) {
      throw new Error('Only property bindings and string interpolation bindings can be signaled.  Trigger, delegate and call bindings cannot be signaled.');
    }
    if (arguments.length === 3) {
      var name = arguments[2];
      var bindings = this.signals[name] || (this.signals[name] = []);
      bindings.push(binding);
      binding.signalName = name;
    } else if (arguments.length > 3) {
      var names = Array.prototype.slice.call(arguments, 2);
      var i = names.length;
      while (i--) {
        var _name = names[i];
        var _bindings = this.signals[_name] || (this.signals[_name] = []);
        _bindings.push(binding);
      }
      binding.signalName = names;
    } else {
      throw new Error('Signal name is required.');
    }
  };

  SignalBindingBehavior.prototype.unbind = function unbind(binding, source) {
    var name = binding.signalName;
    binding.signalName = null;
    if (Array.isArray(name)) {
      var names = name;
      var i = names.length;
      while (i--) {
        var n = names[i];
        var bindings = this.signals[n];
        bindings.splice(bindings.indexOf(binding), 1);
      }
    } else {
      var _bindings2 = this.signals[name];
      _bindings2.splice(_bindings2.indexOf(binding), 1);
    }
  };

  return SignalBindingBehavior;
}();

/***/ }),

/***/ "aurelia-templating-resources/throttle-binding-behavior":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThrottleBindingBehavior", function() { return ThrottleBindingBehavior; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_binding__ = __webpack_require__(3);




function throttle(newValue) {
  var _this = this;

  var state = this.throttleState;
  var elapsed = +new Date() - state.last;
  if (elapsed >= state.delay) {
    clearTimeout(state.timeoutId);
    state.timeoutId = null;
    state.last = +new Date();
    this.throttledMethod(newValue);
    return;
  }
  state.newValue = newValue;
  if (state.timeoutId === null) {
    state.timeoutId = setTimeout(function () {
      state.timeoutId = null;
      state.last = +new Date();
      _this.throttledMethod(state.newValue);
    }, state.delay - elapsed);
  }
}

var ThrottleBindingBehavior = function () {
  function ThrottleBindingBehavior() {
    
  }

  ThrottleBindingBehavior.prototype.bind = function bind(binding, source) {
    var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;

    var methodToThrottle = 'updateTarget';
    if (binding.callSource) {
      methodToThrottle = 'callSource';
    } else if (binding.updateSource && binding.mode === __WEBPACK_IMPORTED_MODULE_0_aurelia_binding__["n" /* bindingMode */].twoWay) {
      methodToThrottle = 'updateSource';
    }

    binding.throttledMethod = binding[methodToThrottle];
    binding.throttledMethod.originalName = methodToThrottle;

    binding[methodToThrottle] = throttle;

    binding.throttleState = {
      delay: delay,
      last: 0,
      timeoutId: null
    };
  };

  ThrottleBindingBehavior.prototype.unbind = function unbind(binding, source) {
    var methodToRestore = binding.throttledMethod.originalName;
    binding[methodToRestore] = binding.throttledMethod;
    binding.throttledMethod = null;
    clearTimeout(binding.throttleState.timeoutId);
    binding.throttleState = null;
  };

  return ThrottleBindingBehavior;
}();

/***/ }),

/***/ "aurelia-templating-resources/update-trigger-binding-behavior":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTriggerBindingBehavior", function() { return UpdateTriggerBindingBehavior; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_binding__ = __webpack_require__(3);
var _class, _temp;





var eventNamesRequired = 'The updateTrigger binding behavior requires at least one event name argument: eg <input value.bind="firstName & updateTrigger:\'blur\'">';
var notApplicableMessage = 'The updateTrigger binding behavior can only be applied to two-way bindings on input/select elements.';

var UpdateTriggerBindingBehavior = (_temp = _class = function () {
  function UpdateTriggerBindingBehavior(eventManager) {
    

    this.eventManager = eventManager;
  }

  UpdateTriggerBindingBehavior.prototype.bind = function bind(binding, source) {
    for (var _len = arguments.length, events = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      events[_key - 2] = arguments[_key];
    }

    if (events.length === 0) {
      throw new Error(eventNamesRequired);
    }
    if (binding.mode !== __WEBPACK_IMPORTED_MODULE_0_aurelia_binding__["n" /* bindingMode */].twoWay) {
      throw new Error(notApplicableMessage);
    }

    var targetObserver = binding.observerLocator.getObserver(binding.target, binding.targetProperty);
    if (!targetObserver.handler) {
      throw new Error(notApplicableMessage);
    }
    binding.targetObserver = targetObserver;

    targetObserver.originalHandler = binding.targetObserver.handler;

    var handler = this.eventManager.createElementHandler(events);
    targetObserver.handler = handler;
  };

  UpdateTriggerBindingBehavior.prototype.unbind = function unbind(binding, source) {
    binding.targetObserver.handler = binding.targetObserver.originalHandler;
    binding.targetObserver.originalHandler = null;
  };

  return UpdateTriggerBindingBehavior;
}(), _class.inject = [__WEBPACK_IMPORTED_MODULE_0_aurelia_binding__["f" /* EventManager */]], _temp);

/***/ }),

/***/ "aurelia-templating-resources/with":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "With", function() { return With; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_templating__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_binding__ = __webpack_require__(3);
var _dec, _dec2, _class;







var With = (_dec = Object(__WEBPACK_IMPORTED_MODULE_1_aurelia_templating__["p" /* customAttribute */])('with'), _dec2 = Object(__WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__["d" /* inject */])(__WEBPACK_IMPORTED_MODULE_1_aurelia_templating__["d" /* BoundViewFactory */], __WEBPACK_IMPORTED_MODULE_1_aurelia_templating__["n" /* ViewSlot */]), _dec(_class = Object(__WEBPACK_IMPORTED_MODULE_1_aurelia_templating__["t" /* templateController */])(_class = _dec2(_class = function () {
  function With(viewFactory, viewSlot) {
    

    this.viewFactory = viewFactory;
    this.viewSlot = viewSlot;
    this.parentOverrideContext = null;
    this.view = null;
  }

  With.prototype.bind = function bind(bindingContext, overrideContext) {
    this.parentOverrideContext = overrideContext;
    this.valueChanged(this.value);
  };

  With.prototype.valueChanged = function valueChanged(newValue) {
    var overrideContext = Object(__WEBPACK_IMPORTED_MODULE_2_aurelia_binding__["q" /* createOverrideContext */])(newValue, this.parentOverrideContext);
    if (!this.view) {
      this.view = this.viewFactory.create();
      this.view.bind(newValue, overrideContext);
      this.viewSlot.add(this.view);
    } else {
      this.view.bind(newValue, overrideContext);
    }
  };

  With.prototype.unbind = function unbind() {
    this.parentOverrideContext = null;

    if (this.view) {
      this.view.unbind();
    }
  };

  return With;
}()) || _class) || _class) || _class);

/***/ }),

/***/ "aurelia-templating-router":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configure", function() { return configure; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_pal__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__route_loader__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_view__ = __webpack_require__("aurelia-templating-router/router-view");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__route_href__ = __webpack_require__("aurelia-templating-router/route-href");
/* unused harmony reexport TemplatingRouteLoader */
/* unused harmony reexport RouterView */
/* unused harmony reexport RouteHref */






function configure(config) {
  config.singleton(__WEBPACK_IMPORTED_MODULE_1_aurelia_router__["b" /* RouteLoader */], __WEBPACK_IMPORTED_MODULE_2__route_loader__["a" /* TemplatingRouteLoader */]).singleton(__WEBPACK_IMPORTED_MODULE_1_aurelia_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_1_aurelia_router__["a" /* AppRouter */]).globalResources('./router-view', './route-href');

  config.container.registerAlias(__WEBPACK_IMPORTED_MODULE_1_aurelia_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_1_aurelia_router__["a" /* AppRouter */]);
}



/***/ }),

/***/ "aurelia-templating-router/route-href":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteHref", function() { return RouteHref; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_templating__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_dependency_injection__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_aurelia_pal__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aurelia_logging__ = __webpack_require__(4);
var _dec, _dec2, _dec3, _dec4, _dec5, _class;









var logger = __WEBPACK_IMPORTED_MODULE_4_aurelia_logging__["getLogger"]('route-href');

var RouteHref = (_dec = Object(__WEBPACK_IMPORTED_MODULE_0_aurelia_templating__["p" /* customAttribute */])('route-href'), _dec2 = Object(__WEBPACK_IMPORTED_MODULE_0_aurelia_templating__["o" /* bindable */])({ name: 'route', changeHandler: 'processChange', primaryProperty: true }), _dec3 = Object(__WEBPACK_IMPORTED_MODULE_0_aurelia_templating__["o" /* bindable */])({ name: 'params', changeHandler: 'processChange' }), _dec4 = Object(__WEBPACK_IMPORTED_MODULE_0_aurelia_templating__["o" /* bindable */])({ name: 'attribute', defaultValue: 'href' }), _dec5 = Object(__WEBPACK_IMPORTED_MODULE_1_aurelia_dependency_injection__["d" /* inject */])(__WEBPACK_IMPORTED_MODULE_2_aurelia_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_3_aurelia_pal__["b" /* DOM */].Element), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = function () {
  function RouteHref(router, element) {
    

    this.router = router;
    this.element = element;
  }

  RouteHref.prototype.attached = function attached() {
    this.isActive = true;
    this.processChange();
  };

  RouteHref.prototype.unbind = function unbind() {
    this.isActive = false;
  };

  RouteHref.prototype.attributeChanged = function attributeChanged(value, previous) {
    if (previous) {
      this.element.removeAttribute(previous);
    }

    this.processChange();
  };

  RouteHref.prototype.processChange = function processChange() {
    var _this = this;

    return this.router.ensureConfigured().then(function () {
      if (!_this.isActive) {
        return null;
      }

      var href = _this.router.generate(_this.route, _this.params);

      if (_this.element.au.controller) {
        _this.element.au.controller.viewModel[_this.attribute] = href;
      } else {
        _this.element.setAttribute(_this.attribute, href);
      }

      return null;
    }).catch(function (reason) {
      logger.error(reason);
    });
  };

  return RouteHref;
}()) || _class) || _class) || _class) || _class) || _class);

/***/ }),

/***/ "aurelia-templating-router/router-view":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterView", function() { return RouterView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterViewLocator", function() { return RouterViewLocator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_binding__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_templating__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_aurelia_router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_aurelia_metadata__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_aurelia_pal__ = __webpack_require__(0);
var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}



function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}








var RouterView = (_dec = Object(__WEBPACK_IMPORTED_MODULE_2_aurelia_templating__["q" /* customElement */])('router-view'), _dec2 = Object(__WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__["d" /* inject */])(__WEBPACK_IMPORTED_MODULE_5_aurelia_pal__["b" /* DOM */].Element, __WEBPACK_IMPORTED_MODULE_0_aurelia_dependency_injection__["a" /* Container */], __WEBPACK_IMPORTED_MODULE_2_aurelia_templating__["n" /* ViewSlot */], __WEBPACK_IMPORTED_MODULE_3_aurelia_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_2_aurelia_templating__["l" /* ViewLocator */], __WEBPACK_IMPORTED_MODULE_2_aurelia_templating__["f" /* CompositionTransaction */], __WEBPACK_IMPORTED_MODULE_2_aurelia_templating__["e" /* CompositionEngine */]), _dec(_class = Object(__WEBPACK_IMPORTED_MODULE_2_aurelia_templating__["r" /* noView */])(_class = _dec2(_class = (_class2 = function () {
  function RouterView(element, container, viewSlot, router, viewLocator, compositionTransaction, compositionEngine) {
    

    _initDefineProp(this, 'swapOrder', _descriptor, this);

    _initDefineProp(this, 'layoutView', _descriptor2, this);

    _initDefineProp(this, 'layoutViewModel', _descriptor3, this);

    _initDefineProp(this, 'layoutModel', _descriptor4, this);

    this.element = element;
    this.container = container;
    this.viewSlot = viewSlot;
    this.router = router;
    this.viewLocator = viewLocator;
    this.compositionTransaction = compositionTransaction;
    this.compositionEngine = compositionEngine;
    this.router.registerViewPort(this, this.element.getAttribute('name'));

    if (!('initialComposition' in compositionTransaction)) {
      compositionTransaction.initialComposition = true;
      this.compositionTransactionNotifier = compositionTransaction.enlist();
    }
  }

  RouterView.prototype.created = function created(owningView) {
    this.owningView = owningView;
  };

  RouterView.prototype.bind = function bind(bindingContext, overrideContext) {
    this.container.viewModel = bindingContext;
    this.overrideContext = overrideContext;
  };

  RouterView.prototype.process = function process(viewPortInstruction, waitToSwap) {
    var _this = this;

    var component = viewPortInstruction.component;
    var childContainer = component.childContainer;
    var viewModel = component.viewModel;
    var viewModelResource = component.viewModelResource;
    var metadata = viewModelResource.metadata;
    var config = component.router.currentInstruction.config;
    var viewPort = config.viewPorts ? config.viewPorts[viewPortInstruction.name] : {};

    childContainer.get(RouterViewLocator)._notify(this);

    var layoutInstruction = {
      viewModel: viewPort.layoutViewModel || config.layoutViewModel || this.layoutViewModel,
      view: viewPort.layoutView || config.layoutView || this.layoutView,
      model: viewPort.layoutModel || config.layoutModel || this.layoutModel,
      router: viewPortInstruction.component.router,
      childContainer: childContainer,
      viewSlot: this.viewSlot
    };

    var viewStrategy = this.viewLocator.getViewStrategy(component.view || viewModel);
    if (viewStrategy && component.view) {
      viewStrategy.makeRelativeTo(__WEBPACK_IMPORTED_MODULE_4_aurelia_metadata__["a" /* Origin */].get(component.router.container.viewModel.constructor).moduleId);
    }

    return metadata.load(childContainer, viewModelResource.value, null, viewStrategy, true).then(function (viewFactory) {
      if (!_this.compositionTransactionNotifier) {
        _this.compositionTransactionOwnershipToken = _this.compositionTransaction.tryCapture();
      }

      if (layoutInstruction.viewModel || layoutInstruction.view) {
        viewPortInstruction.layoutInstruction = layoutInstruction;
      }

      viewPortInstruction.controller = metadata.create(childContainer, __WEBPACK_IMPORTED_MODULE_2_aurelia_templating__["b" /* BehaviorInstruction */].dynamic(_this.element, viewModel, viewFactory));

      if (waitToSwap) {
        return null;
      }

      _this.swap(viewPortInstruction);
    });
  };

  RouterView.prototype.swap = function swap(viewPortInstruction) {
    var _this2 = this;

    var layoutInstruction = viewPortInstruction.layoutInstruction;
    var previousView = this.view;

    var work = function work() {
      var swapStrategy = __WEBPACK_IMPORTED_MODULE_2_aurelia_templating__["h" /* SwapStrategies */][_this2.swapOrder] || __WEBPACK_IMPORTED_MODULE_2_aurelia_templating__["h" /* SwapStrategies */].after;
      var viewSlot = _this2.viewSlot;

      swapStrategy(viewSlot, previousView, function () {
        return Promise.resolve(viewSlot.add(_this2.view));
      }).then(function () {
        _this2._notify();
      });
    };

    var ready = function ready(owningView) {
      viewPortInstruction.controller.automate(_this2.overrideContext, owningView);
      if (_this2.compositionTransactionOwnershipToken) {
        return _this2.compositionTransactionOwnershipToken.waitForCompositionComplete().then(function () {
          _this2.compositionTransactionOwnershipToken = null;
          return work();
        });
      }

      return work();
    };

    if (layoutInstruction) {
      if (!layoutInstruction.viewModel) {
        layoutInstruction.viewModel = {};
      }

      return this.compositionEngine.createController(layoutInstruction).then(function (controller) {
        __WEBPACK_IMPORTED_MODULE_2_aurelia_templating__["g" /* ShadowDOM */].distributeView(viewPortInstruction.controller.view, controller.slots || controller.view.slots);
        controller.automate(Object(__WEBPACK_IMPORTED_MODULE_1_aurelia_binding__["q" /* createOverrideContext */])(layoutInstruction.viewModel), _this2.owningView);
        controller.view.children.push(viewPortInstruction.controller.view);
        return controller.view || controller;
      }).then(function (newView) {
        _this2.view = newView;
        return ready(newView);
      });
    }

    this.view = viewPortInstruction.controller.view;

    return ready(this.owningView);
  };

  RouterView.prototype._notify = function _notify() {
    if (this.compositionTransactionNotifier) {
      this.compositionTransactionNotifier.done();
      this.compositionTransactionNotifier = null;
    }
  };

  return RouterView;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'swapOrder', [__WEBPACK_IMPORTED_MODULE_2_aurelia_templating__["o" /* bindable */]], {
  enumerable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'layoutView', [__WEBPACK_IMPORTED_MODULE_2_aurelia_templating__["o" /* bindable */]], {
  enumerable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'layoutViewModel', [__WEBPACK_IMPORTED_MODULE_2_aurelia_templating__["o" /* bindable */]], {
  enumerable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'layoutModel', [__WEBPACK_IMPORTED_MODULE_2_aurelia_templating__["o" /* bindable */]], {
  enumerable: true,
  initializer: null
})), _class2)) || _class) || _class) || _class);

var RouterViewLocator = function () {
  function RouterViewLocator() {
    var _this3 = this;

    

    this.promise = new Promise(function (resolve) {
      return _this3.resolve = resolve;
    });
  }

  RouterViewLocator.prototype.findNearest = function findNearest() {
    return this.promise;
  };

  RouterViewLocator.prototype._notify = function _notify(routerView) {
    this.resolve(routerView);
  };

  return RouterViewLocator;
}();

/***/ }),

/***/ "boot":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["configure"] = configure;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_framework__ = __webpack_require__("aurelia-framework");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_fetch_client__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bootstrap_dist_css_bootstrap_min_css__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bootstrap_dist_css_bootstrap_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_bootstrap_dist_css_bootstrap_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_font_awesome_css_font_awesome_min_css__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_font_awesome_css_font_awesome_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_font_awesome_css_font_awesome_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_isomorphic_fetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_bootstrap__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_bootstrap__);






function configure(aurelia) {
    aurelia.use.standardConfiguration();
    aurelia.use.plugin('aurelia-bootstrap', function (config) {
        config.options.popoverPosition = 'bottom';
        config.options.popoverTrigger = 'outsideClick';
    });
    if (true) {
        aurelia.use.developmentLogging();
    }
    new __WEBPACK_IMPORTED_MODULE_2_aurelia_fetch_client__["a" /* HttpClient */]().configure(function (config) {
        var baseUrl = document.getElementsByTagName("base")[0].href;
        config.withBaseUrl(baseUrl);
    });
    aurelia.start().then(function () { return aurelia.setRoot('shell'); });
}


/***/ }),

/***/ "components/fullnav/fullnav":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullNav", function() { return FullNav; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__ = __webpack_require__("aurelia-framework");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__ = __webpack_require__("aurelia-event-aggregator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_app_constants__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bootstrap__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_bootstrap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FullNav = /** @class */ (function () {
    function FullNav(_ea, _pev) {
        this._ea = _ea;
        this._pev = _pev;
    }
    FullNav.prototype.ddlPdf = function () { this._ea.publish(this._pev.DownloadPdfEvent, {}); };
    FullNav.prototype.ddlPpt = function () { this._ea.publish(this._pev.DownloadPptEvent, {}); };
    FullNav.prototype.ddlExcel = function () { this._ea.publish(this._pev.DownloadExcelEvent, {}); };
    FullNav.prototype.ddlImg = function () { this._ea.publish(this._pev.DownloadImageEvent, {}); };
    FullNav.prototype.attached = function () {
        /*
        console.log("Fullnav attached");
        let title = $('[ref*="popoverMenu"] .p-title').clone();
        let pcnt = $('[ref*="popoverMenu"] .p-content').clone();
        console.log(title.html());
        console.log(pcnt.html());
        let opt: PopoverOptions = {
            content: pcnt.html(),
            html: true,
            title: title.html(),
            trigger: "click",
            placement: "bottom"
        };
        $('#popoverMenu').popover(opt);
        //*/
    };
    FullNav = __decorate([
        __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["c" /* autoinject */],
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__["a" /* EventAggregator */], __WEBPACK_IMPORTED_MODULE_2__helpers_app_constants__["a" /* PublishEvents */]])
    ], FullNav);
    return FullNav;
}());



/***/ }),

/***/ "components/fullnav/fullnav.html":
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\r\n    <require from=\"../popover-menu/popover-menu\"></require>\r\n    <div ref='p1'>\r\n        <div class=\"popover-title\">Welcome!</div>\r\n        <div class=\"popover-content list-group\">\r\n            <a class=\"list-group-item\" style=\"cursor: pointer;\"><i class=\"fa fa-user\"></i> Your Profile</a>\r\n            <a class=\"list-group-item\" style=\"cursor: pointer;\"><i class=\"fa fa-search\"></i> Search</a>\r\n            <a href=\"~/Account/SelectSite\" class=\"list-group-item\"><i class=\"fa fa-server\"></i> Switch Site</a>\r\n            <a href=\"~/Account/Logout\" class=\"list-group-item\"><i class=\"fa fa-sign-out\"></i> Sign Out</a>\r\n        </div>\r\n    </div>\r\n    <ul class=\"nav navbar-nav navbar-right my-navbar my-navbar-right\">\r\n        <li class=\"nav-item\">\r\n            <a href=\"#\" class=\"fsTogglerBtn\" onclick=\"toggleFullScreen($(this)); return false;\">\r\n                <i class=\"fa fa-arrows-alt\"></i>\r\n            </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a href=\"#\" onclick=\"launchSubscribeModal(); return false;\">\r\n                <i class=\"fa fa-envelope\"></i>\r\n            </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a click.delegate=\"ddlExcel()\">\r\n                <i class=\"fa fa-file-excel-o\"></i>\r\n            </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a click.delegate=\"ddlPdf()\">\r\n                <i class=\"fa fa-file-pdf-o\"></i>\r\n            </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a click.delegate=\"ddlImg()\">\r\n                <i class=\"fa fa-file-image-o\"></i>\r\n            </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a click.delegate=\"ddlPpt()\">\r\n                <i class=\"fa fa-file-powerpoint-o\"></i>\r\n            </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a popmenu=\"customPopover.bind: p1\">\r\n                <i class=\"fa fa-ellipsis-v\" aria-hidden=\"true\"></i>\r\n            </a>\r\n        </li>\r\n        <li class=\"nav-item hidden-xs\">\r\n            <div class=\"navbar-brand\">\r\n                <img class=\"img-responsive img-thumbnail\" style=\"height:40px; width:60px;\" src=\"" + __webpack_require__(29) + "\" />\r\n            </div>\r\n        </li>\r\n    </ul>\r\n</template>";

/***/ }),

/***/ "components/home/home":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Home", function() { return Home; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__ = __webpack_require__("aurelia-framework");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_menuDataRepository__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_aurelia_event_aggregator__ = __webpack_require__("aurelia-event-aggregator");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Home = /** @class */ (function () {
    function Home(mdr, ea) {
        this.mdr = mdr;
        this.ea = ea;
        console.log("home.ts constructed");
    }
    Home.prototype.activate = function () {
        var _this = this;
        console.log("home.ts activated");
        var prm = new Promise(function (res, rej) {
            _this.mdr.getData()
                .then(function (data) {
                if (data && data.Categories.length > 0) {
                    _this.menuData = data;
                    //this.addImagePaths(data);
                    _this.selectedCategory = _this.menuData.Categories[0];
                    if (_this.selectedCategory && _this.selectedCategory.Workbooks.length > 0) {
                        _this.selectedWorkbook = _this.selectedCategory.Workbooks[0];
                        if (_this.selectedWorkbook && _this.selectedWorkbook.Views.length > 0) {
                            _this.selectedView = _this.selectedWorkbook.Views[0];
                        }
                    }
                    _this.ea.publish("newViz", _this.selectedView);
                    console.log("menuData populated");
                    res();
                }
                console.log("menuData not populated");
                res();
            })
                .catch(function (err) { rej(err); });
        });
        return prm;
    };
    Home.prototype.addImagePaths = function (data) {
        data.Categories.forEach(function (c) {
            if (c.Workbooks && c.Workbooks.length > 0) {
                c.Workbooks.forEach(function (w) {
                    w.AltPreviewImage = "../../ClientApp/images/previews/site-" + data.SiteId + "/workbook-" + w.Id + ".png";
                });
            }
        });
    };
    /*
        onMenuItemClick(e: Event, c: Category, w?: Workbook, v?: TsView): void {
            e.preventDefault();
            e.stopPropagation();
            console.log(`c.Name: ${c.Name}, w.Id: ${w == null ? "" : w.Id}, v.Id: ${v == null? "" : v.Id}`);
            if (!c) { return; }
            if (!this.selectedCategory || this.selectedCategory.Name !== c.Name) { this.selectedCategory = c; }
            if (!w && c.Workbooks && c.Workbooks.length > 0) {
                this.selectWorkbookAndView(c.Workbooks[0]);
            } else {
                this.selectWorkbookAndView(w, v);
            }
        }

    */
    Home.prototype.onCategoryClick = function (e, c) {
        e.preventDefault();
        e.stopPropagation();
        this.selectCategoryWorkbookAndView(c);
    };
    Home.prototype.onWorkbookClick = function (e, w) {
        e.preventDefault();
        e.stopPropagation();
        this.selectWorkbookAndView(w);
    };
    Home.prototype.onViewClick = function (e, v) {
        e.preventDefault();
        e.stopPropagation();
        this.selectView(v);
    };
    Home.prototype.selectCategoryWorkbookAndView = function (c) {
        if (!c || this.selectedCategory.Name === c.Name) {
            return;
        }
        this.selectedCategory = c;
        if (c.Workbooks && c.Workbooks.length > 0) {
            var w = c.Workbooks[0];
            this.selectWorkbookAndView(w);
        }
    };
    Home.prototype.selectWorkbookAndView = function (w) {
        if (!w || this.selectedWorkbook.Id === w.Id) {
            return;
        }
        this.selectedWorkbook = w;
        if (w.Views && w.Views.length > 0) {
            this.selectView(w.Views[0]);
        }
    };
    Home.prototype.selectView = function (v) {
        if (!v || this.selectedView.Id === v.Id) {
            return;
        }
        this.selectedView = v;
        this.ea.publish("newViz", v);
    };
    Home = __decorate([
        __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["c" /* autoinject */],
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_menuDataRepository__["a" /* MenuDataRepository */], __WEBPACK_IMPORTED_MODULE_2_aurelia_event_aggregator__["a" /* EventAggregator */]])
    ], Home);
    return Home;
}());



/***/ }),

/***/ "components/home/home.html":
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row flexdisp content-wrapper\">\r\n            <div class=\"col-md-3 flexdisp flexdir-column sidebar-wrapper\" id=\"sidebarmenu\">\r\n                <div class=\"flexdisp flexdir-row searchbar\">\r\n                    <form>\r\n                        <div class=\"input-group\">\r\n                            <input id=\"ViewSearch\" type=\"text\" class=\"form-control\" placeholder=\"Search\" style=\"height:34px;\">\r\n                            <div class=\"input-group-btn\">\r\n                                <button class=\"btn btn-default\" type=\"submit\">\r\n                                    <i class=\"fa fa-search\"></i>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                    <div class=\"pull-right expcolbtn\">\r\n                        <button class=\"btn btn-default\"><i class=\"fa fa-minus\"></i></button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"sidebar-wrapper-menu\">\r\n                    <div class=\"panel-group\" id=\"accordion\">\r\n                        <div class=\"panel panel-info category\" repeat.for=\"ctg of menuData.Categories\">\r\n                            <div class=\"panel-heading\">\r\n                                <h6 class=\"panel-title\">\r\n                                    <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse_${$index}\" click.delegate=\"onCategoryClick($event, ctg)\">${ctg.Name}</a>\r\n                                </h6>\r\n                            </div>\r\n                            <div id=\"collapse_${$index}\" class=\"panel-collapse collapse ${$first ? 'in':'' & oneTime}\">\r\n                                <div class=\"panel-body\">\r\n                                    <ul class=\"nav nav-stacked workbooks\">\r\n                                        <li repeat.for=\"w of ctg.Workbooks\" class=\"workbook ${selectedWorkbook.Id == w.Id ? 'active' : ''}\" >\r\n                                            <span class=\"workbooklink\">\r\n                                                <button class=\"linkbutton favtoggler ${w.IsFavourite? 'fav':''}\"><i class=\"fa ${w.IsFavourite? 'fa-star':'fa-star-o'}\"></i></button>\r\n                                                <a click.delegate=\"onWorkbookClick($event, w)\">${w.Name}</a>\r\n                                                <span class=\"tooltiptext\"><img src.bind=\"w.PreviewImage\" alt=\"No Preview Image Loaded\" /></span>\r\n                                            </span>\r\n                                            <ul class=\"nav nav-stacked views\">\r\n                                                <li repeat.for=\"v of w.Views\" class=\"tableauVizView ${selectedView.Id == v.Id ? 'active' : ''}\">\r\n                                                    <a class=\"viewlink\" click.delegate=\"onViewClick($event, v)\"><i class=\"fa fa-file-image-o\"></i> ${v.Name}</a>\r\n                                                </li>\r\n                                            </ul>\r\n                                        </li>\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-9 viz-content-wrapper\">\r\n                <div id=\"tableaufilters\" class=\"hidden flexdisp flexdir-row \">\r\n                    <div class=\"flexdisp flexdir-column tableaufilter-container\">\r\n                        <label for=\"filter_1\">Filter 1</label>\r\n                        <select id=\"filter_1\" class=\"tableaufilter\" multiple>\r\n                            <option value=\"A\">A</option>\r\n                            <option value=\"B\">B</option>\r\n                            <option value=\"C\">C</option>\r\n                        </select>\r\n                    </div>\r\n                    <div class=\"flexdisp flexdir-column tableaufilter-container\">\r\n                        <label for=\"filter_2\">Filter 2</label>\r\n                        <select id=\"filter_2\" class=\"tableaufilter\" multiple>\r\n                            <option value=\"A\">A</option>\r\n                            <option value=\"B\">B</option>\r\n                            <option value=\"C\">C</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n                <compose view-model=\"../tableaudisplay/tableaudisplay\" model.bind=\"menuData\">\r\n                <div class=\"loading-container hidden\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</template>";

/***/ }),

/***/ "components/popover-menu/popover-menu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverMenu", function() { return PopoverMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__ = __webpack_require__("aurelia-framework");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_tooltip_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_bootstrap_options__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_app_logger__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import * as velocity from "velocity-animate";
// declare var velocity: any;
var PopoverMenu = /** @class */ (function () {
    function PopoverMenu(_elm, _ttSrv, _lg) {
        var _this = this;
        this._elm = _elm;
        this._ttSrv = _ttSrv;
        this._lg = _lg;
        this.position = __WEBPACK_IMPORTED_MODULE_2__helpers_bootstrap_options__["a" /* bootstrapOptions */].popoverPosition;
        this.disabled = false;
        this.isOpen = false;
        this.trigger = __WEBPACK_IMPORTED_MODULE_2__helpers_bootstrap_options__["a" /* bootstrapOptions */].popoverTrigger;
        this.triggers = [];
        this.validPositions = ['top', 'bottom', 'left', 'right'];
        this.valuesChanged = false;
        this.visible = false;
        this._lg.log("popoverMenu ctored.");
        this.listeners = {
            in: function () { return _this.handleShow(); },
            out: function () { return _this.handleHide(); },
            click: function () {
                _this.visible ? _this.handleHide() : _this.handleShow();
            },
            outside: function (event) { return _this.handleOutside(event); }
        };
    }
    PopoverMenu.prototype.bind = function () {
        var _this = this;
        this._lg.log("popoverMenu bind.");
        if (!this.validPositions.some(function (v) { return _this.position == v; })) {
            this.position = 'top';
        }
        this.triggers = this.trigger.split(' ');
        this.showClass = __WEBPACK_IMPORTED_MODULE_2__helpers_bootstrap_options__["a" /* bootstrapOptions */].version === 4 ? 'show' : 'in';
    };
    PopoverMenu.prototype.attached = function () {
        this._lg.log("popoverMenu attached.");
        this._ttSrv.setTriggers(this._elm, this.triggers, this.listeners);
        if (this.customPopover) {
            this._lg.log("popoverMenu setting display none to ref.");
            this.customPopover.setAttribute("display", "none");
        }
        this.isAttached = true;
        if (this.isOpen) {
            this._lg.log("popoverMenu calling handleShow.");
            this.handleShow();
        }
    };
    PopoverMenu.prototype.detached = function () {
        this._ttSrv.removeTriggers(this._elm, this.triggers, this.listeners);
        if (this.popover && document.body.contains(this.popover)) {
            if (!this.customPopover) {
                document.body.removeChild(this.popover);
            }
            else {
                this.popover.setAttribute("display", "none");
            }
        }
        if (this.tether) {
            this.tether.destroy();
        }
    };
    PopoverMenu.prototype.isOpenChanged = function () {
        if (!this.isAttached) {
            return;
        }
        if (this.isOpen) {
            this.handleShow();
        }
        else {
            this.handleHide();
        }
    };
    PopoverMenu.prototype.titleChanged = function () {
        this.valuesChanged = true;
        if (this.titleElement) {
            this.titleElement.innerHTML = this.title;
        }
    };
    PopoverMenu.prototype.bodyChanged = function () {
        this.valuesChanged = true;
        if (this.bodyElement) {
            this.bodyElement.innerHTML = this.body;
        }
    };
    PopoverMenu.prototype.positionChanged = function (newValue, oldValue) {
        if (!this.validPositions.some(function (v) { return v == newValue; })) {
            this.position = oldValue;
            return;
        }
        this.oldPosition = oldValue;
        this.valuesChanged = true;
    };
    PopoverMenu.prototype.triggerChanged = function (newValue, oldValue) {
        this._ttSrv.removeTriggers(this._elm, this.triggers, this.listeners);
        this.triggers = this.trigger.split(' ');
        this._ttSrv.setTriggers(this._elm, this.triggers, this.listeners);
    };
    PopoverMenu.prototype.handleShow = function () {
        if (this.visible || this.disabled) {
            return;
        }
        if (!this.popover || this.valuesChanged) {
            this.createPopover();
            this.valuesChanged = false;
        }
        if (this.customPopover) {
            if (this.tether) {
                this.tether.destroy();
            }
            this.tether = this._ttSrv.createAttachment(this._elm, this.popover, this.position);
        }
        this.popover.setAttribute("display", "block");
        this.tether.position();
        /*
                velocity(this.popover, 'stop')
                    .then(() => {
                        velocity(this.popover, 'fadeIn')
                            .then(() => {
                                this.popover.classList.add(this.showClass);
        
                                if (typeof this.onToggle === 'function') {
                                    this.onToggle({ open: true });
                                }
                            });
                    });
        //*/
        this.popover.classList.add(this.showClass);
        if (typeof this.onToggle === 'function') {
            this.onToggle(true);
        }
        this.visible = true;
        this.isOpen = true;
    };
    PopoverMenu.prototype.handleHide = function () {
        if (!this.visible) {
            return;
        }
        /*
                velocity(this.popover, 'stop')
                    .then(() => {
                        velocity(this.popover, 'fadeOut')
                            .then(() => {
                                this.popover.classList.remove(this.showClass);
        
                                if (typeof this.onToggle === 'function') {
                                    this.onToggle({ open: false });
                                }
                            });
                    });
        //*/
        this.popover.classList.remove(this.showClass);
        if (typeof this.onToggle === 'function') {
            this.onToggle(false);
        }
        this.visible = false;
        this.isOpen = false;
    };
    PopoverMenu.prototype.handleOutside = function (event) {
        if (!this.visible) {
            return;
        }
        if (this._elm !== event.target && !this.popover.contains(event.target)) {
            this.handleHide();
        }
    };
    PopoverMenu.prototype.getPositionClass = function (position) {
        return (__WEBPACK_IMPORTED_MODULE_2__helpers_bootstrap_options__["a" /* bootstrapOptions */].version === 4 ? 'popover-' : '') + position;
    };
    PopoverMenu.prototype.createPopover = function () {
        var arrow = document.createElement('div');
        arrow.classList.add('arrow');
        if (this.customPopover) {
            this.popover = this.customPopover;
            this.popover.classList.remove(this.getPositionClass(this.oldPosition));
            this.popover.classList.add('popover');
            this.popover.classList.add(this.getPositionClass(this.position));
            if (!this.popover.querySelector('.arrow')) {
                this.popover.appendChild(arrow);
            }
        }
        else {
            if (this.popover) {
                document.body.removeChild(this.popover);
            }
            this.popover = document.createElement('div');
            this.popover.classList.add('popover');
            this.popover.classList.add(this.getPositionClass(this.position));
            this.popover.appendChild(arrow);
            if (this.title) {
                this.titleElement = document.createElement('h3');
                this.titleElement.classList.add('popover-title');
                this.titleElement.innerHTML = this.title;
                this.popover.appendChild(this.titleElement);
            }
            var content = document.createElement('div');
            content.classList.add('popover-content');
            this.bodyElement = document.createElement('p');
            this.bodyElement.innerHTML = this.body;
            content.appendChild(this.bodyElement);
            this.popover.appendChild(content);
            document.body.appendChild(this.popover);
            if (this.tether) {
                this.tether.destroy();
            }
            this.tether = this._ttSrv.createAttachment(this._elm, this.popover, this.position);
        }
    };
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["d" /* bindable */],
        __metadata("design:type", String)
    ], PopoverMenu.prototype, "title", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["d" /* bindable */],
        __metadata("design:type", String)
    ], PopoverMenu.prototype, "body", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["d" /* bindable */],
        __metadata("design:type", Object)
    ], PopoverMenu.prototype, "position", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["d" /* bindable */],
        __metadata("design:type", Object)
    ], PopoverMenu.prototype, "disabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["d" /* bindable */])({ defaultBindingMode: __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["e" /* bindingMode */].twoWay }),
        __metadata("design:type", Object)
    ], PopoverMenu.prototype, "isOpen", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["d" /* bindable */],
        __metadata("design:type", Object)
    ], PopoverMenu.prototype, "trigger", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["d" /* bindable */],
        __metadata("design:type", Element)
    ], PopoverMenu.prototype, "customPopover", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["d" /* bindable */],
        __metadata("design:type", Function)
    ], PopoverMenu.prototype, "onToggle", void 0);
    PopoverMenu = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["f" /* customAttribute */])("popmenu"),
        Object(__WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["g" /* inject */])(__WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["b" /* DOM */].Element, __WEBPACK_IMPORTED_MODULE_1__helpers_tooltip_service__["a" /* TooltipService */], __WEBPACK_IMPORTED_MODULE_3__helpers_app_logger__["a" /* AppLogger */]),
        __metadata("design:paramtypes", [Element, __WEBPACK_IMPORTED_MODULE_1__helpers_tooltip_service__["a" /* TooltipService */], __WEBPACK_IMPORTED_MODULE_3__helpers_app_logger__["a" /* AppLogger */]])
    ], PopoverMenu);
    return PopoverMenu;
}());



/***/ }),

/***/ "components/tableaudisplay/tableaudisplay":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableauDisplay", function() { return TableauDisplay; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__ = __webpack_require__("aurelia-framework");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__ = __webpack_require__("aurelia-event-aggregator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_vizTokenRepository__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_app_logger__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_app_constants__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TableauDisplay = /** @class */ (function () {
    function TableauDisplay(_ea, _vtRpo, _lg, _pev) {
        this._ea = _ea;
        this._vtRpo = _vtRpo;
        this._lg = _lg;
        this._pev = _pev;
        this.mainVizId = "tableauviz";
        this._lg.log("tableaudisplay constructed");
        this.subscribeEvents();
    }
    TableauDisplay.prototype.subscribeEvents = function () {
        var _this = this;
        this._ea.subscribe(this._pev.VizLoadEvent, function (v) { return _this.initNewViz(v); });
        this._ea.subscribe(this._pev.DownloadPdfEvent, function (l) { return _this.downloadPdf(); });
        this._ea.subscribe(this._pev.DownloadPptEvent, function (l) { return _this.downloadPpt(); });
        this._ea.subscribe(this._pev.DownloadExcelEvent, function (l) { return _this.downloadExcel(); });
        this._ea.subscribe(this._pev.DownloadImageEvent, function (l) { return _this.downloadImage(); });
    };
    TableauDisplay.prototype.activate = function (model) {
        this._ctx = model;
        var v = model.Categories[0].Workbooks[0].Views[0];
        this.initNewViz(v);
        this._lg.log("ServerUrl: " + this._ctx.ServerUrl);
    };
    TableauDisplay.prototype.created = function (owningView, myView) {
        this._lg.log("tableaudisplay created");
    };
    TableauDisplay.prototype.attached = function () {
        this._lg.log("tableaudisplay attached");
    };
    TableauDisplay.prototype.initNewViz = function (v) {
        var _this = this;
        this.getVizUrl(this._ctx.ServerUrl, this._ctx.UserName, this._ctx.SiteName, v.ContentUrl)
            .then(function (url) {
            _this._lg.log("Loading new Viz. URL: " + url);
            _this.currentVizUrl = url;
            _this.initializeViz(url);
        }).catch(function (err) { return _this._lg.log("Error from initNewViz: " + JSON.stringify(err)); });
    };
    TableauDisplay.prototype.getVizUrl = function (serverUrl, userName, siteName, contentUrl) {
        var _this = this;
        var prm = new Promise(function (res, rej) {
            _this._vtRpo.getData(userName, siteName)
                .then(function (token) { return res(serverUrl + "trusted/" + token + "/t/" + siteName + "/views/" + contentUrl.replace("/sheets/", "/")); })
                .catch(function (err) { return rej(err); });
        });
        return prm;
    };
    TableauDisplay.prototype.initializeViz = function (sContentURL) {
        var _this = this;
        if (!sContentURL) {
            return;
        }
        this._lg.log("sContentURL: " + sContentURL);
        var placeholderDiv = document.getElementById(this.mainVizId);
        var url = sContentURL;
        this._lg.log("placeholderDiv: " + JSON.stringify(placeholderDiv));
        if (placeholderDiv != null && placeholderDiv.parentElement != null) {
            this._lg.log("initializing viz");
            this._lg.log("setting width + 30: " + placeholderDiv.clientWidth);
            this._lg.log("setting width + 5: " + placeholderDiv.clientHeight);
            var options = {
                width: placeholderDiv.clientWidth - 30,
                height: placeholderDiv.clientHeight - 5,
                hideTabs: true,
                hideToolbar: true,
                onFirstInteractive: function () {
                    _this._lg.log("inside onFirstInteractive");
                    _this.workbook = _this.mainViz.getWorkbook();
                    _this.activesheet = _this.workbook.getActiveSheet();
                    // logToServer("Visualization has become interactive.");
                    // dlAnimation(false);
                    /*
                    loadFilters();
                    showDownloadOptions();
                    */
                    // logToServer("Finished onFirstInteractive.");
                }
            };
            /*
                $.each(filterStates, function (idx, item) {
                    if (item.values.length < 1) { return; }
                    if (item.values.length == 1) {
                        options[item.name] = item.values[0]
                    } else {
                        options[item.name] = item.values
                    }
                })
            */
            if (this.mainViz !== undefined) {
                this.mainViz.dispose();
            }
            placeholderDiv.innerHTML = "";
            // dlAnimation(true);
            // setTimeout(function () {
            //     dlAnimation(false)
            // }, 1000);
            this.mainViz = new tableauSoftware.Viz(placeholderDiv, url, options);
            // mainViz.addEventListener(tableauSoftware.TableauEventName.FILTER_CHANGE, onVizFilterChange);
        }
    };
    TableauDisplay.prototype.downloadPdf = function () {
        if (!this.mainViz) {
            return;
        }
        this._lg.log("downloadPdf invoked.");
        this.mainViz.showExportPDFDialog();
    };
    TableauDisplay.prototype.downloadPpt = function () {
        var _this = this;
        if (!this.mainViz) {
            return;
        }
        this._lg.log("downloadPpt invoked.");
        var contentUrl = this.activesheet._impl.$url.split('/').reverse().slice(0, 2).reverse().join('/');
        this._vtRpo.getPptDlguid(contentUrl)
            .then(function (guid) {
            _this._lg.log("initiating PPT download.");
            window.location.assign("Home/GetPptCreatedFile?dlguid=" + guid);
        })
            .catch(function (err) { _this._lg.log(err.message); });
    };
    TableauDisplay.prototype.downloadExcel = function () {
        if (!this.mainViz) {
            return;
        }
        this._lg.log("downloadExcel invoked.");
        this.mainViz.showExportCrossTabDialog();
    };
    TableauDisplay.prototype.downloadImage = function () {
        if (!this.mainViz) {
            return;
        }
        this._lg.log("downloadImage invoked.");
        this.mainViz.showExportImageDialog();
    };
    TableauDisplay = __decorate([
        __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__["c" /* autoinject */],
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_aurelia_event_aggregator__["a" /* EventAggregator */], __WEBPACK_IMPORTED_MODULE_2__services_vizTokenRepository__["a" /* VizTokenRepository */],
            __WEBPACK_IMPORTED_MODULE_3__helpers_app_logger__["a" /* AppLogger */], __WEBPACK_IMPORTED_MODULE_4__helpers_app_constants__["a" /* PublishEvents */]])
    ], TableauDisplay);
    return TableauDisplay;
}());



/***/ }),

/***/ "components/tableaudisplay/tableaudisplay.html":
/***/ (function(module, exports) {

module.exports = "<template>\r\n    <div id=\"tableauviz\">\r\n</template>";

/***/ }),

/***/ "home-index.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(undefined);
// imports


// module
exports.push([module.i, "\r\n\r\n.content-wrapper {\r\n    padding-top: 15px;\r\n    -webkit-justify-content: space-between;\r\n    justify-content: space-between;\r\n    flex-wrap: wrap;\r\n    height: 102vh;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.searchbar > form {\r\n    flex: 1 1 auto;\r\n}\r\n\r\n.searchbar .expcolbtn {\r\n    margin-left: 5px;\r\n}\r\n\r\n.horizontal-menu {\r\n    background-color: #cccccc;\r\n    width: 100%;\r\n    height: 20px;\r\n    font-family: SF Pro Text, Myriad Set Pro, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif;\r\n}\r\n\r\n    .horizontal-menu li.dropdown > a {\r\n        color: black;\r\n    }\r\n\r\n    .horizontal-menu .categoryContent {\r\n        width: 80vw;\r\n    }\r\n\r\n        .horizontal-menu .categoryContent .workbooks {\r\n            height: 50vh;\r\n            overflow-y: auto;\r\n            border-right: 2px solid lightgray;\r\n            word-wrap: break-word;\r\n        }\r\n\r\n            .horizontal-menu .categoryContent .workbooks > a {\r\n                position: sticky;\r\n                color: #563d7c;\r\n                font-size: 13px;\r\n            }\r\n\r\n                .horizontal-menu .categoryContent .workbooks > a:hover,\r\n                .horizontal-menu .categoryContent .workbooks > a:focus {\r\n                    color: #563d7c;\r\n                    font-weight: bold;\r\n                    background-color: lightgray;\r\n                }\r\n\r\n            .horizontal-menu .categoryContent .workbooks .favtoggler:hover:before {\r\n                content: \"\\2605\";\r\n            }\r\n\r\n        .horizontal-menu .categoryContent .horViews {\r\n            height: 50vh;\r\n            overflow-y: auto;\r\n        }\r\n\r\n            .horizontal-menu .categoryContent .horViews .horView {\r\n                cursor: pointer;\r\n            }\r\n\r\n                .horizontal-menu .categoryContent .horViews .horView:hover,\r\n                .horizontal-menu .categoryContent .horViews .horView:focus {\r\n                    color: cornflowerblue;\r\n                }\r\n\r\n                .horizontal-menu .categoryContent .horViews .horView:hover i.fa,\r\n                .horizontal-menu .categoryContent .horViews .horView:focus i.fa {\r\n                    color: black;\r\n                }\r\n\r\n                .horizontal-menu .categoryContent .horViews .horView:hover i.fa:hover,\r\n                .horizontal-menu .categoryContent .horViews .horView:focus i.fa:hover {\r\n                    font-weight: bolder;\r\n                    font-size: large;\r\n                }\r\n\r\n\r\n.sidebar-wrapper {\r\n    padding-left: 2px;\r\n    padding-right: 2px;\r\n    /*height: calc(147vh);*/\r\n}\r\n\r\n.sidebar-wrapper-menu {\r\n    border: 2px solid lightgray;\r\n    border-radius: 5px;\r\n    padding: 5px 3px;\r\n    overflow: auto;\r\n    font-size: 13px;\r\n    margin-top: 5px;\r\n    height: calc(95% - 1px);\r\n}\r\n\r\n    .sidebar-wrapper-menu .category {\r\n        border-color: darkgray !important;\r\n    }\r\n\r\n        .sidebar-wrapper-menu .category .panel-heading {\r\n            background-color: darkgray !important;\r\n            border-color: darkgray !important;\r\n        }\r\n\r\n        .sidebar-wrapper-menu .category .panel-title {\r\n            color: black;\r\n        }\r\n\r\n    .sidebar-wrapper-menu .nav > .workbook > .workbooklink {\r\n        padding: 1px 3px;\r\n        border-left: 2px solid transparent;\r\n        word-wrap: normal;\r\n        font-weight: 400;\r\n        display: block;\r\n    }\r\n\r\n    .sidebar-wrapper-menu .nav > .active > .workbooklink,\r\n    .sidebar-wrapper-menu .nav > .active:hover > .workbooklink,\r\n    .sidebar-wrapper-menu .nav > .active:focus > .workbooklink {\r\n        font-weight: 700;\r\n    }\r\n\r\n    .sidebar-wrapper-menu .views .active .viewlink,\r\n    .sidebar-wrapper-menu .workbooks .active .workbooklink,\r\n    .sidebar-wrapper-menu .views .viewlink:hover,\r\n    .sidebar-wrapper-menu .workbooks .workbooklink:hover,\r\n    .sidebar-wrapper-menu .views .viewlink:focus,\r\n    .sidebar-wrapper-menu .workbooks .workbooklink:focus {\r\n        color: #563d7c;\r\n        text-decoration: none;\r\n        background-color: lightgray;\r\n        border-left: 2px solid #563d7c !important;\r\n        font-weight: 700;\r\n        display: block;\r\n    }\r\n\r\n    /*.sidebar-wrapper-menu .nav > .active > span a,\r\n            .sidebar-wrapper-menu .nav > li > span:hover a,\r\n            .sidebar-wrapper-menu .nav > li > span:focus a {\r\n                color: #563d7c;\r\n                text-decoration: none;\r\n            }*/\r\n\r\n    .sidebar-wrapper-menu .views {\r\n        padding-top: 5px;\r\n        padding-bottom: 5px;\r\n        list-style: none;\r\n        font-size: 12px;\r\n        display: none;\r\n    }\r\n\r\n    .sidebar-wrapper-menu .viewlink {\r\n        padding-top: 1px;\r\n        padding-bottom: 1px;\r\n        padding-left: 30px;\r\n        border-left: 2px solid transparent;\r\n        word-wrap: break-word;\r\n    }\r\n\r\n    .sidebar-wrapper-menu .views .active .viewlink,\r\n    .sidebar-wrapper-menu .views .active:hover .viewlink,\r\n    .sidebar-wrapper-menu .views .active:focus .viewlink {\r\n        font-weight: 500;\r\n    }\r\n\r\n    .sidebar-wrapper-menu .workbooks .active .views {\r\n        display: block;\r\n    }\r\n\r\n    .sidebar-wrapper-menu .panel {\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    .sidebar-wrapper-menu .panel-body {\r\n        padding: 5px;\r\n    }\r\n\r\n.workbooklink {\r\n    position: relative;\r\n    display: inline-block;\r\n}\r\n\r\n    .workbooklink a {\r\n        color: #563d7c;\r\n        text-decoration: none;\r\n        cursor: pointer;\r\n    }\r\n\r\n.viewlink {\r\n    cursor: pointer;\r\n}\r\n\r\n.viz-expanded {\r\n    padding-left: unset;\r\n}\r\n\r\n.sidebar-collapsed {\r\n    display: none !important;\r\n    transition: display 0.5s;\r\n}\r\n\r\n.viz-content-wrapper {\r\n    position: relative;\r\n    min-height: 100%;\r\n    padding-right: unset;\r\n}\r\n\r\n#tableaufilters {\r\n    border: 2px solid lightgray;\r\n    border-radius: 5px;\r\n    /* height: calc(20% - 5px); */\r\n    margin-bottom: 5px;\r\n    padding: 3px;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.tableaufilter-container {\r\n    display: block;\r\n    width: 16.39%;\r\n    padding: 1px 3px;\r\n    border: 1px solid #9ec1fa;\r\n    border-radius: 3px;\r\n    margin-right: 3px;\r\n    margin-bottom: 3px;\r\n}\r\n\r\n    .tableaufilter-container > label {\r\n        font-size: 13px;\r\n        font-weight: bold;\r\n        margin-bottom: 3px;\r\n        word-wrap: break-word;\r\n        text-align: center;\r\n    }\r\n\r\n    .tableaufilter-container .multiselect {\r\n        padding: 2px 5px;\r\n        width: 100%;\r\n    }\r\n\r\n    .tableaufilter-container .multiselect-selected-text {\r\n        font-size: 11px;\r\n    }\r\n\r\n.loading-container {\r\n    position: absolute;\r\n    border: 2px solid lightgray;\r\n    border-radius: 5px;\r\n    background: #fff url(" + __webpack_require__(34) + ") no-repeat 50% 50%;\r\n    height: 100%;\r\n    width: calc(100% - 15px);\r\n    z-index: 1;\r\n    opacity: 0.7;\r\n    -moz-transition: opacity 0.5s ease;\r\n    -o-transition: opacity 0.5s ease;\r\n    -webkit-transition: opacity 0.5s ease;\r\n    transition: opacity 0.5s ease;\r\n}\r\n\r\n.loading {\r\n    z-index: 30;\r\n}\r\n\r\n#tableauviz {\r\n    position: absolute;\r\n    border: 2px solid lightgray;\r\n    border-radius: 5px;\r\n    height: 100%;\r\n    width: calc(100% - 15px);\r\n    overflow: hidden;\r\n    z-index: 2;\r\n}\r\n\r\n.tooltiptext {\r\n    display: none;\r\n    background-color: gainsboro;\r\n    border: 2px solid #864599;\r\n    -moz-border-radius: 3px;\r\n    -webkit-border-radius: 3px;\r\n    border-radius: 3px;\r\n    /*    padding: 5px 0;*/\r\n    /* Position the tooltip */\r\n    position: absolute;\r\n    z-index: 3;\r\n    text-align: center;\r\n}\r\n\r\n    .tooltiptext img {\r\n        text-align: center;\r\n        height: 120px;\r\n        width: 120px;\r\n    }\r\n\r\n.sidebar-wrapper-menu .tooltiptext {\r\n    left: calc(100% - 120px);\r\n    top: -40px; /* -floor(100/2 - 18.4/2) */\r\n}\r\n\r\n.horizontal-menu .tooltiptext {\r\n    left: calc(100% - 120px);\r\n    top: -40px; /* -floor(100/2 - 18.4/2) */\r\n}\r\n\r\n.horizontal-menu .workbook:hover .tooltiptext {\r\n    display: block;\r\n}\r\n\r\n.tooltiptext::after {\r\n    content: \" \";\r\n    position: absolute;\r\n    right: 100%; /* At the left of the tooltip */\r\n    top: 40px; /* -(top of .tooltiptext) */\r\n    border-width: 10px;\r\n    border-style: solid;\r\n    border-color: transparent #864599 transparent transparent;\r\n}\r\n\r\n.workbooklink:hover .tooltiptext {\r\n    display: block;\r\n}\r\n\r\n\r\n.context-menu-item {\r\n    /*font-family: Verdana, Geneva, Tahoma, sans-serif !important;*/\r\n    font-family: SF Pro Text, Myriad Set Pro, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif;\r\n    font-size: 12px;\r\n}\r\n\r\n.modal-body textarea {\r\n    resize: vertical;\r\n    width: 100%;\r\n}\r\n\r\n.modal-footer.wait .waitOnNoteSave {\r\n    display: block;\r\n}\r\n\r\n.modal-footer.success .successOnNoteSave {\r\n    display: block;\r\n}\r\n\r\n.modal-footer.fail .failureOnNoteSave {\r\n    display: block;\r\n}\r\n\r\n.waitOnNoteSave {\r\n    float: left;\r\n    display: none;\r\n}\r\n\r\n.successOnNoteSave {\r\n    float: left;\r\n    display: none;\r\n}\r\n\r\n.failureOnNoteSave {\r\n    float: left;\r\n    display: none;\r\n}\r\n", ""]);

// exports


/***/ }),

/***/ "layout.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(undefined);
// imports


// module
exports.push([module.i, ".my-navbar > .nav-item > a {\r\n    border: 1px solid transparent;\r\n    color: white !important;\r\n}\r\n\r\n    .my-navbar > .nav-item > a:hover {\r\n        border: 1px solid white !important;\r\n    }\r\n\r\n.my-navbar > .nav-item.active > a,\r\n.my-navbar > .nav-item.active > a:focus {\r\n    border: 1px solid white;\r\n    border-top-left-radius: 5px;\r\n    border-top-right-radius: 5px;\r\n    background-color: white !important;\r\n    color: black !important;\r\n}\r\n\r\nbody {\r\n    /*font-family: Verdana, Geneva, Tahoma, sans-serif !important;*/\r\n    font-family: SF Pro Text, Myriad Set Pro, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif;\r\n    min-height: 100%;\r\n}\r\n\r\n    body .tab-content {\r\n        -webkit-flex: 1 0 auto;\r\n        -ms-flex: 1 0 auto;\r\n        flex: 1 0 auto;\r\n        padding-top: 50px;\r\n        min-height: calc(100vh - 55px);\r\n    }\r\n\r\n.body-content {\r\n    padding-left: 10px;\r\n    padding-right: 20px;\r\n    padding-top: 5px;\r\n}\r\n\r\nheader .navbar {\r\n    border-radius: unset;\r\n    padding-bottom: unset;\r\n    margin-bottom: unset;\r\n    border-top-color: #9ec1fa;\r\n    border-left-color: #9ec1fa;\r\n    border-right-color: #9ec1fa;\r\n    border-bottom-color: white;\r\n    /*background-color: #9ec1fa;*/\r\n    background-color: #cccccc;\r\n}\r\n\r\nheader .nav-tabs {\r\n    padding-top: 1px;\r\n    border-bottom: unset;\r\n}\r\n\r\nheader .navbar-brand {\r\n    padding-top: 5px;\r\n}\r\n\r\nnav .nav-link {\r\n    font-size: 2rem;\r\n    color: white;\r\n}\r\n\r\nnav a.nav-link:hover {\r\n    background: transparent;\r\n}\r\n\r\n.nav-expand {\r\n    display: block !important;\r\n}\r\n\r\n.popover {\r\n    border: 2px solid rebeccapurple;\r\n    font-family: SF Pro Text, Myriad Set Pro, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif;\r\n    /*font-family: Verdana, Geneva, Tahoma, sans-serif;*/\r\n}\r\n\r\n.popover-title {\r\n    min-width: 210px;\r\n}\r\n\r\n.popover-content {\r\n    padding: unset;\r\n}\r\n\r\n.ddlItems {\r\n    display: none;\r\n    z-index: 1;\r\n    padding: unset;\r\n    margin: unset;\r\n}\r\n\r\n.ddlGroup .ddlItemsLink{\r\n    text-decoration: none;\r\n    color: inherit;\r\n}\r\n\r\n.ddlGroup:hover .ddlItems {\r\n    display: block;\r\n}\r\n\r\n.my-navbar-right .nav-item a i.fa {\r\n    font-size: 1.3vw;\r\n    color: black;\r\n}\r\n\r\n.footer {\r\n    width: 100%;\r\n    background-color: #f5f5f5;\r\n    min-height: 50px;\r\n    margin-top: 5px;\r\n}\r\n\r\n    .footer .container {\r\n        width: 100%;\r\n    }", ""]);

// exports


/***/ }),

/***/ "shell":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shell", function() { return Shell; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_aurelia_framework__ = __webpack_require__("aurelia-framework");

var Shell = /** @class */ (function () {
    function Shell() {
    }
    Shell.prototype.configureRouter = function (config, router) {
        config.title = 'Aurelia';
        config.map([{
                route: ['', 'home'],
                name: 'home',
                settings: { icon: 'home' },
                moduleId: 'components/home/home',
                nav: true,
                title: 'Home'
            }]);
        this.router = router;
    };
    return Shell;
}());



/***/ }),

/***/ "shell.html":
/***/ (function(module, exports, __webpack_require__) {

module.exports = "<template>\r\n    <require from=\"./site.css\"></require>\r\n    <require from=\"./layout.css\"></require>\r\n    <!--<require from=\"./signin.css\"></require>-->\r\n    <require from=\"./home-index.css\"></require>\r\n    <header>\r\n        <nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n            <div class=\"container-fluid\">\r\n                <div class=\"navbar-brand visible-xs\">\r\n                    <img class=\"img-responsive img-thumbnail\" style=\"height:40px; width:60px;\" src=\"" + __webpack_require__(29) + "\" />\r\n                </div>\r\n                <div class=\"navbar-header\">\r\n                    <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n                        <span class=\"icon-bar\"></span>\r\n                        <span class=\"icon-bar\"></span>\r\n                        <span class=\"icon-bar\"></span>\r\n                    </button>\r\n                    <a class=\"navbar-brand hidden-xs\" href=\"Home/Index\">\r\n                        <img src=\"" + __webpack_require__(45) + "\" style=\"height:40px;\" alt=\"\">\r\n                    </a>\r\n                </div>\r\n                <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n                    <compose view-model=\"components/fullnav/fullnav\">\r\n                </div>\r\n            </div>\r\n        </nav>\r\n    </header>\r\n    <div class=\"tab-content\">\r\n        <div id=\"content\" class=\"tab-pane active\">\r\n            <div class=\"body-content\">\r\n                <router-view></router-view>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <footer class=\"footer\">\r\n        <div class=\"container\">\r\n            <div class=\"well-sm\">\r\n                <p>&copy; QuintilesIMS. All Rights Reserved.</p>\r\n            </div>\r\n        </div>\r\n    </footer>\r\n</template>\r\n";

/***/ }),

/***/ "site.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(undefined);
// imports


// module
exports.push([module.i, "* {\r\n    box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n    position: relative;\r\n    height: 100%;\r\n    /*font-family: Verdana;*/\r\n    font-family: SF Pro Text, Myriad Set Pro, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif;\r\n    /*font-family: Verdana, Geneva, Tahoma, sans-serif !important;*/\r\n}\r\n\r\n.flexdisp {\r\n    display: -webkit-flex;\r\n    display: -moz-flex;\r\n    display: -ms-flexbox;\r\n    display: -o-flex;\r\n    display: flex;\r\n}\r\n\r\n.flexdir-column{\r\n    -webkit-flex-direction: column;\r\n    -ms-flex-direction: column;\r\n    flex-direction: column;\r\n}\r\n\r\n.flexdir-row{\r\n    -webkit-flex-direction: row;\r\n    -ms-flex-direction: row;\r\n    flex-direction: row;\r\n}\r\n\r\n.flexalgnitems-strech{\r\n    -webkit-align-items: strech;\r\n    -ms-flex-align: stretch;\r\n    align-items: stretch;\r\n}\r\n\r\n.linkbutton {\r\n    background: none;\r\n    border: none;\r\n    padding: 0 !important;\r\n    font: inherit;\r\n    /*border is optional*/\r\n    /*border-bottom: 1px solid #444;*/\r\n    cursor: pointer;\r\n}\r\n\r\n.favtoggler:hover > i:before {\r\n    content: \"\\2605\";\r\n}\r\n\r\n.fav {\r\n    color: #563d7c;\r\n}\r\n", ""]);

// exports


/***/ })

/******/ });
//# sourceMappingURL=app.js.map