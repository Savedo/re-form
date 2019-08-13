(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/symbol-observable/es/index.js":
/*!****************************************************!*\
  !*** ./node_modules/symbol-observable/es/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ponyfill.js */ "./node_modules/symbol-observable/es/ponyfill.js");
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__["default"])(root);
/* harmony default export */ __webpack_exports__["default"] = (result);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
/*!*******************************************************!*\
  !*** ./node_modules/symbol-observable/es/ponyfill.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
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
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/components/FormBuilder/FormBuilder.tsx":
/*!****************************************************!*\
  !*** ./src/components/FormBuilder/FormBuilder.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(/*! react */ "react"));
var FormField_1 = __importDefault(__webpack_require__(/*! ../FormField/FormField */ "./src/components/FormField/FormField.tsx"));
var FormContext_1 = __webpack_require__(/*! ../FormContext/FormContext */ "./src/components/FormContext/FormContext.tsx");
var FormBuilder = function (_a) {
    var fields = _a.fields, _b = _a.fieldOptions, fieldOptions = _b === void 0 ? {} : _b, values = _a.values, validate = _a.validate, handleSubmit = _a.handleSubmit, submitSection = _a.submitSection;
    var setFormObject = function (currentValues) {
        if (currentValues === void 0) { currentValues = {}; }
        var defaults = fields.reduce(function (acc, field) {
            var _a;
            var _b = fieldOptions[field].defaultValue, defaultValue = _b === void 0 ? null : _b;
            return __assign({}, acc, (_a = {}, _a[field] = defaultValue, _a));
        }, {});
        return Object.assign(defaults, values, currentValues);
    };
    var _c = react_1.useState(setFormObject()), formData = _c[0], setFormData = _c[1];
    var _d = react_1.useState({}), formErrors = _d[0], setFormErrors = _d[1];
    var _e = react_1.useState({
        isSubscribed: false,
        isValidating: false,
        isSubmitting: false,
        hasSubmitted: false
    }), formOptions = _e[0], setFormOptions = _e[1];
    var formContext = react_1.useContext(FormContext_1.FormContextScope);
    if (formContext && formContext.subscribe && !formOptions.isSubscribed) {
        formContext.subscribe(function (_a) {
            var isSubmitting = _a.isSubmitting;
            setFormOptions(__assign({}, formOptions, { isSubmitting: isSubmitting }));
        });
        setFormOptions(__assign({}, formOptions, { isSubscribed: true }));
    }
    react_1.useEffect(function () {
        var isValidating = formOptions.isValidating, isSubmitting = formOptions.isSubmitting, hasSubmitted = formOptions.hasSubmitted;
        if (Object.keys(formErrors).length === 0 && isValidating && isSubmitting && !hasSubmitted) {
            handleSubmit && handleSubmit(formData);
            setFormOptions(__assign({}, formOptions, { hasSubmitted: true }));
        }
    }, [formErrors]);
    var setErrors = function (errors) {
        if (Object.keys(errors).length > 0) {
            if (errors !== formErrors) {
                setFormErrors(errors);
            }
            return;
        }
        if (formErrors !== {}) {
            setFormErrors({});
        }
    };
    var validateFormData = function (newFormData) {
        if (validate && typeof validate === 'function') {
            var errors = validate(newFormData);
            errors && ((Promise.resolve(errors) === errors) ? errors.then(setErrors) : setErrors(errors));
        }
    };
    var setFormDataValue = function (field) {
        return function (value) {
            var _a;
            var newFormData = setFormObject(__assign({}, formData, (_a = {}, _a[field] = value, _a)));
            if (newFormData !== formData) {
                setFormData(newFormData);
                if (formOptions.isValidating) {
                    validateFormData(newFormData);
                }
            }
        };
    };
    var getFieldComponent = function (field) {
        var options = fieldOptions[field];
        var error = formErrors && formErrors[field];
        var component = options.component;
        var componentOptions = {
            name: field,
            options: options,
            value: formData[field],
            setValue: setFormDataValue(field),
            error: error
        };
        return (react_1.default.createElement(react_1.default.Fragment, { key: field }, component ? component(componentOptions) : react_1.default.createElement(FormField_1.default, __assign({}, componentOptions))));
    };
    var activateFormSubmission = function () {
        setFormOptions(__assign({}, formOptions, { isValidating: true, isSubmitting: true }));
        validateFormData(formData);
    };
    var onSubmit = function (event) {
        if (event) {
            event.preventDefault();
        }
        activateFormSubmission();
    };
    if (formContext.isSubmitting === true && formOptions.isSubmitting !== formContext.isSubmitting) {
        activateFormSubmission();
    }
    return (react_1.default.createElement("form", { onSubmit: onSubmit, noValidate: true },
        fields.map(function (field) { return fieldOptions[field] && getFieldComponent(field); }),
        submitSection && submitSection({})));
};
exports.default = FormBuilder;


/***/ }),

/***/ "./src/components/FormContext/FormContext.tsx":
/*!****************************************************!*\
  !*** ./src/components/FormContext/FormContext.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var createFormObservable_1 = __importDefault(__webpack_require__(/*! ./createFormObservable */ "./src/components/FormContext/createFormObservable.ts"));
var formState = createFormObservable_1.default({ isSubmitting: false });
exports.FormContextScope = react_1.default.createContext(formState);
var FormContext = function (_a) {
    var children = _a.children;
    return (react_1.default.createElement(exports.FormContextScope.Provider, { value: formState }, children));
};
exports.default = FormContext;


/***/ }),

/***/ "./src/components/FormContext/createFormObservable.ts":
/*!************************************************************!*\
  !*** ./src/components/FormContext/createFormObservable.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var symbol_observable_1 = __importDefault(__webpack_require__(/*! symbol-observable */ "./node_modules/symbol-observable/es/index.js"));
function createFormObservable(state) {
    var _a;
    var currentState = state;
    var currentListeners = [];
    var nextListeners = currentListeners;
    function ensureCanMutateNextListeners() {
        if (nextListeners === currentListeners) {
            nextListeners = currentListeners.slice();
        }
    }
    function getState() {
        return currentState;
    }
    function setState(updateState) {
        currentState = Object.assign({}, currentState, updateState);
        var listeners = (currentListeners = nextListeners);
        for (var i = 0; i < listeners.length; i++) {
            var listener = listeners[i];
            listener(currentState);
        }
    }
    function subscribe(listener) {
        if (typeof listener !== 'function') {
            throw new Error('Expected the listener to be a function.');
        }
        var isSubscribed = true;
        if (currentListeners.some(function (currentListener) { return currentListener === listener; })) {
            return;
        }
        ensureCanMutateNextListeners();
        nextListeners.push(listener);
        return function unsubscribe() {
            if (!isSubscribed) {
                return;
            }
            isSubscribed = false;
            ensureCanMutateNextListeners();
            var index = nextListeners.indexOf(listener);
            nextListeners.splice(index, 1);
            currentListeners = [];
        };
    }
    function observable() {
        var _a;
        var outerSubscribe = subscribe;
        return _a = {
                subscribe: function (observer) {
                    if (typeof observer !== 'object' || observer === null) {
                        throw new TypeError('Expected the observer to be an object.');
                    }
                    function observeState() {
                        if (observer.next) {
                            observer.next(getState());
                        }
                    }
                    observeState();
                    var unsubscribe = outerSubscribe(observeState);
                    return { unsubscribe: unsubscribe };
                }
            },
            _a[symbol_observable_1.default] = function () {
                return this;
            },
            _a;
    }
    return _a = {
            subscribe: subscribe,
            getState: getState,
            setState: setState
        },
        _a[symbol_observable_1.default] = observable,
        _a;
}
exports.default = createFormObservable;


/***/ }),

/***/ "./src/components/FormField/FormField.tsx":
/*!************************************************!*\
  !*** ./src/components/FormField/FormField.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
var FormField = function (_a) {
    var options = _a.options, value = _a.value, name = _a.name, setValue = _a.setValue, error = _a.error;
    var _b = options || {}, _c = _b.element, element = _c === void 0 ? 'input' : _c, _d = _b.type, type = _d === void 0 ? 'text' : _d, _e = _b.keyValues, keyValues = _e === void 0 ? {} : _e, _f = _b.className, className = _f === void 0 ? '' : _f, _g = _b.label, label = _g === void 0 ? '' : _g, _h = _b.disabled, disabled = _h === void 0 ? false : _h;
    var onChange = function (event) {
        event.preventDefault();
        setValue(event.currentTarget.value);
    };
    var getError = function (error) { return (react_1.default.createElement("div", { className: "error" }, error)); };
    switch (element) {
        case 'select': {
            return (react_1.default.createElement("div", null,
                react_1.default.createElement("label", null,
                    label,
                    react_1.default.createElement("select", __assign({}, { disabled: disabled, className: className, onChange: onChange, defaultValue: value }), Object.keys(keyValues).map(function (key) {
                        return react_1.default.createElement("option", { key: key, value: key }, keyValues[key]);
                    }))),
                error && getError(error)));
        }
        case 'textarea': {
            return (react_1.default.createElement("div", null,
                react_1.default.createElement("label", null,
                    label,
                    react_1.default.createElement("textarea", __assign({}, { disabled: disabled, className: className, name: name, defaultValue: value, onChange: onChange, placeholder: options.placeholder }))),
                error && getError(error)));
        }
        default: {
            return (react_1.default.createElement("div", null,
                react_1.default.createElement("label", null,
                    label,
                    react_1.default.createElement("input", __assign({}, { disabled: disabled, type: type, className: className, name: name, defaultValue: value, onChange: onChange, placeholder: options.placeholder }))),
                error && getError(error)));
        }
    }
};
exports.default = FormField;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FormField_1 = __webpack_require__(/*! ./components/FormField/FormField */ "./src/components/FormField/FormField.tsx");
exports.FormField = FormField_1.default;
var FormBuilder_1 = __webpack_require__(/*! ./components/FormBuilder/FormBuilder */ "./src/components/FormBuilder/FormBuilder.tsx");
exports.FormBuilder = FormBuilder_1.default;
var FormContext_1 = __webpack_require__(/*! ./components/FormContext/FormContext */ "./src/components/FormContext/FormContext.tsx");
exports.FormContext = FormContext_1.default;


/***/ }),

/***/ "react":
/*!************************************************************************!*\
  !*** external {"root":"React","commonjs":"react","commonjs2":"react"} ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});
//# sourceMappingURL=re-form.js.map