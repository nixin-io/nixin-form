/// <reference path="../../typings/index.d.ts" />

import {isEmpty, notEmpty, isItalianZipCode, isInteger, isEmail,
    isItalianMobilePhoneNumber, isGenericPhoneNumber} from "../../nixin-form/scripts/modules/_nixin-IDCheck";

let specKeyword:any[] = [null, undefined, ''];
let generics:any = ['1', 'due', {}, 'dksf', -1, '-1'];
let OK_value_isItalianZipCode:any = [12345, '12354'];
let KO_value_isItalianZipCode:any = [1234, 123456, '1234', '123456', '1234f', '123456f', '123d', null, undefined, '', ' '];
let OK_value_isInteger:any = [123456, '12346'];
let KO_value_isInteger:any = ['*ééè', 'ddd', null, undefined, ''];

let OK_value_isEmail:any = ['luigi@gmail.com'];
let KO_value_isEmail:any = ['luigigmail.com', 'luigi@gmailcom', 'luigi@gmail.cosdijds, luigi/@gmail.com', null, undefined, '', ' '];
let OK_value_isIMPN:any = [
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
let KO_value_isIMPN:any = [
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
let OK_value_isGPN:any = [
    '0881/55442541',
    '1234567891282',
    '0881/5544/2541',
    '0881\\1235115'
];
let KO_value_isGPN:any = [
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

function test(methodName: string, method: any, applyFunction: any, onValue:any[]):void{
        describe(methodName, ()=> {
            for(let i=0; i< onValue.length; i++) {
                applyFunction(onValue[i], method)
            }
        });
}

describe('_nixin-IDCheck', ()=>{
   test('isEmpty', isEmpty, shouldReturnTrue, specKeyword);
   test('isEmpty', isEmpty, shouldReturnFalse, generics);
   test('notEmpty', notEmpty, shouldReturnTrue, generics);
   test('notEmpty', notEmpty, shouldReturnFalse, specKeyword);
   test('isItalianZipCode', isItalianZipCode, shouldReturnTrue, OK_value_isItalianZipCode);
   test('isItalianZipCode', isItalianZipCode, shouldReturnFalse, KO_value_isItalianZipCode);
   test('isInteger', isInteger, shouldReturnTrue, OK_value_isInteger);
   test('isInteger', isInteger, shouldReturnFalse, KO_value_isInteger);
   test('isEmail', isEmail, shouldReturnTrue, OK_value_isEmail);
   test('isEmail', isEmail, shouldReturnFalse, KO_value_isEmail);
   test('isItalianMobilePhoneNumber', isItalianMobilePhoneNumber, shouldReturnTrue, OK_value_isIMPN);
   test('isItalianMobilePhoneNumber', isItalianMobilePhoneNumber, shouldReturnFalse, KO_value_isIMPN);
   test('isGenericPhoneNumber', isGenericPhoneNumber, shouldReturnTrue, OK_value_isGPN);
   test('isGenericPhoneNumber', isGenericPhoneNumber, shouldReturnFalse, KO_value_isGPN);
});

