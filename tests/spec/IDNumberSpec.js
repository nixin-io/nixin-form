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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Input Descriptor for Number test
 * this module collect all methods for number basical test
 */
var _nixin_IDCheck_1 = __webpack_require__(1);
/**
 * isNumber
 * @param value  value to test
 * @return true if if value is an integer or value is a float else return false
 */
function isNumber(value) {
    if (_nixin_IDCheck_1.notEmpty(value)) {
        if (_nixin_IDCheck_1.isInteger(value) || _nixin_IDCheck_1.isFloat(value))
            return true;
    }
    return false;
}
exports.isNumber = isNumber;
/**
 * isLessThan
 * @param value  value to test
 * @param compareTo value to compare value parameter
 * @return true if value is less or equal than compareTo parameter,
 * throw an error if value and compareTo aren't number
 * return undefined if value or compareTo are empty
 */
function isLessThan(value, compareTo) {
    if (_nixin_IDCheck_1.notEmpty(value) && _nixin_IDCheck_1.notEmpty(compareTo)) {
        if (isNumber(value) && isNumber(compareTo)) {
            if (value <= compareTo)
                return true;
            return false;
        }
        throw new Error('values ​​not comparable value= ' + value + " compareTo= " + compareTo);
    }
    return undefined;
}
exports.isLessThan = isLessThan;
/**
 * isGreaterThan
 * @param value  value to test
 * @param compareTo value to compare value parameter
 * @return true if value is greater or equal than compareTo parameter,
 * throw an error if value and compareTo aren't number
 * return undefined if value or compareTo are empty
 */
function isGreaterThan(value, compareTo) {
    if (_nixin_IDCheck_1.notEmpty(value) && _nixin_IDCheck_1.notEmpty(compareTo)) {
        if (isNumber(value) && isNumber(compareTo)) {
            if (value >= compareTo)
                return true;
            return false;
        }
        throw new Error('values ​​not comparable value= ' + value + " compareTo= " + compareTo);
    }
    return undefined;
}
exports.isGreaterThan = isGreaterThan;
/**
 * isInRange
 * @param value  value to test
 * @param min min value to compare value parameter
 * @param max max value to compare value parameter
 * @return true if value is less or equal than max parameter and greater or equal than min parameter,
 * throw an error if value, max or min aren't number
 * return false if value is not between min and max or if value or min or max is empty
 */
function isInRange(value, min, max) {
    try {
        if (isGreaterThan(value, min) && isLessThan(value, max))
            return true;
        return false;
    }
    catch (e) {
        throw new Error('values ​​not comparable value= ' + value + ' val1=' + min + ' val2=' + max);
    }
}
exports.isInRange = isInRange;
/**
 * isOutRange
 * @param value  value to test
 * @param min min value to compare value parameter
 * @param max max value to compare value parameter
 * @return true if value is greater than max parameter and less than min parameter or if value/min/max is empty
 * throw an error if value, max or min aren't number
 * return false if value is between min and max
 */
function isOutRange(value, min, max) {
    if (isInRange(value, min, max))
        return false;
    return true;
}
exports.isOutRange = isOutRange;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* Input Descriptor for Check test
* this module collect all methods for basical test
*/

Object.defineProperty(exports, "__esModule", { value: true });
var _regExpr_1 = __webpack_require__(2);
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
/* 2 */
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="../../typings/index.d.ts" />
var _nixin_IDNumber_1 = __webpack_require__(0);
var OK_value_isNumber = [1, 100, -10, -10.5, 100.457, '10.1235', '-10.5'];
var KO_value_isNumber = [{}, 'dieci', 'xx', null, undefined, ''];
var OK_value_isLessThan = [
    { val: 10, cmp: 100 },
    { val: 100, cmp: 100 },
];
var KO_value_isLessThan = [
    { val: 101, cmp: 100 },
    { val: 1000, cmp: 100 },
];
var OK_value_isGreaterThan = [
    { val: 101, cmp: 100 },
    { val: 100, cmp: 100 }
];
var KO_value_isGreaterThan = [
    { val: 99, cmp: 100 },
    { val: 1, cmp: 100 },
];
var undefined_value_isLessThan = [
    { val: null, cmp: 100 },
    { val: undefined, cmp: 100 },
    { val: '', cmp: 100 },
    { val: 99, cmp: null },
    { val: 99, cmp: undefined },
    { val: 99, cmp: '' },
    { val: null, cmp: null },
    { val: undefined, cmp: undefined },
    { val: '', cmp: '' },
];
var throwError_value_isLessThan = [
    { val: 'c', cmp: 100 },
    { val: 10, cmp: 'c' },
    { val: 'c', cmp: 'd' }
];
var OK_value_isInRange = [
    { val: 100, val1: 99, val2: 101 },
    { val: 100, val1: 100, val2: 100 },
];
var KO_value_isInRange = [
    { val: 100, val1: 101, val2: 102 },
    { val: null, val1: 100, val2: 101 },
    { val: undefined, val1: 100, val2: 101 },
    { val: '', val1: 100, val2: 101 },
    { val: 99, val1: null, val2: 101 },
    { val: 99, val1: undefined, val2: 101 },
    { val: 99, val1: '', val2: 101 },
    { val: null, val1: null, val2: 101 },
    { val: undefined, val1: undefined, val2: 101 },
    { val: '', val1: '', val2: 101 },
];
var throwError_value_isInRange = [
    { val: 100, val1: 'c', val2: 102 },
    { val: 100, val1: 100, val2: 'd' },
    { val: 100, val1: 'c', val2: 'd' }
];
/*let undefined_value_isInRange: any=[
    {val:null, val1: 100, val2:101},
    {val:undefined, val1: 100, val2:101},
    {val:'', val1: 100, val2:101},
    {val:99, val1: null, val2:101},
    {val:99, val1: undefined, val2:101},
    {val:99, val1: '', val2:101},
    {val:null, val1: null, val2:101},
    {val:undefined, val1: undefined, val2:101},
    {val:'', val1: '', val2:101},
];*/
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
//two parameters
function shouldReturnFalse2P(value, compareTo, method, methodDesc) {
    return it('Should return false if ' + value + ' ' + methodDesc + ' ' + compareTo, function () {
        expect(method(value, compareTo)).toBeFalsy();
    });
}
function shouldReturnTrue2P(value, compareTo, method, methodDesc) {
    return it('Should return true if ' + value + ' ' + methodDesc + ' ' + compareTo, function () {
        expect(method(value, compareTo)).toBeTruthy();
    });
}
function shouldReturnUndefined2P(value, compareTo, method, methodDesc) {
    return it('Should return undefined if ' + value + ' ' + methodDesc + ' ' + compareTo, function () {
        expect(method(value, compareTo)).toBe(undefined);
    });
}
;
function shouldThrowAnError2P(value, compareTo, method, methodDesc) {
    return it('Should throw an error if ' + value + ' ' + methodDesc + ' ' + compareTo, function () {
        expect(function () { method(value, compareTo); }).toThrow(new Error('values ​​not comparable value= ' + value + " compareTo= " + compareTo));
    });
}
;
function shouldReturnTrue3P(value, val1, val2, method, methodDesc) {
    return it('Should return true if ' + value + ' ' + methodDesc + ' [' + val1 + ' - ' + val2 + ']', function () {
        expect(method(value, val1, val2)).toBeTruthy();
    });
}
function shouldReturnFalse3P(value, val1, val2, method, methodDesc) {
    return it('Should return false if ' + value + ' ' + methodDesc + ' [' + val1 + ' - ' + val2 + ']', function () {
        expect(method(value, val1, val2)).toBeFalsy();
    });
}
function shouldReturnUndefined3P(value, val1, val2, method, methodDesc) {
    return it('Should return undefined if ' + value + ' ' + methodDesc + ' [' + val1 + ' - ' + val2 + ']', function () {
        expect(method(value, val1, val2)).toBe(undefined);
    });
}
;
function shouldThrowAnError3P(value, val1, val2, method, methodDesc) {
    return it('Should throw an error if ' + value + ' ' + methodDesc + ' val1=' + val1 + ' val2=' + val2, function () {
        expect(function () { method(value, val1, val2); }).toThrow(new Error('values ​​not comparable value= ' + value + ' val1=' + val1 + ' val2=' + val2));
    });
}
;
function test(methodName, method, applyFunction, onValue) {
    describe(methodName, function () {
        for (var i = 0; i < onValue.length; i++) {
            applyFunction(onValue[i], method);
        }
    });
}
function test2P(methodName, method, applyFunction, onValue) {
    describe(methodName, function () {
        for (var i = 0; i < onValue.length; i++) {
            applyFunction(onValue[i].val, onValue[i].cmp, method, methodName);
        }
    });
}
function test3P(methodName, method, applyFunction, onValue) {
    describe(methodName, function () {
        for (var i = 0; i < onValue.length; i++) {
            applyFunction(onValue[i].val, onValue[i].val1, onValue[i].val2, method, methodName);
        }
    });
}
describe('_nixin-IDNumber', function () {
    test('isNumber', _nixin_IDNumber_1.isNumber, shouldReturnTrue, OK_value_isNumber);
    test('isNumber', _nixin_IDNumber_1.isNumber, shouldReturnFalse, KO_value_isNumber);
    test2P('isLessThan', _nixin_IDNumber_1.isLessThan, shouldReturnTrue2P, OK_value_isLessThan);
    test2P('isLessThan', _nixin_IDNumber_1.isLessThan, shouldReturnFalse2P, KO_value_isLessThan);
    test2P('isLessThan', _nixin_IDNumber_1.isLessThan, shouldReturnUndefined2P, undefined_value_isLessThan);
    test2P('isLessThan', _nixin_IDNumber_1.isLessThan, shouldThrowAnError2P, throwError_value_isLessThan);
    test2P('isGreaterThan', _nixin_IDNumber_1.isGreaterThan, shouldReturnTrue2P, OK_value_isGreaterThan);
    test2P('isGreaterThan', _nixin_IDNumber_1.isGreaterThan, shouldReturnFalse2P, KO_value_isGreaterThan);
    test2P('isGreaterThan', _nixin_IDNumber_1.isGreaterThan, shouldReturnUndefined2P, undefined_value_isLessThan);
    test2P('isGreaterThan', _nixin_IDNumber_1.isGreaterThan, shouldReturnUndefined2P, undefined_value_isLessThan);
    test2P('isGreaterThan', _nixin_IDNumber_1.isGreaterThan, shouldThrowAnError2P, throwError_value_isLessThan);
    test3P('isInRange', _nixin_IDNumber_1.isInRange, shouldReturnTrue3P, OK_value_isInRange);
    test3P('isInRange', _nixin_IDNumber_1.isInRange, shouldReturnFalse3P, KO_value_isInRange);
    //  test3P('isInRange', isInRange, shouldReturnUndefined3P, undefined_value_isInRange);
    test3P('isInRange', _nixin_IDNumber_1.isInRange, shouldThrowAnError3P, throwError_value_isInRange);
});


/***/ })
/******/ ]);