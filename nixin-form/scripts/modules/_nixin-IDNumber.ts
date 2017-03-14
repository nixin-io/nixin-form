/**
 * Input Descriptor for Number test
 * this module collect all methods for number basical test
 */
import {notEmpty, isInteger, isFloat} from './_nixin-IDCheck';

export class customError{
    name:string ='customError';
    message:string ='A custom Error occured!';
    constructor(name:string, message:string) {
        this.name = name;
        this.message = message;
    }
}
/**
 * isNumber
 * @param value  value to test
 * @return true if if value is an integer or value is a float else return false
 */
export function isNumber(value: any):boolean{
    if(notEmpty(value)){
        if(isInteger(value)|| isFloat(value))return true;
    }
    return false;
}
/**
 * isLessThan
 * @param value  value to test
 * @param compareTo value to compare value parameter
 * @return true if value is less or equal than compareTo parameter,
 * throw an error if value and compareTo aren't number or empty
 */
export function isLessThan(value: any, compareTo:any):any{
    if(notEmpty(value) && notEmpty(compareTo)){
        if(isNumber(value) && isNumber(compareTo)){
            if(value <= compareTo)return true;
            return false;
        }
        throw new customError('isNumber_Error', 'a value is not a number: value = ' + value + " compareTo= " + compareTo);
    }
    throw new customError('isEmpty_Error', 'a value is Empty: value = ' + value + " compareTo= " + compareTo);
}
/**
 * isGreaterThan
 * @param value  value to test
 * @param compareTo value to compare value parameter
 * @return true if value is greater or equal than compareTo parameter,
 * throw an error if value and compareTo aren't number or empty
 */
export function isGreaterThan(value: any, compareTo:any):any{
    if(notEmpty(value) && notEmpty(compareTo)){
        if(isNumber(value) && isNumber(compareTo)){
            if(value >= compareTo)return true;
            return false;
        }
        throw new customError('isNumber_Error', 'a value is not a number: value = ' + value + " compareTo= " + compareTo);
    }
    throw new customError('isEmpty_Error', 'a value is Empty: value = ' + value + " compareTo= " + compareTo);

}
/**
 * isInRange
 * @param value  value to test
 * @param min min value to compare value parameter
 * @param max max value to compare value parameter
 * @return true if value is less or equal than max parameter and greater or equal than min parameter,
 * throw an error if value, max or min aren't number or empty
 * return false if value is not between min and max or if value or min or max is empty
 */
export function isInRange(value: any, min:any, max: any):boolean{
    try {
        if (isGreaterThan(value, min) && isLessThan(value, max))return true;
        return false;
    }catch(error){
        if(error.name =='isEmpty_Error')throw new customError('isEmpty_Error', 'a value is Empty: value = ' + value + " min= " + min + " max= " + max);
        if(error.name =='isNumber_Error')throw new customError('isNumber_Error', 'a value is Empty: value = ' + value + " min= " + min + " max= " + max);
    }

}
/**
 * isOutRange
 * @param value  value to test
 * @param min min value to compare value parameter
 * @param max max value to compare value parameter
 * @return true if value is greater than max parameter and less than min parameter or if value/min/max is empty
 * throw an error if value, max or min aren't number or empty
 * return false if value is between min and max
 */
export function isOutRange(value: any, min:any, max:any):boolean{
        if(isInRange(value, min, max))return false;
        return true;
}
