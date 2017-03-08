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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* Input Descriptor for Check test
* this module collect all methods for basical test
*/

Object.defineProperty(exports, "__esModule", { value: true });
var _regExpr_1 = __webpack_require__(1);
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


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/// <reference path="../../typings/index.d.ts" />

Object.defineProperty(exports, "__esModule", { value: true });
var _nixin_IDCheck_1 = __webpack_require__(0);
var specKeyword = [null, undefined, ''];
var generics = ['1', 'due', {}, 'dksf', -1, '-1'];
var OK_value_isItalianZipCode = [12345, '12354'];
var KO_value_isItalianZipCode = [1234, 123456, '1234', '123456', '1234f', '123456f', '123d', null, undefined, '', ' '];
var OK_value_isInteger = [123456, '12346'];
var KO_value_isInteger = ['*ééè', 'ddd', null, undefined, ''];
var OK_value_isEmail = ['luigi@gmail.com'];
var KO_value_isEmail = ['luigigmail.com', 'luigi@gmailcom', 'luigi@gmail.cosdijds, luigi/@gmail.com', null, undefined, '', ' '];
var OK_value_isIMPN = [
    '+393881234567',
    '+393891234567',
    '+393801234567',
    '3881234567',
    '3891234567',
    '3801234567',
    '+393471234567',
    '+393481234567',
    '+393491234567',
    '+393401234567',
    '3471234567',
    '3481234567',
    '3491234567',
    '3401234567',
    '+393661234567',
    '+393681234567',
    '+393601234567',
    '3661234567',
    '3681234567',
    '3601234567',
    '3331234567',
    '3341234567',
    '3351234567',
    '3361234567',
    '3371234567',
    '3381234567',
    '3391234567',
    '3661234567',
    '3681234567',
    '3601234567',
    '+393331234567',
    '+393341234567',
    '+393351234567',
    '+393361234567',
    '+393371234567',
    '+393381234567',
    '+393391234567',
    '3281234567',
    '3291234567',
    '+393281234567',
    '+393291234567'
];
var KO_value_isIMPN = [
    '387123456',
    '346123456',
    '365123456',
    '332123456',
    '310123456',
    '387123456',
    '346123456',
    '365123456',
    '332123456',
    '310123456',
    '38712345678',
    '34612345678',
    '36512345678',
    '33212345678',
    '31012345678',
    '+393871234567',
    '+393461234567',
    '+393651234567',
    '+393321234567',
    '+393101234567',
    '-393291234567',
    '39/3291234567',
    'kf/3291234567',
    '',
    'null',
    'undefined',
    ' ',
    null,
    undefined
];
var OK_value_isGPN = [
    '0881/55442541',
    '1234567891282',
    '0881/5544/2541',
    '0881\\1235115'
];
var KO_value_isGPN = [
    'null',
    'undefined',
    ' ',
    '12sdf5454',
    'd',
    '12351f\\21df1',
    '+390881558721',
    '+39/0881/558721',
    '+390881/558721',
    null,
    undefined, ''
];
function shouldReturnTrue(value, method) {
    return it('Should return true if value is ' + value, function () {
        expect(method(value)).toBeTruthy();
    });
}
function shouldReturnFalse(value, method) {
    return it('Should return false if value is ' + value, function () {
        expect(method(value)).toBeFalsy();
    });
}
function test(methodName, method, applyFunction, onValue) {
    describe(methodName, function () {
        for (var i = 0; i < onValue.length; i++) {
            applyFunction(onValue[i], method);
        }
    });
}
describe('_nixin-IDCheck', function () {
    test('isEmpty', _nixin_IDCheck_1.isEmpty, shouldReturnTrue, specKeyword);
    test('isEmpty', _nixin_IDCheck_1.isEmpty, shouldReturnFalse, generics);
    test('notEmpty', _nixin_IDCheck_1.notEmpty, shouldReturnTrue, generics);
    test('notEmpty', _nixin_IDCheck_1.notEmpty, shouldReturnFalse, specKeyword);
    test('isItalianZipCode', _nixin_IDCheck_1.isItalianZipCode, shouldReturnTrue, OK_value_isItalianZipCode);
    test('isItalianZipCode', _nixin_IDCheck_1.isItalianZipCode, shouldReturnFalse, KO_value_isItalianZipCode);
    test('isInteger', _nixin_IDCheck_1.isInteger, shouldReturnTrue, OK_value_isInteger);
    test('isInteger', _nixin_IDCheck_1.isInteger, shouldReturnFalse, KO_value_isInteger);
    test('isEmail', _nixin_IDCheck_1.isEmail, shouldReturnTrue, OK_value_isEmail);
    test('isEmail', _nixin_IDCheck_1.isEmail, shouldReturnFalse, KO_value_isEmail);
    test('isItalianMobilePhoneNumber', _nixin_IDCheck_1.isItalianMobilePhoneNumber, shouldReturnTrue, OK_value_isIMPN);
    test('isItalianMobilePhoneNumber', _nixin_IDCheck_1.isItalianMobilePhoneNumber, shouldReturnFalse, KO_value_isIMPN);
    test('isGenericPhoneNumber', _nixin_IDCheck_1.isGenericPhoneNumber, shouldReturnTrue, OK_value_isGPN);
    test('isGenericPhoneNumber', _nixin_IDCheck_1.isGenericPhoneNumber, shouldReturnFalse, KO_value_isGPN);
});


/***/ })
/******/ ]);