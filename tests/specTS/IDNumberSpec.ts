/// <reference path="../../typings/index.d.ts" />
import {
    isNumber, isLessThan, isGreaterThan, isInRange, isOutRange,
    customError
} from "../../nixin-form/scripts/modules/_nixin-IDNumber";

let OK_value_isNumber: any = [1, 100, -10, -10.5, 100.457, '10.1235', '-10.5'];
let KO_value_isNumber: any = [{}, 'dieci', 'xx', null, undefined, ''];
let OK_value_isLessThan: any = [
    {val:10, cmp: 100},
    {val:100, cmp: 100},
];
let KO_value_isLessThan: any = [
    {val:101, cmp: 100},
    {val:1000, cmp: 100},
];
let OK_value_isGreaterThan: any = [
    {val:101, cmp: 100},
    {val:100, cmp: 100}
];
let KO_value_isGreaterThan: any = [
    {val:99, cmp: 100},
    {val:1, cmp: 100},
];
let isEmpty_Error_value_isLessThan: any=[
    {val:null, cmp: 100},
    {val:undefined, cmp: 100},
    {val:'', cmp: 100},
    {val:99, cmp: null},
    {val:99, cmp: undefined},
    {val:99, cmp: ''},
    {val:null, cmp: null},
    {val:undefined, cmp: undefined},
    {val:'', cmp: ''},
];
let isNumber_Error_value_isLessThan: any =[
    {val:'c', cmp:100},
    {val:10, cmp:'c'},
    {val:'c', cmp:'d'}
];


let OK_value_isInRange:any=[
    {val: 100, val1: 99, val2:101},
    {val: 100, val1: 100, val2:100},
];
let KO_value_isInRange:any=[
    {val: 100, val1: 101, val2:102},
];
let isNumber_Error_value_isInRange:any =[
    {val: 100, val1: 100, val2: 'c'},
    {val: 100, val1: 'c', val2: 100},
    {val: 'c', val1: 100, val2: 100}
];
let isEmpty_Error_value_isInRange:any =[
    {val: null, val1: null, val2: null},
    {val: null, val1: null, val2: undefined},
    {val: null, val1: null, val2: ''},
    {val: null, val1:undefined, val2:null},
    {val: null, val1:undefined, val2:undefined},
    {val: null, val1:undefined, val2:''},
    {val: null, val1:'', val2:null},
    {val: null, val1:'', val2:undefined},
    {val: null, val1:'', val2:''},

    {val: undefined, val1: null, val2: null},
    {val: undefined, val1: null, val2: undefined},
    {val: undefined, val1: null, val2: ''},
    {val: undefined, val1:undefined, val2:null},
    {val: undefined, val1:undefined, val2:undefined},
    {val: undefined, val1:undefined, val2:''},
    {val: undefined, val1:'', val2:null},
    {val: undefined, val1:'', val2:undefined},
    {val: undefined, val1:'', val2:''},

    {val: '', val1: null, val2: null},
    {val: '', val1: null, val2: undefined},
    {val: '', val1: null, val2: ''},
    {val: '', val1:undefined, val2:null},
    {val: '', val1:undefined, val2:undefined},
    {val: '', val1:undefined, val2:''},
    {val: '', val1:'', val2:null},
    {val: '', val1:'', val2:undefined},
    {val: '', val1:'', val2:''},

];

let KO_value_isOutRange:any=[
    {val: 100, val1: 99, val2:101},
    {val: 100, val1: 100, val2:100},
];
let OK_value_isOutRange:any=[
    {val: 100, val1: 101, val2:102}
];
function shouldReturnTrue(value: any, method: any):any{
    return it('Should return true if value is ' + value, ()=>{
        expect(method(value)).toBeTruthy();
    });
}
function shouldReturnFalse(value: any, method: any):any{
    return it('Should return false if value is ' + value, ()=>{
        expect(method(value)).toBeFalsy();
    });
}
//two parameters
function shouldReturnFalse2P(value: any, compareTo:any, method: any, methodDesc: string):any{
    return it('Should return false if ' +  value + ' ' + methodDesc + ' ' + compareTo, ()=>{
        expect(method(value, compareTo)).toBeFalsy();
    });
}
function shouldReturnTrue2P(value: any, compareTo:any, method: any, methodDesc: string):any{
    return it('Should return true if ' +  value + ' ' + methodDesc + ' ' + compareTo, ()=>{
        expect(method(value, compareTo)).toBeTruthy();
    });
}
function shouldReturnUndefined2P(value: any, compareTo:any, method: any, methodDesc: string):any {
    return it('Should return undefined if ' + value + ' ' + methodDesc + ' ' + compareTo, () => {
        expect(method(value, compareTo)).toBe(undefined);
    });
};
function shouldThrowAnError2P_isEmpty_Error(value: any, compareTo:any, method: any, methodDesc: string):any {
    return it('Should throw an error if ' + value + ' ' + methodDesc + ' ' + compareTo, () => {
        expect(()=>{method(value, compareTo);}).toThrow(new customError('isEmpty_Error', 'a value is Empty: value = ' + value + " compareTo= " + compareTo));
    });
};
function shouldThrowAnError2P_isNumber_Error(value: any, compareTo:any, method: any, methodDesc: string):any {
    return it('Should throw an error if ' + value + ' ' + methodDesc + ' ' + compareTo, () => {
        expect(()=>{method(value, compareTo);}).toThrow(new customError('isNumber_Error', 'a value is not a number: value = ' + value + " compareTo= " + compareTo));
    });
};

function shouldReturnTrue3P(value:any, val1:any, val2:any, method:any, methodDesc:string):any{
    return it('Should return true if ' +  value + ' ' + methodDesc + ' [' + val1 + ' - ' + val2 + ']', ()=>{
        expect(method(value, val1, val2)).toBeTruthy();
    });
}
function shouldReturnFalse3P(value:any, val1:any, val2:any, method:any, methodDesc:string):any{
    return it('Should return false if ' +  value + ' ' + methodDesc + ' [' + val1 + ' - ' + val2 + ']', ()=>{
        expect(method(value, val1, val2)).toBeFalsy();
    });
}
function shouldReturnUndefined3P(value: any, val1:any, val2:any, method: any, methodDesc: string):any {
    return it('Should return undefined if ' +  value + ' ' + methodDesc + ' [' + val1 + ' - ' + val2 + ']', () => {
        expect(method(value, val1, val2)).toBe(undefined);
    });
};
function shouldThrowAnError3P_isEmpty_Error(value: any, min:any, max:any, method: any, methodDesc: string):any {
    return it('Should throw an error if ' + value + ' ' + methodDesc + ' min=' + min + ' max=' + max, () => {
        expect(()=>{method(value, min, max);}).toThrow(new customError('isEmpty_Error', 'a value is Empty: value = ' + value + " min= " + min + " max= " + max));
    });
};
function shouldThrowAnError3P_isNumber_Error(value: any, min:any, max:any, method: any, methodDesc: string):any {
    return it('Should throw an error if ' + value + ' ' + methodDesc + ' min=' + min + ' max=' + max, () => {
        expect(()=>{method(value, min, max);}).toThrow(new customError('isNumber_Error', 'a value is Empty: value = ' + value + " min= " + min + " max= " + max));
    });
};
function test(methodName: string, method: any, applyFunction: any, onValue:any[]):void{
    describe(methodName, ()=> {
        for(let i=0; i< onValue.length; i++) {
            applyFunction(onValue[i], method)
        }
    });
}
function test2P(methodName: string, method: any, applyFunction: any, onValue:any[], error?:any):void{
    describe(methodName, ()=> {
        for(let i=0; i< onValue.length; i++) {
            applyFunction(onValue[i].val, onValue[i].cmp, method, methodName, error);
        }
    });
}
function test3P(methodName: string, method: any, applyFunction: any, onValue:any[]):void{
    describe(methodName, ()=> {
        for(let i=0; i< onValue.length; i++) {
            applyFunction(onValue[i].val, onValue[i].val1, onValue[i].val2, method, methodName);
        }
    });
}
describe('_nixin-IDNumber', ()=>{
    test('isNumber', isNumber, shouldReturnTrue, OK_value_isNumber);
    test('isNumber', isNumber, shouldReturnFalse, KO_value_isNumber);
    test2P('isLessThan', isLessThan, shouldReturnTrue2P, OK_value_isLessThan);
    test2P('isLessThan', isLessThan, shouldReturnFalse2P, KO_value_isLessThan);
    test2P('isLessThan', isLessThan, shouldThrowAnError2P_isEmpty_Error, isEmpty_Error_value_isLessThan);
    test2P('isLessThan', isLessThan, shouldThrowAnError2P_isNumber_Error, isNumber_Error_value_isLessThan);

    test2P('isGreaterThan', isGreaterThan, shouldReturnTrue2P, OK_value_isGreaterThan);
    test2P('isGreaterThan', isGreaterThan, shouldReturnFalse2P, KO_value_isGreaterThan);
    test2P('isGreaterThan', isGreaterThan, shouldThrowAnError2P_isEmpty_Error, isEmpty_Error_value_isLessThan);
    test2P('isGreaterThan', isGreaterThan, shouldThrowAnError2P_isNumber_Error, isNumber_Error_value_isLessThan);

    test3P('isInRange', isInRange, shouldReturnTrue3P, OK_value_isInRange);
    test3P('isInRange', isInRange, shouldReturnFalse3P, KO_value_isInRange);
    test3P('isInRange', isInRange, shouldThrowAnError3P_isEmpty_Error, isEmpty_Error_value_isInRange);
    test3P('isInRange', isInRange, shouldThrowAnError3P_isNumber_Error, isNumber_Error_value_isInRange);


    test3P('isOutRange', isOutRange, shouldReturnTrue3P, OK_value_isOutRange);
    test3P('isOutRange', isOutRange, shouldReturnFalse3P, KO_value_isOutRange);
    test3P('isOutRange', isOutRange, shouldThrowAnError3P_isEmpty_Error, isEmpty_Error_value_isInRange);
    test3P('isOutRange', isOutRange, shouldThrowAnError3P_isNumber_Error, isNumber_Error_value_isInRange);

});

