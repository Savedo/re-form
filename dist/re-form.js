(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("yup"));
	else if(typeof define === 'function' && define.amd)
		define([, ], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("yup")) : factory(root["React"], root["yup"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_yup__) {
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

/***/ "./src/FormBuilderContext.ts":
/*!***********************************!*\
  !*** ./src/FormBuilderContext.ts ***!
  \***********************************/
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var yup = __importStar(__webpack_require__(/*! yup */ "yup"));
var FormBuilderContext = (function () {
    function FormBuilderContext(_a) {
        var _this = this;
        var fields = _a.fields, fieldOptions = _a.fieldOptions, _b = _a.validation, validation = _b === void 0 ? {} : _b, handleSubmit = _a.handleSubmit;
        this.getDefaultValues = function () {
            return Object
                .keys(_this.fieldOptions)
                .reduce(function (acc, key) {
                var _a;
                return (__assign({}, acc, (_a = {}, _a[key] = _this.fieldOptions[key].defaultValue, _a)));
            }, {});
        };
        this.getValidationSchema = function () {
            if (_this.validation.yupSchema) {
                return _this.validation.yupSchema;
            }
            var yupSchema = Object
                .keys(_this.fieldOptions)
                .reduce(function (acc, key) {
                var _a;
                if (_this.fieldOptions[key].validation) {
                    return __assign({}, acc, (_a = {}, _a[key] = _this.fieldOptions[key].validation, _a));
                }
                return acc;
            }, {});
            _this.validation.yupSchema = yup.object().shape(yupSchema);
            return _this.validation.yupSchema;
        };
        this.extractErrors = function (errors) {
            if (errors && errors.inner) {
                return errors.inner
                    .reduce(function (acc, _a) {
                    var _b;
                    var path = _a.path, message = _a.message;
                    return (__assign({}, acc, (_b = {}, _b[path] = message, _b)));
                }, {});
            }
            return {};
        };
        this.validate = function (data) { return __awaiter(_this, void 0, void 0, function () {
            var schema, errors_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        schema = this.getValidationSchema();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, schema.validate(data, this.validation.yupOptions)];
                    case 2:
                        _a.sent();
                        return [2, null];
                    case 3:
                        errors_1 = _a.sent();
                        return [2, this.extractErrors(errors_1)];
                    case 4: return [2];
                }
            });
        }); };
        this.fields = fields || [];
        this.fieldOptions = fieldOptions || {};
        this.validation = __assign({
            isActive: true,
            yupSchema: null,
            yupOptions: {
                abortEarly: false
            }
        }, validation);
        this.handleSubmit = handleSubmit || (function () { return console.warn('form submission not handled!'); });
        this.formData = null;
        this.formErrors = null;
    }
    return FormBuilderContext;
}());
exports.default = FormBuilderContext;


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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(__webpack_require__(/*! react */ "react"));
var FormField_1 = __importDefault(__webpack_require__(/*! ../FormField/FormField */ "./src/components/FormField/FormField.tsx"));
var FormBuilder = function (props) {
    var context = props.context;
    var fields = context.fields, fieldOptions = context.fieldOptions, getDefaultValues = context.getDefaultValues, validation = context.validation, validate = context.validate, handleSubmit = context.handleSubmit;
    var defaultFormData = getDefaultValues();
    var _a = react_1.useState(defaultFormData), formData = _a[0], setFormData = _a[1];
    var _b = react_1.useState({}), formErrors = _b[0], setFormErrors = _b[1];
    var setFormDataValue = function (field) {
        return function (value) { return __awaiter(_this, void 0, void 0, function () {
            var _a, newFormData, errors;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        newFormData = __assign({}, formData, (_a = {}, _a[field] = value, _a));
                        setFormData(newFormData);
                        if (!validation.isActive) return [3, 2];
                        return [4, validate(newFormData)];
                    case 1:
                        errors = _b.sent();
                        setFormErrors(errors);
                        if (!errors) {
                            handleSubmit(newFormData);
                            return [2];
                        }
                        _b.label = 2;
                    case 2: return [2];
                }
            });
        }); };
    };
    var getFieldComponent = function (field) {
        var options = fieldOptions[field];
        var component = options.component, label = options.label;
        var error = formErrors && formErrors[field];
        var formFieldOptions = {
            name: field,
            label: label,
            options: options,
            defaultValue: formData[field],
            setValue: setFormDataValue(field),
            error: error
        };
        return (react_1.default.createElement(react_1.default.Fragment, { key: field }, component ? component(formFieldOptions) : react_1.default.createElement(FormField_1.default, __assign({}, formFieldOptions))));
    };
    return (react_1.default.createElement(react_1.default.Fragment, null, fields.map(function (field) { return getFieldComponent(field); })));
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
    var options = _a.options, defaultValue = _a.defaultValue, name = _a.name, label = _a.label, setValue = _a.setValue, error = _a.error;
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
                    react_1.default.createElement("select", __assign({}, { onChange: onChange, defaultValue: defaultValue }), Object.keys(keyValues).map(function (key) {
                        return react_1.default.createElement("option", { key: key, value: key }, keyValues[key]);
                    }))),
                error && getError(error)));
        }
        case 'textarea': {
            return (react_1.default.createElement("div", null,
                react_1.default.createElement("label", null,
                    label,
                    react_1.default.createElement("textarea", __assign({}, { name: name, defaultValue: defaultValue, onChange: onChange }))),
                error && getError(error)));
        }
        default: {
            return (react_1.default.createElement("div", null,
                react_1.default.createElement("label", null,
                    label,
                    react_1.default.createElement("input", __assign({}, { type: type, name: name, defaultValue: defaultValue, onChange: onChange }))),
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
var FormBuilderContext_1 = __webpack_require__(/*! ./FormBuilderContext */ "./src/FormBuilderContext.ts");
exports.FormBuilderContext = FormBuilderContext_1.default;


/***/ }),

/***/ "react":
/*!************************************************************************!*\
  !*** external {"root":"React","commonjs":"react","commonjs2":"react"} ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "yup":
/*!******************************************************************!*\
  !*** external {"root":"yup","commonjs":"yup","commonjs2":"yup"} ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_yup__;

/***/ })

/******/ });
});