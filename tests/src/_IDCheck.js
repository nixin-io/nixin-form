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

exports.__esModule = true;
var _regExpr = (function () {
    function _regExpr() {
        this.italianMobilePhone = /^([+]39)?((38[{8,9}|0])|(34[{7-9}|0])|(36[6|8|0])|(33[{3-9}|0])|(32[{8,9}]))([\d]{7})$/;
        this.email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.cap = /^(V-|I-)?[0-9]{5}$/;
        this.number = /^-?\d+$/;
        this.noNumber = /^([^0-9]*)$/;
        this.integer = /^\d+$/;
        this.float = /[+-]?([0-9]*[.])?[0-9]+/;
        this.negative = /^-\d*\.?\d+$/;
        this.genericPhoneNumber = /(^[0-9\/\\]*)$/;
    }
    return _regExpr;
}());
exports._regExpr = _regExpr;
;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* Input Descriptor for Check test
* this module collect all methods for basical test
*/

exports.__esModule = true;
var _regExpr_1 = __webpack_require__(0);
var regExpr = new _regExpr_1._regExpr();
/**
* isEmpty
* @param value  value to test
* @return true or false
*/
function isEmpty(value) {
    if (value != null && value != undefined && value.length != 0)
        return false;
    return true;
}
exports.isEmpty = isEmpty;
/**
* notEmpty
* @param value  value to test
* @return true or false
*/
function notEmpty(value) {
    if (isEmpty(value))
        return false;
    return true;
}
exports.notEmpty = notEmpty;
/**
* isInteger
* @param value  value to test
* @return true or false matching a regular expression in _regExpr module
*/
function isInteger(value) {
    if (notEmpty(value)) {
        if (typeof value !== 'string')
            value = value.toString();
        if (value.match(regExpr.integer))
            return true;
        return false;
    }
    return false;
}
exports.isInteger = isInteger;
/**
* isFloat
* @param value  value to test
* @return true or false matching a regular expression in _regExpr module
*/
function isFloat(value) {
    if (notEmpty(value)) {
        if (typeof value !== 'string')
            value = value.toString();
        if (value.match(regExpr.float))
            return true;
        return false;
    }
    return false;
}
exports.isFloat = isFloat;
/**
* isNegative
* @param value  value to test
* @return true or false matching a regular expression in _regExpr module
*/
function isNegative(value) {
    if (notEmpty(value)) {
        if (typeof value !== 'string')
            value = value.toString();
        if (value.match(regExpr.float))
            return true;
        return false;
    }
    return false;
}
exports.isNegative = isNegative;
/**
* isItalianZipCode
* @param value  value to test
* @return true or false matching a regular expression in _regExpr module
*/
function isItalianZipCode(value) {
    if (notEmpty(value)) {
        if (typeof value !== 'string')
            value = value.toString();
        if (value.match(regExpr.cap))
            return true;
        return false;
    }
    return false;
}
exports.isItalianZipCode = isItalianZipCode;
/**
* isEmail
* @param value  value to test
* @return true or false matching a regular expression in _regExpr module
*/
function isEmail(value) {
    if (notEmpty(value)) {
        if (typeof value !== 'string')
            value = value.toString();
        if (value.match(regExpr.email))
            return true;
        return false;
    }
    return false;
}
exports.isEmail = isEmail;
/**
* isGenericPhoneNumber
* @param value  value to test
* @return true or false matching a regular expression in _regExpr module
*/
function isGenericPhoneNumber(value) {
    if (notEmpty(value)) {
        if (typeof value !== 'string')
            value = value.toString();
        if (value.match(regExpr.genericPhoneNumber))
            return true;
        return false;
    }
    return false;
}
exports.isGenericPhoneNumber = isGenericPhoneNumber;
/**
* isGenericPhoneNumber
* @param value  value to test
* @return true or false matching a regular expression in _regExpr module
*/
function isItalianMobilePhoneNumber(value) {
    if (notEmpty(value)) {
        if (typeof value !== 'string')
            value = value.toString();
        if (value.match(regExpr.italianMobilePhone))
            return true;
        return false;
    }
    return false;
}
exports.isItalianMobilePhoneNumber = isItalianMobilePhoneNumber;


/***/ })
/******/ ]);