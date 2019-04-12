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
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar FormField_1 = __importDefault(__webpack_require__(/*! ../FormField/FormField */ \"./src/components/FormField/FormField.tsx\"));\nvar FormBuilder = function (props) {\n    var fieldOptions = props.fieldOptions, fields = props.fields, onDataChange = props.onDataChange;\n    var defaultFormData = Object\n        .keys(fieldOptions)\n        .reduce(function (acc, key) {\n        var _a;\n        return (__assign({}, acc, (_a = {},\n            _a[key] = fieldOptions[key].defaultValue,\n            _a)));\n    }, {});\n    var _a = react_1.useState(defaultFormData), formData = _a[0], setFormData = _a[1];\n    var setFormDataValue = function (field) {\n        return function (value) {\n            var _a;\n            var newFormData = __assign({}, formData, (_a = {}, _a[field] = value, _a));\n            onDataChange(newFormData);\n            return setFormData(newFormData);\n        };\n    };\n    return (react_1.default.createElement(react_1.default.Fragment, null, fields && fields.map(function (field) {\n        return react_1.default.createElement(FormField_1.default, { key: field, name: field, label: fieldOptions && fieldOptions[field] && fieldOptions[field].label, options: fieldOptions && fieldOptions[field], value: formData[field], setValue: setFormDataValue(field) });\n    })));\n};\nexports.default = FormBuilder;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb3JtQnVpbGRlci9Gb3JtQnVpbGRlci50c3g/MjkzMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNFQUF3QztBQUV4QyxpSUFBK0M7QUFFL0MsSUFBTSxXQUFXLEdBQW9CLFVBQUMsS0FBSztJQUNqQyxxQ0FBWSxFQUFFLHFCQUFNLEVBQUUsaUNBQVksQ0FBVztJQUdyRCxJQUFNLGVBQWUsR0FBMkIsTUFBTTtTQUNuRCxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQ2xCLE1BQU0sQ0FBQyxVQUFDLEdBQUcsRUFBRSxHQUFHOztRQUFLLHFCQUNqQixHQUFHO1lBRUosR0FBQyxHQUFHLElBQUcsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVk7aUJBRXZDO0lBTG9CLENBS3BCLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFHSiwwQ0FBbUQsRUFBbEQsZ0JBQVEsRUFBRSxtQkFBd0MsQ0FBQztJQUcxRCxJQUFNLGdCQUFnQixHQUFHLFVBQUMsS0FBYTtRQUNyQyxpQkFBQyxLQUFVOztZQUNULElBQU0sV0FBVyxnQkFBUSxRQUFRLGVBQUcsS0FBSyxJQUFHLEtBQUssTUFBRSxDQUFDO1lBQ3BELFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUMxQixPQUFPLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNsQyxDQUFDO0lBSkQsQ0FJQyxDQUFDO0lBRUosT0FBTyxDQUNMLDhEQUVJLE1BQU0sSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQUs7UUFDeEIscUNBQUMsbUJBQVMsSUFDUixHQUFHLEVBQUcsS0FBSyxFQUNYLElBQUksRUFBRyxLQUFLLEVBQ1osS0FBSyxFQUFHLFlBQVksSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFDeEUsT0FBTyxFQUFHLFlBQVksSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQzdDLEtBQUssRUFBRyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQ3ZCLFFBQVEsRUFBRyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsR0FDbEM7SUFQRixDQU9FLENBQ0gsQ0FFRixDQUNKLENBQUM7QUFDSixDQUFDLENBQUM7QUFFRixrQkFBZSxXQUFXLENBQUMiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Gb3JtQnVpbGRlci9Gb3JtQnVpbGRlci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlclR5cGUgfSBmcm9tICdAcmVmb3JtJztcbmltcG9ydCBGb3JtRmllbGQgZnJvbSAnLi4vRm9ybUZpZWxkL0Zvcm1GaWVsZCc7XG5cbmNvbnN0IEZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlclR5cGUgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBmaWVsZE9wdGlvbnMsIGZpZWxkcywgb25EYXRhQ2hhbmdlIH0gPSBwcm9wcztcblxuICAvLyBjcmVhdGVzIGFuIG9iamVjdCB3aXRoIHRoZSBkZWZhdWx0IHZhbHVlcyBmb3IgaG9va1xuICBjb25zdCBkZWZhdWx0Rm9ybURhdGE6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSBPYmplY3RcbiAgICAua2V5cyhmaWVsZE9wdGlvbnMpXG4gICAgLnJlZHVjZSgoYWNjLCBrZXkpID0+ICh7XG4gICAgICAuLi5hY2MsXG4gICAgICAuLi57XG4gICAgICAgIFtrZXldOiBmaWVsZE9wdGlvbnNba2V5XS5kZWZhdWx0VmFsdWUsXG4gICAgICB9LFxuICAgIH0pLCB7fSk7XG5cbiAgLy8gY3JlYXRlcyBhIGhvb2tcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZShkZWZhdWx0Rm9ybURhdGEpO1xuXG4gIC8vIG1ldGhvZCB0byBydW4gc2V0Rm9ybURhdGEgaG9vayBmcm9tIG9uQ2hhbmdlIGV2ZW50IG9mIHRoZSBnZW5lcmF0ZWQgZWxlbWVudFxuICBjb25zdCBzZXRGb3JtRGF0YVZhbHVlID0gKGZpZWxkOiBzdHJpbmcpID0+XG4gICAgKHZhbHVlOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IG5ld0Zvcm1EYXRhID0geyAuLi5mb3JtRGF0YSwgW2ZpZWxkXTogdmFsdWUgfTtcbiAgICAgIG9uRGF0YUNoYW5nZShuZXdGb3JtRGF0YSk7XG4gICAgICByZXR1cm4gc2V0Rm9ybURhdGEobmV3Rm9ybURhdGEpO1xuICAgIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge1xuICAgICAgICBmaWVsZHMgJiYgZmllbGRzLm1hcChmaWVsZCA9PlxuICAgICAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgICAgIGtleT17IGZpZWxkIH1cbiAgICAgICAgICAgIG5hbWU9eyBmaWVsZCB9XG4gICAgICAgICAgICBsYWJlbD17IGZpZWxkT3B0aW9ucyAmJiBmaWVsZE9wdGlvbnNbZmllbGRdICYmIGZpZWxkT3B0aW9uc1tmaWVsZF0ubGFiZWwgfVxuICAgICAgICAgICAgb3B0aW9ucz17IGZpZWxkT3B0aW9ucyAmJiBmaWVsZE9wdGlvbnNbZmllbGRdIH1cbiAgICAgICAgICAgIHZhbHVlPXsgZm9ybURhdGFbZmllbGRdIH1cbiAgICAgICAgICAgIHNldFZhbHVlPXsgc2V0Rm9ybURhdGFWYWx1ZShmaWVsZCkgfVxuICAgICAgICAgIC8+LFxuICAgICAgICApXG4gICAgICB9XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtQnVpbGRlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/FormBuilder/FormBuilder.tsx\n");

/***/ }),

/***/ "./src/components/FormField/FormField.tsx":
/*!************************************************!*\
  !*** ./src/components/FormField/FormField.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar FormField = function (_a) {\n    var _b = _a.options, options = _b === void 0 ? {} : _b, value = _a.value, name = _a.name, setValue = _a.setValue;\n    var element = options.element, type = options.type, label = options.label;\n    var onChange = function (event) {\n        event.preventDefault();\n        setValue(event.currentTarget.value);\n    };\n    switch (element) {\n        default: {\n            return (react_1.default.createElement(\"div\", null,\n                react_1.default.createElement(\"label\", null,\n                    label || name,\n                    react_1.default.createElement(\"input\", __assign({}, { type: type, name: name, value: value, onChange: onChange })))));\n        }\n    }\n};\nexports.default = FormField;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Gb3JtRmllbGQvRm9ybUZpZWxkLnRzeD8xMzU4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5RUFBa0Q7QUFHbEQsSUFBTSxTQUFTLEdBQWtCLFVBQUMsRUFBdUM7UUFBckMsZUFBWSxFQUFaLGlDQUFZLEVBQUUsZ0JBQUssRUFBRSxjQUFJLEVBQUUsc0JBQVE7SUFDN0QsNkJBQU8sRUFBRSxtQkFBSSxFQUFFLHFCQUFLLENBQWE7SUFFekMsSUFBTSxRQUFRLEdBQXlDLFVBQUMsS0FBSztRQUMzRCxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsUUFBUSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEMsQ0FBQyxDQUFDO0lBRUYsUUFBUSxPQUFPLEVBQUU7UUFDZixPQUFPLENBQUMsQ0FBQztZQUNQLE9BQU8sQ0FDTDtnQkFDRTtvQkFBUyxLQUFLLElBQUksSUFBSTtvQkFBRSxvREFBWSxFQUFFLElBQUksUUFBRSxJQUFJLFFBQUUsS0FBSyxTQUFFLFFBQVEsWUFBRSxFQUFLLENBQVEsQ0FDNUUsQ0FDUCxDQUFDO1NBQ0g7S0FDRjtBQUNILENBQUMsQ0FBQztBQUVGLGtCQUFlLFNBQVMsQ0FBQyIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0Zvcm1GaWVsZC9Gb3JtRmllbGQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENoYW5nZUV2ZW50SGFuZGxlciB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZvcm1GaWVsZFR5cGUgfSBmcm9tICdAcmVmb3JtJztcblxuY29uc3QgRm9ybUZpZWxkOiBGb3JtRmllbGRUeXBlID0gKHsgb3B0aW9ucyA9IHt9LCB2YWx1ZSwgbmFtZSwgc2V0VmFsdWUgfSkgPT4ge1xuICBjb25zdCB7IGVsZW1lbnQsIHR5cGUsIGxhYmVsIH0gPSBvcHRpb25zO1xuXG4gIGNvbnN0IG9uQ2hhbmdlOiBDaGFuZ2VFdmVudEhhbmRsZXI8SFRNTElucHV0RWxlbWVudD4gPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldFZhbHVlKGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIHN3aXRjaCAoZWxlbWVudCkge1xuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGxhYmVsPnsgbGFiZWwgfHwgbmFtZSB9PGlucHV0IHsgLi4ueyB0eXBlLCBuYW1lLCB2YWx1ZSwgb25DaGFuZ2UgfSB9IC8+PC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9ybUZpZWxkO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/FormField/FormField.tsx\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar FormBuilder_1 = __webpack_require__(/*! ./components/FormBuilder/FormBuilder */ \"./src/components/FormBuilder/FormBuilder.tsx\");\nexports.FormBuilder = FormBuilder_1.default;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHM/ZmZiNCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG9JQUE4RTtBQUFyRSwyQ0FBTyxDQUFlIiwiZmlsZSI6Ii4vc3JjL2luZGV4LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgZGVmYXVsdCBhcyBGb3JtQnVpbGRlciB9IGZyb20gJy4vY29tcG9uZW50cy9Gb3JtQnVpbGRlci9Gb3JtQnVpbGRlcic7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ }),

/***/ "react":
/*!************************************************************************!*\
  !*** external {"root":"React","commonjs":"react","commonjs2":"react"} ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwge1wicm9vdFwiOlwiUmVhY3RcIixcImNvbW1vbmpzXCI6XCJyZWFjdFwiLFwiY29tbW9uanMyXCI6XCJyZWFjdFwifT82MWRlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JlYWN0X187Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });
});