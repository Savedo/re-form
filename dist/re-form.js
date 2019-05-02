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
var FormBuilder = function (_a) {
    var fields = _a.fields, _b = _a.fieldOptions, fieldOptions = _b === void 0 ? {} : _b, values = _a.values, validate = _a.validate, handleSubmit = _a.handleSubmit;
    var _c = react_1.useState(values || {}), formData = _c[0], setFormData = _c[1];
    var _d = react_1.useState({}), formErrors = _d[0], setFormErrors = _d[1];
    var _e = react_1.useState(false), isValidating = _e[0], setIsValidating = _e[1];
    var _f = react_1.useState(false), isSubmitting = _f[0], setIsSubmitting = _f[1];
    react_1.useEffect(function () {
        if (Object.keys(formErrors).length === 0 && isValidating && isSubmitting) {
            handleSubmit && handleSubmit(formData);
        }
        if (isSubmitting) {
            setIsSubmitting(false);
        }
    }, [formErrors]);
    var validateFormData = function (newFormData) {
        if (validate && typeof validate === 'function') {
            var errors = validate(newFormData);
            if (errors && Object.keys(errors).length > 0) {
                if (errors !== formErrors) {
                    setFormErrors(errors);
                }
                return;
            }
            if (formErrors !== {}) {
                setFormErrors({});
            }
        }
    };
    var setFormDataValue = function (field) {
        return function (value) {
            var _a;
            var newFormData = __assign({}, formData, (_a = {}, _a[field] = value, _a));
            if (newFormData !== formData) {
                setFormData(newFormData);
                if (isValidating) {
                    validateFormData(newFormData);
                }
            }
        };
    };
    var getFieldComponent = function (field) {
        var options = fieldOptions[field];
        var component = options.component, label = options.label;
        var error = formErrors && formErrors[field];
        var componentOptions = {
            name: field,
            label: label,
            options: options,
            value: formData[field],
            setValue: setFormDataValue(field),
            error: error
        };
        return (react_1.default.createElement(react_1.default.Fragment, { key: field }, component ? component(componentOptions) : react_1.default.createElement(FormField_1.default, __assign({}, componentOptions))));
    };
    var onSubmit = function (event) {
        if (event) {
            event.preventDefault();
        }
        setIsSubmitting(true);
        setIsValidating(true);
        validateFormData(formData);
    };
    return (react_1.default.createElement("form", { onSubmit: onSubmit, noValidate: true },
        fields.map(function (field) { return fieldOptions[field] && getFieldComponent(field); }),
        react_1.default.createElement("button", { type: "submit", className: "submit-button" }, "Submit")));
};
exports.default = FormBuilder;


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
    var options = _a.options, value = _a.value, name = _a.name, label = _a.label, setValue = _a.setValue, error = _a.error;
    var _b = options || {}, _c = _b.element, element = _c === void 0 ? 'input' : _c, _d = _b.type, type = _d === void 0 ? 'text' : _d, _e = _b.keyValues, keyValues = _e === void 0 ? {} : _e;
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
                    react_1.default.createElement("select", __assign({}, { onChange: onChange, defaultValue: value }), Object.keys(keyValues).map(function (key) {
                        return react_1.default.createElement("option", { key: key, value: key }, keyValues[key]);
                    }))),
                error && getError(error)));
        }
        case 'textarea': {
            return (react_1.default.createElement("div", null,
                react_1.default.createElement("label", null,
                    label,
                    react_1.default.createElement("textarea", __assign({}, { name: name, defaultValue: value, onChange: onChange }))),
                error && getError(error)));
        }
        default: {
            return (react_1.default.createElement("div", null,
                react_1.default.createElement("label", null,
                    label,
                    react_1.default.createElement("input", __assign({}, { type: type, name: name, defaultValue: value, onChange: onChange }))),
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