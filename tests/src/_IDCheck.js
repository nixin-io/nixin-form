/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _regExpr = {
    italianMobilePhone: /^([+]39)?((38[{8,9}|0])|(34[{7-9}|0])|(36[6|8|0])|(33[{3-9}|0])|(32[{8,9}]))([\d]{7})$/,
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    cap: /^(V-|I-)?[0-9]{5}$/,
    number: /^-?\d+$/,
    noNumber: /^([^0-9]*)$/,
    integer: /^\d+$/,
    float: /[+-]?([0-9]*[.])?[0-9]+/,
    negative: /^-\d*\.?\d+$/,
    genericPhoneNumber: /(^[0-9\/\\]*)$/
};
exports._regExpr = _regExpr;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* Input Descriptor for Check test
* this module collect all methods for basical test
*/

Object.defineProperty(exports, "__esModule", { value: true });
var _regExpr_1 = __webpack_require__(0);
/**
* isEmpty
* @param value  value to test
* @return true or false
*/
var isEmpty = function (value) {
    if (value != null && value != undefined && value.length != 0)
        return false;
    return true;
};
exports.isEmpty = isEmpty;
/**
* notEmpty
* @param value  value to test
* @return true or false
*/
var notEmpty = function (value) {
    if (isEmpty(value))
        return false;
    return true;
};
exports.notEmpty = notEmpty;
/**
* isInteger
* @param value  value to test
* @return true or false matching a regular expression in _regExpr module
*/
var isInteger = function (value) {
    if (notEmpty(value)) {
        if (typeof value !== 'string')
            value = value.toString();
        if (value.match(_regExpr_1._regExpr.integer))
            return true;
        return false;
    }
    return false;
};
exports.isInteger = isInteger;
/**
* isFloat
* @param value  value to test
* @return true or false matching a regular expression in _regExpr module
*/
var isFloat = function (value) {
    if (notEmpty(value)) {
        if (typeof value !== 'string')
            value = value.toString();
        if (value.match(_regExpr_1._regExpr.float))
            return true;
        return false;
    }
    return false;
};
exports.isFloat = isFloat;
/**
* isNegative
* @param value  value to test
* @return true or false matching a regular expression in _regExpr module
*/
var isNegative = function (value) {
    if (notEmpty(value)) {
        if (typeof value !== 'string')
            value = value.toString();
        if (value.match(_regExpr_1._regExpr.float))
            return true;
        return false;
    }
    return false;
};
exports.isNegative = isNegative;
/**
* isItalianZipCode
* @param value  value to test
* @return true or false matching a regular expression in _regExpr module
*/
var isItalianZipCode = function (value) {
    if (notEmpty(value)) {
        if (typeof value !== 'string')
            value = value.toString();
        if (value.match(_regExpr_1._regExpr.cap))
            return true;
        return false;
    }
    return false;
};
exports.isItalianZipCode = isItalianZipCode;
/**
* isEmail
* @param value  value to test
* @return true or false matching a regular expression in _regExpr module
*/
var isEmail = function (value) {
    if (notEmpty(value)) {
        if (typeof value !== 'string')
            value = value.toString();
        if (value.match(_regExpr_1._regExpr.email))
            return true;
        return false;
    }
    return false;
};
exports.isEmail = isEmail;
/**
* isGenericPhoneNumber
* @param value  value to test
* @return true or false matching a regular expression in _regExpr module
*/
var isGenericPhoneNumber = function (value) {
    if (notEmpty(value)) {
        if (typeof value !== 'string')
            value = value.toString();
        if (value.match(_regExpr_1._regExpr.genericPhoneNumber))
            return true;
        return false;
    }
    return false;
};
exports.isGenericPhoneNumber = isGenericPhoneNumber;
/**
* isGenericPhoneNumber
* @param value  value to test
* @return true or false matching a regular expression in _regExpr module
*/
var isItalianMobilePhoneNumber = function (value) {
    if (notEmpty(value)) {
        if (typeof value !== 'string')
            value = value.toString();
        if (value.match(_regExpr_1._regExpr.italianMobilePhone))
            return true;
        return false;
    }
    return false;
};
exports.isItalianMobilePhoneNumber = isItalianMobilePhoneNumber;


/***/ })
/******/ ]);