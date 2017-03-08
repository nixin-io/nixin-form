/**
* Input Descriptor for Check test
* this module collect all methods for basical test
*/

import { _regExpr } from "./_regExpr";
let regExpr = new _regExpr();
/**
* isEmpty
* @param value  value to test
* @return true or false
*/
export  function isEmpty(value: any): boolean {
    if (value != null && value != undefined && value.length != 0) return false;
    return true;
}
/**
* notEmpty
* @param value  value to test
* @return true or false
*/
export function notEmpty(value: any): boolean {
    if (isEmpty(value)) return false;
    return true;
}
/**
* isInteger
* @param value  value to test
* @return true or false matching a regular expression in _regExpr module
*/
export function isInteger(value: any) {
    if (notEmpty(value)) {
        if (typeof value !== 'string') value = value.toString();
        if (value.match(regExpr.integer)) return true;
        return false;
    }
    return false;
}
/**
* isFloat
* @param value  value to test
* @return true or false matching a regular expression in _regExpr module
*/
export  function isFloat(value: any):boolean {
    if (notEmpty(value)) {
        if (typeof value !== 'string') value = value.toString();
        if (value.match(regExpr.float)) return true;
        return false;
    }
    return false;
}
/**
* isNegative
* @param value  value to test
* @return true or false matching a regular expression in _regExpr module
*/
export function isNegative(value: any):boolean {
    if (notEmpty(value)) {
        if (typeof value !== 'string') value = value.toString();
        if (value.match(regExpr.float)) return true;
        return false;
    }
    return false;
}
/**
* isItalianZipCode
* @param value  value to test
* @return true or false matching a regular expression in _regExpr module
*/
export function isItalianZipCode(value: any):boolean {
    if (notEmpty(value)) {
        if (typeof value !== 'string') value = value.toString();
        if (value.match(regExpr.cap)) return true;
        return false;
    }
    return false;
}
/**
* isEmail
* @param value  value to test
* @return true or false matching a regular expression in _regExpr module
*/
export function isEmail(value: any): boolean {
    if (notEmpty(value)) {
        if (typeof value !== 'string') value = value.toString();
        if (value.match(regExpr.email)) return true;
        return false;
    }
    return false;
}
/**
* isGenericPhoneNumber
* @param value  value to test
* @return true or false matching a regular expression in _regExpr module
*/
export function isGenericPhoneNumber(value: any):boolean {
    if (notEmpty(value)) {
        if (typeof value !== 'string') value = value.toString();
        if (value.match(regExpr.genericPhoneNumber)) return true;
        return false;
    }
    return false;
}
/**
* isGenericPhoneNumber
* @param value  value to test
* @return true or false matching a regular expression in _regExpr module
*/
export function  isItalianMobilePhoneNumber(value: any): boolean {
    if (notEmpty(value)) {
        if (typeof value !== 'string') value = value.toString();
        if (value.match(regExpr.italianMobilePhone)) return true;
        return false;
    }
    return false;
}


