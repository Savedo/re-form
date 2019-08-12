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
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar FormField_1 = __importDefault(__webpack_require__(/*! ../FormField/FormField */ \"./src/components/FormField/FormField.tsx\"));\nvar FormBuilder = function (_a) {\n    var fields = _a.fields, _b = _a.fieldOptions, fieldOptions = _b === void 0 ? {} : _b, values = _a.values, validate = _a.validate, handleSubmit = _a.handleSubmit, submitSection = _a.submitSection;\n    var setFormObject = function (currentValues) {\n        if (currentValues === void 0) { currentValues = {}; }\n        var defaults = fields.reduce(function (acc, field) {\n            var _a, _b;\n            var fieldOptForField = fieldOptions[field];\n            if (fieldOptForField && fieldOptForField.type && fieldOptForField.type === 'checkbox') {\n                return __assign({}, acc, (_a = {}, _a[field] = fieldOptForField.checked, _a));\n            }\n            var _c = fieldOptForField.defaultValue, defaultValue = _c === void 0 ? null : _c;\n            return __assign({}, acc, (_b = {}, _b[field] = defaultValue, _b));\n        }, {});\n        return Object.assign(defaults, values, currentValues);\n    };\n    var _c = react_1.useState(setFormObject()), formData = _c[0], setFormData = _c[1];\n    var _d = react_1.useState({}), formErrors = _d[0], setFormErrors = _d[1];\n    var _e = react_1.useState(false), isValidating = _e[0], setIsValidating = _e[1];\n    var _f = react_1.useState(false), isSubmitting = _f[0], setIsSubmitting = _f[1];\n    react_1.useEffect(function () {\n        if (Object.keys(formErrors).length === 0 && isValidating && isSubmitting) {\n            handleSubmit && handleSubmit(formData);\n        }\n        if (isSubmitting) {\n            setIsSubmitting(false);\n        }\n    }, [formErrors]);\n    var setErrors = function (errors) {\n        if (Object.keys(errors).length > 0) {\n            if (errors !== formErrors) {\n                setFormErrors(errors);\n            }\n            return;\n        }\n        if (formErrors !== {}) {\n            setFormErrors({});\n        }\n    };\n    var validateFormData = function (newFormData) {\n        if (validate && typeof validate === 'function') {\n            var errors = validate(newFormData);\n            errors && ((Promise.resolve(errors) === errors) ? errors.then(setErrors) : setErrors(errors));\n        }\n    };\n    var setFormDataValue = function (field) {\n        return function (value) {\n            var _a;\n            var newFormData = setFormObject(__assign({}, formData, (_a = {}, _a[field] = value, _a)));\n            if (newFormData !== formData) {\n                setFormData(newFormData);\n                if (isValidating) {\n                    validateFormData(newFormData);\n                }\n            }\n        };\n    };\n    var getFieldComponent = function (field) {\n        var options = fieldOptions[field];\n        var error = formErrors && formErrors[field];\n        var component = options.component;\n        var commonComponentOptions = {\n            name: field,\n            options: options,\n            setValue: setFormDataValue(field),\n            error: error\n        };\n        var componentOptions;\n        if (options.type === 'checkbox') {\n            componentOptions = __assign({}, commonComponentOptions, { checked: formData[field] });\n        }\n        else {\n            componentOptions = __assign({}, commonComponentOptions, { value: formData[field] });\n        }\n        return (react_1.default.createElement(react_1.default.Fragment, { key: field }, component ? component(componentOptions) : react_1.default.createElement(FormField_1.default, __assign({}, componentOptions))));\n    };\n    var onSubmit = function (event) {\n        if (event) {\n            event.preventDefault();\n        }\n        setIsSubmitting(true);\n        setIsValidating(true);\n        validateFormData(formData);\n    };\n    return (react_1.default.createElement(\"form\", { onSubmit: onSubmit, noValidate: true },\n        fields.map(function (field) { return fieldOptions[field] && getFieldComponent(field); }),\n        (submitSection && submitSection({})) || react_1.default.createElement(\"button\", { type: \"submit\", className: \"submit\" }, \"Submit\")));\n};\nexports.default = FormBuilder;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Gb3JtQnVpbGRlci9Gb3JtQnVpbGRlci50c3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb3JtQnVpbGRlci9Gb3JtQnVpbGRlci50c3g/MjkzMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRm9ybUV2ZW50SGFuZGxlciwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGb3JtRmllbGQgZnJvbSAnLi4vRm9ybUZpZWxkL0Zvcm1GaWVsZCc7XG5pbXBvcnQge1xuICBGaWVsZE9wdGlvbnNWYWx1ZVR5cGUsXG4gIEZvcm1GaWVsZFByb3BzVHlwZSxcbiAgRm9ybUJ1aWxkZXJUeXBlLFxuICBGb3JtRGF0YVR5cGUsXG4gIEZvcm1FcnJvcnNUeXBlXG59IGZyb20gJ0ByZWZvcm0nO1xuXG5jb25zdCBGb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXJUeXBlPGFueT4gPSAoXG4gIHsgZmllbGRzLCBmaWVsZE9wdGlvbnMgPSB7fSwgdmFsdWVzLCB2YWxpZGF0ZSwgaGFuZGxlU3VibWl0LCBzdWJtaXRTZWN0aW9uIH0pID0+IHtcbiAgY29uc3Qgc2V0Rm9ybU9iamVjdCA9IChjdXJyZW50VmFsdWVzOiBhbnkgPSB7fSkgPT4ge1xuICAgIGNvbnN0IGRlZmF1bHRzID0gZmllbGRzLnJlZHVjZSgoYWNjLCBmaWVsZCkgPT4ge1xuICAgICAgbGV0IGZpZWxkT3B0Rm9yRmllbGQgPSBmaWVsZE9wdGlvbnNbZmllbGRdO1xuICAgICAgaWYgKGZpZWxkT3B0Rm9yRmllbGQgJiYgZmllbGRPcHRGb3JGaWVsZC50eXBlICYmIGZpZWxkT3B0Rm9yRmllbGQudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgICByZXR1cm4geyAuLi5hY2MsIFtmaWVsZF06IGZpZWxkT3B0Rm9yRmllbGQuY2hlY2tlZCBhcyBGaWVsZE9wdGlvbnNWYWx1ZVR5cGU8YW55PiB9O1xuICAgICAgfVxuICAgICAgY29uc3QgeyBkZWZhdWx0VmFsdWUgPSBudWxsIH0gPSBmaWVsZE9wdEZvckZpZWxkIGFzIEZpZWxkT3B0aW9uc1ZhbHVlVHlwZTxhbnk+O1xuICAgICAgcmV0dXJuIHsgLi4uYWNjLCBbZmllbGRdOiBkZWZhdWx0VmFsdWUgfTtcbiAgICB9LCB7fSk7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oZGVmYXVsdHMsIHZhbHVlcywgY3VycmVudFZhbHVlcyk7XG4gIH07XG5cbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZShzZXRGb3JtT2JqZWN0KCkpO1xuICBjb25zdCBbZm9ybUVycm9ycywgc2V0Rm9ybUVycm9yc106IFtGb3JtRXJyb3JzVHlwZSwgYW55IF0gPSB1c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IFtpc1ZhbGlkYXRpbmcsIHNldElzVmFsaWRhdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc1N1Ym1pdHRpbmcsIHNldElzU3VibWl0dGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKE9iamVjdC5rZXlzKGZvcm1FcnJvcnMpLmxlbmd0aCA9PT0gMCAmJiBpc1ZhbGlkYXRpbmcgJiYgaXNTdWJtaXR0aW5nKSB7XG4gICAgICBoYW5kbGVTdWJtaXQgJiYgaGFuZGxlU3VibWl0KGZvcm1EYXRhKTtcbiAgICB9XG4gICAgaWYgKGlzU3VibWl0dGluZykge1xuICAgICAgc2V0SXNTdWJtaXR0aW5nKGZhbHNlKTtcbiAgICB9XG4gIH0sIFtmb3JtRXJyb3JzXSk7XG5cbiAgLyoqXG4gICAqIGNhbGxzIHZhbGlkYXRlIGZ1bmN0aW9uIHdpdGggZm9ybSBkYXRhIGlmIGl0J3MgZGVmaW5lZC5cbiAgICogVXBkYXRlcyB0aGUgIGZvcm0gRXJyb3JzIHdpdGggbGF0ZXMgZXJyb3JzLlxuICAgKiBAcGFyYW0gbmV3Rm9ybURhdGEgdGhlIGxhdGVzdCB1cGRhdGUgZm9ybSBkYXRhXG4gICAqL1xuXG4gIGNvbnN0IHNldEVycm9ycyA9IChlcnJvcnM6IEZvcm1FcnJvcnNUeXBlIHwgUHJvbWlzZTxGb3JtRXJyb3JzVHlwZT4pID0+IHtcbiAgICBpZiAoT2JqZWN0LmtleXMoZXJyb3JzKS5sZW5ndGggPiAwKSB7XG4gICAgICBpZiAoZXJyb3JzICE9PSBmb3JtRXJyb3JzKSB7XG4gICAgICAgIHNldEZvcm1FcnJvcnMoZXJyb3JzKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGZvcm1FcnJvcnMgIT09IHt9KSB7XG4gICAgICBzZXRGb3JtRXJyb3JzKHt9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdmFsaWRhdGVGb3JtRGF0YSA9IChuZXdGb3JtRGF0YTogRm9ybURhdGFUeXBlKSA9PiB7XG4gICAgaWYgKHZhbGlkYXRlICYmIHR5cGVvZiB2YWxpZGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc3QgZXJyb3JzID0gdmFsaWRhdGUobmV3Rm9ybURhdGEpO1xuICAgICAgZXJyb3JzICYmICgoUHJvbWlzZS5yZXNvbHZlKGVycm9ycykgPT09IGVycm9ycykgPyBlcnJvcnMudGhlbihzZXRFcnJvcnMpIDogc2V0RXJyb3JzKGVycm9ycykpO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogVXBkYXRlcyBmb3JtIHN0YXRlIGlmIGFueSBmaWVsZCB2YWx1ZSBoYXMgY2hhbmdlZC4gSXQgZm9yd2FyZHMgZm9ybSBkYXRhIHRvIHZhbGlkYXRpb24gbWV0aG9kLFxuICAgKiBpZiB0aGUgdmFsaWRhdGlvbiBpcyBpbiBhZmZlY3QuXG4gICAqIEBwYXJhbSBmaWVsZFxuICAgKi9cbiAgY29uc3Qgc2V0Rm9ybURhdGFWYWx1ZSA9XG4gICAgKGZpZWxkOiBzdHJpbmcpID0+XG4gICAgICAodmFsdWU6IGFueSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdGb3JtRGF0YSA9IHNldEZvcm1PYmplY3QoeyAuLi5mb3JtRGF0YSwgW2ZpZWxkXTogdmFsdWUgfSk7XG4gICAgICAgIGlmIChuZXdGb3JtRGF0YSAhPT0gZm9ybURhdGEpIHtcbiAgICAgICAgICBzZXRGb3JtRGF0YShuZXdGb3JtRGF0YSk7XG4gICAgICAgICAgaWYgKGlzVmFsaWRhdGluZykge1xuICAgICAgICAgICAgdmFsaWRhdGVGb3JtRGF0YShuZXdGb3JtRGF0YSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gIC8qKlxuICAgKiBSZW5kZXJzIGZvcm0gZmllbGQgY29tcG9uZW50XG4gICAqIEBwYXJhbSBmaWVsZCBOYW1lIG9mIHRoZSBGaWVsZFxuICAgKiBAcmV0dXJuIEEgRm9ybSBFbGVtZW50LCBJbnN0YW5jZSBvZiBGb3JtRmllbGRcbiAgICovXG4gIGNvbnN0IGdldEZpZWxkQ29tcG9uZW50ID0gKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBvcHRpb25zOiBGaWVsZE9wdGlvbnNWYWx1ZVR5cGU8c3RyaW5nPiA9IGZpZWxkT3B0aW9uc1tmaWVsZF0gYXMgRmllbGRPcHRpb25zVmFsdWVUeXBlPHN0cmluZz47XG4gICAgY29uc3QgZXJyb3IgPSBmb3JtRXJyb3JzICYmIGZvcm1FcnJvcnNbZmllbGRdIGFzIHN0cmluZztcbiAgICBjb25zdCB7IGNvbXBvbmVudCB9ID0gb3B0aW9ucztcbiAgICBjb25zdCBjb21tb25Db21wb25lbnRPcHRpb25zOiBGb3JtRmllbGRQcm9wc1R5cGU8c3RyaW5nPiAgPSB7XG4gICAgICBuYW1lOiBmaWVsZCxcbiAgICAgIG9wdGlvbnMsXG4gICAgICBzZXRWYWx1ZTogc2V0Rm9ybURhdGFWYWx1ZShmaWVsZCksXG4gICAgICBlcnJvclxuICAgIH07XG4gICAgbGV0IGNvbXBvbmVudE9wdGlvbnM6IEZvcm1GaWVsZFByb3BzVHlwZTxzdHJpbmc+O1xuXG4gICAgaWYgKG9wdGlvbnMudHlwZSA9PT0gJ2NoZWNrYm94Jykge1xuICAgICAgY29tcG9uZW50T3B0aW9ucyA9IHsgLi4uY29tbW9uQ29tcG9uZW50T3B0aW9ucywgY2hlY2tlZDogZm9ybURhdGFbZmllbGRdIH07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29tcG9uZW50T3B0aW9ucyA9IHsgLi4uY29tbW9uQ29tcG9uZW50T3B0aW9ucywgdmFsdWU6IGZvcm1EYXRhW2ZpZWxkXSB9O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXsgZmllbGQgfT5cbiAgICAgICAgeyBjb21wb25lbnQgPyBjb21wb25lbnQoY29tcG9uZW50T3B0aW9ucykgOiA8Rm9ybUZpZWxkIHsgLi4uY29tcG9uZW50T3B0aW9ucyB9IC8+IH1cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfTtcblxuICBjb25zdCBvblN1Ym1pdDogRm9ybUV2ZW50SGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgc2V0SXNTdWJtaXR0aW5nKHRydWUpO1xuICAgIHNldElzVmFsaWRhdGluZyh0cnVlKTtcbiAgICB2YWxpZGF0ZUZvcm1EYXRhKGZvcm1EYXRhKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxmb3JtIG9uU3VibWl0PXsgb25TdWJtaXQgfSBub1ZhbGlkYXRlPXsgdHJ1ZSB9PlxuICAgICAgeyBmaWVsZHMubWFwKGZpZWxkID0+IGZpZWxkT3B0aW9uc1tmaWVsZF0gJiYgZ2V0RmllbGRDb21wb25lbnQoZmllbGQpKSB9XG4gICAgICB7IChzdWJtaXRTZWN0aW9uICYmIHN1Ym1pdFNlY3Rpb24oe30pKSB8fCA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj4gfVxuICAgIDwvZm9ybT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1CdWlsZGVyO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUdBO0FBRUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/FormBuilder/FormBuilder.tsx\n");

/***/ }),

/***/ "./src/components/FormField/FormField.tsx":
/*!************************************************!*\
  !*** ./src/components/FormField/FormField.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar FormField = function (_a) {\n    var options = _a.options, value = _a.value, name = _a.name, setValue = _a.setValue, error = _a.error;\n    var _b = options || {}, _c = _b.element, element = _c === void 0 ? 'input' : _c, _d = _b.type, type = _d === void 0 ? 'text' : _d, _e = _b.keyValues, keyValues = _e === void 0 ? {} : _e, _f = _b.className, className = _f === void 0 ? '' : _f, _g = _b.label, label = _g === void 0 ? '' : _g, _h = _b.disabled, disabled = _h === void 0 ? false : _h;\n    var onChange = function (event) {\n        event.preventDefault();\n        setValue(event.currentTarget.value);\n    };\n    var getError = function (error) { return (react_1.default.createElement(\"div\", { className: \"error\" }, error)); };\n    switch (element) {\n        case 'select': {\n            return (react_1.default.createElement(\"div\", null,\n                react_1.default.createElement(\"label\", null,\n                    label,\n                    react_1.default.createElement(\"select\", __assign({}, { disabled: disabled, className: className, onChange: onChange, defaultValue: value }), Object.keys(keyValues).map(function (key) {\n                        return react_1.default.createElement(\"option\", { key: key, value: key }, keyValues[key]);\n                    }))),\n                error && getError(error)));\n        }\n        case 'textarea': {\n            return (react_1.default.createElement(\"div\", null,\n                react_1.default.createElement(\"label\", null,\n                    label,\n                    react_1.default.createElement(\"textarea\", __assign({}, { disabled: disabled, className: className, name: name, defaultValue: value, onChange: onChange, placeholder: options.placeholder }))),\n                error && getError(error)));\n        }\n        default: {\n            return (react_1.default.createElement(\"div\", null,\n                react_1.default.createElement(\"label\", null,\n                    label,\n                    react_1.default.createElement(\"input\", __assign({}, { disabled: disabled, type: type, className: className, name: name, defaultValue: value, onChange: onChange, placeholder: options.placeholder }))),\n                error && getError(error)));\n        }\n    }\n};\nexports.default = FormField;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Gb3JtRmllbGQvRm9ybUZpZWxkLnRzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Zvcm1GaWVsZC9Gb3JtRmllbGQudHN4PzEzNTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENoYW5nZUV2ZW50SGFuZGxlciB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZvcm1GaWVsZFR5cGUgfSBmcm9tICdAcmVmb3JtJztcblxuY29uc3QgRm9ybUZpZWxkOiBGb3JtRmllbGRUeXBlPHN0cmluZz4gPSAoXG4gIHtcbiAgICBvcHRpb25zLFxuICAgIHZhbHVlLFxuICAgIG5hbWUsXG4gICAgc2V0VmFsdWUsXG4gICAgZXJyb3JcbiAgfVxuKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBlbGVtZW50ID0gJ2lucHV0JyxcbiAgICB0eXBlID0gJ3RleHQnLFxuICAgIGtleVZhbHVlcyA9IHt9LFxuICAgIGNsYXNzTmFtZSA9ICcnLFxuICAgIGxhYmVsID0gJycsXG4gICAgZGlzYWJsZWQgPSBmYWxzZVxuICB9ID0gb3B0aW9ucyB8fCB7fTtcblxuICBjb25zdCBvbkNoYW5nZTogQ2hhbmdlRXZlbnRIYW5kbGVyPEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MU2VsZWN0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnQ+ID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRWYWx1ZShldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBnZXRFcnJvciA9IChlcnJvcjogc3RyaW5nKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJlcnJvclwiPnsgZXJyb3IgfTwvZGl2PlxuICApO1xuXG4gIHN3aXRjaCAoZWxlbWVudCkge1xuICAgIGNhc2UgJ3NlbGVjdCc6IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsPnsgbGFiZWwgfVxuICAgICAgICAgICAgPHNlbGVjdCB7IC4uLnsgZGlzYWJsZWQsIGNsYXNzTmFtZSwgb25DaGFuZ2UsIGRlZmF1bHRWYWx1ZTogdmFsdWUgfSB9PlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoa2V5VmFsdWVzKS5tYXAoKGtleTogc3RyaW5nKSA9PlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9eyBrZXkgfSB2YWx1ZT17IGtleSB9Pnsga2V5VmFsdWVzW2tleV0gfTwvb3B0aW9uPilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICB7IGVycm9yICYmIGdldEVycm9yKGVycm9yKSB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gICAgY2FzZSAndGV4dGFyZWEnOiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxsYWJlbD57IGxhYmVsIH1cbiAgICAgICAgICAgIDx0ZXh0YXJlYSB7IC4uLnsgZGlzYWJsZWQsIGNsYXNzTmFtZSwgbmFtZSwgZGVmYXVsdFZhbHVlOiB2YWx1ZSwgb25DaGFuZ2UsIHBsYWNlaG9sZGVyOiBvcHRpb25zLnBsYWNlaG9sZGVyIH0gfSAvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgeyBlcnJvciAmJiBnZXRFcnJvcihlcnJvcikgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsPnsgbGFiZWwgfTxpbnB1dCB7IC4uLnsgZGlzYWJsZWQsIHR5cGUsIGNsYXNzTmFtZSwgbmFtZSwgZGVmYXVsdFZhbHVlOiB2YWx1ZSwgb25DaGFuZ2UsIHBsYWNlaG9sZGVyOiBvcHRpb25zLnBsYWNlaG9sZGVyIH0gfSAvPjwvbGFiZWw+XG4gICAgICAgICAgeyBlcnJvciAmJiBnZXRFcnJvcihlcnJvcikgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtRmllbGQ7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBO0FBRUE7QUFPQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFHQTtBQUFBO0FBSUE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/FormField/FormField.tsx\n");

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