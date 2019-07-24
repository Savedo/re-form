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
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar FormField_1 = __importDefault(__webpack_require__(/*! ../FormField/FormField */ \"./src/components/FormField/FormField.tsx\"));\nvar FormBuilder = function (_a) {\n    var fields = _a.fields, _b = _a.fieldOptions, fieldOptions = _b === void 0 ? {} : _b, values = _a.values, validate = _a.validate, handleSubmit = _a.handleSubmit, submitSection = _a.submitSection;\n    var setFormObject = function (currentValues) {\n        if (currentValues === void 0) { currentValues = {}; }\n        var defaults = fields.reduce(function (acc, field) {\n            var _a;\n            return (__assign({}, acc, (_a = {}, _a[field] = null, _a)));\n        }, {});\n        return Object.assign(defaults, values, currentValues);\n    };\n    var _c = react_1.useState(setFormObject()), formData = _c[0], setFormData = _c[1];\n    var _d = react_1.useState({}), formErrors = _d[0], setFormErrors = _d[1];\n    var _e = react_1.useState(false), isValidating = _e[0], setIsValidating = _e[1];\n    var _f = react_1.useState(false), isSubmitting = _f[0], setIsSubmitting = _f[1];\n    react_1.useEffect(function () {\n        if (Object.keys(formErrors).length === 0 && isValidating && isSubmitting) {\n            handleSubmit && handleSubmit(formData);\n        }\n        if (isSubmitting) {\n            setIsSubmitting(false);\n        }\n    }, [formErrors]);\n    var validateFormData = function (newFormData) {\n        if (validate && typeof validate === 'function') {\n            var errors = validate(newFormData);\n            if (errors && Object.keys(errors).length > 0) {\n                if (errors !== formErrors) {\n                    setFormErrors(errors);\n                }\n                return;\n            }\n        }\n        if (formErrors !== {}) {\n            setFormErrors({});\n        }\n    };\n    var setFormDataValue = function (field) {\n        return function (value) {\n            var _a;\n            var newFormData = setFormObject(__assign({}, formData, (_a = {}, _a[field] = value, _a)));\n            if (newFormData !== formData) {\n                setFormData(newFormData);\n                if (isValidating) {\n                    validateFormData(newFormData);\n                }\n            }\n        };\n    };\n    var getFieldComponent = function (field) {\n        var options = fieldOptions[field];\n        var error = formErrors && formErrors[field];\n        var component = options.component;\n        var componentOptions = {\n            name: field,\n            options: options,\n            value: formData[field],\n            setValue: setFormDataValue(field),\n            error: error\n        };\n        return (react_1.default.createElement(react_1.default.Fragment, { key: field }, component ? component(componentOptions) : react_1.default.createElement(FormField_1.default, __assign({}, componentOptions))));\n    };\n    var onSubmit = function (event) {\n        if (event) {\n            event.preventDefault();\n        }\n        setIsSubmitting(true);\n        setIsValidating(true);\n        validateFormData(formData);\n    };\n    return (react_1.default.createElement(\"form\", { onSubmit: onSubmit, noValidate: true },\n        fields.map(function (field) { return fieldOptions[field] && getFieldComponent(field); }),\n        (submitSection && submitSection({})) || react_1.default.createElement(\"button\", { type: \"submit\", className: \"submit\" }, \"Submit\")));\n};\nexports.default = FormBuilder;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Gb3JtQnVpbGRlci9Gb3JtQnVpbGRlci50c3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb3JtQnVpbGRlci9Gb3JtQnVpbGRlci50c3g/MjkzMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRm9ybUV2ZW50SGFuZGxlciwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZpZWxkT3B0aW9uc1ZhbHVlVHlwZSwgRm9ybUJ1aWxkZXJUeXBlLCBGb3JtRGF0YVR5cGUgfSBmcm9tICdAcmVmb3JtJztcbmltcG9ydCBGb3JtRmllbGQgZnJvbSAnLi4vRm9ybUZpZWxkL0Zvcm1GaWVsZCc7XG5cbmNvbnN0IEZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlclR5cGU8YW55PiA9IChcbiAgeyBmaWVsZHMsIGZpZWxkT3B0aW9ucyA9IHt9LCB2YWx1ZXMsIHZhbGlkYXRlLCBoYW5kbGVTdWJtaXQsIHN1Ym1pdFNlY3Rpb24gfSkgPT4ge1xuXG4gIGNvbnN0IHNldEZvcm1PYmplY3QgPSAoY3VycmVudFZhbHVlczogYW55ID0ge30pID0+IHtcbiAgICBjb25zdCBkZWZhdWx0cyA9IGZpZWxkcy5yZWR1Y2UoKGFjYywgZmllbGQpID0+ICh7IC4uLmFjYywgW2ZpZWxkXTogbnVsbCB9KSwge30pO1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKGRlZmF1bHRzLCB2YWx1ZXMsIGN1cnJlbnRWYWx1ZXMpO1xuICB9O1xuXG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoc2V0Rm9ybU9iamVjdCgpKTtcbiAgY29uc3QgW2Zvcm1FcnJvcnMsIHNldEZvcm1FcnJvcnNdOiBbIHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0sIGFueSBdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBbaXNWYWxpZGF0aW5nLCBzZXRJc1ZhbGlkYXRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNTdWJtaXR0aW5nLCBzZXRJc1N1Ym1pdHRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKE9iamVjdC5rZXlzKGZvcm1FcnJvcnMpLmxlbmd0aCA9PT0gMCAmJiBpc1ZhbGlkYXRpbmcgJiYgaXNTdWJtaXR0aW5nKSB7XG4gICAgICBoYW5kbGVTdWJtaXQgJiYgaGFuZGxlU3VibWl0KGZvcm1EYXRhKTtcbiAgICB9XG4gICAgaWYgKGlzU3VibWl0dGluZykge1xuICAgICAgc2V0SXNTdWJtaXR0aW5nKGZhbHNlKTtcbiAgICB9XG4gIH0sIFtmb3JtRXJyb3JzXSk7XG5cbiAgLyoqXG4gICAqIGNhbGxzIHZhbGlkYXRlIGZ1bmN0aW9uIHdpdGggZm9ybSBkYXRhIGlmIGl0J3MgZGVmaW5lZC5cbiAgICogVXBkYXRlcyB0aGUgIGZvcm0gRXJyb3JzIHdpdGggbGF0ZXMgZXJyb3JzLlxuICAgKiBAcGFyYW0gbmV3Rm9ybURhdGEgdGhlIGxhdGVzdCB1cGRhdGUgZm9ybSBkYXRhXG4gICAqL1xuICBjb25zdCB2YWxpZGF0ZUZvcm1EYXRhID0gKG5ld0Zvcm1EYXRhOiBGb3JtRGF0YVR5cGUpID0+IHtcbiAgICBpZiAodmFsaWRhdGUgJiYgdHlwZW9mIHZhbGlkYXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zdCBlcnJvcnMgPSB2YWxpZGF0ZShuZXdGb3JtRGF0YSk7XG4gICAgICBpZiAoZXJyb3JzICYmIE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAoZXJyb3JzICE9PSBmb3JtRXJyb3JzKSB7XG4gICAgICAgICAgc2V0Rm9ybUVycm9ycyhlcnJvcnMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGZvcm1FcnJvcnMgIT09IHt9KSB7XG4gICAgICBzZXRGb3JtRXJyb3JzKHt9KTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgZm9ybSBzdGF0ZSBpZiBhbnkgZmllbGQgdmFsdWUgaGFzIGNoYW5nZWQuIEl0IGZvcndhcmRzIGZvcm0gZGF0YSB0byB2YWxpZGF0aW9uIG1ldGhvZCxcbiAgICogaWYgdGhlIHZhbGlkYXRpb24gaXMgaW4gYWZmZWN0LlxuICAgKiBAcGFyYW0gZmllbGRcbiAgICovXG4gIGNvbnN0IHNldEZvcm1EYXRhVmFsdWUgPVxuICAgIChmaWVsZDogc3RyaW5nKSA9PlxuICAgICAgKHZhbHVlOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3QgbmV3Rm9ybURhdGEgPSBzZXRGb3JtT2JqZWN0KHsgLi4uZm9ybURhdGEsIFtmaWVsZF06IHZhbHVlIH0pO1xuICAgICAgICBpZiAobmV3Rm9ybURhdGEgIT09IGZvcm1EYXRhKSB7XG4gICAgICAgICAgc2V0Rm9ybURhdGEobmV3Rm9ybURhdGEpO1xuICAgICAgICAgIGlmIChpc1ZhbGlkYXRpbmcpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlRm9ybURhdGEobmV3Rm9ybURhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAvKipcbiAgICogUmVuZGVycyBmb3JtIGZpZWxkIGNvbXBvbmVudFxuICAgKiBAcGFyYW0gZmllbGQgTmFtZSBvZiB0aGUgRmllbGRcbiAgICogQHJldHVybiBBIEZvcm0gRWxlbWVudCwgSW5zdGFuY2Ugb2YgRm9ybUZpZWxkXG4gICAqL1xuICBjb25zdCBnZXRGaWVsZENvbXBvbmVudCA9IChmaWVsZDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qgb3B0aW9uczogRmllbGRPcHRpb25zVmFsdWVUeXBlPHN0cmluZz4gPSBmaWVsZE9wdGlvbnNbZmllbGRdIGFzIEZpZWxkT3B0aW9uc1ZhbHVlVHlwZTxzdHJpbmc+O1xuICAgIGNvbnN0IGVycm9yID0gZm9ybUVycm9ycyAmJiBmb3JtRXJyb3JzW2ZpZWxkXSBhcyBzdHJpbmc7XG4gICAgY29uc3QgeyBjb21wb25lbnQgfSA9IG9wdGlvbnM7XG4gICAgY29uc3QgY29tcG9uZW50T3B0aW9ucyA9IHtcbiAgICAgIG5hbWU6IGZpZWxkLFxuICAgICAgb3B0aW9ucyxcbiAgICAgIHZhbHVlOiBmb3JtRGF0YVtmaWVsZF0sXG4gICAgICBzZXRWYWx1ZTogc2V0Rm9ybURhdGFWYWx1ZShmaWVsZCksXG4gICAgICBlcnJvclxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17IGZpZWxkIH0+XG4gICAgICAgIHsgY29tcG9uZW50ID8gY29tcG9uZW50KGNvbXBvbmVudE9wdGlvbnMpIDogPEZvcm1GaWVsZCB7IC4uLmNvbXBvbmVudE9wdGlvbnMgfSAvPiB9XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG4gIH07XG5cbiAgY29uc3Qgb25TdWJtaXQ6IEZvcm1FdmVudEhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICAgIHNldElzU3VibWl0dGluZyh0cnVlKTtcbiAgICBzZXRJc1ZhbGlkYXRpbmcodHJ1ZSk7XG4gICAgdmFsaWRhdGVGb3JtRGF0YShmb3JtRGF0YSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17IG9uU3VibWl0IH0gbm9WYWxpZGF0ZT17IHRydWUgfT5cbiAgICAgIHsgZmllbGRzLm1hcChmaWVsZCA9PiBmaWVsZE9wdGlvbnNbZmllbGRdICYmIGdldEZpZWxkQ29tcG9uZW50KGZpZWxkKSkgfVxuICAgICAgeyAoc3VibWl0U2VjdGlvbiAmJiBzdWJtaXRTZWN0aW9uKHt9KSkgfHwgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+IH1cbiAgICA8L2Zvcm0+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtQnVpbGRlcjtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUdBO0FBRUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/FormBuilder/FormBuilder.tsx\n");

/***/ }),

/***/ "./src/components/FormField/FormField.tsx":
/*!************************************************!*\
  !*** ./src/components/FormField/FormField.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar FormField = function (_a) {\n    var options = _a.options, value = _a.value, name = _a.name, setValue = _a.setValue, error = _a.error;\n    var _b = options || {}, _c = _b.element, element = _c === void 0 ? 'input' : _c, _d = _b.type, type = _d === void 0 ? 'text' : _d, _e = _b.keyValues, keyValues = _e === void 0 ? {} : _e, _f = _b.className, className = _f === void 0 ? '' : _f, _g = _b.label, label = _g === void 0 ? '' : _g, _h = _b.defaultValue, defaultValue = _h === void 0 ? '' : _h;\n    console.log(value);\n    var onChange = function (event) {\n        event.preventDefault();\n        setValue(event.currentTarget.value);\n    };\n    var getError = function (error) { return (react_1.default.createElement(\"div\", { className: \"error\" }, error)); };\n    switch (element) {\n        case 'select': {\n            return (react_1.default.createElement(\"div\", null,\n                react_1.default.createElement(\"label\", null,\n                    label,\n                    react_1.default.createElement(\"select\", __assign({}, { className: className, onChange: onChange, defaultValue: defaultValue }), Object.keys(keyValues).map(function (key) {\n                        return react_1.default.createElement(\"option\", { key: key, value: key }, keyValues[key]);\n                    }))),\n                error && getError(error)));\n        }\n        case 'textarea': {\n            return (react_1.default.createElement(\"div\", null,\n                react_1.default.createElement(\"label\", null,\n                    label,\n                    react_1.default.createElement(\"textarea\", __assign({}, { className: className, name: name, defaultValue: defaultValue, onChange: onChange }))),\n                error && getError(error)));\n        }\n        default: {\n            return (react_1.default.createElement(\"div\", null,\n                react_1.default.createElement(\"label\", null,\n                    label,\n                    react_1.default.createElement(\"input\", __assign({}, { type: type, className: className, name: name, defaultValue: defaultValue, onChange: onChange }))),\n                error && getError(error)));\n        }\n    }\n};\nexports.default = FormField;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Gb3JtRmllbGQvRm9ybUZpZWxkLnRzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Zvcm1GaWVsZC9Gb3JtRmllbGQudHN4PzEzNTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENoYW5nZUV2ZW50SGFuZGxlciB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZvcm1GaWVsZFR5cGUgfSBmcm9tICdAcmVmb3JtJztcblxuY29uc3QgRm9ybUZpZWxkOiBGb3JtRmllbGRUeXBlPHN0cmluZz4gPSAoXG4gIHtcbiAgICBvcHRpb25zLFxuICAgIHZhbHVlLFxuICAgIG5hbWUsXG4gICAgc2V0VmFsdWUsXG4gICAgZXJyb3JcbiAgfVxuKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBlbGVtZW50ID0gJ2lucHV0JyxcbiAgICB0eXBlID0gJ3RleHQnLFxuICAgIGtleVZhbHVlcyA9IHt9LFxuICAgIGNsYXNzTmFtZSA9ICcnLFxuICAgIGxhYmVsID0gJycsXG4gICAgZGVmYXVsdFZhbHVlID0gJydcbiAgfSA9IG9wdGlvbnMgfHwge307XG5cbiAgY29uc29sZS5sb2codmFsdWUpO1xuICBjb25zdCBvbkNoYW5nZTogQ2hhbmdlRXZlbnRIYW5kbGVyPEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MU2VsZWN0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnQ+ID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRWYWx1ZShldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBnZXRFcnJvciA9IChlcnJvcjogc3RyaW5nKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvclwiPnsgZXJyb3IgfTwvZGl2PlxuICApO1xuXG4gIHN3aXRjaCAoZWxlbWVudCkge1xuICAgIGNhc2UgJ3NlbGVjdCc6IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsPnsgbGFiZWwgfVxuICAgICAgICAgICAgPHNlbGVjdCB7IC4uLnsgY2xhc3NOYW1lLCBvbkNoYW5nZSwgZGVmYXVsdFZhbHVlOiBkZWZhdWx0VmFsdWUgfSB9PlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoa2V5VmFsdWVzKS5tYXAoKGtleTogc3RyaW5nKSA9PlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9eyBrZXkgfSB2YWx1ZT17IGtleSB9Pnsga2V5VmFsdWVzW2tleV0gfTwvb3B0aW9uPilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICB7IGVycm9yICYmIGdldEVycm9yKGVycm9yKSB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gICAgY2FzZSAndGV4dGFyZWEnOiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbD57IGxhYmVsIH1cbiAgICAgICAgICAgIDx0ZXh0YXJlYSB7IC4uLnsgY2xhc3NOYW1lLCBuYW1lLCBkZWZhdWx0VmFsdWUsIG9uQ2hhbmdlIH0gfSAvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgeyBlcnJvciAmJiBnZXRFcnJvcihlcnJvcikgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsPnsgbGFiZWwgfTxpbnB1dCB7IC4uLnsgdHlwZSwgY2xhc3NOYW1lLCBuYW1lLCBkZWZhdWx0VmFsdWUsIG9uQ2hhbmdlIH0gfSAvPjwvbGFiZWw+XG4gICAgICAgICAgeyBlcnJvciAmJiBnZXRFcnJvcihlcnJvcikgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtRmllbGQ7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBO0FBRUE7QUFPQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFJQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFFQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/FormField/FormField.tsx\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar FormField_1 = __webpack_require__(/*! ./components/FormField/FormField */ \"./src/components/FormField/FormField.tsx\");\nexports.FormField = FormField_1.default;\nvar FormBuilder_1 = __webpack_require__(/*! ./components/FormBuilder/FormBuilder */ \"./src/components/FormBuilder/FormBuilder.tsx\");\nexports.FormBuilder = FormBuilder_1.default;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHM/ZmZiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBkZWZhdWx0IGFzIEZvcm1GaWVsZCB9IGZyb20gJy4vY29tcG9uZW50cy9Gb3JtRmllbGQvRm9ybUZpZWxkJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRm9ybUJ1aWxkZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvRm9ybUJ1aWxkZXIvRm9ybUJ1aWxkZXInO1xuIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQUE7QUFDQTtBQUFBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ }),

/***/ "react":
/*!************************************************************************!*\
  !*** external {"root":"React","commonjs":"react","commonjs2":"react"} ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwifT82MWRlIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yZWFjdF9fOyJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });
});